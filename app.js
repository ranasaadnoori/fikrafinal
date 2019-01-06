const express = require('express');
const app = express();
const Joi = require('joi');
const mongoose = require('mongoose');
const hello =require('./hello')
mongoose.connect('mongodb://bstoreAdmin:Admin123@ds259253.mlab.com:59253/bookstore',{useNewUrlParser: true})
mongoose.connection.on('connected',()=>{
    console.log('\x1b[36m%s\x1b[0m','mongoose connected')
})

app.use(express.json());
app.use(hello);
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Running on port 3000');
  })