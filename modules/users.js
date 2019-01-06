/*
 *  MONGO Table User Model
 *
 */

// Dependency
const mongoose = require('mongoose');

//  Setting the Schema of the user
//  Note: you can set your validation here, it's like a second validation

/*
 *  Some of the validating examples are
 *  required
 *  minlength
 *  maxlength
 *  match       Which takes a regex
 *  enum        takes array, similar to in ['','','']
 */

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  age: {
    type: Number,
  },
  fName: {
    type: String,
    required: [true,'Name required']
  },
  mName: {
    type: String,
    required: [true,'Name required']
  },
  sName: {
    type: String,
    required: [true,'Name required']
  },
  password: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});
