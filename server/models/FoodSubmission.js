const mongoose = require('mongoose');

const FoodSubmissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: {
    type: String
  },
  userEmail: {
    type: String
  },
  foodName: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan'],
    default: 'Vegetarian'
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  suggestedNutrition: {
    calories: { type: Number, default: 0 },
    protein: { type: Number, default: 0 },
    carbohydrates: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    fiber: { type: Number, default: 0 }
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FoodSubmission', FoodSubmissionSchema);
