 

import fs from 'fs'
import foodModel from '../models/foodModel.js'

//add food item
// this file is for admin to add food items

const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error);
        res.json({
            success:false,
            message:"Error"
        })
        
    }
}
//all foodlist
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    }
    catch(e){
        console.log(e);
        res.json({
            success:false,
            message:"Error"
        })
        
    }

}

//remove food item
const removeFood=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})// deleting from folder

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})

    }
    catch(e){
        console.log(e);
        res.json({
            success:false,
            message:"Error"
        })
        
    }

}

export {addFood,listFood,removeFood}