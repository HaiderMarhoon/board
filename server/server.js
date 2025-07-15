// Add this AT THE VERY TOP of server.js
const path = require('path');
require('dotenv').config({ 
  path: path.resolve(__dirname, '../.env'), // Absolute path
  override: true // Override existing variables
});

// Debug: Check if loaded
console.log('MONGODB_URI from .env:', process.env.MONGODB_URI || 'NOT FOUND!');
console.log('Loading from:', path.resolve(__dirname, '../.env'));
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

// Routes
const matchesRouter = require("./routes/matches");
const playersRouter = require("./routes/players");
const teamsRouter = require("./routes/teams");

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Static files - assuming server.js is in /server folder
app.use(
  express.static(path.join(__dirname, "../public"), {
    maxAge: "1y",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-store");
      }
    },
  })
);

// API Routes
app.use("/api/matches", matchesRouter);
app.use("/api/players", playersRouter);
app.use("/api/teams", teamsRouter);

// Serve HTML files from views directory
app.get("/matches", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/matches.html"));
});

app.get("/players", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/players.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/stats.html"));
});

app.get("/match-details.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/match-details.html"));
});

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Production static files (if you have a build process)
if (process.env.NODE_ENV === "production") {
  // Only use this if you actually have a build folder
  // app.use(express.static(path.join(__dirname, '../public/build')));

  // Catch-all route - must be AFTER all other routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT} - http://localhost:${PORT}`);
  console.log(
    "MongoDB URI:",
    process.env.MONGODB_URI ? "Connected" : "Not Found"
  );
});
