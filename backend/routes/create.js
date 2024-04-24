const express = require('express');
const router = express.Router();
const Match = require('../model/match');

// Create a new match
router.post('/', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, matchWinner, uniqueId } = req.body;

    const newMatch = new Match({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      matchWinner,
      uniqueId
    });

    await newMatch.save();

    res.status(201).json({ message: 'Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;