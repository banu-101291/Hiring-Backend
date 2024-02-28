import express from 'express';
import { isAdmin } from '../middlewares/authmiddleware.js';
import { 
  viewEquipmentController, 
  addEquipmentController, 
  updateEquipmentController, 
  deleteEquipmentController 
} from '../controllers/equipmentController.js';

const router = express.Router();

// Route for viewing available equipment (accessible to all users)
router.get('/equipment', viewEquipmentController);

// Routes accessible only to admin users
router.use(isAdmin);

// Route for adding new equipment
router.post('/equipment/add', addEquipmentController);

// Route for updating equipment information
router.put('/equipment/update/:id', updateEquipmentController);

// Route for deleting equipment
router.delete('/equipment/delete/:id', deleteEquipmentController);

export default router;
