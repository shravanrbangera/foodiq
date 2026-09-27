import json
from collections import Counter

fm = json.load(open(r"D:\MCA\Projects\FoodIQ\server\data\food_master.json", encoding="utf-8"))

print(f"Total items in food_master.json: {len(fm)}")

image_to_foods = {}
for k, v in fm.items():
    img = v.get("image", "")
    if img not in image_to_foods:
        image_to_foods[img] = []
    image_to_foods[img].append(f"{k} ({v.get('canonical_name')})")

print("\n--- DUPLICATE IMAGES DETECTED ---")
for img, foods in image_to_foods.items():
    if len(foods) > 1:
        print(f"\nImage: {img}")
        print(f"Used by {len(foods)} foods: {', '.join(foods)}")
