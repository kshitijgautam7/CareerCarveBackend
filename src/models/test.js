const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswers: {
    type: [String],
    required: true,
  },
});

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});

module.exports = mongoose.model('Test', testSchema);
