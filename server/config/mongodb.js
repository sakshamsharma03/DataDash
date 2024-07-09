import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url=process.env.MONGODB_URL;

try {
    
    mongoose.connect(url)
    console.log("connected to DB")
} catch (error) {
    console.log(error);
}