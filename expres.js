const express = require('express');
const app = express();
const port = 3001;

// Middleware to log listening message
const a=((req, res, next) => {
  console.log('Listening on port', port);
  next();
});

// Route for path '/a'
app.get('/a',a, (req, res) => {
  res.send('check');
  
});

// Route for path '/'
app.get('/', (req, res) => {
  res.send('home');
});

// Route for path '/about'
app.get('/about', (req, res) => {
  res.send('about us');
});

// Start the server
app.listen(port, () => {
  console.log('Server is running on port', port);
});



