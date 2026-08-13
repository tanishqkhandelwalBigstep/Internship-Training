const express = require('express'); 
const router = express.Router()


router.get('/' , (req,res) => {
    return res.send('Welcome to the User Page')
})


router.post('/create',(req,res) => {
    console.log(req.body)
    const {name , email } = req.body
    return res.send(`User created with name ${name} and email ${email}`)
})


router.post('/login',(req,res) => {
    const {email , password } = req.body
    return res.send(`User logged in with email ${email} and password ${password}`)
})


router.get('/profile/:id',(req,res) => {
    const {id} = req.params
    return res.send(`User Profile Page with user id : ${id}`)
})


router.get('/logout',(req,res) => {
    return res.send('User logged out successfully')
})





module.exports = router