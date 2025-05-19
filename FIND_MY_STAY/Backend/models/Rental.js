const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  moveInDate: String,
  type: String, // bachelor or family
  members: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Rental", rentalSchema);
