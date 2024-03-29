// routes/categoryRoutes.js
import express from 'express';
import {createCategory,getAllCategories} from '../controller/categoryController.js';

const router = express.Router();

// Route to create a new category
router.post('/categories', createCategory);

// Route to get all categories
router.get('/categories', getAllCategories);

export default router;
