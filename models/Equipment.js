// models/Equipment.js

const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: String,
  available: Boolean,
});

module.exports = mongoose.model('Equipment', equipmentSchema);
