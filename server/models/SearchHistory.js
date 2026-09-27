const mongoose = require('mongoose');

const SearchHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  query: {
    type: String,
    required: true
  },
  searchedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SearchHistory', SearchHistorySchema);
