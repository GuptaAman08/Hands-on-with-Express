const express = require('express')
const bodyParser = require('body-parser')

var app = express()
var urlEncodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'ejs')

app.get('/ContactUs', (req, res)=>{
    res.render('contact')
})

app.post('/ContactUs', urlEncodedParser,(req, res)=>{
    res.render('contactSuccessful', {data: req.body})
})

app.listen(3000)