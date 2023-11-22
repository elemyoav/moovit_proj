const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

// Start server
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export server for testing
module.exports = server;
