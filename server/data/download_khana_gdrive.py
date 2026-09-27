"""
Download Khana Dataset from Google Drive Folder
URL: https://drive.google.com/drive/folders/1PWyJdkizw5ABBd8BIAnr_FZq91YZ2Uo0
Folder ID: 1PWyJdkizw5ABBd8BIAnr_FZq91YZ2Uo0
"""

import os
import sys
import shutil
from pathlib import Path
import gdown

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
DATA_DIR = BASE_DIR / "server" / "data"
OUTPUT_DIR = DATA_DIR / "raw_datasets" / "khana_gdrive"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

url = "https://drive.google.com/drive/folders/1PWyJdkizw5ABBd8BIAnr_FZq91YZ2Uo0"

print(f"🚀 Starting download from Google Drive folder: {url}")
print(f"📂 Target Directory: {OUTPUT_DIR}")

try:
    downloaded = gdown.download_folder(url, output=str(OUTPUT_DIR), quiet=False, use_cookies=False)
    print(f"\n✅ Google Drive folder download completed!")
    print(f"Items downloaded: {len(downloaded) if downloaded else 'Complete'}")
except Exception as e:
    print(f"\n⚠️ gdown download_folder exception: {e}")
    print("Trying fallback single file / zip download if available...")
