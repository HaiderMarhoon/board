const mongoose = require('mongoose');

// server/models/Match.js
const MatchSchema = new mongoose.Schema({
  teamA: {
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    players: [{
      playerId: Number,
      name: String,
      goals: Number,
      yellowCards: Number,
      redCards: Number
    }]
  },
  teamB: {
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    players: [{
      playerId: Number,
      name: String,
      goals: Number,
      yellowCards: Number,
      redCards: Number
    }]
  },
  events: [{
    time: { type: String, required: true, match: /^\d{2}:\d{2}$/ },
    text: { type: String, required: true },
    type: { 
      type: String, 
      required: true,
      enum: ['goal', 'yellow', 'red', 'substitution', 'half-time', 'full-time']
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Match', MatchSchema);