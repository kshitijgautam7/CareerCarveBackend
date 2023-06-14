const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Perform the login logic
  // You can make a request to https://api.catboys.com/catboy to get the message string

  res.json({
    success: true,
    message: 'hewwo',
  });
});

module.exports = router;
