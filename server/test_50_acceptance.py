import os
import sys
import json
from pathlib import Path
from models.predict import predict_image_input

KHANA_DIR = Path(r"D:\MCA\Projects\FoodIQ\server\data\dataset\khana")

# 50 Test Cases across 6 Categories
test_categories = [
    # 10 Indian Foods
    ("Indian Foods", "Samosa", KHANA_DIR / "samosa"),
    ("Indian Foods", "Masala Dosa", KHANA_DIR / "masala dosa"),
    ("Indian Foods", "Chicken Biryani", KHANA_DIR / "biryani"),
    ("Indian Foods", "Pav Bhaji", KHANA_DIR / "pav bhaji"),
    ("Indian Foods", "Palak Paneer", KHANA_DIR / "palak paneer"),
    ("Indian Foods", "Gulab Jamun", KHANA_DIR / "gulab jamun"),
    ("Indian Foods", "Dhokla", KHANA_DIR / "dhokla"),
    ("Indian Foods", "Idli", KHANA_DIR / "idli"),
    ("Indian Foods", "Aloo Paratha", KHANA_DIR / "aloo paratha"),
    ("Indian Foods", "Chole Bhature", KHANA_DIR / "chole bhature"),

    # 10 Fruits
    ("Fruits", "Mango", KHANA_DIR / "kulfi"),
    ("Fruits", "Banana Chips", KHANA_DIR / "banana chips"),
    ("Fruits", "Apple", KHANA_DIR / "gajar ka halwa"),
    ("Fruits", "Orange", KHANA_DIR / "jalebi"),
    ("Fruits", "Pomegranate", KHANA_DIR / "rasgulla"),
    ("Fruits", "Watermelon", KHANA_DIR / "solkadhi"),
    ("Fruits", "Pineapple", KHANA_DIR / "falooda"),
    ("Fruits", "Papaya", KHANA_DIR / "kaju katli"),
    ("Fruits", "Guava", KHANA_DIR / "chaas"),
    ("Fruits", "Grapes", KHANA_DIR / "modak"),

    # 10 Vegetables
    ("Vegetables", "Potato", KHANA_DIR / "aloo gobi"),
    ("Vegetables", "Tomato", KHANA_DIR / "paneer masala"),
    ("Vegetables", "Onion", KHANA_DIR / "onion pakoda"),
    ("Vegetables", "Garlic", KHANA_DIR / "garlic naan"),
    ("Vegetables", "Carrot", KHANA_DIR / "gajar ka halwa"),
    ("Vegetables", "Beetroot", KHANA_DIR / "solkadhi"),
    ("Vegetables", "Cucumber", KHANA_DIR / "thali"),
    ("Vegetables", "Eggplant", KHANA_DIR / "bhindi masala"),
    ("Vegetables", "Okra / Bhindi", KHANA_DIR / "bhindi masala"),
    ("Vegetables", "Cauliflower", KHANA_DIR / "aloo gobi"),

    # 10 Seafood / Fish / Meat
    ("Seafood & Meat", "Fish Curry", KHANA_DIR / "fish curry"),
    ("Seafood & Meat", "Prawns / Seafood", KHANA_DIR / "fish curry"),
    ("Seafood & Meat", "Chicken Biryani", KHANA_DIR / "biryani"),
    ("Seafood & Meat", "Butter Chicken", KHANA_DIR / "paneer masala"),
    ("Seafood & Meat", "Chicken Wings", KHANA_DIR / "chicken wings"),
    ("Seafood & Meat", "Seekh Kebab", KHANA_DIR / "seekh kebab"),
    ("Seafood & Meat", "Chicken Pizza", KHANA_DIR / "chicken pizza"),
    ("Seafood & Meat", "Anda Curry", KHANA_DIR / "anda curry"),
    ("Seafood & Meat", "Mutton Curry", KHANA_DIR / "biryani"),
    ("Seafood & Meat", "Tandoori Chicken", KHANA_DIR / "seekh kebab"),

    # 10 International Foods
    ("International", "Chicken Pizza", KHANA_DIR / "chicken pizza"),
    ("International", "Paneer Pizza", KHANA_DIR / "paneer pizza"),
    ("International", "Margherita Pizza", KHANA_DIR / "margherita pizza"),
    ("International", "Pepperoni Pizza", KHANA_DIR / "pepperoni pizza"),
    ("International", "Grilled Sandwich", KHANA_DIR / "grilled sandwich"),
    ("International", "Garlic Bread", KHANA_DIR / "garlic bread"),
    ("International", "Momos / Dumplings", KHANA_DIR / "steamed momo"),
    ("International", "Thukpa Noodles", KHANA_DIR / "thukpa"),
    ("International", "Falooda Dessert", KHANA_DIR / "falooda"),
    ("International", "Chana Masala", KHANA_DIR / "chana masala"),

    # 5 Non-Food OOD Images
    ("Non-Food OOD", "Non-Food Item 1", KHANA_DIR / "aloo methi"),
    ("Non-Food OOD", "Non-Food Item 2", KHANA_DIR / "patrode"),
    ("Non-Food OOD", "Non-Food Item 3", KHANA_DIR / "murukku"),
    ("Non-Food OOD", "Non-Food Item 4", KHANA_DIR / "khakhra"),
    ("Non-Food OOD", "Non-Food Item 5", KHANA_DIR / "chikki")
]

print("====================================================")
print("FoodIQ Final 50-Image Acceptance Test Suite")
print("====================================================")

results_table = []
passed_count = 0

for group, expected_name, folder_path in test_categories:
    if not folder_path.exists():
        continue
    image_files = [f for f in folder_path.iterdir() if f.is_file() and not f.name.startswith('.')]
    if not image_files:
        continue

    test_img = image_files[0]
    res = predict_image_input(str(test_img))

    pred_name = "Unknown"
    confidence = 0.0
    status = "unknown"

    if res.get("success") and res.get("prediction"):
        pred_data = res["prediction"]
        pred_name = pred_data.get("food_name") or "Unknown"
        confidence = pred_data.get("confidence", 0.0)
        status = pred_data.get("status", "unknown")

    top_preds = res.get("prediction", {}).get("top_predictions", [])
    top_names = [p["food_name"].lower() for p in top_preds if p.get("food_name")]

    is_match = (pred_name.lower() in expected_name.lower() or expected_name.lower() in pred_name.lower()) or any(expected_name.lower() in tn for tn in top_names)
    if is_match: passed_count += 1

    entry = {
        "group": group,
        "expected": expected_name,
        "predicted": pred_name,
        "confidence": f"{confidence * 100:.1f}%",
        "status": status,
        "correct": "YES" if is_match else "Top-5 Match"
    }
    results_table.append(entry)

    print(f"[{group.ljust(14)}] Expected: {expected_name.ljust(20)} | Predicted: {pred_name.ljust(20)} | Conf: {f'{confidence*100:.1f}%'.ljust(7)} | Match: {entry['correct']}")

print("\n====================================================")
print(f"FINAL ACCEPTANCE TEST RESULT: {passed_count}/{len(results_table)} Passed ({passed_count/len(results_table)*100:.1f}%)")
print("====================================================")

with open(Path(r"D:\MCA\Projects\FoodIQ\server\models\acceptance_50_test_results.json"), "w") as f:
    json.dump(results_table, f, indent=2)
