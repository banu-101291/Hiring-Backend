// Import mongoose
import mongoose from 'mongoose';

// Define the Equipment schema
const equipmentSchema = new mongoose.Schema({
 
  id: {
    type: String,
    required: true
  },
 
 
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

// Create the Equipment model from the schema
const Equipment = mongoose.model('Equipment', equipmentSchema);

export default Equipment;
