const Food = require('../models/Food');
const User = require('../models/User');
const FoodSubmission = require('../models/FoodSubmission');
const initialFoods = require('../seed/seedData');
const { calculateHealthScore } = require('../utils/healthScore');

// GET /api/admin/metrics
const getAdminMetrics = async (req, res) => {
  try {
    let totalFoods = initialFoods.length;
    let totalUsers = 12;
    let pendingSubmissions = 3;

    if (Food.db && Food.db.readyState === 1) {
      totalFoods = await Food.countDocuments();
      totalUsers = await User.countDocuments();
      pendingSubmissions = await FoodSubmission.countDocuments({ status: 'pending' });
    }

    res.json({
      totalFoods,
      totalUsers,
      pendingSubmissions
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/admin/foods (Create Food)
const createFood = async (req, res) => {
  try {
    const foodData = req.body;
    if (!foodData.name || !foodData.category) {
      return res.status(400).json({ message: 'Name and Category are required' });
    }

    let food = null;
    if (Food.db && Food.db.readyState === 1) {
      food = await Food.create(foodData);
    } else {
      food = { _id: Date.now().toString(), ...foodData, createdAt: new Date() };
      initialFoods.push(food);
    }

    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/admin/foods/:id (Update Food)
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    let updated = null;

    if (Food.db && Food.db.readyState === 1 && id.match(/^[0-9a-fA-F]{24}$/)) {
      updated = await Food.findByIdAndUpdate(id, req.body, { new: true });
    } else {
      const index = initialFoods.findIndex((f, idx) => f._id?.toString() === id || idx.toString() === id);
      if (index !== -1) {
        initialFoods[index] = { ...initialFoods[index], ...req.body };
        updated = initialFoods[index];
      }
    }

    if (!updated) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/admin/foods/:id (Delete Food)
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    if (Food.db && Food.db.readyState === 1 && id.match(/^[0-9a-fA-F]{24}$/)) {
      await Food.findByIdAndDelete(id);
    } else {
      const idx = initialFoods.findIndex((f, i) => f._id?.toString() === id || i.toString() === id);
      if (idx !== -1) {
        initialFoods.splice(idx, 1);
      }
    }
    res.json({ message: 'Food item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/admin/submissions (Pending Queue)
const getPendingSubmissions = async (req, res) => {
  try {
    let list = [];
    if (FoodSubmission.db && FoodSubmission.db.readyState === 1) {
      list = await FoodSubmission.find({ status: 'pending' }).sort({ createdAt: -1 });
    }
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/admin/submissions/:id/approve (Approve and Convert to Food)
const approveSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    let submission = null;

    if (FoodSubmission.db && FoodSubmission.db.readyState === 1 && id.match(/^[0-9a-fA-F]{24}$/)) {
      submission = await FoodSubmission.findById(id);
      if (submission) {
        submission.status = 'approved';
        await submission.save();

        // Automatically create public Food record
        await Food.create({
          name: submission.foodName,
          category: submission.category,
          type: submission.type || 'Vegetarian',
          image: submission.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
          description: submission.description,
          servingSize: 100,
          servingUnit: 'g',
          nutrition: {
            calories: submission.suggestedNutrition?.calories || 150,
            protein: submission.suggestedNutrition?.protein || 10,
            carbohydrates: submission.suggestedNutrition?.carbohydrates || 15,
            fat: submission.suggestedNutrition?.fat || 5,
            fiber: submission.suggestedNutrition?.fiber || 2
          },
          goodFor: ["User Submitted", submission.category]
        });
      }
    }

    res.json({ message: 'Submission approved and promoted to public food catalog', submission });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/admin/submissions/:id/reject
const rejectSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    if (FoodSubmission.db && FoodSubmission.db.readyState === 1 && id.match(/^[0-9a-fA-F]{24}$/)) {
      await FoodSubmission.findByIdAndUpdate(id, { status: 'rejected' });
    }
    res.json({ message: 'Submission rejected' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdminMetrics,
  createFood,
  updateFood,
  deleteFood,
  getPendingSubmissions,
  approveSubmission,
  rejectSubmission
};
