// routes/userRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const { getProfileByEmail } = require('../controllers/userController');


const router = express.Router();

// POST route for registering users
router.post('/register', register);

// POST route for logging in users
router.post('/login', login);

router.get('/profile/:email', getProfileByEmail);

module.exports = router;
