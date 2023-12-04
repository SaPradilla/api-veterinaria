const db = require('../../models')
const perfilMascota = db.mascotas

const UpdatePetProfile = async(req,res) =>{
    try{
        const {id} = req.params

        const Pet = await perfilMascota.findOne({
            where:{
                id
            }
        })
        // console.log(Pet)
        if(!Pet){
            return res.status(404).json({
                msg:'No se encontró perfil de mascota.',
                user: Pet
            })
        }
        await perfilMascota.update({
            isActive: Pet.isActive ? false : true
        }, {
            where: { id }
        })

        return res.status(200).json({
            msg:`Has ${Pet.isActive ? 'Desactivado' : 'Activado'} la Mascota`,
        })

      
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el modificar el estado de la mascota',
            error: error
        })
    }
}
module.exports = UpdatePetProfile