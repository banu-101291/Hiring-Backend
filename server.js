// 


import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js";
import equipmentRoutes from './routes/equipmentRoutes.js';
import adminroutes from './routes/adminroute.js';
import categoryroutes from './routes/categoryroutes.js';

import cors from "cors";


// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/equipment", equipmentRoutes); // Mount equipment routes
app.use("/api/auth", authRoutes); // Mount authentication routes
app.use("/api",adminroutes);
app.use("/api",categoryroutes)

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Equipment Hiring</h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
