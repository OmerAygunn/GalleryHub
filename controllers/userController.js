const User = require("../models/userModels")

exports.createUser = async(req,res)=>{
    try{
        const user = await User.create(req.body)
        res.redirect('/login')

    }catch(err){
        res.status(400).json({
            status:'fail',
            err
     })
    }
}
