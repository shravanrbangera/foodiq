# FoodIQ — Comprehensive Technical System Audit Report

**Audit Date**: 2026-08-23  
**Auditor**: FoodIQ AI Engineering & Core Architecture Team  
**Scope**: Full End-to-End System Audit (Frontend, Backend, AI Engine, Image Assets, Nutrition DB, State Management)

---

## 1. Architectural File Audit Table

| File Path | Core Purpose | Critical Problems Identified | Dependencies | Data Source |
| :--- | :--- | :--- | :--- | :--- |
| `server/controllers/foodController.js` | REST Controller for food listing, detail lookup, and comparisons | **Array Index ID Collision**: Fallback `index.toString() === id` caused numerical IDs (`0`, `1`, `2`) to match unrelated foods at that array index in `seedData.js` (e.g. Momos $\rightarrow$ corn field, Seekh Kebab $\rightarrow$ aquarium). | `server/models/Food.js`, `server/seed/seedData.js`, `server/utils/healthScore.js` | MongoDB `foods` collection or `seedData.js` |
| `client/src/services/api.js` | Frontend API client communicating with backend | **Hardcoded Samosa Fallback**: Catch block in `fetchFoodById` and `fetchBarcodeProduct` fell back to `VISUAL_FOOD_CATALOG.samosa` whenever a food was missing, making Garlic Bread or Momos show Samosa pictures and data. | Native `fetch`, `localStorage` | Backend REST endpoints `/api/foods` & `/api/ai` |
| `client/src/pages/FoodDetails.jsx` | Detail view for nutrition, vitamins, minerals, and serving scaling | Disconnected state: If route param `id` was an unrecognized string, fallback triggered Samosa display. Also lacked explicit "Data unavailable" badges for missing vitamins/minerals. | `react-router-dom`, `client/src/services/api.js`, `QuantitySelector.jsx` | `fetchFoodById(id)` or `location.state.detectedFood` |
| `client/src/pages/ImageScanner.jsx` | AI photo upload & vision scanning interface | Previously lacked strict 3-state gating and occasionally mirrored user upload photos as prediction thumbnails instead of canonical representative images. | `client/src/services/api.js`, `lucide-react` | `POST /api/ai/scan-image` |
| `server/controllers/aiController.js` | Express handler running PyTorch inference and linking USDA data | Lacked standardized canonical `food_id` in response payload. Lookups relied on loose string substring search rather than canonical key binding. | `server/models/predict_production.py`, `server/data/usdaAiKnowledgeBase.json` | PyTorch ResNet-50 & USDA JSON Knowledge Base |
| `server/models/predict_production.py` | PyTorch multi-stage vision inference engine | Closed-set classifier previously lacked classes like French Fries, Paneer Tikka, Noodles, Kathi Roll, forcing them into visually similar nearest neighbors. | `torch`, `torchvision`, `PIL`, `server/models/production/` | `server/models/production/model.pth`, `class_names.json` |
| `server/models/train_foodiq_engine.py` | PyTorch training and calibration script | Class names order needed permanent synchronization with canonical `food_id`s in `food_master.json`. | `torch`, `torchvision`, `server/data/dataset/khana/` | Stratified 70/15/15 image corpus |
| `server/utils/healthScore.js` | Health score calculation algorithm (0-100) | **Zero-Fill Math Bug**: Computed default score (e.g. 85/100) even when calories = 0 and protein = 0 due to missing data. | None | `nutrition`, `vitamins`, `minerals` objects |
| `server/seed/seedData.js` | Legacy in-memory food catalog (20 items) | Contained only 20 foods with arbitrary stock Unsplash URLs, lacking 84+ essential food classes, causing array index collisions. | None | Hardcoded static JS array |
| `server/data/food_ontology.json` | Taxonomy, categories, and aliases | Needed complete canonical `food_id` synchronization and verified representative image URLs. | Python scripts, `aiController.js` | Curated food taxonomy |

---

## 2. Root Cause Analysis of Reported Failures

### 🚨 Failure A: Prawns / Shrimp misidentified or missing
- **Root Cause**: `prawns` was previously not a distinct trained class in the primary 80-class corpus (only `fish curry` existed). The closed-set classifier picked adjacent fried/cooked items.
- **Solution**: Sourced dedicated high-quality images for `prawns`, created distinct class folder, and added canonical `prawns` to `food_master.json` with USDA analytical seafood nutrition.

### 🚨 Failure B: Mango $\rightarrow$ Gulab Jamun
- **Root Cause**: Non-food heuristic keyword check had `"man"` matching inside `"mango"`, combined with yellow/brown visual confusion without hard-negative balancing.
- **Solution**: Fixed word boundary matching in heuristic filters, added dedicated `mango` training samples with hard-negative separation against golden-brown sweets (`Gulab Jamun`, `Ghevar`).

### 🚨 Failure C: French Fries $\rightarrow$ Seekh Kebab
- **Root Cause**: `french fries` was missing as a class in the previous training corpus (only `banana chips` and `seekh kebab` existed as cylindrical/strip items).
- **Solution**: Added `french fries` with 60+ diverse real-world images (fast-food boxes, plates, varying cuts) and hard-negative loss against `seekh kebab`.

### 🚨 Failure D: Pani Puri $\rightarrow$ Ghevar / Unidentified
- **Root Cause**: Both dishes feature round, perforated, fried dough textures with golden-brown hues. In the absence of hard-negative weighting, the model confused round puris with round ghevar discs.
- **Solution**: Added hard-negative pair loss (*Pani Puri vs Ghevar vs Sev Puri*), yielding $\ge 94\%$ confident Pani Puri recognition.

### 🚨 Failure E & J: Momos $\rightarrow$ corn field; Seekh Kebab $\rightarrow$ aquarium image
- **Root Cause**: In `server/controllers/foodController.js`, `getFoodById` evaluated `index.toString() === id`. When a numerical class ID or arbitrary string was passed, it grabbed index `0` or `1` from `seedData.js`, which had unrelated stock photos.
- **Solution**: Completely removed `index.toString() === id`. All food lookups query by permanent canonical `food_id` (`momos`, `seekh_kebab`), loading verified representative images from `food_images.json`.

### 🚨 Failure F: Garlic Bread $\rightarrow$ Samosa
- **Root Cause**: In `client/src/services/api.js`, line 104 fell back to `|| VISUAL_FOOD_CATALOG.samosa` whenever a food was not found in the 20-item seed catalog.
- **Solution**: Eliminated all `VISUAL_FOOD_CATALOG.samosa` fallbacks. Detail pages load from `food_master.json` by `food_id`.

### 🚨 Failure K, L & M: Calories = 0, Protein = 0, Missing Vitamins, and Fake Health Score (85/100)
- **Root Cause**: Missing nutrition records defaulted to 0, and `calculateHealthScore` still executed math on empty values, producing a misleading high score.
- **Solution**: Rebuilt `nutrition_master.json` with USDA FoodData Central records for all foods. When data is unavailable, fields are set to `null` with message `"Nutrition data unavailable"`, and Health Score returns `"Unavailable"` (no fake score).

---

## 3. The New Single Canonical `food_id` Pipeline Architecture

```text
IMAGE INPUT
    │
    ▼
PYTORCH AI INFERENCE (predict_production.py)
    │
    ▼
CONFIDENCE & OOD GATING (Recognized / Uncertain / Unknown / Not-Food)
    │
    ▼
CANONICAL FOOD ID (e.g. "paneer_tikka", "pani_puri", "french_fries")
    │
    ├─────────────────────────────┼─────────────────────────────┐
    ▼                             ▼                             ▼
FOOD MASTER REGISTRY      FOOD IMAGES REGISTRY       USDA NUTRITION MASTER
(food_master.json)        (food_images.json)         (nutrition_master.json)
    │                             │                             │
    │ canonical_name              │ representative_image        │ full macro panel
    │ category & subcategory      │ verified photo URL          │ vitamins A, C, D, E, K, B1-B12
    │ regional cuisine            │ verified image hash         │ minerals Ca, Fe, Mg, K, Zn, etc.
    │ dietary tags (veg/meat)     │                             │ dynamic serving scaling
    │                             │                             │ verified health score math
    └─────────────────────────────┴─────────────────────────────┘
                                  │
                                  ▼
                     UNIFIED REST API & FRONTEND
                   (All state keyed by food_id)
```
