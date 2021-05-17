const mongoose = require('mongoose')
var Group = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    groupName: {
        type:String,
        required:true
    },
    groupMembers: [{
        contactId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'contact'
        },
        time:Date
    }]
})
module.exports = mongoose.model('Group',Group)     