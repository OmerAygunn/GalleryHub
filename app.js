const express = require('express');
const app = express();
const pageRoute = require('./routes/pageRoutes')
const photoRoutes = require('./routes/photoRoute');
const userRoute = require('./routes/userRoute')
const cookieParser = require('cookie-parser')
const userMiddlewares = require('./middlewares/userMiddlewares')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2

// Template Engine with ejs 
app.set('view engine', 'ejs');

// configuration
dotenv.config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

// Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({useTempFiles:true}))

// Routes
app.use('*',userMiddlewares.checkUser)
app.use('/',pageRoute)
app.use('/photos',photoRoutes)
app.use('/users',userRoute)



// Listened Ports
const port = 3000;
app.listen(port, () => {
    console.log(`Our port is ${port}`);
});
