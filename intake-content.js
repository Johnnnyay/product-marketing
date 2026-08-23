/* Intake form content — every visible string, in four languages.
 *
 * The form renders from this file. Nothing user-facing is hardcoded in intake.html,
 * which is the only way a four-language form stays four-language: the first version
 * of this translated the new questions and left every pre-existing label in English,
 * and that is exactly what happens when strings live in the markup.
 *
 * Order is always [en, zh, es, hi].
 *
 * `h` is the "why we ask" disclosure. It says what the answer is used for, because a
 * person who understands the question answers it more accurately, and the report is
 * built entirely on that accuracy.
 */

const LANGS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'zh', label: '中', name: '中文' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'hi', label: 'HI', name: 'हिन्दी' }
];

const UI = {
  pageTitle:  ['Health Assessment', '健康评估', 'Evaluación de Salud', 'स्वास्थ्य मूल्यांकन'],
  heroTitle:  ['Personal Health Assessment', '个人健康评估', 'Evaluación Personal de Salud', 'व्यक्तिगत स्वास्थ्य मूल्यांकन'],
  heroSub:    ['Fill this out once and receive a personalized report with root cause analysis and targeted recommendations.',
               '填写一次，即可获得一份包含根本原因分析和针对性建议的个人报告。',
               'Complete esto una vez y reciba un informe personalizado con análisis de causa raíz y recomendaciones específicas.',
               'इसे एक बार भरें और मूल कारण विश्लेषण तथा लक्षित सिफ़ारिशों के साथ व्यक्तिगत रिपोर्ट पाएँ।'],
  backLink:   ['← Back to products', '← 返回产品页', '← Volver a productos', '← उत्पादों पर लौटें'],
  stepFmt:    ['Step {n} of 3 — {t}', '第 {n} 步，共 3 步 — {t}', 'Paso {n} de 3 — {t}', 'चरण {n} / 3 — {t}'],
  step1:      ['About You', '关于你', 'Sobre usted', 'आपके बारे में'],
  step2:      ['How I Feel', '身体感受', 'Cómo me siento', 'मैं कैसा महसूस करता हूँ'],
  step3:      ['Daily Habits', '日常习惯', 'Hábitos diarios', 'दैनिक आदतें'],
  next:       ['Continue →', '继续 →', 'Continuar →', 'आगे →'],
  back:       ['← Back', '← 返回', '← Atrás', '← पीछे'],
  submit:     ['Generate My Report →', '生成我的报告 →', 'Generar mi informe →', 'मेरी रिपोर्ट बनाएँ →'],
  why:        ['Why we ask', '为什么问这个', 'Por qué preguntamos', 'हम क्यों पूछते हैं'],
  select:     ['Select...', '请选择...', 'Seleccione...', 'चुनें...'],
  required:   ['Please fill in your name, email, date of birth, and gender before continuing.',
               '请先填写姓名、邮箱、出生日期和性别，然后继续。',
               'Complete su nombre, correo, fecha de nacimiento y sexo antes de continuar.',
               'आगे बढ़ने से पहले कृपया नाम, ईमेल, जन्म तिथि और लिंग भरें।'],
  loadTitle:  ['Generating your report...', '正在生成你的报告...', 'Generando su informe...', 'आपकी रिपोर्ट बन रही है...'],
  loadSub:    ['Analyzing your data against your health profile.', '正在结合你的健康档案分析数据。',
               'Analizando sus datos según su perfil de salud.', 'आपके स्वास्थ्य प्रोफ़ाइल के अनुसार डेटा का विश्लेषण।'],
  scaleToggle:['I have smart scale data to enter', '我有体脂秤数据要填', 'Tengo datos de báscula inteligente', 'मेरे पास स्मार्ट स्केल डेटा है'],
  scaleHint:  ['Optional but improves accuracy', '选填，但会显著提高准确度', 'Opcional pero mejora la precisión', 'वैकल्पिक, पर सटीकता बढ़ाता है'],
  symptomsSub:['Rate how often you experience each. Tap the frequency that fits best. Skip anything that does not apply.',
               '按你出现的频率选择。点最接近的那一档。不适用的可以跳过。',
               'Indique con qué frecuencia experimenta cada uno. Omita lo que no aplique.',
               'बताएँ कि आप हर एक को कितनी बार अनुभव करते हैं। जो लागू न हो उसे छोड़ दें।'],
  fOften:     ['Often', '经常', 'A menudo', 'अक्सर'],
  fSometimes: ['Sometimes', '有时', 'A veces', 'कभी-कभी'],
  fRarely:    ['Rarely', '很少', 'Rara vez', 'शायद ही'],
  fNever:     ['Never', '从不', 'Nunca', 'कभी नहीं'],
  redFlag:    ['Blood in stool, or black tarry stool, should be looked at by a doctor rather than a consultant. Please see a physician.',
               '便血或柏油样黑便应由医生处理，而不是顾问。请去看医生。',
               'La sangre en las heces o las heces negras y alquitranadas deben ser evaluadas por un médico, no por un consultor.',
               'मल में खून या काला चिपचिपा मल डॉक्टर को दिखाएँ, सलाहकार को नहीं।']
};

const SECTIONS = {
  personal:   ['Personal Information', '基本信息', 'Información personal', 'व्यक्तिगत जानकारी'],
  bodyComp:   ['Body Composition (Smart Scale)', '身体成分（体脂秤）', 'Composición corporal (báscula inteligente)', 'शरीर संरचना (स्मार्ट स्केल)'],
  symptoms:   ['Symptoms', '症状', 'Síntomas', 'लक्षण'],
  habits:     ['Daily Habits', '日常习惯', 'Hábitos diarios', 'दैनिक आदतें'],
  supplements:['Supplements', '补充剂', 'Suplementos', 'अनुपूरक'],
  bowel:      ['Bowel and Digestion', '排便与消化', 'Intestino y digestión', 'मल और पाचन'],
  bowelSub:   ['The most direct read on gut health there is, and the one people skip. Nothing here is embarrassing; it is just data.',
               '这是判断肠道健康最直接的依据，也是最常被跳过的部分。这里没什么难为情的，都只是数据。',
               'La lectura más directa que existe sobre la salud intestinal, y la que la gente omite. No hay nada vergonzoso aquí.',
               'आंत के स्वास्थ्य का सबसे सीधा संकेत, जिसे लोग अक्सर छोड़ देते हैं। यहाँ कुछ भी शर्मनाक नहीं है।'],
  cycle:      ['Menstrual Cycle', '月经周期', 'Ciclo menstrual', 'मासिक चक्र']
};

/* Every field: label, help, and options where it is a select. */
const FIELDS = {
  'f-name': { l: ['First and Last Name *', '姓名 *', 'Nombre y apellido *', 'पूरा नाम *'],
    h: ['Used on the report itself so you can tell yours apart from a family member’s, and to match a follow-up assessment to this one.',
        '会印在报告上，方便和家人的报告区分，也用于把后续复查和这一次对应起来。',
        'Aparece en el informe para distinguirlo del de un familiar y vincular una evaluación de seguimiento con esta.',
        'रिपोर्ट पर दिखता है ताकि परिवार के किसी सदस्य की रिपोर्ट से अलग पहचाना जा सके।'] },
  'f-email': { l: ['Email *', '邮箱 *', 'Correo electrónico *', 'ईमेल *'],
    h: ['Where the report link goes. It is a private link, not a public page, so it is worth using an address you actually check.',
        '报告链接会发到这里。这是私密链接不是公开页面，所以请填你常用的邮箱。',
        'Adonde va el enlace del informe. Es un enlace privado, no una página pública.',
        'रिपोर्ट लिंक यहीं जाता है। यह निजी लिंक है, सार्वजनिक पृष्ठ नहीं।'] },
  'f-dob': { l: ['Date of Birth *', '出生日期 *', 'Fecha de nacimiento *', 'जन्म तिथि *'],
    h: ['Reference intakes differ by age, and several body-composition readings are interpreted against it. Metabolic age only means something next to your real age.',
        '参考摄入量按年龄不同，多项体成分指标也要对照年龄解读。代谢年龄只有和实际年龄比较才有意义。',
        'Las ingestas de referencia varían con la edad, y varias lecturas corporales se interpretan en relación con ella.',
        'संदर्भ मात्राएँ उम्र के अनुसार बदलती हैं, और शरीर संरचना के कई माप इसी के सापेक्ष पढ़े जाते हैं।'] },
  'f-gender': { l: ['Gender *', '性别 *', 'Sexo *', 'लिंग *'],
    h: ['Reference intakes for iron, calcium and several B vitamins differ by sex, so this changes the amounts recommended, not just the wording.',
        '铁、钙和多种B族维生素的参考摄入量按性别不同，所以这会改变推荐的用量，而不只是措辞。',
        'Las ingestas de referencia de hierro, calcio y varias vitaminas B difieren por sexo, así que cambian las cantidades.',
        'आयरन, कैल्शियम और कई बी विटामिनों की संदर्भ मात्राएँ लिंग के अनुसार भिन्न हैं।'],
    o: [['Male','Male','男','Masculino','पुरुष'],['Female','Female','女','Femenino','महिला'],['Other','Other','其他','Otro','अन्य']] },
  'f-height': { l: ['Height', '身高', 'Estatura', 'कद'],
    h: ['Needed with weight to compute BMI. BMI is a poor measure for anyone carrying a lot of muscle, which is why the scale readings below matter more.',
        '和体重一起用来算BMI。对肌肉量大的人BMI不准，所以下面体脂秤的数据更重要。',
        'Se necesita con el peso para calcular el IMC. El IMC es una mala medida para quien tiene mucha masa muscular.',
        'बीएमआई निकालने के लिए वज़न के साथ चाहिए।'] },
  'f-weight': { l: ['Weight (lb)', '体重（磅）', 'Peso (lb)', 'वज़न (lb)'],
    h: ['Protein requirement is calculated per kilogram of body weight, so without this the protein part of the plan is guesswork.',
        '蛋白质需要量按每公斤体重计算，没有这个数字，方案里蛋白质那部分只能靠猜。',
        'El requerimiento de proteína se calcula por kilogramo de peso corporal.',
        'प्रोटीन की आवश्यकता प्रति किलोग्राम वज़न से निकाली जाती है।'] },
  'f-bmi': { l: ['BMI', '身体质量指数 BMI', 'IMC', 'बीएमआई'],
    h: ['A rough screen only. It cannot tell muscle from fat, so a strong person can read "overweight" while being metabolically fine.',
        '只是粗筛。它分不出肌肉和脂肪，所以肌肉多的人可能显示"超重"但代谢完全正常。',
        'Solo un cribado aproximado. No distingue músculo de grasa.',
        'केवल मोटा अनुमान। यह मांसपेशी और वसा में अंतर नहीं कर सकता।'] },
  'f-bodyFat': { l: ['Body Fat %', '体脂率 %', '% de grasa corporal', 'शरीर में वसा %'],
    h: ['More useful than weight, because it separates fat from everything else. Healthy bands differ by sex and age.',
        '比体重有用，因为它把脂肪和其他成分分开了。健康区间按性别和年龄不同。',
        'Más útil que el peso, porque separa la grasa del resto.',
        'वज़न से अधिक उपयोगी, क्योंकि यह वसा को बाकी सबसे अलग करता है।'] },
  'f-skeletalMuscle': { l: ['Skeletal Muscle %', '骨骼肌 %', '% de músculo esquelético', 'कंकाल पेशी %'],
    h: ['Muscle is where glucose gets disposed of, so it is the asset to protect while fat comes down. Losing muscle to lose weight is a bad trade.',
        '肌肉是葡萄糖的去处，所以减脂过程中它是要保护的资产。靠掉肌肉来减重是笔坏买卖。',
        'El músculo es donde se elimina la glucosa, así que es el activo a proteger mientras baja la grasa.',
        'मांसपेशी वह जगह है जहाँ ग्लूकोज़ निपटाया जाता है, इसलिए इसे बचाना ज़रूरी है।'] },
  'f-visceralFat': { l: ['Visceral Fat (1–20)', '内脏脂肪（1–20）', 'Grasa visceral (1–20)', 'आंतरिक वसा (1–20)'],
    h: ['Visceral fat sits around the organs and is the single reading that tracks metabolic risk. Total weight cannot see it, which is why a person can look fine and still read high. Under 10 is the target.',
        '内脏脂肪包在器官周围，是唯一能反映代谢风险的指标。体重看不出它，所以有人外表正常但这项偏高。目标是低于10。',
        'La grasa visceral rodea los órganos y es la lectura que sigue el riesgo metabólico. Menos de 10 es el objetivo.',
        'आंतरिक वसा अंगों के आसपास होती है और चयापचय जोखिम दर्शाती है। 10 से कम लक्ष्य है।'] },
  'f-bodyWater': { l: ['Body Water %', '身体水分 %', '% de agua corporal', 'शरीर में जल %'],
    h: ['Tracks with muscle, because muscle tissue holds most of the body’s water. A low reading usually means low muscle or genuine under-drinking.',
        '和肌肉同步，因为身体大部分水分储存在肌肉组织里。数值低通常意味着肌肉少或确实喝水不足。',
        'Sigue al músculo, porque el tejido muscular retiene la mayor parte del agua del cuerpo.',
        'यह मांसपेशी के साथ चलता है, क्योंकि अधिकांश पानी मांसपेशी ऊतक में होता है।'] },
  'f-metabolicAge': { l: ['Metabolic Age', '代谢年龄', 'Edad metabólica', 'चयापचय आयु'],
    h: ['Only meaningful next to your real age. Reading several years above it is a summary of the other numbers, not a separate finding.',
        '只有和实际年龄对比才有意义。高出几岁是其他指标的汇总结果，不是一个独立的发现。',
        'Solo tiene sentido junto a su edad real. Leer varios años por encima resume las otras cifras.',
        'यह केवल आपकी वास्तविक आयु के साथ अर्थपूर्ण है।'] },
  'f-protein': { l: ['Protein %', '蛋白质 %', '% de proteína', 'प्रोटीन %'],
    h: ['Where a shortage shows up before you feel it. Below about 16% is low, and hair and nails are usually the first visible sign.',
        '缺乏最早出现的地方，早于你的感觉。低于约16%偏低，头发和指甲通常是最先看得出来的。',
        'Donde una carencia aparece antes de sentirla. Por debajo del 16% es bajo.',
        'जहाँ कमी महसूस होने से पहले दिखती है। लगभग 16% से नीचे कम है।'] },
  'f-muscleMass': { l: ['Muscle Mass (lb)', '肌肉量（磅）', 'Masa muscular (lb)', 'मांसपेशी द्रव्यमान (lb)'],
    h: ['The absolute figure behind the muscle percentage. Watching it hold steady while fat falls is the sign a plan is working properly.',
        '肌肉百分比背后的绝对值。减脂期间它保持稳定，才说明方案是对的。',
        'La cifra absoluta detrás del porcentaje muscular. Que se mantenga mientras baja la grasa indica que el plan funciona.',
        'मांसपेशी प्रतिशत के पीछे की वास्तविक संख्या।'] },
  'f-fatFreeMass': { l: ['Fat-free Mass (lb)', '去脂体重（磅）', 'Masa libre de grasa (lb)', 'वसा-रहित द्रव्यमान (lb)'],
    h: ['Everything that is not fat: muscle, bone, organs and water. Used as a cross-check on the other readings.',
        '除脂肪以外的全部：肌肉、骨骼、器官和水分。用来交叉验证其他数据。',
        'Todo lo que no es grasa: músculo, hueso, órganos y agua.',
        'वह सब जो वसा नहीं है: मांसपेशी, हड्डी, अंग और पानी।'] },

  'f-water': { l: ['Daily water intake', '每日饮水量', 'Consumo diario de agua', 'दैनिक पानी सेवन'],
    h: ['Every clearance pathway runs on water: the kidneys, the gut, and moving what the liver has processed out of the body. This is usually the largest and cheapest gap to close.',
        '所有清除通路都靠水运行：肾脏、肠道，以及把肝脏处理完的废物排出体外。这通常是差距最大、也最不花钱就能补上的一项。',
        'Todas las vías de eliminación funcionan con agua: riñones, intestino, y sacar lo que el hígado ha procesado.',
        'शरीर के सभी निकासी मार्ग पानी पर चलते हैं।'],
    o: [['Less than 1L','Less than 1 L','不到 1 升','Menos de 1 L','1 लीटर से कम'],
        ['1–1.5L','1–1.5 L','1–1.5 升','1–1.5 L','1–1.5 लीटर'],
        ['1.5–2L','1.5–2 L','1.5–2 升','1.5–2 L','1.5–2 लीटर'],
        ['2–2.5L','2–2.5 L','2–2.5 升','2–2.5 L','2–2.5 लीटर'],
        ['2.5L+','2.5 L or more','2.5 升以上','2.5 L o más','2.5 लीटर या अधिक']] },
  'f-produce': { l: ['Fruit and vegetable servings per day', '每日蔬果份数', 'Porciones de fruta y verdura al día', 'रोज़ फल-सब्ज़ी के हिस्से'],
    h: ['Vegetables and fruit are the only source of the plant compound families, and no capsule reproduces the full range. Count servings rather than estimating; almost everyone overestimates.',
        '蔬果是植物化合物的唯一来源，没有胶囊能复制它的全部范围。请数份数而不是估计，几乎所有人都会高估。',
        'Las verduras y frutas son la única fuente de los compuestos vegetales. Cuente las porciones en vez de estimarlas.',
        'सब्ज़ियाँ और फल पादप यौगिकों का एकमात्र स्रोत हैं। अनुमान के बजाय गिनें।'],
    o: [['0–1 servings','0–1 servings','0–1 份','0–1 porciones','0–1 हिस्से'],
        ['2–3 servings','2–3 servings','2–3 份','2–3 porciones','2–3 हिस्से'],
        ['4–5 servings','4–5 servings','4–5 份','4–5 porciones','4–5 हिस्से'],
        ['5+ servings','5+ servings','5 份以上','5+ porciones','5+ हिस्से']] },
  'f-diet': { l: ['Best describes your diet', '最接近你的饮食结构', 'Lo que mejor describe su dieta', 'आपका आहार सबसे अच्छा वर्णन'],
    h: ['Dietary pattern sets the balance of fats, which in turn sets how readily the body starts and stops inflammation. It is the single answer that most changes what gets recommended.',
        '饮食结构决定脂肪的比例，而脂肪比例决定身体启动和停止炎症的难易。这一题最能改变最终推荐什么。',
        'El patrón dietético fija el equilibrio de grasas, que a su vez determina la inflamación.',
        'आहार पैटर्न वसा संतुलन तय करता है, जो सूजन को नियंत्रित करता है।'],
    o: [['Balanced — varies daily','Balanced, varies daily','均衡，每天有变化','Equilibrada, varía a diario','संतुलित, रोज़ बदलता है'],
        ['High meat, low produce','High meat, low vegetables','高肉、少蔬菜','Mucha carne, pocas verduras','अधिक मांस, कम सब्ज़ी'],
        ['Vegetarian or vegan','Vegetarian or vegan','素食或纯素','Vegetariana o vegana','शाकाहारी या वीगन'],
        ['Fast food / processed heavy','Mostly fast food or processed','以快餐/加工食品为主','Principalmente comida rápida o procesada','अधिकतर फास्ट फूड'],
        ['Chinese traditional diet','Chinese traditional diet','中式传统饮食','Dieta tradicional china','चीनी पारंपरिक आहार']] },
  'f-coldFood': { l: ['Cold food and drink preference', '冷食冷饮偏好', 'Preferencia por comida y bebida fría', 'ठंडे भोजन की पसंद'],
    h: ['In this framework digestion runs on warmth, and consistently cold food and drink lowers its efficiency at the point where it starts. It is one of the most common causes of the digestive cluster.',
        '在这套框架里消化靠温度运行，长期吃冷食冷饮会在消化的起点上降低效率。这是消化类症状最常见的原因之一。',
        'En este marco la digestión funciona con calor, y lo frío constante reduce su eficiencia desde el inicio.',
        'इस ढांचे में पाचन गर्मी पर चलता है; लगातार ठंडा भोजन शुरुआत में ही क्षमता घटाता है।'],
    o: [['Yes, I prefer cold/iced','Yes, I prefer cold or iced','是，我偏好冷饮冰饮','Sí, prefiero frío o con hielo','हाँ, मुझे ठंडा पसंद है'],
        ['Sometimes','Sometimes','有时','A veces','कभी-कभी'],
        ['No, I prefer room temp or warm','No, I prefer warm or room temperature','否，我偏好温的或常温','No, prefiero tibio o temperatura ambiente','नहीं, मुझे गर्म पसंद है']] },
  'f-breakfastFreq': { l: ['Do you eat breakfast?', '你吃早餐吗？', '¿Desayuna?', 'क्या आप नाश्ता करते हैं?'],
    h: ['The 7 to 9 AM window is when the digestive system is at its strongest, so a skipped breakfast is the meal that would have counted most.',
        '上午7到9点是消化系统最强的时段（胃经当令），所以跳过的这一餐本来是最有价值的。',
        'La ventana de 7 a 9 AM es cuando el sistema digestivo está más fuerte.',
        'सुबह 7 से 9 बजे पाचन तंत्र सबसे मज़बूत होता है।'],
    o: [['Yes, daily','Yes, every day','是，每天','Sí, todos los días','हाँ, रोज़'],
        ['Sometimes (3–4x/week)','Sometimes, 3–4 days a week','有时，每周3-4天','A veces, 3–4 días por semana','कभी-कभी, सप्ताह में 3–4 दिन'],
        ['Rarely or never','Rarely or never','很少或从不','Rara vez o nunca','शायद ही या कभी नहीं']] },
  'f-breakfastProtein': { l: ['Protein at breakfast?', '早餐有蛋白质吗？', '¿Proteína en el desayuno?', 'नाश्ते में प्रोटीन?'],
    h: ['Protein is what stabilises blood sugar across the morning. Without it the rest of the day swings harder, which shows up as cravings and an afternoon crash.',
        '蛋白质是稳定上午血糖的关键。没有它，一整天的血糖波动会更大，表现为嘴馋和下午犯困。',
        'La proteína estabiliza el azúcar en sangre durante la mañana. Sin ella el día oscila más.',
        'प्रोटीन सुबह भर रक्त शर्करा स्थिर रखता है।'],
    o: [['Yes','Yes','有','Sí','हाँ'],['No','No','没有','No','नहीं'],
        ['N/A — skip breakfast','Not applicable, I skip breakfast','不适用，我不吃早餐','No aplica, omito el desayuno','लागू नहीं, मैं नाश्ता छोड़ता हूँ']] },
  'f-bedtime': { l: ['Typical bedtime', '通常几点睡', 'Hora habitual de acostarse', 'सामान्य सोने का समय'],
    h: ['Deep sleep is weighted toward the early part of the night, so a late bedtime cuts into it regardless of total hours slept.',
        '深睡集中在前半夜，所以睡得晚就会切掉这部分，和总睡眠时长无关。',
        'El sueño profundo se concentra al principio de la noche, así que acostarse tarde lo recorta.',
        'गहरी नींद रात के पहले हिस्से में केंद्रित होती है।'],
    o: [['Before 10 PM','Before 10 PM','晚上10点前','Antes de las 10 PM','रात 10 बजे से पहले'],
        ['10–11 PM','10–11 PM','10–11点','10–11 PM','10–11 बजे'],
        ['11 PM–midnight','11 PM to midnight','11点到午夜','11 PM a medianoche','11 बजे से आधी रात'],
        ['After midnight','After midnight','午夜以后','Después de medianoche','आधी रात के बाद']] },
  'f-waking13': { l: ['Do you wake between 1–3 AM?', '你会在凌晨1-3点醒吗？', '¿Se despierta entre la 1 y las 3 AM?', 'क्या आप रात 1–3 बजे जागते हैं?'],
    h: ['The 1 to 3 AM window is when the liver does its heaviest processing. Waking in it consistently is read as information rather than as insomnia, and it connects to the eyes, emotional regulation and hormones.',
        '凌晨1到3点是肝脏处理负荷最重的时段（肝经当令）。持续在这个时段醒来被视为一条信息而不是失眠，它和眼睛、情绪调节、激素都相连。',
        'La ventana de 1 a 3 AM es cuando el hígado hace su procesamiento más pesado. Despertarse ahí se lee como información.',
        '1 से 3 बजे जिगर सबसे भारी कार्य करता है। उस समय जागना जानकारी है, अनिद्रा नहीं।'],
    o: [['Yes, regularly','Yes, regularly','是，经常','Sí, con regularidad','हाँ, नियमित रूप से'],
        ['Occasionally','Occasionally','偶尔','A veces','कभी-कभी'],
        ['No','No','否','No','नहीं']] },
  'f-supplements': { l: ['What supplements do you currently take?', '你目前在吃哪些补充剂？', '¿Qué suplementos toma actualmente?', 'आप वर्तमान में कौन से अनुपूरक लेते हैं?'],
    h: ['List everything, including what you take irregularly. Knowing what you already take is what stops a recommendation duplicating it, and duplication is the most common way people overspend.',
        '请全部列出，包括吃得不规律的。知道你已经在吃什么，才能避免重复推荐，而重复正是最常见的浪费钱的方式。',
        'Liste todo, incluso lo irregular. Saber lo que ya toma evita duplicar una recomendación.',
        'सब कुछ सूचीबद्ध करें। इससे सिफ़ारिश दोहराई नहीं जाएगी।'] },
  'f-supplementFreq': { l: ['How consistently do you take them?', '你吃得有多规律？', '¿Con qué constancia los toma?', 'आप उन्हें कितनी नियमितता से लेते हैं?'],
    h: ['Consistency usually matters more than the number of products. Four taken daily does more than ten taken sometimes.',
        '规律性通常比产品数量更重要。每天吃四种，胜过偶尔吃十种。',
        'La constancia importa más que el número de productos. Cuatro a diario hacen más que diez a veces.',
        'निरंतरता उत्पादों की संख्या से अधिक मायने रखती है।'],
    o: [['Daily without fail','Daily without fail','每天，从不间断','A diario sin falta','रोज़, बिना चूके'],
        ['Sometimes (3–4x/week)','Sometimes, 3–4 days a week','有时，每周3-4天','A veces, 3–4 días por semana','कभी-कभी, सप्ताह में 3–4 दिन'],
        ['Rarely (1–2x/week)','Rarely, 1–2 days a week','很少，每周1-2天','Rara vez, 1–2 días por semana','शायद ही, सप्ताह में 1–2 दिन'],
        ['Not currently taking any','Not taking any right now','目前没有在吃','No tomo ninguno ahora','अभी कोई नहीं ले रहा']] },
  'f-notes': { l: ['Anything else you want the consultant to know?', '还有什么想让顾问知道的？', '¿Algo más que deba saber el consultor?', 'सलाहकार को और क्या बताना चाहेंगे?'],
    h: ['Recent changes, a diagnosis, medication, or a goal. Anything that would change how the answers above should be read belongs here.',
        '最近的变化、诊断、正在吃的药，或者你的目标。任何会改变上面答案解读方式的事情都写在这里。',
        'Cambios recientes, un diagnóstico, medicación o un objetivo.',
        'हाल के बदलाव, कोई निदान, दवा, या लक्ष्य।'] },

  /* Bowel */
  'f-bowelFreq': { l: ['How often do you have a bowel movement?', '你多久排便一次？', '¿Con qué frecuencia evacúa?', 'आप कितनी बार शौच जाते हैं?'],
    h: ['Once or twice a day with an easy pass is the target. Less than that and material is sitting too long; much more and it is moving through faster than it can be absorbed.',
        '每天一到两次、排出顺畅是目标。少于这个，废物停留过久；明显多于这个，说明通过太快，来不及吸收。',
        'Una o dos veces al día con paso fácil es el objetivo.',
        'दिन में एक या दो बार आसानी से निकलना लक्ष्य है।'],
    o: [['3+ times a day','3 or more times a day','每天3次以上','3 o más veces al día','दिन में 3+ बार'],
        ['1-2 times a day','1–2 times a day','每天1-2次','1–2 veces al día','दिन में 1–2 बार'],
        ['Every other day','Every other day','隔天一次','Cada dos días','हर दूसरे दिन'],
        ['2-3 times a week','2–3 times a week','每周2-3次','2–3 veces por semana','सप्ताह में 2–3 बार'],
        ['Less than twice a week','Less than twice a week','每周不到2次','Menos de dos veces por semana','सप्ताह में दो बार से कम']] },
  'f-stoolForm': { l: ['What does it usually look like?', '通常是什么形状？', '¿Qué aspecto suele tener?', 'यह आमतौर पर कैसा दिखता है?'],
    h: ['Form is a fibre and water readout. Hard pellets mean slow transit and too little fibre; loose means it is moving faster than the gut can work with. Smooth and soft is what the clearing stage aims at.',
        '形状反映纤维和水分。硬球说明通过慢、纤维不足；稀软说明通过太快，肠道来不及处理。成形柔软正是"清"这一阶段的目标。',
        'La forma es una lectura de fibra y agua. Los trozos duros indican tránsito lento y poca fibra.',
        'आकार फ़ाइबर और पानी का संकेत है। कठोर गोलियाँ धीमी गति दर्शाती हैं।'],
    o: [['Separate hard lumps','Separate hard lumps, hard to pass','一颗颗硬球，难排出','Trozos duros separados','अलग कठोर गोलियाँ'],
        ['Lumpy sausage','Sausage-shaped but lumpy','香肠状但表面有块','Con forma de salchicha pero grumosa','सॉसेज जैसा पर गांठदार'],
        ['Cracked sausage','Sausage-shaped with surface cracks','香肠状，表面有裂痕','Con forma de salchicha con grietas','सतह पर दरारों के साथ'],
        ['Smooth and soft','Smooth and soft, easy to pass','光滑柔软，排出顺畅','Lisa y blanda, fácil','चिकना और नरम'],
        ['Soft blobs','Soft blobs with clear edges','软块，边缘清晰','Masas blandas con bordes definidos','नरम टुकड़े'],
        ['Mushy','Mushy with ragged edges','糊状，边缘不整齐','Pastosa con bordes irregulares','गूदेदार'],
        ['Watery','Watery, no solid pieces','水样，无固体','Acuosa, sin sólidos','पानी जैसा']] },
  'f-stoolColor': { l: ['What colour is it usually?', '通常是什么颜色？', '¿De qué color suele ser?', 'इसका रंग क्या होता है?'],
    h: ['Normal is medium to dark brown. Pale or clay-coloured can mean bile is not arriving, which points at the liver and gallbladder. Red or black needs a doctor, not a consultant.',
        '正常是中到深棕色。灰白或陶土色可能说明胆汁没到位，指向肝胆。红色或黑色需要看医生，不是顾问能处理的。',
        'Lo normal es marrón medio a oscuro. Pálido puede significar que la bilis no llega. Rojo o negro necesita un médico.',
        'सामान्य मध्यम से गहरा भूरा है। लाल या काला होने पर डॉक्टर को दिखाएँ।'],
    o: [['Medium to dark brown','Medium to dark brown (typical)','中到深棕色（常见）','Marrón medio a oscuro (típico)','मध्यम से गहरा भूरा'],
        ['Light brown or yellow','Light brown or yellowish','浅棕或偏黄','Marrón claro o amarillento','हल्का भूरा या पीला'],
        ['Green','Green','绿色','Verde','हरा'],
        ['Pale or clay coloured','Pale, grey or clay coloured','灰白或陶土色','Pálido, gris o color arcilla','पीला या मिट्टी जैसा'],
        ['Very dark or black','Very dark or black','很深或发黑','Muy oscuro o negro','बहुत गहरा या काला'],
        ['Red or blood present','Red, or blood present','红色或带血','Rojo, o con sangre','लाल, या खून के साथ']] },
  'f-stoolFloat': { l: ['Does it float or sink?', '是漂浮还是下沉？', '¿Flota o se hunde?', 'यह तैरता है या डूबता है?'],
    h: ['Stool that consistently floats and is hard to flush usually means fat is not being absorbed properly, which points at the pancreas, bile, or the small intestine lining.',
        '持续漂浮、不易冲走，通常说明脂肪吸收不良，指向胰腺、胆汁或小肠黏膜。',
        'Las heces que flotan y son difíciles de descargar suelen indicar mala absorción de grasa.',
        'लगातार तैरता मल वसा के ठीक से न पचने का संकेत है।'],
    o: [['Sinks','Sinks','下沉','Se hunde','डूबता है'],
        ['Sometimes floats','Sometimes floats','有时漂浮','A veces flota','कभी-कभी तैरता है'],
        ['Usually floats','Usually floats, hard to flush','经常漂浮，不易冲走','Suele flotar, difícil de descargar','आमतौर पर तैरता है']] },
  'f-stoolComplete': { l: ['Do you feel finished afterwards?', '排完后有排净的感觉吗？', '¿Siente que terminó?', 'क्या पूरा होने का अनुभव होता है?'],
    h: ['Feeling like it never finishes is a different problem from constipation, and it usually points at pelvic floor coordination or not enough bulk rather than at transit speed.',
        '总觉得排不干净，和便秘是两回事，通常指向盆底协调或容积不足，而不是通过速度。',
        'Sentir que nunca termina es distinto del estreñimiento; suele apuntar al suelo pélvico o falta de volumen.',
        'ऐसा लगना कि कभी पूरा नहीं होता, कब्ज़ से अलग समस्या है।'],
    o: [['Yes, complete','Yes, feels complete','有，觉得排干净了','Sí, se siente completo','हाँ, पूरा लगता है'],
        ['Sometimes incomplete','Sometimes feels incomplete','有时觉得没排干净','A veces incompleto','कभी-कभी अधूरा'],
        ['Usually incomplete','Usually feels incomplete','经常觉得没排干净','Casi siempre incompleto','अक्सर अधूरा'],
        ['Need to strain','Have to strain a lot','需要很用力','Tengo que esforzarme mucho','बहुत ज़ोर लगाना पड़ता है']] },
  'f-wiping': { l: ['How many wipes, typically?', '通常擦几次？', '¿Cuántas limpiezas?', 'कितनी बार पोंछना पड़ता है?'],
    h: ['A single wipe means the stool was well formed. Repeated wiping usually means it was either too soft or evacuation did not complete, so this cross-checks the form answer above.',
        '一次擦净说明成形良好。反复擦拭通常说明太软或没排干净，所以这题用来交叉验证上面的形状。',
        'Una sola limpieza indica heces bien formadas. Limpiar repetidamente sugiere lo contrario.',
        'एक बार में साफ़ होना अच्छे आकार का संकेत है।'],
    o: [['1 wipe','1 wipe','1次','1 vez','1 बार'],
        ['2-3 wipes','2–3 wipes','2-3次','2–3 veces','2–3 बार'],
        ['4+ wipes','4 or more wipes','4次以上','4 o más veces','4 या अधिक बार']] },
  'f-stoolOdor': { l: ['How strong is the smell?', '气味有多重？', '¿Qué tan fuerte es el olor?', 'गंध कितनी तेज़ है?'],
    h: ['A strong, distinctly foul smell usually reflects what the gut bacteria are being fed. A high meat and low plant intake shifts fermentation toward the products that smell worst.',
        '气味特别难闻，通常反映肠道菌群吃的是什么。高肉低植物的饮食会让发酵产物往最臭的方向偏。',
        'Un olor fuerte y desagradable suele reflejar lo que comen las bacterias intestinales.',
        'तेज़ दुर्गंध दर्शाती है कि आंत के बैक्टीरिया क्या खा रहे हैं।'],
    o: [['Mild','Mild','轻微','Leve','हल्की'],
        ['Noticeable','Noticeable but normal','明显但正常','Perceptible pero normal','ध्यान देने योग्य'],
        ['Strongly foul','Strongly foul','非常难闻','Muy desagradable','बहुत तेज़ दुर्गंध']] },
  'f-undigested': { l: ['Do you see undigested food in it?', '能看到未消化的食物吗？', '¿Ve comida sin digerir?', 'क्या बिना पचा भोजन दिखता है?'],
    h: ['Recognisable food in the stool, beyond things like corn and seeds which are normal, suggests it is passing through faster than the enzymes can work on it.',
        '大便里能认出食物原形（玉米、种子这类本来正常，不算），说明食物通过速度快过消化酶的作用速度。',
        'Comida reconocible en las heces sugiere que pasa más rápido de lo que las enzimas pueden actuar.',
        'मल में पहचानने योग्य भोजन बताता है कि भोजन तेज़ी से निकल रहा है।'],
    o: [['No','No','没有','No','नहीं'],
        ['Occasionally','Occasionally','偶尔','A veces','कभी-कभी'],
        ['Often','Often','经常','A menudo','अक्सर']] },

  /* Cycle */
  'f-cycleRegular': { l: ['Is your cycle regular?', '你的周期规律吗？', '¿Su ciclo es regular?', 'क्या आपका चक्र नियमित है?'],
    h: ['A regular cycle is one of the better general signals that hormones are clearing properly. Irregularity is common and is information, not an alarm.',
        '周期规律是激素清除正常的较好整体信号之一。不规律很常见，它是信息，不是警报。',
        'Un ciclo regular es una buena señal de que las hormonas se eliminan bien.',
        'नियमित चक्र दर्शाता है कि हार्मोन ठीक से साफ़ हो रहे हैं।'],
    o: [['Regular','Regular','规律','Regular','नियमित'],
        ['Irregular','Irregular','不规律','Irregular','अनियमित'],
        ['No longer menstruating','No longer menstruating','已绝经','Ya no menstrúo','अब मासिक नहीं होता']] },
  'f-menstrualPain': { l: ['Period pain', '经期疼痛', 'Dolor menstrual', 'मासिक दर्द'],
    h: ['Cramping severity is largely set by prostaglandins, and prostaglandin balance follows the ratio of fats in the diet. That makes it one of the more changeable symptoms here.',
        '痛经的严重程度主要由前列腺素决定，而前列腺素的平衡取决于饮食里脂肪的比例。所以这是本表里较容易改变的症状之一。',
        'La intensidad de los cólicos depende de las prostaglandinas, cuyo equilibrio sigue la proporción de grasas.',
        'ऐंठन की तीव्रता मुख्यतः प्रोस्टाग्लैंडिन से तय होती है।'],
    o: [['None','None','没有','Ninguno','कोई नहीं'],
        ['Mild','Mild','轻微','Leve','हल्का'],
        ['Moderate','Moderate','中等','Moderado','मध्यम'],
        ['Severe','Severe','严重','Intenso','गंभीर']] },
  'f-heavyFlow': { l: ['Heavy flow?', '经量大吗？', '¿Flujo abundante?', 'क्या रक्तस्राव अधिक है?'],
    h: ['Heavy flow over years is the most common route to low iron, and low iron shows up as fatigue, brain fog and hair loss long before anything else.',
        '长期经量大是缺铁最常见的路径，而缺铁会以疲劳、脑雾、掉发的形式出现，远早于其他表现。',
        'El flujo abundante durante años es la vía más común hacia el hierro bajo.',
        'वर्षों तक अधिक रक्तस्राव आयरन की कमी का सबसे आम कारण है।'],
    o: [['No','No','否','No','नहीं'],['Yes','Yes','是','Sí','हाँ']] },
  'f-pmsMoodSwings': { l: ['PMS mood swings?', '经前情绪波动？', '¿Cambios de humor premenstruales?', 'मासिक-पूर्व मूड बदलाव?'],
    h: ['Premenstrual mood change tracks with how completely oestrogen is cleared after it has done its job, which is liver work rather than a purely reproductive matter.',
        '经前情绪波动，和雌激素完成作用后被清除得是否彻底有关，这是肝脏的工作，而不纯粹是生殖系统的事。',
        'El cambio de humor premenstrual sigue a qué tan completamente se elimina el estrógeno.',
        'मासिक-पूर्व मूड परिवर्तन एस्ट्रोजन की सफ़ाई पर निर्भर करता है।'],
    o: [['No','No','否','No','नहीं'],['Yes','Yes','是','Sí','हाँ']] }
};

/* Symptom groups. Help sits at group level: 51 individual disclosures on one screen
   would be noise, and what a reader actually needs is what the cluster means. */
const SYMPTOM_GROUPS = [
  { g: ['Sleep and Nervous System', '睡眠与神经系统', 'Sueño y sistema nervioso', 'नींद और तंत्रिका तंत्र'],
    h: ['Sleep is when repair happens, so this group is read first. The pattern matters more than any single answer: trouble getting to sleep, waking through the night, and waking unrefreshed point at different things.',
        '修复发生在睡眠中，所以这一组最先看。整体模式比单个答案更重要：入睡困难、半夜醒来、睡醒仍疲劳，三者指向的问题不同。',
        'El sueño es cuando ocurre la reparación. El patrón importa más que una sola respuesta.',
        'नींद के दौरान मरम्मत होती है। पैटर्न किसी एक उत्तर से अधिक मायने रखता है।'],
    items: [
      ['Hard to fall asleep','Hard to fall asleep','入睡困难','Dificultad para dormirse','सोने में कठिनाई'],
      ['Wake up during the night','Wake up during the night','半夜会醒','Me despierto durante la noche','रात में जाग जाता हूँ'],
      ['Hard to fall back asleep','Hard to fall back asleep after waking','醒来后难以再入睡','Difícil volver a dormirme','जागने के बाद फिर सोना मुश्किल'],
      ['Vivid dreams or nightmares','Vivid dreams or nightmares','多梦或噩梦','Sueños vívidos o pesadillas','ज्वलंत सपने या बुरे सपने'],
      ['Restless or poor sleep quality','Restless or poor sleep quality','睡眠浅、质量差','Sueño inquieto o de mala calidad','बेचैन या खराब नींद'],
      ['Wake up tired even after 8 hours','Wake up tired even after 8 hours','睡够8小时仍然疲惫','Despierto cansado incluso tras 8 horas','8 घंटे बाद भी थका हुआ'],
      ['Anxiety or mental tension','Anxiety or mental tension','焦虑或精神紧张','Ansiedad o tensión mental','चिंता या मानसिक तनाव'],
      ['Heart palpitations','Heart palpitations','心悸','Palpitaciones','धड़कन तेज़ होना'],
      ['Cold sweaty hands or feet','Cold sweaty hands or feet','手脚冰凉出汗','Manos o pies fríos y sudorosos','ठंडे पसीने वाले हाथ-पैर'],
      ['Difficulty relaxing or winding down','Difficulty relaxing or winding down','难以放松','Dificultad para relajarse','आराम करने में कठिनाई']] },
  { g: ['Digestion and Gut', '消化与肠道', 'Digestión e intestino', 'पाचन और आंत'],
    h: ['Most immune tissue sits in the gut wall, so this group is upstream of the immune one below. Poor absorption means the raw material for everything else is not arriving regardless of what you eat.',
        '大部分免疫组织位于肠壁，所以这一组在下面免疫那组的上游。吸收不好，意味着不管吃什么，其他部分需要的原料都到不了。',
        'La mayor parte del tejido inmune está en la pared intestinal, así que este grupo antecede al inmune.',
        'अधिकांश प्रतिरक्षा ऊतक आंत की दीवार में है, इसलिए यह समूह प्रतिरक्षा से पहले आता है।'],
    items: [
      ['Poor digestion or feel full quickly','Poor digestion or feel full quickly','消化不良或容易饱','Mala digestión o saciedad rápida','खराब पाचन या जल्दी भरा लगना'],
      ['Bloating after meals','Bloating after meals','饭后腹胀','Hinchazón después de comer','खाने के बाद फूलना'],
      ['Excessive gas','Excessive gas','排气多','Exceso de gases','अत्यधिक गैस'],
      ['Diarrhea or loose stools','Diarrhoea or loose stools','腹泻或大便稀','Diarrea o heces sueltas','दस्त या पतला मल'],
      ['Constipation','Constipation','便秘','Estreñimiento','कब्ज़'],
      ['Bad breath or bitter taste in mouth','Bad breath or bitter taste','口臭或口苦','Mal aliento o sabor amargo','मुँह की दुर्गंध या कड़वाहट'],
      ['Acid reflux or heartburn','Acid reflux or heartburn','反酸或烧心','Reflujo o acidez','एसिड रिफ्लक्स']] },
  { g: ['Immune and Respiratory', '免疫与呼吸', 'Inmunidad y respiración', 'प्रतिरक्षा और श्वसन'],
    h: ['Frequent infection and allergic reactivity are two different pictures: one is a defence running below capacity, the other is regulation misfiring. Both trace back to the gut group above.',
        '反复感染和过敏反应是两种不同的图景：一个是防御能力不足，另一个是调节出错。两者都能追溯到上面的肠道那一组。',
        'La infección frecuente y la reactividad alérgica son dos cuadros distintos, y ambos remiten al grupo intestinal.',
        'बार-बार संक्रमण और एलर्जी दो अलग तस्वीरें हैं, दोनों आंत समूह से जुड़ी हैं।'],
    items: [
      ['Catch colds frequently','Catch colds frequently','经常感冒','Me resfrío con frecuencia','बार-बार सर्दी'],
      ['Cough easily','Cough easily','容易咳嗽','Toso con facilidad','आसानी से खांसी'],
      ['Runny nose easily','Runny nose easily','容易流鼻涕','Nariz que gotea fácilmente','आसानी से नाक बहना'],
      ['Sneezing a lot','Sneezing a lot','经常打喷嚏','Estornudo mucho','बहुत छींक आना'],
      ['Nasal allergies','Nasal allergies','鼻炎、鼻子过敏','Alergias nasales','नाक की एलर्जी'],
      ["Athlete's foot or nail fungus","Athlete's foot or nail fungus",'脚气或灰指甲','Pie de atleta u hongos en uñas','एथलीट फुट या नाखून फफूंद']] },
  { g: ['Energy and Cognitive', '精力与认知', 'Energía y cognición', 'ऊर्जा और संज्ञान'],
    h: ['These are usually downstream symptoms rather than a problem of their own. They tend to move first when sleep, breakfast and absorption are corrected, which makes them a useful early progress marker.',
        '这些通常是下游症状，而不是独立问题。睡眠、早餐和吸收改善后它们往往最先变化，所以是很有用的早期进展指标。',
        'Suelen ser síntomas derivados. Mejoran primero cuando se corrigen el sueño y la absorción.',
        'ये आमतौर पर गौण लक्षण हैं और नींद व अवशोषण सुधरने पर सबसे पहले बदलते हैं।'],
    items: [
      ['Afternoon energy crash','Afternoon energy crash','下午精力下滑','Bajón de energía por la tarde','दोपहर में ऊर्जा गिरना'],
      ['Persistent fatigue regardless of sleep','Persistent fatigue regardless of sleep','不管睡多久都累','Fatiga persistente pese al sueño','नींद के बावजूद थकान'],
      ['Brain fog or mental cloudiness','Brain fog','脑雾、思维不清','Niebla mental','मानसिक धुंध'],
      ['Forgetfulness','Forgetfulness','健忘','Olvidos','भूलने की आदत'],
      ['Hard to focus or concentrate','Hard to focus','注意力不集中','Dificultad para concentrarse','ध्यान लगाने में कठिनाई'],
      ['Reliant on caffeine to function','Rely on caffeine to function','靠咖啡因才能正常运转','Dependo de la cafeína','कैफ़ीन पर निर्भरता'],
      ['Feel slow or sluggish in the morning','Slow or sluggish in the morning','早上起来迟钝','Lento por la mañana','सुबह सुस्ती']] },
  { g: ['Skin and Hair', '皮肤与头发', 'Piel y cabello', 'त्वचा और बाल'],
    h: ['Hair, skin and nails are the body’s discretionary spending: they are funded last when protein and micronutrients are short. That makes them an early visible sign, but a slow one to change back, on the order of three months.',
        '头发、皮肤、指甲是身体的"可选支出"：蛋白质和微量营养素不足时最后才供给。所以它们是较早出现的可见信号，但变回来很慢，大约要三个月。',
        'Cabello, piel y uñas son el gasto discrecional del cuerpo: se financian al final cuando falta proteína.',
        'बाल, त्वचा और नाखून शरीर का विवेकाधीन खर्च हैं, कमी होने पर सबसे बाद में पोषित होते हैं।'],
    items: [
      ['Acne or breakouts','Acne or breakouts','长痘','Acné o brotes','मुँहासे'],
      ['Hair loss or thinning','Hair loss or thinning','掉发或变稀','Caída o adelgazamiento del cabello','बाल झड़ना'],
      ['Dandruff or itchy scalp','Dandruff or itchy scalp','头皮屑或头皮痒','Caspa o cuero cabelludo con picor','रूसी या खुजली'],
      ['Dry or brittle hair','Dry or brittle hair','头发干枯易断','Cabello seco o quebradizo','सूखे या भंगुर बाल'],
      ['Skin allergies or hives','Skin allergies or hives','皮肤过敏或荨麻疹','Alergias cutáneas o urticaria','त्वचा एलर्जी'],
      ['Dark circles under eyes','Dark circles under eyes','黑眼圈','Ojeras','आँखों के नीचे काले घेरे']] },
  { g: ["Women's Health", '女性健康', 'Salud femenina', 'महिला स्वास्थ्य'],
    h: ['Hormones are metabolised and cleared by the liver once they have done their job, which is why this group is read alongside sleep and digestion rather than on its own.',
        '激素完成作用后由肝脏代谢和清除，所以这一组要和睡眠、消化一起看，而不是单独看。',
        'Las hormonas se metabolizan en el hígado tras cumplir su función, por eso este grupo se lee junto al sueño y la digestión.',
        'हार्मोन अपना काम पूरा करने के बाद जिगर द्वारा साफ़ होते हैं।'],
    items: [
      ['Heavy menstrual flow','Heavy menstrual flow','经量多','Flujo menstrual abundante','अधिक मासिक रक्तस्राव'],
      ['Severe period cramps','Severe period cramps','痛经严重','Cólicos menstruales intensos','तेज़ मासिक ऐंठन'],
      ['PMS (mood, bloating, breast tenderness)','PMS: mood, bloating, breast tenderness','经前综合征（情绪、腹胀、乳房胀痛）','SPM: humor, hinchazón, sensibilidad mamaria','पीएमएस'],
      ['Irregular periods','Irregular periods','月经不规律','Períodos irregulares','अनियमित मासिक'],
      ['Low libido','Low libido','性欲低','Libido baja','कम कामेच्छा']] },
  { g: ['Pain and Inflammation', '疼痛与炎症', 'Dolor e inflamación', 'दर्द और सूजन'],
    h: ['Pain in a young person with good body composition is rarely mechanical. It usually reflects inflammatory balance, which is set largely by the ratio of fats in the diet and by plant intake.',
        '年轻、体成分良好的人出现疼痛，很少是机械性的。通常反映炎症平衡，而它主要由饮食脂肪比例和植物摄入量决定。',
        'El dolor en una persona joven con buena composición rara vez es mecánico; suele reflejar el equilibrio inflamatorio.',
        'अच्छी शरीर संरचना वाले युवा में दर्द शायद ही यांत्रिक होता है।'],
    items: [
      ['Joint pain or stiffness','Joint pain or stiffness','关节痛或僵硬','Dolor o rigidez articular','जोड़ों का दर्द'],
      ['Back or neck pain','Back or neck pain','腰背或颈部疼痛','Dolor de espalda o cuello','पीठ या गर्दन दर्द'],
      ['Muscle cramps','Muscle cramps','肌肉抽筋','Calambres musculares','मांसपेशियों में ऐंठन'],
      ['Numbness or tingling in limbs','Numbness or tingling in limbs','手脚麻木或刺痛','Entumecimiento u hormigueo','अंगों में सुन्नपन'],
      ['Headaches or migraines','Headaches or migraines','头痛或偏头痛','Dolores de cabeza o migrañas','सिरदर्द या माइग्रेन']] },
  { g: ['Metabolic', '代谢', 'Metabolismo', 'चयापचय'],
    h: ['Cravings and binge episodes are usually a blood sugar pattern rather than a willpower problem. That distinction matters, because the fix is meal structure and protein timing, not trying harder.',
        '嘴馋和暴食通常是血糖模式问题，不是意志力问题。这个区分很重要，因为解法是调整进餐结构和蛋白质时机，而不是更努力地忍。',
        'Los antojos y atracones suelen ser un patrón de azúcar en sangre, no un problema de voluntad.',
        'लालसा और अधिक खाना आमतौर पर रक्त शर्करा का पैटर्न है, इच्छाशक्ति की समस्या नहीं।'],
    items: [
      ['Unexplained weight gain','Unexplained weight gain','莫名体重增加','Aumento de peso inexplicable','अस्पष्ट वज़न बढ़ना'],
      ['Difficulty losing weight','Difficulty losing weight','减重困难','Dificultad para perder peso','वज़न घटाने में कठिनाई'],
      ['Craving sweets or carbs','Craving sweets or carbs','嗜甜或想吃碳水','Antojo de dulces o carbohidratos','मीठे की लालसा'],
      ['Binge eating episodes','Binge eating episodes','暴食','Episodios de atracones','अधिक खाने के दौरे'],
      ['Always hungry or never satisfied','Always hungry or never satisfied','总是饿、吃不饱','Siempre con hambre','हमेशा भूख लगना']] }
];

const SYMPTOM_HELP = {
 "Hard to fall asleep": [
  "Trouble getting to sleep is usually a wind-down problem rather than a tiredness problem: the nervous system has not switched out of its alert state. Screens in the last half hour are the most common single cause.",
  "入睡困难通常不是不够累，而是没能从警觉状态切换下来。睡前半小时用屏幕是最常见的单一原因。",
  "Costar dormirse suele ser un problema de desconexión, no de cansancio: el sistema nervioso no ha salido de su estado de alerta.",
  "सोने में कठिनाई आमतौर पर थकान की नहीं, बल्कि शांत होने की समस्या है।"
 ],
 "Wake up during the night": [
  "Waking through the night breaks sleep into fragments, so total hours can look fine while the restorative depth never arrives. If it happens at a consistent hour that is more informative than the waking itself.",
  "半夜醒来会把睡眠切成碎片，所以总时长看起来正常，但真正修复性的深睡从未到达。如果每次都在固定时间点醒，这比「醒了」本身更有信息量。",
  "Despertarse durante la noche fragmenta el sueño, así que las horas totales parecen bien mientras la profundidad reparadora nunca llega.",
  "रात में जागना नींद को टुकड़ों में बाँट देता है, इसलिए कुल घंटे ठीक दिखते हैं पर गहरी नींद नहीं मिलती।"
 ],
 "Hard to fall back asleep": [
  "Getting back to sleep is a different mechanism from getting to sleep in the first place. Difficulty here often means blood sugar dropped or the stress response fired, rather than a sleep-onset problem.",
  "再次入睡和最初入睡是两套机制。这里困难，往往说明血糖掉了或应激反应被触发，而不是入睡本身有问题。",
  "Volver a dormirse es un mecanismo distinto al de dormirse al principio; suele indicar una caída de azúcar o una respuesta de estrés.",
  "फिर से सोना पहली बार सोने से अलग तंत्र है; यह अक्सर रक्त शर्करा गिरने का संकेत है।"
 ],
 "Vivid dreams or nightmares": [
  "Unusually vivid dreaming often means sleep is light rather than deep, so more of the night is spent in the dreaming stage. It commonly travels with late meals, alcohol, or a busy mind at bedtime.",
  "梦特别多、特别真实，通常说明睡眠浅而不深，整夜有更多时间停留在做梦阶段。常和晚餐太晚、饮酒或睡前思绪多同时出现。",
  "Los sueños muy vívidos suelen indicar sueño ligero en vez de profundo, con más noche en la fase de sueño.",
  "बहुत ज्वलंत सपने आमतौर पर हल्की नींद का संकेत हैं, गहरी नींद का नहीं।"
 ],
 "Restless or poor sleep quality": [
  "Quality is separate from quantity. Eight restless hours repair less than six settled ones, which is why this is asked apart from bedtime.",
  "质量和时长是两回事。八小时不安稳的睡眠，修复效果不如六小时安稳的，所以这题和睡觉时间分开问。",
  "La calidad es distinta de la cantidad: ocho horas inquietas reparan menos que seis tranquilas.",
  "गुणवत्ता मात्रा से अलग है। आठ बेचैन घंटे छह शांत घंटों से कम मरम्मत करते हैं।"
 ],
 "Wake up tired even after 8 hours": [
  "This is the clearest sign that the hours are there but the depth is not. It points at what is interrupting sleep rather than at how long you sleep.",
  "这是「时长够了但深度不够」最清楚的信号。它指向的是什么在打断睡眠，而不是你睡了多久。",
  "Es la señal más clara de que las horas están pero la profundidad no.",
  "यह सबसे स्पष्ट संकेत है कि घंटे तो हैं पर गहराई नहीं।"
 ],
 "Anxiety or mental tension": [
  "Sustained tension keeps the body in its alert state, which burns through B vitamins and magnesium faster than a calm day does. In this framework it also connects to the liver.",
  "长期紧张会让身体停在警觉状态，比平静的一天消耗更多B族维生素和镁。在这套框架里它也和肝相连。",
  "La tensión sostenida mantiene el estado de alerta, que consume vitaminas B y magnesio más rápido.",
  "लगातार तनाव शरीर को सतर्क अवस्था में रखता है, जो बी विटामिन और मैग्नीशियम तेज़ी से खर्च करता है।"
 ],
 "Heart palpitations": [
  "Usually travels with the stress and sleep picture rather than indicating a cardiac problem, but it is worth mentioning to a physician for completeness.",
  "通常和压力、睡眠那组一起出现，而不是心脏本身的问题，但为稳妥起见值得跟医生提一句。",
  "Suele acompañar al cuadro de estrés y sueño más que indicar un problema cardíaco, pero conviene mencionarlo al médico.",
  "यह आमतौर पर तनाव और नींद के साथ चलता है, फिर भी डॉक्टर को बताना उचित है।"
 ],
 "Cold sweaty hands or feet": [
  "Peripheral circulation is what the body reduces first when it is conserving or under sustained stress, so cold extremities are usually a signal from the nervous system rather than a circulation defect.",
  "身体在节省或长期承压时最先减少的就是末梢循环，所以手脚冰凉通常是神经系统发出的信号，而不是循环本身有毛病。",
  "La circulación periférica es lo primero que el cuerpo reduce bajo estrés sostenido.",
  "तनाव में शरीर सबसे पहले परिधीय रक्त संचार घटाता है।"
 ],
 "Difficulty relaxing or winding down": [
  "Magnesium is what muscle and nervous tissue use to relax, so this answer specifically informs whether that is worth addressing.",
  "镁是肌肉和神经组织用来放松的原料，所以这一题直接决定要不要处理这一块。",
  "El magnesio es lo que usan el músculo y el tejido nervioso para relajarse.",
  "मैग्नीशियम वह है जिससे मांसपेशी और तंत्रिका ऊतक शिथिल होते हैं।"
 ],
 "Poor digestion or feel full quickly": [
  "Feeling full early usually means the stomach is emptying slowly, which is what happens when digestive capacity is low. Meal size and pace matter more here than what is eaten.",
  "很快就饱，通常说明胃排空慢，这是消化能力不足的表现。这种情况下进餐的量和速度比吃什么更重要。",
  "Saciarse pronto suele significar vaciado gástrico lento, señal de baja capacidad digestiva.",
  "जल्दी भरा लगना धीमे गैस्ट्रिक खाली होने का संकेत है।"
 ],
 "Bloating after meals": [
  "Gas produced after eating is a fermentation signal: something is reaching the gut bacteria before it has been broken down. Timing after the meal tells us roughly where.",
  "饭后产气是发酵信号：有东西还没被分解就到了肠道菌群那里。距离进餐多久出现，大致能判断发生在哪一段。",
  "El gas tras comer es una señal de fermentación: algo llega a las bacterias antes de descomponerse.",
  "खाने के बाद गैस किण्वन का संकेत है।"
 ],
 "Excessive gas": [
  "Volume of gas reflects what the gut bacteria are being fed. A high meat and low plant intake shifts the population and the byproducts it makes.",
  "排气量反映肠道菌群吃的是什么。高肉低植物的饮食会改变菌群构成和它产生的副产物。",
  "El volumen de gas refleja lo que comen las bacterias intestinales.",
  "गैस की मात्रा दर्शाती है कि आंत के बैक्टीरिया क्या खा रहे हैं।"
 ],
 "Diarrhea or loose stools": [
  "Loose stool means transit is faster than absorption can keep up with, so nutrients pass through. It quietly undercuts whatever else is being eaten or taken.",
  "大便稀说明通过速度快过吸收速度，营养素就这样过去了。它会悄悄抵消你吃的其他东西的效果。",
  "Las heces sueltas significan tránsito más rápido de lo que la absorción puede seguir.",
  "पतला मल दर्शाता है कि गति अवशोषण से तेज़ है।"
 ],
 "Constipation": [
  "Slow transit means waste sits longer, and some of what the liver packaged for removal gets reabsorbed instead. That is added load on the organ that processed it.",
  "通过慢意味着废物停留更久，肝脏已经打包准备排出的东西有一部分会被重新吸收。这等于给处理它的器官加了负担。",
  "El tránsito lento significa que parte de lo que el hígado preparó para eliminar se reabsorbe.",
  "धीमी गति का अर्थ है कि जिगर द्वारा निकालने को तैयार कुछ पदार्थ फिर से सोख लिया जाता है।"
 ],
 "Bad breath or bitter taste in mouth": [
  "A bitter taste points further upstream than the gut, toward bile and the liver. It is one of the more specific answers on this form.",
  "口苦指向的位置比肠道更靠上游，指向胆汁和肝。这是本表里比较有指向性的一题。",
  "Un sabor amargo apunta más arriba que el intestino, hacia la bilis y el hígado.",
  "कड़वा स्वाद आंत से ऊपर, पित्त और जिगर की ओर संकेत करता है।"
 ],
 "Acid reflux or heartburn": [
  "Often assumed to be too much acid when it is frequently the opposite, or a timing problem: eating late, lying down soon after, or eating too fast.",
  "常被当成胃酸太多，但很多时候恰恰相反，或者只是时机问题：吃太晚、吃完就躺、吃太快。",
  "A menudo se asume exceso de ácido cuando suele ser lo contrario, o un problema de horario.",
  "इसे अक्सर अधिक अम्ल समझा जाता है जबकि अक्सर उल्टा होता है।"
 ],
 "Catch colds frequently": [
  "Frequency over a year is what matters, not any single illness. More than three or four a year suggests a defence running below capacity rather than bad luck.",
  "看的是一年的频率，不是某一次生病。一年超过三四次，说明防御能力不足，而不是运气差。",
  "Lo que importa es la frecuencia anual, no una enfermedad puntual.",
  "महत्वपूर्ण वार्षिक आवृत्ति है, कोई एक बीमारी नहीं।"
 ],
 "Cough easily": [
  "A cough that starts readily suggests the airway lining is reactive or under-protected. Carotenoids maintain that lining, and they come from coloured vegetables.",
  "一咳就来，说明气道黏膜反应性高或保护不足。维护这层黏膜的是类胡萝卜素，来自有颜色的蔬菜。",
  "Una tos que aparece con facilidad sugiere que el revestimiento de las vías respiratorias está reactivo.",
  "आसानी से खांसी वायुमार्ग की परत के प्रतिक्रियाशील होने का संकेत है।"
 ],
 "Runny nose easily": [
  "Worth separating from a cold: a nose that runs without illness is usually an allergic or reactive pattern, which is immune regulation rather than immune weakness.",
  "要和感冒区分开：没生病也流鼻涕，通常是过敏或反应性模式，属于免疫调节问题，而不是免疫力弱。",
  "Conviene separarlo de un resfriado: una nariz que gotea sin enfermedad suele ser un patrón alérgico.",
  "सर्दी से अलग: बिना बीमारी नाक बहना एलर्जी पैटर्न है।"
 ],
 "Sneezing a lot": [
  "Sneezing in bouts, particularly on waking or on exposure to dust, points at an allergic pattern rather than infection.",
  "成串打喷嚏，尤其是早上起床或接触灰尘时，指向过敏而不是感染。",
  "Estornudar en rachas, sobre todo al despertar o con polvo, apunta a un patrón alérgico.",
  "लगातार छींक, खासकर जागने पर, एलर्जी की ओर संकेत करती है।"
 ],
 "Nasal allergies": [
  "An allergic pattern means the immune system is misidentifying harmless things as threats. That is a regulation problem, and a large share of immune regulation happens at the gut wall.",
  "过敏意味着免疫系统把无害的东西误判成威胁。这是调节问题，而免疫调节有很大一部分发生在肠壁。",
  "Un patrón alérgico significa que el sistema inmune identifica mal cosas inofensivas.",
  "एलर्जी का अर्थ है प्रतिरक्षा तंत्र हानिरहित चीज़ों को खतरा समझ रहा है।"
 ],
 "Athlete's foot or nail fungus": [
  "Persistent fungal issues on the skin surface usually reflect what is happening internally rather than local hygiene, and they tend to follow the gut and immune picture.",
  "皮肤表面反复的真菌问题，通常反映的是体内状况而不是局部卫生，它往往跟着肠道和免疫那条线走。",
  "Los hongos persistentes en la piel suelen reflejar lo interno más que la higiene local.",
  "लगातार फफूंद संक्रमण स्थानीय सफ़ाई से अधिक आंतरिक स्थिति दर्शाता है।"
 ],
 "Afternoon energy crash": [
  "A predictable afternoon dip is a blood sugar pattern, and it is usually set by what happened at breakfast rather than at lunch.",
  "下午定时犯困是血糖模式，而且通常由早餐决定，不是午餐。",
  "Un bajón vespertino predecible es un patrón de azúcar en sangre, fijado por el desayuno.",
  "दोपहर की गिरावट रक्त शर्करा का पैटर्न है, जो नाश्ते से तय होता है।"
 ],
 "Persistent fatigue regardless of sleep": [
  "Fatigue that sleep does not fix points away from sleep and toward absorption, iron status, or thyroid. It is the answer most likely to justify a blood test.",
  "睡觉解决不了的疲劳，指向的就不是睡眠，而是吸收、铁状态或甲状腺。这是本表里最可能需要去验血的一项。",
  "La fatiga que el sueño no arregla apunta a absorción, hierro o tiroides.",
  "जो थकान नींद से ठीक न हो, वह अवशोषण या आयरन की ओर संकेत करती है।"
 ],
 "Brain fog or mental cloudiness": [
  "The brain is the organ least tolerant of low blood volume and unstable glucose, so fog is often the first thing to appear and the first to improve.",
  "大脑是最不能忍受血容量不足和血糖不稳的器官，所以脑雾往往最先出现，也最先改善。",
  "El cerebro es el órgano menos tolerante al bajo volumen sanguíneo y la glucosa inestable.",
  "मस्तिष्क कम रक्त मात्रा और अस्थिर ग्लूकोज़ को सबसे कम सहन करता है।"
 ],
 "Forgetfulness": [
  "Short-term forgetfulness usually travels with sleep debt and B vitamin status rather than indicating anything about memory itself.",
  "短期健忘通常和睡眠债、B族维生素状态有关，而不是记忆力本身出了问题。",
  "El olvido a corto plazo suele acompañar la deuda de sueño y el estado de vitaminas B.",
  "अल्पकालिक भूलना नींद की कमी और बी विटामिन से जुड़ा है।"
 ],
 "Hard to focus or concentrate": [
  "Concentration is expensive metabolically, so it is one of the first functions the body downgrades when fuel or raw material is short.",
  "集中注意力的代谢成本很高，所以燃料或原料不足时，身体最先降级的功能之一就是它。",
  "La concentración es metabólicamente costosa, así que es de lo primero que el cuerpo degrada.",
  "एकाग्रता चयापचय की दृष्टि से महंगी है।"
 ],
 "Reliant on caffeine to function": [
  "Caffeine borrows energy rather than supplying it. Needing it to function is a useful measure of how large the underlying deficit is.",
  "咖啡因是借能量，不是给能量。需要靠它才能正常运转，是衡量底层亏空有多大的一个好指标。",
  "La cafeína pide prestada energía en vez de aportarla.",
  "कैफ़ीन ऊर्जा देती नहीं, उधार लेती है।"
 ],
 "Feel slow or sluggish in the morning": [
  "Morning sluggishness usually reflects what happened overnight rather than the morning itself: sleep depth, late eating, or the overnight blood sugar dip.",
  "早上迟钝通常反映的是夜里发生了什么，而不是早上本身：睡眠深度、吃太晚，或者夜间血糖下降。",
  "La lentitud matinal refleja lo ocurrido durante la noche más que la mañana misma.",
  "सुबह की सुस्ती रात में हुई घटनाओं को दर्शाती है।"
 ],
 "Acne or breakouts": [
  "Responds to blood sugar swings and to hormonal clearance rather than to washing. Skin turns over on roughly a 28 day cycle, so it is a useful early progress marker.",
  "痘痘反应的是血糖波动和激素清除，不是洗脸。皮肤大约28天更新一次，所以它是很好用的早期进展指标。",
  "Responde a los cambios de azúcar y al aclaramiento hormonal, no al lavado. La piel se renueva en unos 28 días.",
  "यह रक्त शर्करा और हार्मोन सफ़ाई पर प्रतिक्रिया करता है। त्वचा लगभग 28 दिनों में नवीनीकृत होती है।"
 ],
 "Hair loss or thinning": [
  "Hair is metabolically expensive and non-essential, so it is among the first tissues defunded when protein, iron or micronutrients run short. It is also slow to recover, around three months.",
  "头发代谢成本高又非必需，所以蛋白质、铁或微量营养素不足时最先被断供。它恢复也慢，大约三个月。",
  "El cabello es costoso y no esencial, así que es de los primeros tejidos que se desfinancian.",
  "बाल महंगे और गैर-आवश्यक हैं, इसलिए कमी में सबसे पहले प्रभावित होते हैं।"
 ],
 "Dandruff or itchy scalp": [
  "Often fungal in origin, which links it to the immune picture rather than to shampoo.",
  "很多时候是真菌来源，所以它连的是免疫那条线，而不是洗发水。",
  "A menudo de origen fúngico, lo que lo vincula al cuadro inmune más que al champú.",
  "अक्सर फफूंदजन्य, जो इसे प्रतिरक्षा से जोड़ता है।"
 ],
 "Dry or brittle hair": [
  "Texture reflects the raw material available while the strand was being built, so it reports on the last few months rather than on today.",
  "发质反映的是这根头发长出来那段时间可用的原料，所以它报告的是过去几个月，不是今天。",
  "La textura refleja el material disponible mientras crecía el cabello, informa de los últimos meses.",
  "बनावट पिछले कुछ महीनों की स्थिति दर्शाती है।"
 ],
 "Skin allergies or hives": [
  "A reactive skin response is the same regulation issue as nasal allergies, showing up in a different tissue.",
  "皮肤的反应性反应，和鼻子过敏是同一个调节问题，只是出现在不同组织。",
  "Una respuesta cutánea reactiva es el mismo problema de regulación que las alergias nasales.",
  "त्वचा की प्रतिक्रिया वही नियमन समस्या है जो नाक की एलर्जी है।"
 ],
 "Dark circles under eyes": [
  "The skin under the eyes is thin enough to show what is happening in the small blood vessels beneath it, which is why hydration and sleep both show up here first.",
  "眼下皮肤薄到能透出下方小血管的状况，所以补水和睡眠的变化最先在这里显现。",
  "La piel bajo los ojos es lo bastante fina para mostrar lo que ocurre en los vasos pequeños.",
  "आँखों के नीचे की त्वचा पतली है, इसलिए यहाँ पहले दिखता है।"
 ],
 "Heavy menstrual flow": [
  "Heavy flow over years is the most common route to low iron, and low iron shows up as fatigue and hair loss long before anything else.",
  "长期经量大是缺铁最常见的路径，而缺铁会以疲劳和掉发的形式出现，远早于其他表现。",
  "El flujo abundante durante años es la vía más común hacia el hierro bajo.",
  "वर्षों तक अधिक रक्तस्राव आयरन की कमी का सबसे आम कारण है।"
 ],
 "Severe period cramps": [
  "Cramping severity is set largely by prostaglandins, whose balance follows the ratio of fats in the diet. That makes it one of the more changeable symptoms here.",
  "痛经程度主要由前列腺素决定，而它的平衡取决于饮食里脂肪的比例。所以这是本表里比较容易改变的症状。",
  "La intensidad depende de las prostaglandinas, cuyo equilibrio sigue la proporción de grasas.",
  "ऐंठन की तीव्रता प्रोस्टाग्लैंडिन से तय होती है।"
 ],
 "PMS (mood, bloating, breast tenderness)": [
  "Premenstrual symptoms track with how completely oestrogen is cleared after it has done its job, which is liver work rather than a purely reproductive matter.",
  "经前症状和雌激素完成作用后被清除得是否彻底有关，这是肝脏的工作，不纯粹是生殖系统的事。",
  "Los síntomas premenstruales siguen a qué tan completamente se elimina el estrógeno.",
  "मासिक-पूर्व लक्षण एस्ट्रोजन की सफ़ाई पर निर्भर करते हैं।"
 ],
 "Irregular periods": [
  "Common and usually information rather than an alarm. What it changes is how the rest of the hormonal answers should be read.",
  "很常见，通常是信息而不是警报。它改变的是其他激素相关答案该怎么解读。",
  "Común y normalmente información, no una alarma.",
  "सामान्य है और आमतौर पर जानकारी है, चेतावनी नहीं।"
 ],
 "Low libido": [
  "Usually downstream of sleep, stress and thyroid rather than a standalone finding, which is why it sits with the rest of the picture.",
  "通常是睡眠、压力和甲状腺的下游结果，而不是一个独立发现，所以它和整体图景放在一起看。",
  "Suele ser consecuencia del sueño, el estrés y la tiroides más que un hallazgo aislado.",
  "यह आमतौर पर नींद, तनाव और थायरॉइड का परिणाम है।"
 ],
 "Joint pain or stiffness": [
  "In a younger person with good body composition this is rarely mechanical. It usually reflects inflammatory balance, and it needs raw material for cartilage as well as a change in that balance.",
  "年轻、体成分良好的人出现这个，很少是机械性的。通常反映炎症平衡，而且除了改变平衡，还需要给软骨提供原料。",
  "En una persona joven con buena composición rara vez es mecánico; refleja el equilibrio inflamatorio.",
  "अच्छी संरचना वाले युवा में यह शायद ही यांत्रिक होता है।"
 ],
 "Back or neck pain": [
  "Worth separating posture and prolonged sitting from an inflammatory pattern, because the two need different answers.",
  "要把姿势、久坐和炎症模式区分开，因为这两者需要不同的解法。",
  "Conviene separar la postura y el sedentarismo de un patrón inflamatorio.",
  "मुद्रा और लंबे समय तक बैठने को सूजन से अलग करना ज़रूरी है।"
 ],
 "Muscle cramps": [
  "Cramping is the most recognisable magnesium signal there is, and it often appears alongside difficulty relaxing and restless sleep.",
  "抽筋是镁最容易辨认的信号，而且常和难以放松、睡不安稳一起出现。",
  "Los calambres son la señal de magnesio más reconocible.",
  "ऐंठन मैग्नीशियम का सबसे पहचानने योग्य संकेत है।"
 ],
 "Numbness or tingling in limbs": [
  "Tingling in the hands and feet is one of the more specific B12 signals, and it is worth mentioning to a physician rather than only supplementing.",
  "手脚发麻是B12比较有指向性的信号之一，值得跟医生说，而不是只靠补充剂。",
  "El hormigueo en manos y pies es una de las señales más específicas de B12.",
  "हाथ-पैर में झुनझुनी बी12 का विशिष्ट संकेत है।"
 ],
 "Headaches or migraines": [
  "Frequency and trigger matter more than severity. Dehydration, blood sugar dips and sleep debt account for most recurring headaches before anything else is considered.",
  "频率和诱因比疼痛程度更重要。在考虑其他原因之前，脱水、血糖下降和睡眠债能解释大部分反复出现的头痛。",
  "La frecuencia y el desencadenante importan más que la intensidad.",
  "आवृत्ति और कारण तीव्रता से अधिक मायने रखते हैं।"
 ],
 "Unexplained weight gain": [
  "Weight that moves without a change in habits usually points at thyroid, sleep or a medication rather than at eating, and it deserves a blood test rather than a stricter diet.",
  "习惯没变但体重变了，通常指向甲状腺、睡眠或某种药物，而不是吃得多，这种情况该去验血而不是更严格地节食。",
  "El peso que cambia sin cambiar hábitos apunta a tiroides, sueño o medicación.",
  "बिना आदत बदले वज़न बढ़ना थायरॉइड या नींद की ओर संकेत करता है।"
 ],
 "Difficulty losing weight": [
  "Usually a muscle mass and insulin question rather than a calorie one. Muscle is where glucose gets disposed of, so losing it makes the next attempt harder.",
  "通常是肌肉量和胰岛素的问题，而不是热量问题。肌肉是葡萄糖的去处，掉了肌肉会让下一次更难。",
  "Suele ser una cuestión de masa muscular e insulina, no de calorías.",
  "यह आमतौर पर मांसपेशी और इंसुलिन का प्रश्न है, कैलोरी का नहीं।"
 ],
 "Craving sweets or carbs": [
  "Cravings are a blood sugar pattern, not a willpower problem. They usually trace back to a missing or protein-free breakfast several hours earlier.",
  "嘴馋是血糖模式，不是意志力问题。通常能追溯到几小时前那顿缺失的、或者没有蛋白质的早餐。",
  "Los antojos son un patrón de azúcar en sangre, no de fuerza de voluntad.",
  "लालसा रक्त शर्करा का पैटर्न है, इच्छाशक्ति की समस्या नहीं।"
 ],
 "Binge eating episodes": [
  "Episodes are usually produced by the gap before them rather than by the food itself. Long gaps between meals are the most common trigger.",
  "暴食通常是它之前那段空档造成的，而不是食物本身。两餐间隔太长是最常见的诱因。",
  "Los episodios suelen producirse por el intervalo previo más que por la comida en sí.",
  "ये आमतौर पर पहले के अंतराल से होते हैं, भोजन से नहीं।"
 ],
 "Always hungry or never satisfied": [
  "Satiety is driven by protein and fibre more than by volume, so this answer usually reports on meal composition rather than on appetite.",
  "饱腹感主要由蛋白质和纤维决定，而不是食物体积，所以这一题反映的通常是进餐结构，而不是食欲。",
  "La saciedad depende de la proteína y la fibra más que del volumen.",
  "तृप्ति प्रोटीन और फ़ाइबर से आती है, मात्रा से नहीं।"
 ]
};

if (typeof module !== 'undefined') module.exports = { LANGS, UI, SECTIONS, FIELDS, SYMPTOM_GROUPS, SYMPTOM_HELP };
