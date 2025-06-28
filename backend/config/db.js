import mongoose from "mongoose";


export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://nakulvarshney007:I0cGP5l0GPOnS8QL@cluster0.bmhrcd3.mongodb.net/food-del').then(()=>console.log("DB CONNECTED")
    );
}