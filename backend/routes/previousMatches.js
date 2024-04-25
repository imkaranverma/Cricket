const express = require('express');
const router = express.Router();
const Match = require('../model/match');

// Get previous matches based on today's date
router.get('/', async (req, res) => {
  try {
    const today = new Date();
    const previousMatches = await Match.find({ matchDate: { $lt: today } });
    res.json(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;