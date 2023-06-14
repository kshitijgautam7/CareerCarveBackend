const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/questionnaire', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const welcomeRouter = require('./routes/welcome');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const editPhoneNumberRouter = require('./routes/editPhoneNumber');
const submitTestRouter = require('./routes/submitTest');

app.use('/api/welcome', welcomeRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/edit/phonenumber', editPhoneNumberRouter);
app.use('/api/submit-test', submitTestRouter);
