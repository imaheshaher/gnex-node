const mongoose = require("mongoose")

var citySchema = new mongoose.Schema({
    city_name:String,
    district:{
        type:String,
        ref:"district"
    }
})

const cityModel = mongoose.model('district',citySchema)
module.exports=cityModel