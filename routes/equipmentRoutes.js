import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authmiddleware.js";
import { 
  viewEquipmentController, 
  rentEquipmentController, 
  returnEquipmentController, 
  addEquipmentController, 
  updateEquipmentController, 
  deleteEquipmentController 
} from "../controller/equipmentController.js";

const router = express.Router();

// Route to view available equipment
router.get("/equipment", viewEquipmentController);

// Route to rent equipment
router.post("/equipment/rent", requireSignIn, rentEquipmentController);

// Route to return rented equipment
router.post("/equipment/return", requireSignIn, returnEquipmentController);

// Route to add new equipment (only accessible to admin)
router.post("/equipment/add", requireSignIn, isAdmin, addEquipmentController);

// Route to update equipment information (only accessible to admin)
router.put("/equipment/update/:id", requireSignIn, isAdmin, updateEquipmentController);

// Route to delete equipment (only accessible to admin)
router.delete("/equipment/delete/:id", requireSignIn, isAdmin, deleteEquipmentController);

export default router;
