const express = require('express');
const app = express();

// Start server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// GET route for '/'
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = app;
