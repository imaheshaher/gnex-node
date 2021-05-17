const userModel = require('../models/userModel')
const blogModel =require('../models/blogModel')
const countryModel = require('../models/countryModel')
var obj = {
    "status":false,
    "message":'',
    "data":[]
}
module.exports.createBlog= async(req,res) =>{
    var data = req.body
    // data.blog_image = req.files
    if(req.file){
     data["blog_image"]=req.file.filename
    }
    else {
        data["blog_image"]=data.blog_image
    }
    data["user"]=req.user.id
     if(data._id!=null){
         await blogModel.findOneAndUpdate({_id:data._id},{$set:{blog_content:data.blog_content,blog_image:data.blog_image,blog_description:data.blog_description}},{new:true}).then(data=>{
             console.log(data)
             obj.status=true
         obj.message="updated"
         obj.data=data  
         return res.json(obj)
         })
         
     }
     else {
    var blogData = new blogModel(data)
    await blogData.save((err,result) =>{
        if(err){
            obj.message=err
            return res.json(obj)
        }
        else {
            obj.message="uploaded"
            obj.status=true
            obj.data=result
            return res.json(obj)
        }
    })
}
}

module.exports.getBlog= async(req,res) =>{
    var data = await blogModel.find({}).sort({_id:-1})

    obj.status=true;
    obj.message="blog listed successfully"
    obj.data=data
    return res.json(obj)
    
}

module.exports.deleteBlog = async(req,res) =>{
    var _id=req.params.id
    await blogModel.findOneAndDelete({_id:_id})
    return res.json({
        "status":true,
        "message":"deleted",
        "data":[]
    })
}