const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/foodiq';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 3000 // 3 sec timeout for quick fallback notice
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`MongoDB Connection Warning: ${error.message}. Running with in-memory database fallback mode.`);
    return false;
  }
};

module.exports = connectDB;
