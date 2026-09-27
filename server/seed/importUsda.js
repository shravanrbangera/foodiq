const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Path to USDA FoodData Central dataset directory
const USDA_DATA_DIR = path.join(__dirname, '../data/FoodData_Central_csv_2026-04-30/FoodData_Central_csv_2026-04-30');

/**
 * Utility to parse USDA FoodData Central CSV files from server/data/
 */
async function parseUsdaFoods(limit = 100) {
  const foodFilePath = path.join(USDA_DATA_DIR, 'food.csv');
  if (!fs.existsSync(foodFilePath)) {
    console.log('USDA FoodData CSV not found at:', foodFilePath);
    return [];
  }

  const fileStream = fs.createReadStream(foodFilePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const foods = [];
  let lineCount = 0;

  for await (const line of rl) {
    if (lineCount === 0) {
      lineCount++;
      continue; // Skip header
    }

    const columns = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    if (columns.length >= 3) {
      const fdcId = columns[0].replace(/"/g, '').trim();
      const description = columns[2].replace(/"/g, '').trim();
      foods.push({ fdcId, name: description });
    }

    lineCount++;
    if (foods.length >= limit) break;
  }

  return foods;
}

module.exports = { parseUsdaFoods, USDA_DATA_DIR };
