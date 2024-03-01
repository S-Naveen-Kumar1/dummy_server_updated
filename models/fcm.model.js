const mongoose = require('mongoose')


const fcmSchema = mongoose.Schema({
    email : {type: String, required: true},
    name : {type: String, required: true},
    fcmtoken:{type: String, required: true},

})

const FcmModel = mongoose.model('fcmtoken',fcmSchema)

module.exports = FcmModel