const express = require("express");
const router = express.Router();
const slotController = require("../controller/slotController");

router.get("/slots", slotController.getSlots);

router.get("/", () => {
  console.log("hello");
});
module.exports = router;
