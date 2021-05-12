const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const {env} = require('../config/config')
var obj ={
    "status":false,
    "message":"",
    "data":[]
}
module.exports.createUser = async(req,res) =>{
    var data = req.body
    var p = req.body.password
    if(p ) {
    const hash = bcrypt.hashSync(p, 10);    
    data.password = hash
    }
    else {
        obj.message="password is required"
        return res.json(obj)
    }

    const user = new userModel(data)
    await user.save((err,result) => {
        if(err){
            obj.message=err;
            
            return res.json(obj)
        }
        else {
            obj.status=true
            obj.message="user registerd successfullyl"
            obj.data=result
            return res.json(obj)
        }
    })
}


module.exports.getUser = async(req,res) =>{
    var data = await userModel.find({})
    obj.status=true;
    obj.message="user listed successfully"
    obj.data=data
    return res.json(obj)
}