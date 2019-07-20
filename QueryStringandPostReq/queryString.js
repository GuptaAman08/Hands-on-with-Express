/*
In express, the parsing of the query string data is done by express automatically.
So, no need to parse explicitly as done in Node Js
*/
const express = require('express')

var app = express()
app.get('/AboutUs', (req, res)=>{
    res.send(`Data received : ${req.query.name} Designation : ${req.query.profile}`)
})

app.listen(3000)