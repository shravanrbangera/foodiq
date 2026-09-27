const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  category: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  type: {
    type: String,
    enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan'],
    default: 'Vegetarian'
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
  },
  servingSize: {
    type: Number,
    default: 100
  },
  servingUnit: {
    type: String,
    default: 'g'
  },
  nutrition: {
    calories: { type: Number, default: 0 },
    protein: { type: Number, default: 0 },
    carbohydrates: { type: Number, default: 0 },
    fat: { type: Number, default: 0 },
    fiber: { type: Number, default: 0 },
    sugar: { type: Number, default: 0 },
    sodium: { type: Number, default: 0 },
    cholesterol: { type: Number, default: 0 }
  },
  vitamins: {
    vitaminA: { type: Number, default: 0 },
    vitaminB1: { type: Number, default: 0 },
    vitaminB2: { type: Number, default: 0 },
    vitaminB3: { type: Number, default: 0 },
    vitaminB6: { type: Number, default: 0 },
    vitaminB12: { type: Number, default: 0 },
    vitaminC: { type: Number, default: 0 },
    vitaminD: { type: Number, default: 0 },
    vitaminE: { type: Number, default: 0 },
    vitaminK: { type: Number, default: 0 }
  },
  minerals: {
    calcium: { type: Number, default: 0 },
    iron: { type: Number, default: 0 },
    magnesium: { type: Number, default: 0 },
    phosphorus: { type: Number, default: 0 },
    potassium: { type: Number, default: 0 },
    zinc: { type: Number, default: 0 }
  },
  goodFor: [{
    type: String
  }],
  barcode: {
    type: String,
    index: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Food', FoodSchema);
