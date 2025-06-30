import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator"
import 'dotenv/config';


//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await userModel.findOne({email})
        if(!user){
            return res.json({message:"User not found",success:false})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status()
        }

        const token=createToken(user._id)
        res.json({
            success:true,
            token
        })

    }
    catch(e){
        console.log(e);
        res.json({message:"Something went wrong",success:false})
        
    }

}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try{
        //checking user already exist or not
        const exist=await userModel.findOne({email})
        if(exist){
            return res.json({message:"User already exists",success:false})
        }


        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({message:"Invalid email format",success:false})
        }

        if(password.length<8){
            return res.json({success:false,message:"Password must be strong and at least 8 characters long"})
        }

        //hasing password
        const salt=await bcrypt.genSalt(10);  
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

       const user= await newUser.save()
       const token=createToken(user._id)
       res.json({
        success:true,
        token
       })


        
    }
    catch(e){
        console.log(e);
        res.json({message:"Something went wrong",success:false})
        

    }
}

export {loginUser,registerUser};
