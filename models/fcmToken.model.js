const mongoose = require('mongoose')


const fcmTokenSchema = mongoose.Schema({
    fcmTokenNaveen : {type: String, required: true},
    
    
})

const FcmTokenModel = mongoose.model('fcm',fcmTokenSchema)

module.exports = FcmTokenModel