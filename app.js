const express = require('express');
const app = express();
const pageRoute = require('./routes/pageRoutes')
const photoRoutes = require('./routes/photoRoute');
const userRoute = require('./routes/userRoute')
const cookieParser = require('cookie-parser')
const userMiddlewares = require('./middlewares/userMiddlewares')

const dotenv = require('dotenv')
// Template Engine with ejs 
app.set('view engine', 'ejs');

dotenv.config()
app.use(cookieParser())


// Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())


app.get('*',userMiddlewares.checkUser)
app.use('/',pageRoute)
app.use('/photos',photoRoutes)
app.use('/users',userRoute)

const port = 3000;
app.listen(port, () => {
    console.log(`Our port is ${port}`);
});
