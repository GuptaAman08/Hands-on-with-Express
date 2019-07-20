const express  = require('express');
const path = require('path');

var app = express();
app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.render('index')
});

app.get('/contactUs', (req, res)=>{
    res.render('contactUs')
});

app.get('/profile/:name', (req, res)=>{
    var data = {
        age: 22,
        job: 'Smoke Weed',
        Education: ['SSC', 'HSC', 'BE']
    }
    res.render('IterData', { person : req.params.name , data: data})
});

app.listen(3000);