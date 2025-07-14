const mongoose = require('mongoose');

const connectDB = async () => {
  // Enhanced validation
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error('\n❌ CRITICAL ERROR: MONGODB_URI is undefined');
    console.error('Checked .env at:', require('path').resolve(__dirname, '../../.env'));
    console.error('Current environment variables:', Object.keys(process.env));
    throw new Error('MONGODB_URI not found in environment variables');
  }

  try {
    console.log('\n🔗 Attempting MongoDB connection...');
    const conn = await mongoose.connect(uri.trim(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000
    });
    console.log(`\n✅ MongoDB Connected to: ${conn.connection.host}\n`);
  } catch (err) {
    console.error('\n❌ FATAL DB CONNECTION ERROR:', err.message);
    console.error('URI used:', uri.replace(/:[^@]+@/, ':****@')); // Redacts password
    process.exit(1);
  }
};

module.exports = connectDB;