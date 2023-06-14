const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Import the User model (assuming it's defined in models/user.js)
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { name, email, password, phone_number } = req.body;

  try {
    // Check if the password field is missing or empty
    if (!password) {
      return res.status(400).json({
        success: false,
        message: 'Password is required',
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone_number,
    });

    // Save the user to the database
    await user.save();

    res.json({
      success: true,
      message: 'Signed up successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error occurred while signing up',
    });
  }
});

module.exports = router;
