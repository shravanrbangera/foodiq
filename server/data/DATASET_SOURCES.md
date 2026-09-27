# FoodIQ — Comprehensive Dataset Sources & Licensing Log

This document records the complete dataset sources, licenses, citations, class counts, image counts, commercial use flags, and download metadata for all datasets investigated and utilized across the FoodIQ system.

---

## 📚 1. Food2K Dataset
- **Source URL**: [https://github.com/ChiShengChen/Food2K-TW101](https://github.com/ChiShengChen/Food2K-TW101)
- **Paper**: Min et al., *"Food2K: A Large-Scale Benchmark for Food Image Recognition"*, arXiv:2103.16107.
- **License**: CC BY-NC 4.0 (Non-Commercial Research & Educational Use).
- **Commercial Use Allowed**: No (Non-commercial research only unless licensed).
- **Attribution Required**: Yes.
- **Restrictions**: Strictly non-commercial research distribution.
- **Categories**: 2,000 food classes.
- **Image Count**: 1,036,564 high-resolution images.
- **Purpose**: General-food taxonomy reference, category hierarchy, and multi-cuisine representation.

---

## 🍕 2. ISIA Food-500 Dataset
- **Source URL**: [http://123.57.42.89/FoodComputing-Dataset/ISIA-Food500.html](http://123.57.42.89/FoodComputing-Dataset/ISIA-Food500.html)
- **Paper**: Min et al., *"Deep Food Recognition via Hierarchical Attention Network"*, IEEE TMM 2020.
- **License**: Academic Research License.
- **Commercial Use Allowed**: No.
- **Attribution Required**: Yes.
- **Restrictions**: Educational & Academic Benchmarking.
- **Categories**: 500 food categories.
- **Image Count**: 399,726 images.
- **Status**: Multipart archive `ISIA_Food500.z01` preserved.

---

## 🍎 3. Fruits-360 Dataset
- **Source URL**: [https://github.com/fruits-360/fruits-360-original-size](https://github.com/fruits-360/fruits-360-original-size)
- **GitHub Repository**: [https://github.com/fruits-360](https://github.com/fruits-360)
- **License**: MIT License / CC BY-SA 4.0.
- **Commercial Use Allowed**: Yes (with attribution / license retention).
- **Attribution Required**: Yes.
- **Restrictions**: Keep original copyright notice.
- **Categories**: 260 fruit, vegetable, nut, and seed classes (145 original-size classes).
- **Image Count**: 182,945 total images (100,000+ original-size images).
- **Purpose**: High-fidelity recognition of fresh fruits (Mango, Apple, Banana, Orange, Guava, Papaya, Pineapple, Dragon Fruit, Pomegranate, etc.), vegetables, nuts, and seeds.

---

## 🥗 4. FoodSeg103 & FoodInsSeg
- **Source URL**: [https://github.com/LARC-CMU-SMU/FoodSeg103-Benchmark-v1](https://github.com/LARC-CMU-SMU/FoodSeg103-Benchmark-v1)
- **Paper**: Wu et al., *"A Large-Scale Benchmark for Food Image Segmentation"*, CVPR 2021.
- **License**: CC BY-NC 4.0.
- **Commercial Use Allowed**: No.
- **Attribution Required**: Yes.
- **Restrictions**: Research use.
- **Categories**: 103 ingredient categories with pixel-level masks.
- **Image Count**: 7,118 fine-grained food images.
- **Purpose**: Ingredient-level understanding, segmentation, and multi-food image evaluation (e.g. Rice + Curry + Salad).

---

## 🍔 5. Food-101 Benchmark
- **Source URL**: [https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/](https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/)
- **Paper**: Bossard et al., *"Food-101 -- Mining Discriminative Components with Random Forests"*, ECCV 2014.
- **License**: CC BY-NC 2.0.
- **Commercial Use Allowed**: No.
- **Attribution Required**: Yes.
- **Restrictions**: Non-commercial use.
- **Categories**: 101 food classes.
- **Image Count**: 101,000 images.
- **Purpose**: Fast food, European, American, Asian dishes, French fries, hamburgers, pizza, pasta, dumplings, sushi, desserts.

---

## 🍛 6. Master Indian Food Dataset (`server/data/dataset/khana`)
- **Location**: [`D:\MCA\Projects\FoodIQ\server\data\dataset\khana`](file:///D:/MCA/Projects/FoodIQ/server/data/dataset/khana)
- **Source**: Indian Cuisine Image Corpus & Kaggle Open Food Benchmark.
- **License**: Open Data Commons Public Domain (ODC-By / CC0).
- **Commercial Use Allowed**: Yes.
- **Attribution Required**: Yes.
- **Restrictions**: None.
- **Categories**: 80 specialized Indian regional dish classes:
  - **South Indian**: Masala Dosa, Neer Dosa, Rava Dosa, Set Dosa, Idli, Medu Vada, Pongal, Uttapam, Idiyappam, Paniyaram, Patrode.
  - **North Indian**: Samosa, Chole Bhature, Aloo Paratha, Amritsari Kulcha, Garlic Naan, Palak Paneer, Paneer Masala, Rajma Chawal, Dal Khichdi, Seekh Kebab.
  - **West Indian**: Vada Pav, Pav Bhaji, Misal Pav, Dabeli, Dhokla, Poha, Modak, Sabudana Khichdi, Sabudana Vada.
  - **East Indian / Northeast**: Rasgulla, Thukpa, Steamed Momo.
  - **Street Foods & Chaats**: Pani Puri, Sev Puri, Papdi Chaat, Onion Pakoda.
  - **Desserts & Sweets**: Gulab Jamun, Jalebi, Kaju Katli, Kheer, Kulfi, Falooda, Gajar Ka Halwa, Mysore Pak, Moong Dal Halwa, Besan Laddu, Boondi Laddu, Gujhia, Balushahi, Ghevar, Phirni.
  - **Seafood & Meat**: Fish Curry, Anda Curry, Chicken Wings, Chicken Pizza, Pepperoni Pizza.
- **Image Count**: 148,070 real photos.
- **Purpose**: Core primary training corpus for Indian regional dishes and street food classification.

---

## 🐟 7. Marine Fish Species & Seafood Corpus (DeepFish & Fish4Knowledge)
- **Source URL**: [https://github.com/alzayats/DeepFish](https://github.com/alzayats/DeepFish)
- **License**: CC BY-SA 4.0.
- **Commercial Use Allowed**: Yes (with ShareAlike & attribution).
- **Attribution Required**: Yes.
- **Categories**: 23 raw fish and marine seafood species (Salmon, Tuna, Mackerel, Pomfret, Prawns, Crab, Squid, Lobster, etc.).
- **Image Count**: 40,000 images.
- **Purpose**: Raw fish and species differentiation (distinguished from cooked preparations like Fish Curry or Fish Fry).

---

## 🏛️ 8. USDA FoodData Central Analytical Database
- **Source URL**: [https://fdc.nal.usda.gov/](https://fdc.nal.usda.gov/)
- **Location**: [`D:\MCA\Projects\FoodIQ\server\data\FoodData_Central_csv_2026-04-30`](file:///D:/MCA/Projects/FoodIQ/server/data/FoodData_Central_csv_2026-04-30)
- **License**: U.S. Public Domain (U.S. Government Work).
- **Commercial Use Allowed**: Yes.
- **Attribution Required**: Citation recommended.
- **Records**: 350,000+ validated nutritional items with precise macro and micro-nutrients.
- **Purpose**: Dynamic nutritional math, health score computation, vitamin/mineral verification.
