const User = require("../models/userModels")
const jwt = require('jsonwebtoken');


exports.authenticateToken = async(req, res, next) => {
    try {
        const token = req.cookies.jsonwebtoken
        if(token){
            jwt.verify(token,process.env.Json_Secret_key,(err)=>{
                if(err){
                    res.redirect('/login')
                }
                next()
            })
        }
        else{
            res.redirect('/login')
        }
    } catch (err) {
        return res.status(401).json({
            status: 'fail',
            error: "Invalid token"
        });
    }
};
