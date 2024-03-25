const User = require("../models/userModels")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Photo = require("../models/photoModels");


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
            const token =  createToken(user._id)   // token calling function ile functionu çağırıyoruz token oluşturma işlemini aktif ediyoruz
            res.cookie("jsonwebtoken",token,{    // Oluşturulan token cookie ye kaydedildi senin verdiğin isimle
                httpOnly:true,
                maxAge:1000*60*60*24    // 1day
            })
            res.redirect('/users/dashboard')
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
        process.env.Json_Secret_key,
        {expiresIn:'1d'}
        )
}  // Token yapısı initalize edildi SIGN metodu ile

exports.getDashboard = async(req,res)=> {
    const photos = await Photo.find({user:res.locals.user._id})
    res.render('dashboard',{
        pageName:'dashboard',
        photos

    })
}
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({_id:{$ne: res.locals.user._id }});
        res.render('users', {
            pageName: 'users',
            users
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
};
exports.getUser = async(req,res) => {
    try{
        const user = await User.findOne({slug:req.params.slug})
        const photos = await Photo.find({ user: res.locals.user._id });
        res.render('user',{
            user,
            photos,
            pageName:'user'
        })
    }catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
}
