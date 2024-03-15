const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://booking:ysFWk3cwBm46YKtq@booking.k50bhwr.mongodb.net/book";

const options = {};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("mongo db connection failed", err);
  });
