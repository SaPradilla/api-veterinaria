const {tipo_accesorio,tipo_medicina} = require('../../models')

const readAllTypeAccesory = async(req,res)=>{
    try {

        const TypeAccesories = await tipo_accesorio.findAll()

        if(TypeAccesories.length !== 0){
            return res.status(200).json({
                msg:'Tipo de accesorio visualizado correctamente',
                tipo_accesorios: TypeAccesories
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron tipos de accesorios.'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:'Hubo un error al visualizar los tipos de accesorios.',
            error:error
        })
    }
}


const readAllTypeMedicine = async(req,res)=>{
    try {

        const TypeMedicines= await tipo_medicina.findAll()

        if(TypeMedicines.length !== 0){
            return res.status(200).json({
                msg:'Tipo de medicina visualizado correctamente',
                tipo_medicina: TypeMedicines
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron tipos de medicina.'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:'Hubo un error al visualizar los tipos de medicina.',
            error:error
        })
    }
}


module.exports = {readAllTypeAccesory,readAllTypeMedicine}