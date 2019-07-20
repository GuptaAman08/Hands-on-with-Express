const express  = require('express')
/*
Here below we are setting an express application(to var app) this is required,
because only then you will be able to access the functionality/methods exported by express module  
*/
var app = express()

//One of Benefit of express is you dont need to specify Content-type headers as it automatically does for you
app.get('/', (req, res)=>{
    res.send('Welcome to the Home Page')
})

app.get('/aboutUs', (req, res)=>{
    res.send('We are the leading website developer in Industry')
})

app.listen(3000)