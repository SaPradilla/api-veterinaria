const {solicitud_cita,cliente,servicio} = require('../../models')

const readAll = async(req,res)=>{

    try {
        const solicitudes = await solicitud_cita.findAll({
            include:[
                {
                    model:cliente, 
                },
                {
                    model:servicio
                }
            ], 
            where:{
                isAprobada: false
            }
        })
        if(solicitudes.length === 0){
            return res.status(404).json({
                msg:'No hay solicitudes'
            })
        }    
        return res.status(200).json({
            msg:'Solicituedes Visualizadas Correctamente',
            solicitudes:solicitudes
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al visualizar las solicituedes',
            error: error
        })
    }
}
module.exports = readAll

