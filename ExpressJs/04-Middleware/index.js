const express = require('express');
const app = express()
const isloggedin = require('./middlewares/auth.middleware')

app.use(express.json())


app.get('/' , (req,res) => { 
    console.log('welcome')
})



app.get('/login',(req,res) => { 

    res.send('Login your account ')

})

app.get('/profile',isloggedin,(req,res) => {
    return res.send('Welcome to the Profile Page')
})


app.listen(3000,()=>{
    console.log('server started')
})