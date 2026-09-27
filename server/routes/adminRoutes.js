const express = require('express');
const router = express.Router();
const {
  getAdminMetrics,
  createFood,
  updateFood,
  deleteFood,
  getPendingSubmissions,
  approveSubmission,
  rejectSubmission
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.use(protect, adminOnly);

router.get('/metrics', getAdminMetrics);
router.post('/foods', createFood);
router.put('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

router.get('/submissions', getPendingSubmissions);
router.put('/submissions/:id/approve', approveSubmission);
router.put('/submissions/:id/reject', rejectSubmission);

module.exports = router;
