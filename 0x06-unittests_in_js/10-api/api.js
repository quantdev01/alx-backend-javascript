const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

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

// GET route for /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// POST route for /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

module.exports = app;
