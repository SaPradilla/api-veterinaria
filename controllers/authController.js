const db = require('../models')
const Encrypt = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const Cliente = db.cliente
const Empleado = db.empleado

const singInClient = async (req, res) => {
    const { email, contrasena } = req.body
    try {

        let user = await Cliente.findOne(
            {
                where: {
                    email: email
                }
            }
        )
        if (!user) { return res.status(404).json({ msg: 'Usuario no encontrado' }) }

        const password_compared = await Encrypt.comparePassword(contrasena, user.contrasena);

        if (!password_compared) { return res.status(401).json({ msg: 'Credenciales incorrectas' }) }

        delete user.contrasena

        const token = jwt.sign(
            { user }, process.env.TOKEN_KEY, { expiresIn: "2h", }
        )
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

        let user = await Empleado.findOne(
            {
                where: {
                    email: email
                }
            }
        )
  
        if (!user) { return res.status(404).json({ msg: 'Empleado no encontrado' }) }
        if (!user.isActive) { return res.status(401).json({ msg: 'Empleado no activado' }) }

        const password_compared = await Encrypt.comparePassword(contrasena, user.contrasena);

        if (!password_compared) { return res.status(401).json({ msg: 'Credenciales incorrectas' }) }
        delete user.contrasena;

        // Agregar el rol a la información del usuario
        user.rol = user.isAdmin ? 'admin' : user.rol;

        const token = jwt.sign(
            { user }, process.env.TOKEN_KEY, { expiresIn: "2h", }
        )
        
        // Si es administrador, establecer la cookie 'isAdmin' como true
        if (user.isAdmin) {
            res.cookie('isAdmin', true, { httpOnly: true });
        }
        
        res.header('auth-token', token).json({
          msg: 'Inicio de sesión exitoso.',
          data: { token },
          rol: user.rol,
        });

    } catch (error) {
        return res.json({
            msg: 'Hubo un error al iniciar sesion',
            error
        })
    }
}


module.exports = { singInClient, singInEmployee }