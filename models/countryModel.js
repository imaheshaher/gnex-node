const mongoose = require("mongoose")

var countrySchema = new mongoose.Schema({
    country_name:String,
    country_code:String
})

const countryModel = mongoose.model('country',countrySchema)
module.exports=countryModel