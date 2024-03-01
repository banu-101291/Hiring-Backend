import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controller/userController.js';
import { requireSignIn } from '../middlewares/authmiddleware.js';

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for retrieving user profile
router.get('/profile', requireSignIn, getUserProfile);

// Route for updating user profile
router.put('/profile', requireSignIn, updateUserProfile);

export default router;
