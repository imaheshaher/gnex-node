const mongoose = require("mongoose")

var districitSchema = new mongoose.Schema({
    district_name:String,
    state:{
        type:String,
        ref:"state"
    }
})

const districtModel = mongoose.model('district',districitSchema)
module.exports=districtModel