const initialFoods = [
  {
    "name": "Aloo Gobi",
    "food_id": "aloo_gobi",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001000",
    "description": "Traditional Aloo Gobi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Aloo Methi",
    "food_id": "aloo_methi",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001001",
    "description": "Traditional Aloo Methi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Aloo Mutter",
    "food_id": "aloo_mutter",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1585937421612-9c3f915729da?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001002",
    "description": "Traditional Aloo Mutter prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Aloo Paratha",
    "food_id": "aloo_paratha",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626074353765-8b29c99f18a2?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001003",
    "description": "Traditional Aloo Paratha prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Aloo Tikki",
    "food_id": "aloo_tikki",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001004",
    "description": "Traditional Aloo Tikki prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Amritsari Kulcha",
    "food_id": "amritsari_kulcha",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1565557623262-11a3014a5204?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001005",
    "description": "Traditional Amritsari Kulcha prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Anda Curry",
    "food_id": "anda_curry",
    "category": "Meat & Poultry",
    "subcategory": "Regional Specialties",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001006",
    "description": "Traditional Anda Curry prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Apple",
    "food_id": "apple",
    "category": "Fresh Fruits",
    "subcategory": "Fresh Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 52,
      "protein": 0.3,
      "carbohydrates": 13.8,
      "fat": 0.2,
      "saturatedFat": 0.1,
      "fiber": 2.4,
      "sugar": 1.4,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001007",
    "description": "Traditional Apple prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Balushahi",
    "food_id": "balushahi",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599785209707-88f583844f21?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001008",
    "description": "Traditional Balushahi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Banana",
    "food_id": "banana",
    "category": "Fresh Fruits",
    "subcategory": "Fresh Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1571771894821-5a3d7634f594?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 89,
      "protein": 1.1,
      "carbohydrates": 22.8,
      "fat": 0.3,
      "saturatedFat": 0.1,
      "fiber": 2.6,
      "sugar": 2.3,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001009",
    "description": "Traditional Banana prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Banana Chips",
    "food_id": "banana_chips",
    "category": "Snacks & Namkeen",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1576107232684-245c589b6f84?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001010",
    "description": "Traditional Banana Chips prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Besan Laddu",
    "food_id": "besan_laddu",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1541781774459-178ac223e7f4?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001011",
    "description": "Traditional Besan Laddu prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Bhel Puri",
    "food_id": "bhel_puri",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001012",
    "description": "Traditional Bhel Puri prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Bhindi Masala",
    "food_id": "bhindi_masala",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1540420773420-9bf76722880d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001013",
    "description": "Traditional Bhindi Masala prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chicken Biryani",
    "food_id": "biryani",
    "category": "Indian Breads & Rice",
    "subcategory": "Rice Dishes",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 185,
      "protein": 11.2,
      "carbohydrates": 21.4,
      "fat": 6.2,
      "saturatedFat": 1.9,
      "fiber": 1.8,
      "sugar": 2.1,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001014",
    "description": "Traditional Chicken Biryani prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Boondi Laddu",
    "food_id": "boondi_laddu",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1505253758473-88f583844f21?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001015",
    "description": "Traditional Boondi Laddu prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Burger",
    "food_id": "burger",
    "category": "Fast Food & Global",
    "subcategory": "Burgers",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 280,
      "protein": 9.5,
      "carbohydrates": 36.0,
      "fat": 11.2,
      "saturatedFat": 3.4,
      "fiber": 2.5,
      "sugar": 3.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001016",
    "description": "Traditional Burger prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Butter Chicken",
    "food_id": "butter_chicken",
    "category": "Meat & Poultry",
    "subcategory": "Regional Specialties",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 18.0,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001017",
    "description": "Traditional Butter Chicken prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chaas",
    "food_id": "chaas",
    "category": "Beverages",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1550583724-633b4731d167?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001018",
    "description": "Traditional Chaas prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chana Masala",
    "food_id": "chana_masala",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001019",
    "description": "Traditional Chana Masala prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chapati",
    "food_id": "chapati",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001020",
    "description": "Traditional Chapati prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chicken Pizza",
    "food_id": "chicken_pizza",
    "category": "Fast Food & Global",
    "subcategory": "Regional Specialties",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 18.0,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001021",
    "description": "Traditional Chicken Pizza prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chicken Tikka",
    "food_id": "chicken_tikka",
    "category": "Meat & Poultry",
    "subcategory": "Regional Specialties",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-419b45a05b60?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 18.0,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001022",
    "description": "Traditional Chicken Tikka prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chicken Wings",
    "food_id": "chicken_wings",
    "category": "Meat & Poultry",
    "subcategory": "Poultry & Fast Food",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 290,
      "protein": 27.0,
      "carbohydrates": 0.0,
      "fat": 19.5,
      "saturatedFat": 5.8,
      "fiber": 0.0,
      "sugar": 0.0,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001023",
    "description": "Traditional Chicken Wings prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chikki",
    "food_id": "chikki",
    "category": "Snacks & Namkeen",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1508061253366-231a498bda71?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001024",
    "description": "Traditional Chikki prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chivda",
    "food_id": "chivda",
    "category": "Snacks & Namkeen",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001025",
    "description": "Traditional Chivda prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chole Bhature",
    "food_id": "chole_bhature",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626777552726-38d58c9735d4?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001026",
    "description": "Traditional Chole Bhature prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Chowmein",
    "food_id": "chowmein",
    "category": "Fast Food & Global",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001027",
    "description": "Traditional Chowmein prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Dabeli",
    "food_id": "dabeli",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626132647614-7d52f9b8c616?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001028",
    "description": "Traditional Dabeli prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Dahi Puri",
    "food_id": "dahi_puri",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1505253716362-7a315e21977b?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001029",
    "description": "Traditional Dahi Puri prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Dal Khichdi",
    "food_id": "dal_khichdi",
    "category": "Indian Breads & Rice",
    "subcategory": "Comfort Food",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 155,
      "protein": 6.8,
      "carbohydrates": 26.4,
      "fat": 2.8,
      "saturatedFat": 0.8,
      "fiber": 3.4,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001030",
    "description": "Traditional Dal Khichdi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Dal Makhani",
    "food_id": "dal_makhani",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1546833999-52e67a06a23b?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001031",
    "description": "Traditional Dal Makhani prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Dhokla",
    "food_id": "dhokla",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001032",
    "description": "Traditional Dhokla prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Eggplant",
    "food_id": "eggplant",
    "category": "Fresh Vegetables",
    "subcategory": "Nightshades",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1615485290382-3e2849bca74e?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 25,
      "protein": 1.0,
      "carbohydrates": 5.9,
      "fat": 0.2,
      "saturatedFat": 0.1,
      "fiber": 3.0,
      "sugar": 0.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001033",
    "description": "Traditional Eggplant prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Falooda",
    "food_id": "falooda",
    "category": "Beverages",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001034",
    "description": "Traditional Falooda prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Fish Curry",
    "food_id": "fish_curry",
    "category": "Fish & Seafood",
    "subcategory": "Regional Specialties",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 18.0,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001035",
    "description": "Traditional Fish Curry prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "French Fries",
    "food_id": "french_fries",
    "category": "Fast Food & Global",
    "subcategory": "Potato Dish",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 312,
      "protein": 3.4,
      "carbohydrates": 41.4,
      "fat": 15.0,
      "saturatedFat": 4.5,
      "fiber": 3.8,
      "sugar": 4.1,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001036",
    "description": "Traditional French Fries prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Gajar Ka Halwa",
    "food_id": "gajar_ka_halwa",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1541781774459-7e5f178bcda6?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001037",
    "description": "Traditional Gajar Ka Halwa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Garlic Bread",
    "food_id": "garlic_bread",
    "category": "Fast Food & Global",
    "subcategory": "Bread & Appetizers",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 350,
      "protein": 8.4,
      "carbohydrates": 42.0,
      "fat": 16.5,
      "saturatedFat": 5.0,
      "fiber": 2.1,
      "sugar": 4.2,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001038",
    "description": "Traditional Garlic Bread prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Garlic Naan",
    "food_id": "garlic_naan",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001039",
    "description": "Traditional Garlic Naan prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Ghevar",
    "food_id": "ghevar",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1505253758473-8b746c1a8519?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001040",
    "description": "Traditional Ghevar prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Grilled Sandwich",
    "food_id": "grilled_sandwich",
    "category": "Fast Food & Global",
    "subcategory": "Sandwiches",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 260,
      "protein": 7.2,
      "carbohydrates": 34.0,
      "fat": 11.0,
      "saturatedFat": 3.3,
      "fiber": 2.8,
      "sugar": 3.4,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001041",
    "description": "Traditional Grilled Sandwich prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Gujhia",
    "food_id": "gujhia",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1505253758473-12db5963cfb7?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001042",
    "description": "Traditional Gujhia prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Gulab Jamun",
    "food_id": "gulab_jamun",
    "category": "Desserts & Sweets",
    "subcategory": "Indian Sweets",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 380,
      "protein": 4.5,
      "carbohydrates": 58.0,
      "fat": 15.2,
      "saturatedFat": 4.6,
      "fiber": 0.5,
      "sugar": 5.8,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001043",
    "description": "Traditional Gulab Jamun prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Hara Bhara Kabab",
    "food_id": "hara_bhara_kabab",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1540420773420-56f4d228db94?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001044",
    "description": "Traditional Hara Bhara Kabab prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Idiyappam",
    "food_id": "idiyappam",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001045",
    "description": "Traditional Idiyappam prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Idli",
    "food_id": "idli",
    "category": "South Indian Specialties",
    "subcategory": "South Indian",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 130,
      "protein": 4.1,
      "carbohydrates": 26.5,
      "fat": 0.4,
      "saturatedFat": 0.1,
      "fiber": 1.8,
      "sugar": 2.7,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001046",
    "description": "Traditional Idli prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Jalebi",
    "food_id": "jalebi",
    "category": "Desserts & Sweets",
    "subcategory": "Indian Sweets",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 360,
      "protein": 2.5,
      "carbohydrates": 64.0,
      "fat": 10.5,
      "saturatedFat": 3.1,
      "fiber": 0.4,
      "sugar": 6.4,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001047",
    "description": "Traditional Jalebi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Kachori",
    "food_id": "kachori",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001048",
    "description": "Traditional Kachori prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Kaju Katli",
    "food_id": "kaju_katli",
    "category": "Desserts & Sweets",
    "subcategory": "Indian Sweets",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 450,
      "protein": 10.2,
      "carbohydrates": 52.0,
      "fat": 22.5,
      "saturatedFat": 6.8,
      "fiber": 2.1,
      "sugar": 5.2,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001049",
    "description": "Traditional Kaju Katli prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Kathi Roll",
    "food_id": "kathi_roll",
    "category": "Street Food & Chaat",
    "subcategory": "Wraps & Rolls",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626777552726-5b4d75618b76?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 245,
      "protein": 7.8,
      "carbohydrates": 32.5,
      "fat": 9.4,
      "saturatedFat": 2.8,
      "fiber": 3.1,
      "sugar": 3.2,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001050",
    "description": "Traditional Kathi Roll prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Khakhra",
    "food_id": "khakhra",
    "category": "Snacks & Namkeen",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1565557623262-9f359c256a42?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001051",
    "description": "Traditional Khakhra prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Kheer",
    "food_id": "kheer",
    "category": "Desserts & Sweets",
    "subcategory": "Puddings",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 165,
      "protein": 4.5,
      "carbohydrates": 26.0,
      "fat": 5.2,
      "saturatedFat": 1.6,
      "fiber": 0.4,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001052",
    "description": "Traditional Kheer prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Kulfi",
    "food_id": "kulfi",
    "category": "Desserts & Sweets",
    "subcategory": "Frozen Sweets",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 220,
      "protein": 5.8,
      "carbohydrates": 24.0,
      "fat": 11.5,
      "saturatedFat": 3.4,
      "fiber": 0.2,
      "sugar": 2.4,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001053",
    "description": "Traditional Kulfi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Mango",
    "food_id": "mango",
    "category": "Fresh Fruits",
    "subcategory": "Fresh Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 60,
      "protein": 0.8,
      "carbohydrates": 15.0,
      "fat": 0.4,
      "saturatedFat": 0.1,
      "fiber": 1.6,
      "sugar": 1.5,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001054",
    "description": "Traditional Mango prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Margherita Pizza",
    "food_id": "margherita_pizza",
    "category": "Fast Food & Global",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001055",
    "description": "Traditional Margherita Pizza prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Masala Dosa",
    "food_id": "masala_dosa",
    "category": "South Indian Specialties",
    "subcategory": "South Indian",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 240,
      "protein": 6.5,
      "carbohydrates": 36.2,
      "fat": 8.0,
      "saturatedFat": 2.4,
      "fiber": 3.0,
      "sugar": 3.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001056",
    "description": "Traditional Masala Dosa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Masala Papad",
    "food_id": "masala_papad",
    "category": "Snacks & Namkeen",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001057",
    "description": "Traditional Masala Papad prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Medu Vada",
    "food_id": "medu_vada",
    "category": "South Indian Specialties",
    "subcategory": "South Indian",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 230,
      "protein": 7.4,
      "carbohydrates": 22.0,
      "fat": 12.8,
      "saturatedFat": 3.8,
      "fiber": 3.5,
      "sugar": 2.2,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001058",
    "description": "Traditional Medu Vada prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Misal Pav",
    "food_id": "misal_pav",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1606491956689-138bb39c968f?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001059",
    "description": "Traditional Misal Pav prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Modak",
    "food_id": "modak",
    "category": "Desserts & Sweets",
    "subcategory": "Steamed Sweet",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 235,
      "protein": 3.8,
      "carbohydrates": 44.0,
      "fat": 5.8,
      "saturatedFat": 4.2,
      "fiber": 3.2,
      "sugar": 24.0,
      "sodium": 42,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 15,
      "vitaminB1": 0.1,
      "vitaminB2": 0.06,
      "vitaminB3": 1.2,
      "vitaminB6": 0.14,
      "vitaminB12": 0,
      "vitaminC": 1.5,
      "vitaminD": 0,
      "vitaminE": 0.8,
      "vitaminK": 1.5
    },
    "minerals": {
      "calcium": 48,
      "iron": 2.4,
      "magnesium": 42,
      "phosphorus": 98,
      "potassium": 240,
      "zinc": 1.1
    },
    "goodFor": [
      "Steamed Light Sweet",
      "Natural Coconut Electrolytes"
    ],
    "barcode": "890123001060",
    "description": "Steamed pleated rice flour dumplings stuffed with fragrant freshly grated coconut, dark jaggery, cardamom, and nutmeg, drizzled with pure ghee."
  },
  {
    "name": "Moong Dal Halwa",
    "food_id": "moong_dal_halwa",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1505253758473-5a49c372f889?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001061",
    "description": "Traditional Moong Dal Halwa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Murukku",
    "food_id": "murukku",
    "category": "Snacks & Namkeen",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599785209796-189f53835a29?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001062",
    "description": "Traditional Murukku prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Mysore Pak",
    "food_id": "mysore_pak",
    "category": "Desserts & Sweets",
    "subcategory": "Fudge Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 520,
      "protein": 6.8,
      "carbohydrates": 52.0,
      "fat": 32.0,
      "saturatedFat": 18.5,
      "fiber": 2.2,
      "sugar": 44.0,
      "sodium": 48,
      "cholesterol": 45
    },
    "vitamins": {
      "vitaminA": 120,
      "vitaminB1": 0.1,
      "vitaminB2": 0.06,
      "vitaminB3": 1.2,
      "vitaminB6": 0.12,
      "vitaminB12": 0.1,
      "vitaminC": 0.2,
      "vitaminD": 0.4,
      "vitaminE": 2.2,
      "vitaminK": 4.5
    },
    "minerals": {
      "calcium": 45,
      "iron": 2.1,
      "magnesium": 42,
      "phosphorus": 115,
      "potassium": 190,
      "zinc": 1.1
    },
    "goodFor": [
      "Melt-in-Mouth Royal Texture",
      "Instant Energy"
    ],
    "barcode": "890123001063",
    "description": "Legendary royal confectionery created in the kitchens of Mysore Palace made from roasted besan, copious fragrant desi ghee, and sugar."
  },
  {
    "name": "Navratan Korma",
    "food_id": "navratan_korma",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1540420773420-2a54fb296568?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001064",
    "description": "Traditional Navratan Korma prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Neer Dosa",
    "food_id": "neer_dosa",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001065",
    "description": "Traditional Neer Dosa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Noodles",
    "food_id": "noodles",
    "category": "Fast Food & Global",
    "subcategory": "Noodles & Pasta",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 138,
      "protein": 4.5,
      "carbohydrates": 25.0,
      "fat": 2.1,
      "saturatedFat": 0.6,
      "fiber": 1.8,
      "sugar": 2.5,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001066",
    "description": "Traditional Noodles prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Okra",
    "food_id": "okra",
    "category": "Fresh Vegetables",
    "subcategory": "Green Vegetables",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 33,
      "protein": 1.9,
      "carbohydrates": 7.5,
      "fat": 0.2,
      "saturatedFat": 0.1,
      "fiber": 3.2,
      "sugar": 0.8,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001067",
    "description": "Traditional Okra prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Onion",
    "food_id": "onion",
    "category": "Fresh Vegetables",
    "subcategory": "Alliums",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 40,
      "protein": 1.1,
      "carbohydrates": 9.3,
      "fat": 0.1,
      "saturatedFat": 0.0,
      "fiber": 1.7,
      "sugar": 0.9,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001068",
    "description": "Traditional Onion prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Onion Pakoda",
    "food_id": "onion_pakoda",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001069",
    "description": "Traditional Onion Pakoda prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Orange",
    "food_id": "orange",
    "category": "Fresh Fruits",
    "subcategory": "Citrus Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 47,
      "protein": 0.9,
      "carbohydrates": 11.8,
      "fat": 0.1,
      "saturatedFat": 0.0,
      "fiber": 2.4,
      "sugar": 1.2,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001070",
    "description": "Traditional Orange prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Palak Paneer",
    "food_id": "palak_paneer",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Curries",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 215,
      "protein": 12.4,
      "carbohydrates": 6.8,
      "fat": 16.2,
      "saturatedFat": 4.9,
      "fiber": 3.8,
      "sugar": 0.7,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001071",
    "description": "Traditional Palak Paneer prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Paneer Masala",
    "food_id": "paneer_masala",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001072",
    "description": "Traditional Paneer Masala prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Paneer Pizza",
    "food_id": "paneer_pizza",
    "category": "Fast Food & Global",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001073",
    "description": "Traditional Paneer Pizza prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Paneer Tikka",
    "food_id": "paneer_tikka",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Tandoori & Appetizers",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1567188040759-86f34591f868?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 265,
      "protein": 18.3,
      "carbohydrates": 6.1,
      "fat": 20.8,
      "saturatedFat": 6.2,
      "fiber": 1.2,
      "sugar": 0.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001074",
    "description": "Traditional Paneer Tikka prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Pani Puri",
    "food_id": "pani_puri",
    "category": "Street Food & Chaat",
    "subcategory": "Chaat",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 180,
      "protein": 3.5,
      "carbohydrates": 28.0,
      "fat": 6.2,
      "saturatedFat": 1.9,
      "fiber": 2.4,
      "sugar": 2.8,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001075",
    "description": "Traditional Pani Puri prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Paniyaram",
    "food_id": "paniyaram",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001076",
    "description": "Traditional Paniyaram prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Papdi Chaat",
    "food_id": "papdi_chaat",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1567188040759-43f113e6d614?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001077",
    "description": "Traditional Papdi Chaat prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Pasta",
    "food_id": "pasta",
    "category": "Fast Food & Global",
    "subcategory": "Noodles & Pasta",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 158,
      "protein": 5.8,
      "carbohydrates": 30.5,
      "fat": 1.4,
      "saturatedFat": 0.4,
      "fiber": 2.2,
      "sugar": 3.1,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001078",
    "description": "Traditional Pasta prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Patrode",
    "food_id": "patrode",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1540420773420-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001079",
    "description": "Traditional Patrode prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Pav Bhaji",
    "food_id": "pav_bhaji",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001080",
    "description": "Traditional Pav Bhaji prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Pepperoni Pizza",
    "food_id": "pepperoni_pizza",
    "category": "Fast Food & Global",
    "subcategory": "Regional Specialties",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 18.0,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001081",
    "description": "Traditional Pepperoni Pizza prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Phirni",
    "food_id": "phirni",
    "category": "Desserts & Sweets",
    "subcategory": "Rice Pudding",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 195,
      "protein": 5.6,
      "carbohydrates": 28.0,
      "fat": 7.2,
      "saturatedFat": 4.2,
      "fiber": 0.4,
      "sugar": 18.0,
      "sodium": 62,
      "cholesterol": 18
    },
    "vitamins": {
      "vitaminA": 70,
      "vitaminB1": 0.08,
      "vitaminB2": 0.25,
      "vitaminB3": 0.6,
      "vitaminB6": 0.08,
      "vitaminB12": 0.48,
      "vitaminC": 1.0,
      "vitaminD": 0.2,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 185,
      "iron": 0.6,
      "magnesium": 24,
      "phosphorus": 160,
      "potassium": 240,
      "zinc": 1.0
    },
    "goodFor": [
      "Digestive Soothing Milk Dessert",
      "Calcium Wealth"
    ],
    "barcode": "890123001082",
    "description": "Classic creamy Kashmiri dessert made from ground basmati rice slow-cooked in full-cream milk, infused with saffron, cardamom, and served chilled in shikoras."
  },
  {
    "name": "Poha",
    "food_id": "poha",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1516714435131-8b746c1a8519?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001083",
    "description": "Traditional Poha prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Pongal",
    "food_id": "pongal",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1516714435131-19d4435905d6?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001084",
    "description": "Traditional Pongal prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Potato",
    "food_id": "potato",
    "category": "Fresh Vegetables",
    "subcategory": "Tubers",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 77,
      "protein": 2.0,
      "carbohydrates": 17.5,
      "fat": 0.1,
      "saturatedFat": 0.0,
      "fiber": 2.2,
      "sugar": 1.8,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001085",
    "description": "Traditional Potato prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Prawns",
    "food_id": "prawns",
    "category": "Fish & Seafood",
    "subcategory": "Crustaceans & Marine",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1559742811-8228736be358?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 99,
      "protein": 24.0,
      "carbohydrates": 0.2,
      "fat": 0.3,
      "saturatedFat": 0.1,
      "fiber": 0.0,
      "sugar": 0.0,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001086",
    "description": "Traditional Prawns prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Puri Bhaji",
    "food_id": "puri_bhaji",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1601050690597-6a58bc289b83?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001087",
    "description": "Traditional Puri Bhaji prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Rajma Chawal",
    "food_id": "rajma_chawal",
    "category": "Indian Breads & Rice",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-a8647e3a9856?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001088",
    "description": "Traditional Rajma Chawal prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Rasgulla",
    "food_id": "rasgulla",
    "category": "Desserts & Sweets",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-a9515949d9c2?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001089",
    "description": "Traditional Rasgulla prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Rava Dosa",
    "food_id": "rava_dosa",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001090",
    "description": "Traditional Rava Dosa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Sabudana Khichdi",
    "food_id": "sabudana_khichdi",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1516714435131-02b4d93a6192?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001091",
    "description": "Traditional Sabudana Khichdi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Sabudana Vada",
    "food_id": "sabudana_vada",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-d16c5264b971?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001092",
    "description": "Traditional Sabudana Vada prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Samosa",
    "food_id": "samosa",
    "category": "Street Food & Chaat",
    "subcategory": "Snacks & Pastries",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1601050690597-2856f61031d2?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 262,
      "protein": 4.2,
      "carbohydrates": 32.1,
      "fat": 13.5,
      "saturatedFat": 4.0,
      "fiber": 2.8,
      "sugar": 3.2,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001093",
    "description": "Traditional Samosa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Seekh Kebab",
    "food_id": "seekh_kebab",
    "category": "Meat & Poultry",
    "subcategory": "Grilled & Tandoori",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 218,
      "protein": 19.5,
      "carbohydrates": 3.8,
      "fat": 13.6,
      "saturatedFat": 4.1,
      "fiber": 0.8,
      "sugar": 0.4,
      "sodium": 280,
      "cholesterol": 45
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001094",
    "description": "Traditional Seekh Kebab prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Set Dosa",
    "food_id": "set_dosa",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001095",
    "description": "Traditional Set Dosa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Sev Puri",
    "food_id": "sev_puri",
    "category": "Street Food & Chaat",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001096",
    "description": "Traditional Sev Puri prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Solkadhi",
    "food_id": "solkadhi",
    "category": "Beverages",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1550583724-783da828da9d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001097",
    "description": "Traditional Solkadhi prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Momos",
    "food_id": "steamed_momo",
    "category": "Fast Food & Global",
    "subcategory": "Dumplings",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 162,
      "protein": 5.2,
      "carbohydrates": 26.8,
      "fat": 3.8,
      "saturatedFat": 1.1,
      "fiber": 2.0,
      "sugar": 2.7,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001098",
    "description": "Traditional Momos prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Thali",
    "food_id": "thali",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1613292443284-7a315e21977b?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001099",
    "description": "Traditional Thali prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Thukpa",
    "food_id": "thukpa",
    "category": "Fast Food & Global",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1569718212165-4f7f26c7da49?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001100",
    "description": "Traditional Thukpa prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Tomato",
    "food_id": "tomato",
    "category": "Fresh Vegetables",
    "subcategory": "Nightshades",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 18,
      "protein": 0.9,
      "carbohydrates": 3.9,
      "fat": 0.2,
      "saturatedFat": 0.1,
      "fiber": 1.2,
      "sugar": 0.4,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001101",
    "description": "Traditional Tomato prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Uttapam",
    "food_id": "uttapam",
    "category": "South Indian Specialties",
    "subcategory": "Regional Specialties",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626777552737-0130f1469e38?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 6.5,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.5,
      "sugar": 2.6,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001102",
    "description": "Traditional Uttapam prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Vada Pav",
    "food_id": "vada_pav",
    "category": "Street Food & Chaat",
    "subcategory": "Street Food",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 285,
      "protein": 6.2,
      "carbohydrates": 38.4,
      "fat": 12.1,
      "saturatedFat": 3.6,
      "fiber": 3.2,
      "sugar": 3.8,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.5,
      "vitamin_d_ug": 0.1,
      "vitamin_e_mg": 0.8,
      "vitamin_k_ug": 4.5,
      "vitamin_b1_mg": 0.1,
      "vitamin_b2_mg": 0.08,
      "vitamin_b3_mg": 2.1,
      "vitamin_b5_mg": 0.4,
      "vitamin_b6_mg": 0.15,
      "vitamin_b7_ug": 1.5,
      "vitamin_b9_ug": 25,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "phosphorus_mg": 95,
      "potassium_mg": 220,
      "zinc_mg": 0.9,
      "copper_mg": 0.12,
      "manganese_mg": 0.3,
      "selenium_ug": 8.0
    },
    "goodFor": [
      "Nutritional Balance",
      "Sustained Energy",
      "Traditional Flavor"
    ],
    "barcode": "890123001103",
    "description": "Traditional Vada Pav prepared with authentic ingredients and regional seasonings."
  },
  {
    "name": "Dragon Fruit",
    "food_id": "dragon_fruit",
    "category": "Fresh Fruits",
    "subcategory": "Tropical Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 60,
      "protein": 1.2,
      "carbohydrates": 13.0,
      "fat": 0.5,
      "saturatedFat": 0.1,
      "fiber": 2.9,
      "sugar": 7.7,
      "sodium": 0,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 59,
      "vitamin_c_mg": 20.5,
      "vitamin_d_ug": 0.0,
      "vitamin_e_mg": 0.3,
      "vitamin_k_ug": 0.0,
      "vitamin_b1_mg": 0.04,
      "vitamin_b2_mg": 0.05,
      "vitamin_b3_mg": 0.4,
      "vitamin_b5_mg": 0.2,
      "vitamin_b6_mg": 0.04,
      "vitamin_b7_ug": 0.5,
      "vitamin_b9_ug": 18,
      "vitamin_b12_ug": 0.0
    },
    "minerals": {
      "calcium_mg": 8.5,
      "iron_mg": 0.7,
      "magnesium_mg": 40.0,
      "phosphorus_mg": 30.2,
      "potassium_mg": 350.0,
      "zinc_mg": 0.3,
      "copper_mg": 0.15,
      "manganese_mg": 0.2,
      "selenium_ug": 0.6
    },
    "goodFor": [
      "Immune Support",
      "Gut Health",
      "Antioxidant Protection"
    ],
    "barcode": "890123001104",
    "description": "Fresh exotic Dragon Fruit (Pitaya) with vibrant magenta skin, rich in Vitamin C, dietary fiber, antioxidants, and essential minerals."
  },
  {
    "name": "Kadai Paneer",
    "food_id": "kadai_paneer",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Curries & Gravies",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1631452180519-86f34591f868?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 12.5,
      "carbohydrates": 8.4,
      "fat": 14.8,
      "saturatedFat": 4.4,
      "fiber": 2.6,
      "sugar": 3.2,
      "sodium": 380,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 85,
      "vitamin_c_mg": 18.5,
      "vitamin_e_mg": 1.2,
      "vitamin_b2_mg": 0.22,
      "vitamin_b12_ug": 0.4
    },
    "minerals": {
      "calcium_mg": 280,
      "iron_mg": 1.9,
      "magnesium_mg": 32,
      "phosphorus_mg": 190,
      "potassium_mg": 260,
      "zinc_mg": 1.8
    },
    "goodFor": [
      "High Protein",
      "Muscle Building",
      "Bone Density"
    ],
    "barcode": "890123001105",
    "description": "Authentic Kadai Paneer prepared with wholesome ingredients."
  },
  {
    "name": "Baingan Bharta",
    "food_id": "baingan_bharta",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Curries & Gravies",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1540420773420-1e54911d8d85?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 105,
      "protein": 2.4,
      "carbohydrates": 11.2,
      "fat": 6.1,
      "saturatedFat": 1.8,
      "fiber": 3.8,
      "sugar": 4.1,
      "sodium": 290,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 12.0,
      "vitamin_k_ug": 6.5,
      "vitamin_b6_mg": 0.18,
      "vitamin_b9_ug": 30
    },
    "minerals": {
      "calcium_mg": 40,
      "iron_mg": 1.2,
      "magnesium_mg": 24,
      "potassium_mg": 310,
      "manganese_mg": 0.25
    },
    "goodFor": [
      "Digestive Health",
      "Low Calorie",
      "Antioxidant Rich"
    ],
    "barcode": "890123001106",
    "description": "Authentic Baingan Bharta prepared with wholesome ingredients."
  },
  {
    "name": "Paneer Bhurji",
    "food_id": "paneer_bhurji",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Curries & Gravies",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1589301760014-b61548e65839?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 235,
      "protein": 14.8,
      "carbohydrates": 6.2,
      "fat": 17.5,
      "saturatedFat": 5.2,
      "fiber": 1.8,
      "sugar": 2.4,
      "sodium": 340,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 95,
      "vitamin_c_mg": 14.0,
      "vitamin_e_mg": 1.5,
      "vitamin_b2_mg": 0.28,
      "vitamin_b12_ug": 0.5
    },
    "minerals": {
      "calcium_mg": 320,
      "iron_mg": 1.6,
      "magnesium_mg": 36,
      "phosphorus_mg": 210,
      "potassium_mg": 240,
      "zinc_mg": 2.1
    },
    "goodFor": [
      "High Protein Breakfast",
      "Muscle Recovery",
      "Keto Friendly"
    ],
    "barcode": "890123001107",
    "description": "Authentic Paneer Bhurji prepared with wholesome ingredients."
  },
  {
    "name": "Homestyle Chicken Curry",
    "food_id": "chicken_curry",
    "category": "Meat & Poultry",
    "subcategory": "Curries & Gravies",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 175,
      "protein": 16.8,
      "carbohydrates": 4.5,
      "fat": 10.2,
      "saturatedFat": 3.1,
      "fiber": 1.4,
      "sugar": 1.8,
      "sodium": 360,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 40,
      "vitamin_c_mg": 8.0,
      "vitamin_b3_mg": 6.8,
      "vitamin_b6_mg": 0.45,
      "vitamin_b12_ug": 0.8
    },
    "minerals": {
      "calcium_mg": 35,
      "iron_mg": 1.9,
      "magnesium_mg": 28,
      "phosphorus_mg": 180,
      "potassium_mg": 290,
      "zinc_mg": 1.9,
      "selenium_ug": 18.5
    },
    "goodFor": [
      "Lean Protein",
      "Immunity",
      "Satiety"
    ],
    "barcode": "890123001108",
    "description": "Authentic Homestyle Chicken Curry prepared with wholesome ingredients."
  },
  {
    "name": "Mutton Rogan Josh",
    "food_id": "mutton_curry",
    "category": "Meat & Poultry",
    "subcategory": "Curries & Gravies",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 240,
      "protein": 18.2,
      "carbohydrates": 3.8,
      "fat": 17.0,
      "saturatedFat": 5.1,
      "fiber": 1.1,
      "sugar": 1.5,
      "sodium": 390,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 25,
      "vitamin_c_mg": 4.0,
      "vitamin_b3_mg": 5.2,
      "vitamin_b12_ug": 2.2
    },
    "minerals": {
      "calcium_mg": 28,
      "iron_mg": 2.9,
      "magnesium_mg": 26,
      "phosphorus_mg": 195,
      "potassium_mg": 280,
      "zinc_mg": 3.8,
      "selenium_ug": 22.0
    },
    "goodFor": [
      "Iron Rich",
      "Vitamin B12",
      "Strength Building"
    ],
    "barcode": "890123001109",
    "description": "Authentic Mutton Rogan Josh prepared with wholesome ingredients."
  },
  {
    "name": "Dal Tadka",
    "food_id": "dal_tadka",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Dals & Lentils",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1585937421612-3847bb411681?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 125,
      "protein": 6.8,
      "carbohydrates": 18.2,
      "fat": 3.4,
      "saturatedFat": 1.0,
      "fiber": 4.2,
      "sugar": 1.2,
      "sodium": 260,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 30,
      "vitamin_c_mg": 5.0,
      "vitamin_b1_mg": 0.18,
      "vitamin_b9_ug": 75
    },
    "minerals": {
      "calcium_mg": 38,
      "iron_mg": 2.2,
      "magnesium_mg": 42,
      "phosphorus_mg": 120,
      "potassium_mg": 290,
      "zinc_mg": 1.2
    },
    "goodFor": [
      "Plant Protein",
      "Gut Health",
      "Folate Source"
    ],
    "barcode": "890123001110",
    "description": "Authentic Dal Tadka prepared with wholesome ingredients."
  },
  {
    "name": "South Indian Sambar",
    "food_id": "sambar",
    "category": "South Indian Specialties",
    "subcategory": "South Indian Dishes",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 78,
      "protein": 3.8,
      "carbohydrates": 12.4,
      "fat": 1.8,
      "saturatedFat": 0.5,
      "fiber": 3.2,
      "sugar": 2.5,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 65,
      "vitamin_c_mg": 15.0,
      "vitamin_k_ug": 8.0,
      "vitamin_b9_ug": 45
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 1.6,
      "magnesium_mg": 30,
      "potassium_mg": 260,
      "zinc_mg": 0.8
    },
    "goodFor": [
      "Low Calorie",
      "High Fiber",
      "Digestive Enzymes"
    ],
    "barcode": "890123001111",
    "description": "Authentic South Indian Sambar prepared with wholesome ingredients."
  },
  {
    "name": "Tomato Pepper Rasam",
    "food_id": "rasam",
    "category": "South Indian Specialties",
    "subcategory": "South Indian Dishes",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 45,
      "protein": 1.5,
      "carbohydrates": 7.2,
      "fat": 1.2,
      "saturatedFat": 0.4,
      "fiber": 1.8,
      "sugar": 2.0,
      "sodium": 220,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 45,
      "vitamin_c_mg": 22.0,
      "vitamin_k_ug": 5.0,
      "vitamin_b6_mg": 0.15
    },
    "minerals": {
      "calcium_mg": 30,
      "iron_mg": 1.4,
      "magnesium_mg": 22,
      "potassium_mg": 210,
      "zinc_mg": 0.6
    },
    "goodFor": [
      "Cold & Cough Relief",
      "Metabolism Boost",
      "Hydration"
    ],
    "barcode": "890123001112",
    "description": "Authentic Tomato Pepper Rasam prepared with wholesome ingredients."
  },
  {
    "name": "Butter Naan",
    "food_id": "naan",
    "category": "Indian Breads & Rice",
    "subcategory": "Breads & Roti",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1601050690597-94f72db77189?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 310,
      "protein": 8.2,
      "carbohydrates": 52.0,
      "fat": 8.5,
      "saturatedFat": 2.5,
      "fiber": 2.4,
      "sugar": 3.0,
      "sodium": 420,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_b1_mg": 0.25,
      "vitamin_b3_mg": 2.8,
      "vitamin_b9_ug": 55
    },
    "minerals": {
      "calcium_mg": 65,
      "iron_mg": 2.4,
      "phosphorus_mg": 95,
      "potassium_mg": 140
    },
    "goodFor": [
      "Carb Fuel",
      "Traditional Pairing"
    ],
    "barcode": "890123001113",
    "description": "Authentic Butter Naan prepared with wholesome ingredients."
  },
  {
    "name": "Kerala Appam",
    "food_id": "appam",
    "category": "South Indian Specialties",
    "subcategory": "South Indian Dishes",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 145,
      "protein": 2.6,
      "carbohydrates": 30.5,
      "fat": 1.8,
      "saturatedFat": 0.5,
      "fiber": 1.2,
      "sugar": 2.5,
      "sodium": 110,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_b1_mg": 0.08,
      "vitamin_b3_mg": 1.1
    },
    "minerals": {
      "calcium_mg": 22,
      "iron_mg": 0.8,
      "magnesium_mg": 18,
      "potassium_mg": 95
    },
    "goodFor": [
      "Easy to Digest",
      "Fermented Probiotic",
      "Low Fat"
    ],
    "barcode": "890123001114",
    "description": "Authentic Kerala Appam prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Strawberry",
    "food_id": "strawberry",
    "category": "Fresh Fruits",
    "subcategory": "Berries",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 32,
      "protein": 0.7,
      "carbohydrates": 7.7,
      "fat": 0.3,
      "saturatedFat": 0.1,
      "fiber": 2.0,
      "sugar": 4.9,
      "sodium": 1,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 1,
      "vitamin_c_mg": 58.8,
      "vitamin_k_ug": 2.2,
      "vitamin_b9_ug": 24
    },
    "minerals": {
      "calcium_mg": 16,
      "iron_mg": 0.4,
      "magnesium_mg": 13,
      "potassium_mg": 153,
      "manganese_mg": 0.39
    },
    "goodFor": [
      "High Vitamin C",
      "Cardiovascular Health",
      "Low Glycemic Index"
    ],
    "barcode": "890123001115",
    "description": "Authentic Fresh Strawberry prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Watermelon",
    "food_id": "watermelon",
    "category": "Fresh Fruits",
    "subcategory": "Melons",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 30,
      "protein": 0.6,
      "carbohydrates": 7.5,
      "fat": 0.2,
      "saturatedFat": 0.1,
      "fiber": 0.4,
      "sugar": 6.2,
      "sodium": 1,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 28,
      "vitamin_c_mg": 8.1,
      "vitamin_b6_mg": 0.05
    },
    "minerals": {
      "calcium_mg": 7,
      "iron_mg": 0.2,
      "magnesium_mg": 10,
      "potassium_mg": 112
    },
    "goodFor": [
      "Lycopene Antioxidants",
      "Maximum Hydration",
      "Post-Workout Refresh"
    ],
    "barcode": "890123001116",
    "description": "Authentic Fresh Watermelon prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Grapes",
    "food_id": "grapes",
    "category": "Fresh Fruits",
    "subcategory": "Table Grapes",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 69,
      "protein": 0.7,
      "carbohydrates": 18.1,
      "fat": 0.2,
      "saturatedFat": 0.1,
      "fiber": 0.9,
      "sugar": 15.5,
      "sodium": 2,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 3.2,
      "vitamin_k_ug": 14.6,
      "vitamin_b1_mg": 0.07
    },
    "minerals": {
      "calcium_mg": 10,
      "iron_mg": 0.36,
      "potassium_mg": 191,
      "copper_mg": 0.13
    },
    "goodFor": [
      "Resveratrol",
      "Heart Function",
      "Brain Protection"
    ],
    "barcode": "890123001117",
    "description": "Authentic Fresh Grapes prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Guava (Amrood)",
    "food_id": "guava",
    "category": "Fresh Fruits",
    "subcategory": "Tropical Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1536511135898-752b0d49281c?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 68,
      "protein": 2.6,
      "carbohydrates": 14.3,
      "fat": 1.0,
      "saturatedFat": 0.3,
      "fiber": 5.4,
      "sugar": 8.9,
      "sodium": 2,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 31,
      "vitamin_c_mg": 228.3,
      "vitamin_b9_ug": 49
    },
    "minerals": {
      "calcium_mg": 18,
      "iron_mg": 0.26,
      "magnesium_mg": 22,
      "potassium_mg": 417
    },
    "goodFor": [
      "Ultra High Vitamin C (4x Orange)",
      "Gut Motility",
      "Blood Sugar Regulation"
    ],
    "barcode": "890123001118",
    "description": "Authentic Fresh Guava (Amrood) prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Papaya (Papita)",
    "food_id": "papaya",
    "category": "Fresh Fruits",
    "subcategory": "Tropical Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 43,
      "protein": 0.5,
      "carbohydrates": 10.8,
      "fat": 0.3,
      "saturatedFat": 0.1,
      "fiber": 1.7,
      "sugar": 7.8,
      "sodium": 8,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 47,
      "vitamin_c_mg": 60.9,
      "vitamin_b9_ug": 38
    },
    "minerals": {
      "calcium_mg": 20,
      "magnesium_mg": 21,
      "potassium_mg": 182
    },
    "goodFor": [
      "Papain Digestive Enzyme",
      "Skin Glow",
      "Immunity"
    ],
    "barcode": "890123001119",
    "description": "Authentic Fresh Papaya (Papita) prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Kiwi",
    "food_id": "kiwi",
    "category": "Fresh Fruits",
    "subcategory": "Exotic Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 61,
      "protein": 1.1,
      "carbohydrates": 14.7,
      "fat": 0.5,
      "saturatedFat": 0.1,
      "fiber": 3.0,
      "sugar": 9.0,
      "sodium": 3,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 92.7,
      "vitamin_k_ug": 40.3,
      "vitamin_e_mg": 1.5
    },
    "minerals": {
      "calcium_mg": 34,
      "iron_mg": 0.31,
      "magnesium_mg": 17,
      "potassium_mg": 312
    },
    "goodFor": [
      "Immune Defense",
      "Sleep Quality",
      "Asthma Relief"
    ],
    "barcode": "890123001120",
    "description": "Authentic Fresh Kiwi prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Pineapple (Ananas)",
    "food_id": "pineapple",
    "category": "Fresh Fruits",
    "subcategory": "Tropical Fruits",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 50,
      "protein": 0.5,
      "carbohydrates": 13.1,
      "fat": 0.1,
      "saturatedFat": 0.0,
      "fiber": 1.4,
      "sugar": 9.9,
      "sodium": 1,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 47.8,
      "vitamin_b1_mg": 0.08,
      "vitamin_b6_mg": 0.11
    },
    "minerals": {
      "calcium_mg": 13,
      "magnesium_mg": 12,
      "potassium_mg": 109,
      "manganese_mg": 0.93
    },
    "goodFor": [
      "Bromelain Enzyme",
      "Anti-Inflammatory",
      "Joint Recovery"
    ],
    "barcode": "890123001121",
    "description": "Authentic Fresh Pineapple (Ananas) prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Pomegranate (Anaar)",
    "food_id": "pomegranate",
    "category": "Fresh Fruits",
    "subcategory": "Arils & Seeds",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 83,
      "protein": 1.7,
      "carbohydrates": 18.7,
      "fat": 1.2,
      "saturatedFat": 0.4,
      "fiber": 4.0,
      "sugar": 13.7,
      "sodium": 3,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 10.2,
      "vitamin_k_ug": 16.4,
      "vitamin_b9_ug": 38
    },
    "minerals": {
      "calcium_mg": 10,
      "iron_mg": 0.3,
      "magnesium_mg": 12,
      "potassium_mg": 236,
      "phosphorus_mg": 36
    },
    "goodFor": [
      "Punicalagins Antioxidant",
      "Blood Pressure Support",
      "Memory"
    ],
    "barcode": "890123001122",
    "description": "Authentic Fresh Pomegranate (Anaar) prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Avocado",
    "food_id": "avocado",
    "category": "Fresh Fruits",
    "subcategory": "Healthy Fats",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 160,
      "protein": 2.0,
      "carbohydrates": 8.5,
      "fat": 14.7,
      "saturatedFat": 4.4,
      "fiber": 6.7,
      "sugar": 0.7,
      "sodium": 7,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 10.0,
      "vitamin_e_mg": 2.1,
      "vitamin_k_ug": 21.0,
      "vitamin_b9_ug": 81
    },
    "minerals": {
      "calcium_mg": 12,
      "magnesium_mg": 29,
      "potassium_mg": 485,
      "copper_mg": 0.19
    },
    "goodFor": [
      "Monounsaturated Healthy Fats",
      "Cholesterol Lowering",
      "Keto Essential"
    ],
    "barcode": "890123001123",
    "description": "Authentic Fresh Avocado prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Cucumber (Kheera)",
    "food_id": "cucumber",
    "category": "Fresh Vegetables",
    "subcategory": "Salad Vegetables",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 15,
      "protein": 0.7,
      "carbohydrates": 3.6,
      "fat": 0.1,
      "saturatedFat": 0.0,
      "fiber": 0.5,
      "sugar": 1.7,
      "sodium": 2,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 2.8,
      "vitamin_k_ug": 16.4
    },
    "minerals": {
      "calcium_mg": 16,
      "magnesium_mg": 13,
      "potassium_mg": 147
    },
    "goodFor": [
      "Ultra Low Calorie",
      "Electrolyte Balance",
      "Skin Cooling"
    ],
    "barcode": "890123001124",
    "description": "Authentic Fresh Cucumber (Kheera) prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Cauliflower (Gobi)",
    "food_id": "cauliflower",
    "category": "Fresh Vegetables",
    "subcategory": "Cruciferous Vegetables",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 25,
      "protein": 1.9,
      "carbohydrates": 5.0,
      "fat": 0.3,
      "saturatedFat": 0.1,
      "fiber": 2.0,
      "sugar": 1.9,
      "sodium": 30,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 48.2,
      "vitamin_k_ug": 15.5,
      "vitamin_b9_ug": 57
    },
    "minerals": {
      "calcium_mg": 22,
      "magnesium_mg": 15,
      "potassium_mg": 299
    },
    "goodFor": [
      "Sulforaphane Detox",
      "Low Carb Rice Substitute",
      "Choline Source"
    ],
    "barcode": "890123001125",
    "description": "Authentic Fresh Cauliflower (Gobi) prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Ginger Root (Adrak)",
    "food_id": "ginger",
    "category": "Fresh Vegetables",
    "subcategory": "Roots & Spices",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 80,
      "protein": 1.8,
      "carbohydrates": 17.8,
      "fat": 0.8,
      "saturatedFat": 0.2,
      "fiber": 2.0,
      "sugar": 1.7,
      "sodium": 13,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_c_mg": 5.0,
      "vitamin_b6_mg": 0.16
    },
    "minerals": {
      "magnesium_mg": 43,
      "potassium_mg": 415,
      "copper_mg": 0.23
    },
    "goodFor": [
      "Gingerol Anti-Nausea",
      "Digestive Fire",
      "Pain Reduction"
    ],
    "barcode": "890123001126",
    "description": "Authentic Fresh Ginger Root (Adrak) prepared with wholesome ingredients."
  },
  {
    "name": "Sweet Corn (Bhutta)",
    "food_id": "corn",
    "category": "Fresh Vegetables",
    "subcategory": "Grains & Kernels",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 86,
      "protein": 3.3,
      "carbohydrates": 19.0,
      "fat": 1.4,
      "saturatedFat": 0.4,
      "fiber": 2.7,
      "sugar": 3.2,
      "sodium": 15,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 9,
      "vitamin_c_mg": 6.8,
      "vitamin_b1_mg": 0.2,
      "vitamin_b9_ug": 42
    },
    "minerals": {
      "magnesium_mg": 37,
      "phosphorus_mg": 89,
      "potassium_mg": 270,
      "zinc_mg": 0.5
    },
    "goodFor": [
      "Lutein & Zeaxanthin (Eye Health)",
      "Energy",
      "Dietary Fiber"
    ],
    "barcode": "890123001127",
    "description": "Authentic Sweet Corn (Bhutta) prepared with wholesome ingredients."
  },
  {
    "name": "Kesar Pista Rasmalai",
    "food_id": "rasmalai",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Sweets",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1541781774459-d2b38466b07c?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 190,
      "protein": 6.5,
      "carbohydrates": 24.0,
      "fat": 8.0,
      "saturatedFat": 2.4,
      "fiber": 0.6,
      "sugar": 20.0,
      "sodium": 75,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 45,
      "vitamin_b2_mg": 0.18,
      "vitamin_b12_ug": 0.4
    },
    "minerals": {
      "calcium_mg": 190,
      "phosphorus_mg": 140,
      "potassium_mg": 180
    },
    "goodFor": [
      "Calcium & Protein",
      "Festive Energy"
    ],
    "barcode": "890123001128",
    "description": "Authentic Kesar Pista Rasmalai prepared with wholesome ingredients."
  },
  {
    "name": "Shrikhand",
    "food_id": "shrikhand",
    "category": "Desserts & Sweets",
    "subcategory": "Yogurt Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 270,
      "protein": 8.5,
      "carbohydrates": 36.0,
      "fat": 10.5,
      "saturatedFat": 6.4,
      "fiber": 0.2,
      "sugar": 32.0,
      "sodium": 65,
      "cholesterol": 26
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.06,
      "vitaminB2": 0.32,
      "vitaminB3": 0.3,
      "vitaminB6": 0.08,
      "vitaminB12": 0.62,
      "vitaminC": 1.0,
      "vitaminD": 0.3,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 240,
      "iron": 0.6,
      "magnesium": 28,
      "phosphorus": 210,
      "potassium": 280,
      "zinc": 1.1
    },
    "goodFor": [
      "High Protein Probiotic Treat",
      "Calcium Strength"
    ],
    "barcode": "890123001129",
    "description": "Silky, dense dessert made by straining yogurt into hung curd (chakka), whipped with powdered sugar, saffron, green cardamom, and pistachios."
  },
  {
    "name": "Rabri",
    "food_id": "rabri",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 310,
      "protein": 9.8,
      "carbohydrates": 34.0,
      "fat": 15.5,
      "saturatedFat": 9.2,
      "fiber": 0.3,
      "sugar": 28.0,
      "sodium": 98,
      "cholesterol": 44
    },
    "vitamins": {
      "vitaminA": 115,
      "vitaminB1": 0.08,
      "vitaminB2": 0.42,
      "vitaminB3": 0.5,
      "vitaminB6": 0.1,
      "vitaminB12": 0.8,
      "vitaminC": 1.4,
      "vitaminD": 0.5,
      "vitaminE": 0.8,
      "vitaminK": 1.0
    },
    "minerals": {
      "calcium": 340,
      "iron": 0.7,
      "magnesium": 38,
      "phosphorus": 280,
      "potassium": 380,
      "zinc": 1.4
    },
    "goodFor": [
      "Exceptional Calcium",
      "Dense Protein",
      "Traditional Treat"
    ],
    "barcode": "890123001130",
    "description": "Rich Northern dessert made by simmering whole milk on low heat, gathering layers of clotted malai, and sweetening with saffron and green cardamom."
  },
  {
    "name": "Indian Masala Chai",
    "food_id": "masala_chai",
    "category": "Beverages",
    "subcategory": "Hot Beverages",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 55,
      "protein": 1.8,
      "carbohydrates": 8.0,
      "fat": 1.6,
      "saturatedFat": 0.5,
      "fiber": 0.2,
      "sugar": 7.5,
      "sodium": 35,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_b2_mg": 0.08,
      "vitamin_b12_ug": 0.2
    },
    "minerals": {
      "calcium_mg": 65,
      "potassium_mg": 90
    },
    "goodFor": [
      "Spiced Antioxidants (Cardamom/Ginger/Cinnamon)",
      "Mental Alertness"
    ],
    "barcode": "890123001131",
    "description": "Authentic Indian Masala Chai prepared with wholesome ingredients."
  },
  {
    "name": "South Indian Filter Coffee",
    "food_id": "filter_coffee",
    "category": "Beverages",
    "subcategory": "Hot Beverages",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 65,
      "protein": 2.0,
      "carbohydrates": 8.5,
      "fat": 2.2,
      "saturatedFat": 0.7,
      "fiber": 0.1,
      "sugar": 7.8,
      "sodium": 38,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_b2_mg": 0.09,
      "vitamin_b3_mg": 0.6
    },
    "minerals": {
      "calcium_mg": 70,
      "potassium_mg": 120,
      "magnesium_mg": 14
    },
    "goodFor": [
      "Polyphenols",
      "Cognitive Focus",
      "Metabolic Awakening"
    ],
    "barcode": "890123001132",
    "description": "Authentic South Indian Filter Coffee prepared with wholesome ingredients."
  },
  {
    "name": "Fresh Mango Lassi",
    "food_id": "mango_lassi",
    "category": "Beverages",
    "subcategory": "Yogurt Drinks",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 95,
      "protein": 3.2,
      "carbohydrates": 16.5,
      "fat": 2.0,
      "saturatedFat": 0.6,
      "fiber": 0.8,
      "sugar": 14.5,
      "sodium": 45,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 42,
      "vitamin_c_mg": 14.0,
      "vitamin_b12_ug": 0.3
    },
    "minerals": {
      "calcium_mg": 110,
      "potassium_mg": 185
    },
    "goodFor": [
      "Probiotics + Vitamin A/C",
      "Cooling Sensation",
      "Post-Meal Digestion"
    ],
    "barcode": "890123001133",
    "description": "Authentic Fresh Mango Lassi prepared with wholesome ingredients."
  },
  {
    "name": "Punjabi Sweet Lassi",
    "food_id": "sweet_lassi",
    "category": "Beverages",
    "subcategory": "Yogurt Drinks",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 88,
      "protein": 3.4,
      "carbohydrates": 14.0,
      "fat": 2.2,
      "saturatedFat": 0.7,
      "fiber": 0.1,
      "sugar": 13.0,
      "sodium": 50,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 30,
      "vitamin_b2_mg": 0.14,
      "vitamin_b12_ug": 0.35
    },
    "minerals": {
      "calcium_mg": 125,
      "phosphorus_mg": 95,
      "potassium_mg": 160
    },
    "goodFor": [
      "Gut Microbiome Support",
      "Summer Refreshment",
      "Natural Hydration"
    ],
    "barcode": "890123001134",
    "description": "Authentic Punjabi Sweet Lassi prepared with wholesome ingredients."
  },
  {
    "name": "Salmon Avocado Sushi Roll",
    "food_id": "sushi",
    "category": "Fish & Seafood",
    "subcategory": "Japanese Cuisine",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 145,
      "protein": 6.8,
      "carbohydrates": 24.2,
      "fat": 2.4,
      "saturatedFat": 0.7,
      "fiber": 1.4,
      "sugar": 2.1,
      "sodium": 380,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 18,
      "vitamin_c_mg": 1.5,
      "vitamin_b12_ug": 1.2,
      "vitamin_d_ug": 2.1
    },
    "minerals": {
      "calcium_mg": 18,
      "iron_mg": 0.7,
      "potassium_mg": 160,
      "iodine_ug": 45.0,
      "selenium_ug": 12.0
    },
    "goodFor": [
      "Omega-3 Fatty Acids",
      "Thyroid Iodine Support",
      "Clean Lean Nutrition"
    ],
    "barcode": "890123001135",
    "description": "Authentic Salmon Avocado Sushi Roll prepared with wholesome ingredients."
  },
  {
    "name": "Mexican Street Tacos",
    "food_id": "tacos",
    "category": "Fast Food & Global",
    "subcategory": "Mexican Cuisine",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 10.4,
      "carbohydrates": 21.8,
      "fat": 8.9,
      "saturatedFat": 2.7,
      "fiber": 2.8,
      "sugar": 1.8,
      "sodium": 390,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 45,
      "vitamin_c_mg": 7.5,
      "vitamin_b3_mg": 2.4
    },
    "minerals": {
      "calcium_mg": 65,
      "iron_mg": 1.8,
      "magnesium_mg": 28,
      "potassium_mg": 230
    },
    "goodFor": [
      "Balanced Macros",
      "Fiber & Protein"
    ],
    "barcode": "890123001136",
    "description": "Authentic Mexican Street Tacos prepared with wholesome ingredients."
  },
  {
    "name": "Stuffed Mexican Burrito",
    "food_id": "burrito",
    "category": "Fast Food & Global",
    "subcategory": "Mexican Cuisine",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 205,
      "protein": 8.9,
      "carbohydrates": 26.5,
      "fat": 7.4,
      "saturatedFat": 2.2,
      "fiber": 3.4,
      "sugar": 1.9,
      "sodium": 410,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_c_mg": 6.2,
      "vitamin_b9_ug": 52
    },
    "minerals": {
      "calcium_mg": 75,
      "iron_mg": 2.1,
      "potassium_mg": 240
    },
    "goodFor": [
      "Complex Carbohydrates",
      "High Fiber Filling"
    ],
    "barcode": "890123001137",
    "description": "Authentic Stuffed Mexican Burrito prepared with wholesome ingredients."
  },
  {
    "name": "Japanese Miso Ramen",
    "food_id": "ramen",
    "category": "Fast Food & Global",
    "subcategory": "Japanese Cuisine",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1569718212165-22a49b6d213d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 115,
      "protein": 5.2,
      "carbohydrates": 17.5,
      "fat": 3.0,
      "saturatedFat": 0.9,
      "fiber": 1.8,
      "sugar": 1.4,
      "sodium": 490,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 30,
      "vitamin_c_mg": 3.0,
      "vitamin_b1_mg": 0.12
    },
    "minerals": {
      "calcium_mg": 25,
      "iron_mg": 1.1,
      "potassium_mg": 170
    },
    "goodFor": [
      "Collagen Broth",
      "Comforting Meal"
    ],
    "barcode": "890123001138",
    "description": "Authentic Japanese Miso Ramen prepared with wholesome ingredients."
  },
  {
    "name": "Belgian Waffles with Syrup",
    "food_id": "waffles",
    "category": "Fast Food & Global",
    "subcategory": "Breakfast & Bakery",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 290,
      "protein": 6.4,
      "carbohydrates": 42.0,
      "fat": 10.8,
      "saturatedFat": 3.2,
      "fiber": 1.2,
      "sugar": 14.0,
      "sodium": 360,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 45,
      "vitamin_b1_mg": 0.18,
      "vitamin_b2_mg": 0.15
    },
    "minerals": {
      "calcium_mg": 85,
      "iron_mg": 1.8,
      "phosphorus_mg": 110
    },
    "goodFor": [
      "Quick Morning Energy",
      "Crisp Texture"
    ],
    "barcode": "890123001139",
    "description": "Authentic Belgian Waffles with Syrup prepared with wholesome ingredients."
  },
  {
    "name": "Fluffy Buttermilk Pancakes",
    "food_id": "pancakes",
    "category": "Fast Food & Global",
    "subcategory": "Breakfast & Bakery",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 225,
      "protein": 6.1,
      "carbohydrates": 38.5,
      "fat": 5.4,
      "saturatedFat": 1.6,
      "fiber": 1.0,
      "sugar": 11.5,
      "sodium": 320,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 35,
      "vitamin_b1_mg": 0.15,
      "vitamin_b2_mg": 0.18
    },
    "minerals": {
      "calcium_mg": 95,
      "iron_mg": 1.6,
      "phosphorus_mg": 130
    },
    "goodFor": [
      "Classic Breakfast",
      "Soft Fluffy Texture"
    ],
    "barcode": "890123001140",
    "description": "Authentic Fluffy Buttermilk Pancakes prepared with wholesome ingredients."
  },
  {
    "name": "Classic Cinnamon Apple Pie",
    "food_id": "apple_pie",
    "category": "Desserts & Sweets",
    "subcategory": "Desserts & Bakery",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 265,
      "protein": 2.4,
      "carbohydrates": 40.2,
      "fat": 11.0,
      "saturatedFat": 3.3,
      "fiber": 2.2,
      "sugar": 21.0,
      "sodium": 210,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_a_ug": 25,
      "vitamin_c_mg": 4.5,
      "vitamin_e_mg": 0.8
    },
    "minerals": {
      "calcium_mg": 18,
      "iron_mg": 0.9,
      "potassium_mg": 115
    },
    "goodFor": [
      "Comfort Dessert",
      "Baked Fruit Goodness"
    ],
    "barcode": "890123001141",
    "description": "Authentic Classic Cinnamon Apple Pie prepared with wholesome ingredients."
  },
  {
    "name": "Pistachio Honey Baklava",
    "food_id": "baklava",
    "category": "Desserts & Sweets",
    "subcategory": "Desserts & Pastry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 430,
      "protein": 7.2,
      "carbohydrates": 48.0,
      "fat": 24.5,
      "saturatedFat": 7.3,
      "fiber": 3.1,
      "sugar": 29.0,
      "sodium": 160,
      "cholesterol": 0
    },
    "vitamins": {
      "vitamin_e_mg": 2.4,
      "vitamin_b1_mg": 0.16
    },
    "minerals": {
      "calcium_mg": 55,
      "iron_mg": 1.9,
      "magnesium_mg": 48,
      "potassium_mg": 210
    },
    "goodFor": [
      "Nutrient Dense Nuts",
      "Flaky Filo Layers"
    ],
    "barcode": "890123001142",
    "description": "Authentic Pistachio Honey Baklava prepared with wholesome ingredients."
  },
  {
    "name": "Korean Stone Pot Bibimbap",
    "food_id": "bibimbap",
    "category": "Fast Food & Global",
    "subcategory": "Korean Cuisine",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 155,
      "protein": 7.2,
      "carbohydrates": 22.4,
      "fat": 4.5,
      "saturatedFat": 1.3,
      "fiber": 2.8,
      "sugar": 2.2,
      "sodium": 380,
      "cholesterol": 35
    },
    "vitamins": {
      "vitamin_a_ug": 65,
      "vitamin_c_mg": 12.0,
      "vitamin_k_ug": 25.0,
      "vitamin_b12_ug": 0.4
    },
    "minerals": {
      "calcium_mg": 45,
      "iron_mg": 2.1,
      "magnesium_mg": 32,
      "potassium_mg": 270
    },
    "goodFor": [
      "Nutrient Rainbow",
      "Gochujang Metabolism Boost",
      "Balanced Complete Meal"
    ],
    "barcode": "890123001143",
    "description": "Authentic Korean Stone Pot Bibimbap prepared with wholesome ingredients."
  },
  {
    "name": "Adhirasam",
    "food_id": "adhirasam",
    "category": "Desserts & Sweets",
    "subcategory": "Traditional Pastry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 385,
      "protein": 4.2,
      "carbohydrates": 74.5,
      "fat": 8.5,
      "saturatedFat": 1.8,
      "fiber": 1.6,
      "sugar": 38.0,
      "sodium": 42,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 8,
      "vitaminB1": 0.08,
      "vitaminB2": 0.04,
      "vitaminB3": 1.2,
      "vitaminB6": 0.12,
      "vitaminB12": 0,
      "vitaminC": 0.4,
      "vitaminD": 0,
      "vitaminE": 0.8,
      "vitaminK": 1.5
    },
    "minerals": {
      "calcium": 64,
      "iron": 2.8,
      "magnesium": 32,
      "phosphorus": 88,
      "potassium": 160,
      "zinc": 0.9
    },
    "goodFor": [
      "Festive Energy",
      "Iron Boost from Jaggery"
    ],
    "barcode": "890123001144",
    "description": "Deep-fried traditional South Indian sweet doughnut made from aged raw rice flour, jaggery syrup, cardamom, and sesame seeds."
  },
  {
    "name": "Anarsa",
    "food_id": "anarsa",
    "category": "Desserts & Sweets",
    "subcategory": "Rice Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 410,
      "protein": 3.8,
      "carbohydrates": 68.0,
      "fat": 14.0,
      "saturatedFat": 6.5,
      "fiber": 1.8,
      "sugar": 32.0,
      "sodium": 35,
      "cholesterol": 18
    },
    "vitamins": {
      "vitaminA": 22,
      "vitaminB1": 0.06,
      "vitaminB2": 0.03,
      "vitaminB3": 0.9,
      "vitaminB6": 0.08,
      "vitaminB12": 0,
      "vitaminC": 0.2,
      "vitaminD": 0.1,
      "vitaminE": 1.2,
      "vitaminK": 2.0
    },
    "minerals": {
      "calcium": 78,
      "iron": 2.2,
      "magnesium": 42,
      "phosphorus": 92,
      "potassium": 140,
      "zinc": 1.1
    },
    "goodFor": [
      "Festive Dessert",
      "Sustained Energy"
    ],
    "barcode": "890123001145",
    "description": "Crisp fermented rice pastry soaked with jaggery or sugar, coated with poppy seeds and shallow fried in pure ghee."
  },
  {
    "name": "Ariselu",
    "food_id": "ariselu",
    "category": "Desserts & Sweets",
    "subcategory": "Traditional Pastry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 395,
      "protein": 4.0,
      "carbohydrates": 72.0,
      "fat": 10.5,
      "saturatedFat": 2.2,
      "fiber": 1.5,
      "sugar": 36.0,
      "sodium": 48,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 12,
      "vitaminB1": 0.07,
      "vitaminB2": 0.04,
      "vitaminB3": 1.1,
      "vitaminB6": 0.1,
      "vitaminB12": 0,
      "vitaminC": 0.5,
      "vitaminD": 0,
      "vitaminE": 0.9,
      "vitaminK": 1.8
    },
    "minerals": {
      "calcium": 85,
      "iron": 3.4,
      "magnesium": 38,
      "phosphorus": 95,
      "potassium": 175,
      "zinc": 1.0
    },
    "goodFor": [
      "Rich Iron Content",
      "Natural Jaggery Energy"
    ],
    "barcode": "890123001146",
    "description": "Authentic Andhra harvest festive delicacy made from fresh ground rice dough, dark organic jaggery, cardamom, and sesame seeds."
  },
  {
    "name": "Bandar Laddu",
    "food_id": "bandar_laddu",
    "category": "Desserts & Sweets",
    "subcategory": "Laddu",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 465,
      "protein": 7.5,
      "carbohydrates": 62.0,
      "fat": 21.0,
      "saturatedFat": 9.5,
      "fiber": 2.8,
      "sugar": 44.0,
      "sodium": 65,
      "cholesterol": 24
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.12,
      "vitaminB2": 0.06,
      "vitaminB3": 1.4,
      "vitaminB6": 0.15,
      "vitaminB12": 0.1,
      "vitaminC": 0.2,
      "vitaminD": 0.2,
      "vitaminE": 1.8,
      "vitaminK": 3.5
    },
    "minerals": {
      "calcium": 52,
      "iron": 2.4,
      "magnesium": 48,
      "phosphorus": 120,
      "potassium": 210,
      "zinc": 1.2
    },
    "goodFor": [
      "High Protein Sweet",
      "Festive Celebrations"
    ],
    "barcode": "890123001147",
    "description": "Geographical Indication (GI) tagged Andhra delicacy made from finely pounded gram flour boondi dough, sugar syrup, ghee, and roasted cashews."
  },
  {
    "name": "Basundi",
    "food_id": "basundi",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 280,
      "protein": 8.6,
      "carbohydrates": 32.0,
      "fat": 13.5,
      "saturatedFat": 8.0,
      "fiber": 0.4,
      "sugar": 28.0,
      "sodium": 95,
      "cholesterol": 38
    },
    "vitamins": {
      "vitaminA": 95,
      "vitaminB1": 0.08,
      "vitaminB2": 0.35,
      "vitaminB3": 0.4,
      "vitaminB6": 0.08,
      "vitaminB12": 0.65,
      "vitaminC": 1.2,
      "vitaminD": 0.4,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 290,
      "iron": 0.6,
      "magnesium": 32,
      "phosphorus": 240,
      "potassium": 360,
      "zinc": 1.1
    },
    "goodFor": [
      "High Calcium",
      "Bone Strength & Quality Protein"
    ],
    "barcode": "890123001148",
    "description": "Rich and creamy thickened whole milk dessert flavored with green cardamom, saffron strands, and slivered pistachios and almonds."
  },
  {
    "name": "Besan Cheela",
    "food_id": "besan_cheela",
    "category": "Healthy Staples & Breakfast",
    "subcategory": "Pancake",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1626777552737-0130f1469e38?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 195,
      "protein": 9.8,
      "carbohydrates": 24.5,
      "fat": 6.8,
      "saturatedFat": 1.1,
      "fiber": 5.2,
      "sugar": 2.4,
      "sodium": 280,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 48,
      "vitaminB1": 0.22,
      "vitaminB2": 0.12,
      "vitaminB3": 1.8,
      "vitaminB6": 0.25,
      "vitaminB12": 0,
      "vitaminC": 8.5,
      "vitaminD": 0,
      "vitaminE": 1.4,
      "vitaminK": 6.2
    },
    "minerals": {
      "calcium": 48,
      "iron": 2.8,
      "magnesium": 62,
      "phosphorus": 165,
      "potassium": 340,
      "zinc": 1.6
    },
    "goodFor": [
      "High Plant Protein",
      "Low Glycemic Index",
      "Weight Management"
    ],
    "barcode": "890123001149",
    "description": "Nutrient-dense savory Indian pancake prepared with spiced chickpea gram flour batter, diced onions, tomatoes, ginger, and fresh cilantro."
  },
  {
    "name": "Bhatura",
    "food_id": "bhatura",
    "category": "Breads & Roti",
    "subcategory": "Fried Bread",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626777552726-38d58c9735d4?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 315,
      "protein": 6.8,
      "carbohydrates": 46.0,
      "fat": 11.8,
      "saturatedFat": 2.8,
      "fiber": 1.8,
      "sugar": 2.1,
      "sodium": 320,
      "cholesterol": 4
    },
    "vitamins": {
      "vitaminA": 15,
      "vitaminB1": 0.18,
      "vitaminB2": 0.1,
      "vitaminB3": 2.4,
      "vitaminB6": 0.08,
      "vitaminB12": 0.05,
      "vitaminC": 0.2,
      "vitaminD": 0,
      "vitaminE": 1.2,
      "vitaminK": 2.8
    },
    "minerals": {
      "calcium": 38,
      "iron": 1.6,
      "magnesium": 22,
      "phosphorus": 85,
      "potassium": 120,
      "zinc": 0.8
    },
    "goodFor": [
      "Hearty Energy",
      "Authentic Punjabi Pairing"
    ],
    "barcode": "890123001150",
    "description": "Fluffy, deep-fried leavened sourdough bread made from refined flour, yogurt, and semolina, traditionally served hot with spicy Chole."
  },
  {
    "name": "Boondi",
    "food_id": "boondi",
    "category": "Snacks & Appetizers",
    "subcategory": "Crispy Snack",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 480,
      "protein": 11.2,
      "carbohydrates": 52.0,
      "fat": 25.5,
      "saturatedFat": 4.5,
      "fiber": 4.8,
      "sugar": 3.0,
      "sodium": 440,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 25,
      "vitaminB1": 0.2,
      "vitaminB2": 0.08,
      "vitaminB3": 1.6,
      "vitaminB6": 0.18,
      "vitaminB12": 0,
      "vitaminC": 0.5,
      "vitaminD": 0,
      "vitaminE": 2.4,
      "vitaminK": 4.8
    },
    "minerals": {
      "calcium": 58,
      "iron": 3.1,
      "magnesium": 68,
      "phosphorus": 180,
      "potassium": 380,
      "zinc": 1.8
    },
    "goodFor": [
      "High Protein Snack",
      "Versatile Raita Crunch"
    ],
    "barcode": "890123001151",
    "description": "Crisp golden fried miniature pearls of spiced gram flour batter, used in raitas, chaats, or sweetened as festive treats."
  },
  {
    "name": "Chak-Hao Kheer",
    "food_id": "chak_hao_kheer",
    "category": "Desserts & Sweets",
    "subcategory": "Rice Pudding",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1516714435131-02b4d93a6192?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 215,
      "protein": 5.4,
      "carbohydrates": 34.0,
      "fat": 6.8,
      "saturatedFat": 3.8,
      "fiber": 2.6,
      "sugar": 18.0,
      "sodium": 58,
      "cholesterol": 16
    },
    "vitamins": {
      "vitaminA": 55,
      "vitaminB1": 0.15,
      "vitaminB2": 0.22,
      "vitaminB3": 1.8,
      "vitaminB6": 0.14,
      "vitaminB12": 0.4,
      "vitaminC": 1.0,
      "vitaminD": 0.2,
      "vitaminE": 1.6,
      "vitaminK": 2.1
    },
    "minerals": {
      "calcium": 160,
      "iron": 2.2,
      "magnesium": 48,
      "phosphorus": 155,
      "potassium": 240,
      "zinc": 1.4
    },
    "goodFor": [
      "Super Antioxidant Anthocyanins",
      "Gut Health",
      "Unique Flavor"
    ],
    "barcode": "890123001152",
    "description": "Exotic royal purple pudding made from Manipur GI-tagged aromatic black rice (Chak-Hao) simmered with milk, cardamom, and roasted nuts."
  },
  {
    "name": "Cham Cham",
    "food_id": "cham_cham",
    "category": "Desserts & Sweets",
    "subcategory": "Chhena Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 290,
      "protein": 7.8,
      "carbohydrates": 48.0,
      "fat": 7.5,
      "saturatedFat": 4.5,
      "fiber": 0.6,
      "sugar": 36.0,
      "sodium": 65,
      "cholesterol": 22
    },
    "vitamins": {
      "vitaminA": 65,
      "vitaminB1": 0.05,
      "vitaminB2": 0.28,
      "vitaminB3": 0.3,
      "vitaminB6": 0.06,
      "vitaminB12": 0.55,
      "vitaminC": 0.4,
      "vitaminD": 0.3,
      "vitaminE": 0.5,
      "vitaminK": 0.6
    },
    "minerals": {
      "calcium": 220,
      "iron": 0.8,
      "magnesium": 24,
      "phosphorus": 190,
      "potassium": 180,
      "zinc": 1.0
    },
    "goodFor": [
      "Quality Chhena Protein",
      "High Calcium"
    ],
    "barcode": "890123001153",
    "description": "Traditional Bengali sweet made from fresh artisanal curd cheese (chhena) cooked in light cardamom sugar syrup and garnished with desiccated coconut."
  },
  {
    "name": "Chhena Kheeri",
    "food_id": "chhena_kheeri",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 245,
      "protein": 9.2,
      "carbohydrates": 28.0,
      "fat": 10.5,
      "saturatedFat": 6.2,
      "fiber": 0.2,
      "sugar": 22.0,
      "sodium": 75,
      "cholesterol": 28
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.06,
      "vitaminB2": 0.32,
      "vitaminB3": 0.4,
      "vitaminB6": 0.08,
      "vitaminB12": 0.6,
      "vitaminC": 0.8,
      "vitaminD": 0.3,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 260,
      "iron": 0.7,
      "magnesium": 28,
      "phosphorus": 210,
      "potassium": 260,
      "zinc": 1.2
    },
    "goodFor": [
      "Protein-Dense Dessert",
      "Calcium & Mineral Wealth"
    ],
    "barcode": "890123001154",
    "description": "Creamy delicacy from Coastal Odisha prepared with fine crumbles of fresh homemade chhena simmered slowly in sweetened saffron reduced milk."
  },
  {
    "name": "Chicken Razala",
    "food_id": "chicken_razala",
    "category": "Meat, Poultry & Seafood",
    "subcategory": "Chicken Curry",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 225,
      "protein": 19.5,
      "carbohydrates": 5.2,
      "fat": 14.0,
      "saturatedFat": 4.2,
      "fiber": 1.1,
      "sugar": 2.0,
      "sodium": 360,
      "cholesterol": 68
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.12,
      "vitaminB2": 0.18,
      "vitaminB3": 6.8,
      "vitaminB6": 0.45,
      "vitaminB12": 0.5,
      "vitaminC": 3.2,
      "vitaminD": 0.1,
      "vitaminE": 1.5,
      "vitaminK": 2.2
    },
    "minerals": {
      "calcium": 52,
      "iron": 1.6,
      "magnesium": 38,
      "phosphorus": 195,
      "potassium": 320,
      "zinc": 1.8
    },
    "goodFor": [
      "Lean Protein Muscle Recovery",
      "Mughlai Richness"
    ],
    "barcode": "890123001155",
    "description": "Royal Mughlai aromatic white chicken stew slow-simmered in rich cashew-poppy seed paste, whole dried red chilies, yogurt, and kewra water."
  },
  {
    "name": "Chicken Tikka Masala",
    "food_id": "chicken_tikka_masala",
    "category": "Meat, Poultry & Seafood",
    "subcategory": "Chicken Curry",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 18.2,
      "carbohydrates": 6.5,
      "fat": 12.5,
      "saturatedFat": 4.8,
      "fiber": 1.4,
      "sugar": 3.2,
      "sodium": 390,
      "cholesterol": 62
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.1,
      "vitaminB2": 0.16,
      "vitaminB3": 6.2,
      "vitaminB6": 0.42,
      "vitaminB12": 0.48,
      "vitaminC": 6.5,
      "vitaminD": 0.1,
      "vitaminE": 1.8,
      "vitaminK": 3.4
    },
    "minerals": {
      "calcium": 48,
      "iron": 1.5,
      "magnesium": 32,
      "phosphorus": 180,
      "potassium": 340,
      "zinc": 1.7
    },
    "goodFor": [
      "High Protein",
      "Global Comfort Favorite"
    ],
    "barcode": "890123001156",
    "description": "Charred tandoori chicken tikka chunks simmered in a luscious, spiced tomato, cream, butter, and fenugreek gravy."
  },
  {
    "name": "Daal Baati Churma",
    "food_id": "daal_baati_churma",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Specialty Platter",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 285,
      "protein": 7.5,
      "carbohydrates": 42.0,
      "fat": 10.5,
      "saturatedFat": 5.2,
      "fiber": 4.6,
      "sugar": 8.0,
      "sodium": 310,
      "cholesterol": 18
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.16,
      "vitaminB2": 0.1,
      "vitaminB3": 1.9,
      "vitaminB6": 0.18,
      "vitaminB12": 0.08,
      "vitaminC": 3.5,
      "vitaminD": 0.1,
      "vitaminE": 1.2,
      "vitaminK": 3.8
    },
    "minerals": {
      "calcium": 58,
      "iron": 2.6,
      "magnesium": 54,
      "phosphorus": 145,
      "potassium": 280,
      "zinc": 1.4
    },
    "goodFor": [
      "Traditional Sustained Energy",
      "Complete Amino Acid Balance"
    ],
    "barcode": "890123001157",
    "description": "Iconic Rajasthani culinary ensemble: baked wheat flour baatis dunked in desi ghee, served with spicy 5-lentil panchmel dal and sweet powdered churma."
  },
  {
    "name": "Daal Puri",
    "food_id": "daal_puri",
    "category": "Breads & Roti",
    "subcategory": "Stuffed Bread",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 290,
      "protein": 8.2,
      "carbohydrates": 44.0,
      "fat": 9.5,
      "saturatedFat": 2.1,
      "fiber": 4.2,
      "sugar": 1.8,
      "sodium": 340,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 22,
      "vitaminB1": 0.2,
      "vitaminB2": 0.09,
      "vitaminB3": 2.1,
      "vitaminB6": 0.2,
      "vitaminB12": 0,
      "vitaminC": 1.2,
      "vitaminD": 0,
      "vitaminE": 1.5,
      "vitaminK": 3.5
    },
    "minerals": {
      "calcium": 44,
      "iron": 2.8,
      "magnesium": 52,
      "phosphorus": 135,
      "potassium": 260,
      "zinc": 1.3
    },
    "goodFor": [
      "High Plant Protein Bread",
      "Nutritious Fiber"
    ],
    "barcode": "890123001158",
    "description": "Puffed whole wheat flatbreads stuffed with seasoned, roasted chana dal spiced with cumin, ajwain, and ginger, deep fried until golden."
  },
  {
    "name": "Dharwad Pedha",
    "food_id": "dharwad_pedha",
    "category": "Desserts & Sweets",
    "subcategory": "Peda",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 420,
      "protein": 9.5,
      "carbohydrates": 56.0,
      "fat": 18.0,
      "saturatedFat": 11.2,
      "fiber": 0.3,
      "sugar": 46.0,
      "sodium": 85,
      "cholesterol": 42
    },
    "vitamins": {
      "vitaminA": 110,
      "vitaminB1": 0.07,
      "vitaminB2": 0.38,
      "vitaminB3": 0.5,
      "vitaminB6": 0.09,
      "vitaminB12": 0.75,
      "vitaminC": 0.5,
      "vitaminD": 0.5,
      "vitaminE": 0.8,
      "vitaminK": 1.0
    },
    "minerals": {
      "calcium": 310,
      "iron": 0.9,
      "magnesium": 36,
      "phosphorus": 270,
      "potassium": 320,
      "zinc": 1.4
    },
    "goodFor": [
      "Dense Calcium",
      "Rich Authentic Heritage"
    ],
    "barcode": "890123001159",
    "description": "GI-tagged historic Karnataka dessert made from caramelized mawa (khoya) from Dharwad buffalo milk, sugar, cardamom, and coated with castor sugar."
  },
  {
    "name": "Doodhpak",
    "food_id": "doodhpak",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 220,
      "protein": 6.2,
      "carbohydrates": 32.0,
      "fat": 8.0,
      "saturatedFat": 4.8,
      "fiber": 0.5,
      "sugar": 22.0,
      "sodium": 68,
      "cholesterol": 22
    },
    "vitamins": {
      "vitaminA": 75,
      "vitaminB1": 0.09,
      "vitaminB2": 0.28,
      "vitaminB3": 0.6,
      "vitaminB6": 0.1,
      "vitaminB12": 0.5,
      "vitaminC": 1.2,
      "vitaminD": 0.3,
      "vitaminE": 0.8,
      "vitaminK": 1.2
    },
    "minerals": {
      "calcium": 210,
      "iron": 0.8,
      "magnesium": 28,
      "phosphorus": 180,
      "potassium": 270,
      "zinc": 1.1
    },
    "goodFor": [
      "Calcium Wealth",
      "Festive Digestion Boost"
    ],
    "barcode": "890123001160",
    "description": "Semi-thickened sweet rice pudding enriched with charoli (chironji seeds), saffron, nutmeg, and cardamom, paired traditionally with hot pooris."
  },
  {
    "name": "Double Ka Meetha",
    "food_id": "double_ka_meetha",
    "category": "Desserts & Sweets",
    "subcategory": "Bread Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 380,
      "protein": 6.4,
      "carbohydrates": 54.0,
      "fat": 16.0,
      "saturatedFat": 8.5,
      "fiber": 1.2,
      "sugar": 36.0,
      "sodium": 140,
      "cholesterol": 34
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.12,
      "vitaminB2": 0.24,
      "vitaminB3": 1.4,
      "vitaminB6": 0.09,
      "vitaminB12": 0.45,
      "vitaminC": 0.8,
      "vitaminD": 0.3,
      "vitaminE": 1.2,
      "vitaminK": 2.0
    },
    "minerals": {
      "calcium": 180,
      "iron": 1.4,
      "magnesium": 32,
      "phosphorus": 160,
      "potassium": 220,
      "zinc": 1.0
    },
    "goodFor": [
      "Royal Celebration",
      "Instant Energy"
    ],
    "barcode": "890123001161",
    "description": "Nizami Hyderabadi specialty prepared by frying milk bread in pure ghee, soaking in fragrant saffron-cardamom sugar syrup, and drenching in thick rabri."
  },
  {
    "name": "Dum Aloo",
    "food_id": "dum_aloo",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Potato Curry",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 165,
      "protein": 3.8,
      "carbohydrates": 22.0,
      "fat": 7.2,
      "saturatedFat": 1.8,
      "fiber": 3.1,
      "sugar": 2.8,
      "sodium": 340,
      "cholesterol": 6
    },
    "vitamins": {
      "vitaminA": 65,
      "vitaminB1": 0.14,
      "vitaminB2": 0.08,
      "vitaminB3": 2.2,
      "vitaminB6": 0.32,
      "vitaminB12": 0.1,
      "vitaminC": 14.5,
      "vitaminD": 0,
      "vitaminE": 1.1,
      "vitaminK": 4.5
    },
    "minerals": {
      "calcium": 48,
      "iron": 1.8,
      "magnesium": 34,
      "phosphorus": 95,
      "potassium": 480,
      "zinc": 0.8
    },
    "goodFor": [
      "High Potassium",
      "Vitamin C",
      "Aromatic Spices"
    ],
    "barcode": "890123001162",
    "description": "Baby potatoes pricked and fried golden, then slow-cooked (dum) in a fragrant fennel, dry ginger, and Kashmiri chili yogurt gravy."
  },
  {
    "name": "Gavvalu",
    "food_id": "gavvalu",
    "category": "Desserts & Sweets",
    "subcategory": "Traditional Pastry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 420,
      "protein": 5.2,
      "carbohydrates": 70.0,
      "fat": 13.8,
      "saturatedFat": 3.2,
      "fiber": 2.1,
      "sugar": 34.0,
      "sodium": 52,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 15,
      "vitaminB1": 0.12,
      "vitaminB2": 0.06,
      "vitaminB3": 1.6,
      "vitaminB6": 0.12,
      "vitaminB12": 0,
      "vitaminC": 0.4,
      "vitaminD": 0,
      "vitaminE": 1.4,
      "vitaminK": 2.6
    },
    "minerals": {
      "calcium": 68,
      "iron": 2.9,
      "magnesium": 38,
      "phosphorus": 110,
      "potassium": 190,
      "zinc": 1.1
    },
    "goodFor": [
      "Natural Jaggery Iron",
      "Crunchy Festive Snack"
    ],
    "barcode": "890123001163",
    "description": "Traditional Andhra shell-shaped crisp pastries rolled on a wooden gavvala board, fried crisp, and coated in rich jaggery cardamom syrup."
  },
  {
    "name": "Imarti",
    "food_id": "imarti",
    "category": "Desserts & Sweets",
    "subcategory": "Fried Sweet",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 360,
      "protein": 6.8,
      "carbohydrates": 64.0,
      "fat": 9.2,
      "saturatedFat": 2.2,
      "fiber": 2.4,
      "sugar": 42.0,
      "sodium": 45,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 20,
      "vitaminB1": 0.14,
      "vitaminB2": 0.08,
      "vitaminB3": 1.5,
      "vitaminB6": 0.16,
      "vitaminB12": 0,
      "vitaminC": 0.6,
      "vitaminD": 0,
      "vitaminE": 1.1,
      "vitaminK": 2.2
    },
    "minerals": {
      "calcium": 62,
      "iron": 2.4,
      "magnesium": 45,
      "phosphorus": 130,
      "potassium": 240,
      "zinc": 1.3
    },
    "goodFor": [
      "Higher Protein than Jalebi",
      "Festive Celebrations"
    ],
    "barcode": "890123001164",
    "description": "Ornate circular floral sweet made from ground black gram (urad dal) batter piped into hot ghee, fried crisp, and soaked in cardamom saffron syrup."
  },
  {
    "name": "Kadhi Pakoda",
    "food_id": "kadhi_pakoda",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Kadhi",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 150,
      "protein": 5.8,
      "carbohydrates": 16.5,
      "fat": 7.2,
      "saturatedFat": 2.6,
      "fiber": 2.4,
      "sugar": 3.8,
      "sodium": 360,
      "cholesterol": 12
    },
    "vitamins": {
      "vitaminA": 65,
      "vitaminB1": 0.12,
      "vitaminB2": 0.18,
      "vitaminB3": 1.2,
      "vitaminB6": 0.15,
      "vitaminB12": 0.35,
      "vitaminC": 4.5,
      "vitaminD": 0.1,
      "vitaminE": 1.2,
      "vitaminK": 3.8
    },
    "minerals": {
      "calcium": 140,
      "iron": 1.6,
      "magnesium": 42,
      "phosphorus": 145,
      "potassium": 260,
      "zinc": 1.1
    },
    "goodFor": [
      "Gut Probiotics from Yogurt",
      "Comfort Food Harmony"
    ],
    "barcode": "890123001165",
    "description": "Tangy, spiced yogurt and chickpea flour gravy simmered with fenugreek, mustard, and curry leaves, filled with crisp fried onion pakodas."
  },
  {
    "name": "Kajjikaya",
    "food_id": "kajjikaya",
    "category": "Desserts & Sweets",
    "subcategory": "Stuffed Pastry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 415,
      "protein": 6.2,
      "carbohydrates": 62.0,
      "fat": 16.5,
      "saturatedFat": 7.2,
      "fiber": 3.4,
      "sugar": 32.0,
      "sodium": 65,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 22,
      "vitaminB1": 0.15,
      "vitaminB2": 0.08,
      "vitaminB3": 1.8,
      "vitaminB6": 0.14,
      "vitaminB12": 0,
      "vitaminC": 0.8,
      "vitaminD": 0,
      "vitaminE": 1.6,
      "vitaminK": 2.8
    },
    "minerals": {
      "calcium": 54,
      "iron": 2.5,
      "magnesium": 46,
      "phosphorus": 135,
      "potassium": 220,
      "zinc": 1.2
    },
    "goodFor": [
      "Festive Favorite",
      "Wholesome Coconut Nutrients"
    ],
    "barcode": "890123001166",
    "description": "Crisp crescent-shaped deep-fried pastry filled with sweet roasted semolina, desiccated coconut, sugar, cardamom, and sesame seeds."
  },
  {
    "name": "Kakinada Khaja",
    "food_id": "kakinada_khaja",
    "category": "Desserts & Sweets",
    "subcategory": "Layered Pastry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 445,
      "protein": 4.5,
      "carbohydrates": 72.0,
      "fat": 16.0,
      "saturatedFat": 4.8,
      "fiber": 1.4,
      "sugar": 44.0,
      "sodium": 55,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 12,
      "vitaminB1": 0.1,
      "vitaminB2": 0.05,
      "vitaminB3": 1.5,
      "vitaminB6": 0.08,
      "vitaminB12": 0,
      "vitaminC": 0.2,
      "vitaminD": 0,
      "vitaminE": 1.4,
      "vitaminK": 2.5
    },
    "minerals": {
      "calcium": 42,
      "iron": 1.8,
      "magnesium": 26,
      "phosphorus": 85,
      "potassium": 140,
      "zinc": 0.8
    },
    "goodFor": [
      "Authentic Culinary Heritage",
      "Festive Celebrations"
    ],
    "barcode": "890123001167",
    "description": "Iconic cylindrical layered pastry from Kakinada with a crisp multi-layered outer crust holding a burst of fragrant sugar syrup inside."
  },
  {
    "name": "Kalakand",
    "food_id": "kalakand",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Fudge",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 320,
      "protein": 11.2,
      "carbohydrates": 42.0,
      "fat": 12.0,
      "saturatedFat": 7.5,
      "fiber": 0.4,
      "sugar": 34.0,
      "sodium": 88,
      "cholesterol": 32
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.06,
      "vitaminB2": 0.35,
      "vitaminB3": 0.4,
      "vitaminB6": 0.08,
      "vitaminB12": 0.68,
      "vitaminC": 0.6,
      "vitaminD": 0.4,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 320,
      "iron": 0.8,
      "magnesium": 32,
      "phosphorus": 260,
      "potassium": 290,
      "zinc": 1.3
    },
    "goodFor": [
      "High Protein Sweet",
      "Exceptional Calcium for Bones"
    ],
    "barcode": "890123001168",
    "description": "Traditional granular milk fudge made by slow-simmering fresh chhena and sweetened condensed milk flavored with cardamom and pistachios."
  },
  {
    "name": "Karela Bharta",
    "food_id": "karela_bharta",
    "category": "Vegetables & Greens",
    "subcategory": "Mashed Vegetable",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 65,
      "protein": 2.4,
      "carbohydrates": 7.5,
      "fat": 3.2,
      "saturatedFat": 0.4,
      "fiber": 3.8,
      "sugar": 1.8,
      "sodium": 180,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 120,
      "vitaminB1": 0.08,
      "vitaminB2": 0.06,
      "vitaminB3": 0.8,
      "vitaminB6": 0.12,
      "vitaminB12": 0,
      "vitaminC": 58.0,
      "vitaminD": 0,
      "vitaminE": 1.2,
      "vitaminK": 12.5
    },
    "minerals": {
      "calcium": 38,
      "iron": 1.4,
      "magnesium": 28,
      "phosphorus": 48,
      "potassium": 340,
      "zinc": 0.9
    },
    "goodFor": [
      "Blood Sugar Regulation",
      "Immunity Boost",
      "Liver Health"
    ],
    "barcode": "890123001169",
    "description": "Boiled or roasted bitter gourd mashed with pungent mustard oil, green chilies, onions, garlic, and sea salt."
  },
  {
    "name": "Kofta",
    "food_id": "kofta",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Kofta Curry",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 220,
      "protein": 6.8,
      "carbohydrates": 18.0,
      "fat": 14.0,
      "saturatedFat": 5.8,
      "fiber": 2.8,
      "sugar": 4.2,
      "sodium": 350,
      "cholesterol": 24
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.1,
      "vitaminB2": 0.14,
      "vitaminB3": 1.4,
      "vitaminB6": 0.16,
      "vitaminB12": 0.3,
      "vitaminC": 6.2,
      "vitaminD": 0.1,
      "vitaminE": 1.8,
      "vitaminK": 4.2
    },
    "minerals": {
      "calcium": 125,
      "iron": 1.6,
      "magnesium": 36,
      "phosphorus": 140,
      "potassium": 280,
      "zinc": 1.2
    },
    "goodFor": [
      "Royal Vegetable Dining",
      "Rich Comfort"
    ],
    "barcode": "890123001170",
    "description": "Delicate dumplings made from paneer, potato, or bottle gourd fried golden and served in a creamy cashew tomato spiced gravy."
  },
  {
    "name": "Kuzhi Paniyaram",
    "food_id": "kuzhi_paniyaram",
    "category": "South Indian Specialties",
    "subcategory": "Breakfast / Snack",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 185,
      "protein": 5.8,
      "carbohydrates": 32.0,
      "fat": 4.2,
      "saturatedFat": 0.8,
      "fiber": 3.2,
      "sugar": 1.4,
      "sodium": 260,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 28,
      "vitaminB1": 0.16,
      "vitaminB2": 0.08,
      "vitaminB3": 1.8,
      "vitaminB6": 0.18,
      "vitaminB12": 0,
      "vitaminC": 4.2,
      "vitaminD": 0,
      "vitaminE": 0.9,
      "vitaminK": 3.5
    },
    "minerals": {
      "calcium": 48,
      "iron": 1.9,
      "magnesium": 44,
      "phosphorus": 125,
      "potassium": 210,
      "zinc": 1.1
    },
    "goodFor": [
      "Gut Healthy Fermentation",
      "Low Oil Light Meal"
    ],
    "barcode": "890123001171",
    "description": "Crisp-on-the-outside, fluffy-inside fermented rice-lentil dumplings cooked in a special cast iron dimpled pan, tempered with mustard, onions, and curry leaves."
  },
  {
    "name": "Lassi",
    "food_id": "lassi",
    "category": "Healthy Staples & Breakfast",
    "subcategory": "Dairy Beverage",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 110,
      "protein": 3.8,
      "carbohydrates": 15.0,
      "fat": 4.0,
      "saturatedFat": 2.4,
      "fiber": 0,
      "sugar": 14.0,
      "sodium": 55,
      "cholesterol": 12
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.04,
      "vitaminB2": 0.18,
      "vitaminB3": 0.2,
      "vitaminB6": 0.05,
      "vitaminB12": 0.45,
      "vitaminC": 1.0,
      "vitaminD": 0.1,
      "vitaminE": 0.2,
      "vitaminK": 0.4
    },
    "minerals": {
      "calcium": 130,
      "iron": 0.2,
      "magnesium": 18,
      "phosphorus": 110,
      "potassium": 190,
      "zinc": 0.7
    },
    "goodFor": [
      "Probiotic Digestion",
      "Cooling Hydration & Calcium"
    ],
    "barcode": "890123001172",
    "description": "Refreshing traditional Punjabi blended yogurt beverage churned with ice, cardamom, saffron, and a dollop of fresh clotted cream (malai)."
  },
  {
    "name": "Ledikeni",
    "food_id": "ledikeni",
    "category": "Desserts & Sweets",
    "subcategory": "Chhena Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 310,
      "protein": 6.8,
      "carbohydrates": 52.0,
      "fat": 9.0,
      "saturatedFat": 4.8,
      "fiber": 0.6,
      "sugar": 40.0,
      "sodium": 65,
      "cholesterol": 24
    },
    "vitamins": {
      "vitaminA": 60,
      "vitaminB1": 0.05,
      "vitaminB2": 0.25,
      "vitaminB3": 0.3,
      "vitaminB6": 0.06,
      "vitaminB12": 0.5,
      "vitaminC": 0.4,
      "vitaminD": 0.2,
      "vitaminE": 0.6,
      "vitaminK": 0.7
    },
    "minerals": {
      "calcium": 190,
      "iron": 0.8,
      "magnesium": 22,
      "phosphorus": 170,
      "potassium": 160,
      "zinc": 0.9
    },
    "goodFor": [
      "Historic Heritage Sweet",
      "Calcium & Chhena Goodness"
    ],
    "barcode": "890123001173",
    "description": "Historic 19th-century Kolkata delicacy crafted by Bhim Chandra Nag: fried chhena dumplings flavored with cardamom and soaked in light sugar syrup."
  },
  {
    "name": "Litti Chokha",
    "food_id": "litti_chokha",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Specialty Platter",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 240,
      "protein": 8.8,
      "carbohydrates": 38.0,
      "fat": 6.5,
      "saturatedFat": 2.8,
      "fiber": 5.4,
      "sugar": 2.5,
      "sodium": 310,
      "cholesterol": 10
    },
    "vitamins": {
      "vitaminA": 48,
      "vitaminB1": 0.22,
      "vitaminB2": 0.12,
      "vitaminB3": 2.2,
      "vitaminB6": 0.26,
      "vitaminB12": 0.05,
      "vitaminC": 6.8,
      "vitaminD": 0,
      "vitaminE": 1.4,
      "vitaminK": 5.2
    },
    "minerals": {
      "calcium": 62,
      "iron": 3.4,
      "magnesium": 64,
      "phosphorus": 160,
      "potassium": 340,
      "zinc": 1.6
    },
    "goodFor": [
      "High Plant Protein",
      "Rich Dietary Fiber",
      "Wholesome Sattu Nutrition"
    ],
    "barcode": "890123001174",
    "description": "Whole wheat balls stuffed with spiced roasted gram flour (sattu), baked over coal fire, dipped in desi ghee, and served with mashed brinjal-tomato chokha."
  },
  {
    "name": "Lyangcha",
    "food_id": "lyangcha",
    "category": "Desserts & Sweets",
    "subcategory": "Fried Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 330,
      "protein": 6.5,
      "carbohydrates": 54.0,
      "fat": 10.5,
      "saturatedFat": 5.2,
      "fiber": 0.5,
      "sugar": 42.0,
      "sodium": 68,
      "cholesterol": 26
    },
    "vitamins": {
      "vitaminA": 65,
      "vitaminB1": 0.05,
      "vitaminB2": 0.26,
      "vitaminB3": 0.3,
      "vitaminB6": 0.06,
      "vitaminB12": 0.52,
      "vitaminC": 0.4,
      "vitaminD": 0.2,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 200,
      "iron": 0.9,
      "magnesium": 24,
      "phosphorus": 175,
      "potassium": 170,
      "zinc": 1.0
    },
    "goodFor": [
      "Rich Indulgence",
      "Traditional Bengal Pride"
    ],
    "barcode": "890123001175",
    "description": "Famous Shaktigarh cylindrical fried sweet made from artisanal chhena and khoya dough, deep-fried dark and steeped in cardamom sugar syrup."
  },
  {
    "name": "Maach Jhol",
    "food_id": "maach_jhol",
    "category": "Meat, Poultry & Seafood",
    "subcategory": "Seafood Curry",
    "type": "Non-Vegetarian",
    "image": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 145,
      "protein": 16.5,
      "carbohydrates": 4.5,
      "fat": 7.0,
      "saturatedFat": 1.2,
      "fiber": 1.2,
      "sugar": 1.5,
      "sodium": 320,
      "cholesterol": 45
    },
    "vitamins": {
      "vitaminA": 55,
      "vitaminB1": 0.14,
      "vitaminB2": 0.16,
      "vitaminB3": 4.8,
      "vitaminB6": 0.38,
      "vitaminB12": 1.8,
      "vitaminC": 6.0,
      "vitaminD": 4.2,
      "vitaminE": 1.8,
      "vitaminK": 3.2
    },
    "minerals": {
      "calcium": 68,
      "iron": 1.4,
      "magnesium": 36,
      "phosphorus": 210,
      "potassium": 380,
      "zinc": 1.4
    },
    "goodFor": [
      "High Omega-3 Fatty Acids",
      "Heart Health & Lean Fish Protein"
    ],
    "barcode": "890123001176",
    "description": "Comforting light Bengali fish curry cooked with Rohu or Katla fish steaks, potatoes, pointed gourd, turmeric, and freshly ground mustard and kalonji."
  },
  {
    "name": "Makki di Roti & Sarson da Saag",
    "food_id": "makki_di_roti_sarson_da_saag",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Specialty Platter",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 175,
      "protein": 5.2,
      "carbohydrates": 26.0,
      "fat": 6.2,
      "saturatedFat": 2.4,
      "fiber": 4.8,
      "sugar": 2.2,
      "sodium": 280,
      "cholesterol": 8
    },
    "vitamins": {
      "vitaminA": 480,
      "vitaminB1": 0.18,
      "vitaminB2": 0.22,
      "vitaminB3": 2.1,
      "vitaminB6": 0.35,
      "vitaminB12": 0.05,
      "vitaminC": 34.0,
      "vitaminD": 0,
      "vitaminE": 2.8,
      "vitaminK": 220.0
    },
    "minerals": {
      "calcium": 165,
      "iron": 3.8,
      "magnesium": 62,
      "phosphorus": 140,
      "potassium": 420,
      "zinc": 1.4
    },
    "goodFor": [
      "Super Vitamin K & A Wealth",
      "Immunity",
      "Gluten-Free Corn Bread"
    ],
    "barcode": "890123001177",
    "description": "Quintessential Punjabi winter feast: rustic unleavened yellow cornmeal flatbread paired with slow-cooked spiced mustard greens, spinach, and white butter."
  },
  {
    "name": "Malapua",
    "food_id": "malapua",
    "category": "Desserts & Sweets",
    "subcategory": "Pancake",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 340,
      "protein": 5.4,
      "carbohydrates": 58.0,
      "fat": 10.5,
      "saturatedFat": 4.2,
      "fiber": 1.8,
      "sugar": 36.0,
      "sodium": 58,
      "cholesterol": 16
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.12,
      "vitaminB2": 0.14,
      "vitaminB3": 1.5,
      "vitaminB6": 0.16,
      "vitaminB12": 0.2,
      "vitaminC": 2.5,
      "vitaminD": 0.1,
      "vitaminE": 1.0,
      "vitaminK": 2.0
    },
    "minerals": {
      "calcium": 85,
      "iron": 2.0,
      "magnesium": 36,
      "phosphorus": 115,
      "potassium": 210,
      "zinc": 1.0
    },
    "goodFor": [
      "Festive Energy",
      "Holi & Jagannath Mahaprasad Delight"
    ],
    "barcode": "890123001178",
    "description": "Fried spiced pancake prepared from flour, semolina, mashed banana, and fennel seeds, soaked in rich saffron syrup and topped with pistachios."
  },
  {
    "name": "Missi Roti",
    "food_id": "misi_roti",
    "category": "Breads & Roti",
    "subcategory": "Flatbread",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 260,
      "protein": 9.4,
      "carbohydrates": 44.0,
      "fat": 5.5,
      "saturatedFat": 1.2,
      "fiber": 5.8,
      "sugar": 2.0,
      "sodium": 290,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 35,
      "vitaminB1": 0.24,
      "vitaminB2": 0.12,
      "vitaminB3": 2.6,
      "vitaminB6": 0.28,
      "vitaminB12": 0,
      "vitaminC": 2.0,
      "vitaminD": 0,
      "vitaminE": 1.6,
      "vitaminK": 5.8
    },
    "minerals": {
      "calcium": 52,
      "iron": 3.2,
      "magnesium": 68,
      "phosphorus": 175,
      "potassium": 320,
      "zinc": 1.7
    },
    "goodFor": [
      "High Plant Protein",
      "High Fiber Diabetic Friendly Bread"
    ],
    "barcode": "890123001179",
    "description": "Nutritious North Indian flatbread made by blending whole wheat flour and chickpea gram flour with ajwain, kasuri methi, turmeric, and onions."
  },
  {
    "name": "Misti Doi",
    "food_id": "misti_doi",
    "category": "Desserts & Sweets",
    "subcategory": "Yogurt Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 165,
      "protein": 4.8,
      "carbohydrates": 24.0,
      "fat": 5.5,
      "saturatedFat": 3.4,
      "fiber": 0,
      "sugar": 22.0,
      "sodium": 65,
      "cholesterol": 16
    },
    "vitamins": {
      "vitaminA": 60,
      "vitaminB1": 0.05,
      "vitaminB2": 0.22,
      "vitaminB3": 0.2,
      "vitaminB6": 0.06,
      "vitaminB12": 0.52,
      "vitaminC": 1.2,
      "vitaminD": 0.2,
      "vitaminE": 0.3,
      "vitaminK": 0.5
    },
    "minerals": {
      "calcium": 175,
      "iron": 0.4,
      "magnesium": 22,
      "phosphorus": 140,
      "potassium": 230,
      "zinc": 0.9
    },
    "goodFor": [
      "Natural Probiotics",
      "Gut Health & Cooling Calcium"
    ],
    "barcode": "890123001180",
    "description": "Celebrated Bengali fermented sweet yogurt set in earthen clay pots with caramelized jaggery or palm sugar, giving it a distinctive nutty blush."
  },
  {
    "name": "Navrattan Korma",
    "food_id": "navrattan_korma",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Vegetable Curry",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 195,
      "protein": 5.4,
      "carbohydrates": 16.0,
      "fat": 12.5,
      "saturatedFat": 4.2,
      "fiber": 3.4,
      "sugar": 5.8,
      "sodium": 310,
      "cholesterol": 16
    },
    "vitamins": {
      "vitaminA": 180,
      "vitaminB1": 0.14,
      "vitaminB2": 0.16,
      "vitaminB3": 1.8,
      "vitaminB6": 0.24,
      "vitaminB12": 0.25,
      "vitaminC": 18.0,
      "vitaminD": 0.1,
      "vitaminE": 2.4,
      "vitaminK": 18.5
    },
    "minerals": {
      "calcium": 95,
      "iron": 1.8,
      "magnesium": 48,
      "phosphorus": 135,
      "potassium": 320,
      "zinc": 1.3
    },
    "goodFor": [
      "Multi-Nutrient Vegetable Variety",
      "Antioxidant Richness"
    ],
    "barcode": "890123001181",
    "description": "Luxurious Mughlai curry containing nine assorted vegetables, paneer, fruits, and nuts in a velvety sweet-savory cashew and poppy seed gravy."
  },
  {
    "name": "Pithe",
    "food_id": "pithe",
    "category": "Desserts & Sweets",
    "subcategory": "Stuffed Pastry",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 265,
      "protein": 5.8,
      "carbohydrates": 46.0,
      "fat": 7.2,
      "saturatedFat": 4.0,
      "fiber": 2.2,
      "sugar": 24.0,
      "sodium": 52,
      "cholesterol": 14
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.1,
      "vitaminB2": 0.14,
      "vitaminB3": 1.1,
      "vitaminB6": 0.12,
      "vitaminB12": 0.25,
      "vitaminC": 1.2,
      "vitaminD": 0.1,
      "vitaminE": 0.8,
      "vitaminK": 1.4
    },
    "minerals": {
      "calcium": 110,
      "iron": 2.1,
      "magnesium": 38,
      "phosphorus": 120,
      "potassium": 210,
      "zinc": 1.1
    },
    "goodFor": [
      "Nolen Gur Mineral Richness",
      "Harvest Celebrations"
    ],
    "barcode": "890123001182",
    "description": "Artisanal winter harvest treat: thin rice flour crepes rolled with a luscious filling of fresh coconut, khoya, and date palm jaggery (nolen gur)."
  },
  {
    "name": "Poornalu",
    "food_id": "poornalu",
    "category": "Desserts & Sweets",
    "subcategory": "Fried Sweet",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 310,
      "protein": 7.2,
      "carbohydrates": 56.0,
      "fat": 6.8,
      "saturatedFat": 1.8,
      "fiber": 3.8,
      "sugar": 28.0,
      "sodium": 65,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 18,
      "vitaminB1": 0.18,
      "vitaminB2": 0.08,
      "vitaminB3": 1.6,
      "vitaminB6": 0.18,
      "vitaminB12": 0,
      "vitaminC": 1.0,
      "vitaminD": 0,
      "vitaminE": 1.2,
      "vitaminK": 2.8
    },
    "minerals": {
      "calcium": 62,
      "iron": 3.2,
      "magnesium": 52,
      "phosphorus": 140,
      "potassium": 280,
      "zinc": 1.3
    },
    "goodFor": [
      "Plant Protein & Iron Boost",
      "Authentic Telugu Tradition"
    ],
    "barcode": "890123001183",
    "description": "Divine Andhra festive sweet: sphere of cooked chana dal, jaggery, and cardamom encased in a crisp fermented urad-rice batter and golden fried."
  },
  {
    "name": "Pootharekulu",
    "food_id": "pootharekulu",
    "category": "Desserts & Sweets",
    "subcategory": "Wafer Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 460,
      "protein": 4.2,
      "carbohydrates": 68.0,
      "fat": 20.0,
      "saturatedFat": 10.5,
      "fiber": 1.2,
      "sugar": 42.0,
      "sodium": 35,
      "cholesterol": 28
    },
    "vitamins": {
      "vitaminA": 95,
      "vitaminB1": 0.08,
      "vitaminB2": 0.04,
      "vitaminB3": 1.1,
      "vitaminB6": 0.08,
      "vitaminB12": 0.1,
      "vitaminC": 0.2,
      "vitaminD": 0.3,
      "vitaminE": 1.8,
      "vitaminK": 3.2
    },
    "minerals": {
      "calcium": 48,
      "iron": 1.6,
      "magnesium": 28,
      "phosphorus": 85,
      "potassium": 150,
      "zinc": 0.9
    },
    "goodFor": [
      "Featherlight Crispy Sweet",
      "Artisanal Craftsmanship"
    ],
    "barcode": "890123001184",
    "description": "GI-tagged paper-thin edible rice starch wafer sheets hand-layered with pure ghee, powdered sugar or jaggery, and chopped dry fruits."
  },
  {
    "name": "Qubani Ka Meetha",
    "food_id": "qubani_ka_meetha",
    "category": "Desserts & Sweets",
    "subcategory": "Fruit Dessert",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 240,
      "protein": 2.8,
      "carbohydrates": 54.0,
      "fat": 2.2,
      "saturatedFat": 0.4,
      "fiber": 5.8,
      "sugar": 44.0,
      "sodium": 28,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 360,
      "vitaminB1": 0.06,
      "vitaminB2": 0.12,
      "vitaminB3": 2.4,
      "vitaminB6": 0.18,
      "vitaminB12": 0,
      "vitaminC": 4.5,
      "vitaminD": 0,
      "vitaminE": 3.2,
      "vitaminK": 6.5
    },
    "minerals": {
      "calcium": 72,
      "iron": 3.6,
      "magnesium": 44,
      "phosphorus": 95,
      "potassium": 680,
      "zinc": 0.9
    },
    "goodFor": [
      "High Potassium & Vitamin A",
      "Rich Dietary Fiber",
      "Heart Health"
    ],
    "barcode": "890123001185",
    "description": "Royal Hyderabadi delicacy prepared from dried apricots stewed slowly with sugar, cardamom, and garnished with apricot almond kernels and clotted cream."
  },
  {
    "name": "Sandesh",
    "food_id": "sandesh",
    "category": "Desserts & Sweets",
    "subcategory": "Chhena Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 255,
      "protein": 12.4,
      "carbohydrates": 32.0,
      "fat": 8.8,
      "saturatedFat": 5.2,
      "fiber": 0.2,
      "sugar": 26.0,
      "sodium": 58,
      "cholesterol": 24
    },
    "vitamins": {
      "vitaminA": 75,
      "vitaminB1": 0.06,
      "vitaminB2": 0.34,
      "vitaminB3": 0.4,
      "vitaminB6": 0.08,
      "vitaminB12": 0.65,
      "vitaminC": 0.5,
      "vitaminD": 0.3,
      "vitaminE": 0.6,
      "vitaminK": 0.7
    },
    "minerals": {
      "calcium": 280,
      "iron": 0.8,
      "magnesium": 30,
      "phosphorus": 240,
      "potassium": 220,
      "zinc": 1.2
    },
    "goodFor": [
      "High Protein Low Fat Dessert",
      "Rich Calcium"
    ],
    "barcode": "890123001186",
    "description": "Refined Bengali dessert made from lightly kneaded fresh artisanal chhena gently cooked with date palm jaggery or sugar, shaped into delicate molds."
  },
  {
    "name": "Shankarpali",
    "food_id": "shankarpali",
    "category": "Snacks & Appetizers",
    "subcategory": "Crispy Snack",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 465,
      "protein": 6.8,
      "carbohydrates": 64.0,
      "fat": 21.0,
      "saturatedFat": 5.8,
      "fiber": 2.4,
      "sugar": 28.0,
      "sodium": 65,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 18,
      "vitaminB1": 0.14,
      "vitaminB2": 0.08,
      "vitaminB3": 1.8,
      "vitaminB6": 0.12,
      "vitaminB12": 0,
      "vitaminC": 0.2,
      "vitaminD": 0,
      "vitaminE": 1.8,
      "vitaminK": 3.4
    },
    "minerals": {
      "calcium": 48,
      "iron": 2.2,
      "magnesium": 34,
      "phosphorus": 105,
      "potassium": 160,
      "zinc": 1.0
    },
    "goodFor": [
      "Crunchy Tea Time Snack",
      "Diwali Tradition"
    ],
    "barcode": "890123001187",
    "description": "Crisp diamond-cut snack prepared from spiced flour dough sweetened with sugar or jaggery, flavored with cardamom, and fried until golden."
  },
  {
    "name": "Sheer Korma",
    "food_id": "sheer_korma",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 260,
      "protein": 6.8,
      "carbohydrates": 38.0,
      "fat": 9.5,
      "saturatedFat": 5.2,
      "fiber": 2.2,
      "sugar": 26.0,
      "sodium": 72,
      "cholesterol": 24
    },
    "vitamins": {
      "vitaminA": 75,
      "vitaminB1": 0.12,
      "vitaminB2": 0.28,
      "vitaminB3": 1.2,
      "vitaminB6": 0.14,
      "vitaminB12": 0.52,
      "vitaminC": 1.2,
      "vitaminD": 0.2,
      "vitaminE": 1.4,
      "vitaminK": 1.8
    },
    "minerals": {
      "calcium": 195,
      "iron": 1.8,
      "magnesium": 42,
      "phosphorus": 170,
      "potassium": 320,
      "zinc": 1.2
    },
    "goodFor": [
      "High Calcium & Dates Iron",
      "Festive Celebrations"
    ],
    "barcode": "890123001188",
    "description": "Festive Eid dessert made by roasting fine vermicelli in ghee, slow-simmering in rich milk with dried dates, saffron, cardamom, and charoli nuts."
  },
  {
    "name": "Sheera",
    "food_id": "sheera",
    "category": "Desserts & Sweets",
    "subcategory": "Halwa",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 320,
      "protein": 5.2,
      "carbohydrates": 52.0,
      "fat": 11.0,
      "saturatedFat": 6.2,
      "fiber": 1.6,
      "sugar": 30.0,
      "sodium": 48,
      "cholesterol": 22
    },
    "vitamins": {
      "vitaminA": 60,
      "vitaminB1": 0.14,
      "vitaminB2": 0.08,
      "vitaminB3": 1.6,
      "vitaminB6": 0.09,
      "vitaminB12": 0.15,
      "vitaminC": 0.4,
      "vitaminD": 0.2,
      "vitaminE": 1.2,
      "vitaminK": 2.2
    },
    "minerals": {
      "calcium": 62,
      "iron": 1.8,
      "magnesium": 28,
      "phosphorus": 95,
      "potassium": 160,
      "zinc": 0.9
    },
    "goodFor": [
      "Instant Wholesome Energy",
      "Traditional Prasad"
    ],
    "barcode": "890123001189",
    "description": "Traditional roasted semolina pudding cooked in pure ghee, cardamom milk, and sugar, garnished with golden raisins and toasted cashews."
  },
  {
    "name": "Sohan Halwa",
    "food_id": "sohan_halwa",
    "category": "Desserts & Sweets",
    "subcategory": "Halwa",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1589301760014-99b82142d590?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 475,
      "protein": 6.4,
      "carbohydrates": 62.0,
      "fat": 23.5,
      "saturatedFat": 12.0,
      "fiber": 2.4,
      "sugar": 44.0,
      "sodium": 52,
      "cholesterol": 38
    },
    "vitamins": {
      "vitaminA": 95,
      "vitaminB1": 0.12,
      "vitaminB2": 0.16,
      "vitaminB3": 1.5,
      "vitaminB6": 0.12,
      "vitaminB12": 0.25,
      "vitaminC": 0.4,
      "vitaminD": 0.3,
      "vitaminE": 2.4,
      "vitaminK": 3.8
    },
    "minerals": {
      "calcium": 95,
      "iron": 2.4,
      "magnesium": 52,
      "phosphorus": 140,
      "potassium": 240,
      "zinc": 1.3
    },
    "goodFor": [
      "Dense Energy Confection",
      "Rich Heritage Flavor"
    ],
    "barcode": "890123001190",
    "description": "Dense, chewy caramelized confection made from sprouted wheat flour (angoori), milk, sugar, saffron, and loaded with almonds and pistachios."
  },
  {
    "name": "Sohan Papdi",
    "food_id": "sohan_papdi",
    "category": "Desserts & Sweets",
    "subcategory": "Flaky Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 490,
      "protein": 6.2,
      "carbohydrates": 64.0,
      "fat": 24.0,
      "saturatedFat": 12.5,
      "fiber": 2.0,
      "sugar": 46.0,
      "sodium": 42,
      "cholesterol": 32
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.1,
      "vitaminB2": 0.06,
      "vitaminB3": 1.2,
      "vitaminB6": 0.1,
      "vitaminB12": 0.1,
      "vitaminC": 0.2,
      "vitaminD": 0.2,
      "vitaminE": 1.8,
      "vitaminK": 3.2
    },
    "minerals": {
      "calcium": 48,
      "iron": 1.9,
      "magnesium": 36,
      "phosphorus": 98,
      "potassium": 160,
      "zinc": 0.9
    },
    "goodFor": [
      "Flaky Melt-in-Mouth Texture",
      "Diwali Gift Favorite"
    ],
    "barcode": "890123001191",
    "description": "Delicate, crisp, multi-fibered cotton candy-like sweet made from gram flour, refined flour, ghee, sugar syrup, and cardamom."
  },
  {
    "name": "Sutar Feni",
    "food_id": "sutar_feni",
    "category": "Desserts & Sweets",
    "subcategory": "Flaky Sweet",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 460,
      "protein": 4.8,
      "carbohydrates": 66.0,
      "fat": 20.5,
      "saturatedFat": 9.8,
      "fiber": 1.4,
      "sugar": 42.0,
      "sodium": 45,
      "cholesterol": 28
    },
    "vitamins": {
      "vitaminA": 75,
      "vitaminB1": 0.08,
      "vitaminB2": 0.04,
      "vitaminB3": 1.3,
      "vitaminB6": 0.08,
      "vitaminB12": 0.1,
      "vitaminC": 0.2,
      "vitaminD": 0.2,
      "vitaminE": 1.5,
      "vitaminK": 2.8
    },
    "minerals": {
      "calcium": 42,
      "iron": 1.6,
      "magnesium": 26,
      "phosphorus": 82,
      "potassium": 130,
      "zinc": 0.8
    },
    "goodFor": [
      "Featherlight Sweet Strands",
      "Festive Celebrations"
    ],
    "barcode": "890123001192",
    "description": "Gossamer thread-like shredded sweet made from roasted all-purpose flour strings in ghee, steeped in sugar syrup and topped with pistachios."
  },
  {
    "name": "Unni Appam",
    "food_id": "unni_appam",
    "category": "Desserts & Sweets",
    "subcategory": "Fried Sweet",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 330,
      "protein": 3.8,
      "carbohydrates": 62.0,
      "fat": 8.5,
      "saturatedFat": 4.2,
      "fiber": 2.8,
      "sugar": 32.0,
      "sodium": 48,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 22,
      "vitaminB1": 0.12,
      "vitaminB2": 0.06,
      "vitaminB3": 1.4,
      "vitaminB6": 0.22,
      "vitaminB12": 0,
      "vitaminC": 4.2,
      "vitaminD": 0,
      "vitaminE": 0.9,
      "vitaminK": 1.8
    },
    "minerals": {
      "calcium": 58,
      "iron": 2.6,
      "magnesium": 44,
      "phosphorus": 95,
      "potassium": 310,
      "zinc": 1.0
    },
    "goodFor": [
      "Natural Jaggery & Banana Energy",
      "Traditional Kerala Teatime"
    ],
    "barcode": "890123001193",
    "description": "Beloved Kerala snack made from roasted rice flour, ripe bananas, dark jaggery, roasted coconut bits, cardamom, and fried in ghee appakarai."
  },
  {
    "name": "Kathi & Spring Rolls",
    "food_id": "rolls",
    "category": "Street Food & Chaat",
    "subcategory": "Wraps & Rolls",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1626777552726-5b4d75618b76?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 220,
      "protein": 8.5,
      "carbohydrates": 26.0,
      "fat": 9.5,
      "saturatedFat": 3.2,
      "fiber": 2.8,
      "sugar": 2.4,
      "sodium": 360,
      "cholesterol": 15
    },
    "vitamins": {
      "vitaminA": 65,
      "vitaminB1": 0.16,
      "vitaminB2": 0.12,
      "vitaminB3": 2.2,
      "vitaminB6": 0.2,
      "vitaminB12": 0.25,
      "vitaminC": 8.5,
      "vitaminD": 0.1,
      "vitaminE": 1.6,
      "vitaminK": 4.8
    },
    "minerals": {
      "calcium": 85,
      "iron": 2.2,
      "magnesium": 42,
      "phosphorus": 140,
      "potassium": 260,
      "zinc": 1.3
    },
    "goodFor": [
      "Balanced On-The-Go Meal",
      "Protein & Veggie Richness"
    ],
    "barcode": "890123001194",
    "description": "Flaky paratha or crisp pastry wrapped around spicy paneer, egg, or sauteed vegetables with tangy mint-chili chutney and pickled onions."
  },
  {
    "name": "Aloo Matar",
    "food_id": "aloo_matar",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Curry",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 135,
      "protein": 4.2,
      "carbohydrates": 21.0,
      "fat": 4.5,
      "saturatedFat": 0.8,
      "fiber": 3.8,
      "sugar": 3.2,
      "sodium": 290,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 75,
      "vitaminB1": 0.18,
      "vitaminB2": 0.08,
      "vitaminB3": 1.8,
      "vitaminB6": 0.26,
      "vitaminB12": 0,
      "vitaminC": 18.0,
      "vitaminD": 0,
      "vitaminE": 1.1,
      "vitaminK": 14.5
    },
    "minerals": {
      "calcium": 38,
      "iron": 1.9,
      "magnesium": 32,
      "phosphorus": 88,
      "potassium": 380,
      "zinc": 0.9
    },
    "goodFor": [
      "High Potassium & Vitamin C",
      "Plant Protein & Fiber"
    ],
    "barcode": "890123001195",
    "description": "Comforting North Indian curry cooked with tender diced potatoes, sweet green peas, tomatoes, ginger, and aromatic spices."
  },
  {
    "name": "Aloo Shimla Mirch",
    "food_id": "aloo_shimla_mirch",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Dry Subzi",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 115,
      "protein": 2.8,
      "carbohydrates": 17.5,
      "fat": 4.2,
      "saturatedFat": 0.6,
      "fiber": 3.4,
      "sugar": 2.8,
      "sodium": 260,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 160,
      "vitaminB1": 0.12,
      "vitaminB2": 0.08,
      "vitaminB3": 1.6,
      "vitaminB6": 0.32,
      "vitaminB12": 0,
      "vitaminC": 48.0,
      "vitaminD": 0,
      "vitaminE": 1.4,
      "vitaminK": 8.5
    },
    "minerals": {
      "calcium": 32,
      "iron": 1.6,
      "magnesium": 28,
      "phosphorus": 68,
      "potassium": 360,
      "zinc": 0.7
    },
    "goodFor": [
      "Super High Vitamin C",
      "Antioxidant Boost",
      "Low Calorie"
    ],
    "barcode": "890123001196",
    "description": "Flavorful home-style stir fry of crisp green bell peppers and golden pan-roasted potatoes tossed with cumin, coriander, and amchur."
  },
  {
    "name": "Paneer Butter Masala",
    "food_id": "paneer_butter_masala",
    "category": "Indian Cuisines & Curries",
    "subcategory": "Paneer Curry",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 245,
      "protein": 11.8,
      "carbohydrates": 8.5,
      "fat": 18.5,
      "saturatedFat": 8.2,
      "fiber": 1.8,
      "sugar": 3.8,
      "sodium": 340,
      "cholesterol": 38
    },
    "vitamins": {
      "vitaminA": 140,
      "vitaminB1": 0.08,
      "vitaminB2": 0.28,
      "vitaminB3": 0.8,
      "vitaminB6": 0.12,
      "vitaminB12": 0.6,
      "vitaminC": 8.5,
      "vitaminD": 0.3,
      "vitaminE": 2.2,
      "vitaminK": 4.8
    },
    "minerals": {
      "calcium": 260,
      "iron": 1.4,
      "magnesium": 42,
      "phosphorus": 210,
      "potassium": 290,
      "zinc": 1.6
    },
    "goodFor": [
      "High Quality Calcium & Protein",
      "Royal Comfort Food"
    ],
    "barcode": "890123001197",
    "description": "Soft artisanal cottage cheese cubes simmered in a velvety smooth tomato-butter sauce enriched with cashew cream and fragrant dried fenugreek leaves."
  },
  {
    "name": "Ras Malai",
    "food_id": "ras_malai",
    "category": "Desserts & Sweets",
    "subcategory": "Milk Dessert",
    "type": "Vegetarian",
    "image": "https://images.unsplash.com/photo-1547592166-418b76e01a88?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 210,
      "protein": 7.8,
      "carbohydrates": 26.0,
      "fat": 8.5,
      "saturatedFat": 5.2,
      "fiber": 0.4,
      "sugar": 22.0,
      "sodium": 68,
      "cholesterol": 24
    },
    "vitamins": {
      "vitaminA": 85,
      "vitaminB1": 0.06,
      "vitaminB2": 0.3,
      "vitaminB3": 0.4,
      "vitaminB6": 0.08,
      "vitaminB12": 0.58,
      "vitaminC": 0.8,
      "vitaminD": 0.3,
      "vitaminE": 0.6,
      "vitaminK": 0.8
    },
    "minerals": {
      "calcium": 240,
      "iron": 0.7,
      "magnesium": 28,
      "phosphorus": 195,
      "potassium": 250,
      "zinc": 1.1
    },
    "goodFor": [
      "High Calcium",
      "Refreshing Chilled Milk Protein"
    ],
    "barcode": "890123001198",
    "description": "Melt-in-mouth flattened chhena discs poached and immersed in chilled, sweetened, saffron-cardamom clotted milk garnished with pistachios."
  },
  {
    "name": "Dosa (Plain / Sada)",
    "food_id": "dosa",
    "category": "South Indian Specialties",
    "subcategory": "Breakfast / Crepe",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 170,
      "protein": 4.5,
      "carbohydrates": 29.0,
      "fat": 4.2,
      "saturatedFat": 0.8,
      "fiber": 2.2,
      "sugar": 0.8,
      "sodium": 240,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 12,
      "vitaminB1": 0.16,
      "vitaminB2": 0.08,
      "vitaminB3": 1.8,
      "vitaminB6": 0.16,
      "vitaminB12": 0,
      "vitaminC": 1.2,
      "vitaminD": 0,
      "vitaminE": 0.8,
      "vitaminK": 2.2
    },
    "minerals": {
      "calcium": 32,
      "iron": 1.8,
      "magnesium": 36,
      "phosphorus": 98,
      "potassium": 160,
      "zinc": 0.9
    },
    "goodFor": [
      "Gut Probiotics from Natural Fermentation",
      "Easy Digestion & Sustained Energy"
    ],
    "barcode": "890123001199",
    "description": "Crisp golden fermented rice and black gram crepe roasted on a hot tawa with sesame oil or ghee, served with coconut chutney and sambar."
  },
  {
    "name": "Pakoda (Fritters)",
    "food_id": "pakoda",
    "category": "Street Food & Chaat",
    "subcategory": "Fried Snack",
    "type": "Vegan",
    "image": "https://images.unsplash.com/photo-1599488615731-10c59828fa68?auto=format&fit=crop&w=800&q=80",
    "servingSize": 100,
    "servingUnit": "g",
    "nutrition": {
      "calories": 285,
      "protein": 6.8,
      "carbohydrates": 32.0,
      "fat": 14.5,
      "saturatedFat": 2.4,
      "fiber": 4.2,
      "sugar": 2.2,
      "sodium": 360,
      "cholesterol": 0
    },
    "vitamins": {
      "vitaminA": 45,
      "vitaminB1": 0.18,
      "vitaminB2": 0.09,
      "vitaminB3": 1.7,
      "vitaminB6": 0.22,
      "vitaminB12": 0,
      "vitaminC": 6.5,
      "vitaminD": 0,
      "vitaminE": 1.8,
      "vitaminK": 5.2
    },
    "minerals": {
      "calcium": 44,
      "iron": 2.4,
      "magnesium": 48,
      "phosphorus": 120,
      "potassium": 280,
      "zinc": 1.2
    },
    "goodFor": [
      "High Plant Protein Snack",
      "Monsoon & Teatime Favorite"
    ],
    "barcode": "890123001200",
    "description": "Crisp golden deep-fried vegetable fritters made by dipping sliced onions, potatoes, or spinach in spiced chickpea gram flour batter."
  }
];

module.exports = initialFoods;
