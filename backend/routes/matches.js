var express = require('express');
var router = express.Router();
const Match = require('../model/match');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("matches here!!");
});

router.get('/create', async function (req, res) {

    try{

        const DateofMatch = new Date('2025-05-01'); // Date format: YYYY-MM-DD
        const TimeofMatch = '20:00'; // Time format: HH:MM


        // Get all matches from the database and send them to the client as a response.
        await Match.create({
            team1: "RCB",
            team2: "MI",
            matchDate: DateofMatch,
            winner:"MI",
            time: TimeofMatch,
            venue: "Wankhede Stadium",
            tossWinner: "RCB",
            matchWinner: "MI",
            uniqueId: "IPL24_37"
        });
        
        res.send("bann gyaya, creAtedd;");
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
    });
    module.exports = router;
