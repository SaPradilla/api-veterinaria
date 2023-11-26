const db = require('../models')
const Encrypt = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const Cliente = db.cliente
const Empleado = db.empleado

const singInClient = async (req, res) => {
    const { email, contrasena } = req.body
    try {

        const clientExists = await Cliente.findOne(
            {
                where: {
                    email: email
                }
            }
        )
        if (!clientExists) { return res.status(404).json({ msg: 'Usuario no encontrado' }) }

        const password_compared = await Encrypt.comparePassword(contrasena, clientExists.contrasena);

        if (!password_compared) { return res.status(401).json({ msg: 'Credenciales incorrectas' }) }

        const token = jwt.sign(
            { clientExists }, process.env.TOKEN_KEY, { expiresIn: "2h", }
        )

        // hace una copia del objecto y elimina la password para mostrar en la respuesta
        const user = { ...clientExists }
        delete user.dataValues.contrasena

        return res.header('auth-token', token).json({
            msg: 'Inicio de sesion exitoso.',
            data: { token }
        })


    } catch (error) {
        return res.json({
            msg: 'Hubo un error al iniciar sesion',
            error
        })
    }
}

const singInEmployee = async (req, res) => {
    const { email, contrasena } = req.body
    try {

        const employeeExists = await Empleado.findOne(
            {
                where: {
                    email: email
                }
            }
        )
  
        if (!employeeExists) { return res.status(404).json({ msg: 'Empleado no encontrado' }) }
        if (!employeeExists.isActive) { return res.status(401).json({ msg: 'Empleado no activado' }) }

        const password_compared = await Encrypt.comparePassword(contrasena, employeeExists.contrasena);

        if (!password_compared) { return res.status(401).json({ msg: 'Credenciales incorrectas' }) }

        const token = jwt.sign(
            { employeeExists }, process.env.TOKEN_KEY, { expiresIn: "2h", }
        )
        const user = { ...employeeExists }
        delete user.dataValues.contrasena

        res.cookie('isAdmin', user.dataValues.isAdmin, { httpOnly: true });
        
        return res.header('auth-token', token).json({
            msg: 'Inicio de sesion exitoso.',
            data: { token },
            isAdmin: user.dataValues.isAdmin ? true : false,
            rol: user.dataValues.rol
        })


    } catch (error) {
        return res.json({
            msg: 'Hubo un error al iniciar sesion',
            error
        })
    }
}


module.exports = { singInClient, singInEmployee }