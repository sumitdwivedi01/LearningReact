 import express from "express";
 import User from "../modles/User.js";
 import {body , validationResult} from "express-validator";
 import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
const router = express.Router();

const JWT_SECRET=`YeahHer0Buddy@14`

//create a user using: POST "api/auth/createuser" .Doesn't require AUTH 
 router.post('/createuser',[
   body('name','Enter a Valid name ').isLength({min:3}),
   body('password','Password must have atleast 5 characters').isLength({min:5}),
   body('email','Please Enter a Valid email').isEmail()

 ] ,async (req , res)=>{
  //if there is any error return bad req and print the error message
    const error =validationResult(req);
    if(!error.isEmpty()){
      return res.status(400).json({errors: error.array()});
    }
    try{

      //check whether the user with this email already exists
      let user = await User.findOne({email:req.body.email})
      if(user){
        return res.status(400).json({error:"This email already exist"});
      }
      const salt= await bcrypt.genSalt(15);
      const secPass = await bcrypt.hash(req.body.password,salt);

      //create a new user 
      user = await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email
      });
      const data = {
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data ,JWT_SECRET);
      res.json({authToken});
    }catch(error){
      console.error(error.message);
      res.status(500).send({error:"some error occur"});
    }
    
 })




 
 export default router;