const express = require("express");
const router = express.Router();
const Rental = require("../models/Rental");

// POST route to store form data
router.post("/", async (req, res) => {
  try {
    const rentalData = new Rental(req.body);
    await rentalData.save();
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
