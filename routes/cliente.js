const express = require('express')
const router = express.Router()
const app = express()
const Routes = [
    //Create

    {path:'/register/pqr', controller: require('../controllers/CreateControllers/CreatePQRController') , method:'post' },
    {path:'/register/client', controller: require('../controllers/CreateControllers/CreateClientController') , method:'post' },
   
    // Read
    {path:'/list/employee/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdEmployee , method:'get' },
    {path:'/list/medical/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdMedical , method:'get' },
    {path:'/list/auxiliary/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdAuxiliaries , method:'get' } ,
    {path:'/list/receptionist/:id', controller: require('../controllers/ReadControllers/ReadIdEmployeeController').ReadIdReceptionists , method:'get' },
    {path:'/list/pet/:id', controller: require('../controllers/ReadControllers/ReadPetController').ReadIdPetProfile , method:'get' },
    {path:'/list/client/:id', controller: require('../controllers/ReadControllers/ReadClienteController').ReadIdClient , method:'get' },
    {path:'/list/medical-appointment/:id', controller: require('../controllers/ReadControllers/ReadMedicalAppointment').ReadIdMedicalAppointment , method:'get' },
    {path:'/list/surgery/:id', controller: require('../controllers/ReadControllers/ReadSurgeryController').ReadIdSurgery , method:'get' },
    {path:'/list/product/:id', controller: require('../controllers/ReadControllers/ReadMedicineController').ReadIdProduct , method:'get' },
    {path:'/list/service/:id', controller: require('../controllers/ReadControllers/ReadServicesController').ReadIdService , method:'get' },
    {path:'/list/pqr/:id', controller: require('../controllers/ReadControllers/ReadPQRController').ReadIdPQR,method:'get' },

    //Update
    {path:'/edit/client/:id', controller: require('../controllers/UpdateControllers/UpdateClientController') , method:'put' },
    
    {path:'/edit/pqr/:id', controller: require('../controllers/UpdateControllers/UpdatePQRController'), method:'put' },

    // List
    {path:'/list/employees/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllEmployees , method:'get' },
    {path:'/list/medicals/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllMedical , method:'get' },
    {path:'/list/auxiliaries/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllAuxiliaries, method:'get' },
    {path:'/list/receptionists/all', controller: require('../controllers/ReadControllers/ReadAllEmployeeController').ReadAllReceptionists, method:'get' },
    {path:'/list/pet/all', controller: require('../controllers/ReadControllers/ReadPetController').ReadIdPetProfile, method:'get' },
    {path:'/list/client/all', controller: require('../controllers/ReadControllers/ReadClienteController').ReadAllClient, method:'get' },
    {path:'/list/medical-appointment/all', controller: require('../controllers/ReadControllers/ReadMedicalAppointment').ReadAllMedicalAppointment, method:'get' },
    {path:'/list/surgery/all', controller: require('../controllers/ReadControllers/ReadSurgeryController').ReadAllSurgery, method:'get' },
   
    {path:'/list/product/all', controller: require('../controllers/ReadControllers/ReadMedicineController').ReadIdProduct, method:'get' },
    {path:'/list/service/all', controller: require('../controllers/ReadControllers/ReadServicesController').ReadIdService, method:'get' },
    {path:'/list/pqr/all', controller: require('../controllers/ReadControllers/ReadPQRController').ReadAllPQR, method:'get' },
]

//En rutador
Routes.forEach( (route) =>{
    router[route.method](route.path, route.controller)
})
module.exports = router