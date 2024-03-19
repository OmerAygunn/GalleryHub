exports.getIndexPage = (req,res) => {
    res.render('index',{
        pageName:'index'

    })
}

exports.getAboutPage = (req,res)=> {
    res.render('about',{
        pageName:'about'

    })
}
exports.getLoginPage = (req,res)=> {
    res.render('login',{
        pageName:'login'

    })
}

exports.getRegisterspage = (req,res)=> {
    res.render('register',{
        pageName:'register'

    })
}


