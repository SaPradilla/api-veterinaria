const {producto,medicamento,accesorio,tipo_medicina,tipo_accesorio} = require('../../models')

const ReadAllProducts = async(req,res)=>{
    const {page,size} = req.query
    try{
        const findProduct = await producto.findAll({
            limit: parseInt(size) ,
            offset: (parseInt(page) - 1) * parseInt(size),  
            include:[
                {
                model:medicamento, 
                include:{
                    model:tipo_medicina
                }

            },
            {
                model:accesorio,
                include:{
                    model:tipo_accesorio
                }

            }
        ]
        })
        if(findProduct.length !== 0){
            return res.status(200).json({
                msg:'Productos visualizados correctamente',
                producto: findProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Productos.',
                producto: findProduct
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los Productos',
            error:error
        })
    }
}



const ReadAllMedicine = async(req,res)=>{
    const {page,size} = req.query
    try{
        const findProduct = await producto.findAll({
            limit: parseInt(size) ,
            offset: (parseInt(page) - 1) * parseInt(size),  
            include:[
                {
                model:medicamento, 
                include:{
                    model:tipo_medicina
                }

            }],
            where:{
                accesorioId: null
            }
        })
        if(findProduct.length !== 0){
            return res.status(200).json({
                msg:'Productos visualizados correctamente',
                productos: findProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Productos.',
                productos: findProduct
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los Productos',
            error:error
        })
    }
}



const ReadAllAccesory = async(req,res)=>{
    const {page,size} = req.query
    try{
        const findProduct = await producto.findAll({
            limit: parseInt(size) ,
            offset: (parseInt(page) - 1) * parseInt(size),  
            include:[
                {
                    model:accesorio,
                    include:{
                        model:tipo_accesorio
                    }
    
                }
            ],
            where:{
                medicamentoId: null
            }
        })
        if(findProduct.length !== 0){
            return res.status(200).json({
                msg:'Productos visualizados correctamente',
                productos: findProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Productos.',
                productos: findProduct
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los Productos',
            error:error
        })
    }
}


module.exports = {ReadAllProducts,ReadAllMedicine,ReadAllAccesory}