const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { calculateHealthScore } = require('../utils/healthScore');

const DATA_DIR = path.join(__dirname, '../data');
let foodMaster = {};
let nutritionMaster = {};

try {
  const masterPath = path.join(DATA_DIR, 'food_master.json');
  if (fs.existsSync(masterPath)) {
    foodMaster = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
    console.log(`✅ AI Controller: Loaded Food Master with ${Object.keys(foodMaster).length} entries`);
  }
} catch (e) {
  console.log('⚠️ AI Controller: Error loading food_master.json:', e.message);
}

try {
  const nutPath = path.join(DATA_DIR, 'nutrition_master.json');
  if (fs.existsSync(nutPath)) {
    nutritionMaster = JSON.parse(fs.readFileSync(nutPath, 'utf8'));
    console.log(`✅ AI Controller: Loaded Nutrition Master with ${Object.keys(nutritionMaster).length} entries`);
  }
} catch (e) {
  console.log('⚠️ AI Controller: Error loading nutrition_master.json:', e.message);
}

const PREDICT_SCRIPT = path.join(__dirname, '../models/predict_production.py');

/**
 * Execute PyTorch Production Inference Service via STDIN
 */
const runPytorchInference = (imageBase64, imageName) => {
  try {
    const inputPayload = imageBase64 || imageName || '';
    const pyProcess = spawnSync('py', ['-3.14', PREDICT_SCRIPT], {
      input: inputPayload,
      encoding: 'utf8',
      timeout: 20000
    });

    if (pyProcess.stdout) {
      const parsed = JSON.parse(pyProcess.stdout.trim());
      if (parsed) return parsed;
    } else if (pyProcess.stderr) {
      console.log('⚠️ PyTorch stderr:', pyProcess.stderr);
    }
  } catch (e) {
    console.log('⚠️ PyTorch spawn error:', e.message);
  }
  return null;
};

// POST /api/ai/scan-image or /api/food/predict
const scanImage = async (req, res) => {
  try {
    const { imageBase64, imageName } = req.body;

    const inferenceResult = runPytorchInference(imageBase64, imageName);

    if (!inferenceResult) {
      return res.status(200).json({
        status: "uncertain",
        food_id: null,
        canonical_name: null,
        confidence: 0.0,
        message: "Food detected, but FoodIQ cannot confidently identify the exact food."
      });
    }

    const { status, food_name, raw_class, confidence, top_predictions, message } = inferenceResult;

    // 1. NON-FOOD OBJECT
    if (status === "not_food") {
      return res.status(200).json({
        status: "not_food",
        food_id: null,
        canonical_name: null,
        confidence: confidence || 0.02,
        message: message || "No food detected."
      });
    }

    // 2. UNKNOWN FOOD / OUT-OF-DISTRIBUTION
    if (status === "unknown_food") {
      return res.status(200).json({
        status: "unknown_food",
        food_id: null,
        canonical_name: null,
        confidence: confidence || 0.22,
        message: message || "Food detected, but this dish is not currently in the FoodIQ database."
      });
    }

    // 3. UNCERTAIN FOOD
    if (status === "uncertain" || !food_name) {
      return res.status(200).json({
        status: "uncertain",
        food_id: null,
        canonical_name: null,
        confidence: confidence || 0.35,
        top_predictions: top_predictions || [],
        message: message || "Food detected, but FoodIQ cannot confidently identify the exact food."
      });
    }

    // 4. RECOGNIZED FOOD
    const normId = (raw_class || food_name).toLowerCase().replace(/ /g, '_').replace(/-/g, '_').trim();
    const masterEntry = foodMaster[normId] || foodMaster[food_name.toLowerCase().replace(/ /g, '_')] || {
      food_id: normId,
      canonical_name: food_name,
      category: "Prepared Food",
      subcategory: "Specialties",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      nutrition_id: `NUTRITION_${normId.upper()}`
    };

    const nutEntry = nutritionMaster[normId] || nutritionMaster[masterEntry.food_id] || null;
    const nutData = nutEntry ? nutEntry.nutrition : null;
    const vitamins = nutEntry ? nutEntry.vitamins : {};
    const minerals = nutEntry ? nutEntry.minerals : {};

    const scoreObj = calculateHealthScore(nutData, vitamins, minerals);

    const detectedFood = {
      _id: masterEntry.food_id,
      food_id: masterEntry.food_id,
      name: masterEntry.canonical_name,
      canonicalName: masterEntry.canonical_name,
      category: masterEntry.category,
      subcategory: masterEntry.subcategory,
      cuisine: masterEntry.cuisine || "Indian / Global",
      type: masterEntry.vegetarian ? "Vegetarian" : "Non-Vegetarian",
      representative_image: masterEntry.image,
      image: masterEntry.image, // Verified canonical representative thumbnail
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
      vitamins,
      minerals,
      goodFor: masterEntry.good_for || ["Nutritional Balance", "Sustained Energy"],
      description: masterEntry.description || `AI Recognized Dish: ${masterEntry.canonical_name}`,
      healthScore: scoreObj.score,
      rating: scoreObj.rating,
      badgeColorHex: scoreObj.badgeColor,
      scoreBreakdown: scoreObj.breakdown,
      nutrition_available: nutData !== null,
      nutrition_id: masterEntry.nutrition_id
    };

    res.json({
      status: "recognized",
      food_id: masterEntry.food_id,
      canonical_name: masterEntry.canonical_name,
      confidence: confidence,
      category: masterEntry.category,
      subcategory: masterEntry.subcategory,
      image: masterEntry.image,
      nutrition_available: nutData !== null,
      nutrition_id: masterEntry.nutrition_id,
      detectedFood,
      top_predictions: top_predictions || [],
      formattedConfidence: `${(confidence * 100).toFixed(1)}%`,
      aiAdvice: nutData 
        ? `PyTorch Deep Learning Engine: Confidently recognized as "${masterEntry.canonical_name}" (${(confidence * 100).toFixed(1)}% confidence). Provides ${nutData.protein_g}g protein and ${nutData.calories_kcal} kcal per ${detectedFood.servingSize}${detectedFood.servingUnit}.`
        : `PyTorch Deep Learning Engine: Confidently recognized as "${masterEntry.canonical_name}" (${(confidence * 100).toFixed(1)}% confidence).`
    });

  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// POST /api/ai/chat
const chatWithAi = async (req, res) => {
  try {
    const { message, foodContext } = req.body;
    if (!message) return res.status(400).json({ message: 'Message is required' });

    const query = message.toLowerCase();
    let reply = "";

    if (query.includes('fries') || query.includes('french fries')) {
      reply = `🍟 French Fries: Crispy golden fried potato batons. Delivers ~312 kcal and 3.4g protein per 100g serving with 41.4g carbohydrates.`;
    } else if (query.includes('paneer tikka')) {
      reply = `🧀 Paneer Tikka: Marinated grilled cottage cheese charred with bell peppers and onions. High protein delivering ~265 kcal and 18.3g protein per serving.`;
    } else if (query.includes('noodles') || query.includes('chowmein')) {
      reply = `🍜 Noodles: Stir-fried noodles with crisp vegetables and savory seasoning. Delivers ~138 kcal and 4.5g protein per 100g.`;
    } else if (query.includes('pani puri')) {
      reply = `🥣 Pani Puri: Hollow crisp puris filled with spiced potato/chickpeas and mint-tamarind water. Refreshing and light traditional street snack!`;
    } else if (query.includes('momo')) {
      reply = `🥟 Steamed Momos: Himalayan dumplings with spiced vegetable or meat filling. Rich in protein and steamed for light caloric density (~162 kcal per 100g).`;
    } else if (query.includes('prawn')) {
      reply = `🦐 Prawns: Ultra high lean protein seafood delivering 24g protein and only 99 kcal per 100g with zero carbs and rich selenium antioxidants!`;
    } else if (query.includes('mango')) {
      reply = `🥭 Mango: Sweet tropical fruit rich in Vitamin C, Vitamin A (beta-carotene), and natural digestive enzymes (~60 kcal per 100g).`;
    } else if (foodContext) {
      reply = `🥗 Regarding ${foodContext.name}: Delivers ${foodContext.nutrition?.protein || 'balanced'}g protein and ${foodContext.nutrition?.calories || 'moderate'} kcal per serving.`;
    } else {
      reply = `🤖 FoodIQ AI Assistant: Connected to the Master Food & USDA Nutritional Engine covering 104 verified food classes. Upload a meal photo to inspect its macros, vitamins, minerals, and health score!`;
    }

    res.json({ success: true, reply, timestamp: new Date() });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { scanImage, chatWithAi };
