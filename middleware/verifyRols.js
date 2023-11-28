const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.headers["auth-token"]
        console.log(req.user)

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


const verifyTokenAndRoles = (requiredRoles) => {
    return (req, res, next) => {
        const token = req.headers["auth-token"];
        if (!token) return res.status(403).json({ message: 'Token no proporcionado' });

        jwt.verify(token, config.TOKEN_KEY, (err, decoded) => {
            if (err) return res.status(500).json({ message: 'Error al autenticar el token' });
            // Verifica los roles del usuario
            const userRoles = decoded.user
            console.log(decoded.employeeExists)

            // const hasRequiredRoles = requiredRoles.every(role => userRoles.includes(role));

            // if (!hasRequiredRoles) {
            //     return res.status(403).json({ message: 'No tienes permisos para acceder a esta ruta' });
            // }

            // Guarda el usuario en la solicitud para usarlo en rutas protegidas
            req.user = decoded.user;
            next();
        });
    };
};
module.exports = {verifyToken,verifyTokenAndRoles} 