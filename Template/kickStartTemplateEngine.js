/*
With JavaScript template engine what you can do is inject data JavaScript code into 
HTML page that you are rendering to browser/client

We are using EJS as JavaScript template engine overhere..its an npm package. 
So you just all need to do is following
1-> Install ejs as ---- npm i ejs.  
2-> Tell express that we want to use ejs as our template engine by setting 'view engine' as ejs.

Note: 1) Now, by default express will look into 'views' folder for templates.
    2) Templates in 'views' folder have extensions *.ejs and this tells as that its and ejs template.   
    (So these *.ejs can now embed javascript and data into it.)
*/

const express  = require('express');
const path = require('path');

var app = express();

app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/Home.html'));
});

app.get('/profile/:name', (req, res)=>{
    var data = {
        age: 22,
        job: 'Smoke Weed'
    }
    res.render('IterData', { person : req.params.name , data: data})
});

app.listen(3000);