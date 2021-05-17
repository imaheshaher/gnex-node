const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const {env} = require("../config/config")
const loginmiddleware = async(req,res,next) =>{
    var t = req.headers.authorization
    console.log(t,"is data")
    if(t==null){
        return res.json({
            "status":false,
            "message":"Token is required",
            "data":[]

        })
    } else {
    jwt.verify(t,env.secrete,(err,decode) => {
        if(err) {
            return res.json({
                "status":false,
                "message":"token is expire",
                "data":[]
            })
        }
        console.log(err)
        req.user = decode
    
    })

    if(req.user) {
        console.log(req.user)
        next();

    }
}
}

module.exports = loginmiddleware