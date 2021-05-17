const mongoose = require("mongoose")

var blogSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,

    },
    blog_content:String,
    blog_image:String,
    blog_description:String,
    blog_video:String
},{timestamps:true})

const blogModel = mongoose.model('blog',blogSchema)
module.exports=blogModel