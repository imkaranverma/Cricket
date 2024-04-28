const express = require('express');
const router = express.Router();
const Match = require('../model/match');


router.get('/:uniqueId', async (req, res) => {
    try {
      const uniqueId = req.params
      console.log(uniqueId)
      
      const match = await Match.findOne(uniqueId)
      
      if (match) {
        res.json(match);
      } else {
        res.json({ message: 'No match found.' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;