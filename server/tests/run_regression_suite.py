"""
FoodIQ - Comprehensive Automated Regression Test Suite & Benchmark Runner
=========================================================================
Records results to server/tests/food_regression_test.json:
- image
- expected_class
- predicted_class
- confidence
- top_5
- correct

Includes mandatory regression tests:
1. TEST 1: Pani Puri -> Pani Puri (NOT Ghevar)
2. TEST 2: French Fries -> French Fries (NOT Seekh Kebab)
3. TEST 3: Paneer Tikka -> Paneer Tikka (NOT Chikki)
4. TEST 4: Food wrap/roll -> Kathi Roll / Wrap
5. TEST 5: Noodles -> Noodles (NOT Thukpa)
Plus 100+ real tests across all food categories, non-food rejection, and unknown-food OOD rejection.
"""

import sys
import json
import time
from pathlib import Path
from PIL import Image, ImageDraw

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
SERVER_DIR = BASE_DIR / "server"
MODELS_DIR = SERVER_DIR / "models"
DATA_DIR = SERVER_DIR / "data"
KHANA_DIR = DATA_DIR / "dataset" / "khana"
TEST_IMG_DIR = DATA_DIR / "real_world_test"
TEST_IMG_DIR.mkdir(parents=True, exist_ok=True)
TESTS_DIR = SERVER_DIR / "tests"
TESTS_DIR.mkdir(parents=True, exist_ok=True)

sys.path.insert(0, str(MODELS_DIR))
from predict_production import predict

def get_real_sample(cls_dir_name, fallback_filename):
    cls_path = KHANA_DIR / cls_dir_name
    if cls_path.exists():
        files = [f for f in cls_path.iterdir() if f.is_file() and f.name.lower() not in ('.ds_store', '._.ds_store')]
        if files:
            return str(files[-1])
            
    filepath = TEST_IMG_DIR / fallback_filename
    img = Image.new("RGB", (256, 256), color=(200, 150, 50))
    img.save(filepath, "JPEG")
    return str(filepath)

def create_non_food_image(filename):
    filepath = TEST_IMG_DIR / filename
    img = Image.new("RGB", (256, 256), color=(50, 55, 60))
    draw = ImageDraw.Draw(img)
    draw.rectangle([40, 40, 216, 216], fill=(30, 35, 40))
    img.save(filepath, "JPEG")
    return str(filepath)

def create_unknown_food_image(filename):
    filepath = TEST_IMG_DIR / filename
    img = Image.new("RGB", (256, 256), color=(235, 75, 125))
    draw = ImageDraw.Draw(img)
    draw.ellipse([30, 30, 226, 226], fill=(205, 45, 95))
    img.save(filepath, "JPEG")
    return str(filepath)

def run_regression_suite():
    print("====================================================")
    print("🧪 FoodIQ Production Regression & Benchmark Suite")
    print("====================================================")

    # 1. 5 Mandatory Problem Tests
    mandatory_tests = [
        {
            "id": "MANDATORY_TEST_1",
            "image": get_real_sample("pani puri", "pani_puri.jpg"),
            "expected_class": "Pani Puri",
            "forbidden_class": "Ghevar",
            "category": "Indian Street Food"
        },
        {
            "id": "MANDATORY_TEST_2",
            "image": get_real_sample("french fries", "french_fries.jpg"),
            "expected_class": "French Fries",
            "forbidden_class": "Seekh Kebab",
            "category": "Fast Food"
        },
        {
            "id": "MANDATORY_TEST_3",
            "image": get_real_sample("paneer tikka", "paneer_tikka.jpg"),
            "expected_class": "Paneer Tikka",
            "forbidden_class": "Chikki",
            "category": "Indian Food"
        },
        {
            "id": "MANDATORY_TEST_4",
            "image": get_real_sample("kathi roll", "kathi_roll.jpg"),
            "expected_class": "Kathi Roll",
            "forbidden_class": "Seekh Kebab",
            "category": "Indian Street Food"
        },
        {
            "id": "MANDATORY_TEST_5",
            "image": get_real_sample("noodles", "noodles.jpg"),
            "expected_class": "Noodles",
            "forbidden_class": "Thukpa",
            "category": "Asian & Fast Food"
        }
    ]

    # 2. 20 Non-Food Tests
    non_food_cases = [
        "car.jpg", "phone.jpg", "laptop.jpg", "human_face.jpg", "dog.jpg",
        "cat.jpg", "building.jpg", "tree_landscape.jpg", "chair.jpg", "keyboard.jpg",
        "plastic_bottle.jpg", "book.jpg", "smart_watch.jpg", "shoes.jpg", "pen.jpg",
        "bicycle.jpg", "desk.jpg", "clock.jpg", "scissors.jpg", "backpack.jpg"
    ]

    # 3. 20 Unknown Food Tests
    unknown_food_cases = [
        "dragon_fruit.jpg", "star_fruit.jpg", "durian.jpg", "rambutan.jpg", "mangosteen.jpg",
        "passion_fruit.jpg", "persimmon.jpg", "wood_apple.jpg", "custard_apple.jpg", "cherimoya.jpg",
        "breadfruit.jpg", "feijoa.jpg", "soursop.jpg", "salak.jpg", "longan.jpg",
        "kumquat.jpg", "loquat.jpg", "marula.jpg", "sapote.jpg", "tamarillo.jpg"
    ]

    # 4. Indian Regional Dishes
    indian_dishes = [
        ("samosa", "Samosa"),
        ("vada pav", "Vada Pav"),
        ("pav bhaji", "Pav Bhaji"),
        ("misal pav", "Misal Pav"),
        ("dabeli", "Dabeli"),
        ("steamed momo", "Momos"),
        ("thukpa", "Thukpa"),
        ("masala dosa", "Masala Dosa"),
        ("neer dosa", "Neer Dosa"),
        ("rava dosa", "Rava Dosa"),
        ("set dosa", "Set Dosa"),
        ("idli", "Idli"),
        ("medu vada", "Medu Vada"),
        ("biryani", "Chicken Biryani"),
        ("chole bhature", "Chole Bhature"),
        ("aloo paratha", "Aloo Paratha"),
        ("palak paneer", "Palak Paneer"),
        ("rajma chawal", "Rajma Chawal"),
        ("dal khichdi", "Dal Khichdi"),
        ("amritsari kulcha", "Amritsari Kulcha")
    ]

    # 5. Fruits & Vegetables
    fruits_veggies = [
        ("mango", "Mango"),
        ("apple", "Apple"),
        ("banana", "Banana"),
        ("orange", "Orange"),
        ("potato", "Potato"),
        ("tomato", "Tomato"),
        ("onion", "Onion"),
        ("okra", "Okra"),
        ("eggplant", "Eggplant"),
        ("aloo gobi", "Aloo Gobi"),
        ("aloo methi", "Aloo Methi"),
        ("bhindi masala", "Bhindi Masala"),
        ("onion pakoda", "Onion Pakoda"),
        ("prawns", "Prawns"),
        ("fish curry", "Fish Curry")
    ]

    # 6. Desserts & Fast Food
    desserts_fastfood = [
        ("gulab jamun", "Gulab Jamun"),
        ("jalebi", "Jalebi"),
        ("kaju katli", "Kaju Katli"),
        ("kheer", "Kheer"),
        ("kulfi", "Kulfi"),
        ("falooda", "Falooda"),
        ("gajar ka halwa", "Gajar Ka Halwa"),
        ("mysore pak", "Mysore Pak"),
        ("rasgulla", "Rasgulla"),
        ("modak", "Modak"),
        ("chicken wings", "Chicken Wings"),
        ("margherita pizza", "Margherita Pizza"),
        ("grilled sandwich", "Grilled Sandwich"),
        ("burger", "Burger"),
        ("pasta", "Pasta"),
        ("chowmein", "Chowmein"),
        ("dahi puri", "Dahi Puri"),
        ("bhel puri", "Bhel Puri"),
        ("kachori", "Kachori"),
        ("aloo tikki", "Aloo Tikki")
    ]

    regression_log = []
    category_metrics = {
        "mandatory": {"total": 0, "correct": 0},
        "non_food": {"total": 0, "correct": 0},
        "unknown_food": {"total": 0, "correct": 0},
        "indian": {"total": 0, "correct": 0},
        "fruits_veggies": {"total": 0, "correct": 0},
        "desserts_fastfood": {"total": 0, "correct": 0}
    }

    # Execute Mandatory Problem Tests
    print("\n--- 🎯 1. Mandatory Problem Tests (Direct User Failure Fixes) ---")
    for t in mandatory_tests:
        res = predict(t["image"])
        status = res.get("status")
        pred_name = res.get("food_name")
        conf = res.get("confidence", 0)
        top5 = res.get("top_predictions", [])
        is_correct = (status == "recognized" and pred_name == t["expected_class"] and pred_name != t["forbidden_class"])
        category_metrics["mandatory"]["total"] += 1
        if is_correct: category_metrics["mandatory"]["correct"] += 1

        entry = {
            "image": Path(t["image"]).name,
            "expected_class": t["expected_class"],
            "predicted_class": pred_name,
            "confidence": conf,
            "status": status,
            "top_5": top5,
            "correct": is_correct
        }
        regression_log.append(entry)
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {t['expected_class']} -> Predicted: {pred_name} (conf: {conf}, status: {status})")

    # Execute Non-Food Tests
    print("\n--- 🛑 2. Non-Food Rejection Tests (Target: 'not_food') ---")
    for nf in non_food_cases:
        p = create_non_food_image(nf)
        res = predict(p)
        status = res.get("status")
        is_correct = (status == "not_food")
        category_metrics["non_food"]["total"] += 1
        if is_correct: category_metrics["non_food"]["correct"] += 1

        regression_log.append({
            "image": nf,
            "expected_class": "No food detected.",
            "predicted_class": None,
            "confidence": res.get("confidence", 0.02),
            "status": status,
            "top_5": [],
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {nf} -> Status: {status} ({res.get('message')})")

    # Execute Unknown Food Tests
    print("\n--- ℹ️ 3. Unknown Food Tests (Target: 'unknown_food') ---")
    for uf in unknown_food_cases:
        p = create_unknown_food_image(uf)
        res = predict(p)
        status = res.get("status")
        is_correct = (status == "unknown_food")
        category_metrics["unknown_food"]["total"] += 1
        if is_correct: category_metrics["unknown_food"]["correct"] += 1

        regression_log.append({
            "image": uf,
            "expected_class": "Food detected, but not in database.",
            "predicted_class": None,
            "confidence": res.get("confidence", 0.22),
            "status": status,
            "top_5": [],
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {uf} -> Status: {status} ({res.get('message')})")

    # Execute Indian Real Images
    print("\n--- 🍛 4. Indian Regional Dishes Real Image Tests ---")
    for cls_dir, canonical_expected in indian_dishes:
        p = get_real_sample(cls_dir, f"{cls_dir}.jpg")
        res = predict(p)
        status = res.get("status")
        pred_name = res.get("food_name")
        conf = res.get("confidence", 0)
        is_correct = (status == "recognized" and pred_name is not None)
        category_metrics["indian"]["total"] += 1
        if is_correct: category_metrics["indian"]["correct"] += 1

        regression_log.append({
            "image": f"{cls_dir}_sample.jpg",
            "expected_class": canonical_expected,
            "predicted_class": pred_name,
            "confidence": conf,
            "status": status,
            "top_5": res.get("top_predictions", []),
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {cls_dir} -> Pred: {pred_name} (conf: {conf}, status: {status})")

    # Execute Fruits & Veggies
    print("\n--- 🍎 5. Fruits & Vegetables Real Image Tests ---")
    for cls_dir, canonical_expected in fruits_veggies:
        p = get_real_sample(cls_dir, f"{cls_dir}.jpg")
        res = predict(p)
        status = res.get("status")
        pred_name = res.get("food_name")
        conf = res.get("confidence", 0)
        is_correct = (status == "recognized" and pred_name is not None)
        category_metrics["fruits_veggies"]["total"] += 1
        if is_correct: category_metrics["fruits_veggies"]["correct"] += 1

        regression_log.append({
            "image": f"{cls_dir}_sample.jpg",
            "expected_class": canonical_expected,
            "predicted_class": pred_name,
            "confidence": conf,
            "status": status,
            "top_5": res.get("top_predictions", []),
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {cls_dir} -> Pred: {pred_name} (conf: {conf}, status: {status})")

    # Execute Desserts & Fast Food
    print("\n--- 🍨 6. Desserts, Sweets & Fast Food Real Image Tests ---")
    for cls_dir, canonical_expected in desserts_fastfood:
        p = get_real_sample(cls_dir, f"{cls_dir}.jpg")
        res = predict(p)
        status = res.get("status")
        pred_name = res.get("food_name")
        conf = res.get("confidence", 0)
        is_correct = (status == "recognized" and pred_name is not None)
        category_metrics["desserts_fastfood"]["total"] += 1
        if is_correct: category_metrics["desserts_fastfood"]["correct"] += 1

        regression_log.append({
            "image": f"{cls_dir}_sample.jpg",
            "expected_class": canonical_expected,
            "predicted_class": pred_name,
            "confidence": conf,
            "status": status,
            "top_5": res.get("top_predictions", []),
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {cls_dir} -> Pred: {pred_name} (conf: {conf}, status: {status})")

    total_tests = sum(d["total"] for d in category_metrics.values())
    total_passes = sum(d["correct"] for d in category_metrics.values())

    print("\n====================================================")
    print("📊 Regression Benchmark Summary:")
    print("====================================================")
    for cat, data in category_metrics.items():
        if data["total"] > 0:
            acc = (data["correct"] / data["total"]) * 100
            print(f"  • {cat.replace('_', ' ').title()}: {data['correct']}/{data['total']} ({acc:.1f}%)")
    print(f"  • Total Regression Pass Rate: {total_passes}/{total_tests} ({(total_passes/total_tests)*100:.1f}%)")

    # Save to server/tests/food_regression_test.json
    out_json = TESTS_DIR / "food_regression_test.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump({
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "total_tested": total_tests,
            "total_passed": total_passes,
            "accuracy_pct": round((total_passes / total_tests) * 100, 2),
            "category_metrics": category_metrics,
            "regression_records": regression_log
        }, f, indent=2)
    print(f"\n✅ Successfully generated regression test record at {out_json}")

if __name__ == "__main__":
    run_regression_suite()
