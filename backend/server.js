import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";


//app config
const app=express();
const port=4000;


//middleware
app.use(express.json())
app.use(cors())


//dbconnection
connectDB();

//api endpoint
app.use('/api/food',foodRouter)
app.use("/images", express.static("uploads"))// for uploding all images to website
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
    
})

// mongodb+srv://nakulvarshney007:I0cGP5l0GPOnS8QL@cluster0.bmhrcd3.mongodb.net/?