const express = require("express");
const router = express.Router();
const Slot = require("../models/slot");
const { fetchAndDisplaySlots } = require("../controller/slotController"); // Import the function

router.get("/slots", async (req, res) => {
  try {
    const selectedDate = req.query.date ? new Date(req.query.date) : new Date();

    const slots = await fetchAndDisplaySlots(selectedDate);

    if (slots.length > 0) {
      res.status(200).json({ message: "Slots fetched successfully", slots });
    } else {
      res.status(404).json({ message: "No slots found", slots });
    }
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

module.exports = router;
