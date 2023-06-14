const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('UserResponse', userResponseSchema);
