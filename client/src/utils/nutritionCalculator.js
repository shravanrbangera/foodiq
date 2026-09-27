/**
 * Client-side dynamic portion calculator
 */

export function calculateScaledNutrition(food, userQuantity = 100) {
  if (!food) return null;

  const baseSize = food.servingSize || 100;
  const multiplier = Number(userQuantity) / baseSize;

  const round = (val, decimals = 1) => {
    if (val === undefined || val === null) return 0;
    const factor = Math.pow(10, decimals);
    return Math.round(Number(val) * multiplier * factor) / factor;
  };

  const nutrition = {
    calories: round(food.nutrition?.calories, 0),
    protein: round(food.nutrition?.protein, 1),
    carbohydrates: round(food.nutrition?.carbohydrates, 1),
    fat: round(food.nutrition?.fat, 1),
    fiber: round(food.nutrition?.fiber, 1),
    sugar: round(food.nutrition?.sugar, 1),
    sodium: round(food.nutrition?.sodium, 0),
    cholesterol: round(food.nutrition?.cholesterol, 0)
  };

  const vitamins = {};
  if (food.vitamins) {
    Object.keys(food.vitamins).forEach(k => {
      vitamins[k] = round(food.vitamins[k], 1);
    });
  }

  const minerals = {};
  if (food.minerals) {
    Object.keys(food.minerals).forEach(k => {
      minerals[k] = round(food.minerals[k], 1);
    });
  }

  const dv = {
    calories: Math.round((nutrition.calories / 2000) * 100),
    protein: Math.round((nutrition.protein / 50) * 100),
    carbohydrates: Math.round((nutrition.carbohydrates / 275) * 100),
    fat: Math.round((nutrition.fat / 78) * 100),
    fiber: Math.round((nutrition.fiber / 28) * 100),
    sodium: Math.round((nutrition.sodium / 2300) * 100),
    calcium: Math.round(((minerals.calcium || 0) / 1300) * 100),
    iron: Math.round(((minerals.iron || 0) / 18) * 100),
    potassium: Math.round(((minerals.potassium || 0) / 4700) * 100),
    vitaminC: Math.round(((vitamins.vitaminC || 0) / 90) * 100)
  };

  return {
    servingSize: userQuantity,
    servingUnit: food.servingUnit || 'g',
    multiplier,
    nutrition,
    vitamins,
    minerals,
    dv
  };
}
