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

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bTitle: {
    type: String,
    required: [true,'Name required']
  },
  bImage: {
    type: Image,
    required: [true,'Cover Image required']
  },
  bAuthor: {
    type: String,
    required: [true,'Book Author required']
  },
  pDate:{
      type:Date,
      required:[true,'Publish date required']
  }
});
