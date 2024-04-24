const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

// mongoose.connect(`mongodb+srv://pass:pass@eventcluster.blixsin.mongodb.net/`)
// mongoose.connect("mongodb://127.0.0.1:27017/Cricket")
mongoose.connect("mongodb+srv://akshaychauhan:askaychauhan@matchdatabase.hd4jvpk.mongodb.net/")
.then(() => {
    console.log('COnntedd!!!');
})
.catch((err) => {
    console.log('Errorrrr!!!', err);
})

const matchSchema = new mongoose.Schema({
  team1: {
    type: String,
    required: true
  },
  team2: {
    type: String,
    required: true
  },
  matchDate: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  tossWinner: {
    type: String,
    default: null
  },
  matchWinner: {
    type: String,
    default: null
  },
  uniqueId: {
    type: String,
    unique: true,
    required: true
  }
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
