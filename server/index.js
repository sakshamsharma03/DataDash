import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/",(req,res)=>
{
    res.send("Server Working");
})

app.listen(5000,()=>{console.log("Server is running")});