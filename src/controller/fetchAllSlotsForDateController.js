const Slot = require("../models/slot");

async function fetchAllSlotsForDate(selectedDate) {
  try {
    // Query the database to fetch all slots for the selected date
    const slots = await Slot.find({ date: selectedDate });
    return slots;
  } catch (error) {
    console.error("Error fetching slots for the selected date:", error);
    throw error;
  }
}
module.exports = { fetchAllSlotsForDate };
