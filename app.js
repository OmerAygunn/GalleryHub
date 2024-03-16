const express = require('express');
const app = express();
const pageRoute = require('./routes/pageRoutes')

// Template Engine with ejs 
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static("public"))

app.use('/',pageRoute)

app.get('/services',(req,res)=>{
    res.render('services')
})


const port = 3000;
app.listen(port, () => {
    console.log(`Our port is ${port}`);
});
