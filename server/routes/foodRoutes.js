const express = require('express');
const router = express.Router();
const {
  getFoods,
  getFoodById,
  getFoodByBarcode,
  compareFoods,
  getCategories
} = require('../controllers/foodController');
const { scanImage } = require('../controllers/aiController');

router.get('/', getFoods);
router.get('/categories', getCategories);
router.get('/compare', compareFoods);
router.get('/barcode/:barcode', getFoodByBarcode);
router.post('/identify-image', scanImage);
router.post('/predict', scanImage);
router.get('/:id', getFoodById);

module.exports = router;
