const db = require('../../models')
const perfilMascota = db.mascotas

const ReadAllPetProfile = async(req,res)=>{
    const {page,size} = req.query
    console.log(page)
    try{
        const Pets = await perfilMascota.findAll({
            limit: parseInt(size) ,
            offset: (parseInt(page) - 1) * parseInt(size), 
            include:[{
                model:db.cliente
            },{
                model:db.citas_medica,
                include:[{
                    model:db.servicio
                },{
                    model:db.empleado
                }]
            },{
                model:db.historias_clinica
            },{
                model:db.cirugia
            }
        ]})
        if(Pets.length !== 0){
            return res.status(200).json({
                msg:'Perfiles de mascotas visualizados correctamente',
                Mascotas: Pets
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron perfiles de mascota.'
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los perfiles de las mascotas.',
            errorName:error.name,
            error:error
        })
    }
}
const ReadIdPetProfile = async(req,res)=>{
    // try{
        const {id} = req.params

        const Pet = await perfilMascota.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.cliente
            },{
                model:db.citas_medica,
                include:{
                    model:db.servicio
                }
            },{
                model:db.historias_clinica
            },{
                model:db.cirugia
            }
        ]

        })
        if(Pet.length !== 0){
            return res.status(200).json({
                msg:'Perfil de mascota visualizado correctamente',
                PerfilMascota: Pet
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró perfil de mascota.',
                user: Pet
            })
        }
    // }catch(error){
    //     return res.status(500).json({
    //         msg:'Hubo un error al visualizar los perfiles de las mascotas.',
    //         errorName:error.name,
    //         error:error
    //     })
    // }
}
module.exports = {ReadAllPetProfile,ReadIdPetProfile}