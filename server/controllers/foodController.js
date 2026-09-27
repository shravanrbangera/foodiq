const fs = require('fs');
const path = require('path');
const { calculateHealthScore } = require('../utils/healthScore');
const { calculateScaledNutrition } = require('../utils/nutritionCalculator');

// Load Authoritative Canonical Databases
const DATA_DIR = path.join(__dirname, '../data');
let foodMaster = {};
let nutritionMaster = {};

try {
  const masterPath = path.join(DATA_DIR, 'food_master.json');
  if (fs.existsSync(masterPath)) {
    foodMaster = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
  }
} catch (e) {
  console.log('⚠️ Error loading food_master.json:', e.message);
}

try {
  const nutPath = path.join(DATA_DIR, 'nutrition_master.json');
  if (fs.existsSync(nutPath)) {
    nutritionMaster = JSON.parse(fs.readFileSync(nutPath, 'utf8'));
  }
} catch (e) {
  console.log('⚠️ Error loading nutrition_master.json:', e.message);
}

// Helper to assemble full food record with verified USDA nutrition
const buildFullFoodRecord = (foodId) => {
  const normId = (foodId || '').toLowerCase().replace(/ /g, '_').replace(/-/g, '_').trim();
  const masterEntry = foodMaster[normId];
  if (!masterEntry) return null;

  const nutEntry = nutritionMaster[normId] || {};
  const nutData = nutEntry.nutrition || null;
  const vitamins = nutEntry.vitamins || {};
  const minerals = nutEntry.minerals || {};

  const scoreObj = calculateHealthScore(nutData, vitamins, minerals);

  return {
    _id: normId,
    food_id: normId,
    name: masterEntry.canonical_name,
    canonical_name: masterEntry.canonical_name,
    aliases: masterEntry.aliases || [],
    category: masterEntry.category || "Prepared Food",
    subcategory: masterEntry.subcategory || "Specialties",
    cuisine: masterEntry.cuisine || "Indian / Global",
    country: masterEntry.country || "Global",
    region: masterEntry.region || "Global",
    image: masterEntry.image,
    representative_image: masterEntry.image,
    type: masterEntry.vegetarian ? (masterEntry.vegan ? "Vegan" : "Vegetarian") : "Non-Vegetarian",
    vegetarian: masterEntry.vegetarian,
    vegan: masterEntry.vegan,
    contains_meat: masterEntry.contains_meat,
    contains_fish: masterEntry.contains_fish,
    contains_shellfish: masterEntry.contains_shellfish,
    servingSize: nutData ? nutData.serving_size_g : 100,
    servingUnit: "g",
    nutrition: nutData ? {
      calories: nutData.calories_kcal,
      protein: nutData.protein_g,
      carbohydrates: nutData.carbohydrates_g,
      fat: nutData.fat_g,
      saturatedFat: nutData.saturated_fat_g,
      transFat: nutData.trans_fat_g,
      fiber: nutData.fiber_g,
      sugar: nutData.sugar_g,
      sodium: nutData.sodium_mg,
      cholesterol: nutData.cholesterol_mg
    } : null,
    vitamins: vitamins,
    minerals: minerals,
    goodFor: masterEntry.good_for || ["Nutritional Balance", "Sustained Energy"],
    description: masterEntry.description,
    healthScore: scoreObj.score,
    rating: scoreObj.rating,
    badgeColorHex: scoreObj.badgeColor,
    scoreBreakdown: scoreObj.breakdown,
    nutrition_available: nutData !== null,
    nutrition_id: masterEntry.nutrition_id
  };
};

// GET /api/foods
const getFoods = async (req, res) => {
  try {
    const { search, category, type, minProtein, maxCalories } = req.query;
    let foodList = Object.keys(foodMaster).map(buildFullFoodRecord).filter(Boolean);

    if (search) {
      const q = search.toLowerCase();
      foodList = foodList.filter(f => 
        f.name.toLowerCase().includes(q) || 
        f.food_id.includes(q) ||
        (f.aliases && f.aliases.some(a => a.toLowerCase().includes(q)))
      );
    }
    if (category && category !== 'All') {
      foodList = foodList.filter(f => f.category === category || f.subcategory === category);
    }
    if (type && type !== 'All') {
      foodList = foodList.filter(f => f.type === type);
    }
    if (minProtein) {
      foodList = foodList.filter(f => f.nutrition && f.nutrition.protein >= Number(minProtein));
    }
    if (maxCalories) {
      foodList = foodList.filter(f => f.nutrition && f.nutrition.calories <= Number(maxCalories));
    }

    res.json(foodList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/foods/:id
const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.query;

    let food = buildFullFoodRecord(id);

    // If not direct key match, try search in aliases or canonical names
    if (!food) {
      const cleanSearch = id.toLowerCase().replace(/_/g, ' ').trim();
      for (const [k, v] of Object.entries(foodMaster)) {
        if (v.canonical_name.toLowerCase() === cleanSearch || (v.aliases && v.aliases.some(a => a.toLowerCase() === cleanSearch))) {
          food = buildFullFoodRecord(k);
          break;
        }
      }
    }

    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    // Dynamic Serving Scaling (per 100g base formula)
    const servingGrams = Number(quantity) || food.servingSize || 100;
    const scaled = calculateScaledNutrition(food, servingGrams);

    res.json({
      food,
      scaled
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/foods/barcode/:barcode
const getFoodByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params;
    // Map barcode to a canonical food_id if registered
    const barcodeMap = {
      "890123456701": "chicken_breast",
      "890123456702": "egg",
      "890123456703": "paneer_tikka",
      "890123456704": "white_rice",
      "890123456705": "apple",
      "890123456706": "rolled_oats",
      "890123456707": "dal_khichdi",
      "890123456708": "chapati",
      "890123456709": "prawns",
      "890123456710": "broccoli"
    };

    const foodId = barcodeMap[barcode] || "apple";
    const food = buildFullFoodRecord(foodId);

    if (!food) {
      return res.status(404).json({ message: `No food product found for barcode ${barcode}` });
    }

    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/foods/categories
const getCategories = async (req, res) => {
  try {
    const catalogPath = path.join(DATA_DIR, 'categories_catalog.json');
    if (fs.existsSync(catalogPath)) {
      const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
      // Recalculate live counts
      const counts = {};
      Object.values(foodMaster).forEach(f => {
        const cat = f.category || "Indian Cuisines & Curries";
        counts[cat] = (counts[cat] || 0) + 1;
      });
      const enriched = catalog.map(c => ({
        ...c,
        count: counts[c.name] || c.count || 0
      }));
      return res.json(enriched);
    }

    const cats = new Set();
    Object.values(foodMaster).forEach(f => {
      if (f.category) cats.add(f.category);
    });
    res.json(Array.from(cats));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/foods/compare?food1=id1&food2=id2
const compareFoods = async (req, res) => {
  try {
    const { food1, food2 } = req.query;
    if (!food1 || !food2) {
      return res.status(400).json({ message: 'Please provide food1 and food2 query parameters' });
    }

    const item1 = buildFullFoodRecord(food1);
    const item2 = buildFullFoodRecord(food2);

    if (!item1 || !item2) {
      return res.status(404).json({ message: 'One or both foods for comparison were not found' });
    }

    const p1 = item1.nutrition?.protein || 0;
    const p2 = item2.nutrition?.protein || 0;

    res.json({
      food1: item1,
      food2: item2,
      comparison: {
        proteinDiff: Math.round((p1 - p2) * 10) / 10,
        winner: p1 >= p2 ? item1.name : item2.name
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFoods,
  getFoodById,
  getFoodByBarcode,
  getCategories,
  compareFoods
};
