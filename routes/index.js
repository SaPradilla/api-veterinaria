const express = require('express')
const router = express.Router()
const verified = require('../middleware/verifyRols')

const admin = require('./admin')
const clientes = require('./cliente')
const medico = require('./medico')
const recepcionista = require('./recepcionista')
const auxiliar = require('./auxiliar')
const auth = require('./auth.js')

router.use('/admin',verified.verifyTokenAndRoles(['admin']),admin)
// router.use('/clientes',verified.verifyTokenAndRoles(['admin']),admin)

router.use('/clientes',verified.verifyToken,clientes)

router.use('/medico',verified.verifyTokenAndRoles(['Médico']),medico)
router.use('/recepcionista',verified.verifyTokenAndRoles(['Auxiliar']),recepcionista)
// router.use('/auxiliar',verified.VerifyAuxiliar,auxiliar)
router.use('/auth',auth)

module.exports = router
