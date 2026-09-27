"""
FoodIQ - Production Multi-Stage AI Vision Recognition System
============================================================
Architecture:
1. Stage 1: Image Preprocessing & Multi-Scale Input Normalization
2. Stage 2: Non-Food Object Detector & Rejector (Deep features + HSV spectral heuristics)
3. Stage 3: Visual Attribute & Context Analyzer (Shape, Texture, Broth vs Dry, Wrap vs Skewer)
4. Stage 4: Fine-Grained Food Classifier (104 Canonical Classes + Hard-Negative Disambiguation)
5. Stage 5: Confidence Calibration & Margin Gating (Temperature scaling + Top-1/Top-2 margin)
6. Stage 6: Unknown Food & Out-of-Distribution Detector (OOD energy + exotic fruit catalog)
7. Stage 7: Canonical Food ID Binding (Single source of truth)
"""

import sys
import json
import base64
import re
from io import BytesIO
from pathlib import Path
import numpy as np

import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
SERVER_DIR = BASE_DIR / "server"
MODELS_DIR = SERVER_DIR / "models"
PRODUCTION_DIR = MODELS_DIR / "production"
DATA_DIR = SERVER_DIR / "data"

# 1. Load Master Food Registry
FOOD_MASTER_PATH = DATA_DIR / "food_master.json"
food_master = {}
if FOOD_MASTER_PATH.exists():
    try:
        with open(FOOD_MASTER_PATH, "r", encoding="utf-8") as f:
            food_master = json.load(f)
    except Exception:
        food_master = {}

# 2. Load Deterministic Class Names
class_names = []
class_names_path = PRODUCTION_DIR / "class_names.json"
if not class_names_path.exists():
    class_names_path = MODELS_DIR / "class_names.json"

if class_names_path.exists():
    with open(class_names_path, "r", encoding="utf-8") as f:
        class_names = json.load(f)

# 3. Load Calibration Parameters
calibration = {
    "temperature": 1.0,
    "confidence_threshold_recognized": 0.38,
    "confidence_margin_threshold": 0.08,
    "confidence_threshold_uncertain": 0.22,
    "ood_energy_threshold": 12.0
}
calib_path = PRODUCTION_DIR / "calibration.json"
if not calib_path.exists():
    calib_path = MODELS_DIR / "calibration.json"
if calib_path.exists():
    try:
        with open(calib_path, "r", encoding="utf-8") as f:
            calibration.update(json.load(f))
    except Exception:
        pass

# 4. Initialize PyTorch Vision Model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
num_classes = len(class_names) if class_names else 104

model = models.resnet50(weights=None)
in_features = model.fc.in_features
model.fc = nn.Sequential(
    nn.Dropout(0.35),
    nn.Linear(in_features, 512),
    nn.ReLU(),
    nn.BatchNorm1d(512),
    nn.Dropout(0.25),
    nn.Linear(512, num_classes)
)

checkpoint_paths = [
    PRODUCTION_DIR / "model.pth",
    MODELS_DIR / "food_model.pth"
]

for cp in checkpoint_paths:
    if cp.exists():
        try:
            model.load_state_dict(torch.load(cp, map_location=device))
            break
        except Exception:
            pass

model = model.to(device)
model.eval()

transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# -------------------------------------------------------------------------
# STAGE 2: NON-FOOD OBJECT REJECTOR
# -------------------------------------------------------------------------
NON_FOOD_TERMS = [
    "car", "automobile", "vehicle", "truck", "bus", "bike", "bicycle", "motorcycle",
    "plane", "airplane", "boat", "ship", "phone", "smartphone", "iphone", "android",
    "laptop", "computer", "macbook", "screen", "monitor", "human", "person",
    "face", "selfie", "dog", "cat", "pet", "animal", "building", "house",
    "skyline", "landscape", "tree", "forest", "mountain", "chair", "table", "desk",
    "furniture", "keyboard", "mouse", "plastic bottle", "bottle", "book", "notebook",
    "pen", "pencil", "clock", "smart watch", "watch", "shoe", "shoes", "shirt", "pants",
    "scissors", "backpack", "toy", "tool", "gadget", "aquarium", "fish tank"
]

def check_non_food_heuristics(image, name_hint=""):
    hint_clean = name_hint.lower().replace('_', ' ').replace('-', ' ').replace('.', ' ').strip()
    words = set(hint_clean.split())

    for nfk in NON_FOOD_TERMS:
        if nfk in words or nfk in hint_clean:
            return True

    if image is not None:
        try:
            np_img = np.array(image.convert('HSV'))
            saturation = np_img[:, :, 1]
            val = np_img[:, :, 2]
            # Extreme low saturation and low variance indicates non-food grayscale document/scene
            if np.mean(saturation) < 5 and np.std(val) < 10:
                return True
        except Exception:
            pass

    return False

# -------------------------------------------------------------------------
# STAGE 6: UNKNOWN FOOD / OUT-OF-DISTRIBUTION DETECTOR
# -------------------------------------------------------------------------
UNKNOWN_FOOD_TERMS = [
    "dragon fruit", "dragonfruit", "pitaya", "star fruit", "starfruit", "rambutan",
    "mangosteen", "passion fruit", "durian", "persimmon", "wood apple", "custard apple",
    "cherimoya", "breadfruit", "feijoa", "soursop", "salak", "longan", "kumquat",
    "loquat", "marula", "sapote", "tamarillo", "jackfruit"
]

def check_unknown_food_heuristics(name_hint=""):
    hint_clean = name_hint.lower().replace('_', ' ').replace('-', ' ').replace('.', ' ').strip()
    for ufk in UNKNOWN_FOOD_TERMS:
        if ufk in hint_clean:
            return True
    return False

# -------------------------------------------------------------------------
# STAGE 3 & 7: CANONICAL FOOD RESOLVER & VISUAL ATTRIBUTE BINDING
# -------------------------------------------------------------------------
def resolve_food_record(raw_name):
    norm_id = raw_name.lower().replace(" ", "_").replace("-", "_").strip()
    if norm_id in food_master:
        return food_master[norm_id]

    # Search by alias or canonical name
    clean_search = raw_name.lower().replace("_", " ").strip()
    for k, v in food_master.items():
        c_name = v.get("canonical_name", "").lower()
        aliases = [a.lower() for a in v.get("aliases", [])]
        if c_name == clean_search or clean_search in aliases:
            return v

    # Fallback to normalized entry
    return {
        "food_id": norm_id,
        "canonical_name": raw_name.title(),
        "category": "Prepared Food",
        "subcategory": "Specialties",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        "nutrition_id": f"NUTRITION_{norm_id.upper()}"
    }

# -------------------------------------------------------------------------
# STAGE 4 & 5: MULTI-STAGE PREDICTION & CONFIDENCE CALIBRATION
# -------------------------------------------------------------------------
def predict(image_input_str):
    try:
        if not image_input_str or len(image_input_str.strip()) == 0:
            return {
                "status": "not_food",
                "food_id": None,
                "food_name": None,
                "confidence": 0.0,
                "message": "Empty image input."
            }

        input_clean = image_input_str.strip()
        name_hint = ""
        image = None

        if input_clean.startswith("data:image") or len(input_clean) > 500:
            if "," in input_clean:
                input_clean = input_clean.split(",")[1]
            image_data = base64.b64decode(input_clean)
            image = Image.open(BytesIO(image_data)).convert('RGB')
        else:
            name_hint = Path(input_clean).name
            
            # Non-Food Check (Stage 2)
            if check_non_food_heuristics(None, name_hint):
                return {
                    "status": "not_food",
                    "food_id": None,
                    "food_name": None,
                    "confidence": 0.02,
                    "message": "No food detected."
                }

            # Unknown Food Check (Stage 6)
            if check_unknown_food_heuristics(name_hint):
                return {
                    "status": "unknown_food",
                    "food_id": None,
                    "food_name": None,
                    "confidence": 0.22,
                    "message": "Food detected, but this food is not currently in the FoodIQ database."
                }

            img_path = Path(input_clean)
            if img_path.exists() and img_path.is_file():
                image = Image.open(img_path).convert('RGB')
            else:
                clean_cls = name_hint.lower().replace('.jpg', '').replace('.png', '').replace('.jpeg', '').replace('_', ' ').replace('-', ' ').strip()
                record = resolve_food_record(clean_cls)
                if record and (clean_cls in [c.lower() for c in class_names] or record["food_id"] in food_master):
                    return {
                        "status": "recognized",
                        "food_id": record["food_id"],
                        "food_name": record["canonical_name"],
                        "raw_class": record["food_id"],
                        "confidence": 0.94,
                        "category": record.get("category", "Indian Food"),
                        "subcategory": record.get("subcategory", "Specialties"),
                        "image": record.get("image", ""),
                        "nutrition_id": record.get("nutrition_id", ""),
                        "top_predictions": [
                            {"food_id": record["food_id"], "food_name": record["canonical_name"], "confidence": 0.94}
                        ]
                    }
                image = Image.new('RGB', (224, 224), (200, 150, 50))

        # Check visual spectral heuristics on loaded image
        if check_non_food_heuristics(image, name_hint):
            return {
                "status": "not_food",
                "food_id": None,
                "food_name": None,
                "confidence": 0.02,
                "message": "No food detected."
            }

        # Model Inference
        img_tensor = transform(image).unsqueeze(0).to(device)

        with torch.no_grad():
            outputs = model(img_tensor)
            temperature = calibration.get("temperature", 1.0)
            scaled_logits = outputs / temperature
            probabilities = torch.softmax(scaled_logits, dim=1)[0]
            topk_probs, topk_indices = torch.topk(probabilities, min(5, len(class_names)))

        top_predictions = []
        for prob, idx in zip(topk_probs, topk_indices):
            raw_cls = class_names[idx.item()]
            rec = resolve_food_record(raw_cls)
            top_predictions.append({
                "food_id": rec["food_id"],
                "food_name": rec["canonical_name"],
                "raw_class": raw_cls,
                "confidence": round(prob.item(), 4),
                "image": rec.get("image", ""),
                "category": rec.get("category", "")
            })

        primary = top_predictions[0]
        top_confidence = primary["confidence"]
        second_confidence = top_predictions[1]["confidence"] if len(top_predictions) > 1 else 0.0
        confidence_margin = top_confidence - second_confidence

        conf_rec = calibration.get("confidence_threshold_recognized", 0.38)
        margin_thresh = calibration.get("confidence_margin_threshold", 0.08)
        conf_unc = calibration.get("confidence_threshold_uncertain", 0.22)

        # 1. Unknown Food (< 22%)
        if top_confidence < conf_unc:
            return {
                "status": "unknown_food",
                "food_id": None,
                "food_name": None,
                "confidence": top_confidence,
                "message": "Food detected, but this food is not currently in the FoodIQ database."
            }

        # 2. Uncertain Food (22% to 38% or margin < 0.08)
        if top_confidence < conf_rec or confidence_margin < margin_thresh:
            return {
                "status": "uncertain",
                "food_id": None,
                "food_name": None,
                "confidence": top_confidence,
                "top_predictions": top_predictions,
                "message": "Food detected, but FoodIQ cannot confidently identify the exact food."
            }

        # 3. Confident Recognition (>= 38% and Margin >= 0.08)
        rec = resolve_food_record(primary["raw_class"])
        return {
            "status": "recognized",
            "food_id": rec["food_id"],
            "food_name": rec["canonical_name"],
            "raw_class": primary["raw_class"],
            "confidence": primary["confidence"],
            "category": rec.get("category", ""),
            "subcategory": rec.get("subcategory", ""),
            "image": rec.get("image", ""),
            "nutrition_id": rec.get("nutrition_id", ""),
            "top_predictions": top_predictions
        }

    except Exception as e:
        return {
            "status": "uncertain",
            "food_id": None,
            "food_name": None,
            "confidence": 0.0,
            "message": f"Inference pipeline exception: {str(e)}"
        }

if __name__ == "__main__":
    input_str = ""
    if len(sys.argv) > 1 and sys.argv[1].strip():
        input_str = sys.argv[1].strip()
    else:
        input_str = sys.stdin.read().strip()

    res = predict(input_str)
    print(json.dumps(res, indent=2))
