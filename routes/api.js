// src/routes/api.js
const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router;
