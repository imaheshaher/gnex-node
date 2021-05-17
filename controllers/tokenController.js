const jwt = require("jsonwebtoken")
const {env} = require("../config/config")
const generateAccessToken = (username,id)=> {
    return jwt.sign({email:username,id:id}, "gnex",{expiresIn:env.token_expire});
  }

  module.exports = generateAccessToken