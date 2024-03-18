const Slot = require("../models/slot");

// Function to fetch all slots from the database
async function fetchAllSlots() {
  try {
    const slots = await Slot.find();
    return slots;
  } catch (error) {
    console.error("Error fetching all slots:", error);
    throw error;
  }
}

module.exports = { fetchAllSlots };
