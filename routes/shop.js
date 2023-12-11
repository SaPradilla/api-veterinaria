const express = require('express')
const router = express.Router()
const app = express()
const Routes = [
    {path:'/list/products', controller: require('../controllers/ReadControllers/ReadAllProductsController').ReadAllProducts , method:'get' },
    {path:'/list/products/medicines', controller: require('../controllers/ReadControllers/ReadAllProductsController').ReadAllMedicine , method:'get' },
    {path:'/list/products/accesories', controller: require('../controllers/ReadControllers/ReadAllProductsController').ReadAllAccesory , method:'get' },
]

//En rutador
Routes.forEach( (route) =>{
    router[route.method](route.path, route.controller)
})
module.exports = router