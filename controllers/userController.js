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
        obj.status=false
        obj.message="password is required"
        return res.json(obj)
    }
    if(data._id){
        updateUser(req,res)
        
    }
    else {
    const user = new userModel(data)
    await user.save((err,result) => {
        if(err){
            obj.message=err.message;
            obj.status=false
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
}


module.exports.getUser = async(req,res) =>{
    var data = await userModel.find({}).sort({createdAt:1})
    obj.status=true;
    obj.message="user listed successfully"
    obj.data=data
    return res.json(obj)
}


 const updateUser = async(req,res) => {
     var data = req.body
     console.log(data)
     
    userModel.findOneAndUpdate({_id:data._id},data,{new:true}).then(result=>{
        return res.json({
            "status":true,
            "message":"user is updated succesfully",
            "data":result
        })
    }).catch(error =>{
        var obj = Object.keys(error.keyValue)
        return res.json({
            "status":false,
            "message":obj[0] + " is already exist",
            "data":[]
        })
   })
}

module.exports.useProfile = async(req,res)=>{
    var id = req.user.id
    
    let uData = await userModel.findOne({_id:id})
    return res.json({
        "status":true,
        "message":"user profile get successfully",
        "data":uData
    })
}