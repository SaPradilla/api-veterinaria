const {solicitud_cita} = require('../../models')

const Create = async(req,res)=>{
    const {clienteId,tipo_cita,fecha} = req.body
    try {

        const newRequest = await solicitud_cita.create(
            {
                clienteId,
                tipo_cita,
                fecha
            }
        )
        return res.status(200).json({
            msg:'Solicitud registrada correctamente.',
            solicitud:newRequest
        })

    } catch (error) {
        return res.status(500).json({
            msg:'Error al crear crear la solicitud',
            error: error
        })
    }
}

const approveRequest = async(req,res)=>{
    const {id} = req.params
    try {
        const findRequest = await solicitud_cita.findOne({
            where:{
                id:id
            }
        })
        if(!findRequest){
            return res.status(404).json({
                msg:'No se encontro la solicitud'
            })
        }
        await solicitud_cita.update({
            isAprobada:true
        },{
            where:{
                id:id
            }
        })

        return res.status(200).json({
            msg:'Se ha aprobado la solicitud'
        })
    } catch (error) {
        return res.status(500).json({
            msg:'Error al crear crear la solicitud',
            error: error
        })
    }
}
const readAll = async(req,res)=>{

    try {
        const solicitudes = await solicitud_cita.findAll()
        if(solicitud_cita.length === 0){
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
module.exports = {
    Create,
    approveRequest,
    readAll

}