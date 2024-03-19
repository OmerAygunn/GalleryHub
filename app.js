const express = require('express');
const app = express();
const pageRoute = require('./routes/pageRoutes')
const photoRoutes = require('./routes/photoRoute');
const userRoute = require('./routes/userRoute')
// Template Engine with ejs 
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',pageRoute)
app.use('/photos',photoRoutes)
app.use('/users',userRoute)

const port = 3000;
app.listen(port, () => {
    console.log(`Our port is ${port}`);
});
