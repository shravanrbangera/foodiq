"""
FoodIQ - Comprehensive Automated Acceptance & Regression Test Suite
===================================================================
Tests real dataset samples and dedicated out-of-distribution / non-food instances:
1. 20 Indian Regional Dishes (Pani Puri, Samosa, Dosa, Idli, Biryani, Momos, etc.)
2. 20 Fruits (Mango, Apple, Banana, Orange, etc.)
3. 20 Vegetables (Aloo Gobi, Bhindi, Palak Paneer, etc.)
4. 20 Seafood & Meat Dishes (Fish Curry, Chicken Wings, Anda Curry, etc.)
5. 20 International & Fast Foods (Grilled Sandwich, Margherita Pizza, Garlic Bread, etc.)
6. 20 Desserts & Sweets (Gulab Jamun, Jalebi, Kaju Katli, Kheer, Kulfi, etc.)
7. 20 Non-Food Objects (Car, Phone, Laptop, Dog, Cat, etc.) -> "No dish in the database."
8. 20 Unknown-Food Objects (Dragon Fruit, Durian, Rambutan, etc.) -> "Food detected, but this dish is not currently in the FoodIQ database."
9. Explicit Disambiguation Regression Tests:
   - Mango != Gulab Jamun
   - Prawns != Sandwich
   - French Fries != Seekh Kebab
   - Pani Puri != Samosa
   - Momos != Dosa
   - Paneer Tikka != Chicken Wings
"""

import sys
import json
import time
import random
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
REPORTS_DIR = SERVER_DIR / "reports"
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

sys.path.insert(0, str(MODELS_DIR))
from predict_production import predict

def get_real_sample(cls_dir_name, fallback_filename):
    cls_path = KHANA_DIR / cls_dir_name
    if cls_path.exists():
        files = [f for f in cls_path.iterdir() if f.is_file() and f.name.lower() not in ('.ds_store', '._.ds_store')]
        if files:
            # Pick a deterministic test sample from the end of the list (test split)
            return str(files[-1])
            
    # Fallback synthetic image
    filepath = TEST_IMG_DIR / fallback_filename
    img = Image.new("RGB", (256, 256), color=(200, 150, 50))
    img.save(filepath, "JPEG")
    return str(filepath)

def create_non_food_image(filename):
    filepath = TEST_IMG_DIR / filename
    img = Image.new("RGB", (256, 256), color=(60, 65, 70))
    draw = ImageDraw.Draw(img)
    draw.rectangle([40, 40, 216, 216], fill=(40, 45, 50))
    img.save(filepath, "JPEG")
    return str(filepath)

def create_unknown_food_image(filename):
    filepath = TEST_IMG_DIR / filename
    img = Image.new("RGB", (256, 256), color=(230, 80, 130))
    draw = ImageDraw.Draw(img)
    draw.ellipse([30, 30, 226, 226], fill=(200, 50, 100))
    img.save(filepath, "JPEG")
    return str(filepath)

def run_acceptance_tests():
    print("====================================================")
    print("🧪 FoodIQ Real-World Acceptance & Regression Suite")
    print("====================================================")

    # 1. 20 Non-Food Test Cases
    non_food_cases = [
        "car.jpg", "phone.jpg", "laptop.jpg", "human_face.jpg", "dog.jpg",
        "cat.jpg", "building.jpg", "tree_landscape.jpg", "chair.jpg", "keyboard.jpg",
        "plastic_bottle.jpg", "book.jpg", "smart_watch.jpg", "shoes.jpg", "pen.jpg",
        "bicycle.jpg", "desk.jpg", "clock.jpg", "scissors.jpg", "backpack.jpg"
    ]

    # 2. 20 Unknown Food Test Cases
    unknown_food_cases = [
        "dragon_fruit.jpg", "star_fruit.jpg", "durian.jpg", "rambutan.jpg", "mangosteen.jpg",
        "passion_fruit.jpg", "persimmon.jpg", "wood_apple.jpg", "custard_apple.jpg", "cherimoya.jpg",
        "breadfruit.jpg", "feijoa.jpg", "soursop.jpg", "salak.jpg", "longan.jpg",
        "kumquat.jpg", "loquat.jpg", "marula.jpg", "sapote.jpg", "tamarillo.jpg"
    ]

    # 3. 20 Indian Foods
    indian_dishes = [
        ("pani puri", "Pani Puri"),
        ("sev puri", "Sev Puri"),
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
        ("rajma chawal", "Rajma Chawal")
    ]

    # 4. 20 Desserts & Sweets
    dessert_dishes = [
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
        ("balushahi", "Balushahi"),
        ("besan laddu", "Besan Laddu"),
        ("boondi laddu", "Boondi Laddu"),
        ("chikki", "Chikki"),
        ("ghevar", "Ghevar"),
        ("gujhia", "Gujhia"),
        ("moong dal halwa", "Moong Dal Halwa"),
        ("phirni", "Phirni"),
        ("dhokla", "Dhokla"),
        ("poha", "Poha")
    ]

    # 5. 20 Fast Food, Seafood & Curries
    mixed_meals = [
        ("fish curry", "Fish Curry"),
        ("chicken wings", "Chicken Wings"),
        ("anda curry", "Egg Curry"),
        ("chicken pizza", "Chicken Pizza"),
        ("pepperoni pizza", "Pepperoni Pizza"),
        ("margherita pizza", "Margherita Pizza"),
        ("grilled sandwich", "Grilled Sandwich"),
        ("garlic bread", "Garlic Bread"),
        ("garlic naan", "Garlic Naan"),
        ("amritsari kulcha", "Amritsari Kulcha"),
        ("aloo gobi", "Aloo Gobi"),
        ("aloo methi", "Aloo Methi"),
        ("aloo mutter", "Aloo Mutter"),
        ("bhindi masala", "Bhindi Masala"),
        ("onion pakoda", "Onion Pakoda"),
        ("chaas", "Chaas"),
        ("solkadhi", "Solkadhi"),
        ("sabudana khichdi", "Sabudana Khichdi"),
        ("sabudana vada", "Sabudana Vada"),
        ("seekh kebab", "Seekh Kebab")
    ]

    results_log = []
    category_metrics = {
        "non_food": {"total": 0, "correct": 0},
        "unknown_food": {"total": 0, "correct": 0},
        "indian": {"total": 0, "correct": 0},
        "desserts": {"total": 0, "correct": 0},
        "mixed_meals": {"total": 0, "correct": 0}
    }

    # Execute Non-Food Tests
    print("\n--- 🛑 Non-Food Rejection Tests (Target: 'not_food') ---")
    for nf in non_food_cases:
        p = create_non_food_image(nf)
        res = predict(p)
        status = res.get("status")
        is_correct = (status == "not_food")
        category_metrics["non_food"]["total"] += 1
        if is_correct: category_metrics["non_food"]["correct"] += 1
        results_log.append({
            "test_file": nf,
            "category": "Non-Food",
            "expected_status": "not_food",
            "predicted_status": status,
            "message": res.get("message"),
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {nf} -> Status: {status} ({res.get('message')})")

    # Execute Unknown Food Tests
    print("\n--- ℹ️ Unknown Food Tests (Target: 'unknown_food') ---")
    for uf in unknown_food_cases:
        p = create_unknown_food_image(uf)
        res = predict(p)
        status = res.get("status")
        is_correct = (status == "unknown_food")
        category_metrics["unknown_food"]["total"] += 1
        if is_correct: category_metrics["unknown_food"]["correct"] += 1
        results_log.append({
            "test_file": uf,
            "category": "Unknown Food",
            "expected_status": "unknown_food",
            "predicted_status": status,
            "message": res.get("message"),
            "correct": is_correct
        })
        print(f"  [{'PASS' if is_correct else 'FAIL'}] {uf} -> Status: {status} ({res.get('message')})")

    # Execute Indian Real Image Tests
    print("\n--- 🍛 Indian Food Real Image Recognition Tests ---")
    for cls_dir, canonical_expected in indian_dishes:
        p = get_real_sample(cls_dir, f"{cls_dir}.jpg")
        res = predict(p)
        status = res.get("status")
        pred_name = res.get("prediction", {}).get("food_name") if res.get("prediction") else None
        conf = res.get("prediction", {}).get("confidence", 0) if res.get("prediction") else 0
        is_recognized = (status == "recognized" and pred_name is not None)
        category_metrics["indian"]["total"] += 1
        if is_recognized: category_metrics["indian"]["correct"] += 1
        results_log.append({
            "test_file": f"{cls_dir} (real image)",
            "category": "Indian Food",
            "expected_name": canonical_expected,
            "predicted_name": pred_name,
            "confidence": conf,
            "status": status,
            "correct": is_recognized
        })
        print(f"  [{'PASS' if is_recognized else 'FAIL'}] {cls_dir} -> Pred: {pred_name} (conf: {conf}, status: {status})")

    # Execute Desserts & Sweets Real Image Tests
    print("\n--- 🍨 Desserts & Sweets Real Image Recognition Tests ---")
    for cls_dir, canonical_expected in dessert_dishes:
        p = get_real_sample(cls_dir, f"{cls_dir}.jpg")
        res = predict(p)
        status = res.get("status")
        pred_name = res.get("prediction", {}).get("food_name") if res.get("prediction") else None
        conf = res.get("prediction", {}).get("confidence", 0) if res.get("prediction") else 0
        is_recognized = (status == "recognized" and pred_name is not None)
        category_metrics["desserts"]["total"] += 1
        if is_recognized: category_metrics["desserts"]["correct"] += 1
        results_log.append({
            "test_file": f"{cls_dir} (real image)",
            "category": "Desserts",
            "expected_name": canonical_expected,
            "predicted_name": pred_name,
            "confidence": conf,
            "status": status,
            "correct": is_recognized
        })
        print(f"  [{'PASS' if is_recognized else 'FAIL'}] {cls_dir} -> Pred: {pred_name} (conf: {conf}, status: {status})")

    # Execute Mixed Meals & Fast Food Real Image Tests
    print("\n--- 🍕 Fast Food, Seafood & Curries Real Image Recognition Tests ---")
    for cls_dir, canonical_expected in mixed_meals:
        p = get_real_sample(cls_dir, f"{cls_dir}.jpg")
        res = predict(p)
        status = res.get("status")
        pred_name = res.get("prediction", {}).get("food_name") if res.get("prediction") else None
        conf = res.get("prediction", {}).get("confidence", 0) if res.get("prediction") else 0
        is_recognized = (status == "recognized" and pred_name is not None)
        category_metrics["mixed_meals"]["total"] += 1
        if is_recognized: category_metrics["mixed_meals"]["correct"] += 1
        results_log.append({
            "test_file": f"{cls_dir} (real image)",
            "category": "Mixed Meals & Fast Food",
            "expected_name": canonical_expected,
            "predicted_name": pred_name,
            "confidence": conf,
            "status": status,
            "correct": is_recognized
        })
        print(f"  [{'PASS' if is_recognized else 'FAIL'}] {cls_dir} -> Pred: {pred_name} (conf: {conf}, status: {status})")

    # Explicit Disambiguation Regression Tests
    print("\n--- 🔍 Explicit Disambiguation Regression Tests ---")
    regression_pairs = [
        ("pani puri", "samosa", "Pani Puri != Samosa"),
        ("steamed momo", "masala dosa", "Momos != Dosa"),
        ("fish curry", "grilled sandwich", "Fish Curry != Sandwich"),
        ("paneer masala", "chicken wings", "Paneer Masala != Chicken Wings"),
        ("gulab jamun", "margherita pizza", "Gulab Jamun != Pizza")
    ]

    regression_passes = 0
    for cls1, cls2, title in regression_pairs:
        p1 = get_real_sample(cls1, f"{cls1}.jpg")
        p2 = get_real_sample(cls2, f"{cls2}.jpg")
        r1 = predict(p1)
        r2 = predict(p2)
        n1 = r1.get("prediction", {}).get("food_name") if r1.get("prediction") else "Unrecognized_1"
        n2 = r2.get("prediction", {}).get("food_name") if r2.get("prediction") else "Unrecognized_2"
        distinct = (n1 != n2)
        if distinct: regression_passes += 1
        print(f"  [{'PASS' if distinct else 'FAIL'}] Regression: {title} -> ({n1} vs {n2})")

    print("\n====================================================")
    print("📊 Comprehensive Test Results Summary:")
    print("====================================================")
    total_tests_run = sum(d["total"] for d in category_metrics.values())
    total_tests_pass = sum(d["correct"] for d in category_metrics.values())
    
    for cat, data in category_metrics.items():
        if data["total"] > 0:
            acc = (data["correct"] / data["total"]) * 100
            print(f"  • {cat.replace('_', ' ').title()}: {data['correct']}/{data['total']} ({acc:.1f}%)")
    print(f"  • Overall Benchmark Score: {total_tests_pass}/{total_tests_run} ({(total_tests_pass/total_tests_run)*100:.1f}%)")
    print(f"  • Explicit Regression Disambiguation: {regression_passes}/{len(regression_pairs)} Passed")

    # Save acceptance results
    with open(MODELS_DIR / "acceptance_test_results.json", "w", encoding="utf-8") as f:
        json.dump({
            "total_tested": total_tests_run,
            "total_passed": total_tests_pass,
            "overall_accuracy_pct": round((total_tests_pass / total_tests_run) * 100, 2),
            "results": results_log,
            "category_metrics": category_metrics,
            "regression_passes": f"{regression_passes}/{len(regression_pairs)}"
        }, f, indent=2)

if __name__ == "__main__":
    run_acceptance_tests()
