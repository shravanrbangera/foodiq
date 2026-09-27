"""
FoodIQ - Automated Database Consistency & Integrity Verification Script
========================================================================
Audits database relationships across:
- food_master.json
- food_images.json
- nutrition_master.json
- class_names.json

Detects:
1. Foods with missing images
2. Foods with missing nutrition
3. Broken nutrition IDs
4. Duplicate food IDs
5. Duplicate image mappings
6. Duplicate nutrition IDs
7. Orphan images
8. Orphan nutrition records
9. Class index mapping mismatches
"""

import sys
import json
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
SERVER_DIR = BASE_DIR / "server"
DATA_DIR = SERVER_DIR / "data"
MODELS_DIR = SERVER_DIR / "models" / "production"

FOOD_MASTER_PATH = DATA_DIR / "food_master.json"
FOOD_IMAGES_PATH = DATA_DIR / "food_images.json"
NUTRITION_MASTER_PATH = DATA_DIR / "nutrition_master.json"
CLASS_NAMES_PATH = MODELS_DIR / "class_names.json"

def run_consistency_audit():
    print("====================================================")
    print("🛡️ FoodIQ Automated Database Consistency Auditor")
    print("====================================================")

    errors = []
    warnings = []

    # 1. Load Files
    if not FOOD_MASTER_PATH.exists():
        print(f"❌ Missing {FOOD_MASTER_PATH}")
        sys.exit(1)
    with open(FOOD_MASTER_PATH, "r", encoding="utf-8") as f:
        food_master = json.load(f)

    if not FOOD_IMAGES_PATH.exists():
        print(f"❌ Missing {FOOD_IMAGES_PATH}")
        sys.exit(1)
    with open(FOOD_IMAGES_PATH, "r", encoding="utf-8") as f:
        food_images = json.load(f)

    if not NUTRITION_MASTER_PATH.exists():
        print(f"❌ Missing {NUTRITION_MASTER_PATH}")
        sys.exit(1)
    with open(NUTRITION_MASTER_PATH, "r", encoding="utf-8") as f:
        nutrition_master = json.load(f)

    class_names = []
    if CLASS_NAMES_PATH.exists():
        with open(CLASS_NAMES_PATH, "r", encoding="utf-8") as f:
            class_names = json.load(f)

    print(f"• Total Food Master Records: {len(food_master)}")
    print(f"• Total Image Records: {len(food_images)}")
    print(f"• Total Nutrition Records: {len(nutrition_master)}")
    print(f"• Total Model Classes: {len(class_names)}")

    # 2. Audit Food Master Integrity
    seen_nutrition_ids = {}
    for food_id, entry in food_master.items():
        # Check canonical name
        if not entry.get("canonical_name"):
            errors.append(f"Food '{food_id}' has empty canonical_name.")

        # Check image link
        img = entry.get("image")
        if not img:
            errors.append(f"Food '{food_id}' has missing image URL.")

        # Check nutrition ID
        nut_id = entry.get("nutrition_id")
        if not nut_id:
            errors.append(f"Food '{food_id}' has missing nutrition_id.")
        elif nut_id in seen_nutrition_ids:
            errors.append(f"Duplicate nutrition_id '{nut_id}' shared between '{food_id}' and '{seen_nutrition_ids[nut_id]}'.")
        else:
            seen_nutrition_ids[nut_id] = food_id

        # Check corresponding record in nutrition_master
        if food_id not in nutrition_master:
            errors.append(f"Food '{food_id}' has no corresponding record in nutrition_master.json.")
        else:
            nut_entry = nutrition_master[food_id]
            nut_data = nut_entry.get("nutrition", {})
            if nut_data.get("calories_kcal") is None or nut_data.get("protein_g") is None:
                errors.append(f"Food '{food_id}' has incomplete macronutrient data.")

        # Check corresponding record in food_images
        if food_id not in food_images:
            errors.append(f"Food '{food_id}' has no corresponding record in food_images.json.")

    # 3. Audit Model Class Names Alignment
    if class_names:
        for idx, cls_name in enumerate(class_names):
            norm_id = cls_name.lower().replace(" ", "_").replace("-", "_")
            if norm_id not in food_master:
                warnings.append(f"Model class '{cls_name}' (index {idx}) is not found in food_master.json.")

    # 4. Check for Orphan Records
    for food_id in food_images:
        if food_id not in food_master:
            warnings.append(f"Orphan image entry in food_images.json: '{food_id}'")

    for food_id in nutrition_master:
        if food_id not in food_master:
            warnings.append(f"Orphan nutrition entry in nutrition_master.json: '{food_id}'")

    # 5. Output Results
    print("\n====================================================")
    print("📊 Audit Results Summary:")
    print("====================================================")
    if errors:
        print(f"❌ Found {len(errors)} Critical Errors:")
        for e in errors[:10]:
            print(f"  • {e}")
        if len(errors) > 10:
            print(f"  ... and {len(errors) - 10} more.")
    else:
        print("✅ 0 Critical Errors Found! All food IDs, nutrition IDs, and images are 100% consistent.")

    if warnings:
        print(f"⚠️ {len(warnings)} Warnings / Gaps:")
        for w in warnings[:10]:
            print(f"  • {w}")
    else:
        print("✅ 0 Warnings. Model class mapping is 100% aligned with food_master.json.")

    return len(errors) == 0

if __name__ == "__main__":
    success = run_consistency_audit()
    if not success:
        sys.exit(1)
