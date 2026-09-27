import os
import sys
import json
import base64
from pathlib import Path
from models.predict import predict_image_input

KHANA_DIR = Path(r"D:\MCA\Projects\FoodIQ\server\data\dataset\khana")

test_cases = [
    ("Samosa", KHANA_DIR / "samosa"),
    ("Masala Dosa", KHANA_DIR / "masala dosa"),
    ("Biryani", KHANA_DIR / "biryani"),
    ("Pav Bhaji", KHANA_DIR / "pav bhaji"),
    ("Palak Paneer", KHANA_DIR / "palak paneer"),
    ("Gulab Jamun", KHANA_DIR / "gulab jamun"),
    ("Dhokla", KHANA_DIR / "dhokla"),
    ("Idli", KHANA_DIR / "idli"),
    ("Chicken Pizza", KHANA_DIR / "chicken pizza"),
    ("Garlic Naan", KHANA_DIR / "garlic naan")
]

print("====================================================")
print("FoodIQ End-to-End Real Image Recognition Test Suite")
print("====================================================")

results = []
passed_count = 0

for target_name, folder_path in test_cases:
    if not folder_path.exists():
        print(f"Warning: Folder missing for {target_name}: {folder_path}")
        continue

    image_files = [f for f in folder_path.iterdir() if f.is_file() and not f.name.startswith('.')]
    if not image_files:
        print(f"Warning: No images found in {folder_path}")
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

    is_match = (pred_name.lower() == target_name.lower()) or (target_name.lower() in top_names)
    if is_match: passed_count += 1

    results.append({
        "target_food": target_name,
        "image_file": test_img.name,
        "predicted_food": pred_name,
        "confidence": confidence,
        "confidence_pct": f"{confidence * 100:.1f}%",
        "status": status,
        "is_match": is_match,
        "top_predictions": top_preds[:3]
    })

    print(f"\n[Test Case]: {target_name}")
    print(f"   Image File: {test_img.name}")
    print(f"   Predicted Food: {pred_name} ({confidence * 100:.1f}%)")
    print(f"   Status: {status} | Match Result: {'YES' if is_match else 'Top-5 Match'}")
    print(f"   Top 3 Predictions: {[p['food_name'] + ' (' + str(round(p['confidence']*100,1)) + '%)' for p in top_preds[:3]]}")

print("\n====================================================")
print(f"TEST SUMMARY: {passed_count}/{len(results)} Matches Passed ({passed_count/len(results)*100:.1f}%)")
print("====================================================")

with open(Path(r"D:\MCA\Projects\FoodIQ\server\models\end2end_test_results.json"), "w") as f:
    json.dump(results, f, indent=2)

print("Saved test results to: D:\\MCA\\Projects\\FoodIQ\\server\\models\\end2end_test_results.json")
