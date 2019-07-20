const express = require('express')

var app = express();
app.set('view engine', 'ejs')

app.use('/assests',express.static('public'));

app.get('/',(req, res)=>{
    res.render('index')
});

app.listen(3000)