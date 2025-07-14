const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find().sort({ name: 1 });
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Add this new route
router.get('/stats', async (req, res) => {
    try {
        const stats = await Match.aggregate([
            {
                $facet: {
                    teamA: [
                        { $group: {
                            _id: "$teamA.name",
                            matchesPlayed: { $sum: 1 },
                            wins: { $sum: { $cond: [{ $gt: ["$teamA.score", "$teamB.score"] }, 1, 0] }},
                            draws: { $sum: { $cond: [{ $eq: ["$teamA.score", "$teamB.score"] }, 1, 0] }},
                            losses: { $sum: { $cond: [{ $lt: ["$teamA.score", "$teamB.score"] }, 1, 0] }},
                            goalsFor: { $sum: "$teamA.score" },
                            goalsAgainst: { $sum: "$teamB.score" }
                        }}
                    ],
                    teamB: [
                        { $group: {
                            _id: "$teamB.name",
                            matchesPlayed: { $sum: 1 },
                            wins: { $sum: { $cond: [{ $gt: ["$teamB.score", "$teamA.score"] }, 1, 0] }},
                            draws: { $sum: { $cond: [{ $eq: ["$teamB.score", "$teamA.score"] }, 1, 0] }},
                            losses: { $sum: { $cond: [{ $lt: ["$teamB.score", "$teamA.score"] }, 1, 0] }},
                            goalsFor: { $sum: "$teamB.score" },
                            goalsAgainst: { $sum: "$teamA.score" }
                        }}
                    ]
                }
            },
            {
                $project: {
                    allTeams: { $concatArrays: ["$teamA", "$teamB"] }
                }
            },
            { $unwind: "$allTeams" },
            { 
                $group: {
                    _id: "$allTeams._id",
                    matchesPlayed: { $sum: "$allTeams.matchesPlayed" },
                    wins: { $sum: "$allTeams.wins" },
                    draws: { $sum: "$allTeams.draws" },
                    losses: { $sum: "$allTeams.losses" },
                    goalsFor: { $sum: "$allTeams.goalsFor" },
                    goalsAgainst: { $sum: "$allTeams.goalsAgainst" }
                }
            },
            { $sort: { wins: -1, goalsFor: -1 } }
        ]);

        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;