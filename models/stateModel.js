const mongoose = require("mongoose")

var stateSchema = new mongoose.Schema({
    state_name:String,
    country:{
        type:String,
        ref:"country"
    }
})

const stateModel = mongoose.model('state',stateSchema)
module.exports=stateModel