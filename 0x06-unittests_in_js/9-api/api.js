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

// GET route for /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// Handle non-numeric cart ID
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
