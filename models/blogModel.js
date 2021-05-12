const mongoose = require("mongoose")

var blogSchema = new mongoose.Schema({
    blog_content:String,
    blog_image:String,
    blog_description:String,
    blog_video:String
})

const blogModel = mongoose.model('blog',blogSchema)
module.exports=blogModel