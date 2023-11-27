const express = require('express')
const router = express.Router()
const app = express()
const Routes = [
    //Create
    {path:'/login/employee', controller: require('../controllers/authController').singInEmployee,method:'post' },
    
    {path:'/register/pet', controller: require('../controllers/CreateControllers/CreatePetController') , method:'post' },
    {path:'/list/pet/all', controller: require('../controllers/ReadControllers/ReadPetController').ReadIdPetProfile, method:'get' },

    {path:'/register/client', controller: require('../controllers/CreateControllers/CreateClientController') , method:'post' },
    {path:'/list/client/all', controller: require('../controllers/ReadControllers/ReadClienteController').ReadAllClient, method:'get' },
    {path:'/list/client/:id', controller: require('../controllers/ReadControllers/ReadClienteController').ReadIdClient , method:'get' },
    

    {path:'/list/employee/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdEmployee , method:'get' },
    {path:'/list/medical/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdMedical , method:'get' },
    {path:'/list/auxiliary/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdAuxiliaries , method:'get' } ,
    {path:'/edit/employee/:id', controller: require('../controllers/UpdateControllers/UpdateEmployeeController'), method:'put' },


    {path:'/register/service', controller: require('../controllers/CreateControllers/CreateServicesController') , method:'post' },
    {path:'/list/service/:id', controller: require('../controllers/ReadControllers/ReadServicesController').ReadIdService , method:'get' },
    {path:'/list/service/all', controller: require('../controllers/ReadControllers/ReadServicesController').ReadIdService, method:'get' },
    {path:'/edit/service/:id', controller: require('../controllers/UpdateControllers/UpdateServicesController'), method:'put' },


    {path:'/register/diagnostico', controller: require('../controllers/CreateControllers/CreateDiagnosis') , method:'post' },

    // Read
    {path:'/list/receptionist/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdReceptionists , method:'get' },
    {path:'/list/pet/:id', controller: require('../controllers/ReadControllers/ReadPetController').ReadIdPetProfile , method:'get' },
    {path:'/list/medical-appointment/:id', controller: require('../controllers/ReadControllers/ReadMedicalAppointment').ReadIdMedicalAppointment , method:'get' },
    {path:'/list/surgery/:id', controller: require('../controllers/ReadControllers/ReadSurgeryController').ReadIdSurgery , method:'get' },
    {path:'/list/sales/product/:id', controller: require('../controllers/ReadControllers/ReadSalesController').ReadIdProductSale , method:'get' },
    {path:'/list/sales/service/:id', controller: require('../controllers/ReadControllers/ReadSalesController').ReadIdServiceSale , method:'get' },
    {path:'/list/product/:id', controller: require('../controllers/ReadControllers/ReadMedicineController').ReadIdProduct , method:'get' },
    {path:'/list/pqr/:id', controller: require('../controllers/ReadControllers/ReadPQRController').ReadIdPQR,method:'get' },
    


    // List
    {path:'/list/employees/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllEmployees , method:'get' },
    {path:'/list/medicals/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllMedical , method:'get' },
    {path:'/list/auxiliaries/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllAuxiliaries, method:'get' },
    {path:'/list/receptionists/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllReceptionists, method:'get' },
    {path:'/list/medical-appointment/all', controller: require('../controllers/ReadControllers/ReadMedicalAppointment').ReadAllMedicalAppointment, method:'get' },
    {path:'/list/surgery/all', controller: require('../controllers/ReadControllers/ReadSurgeryController').ReadAllSurgery, method:'get' },
    {path:'/list/sales/product/all', controller: require('../controllers/ReadControllers/ReadSalesController').ReadAllProductSale, method:'get' },
    {path:'/list/sales/service/all', controller: require('../controllers/ReadControllers/ReadSalesController').ReadAllServiceSale, method:'get' },
    {path:'/list/product/all', controller: require('../controllers/ReadControllers/ReadMedicineController').ReadIdProduct, method:'get' },
    {path:'/list/pqr/all', controller: require('../controllers/ReadControllers/ReadPQRController').ReadAllPQR, method:'get' },

]

//En rutador
Routes.forEach( (route) =>{
    router[route.method](route.path, route.controller)
})
module.exports = router