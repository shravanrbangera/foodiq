import sys
import json
import base64
from io import BytesIO
from pathlib import Path

import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

MODELS_DIR = Path(r"D:\MCA\Projects\FoodIQ\server\models")

# Load Class Names
with open(MODELS_DIR / "class_names.json", "r") as f:
    class_names = json.load(f)

# Category Ontology Mapping
def get_category_ontology(cls_name):
    cls_lower = cls_name.lower()
    fruits = ['apple', 'banana', 'mango', 'orange', 'pomegranate', 'watermelon', 'pineapple', 'papaya', 'guava', 'grapes', 'strawberry', 'kiwi', 'coconut', 'lemon', 'peach', 'pear', 'plum', 'cherry', 'fig', 'dates']
    veggies = ['potato', 'sweet potato', 'tomato', 'onion', 'garlic', 'carrot', 'beetroot', 'radish', 'cucumber', 'eggplant', 'brinjal', 'cauliflower', 'broccoli', 'cabbage', 'spinach', 'okra', 'lady finger', 'green peas', 'corn', 'capsicum', 'chilli', 'pumpkin', 'mushroom', 'beans']
    seafood = ['prawn', 'shrimp', 'fish', 'seafood', 'crab', 'lobster']
    global_foods = ['pizza', 'burger', 'sandwich', 'pasta', 'noodles', 'garlic bread', 'chicken wings', 'pepperoni pizza', 'margherita pizza']

    for f in fruits:
        if f in cls_lower: return {"category": "Fruits", "subcategory": "Fresh Fruits"}
    for v in veggies:
        if v in cls_lower: return {"category": "Vegetables", "subcategory": "Fresh Vegetables"}
    for s in seafood:
        if s in cls_lower: return {"category": "Seafood", "subcategory": "Coastal & Marine"}
    for g in global_foods:
        if g in cls_lower: return {"category": "International Food", "subcategory": "Fast Food"}
    
    return {"category": "Indian Food", "subcategory": "Regional Specialties"}

# Load Model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = models.resnet50(weights=None)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, len(class_names))

checkpoint_path = MODELS_DIR / "food_model.pth"
if checkpoint_path.exists():
    model.load_state_dict(torch.load(checkpoint_path, map_location=device))
model = model.to(device)
model.eval()

transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

def predict_image_input(image_input_str):
    try:
        if not image_input_str or len(image_input_str.strip()) == 0:
            return {"status": "error", "message": "Empty image input"}

        input_clean = image_input_str.strip()
        if input_clean.startswith("data:image") or len(input_clean) > 500:
            if "," in input_clean:
                input_clean = input_clean.split(",")[1]
            image_data = base64.b64decode(input_clean)
            image = Image.open(BytesIO(image_data)).convert('RGB')
        else:
            image = Image.open(input_clean).convert('RGB')
    except Exception as e:
        return {"status": "error", "message": f"Failed to load image: {str(e)}"}

    img_tensor = transform(image).unsqueeze(0).to(device)

    with torch.no_grad():
        outputs = model(img_tensor)
        probabilities = torch.softmax(outputs, dim=1)[0]
        topk_probs, topk_indices = torch.topk(probabilities, 5)

    top_predictions = []
    for prob, idx in zip(topk_probs, topk_indices):
        cls_raw = class_names[idx.item()]
        cls_formatted = " ".join([word.capitalize() for word in cls_raw.split()])
        top_predictions.append({
            "food_name": cls_formatted,
            "confidence": round(prob.item(), 4)
        })

    primary = top_predictions[0]
    top_confidence = primary["confidence"]

    # Unknown / OOD Thresholding (Step 15 Rule)
    if top_confidence < 0.25:
        return {
            "success": True,
            "prediction": {
                "food_name": None,
                "confidence": top_confidence,
                "status": "unknown",
                "message": "Food could not be confidently identified.",
                "top_predictions": top_predictions
            }
        }

    ontology = get_category_ontology(primary["food_name"])

    return {
        "success": True,
        "prediction": {
            "food_name": primary["food_name"],
            "confidence": primary["confidence"],
            "category": ontology["category"],
            "subcategory": ontology["subcategory"],
            "status": "recognized",
            "top_predictions": top_predictions
        }
    }

if __name__ == "__main__":
    input_str = ""
    if len(sys.argv) > 1 and sys.argv[1].strip():
        input_str = sys.argv[1].strip()
    else:
        input_str = sys.stdin.read().strip()

    result = predict_image_input(input_str)
    print(json.dumps(result, indent=2))
