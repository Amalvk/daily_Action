const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async(req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '') //storing token value from postman.header which has key ='Autherization' 
        const decoded = jwt.verify(token,process.env.JWT_SECRET) // return boolean value
        const user = await User.findOne({_id:decoded._id,'tokens.token':token})
        
       
        if(!user){

            throw new Error()
        }
        req.token=token
        req.user= user
        next()
    }catch(e){
        res.status(401).send({error:'Please Authenticate'})
    }

}
module.exports=auth