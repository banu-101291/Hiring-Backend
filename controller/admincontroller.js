import Equipment from '../models/Equipment.js';

// Controller function to add new equipment
export const addEquipmentController = async (req, res) => {
  const { name, description, quantity } = req.body;
  try {
    const newEquipment = new Equipment({ name, description, quantity });
    await newEquipment.save();
    res.status(201).json({ message: 'Equipment added successfully', equipment: newEquipment });
  } catch (error) {
    console.error('Error adding equipment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update equipment information
export const updateEquipmentController = async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity } = req.body;
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(id, { name, description, quantity }, { new: true });
    if (updatedEquipment) {
      res.status(200).json({ message: 'Equipment updated successfully', equipment: updatedEquipment });
    } else {
      res.status(404).json({ error: 'Equipment not found' });
    }
  } catch (error) {
    console.error('Error updating equipment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete equipment
export const deleteEquipmentController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEquipment = await Equipment.findByIdAndDelete(id);
    if (deletedEquipment) {
      res.status(200).json({ message: 'Equipment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Equipment not found' });
    }
  } catch (error) {
    console.error('Error deleting equipment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
