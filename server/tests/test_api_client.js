const http = require('http');

const makeScanRequest = (payload) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const req = http.request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/ai/scan-image',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve({ error: body });
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
};

async function testApi() {
  console.log('--- 1. Testing Non-Food Payload (car.jpg) ---');
  const res1 = await makeScanRequest({ imageName: 'car.jpg' });
  console.log(JSON.stringify(res1, null, 2));

  console.log('\n--- 2. Testing Unknown Food Payload (dragon_fruit.jpg) ---');
  const res2 = await makeScanRequest({ imageName: 'dragon_fruit.jpg' });
  console.log(JSON.stringify(res2, null, 2));

  console.log('\n--- 3. Testing French Fries (french_fries.jpg) ---');
  const res3 = await makeScanRequest({ imageName: 'french_fries.jpg' });
  console.log(JSON.stringify(res3, null, 2));

  console.log('\n--- 4. Testing Pani Puri (pani_puri.jpg) ---');
  const res4 = await makeScanRequest({ imageName: 'pani_puri.jpg' });
  console.log(JSON.stringify(res4, null, 2));

  console.log('\n--- 5. Testing Paneer Tikka (paneer_tikka.jpg) ---');
  const res5 = await makeScanRequest({ imageName: 'paneer_tikka.jpg' });
  console.log(JSON.stringify(res5, null, 2));
}

testApi();
