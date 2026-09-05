with open('./参考存档/DnfHero0', 'rb') as f:
    bytes_data = f.read()

known_equips = [
    # 4把太刀
    {"slot": 48, "desc": "20级神器太刀", "level": 20, "quality": "神器(粉)", "refine": 34},
    {"slot": 56, "desc": "30级史诗太刀", "level": 30, "quality": "史诗(橙)", "refine": 0},
    {"slot": 77, "desc": "40级普通太刀", "level": 40, "quality": "普通(白)", "refine": 0},
    {"slot": 81, "desc": "40级稀有太刀", "level": 40, "quality": "稀有(紫)", "refine": 0},
    # 用户刚补充的3件
    {"slot": 74, "desc": "40级高级布甲护肩", "level": 40, "quality": "高级(蓝)", "refine": 0},
    {"slot": 75, "desc": "40级高级手腕", "level": 40, "quality": "高级(蓝)", "refine": 0},
    {"slot": 80, "desc": "40级高级重甲下装", "level": 40, "quality": "高级(蓝)", "refine": 0},
    # 图片Photo 7中明确给出的 25级橙重甲 (0x87)
    {"slot": 57, "desc": "25级史诗重甲上衣", "level": 25, "quality": "史诗(橙)", "refine": 0},
    {"slot": 59, "desc": "25级史诗重甲下装", "level": 25, "quality": "史诗(橙)", "refine": 0},
    {"slot": 60, "desc": "25级史诗重甲护肩", "level": 25, "quality": "史诗(橙)", "refine": 0},
    # 图片Photo 8中明确给出的 30级橙戒 (0x38), 40级粉手 (0x2f)
    {"slot": 58, "desc": "30级史诗戒指", "level": 30, "quality": "史诗(橙)", "refine": 0},
    {"slot": 67, "desc": "40级神器手腕", "level": 40, "quality": "神器(粉)", "refine": 0},
]

print(f"{'描述':<18} | " + " | ".join(f"B{i:02d}" for i in range(24)))
print("-" * 130)

for eq in known_equips:
    offset = 0x3a + eq["slot"] * 24
    raw = bytes_data[offset : offset + 24]
    print(f"{eq['desc']:<18} | " + " | ".join(f"{x:02x}" for x in raw))
