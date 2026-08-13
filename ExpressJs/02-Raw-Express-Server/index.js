const express = require('express');
const app = express()

app.use(express.json())

const users = [{
    id : 1,
    name : 'Tanishq'
},{
    id : 2,
    name : 'abcd'
}]



app.get('/' , (req,res) => {
    return res.send('Welcome to the Home Page')
})



app.get('/user/:id' ,(req,res) =>{
    const {id} = req.params
    res.send(`welcome to the users page with id : ${id}`)
})


app.post('/user/login/:id' , (req,res) => {
    
    const {id} = req.params

    if(id === 'abcd')
        res.status(200).send('Login Successful')
    else
        res.status(401).send('user does not exist')
})

app.get('/users' , (req,res) => {
    return res.send('Welcome to the Users Page')
})



app.get('/readusers' , isadmin , (req,res) => {
    return res.json(users)
})



function isadmin(req,res,next){

    if(req.query.admin === '@admin'){
        next()
    }else{
        res.redirect('/users')
    }

}


app.listen(3000 , () =>{
    console.log('server started')
})




