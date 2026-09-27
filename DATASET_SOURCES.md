# FoodIQ — External Dataset Attribution & Sources Log

This document records all external dataset sources, licenses, citations, class counts, image counts, and download metadata used in building and training the FoodIQ AI model corpus.

---

## 🍛 1. Datacluster Labs Indian Food Dataset
- **Source URL**: [https://github.com/datacluster-labs/Indian-Food-Image-Dataset](https://github.com/datacluster-labs/Indian-Food-Image-Dataset)
- **Publisher**: Datacluster Labs (Crowdsourced via Dailydata)
- **License**: Datacluster Labs Research & Educational License
- **Format**: Real-world smartphone photos across wide lighting conditions
- **Categories**: Indian regional cooked dishes, thali, street food, and curated cuisine items
- **Role in FoodIQ**: Hard-negative real-world mobile lighting calibration and dish recognition.

---

## 🍎 2. Fruits-360 / Fruit-Images-Dataset
- **Source URL**: [https://github.com/Horea94/Fruit-Images-Dataset](https://github.com/Horea94/Fruit-Images-Dataset)
- **Authors**: Horea Muresan, Mihai Oltean
- **License**: MIT License
- **Categories**: 131 fine-grained fruit, vegetable, nut, and seed classes (Apple, Banana, Mango, Orange, Tomato, Potato, Onion, Eggplant, Dragon Fruit, Strawberry, Watermelon, Grapes, Guava, Papaya, Kiwi, Pineapple, Avocado, Lemon, Cucumber, Cauliflower, Ginger, Corn, Pomegranate)
- **Image Count**: 90,503 high-resolution images
- **Role in FoodIQ**: Fresh whole produce identification, variety distinction, and nutritional mapping.

---

## 🍔 3. Food-MNIST / Food-101 Benchmark Subset
- **Source URL**: [https://github.com/srohit0/food_mnist](https://github.com/srohit0/food_mnist)
- **Authors**: Rohit Sharma (derived from ETH Zurich Food-101 benchmark)
- **License**: MIT License / CC BY-NC 2.0
- **Categories**: Apple Pie, Baklava, Bibimbap, Breakfast Burrito, Beet Salad, etc.
- **Image Count**: 5,015 images
- **Role in FoodIQ**: International dishes and global cuisine benchmarks.

---

## 🇮🇳 4. Master Indian Food Corpus (`server/data/dataset/khana`)
- **Location**: [`D:\MCA\Projects\FoodIQ\server\data\dataset\khana`](file:///D:/MCA/Projects/FoodIQ/server/data/dataset/khana)
- **Source**: Indian Cuisine Image Corpus, Kaggle Indian Food Benchmark, Datacluster Labs, and Multi-Angle Studio Augmentation.
- **License**: Open Data Commons Public Domain (ODC-By / CC0)
- **Categories**: 146 active fine-grained food dish classes (North Indian, South Indian, East Indian, West Indian, Sweets, Street Food, Breads, Curries, Rice, Beverages).
- **Image Count**: 138,755 real and photorealistic food photos.
- **Role in FoodIQ**: Primary deep learning training corpus for the FoodIQ PyTorch ResNet-50 vision model.

---

## 🥗 5. USDA FoodData Central & ICMR-NIN Nutritional Database
- **Source URL**: [https://fdc.nal.usda.gov/](https://fdc.nal.usda.gov/) & ICMR - National Institute of Nutrition (NIN) India
- **License**: US Public Domain & Open Government Data
- **Entries**: 144 verified food profiles with full macro and micronutrient breakdown (calories, protein, carbs, fat, fiber, sugar, sodium, cholesterol, Vitamins A, B-complex, C, D, E, K, and Minerals Ca, Fe, Mg, P, K, Zn).
- **Role in FoodIQ**: Real-time dietary intelligence, macro calculation, and algorithmic health scoring.

---

## 📦 Dataset Inventory Summary

| Dataset Identifier | Categories / Classes | Total Images | Status in Workspace |
| :--- | :--- | :--- | :--- |
| **Datacluster Indian Food** | Regional Indian Dishes | Curated Sample Set | `Installed & Ingested` |
| **Fruit-Images-Dataset** | 131 Fruits & Vegetables | 90,503 Images | `Cloned & Ingested` |
| **Food-MNIST** | 10 Global Food Groups | 5,015 Images | `Cloned & Ingested` |
| **Master Khana Corpus** | 146 Food Classes | 138,755 Images | `Active Training Set` |
| **Nutritional Master** | 144 Verified Profiles | 144 Food Profiles | `Synchronized` |
