const express = require('express');
const router = express.Router();
const { scanImage, chatWithAi } = require('../controllers/aiController');

router.post('/scan-image', scanImage);
router.post('/predict', scanImage);
router.post('/chat', chatWithAi);

module.exports = router;
