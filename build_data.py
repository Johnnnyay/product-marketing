# build_data.py, generates data/products.json (site data) + scripts/meta.json (enrichment map)
# Notion Master Pricing DB is the source of truth for prices/PV/days/one-time/images.
# This script holds the ENRICHMENT layer: slugs, Chinese names, taglines, area mapping.
# fetch-notion.js merges live Notion rows over meta.json to refresh products.json.
import json, re, datetime
import products_new

IMG = {
 "123364": "https://www.amway.com/medias/123364-en-US-690px-01?context=bWFzdGVyfHJvb3R8MTAwNDc0fGltYWdlL3BuZ3xoZDEvaGYwLzk0NDY3MTc4ODIzOTgucG5nfDQ5NmQ3NzU2NDdjOTk4ZjJlMGQxNGQ0OGU0NWE0NjkzOWEwZDE1YjA5ZWQ0Nzg3NDU3ZDVmNWU1MjUwMzlhMGE",
 "109747": "https://www.amway.com/medias/109747-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w0NTI0MDN8aW1hZ2UvcG5nfGltYWdlcy9oMWEvaGEzLzk0NDk4ODA1MTg2ODYucG5nfDhhMzQ4NmUzNWUwODM2ZGYzODQ2MDk0YWQ4ODQxMThjMmUwYTlmZDBlYWIyMzFhYzBlZDc2YmFkOTcyNzY1MGE",
 "110171": "https://www.amway.com/medias/110171-en-US-690px-01?context=bWFzdGVyfGltYWdlc3cyODQxMDJ8aW1hZ2UvcG5nfGltYWdlcy9oYjIvaDQ4Lzk0NDgxNjk0MzkyNjIucG5nfGY1NGI2MDQyZjVhZTliZTBkOWRlMWVhODRkOWYwYTEzNGNhZWRmMTgyZGMwYTYzMTdiZTc1ZmM2NjU1NWIwYzM",
 "126136": "https://www.amway.com/medias/126136-en-US-690px-01?context=bWFzdGVyfGltYWdlc3wxMDExNTF8aW1hZ2UvcG5nfGltYWdlcy9oMzAvaDA0Lzk0OTUyNDI1NzE4MDYucG5nfDYzMWY1NDJmNjhhMDMyNGUxODkwODAwNDFhZDIxMjJmYjUzODlkYjZjZmY4YzFkMDRlNTNlMzI1OTA0ZDMzODI",
 "125921": "https://www.amway.com/medias/125921-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w1NDc5MjN8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2hmNS9oMzgvMTAyNjMxODAxMTU5OTgvMTI1OTIxLWVuLVVTLTY5MHB4LTAxfDIxNDAxNzg3MjY2OTIzNDU4NzM5YmZkZDFhNGQ4NGQzOWI4OTA1ODQzNDA1OGIzODZhOWRkOWIyNTIyNDE1MmY",
 "124106": "https://www.amway.com/medias/124106-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w0MTQ3OXxpbWFnZS9wbmd8c3lzLW1hc3Rlci9pbWFnZXMvaGFlL2hjMC85NTE4MTY3MDMxODM4LzEyNDEwNi1lbi1VUy02OTBweC0wMXwzZjk1MTcxYjIxMTcyMDdmYTY4NTJkNjE0MmU4NzRmYzU5ZTk4MTQ1NTBjOWE3NmVjOTZlZGExNWM3YzcwNWZm",
 "127705": "https://www.amway.com/medias/127705-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w2NTAyMXxpbWFnZS9wbmd8c3lzLW1hc3Rlci9pbWFnZXMvaDBkL2gyNy85ODgyMjkzNzMxMzU4LzEyNzcwNS1lbi1VUy02OTBweC0wMXxmODFkMDM1MWZhZTRiOGRmNzRjNzJiM2NlZDI1OTFlOTQ0NmIyZDE4MjIwYmQ1MzVkNjk0YjY4ZjVmYTBkNTEx",
 "124111": "https://www.amway.com/medias/124111-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w0MTYxOHxpbWFnZS9wbmd8c3lzLW1hc3Rlci9pbWFnZXMvaGQyL2hhNC85NTE4MTY3ODgzODA2LzEyNDExMS1lbi1VUy02OTBweC0wMXw1YzM4NjU2YTRjNTVhOGIwNWMyM2I5NDI1YjQ2MjQ5ZGUyNTgxOGE3OTZlMDRmYjY4ZDM1YmJkOGVjOWY0NTRh",
 "124112": "https://www.amway.com/medias/124112-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w2OTg1MnxpbWFnZS9wbmd8c3lzLW1hc3Rlci9pbWFnZXMvaGU2L2g1Yy8xMDE1MjA3NzY1NjA5NC8xMjQxMTItZW4tVVMtNjkwcHgtMDF8NTkyZmNlY2M4Zjk1NTQ2YjRmMmMyMDI1M2ZhOWUwYTFhNGZkZTNlNzkzMTAxYzBhYmMwYWQ1Njg3MzJjYjFhNQ",
 "126460": "https://www.amway.com/medias/126460-en-US-690px-01?context=bWFzdGVyfGltYWdlc3wxMTIzMTF8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2g1MS9oMGYvOTk1ODg3OTQyODYzOC8xMjY0NjAtZW4tVVMtNjkwcHgtMDF8MTQyZjU3NjI4MmUyZTcwNDFiYzNhMjE1NzA3MTVhMjg5YmI1NDhkMDU0ZDFhN2E0NGM5NDk5MjQxODc0OTE5NQ",
 "126449": "https://www.amway.com/medias/126449-en-US-690px-01?context=bWFzdGVyfGltYWdlc3wxMDk3MTF8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2gzOS9oYzkvOTk1MzgwOTk4OTY2Mi8xMjY0NDktZW4tVVMtNjkwcHgtMDF8YjVmMDY4ZTE0NGMzMGJhM2ZjZGQ5NmJmNjY2NjU0Y2E4MzE5MTdhZTkzMjViMGNjN2I4MGY5YWU4YTc5ZDk0Yg",
 "127725": "https://www.amway.com/medias/127725-en-US-150px-01?context=bWFzdGVyfGltYWdlc3wyMjU0MHxpbWFnZS9wbmd8c3lzLW1hc3Rlci9pbWFnZXMvaDk5L2hlMi85ODMyMDA0NjE2MjIyLzEyNzcyNS1lbi1VUy0xNTBweC0wMXwyZTZjYjVkYjBlOGJjYWY0ZGNjYTE0YjQ5YzEwYWUzZDFiZDU5MzAyY2E3ZTIxZTE5YTZlMjdjOTRhNGJjYjJk",
 "120571": "https://www.amway.com/medias/120571-en-US-150px-01?context=bWFzdGVyfGltYWdlc3w3OTExfGltYWdlL3BuZ3xpbWFnZXMvaGNiL2g3OS85NDQ5ODgyOTEwNzUwLnBuZ3w5ZTAwODllMjZhNzc5NmJmYmYwZTU0ZDlkNTdjNjE2YWJjNzZjZTJjZWE2MTYyY2RmODE5YTJkOGNiMzQxYmM2",
 "326778": "https://www.amway.com/medias/326778-en-US-690px-01?context=bWFzdGVyfGltYWdlc3w2NTg4OTZ8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2gxNC9oMzIvOTg5MDEyMjM5OTc3NC8zMjY3NzgtZW4tVVMtNjkwcHgtMDF8MzE3YmY3NjBkOTA5YTg4NWRmZTNjYzA0ZmFiMDJkYWQ1MWYzMTBjNWU2ZjQ1MzgyODgwNjkzNTQ5ZDMxMWMxMg",
 "125923": "https://www.amway.com/medias/125923-en-US-150px-01?context=bWFzdGVyfGltYWdlc3wxMTA5OXxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oODkvOTM1NTQyMTQ4MzAzOC5wbmd8MmMxZTc2YmYwYTBlNjdmZjQ0YmU1NWFjOWMxYWVkNDdhZDllNGQxNzE0YjhlNGZhZmY0YzczMjE1NjI0M2Y3Mw",
}

# (name_in_notion, item, cat, ibo, retail, pv, days, one_time), snapshot from Notion DB 2026-07-27
# fetch-notion.js refreshes these values live; enrichment below stays.
ROWS = [
 ("Double X Multivitamin 31-day Refill","A0244","nutrition",57.6,64,16.79,31,0),
 ("Double X Multivitamin 10-day","123364","nutrition",21.6,24,6.3,10,0),
 ("Vitamin C Extended Release 180ct","109747","nutrition",48.6,54,14.17,90,0),
 ("Vitamin C Extended Release 60ct","109745","nutrition",18,20,5.25,30,0),
 ("Vitamin B Complex 120ct","110171","nutrition",34.2,38,9.97,120,0),
 ("Vitamin B Complex 30ct","122971","nutrition",11.48,12.75,3.35,30,0),
 ("Vitamin D","119346","nutrition",26.1,29,7.61,60,0),
 ("Vitamin E Chewable","A4042","nutrition",38.7,43,11.28,60,0),
 ("Advanced Omega","126136","nutrition",36,40,10.5,30,0),
 ("Calcium Magnesium D","110610","nutrition",38.7,43,11.28,30,0),
 ("Magnesium","128032","nutrition",30.6,34,8.92,30,0),
 ("Iron & Folic Acid","102046","nutrition",15.3,17,4.46,60,0),
 ("Plant Protein Powder","125921","nutrition",36.9,41,10.76,15,0),
 ("Organics All-in-One Bars","316302","nutrition",51.3,57,14.96,12,0),
 ("Green Superfood","125937","nutrition",40.5,45,11.81,30,0),
 ("Probiotic","120571","nutrition",38.7,43,11.28,30,0),
 ("Digestive Enzyme","A8903","nutrition",35.1,39,10.23,30,0),
 ("Begin Daily GI Primer","127725","nutrition",70.2,78,20.46,30,0),
 ("Sleep Gummies","124506","nutrition",17.55,19.5,5.12,30,0),
 ("Go Shield","124555","nutrition",19.8,22,5.77,30,0),
 ("Twist Tubes","110855","nutrition",21.6,24,6.29,14,0),
 ("Hair Skin Nail","A7553","nutrition",23.4,26,6.82,30,0),
 ("Lean Muscle","100280","nutrition",46.8,52,13.64,30,0),
 ("Men's Pack","123365","nutrition",66.6,74,19.42,30,0),
 ("Women's Pack","123372","nutrition",53.1,59,15.48,30,0),
 ("ClearGuard Allergy","102735","nutrition",24.3,27,7.08,30,0),
 ("Garlic Heart Care","A5923","nutrition",28.8,32,8.4,30,0),
 ("Liver Support","A8084","nutrition",31.5,35,9.18,30,0),
 ("Memory Builder","111106","nutrition",37.8,42,11.02,30,0),
 ("Prostate Health","A8004","nutrition",41.4,46,12.07,30,0),
 ("Slimmetry","117085","nutrition",29.7,33,8.66,30,0),
 ("Vision Health","124708","nutrition",31.5,35,9.18,30,0),
 ("Eye Mojo Blue Light Gummies","125544","nutrition",19.8,22,5.77,30,0),
 # XS / sports
 ("XS Energy Drinks 12-pack","126883","sports",33.3,37,9.7,12,0),
 ("XS Energy + Focus 60ct","107846","sports",36.9,41,10.76,30,0),
 ("XS Grass-Fed Whey Protein","128154","sports",54.9,61,16.01,30,0),
 ("XS Muscle Multiplier (EAAs)","126753","sports",45,50,13.11,30,0),
 ("XS Pre-Workout Boost","316377","sports",29.7,33,8.66,30,0),
 ("XS Post-Workout Recovery","316380","sports",29.7,33,8.66,30,0),
 ("XS Ignite Thermogenic Powder","127811","sports",39.6,44,11.55,30,0),
 ("XS Protein Bars 12-pack","110385","sports",37.8,42,11.02,12,0),
 ("XS RTD Protein Shakes 12-pack","110370","sports",47.7,53,13.91,12,0),
 ("XS Protein Crisps","110628","sports",35.1,39,10.23,12,0),
 ("XS CocoWater 12-pack","110631","sports",25.2,28,7.35,12,0),
 ("Perfect Empowered Drinking Water","285375","sports",46.8,52,6.82,12,0),
 # Beauty
 ("Artistry Hydrating Day Lotion SPF30","123800","beauty",36.9,41,10.74,75,0),
 ("Artistry Hydrating Eye Gel Cream","123796V","beauty",36,40,10.48,90,0),
 ("Artistry Hydrating System Bundle","266693","beauty",90,100,26.19,75,0),
 ("Artistry Renewing Day Lotion SPF30","123787","beauty",66.6,74,19.38,75,0),
 ("Artistry Renewing System Bundle","266694","beauty",129.6,144,37.71,75,0),
 ("Artistry Firming System Bundle","266695","beauty",133.2,148,38.76,75,0),
 ("Artistry Defying Serum","127019V","beauty",76.5,85,22.27,60,0),
 ("Artistry Labs Retexturizing Serum","128178V","beauty",99,110,28.81,60,0),
 ("Artistry Labs Retexturizing System","125547V","beauty",334.8,372,97.43,None,1),
 ("Artistry Intensive Skincare 14 Night Reset","123776V","beauty",189,210,54.99,14,0),
 ("Artistry Everyday Skin Solution Bundle","321550","beauty",152.1,169,44.26,75,0),
 ("Artistry Signature Select Brightening Mask","122340V","beauty",42.3,47,12.31,30,0),
 ("Artistry Signature Select Purifying Mask","122342V","beauty",35.1,39,10.21,30,0),
 ("Artistry Signature Select Firming Mask","122341V","beauty",44.1,49,12.83,30,0),
 ("Artistry Signature Select Polishing Mask","122339V","beauty",35.1,39,10.21,30,0),
 ("Artistry Studio Spot On Dots","124816","beauty",24.3,27,7.07,30,0),
 ("Artistry Studio Eye Look Rested","124818","beauty",31.5,35,9.17,60,0),
 ("Artistry Men Face Wash","111225V","beauty",27,30,7.86,60,0),
 # Personal care
 ("Glister Toothpaste","124106","care",6.98,7.75,2.03,60,0),
 ("Glister Power Toothbrush","127705","care",157.5,175,45.92,None,1),
 ("Glister Refresher Spray","124111","care",6.53,7.25,1.9,45,0),
 ("Glister Floss 2-pack","124112","care",11.26,12.5,3.29,60,0),
 ("Glister Oral Rinse","124108","care",12.6,14,3.67,45,0),
 ("Satinique Purifying Shampoo 280ml","126460","care",13.5,15,3.94,45,0),
 ("Satinique Purifying Shampoo 750ml","126461","care",25.2,28,7.35,120,0),
 ("Satinique Smooth Shampoo 280ml","126449","care",13.5,15,3.94,45,0),
 ("Satinique Smooth Conditioner","126451","care",13.5,15,3.94,45,0),
 ("g&h Nourish Body Wash","125890","care",13.05,14.5,3.8,45,0),
 ("g&h Nourish Body Lotion","125891","care",14.18,15.75,4.13,45,0),
 ("g&h Protect Body Lotion SPF50","125901","care",25.2,28,7.35,45,0),
 # Home
 ("eSpring Water Purifier (Chrome)","128212UC","home",1259.1,1399,367.08,None,1),
 ("eSpring Above Counter Unit","122940","home",1169.1,1299,340.85,None,1),
 ("eSpring UV Replacement Filter","100186","home",252,280,73.47,None,1),
 ("eSpring e3 Carbon Filter","122943","home",228.6,254,66.65,None,1),
 ("Atmosphere Sky Air Purifier","120539","home",1539,1710,448.69,None,1),
 ("Atmosphere Mini Air Purifier","124746","home",819,910,238.78,None,1),
 ("Atmosphere Carbon Filter Replacement","101078","home",104.4,116,30.44,None,1),
 ("LOC Multi-Purpose Cleaner","E0001","home",11.25,12.5,3.28,120,0),
 ("LOC Multi-Purpose Wipes","110485","home",13.73,15.25,4,30,0),
 ("SA8 Liquid Laundry","110478","home",47.7,53,13.9,60,0),
 ("SA8 Powder Laundry Detergent","109849","home",47.7,53,13.9,60,0),
 ("Dish Drops Dishwashing Liquid","110488","home",14.4,16,4.2,60,0),
 ("Amway Home Prewash Spray","110403","home",16.65,18.5,4.85,60,0),
 ("Amway Home Fabric Softener","110480","home",12.61,14,3.68,45,0),
 ("Amway Home All Fabric Bleach","124485","home",15.75,17.5,4.59,60,0),
 ("Amway Home Glass Cleaner","112537","home",15.3,17,4.46,90,0),
 ("Pursue Disinfectant Spray","E0023","home",11.71,13,3.42,60,0),
 ("Amway Home Scrub Buds","110490","home",6.31,7,1.84,180,0),
 ("iCook 19-piece Cookware Set","120231","home",1382.4,1536,403.03,None,1),
 ("iCook 5-Piece Saute Set","101084","home",422.1,469,123.06,None,1),
 ("iCook 4-Piece Saucepan Set","101082","home",278.1,309,81.08,None,1),
 ("iCook 4-Piece Stock Pot","101085","home",287.1,319,83.7,None,1),
 ("iCook 6-Piece Dutch Oven","101086","home",395.1,439,115.19,None,1),
 ("iCook 9.5\" Nonstick Frypan","124694","home",206.1,229,60.09,None,1),
 ("iCook 11\" Nonstick Frypan",None,"home",251.1,279,73.21,None,1),
 ("iCook 5-Piece Knifeware Set","102709E","home",467.1,519,136.19,None,1),
 ("iCook Multipurpose Shears","102715","home",62.1,69,18.11,None,1),
 # Solutions
 ("Begin 30 Holistic Wellness Solution","326778","solutions",182.7,203,53.27,30,0),
 ("Everyday Nutrition Solution","318781","solutions",132.3,147,38.58,30,0),
 ("Sleep + Stress Solution","321893","solutions",167.85,186.5,48.94,30,0),
 ("Healthy Aging Solution","321548","solutions",128.7,143,37.52,30,0),
 ("Energy Solution","321549","solutions",137.7,153,40.14,30,0),
 ("XS Fitness Jump Start Solution","128209","solutions",159.3,177,46.44,30,0),
]

# Enrichment: name -> (brand, zh_name, tagline_en, tagline_zh, [areas], flags)
E = {
 "Double X Multivitamin 31-day Refill":("Nutrilite","双X综合营养片 31天装","22 vitamins & minerals plus phytonutrients from farm-grown plants","22种维生素矿物质+植物营养素，农场种植",["energy","aging","immunity"],{}),
 "Double X Multivitamin 10-day":("Nutrilite","双X综合营养片 10天体验装","Try the flagship multivitamin in a 10-day starter","旗舰综合营养素10天体验装",["energy","immunity"],{}),
 "Vitamin C Extended Release 180ct":("Nutrilite","维生素C缓释片 180粒","8-hour slow release from acerola cherries, no flush-out","针叶樱桃来源，8小时缓释吸收",["immunity","skin","aging"],{}),
 "Vitamin C Extended Release 60ct":("Nutrilite","维生素C缓释片 60粒","Same 8-hour release, smaller trial size","同款缓释配方，小瓶体验装",["immunity","skin"],{}),
 "Vitamin B Complex 120ct":("Nutrilite","维生素B族 120粒","Dual-action B for steady energy metabolism, 4-month supply","双效B族，稳定能量代谢，可用4个月",["energy","brain","sleep"],{}),
 "Vitamin B Complex 30ct":("Nutrilite","维生素B族 30粒","One-month B complex for energy support","一个月装B族，能量支持",["energy","brain"],{}),
 "Vitamin D":("Nutrilite","维生素D","Sunshine vitamin for bones and immune support","阳光维生素，骨骼与免疫支持",["immunity","aging"],{}),
 "Vitamin E Chewable":("Nutrilite","天然维生素E咀嚼片","Antioxidant E with lecithin, chewable","天然VE+卵磷脂，咀嚼型抗氧化",["aging","heart","skin"],{}),
 "Advanced Omega":("Nutrilite","深海鱼油 Omega-3","Triple-strength omega-3 for heart, brain and joints","三倍浓缩Omega-3，护心健脑",["heart","brain","skin","aging"],{}),
 "Calcium Magnesium D":("Nutrilite","钙镁D片","Bone trio: calcium, magnesium and vitamin D","钙+镁+D 骨骼铁三角",["sleep","muscle","aging"],{}),
 "Magnesium":("Nutrilite","镁片","Calm muscles and nerves, evening-friendly","放松肌肉与神经，晚间好伙伴",["sleep","muscle","heart"],{}),
 "Iron & Folic Acid":("Nutrilite","铁质叶酸片","Iron plus folic acid for healthy blood","补铁+叶酸，气血支持",["energy"],{}),
 "Plant Protein Powder":("Nutrilite","有机植物蛋白粉","21g organic tri-plant protein, smooth and creamy","21克有机三重植物蛋白，顺滑好喝",["muscle","weight","hair","energy"],{}),
 "Organics All-in-One Bars":("Nutrilite","有机全营养蛋白棒","Organic protein bar, real-food snack replacement","有机蛋白棒，健康代餐零食",["weight","muscle","energy"],{}),
 "Green Superfood":("Nutrilite","绿色超级食物粉","Organic greens powder for daily veggie gaps","有机绿色蔬菜粉，补足每日蔬菜缺口",["digestion","weight","immunity"],{}),
 "Probiotic":("Nutrilite","益生菌","6.3 billion CFU clinically studied strains for gut & immunity","63亿活菌，肠道与免疫双支持",["digestion","immunity","skin"],{}),
 "Digestive Enzyme":("Nutrilite","消化酶","Plant-sourced enzymes to ease heavy meals","植物来源消化酶，大餐救星",["digestion"],{}),
 "Begin Daily GI Primer":("Nutrilite","Begin每日肠道启动粉","6-in-1 gut drink: fermented greens, prebiotics, enzymes","六合一肠道饮：发酵绿蔬+益生元+酶",["digestion","weight","energy"],{}),
 "Sleep Gummies":("n* by Nutrilite","甜梦睡眠软糖","Melatonin-free botanical gummies for restful nights","植物配方助眠软糖，无褪黑素依赖",["sleep"],{}),
 "Go Shield":("n* by Nutrilite","免疫小卫士软糖","Elderberry immunity gummies for on-the-go","接骨木莓免疫软糖，随时防护",["immunity"],{}),
 "Twist Tubes":("Nutrilite","随身营养饮管","Twist into water: immunity, joint or antioxidant","拧入水中即饮：免疫/关节/抗氧化",["immunity","energy"],{}),
 "Hair Skin Nail":("Nutrilite","秀发亮肤美甲片","Biotin, collagen and silicon for hair, skin & nails","生物素+胶原+硅，由内养出好发好肤",["hair","skin"],{}),
 "Lean Muscle":("Nutrilite","瘦肌肉支持片","CLA support for lean muscle with training","CLA配方，训练期瘦体重支持",["muscle","weight"],{}),
 "Men's Pack":("Nutrilite","男士营养包","Daily grab-and-go pack tailored for men","男士每日随身营养包",["energy","heart"],{}),
 "Women's Pack":("Nutrilite","女士营养包","Daily grab-and-go pack tailored for women","女士每日随身营养包",["energy","skin"],{}),
 "ClearGuard Allergy":("Nutrilite","畅爽呼吸片","Seasonal comfort support for sensitive noses","换季敏感鼻舒适支持",["immunity"],{}),
 "Garlic Heart Care":("Nutrilite","大蒜精华片","Odor-controlled garlic for cardiovascular support","无味大蒜精华，心血管支持",["heart"],{}),
 "Liver Support":("Nutrilite","护肝片","Milk thistle blend for liver health","奶蓟草配方，肝脏健康支持",["digestion"],{}),
 "Memory Builder":("Nutrilite","记忆力支持片","Cistanche extract studied for memory support","管花肉苁蓉萃取，记忆力支持",["brain"],{}),
 "Prostate Health":("Nutrilite","前列腺健康片","Saw palmetto and nettle root for men 40+","锯棕榈+荨麻根，40+男士之选",["aging"],{}),
 "Vision Health":("Nutrilite","护眼片","Lutein and zeaxanthin, the pigments that filter light in the eye","叶黄素+玉米黄质，眼睛里过滤光线的色素",["eye","aging"],{}),
 "Eye Mojo Blue Light Gummies":("n* by Nutrilite","蓝光护眼软糖","Blue-light support gummies for screen-heavy days","蓝光护眼软糖，长时间看屏幕的人",["eye","brain"],{}),
 "Slimmetry":("Nutrilite","轻盈片","Green tea extract to support healthy weight efforts","绿茶萃取，健康体重管理支持",["weight"],{}),
 "XS Energy Drinks 12-pack":("XS","XS能量饮料 12罐","Zero sugar, B-vitamin energy that actually tastes good","零糖B族能量饮，好喝不腻",["energy"],{}),
 "XS Energy + Focus 60ct":("XS","XS能量专注片 60粒","Caffeine + nootropics tablet, energy without the can","咖啡因+专注配方，片剂随身带",["energy","brain"],{}),
 "XS Grass-Fed Whey Protein":("XS","XS草饲乳清蛋白","25g grass-fed whey, third-party tested","25克草饲乳清，第三方检测",["muscle"],{}),
 "XS Muscle Multiplier (EAAs)":("XS","XS必需氨基酸","9 essential amino acids for training recovery","9种必需氨基酸，训练恢复加速",["muscle"],{}),
 "XS Pre-Workout Boost":("XS","XS训练前激活粉","Clean pre-workout push without the jitters","干净爆发力，不心慌不掉线",["muscle","energy"],{}),
 "XS Post-Workout Recovery":("XS","XS训练后恢复粉","Refuel and rebuild right after training","练后即时补充，修复肌肉",["muscle"],{}),
 "XS Ignite Thermogenic Powder":("XS","XS燃动粉","Thermogenic blend to fire up active days","生热配方，燃动活力日",["weight","energy"],{}),
 "XS Protein Bars 12-pack":("XS","XS蛋白棒 12支","Protein snack bars for busy days","忙碌日子的蛋白零食",["muscle","weight"],{}),
 "XS RTD Protein Shakes 12-pack":("XS","XS即饮蛋白奶昔 12瓶","Ready-to-drink protein, zero prep","开盖即饮蛋白，省时省事",["muscle","weight"],{}),
 "XS Protein Crisps":("XS","XS蛋白脆片","High-protein crunchy snack, BBQ flavor","高蛋白脆片，解馋不长胖",["weight"],{}),
 "XS CocoWater 12-pack":("XS","XS椰子水 12罐","Coconut water hydration with electrolytes","椰子水电解质补水",["energy","muscle"],{}),
 "Perfect Empowered Drinking Water":("Perfect","完美活力水","Purified, oxygenated, pH-balanced water case","净化富氧平衡水，整箱装",["energy"],{}),
 "Artistry Hydrating Day Lotion SPF30":("Artistry","雅姿水润日霜SPF30","Lightweight day lotion for thirsty skin","轻盈日霜，干渴肌肤解渴",["skin"],{}),
 "Artistry Hydrating Eye Gel Cream":("Artistry","雅姿水润眼胶","Cooling gel cream for tired eyes","清凉眼胶，唤醒疲惫双眼",["skin","aging"],{}),
 "Artistry Hydrating System Bundle":("Artistry","雅姿水润三件套","Complete hydrating routine: cleanse, tone, moisturize","水润全套：洁面+爽肤+保湿",["skin"],{}),
 "Artistry Renewing Day Lotion SPF30":("Artistry","雅姿焕新日霜SPF30","Renewing peptide day lotion with SPF","胜肽焕新日霜+防晒",["aging","skin"],{}),
 "Artistry Renewing System Bundle":("Artistry","雅姿焕新三件套","Anti-aging renewal routine in one set","抗老焕新全套方案",["aging"],{}),
 "Artistry Firming System Bundle":("Artistry","雅姿紧致三件套","Firming routine for lift and bounce","紧致提拉全套方案",["aging"],{}),
 "Artistry Defying Serum":("Artistry","雅姿抗初老精华","Phyto-peptide serum for early aging signs","植物胜肽精华，狙击初老",["aging"],{}),
 "Artistry Labs Illuminating Serum":("Artistry Labs","雅姿实验室亮采精华","Clinical-grade brightening serum","实验室级亮白精华",["skin","aging"],{}),
 "Artistry Labs Retexturizing Serum":("Artistry Labs","雅姿实验室焕肤精华","Resurfacing serum for smoother texture","焕肤精华，细腻肤质",["skin","aging"],{}),
 "Artistry Labs Retexturizing System":("Artistry Labs","雅姿实验室焕肤仪","At-home resurfacing device system","居家焕肤仪器套装",["aging"],{}),
 "Artistry LongXevity Creams":("Artistry","雅姿长青焕颜霜","Flagship longevity cream, soft or rich texture","旗舰级长青面霜，轻润/丰润可选",["aging"],{}),
 "Artistry LongXevity Eye Cream":("Artistry","雅姿长青眼霜","Premium eye cream for deep-set lines","高端眼霜，深层细纹对策",["aging"],{}),
 "Artistry Intensive Skincare 14 Night Reset":("Artistry","雅姿14夜焕肤安瓶","14-night ampoule reset program","14夜安瓶密集焕肤",["aging","skin"],{}),
 "Artistry Everyday Skin Solution Bundle":("Artistry","雅姿每日护肤套装","Daily skin essentials in one bundle","每日护肤基础全套",["skin"],{}),
 "Artistry Signature Select Brightening Mask":("Artistry","雅姿亮采面膜","Brightening treatment mask","亮采焕白面膜",["skin"],{}),
 "Artistry Signature Select Purifying Mask":("Artistry","雅姿净澈面膜","Deep-clean purifying mask for congested skin","深层净澈，粉刺肌友好",["skin"],{}),
 "Artistry Signature Select Firming Mask":("Artistry","雅姿紧致面膜","Firming treatment mask","紧致提拉面膜",["aging"],{}),
 "Artistry Signature Select Polishing Mask":("Artistry","雅姿焕肤面膜","Gentle polishing mask for smooth glow","温和焕肤，透亮光泽",["skin"],{}),
 "Artistry Studio Spot On Dots":("Artistry Studio","雅姿痘痘贴","Blemish patches that work overnight","一夜见效痘痘贴",["skin"],{}),
 "Artistry Studio Eye Look Rested":("Artistry Studio","雅姿去浮肿眼霜","De-puff and brighten tired morning eyes","晨间去浮肿提亮眼周",["skin","aging"],{}),
 "Artistry Men Face Wash":("Artistry Men","雅姿男士洁面","Energizing face wash built for men's skin","男士专属活力洁面",["skin"],{}),
 "Glister Toothpaste":("Glister","丽齿健多效牙膏","Remineralizing multi-action toothpaste, concentrated formula","多效修护牙膏，浓缩配方",["oral"],{}),
 "Glister Power Toothbrush":("Glister","丽齿健声波电动牙刷","Sonic toothbrush with UV sanitizing base","声波电动牙刷+UV消毒座",["oral"],{}),
 "Glister Refresher Spray":("Glister","丽齿健清新喷雾","Pocket breath refresher, sugar-free","随身口气清新喷雾，无糖",["oral"],{}),
 "Glister Floss 2-pack":("Glister","丽齿健牙线 2支装","Smooth-glide floss two-pack","顺滑牙线两支装",["oral"],{}),
 "Glister Oral Rinse":("Glister","丽齿健漱口水","Alcohol-free rinse for all-day fresh mouth","无酒精漱口水，全天清新",["oral"],{}),
 "Satinique Purifying Shampoo 280ml":("Satinique","丝婷净化洗发水 280ml","Deep-clean scalp reset for oily roots","头皮深层净化，油性发质救星",["hair"],{}),
 "Satinique Purifying Shampoo 750ml":("Satinique","丝婷净化洗发水 750ml","Family-size purifying shampoo, 4-month supply","家庭装净化洗发水，可用4个月",["hair"],{}),
 "Satinique Smooth Shampoo 280ml":("Satinique","丝婷柔润洗发水 280ml","Smooth moisture for dry, frizzy hair","柔润保湿，毛躁干发变顺滑",["hair"],{}),
 "Satinique Smooth Conditioner":("Satinique","丝婷柔润护发素","Detangling conditioner for silky finish","顺滑护发素，丝滑收尾",["hair"],{}),
 "g&h Nourish Body Wash":("g&h","g&h滋养沐浴露","Honey and shea gentle daily body wash","蜂蜜乳木果温和沐浴",["skin"],{}),
 "g&h Nourish Body Lotion":("g&h","g&h滋养身体乳","24-hour moisture body lotion","24小时保湿身体乳",["skin"],{}),
 "g&h Protect Body Lotion SPF50":("g&h","g&h防晒身体乳SPF50","Broad-spectrum SPF 50 body protection","SPF50广谱身体防晒",["skin"],{}),
 "eSpring Water Purifier (Chrome)":("eSpring","益之源净水器（豪华龙头）","UV-C + carbon purification, designer faucet","UV-C紫外线+活性炭，设计师龙头款",["home"],{}),
 "eSpring Above Counter Unit":("eSpring","益之源净水器（台上型）","World's best-selling home water treatment brand","全球销量领先家用净水品牌",["home"],{}),
 "eSpring UV Replacement Filter":("eSpring","益之源UV滤芯","Annual replacement cartridge, one per year","年度更换滤芯，一年一换",["home"],{}),
 "eSpring e3 Carbon Filter":("eSpring","益之源e3碳滤芯","Carbon filter alternative cartridge","碳滤芯替换装",["home"],{}),
 "Atmosphere Sky Air Purifier":("Atmosphere","逸新空气净化器 Sky","HEPA purification for rooms up to 465 sq ft","三重滤净，适用465平方英尺",["home","immunity"],{}),
 "Atmosphere Mini Air Purifier":("Atmosphere","逸新空气净化器 Mini","Compact purifier for bedrooms up to 200 sq ft","小巧机身，卧室净化之选",["home","immunity"],{}),
 "Atmosphere Carbon Filter Replacement":("Atmosphere","逸新碳滤网替换装","Replacement carbon filter for Atmosphere units","逸新替换碳滤网",["home"],{}),
 "LOC Multi-Purpose Cleaner":("Amway Home","乐新多用途清洁剂","Concentrated 1:50 cleaner, months per bottle","1:50浓缩配方，一瓶用数月",["home"],{}),
 "LOC Multi-Purpose Wipes":("Amway Home","乐新清洁湿巾","Tough wipes for quick cleanups","强力清洁湿巾",["home"],{}),
 "SA8 Liquid Laundry":("Amway Home","SA8浓缩洗衣液","Concentrated, biodegradable, tough on stains","浓缩可降解，去渍强力",["home"],{}),
 "SA8 Powder Laundry Detergent":("Amway Home","SA8浓缩洗衣粉","Classic concentrated powder detergent","经典浓缩洗衣粉",["home"],{}),
 "Dish Drops Dishwashing Liquid":("Amway Home","碟新浓缩洗洁精","Concentrated dish liquid, gentle on hands","浓缩洗洁精，温和不伤手",["home"],{}),
 "Amway Home Prewash Spray":("Amway Home","衣物预洗喷雾","Pre-treat stains before the wash","洗前去渍喷雾",["home"],{}),
 "Amway Home Fabric Softener":("Amway Home","衣物柔顺剂","Floral-scent fabric softener","花香衣物柔顺剂",["home"],{}),
 "Amway Home All Fabric Bleach":("Amway Home","彩漂粉","Color-safe all-fabric bleach","彩色衣物安全漂白",["home"],{}),
 "Amway Home Glass Cleaner":("Amway Home","玻璃清洁剂","Streak-free glass and surface cleaner","玻璃清洁不留痕",["home"],{}),
 "Pursue Disinfectant Spray":("Amway Home","消毒除臭喷雾","Disinfect and deodorize in one spray","消毒除臭二合一",["home"],{}),
 "Amway Home Scrub Buds":("Amway Home","百洁布","Stainless scouring pads that last","耐用不锈钢百洁布",["home"],{}),
 "iCook 19-piece Cookware Set":("iCook","安利皇后锅具 19件套","316L surgical steel, vapor-seal cooking, lifetime guarantee","316L医用钢，节能无水烹调，终身保用",["home"],{}),
 "iCook 5-Piece Saute Set":("iCook","皇后锅具煎炒5件套","Most popular entry set for daily cooking","最受欢迎入门套装",["home"],{}),
 "iCook 4-Piece Saucepan Set":("iCook","皇后锅具汤锅4件套","Saucepan set for soups and sauces","炖汤煮酱汤锅套装",["home"],{}),
 "iCook 4-Piece Stock Pot":("iCook","皇后锅具深汤锅4件套","4-quart stock pot set","4夸脱深汤锅套装",["home"],{}),
 "iCook 6-Piece Dutch Oven":("iCook","皇后锅具荷兰锅6件套","8-quart Dutch oven for family meals","8夸脱家庭炖锅",["home"],{}),
 "iCook 9.5\" Nonstick Frypan":("iCook","皇后锅具不粘煎锅 9.5寸","PFAS-free nonstick with lid","无PFAS不粘煎锅带盖",["home"],{}),
 "iCook 11\" Nonstick Frypan":("iCook","皇后锅具不粘煎锅 11寸","Large PFAS-free nonstick with lid","大号无PFAS不粘煎锅",["home"],{}),
 "iCook 5-Piece Knifeware Set":("iCook","皇后刀具5件套","Precision knife set with block","精工刀具连刀座",["home"],{}),
 "iCook Multipurpose Shears":("iCook","多功能厨剪","Kitchen shears, great first iCook purchase","多功能厨房剪，入门首选",["home"],{}),
 "Begin 30 Holistic Wellness Solution":("Nutrilite","Begin 30全人健康方案","30-day gut-first wellness program: GI Primer + Protein x2 + Probiotic","30天肠道优先健康计划：肠道启动粉+蛋白粉x2+益生菌",["digestion","weight","energy"],{}),
 "Everyday Nutrition Solution":("Nutrilite","每日基础营养方案","The daily foundation: Double X + Plant Protein + Omega","每日三件套：双X+植物蛋白+鱼油",["energy","immunity"],{}),
 "Sleep + Stress Solution":("Nutrilite","睡眠减压方案","Evening wind-down stack with Sweet Dreams gummies and calming botanicals","晚间舒缓组合：睡眠软糖+舒缓植物配方",["sleep"],{}),
 "Healthy Aging Solution":("Nutrilite","健康抗龄方案","Turmeric, Cal Mag D, Garlic Heart Care and Vision Health together","姜黄+钙镁D+大蒜精华+护眼组合",["aging","heart"],{}),
 "Energy Solution":("Nutrilite","活力能量方案","Daily stack built to fight the afternoon crash","专为下午断电设计的能量组合",["energy"],{}),
 "XS Fitness Jump Start Solution":("XS","XS健身启动方案","Protein + workout support to start training right","蛋白+训练支持，开启健身计划",["muscle","energy"],{}),
}

# Areas of Support now live in Notion ("🎯 Areas of Support" DB) and are mirrored
# into scripts/areas.json by fetch-notion.js. Edit the copy in Notion, not here.
_AREAS_FILE = json.load(open("scripts/areas.json"))["areas"]
_AREAS_FILE.sort(key=lambda a: a.get("order", 999))
AREAS = [(a["id"], a["name"], a["nameZh"], a["blurb"], a["blurbZh"]) for a in _AREAS_FILE]
SENSITIVE_IDS = {a["id"] for a in _AREAS_FILE if a.get("sensitive")}


# Persona modules. Each: id, title, titleZh, icon, situation, gap (why a clean checkup
# still leaves you feeling off), path (step-by-step), products, iboOnly
SOLUTIONS = [
 ("students","Students","学生党","backpack",
  "Late nights, deadline sprints, delivery food, and a dorm where everything gets shared. Energy swings between wired and flat, skin reacts to the stress, and getting sick before finals is almost a tradition.",
  "熬夜赶due、外卖为主、宿舍里什么都一起分。精力在亢奋和断电之间摇摆，皮肤跟着压力闹脾气，考试周前生病几乎成了传统。",
  "A campus clinic visit ends with \"you\'re fine, get more sleep.\" That is accurate and useless, because nothing is diseased yet. This is the sub-health zone: reserves running down before symptoms appear.",
  "校医院看完一句「你没事，多睡觉」。这话没错但没用，因为确实还没到生病。这就是亚健康区间：储备在消耗，但症状还没出现。",
  "Start with the two things that compound fastest: a real breakfast with protein instead of pastry, and steady vitamin C so the immune system is not running on empty during exam season. Add energy support that is not a fourth coffee. Build the habit before adding anything else.",
  "先做两件复利最快的事：早餐用蛋白质替代面包，以及稳定补充维C，让考试季的免疫系统不至于空转。再加上不靠第四杯咖啡的能量支持。先把习惯做出来，再谈其他。",
  ["plant-protein-powder","vitamin-c-extended-release-60ct","xs-energy-drinks-12-pack","organics-all-in-one-bars","sleep-gummies"]),

 ("professionals","Working Professionals","职场人","laptop",
  "Nine hours at a screen, lunch at the desk, the 3pm crash, and a mind that will not switch off at 11pm. Annual physical comes back clean, yet energy, focus and sleep have all quietly declined over three years.",
  "一天九小时对着屏幕，午饭在工位解决，下午三点断电，晚上十一点大脑还停不下来。年度体检一切正常，但精力、专注和睡眠在三年里悄悄全面下滑。",
  "A physical is designed to catch disease, not to measure how well you function. Blood work in normal range and feeling genuinely good are two different questions, and only one of them gets tested.",
  "体检的设计目的是发现疾病，不是衡量你的机能状态。指标在正常范围和真正感觉很好，是两个不同的问题，而只有前者会被检测。",
  "Work in this order: stabilize energy metabolism (B vitamins, real protein at breakfast), then protect the eyes and brain that take the daily load, then rebuild the evening wind-down so sleep actually repairs. Fixing sleep last rarely works, fixing it as part of the chain does.",
  "按这个顺序：先稳住能量代谢（B族、早餐真正的蛋白质），再保护每天承压的眼睛和大脑，最后重建晚间的放松节奏让睡眠真正修复。最后才治睡眠通常无效，把它放进整条链条里才有效。",
  ["vitamin-b-complex-120ct","double-x-multivitamin-31-day-refill","advanced-omega","vision-health","magnesium","plant-protein-powder"]),

 ("family","Family & Household","家庭","home",
  "Two working parents, kids who bring home whatever is going around, aging parents you worry about, and a house full of products nobody ever read the label on. Health here is not one person, it is an environment.",
  "双职工父母、把外面流行的病带回家的孩子、让你担心的长辈，还有满屋子从没人看过成分表的日用品。家庭健康不是一个人的事，是一个环境。",
  "Doctors treat the person in front of them, one at a time. Nobody looks at the water, the air, the cookware, and the cleaning products as a system, even though those are the daily exposures the whole family shares.",
  "医生一次只处理眼前这一个人。没有人会把水、空气、锅具、清洁用品当作一个系统来看，而这些恰恰是全家每天共同暴露的因素。",
  "Reduce the daily inputs of damage first, because that benefits everyone at once: water, air, and what you cook and clean with. Then layer in nutrition for whoever needs it most. A household upgrade is one decision that covers five people.",
  "先减少每日的损伤输入，因为这一步全家同时受益：水、空气、以及用什么做饭和清洁。然后再针对最需要的人补充营养。一次家居升级，覆盖五口人。",
  ["espring-water-purifier-chrome","atmosphere-mini-air-purifier","loc-multi-purpose-cleaner","sa8-liquid-laundry","double-x-multivitamin-31-day-refill","probiotic","glister-toothpaste"]),

 ("kids","Kids & Teens","孩子与青少年","kids",
  "Picky eaters, packed schedules, screens after homework, and whatever is going around at school. Parents worry most about two things: are they getting what they need to grow, and why do they catch everything.",
  "挑食、日程排满、写完作业还要看屏幕，加上学校里流行什么就传什么。家长最担心两件事：长身体的营养够不够，以及为什么什么病都能中。",
  "Pediatric visits are built around growth curves and acute illness. Nobody sits down with a parent to look at whether the everyday diet actually covers what a growing body needs, because that is not what the appointment is for.",
  "儿科门诊的设计是看生长曲线和处理急性病。没有人会坐下来和家长一起看，日常饮食到底有没有覆盖一个正在长身体的孩子所需要的，因为门诊本来就不是干这个的。",
  "Start where kids will actually cooperate: something that tastes good and takes three seconds. Chewables and gummies win over tablets every time. Cover the basics first (fruit and vegetable gaps, immune support), then protein if meals are unreliable. Consistency beats optimization at this age.",
  "从孩子真的愿意配合的地方开始：好吃、三秒钟就能搞定。咀嚼片和软糖永远赢过药片。先补基础（蔬果缺口、免疫支持），如果三餐不规律再加蛋白质。这个年纪，坚持比精准更重要。",
  ["go-shield","eye-mojo-blue-light-gummies","sleep-gummies","twist-tubes","plant-protein-powder","glister-toothpaste","vitamin-c-extended-release-60ct"]),

 ("fitness","Fitness & Wellness Centers","健身房与养生馆","dumbbell",
  "Gyms, studios, massage and recovery spaces. Their members already buy protein, pre-workout and recovery products somewhere, usually from a shelf nobody vetted. The owner wants products that make members come back, not products that eat margin.",
  "健身房、工作室、按摩与恢复中心。他们的会员本来就在别处买蛋白粉、训练前和恢复产品，通常来自没人把关的货架。老板要的是让会员回头的产品，不是吃掉利润的产品。",
  "The supplement aisle is largely unregulated. Third-party testing, banned-substance screening and traceable sourcing are the exception, not the rule, and most members have no way to tell the difference.",
  "补剂货架基本处于弱监管状态。第三方检测、禁药筛查、可追溯原料是例外而非常态，而大多数会员根本无从分辨。",
  "Lead with the differentiator that matters to a serious trainer: tested, traceable, grass-fed sourcing. Start the conversation with a sampling pack rather than a wholesale pitch, let their members taste it, then discuss a standing arrangement.",
  "用真正打动专业教练的差异点切入：经过检测、可追溯、草饲原料。先用试用包开启对话而不是直接谈批发，让会员先尝到，再谈长期合作。",
  ["xs-grass-fed-whey-protein","xs-muscle-multiplier-eaas","xs-pre-workout-boost","xs-post-workout-recovery","xs-protein-bars-12-pack","advanced-omega","magnesium"]),

 ("gifting","Gifts & Sampling","礼盒与试用","gift",
  "Holiday gifts, new-neighbor baskets, thank-you packages, and the wellness care package that starts a conversation without asking for anything. Anything that comes in single-serve format can go in the box.",
  "节日礼物、新邻居礼篮、答谢包，以及那种不带任何要求、只为开启对话的健康关怀包。所有单份包装的产品都可以放进礼盒。",
  "A gift lands differently than a pitch. Nobody puts up a defense against a thoughtful package, and single-serve formats let someone experience a product with zero commitment and zero risk.",
  "礼物和推销的落点完全不同。没有人会对一份用心的礼包设防，而单份装让对方零承诺、零风险地体验产品。",
  "Build boxes around single-serve items: twist tubes, gummies, energy drinks, protein bars, travel-size personal care. Skip anything that only comes as a full bottle. Include a card with the product link so they can look up what they liked.",
  "用单份产品搭礼盒：随身饮管、软糖、能量饮、蛋白棒、旅行装个护。跳过只有整瓶装的产品。附一张卡片写上产品链接，让他们能查到自己喜欢的那一款。",
  ["twist-tubes","sleep-gummies","go-shield","eye-mojo-blue-light-gummies","xs-energy-drinks-12-pack","xs-protein-bars-12-pack","glister-toothpaste","glister-refresher-spray"]),
]

ROWS += products_new.rows()
E.update(products_new.enrich())

# Extra area tags layered on top of E, added when the four "hard to talk about"
# areas were introduced (constipation / eczema / rhinitis / hormone) plus kids.
# Keyed by product NAME as it appears in ROWS.
AREA_EXTRA = {
 # --- constipation: bulk (fiber), softness (magnesium/water), motility (microbiome, bile)
 "Probiotic": ["digestion"],
 "Digestive Enzyme": ["digestion"],
 "Begin Daily GI Primer": ["digestion"],
 "Magnesium": ["digestion"],
 "Green Superfood": ["digestion"],
 "Organics All-in-One Bars": ["digestion"],
 "Metabolic Pre & Postbiotic": ["digestion"],
 "Liver Support": ["digestion"],
 # --- eczema: barrier lipids, detox load, gut-skin axis, trigger removal
 "Advanced Omega": ["eczema", "rhinitis", "hormone", "eye"],  # DHA is a structural fat in the retina
 "Vitamin D": ["eczema", "rhinitis"],
 "Vitamin E Chewable": ["eczema"],
 "Concentrated Fruits & Vegetables": ["eczema", "rhinitis", "eye"],  # carotenoid families
 "g&h Nourish Body Lotion": ["eczema"],
 "g&h Nourish Body Wash": ["eczema"],
 "SA8 Liquid Laundry": ["eczema"],
 # --- rhinitis: histamine load, immune tolerance, airborne allergen removal
 "ClearGuard Allergy": ["rhinitis"],
 "Vitamin C Extended Release 180ct": ["rhinitis"],
 "Vitamin C Extended Release 60ct": ["rhinitis"],
 "Go Shield": ["rhinitis"],
 "Atmosphere Sky Air Purifier": ["rhinitis", "eczema"],
 "Atmosphere Mini Air Purifier": ["rhinitis"],
 "Atmosphere Carbon Filter Replacement": ["rhinitis"],
 # --- hormone: B6 / magnesium / calcium for PMS, iron for menstrual loss, cortisol axis
 "Women's Pack": ["hormone"],
 "Vitamin B Complex 120ct": ["hormone"],
 "Vitamin B Complex 30ct": ["hormone"],
 "Calcium Magnesium D": ["hormone"],
 "Iron & Folic Acid": ["hormone"],
 "Organics Ashwagandha Capsules": ["hormone"],
 # --- kids
 "Twist Tubes": ["kids"],
}
for _n, _extra in AREA_EXTRA.items():
    assert _n in E, _n
    _e = list(E[_n])
    _e[4] = _e[4] + [a for a in _extra if a not in _e[4]]
    E[_n] = tuple(_e)


def slug(n):
    s = re.sub(r"[^a-z0-9]+","-", n.lower()).strip("-")
    return s

# Harvested amway.com CDN images (scripts/images.json): byItem (item#) + byId (product slug)
HARVEST = json.load(open("scripts/images.json"))
IMG = {**IMG, **HARVEST.get("byItem", {})}
ID_IMG = HARVEST.get("byId", {})

products = []
for (name, item, cat, ibo, retail, pv, days, one) in ROWS:
    e = E.get(name)
    if not e:
        raise SystemExit(f"missing enrichment: {name}")
    brand, zh, tag, tagzh, areas, flags = e
    products.append({
        "id": slug(name), "item": item, "name": name, "nameZh": zh,
        "brand": brand, "cat": cat, "tagline": tag, "taglineZh": tagzh,
        "iboPrice": ibo, "retailPrice": retail, "pv": pv,
        "daysSupply": days, "oneTime": bool(one),
        "imageUrl": ID_IMG.get(slug(name)) or IMG.get(item), "areas": areas,
        "iboOnly": bool(flags.get("iboOnly")),
    })

# Areas where the symptom is commonly treated medically. These get an extra
# "talk to your doctor" line under the product grid, on top of the site footer note.
SENSITIVE = SENSITIVE_IDS   # set per-area in Notion
areas = [{"id":a,"name":n,"nameZh":z,"blurb":b,"blurbZh":bz,"sensitive":a in SENSITIVE} for a,n,z,b,bz in AREAS]
solutions = [{"id":i,"title":t,"titleZh":tz,"icon":ic,"situation":si,"situationZh":siz,"gap":g,"gapZh":gz,"path":pa,"pathZh":paz,"contents":c} for i,t,tz,ic,si,siz,g,gz,pa,paz,c in SOLUTIONS]

# areaCopy: per-product per-area copy, keyed by product ID (local mirror of Notion "Area Copy" DB)
AC_RAW = json.load(open("scripts/areacopy.json"))
name2id = {p["name"]: p["id"] for p in products}
areaCopy = {name2id[n]: v for n, v in AC_RAW.items() if n in name2id}

TILES = json.load(open("scripts/tile_images.json"))
DETAILS = json.load(open("scripts/details.json"))
# --- Protocol Map (清调补养) -----------------------------------------------
# Snapshot of the Notion Protocol Map. Products referenced by name -> resolved to ids.
try:
    PROTO = json.load(open("scripts/protocol.json"))
except FileNotFoundError:
    PROTO = {"stages": [], "areas": {}}
_byname = {p["name"]: p["id"] for p in products}
_unresolved = []
for _area, _blk in PROTO.get("areas", {}).items():
    for _row in _blk.get("rows", []):
        _ids = []
        for _n in _row.get("products", []):
            if _n in _byname:
                _ids.append(_byname[_n])
            else:
                _unresolved.append((_area, _n))
        _row["productIds"] = _ids
if _unresolved:
    raise SystemExit("Protocol Map references unknown products: %s" % _unresolved)
protocol = PROTO

data = {"lastUpdated": datetime.date.today().isoformat(), "products": products, "areas": areas, "solutions": solutions, "areaCopy": areaCopy, "tiles": TILES, "details": DETAILS, "protocol": protocol}
import os
os.makedirs("data", exist_ok=True)
json.dump(data, open("data/products.json","w"), ensure_ascii=False, indent=1)

# meta.json: enrichment keyed by notion Name, for fetch-notion.js to merge
meta = {p["name"]: {k:p[k] for k in ("id","nameZh","brand","cat","tagline","taglineZh","areas","iboOnly","imageUrl")} for p in products}
json.dump({"meta":meta,"areas":areas,"solutions":solutions}, open("scripts/meta.json","w"), ensure_ascii=False, indent=1)
print(f"OK {len(products)} products, {len(areas)} areas, {len(solutions)} solutions")
