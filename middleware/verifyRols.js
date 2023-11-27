const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.headers["auth-token"]
    if (!token) {
        return res.status(401).json({ error: "Acceso denegado" })
    }
    try {
        const verified = jwt.verify(token, config.TOKEN_KEY)
        req.user = verified
        next()
    } catch (err) {
        return res.status(401).json("token no es válido")
    }
}


const VerifyRecepcionista = (req, res, next) => {

    verifyToken(req, res, next, () => {

        if (req.user && req.user.role === 'Recepcionista') {
            next()
        } else {
            return res.status(403).json({ error: "Acceso denegado. No eres un usuario recepcionista" })
        }
    })
}
const VerifyMedico = (req, res, next) => {

    verifyToken(req, res, next, () => {

        if (req.user && req.user.role === 'Médico') {
            next()
        } else {
            return res.status(403).json({ error: "Acceso denegado. No eres un usuario médico" })
        }
    })
}
const VerifyAuxiliar = (req, res, next) => {

    verifyToken(req, res, next, () => {

        if (req.user && req.user.role === 'Auxiliar') {
            next()
        } else {
            return res.status(403).json({ error: "Acceso denegado. No eres un usuario Auxiliar" })
        }
    })
}

const VerifyAdmin = (req, res, next) => {

    verifyToken(req, res, next, () => {

        if (req.user && req.user.role === 'admin') {
            next()
        } else {
            return res.status(403).json({ error: "Acceso denegado. Permiso de administrador requerido." });

        }
    })
}
module.exports = {VerifyRecepcionista,VerifyAuxiliar,VerifyMedico,VerifyAdmin,verifyToken} 