// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ success: true, message: "Message submitted successfully" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, error: "Failed to submit message" });
  }
});

module.exports = router;
