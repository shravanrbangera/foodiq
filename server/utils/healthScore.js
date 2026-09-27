/**
 * FoodIQ Health Score Engine
 * Mathematically calculates health score (0-100) based on nutritional density.
 * 
 * IMPORTANT: If nutrition data is unavailable or missing, this MUST return null / "Unavailable"
 * rather than fabricating a score.
 */

function calculateHealthScore(nutrition, vitamins = {}, minerals = {}) {
  // If nutrition is missing or empty, DO NOT fabricate a score
  if (!nutrition || (nutrition.calories === undefined && nutrition.calories_kcal === undefined)) {
    return {
      score: null,
      rating: "Unavailable",
      badgeColor: "#94A3B8",
      breakdown: { message: "Exact nutrition data unavailable to compute health score." }
    };
  }

  const cal = Number(nutrition.calories || nutrition.calories_kcal || 0);
  const protein = Number(nutrition.protein || nutrition.protein_g || 0);
  const carbs = Number(nutrition.carbohydrates || nutrition.carbohydrates_g || 0);
  const fat = Number(nutrition.fat || nutrition.fat_g || 0);
  const fiber = Number(nutrition.fiber || nutrition.fiber_g || 0);
  const sugar = Number(nutrition.sugar || nutrition.sugar_g || 0);
  const sodium = Number(nutrition.sodium || nutrition.sodium_mg || 0);
  const satFat = Number(nutrition.saturatedFat || nutrition.saturated_fat_g || 0);

  // If all macros are zero, nutrition is unavailable
  if (cal === 0 && protein === 0 && carbs === 0 && fat === 0) {
    return {
      score: null,
      rating: "Unavailable",
      badgeColor: "#94A3B8",
      breakdown: { message: "Exact nutrition data unavailable to compute health score." }
    };
  }

  let score = 50; // Base score

  // 1. Protein Boost (+0 to +25)
  const proteinBoost = Math.min(25, (protein / 100) * 120);
  score += proteinBoost;

  // 2. Fiber Boost (+0 to +20)
  const fiberBoost = Math.min(20, fiber * 3.5);
  score += fiberBoost;

  // 3. Sugar Penalty (-0 to -25)
  let sugarPenalty = 0;
  if (sugar > 5) {
    sugarPenalty = Math.min(25, (sugar - 5) * 1.5);
    score -= sugarPenalty;
  }

  // 4. Sodium Penalty (-0 to -15)
  let sodiumPenalty = 0;
  if (sodium > 250) {
    sodiumPenalty = Math.min(15, ((sodium - 250) / 100) * 2.5);
    score -= sodiumPenalty;
  }

  // 5. Saturated Fat Penalty (-0 to -15)
  let saturatedFatPenalty = 0;
  if (satFat > 3) {
    saturatedFatPenalty = Math.min(15, (satFat - 3) * 2.0);
    score -= saturatedFatPenalty;
  }

  // 6. Micronutrient Boost (+0 to +10)
  const microCount = Object.keys(vitamins || {}).length + Object.keys(minerals || {}).length;
  const microBoost = Math.min(10, microCount * 0.8);
  score += microBoost;

  const finalScore = Math.max(10, Math.min(100, Math.round(score)));

  let rating = "MODERATE";
  let badgeColor = "#F59E0B";

  if (finalScore >= 80) {
    rating = "EXCELLENT";
    badgeColor = "#10B981";
  } else if (finalScore >= 65) {
    rating = "VERY GOOD";
    badgeColor = "#16A34A";
  } else if (finalScore >= 50) {
    rating = "GOOD";
    badgeColor = "#3B82F6";
  } else if (finalScore < 40) {
    rating = "LOW NUTRIENT";
    badgeColor = "#EF4444";
  }

  return {
    score: finalScore,
    rating,
    badgeColor,
    breakdown: {
      proteinBoost: Math.round(proteinBoost),
      fiberBoost: Math.round(fiberBoost),
      microBoost: Math.round(microBoost),
      sugarPenalty: Math.round(sugarPenalty),
      sodiumPenalty: Math.round(sodiumPenalty),
      saturatedFatPenalty: Math.round(saturatedFatPenalty)
    }
  };
}

module.exports = { calculateHealthScore };
