import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DataModel from "./Model/data.js";
import connetDB from "./config/mongodb.js";
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

const DBconnection= ()=>
    {
        try {
             connetDB(process.env.MONGODB_URL)
            console.log("DB Connected");
        } catch (error) {
            console.log(error);
        }
    }
    DBconnection();
    

app.get("/",(req,res)=>
{
    res.send("Server Working");
})

app.get("/data",async(req,res)=>
{
    try {
      const data = await DataModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})
app.listen(5000,()=>{console.log("Server is running")});