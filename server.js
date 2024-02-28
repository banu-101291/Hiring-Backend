import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js";

import cors from "cors";

// const express = require("express");


//configuAre env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());


//routes
app.use("/api/auth", authRoutes);



//rest api
app.get("/", (req, res) => {
  res.send("<h1>Equipment Hiring</h1>");
});

//PORT
const PORT = process.env.PORT || 9000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
    
  );
});