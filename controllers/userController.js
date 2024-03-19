const User = require("../models/userModels")
const bcrypt = require('bcrypt');


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
            res.status(200).send("You are logged in")
        }
        else{
            return res.staü(401).json({
                status:'fail',
                error:"This password is wrong"
            })
        }
    }
    else{
        return res.staü(401).json({
            status:'fail',
            error:"There is no such user"
        })
    }
}
