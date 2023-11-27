const express = require('express')
const router = express.Router()
const verified = require('../middleware/verifyRols')

const admin = require('./admin')
const clientes = require('./cliente')
const medico = require('./medico')
const recepcionista = require('./recepcionista')
const auxiliar = require('./auxiliar')
const auth = require('./auth.js')
router.use('/admin',verified.VerifyAdmin,admin)

router.use('/clientes',verified.verifyToken,clientes)

router.use('/medico',verified.VerifyMedico,medico)
router.use('/recepcionista',verified.VerifyRecepcionista,recepcionista)
router.use('/auxiliar',verified.VerifyAuxiliar,auxiliar)
router.use('/auth',auth)

module.exports = router
