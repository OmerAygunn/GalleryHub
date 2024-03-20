const User = require("../models/userModels")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.createUser = async(req,res)=>{
    try{
        const user = await User.create(req.body)
        res.render('login',{
            user,
            pageName:'login'
        })

    }catch(err){
        res.status(400).json({
            status:'fail',
            err
     })
    }
}

exports.loginUser = async(req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user){
        const same = bcrypt.compare(password,user.password)
        if(same){
            res.status(200).json({
                user,
                token:createToken(user._id)
            })
        }
        else{
            return res.staü(401).json({
                status:'fail',
                error:"This password is wrong"
            })
        }
    }
    else{
        return res.status(401).json({
            status:'fail',
            error:"There is no such user"
        })
    }
}

const createToken = (userId) => {
    return jwt.sign(
        {userId},
        "gallery_hub",
        {expiresIn:'1d'}
        )
}

