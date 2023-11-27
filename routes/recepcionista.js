const express = require('express')
const router = express.Router()
const app = express()
const Routes = [
    // Mascota
    {path:'/register/pet', controller: require('../controllers/CreateControllers/CreatePetController') , method:'post' },
    {path:'/list/pet/all', controller: require('../controllers/ReadControllers/ReadPetController').ReadIdPetProfile, method:'get' },
    {path:'/edit/pet/:id', controller: require('../controllers/UpdateControllers/UpdatePetController'), method:'put' },
    
    // Cliente
    {path:'/register/client', controller: require('../controllers/CreateControllers/CreateClientController') , method:'post' },
    {path:'/list/client/all', controller: require('../controllers/ReadControllers/ReadClienteController').ReadAllClient, method:'get' },
    {path:'/list/client/:id', controller: require('../controllers/ReadControllers/ReadClienteController').ReadIdClient , method:'get' },
    {path:'/edit/client/:id', controller: require('../controllers/UpdateControllers/UpdateClientController') , method:'put' },
    
    // Cita medica
    {path:'/register/medical-appointment', controller: require('../controllers/CreateControllers/CreateMedicalAppointment') , method:'post' },
    {path:'/list/medical-appointment/:id', controller: require('../controllers/ReadControllers/ReadMedicalAppointment').ReadIdMedicalAppointment , method:'get' },
    {path:'/edit/medical-appointment/:id', controller: require('../controllers/UpdateControllers/UpdateMedicalAppointmentController'), method:'put' },
    
    // Cirugia
    {path:'/register/surgery', controller: require('../controllers/CreateControllers/CreateSurgeryController') , method:'post'  },
    {path:'/list/surgery/:id', controller: require('../controllers/ReadControllers/ReadSurgeryController').ReadIdSurgery , method:'get' },
    {path:'/edit/surgery/:id', controller: require('../controllers/UpdateControllers/UpdateSurgeryController'), method:'put' },
    {path:'/list/surgery/all', controller: require('../controllers/ReadControllers/ReadSurgeryController').ReadAllSurgery, method:'get' },

    // Historia clinica
    {path:'/register/clinical-history', controller: require('../controllers/CreateControllers/CreateClinicalHistory') , method:'post' },
    {path:'/list/medical-appointment/:id', controller: require('../controllers/ReadControllers/ReadMedicalAppointment').ReadIdMedicalAppointment , method:'get' },
    {path:'/edit/clinical-history/:id', controller: require('../controllers/UpdateControllers/UpdateClinicalHistoryController') , method:'put' },
    
    // Producto

    {path:'/register/product/medicine', controller: require('../controllers/CreateControllers/CreateMedicineController') , method:'post' },
    {path:'/register/product/accessory', controller: require('../controllers/CreateControllers/CreateAccessoryController') , method:'post' },
    
    {path:'/register/type-medicine', controller: require('../controllers/CreateControllers/CreateTypeMedicineController') , method:'post' },
    {path:'/register/type-accessory', controller: require('../controllers/CreateControllers/CreateTypeAccessoryController') , method:'post' },
    {path:'/edit/product/medicine/:id', controller: require('../controllers/UpdateControllers/UpdateMedicineController'), method:'put' },
    {path:'/edit/product/accesory/:id', controller: require('../controllers/UpdateControllers/UpdateAccesoryController'), method:'put' },
    
    {path:'/list/product/:id', controller: require('../controllers/ReadControllers/ReadMedicineController').ReadIdProduct , method:'get' },
    {path:'/list/product/all', controller: require('../controllers/ReadControllers/ReadMedicineController').ReadIdProduct, method:'get' },

    {path:'/list/employee/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdEmployee , method:'get' },
    {path:'/list/medical/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdMedical , method:'get' },
    {path:'/list/auxiliary/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdAuxiliaries , method:'get' } ,
    {path:'/edit/employee/:id', controller: require('../controllers/UpdateControllers/UpdateEmployeeController'), method:'put' },


    // Ventas
    {path:'/register/sales/product', controller: require('../controllers/CreateControllers/CreateProductSaleController') , method:'post' },
    {path:'/register/sales/service', controller: require('../controllers/CreateControllers/CreateServiceSaleController') , method:'post' },
    {path:'/list/sales/product/:id', controller: require('../controllers/ReadControllers/ReadSalesController').ReadIdProductSale , method:'get' },
    {path:'/list/sales/service/:id', controller: require('../controllers/ReadControllers/ReadSalesController').ReadIdServiceSale , method:'get' },
    {path:'/edit/sale/product/:id', controller: require('../controllers/UpdateControllers/UpdateProductSaleController'), method:'put' },
    {path:'/edit/sale/service/:id', controller: require('../controllers/UpdateControllers/UpdateServiceSaleController'), method:'put' },
    {path:'/list/sales/product/all', controller: require('../controllers/ReadControllers/ReadSalesController').ReadAllProductSale, method:'get' },
    {path:'/list/sales/service/all', controller: require('../controllers/ReadControllers/ReadSalesController').ReadAllServiceSale, method:'get' },


    // Servicios
    {path:'/register/service', controller: require('../controllers/CreateControllers/CreateServicesController') , method:'post' },
    {path:'/list/service/:id', controller: require('../controllers/ReadControllers/ReadServicesController').ReadIdService , method:'get' },
    {path:'/edit/service/:id', controller: require('../controllers/UpdateControllers/UpdateServicesController'), method:'put' },
    {path:'/list/service/all', controller: require('../controllers/ReadControllers/ReadServicesController').ReadIdService, method:'get' },

    // Diagnostico
    {path:'/register/diagnostico', controller: require('../controllers/CreateControllers/CreateDiagnosis') , method:'post' },


]

//En rutador
Routes.forEach( (route) =>{
    router[route.method](route.path, route.controller)
})
module.exports = router