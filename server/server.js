const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Food = require('./models/Food');
const initialFoods = require('./seed/seedData');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/foods', require('./routes/foodRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'FoodIQ API Server', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const dbConnected = await connectDB();

  if (dbConnected) {
    try {
      const count = await Food.countDocuments();
      if (count === 0) {
        console.log('Seeding initial FoodIQ dataset into MongoDB...');
        await Food.insertMany(initialFoods);
        console.log(`Seeded ${initialFoods.length} foods successfully.`);
      }
    } catch (err) {
      console.error('Seeding error:', err.message);
    }
  }

  app.listen(PORT, () => {
    console.log(`🥗 FoodIQ Backend Server running on port ${PORT}`);
  });
};

startServer();
