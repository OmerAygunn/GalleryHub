const User = require("../models/userModels")
const jwt = require('jsonwebtoken');


exports.checkUser = (req,res,next) => {
    try{
        const token= req.cookies.jsonwebtoken    // cookie üzerinden tokenıma ulaştım
        if(token){
            jwt.verify(token,process.env.Json_Secret_key,async (err,decodeToken) => {
                if(err){
                    res.redirect('/login')
                    res.locals.user = null
                    next()
                }
                const user = await User.findById(decodeToken.userId)
                res.locals.user = user
                next()
            })
        }
        else{
            res.locals.user = null
            next()
        }
    }
    catch (err) {
        return res.status(401).json({
            status: 'fail',
            error: "Invalid token"
        });
    }
}

exports.authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.jsonwebtoken
        if(token){
            jwt.verify(token,process.env.Json_Secret_key,(err)=>{ // burdada oluşturup  cookieye kaydettiğin toeknı verify edilir
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
