# details_gen.py — writes scripts/details.json (modal content for every product).
# Structure: { productId: {advantage, advantageZh, who, whoZh} }
# Rules followed: supportive language only (supports / helps / associated with),
# no disease claims, no numbers that aren't on the label.
import json, re

D = {
# ── NUTRITION: foundation ───────────────────────────────────────────
"double-x-multivitamin-31-day-refill": (
 "22 vitamins and minerals plus 22 plant concentrates in one strip, morning and evening. It is the flagship because it covers the widest range of everyday gaps at once instead of asking you to stack five bottles.",
 "22种维生素矿物质+22种植物浓缩，一条搞定早晚两次。它是旗舰产品，因为它一次覆盖最广泛的日常营养缺口，不用你叠五瓶。",
 "Anyone who eats irregularly and wants one comprehensive daily habit. The 31-day refill is the standard month; the 10-day pack is for trying it first.",
 "吃饭不规律、想要一个全面日常习惯的人。31天装是标准月用量，10天装适合先试试看。"),
"double-x-multivitamin-10-day": (
 "The same flagship formula as the 31-day refill, in a 10-day size. Low-commitment way to feel the difference before switching to a monthly habit.",
 "与31天装同样的旗舰配方，10天体验装。在转为每月习惯之前，用最低门槛先感受差别。",
 "First-timers who want to try Double X without committing to a full month, and anyone traveling short-term.",
 "想先试试双X、不愿一次买一个月的人，以及短期出行的人。"),
"vitamin-c-extended-release-180ct": (
 "Vitamin C is water-soluble, so the body cannot store it and flushes the excess. The 8-hour extended release keeps levels steadier through the day, and the acerola cherry concentrate comes from Nutrilite's own farms.",
 "维生素C是水溶性的，身体无法储存，多余的会排出。8小时缓释让全天浓度更平稳，针叶樱桃浓缩来自Nutrilite自有农场。",
 "The 180-count is the everyday size for people who want steady coverage year-round rather than only during cold season.",
 "180粒装是日常规格，适合想全年稳定补充、而不只在换季时才吃的人。"),
"vitamin-c-extended-release-60ct": (
 "Same 8-hour extended-release formula in a smaller bottle. Easiest entry point into the Nutrilite line.",
 "同样的8小时缓释配方，小瓶装。是进入Nutrilite产品线最容易的入口。",
 "First-time customers, gift boxes, or anyone who wants to try before moving to the 180-count.",
 "首次购买的客户、礼盒搭配，或想先试用再换180粒装的人。"),
"vitamin-b-complex-120ct": (
 "B vitamins act as coenzymes in energy metabolism, and the body uses them up faster under stress and high-carb diets. Dual-action pairs a quick-release and a slow-release layer so coverage lasts through the day.",
 "B族维生素是能量代谢的辅酶，压力大和高碳水饮食会消耗得更快。双效配方结合速释层与缓释层，让覆盖持续一整天。",
 "The 120-count runs four months, which makes it one of the lowest daily costs in the whole line. Good for anyone with afternoon energy dips.",
 "120粒可用四个月，是整条产品线里日均成本最低的之一。适合下午容易没精神的人。"),
"vitamin-b-complex-30ct": (
 "The same dual-action B formula in a one-month bottle.",
 "同样的双效B族配方，一个月装。",
 "Trial size, travel, or adding B vitamins to a stack without a four-month commitment.",
 "试用、出行，或想在组合里加B族但不想一次买四个月的人。"),
"vitamin-d": (
 "Vitamin D is made in the skin from sunlight, which is exactly what indoor work and daily sunscreen reduce. It supports bone health and normal immune function.",
 "维生素D靠皮肤在阳光下合成，而室内工作和每天防晒恰恰减少了这个过程。它支持骨骼健康和正常免疫功能。",
 "Office workers, people in low-sunlight seasons, and anyone who wears sunscreen daily.",
 "办公室人群、日照少的季节，以及每天涂防晒的人。"),
"vitamin-e-chewable": (
 "Vitamin E is fat-soluble and sits inside cell membranes, where it helps protect against oxidative stress. The chewable format with lecithin makes it easier to take consistently than a large softgel.",
 "维生素E是脂溶性的，驻守在细胞膜内，帮助抵御氧化压力。含卵磷脂的咀嚼型比大颗软胶囊更容易长期坚持。",
 "Adults building a long-term antioxidant base, usually alongside vitamin C and omega-3.",
 "在搭建长期抗氧化基础的成年人，通常与维C和鱼油搭配。"),
"advanced-omega": (
 "Concentrated EPA and DHA from fish oil, in a smaller softgel than most triple-strength products. Omega-3 is one of the few nutrients almost impossible to get enough of without eating fatty fish several times a week.",
 "浓缩鱼油EPA与DHA，软胶囊比多数三倍浓缩产品更小颗。Omega-3是极少数不靠每周吃几次深海鱼就几乎无法摄入足量的营养素之一。",
 "Anyone who rarely eats salmon or sardines. Commonly paired with brain, skin and heart goals.",
 "很少吃三文鱼或沙丁鱼的人。常与大脑、皮肤、心血管目标搭配。"),
"calcium-magnesium-d": (
 "Calcium, magnesium and vitamin D work together rather than separately: D supports calcium absorption and magnesium supports how it is used. Taking one without the others is the common mistake.",
 "钙、镁、维生素D是协同作用而非各自为战：D支持钙的吸收，镁支持钙的利用。只补其中一个是常见误区。",
 "Bone health, evening muscle tension, and anyone told to take calcium who is only taking calcium.",
 "关注骨骼健康、晚间肌肉紧绷的人，以及被建议补钙但只补了钙的人。"),
"magnesium": (
 "Magnesium is involved in hundreds of enzyme reactions, including muscle relaxation and nervous system regulation, and it is depleted faster under sustained stress.",
 "镁参与数百种酶反应，包括肌肉放松和神经系统调节，而持续压力会加快它的消耗。",
 "Evening routines, muscle tightness, and people who feel physically tired but mentally wired at bedtime.",
 "晚间routine、肌肉紧绷，以及睡前身体累但大脑停不下来的人。"),
"iron-folic-acid": (
 "Iron carries oxygen in the blood and folic acid supports normal red blood cell formation. The two are paired because they work on the same process.",
 "铁负责血液运输氧气，叶酸支持正常红细胞生成。两者搭配是因为它们作用于同一个过程。",
 "Women with heavy cycles, vegetarians, and anyone whose tiredness comes with pale skin or breathlessness on stairs. Do not supplement iron long-term without knowing your levels.",
 "经量偏多的女性、素食者，以及疲劳同时伴随面色苍白或爬楼气喘的人。不清楚自身铁水平时不建议长期补铁。"),
"plant-protein-powder": (
 "21g of protein from three organic plant sources (pea, brown rice, chia) so the amino acid profile is complete without dairy. Certified organic farms, and it mixes smooth rather than chalky.",
 "21克蛋白来自三种有机植物来源（豌豆、糙米、奇亚籽），氨基酸谱完整且不含乳制品。有机认证农场，冲调顺滑不粉。",
 "The single most useful product for people who skip breakfast or eat carb-only mornings. Also the go-to for anyone who bloats on whey.",
 "对不吃早餐或早餐纯碳水的人来说，这是最有用的一个产品。喝乳清胀气的人也首选它。"),
"organics-all-in-one-bars": (
 "A real-food protein bar from organic ingredients, built to replace the vending-machine snack rather than to be a dessert.",
 "有机原料的真食物蛋白棒，定位是替代自动贩卖机零食，而不是当甜点。",
 "Busy afternoons, gym bags, and anyone whose 3pm snack is currently a pastry.",
 "忙碌的下午、健身包里，以及现在下午三点靠面包续命的人。"),
"green-superfood": (
 "Concentrated organic greens for the days vegetables do not happen. Not a replacement for eating vegetables, a bridge for the days you did not.",
 "浓缩有机绿蔬，用于没吃上蔬菜的日子。它不替代吃蔬菜，只是没吃到那天的过渡。",
 "People who know their vegetable intake is low and want a realistic fallback rather than a guilt trip.",
 "知道自己蔬菜吃得少、想要一个现实的补救方案而不是自责的人。"),
"probiotic": (
 "Clinically studied strains at a meaningful CFU count, in packaging that does not require refrigeration. Most of the immune system lines the gut, which is why this shows up in immunity, skin and digestion conversations alike.",
 "临床研究菌株，活菌数达到有意义的水平，包装无需冷藏。人体大部分免疫组织分布在肠道，这就是为什么它在免疫、皮肤、消化三类话题里都会出现。",
 "Recurring digestive irregularity, after antibiotics, or as the foundation piece in a gut-first plan.",
 "消化反复不规律、用过抗生素之后，或作为肠道优先方案的基础产品。"),
"digestive-enzyme": (
 "Plant-sourced enzymes that help break down protein, fat, carbohydrate and fiber. Different from a probiotic: enzymes work on the meal, probiotics work on the microbiome.",
 "植物来源的酶，帮助分解蛋白质、脂肪、碳水和纤维。与益生菌不同：酶作用于这一餐，益生菌作用于菌群。",
 "Heavy meals, eating out often, or that uncomfortable fullness after a big dinner.",
 "大餐、经常外食，或晚饭吃多后那种撑得难受的感觉。"),
"begin-daily-gi-primer": (
 "A 6-in-1 gut drink combining fermented greens, prebiotics, fiber, digestive enzymes, alkaline spices and postbiotics. It is the centerpiece of Amway's official Begin 30 program.",
 "六合一肠道饮，结合发酵绿蔬、益生元、纤维、消化酶、碱性香料和后生元。它是安利官方Begin 30计划的核心。",
 "People starting a structured gut reset rather than adding one more supplement to an existing pile.",
 "想开始一个结构化肠道重启的人，而不是在现有一堆补充剂上再加一个。"),
"sleep-gummies": (
 "Botanical calming ingredients rather than a melatonin dose, so it supports the natural wind-down instead of overriding it. No next-morning grogginess pattern.",
 "植物舒缓成分而非褪黑素剂量，支持自然的入睡过程而不是强行覆盖它。不会有第二天昏沉的问题。",
 "Racing-mind bedtimes, and people who tried melatonin and disliked how it made them feel the next day.",
 "睡前思绪停不下来的人，以及试过褪黑素但不喜欢第二天感觉的人。"),
"go-shield": (
 "Elderberry and vitamin C in a gummy, which matters mainly because a gummy actually gets taken. Compliance beats formulation when nobody swallows the tablet.",
 "接骨木莓+维C软糖，关键在于软糖是真的会被吃掉。当没人愿意吞药片时，坚持比配方更重要。",
 "Kids, teens, travel season, and adults who genuinely will not take capsules.",
 "孩子、青少年、出行季节，以及真的咽不下胶囊的成年人。"),
"twist-tubes": (
 "Twist the cap, shake into water, drink. Single-serve immunity support with no measuring and nothing to carry back.",
 "拧一下瓶盖，摇进水里，喝掉。单份免疫支持，不用量勺，也没有东西要带回去。",
 "Travel, office drawers, gym bags, and the easiest single item to put in a sampling or gift box.",
 "出行、办公室抽屉、健身包，也是放进试用装或礼盒里最方便的单品。"),
"hair-skin-nail": (
 "Biotin, collagen and silicon target the three keratin-based tissues together, because hair, skin and nails are built from the same raw materials.",
 "生物素、胶原和硅同时作用于三种角蛋白组织，因为头发、皮肤和指甲由同样的原料构成。",
 "Thinning or brittle hair and nails, especially after a stressful period or a restrictive diet.",
 "头发指甲变细变脆的人，尤其在高压期或节食之后。"),
"lean-muscle": (
 "CLA-based support intended to be paired with actual resistance training. It supports body composition efforts; it does not replace them.",
 "以CLA为基础的支持，需要配合真正的力量训练使用。它支持体成分管理，但不能替代训练。",
 "People already training consistently who want support on the body-composition side.",
 "已经在规律训练、想在体成分方面获得支持的人。"),
"men-s-pack": (
 "A daily grab-and-go sachet combining the core multivitamin base with nutrients relevant to men. Removes the daily decision of which bottles to open.",
 "每日随身独立包装，结合核心综合营养基础与男性相关营养素。省去每天要开哪几瓶的决定。",
 "Men who want the foundation covered without managing a shelf of bottles.",
 "想把基础营养补齐、又不想管理一排瓶子的男性。"),
"women-s-pack": (
 "A daily sachet combining the multivitamin base with nutrients relevant to women, including iron and calcium support.",
 "每日独立包装，结合综合营养基础与女性相关营养素，包含铁和钙的支持。",
 "Women who want a single daily habit instead of four separate bottles.",
 "想用一个每日习惯代替四个瓶子的女性。"),
"clearguard-allergy": (
 "A botanical blend for seasonal respiratory comfort. Supportive rather than symptom-blocking, so it works best started before the season, not during the worst week.",
 "植物复方，用于换季呼吸道舒适。它是支持型而非阻断症状型，所以最好在换季前开始，而不是最难受那周才吃。",
 "People with predictable seasonal sensitivity who plan ahead.",
 "换季敏感有规律、愿意提前准备的人。"),
"garlic-heart-care": (
 "Standardized garlic concentrate with the odor controlled, so it is realistic to take daily. Cardiovascular support is a decades-long maintenance job, which makes daily consistency the whole point.",
 "标准化大蒜浓缩，控味处理，所以每天吃是现实的。心血管保养是几十年的功课，因此每天坚持才是关键。",
 "Adults building long-term cardiovascular habits, often alongside omega-3.",
 "在建立长期心血管保养习惯的成年人，常与鱼油搭配。"),
"liver-support": (
 "Milk thistle and botanical extracts supporting normal liver function. The liver handles everything you drink, eat and breathe, and it rarely complains until late.",
 "奶蓟草与植物萃取，支持正常肝功能。肝脏处理你喝的、吃的、呼吸的一切，而且往往到很晚才发出信号。",
 "People with frequent social drinking, heavy takeout diets, or high medication load. Not a substitute for medical care.",
 "经常应酬饮酒、外卖为主，或用药较多的人。不能替代就医。"),
"memory-builder": (
 "Cistanche extract, studied specifically for memory support, which is a narrower and better-evidenced claim than general brain blends.",
 "管花肉苁蓉萃取，针对记忆力支持有专门研究，比泛泛的健脑复方更聚焦、证据更明确。",
 "Adults noticing more word-finding pauses, and people with family history who want to act early.",
 "开始注意到话到嘴边想不起来的成年人，以及有家族史、想早点行动的人。"),
"prostate-health": (
 "Saw palmetto and nettle root, the two most studied botanicals for men's prostate health.",
 "锯棕榈与荨麻根，男性前列腺健康研究最充分的两种植物成分。",
 "Men 40 and over, particularly those getting up at night.",
 "40岁以上男性，尤其是夜里起夜的人。",),
"slimmetry": (
 "Green tea extract standardized for EGCG, designed to support a weight-management effort that already includes diet and movement.",
 "标准化EGCG的绿茶萃取，用于支持已经包含饮食和运动的体重管理计划。",
 "People actively working on weight who want support at the margin. It does not work as a standalone.",
 "正在认真管理体重、想要边际助力的人。单独使用无效。"),
"vision-health": (
 "Lutein and zeaxanthin are the pigments concentrated in the macula that filter high-energy light, and the body cannot make them. They have to come from diet or supplement.",
 "叶黄素和玉米黄质是黄斑区的色素，负责过滤高能光线，而人体无法自行合成，只能从饮食或补充剂获得。",
 "Anyone on screens all day or driving at night. This is a screen-generation product, not just an older-adult one.",
 "整天对着屏幕或夜间开车的人。这是屏幕世代的产品，不只是给长辈的。"),
"eye-mojo-blue-light-gummies": (
 "Eye support in a gummy, aimed squarely at screen time. Easier to keep on a desk than a bottle of capsules.",
 "软糖形态的护眼支持，直接针对屏幕时间。放在办公桌上比一瓶胶囊更容易坚持。",
 "Students, gamers, and desk workers who will actually eat a gummy at 3pm but never open a bottle.",
 "学生、游戏玩家、办公族 —— 下午三点会吃颗软糖，但永远不会打开一个瓶子。"),

# ── XS / SPORTS ──────────────────────────────────────────────────
"xs-energy-drinks-12-pack": (
 "Zero sugar, B-vitamin based energy rather than a sugar spike, and it actually tastes good enough to repeat. The 12-pack is the format that gets shared.",
 "零糖，靠B族提供能量而不是糖分冲击，而且好喝到愿意回购。12罐装是最容易被分享的规格。",
 "The easiest first purchase for students and young professionals, and the fastest-moving item in a dorm or office.",
 "学生和职场新人最容易的第一单，也是宿舍或办公室里走得最快的产品。"),
"xs-energy-focus-60ct": (
 "Caffeine plus focus ingredients in a tablet, so you get the effect without carrying a can or drinking 12 oz of liquid.",
 "咖啡因+专注成分的片剂，不用带罐子也不用喝下12盎司液体就能起效。",
 "Exam weeks, long drives, and anyone who wants the energy without the volume.",
 "考试周、长途开车，以及想要能量但不想喝那么多液体的人。"),
"xs-grass-fed-whey-protein": (
 "Grass-fed whey, third-party tested for banned substances. In a category where testing is the exception rather than the rule, that is the actual differentiator worth leading with.",
 "草饲乳清，第三方禁药检测。在一个检测属于例外而非常态的品类里，这才是真正值得先讲的差异点。",
 "Serious trainers and competitive athletes who need to know what is in the tub. Also the opening product for any gym conversation.",
 "认真训练的人和需要清楚成分的竞技运动员。也是所有健身房洽谈的开场产品。"),
"xs-muscle-multiplier-eaas": (
 "Nine essential amino acids, the ones the body cannot synthesize. Useful intra- or post-workout when a full protein shake is too heavy.",
 "9种必需氨基酸，即身体无法自行合成的那些。训练中或训练后，全份蛋白粉太沉时很实用。",
 "Lifters in a cut, fasted trainers, and anyone who trains before eating.",
 "减脂期的训练者、空腹训练者，以及练完才吃饭的人。"),
"xs-pre-workout-boost": (
 "Pre-workout push without the jittery crash profile of high-stimulant products.",
 "训练前激活，没有高刺激产品那种心慌和随后的崩溃感。",
 "Early-morning or after-work training when motivation is the limiting factor.",
 "清晨或下班后训练、动力才是瓶颈的时候。"),
"xs-post-workout-recovery": (
 "Recovery formula for the window right after training, when muscle is most receptive to nutrients.",
 "训练后恢复配方，用在肌肉对营养最敏感的那个窗口。",
 "People training four or more times a week who feel the accumulation.",
 "每周训练四次以上、能感觉到疲劳累积的人。"),
"xs-ignite-thermogenic-powder": (
 "A thermogenic blend for people already in a structured training and nutrition plan.",
 "生热配方，适合已经有结构化训练和饮食计划的人。",
 "Active people in a defined cutting phase. Not a starting point for someone new.",
 "处在明确减脂期的运动人群。不适合作为新手的起点。"),
"xs-protein-bars-12-pack": (
 "Protein bars that are a snack replacement rather than a candy bar with protein added.",
 "定位是零食替代的蛋白棒，而不是加了蛋白质的糖果棒。",
 "Gym bags, desk drawers, and long days when the alternative is skipping food entirely.",
 "健身包、办公抽屉，以及那种不吃就等于不吃的漫长一天。"),
"xs-rtd-protein-shakes-12-pack": (
 "Ready to drink, zero preparation. The format that survives contact with a real schedule.",
 "开盖即饮，零准备。这是能在真实日程里活下来的形态。",
 "Morning commutes and post-gym, for people who will not wash a shaker bottle.",
 "通勤路上和练完之后，适合不愿意洗摇摇杯的人。"),
"xs-protein-crisps": (
 "A crunchy high-protein snack for the salty-craving slot that chips usually fill.",
 "高蛋白脆片，填补通常被薯片占据的那个咸口零食位。",
 "People managing weight whose weak point is savory snacking, not sweets.",
 "管理体重、但弱点是咸口零食而非甜食的人。"),
"xs-cocowater-12-pack": (
 "Coconut water with electrolytes for rehydration, without the sugar load of a sports drink.",
 "含电解质的椰子水补水，没有运动饮料那么高的糖负担。",
 "Hot-weather training, hangovers, and anyone who finds plain water boring.",
 "高温训练、宿醉之后，以及觉得白水太寡淡的人。"),
"perfect-empowered-drinking-water": (
 "Purified, oxygenated and pH-balanced bottled water, sold by the case.",
 "净化、富氧、pH平衡的瓶装水，整箱销售。",
 "Events, offices and gatherings. Mainly a convenience and hosting item rather than a nutrition decision.",
 "活动、办公室、聚会场合。它更多是便利和待客用品，而不是一个营养决策。"),

# ── BEAUTY ────────────────────────────────────────────────────────
"artistry-hydrating-lotion-spf30": ("Daily moisture with broad-spectrum SPF 30, so hydration and sun protection happen in one step instead of two products people skip.","日常保湿+广谱SPF30防晒，保湿和防晒一步完成，不用买两个然后两个都不用。","Anyone whose morning routine needs to be short enough to actually happen.","早晨流程必须够短才做得到的人。"),
"artistry-hydrating-day-lotion-spf30": ("Lightweight day lotion with SPF for skin that feels tight by afternoon.","轻盈日霜含防晒，适合下午会感到紧绷的皮肤。","Dehydrated skin types and anyone in air-conditioned offices all day.","缺水肌，以及整天待在空调房的人。"),
"artistry-hydrating-eye-gel-cream": ("A cooling gel-cream texture for the eye area, lighter than a traditional eye cream so it works under makeup.","眼周清凉啫喱霜质地，比传统眼霜更轻盈，可以在妆前使用。","Screen fatigue, early morning puffiness, and first-time eye-care users.","屏幕疲劳、清晨浮肿，以及第一次用眼部产品的人。"),
"artistry-hydrating-system-bundle": ("The full hydrating routine — cleanse, tone, moisturize — bought as one decision instead of three.","完整水润流程：清洁、爽肤、保湿，一次决定代替三次。","People starting a real routine for the first time, and the simplest gift for skincare beginners.","第一次开始认真护肤的人，也是送护肤新手最简单的礼物。"),
"artistry-renewing-day-lotion-spf30": ("Peptide-based renewal with daily SPF, targeting early lines while preventing the sun exposure that causes more.","胜肽焕新配方+每日防晒，在处理初期细纹的同时防止造成更多细纹的日晒。","First fine lines, typically late twenties onward.","刚出现细纹的人，一般是二十多岁后期开始。"),
"artistry-renewing-system-bundle": ("The complete peptide renewal routine in one set, which also removes the guesswork about layering order.","完整胜肽焕新流程一套配齐，也省去了叠加顺序的困扰。","Upgrading from a basic moisturizer to a structured anti-aging routine.","从基础保湿升级到结构化抗老流程的人。"),
"artistry-firming-system-bundle": ("A firming-focused routine for elasticity and bounce rather than surface hydration.","主打紧致的流程，针对弹性和饱满度而非表层保湿。","Skin that looks hydrated but has started to lose definition along the jaw.","看起来不干、但下颌线开始模糊的皮肤。"),
"artistry-defying-serum": ("A phyto-peptide serum positioned for early aging signs, before heavier treatment products are needed.","植物胜肽精华，定位在初老阶段，在需要更强效产品之前使用。","People who want to start prevention rather than correction.","想做预防而不是补救的人。"),
"artistry-labs-illuminating-serum": ("Clinical-strength brightening from the Artistry Labs line, aimed at uneven tone and post-blemish marks.","Artistry Labs线的临床级亮白，针对肤色不均和痘后印记。","Pigmentation and acne marks that a basic routine has not moved.","基础护肤解决不了的色素沉着和痘印。"),
"artistry-labs-retexturizing-serum": ("Resurfacing serum for texture and pore appearance, the Labs line's answer to roughness rather than dryness.","焕肤精华，针对肤质和毛孔外观，是Labs线对粗糙而非干燥的答案。","Rough texture, enlarged pores, and skin that looks dull despite being moisturized.","肤质粗糙、毛孔明显，保湿做够了但看起来还是暗沉的皮肤。"),
"artistry-labs-retexturizing-system": ("An at-home device system paired with the retexturizing formula, bringing a clinic-style protocol home.","居家仪器系统搭配焕肤配方，把类似诊所的护理流程搬回家。","Committed skincare users comfortable with a device-based routine. A considered purchase, not an impulse one.","愿意投入、能接受仪器流程的护肤用户。这是一个需要考虑的购买，不是冲动消费。"),
"artistry-longxevity-creams": ("The flagship of the entire Artistry line, available in soft and rich textures for different skin needs and seasons.","整个Artistry线的旗舰，有轻润和丰润两种质地对应不同肤质和季节。","The premium tier. Usually bought by someone already committed to the brand.","高端线。通常是已经认可品牌的人才会买。"),
"artistry-longxevity-eye-cream": ("The premium eye treatment in the LongXevity line, formulated for deeper-set lines than a hydrating eye gel addresses.","LongXevity线的高端眼部护理，针对比保湿眼胶所能处理的更深的纹路。","Mature skin where a lightweight eye gel is no longer enough.","轻盈眼胶已经不够用的成熟肌。"),
"artistry-intensive-skincare-14-night-reset": ("A 14-night ampoule course, each night in a sealed single dose so the active stays fresh and the dosing stays consistent.","14夜安瓶疗程，每晚一支独立密封，保证活性成分新鲜、用量一致。","Before a wedding or event, or as a seasonal reset. Finite programs are easier to commit to than open-ended ones.","婚礼或重要场合前，或作为换季重启。有明确终点的疗程比无限期的更容易坚持。"),
"artistry-everyday-skin-solution-bundle": ("The everyday essentials bundled at a set price, covering the basics without choosing between twelve products.","日常必需品打包定价，覆盖基础需求，不用在十二个产品里做选择。","Beginners, and the most reliable skincare gift because it is complete.","护肤新手，也是最保险的护肤礼物，因为它是完整的。"),
"artistry-signature-select-brightening-mask": ("A targeted treatment mask for tone and radiance, used weekly rather than daily.","针对肤色与光泽的护理面膜，每周使用而非每天。","Dull skin, and the night before something that matters.","暗沉肌，以及重要场合的前一晚。"),
"artistry-signature-select-purifying-mask": ("A deep-cleaning mask that draws out excess oil and congestion from pores.","深层清洁面膜，吸附毛孔中过多的油脂和堵塞物。","Oily and combination skin with blackheads or frequent clogged pores.","有黑头、毛孔易堵的油性和混合性肌肤。"),
"artistry-signature-select-firming-mask": ("A firming treatment mask for a short-term lift and longer-term elasticity support.","紧致护理面膜，兼顾短期提拉和长期弹性支持。","Special occasions, and skin starting to lose bounce.","重要场合，以及开始失去饱满度的皮肤。"),
"artistry-studio-eye-look-rested": ("A de-puffing eye product for mornings after short sleep. Cosmetic and immediate rather than long-term treatment.","晨间去浮肿眼部产品，适合没睡够的早上。效果是即时的妆效，而非长期护理。","Late nights, early meetings, and travel.","熬夜、早会、出差。"),
"artistry-men-face-wash": ("A face wash formulated for typically oilier, thicker male skin, without stripping it.","针对通常更油、角质更厚的男性肌肤设计的洁面，但不会过度清洁。","Men whose current routine is bar soap. The easiest first step.","目前还在用香皂洗脸的男性。最容易的第一步。"),
"artistry-signature-select-polishing-mask": ("A gentle polishing mask that smooths surface texture without the harshness of a scrub.","温和的焕肤面膜，改善表层肤质但没有磨砂的粗暴感。","Rough or flaky texture, especially in winter.","肤质粗糙或起皮，尤其在冬天。"),
"artistry-studio-spot-on-dots": ("Hydrocolloid patches that protect a blemish overnight and stop you touching it, which is half the problem.","水胶体贴片，整夜保护痘痘并阻止你去碰它 —— 而碰它正是问题的一半。","Teens and adults with occasional spots. The single most giftable skincare item.","偶发痘痘的青少年和成人。也是最适合当小礼物的护肤单品。"),
# ── PERSONAL CARE ─────────────────────────────────────────────────
"glister-toothpaste": ("A concentrated formula, so a pea-sized amount is genuinely enough and one tube lasts far longer than it looks. Includes a gentle polishing agent rather than harsh abrasives.","浓缩配方，黄豆大小真的就够，一支能用比看上去久得多。含温和抛光成分而非粗糙磨料。","Everyone. Also the single best low-cost item to hand someone as a sample.","所有人。也是拿来给人试用最划算的单品。"),
"glister-power-toothbrush": ("Sonic cleaning with a UV sanitizing base, which addresses the part nobody thinks about: the brush head sitting in a damp bathroom between uses.","声波清洁配UV消毒座，解决了一个没人想过的问题：刷头在潮湿浴室里等待下次使用的那段时间。","Gum-health focus, braces, or anyone upgrading from manual. A durable purchase, not a monthly one.","关注牙龈健康、戴牙套，或从手动牙刷升级的人。这是耐用品，不是每月消耗品。"),
"glister-refresher-spray": ("Pocket-sized breath spray, sugar-free, with the same concentrated cleaning approach as the toothpaste.","口袋装口气清新喷雾，无糖，与牙膏同样的浓缩清洁思路。","After coffee or lunch, before meetings and dates. Small enough to give away freely.","咖啡或午饭后、开会约会前。小到可以随手送人。"),
"glister-floss-2-pack": ("Smooth-glide floss that does not shred between tight contacts, which is the reason most people quit flossing.","顺滑牙线，在牙缝紧的地方不会起毛断裂 —— 而这正是多数人放弃用牙线的原因。","Anyone who has given up on flossing because their current floss keeps catching.","因为现有牙线总是卡住而放弃的人。"),
"glister-oral-rinse": ("Alcohol-free rinse, so it does not dry out the mouth the way traditional mouthwash does. Dry mouth makes breath worse, not better.","无酒精漱口水，不会像传统漱口水那样让口腔干燥。口干只会让口气更差，而不是更好。","People who use mouthwash daily and notice their mouth feels dry afterward.","每天用漱口水、之后觉得口干的人。"),
"satinique-purifying-shampoo-280ml": ("Deep-cleansing without harsh sulfates, resetting a scalp weighed down by oil and styling product buildup.","无刺激性硫酸盐的深层清洁，重置被油脂和造型产品堆积压住的头皮。","Oily scalps, hair that goes flat by mid-day, and frequent styling product users.","头皮出油、中午头发就塌、经常用造型产品的人。"),
"satinique-purifying-shampoo-750ml": ("The same purifying formula in family size, which brings the per-wash cost down substantially.","同样的净化配方，家庭装，每次洗发的成本大幅下降。","Households with multiple users, or anyone who has already committed to the product.","多人使用的家庭，或已经认准这个产品的人。"),
"satinique-smooth-shampoo-280ml": ("Moisture-focused cleansing for hair that frizzes or feels straw-like, the opposite problem from the purifying line.","主打保湿的清洁，针对毛躁或干枯like稻草的头发 —— 与净化线相反的问题。","Dry, colored, or heat-styled hair.","干性、染过或经常热造型的头发。"),
"satinique-smooth-conditioner": ("The matching conditioner, formulated to detangle without the heavy silicone coating that causes buildup.","配套护发素，能顺滑打结但不含造成堆积的厚重硅油。","Long hair, and anyone who finds most conditioners leave hair greasy by day two.","长发，以及觉得多数护发素第二天就让头发发油的人。"),
"g-h-nourish-body-wash": ("Honey and shea butter based, formulated to clean without stripping the skin barrier.","以蜂蜜和乳木果为基础，清洁的同时不破坏皮肤屏障。","Dry or sensitive skin, and anyone whose skin feels tight after showering.","干性或敏感肌，以及洗完澡皮肤发紧的人。"),
"g-h-nourish-body-lotion": ("A body lotion built for 24-hour moisture that absorbs fast enough to get dressed right after.","主打24小时保湿的身体乳，吸收够快，涂完就能穿衣服。","Winter dryness, and people who own body lotion but never use it because it feels sticky.","冬季干燥，以及买了身体乳但因为黏腻从不用的人。"),
"g-h-protect-body-lotion-spf50": ("Broad-spectrum SPF 50 in a body format, covering the area most people forget entirely.","身体用的广谱SPF50防晒，覆盖大多数人完全遗忘的部位。","Outdoor sports, beach days, and anyone who protects their face but never their neck, chest and arms.","户外运动、海边，以及只防晒脸、从不管颈胸手臂的人。"),

# ── HOME ──────────────────────────────────────────────────────────
"espring-water-purifier-chrome": ("UV-C light plus a carbon block filter, treating both what you can taste and what you cannot. From the world's best-selling brand of home water treatment systems.","UV-C紫外线加活性炭滤芯，同时处理你尝得出的和尝不出的。来自全球销量领先的家用净水系统品牌。","Households where everyone drinks tap or buys bottled. Compare the annual bottled-water spend before deciding it is expensive.","全家喝自来水或买瓶装水的家庭。觉得贵之前，先算一下一年买水花了多少。"),
"espring-above-counter-unit": ("The same treatment technology in an above-counter configuration, for kitchens where under-sink installation is not practical.","同样的净水技术，台上型配置，适合无法在水槽下安装的厨房。","Renters and kitchens where plumbing changes are not allowed.","租房，以及不允许改水路的厨房。"),
"espring-uv-replacement-filter": ("The annual replacement cartridge. A purifier only works as well as its filter, and this is the part that keeps the system honest.","年度更换滤芯。净水器的效果取决于滤芯，这是让整个系统保持有效的部分。","Every eSpring owner, once a year. Worth setting a reminder for at purchase.","每一位eSpring用户，每年一次。买机器时就该设好提醒。"),
"espring-e3-carbon-filter": ("The carbon filter option in the eSpring system.","eSpring系统中的碳滤芯选项。","eSpring owners on the e3 configuration.","使用e3配置的eSpring用户。"),
"atmosphere-sky-air-purifier": ("Three-stage filtration including a HEPA layer, sized for spaces up to 465 sq ft, with sensors that adjust automatically rather than running at one speed.","三重滤净含HEPA层，适用最大465平方英尺空间，配备自动调节的传感器而非固定档位运行。","Allergy households, pet owners, cities with poor air days, and homes with new furniture off-gassing.","过敏家庭、养宠家庭、空气质量差的城市，以及新家具释放气味的家。"),
"atmosphere-mini-air-purifier": ("The same filtration approach scaled for a bedroom or office up to 200 sq ft.","同样的滤净方案，缩小到适合200平方英尺以内的卧室或办公室。","Bedrooms, nurseries, and desks. The realistic entry point into air treatment.","卧室、婴儿房、办公桌。空气净化最现实的入门选择。"),
"atmosphere-carbon-filter-replacement": ("The replacement carbon filter for Atmosphere units.","逸新系列的替换碳滤网。","Atmosphere owners on the replacement schedule. An unchanged filter is a fan.","按周期更换的逸新用户。不换滤网的净化器只是个风扇。"),
"loc-multi-purpose-cleaner": ("Concentrated at roughly 1:50, so one bottle makes many bottles of usable cleaner. Biodegradable surfactants, which matters in a home with kids and pets.","约1:50浓缩，一瓶可以配出很多瓶可用清洁液。可降解表面活性剂，对有孩子和宠物的家庭很重要。","The cost-per-use argument is the strongest in the whole home line. Do the math out loud with customers.","整个家居线里，单次使用成本这个论点最有说服力。和客户当面算一遍。"),
"loc-multi-purpose-wipes": ("The same cleaning approach in a pre-moistened wipe for quick cleanups.","同样的清洁思路，做成湿巾，用于快速清理。","Cars, offices, and anyone who will wipe a counter but will not mix a solution.","车里、办公室，以及愿意擦一下台面但不愿意配溶液的人。"),
"sa8-liquid-laundry": ("Concentrated and biodegradable, formulated to work in cold water so it does not force a hot wash.","浓缩且可降解，配方在冷水中即可发挥作用，不需要用热水洗。","Families doing frequent loads. Concentration means fewer reorders, not just lower cost.","洗衣频繁的家庭。浓缩意味着更少的补货次数，而不只是更低的成本。"),
"sa8-powder-laundry-detergent": ("The classic concentrated powder formulation for households that prefer powder.","经典浓缩粉状配方，适合习惯用洗衣粉的家庭。","Powder users and hard-water areas.","习惯用洗衣粉的人，以及水质偏硬的地区。"),
"dish-drops-dishwashing-liquid": ("Highly concentrated, so a few drops handle a full sink. Rinses clean without leaving film on glassware.","高度浓缩，几滴就能洗一整池。冲洗干净不在玻璃器皿上留膜。","The cost-per-sink comparison against supermarket brands is the demo worth doing.","和超市品牌比每池成本，这个演示值得做。"),
"amway-home-prewash-spray": ("A pre-treatment for stains, applied before the wash rather than hoping the detergent handles it after.","衣物去渍预处理，在洗之前使用，而不是指望洗衣液事后解决。","Households with kids, or anyone who has thrown out a shirt over one stain.","有孩子的家庭，或曾因为一处污渍扔掉衬衫的人。"),
"amway-home-fabric-softener": ("Concentrated fabric softener with a floral scent.","浓缩衣物柔顺剂，花香型。","Towels and bedding, where softness is most noticeable.","毛巾和床品，柔软度最容易被感知的地方。"),
"amway-home-all-fabric-bleach": ("Color-safe bleach that brightens without the damage chlorine bleach does to fabric and color.","彩漂粉，提亮的同时不会像含氯漂白剂那样损伤面料和颜色。","Whites that have gone grey, and colored items you would never risk with chlorine.","已经发灰的白色衣物，以及绝不敢用氯漂的彩色衣物。"),
"amway-home-glass-cleaner": ("Streak-free on glass and mirrors, which is the entire job of a glass cleaner and where most fail.","玻璃和镜面不留痕 —— 这是玻璃清洁剂唯一的任务，也是大多数产品失败的地方。","Anyone who has cleaned a window twice because of streaks.","因为留痕而把窗户擦两遍的人。"),
"pursue-disinfectant-spray": ("Disinfects and deodorizes in one step, for surfaces that need more than a wipe-down.","消毒除臭一步完成，用于需要不止擦拭的表面。","Kitchens, bathrooms, and households during cold season.","厨房、卫生间，以及换季感冒期的家庭。"),
"amway-home-scrub-buds": ("Stainless steel scouring pads that do not rust, shred, or hold odors the way sponges do.","不锈钢百洁布，不生锈、不掉屑，也不像海绵那样藏味。","Anyone replacing a sponge every few weeks. These last for years.","每几周就要换一次海绵的人。这个能用很多年。"),
"icook-19-piece-cookware-set": ("316L surgical-grade stainless steel with a vapor-seal design that lets you cook with little or no added water, so water-soluble vitamins stay in the food rather than going down the drain. Lifetime guarantee.","316L医用级不锈钢，蒸汽密封设计让你几乎不用加水烹调，水溶性维生素留在食物里而不是倒进下水道。终身保用。","The strongest argument pairs with nutrition: someone spending on supplements while boiling nutrients out of their vegetables.","最有力的论点是和营养品联动：一个人花钱买补充剂，同时把蔬菜里的营养煮掉了。"),
"icook-5-piece-saute-set": ("The most popular entry set, covering the pans used most days.","最受欢迎的入门套装，覆盖日常使用最频繁的锅具。","The realistic starting point for most households. Full sets can come later.","多数家庭最现实的起点。全套可以以后再说。"),
"icook-4-piece-saucepan-set": ("Saucepans for sauces, grains and small-batch cooking.","汤锅套装，用于酱汁、谷物和少量烹调。","Small households and couples cooking for two.","小家庭和两人份烹饪。"),
"icook-4-piece-stock-pot": ("A 4-quart stock pot for soups, stews and batch cooking.","4夸脱深汤锅，用于煲汤、炖煮和批量备餐。","Meal preppers and anyone who cooks soup weekly.","做备餐的人，以及每周煲汤的人。"),
"icook-6-piece-dutch-oven": ("An 8-quart Dutch oven for family-sized braising and slow cooking.","8夸脱荷兰锅，适合家庭份量的焖炖和慢煮。","Larger families and anyone who entertains.","人口较多的家庭，以及经常请客的人。"),
"icook-9-5-nonstick-frypan": ("PFAS-free nonstick with a lid, for eggs and delicate foods where stainless is harder to manage.","无PFAS不粘煎锅带盖，适合鸡蛋和其他用不锈钢较难处理的娇嫩食材。","Everyday breakfast use. The PFAS-free point matters to anyone who has read about older nonstick coatings.","日常早餐使用。无PFAS这点对了解过旧式不粘涂层的人很重要。"),
"icook-11-nonstick-frypan": ("The larger PFAS-free nonstick pan, sized for cooking for more than one or two.","更大尺寸的无PFAS不粘煎锅，适合两人以上的分量。","Families, and stir-frying where a small pan crowds the food.","家庭使用，以及小锅会把菜挤在一起的爆炒场景。"),
"icook-5-piece-knifeware-set": ("A precision knife set with a storage block. Sharp knives are safer than dull ones because they do not slip.","精工刀具套装带刀座。锋利的刀比钝刀更安全，因为不会打滑。","Home cooks still using one dull all-purpose knife.","还在用一把钝了的万能刀的家庭厨师。"),
"icook-multipurpose-shears": ("Kitchen shears that separate for cleaning, which is the detail that decides whether you actually use them.","可拆卸清洗的厨房剪 —— 这个细节决定了你会不会真的用它。","The best first iCook purchase: low price, used immediately, and it opens the cookware conversation.","最好的iCook入门单品：价格低、马上就能用，而且能打开锅具的话题。"),

# ── SOLUTIONS / BUNDLES ───────────────────────────────────────────
"begin-30-holistic-wellness-solution": ("Amway's official 30-day program: GI Primer, Plant Protein and Probiotic, paired with the Wellbeing+ app for daily tracking. Structure and tracking are why people finish it.","安利官方30天计划：肠道启动粉、植物蛋白、益生菌，配合Wellbeing+ App每日打卡。有结构和追踪，才是人们能坚持完的原因。","People who have tried and abandoned unstructured plans. A defined end date changes completion rates.","试过并放弃无结构计划的人。有明确终点会改变完成率。"),
"everyday-nutrition-solution": ("The official foundation stack: Double X, Plant Protein and Advanced Omega, bundled. It covers the three most common gaps in one order.","官方基础组合：双X、植物蛋白、深海鱼油打包。一单覆盖三个最常见的缺口。","The default recommendation when someone asks where to start.","有人问从哪开始时的默认答案。"),
"sleep-stress-solution": ("The official evening stack built around Sweet Dreams gummies and calming botanicals.","官方晚间组合，以甜梦软糖和舒缓植物配方为核心。","The wired-but-tired pattern, which is the most common complaint in this client base.","身体累但大脑停不下来 —— 这是这个客户群里最常见的主诉。"),
"healthy-aging-solution": ("The official healthy-aging bundle: turmeric, Cal Mag D, Garlic Heart Care and Vision Health together.","官方抗龄套装：姜黄、钙镁D、大蒜精华、护眼配方组合。","Adults over 40 building a maintenance routine rather than chasing a single symptom.","40岁以上、在建立保养习惯而非追着某个症状跑的成年人。"),
"energy-solution": ("The official energy bundle, pairing foundational micronutrients with energy support.","官方能量套装，基础微量营养素搭配能量支持。","Persistent low energy where no single deficiency is obvious.","持续没精神但看不出明确单一缺口的人。"),
"xs-fitness-jump-start-solution": ("XS protein plus workout support, bundled to start a training habit with the nutrition side already handled.","XS蛋白加训练支持打包，让你开始训练习惯时营养那一半已经安排好。","New gym memberships, and anyone restarting after a long break.","刚办健身卡的人，以及长时间中断后重新开始的人。"),
}

def slug(n):
    return re.sub(r"[^a-z0-9]+", "-", n.lower()).strip("-")

out = {k: {"advantage": v[0], "advantageZh": v[1], "who": v[2], "whoZh": v[3]} for k, v in D.items()}
json.dump(out, open("scripts/details.json", "w"), ensure_ascii=False, indent=1)
print(f"details.json written: {len(out)} products")
