
let equipment = [];

// Controller function to view available equipment
export const viewEquipmentController = (req, res) => {
  res.status(200).json({ equipment });
};

// Controller function to rent equipment
export const rentEquipmentController = (req, res) => {
  const { equipmentId, duration } = req.body;
  // Add your logic to handle renting equipment
  res.status(200).json({ message: `Equipment with ID ${equipmentId} rented for ${duration} days.` });
};

// Controller function to return rented equipment
export const returnEquipmentController = (req, res) => {
  const { equipmentId } = req.body;
  // Add your logic to handle returning equipment
  res.status(200).json({ message: `Equipment with ID ${equipmentId} returned successfully.` });
};

// Controller function to add new equipment
export const addEquipmentController = (req, res) => {
  const { name, description, quantity } = req.body;
  const newEquipment = { id: equipment.length + 1, name, description, quantity };
  equipment.push(newEquipment);
  res.status(200).json({ message: "Equipment added successfully", equipment: newEquipment });
};

// Controller function to update equipment information
export const updateEquipmentController = (req, res) => {
  const { id } = req.params;
  const { name, description, quantity } = req.body;
  // Find the equipment by ID
  const equipmentToUpdate = equipment.find(item => item.id === parseInt(id));
  if (equipmentToUpdate) {
    // Update equipment information
    equipmentToUpdate.name = name || equipmentToUpdate.name;
    equipmentToUpdate.description = description || equipmentToUpdate.description;
    equipmentToUpdate.quantity = quantity || equipmentToUpdate.quantity;
    res.status(200).json({ message: "Equipment updated successfully", equipment: equipmentToUpdate });
  } else {
    res.status(404).json({ error: "Equipment not found" });
  }
};

// Controller function to delete equipment
export const deleteEquipmentController = (req, res) => {
  const { id } = req.params;
  // Filter out the equipment to be deleted
  equipment = equipment.filter(item => item.id !== parseInt(id));
  res.status(200).json({ message: "Equipment deleted successfully" });
};
