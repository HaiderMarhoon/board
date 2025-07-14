require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
// Debugging - add this right after dotenv config
console.log('Environment Variables Loaded:');
console.log('MONGODB_URI:', process.env.MONGODB_URI ? '***REDACTED***' : 'NOT FOUND!');
console.log('Current Directory:', __dirname);
console.log('Trying to load .env from:', require('path').resolve(__dirname, '../.env'));

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Routes
const matchesRouter = require('./routes/matches');
const playersRouter = require('./routes/players');
const teamsRouter = require('./routes/teams');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store');
    }
  }
}));

// Routes
app.use('/api/matches', matchesRouter);
app.use('/api/players', playersRouter);
app.use('/api/teams', teamsRouter);

// Serve HTML files from views directory
app.get('/matches', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/matches.html'));
});

app.get('/players', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/players.html'));
});

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/stats.html'));
});
app.get('/match-details.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/match-details.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));