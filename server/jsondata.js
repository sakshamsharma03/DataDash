import dotenv from "dotenv";
import { promises as fs } from "fs";
import path from "path";
dotenv.config();
import connectDB from "./config/mongodb.js";
//import  jsondata from"./jsondata.json" with {type:"json"};
import DataModel from "./Model/data.js";

async function loadJSON(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function main() {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log("connected to MongoDB");

    const filePath = path.resolve("jsondata.json");
    const jsonData = await loadJSON(filePath);

    await DataModel.insertMany(jsonData);
    console.log("Data successfully uploaded");
  } catch (err) {
    console.log("Error: ", err);
  }
}

main();
