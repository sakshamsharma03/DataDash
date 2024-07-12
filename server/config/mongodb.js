import mongoose from "mongoose";

const connetDB = (url) => {
  mongoose.connect(url,{
            ssl: true, // Ensure SSL is enabled
            tlsAllowInvalidCertificates: true
  });
  console.log("connected to DB");
};

export default connetDB;
