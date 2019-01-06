const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose=require('mongoose')
const User =require('../modules/users')



// Adding a new User
router.post('/', (req, res) => {
    // Setting Schema so i can validate it
    const validating = userValidating(req.body);
  
    if(validating.error){
      res.status(400).send(validating.error.details);
    }else {
  
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        fName: req.body.fName,
        mName: req.body.mName,
        sName: req.body.sName,
        email:req.body.email,
        password:req.body.password
      });
  
      user.save()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  
  
      res.send('Done');
    }
  });
  