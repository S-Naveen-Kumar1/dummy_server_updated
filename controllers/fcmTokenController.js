const FcmTokenModel = require("../models/fcmToken.model")

const postFcmToken= async(req,res)=>{
    
    const {fcmToken}=req.body
    try{
        const fcm= new FcmTokenModel(req.body)
        await fcm.save()
        res.status(200).json({msg:"fcm token added successfully",details:req.body})
    }
    
    catch(err){
        res.status(400).json({err:err.message})
    }
}
module.exports={postFcmToken}