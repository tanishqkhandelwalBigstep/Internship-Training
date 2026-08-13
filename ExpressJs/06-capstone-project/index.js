const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');


const PORT = 3000;



const errorhandler = require('./Handlers/error-Handler')
const users = require('./Data/users')

app.use(express.json());
app.use(helmet());
app.use(cors());




app.get('/users' , (req,res) => {
    const {page , limit  , active } = req.query

    if(!page || !limit || !active){
        throw new Error('Please provide active , page and limit query parameters');
    }

    const index = parseInt((page-1) * 10)
    const lmt = parseInt(limit)

    const Totalusers = [];

    console.log('index : ' , index)
    console.log('limit : ' , index+lmt)

    for(let i = index ; i < index + lmt && i < users.length ; i++){
        console.log(i)
        Totalusers.push(users[i])
    }
    res.json(Totalusers)
})



app.use(errorhandler);

app.listen(PORT, () => {
    console.log('server started')
})