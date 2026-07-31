# products_new.py, catalog additions found by the full amway.com sitemap audit (2026-07-29).
# 475 SKUs in the public sitemap; after removing makeup shades, fragrance, spare parts,
# agricultural products and pure flavour/size variants, these are the real gaps.
#
# Pricing convention verified against existing rows: IBO = retail * 0.90, PV ≈ retail * 0.2624.
# PV is DERIVED, not scraped, verify in Notion before quoting PV to a partner.

def rows():
    """(name, item, cat, ibo, retail, pv, days, one_time)"""
    R = []
    def add(name, item, cat, retail, days=30, one=0, pv=None, ibo=None):
        R.append((name, item, cat,
                  round(ibo if ibo is not None else retail * 0.90, 2),
                  retail,
                  round(pv if pv is not None else retail * 0.2624, 2),
                  days, one))

    # ── NUTRITION ────────────────────────────────────────────────
    add("Prebiotic Fiber",              "127444", "nutrition", 42.00, 30)
    add("Metabolic Pre & Postbiotic",   "127620", "nutrition", 40.00, 30)
    add("Stress Relief Probiotic",      "125514", "nutrition", 48.00, 30)
    add("Cycle Support",                "126161", "nutrition", 38.00, 30)
    add("Sleep Health",                 "127940", "nutrition", 29.00, 30)
    add("Joint Health",                 "104664", "nutrition", 36.00, 30)
    add("Concentrated Fruits & Vegetables", "100648", "nutrition", 46.00, 30)
    add("Immunity Defense Zinc + Holy Basil", "124692", "nutrition", 17.75, 30)
    add("Immunity Echinacea",           "A5986",  "nutrition", 39.00, 30)
    add("Heart Health CoQ10",           "A8601",  "nutrition", 20.00, 30)
    add("Carb Blocker",                 "100193", "nutrition", 37.00, 30)
    add("Wellness Bars",                "111045", "nutrition", 29.00, 12)
    add("Organics All-in-One Shakes",   "318668", "nutrition", 72.00, 14)
    add("Organics Turmeric Capsules",   "308642", "nutrition", 33.00, 30)
    add("Organics Ashwagandha Capsules","308641", "nutrition", 44.00, 30)
    add("Organics Lion's Mane Capsules","308639", "nutrition", 34.00, 30)
    # daily multis
    add("Men's Daily Multivitamin",     "125557", "nutrition", 34.00, 30)
    add("Women's Daily Multivitamin",   "125559", "nutrition", 34.00, 30)
    add("Organics Men's Daily Gummies", "125561", "nutrition", 36.00, 30)
    add("Organics Women's Daily Gummies","125562","nutrition", 36.00, 30)
    # collagen
    add("Collagen Shots",               "124936", "nutrition", 42.00, 14)
    add("Collagen Gummies",             "125545", "nutrition", 23.00, 30)
    add("Collagen Peptides",            "125553", "nutrition", 32.00, 20)
    # kids
    add("Kids Daily Chewable Multivitamin", "123043", "nutrition", 19.00, 30)
    add("Kids Toddler Immunity Drops",  "126185", "nutrition", 24.00, 30)
    add("Kids Brainiums DHA Jelly",     "305554", "nutrition", 26.00, 30)

    # ── SPORTS / XS ──────────────────────────────────────────────
    add("XS Sparkling Juiced Energy 12-pack", "126984", "sports", 37.00, 12)
    add("XS Energy + Burn 12-pack",     "127935", "sports", 42.00, 12)
    add("XS Energy + Focus 30ct",       "101593", "sports", 41.00, 30)
    add("XS CBD Cream",                 "296753", "sports", 61.00, 45)

    # ── BEAUTY ───────────────────────────────────────────────────
    add("Artistry Studio Glow Boss Cleanser + Exfoliator", "124812", "beauty", 19.75, 60)
    add("Artistry Studio Rose All Day Anti-Acne Toner",    "124813", "beauty", 19.00, 45)
    add("Artistry Studio Done with Zit",                   "125327", "beauty", 31.00, 45)
    add("Artistry Hydrating Mousse Cleanser",             "123793V", "beauty", 31.00, 60)
    add("Artistry Vitamin C + HA3 Daily Serum",           "125517V", "beauty", 58.00, 60)
    add("Artistry Multi-Defense UV Protect SPF50",         "124823", "beauty", 59.00, 60)
    add("Artistry Sleeping Mask",       "125575", "beauty", 58.00, 60)
    add("Artistry Signature Select Hydrating Mask", "122343V", "beauty", 42.00, 30)
    add("Artistry Correcting Serum",    "127020V","beauty", 100.00, 60)
    add("Artistry Labs Illuminating Serum", "126220V", "beauty", 110.00, 60)
    add("Artistry LongXevity Rich Cream",   "127571V", "beauty", 365.00, 60)
    add("Artistry LongXevity Soft Cream",   "127572V", "beauty", 365.00, 60)
    add("Artistry LongXevity Eye Cream",    "127573V", "beauty", 205.00, 90)
    add("Artistry Men Post Shave Toner",    "111227V", "beauty", 39.00, 60)
    add("Artistry Men Facial Moisturizer",  "111228V", "beauty", 50.00, 60)

    # ── PERSONAL CARE ────────────────────────────────────────────
    add("Satinique Intensive Repair Shampoo",    "126452", "care", 16.00, 45)
    add("Satinique Intensive Repair Conditioner","126454", "care", 16.00, 45)
    add("Satinique Anti-Hair Fall Shampoo",      "126457", "care", 16.00, 45)
    add("Satinique Anti-Hair Fall Conditioner",  "126459", "care", 16.00, 45)
    add("Satinique Anti-Hair Fall Scalp Tonic",  "126466", "care", 30.00, 60)
    add("Satinique Anti-Dandruff Shampoo",       "126463", "care", 15.00, 45)
    add("Satinique Purifying Conditioner",       "126462", "care", 15.00, 45)
    add("Satinique Smooth Moisture Conditioner 750ml", "126634", "care", 28.00, 120)
    add("g&h Refresh Exfoliating Body Wash",     "125892", "care", 14.50, 45)
    add("g&h Protect Hand Soap",                 "125894", "care", 9.50, 45)
    add("g&h Protect Hand Sanitizer",            "126855", "care", 13.00, 45)
    add("g&h Protect Deodorant",                 "127877", "care", 10.75, 60)
    add("g&h Baby Wash & Shampoo",               "126308", "care", 15.50, 45)
    add("g&h Baby Lotion",                       "126309", "care", 15.50, 45)
    add("Glister Power Toothbrush Refill",       "127706", "care", 36.00, 180)

    # ── HOME ─────────────────────────────────────────────────────
    add("Amway Home Kitchen Cleaner",   "112536", "home", 17.00, 90)
    add("Amway Home Bathroom Cleaner",  "112546", "home", 17.00, 90)
    add("Amway Home Automatic Dish Tablets", "109867", "home", 26.00, 60)
    add("eSpring Pre-Filter",           "127063", "home", 15.00, None, 1)

    # ── SOLUTIONS ────────────────────────────────────────────────
    add("Walking to Bronze Bundle",     "321111", "solutions", 219.00, 30)
    return R


def enrich():
    """name -> (brand, nameZh, tagline, taglineZh, areas, flags)"""
    return {
 # nutrition
 "Prebiotic Fiber":("Nutrilite","益生元纤维粉","Feeds the bacteria you already have","喂养你已经有的那些菌",["digestion","skin","weight"],{}),
 "Metabolic Pre & Postbiotic":("Nutrilite","代谢益生元后生元","Pre + postbiotic pairing for metabolic support","益生元+后生元组合，代谢支持",["weight","digestion"],{}),
 "Stress Relief Probiotic":("Nutrilite","舒压益生菌","Probiotic strains studied for the gut-brain axis","针对肠脑轴研究的益生菌株",["sleep","digestion","brain"],{}),
 "Cycle Support":("Nutrilite","女性周期支持","Chasteberry blend for monthly cycle comfort","圣洁莓配方，月经周期舒适支持",["hormone","skin"],{}),
 "Sleep Health":("Nutrilite","安睡片","Botanical sleep support, melatonin-free","植物助眠配方，不含褪黑素",["sleep"],{}),
 "Joint Health":("Nutrilite","关节灵","Glucosamine and collagen for joint comfort","氨糖+胶原，关节舒适支持",["muscle","aging"],{}),
 "Concentrated Fruits & Vegetables":("Nutrilite","浓缩果蔬精华","Phytonutrients from 5 colour groups of plants","五色植物营养素浓缩",["immunity","aging","skin"],{}),
 "Immunity Defense Zinc + Holy Basil":("Nutrilite","锌+圣罗勒免疫片","Zinc plus holy basil for seasonal defense","锌与圣罗勒，换季防护",["immunity","rhinitis"],{}),
 "Immunity Echinacea":("Nutrilite","紫锥菊免疫片","Echinacea, the most-studied immune botanical","紫锥菊，研究最充分的免疫植物",["immunity","rhinitis"],{}),
 "Heart Health CoQ10":("Nutrilite","辅酶Q10","CoQ10 for cellular energy in heart muscle","辅酶Q10，心肌细胞能量",["heart","energy"],{}),
 "Carb Blocker":("Nutrilite","阻碳片","White kidney bean extract for starch-heavy meals","白芸豆萃取，应对高淀粉餐",["weight"],{}),
 "Wellness Bars":("Nutrilite","全谷营养棒","Whole-food bar, not a candy bar with protein","真食物营养棒，不是加了蛋白的糖果",["weight","energy"],{}),
 "Organics All-in-One Shakes":("Nutrilite","有机全能奶昔","Meal-replacement shake with protein and greens","代餐奶昔，蛋白与绿蔬合一",["weight","energy"],{}),
 "Organics Turmeric Capsules":("Nutrilite","有机姜黄胶囊","Turmeric for inflammatory balance","姜黄，炎症平衡支持",["aging","muscle","skin","eczema"],{}),
 "Organics Ashwagandha Capsules":("Nutrilite","有机南非醉茄胶囊","Adaptogen studied for stress resilience","适应原草本，压力韧性研究支持",["sleep","brain"],{}),
 "Organics Lion's Mane Capsules":("Nutrilite","有机猴头菇胶囊","Mushroom extract studied for cognitive support","猴头菇萃取，认知支持研究",["brain"],{}),
 "Men's Daily Multivitamin":("Nutrilite","男士每日综合营养片","One tablet daily, men's nutrient profile","每日一片，男性营养配比",["energy","heart"],{}),
 "Women's Daily Multivitamin":("Nutrilite","女士每日综合营养片","One tablet daily, women's nutrient profile","每日一片，女性营养配比",["energy","hormone"],{}),
 "Organics Men's Daily Gummies":("Nutrilite","有机男士每日软糖","Multivitamin in a gummy for people who skip tablets","软糖型综合营养，给吞不下药片的人",["energy"],{}),
 "Organics Women's Daily Gummies":("Nutrilite","有机女士每日软糖","Multivitamin in a gummy, women's profile","软糖型综合营养，女性配比",["energy","hormone"],{}),
 "Collagen Shots":("n* by Nutrilite","胶原蛋白饮","Ready-to-drink collagen peptides","即饮型胶原蛋白肽",["skin","aging"],{}),
 "Collagen Gummies":("n* by Nutrilite","胶原蛋白软糖","Collagen in the format people actually finish","软糖型胶原，真的吃得完的形态",["skin","aging","hair"],{}),
 "Collagen Peptides":("n* by Nutrilite","胶原蛋白肽粉","Unflavoured peptides to stir into anything","无味肽粉，加进任何饮品",["skin","aging","hair"],{}),
 "Kids Daily Chewable Multivitamin":("Nutrilite","儿童咀嚼综合营养片","Chewable multi kids will actually take","孩子真的愿意吃的咀嚼片",["kids","immunity"],{}),
 "Kids Toddler Immunity Drops":("Nutrilite","幼儿免疫滴剂","Liquid drops for toddlers who cannot chew","滴剂型，给还不会咀嚼的幼儿",["kids","immunity"],{}),
 "Kids Brainiums DHA Jelly":("Nutrilite","儿童DHA果冻","DHA in a jelly, for developing brains","果冻型DHA，支持大脑发育",["kids","brain"],{}),
 # sports
 "XS Sparkling Juiced Energy 12-pack":("XS","XS气泡果汁能量饮","Sparkling juice energy, zero sugar","气泡果汁能量饮，零糖",["energy"],{}),
 "XS Energy + Burn 12-pack":("XS","XS燃动能量饮","Energy drink with a thermogenic blend","能量饮加生热配方",["energy","weight"],{}),
 "XS Energy + Focus 30ct":("XS","XS能量专注片 30粒","Trial-size focus tablets","专注片小包装，先试一个月",["energy","brain"],{}),
 "XS CBD Cream":("XS","XS舒缓膏","Topical cream for post-training soreness","外用舒缓膏，训练后酸痛",["muscle"],{}),
 # beauty
 "Artistry Studio Glow Boss Cleanser + Exfoliator":("Artistry Studio","雅姿净透洁面磨砂二合一","Cleanser and exfoliator in one step","洁面与去角质一步完成",["skin"],{}),
 "Artistry Studio Rose All Day Anti-Acne Toner":("Artistry Studio","雅姿玫瑰控痘爽肤水","Salicylic toner for the whole face, not just spots","水杨酸爽肤水，管全脸不只是一颗",["skin"],{}),
 "Artistry Studio Done with Zit":("Artistry Studio","雅姿祛痘凝胶","Salicylic acid spot treatment","水杨酸点涂祛痘",["skin"],{}),
 "Artistry Hydrating Mousse Cleanser":("Artistry","雅姿保湿慕斯洁面","Mousse cleanser that does not strip the barrier","不剥脱屏障的慕斯洁面",["skin","eczema","aging"],{}),
 "Artistry Vitamin C + HA3 Daily Serum":("Artistry","雅姿维C+三重玻尿酸精华","Topical vitamin C with three hyaluronic acid weights","外用维C配三种分子量玻尿酸",["skin","aging"],{}),
 "Artistry Multi-Defense UV Protect SPF50":("Artistry","雅姿多重防护SPF50","SPF 50 that layers under makeup","SPF50，可以上妆前用",["skin","aging"],{}),
 "Artistry Sleeping Mask":("Artistry","雅姿睡眠面膜","Overnight mask, no rinsing","免洗过夜面膜",["skin","aging"],{}),
 "Artistry Signature Select Hydrating Mask":("Artistry","雅姿水润面膜","Hydrating treatment mask","水润护理面膜",["skin"],{}),
 "Artistry Correcting Serum":("Artistry","雅姿修正精华","Targets uneven tone and post-blemish marks","针对肤色不均与痘后印记",["skin","aging"],{}),
 "Artistry Labs Illuminating Serum":("Artistry Labs","雅姿实验室亮采精华","Clinical-grade brightening serum","实验室级亮白精华",["skin","aging"],{}),
 "Artistry LongXevity Rich Cream":("Artistry","雅姿长青丰润霜","Flagship longevity cream, rich texture","旗舰长青面霜，丰润质地",["aging"],{}),
 "Artistry LongXevity Soft Cream":("Artistry","雅姿长青轻润霜","Flagship longevity cream, lighter texture","旗舰长青面霜，轻润质地",["aging"],{}),
 "Artistry LongXevity Eye Cream":("Artistry","雅姿长青眼霜","Premium eye cream for deep-set lines","高端眼霜，深层细纹",["aging"],{}),
 "Artistry Men Post Shave Toner":("Artistry Men","雅姿男士须后水","Calms skin after shaving","剃须后镇静",["skin"],{}),
 "Artistry Men Facial Moisturizer":("Artistry Men","雅姿男士保湿乳","Lightweight moisturiser built for men's skin","男士专属轻盈保湿",["skin"],{}),
 # care
 "Satinique Intensive Repair Shampoo":("Satinique","丝婷密集修护洗发水","For chemically treated or heat-damaged hair","染烫或热损伤发质",["hair"],{}),
 "Satinique Intensive Repair Conditioner":("Satinique","丝婷密集修护护发素","Matching conditioner for damaged hair","配套护发素，受损发质",["hair"],{}),
 "Satinique Anti-Hair Fall Shampoo":("Satinique","丝婷防脱洗发水","Formulated to reduce breakage-related fall","减少断裂性脱发",["hair"],{}),
 "Satinique Anti-Hair Fall Conditioner":("Satinique","丝婷防脱护发素","Matching conditioner, strand strength focus","配套护发素，强韧发丝",["hair"],{}),
 "Satinique Anti-Hair Fall Scalp Tonic":("Satinique","丝婷防脱头皮精华","Leave-in tonic applied to the scalp, not the hair","免洗头皮精华，用在头皮不是发丝",["hair"],{}),
 "Satinique Anti-Dandruff Shampoo":("Satinique","丝婷去屑洗发水","For flaking and itchy scalp","头屑与头皮痒",["hair","eczema"],{}),
 "Satinique Purifying Conditioner":("Satinique","丝婷净化护发素","Conditions lengths without weighing roots down","护发丝不压塌发根",["hair"],{}),
 "Satinique Smooth Moisture Conditioner 750ml":("Satinique","丝婷柔润护发素 750ml","Family-size smoothing conditioner","家庭装柔润护发素",["hair"],{}),
 "g&h Refresh Exfoliating Body Wash":("g&h","g&h清爽磨砂沐浴露","Body exfoliation for rough or bumpy skin","身体去角质，粗糙或鸡皮肤",["skin"],{}),
 "g&h Protect Hand Soap":("g&h","g&h洗手液","Everyday hand soap that does not strip","日常洗手，不干燥",["immunity","home"],{}),
 "g&h Protect Hand Sanitizer":("g&h","g&h免洗洗手液","Portable sanitiser for travel and school","随身免洗，出行与校园",["immunity","kids"],{}),
 "g&h Protect Deodorant":("g&h","g&h止汗走珠","Roll-on antiperspirant deodorant","走珠式止汗除臭",["skin"],{}),
 "g&h Baby Wash & Shampoo":("g&h","g&h婴儿洗发沐浴二合一","Tear-free two-in-one for babies","婴儿无泪洗发沐浴二合一",["kids","skin"],{}),
 "g&h Baby Lotion":("g&h","g&h婴儿润肤乳","Gentle lotion for baby skin","温和婴儿润肤乳",["kids","skin","eczema"],{}),
 "Glister Power Toothbrush Refill":("Glister","丽齿健电动牙刷刷头","Replacement heads, change every 3 months","替换刷头，每3个月一换",["oral"],{}),
 # home
 "Amway Home Kitchen Cleaner":("Amway Home","厨房清洁剂","Cuts kitchen grease without harsh residue","去厨房油污，无刺激残留",["home"],{}),
 "Amway Home Bathroom Cleaner":("Amway Home","浴室清洁剂","For soap scum and hard-water marks","皂垢与水垢",["home"],{}),
 "Amway Home Automatic Dish Tablets":("Amway Home","洗碗机洗涤块","Dishwasher tablets, no pre-rinse needed","洗碗机专用块，无需预冲",["home"],{}),
 "eSpring Pre-Filter":("eSpring","益之源前置滤芯","Pre-filter that extends main cartridge life","前置滤芯，延长主滤芯寿命",["home"],{}),
 "Walking to Bronze Bundle":("Nutrilite","Bronze起步套装","IBO starter bundle aligned to the first milestone","IBO起步套装，对齐首个里程碑",["energy"],{"iboOnly":True}),
}
