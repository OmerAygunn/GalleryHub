const express = require('express');
const app = express();

// Template Engine with ejs 
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index'); // index.ejs dosyasını render et
});

const port = 3000;
app.listen(port, () => {
    console.log(`Our port is ${port}`);
});
