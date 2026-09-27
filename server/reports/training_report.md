# FoodIQ — AI Model Retraining & Expanded Corpus Report

**Generated**: Automated Model Training & Evaluation Engine  
**Deployment Path**: `server/models/production/`  

---

## 🔬 Model Specifications & Architecture

| Parameter | Specification |
| :--- | :--- |
| **Model Architecture** | **ResNet-50 Deep Vision Classifier (Transfer Learning)** |
| **Input Resolution** | **224 × 224 × 3 RGB** |
| **Active Food Classes** | **146 Classes (Indian Cuisines, Global Dishes, Fresh Fruits, Vegetables, Sweets, Beverages)** |
| **Total Images in Corpus** | **141,311 Images** |
| **Active Training Images** | **4,088 Images** |
| **Validation Images** | **1,124 Images** |
| **Unseen Test Images** | **1,124 Images** |
| **Training Duration** | **1108.7 seconds** |

---

## 📊 Measured Performance Metrics (Unseen Test Set)

| Metric | Measured Value | Standard Target |
| :--- | :--- | :--- |
| **Best Validation Accuracy** | **78.20%** | $\ge 70.0\%$ |
| **Test Top-1 Accuracy** | **77.94%** | High Fine-Grained Precision Across 146 Classes |
| **Test Top-3 Accuracy** | **93.24%** | Robust Top Semantic Grouping |
| **Test Top-5 Accuracy** | **96.53%** | $\ge 85.0\%$ |

---

## 🛡️ Calibrated 3-State Confidence Policy

| State | Calibrated Criterion | System Action & User Message |
| :--- | :--- | :--- |
| **1. RECOGNIZED FOOD** | $	ext{Confidence} \ge 38\%$ AND $	ext{Margin} \ge 0.08$ | Returns canonical food name, representative image, and full USDA nutrition profile |
| **2. UNCERTAIN FOOD** | $	ext{Confidence} = 22\% - 38\%$ | *"Food detected, but FoodIQ cannot confidently identify the exact food."* |
| **3. UNKNOWN / OOD FOOD** | $	ext{Confidence} < 22\%$ or Excluded Class | *"Food detected, but this dish is not currently in the FoodIQ database."* |
| **4. NON-FOOD OBJECT** | Non-Food Filter / Artificial Spectral Signature | *"No food detected."* |

---

## 📈 Multi-Epoch Learning History

```text
Epoch 1: Train Loss = 2.9765, Train Acc = 35.4% | Val Loss = 1.8128, Val Acc = 59.3%
Epoch 2: Train Loss = 1.645, Train Acc = 64.8% | Val Loss = 1.5274, Val Acc = 67.2%
Epoch 3: Train Loss = 1.2178, Train Acc = 76.4% | Val Loss = 1.2793, Val Acc = 74.3%
Epoch 4: Train Loss = 0.9977, Train Acc = 84.5% | Val Loss = 1.1906, Val Acc = 78.2%
```
