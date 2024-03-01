// 


import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js";
import equipmentRoutes from './routes/equipmentRoutes.js';
import { viewEquipmentController,addEquipmentController,updateEquipmentController,deleteEquipmentController } from "./controller/equipmentController.js";
import { createCategory, getAllCategories } from "./controller/categoryController.js";
import { registerUser, loginUser, getUserProfile, updateUserProfile } from "./controller/usercontroller.js";

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

app.get('/equipment', viewEquipmentController);

app.post('/equipment/add', addEquipmentController);

app.put('/equipment/update/:id', updateEquipmentController);

app.delete('/equipment/delete/:id', deleteEquipmentController);



// Category routes
app.post("/api/categories", createCategory);
app.get("/api/categories", getAllCategories);

// User routes
app.post("/api/users/register", registerUser);
app.post("/api/users/login", loginUser);
app.get("/api/users/profile", getUserProfile);
app.put("/api/users/profile", updateUserProfile);

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
