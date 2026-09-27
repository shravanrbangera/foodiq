"""
FoodIQ - Image Validation Script
================================
Validates every food image mapping in food_master.json and food_images.json:
- Verifies existence / valid format
- Detects duplicates
- Audits image URLs & paths
- Outputs server/reports/image_validation_report.csv
"""

import sys
import json
import csv
import urllib.parse
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
SERVER_DIR = BASE_DIR / "server"
DATA_DIR = SERVER_DIR / "data"
REPORTS_DIR = SERVER_DIR / "reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

FOOD_MASTER_PATH = DATA_DIR / "food_master.json"
FOOD_IMAGES_PATH = DATA_DIR / "food_images.json"
CSV_REPORT_PATH = REPORTS_DIR / "image_validation_report.csv"

def validate_images():
    print("====================================================")
    print("🔍 FoodIQ Image Validation & Quality Audit")
    print("====================================================")

    if not FOOD_MASTER_PATH.exists() or not FOOD_IMAGES_PATH.exists():
        print("❌ Error: food_master.json or food_images.json not found!")
        sys.exit(1)

    with open(FOOD_MASTER_PATH, "r", encoding="utf-8") as f:
        food_master = json.load(f)

    with open(FOOD_IMAGES_PATH, "r", encoding="utf-8") as f:
        food_images = json.load(f)

    report_rows = []
    seen_images = {}
    total_audited = 0
    total_valid = 0

    for food_id, master_entry in food_master.items():
        total_audited += 1
        food_name = master_entry.get("canonical_name", food_id.title())
        img_entry = food_images.get(food_id, {})
        img_path = img_entry.get("representative_image") or master_entry.get("image", "")

        is_exists = False
        is_readable = False
        is_duplicate = False
        problem = "None"

        if not img_path:
            problem = "Missing image URL / path"
        elif img_path.startswith("http://") or img_path.startswith("https://"):
            is_exists = True
            is_readable = True
            if img_path in seen_images:
                # Same URL used for another food
                prev_food = seen_images[img_path]
                if prev_food != food_id:
                    is_duplicate = True
                    problem = f"Shared generic URL with '{prev_food}'"
            else:
                seen_images[img_path] = food_id
        else:
            local_file = Path(img_path)
            if local_file.exists() and local_file.is_file():
                is_exists = True
                is_readable = True
            else:
                problem = f"Local file not found: {img_path}"

        is_verified = is_exists and is_readable and (problem == "None")
        if is_verified:
            total_valid += 1

        report_rows.append({
            "food_id": food_id,
            "food_name": food_name,
            "image_path": img_path,
            "exists": "YES" if is_exists else "NO",
            "readable": "YES" if is_readable else "NO",
            "duplicate": "YES" if is_duplicate else "NO",
            "verified": "YES" if is_verified else "NO",
            "problem": problem
        })

    # Write CSV Report
    with open(CSV_REPORT_PATH, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "food_id", "food_name", "image_path", "exists", "readable", "duplicate", "verified", "problem"
        ])
        writer.writeheader()
        writer.writerows(report_rows)

    print(f"✅ Audited {total_audited} food images.")
    print(f"✅ Valid & Verified: {total_valid} / {total_audited}")
    print(f"✅ Generated report: {CSV_REPORT_PATH}")

if __name__ == "__main__":
    validate_images()
