const express  = require('express')

var app = express()

app.get('/', (req, res)=>{
    res.send('Welcome to the Home Page')
})

/*
This is really cool way to set routes when the routes are dynamic and changes 
but still has same kind of structure.......For eg, user requesting for profiles with diifferent ID
In such case you dont need to create separate routes for each id,,rather can just have
route till ../profile common and then catch the id or name whatever
refer net ninja video https://www.youtube.com/watch?v=MuMs1pLuT7I&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=24
*/

app.get('/profile/:name', (req, res)=>{
    res.send(`You requested a profile having callout @${req.params.name}`)
})

app.listen(3000)