const express = require('express')
const router = express.Router()

const CreateUser = require('../../controllers/CreateUserController')
const CreatePet = require('../../controllers/CreatePetProfileController')
const CreateService = require('../../controllers/CreateServicesController')
const CreateClient = require('../../controllers/CreateClientController')
const CreateMedicalAppointment = require('../../controllers/CreateMedicalAppointment')
const CreateSurgery = require('../../controllers/CreateSurgeryController')
const CreateClinicalHistory = require('../../controllers/CreateClinicalHistory')
const CreateTracking = require('../../controllers/CreateTrackingController')
const CreateProduct = require('../../controllers/CreateProductController')
const CreateSaleProduct = require('../../controllers/CreateProductSaleController')
const CreateSaleService = require('../../controllers/CreateServiceSaleController')
const CreatePqr = require('../../controllers/CreatePQRController')

const ReadIdUsers = require('../../controllers/ReadIdUserController')
const ReadAllUsers = require('../../controllers/ReadAllUserController')
const ReadPetProfile = require('../../controllers/ReadPetProfileController')
const ReadClient = require('../../controllers/ReadClienteController')
const ReadMedicalAppointment = require('../../controllers/ReadMedicalAppointment')
const ReadSurgery = require('../../controllers/ReadSurgeryController')
const ReadSales = require('../../controllers/ReadSalesController')
const ReadProduct = require('../../controllers/ReadProductController')
const ReadService = require('../../controllers/ReadServicesController')
const ReadPqr = require('../../controllers/ReadPQRController')

const UpdateClient = require('../../controllers/UpdateClientController')
const UpdateClinicalHistory = require('../../controllers/UpdateClinicalHistoryController')
const UpdateMedicalAppointment = require('../../controllers/UpdateMedicalAppointmentController')
const UpdatePetProfileController = require('../../controllers/UpdatePetProfileController')
const UpdatePQR = require('../../controllers/UpdatePQRController')
const UpdateProduct = require('../../controllers/UpdateProductController')
const UpdateSaleProduct = require('../../controllers/UpdateProductSaleController')
const UpdateServiceSale = require('../../controllers/UpdateServiceSaleController')
const UpdateService = require('../../controllers/UpdateServicesController')
const UpdateSurgery = require('../../controllers/UpdateSurgeryController')
const UpdateUser = require('../../controllers/UpdateUserController')


router  
    // Crear
    .post('/register/user',CreateUser)  
    .post('/register/pet',CreatePet)
    .post('/register/client',CreateClient)
    .post('/register/service',CreateService)
    .post('/register/medical-appointment',CreateMedicalAppointment)
    .post('/register/surgery',CreateSurgery)
    .post('/register/clinical-history',CreateClinicalHistory)
    .post('/register/tracking',CreateTracking)
    .post('/register/product',CreateProduct)
    .post('/register/sales/product',CreateSaleProduct)
    .post('/register/sales/service',CreateSaleService)
    .post('/register/pqr',CreatePqr)

    // Visualizar
    .get('/list/pet/:id',ReadPetProfile.ReadIdPetProfile)
    .get('/list/client/:id',ReadClient.ReadIdClient)
    .get('/list/medical-appointment/:id',ReadMedicalAppointment.ReadIdMedicalAppointment)
    .get('/list/surgery/:id',ReadSurgery.ReadIdSurgery)
    .get('/list/sales/product/:id',ReadSales.ReadIdProductSale)
    .get('/list/sales/service/:id',ReadSales.ReadIdServiceSale)
    .get('/list/service/:id',ReadService.ReadIdService)
    .get('/list/product/:id',ReadProduct.ReadIdProduct)
    .get('/list/pqr/:id',ReadPqr.ReadIdPQR)
    .get('/list/:id',ReadIdUsers.ReadIdUser)
    .get('/list/medical/:id',ReadIdUsers.ReadIdMedical)
    .get('/list/auxiliary/:id',ReadIdUsers.ReadIdAuxiliaries)
    .get('/list/receptionist/:id',ReadIdUsers.ReadIdReceptionists)

    // Modificar 
    .put('/edit/user/:id',UpdateUser)
    .put('/edit/pet/:id',UpdatePetProfileController)
    .put('/edit/client/:id',UpdateClient)
    .put('/edit/medical-appointment/:id',UpdateMedicalAppointment)
    .put('/edit/surgery/:id',UpdateSurgery)
    .put('/edit/sale/product/:id',UpdateSaleProduct)
    .put('/edit/sale/service/:id',UpdateServiceSale)
    .put('/edit/service/:id',UpdateService)
    .put('/edit/product/:id',UpdateProduct)
    .put('/edit/pqr/:id',UpdatePQR)
    .put('/edit/clinical-history/:id',UpdateClinicalHistory)

    // Listar
    .get('/list/medicals',ReadAllUsers.ReadAllMedical)
    .get('/list/auxiliaries',ReadAllUsers.ReadAllAuxiliaries)
    .get('/list/receptionists',ReadAllUsers.ReadAllReceptionists)
    .get('/list/all',ReadAllUsers.ReadAllUser)
    .get('/list/pet/all',ReadPetProfile.ReadAllPetProfile)
    .get('/list/client/all',ReadClient.ReadAllClient)
    .get('/list/medical-appointment/all',ReadMedicalAppointment.ReadAllMedicalAppointment)
    .get('/list/surgery/all',ReadSurgery.ReadAllSurgery)
    .get('/list/sales/product/all',ReadSales.ReadAllProductSale)
    .get('/list/sales/service/all',ReadSales.ReadAllServiceSale)
    .get('/list/product/all',ReadProduct.ReadAllProduct)
    .get('/list/service/all',ReadService.ReadAllService)
    .get('/list/pqr/all',ReadPqr.ReadAllPQR)
    

module.exports = router