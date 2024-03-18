const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://bookthegame:aul4JmvFYLbUx34e@cluster0.26j26kn.mongodb.net/bookthegame";

const options = {};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("mongo db connection failed", err);
  });
