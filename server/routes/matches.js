const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

// Save a new match

// server/routes/matches.js
router.post('/', async (req, res) => {
    try {
        // Validate request body
        if (!req.body.teamA || !req.body.teamB || !req.body.events) {
            return res.status(400).json({
                success: false,
                error: "بيانات ناقصة: يجب إدخال معلومات الفريقين والأحداث"
            });
        }

        // Validate each event
        const invalidEvents = req.body.events.filter(event =>
            !event.time || !event.text || !event.type
        );

        if (invalidEvents.length > 0) {
            return res.status(400).json({
                success: false,
                error: `يوجد ${invalidEvents.length} حدث غير صالح`
            });
        }

        const newMatch = new Match({
            teamA: req.body.teamA,
            teamB: req.body.teamB,
            events: req.body.events.map(event => ({
                time: event.time.replace(/[\[\]]/g, ''), // Clean time format
                text: event.text.trim(),
                type: event.type
            }))
        });

        const savedMatch = await newMatch.save();
        const Player = require('../models/Player');

        await Player.updateFromMatch(savedMatch);  // Update player stats
        res.status(201).json(savedMatch);

        res.status(201).json({
            success: true,
            data: savedMatch
        });

    } catch (err) {
        console.error('Save error details:', err);

        let userMessage = "خطأ غير معروف أثناء الحفظ";
        if (err.name === 'ValidationError') {
            userMessage = "بيانات غير صالحة: " +
                Object.values(err.errors).map(e => e.message).join(', ');
        } else if (err.code === 11000) {
            userMessage = "هذه المباراة مسجلة مسبقاً";
        }

        res.status(400).json({
            success: false,
            error: userMessage,
            systemError: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
});

// Get all matches
router.get('/', async (req, res) => {
    try {
        const matches = await Match.find().sort({ date: -1 });
        res.json(matches);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific match
router.get('/:id', async (req, res) => {
    try {
        const match = await Match.findById(req.params.id);
        if (!match) return res.status(404).json({ message: 'Match not found' });
        res.json(match);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const match = await Match.findById(req.params.id);
        if (!match) {
            return res.status(404).json({ error: 'المباراة غير موجودة' });
        }
        res.json(match);
    } catch (err) {
        res.status(500).json({ error: 'خطأ في السيرفر' });
    }
});
// Delete a match
router.delete('/:id', async (req, res) => {
  try {
    const deletedMatch = await Match.findByIdAndDelete(req.params.id);
    
    if (!deletedMatch) {
      return res.status(404).json({ error: 'المباراة غير موجودة' });
    }

    // Optional: Update player stats (reverse the match effects)
    await Player.updateMany(
      { 
        $or: [
          { name: { $in: deletedMatch.teamA.players.map(p => p.name) }, team: deletedMatch.teamA.name },
          { name: { $in: deletedMatch.teamB.players.map(p => p.name) }, team: deletedMatch.teamB.name }
        ]
      },
      {
        $inc: {
          goals: -1, // Adjust based on actual player stats
          matchesPlayed: -1
          // Add similar for cards if needed
        }
      }
    );

    res.json({ message: 'تم الحذف بنجاح' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;