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

///for testing sample

// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://booking:ysFWk3cwBm46YKtq@booking.k50bhwr.mongodb.net/book";

// const options = {};

// mongoose
//   .connect(mongoURI, options)
//   .then(async () => {
//     console.log("MongoDB connected successfully");

//     // Define the schema for the slots collection
//     const slotSchema = new mongoose.Schema({
//       date: Date,
//       period: String,
//       startTime: Date,
//       endTime: Date,
//       availability: Boolean,
//     });

//     // Create a Mongoose model for the slots collection
//     const Slot = mongoose.model("Slot", slotSchema);

//     // Sample data
//     const sampleData = [
//       {
//         date: new Date("2024-03-18"),
//         period: "morning",
//         startTime: new Date("2024-03-18T08:00:00"),
//         endTime: new Date("2024-03-18T12:00:00"),
//         availability: true,
//       },
//       {
//         date: new Date("2024-03-18"),
//         period: "afternoon",
//         startTime: new Date("2024-03-18T12:00:00"),
//         endTime: new Date("2024-03-18T18:00:00"),
//         availability: true,
//       },
//       {
//         date: new Date("2024-03-18"),
//         period: "evening",
//         startTime: new Date("2024-03-18T18:00:00"),
//         endTime: new Date("2024-03-18T23:00:00"),
//         availability: true,
//       },
//       {
//         date: new Date("2024-03-18"),
//         period: "night",
//         startTime: new Date("2024-03-18T00:00:00"),
//         endTime: new Date("2024-03-18T06:00:00"),
//         availability: true,
//       },
//     ];

//     // Insert sample data into the slots collection
//     await Slot.insertMany(sampleData);
//     console.log("Sample data inserted successfully");
//   })
//   .catch((err) => {
//     console.log("MongoDB connection failed", err);
//   });
