// backend/routes/external.js

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { apiKey } = require('../config');

// GET external data
router.get('/', async (req, res) => {
  try {
    const response = await fetch(`https://api.example.com/data?api_key=${apiKey}`); // Fetch external data
    if (!response.ok) {
      throw new Error('Network response was not ok'); // Handle HTTP errors
    }
    const data = await response.json(); // Parse JSON response
    res.json(data); // Respond with the external data
  } catch (err) {
    res.status(500).json({ error: err.message }); // Error handling
  }
});

module.exports = router;
