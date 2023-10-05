const express = require('express');

const mongoose = require('./db');

const app = express();

app.use(express.json());


const port = 4000;

app.get('/',(req,res)=>{
    res.json('Hello World');
})

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`)
});