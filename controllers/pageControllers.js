const User = require('../models/userModels')

exports.getIndexPage = (req,res) => {
    console.log(req.user);
    res.render('index',{
        pageName:'index'

    })
}

exports.getAboutPage = (req,res)=> {
    res.render('about',{
        pageName:'about'

    })
}
exports.getLoginPage = async (req,res)=> {
    const user = await User.find()
    res.render('login',{
        pageName:'login',
        user


    })
}

exports.getRegisterspage = (req,res)=> {
    res.render('register',{
        pageName:'register'

    })
}
exports.getLogoutPage =  (req, res) => {
    res.cookie('jsonwebtoken','',{
        maxAge:1
    })
    res.redirect('/'); 
};


