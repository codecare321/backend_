const express = require("express");
const router = express.Router();
const { fetchAndDisplaySlots } = require("../controller/slotController"); // Import the function
const { fetchAllSlots } = require("../controller/fetchAllSlotsController"); // Import the function for fetching slots by time range
const {
  fetchAllSlotsForDate,
} = require("../controller/fetchAllSlotsForDateController");
// Route to fetch all slots
router.get("/slots", async (req, res) => {
  try {
    const slots = await fetchAllSlots();

    if (req.query.date) {
      return res
        .status(400)
        .json({ message: "Date parameter is not supported for this route" });
    }
    if (slots.length > 0) {
      res
        .status(200)
        .json({ message: "All slots fetched successfully", slots });
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

router.get("/slots/date/:date", async (req, res) => {
  try {
    const selectedDate = req.params.date
      ? new Date(req.params.date)
      : new Date();

    const today = new Date();

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    let slots;

    if (selectedDate.toDateString() === todayDate.toDateString()) {
      slots = await fetchAndDisplaySlots(selectedDate);
    } else {
      slots = await fetchAllSlotsForDate(selectedDate);
    }

    if (slots.length > 0) {
      res.status(200).json({ message: "Slots fetched successfully", slots });
    } else {
      res
        .status(404)
        .json({ message: "No slots found for the selected date", slots });
    }
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

module.exports = router;
