const express = require('express');
const router = express.Router();

// Import the Test and UserResponse models (assuming they are defined in models/test.js and models/userResponse.js)
const Test = require('../models/test');
const UserResponse = require('../models/userResponse');

router.post('/', async (req, res) => {
  try {
    const { userId, testId, answers } = req.body;

    // Fetch the test from the database
    const test = await Test.findById(testId);

    // Calculate the score based on the correct answers defined in the test
    let score = 0;
    for (let i = 0; i < test.questions.length; i++) {
      const question = test.questions[i];
      const correctAnswers = question.correctAnswers;

      const userAnswer = answers[i];
      if (correctAnswers.includes(userAnswer)) {
        score++;
      }
    }

    // Save the user's response to the database
    const userResponse = new UserResponse({
      userId,
      testId,
      answers,
      score,
    });
    await userResponse.save();

    res.json({
      success: true,
      userId,
      testId,
      score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
