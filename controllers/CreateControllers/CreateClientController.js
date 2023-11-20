const db = require('../../models')
const Cliente = db.cliente
const Encrypt = require('../../middleware/auth')

const CreateClient = async(req,res) =>{
    try{
        const {nombre,apellido,numero_celular,email,direccion} = req.body
        const hash_contrasena = await Encrypt.cryptPassword(req.body.contrasena)
        const newClient = await Cliente.create({
            nombre:nombre,
            apellido:apellido,
            numero_celular:numero_celular,
            email:email,
            direccion:direccion,
            contrasena:hash_contrasena

        })
        return res.status(200).json({
            msg:'Registrado correctamente.',
            Cliente:newClient
        })
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al registrarse',
            error: error
        })
    }
}
module.exports = CreateClient