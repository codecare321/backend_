const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  period: {
    type: String,
    enum: ["morning", "afternoon", "evening", "night"],
    required: true,
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  availability: { type: Boolean, default: true },
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
