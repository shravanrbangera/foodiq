/**
 * Client-side FoodIQ Health Score Calculator
 */

export function calculateHealthScore(nutrition = {}, vitamins = {}, minerals = {}) {
  let score = 50;

  const protein = Number(nutrition.protein) || 0;
  const fiber = Number(nutrition.fiber) || 0;
  const sugar = Number(nutrition.sugar) || 0;
  const sodium = Number(nutrition.sodium) || 0;
  const fat = Number(nutrition.fat) || 0;
  const saturatedFat = Number(nutrition.saturatedFat) || (fat * 0.3);

  // 1. Protein Boost (+1.5 per gram, max +30)
  const proteinBoost = Math.min(30, protein * 1.5);
  score += proteinBoost;

  // 2. Fiber Boost (+4 per gram, max +25)
  const fiberBoost = Math.min(25, fiber * 4);
  score += fiberBoost;

  // 3. Micronutrients Boost (+2 per item, max +20)
  let microCount = 0;
  const vKeys = ['vitaminA', 'vitaminB1', 'vitaminB2', 'vitaminB3', 'vitaminB6', 'vitaminB12', 'vitaminC', 'vitaminD', 'vitaminE', 'vitaminK'];
  const mKeys = ['calcium', 'iron', 'magnesium', 'phosphorus', 'potassium', 'zinc'];

  vKeys.forEach(k => { if ((Number(vitamins[k]) || 0) > 0) microCount++; });
  mKeys.forEach(k => { if ((Number(minerals[k]) || 0) > 0) microCount++; });
  const microBoost = Math.min(20, microCount * 2);
  score += microBoost;

  // 4. Sugar Penalty (-1.5 per gram above 5g)
  if (sugar > 5) {
    score -= (sugar - 5) * 1.5;
  }

  // 5. Sodium Penalty (-1 per 100mg above 300mg)
  if (sodium > 300) {
    score -= ((sodium - 300) / 100) * 1.0;
  }

  // 6. Saturated Fat Penalty (-2 per gram above 3g)
  if (saturatedFat > 3) {
    score -= (saturatedFat - 3) * 2.0;
  }

  const finalScore = Math.round(Math.max(0, Math.min(100, score)));

  let rating = 'FAIR';
  let badgeColor = '#F59E0B';

  if (finalScore >= 90) {
    rating = 'EXCELLENT';
    badgeColor = '#059669';
  } else if (finalScore >= 75) {
    rating = 'VERY GOOD';
    badgeColor = '#10B981';
  } else if (finalScore >= 60) {
    rating = 'GOOD';
    badgeColor = '#84CC16';
  } else if (finalScore >= 40) {
    rating = 'FAIR';
    badgeColor = '#F59E0B';
  } else {
    rating = 'POOR';
    badgeColor = '#EF4444';
  }

  return {
    score: finalScore,
    rating,
    badgeColor,
    breakdown: {
      proteinBoost: Math.round(proteinBoost),
      fiberBoost: Math.round(fiberBoost),
      microBoost: Math.round(microBoost),
      sugarPenalty: sugar > 5 ? Math.round((sugar - 5) * 1.5) : 0,
      sodiumPenalty: sodium > 300 ? Math.round(((sodium - 300) / 100) * 1.0) : 0,
      saturatedFatPenalty: saturatedFat > 3 ? Math.round((saturatedFat - 3) * 2.0) : 0
    }
  };
}
