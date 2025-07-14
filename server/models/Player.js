const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'اسم اللاعب مطلوب'],
        trim: true
    },
    team: {
        type: String,
        required: [true, 'الفريق مطلوب'],
        trim: true
    },
    goals: {
        type: Number,
        default: 0,
        min: 0
    },
    yellowCards: {
        type: Number,
        default: 0,
        min: 0
    },
    redCards: {
        type: Number,
        default: 0,
        min: 0
    },
    matchesPlayed: {
        type: Number,
        default: 0,
        min: 0
    }
}, { timestamps: true });

// Update player stats after match is saved
PlayerSchema.statics.updateFromMatch = async function(match) {
    // Process team A players
    for (const player of match.teamA.players) {
        await this.findOneAndUpdate(
            { name: player.name, team: match.teamA.name },
            { 
                $inc: { 
                    goals: player.goals || 0,
                    yellowCards: player.yellowCards || 0,
                    redCards: player.redCards || 0,
                    matchesPlayed: 1
                }
            },
            { upsert: true, new: true }
        );
    }
    
    // Process team B players
    for (const player of match.teamB.players) {
        await this.findOneAndUpdate(
            { name: player.name, team: match.teamB.name },
            { 
                $inc: { 
                    goals: player.goals || 0,
                    yellowCards: player.yellowCards || 0,
                    redCards: player.redCards || 0,
                    matchesPlayed: 1
                }
            },
            { upsert: true, new: true }
        );
    }
};

module.exports = mongoose.model('Player', PlayerSchema);