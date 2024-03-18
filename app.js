const express = require("express");
const mongoose = require("mongoose");
const slotRoutes = require("./src/routes/slotRoutes");
const cron = require("node-cron");
const app = express();
require("dotenv").config();
require("./db");

//middleware
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api", slotRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
