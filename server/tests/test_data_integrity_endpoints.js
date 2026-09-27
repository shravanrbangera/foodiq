const http = require('http');

const makeGet = (path) => {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:5000${path}`, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(body) }); }
        catch (e) { resolve({ status: res.statusCode, text: body }); }
      });
    }).on('error', reject);
  });
};

const makePost = (path, payload) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(body) }); }
        catch (e) { resolve({ status: res.statusCode, text: body }); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
};

async function testAll() {
  console.log("====================================================");
  console.log("🔍 Testing FoodIQ Data Integrity & Endpoints");
  console.log("====================================================");

  // 1. Momos Detail Endpoint
  console.log("\n1. Testing Momos Detail (/api/foods/steamed_momo)...");
  const momos = await makeGet('/api/foods/steamed_momo');
  console.log("  • Status:", momos.status);
  console.log("  • Name:", momos.data?.food?.name);
  console.log("  • Image URL:", momos.data?.food?.image);
  console.log("  • Calories:", momos.data?.food?.nutrition?.calories, "kcal | Protein:", momos.data?.food?.nutrition?.protein, "g");
  console.log("  • Health Score:", momos.data?.food?.healthScore, `(${momos.data?.food?.rating})`);

  // 2. Seekh Kebab Detail Endpoint
  console.log("\n2. Testing Seekh Kebab Detail (/api/foods/seekh_kebab)...");
  const kebab = await makeGet('/api/foods/seekh_kebab');
  console.log("  • Status:", kebab.status);
  console.log("  • Name:", kebab.data?.food?.name);
  console.log("  • Image URL:", kebab.data?.food?.image);
  console.log("  • Calories:", kebab.data?.food?.nutrition?.calories, "kcal | Protein:", kebab.data?.food?.nutrition?.protein, "g");

  // 3. Garlic Bread Detail Endpoint
  console.log("\n3. Testing Garlic Bread Detail (/api/foods/garlic_bread)...");
  const gb = await makeGet('/api/foods/garlic_bread');
  console.log("  • Status:", gb.status);
  console.log("  • Name:", gb.data?.food?.name);
  console.log("  • Image URL:", gb.data?.food?.image);
  console.log("  • Calories:", gb.data?.food?.nutrition?.calories, "kcal | Protein:", gb.data?.food?.nutrition?.protein, "g");

  // 4. Prawns Detail Endpoint
  console.log("\n4. Testing Prawns Detail (/api/foods/prawns)...");
  const prawns = await makeGet('/api/foods/prawns');
  console.log("  • Status:", prawns.status);
  console.log("  • Name:", prawns.data?.food?.name);
  console.log("  • Calories:", prawns.data?.food?.nutrition?.calories, "kcal | Protein:", prawns.data?.food?.nutrition?.protein, "g");
  console.log("  • Selenium:", prawns.data?.food?.minerals?.selenium_ug, "ug");

  // 5. Non-Food AI Scan
  console.log("\n5. Testing AI Non-Food Scan (car.jpg)...");
  const carScan = await makePost('/api/ai/scan-image', { imageName: 'car.jpg' });
  console.log("  • Status:", carScan.data?.status);
  console.log("  • Message:", carScan.data?.message);
  console.log("  • Food ID:", carScan.data?.food_id);

  // 6. Unknown Food AI Scan
  console.log("\n6. Testing AI Unknown Food Scan (dragon_fruit.jpg)...");
  const dragonScan = await makePost('/api/ai/scan-image', { imageName: 'dragon_fruit.jpg' });
  console.log("  • Status:", dragonScan.data?.status);
  console.log("  • Message:", dragonScan.data?.message);
  console.log("  • Food ID:", dragonScan.data?.food_id);

  // 7. Recognized Food AI Scan
  console.log("\n7. Testing AI Recognized Food Scan (pani_puri.jpg)...");
  const ppScan = await makePost('/api/ai/scan-image', { imageName: 'pani_puri.jpg' });
  console.log("  • Status:", ppScan.data?.status);
  console.log("  • Food ID:", ppScan.data?.food_id);
  console.log("  • Canonical Name:", ppScan.data?.canonical_name);
  console.log("  • Image URL:", ppScan.data?.image);
  console.log("  • Confidence:", ppScan.data?.formattedConfidence);
  console.log("  • Nutrition Available:", ppScan.data?.nutrition_available);
}

testAll();
