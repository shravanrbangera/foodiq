const express = require('express');
const router = express.Router();
const {
  getFavorites,
  addFavorite,
  removeFavorite,
  submitFood,
  getMySubmissions
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/favorites', protect, getFavorites);
router.post('/favorites', protect, addFavorite);
router.delete('/favorites/:foodId', protect, removeFavorite);
router.post('/submit-food', protect, submitFood);
router.get('/submissions', protect, getMySubmissions);

module.exports = router;
