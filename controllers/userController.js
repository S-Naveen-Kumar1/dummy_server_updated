const bcrypt = require('bcrypt')

const registerUser = async(req,res)=>{
    const {email,password,name} = req.body
    console.log(email,password,name)

    try{
        if(!email || !password || !name){
            res.status.send({message:'Input fields are required!'})
        }else{
            bcrypt.hash(password, 10, async function(err, hash) {
                if(err){
                    res.send({message:'Some Error Occurred'})
                }else{
                   const newUser = new UserModel({email,password:hash,name})
                   await newUser.save()
                   res.send({message:'User created successfully'})
                }
            })
        }
    }
    catch(err){
        console.log(err)
    }
   
}


const loginUser = async (req,res)=>{
    const {email,password,name} = req.body
    console.log(email,password,name)

    try{
        if(!email || !password || !name){
            res.status.send({message:'Input fields are required!'})
        }else{
           
            const user = await UserModel.findOne({email})
            console.log(user)

            if(!user){
                res.send({message:'User not found!'})
            }else{
                bcrypt.compare(password, user.password, function(err, result) {
                    if(err){
                        res.send({message:'Invalid Credentials'})
                    }else{
                        res.send({message:'User Logged in successfully',user})                    }
                });
            }
        }
    }
    catch(err){
        console.log(err)
    }
}


module.exports = {registerUser,loginUser}