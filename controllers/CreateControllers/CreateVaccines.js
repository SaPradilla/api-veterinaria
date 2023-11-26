const db = require('../../models')
const Vacuna = db.vacunas

const CreateVacuna = async(req,res) =>{
    try{
        const {nombre} = req.body
        const newVacuna = await Vacuna.create({
            nombre:nombre
  
        })
        return res.status(200).json({
            msg:'Vacuna registrada correctamente.',
            Vacuna:newVacuna
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear crear la vacuna',
            error: error
        })
    }
}
module.exports = CreateVacuna