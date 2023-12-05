const db = require('../../models')
const Empleado = db.empleado

const UpdateEmploye = async(req,res) =>{
    // try{
        const {id} = req.params

        const findEmpleado = await Empleado.findOne({
            where:{
                id
            }
        })
        if(!findEmpleado){
            return res.status(404).json({
                msg:'No se encontró el empleado',
                user: Empleado
            })
        }
        await Empleado.update({
            isActive: findEmpleado.isActive ? false : true
        }, {
            where: { id }
        })

        return res.status(200).json({
            msg:`Has ${findEmpleado.isActive ? 'Desactivado' : 'Activado'} el empleado`,
        })

      
    // }catch(error){
    //     return res.status(500).json({
    //         msg:'Error al modificar el estado del empleado',
    //         error: error
    //     })
    // }
}
module.exports = UpdateEmploye