const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},

  password:{type:String,required: [true, "can't be blank"]},
  bio: String,
  image: String
 
},{timestamp:true})

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});
const userModel = mongoose.model('user', userSchema);
module.exports= userModel;