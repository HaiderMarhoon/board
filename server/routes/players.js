const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Get all players with filters
router.get('/', async (req, res) => {
  try {
    let query = {};
    
    if (req.query.team) {
      query.team = req.query.team;
    }
    
    if (req.query.minGoals) {
      query.goals = { $gte: parseInt(req.query.minGoals) };
    }
    
    const players = await Player.find(query).sort({ goals: -1 });
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;