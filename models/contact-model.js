const mongoose = require('mongoose')
var Contact = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    contactName: {
        type: String
    },
    contactEmailId: {
        type: String
    },
    countryCode:{
        type:String
    },
    contactNumber: {
        type: String,
        default: null
    },
    isRegisteredWithUseMe: {
        type: Boolean
    },
    contactUserId: {
        type: String,
        default:null
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    contactUserId: {
        type: String
    }
})
module.exports = mongoose.model('Contact', Contact)