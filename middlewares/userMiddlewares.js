const User = require("../models/userModels")
const jwt = require('jsonwebtoken');


exports.authenticateToken = async(req, res, next) => {
    try {
        const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
        if (!token) {
            return res.status(401).json({
                status: 'fail',
                error: "Token not available"
            });
        }
        req.user = await User.findById(jwt.verify(token, "gallery_hub").userId);
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'fail',
            error: "Invalid token"
        });
    }
};
