const express = require('express')
const router = express.Router()
const app = express()
const Routes = [
    //login
    {path:'/login/employee', controller: require('../controllers/authController').singInEmployee,method:'post' },
    {path:'/login/client', controller: require('../controllers/authController').singInClient,method:'post' },    
]

//En rutador
Routes.forEach( (route) =>{
    router[route.method](route.path, route.controller)
})
module.exports = router