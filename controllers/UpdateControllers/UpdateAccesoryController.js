const db = require('../../models')
const Accesorio = db.accesorio

const UpdateAccesory = async(req,res) =>{
    try{
        const {id} = req.params

        const {nombre,precio,tipo_accesorioId,descripcion} = req.body

        const updateAccesory = await Accesorio.update({
            nombre:nombre,
            precio:precio,
            tipo_accesorioId:tipo_accesorioId,
            descripcion:descripcion
        },{
            where:{
                id
            }
        })
        if(updateAccesory != 0){
            return res.status(200).json({
                msg:'Accesorio editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id del accesorio no se encontró, No se pudo editar correctamente.'
            })
        }
        
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el accesorio.',
            error: error
        })
    }
}
module.exports = UpdateAccesory