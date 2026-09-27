"""
FoodIQ - Google Drive Khana Dataset Extractor & Automated AI Retraining Pipeline
================================================================================
1. Detects completed 'dataset.tar.gz' or extracted archive in 'raw_datasets/khana_gdrive'.
2. Safely extracts all dish classes and images into 'dataset/khana/'.
3. Normalizes directory names to lowercase canonical food names.
4. Integrates with Fruit-Images-Dataset, Food-MNIST, and Datacluster images.
5. Updates food_master.json & nutrition_master.json with full USDA/NIN nutrition profiles.
6. Trains ResNet-50 PyTorch vision model with CosineAnnealingLR & evaluates on test set.
7. Deploys production model and updates training reports.
"""

import os
import sys
import json
import time
import shutil
import tarfile
import zipfile
from pathlib import Path
import numpy as np

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def log(msg):
    print(msg)
    sys.stdout.flush()

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
SERVER_DIR = BASE_DIR / "server"
DATA_DIR = SERVER_DIR / "data"
GDRIVE_DIR = DATA_DIR / "raw_datasets" / "khana_gdrive"
KHANA_DIR = DATA_DIR / "dataset" / "khana"
MODELS_DIR = SERVER_DIR / "models"
PRODUCTION_DIR = MODELS_DIR / "production"
REPORTS_DIR = SERVER_DIR / "reports"

for d in [KHANA_DIR, MODELS_DIR, PRODUCTION_DIR, REPORTS_DIR]:
    d.mkdir(parents=True, exist_ok=True)

# -------------------------------------------------------------------------
# STEP 1: EXTRACT DATASET ARCHIVE
# -------------------------------------------------------------------------
def extract_dataset():
    log("====================================================")
    log("📦 Extracting Google Drive Khana Dataset Archive")
    log("====================================================")

    tar_files = list(GDRIVE_DIR.glob("*.tar.gz")) + list(GDRIVE_DIR.glob("*.tar"))
    zip_files = list(GDRIVE_DIR.glob("*.zip"))

    archive_path = None
    if tar_files:
        archive_path = tar_files[0]
    elif zip_files:
        archive_path = zip_files[0]

    if not archive_path or not archive_path.exists():
        log(f"⚠️ No completed archive found in {GDRIVE_DIR}. Checking for already extracted folders...")
        return

    log(f"Found archive: {archive_path.name} ({archive_path.stat().st_size / (1024*1024):.1f} MB)")
    log("Extracting archive into dataset/khana/ ...")

    extract_start = time.time()
    extracted_images = 0

    if archive_path.suffix == ".zip":
        with zipfile.ZipFile(archive_path, 'r') as zf:
            for member in zf.infolist():
                if not member.is_dir() and member.filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                    # Extract dish folder name
                    parts = Path(member.filename).parts
                    if len(parts) >= 2:
                        cls_name = parts[-2].lower().replace('_', ' ').replace('-', ' ').strip()
                        target_dir = KHANA_DIR / cls_name
                        target_dir.mkdir(parents=True, exist_ok=True)
                        target_file = target_dir / Path(member.filename).name
                        if not target_file.exists():
                            with zf.open(member) as src, open(target_file, "wb") as dst:
                                shutil.copyfileobj(src, dst)
                            extracted_images += 1

    elif ".tar" in archive_path.name:
        with tarfile.open(archive_path, 'r:*') as tf:
            for member in tf.getmembers():
                if member.isfile() and member.name.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                    parts = Path(member.name).parts
                    if len(parts) >= 2:
                        cls_name = parts[-2].lower().replace('_', ' ').replace('-', ' ').strip()
                        target_dir = KHANA_DIR / cls_name
                        target_dir.mkdir(parents=True, exist_ok=True)
                        target_file = target_dir / Path(member.name).name
                        if not target_file.exists():
                            extracted = tf.extractfile(member)
                            if extracted:
                                with open(target_file, "wb") as dst:
                                    shutil.copyfileobj(extracted, dst)
                                extracted_images += 1

    elapsed = time.time() - extract_start
    log(f"✅ Extracted {extracted_images:,} images in {elapsed:.1f}s.")

# -------------------------------------------------------------------------
# STEP 2: ORCHESTRATE INTEGRATION & RETRAINING
# -------------------------------------------------------------------------
def main():
    log("==================================================================")
    log("🥗 FoodIQ Google Drive Dataset Extraction & Master Model Training")
    log("==================================================================")

    # 1. Extract any downloaded archive
    extract_dataset()

    # 2. Run master integration and retraining
    from integrate_all_datasets_and_expand import (
        import_from_fruit_images,
        import_from_food_mnist,
        import_from_datacluster,
        sync_master_databases,
        populate_all_corpus_classes,
        train_and_evaluate_model
    )

    import_from_fruit_images()
    import_from_food_mnist()
    import_from_datacluster()
    food_master, _ = sync_master_databases()
    classes = populate_all_corpus_classes(food_master)
    train_and_evaluate_model(classes)

    log("\n🎉 GOOGLE DRIVE DATASET EXTRACTION AND MODEL RETRAINING COMPLETE!")

if __name__ == "__main__":
    main()
