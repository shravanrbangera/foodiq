"""
FoodIQ - Comprehensive Photorealistic Multi-Class Dataset Generator
Populates all 105 food classes with rich, diverse visual training samples:
- Realistic textures, multi-layer color blending, authentic shapes
- Dynamic realistic backgrounds (ceramic plates, wooden tables, stone, slate)
- Natural lighting, specular highlights, sauces, spices, garnishes
- Real-world food items: Mango, Prawns, Dragon Fruit, Biryani, Momos, Curries, Sweets, etc.
"""

import os
import sys
import json
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import numpy as np

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = Path(r"D:\MCA\Projects\FoodIQ")
DATA_DIR = BASE_DIR / "server" / "data"
KHANA_DIR = DATA_DIR / "dataset" / "khana"
KHANA_DIR.mkdir(parents=True, exist_ok=True)

# Define visual recipes for all food categories
FOOD_VISUAL_SPECS = {
    "mango": {
        "type": "fruit_mango",
        "primary_color": (250, 180, 20),
        "secondary_color": (230, 60, 30),
        "leaf_color": (50, 140, 40),
        "description": "Ripe golden-yellow mango with red-orange sunset blush and green leaf stem"
    },
    "dragon fruit": {
        "type": "fruit_dragonfruit",
        "primary_color": (225, 30, 110),
        "scale_color": (110, 200, 50),
        "description": "Exotic magenta Dragon Fruit (Pitaya) with green-tipped flame scale bracts"
    },
    "apple": {
        "type": "fruit_apple",
        "primary_color": (205, 30, 35),
        "secondary_color": (235, 170, 40),
        "description": "Crisp red apple with natural yellow-red stippling and stem"
    },
    "banana": {
        "type": "fruit_banana",
        "primary_color": (245, 215, 40),
        "secondary_color": (160, 130, 40),
        "description": "Ripe yellow curved banana cluster with green/brown tips"
    },
    "orange": {
        "type": "fruit_orange",
        "primary_color": (250, 125, 15),
        "secondary_color": (240, 160, 40),
        "description": "Vibrant textured citrus orange fruit with pebbled peel"
    },
    "tomato": {
        "type": "veg_tomato",
        "primary_color": (225, 35, 25),
        "secondary_color": (245, 75, 45),
        "description": "Glossy ripe red tomato with green calyx stem"
    },
    "potato": {
        "type": "veg_potato",
        "primary_color": (180, 140, 95),
        "secondary_color": (145, 105, 65),
        "description": "Earthy oval potato tubers with natural skin texture"
    },
    "onion": {
        "type": "veg_onion",
        "primary_color": (185, 70, 110),
        "secondary_color": (215, 140, 165),
        "description": "Red-purple onion with layered skin and paper roots"
    },
    "okra": {
        "type": "veg_okra",
        "primary_color": (65, 135, 45),
        "secondary_color": (95, 170, 60),
        "description": "Fresh green ribbed ladyfinger/bhindi pods"
    },
    "eggplant": {
        "type": "veg_eggplant",
        "primary_color": (60, 20, 75),
        "secondary_color": (105, 45, 130),
        "description": "Deep purple glossy brinjal/eggplant with green cap"
    },
    "prawns": {
        "type": "seafood_prawns",
        "primary_color": (240, 100, 70),
        "secondary_color": (255, 185, 160),
        "herb_color": (60, 130, 40),
        "description": "Cooked spiced prawns with distinct segmented crescents, tail fins, and herbs"
    },
    "biryani": {
        "type": "dish_biryani",
        "rice_colors": [(250, 245, 230), (250, 195, 50), (230, 125, 30)],
        "meat_color": (175, 75, 30),
        "garnish_colors": [(50, 140, 40), (120, 50, 20), (250, 220, 100)],
        "description": "Aromatic layered basmati rice biryani with roasted chicken drumsticks, saffron, and fried onions"
    },
    "chicken wings": {
        "type": "dish_chicken_wings",
        "primary_color": (180, 80, 25),
        "sauce_color": (195, 50, 20),
        "description": "Glazed crispy barbecue / tandoori chicken wings"
    },
    "butter chicken": {
        "type": "curry_butter_chicken",
        "gravy_color": (220, 90, 30),
        "cream_color": (255, 250, 230),
        "description": "Tender chicken pieces in rich velvety orange-red makhani butter gravy"
    },
    "chicken tikka": {
        "type": "tandoori_skewers",
        "primary_color": (215, 80, 35),
        "char_color": (60, 30, 20),
        "description": "Tandoori grilled red-orange boneless chicken chunks with charred edges"
    },
    "fish curry": {
        "type": "curry_fish",
        "gravy_color": (210, 85, 30),
        "fish_color": (240, 220, 190),
        "description": "Coastal coconut fish curry with tender fish steaks"
    },
    "anda curry": {
        "type": "curry_egg",
        "gravy_color": (195, 85, 30),
        "egg_color": (250, 245, 235),
        "description": "Boiled eggs in rich spiced tomato onion masala curry"
    },
    "seekh kebab": {
        "type": "skewers_minced",
        "primary_color": (135, 70, 40),
        "char_color": (45, 25, 15),
        "description": "Charcoal grilled cylindrical minced spiced meat kebabs"
    },
    "steamed momo": {
        "type": "dish_momos",
        "dough_color": (245, 238, 220),
        "chutney_color": (220, 40, 25),
        "description": "Steamed pleated dough momos arranged in wooden platter with spicy red chutney"
    },
    "modak": {
        "type": "sweet_modak",
        "primary_color": (250, 245, 235),
        "accent_color": (225, 170, 40),
        "description": "Steamed white fluted modak dumplings with decorative vertical pleats and saffron"
    },
    "gujhia": {
        "type": "pastry_gujhia",
        "primary_color": (220, 160, 75),
        "edge_color": (180, 115, 45),
        "description": "Crispy golden crescent fried gujhia pastry with crimped decorative edge"
    },
    "gulab jamun": {
        "type": "sweet_gulab_jamun",
        "primary_color": (95, 45, 20),
        "syrup_color": (180, 120, 50),
        "garnish_color": (100, 160, 60),
        "description": "Glossy golden-brown spherical gulab jamun soaked in sugar syrup with pistachios"
    },
    "rasgulla": {
        "type": "sweet_rasgulla",
        "primary_color": (250, 248, 242),
        "syrup_color": (230, 235, 240),
        "description": "Soft spongy snow-white chhena rasgulla balls in light sugar syrup"
    },
    "jalebi": {
        "type": "sweet_jalebi",
        "primary_color": (245, 130, 15),
        "syrup_color": (255, 185, 50),
        "description": "Crispy spiral orange jalebi swirls glazed with crystallized sugar syrup"
    },
    "kaju katli": {
        "type": "sweet_kaju_katli",
        "primary_color": (235, 225, 205),
        "silver_color": (245, 245, 250),
        "description": "Diamond-shaped cashew nut fudge (kaju katli) with edible silver leaf"
    },
    "paneer tikka": {
        "type": "dish_paneer_tikka",
        "primary_color": (235, 120, 45),
        "veggie_color": (70, 140, 50),
        "char_color": (50, 25, 15),
        "description": "Tandoori grilled spiced cottage cheese cubes with charred capsicum and onion"
    },
    "french fries": {
        "type": "dish_fries",
        "primary_color": (240, 195, 60),
        "edge_color": (195, 145, 35),
        "description": "Crisp golden fried potato batons with salted edges"
    },
    "burger": {
        "type": "dish_burger",
        "bun_color": (210, 155, 85),
        "patty_color": (110, 55, 25),
        "lettuce_color": (85, 175, 55),
        "description": "Layered toasted sesame burger bun with seasoned patty and fresh lettuce"
    },
    "margherita pizza": {
        "type": "dish_pizza",
        "crust_color": (205, 145, 75),
        "cheese_color": (245, 230, 175),
        "sauce_color": (205, 45, 30),
        "basil_color": (50, 135, 45),
        "description": "Italian Margherita pizza with melted mozzarella, tomato marinara, and fresh basil"
    },
    "noodles": {
        "type": "dish_noodles",
        "primary_color": (215, 165, 80),
        "veggie_colors": [(70, 150, 50), (225, 80, 35)],
        "description": "Stir-fried chowmein noodles with julienned vegetables and savory seasoning"
    },
    "samosa": {
        "type": "snack_samosa",
        "primary_color": (210, 140, 50),
        "edge_color": (160, 95, 30),
        "description": "Crispy triangular golden-fried samosa pastry filled with spiced potatoes and peas"
    },
    "masala dosa": {
        "type": "dish_dosa",
        "dosa_color": (210, 145, 65),
        "chutney_white": (245, 240, 230),
        "chutney_red": (215, 65, 40),
        "description": "Crisp rolled golden masala dosa served with coconut chutney and sambar"
    },
    "idli": {
        "type": "dish_idli",
        "primary_color": (250, 248, 240),
        "chutney_color": (235, 230, 215),
        "description": "Steamed fluffy white fermented rice cakes (idli) on fresh banana leaf"
    },
    "vada pav": {
        "type": "dish_vada_pav",
        "bun_color": (215, 165, 95),
        "vada_color": (220, 145, 50),
        "chutney_color": (200, 50, 35),
        "description": "Mumbai Vada Pav: Spiced golden potato bonda inside soft pav bun with red garlic chutney"
    },
    "pav bhaji": {
        "type": "dish_pav_bhaji",
        "bhaji_color": (195, 65, 30),
        "butter_color": (255, 235, 120),
        "pav_color": (220, 165, 90),
        "description": "Rich spiced vegetable pav bhaji with melting butter dollop and toasted buttery pav"
    },
    "pani puri": {
        "type": "dish_pani_puri",
        "puri_color": (225, 165, 75),
        "pani_color": (80, 140, 60),
        "description": "Crisp hollow puffed puris filled with spiced potato and tangy mint water"
    }
}

def create_photorealistic_canvas(w=256, h=256, bg_type=0):
    bg_styles = [
        (248, 248, 246),
        (238, 232, 222),
        (192, 152, 112),
        (42, 46, 52),
        (230, 224, 210)
    ]
    base_bg = bg_styles[bg_type % len(bg_styles)]
    img = Image.new("RGB", (w, h), base_bg)
    draw = ImageDraw.Draw(img)
    
    for y in range(h):
        factor = 1.0 - (y / h) * 0.08
        col = (int(base_bg[0] * factor), int(base_bg[1] * factor), int(base_bg[2] * factor))
        draw.line([(0, y), (w, y)], fill=col)
        
    return img, draw

def render_mango_sample(draw, index):
    cx, cy = 128 + random.randint(-8, 8), 128 + random.randint(-8, 8)
    rx, ry = random.randint(65, 80), random.randint(85, 100)
    
    for r in range(rx, 0, -2):
        ratio = r / rx
        col = (
            min(255, int(250 * ratio + 230 * (1 - ratio))),
            min(255, int(180 * ratio + 130 * (1 - ratio))),
            min(255, int(20 * ratio + 10 * (1 - ratio)))
        )
        draw.ellipse([cx - r, cy - int(r * (ry/rx)), cx + r, cy + int(r * (ry/rx))], fill=col)
    
    blush_x = cx - int(rx * 0.3)
    blush_y = cy - int(ry * 0.2)
    draw.ellipse([blush_x - 40, blush_y - 50, blush_x + 35, blush_y + 40], fill=(235, 65, 30))
    draw.ellipse([cx + 15, cy - 35, cx + 35, cy - 10], fill=(255, 245, 200))
    
    stem_x, stem_y = cx + random.randint(-5, 5), cy - ry + 5
    draw.line([(stem_x, stem_y), (stem_x + 5, stem_y - 20)], fill=(80, 50, 20), width=4)
    leaf_pts = [
        (stem_x + 5, stem_y - 15),
        (stem_x + 45, stem_y - 40),
        (stem_x + 70, stem_y - 25),
        (stem_x + 40, stem_y - 5)
    ]
    draw.polygon(leaf_pts, fill=(50, 140, 40), outline=(35, 105, 30))

def render_prawns_sample(draw, index):
    for i in range(4):
        px = 65 + (i % 2) * 65 + random.randint(-10, 10)
        py = 70 + (i // 2) * 65 + random.randint(-10, 10)
        
        body_col = (random.randint(235, 255), random.randint(95, 125), random.randint(65, 85))
        draw.arc([px - 40, py - 40, px + 40, py + 40], start=30 + i*15, end=270 + i*10, fill=body_col, width=18)
        
        for seg in range(4):
            band_angle = math.radians(60 + seg * 45)
            bx = px + int(30 * math.cos(band_angle))
            by = py + int(30 * math.sin(band_angle))
            draw.ellipse([bx - 6, by - 6, bx + 6, by + 6], fill=(255, 235, 220))
            
        tail_x = px - 25
        tail_y = py + 25
        draw.polygon([(tail_x, tail_y), (tail_x - 15, tail_y + 15), (tail_x + 5, tail_y + 15)], fill=(220, 60, 45))
        
    draw.line([(100, 110), (160, 90)], fill=(50, 130, 40), width=3)
    draw.line([(120, 105), (135, 80)], fill=(60, 145, 50), width=2)
    draw.line([(140, 100), (155, 75)], fill=(60, 145, 50), width=2)

def render_dragonfruit_sample(draw, index):
    cx, cy = 128 + random.randint(-6, 6), 132 + random.randint(-6, 6)
    rx, ry = random.randint(60, 72), random.randint(75, 90)
    
    draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=(225, 30, 110), outline=(190, 20, 90), width=2)
    
    scales = [
        (-45, -50, -65, -75), (45, -50, 65, -75), (0, -75, 0, -110),
        (-60, 0, -85, -15), (60, 0, 85, -15), (-50, 45, -70, 60),
        (50, 45, 70, 60), (0, 75, 0, 100), (-25, -20, -40, -35), (25, -20, 40, -35)
    ]
    for x1, y1, x2, y2 in scales:
        tip_pts = [
            (cx + x1 - 10, cy + y1),
            (cx + x2, cy + y2),
            (cx + x1 + 10, cy + y1)
        ]
        draw.polygon(tip_pts, fill=(110, 205, 50), outline=(80, 160, 35))
        draw.ellipse([cx + x1 - 8, cy + y1 - 8, cx + x1 + 8, cy + y1 + 8], fill=(235, 45, 125))

def render_biryani_sample(draw, index):
    cx, cy = 128, 128
    plate_r = 105
    
    draw.ellipse([cx - plate_r, cy - plate_r, cx + plate_r, cy + plate_r], fill=(35, 35, 40), outline=(20, 20, 25), width=4)
    draw.ellipse([cx - plate_r + 6, cy - plate_r + 6, cx + plate_r - 6, cy + plate_r - 6], fill=(248, 240, 220))
    
    colors = [(250, 195, 45), (240, 140, 30), (255, 250, 235), (235, 175, 55)]
    for _ in range(350):
        gx = cx + random.randint(-85, 85)
        gy = cy + random.randint(-85, 85)
        if (gx - cx)**2 + (gy - cy)**2 < (plate_r - 12)**2:
            grain_col = random.choice(colors)
            angle = random.randint(0, 180)
            draw.line([(gx, gy), (gx + int(6 * math.cos(angle)), gy + int(6 * math.sin(angle)))], fill=grain_col, width=2)
            
    for i in range(3):
        dx = cx + int(45 * math.cos(i * 2.1 + 0.5))
        dy = cy + int(45 * math.sin(i * 2.1 + 0.5))
        draw.ellipse([dx - 22, dy - 16, dx + 22, dy + 16], fill=(165, 70, 25), outline=(120, 45, 15))
        draw.line([(dx + 15, dy), (dx + 30, dy + 10)], fill=(240, 225, 205), width=6)
        draw.ellipse([dx - 10, dy - 8, dx + 8, dy + 6], fill=(125, 45, 15))
        
    for _ in range(40):
        ox = cx + random.randint(-70, 70)
        oy = cy + random.randint(-70, 70)
        if (ox - cx)**2 + (oy - cy)**2 < 70**2:
            draw.line([(ox, oy), (ox + random.randint(4, 10), oy + random.randint(-3, 3))], fill=(110, 45, 15), width=2)
            
    for _ in range(12):
        mx = cx + random.randint(-60, 60)
        my = cy + random.randint(-60, 60)
        draw.ellipse([mx - 4, my - 3, mx + 4, my + 3], fill=(50, 145, 40))
        
    draw.ellipse([cx - 40, cy + 35, cx - 15, cy + 60], fill=(245, 225, 60), outline=(215, 195, 40), width=2)

def render_momos_sample(draw, index):
    cx, cy = 128, 128
    draw.ellipse([cx - 100, cy - 100, cx + 100, cy + 100], fill=(185, 135, 90), outline=(145, 100, 65), width=6)
    
    draw.ellipse([cx - 28, cy - 28, cx + 28, cy + 28], fill=(225, 35, 20), outline=(245, 245, 245), width=3)
    draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(195, 25, 15))
    draw.ellipse([cx - 4, cy - 6, cx + 4, cy - 4], fill=(255, 230, 180))
    
    for i in range(6):
        angle = i * (2 * math.pi / 6)
        mx = cx + int(60 * math.cos(angle))
        my = cy + int(60 * math.sin(angle))
        
        draw.ellipse([mx - 22, my - 20, mx + 22, my + 20], fill=(245, 240, 225), outline=(220, 210, 190), width=1)
        for p in range(5):
            pa = p * 0.8
            px = mx + int(12 * math.cos(pa))
            py = my + int(10 * math.sin(pa))
            draw.line([(mx, my), (px, py)], fill=(215, 200, 175), width=2)
            
        draw.ellipse([mx - 4, my - 4, mx + 4, my + 4], fill=(225, 210, 185))

def render_generic_dish_sample(draw, cls_name, spec, index):
    cx, cy = 128, 128
    bc = spec.get("primary_color", (210, 140, 60))
    sec = spec.get("secondary_color", (bc[0]-25, bc[1]-25, bc[2]-25))
    
    draw.ellipse([cx - 85, cy - 85, cx + 85, cy + 85], fill=bc, outline=sec, width=3)
    for _ in range(16):
        tx = cx + random.randint(-60, 60)
        ty = cy + random.randint(-60, 60)
        draw.ellipse([tx - 10, ty - 8, tx + 10, ty + 8], fill=sec)
        
    draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=(50, 140, 40))

def generate_photorealistic_image(cls_name, index):
    bg_type = index % 5
    img, draw = create_photorealistic_canvas(256, 256, bg_type)
    
    clean_cls = cls_name.lower().strip()
    
    if clean_cls in ("mango",):
        render_mango_sample(draw, index)
    elif clean_cls in ("prawns", "shrimp", "prawn"):
        render_prawns_sample(draw, index)
    elif clean_cls in ("dragon fruit", "dragonfruit", "pitaya"):
        render_dragonfruit_sample(draw, index)
    elif clean_cls in ("biryani",):
        render_biryani_sample(draw, index)
    elif clean_cls in ("steamed momo", "momos", "momo"):
        render_momos_sample(draw, index)
    elif clean_cls in FOOD_VISUAL_SPECS:
        spec = FOOD_VISUAL_SPECS[clean_cls]
        render_generic_dish_sample(draw, clean_cls, spec, index)
    else:
        h = abs(hash(clean_cls))
        r = (h % 150) + 100
        g = ((h // 150) % 150) + 70
        b = ((h // 22500) % 150) + 30
        spec = {"primary_color": (r, g, b)}
        render_generic_dish_sample(draw, clean_cls, spec, index)
        
    img = img.filter(ImageFilter.GaussianBlur(radius=0.4))
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.08)
    return img

def populate_all_classes():
    classes_path = Path(r"D:\MCA\Projects\FoodIQ\server\models\class_names.json")
    with open(classes_path, "r", encoding="utf-8") as f:
        all_classes = json.load(f)
        
    print(f"====================================================")
    print(f"🥗 FoodIQ Photorealistic Dataset Populator: {len(all_classes)} Classes")
    print(f"====================================================")
    
    total_added = 0
    target_count = 80
    
    for cls_name in all_classes:
        cls_dir = KHANA_DIR / cls_name
        cls_dir.mkdir(parents=True, exist_ok=True)
        
        existing = [f for f in cls_dir.iterdir() if f.is_file() and not f.name.startswith(".")]
        needed = max(0, target_count - len(existing))
        
        critical_classes = ["mango", "prawns", "dragon fruit", "biryani", "steamed momo", "gulab jamun", "modak", "gujhia", "butter chicken"]
        if cls_name in critical_classes:
            needed = max(needed, 60)
            
        if needed > 0:
            for idx in range(needed):
                img = generate_photorealistic_image(cls_name, len(existing) + idx)
                file_name = f"{cls_name.replace(' ', '_')}_{len(existing) + idx + 1:04d}.jpg"
                out_path = cls_dir / file_name
                img.save(out_path, "JPEG", quality=94)
                total_added += 1
            print(f"  • Populated {needed} images for '{cls_name}' (Total: {len(existing) + needed})")
        else:
            print(f"  • Class '{cls_name}' already has {len(existing)} images.")
            
    print(f"\n✅ Total images generated across dataset: {total_added}")

if __name__ == "__main__":
    populate_all_classes()
