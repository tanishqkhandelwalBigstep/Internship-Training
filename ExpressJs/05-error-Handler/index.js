const express = require('express');
const app = express();
const PORT = 3000;          

app.use(express.json());

const users = [
    {'name' : 'abc' , age : 33}
];

app.get('/', (req, res) => {   
    console.log('server started')
    res.send('Welcome to the Home Page');
})


app.get('/users' , (req,res) => {
    if(users.length === 0){
        throw new Error('No users found');
    }
    res.json(users)
})


app.get('/profile' , (req,res) => {
    
    const {name} = req.query

    if(name !== 'Tanishq'){
        throw new Error('User not found');
    }


    return res.send(`Welcome to the profile page of ${name}`)

    
})



const errorhandler = (err,req,res,next) =>{
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: err.message
    })
}

app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});