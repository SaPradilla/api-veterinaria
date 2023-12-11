const db = require('../../models')
const CitaMedica = db.citas_medica

const ReadAllMedicalAppointment = async(req,res)=>{
    const {page,size} = req.query
    try{
        
        const findMedical = await CitaMedica.findAll({
            limit: parseInt(size) ,
            offset: (parseInt(page) - 1) * parseInt(size),  
            include:[{
                model:db.cliente
            },{
                model:db.mascotas
            },{
                model:db.servicio
            }
        ]

        })
        if(findMedical.length !== 0){
            return res.status(200).json({
                msg:'Citas Médicas visualizadas correctamente',
                CitaMedica: findMedical
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron citas médicas'
            })
        }
    } catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar las citas médicas.',
            error:error
        })
    }
}
const ReadIdMedicalAppointment = async(req,res)=>{
    try{
        const {id} = req.params

        const findMedical = await CitaMedica.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.cliente
            },{
                model:db.mascotas
            },{
                model:db.servicio
            }
        ]

        })
        if(findMedical.length !== 0){
            return res.status(200).json({
                msg:'Cita Médica visualizadas correctamente',
                CitaMedica: findMedical
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró la cita médica'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar la cita médica',
            error:error
        })
    }
}
module.exports = {ReadAllMedicalAppointment,ReadIdMedicalAppointment}