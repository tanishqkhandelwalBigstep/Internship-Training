const express = require('express');
const app = express()

const userRoutes = require('./routes/user.routes')

app.use(express.json())


app.get('/' , (req,res) => {
    return res.send('Welcome to the Home Page')
})


app.use('/user', userRoutes)




app.listen(3000,()=>{
    console.log('server started')
})