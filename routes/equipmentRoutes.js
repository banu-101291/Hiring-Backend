// routes/equipment.js

const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

// GET all available equipment
router.get('/equipment', async (req, res) => {
  try {
    const equipment = await Equipment.find({ available: true });
    res.json(equipment);
  } catch (error) {
    console.error('Error fetching equipment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST request to rent equipment
router.post('/equipment/:id/rent', async (req, res) => {
  const { id } = req.params;
  try {
    const equipment = await Equipment.findById(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipment not found' });
    }
    if (!equipment.available) {
      return res.status(400).json({ error: 'Equipment is not available for rent' });
    }
    // Update equipment availability status
    equipment.available = false;
    await equipment.save();
    res.json({ message: 'Equipment rented successfully' });
  } catch (error) {
    console.error('Error renting equipment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
