const express = require('express')
const { registerUser, loginUser, fcmUser, getAllfcm } = require('../controllers/userController')

const userRouter = express.Router()


userRouter.get('/',(req,res)=>{
    res.send("This is user route")
})

userRouter.post('/register',registerUser)
userRouter.post("/fcmtoken",fcmUser)
userRouter.get("/fcmget",getAllfcm)

userRouter.post('/login',loginUser)



module.exports = userRouter