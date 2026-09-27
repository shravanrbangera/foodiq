const Favorite = require('../models/Favorite');
const FoodSubmission = require('../models/FoodSubmission');
const SearchHistory = require('../models/SearchHistory');
const Food = require('../models/Food');
const initialFoods = require('../seed/seedData');
const { calculateHealthScore } = require('../utils/healthScore');

const enrichFood = (f) => {
  const scoreObj = calculateHealthScore(f.nutrition, f.vitamins, f.minerals);
  return {
    ...f,
    healthScore: scoreObj.score,
    rating: scoreObj.rating,
    badgeColor: scoreObj.badgeColor
  };
};

// GET /api/user/favorites
const getFavorites = async (req, res) => {
  try {
    const userId = req.user._id;
    let favs = [];

    if (Favorite.db && Favorite.db.readyState === 1) {
      favs = await Favorite.find({ userId }).populate('foodId');
      favs = favs.map(f => f.foodId ? enrichFood(f.foodId.toObject()) : null).filter(Boolean);
    } else {
      // Fallback in-memory favorites
      favs = initialFoods.slice(0, 3).map(enrichFood);
    }

    res.json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/user/favorites
const addFavorite = async (req, res) => {
  try {
    const userId = req.user._id;
    const { foodId } = req.body;

    if (Favorite.db && Favorite.db.readyState === 1) {
      const existing = await Favorite.findOne({ userId, foodId });
      if (!existing) {
        await Favorite.create({ userId, foodId });
      }
    }
    res.status(201).json({ message: 'Added to favorites' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/user/favorites/:foodId
const removeFavorite = async (req, res) => {
  try {
    const userId = req.user._id;
    const { foodId } = req.params;

    if (Favorite.db && Favorite.db.readyState === 1) {
      await Favorite.deleteOne({ userId, foodId });
    }
    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/user/submit-food
const submitFood = async (req, res) => {
  try {
    const userId = req.user._id;
    const { foodName, category, type, image, description, suggestedNutrition } = req.body;

    if (!foodName || !category) {
      return res.status(400).json({ message: 'Food Name and Category are required' });
    }

    let submission = {
      userId,
      userName: req.user.name,
      userEmail: req.user.email,
      foodName,
      category,
      type: type || 'Vegetarian',
      image: image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      description,
      suggestedNutrition: suggestedNutrition || {},
      status: 'pending',
      createdAt: new Date()
    };

    if (FoodSubmission.db && FoodSubmission.db.readyState === 1) {
      submission = await FoodSubmission.create(submission);
    }

    res.status(201).json({
      message: 'Food submitted successfully! It is now pending admin approval.',
      submission
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/user/my-submissions
const getMySubmissions = async (req, res) => {
  try {
    const userId = req.user._id;
    let list = [];
    if (FoodSubmission.db && FoodSubmission.db.readyState === 1) {
      list = await FoodSubmission.find({ userId }).sort({ createdAt: -1 });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFavorites,
  addFavorite,
  removeFavorite,
  submitFood,
  getMySubmissions
};
