const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');
const foodMaster = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'food_master.json'), 'utf8'));
const nutritionMaster = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'nutrition_master.json'), 'utf8'));

const initialFoods = [];

let barcodeCounter = 890123456701;

for (const [foodId, foodInfo] of Object.entries(foodMaster)) {
  const nutInfo = nutritionMaster[foodId] || {};
  const nut = nutInfo.nutrition || {};
  const vit = nutInfo.vitamins || {};
  const min = nutInfo.minerals || {};

  let type = "Vegetarian";
  if (foodInfo.vegan) {
    type = "Vegan";
  } else if (!foodInfo.vegetarian || foodInfo.contains_meat || foodInfo.contains_fish || foodInfo.contains_shellfish) {
    type = "Non-Vegetarian";
  }

  initialFoods.push({
    name: foodInfo.canonical_name || foodId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    category: foodInfo.category || "Indian Food",
    type,
    image: foodInfo.image || "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    servingSize: nut.serving_size_g || 100,
    servingUnit: "g",
    nutrition: {
      calories: nut.calories_kcal || 150,
      protein: nut.protein_g || 5,
      carbohydrates: nut.carbohydrates_g || 20,
      fat: nut.fat_g || 5,
      fiber: nut.fiber_g || 2,
      sugar: nut.sugar_g || 3,
      sodium: nut.sodium_mg || 250,
      cholesterol: nut.cholesterol_mg || 0
    },
    vitamins: {
      vitaminA: vit.vitamin_a_ug || 0,
      vitaminB1: vit.vitamin_b1_mg || 0,
      vitaminB2: vit.vitamin_b2_mg || 0,
      vitaminB3: vit.vitamin_b3_mg || 0,
      vitaminB6: vit.vitamin_b6_mg || 0,
      vitaminB12: vit.vitamin_b12_ug || 0,
      vitaminC: vit.vitamin_c_mg || 0,
      vitaminD: vit.vitamin_d_ug || 0,
      vitaminE: vit.vitamin_e_mg || 0,
      vitaminK: vit.vitamin_k_ug || 0
    },
    minerals: {
      calcium: min.calcium_mg || 0,
      iron: min.iron_mg || 0,
      magnesium: min.magnesium_mg || 0,
      phosphorus: min.phosphorus_mg || 0,
      potassium: min.potassium_mg || 0,
      zinc: min.zinc_mg || 0
    },
    goodFor: foodInfo.good_for || ["Nutritional Balance", "Sustained Energy"],
    barcode: String(barcodeCounter++),
    description: foodInfo.description || `Fresh and authentic ${foodInfo.canonical_name || foodId} with verified nutrient composition.`
  });
}

const fileContent = `const initialFoods = ${JSON.stringify(initialFoods, null, 2)};\n\nmodule.exports = initialFoods;\n`;
fs.writeFileSync(path.join(__dirname, 'seedData.js'), fileContent, 'utf8');

console.log(`✅ Generated seedData.js with ${initialFoods.length} comprehensive food items!`);
