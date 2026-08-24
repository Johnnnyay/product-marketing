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
  scaleHelp:  ['Enter values from your smart scale app (e.g. FitIndex, Renpho, Xiaomi Health). Body fat and muscle entries should be percentages, not decimals.',
               '填体脂秤 App 里的数值（如 FitIndex、Renpho、小米运动健康）。体脂和肌肉请填百分数，不要填小数。',
               'Introduzca los valores de su app de báscula inteligente (FitIndex, Renpho, Xiaomi Health). La grasa y el músculo van en porcentaje, no en decimales.',
               'अपने स्मार्ट स्केल ऐप के मान भरें (FitIndex, Renpho, Xiaomi Health)। वसा और मांसपेशी प्रतिशत में भरें, दशमलव में नहीं।'],
  okTitle:    ['Your report is ready.', '你的报告已生成。', 'Su informe está listo.', 'आपकी रिपोर्ट तैयार है।'],
  okSub:      ['A personalized analysis with your health signals, the root causes behind them, and a plan for the first month.',
               '一份属于你的分析：你的健康信号、背后的成因，以及第一个月的方案。',
               'Un análisis personalizado con sus señales de salud, las causas que hay detrás y un plan para el primer mes.',
               'आपके स्वास्थ्य संकेतों, उनके मूल कारणों और पहले महीने की योजना के साथ एक व्यक्तिगत विश्लेषण।'],
  okNote:     ['You can also share this link with your consultant.', '这个链接也可以发给你的顾问。',
               'También puede compartir este enlace con su consultor.', 'आप यह लिंक अपने सलाहकार के साथ भी साझा कर सकते हैं।'],
  symptomsSub:['Tap how often each one happens. Tap N/A if it does not apply to you, and tap your answer again to clear it.',
               '点选每一项发生的频率。不适用的选"不适用"，再点一次已选的就能取消。',
               'Toque con qué frecuencia ocurre cada uno. Toque N/A si no aplica, y toque de nuevo su respuesta para borrarla.',
               'हर एक की आवृत्ति चुनें। लागू न हो तो N/A चुनें, और अपना उत्तर दोबारा दबाकर हटा दें।'],
  /* Three bands, matching the Google form this instrument comes from. The earlier
     four-band scale emitted 'Sometimes' and 'Rarely', which appear nowhere in the
     historical data and which report-spec.md does not reason about -- it reads
     'Often' and 'Occasionally'. Those two middle answers were being thrown away. */
  fOften:     ['Often', '经常', 'A menudo', 'अक्सर'],
  fOcc:       ['Occasionally', '偶尔', 'A veces', 'कभी-कभी'],
  fBarely:    ['Barely', '几乎不', 'Casi nunca', 'लगभग कभी नहीं'],
  fNA:        ['N/A', '不适用', 'N/A', 'लागू नहीं'],
  showMore:   ['Show the rest of this section ({n} more)', '展开这一节其余 {n} 项',
               'Ver el resto de esta sección ({n} más)', 'इस भाग के बाकी {n} देखें'],
  showLess:   ['Hide the rest', '收起其余项', 'Ocultar el resto', 'बाकी छिपाएँ'],
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
  'f-diet': { t: 'textarea',
    l: ['Describe what you typically eat in a day',
        '描述你一天通常怎么吃',
        'Describa lo que come normalmente en un día',
        'बताएँ कि आप आमतौर पर दिन भर क्या खाते हैं'],
    ph: ['Breakfast, lunch, dinner, snacks, and what you drink. Rough is fine.',
         '早餐、午餐、晚餐、零食，还有平时喝什么。大概写写就行。',
         'Desayuno, comida, cena, snacks y qué bebe. Una idea general basta.',
         'नाश्ता, दोपहर का भोजन, रात का खाना, स्नैक्स, और आप क्या पीते हैं। मोटा-मोटी ठीक है।'],
    h: ['A dropdown could only ever return one of four labels, and what you actually eat is the answer that most changes what gets recommended. Two lines in your own words is worth more than the closest tick box.',
        '下拉框最多只能返回四个标签之一，而你到底吃什么，是最能改变最终推荐的一题。用自己的话写两行，比选一个最接近的选项有用得多。',
        'Un desplegable solo puede devolver una de cuatro etiquetas, y lo que realmente come es la respuesta que más cambia la recomendación.',
        'ड्रॉपडाउन केवल चार लेबल में से एक लौटा सकता है, जबकि आप वास्तव में क्या खाते हैं यह सबसे अधिक मायने रखता है।'] },

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
  'f-waking13': { l: ['How often do you wake up during the night?',
        '你夜里醒来的频率是？',
        '¿Con qué frecuencia se despierta por la noche?',
        'आप रात में कितनी बार जागते हैं?'],
    h: ['Waking at night is worth separating from trouble falling asleep, because they have different causes. The 1 to 3 AM window matters specifically: it is when the liver does its heaviest processing, so waking in it regularly is read as information rather than as insomnia, and it connects to the eyes, emotional regulation and hormones.',
        '夜醒和入睡困难要分开看，因为成因不同。凌晨1到3点这个时段尤其有意义：那是肝脏处理负荷最重的时候（肝经当令），持续在这个时段醒来被视为一条信息而不是失眠，它和眼睛、情绪调节、激素都相连。',
        'Despertarse de noche conviene separarlo de la dificultad para dormirse, porque tienen causas distintas. La ventana de 1 a 3 AM importa en particular: es cuando el hígado hace su procesamiento más pesado.',
        'रात में जागना और नींद आने में कठिनाई अलग-अलग हैं। 1 से 3 बजे की खिड़की विशेष रूप से मायने रखती है: तब जिगर सबसे भारी कार्य करता है।'],
    o: [['Most nights, usually 1-3 AM','Most nights, usually between 1 and 3 AM','几乎每晚，通常在凌晨1-3点','Casi todas las noches, entre la 1 y las 3 AM','ज़्यादातर रातें, आमतौर पर 1-3 बजे'],
        ['Most nights, other times','Most nights, but at other times','几乎每晚，但不是这个时段','Casi todas las noches, a otras horas','ज़्यादातर रातें, अन्य समय'],
        ['A few nights a week','A few nights a week','每周几晚','Algunas noches por semana','सप्ताह में कुछ रातें'],
        ['Occasionally','Occasionally','偶尔','De vez en cuando','कभी-कभार'],
        ['Rarely or never','Rarely or never','很少或从不','Rara vez o nunca','शायद ही या कभी नहीं']] },

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
  'f-wiping': { l: ['How many wipes, typically?', '通常擦几次？', '¿Cuántas limpiezas?', 'कितनी बार पोंछना पड़ता है?'],
    h: ['A single wipe means the stool was well formed. Repeated wiping usually means it was either too soft or evacuation did not complete, so it is a quick read on whether things are moving the way they should.',
        '一次擦净说明成形良好。反复擦拭通常说明太软或没排干净，所以这一题能快速看出排便是否顺畅。',
        'Una sola limpieza indica heces bien formadas. Limpiar repetidamente sugiere lo contrario.',
        'एक बार में साफ़ होना अच्छे आकार का संकेत है।'],
    o: [['1 wipe','1 wipe','1次','1 vez','1 बार'],
        ['2-3 wipes','2–3 wipes','2-3次','2–3 veces','2–3 बार'],
        ['4+ wipes','4 or more wipes','4次以上','4 o más veces','4 या अधिक बार']] },
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

/* The 97-item instrument, transcribed from Johnny's Google form.
   English and Chinese are HIS wording. Spanish and Hindi are translated from it and
   have not been reviewed by a native speaker. Group help explains what the cluster
   means; every individual item carries its own explanation in SYMPTOM_HELP. */
const SYMPTOM_GROUPS = [
 {
  "key": "lifestyle",
  "g": [
   "Lifestyle Habits",
   "生活习惯",
   "Hábitos de vida",
   "जीवनशैली की आदतें"
  ],
  "h": [
   "Your daily habits are the foundation of health, accounting for 60% of what determines your well-being. Staying up late, stress, and poor diet lead to toxin buildup, chronic inflammation, and leave your cells undernourished.",
   "每天的习惯是健康的基石，占影响健康因素的60%。熬夜、压力、吃不对，会让身体累积毒素、引发慢性炎症，导致细胞吃不饱、营养失衡。",
   "Sus hábitos diarios son la base de la salud y determinan el 60% de su bienestar. Trasnochar, el estrés y una mala dieta acumulan toxinas, causan inflamación crónica y dejan sus células desnutridas.",
   "आपकी दैनिक आदतें स्वास्थ्य की नींव हैं और आपकी सेहत का 60% तय करती हैं। देर तक जागना, तनाव और खराब आहार विषाक्त पदार्थ जमा करते हैं।"
  ],
  "items": [
   [
    "Feel a lot of pressure from work/life",
    "Feel a lot of pressure from work or life",
    "工作生活压力大",
    "Mucha presión del trabajo o la vida",
    "काम या जीवन का अधिक दबाव"
   ],
   [
    "Spend excessive time online or prolonged sitting",
    "Excessive screen time or prolonged sitting",
    "经常上网、久坐",
    "Exceso de pantalla o estar sentado mucho tiempo",
    "अत्यधिक स्क्रीन समय या लंबे समय तक बैठना"
   ],
   [
    "Smoke or drink alcohol frequently",
    "Smoke or drink alcohol frequently",
    "经常抽烟、酗酒",
    "Fumar o beber alcohol con frecuencia",
    "अक्सर धूम्रपान या शराब"
   ],
   [
    "Hard to get out of bed, sleep-deprived",
    "Hard to get out of bed, consistently sleep-deprived",
    "赖床、睡不够",
    "Cuesta levantarse, falta de sueño constante",
    "बिस्तर से उठना मुश्किल, लगातार नींद की कमी"
   ],
   [
    "Crave sweets or salty snacks",
    "Crave sweets or salty snacks",
    "喜欢吃甜食或咸食",
    "Antojo de dulces o snacks salados",
    "मीठे या नमकीन की लालसा"
   ],
   [
    "Prefer eating cold foods",
    "Prefer cold or iced food and drinks",
    "偏好冷食冷饮",
    "Prefiere comida y bebidas frías o con hielo",
    "ठंडा या बर्फ़ वाला भोजन और पेय पसंद"
   ],
   [
    "Engage in binge eating or overeating",
    "Binge eating or overeating",
    "暴饮暴食",
    "Atracones o comer en exceso",
    "अधिक या तेज़ी से खाना"
   ]
  ]
 },
 {
  "key": "digest",
  "g": [
   "Digestion",
   "消化系统",
   "Digestión",
   "पाचन"
  ],
  "h": [
   "The digestive system is not only the factory for nutrient absorption but the body's largest immune organ and second brain. Bloating, constipation and bad breath directly reflect gut microbiota, enzyme activity, bile secretion and the integrity of the intestinal barrier. Many systemic diseases begin in the gut, which is why clearing comes first.",
   "消化系统不仅是营养吸收的工厂，更是人体最大的免疫器官和第二大脑。消化问题如腹胀、便秘、口臭，直接反映了肠道菌群状态、消化酶活性、肝脏胆汁分泌以及肠道粘膜屏障的完整性。许多全身性疾病都始于肠道，因此清肠毒是清调补养中的首要步骤。",
   "El sistema digestivo es la fábrica de absorción y también el mayor órgano inmune y el segundo cerebro. Muchas enfermedades sistémicas empiezan en el intestino, por eso limpiar es el primer paso.",
   "पाचन तंत्र न केवल पोषक अवशोषण की फैक्ट्री है, बल्कि शरीर का सबसे बड़ा प्रतिरक्षा अंग भी है। कई रोग आंत से शुरू होते हैं।"
  ],
  "items": [
   [
    "Bad breath",
    "Bad breath",
    "口臭",
    "Mal aliento",
    "मुँह की दुर्गंध"
   ],
   [
    "Bitter taste",
    "Bitter taste in the mouth",
    "口苦",
    "Sabor amargo",
    "मुँह में कड़वाहट"
   ],
   [
    "Mouth sores",
    "Mouth sores",
    "口腔溃疡",
    "Llagas en la boca",
    "मुँह के छाले"
   ],
   [
    "Thick tongue coating",
    "Thick tongue coating",
    "舌苔厚腻",
    "Lengua saburral gruesa",
    "जीभ पर मोटी परत"
   ],
   [
    "Poor digestion",
    "Poor digestion",
    "消化不良",
    "Mala digestión",
    "खराब पाचन"
   ],
   [
    "Burp or feel bloated easily",
    "Burp or feel bloated easily",
    "易打嗝、胀气",
    "Eructos o hinchazón fácil",
    "आसानी से डकार या फूलना"
   ],
   [
    "Stomach problems / Gastritis",
    "Stomach problems or gastritis",
    "胃炎",
    "Problemas de estómago o gastritis",
    "पेट की समस्या या जठरशोथ"
   ],
   [
    "Nausea or feel like throwing up",
    "Nausea or feeling sick",
    "易呕吐",
    "Náuseas o ganas de vomitar",
    "मतली या उल्टी जैसा"
   ],
   [
    "Fatty liver",
    "Fatty liver",
    "脂肪肝",
    "Hígado graso",
    "फैटी लिवर"
   ],
   [
    "Liver inflammation",
    "Liver inflammation",
    "肝部有炎症",
    "Inflamación del hígado",
    "जिगर की सूजन"
   ],
   [
    "Fart a lot",
    "Fart a lot",
    "易放屁",
    "Muchos gases",
    "अधिक गैस निकलना"
   ],
   [
    "Often have diarrhea",
    "Often have diarrhoea",
    "易腹泻",
    "Diarrea frecuente",
    "बार-बार दस्त"
   ],
   [
    "Constipation",
    "Constipation",
    "便秘",
    "Estreñimiento",
    "कब्ज़"
   ]
  ]
 },
 {
  "key": "nerve",
  "g": [
   "Nervous System",
   "神经系统",
   "Sistema nervioso",
   "तंत्रिका तंत्र"
  ],
  "h": [
   "Your brain and nerves are the command centre. Headaches, insomnia and mood swings are not just stress: they can signal dysfunction from an overloaded liver or missing nerve nutrients. Please assess the past month.",
   "大脑和神经是你的指挥中心。头痛、失眠、情绪波动不只是压力大，更可能是肝脏负担过重、神经营养缺乏导致的功能紊乱信号，提醒你需要排毒减压和补充细胞营养。请评估最近一个月的状态。",
   "El cerebro y los nervios son el centro de mando. Dolores de cabeza, insomnio y cambios de humor pueden señalar disfunción por un hígado sobrecargado o falta de nutrientes nerviosos.",
   "मस्तिष्क और तंत्रिकाएँ नियंत्रण केंद्र हैं। सिरदर्द, अनिद्रा और मूड बदलाव अधिभारित जिगर या पोषक कमी का संकेत दे सकते हैं।"
  ],
  "items": [
   [
    "Feel dizzy",
    "Feel dizzy",
    "头晕",
    "Mareos",
    "चक्कर आना"
   ],
   [
    "Often have headaches",
    "Often have headaches",
    "头疼",
    "Dolores de cabeza frecuentes",
    "बार-बार सिरदर्द"
   ],
   [
    "Get car sick or motion sickness easily",
    "Motion sickness easily",
    "晕车晕船",
    "Mareo por movimiento",
    "गति से जी मिचलाना"
   ],
   [
    "Prone to small accidents",
    "Prone to small accidents",
    "易生意外",
    "Propenso a accidentes menores",
    "छोटी दुर्घटनाओं की प्रवृत्ति"
   ],
   [
    "Hard to focus",
    "Hard to focus",
    "注意力不集中",
    "Dificultad para concentrarse",
    "ध्यान लगाने में कठिनाई"
   ],
   [
    "Easy to forget things",
    "Forgetfulness",
    "健忘",
    "Olvidos",
    "भूलने की आदत"
   ],
   [
    "Trouble hearing",
    "Trouble hearing",
    "听力下降",
    "Pérdida auditiva",
    "सुनने में कमी"
   ],
   [
    "Ears ringing",
    "Ears ringing",
    "耳鸣",
    "Zumbido en los oídos",
    "कानों में घंटी"
   ],
   [
    "Hard to fall asleep",
    "Hard to fall asleep",
    "入睡困难",
    "Cuesta dormirse",
    "सोने में कठिनाई"
   ],
   [
    "Vivid dreams",
    "Vivid dreams or nightmares",
    "多梦、噩梦",
    "Sueños vívidos",
    "ज्वलंत सपने"
   ],
   [
    "Wake up easily at night, especially startled",
    "Wake up startled at night",
    "夜惊易醒",
    "Despertar sobresaltado",
    "रात में चौंककर जागना"
   ],
   [
    "Feel anxious or nervous",
    "Feel anxious, nervous, or unable to relax",
    "焦虑紧张，或放松不下来",
    "Se siente ansioso, nervioso o incapaz de relajarse",
    "चिंतित, घबराया हुआ, या आराम न कर पाना"
   ],
   [
    "Often feel down or sad",
    "Often feel down or sad",
    "心情郁闷",
    "Ánimo bajo o tristeza",
    "उदासी या मन खराब"
   ],
   [
    "Lose temper easily",
    "Lose temper easily",
    "易发脾气",
    "Perder los estribos fácilmente",
    "जल्दी गुस्सा आना"
   ],
   [
    "Feel out of control with emotions",
    "Emotions feel out of control",
    "情绪失控",
    "Emociones fuera de control",
    "भावनाएँ नियंत्रण से बाहर"
   ],
   [
    "Eyes sensitive to light, tear easily",
    "Eyes sensitive to light, tear easily",
    "眼怕光易流泪",
    "Ojos sensibles a la luz, lagrimeo",
    "आँखें प्रकाश के प्रति संवेदनशील"
   ],
   [
    "Dry eyes",
    "Dry eyes",
    "眼干涩",
    "Ojos secos",
    "सूखी आँखें"
   ],
   [
    "Sore or aching eyes",
    "Sore or aching eyes",
    "眼胀痛",
    "Ojos doloridos",
    "आँखों में दर्द"
   ],
   [
    "Eyes get infected easily",
    "Eyes get infected easily",
    "眼部易感染",
    "Infecciones oculares frecuentes",
    "आँखों में बार-बार संक्रमण"
   ],
   [
    "Dark circles",
    "Dark circles under eyes",
    "黑眼圈",
    "Ojeras",
    "आँखों के नीचे काले घेरे"
   ],
   [
    "Puffy eyes",
    "Puffy eyes or eyelids",
    "眼睛浮肿",
    "Ojos hinchados",
    "आँखों में सूजन"
   ],
   [
    "Poor night vision",
    "Hard to see in dim light, or slow to adjust after a bright light",
    "光线暗时看不清，或从亮处进暗处适应很慢",
    "Cuesta ver con poca luz, o tarda en adaptarse tras una luz fuerte",
    "कम रोशनी में देखने में कठिनाई, या तेज़ रोशनी के बाद धीमा समायोजन"
   ],
   [
    "Blurry vision",
    "Vision blurs or goes hazy at times, apart from needing glasses",
    "视力时清时糊、发花（不是指近视需要戴眼镜）",
    "La visión se nubla por momentos, aparte de necesitar gafas",
    "दृष्टि कभी-कभी धुंधली हो जाती है, चश्मे की ज़रूरत से अलग"
   ],
   [
    "Bleed easily when brushing teeth",
    "Gums bleed when brushing, or are swollen and sore",
    "刷牙出血，或牙龈红肿疼痛",
    "Encías sangran al cepillar, o están hinchadas y doloridas",
    "ब्रश करते समय मसूड़ों से खून, या सूजन और दर्द"
   ],
   [
    "Toothache",
    "Frequent toothache",
    "牙痛频繁",
    "Dolor dental frecuente",
    "बार-बार दांत दर्द"
   ],
   [
    "Loose teeth",
    "Loose teeth",
    "牙齿松动",
    "Dientes flojos",
    "ढीले दांत"
   ],
   [
    "Cavities",
    "Cavities",
    "蛀牙",
    "Caries",
    "कैविटी"
   ]
  ]
 },
 {
  "key": "skin",
  "g": [
   "Skin and Hair",
   "皮肤系统",
   "Piel y cabello",
   "त्वचा और बाल"
  ],
  "h": [
   "The skin is the body's largest organ and a mirror of internal health. Acne, pigmentation, allergies and hair loss are not cosmetic concerns but signals of internal imbalance: liver detoxification, gut health, inflammation, hormonal balance and micronutrient status all show here.",
   "皮肤是人体最大的器官，也是内脏健康和外排毒素的镜子。痤疮、色斑、皮肤过敏、脱发等问题，不仅是外在美观问题，更是内部失衡的信号——肝脏解毒功能、肠道健康、炎症水平、激素平衡以及微量营养状况，都会直观地反映在皮肤和头发上。",
   "La piel es el órgano más grande y un espejo de la salud interna. El acné, la pigmentación, las alergias y la caída del cabello no son problemas estéticos sino señales de desequilibrio interno.",
   "त्वचा शरीर का सबसे बड़ा अंग और आंतरिक स्वास्थ्य का दर्पण है। मुँहासे, रंजकता, एलर्जी और बाल झड़ना आंतरिक असंतुलन के संकेत हैं।"
  ],
  "items": [
   [
    "Hair falling out easily",
    "Hair falling out easily",
    "易掉头发",
    "Caída fácil del cabello",
    "बाल आसानी से झड़ना"
   ],
   [
    "Dry, dull, or yellowish hair",
    "Dry, dull, or yellowish hair",
    "头发干、枯、黄",
    "Cabello seco, opaco o amarillento",
    "सूखे, बेजान या पीले बाल"
   ],
   [
    "Dandruff",
    "Dandruff",
    "头皮屑多",
    "Caspa",
    "रूसी"
   ],
   [
    "Itchy scalp",
    "Itchy scalp",
    "头皮痒",
    "Cuero cabelludo con picor",
    "सिर में खुजली"
   ],
   [
    "A lot of grey hair",
    "A lot of grey hair",
    "白头发多",
    "Mucho cabello gris",
    "अधिक सफ़ेद बाल"
   ],
   [
    "Acne on the face",
    "Acne on the face",
    "面部有痤疮",
    "Acné en el rostro",
    "चेहरे पर मुँहासे"
   ],
   [
    "Red blood vessels showing on the face",
    "Red blood vessels showing on the face",
    "面部有红血丝",
    "Vasos rojos visibles en el rostro",
    "चेहरे पर लाल नसें"
   ],
   [
    "Nail fungus",
    "Nail fungus",
    "灰指甲",
    "Hongos en las uñas",
    "नाखून में फफूंद"
   ],
   [
    "Skin allergies or itching",
    "Skin allergies or itching",
    "皮肤过敏、发痒",
    "Alergias cutáneas o picor",
    "त्वचा एलर्जी या खुजली"
   ],
   [
    "Skin grows small lumps easily",
    "Skin grows small lumps easily",
    "皮肤易长异物",
    "La piel forma bultos con facilidad",
    "त्वचा पर आसानी से गांठें"
   ],
   [
    "Athlete's foot",
    "Athlete's foot",
    "脚气",
    "Pie de atleta",
    "एथलीट फुट"
   ]
  ]
 },
 {
  "key": "bone",
  "g": [
   "Bones, Joints and Muscles",
   "运动系统",
   "Huesos, articulaciones y músculos",
   "हड्डियाँ, जोड़ और मांसपेशियाँ"
  ],
  "h": [
   "Back pain, joint stiffness and cramps are not merely strain or ageing. They relate closely to local circulation, inflammation, bone mineral density and the nutritional status of connective tissue.",
   "腰酸背痛、关节僵硬、抽筋等问题，不仅是劳损或衰老，更与局部血液循环、炎症水平、骨骼矿物质密度以及结缔组织的营养状况息息相关。",
   "El dolor de espalda, la rigidez articular y los calambres no son solo desgaste o edad. Se relacionan con circulación local, inflamación y densidad mineral ósea.",
   "पीठ दर्द, जोड़ों की जकड़न और ऐंठन केवल उम्र नहीं हैं। ये स्थानीय संचार और सूजन से जुड़े हैं।"
  ],
  "items": [
   [
    "Cold hands and feet",
    "Cold hands and feet",
    "手足冰凉",
    "Manos y pies fríos",
    "ठंडे हाथ-पैर"
   ],
   [
    "Sweaty hands and feet",
    "Sweaty hands and feet",
    "手足易出汗",
    "Manos y pies sudorosos",
    "पसीने वाले हाथ-पैर"
   ],
   [
    "Numbness or tingling in limbs",
    "Numbness or tingling in limbs",
    "四肢麻木、刺痛",
    "Entumecimiento u hormigueo",
    "अंगों में सुन्नपन"
   ],
   [
    "Swelling in limbs",
    "Swelling in arms or legs",
    "四肢肿胀",
    "Hinchazón en extremidades",
    "अंगों में सूजन"
   ],
   [
    "Muscle cramps",
    "Muscle cramps",
    "易抽筋",
    "Calambres musculares",
    "मांसपेशियों में ऐंठन"
   ],
   [
    "Arthritis",
    "Arthritis",
    "关节炎",
    "Artritis",
    "गठिया"
   ],
   [
    "Cold feeling in lower back",
    "Cold feeling in the lower back",
    "腰部发凉",
    "Sensación de frío en la zona lumbar",
    "पीठ के निचले हिस्से में ठंडक"
   ],
   [
    "Lumbar disc problems",
    "Lumbar disc problems",
    "腰椎间盘突出",
    "Problemas del disco lumbar",
    "कमर की डिस्क समस्या"
   ],
   [
    "Bone spurs or bone growth",
    "Bone spurs",
    "骨刺、骨质增生",
    "Espolones óseos",
    "हड्डी के काँटे"
   ],
   [
    "Back pain",
    "Back pain",
    "腰酸背疼",
    "Dolor de espalda",
    "पीठ दर्द"
   ],
   [
    "Neck stiffness or neck pain",
    "Neck stiffness or pain",
    "颈项僵硬、疼痛",
    "Rigidez o dolor de cuello",
    "गर्दन में अकड़न या दर्द"
   ],
   [
    "Spine stiffness or pain",
    "Spine stiffness or pain",
    "脊椎僵硬、疼痛",
    "Rigidez o dolor de columna",
    "रीढ़ में अकड़न या दर्द"
   ]
  ]
 },
 {
  "key": "hormone",
  "g": [
   "Hormones",
   "内分泌系统",
   "Hormonas",
   "हार्मोन"
  ],
  "h": [
   "The endocrine system is the body's regulator. Abnormal weight, irregular periods and blood sugar issues are direct manifestations of imbalance. Modern life severely disrupts it, and restoring balance hinges on reducing bodily burden, balanced nutrition and a regular routine.",
   "内分泌系统是身体的调节器，通过激素调控新陈代谢、生长发育、情绪和生殖等。体重异常、月经不调、血糖问题等，都是内分泌失衡的直观表现。恢复内分泌平衡的关键在于减轻身体负担（排毒）、提供均衡营养和规律生活。",
   "El sistema endocrino es el regulador del cuerpo. El peso anormal y los problemas de azúcar son manifestaciones directas de desequilibrio.",
   "अंतःस्रावी तंत्र शरीर का नियामक है। असामान्य वज़न और रक्त शर्करा असंतुलन के प्रत्यक्ष संकेत हैं।"
  ],
  "items": [
   [
    "Unexplained weight gain",
    "Unexplained weight gain",
    "莫名体重增加",
    "Aumento de peso inexplicable",
    "अस्पष्ट वज़न वृद्धि"
   ],
   [
    "Unexplained weight loss",
    "Unexplained weight loss",
    "莫名体重下降",
    "Pérdida de peso inexplicable",
    "अस्पष्ट वज़न कमी"
   ],
   [
    "Overweight",
    "Carrying extra weight",
    "偏胖",
    "Con sobrepeso",
    "अधिक वज़न"
   ],
   [
    "Underweight",
    "Too thin",
    "偏瘦",
    "Demasiado delgado",
    "बहुत पतला"
   ],
   [
    "Blood sugar runs high",
    "Blood sugar runs high",
    "血糖偏高",
    "Azúcar alto",
    "रक्त शर्करा अधिक"
   ],
   [
    "Blood sugar runs low",
    "Blood sugar runs low",
    "血糖偏低",
    "Azúcar bajo",
    "रक्त शर्करा कम"
   ]
  ]
 },
 {
  "key": "resp",
  "g": [
   "Immunity and Respiratory",
   "免疫与呼吸系统",
   "Inmunidad y respiración",
   "प्रतिरक्षा और श्वसन"
  ],
  "h": [
   "Recurrent colds, coughs and rhinitis are not merely poor immunity. Their roots often lie in gut health, where 70% of immune cells reside, liver detoxification, and deficiencies in anti-inflammatory nutrients.",
   "反复感冒、咳嗽、鼻炎等问题，不仅是免疫力差的表面现象，其根源往往在于肠道健康（人体70%免疫细胞在肠道）、肝脏解毒功能以及抗炎营养素的缺乏，导致呼吸道粘膜防御力和细胞修复力下降。",
   "Resfriados, tos y rinitis recurrentes no son solo baja inmunidad. Su raíz suele estar en la salud intestinal, donde reside el 70% de las células inmunes.",
   "बार-बार सर्दी और राइनाइटिस केवल कम प्रतिरक्षा नहीं है। जड़ आंत स्वास्थ्य में है, जहाँ 70% प्रतिरक्षा कोशिकाएँ हैं।"
  ],
  "items": [
   [
    "Cough easily",
    "Cough easily",
    "易咳嗽",
    "Tos fácil",
    "आसानी से खांसी"
   ],
   [
    "Runny nose easily",
    "Runny nose easily",
    "易流鼻水",
    "Nariz que gotea con facilidad",
    "आसानी से नाक बहना"
   ],
   [
    "Sneeze a lot",
    "Sneeze a lot",
    "易打喷嚏",
    "Estornudar mucho",
    "बहुत छींक आना"
   ],
   [
    "Catch colds often",
    "Catch colds often",
    "常感冒",
    "Resfriados frecuentes",
    "बार-बार सर्दी"
   ],
   [
    "Often have nasal allergies",
    "Nasal allergies",
    "鼻炎",
    "Alergias nasales",
    "नाक की एलर्जी"
   ],
   [
    "Sore throat",
    "Sore throat",
    "咽炎",
    "Dolor de garganta",
    "गले में खराश"
   ],
   [
    "Nosebleeds easily",
    "Nosebleeds easily",
    "易流鼻血",
    "Sangrado nasal fácil",
    "आसानी से नकसीर"
   ],
   [
    "Asthma or bronchitis",
    "Asthma or bronchitis",
    "气管炎、哮喘",
    "Asma o bronquitis",
    "दमा या ब्रोंकाइटिस"
   ]
  ]
 },
 {
  "key": "circ",
  "g": [
   "Circulation",
   "循环系统",
   "Circulación",
   "रक्त संचार"
  ],
  "h": [
   "The circulatory system delivers oxygen and nutrients and removes waste. Chest tightness, palpitations and leg weakness reflect heart pumping function, vessel elasticity and blood quality, closely linked to lipids, blood sugar, chronic inflammation and oxidative damage to the vessel lining.",
   "循环系统是身体的运输网络，负责输送氧气、营养和带走代谢废物。胸闷、心慌、下肢无力等问题，直接反映了心脏泵血功能、血管弹性及血液质量的状况。与血脂异常、血糖不稳定、慢性炎症和氧化应激对血管内皮细胞的损伤密切相关。",
   "El sistema circulatorio entrega oxígeno y nutrientes y retira desechos. La opresión torácica y las palpitaciones reflejan función cardíaca y calidad sanguínea.",
   "संचार तंत्र ऑक्सीजन पहुँचाता और अपशिष्ट हटाता है। सीने में जकड़न हृदय कार्य दर्शाती है।"
  ],
  "items": [
   [
    "Chest tightness, hard to breathe",
    "Chest tightness or breathlessness",
    "胸闷气喘",
    "Opresión torácica o falta de aire",
    "सीने में जकड़न या साँस फूलना"
   ],
   [
    "Heart beating fast or irregular",
    "Heart beating fast or irregular",
    "心慌、心律不齐",
    "Latido rápido o irregular",
    "तेज़ या अनियमित धड़कन"
   ],
   [
    "Leg weakness",
    "Leg weakness",
    "下肢无力",
    "Debilidad en las piernas",
    "पैरों में कमज़ोरी"
   ],
   [
    "High blood lipids, thick blood",
    "High blood lipids or thick blood",
    "高血脂、血粘",
    "Lípidos altos o sangre espesa",
    "उच्च रक्त वसा"
   ],
   [
    "Blood pressure runs high",
    "Blood pressure runs high",
    "血压偏高",
    "Presión alta",
    "रक्तचाप अधिक"
   ],
   [
    "Blood pressure runs low",
    "Blood pressure runs low",
    "血压偏低",
    "Presión baja",
    "रक्तचाप कम"
   ],
   [
    "Anemia",
    "Anaemia",
    "贫血",
    "Anemia",
    "रक्ताल्पता"
   ],
   [
    "Varicose veins",
    "Varicose veins",
    "静脉曲张",
    "Varices",
    "वैरिकाज़ नसें"
   ]
  ]
 },
 {
  "key": "repro",
  "g": [
   "Reproductive and Urinary",
   "生殖与泌尿系统",
   "Reproductivo y urinario",
   "प्रजनन और मूत्र तंत्र"
  ],
  "h": [
   "Reproductive health is tied to sex hormone balance, pelvic circulation and local immunity. The urinary system filters blood and regulates acid-base balance; infections, stones and high uric acid reflect kidney filtration, urinary tract patency and metabolic waste levels.",
   "生殖系统的健康与性激素平衡、盆腔血液循环及局部免疫力息息相关。泌尿系统负责过滤血液、形成并排出尿液。感染、结石、尿酸高等问题，直接反映了肾脏的过滤功能、尿路的通畅性以及体内代谢废物的水平。",
   "La salud reproductiva se liga al equilibrio hormonal, la circulación pélvica y la inmunidad local. El sistema urinario filtra la sangre y regula el equilibrio ácido-base.",
   "प्रजनन स्वास्थ्य हार्मोन संतुलन और श्रोणि संचार से जुड़ा है। मूत्र तंत्र रक्त छानता है।"
  ],
  "items": [
   [
    "Dark or cloudy urine",
    "Dark or cloudy urine",
    "尿色深、浊",
    "Orina oscura o turbia",
    "गहरा या धुंधला मूत्र"
   ],
   [
    "Urinate often",
    "Urinate often",
    "尿频",
    "Orinar con frecuencia",
    "बार-बार पेशाब"
   ],
   [
    "Urgent urge to urinate",
    "Urgent urge to urinate",
    "尿急",
    "Urgencia urinaria",
    "पेशाब की तत्काल इच्छा"
   ],
   [
    "Urinary tract infection, painful urination",
    "Urinary infection or painful urination",
    "尿道感染、小便疼痛",
    "Infección urinaria o dolor al orinar",
    "मूत्र संक्रमण या पेशाब में दर्द"
   ],
   [
    "Low sex drive or sexual problems",
    "Low libido or sexual difficulty",
    "性生活障碍",
    "Libido baja o dificultades sexuales",
    "कम कामेच्छा"
   ],
   [
    "Period pain",
    "Period pain",
    "痛经",
    "Dolor menstrual",
    "मासिक दर्द"
   ],
   [
    "Abnormal discharge",
    "Abnormal discharge",
    "分泌物异常",
    "Flujo anormal",
    "असामान्य स्राव"
   ],
   [
    "Gynecological infections",
    "Gynaecological infections",
    "妇科炎症",
    "Infecciones ginecológicas",
    "स्त्री रोग संक्रमण"
   ],
   [
    "High uric acid or gout",
    "High uric acid or gout",
    "高尿酸、痛风",
    "Ácido úrico alto o gota",
    "उच्च यूरिक एसिड या गठिया"
   ],
   [
    "Stones in gallbladder, kidney, or urinary tract",
    "Gallstones or kidney stones",
    "胆、尿、肾等有结石",
    "Cálculos biliares o renales",
    "पित्त या गुर्दे की पथरी"
   ]
  ]
 }
];

const SYMPTOM_HELP = {
 "Feel a lot of pressure from work/life": [
  "Chronic stress keeps your body in constant fight-or-flight mode, draining nutrients, suppressing immunity, and increasing inflammation. It is a key driver of anxiety, insomnia, and metabolic issues.",
  "长期高压状态让身体持续备战，消耗大量营养，抑制免疫，升高炎症水平，是导致焦虑、失眠和代谢问题的核心原因之一。",
  "El estrés crónico mantiene el cuerpo en modo de lucha o huida, agotando nutrientes, suprimiendo la inmunidad y aumentando la inflamación. Es un motor clave de ansiedad, insomnio y problemas metabólicos.",
  "पुराना तनाव शरीर को लगातार सतर्क अवस्था में रखता है, पोषक तत्व खर्च करता है, प्रतिरक्षा दबाता है और सूजन बढ़ाता है।"
 ],
 "Spend excessive time online or prolonged sitting": [
  "Prolonged sitting harms circulation and metabolism. Screen time strains your eyes and liver, while poor posture damages your neck and back: a combination of health risks.",
  "久坐不动影响血液循环与新陈代谢，长时间用眼加剧眼疲劳和肝脏负担，不良坐姿更会伤害颈椎腰椎，是复合型健康风险。",
  "Estar sentado mucho tiempo daña la circulación y el metabolismo. La pantalla fatiga los ojos y el hígado, y la mala postura daña cuello y espalda.",
  "लंबे समय तक बैठना रक्त संचार और चयापचय को नुकसान पहुँचाता है। स्क्रीन आँखों और जिगर पर दबाव डालती है।"
 ],
 "Smoke or drink alcohol frequently": [
  "Tobacco and alcohol are direct toxins, damaging cells in your lungs, liver, and heart. They overload your detox system, disrupt gut health, and significantly raise your risk of cancer and chronic disease.",
  "烟草和酒精是直接毒素，损伤肺、肝和心血管细胞，加重身体解毒负担，破坏肠道菌群，大幅增加患癌及慢性病风险。",
  "El tabaco y el alcohol son toxinas directas que dañan células de pulmones, hígado y corazón. Sobrecargan la desintoxicación y elevan mucho el riesgo de cáncer y enfermedades crónicas.",
  "तंबाकू और शराब सीधे विषाक्त पदार्थ हैं जो फेफड़ों, जिगर और हृदय की कोशिकाओं को नुकसान पहुँचाते हैं।"
 ],
 "Hard to get out of bed, sleep-deprived": [
  "Feeling tired even after long hours in bed signals poor sleep quality and lack of deep, restorative sleep. Your body is not repairing itself effectively, which may indicate underlying issues.",
  "即使睡很久仍感疲惫，说明睡眠质量差、深度睡眠不足，身体未能有效修复。这可能是代谢低或潜在健康问题的信号。",
  "Sentirse cansado incluso tras muchas horas en cama indica mala calidad de sueño y falta de sueño profundo reparador. Su cuerpo no se está reparando eficazmente.",
  "बिस्तर पर लंबे घंटों के बाद भी थकान खराब नींद की गुणवत्ता और गहरी नींद की कमी दर्शाती है।"
 ],
 "Crave sweets or salty snacks": [
  "A sweet tooth can cause blood sugar spikes and insulin resistance, paving the way for obesity and diabetes. Salty cravings raise blood pressure risk. Both are often tied to emotional eating and inflammation.",
  "嗜甜易导致血糖剧烈波动和胰岛素抵抗，是肥胖和糖尿病的前奏。嗜咸会增加高血压风险。这两种偏好常与情绪化饮食和炎症有关。",
  "El gusto por lo dulce provoca picos de azúcar y resistencia a la insulina, abriendo camino a la obesidad y la diabetes. Lo salado eleva el riesgo de hipertensión.",
  "मीठे की लालसा रक्त शर्करा में उछाल और इंसुलिन प्रतिरोध पैदा करती है। नमकीन की लालसा रक्तचाप का जोखिम बढ़ाती है।"
 ],
 "Prefer eating cold foods": [
  "Regularly eating cold or raw foods can weaken digestion, causing bloating and diarrhoea, and impair nutrient absorption. Long-term, this worsens cellular hidden hunger, sapping your energy at the source.",
  "常吃生冷食物可能减弱消化功能，导致腹胀、腹泻，影响营养吸收，长期会加剧细胞的隐性饥饿，从根源上影响活力。",
  "Comer con regularidad alimentos fríos o crudos debilita la digestión, causa hinchazón y diarrea, y afecta la absorción. A largo plazo agrava el hambre oculta celular.",
  "नियमित रूप से ठंडा या कच्चा भोजन पाचन कमज़ोर करता है और पोषक तत्वों के अवशोषण को बाधित करता है।"
 ],
 "Engage in binge eating or overeating": [
  "Overloading your system with food in a short time shocks your digestion, causing bloating and acid reflux. Long-term it damages your gut, disrupts blood sugar and hormones, leading directly to obesity and metabolic issues.",
  "短时内大量进食会严重冲击消化系统，引发胃胀、反酸，长期会损伤胃肠、扰乱血糖和激素，直接导致肥胖和代谢紊乱。",
  "Sobrecargar el sistema con comida en poco tiempo golpea la digestión, causando hinchazón y reflujo. A largo plazo daña el intestino y altera azúcar y hormonas.",
  "कम समय में अधिक भोजन पाचन पर आघात करता है, जिससे फूलना और एसिड रिफ्लक्स होता है।"
 ],
 "Mouth sores": [
  "Breaks and ulcers in the oral mucosa relate to reduced local immunity and insufficient mucosal repair. Common triggers include stress, lack of sleep, nutritional deficiency (especially B vitamins, iron, zinc), food allergy or intolerance, or an oral manifestation of gut disease.",
  "口腔粘膜的破损和溃疡，与局部免疫力下降、粘膜修复能力不足有关。常见诱因包括压力、熬夜、营养缺乏（尤其是维生素B族、铁、锌）、食物过敏或不耐受，或胃肠道问题的口腔表现。",
  "Úlceras en la mucosa oral por baja inmunidad local y reparación insuficiente. Desencadenantes comunes: estrés, falta de sueño, déficit de vitaminas B, hierro y zinc.",
  "मौखिक श्लेष्मा के छाले कम स्थानीय प्रतिरक्षा से जुड़े हैं। तनाव, नींद की कमी और बी विटामिन की कमी आम कारण हैं।"
 ],
 "Thick tongue coating": [
  "The tongue coating mirrors digestive function. A thick greasy coating usually indicates weakened spleen and stomach function, dampness in the body, and poor metabolism of food and fluids. Related to poor dietary habits, gut dysbiosis and insufficient digestive enzymes.",
  "舌苔是消化系统功能的一面镜子。厚腻的舌苔（尤其是白腻或黄腻）通常表示脾胃运化功能减弱，体内有湿或湿热，食物和水液代谢不畅，可能导致痰湿积聚。这与不良饮食习惯、肠道菌群失调和消化酶不足相关。",
  "La capa lingual refleja la función digestiva. Una capa gruesa y grasa indica función debilitada y mal metabolismo de alimentos y líquidos.",
  "जीभ की परत पाचन क्रिया दर्शाती है। मोटी चिकनी परत कमज़ोर पाचन और नमी दर्शाती है।"
 ],
 "Poor digestion": [
  "Bloating, belching and a feeling of food stuck in the stomach after meals. This directly indicates insufficient gastric motility, possibly low stomach acid, or inadequate digestive enzymes. Long term this leads to poor nutrient absorption and worsens cellular hidden hunger.",
  "饭后腹胀、嗳气、感觉食物堵在胃里不往下走。这直接表明胃动力不足、胃酸分泌可能偏低、或消化酶（来自胰腺和胃）分泌不足。长期如此会导致营养吸收不良，加剧细胞隐性饥饿。",
  "Hinchazón, eructos y sensación de comida atascada tras comer. Indica motilidad gástrica insuficiente, posible acidez baja o enzimas inadecuadas.",
  "खाने के बाद फूलना और भोजन अटकने का अहसास। यह अपर्याप्त गैस्ट्रिक गतिशीलता दर्शाता है।"
 ],
 "Burp or feel bloated easily": [
  "Frequent burping is gas rising from the stomach; bloating is gas accumulating in the gut. Both relate to swallowed air (eating fast, carbonated drinks), gas from food fermentation, and disordered gastrointestinal motility. Suggests improving eating habits, adjusting gut flora and strengthening motility.",
  "频繁打嗝是胃内气体上逆；胀气是气体在胃肠道积聚。两者都与吞咽空气（吃饭快、喝碳酸饮料）、食物发酵产气，以及胃肠蠕动功能紊乱有关。提示需要改善进食习惯、调整肠道菌群和增强胃肠动力。",
  "Los eructos son gas que sube del estómago; la hinchazón es gas acumulado. Ambos se relacionan con aire tragado, fermentación y motilidad alterada.",
  "डकार पेट से उठती गैस है; फूलना आंत में जमा गैस। दोनों निगली हवा और किण्वन से जुड़े हैं।"
 ],
 "Stomach problems / Gastritis": [
  "Inflammation of the stomach lining, possibly from H. pylori, long-term medication (such as NSAIDs), alcohol, stress or autoimmune factors. Symptoms include upper abdominal pain, bloating and heartburn. Management requires anti-inflammatory measures, repairing the gastric mucosa, dietary adjustment and stress management.",
  "胃粘膜的炎症，可能由幽门螺杆菌感染、长期药物刺激（如非甾体抗炎药）、酒精、压力或自身免疫因素引起。症状包括上腹痛、胀气、烧心等。管理需抗炎、修复胃粘膜、调整饮食并管理压力。",
  "Inflamación del revestimiento gástrico por H. pylori, medicación prolongada, alcohol, estrés o factores autoinmunes. Requiere medidas antiinflamatorias y reparación de la mucosa.",
  "पेट की परत की सूजन, जो एच. पाइलोरी, दवा, शराब या तनाव से हो सकती है।"
 ],
 "Nausea or feel like throwing up": [
  "Nausea is the body signalling an attempt to expel an irritant from the stomach. Possible causes include contaminated food, overeating, reflux, motion sickness, liver or gallbladder disease, or raised intracranial pressure. Frequent nausea needs investigation for organic causes.",
  "恶心感是身体试图排出胃内不良刺激物的信号。可能原因包括：食物不洁、暴饮暴食、胃食管反流、晕动症、肝胆疾病、或颅内压力增高等。频繁恶心需要排查器质性问题，并关注饮食习惯和消化功能。",
  "La náusea es la señal del cuerpo para expulsar un irritante. Las náuseas frecuentes requieren investigar causas orgánicas.",
  "मतली शरीर का उत्तेजक पदार्थ निकालने का संकेत है। बार-बार होने पर जाँच आवश्यक है।"
 ],
 "Fatty liver": [
  "Excess fat accumulating in liver cells, directly related to obesity, insulin resistance, a high-fat high-sugar diet and excess alcohol. It is metabolic syndrome showing up in the liver, indicating severely impaired fat metabolism, and a potential step toward cirrhosis. The core intervention is lifestyle change and liver support.",
  "肝脏细胞中脂肪过度堆积。与肥胖、胰岛素抵抗、高脂高糖饮食、过量饮酒直接相关。它是代谢综合征在肝脏的表现，提示肝脏的脂肪代谢功能严重受损，是迈向肝硬化、肝癌的潜在危险步骤。核心干预是生活方式改变和肝脏支持。",
  "Acumulación excesiva de grasa en las células hepáticas, ligada a obesidad, resistencia a la insulina y dieta alta en grasa y azúcar. La intervención central es el cambio de estilo de vida.",
  "जिगर कोशिकाओं में अत्यधिक वसा, जो मोटापे और इंसुलिन प्रतिरोध से जुड़ी है।"
 ],
 "Liver inflammation": [
  "Liver cells damaged by viruses, alcohol, drugs, toxins or autoimmune attack, triggering inflammation (raised ALT/AST on a blood panel). Chronic inflammation leads to fibrosis and cirrhosis. Management focuses on removing the cause and strengthening the liver's detoxification and repair capacity.",
  "指肝脏细胞因病毒（乙肝/丙肝）、酒精、药物、毒素或自身免疫攻击而受损，引发炎症反应（化验单上转氨酶ALT/AST升高）。长期炎症会导致肝纤维化、硬化。管理关键在于去除病因、强化肝脏解毒和抗炎修复能力。",
  "Células hepáticas dañadas por virus, alcohol, fármacos o toxinas, con inflamación (ALT/AST elevadas). La inflamación crónica lleva a fibrosis.",
  "वायरस, शराब या दवाओं से जिगर कोशिकाओं की क्षति और सूजन।"
 ],
 "Fart a lot": [
  "Passing gas is normal, but excessive or foul gas indicates abnormal fermentation in the intestines. Often related to small intestinal bacterial overgrowth, gut dysbiosis, excessive intake of hard-to-digest carbohydrates, or poorly digested protein.",
  "排气是正常现象，但过多、过臭的气体产生，是食物在肠道内异常发酵的标志。这通常与小肠细菌过度生长（SIBO）、肠道菌群失调、摄入过多难以消化的碳水化合物（如豆类、某些蔬菜）或蛋白质消化不良有关。",
  "Expulsar gases es normal, pero el exceso o el mal olor indican fermentación anormal, a menudo por sobrecrecimiento bacteriano o disbiosis.",
  "गैस निकलना सामान्य है, पर अधिक या दुर्गंधयुक्त गैस असामान्य किण्वन दर्शाती है।"
 ],
 "Often have diarrhea": [
  "Diarrhoea is a defence mechanism speeding up transit to expel harmful substances. Frequent occurrence indicates severe gut dysbiosis, mucosal inflammation, food intolerance, or maldigestion. The root lies in an unhealthy intestinal environment and dysfunctional digestion.",
  "腹泻是肠道加速蠕动以排出有害物质的防御机制。但频繁发生则提示肠道菌群严重失衡（有害菌占优）、肠粘膜炎症、食物不耐受，或消化吸收功能不良（如乳糖不耐受、脂肪泻）。根源在于肠道环境不健康和消化系统功能紊乱。",
  "La diarrea es un mecanismo de defensa. Su frecuencia indica disbiosis grave, inflamación mucosa, intolerancia alimentaria o maldigestión.",
  "दस्त एक रक्षा तंत्र है। बार-बार होना गंभीर आंत असंतुलन दर्शाता है।"
 ],
 "Feel dizzy": [
  "Dizziness has many causes: inner ear balance issues, reduced blood supply from the neck, abnormal blood pressure or anaemia. From a health management view it indicates possible poor circulation, reduced oxygen delivery to cells, or energy metabolism disorders from nutritional imbalance.",
  "头晕可能由多种原因引起，如内耳平衡问题、颈椎供血不足、血压异常或贫血。从健康管理角度，它提示可能存在血液循环不良、细胞（特别是脑细胞）携氧能力下降，或营养失衡导致的能量代谢障碍。",
  "El mareo tiene muchas causas: oído interno, riego cervical reducido, presión anormal o anemia. Indica posible mala circulación o menor entrega de oxígeno a las células.",
  "चक्कर के कई कारण हैं। यह खराब रक्त संचार या कोशिकाओं तक कम ऑक्सीजन दर्शाता है।"
 ],
 "Often have headaches": [
  "A common alarm. Can be linked to blood vessel issues in the brain, neck problems, or an overloaded liver detox system. Stress and a lack of minerals such as magnesium are also triggers.",
  "常见警报，可能与脑部血管异常、颈椎问题或肝脏解毒负担过重有关。压力大和缺乏镁等矿物质也会引发。",
  "Una alarma común. Puede vincularse a vasos cerebrales, problemas cervicales o un hígado sobrecargado. El estrés y la falta de magnesio también son desencadenantes.",
  "एक सामान्य चेतावनी। यह मस्तिष्क वाहिकाओं, गर्दन या अधिभारित जिगर से जुड़ा हो सकता है।"
 ],
 "Get car sick or motion sickness easily": [
  "An overly sensitive vestibular system may relate to inner ear function or how the brain integrates sensory information. It may indicate poor inner ear circulation, insufficient nerve support nutrients such as vitamin B6 and magnesium, or a generally weak constitution.",
  "前庭系统（平衡系统）过于敏感，可能与内耳功能或中枢神经整合信息的能力有关。从健康管理角度看，可能提示内耳循环不佳、神经营养支持不足（如维生素B6、镁），或整体体质偏弱、适应性较差。",
  "Un sistema vestibular hipersensible puede indicar mala circulación en el oído interno o falta de nutrientes nerviosos como B6 y magnesio.",
  "अति संवेदनशील वेस्टिबुलर तंत्र आंतरिक कान के संचार या बी6 और मैग्नीशियम की कमी दर्शा सकता है।"
 ],
 "Prone to small accidents": [
  "Frequent bumps, falls or minor accidents reflect declining coordination, reaction speed and concentration. May relate to reduced nervous system efficiency from nutritional deficiency or toxin interference, decreased muscle control, or overall low energy.",
  "经常磕碰、摔倒或出现小意外，反映的是身体协调性、反应速度和专注力的下降。这可能与神经系统功能因营养不足或毒素干扰而效率降低，肌肉控制能力下降，或整体精力不济有关。",
  "Golpes, caídas o accidentes menores frecuentes reflejan menor coordinación, velocidad de reacción y concentración.",
  "बार-बार टकराना या गिरना समन्वय और प्रतिक्रिया गति में गिरावट दर्शाता है।"
 ],
 "Hard to focus": [
  "Difficulty maintaining focus, easily distracted. Possible causes: blood sugar fluctuation making brain energy supply unstable; sleep deprivation affecting nerve cell repair; lack of phospholipids and B vitamins needed to maintain healthy nerve cell membranes; or toxins interfering with nerve transmission.",
  "难以长时间专注于任务，容易分心。这与大脑前额叶皮层的功能状态密切相关。可能的原因包括：血糖波动导致脑能量供应不稳定；睡眠不足影响神经细胞修复；缺乏磷脂、B族维生素等构建和维持神经细胞膜健康的营养素；或体内毒素干扰神经传导。",
  "Dificultad para mantener el foco. Causas posibles: fluctuación del azúcar, privación de sueño, falta de fosfolípidos y vitaminas B, o toxinas que interfieren la transmisión nerviosa.",
  "ध्यान बनाए रखने में कठिनाई। कारण: रक्त शर्करा में उतार-चढ़ाव, नींद की कमी, या फॉस्फोलिपिड और बी विटामिन की कमी।"
 ],
 "Easy to forget things": [
  "Short-term memory decline is not merely a natural consequence of ageing. It is more likely linked to chronic stress, sleep deprivation, inadequate brain cell nutrition such as Omega-3, B vitamins and antioxidants, and impaired cerebral microcirculation. A signal that brain cells are in hidden hunger.",
  "短期记忆下降、注意力不集中，不仅是年龄增长的自然现象。它更可能与长期压力、睡眠不足、脑细胞营养（如Omega-3脂肪酸、B族维生素、抗氧化剂）供给不足，以及脑内微循环障碍有关，是大脑细胞处于隐性饥饿和毒素干扰状态的信号。",
  "El declive de la memoria a corto plazo no es solo envejecimiento. Se vincula a estrés crónico, falta de sueño y nutrición cerebral inadecuada.",
  "अल्पकालिक स्मृति में गिरावट केवल उम्र नहीं है। यह तनाव, नींद की कमी और मस्तिष्क पोषण से जुड़ा है।"
 ],
 "Trouble hearing": [
  "Hearing loss, aside from age and physical damage, may relate to poor inner ear microcirculation or damage to the auditory nerve from toxins or inflammation. Improving circulation, reducing inflammation and providing nerve nutrition may help protect hearing.",
  "听力下降或耳鸣，除了年龄和物理损伤，也可能与内耳微循环障碍、听觉神经因毒素或炎症受损有关。从健康管理角度，改善全身血液循环、抗炎和提供神经营养支持可能有助于保护听力功能。",
  "La pérdida auditiva, más allá de la edad, puede relacionarse con mala microcirculación del oído interno o daño del nervio auditivo por toxinas o inflamación.",
  "सुनने की क्षमता में कमी आंतरिक कान के खराब संचार या श्रवण तंत्रिका क्षति से जुड़ी हो सकती है।"
 ],
 "Ears ringing": [
  "Tinnitus is often associated with poor inner ear microcirculation, auditory nerve dysfunction or neck problems. In health management it is seen as a signal that toxins may be affecting nerves, or that long-term deficiency and nutritional imbalance are reducing nerve cell repair capacity.",
  "耳鸣常与内耳微循环障碍、听觉神经功能异常或颈椎问题相关。在健康管理中，它被视为体内毒素（如药物代谢物、重金属）可能影响神经，或长期肝肾阴虚、营养失衡导致神经细胞修复能力下降的信号。",
  "El tinnitus se asocia a mala microcirculación del oído interno o disfunción del nervio auditivo. Puede señalar toxinas afectando los nervios.",
  "टिनिटस आंतरिक कान के खराब संचार या श्रवण तंत्रिका की खराबी से जुड़ा है।"
 ],
 "Wake up easily at night, especially startled": [
  "Waking easily at specific times, such as 1 to 3 AM when the liver is most active, signals that the liver is doing intensive detoxification but may be overloaded. If accompanied by palpitations it may also relate to cardiopulmonary function or blood quality.",
  "在特定时间（如凌晨1-3点肝经当令时）易醒，是肝脏正在进行高强度解毒工作但可能负担过重的信号。如果伴有心慌，也可能与心肺功能或血液质量有关。这表明身体需要更有力的排毒支持和更均衡的神经营养。",
  "Despertar a horas concretas, como entre la 1 y las 3 AM cuando el hígado está más activo, señala una desintoxicación intensa pero posiblemente sobrecargada.",
  "विशेष समय पर जागना, जैसे 1-3 बजे जब जिगर सबसे सक्रिय है, अधिभार का संकेत है।"
 ],
 "Feel anxious or nervous": [
  "Anxiety, nervousness, or simply being unable to switch off. Both are the same underlying picture: the sympathetic nervous system stays dominant, and the nutrients that let the body stand down, magnesium and the GABA precursors, get used up faster than they are replaced. Gut health and liver clearance both feed into it.",
  "焦虑、紧张，或者就是放松不下来。这两者背后是同一件事：交感神经持续占上风，而让身体降下来的营养素（镁、GABA前体）消耗得比补充得快。肠道状况和肝脏代谢都会影响它。",
  "Ansiedad, nerviosismo, o simplemente no poder desconectar. Ambos son el mismo cuadro de fondo: el sistema nervioso simpático permanece dominante y los nutrientes que permiten al cuerpo bajar revoluciones, magnesio y precursores de GABA, se agotan más rápido de lo que se reponen.",
  "चिंता, घबराहट, या बस स्विच ऑफ़ न कर पाना। दोनों एक ही अंतर्निहित तस्वीर हैं: सहानुभूति तंत्रिका तंत्र हावी रहता है, और शरीर को शांत करने वाले पोषक तत्व मैग्नीशियम और GABA अग्रदूत तेज़ी से खर्च होते हैं।"
 ],
 "Often feel down or sad": [
  "Persistent low mood is not only psychological but reflects the body's biochemical state. Synthesis of serotonin and dopamine requires specific amino acids and cofactors such as vitamin B6, iron and magnesium. Nutritional deficiency, gut dysbiosis or chronic inflammation all affect their levels.",
  "持续的情绪低落，不仅与心理因素有关，更是身体生化状态的反应。血清素、多巴胺等快乐激素的合成需要特定氨基酸和辅因子（如维生素B6、铁、镁）。营养缺乏、肠道菌群失调或慢性炎症都会影响它们的水平。",
  "El ánimo bajo persistente refleja el estado bioquímico. La síntesis de serotonina y dopamina requiere aminoácidos y cofactores como B6, hierro y magnesio.",
  "लगातार उदासी शरीर की जैव-रासायनिक स्थिति दर्शाती है। सेरोटोनिन संश्लेषण को बी6, आयरन और मैग्नीशियम चाहिए।"
 ],
 "Lose temper easily": [
  "The liver governs smooth flow and emotion. Irritability is a classic outward sign of liver strain. The root lies in excessive detoxification and metabolic stress on the liver, or a lack of nutrients supporting liver function and nerve stability such as B vitamins, choline and antioxidants.",
  "肝主疏泄，主情志。易怒是肝火旺或肝气郁结的典型外在表现。根本原因在于肝脏解毒代谢压力过大，或缺乏支持肝脏功能和神经稳定的营养素（如B族维生素、胆碱、抗氧化剂），导致情绪调控能力下降。",
  "El hígado gobierna el flujo suave y la emoción. La irritabilidad es señal clásica de sobrecarga hepática o falta de vitaminas B, colina y antioxidantes.",
  "जिगर भावनाओं के सहज प्रवाह को नियंत्रित करता है। चिड़चिड़ापन जिगर पर दबाव का संकेत है।"
 ],
 "Feel out of control with emotions": [
  "Intense, uncontrollable mood swings indicate severe nervous system dysregulation. Usually the combined result of long-term stress, sleep deprivation, severe nutritional imbalance affecting neurotransmitter synthesis, and possible hormonal imbalance. A strong distress signal from the body.",
  "情绪波动剧烈，难以自控，表明神经系统调节功能严重紊乱。这通常是长期压力、睡眠剥夺、严重营养失衡（特别是影响神经递质合成的营养素）以及可能的激素失衡共同作用的结果，是身体发出的强烈求救信号。",
  "Cambios de humor intensos e incontrolables indican desregulación nerviosa grave, resultado de estrés prolongado, falta de sueño y desequilibrio nutricional.",
  "तीव्र अनियंत्रित मूड परिवर्तन गंभीर तंत्रिका असंतुलन दर्शाते हैं।"
 ],
 "Eyes sensitive to light, tear easily": [
  "Oversensitivity to light or unexplained tearing indicates sensitive ocular surface nerves or abnormal tear regulation. May relate to insufficient liver blood, since the liver opens into the eyes, long-term eye strain, or a lack of protective antioxidants such as lutein, zeaxanthin and vitamin A.",
  "眼睛对光线过度敏感或无故流泪，是眼表神经敏感或泪液分泌调节异常的表现。可能与肝血不足（肝开窍于目）、长期用眼过度导致视神经疲劳，或缺乏保护眼睛的抗氧化营养素（如叶黄素、玉米黄质、维生素A）有关。",
  "La sensibilidad a la luz o el lagrimeo indican nervios oculares sensibles. Puede relacionarse con fatiga visual o falta de luteína, zeaxantina y vitamina A.",
  "प्रकाश संवेदनशीलता या आँसू आना संवेदनशील नेत्र तंत्रिकाओं का संकेत है।"
 ],
 "Eyes get infected easily": [
  "Frequent styes or conjunctivitis indicate low local immunity on the ocular surface. This may be a local manifestation of reduced overall immunity, related to deficiency in vitamins A and C and zinc affecting mucous membrane health, or poor blood sugar control providing an environment for bacteria.",
  "频繁患麦粒肿、结膜炎等，表明眼表局部免疫力低下。这可能是整体免疫力下降的局部表现，与营养失衡（如维生素A、C、锌缺乏影响粘膜健康）、血糖控制不良为细菌提供滋生环境，或肝火旺上炎至目有关。",
  "Orzuelos o conjuntivitis frecuentes indican baja inmunidad ocular local, relacionada con déficit de vitaminas A y C y zinc, o mal control glucémico.",
  "बार-बार गुहेरी या नेत्रश्लेष्मलाशोथ कम स्थानीय प्रतिरक्षा दर्शाता है।"
 ],
 "Bleed easily when brushing teeth": [
  "Bleeding when you brush, and gums that are red, swollen, sore or receding. It is the same problem at two stages. Vitamin C builds the collagen that holds gum tissue and small vessels together, so fragile bleeding gums are often the first visible sign of a shortfall. Left alone it becomes periodontitis, which raises inflammation body-wide.",
  "刷牙出血，以及牙龈红肿、疼痛或萎缩。这是同一个问题的两个阶段。维生素C负责合成把牙龈组织和微血管连在一起的胶原，所以牙龈脆弱出血常常是缺乏最早看得见的信号。放着不管会发展成牙周炎，全身炎症水平随之升高。",
  "Sangrado al cepillar, y encías rojas, hinchadas, doloridas o retraídas. Es el mismo problema en dos etapas. La vitamina C forma el colágeno que mantiene unidos el tejido de la encía y los vasos pequeños, así que encías frágiles suelen ser el primer signo visible de una carencia.",
  "ब्रश करते समय खून आना, और मसूड़ों का लाल, सूजा, दर्दनाक या सिकुड़ा होना। यह एक ही समस्या के दो चरण हैं। विटामिन C वह कोलेजन बनाता है जो मसूड़े के ऊतक और छोटी वाहिकाओं को जोड़े रखता है।"
 ],
 "Hair falling out easily": [
  "Losing more than 100 hairs a day is abnormal. May relate to stress (telogen effluvium), hormonal change (postpartum, menopause), nutritional deficiency (iron, zinc, biotin, protein), thyroid disorders or autoimmune hair loss. Reflects poor blood supply and nutrition to the scalp follicles.",
  "每日脱发超过100根视为异常。可能与压力大（休止期脱发）、激素变化（如产后、更年期）、营养缺乏（铁、锌、生物素、蛋白质）、甲状腺疾病或自身免疫性脱发（斑秃）有关。反映头皮毛囊的血液供应和营养状况不佳。",
  "Perder más de 100 cabellos al día es anormal. Puede relacionarse con estrés, cambios hormonales, deficiencias nutricionales (hierro, zinc, biotina, proteína), trastornos tiroideos o alopecia autoinmune.",
  "रोज़ 100 से अधिक बाल झड़ना असामान्य है। यह तनाव, हार्मोनल बदलाव, पोषण की कमी (आयरन, ज़िंक, बायोटिन, प्रोटीन) या थायरॉइड से जुड़ा हो सकता है।"
 ],
 "Dry, dull, or yellowish hair": [
  "Hair lacking shine, brittle or yellowish indicates damaged hair quality. Related to perming, dyeing and sun exposure, but may also reflect insufficient protein intake, essential fatty acid deficiency, or abnormal copper metabolism. Suggests a need to strengthen keratin nutrition.",
  "头发失去光泽、易断裂、发黄，是发质健康受损的表现。与频繁烫染、日晒等外部损伤有关，但也可能反映内在问题，如蛋白质摄入不足、必需脂肪酸缺乏、或铜代谢异常。提示需要加强头发角蛋白的营养支持。",
  "El cabello sin brillo, quebradizo o amarillento indica calidad dañada. Puede reflejar poca proteína, falta de ácidos grasos esenciales o metabolismo anormal del cobre.",
  "चमक रहित, भंगुर या पीले बाल क्षतिग्रस्त गुणवत्ता दर्शाते हैं। यह कम प्रोटीन या आवश्यक वसा अम्ल की कमी दर्शा सकता है।"
 ],
 "A lot of grey hair": [
  "Premature or excessive greying relates to declining melanocyte function in the follicle. Besides genetics and age, stress, chronic illness, severe deficiency (especially copper, iron, B12, folate) or thyroid issues can accelerate it. One sign of the body ageing prematurely.",
  "白发过早或过多出现，与毛囊黑色素细胞功能衰退有关。除了遗传和年龄，压力、慢性消耗性疾病、严重的营养缺乏（特别是铜、铁、维生素B12、叶酸）或甲状腺问题都可能加速白发进程。是身体未老先衰的迹象之一。",
  "El encanecimiento prematuro se relaciona con el declive de los melanocitos. Además de genética y edad, el estrés, enfermedades crónicas y deficiencias graves (cobre, hierro, B12, folato) pueden acelerarlo.",
  "समय से पहले सफ़ेद होना मेलानोसाइट की गिरती कार्यक्षमता से जुड़ा है। तनाव और गंभीर पोषण कमी इसे तेज़ करती है।"
 ],
 "Acne on the face": [
  "Chronic inflammation of the follicle and sebaceous gland. Related to raised androgens, excess sebum, abnormal keratinisation and bacterial involvement. Deeper drivers include high-sugar high-fat diet, stress, gut dysbiosis (the gut-skin axis) and a burdened liver, all raising inflammation.",
  "毛囊皮脂腺的慢性炎症。与雄激素水平升高、皮脂分泌旺盛、毛囊角化异常和痤疮丙酸杆菌感染有关。但深层驱动因素包括高糖高脂饮食、压力、肠道菌群失调（肠-皮轴）、肝脏解毒功能负担重等，导致炎症水平升高。",
  "Inflamación crónica del folículo y la glándula sebácea. Los impulsores profundos incluyen dieta alta en azúcar y grasa, estrés, disbiosis intestinal (eje intestino-piel) y un hígado sobrecargado.",
  "रोमकूप और वसामय ग्रंथि की पुरानी सूजन। गहरे कारणों में उच्च शर्करा-वसा आहार, तनाव और आंत असंतुलन शामिल हैं।"
 ],
 "Red blood vessels showing on the face": [
  "Persistently dilated visible capillaries, typically on the cheeks and sides of the nose where skin is thinner. May relate to a damaged skin barrier, long-term topical steroids, over-cleansing, sun exposure or rosacea. Reflects abnormal microcirculation and increased vessel fragility.",
  "面部毛细血管持续扩张、可见，通常出现在皮肤较薄的脸颊和鼻翼。可能与皮肤屏障受损、长期外用激素、过度清洁、日晒、或玫瑰痤疮有关。反映皮肤微循环异常和血管壁脆性增加，需要温和修复屏障和抗炎管理。",
  "Capilares dilatados visibles, típicamente en mejillas y alas de la nariz. Puede deberse a barrera cutánea dañada, corticoides tópicos prolongados, limpieza excesiva, sol o rosácea.",
  "फैली हुई दिखने वाली केशिकाएँ, आमतौर पर गाल और नाक पर। क्षतिग्रस्त त्वचा अवरोध या रोसैसिया से जुड़ी।"
 ],
 "Nail fungus": [
  "Fungal infection of the nails causing thickening, discoloration and brittleness. Local dampness, trauma and low immunity are predisposing factors. Holistically it reflects insufficient immunity against fungal infection, potentially related to nutritional status, gut health and circulation.",
  "指（趾）甲被真菌感染，导致增厚、变色、浑浊、易碎。局部潮湿、外伤、免疫力低下是易感因素。从整体看，反映身体对抗真菌感染的免疫力不足，可能与营养状况、肠道健康及循环代谢有关。",
  "Infección fúngica de las uñas con engrosamiento y decoloración. Refleja inmunidad insuficiente frente a hongos, relacionada con nutrición, salud intestinal y circulación.",
  "नाखूनों का फफूंद संक्रमण। यह फफूंद के विरुद्ध अपर्याप्त प्रतिरक्षा दर्शाता है।"
 ],
 "Skin allergies or itching": [
  "The skin overreacts to normally harmless substances, producing redness, bumps and intense itching. The direct cause is immune dysregulation. The root often lies in a leaky gut allowing allergens into the bloodstream, insufficient liver detoxification, chronic stress, and a lack of anti-inflammatory nutrients such as Omega-3.",
  "皮肤对通常无害的物质产生过度免疫反应，出现红斑、丘疹、剧烈瘙痒。直接原因是免疫系统紊乱。根源常与肠漏导致过敏原入血、肝脏解毒功能不足、慢性压力、以及缺乏Omega-3等抗炎营养素有关。",
  "La piel reacciona en exceso a sustancias inofensivas. La raíz suele estar en un intestino permeable, desintoxicación hepática insuficiente, estrés crónico y falta de nutrientes antiinflamatorios como el Omega-3.",
  "त्वचा हानिरहित पदार्थों पर अत्यधिक प्रतिक्रिया करती है। जड़ अक्सर आंत की पारगम्यता और ओमेगा-3 की कमी है।"
 ],
 "Skin grows small lumps easily": [
  "Prone to milia, skin tags and small cysts. Mostly benign, but suggests skin metabolism and waste elimination may be impaired. May relate to abnormal sebum, local microcirculation problems, or holistically to internal toxin accumulation and poor lymphatic circulation.",
  "容易长脂肪粒、皮赘、小囊肿等。虽然多为良性，但提示皮肤新陈代谢和废物排出可能不畅。可能与皮脂分泌异常、局部微循环障碍，或从整体上看，与体内毒素堆积、淋巴循环不佳有关。",
  "Propensión a milia, acrocordones y quistes pequeños. Sugiere metabolismo cutáneo y eliminación de residuos deteriorados, o mala circulación linfática.",
  "मिलिया और छोटी गांठों की प्रवृत्ति। यह त्वचा चयापचय और अपशिष्ट निष्कासन में बाधा दर्शाती है।"
 ],
 "Athlete's foot": [
  "A fungal skin infection of the foot causing itching, peeling and blisters. Although externally acquired, susceptibility relates to local sweating and reduced immunity. Holistically, regulating immunity, improving microcirculation and keeping the feet dry all matter.",
  "由真菌感染引起的足部皮肤病，表现为瘙痒、脱皮、水疱。虽然由外部感染引起，但易感性增加与局部多汗、免疫力下降有关。从整体健康看，调节免疫力、改善微循环和保持足部干燥清洁同样重要。",
  "Infección fúngica del pie con picor y descamación. La susceptibilidad se relaciona con sudoración local e inmunidad reducida.",
  "पैर का फफूंद संक्रमण। संवेदनशीलता स्थानीय पसीने और घटी प्रतिरक्षा से जुड़ी है।"
 ],
 "Muscle cramps": [
  "Sudden involuntary contraction with severe pain. Common causes include electrolyte imbalance (magnesium, calcium, potassium), dehydration, muscle fatigue, poor circulation or neurological abnormality. Night-time calf cramps are especially common.",
  "肌肉突然、不自主的强直收缩，伴剧烈疼痛。常见原因包括：电解质失衡（缺镁、钙、钾）、脱水、肌肉疲劳、血液循环不良、或神经系统异常。夜间小腿抽筋尤其常见，提示需要关注矿物质营养和局部循环。",
  "Contracción súbita e involuntaria con dolor intenso. Causas: desequilibrio de electrolitos (magnesio, calcio, potasio), deshidratación o mala circulación.",
  "अचानक अनैच्छिक संकुचन। कारण: इलेक्ट्रोलाइट असंतुलन (मैग्नीशियम, कैल्शियम, पोटैशियम)।"
 ],
 "Arthritis": [
  "Inflammatory joint disease, commonly osteoarthritis (degenerative) or rheumatoid (autoimmune). Core pathology is cartilage destruction and synovial inflammation. Management requires anti-inflammatory measures, cartilage protection, immune modulation and a healthy weight.",
  "关节的炎症性疾病，常见有骨关节炎（退行性）和类风湿关节炎（自身免疫性）。表现为关节红、肿、热、痛和功能障碍。核心病理是关节软骨破坏和滑膜炎症。管理需抗炎、保护软骨、调节免疫（针对类风湿）并维持健康体重。",
  "Enfermedad inflamatoria articular. La patología central es destrucción del cartílago e inflamación sinovial. Requiere antiinflamatorios y protección del cartílago.",
  "जोड़ों की सूजन संबंधी बीमारी। मुख्य विकृति उपास्थि विनाश और श्लेष सूजन है।"
 ],
 "Cold feeling in lower back": [
  "A subjective feeling of coldness in the lower back even in a warm environment. May relate to poor circulation there, local muscle tension reducing blood flow, or autonomic dysregulation. Suggests improving local circulation and warming the body.",
  "自觉腰部有寒冷感，即使环境不冷。中医认为是肾阳虚或寒湿滞留的表现。现代视角可能与腰部血液循环不良、局部肌肉紧张痉挛导致血流减少，或自主神经调节功能异常有关。提示需要改善局部循环和温煦身体。",
  "Sensación de frío lumbar incluso en ambiente cálido. Puede deberse a mala circulación local o tensión muscular que reduce el flujo sanguíneo.",
  "गर्म वातावरण में भी पीठ में ठंडक। यह स्थानीय खराब संचार दर्शा सकता है।"
 ],
 "Lumbar disc problems": [
  "A disc's fibrous ring ruptures and the nucleus compresses nerve roots, causing low back pain and leg numbness. Related to disc degeneration, poor posture, heavy lifting and trauma. Fundamentally, insufficient nutrient supply to disc tissue and muscular imbalance reducing stability.",
  "椎间盘的纤维环破裂，髓核突出压迫神经根，引起腰痛、腿麻。与椎间盘退变、长期不良姿势、负重、急性外伤有关。根本上是椎间盘组织营养供应不足、修复能力下降，以及周围肌肉力量不平衡导致稳定性差。",
  "El anillo fibroso se rompe y el núcleo comprime raíces nerviosas. Relacionado con degeneración discal, mala postura y desequilibrio muscular.",
  "डिस्क का रेशेदार छल्ला फटने से तंत्रिका दबती है, जिससे कमर दर्द होता है।"
 ],
 "Bone spurs or bone growth": [
  "Bony growths at joint edges are a compensatory response where the body tries to stabilise a joint under uneven stress or degeneration. Not a disease in themselves, but they may irritate surrounding tissue and indicate pre-existing chronic strain and inflammation.",
  "关节边缘的骨质增生，是关节在长期受力不均、不稳定或退变过程中，人体试图增加接触面积、稳定关节的代偿性反应。本身不是病，但可能刺激周围软组织引发疼痛。提示关节已存在慢性劳损和炎症。",
  "Crecimientos óseos en los bordes articulares son una respuesta compensatoria ante estrés desigual. Indican desgaste e inflamación crónicos previos.",
  "जोड़ों के किनारों पर हड्डी की वृद्धि एक क्षतिपूरक प्रतिक्रिया है।"
 ],
 "Back pain": [
  "Very common, and can originate from muscle strain, ligament sprain, disc issues, arthritis, osteoporosis or referred visceral pain. Long-term poor posture, weak core muscles and excess weight are common triggers.",
  "非常普遍的症状，可源于肌肉劳损、韧带拉伤、椎间盘问题、关节炎、骨质疏松或内脏疾病牵涉痛。长期姿势不良、核心肌群无力、体重超标是常见诱因。提示运动系统存在失衡和劳损，需要综合评估和针对性强化。",
  "Muy común. Puede originarse en distensión muscular, discos, artritis u osteoporosis. La mala postura y el core débil son desencadenantes frecuentes.",
  "बहुत सामान्य। यह मांसपेशी खिंचाव, डिस्क या गठिया से हो सकता है।"
 ],
 "Neck stiffness or neck pain": [
  "Restricted neck movement with pain, often from muscle spasm or cervical joint dysfunction. Directly related to prolonged forward head posture using phones and computers. Indicates chronically tense neck and shoulder muscles with impaired circulation and nutrient supply.",
  "颈部活动受限伴疼痛，常由肌肉痉挛、颈椎小关节紊乱、颈椎病或落枕引起。与现代人长期低头使用手机电脑直接相关。提示颈肩部肌肉长期处于紧张状态，血液循环和营养供应受阻，需纠正姿势并放松肌肉。",
  "Movimiento restringido con dolor, a menudo por espasmo muscular. Directamente ligado a la postura de cabeza adelantada con móviles y ordenadores.",
  "दर्द के साथ सीमित गति, अक्सर मांसपेशी ऐंठन से। यह झुकी गर्दन की मुद्रा से जुड़ा है।"
 ],
 "Spine stiffness or pain": [
  "Reduced mobility and pain throughout the spine may indicate widespread degenerative change, severe osteoporosis or multi-level disc disease. A signal of serious compromise to spinal health requiring professional medical evaluation.",
  "整个脊柱（颈、胸、腰）活动度下降并伴有疼痛。可能提示广泛的退行性改变（如强直性脊柱炎早期、弥漫性特发性骨肥厚）、严重的骨质疏松或多节段椎间盘病变。是脊柱健康严重受损的信号，需要专业医学评估。",
  "La movilidad reducida y el dolor en toda la columna pueden indicar cambios degenerativos amplios u osteoporosis grave. Requiere evaluación médica.",
  "पूरी रीढ़ में गति की कमी और दर्द व्यापक अपक्षयी परिवर्तन दर्शा सकता है।"
 ],
 "Cough easily": [
  "Coughing is a defensive reflex clearing the airways. Chronic coughing without clear infection may stem from airway hyperresponsiveness, allergic inflammation or reflux irritation. Requires reducing allergen exposure, lowering systemic inflammation and repairing respiratory epithelium.",
  "咳嗽是呼吸道清除异物的防御反射。无明确感染的长期慢性咳嗽或易咳，可能源于呼吸道高反应性、过敏性炎症，或胃食管反流刺激。从健康管理看，需要减少接触过敏原、降低全身炎症水平，并修复呼吸道上皮细胞。",
  "La tos es un reflejo defensivo. La tos crónica sin infección clara puede venir de hiperreactividad, inflamación alérgica o reflujo.",
  "खांसी एक रक्षात्मक प्रतिवर्त है। बिना संक्रमण की पुरानी खांसी एलर्जी सूजन से हो सकती है।"
 ],
 "Runny nose easily": [
  "Excessive nasal discharge is the mucosa's response to irritants. Frequent occurrence indicates sensitive and unstable mucosal defence, potentially related to low overall immunity, insufficient nutrients for mucosal repair such as vitamin A and zinc, or poor autonomic regulation.",
  "鼻水分泌过多是鼻粘膜对刺激（感染、过敏原、冷空气）的反应。频繁发生表明鼻粘膜敏感、防御功能不稳定，可能与整体免疫力低下、粘膜修复所需的营养（如维生素A、锌）不足，或自主神经功能调节不佳有关。",
  "La secreción nasal excesiva es la respuesta de la mucosa a irritantes. Su frecuencia indica defensa mucosa sensible e inestable.",
  "अत्यधिक नाक स्राव उत्तेजकों के प्रति श्लेष्मा की प्रतिक्रिया है।"
 ],
 "Sneeze a lot": [
  "Sneezing expels irritants through a forceful burst of air. Frequent sneezing, especially in specific environments, is a classic symptom of allergic rhinitis, indicating a hypersensitive immune system. Management focuses on modulating immune balance and repairing gut health.",
  "打喷嚏是鼻粘膜受到刺激后通过爆发式排气来清除异物的反射。频繁打喷嚏，尤其在接触特定环境时，是过敏性鼻炎的典型症状，提示免疫系统处于高敏状态。管理重点在于调整免疫平衡、抗炎和修复肠道健康。",
  "Estornudar expulsa irritantes. Los estornudos frecuentes, sobre todo en entornos concretos, son un síntoma clásico de rinitis alérgica.",
  "छींक उत्तेजकों को बाहर निकालती है। बार-बार छींक एलर्जिक राइनाइटिस का क्लासिक लक्षण है।"
 ],
 "Catch colds often": [
  "More than three or four colds a year, or prolonged recovery, is a clear sign of low immunity. Immunity is rooted in nutrition (protein, vitamins A/C/D, zinc), gut health, adequate sleep and stress management. Frequent colds indicate deficiencies in these areas.",
  "每年感冒超过3-4次，或病程迁延不愈，是免疫力低下的明确标志。免疫力根植于营养（蛋白质、维生素A/C/D、锌等）、肠道健康、充足的睡眠和压力管理。常感冒提示在这些方面存在短板，身体需要全面的支持来重建免疫防线。",
  "Más de tres o cuatro resfriados al año es señal clara de baja inmunidad, arraigada en nutrición, salud intestinal, sueño y manejo del estrés.",
  "साल में तीन-चार से अधिक सर्दी कम प्रतिरक्षा का स्पष्ट संकेत है।"
 ],
 "Often have nasal allergies": [
  "Allergic rhinitis is an overreaction to common substances such as pollen and dust mites. The root lies in immune dysregulation, closely linked to gut dysbiosis, a leaky gut allowing easier entry of allergens, and deficiency in anti-inflammatory nutrients such as Omega-3.",
  "过敏性鼻炎是免疫系统对普通物质（如花粉、尘螨）的过度反应。根本原因在于免疫调节紊乱（Th1/Th2失衡），与肠道菌群失调、肠漏导致过敏原和炎症物质更容易进入体内，以及缺乏Omega-3等抗炎营养素密切相关。",
  "La rinitis alérgica es una reacción exagerada a sustancias comunes. La raíz está en la desregulación inmune ligada a la disbiosis intestinal.",
  "एलर्जिक राइनाइटिस आम पदार्थों पर अति प्रतिक्रिया है, जिसकी जड़ आंत असंतुलन है।"
 ],
 "Sore throat": [
  "Inflammation of the throat mucosa. Frequent episodes indicate weak local immunity, linked to immunity decline from late nights and stress, deficiency in vitamins A and C and zinc that maintain mucosal health, or acid reflux irritation.",
  "咽喉部粘膜的炎症，常由病毒或细菌感染引起，但频繁发作提示局部免疫力薄弱。与熬夜、压力导致的免疫力下降，缺乏维生素A、C、锌等维护粘膜健康的营养素，或胃酸反流刺激有关。需要从提升整体免疫和抗炎能力入手。",
  "Inflamación de la mucosa faríngea. Los episodios frecuentes indican inmunidad local débil por trasnochar, estrés o déficit de vitaminas A y C y zinc.",
  "गले की श्लेष्मा की सूजन। बार-बार होना कमज़ोर स्थानीय प्रतिरक्षा दर्शाता है।"
 ],
 "Nosebleeds easily": [
  "Fragile nasal vessels rupture easily. May relate to dry air or local trauma, but can also indicate systemic issues such as vitamin C or K deficiency affecting vessel strength and clotting, or blood pressure fluctuation.",
  "鼻腔内血管脆弱易破裂出血。可能与空气干燥、局部外伤有关，但也可能提示全身性问题，如维生素C或维生素K缺乏（影响血管壁强度和凝血功能）、血压波动，或中医所说的肺热、肝火上炎。",
  "Vasos nasales frágiles que se rompen con facilidad. Puede indicar déficit de vitamina C o K que afecta la fuerza vascular y la coagulación.",
  "नाक की नाज़ुक वाहिकाएँ आसानी से फटती हैं। यह विटामिन सी या के की कमी दर्शा सकता है।"
 ],
 "Asthma or bronchitis": [
  "Chronic inflammatory disease of the lower airways. Both asthma and bronchitis are closely linked to abnormal immune function, chronic inflammation and oxidative stress. Core management is anti-inflammatory, antioxidant, immune modulation and repair of respiratory tissue.",
  "下呼吸道的慢性炎症性疾病。哮喘是气道高反应性和可逆性气流受限；支气管炎是气管粘膜的炎症。两者都与免疫系统功能异常、慢性炎症、氧化应激密切相关。健康管理核心是抗炎、抗氧化、调节免疫和修复呼吸道组织。",
  "Enfermedad inflamatoria crónica de las vías bajas. Ambas se ligan a función inmune anormal, inflamación crónica y estrés oxidativo.",
  "निचले वायुमार्ग की पुरानी सूजन। दोनों असामान्य प्रतिरक्षा और ऑक्सीडेटिव तनाव से जुड़े हैं।"
 ],
 "Chest tightness, hard to breathe": [
  "A feeling of pressure in the chest and difficulty breathing may stem from cardiopulmonary issues: insufficient heart blood supply, lung disease, severe anaemia or anxiety. A serious alarm regarding inadequate oxygen supply, requiring comprehensive assessment.",
  "感觉胸口发闷、呼吸不畅，可能源于心肺功能问题。心脏供血不足（如冠心病）、肺部疾病（如哮喘、慢阻肺）、严重贫血或焦虑情绪都可能引起。这是身体对氧气供应不足或代谢废物堆积的严重警报，需要综合评估心肺和血液健康。",
  "Presión en el pecho y dificultad para respirar pueden venir de problemas cardiopulmonares. Es una alarma seria sobre oxígeno insuficiente.",
  "सीने में दबाव और साँस लेने में कठिनाई हृदय-फेफड़े की समस्या से हो सकती है।"
 ],
 "Heart beating fast or irregular": [
  "Awareness of a heart beating too fast, slow or irregularly. May be caused by cardiac issues, electrolyte imbalance (potassium, magnesium), hyperthyroidism, anaemia or anxiety. Requires medical examination to rule out organic problems alongside nutritional support and stress management.",
  "自觉心跳过快、过慢或不规则。可能由心脏本身问题（如房颤）、电解质紊乱（钾、镁缺乏）、甲状腺功能亢进、贫血、或焦虑引起。是心脏电生理活动不稳定的信号，需要医学检查排除器质性问题，同时关注营养支持和压力管理。",
  "Percibir latidos rápidos, lentos o irregulares. Puede deberse a problemas cardíacos, desequilibrio de electrolitos, hipertiroidismo o ansiedad.",
  "तेज़, धीमी या अनियमित धड़कन का अहसास। यह हृदय समस्या या इलेक्ट्रोलाइट असंतुलन से हो सकता है।"
 ],
 "Leg weakness": [
  "Heaviness, fatigue or difficulty walking. Besides neurological issues, circulatory causes may include insufficient arterial supply to the legs, poor venous return causing oedema, or severe malnutrition causing muscle wasting.",
  "感觉双腿沉重、乏力，行走困难。除了神经系统问题，循环系统原因可能包括下肢动脉供血不足（如外周动脉疾病）、静脉回流不畅导致水肿，或严重营养不良导致的肌肉消耗。提示需要关注血管通畅性和肌肉营养状况。",
  "Pesadez o dificultad para caminar. Las causas circulatorias incluyen riego arterial insuficiente, mal retorno venoso o desnutrición grave.",
  "भारीपन या चलने में कठिनाई। कारणों में अपर्याप्त धमनी आपूर्ति शामिल है।"
 ],
 "High blood lipids, thick blood": [
  "Elevated triglycerides and cholesterol, or increased blood viscosity, significantly raise the risk of atherosclerosis, thrombosis and cardiovascular events. Directly related to a high-fat high-sugar diet, lack of exercise, obesity, alcohol and disordered liver fat metabolism.",
  "血液中甘油三酯、胆固醇过高，或血液粘稠度增加，会显著增加动脉粥样硬化、血栓形成和心脑血管事件的风险。这与高脂高糖饮食、缺乏运动、肥胖、饮酒以及肝脏脂肪代谢功能紊乱直接相关。改善生活方式和调节血脂是管理核心。",
  "Triglicéridos y colesterol elevados aumentan mucho el riesgo de aterosclerosis y eventos cardiovasculares.",
  "उच्च ट्राइग्लिसराइड और कोलेस्ट्रॉल एथेरोस्क्लेरोसिस का जोखिम बढ़ाते हैं।"
 ],
 "Anemia": [
  "Insufficient red cells or haemoglobin, reducing oxygen-carrying capacity. Common causes include iron, B12 or folate deficiency, chronic blood loss such as heavy menstruation, or bone marrow dysfunction. Requires identifying the cause and targeted supplementation.",
  "血液中红细胞数量或血红蛋白含量不足，导致携氧能力下降。常见原因包括铁、维生素B12、叶酸缺乏（营养性贫血）、慢性失血（如月经过多、消化道出血）或骨髓造血功能障碍。表现为乏力、苍白、心悸。需查明原因并针对性补充营养。",
  "Glóbulos rojos o hemoglobina insuficientes. Causas comunes: déficit de hierro, B12 o folato, o pérdida crónica de sangre.",
  "अपर्याप्त लाल कोशिकाएँ या हीमोग्लोबिन। कारण: आयरन, बी12 या फोलेट की कमी।"
 ],
 "Varicose veins": [
  "Leg veins become twisted and enlarged from valve incompetence and raised pressure. Related to prolonged standing, heavy labour, obesity, constipation and genetics. Indicates excessive burden on venous return, requiring improved circulation and bioflavonoid-rich foods.",
  "腿部静脉因瓣膜功能不全、压力增高而迂曲、扩张。与长期站立、重体力劳动、肥胖、便秘腹压增高及遗传有关。提示下肢静脉回流系统负担过重，需要改善血液循环、减轻腿部压力，并增加富含生物类黄酮的食物以增强静脉壁韧性。",
  "Venas de las piernas dilatadas por insuficiencia valvular. Relacionadas con estar de pie mucho tiempo, obesidad y genética.",
  "वाल्व की खराबी से पैरों की नसें फैल जाती हैं।"
 ],
 "Dark or cloudy urine": [
  "Normal urine is pale yellow and clear. Very dark colour may indicate dehydration, but can also come from food, medication or liver and gallbladder disease. Cloudiness may indicate infection, crystals preceding stones, or chyluria. An important window on hydration and urinary health.",
  "正常尿液为淡黄色、清亮。颜色过深可能提示饮水不足、浓缩尿，也可能由食物（如胡萝卜）、药物或肝胆疾病（胆红素尿）引起。浑浊可能提示脓尿（感染）、晶体尿（结石前兆）或乳糜尿。是观察水合状态和泌尿系统健康的重要窗口。",
  "La orina normal es amarillo pálido y clara. El color muy oscuro puede indicar deshidratación; la turbidez, infección o cristales previos a cálculos.",
  "सामान्य मूत्र हल्का पीला और साफ़ होता है। गहरा रंग निर्जलीकरण दर्शा सकता है।"
 ],
 "Urinary tract infection, painful urination": [
  "Inflammation from bacteria entering the urethra, more common in women. Predisposing factors include low water intake, holding urine, poor hygiene and decreased immunity. Recurrent infection requires investigation for anatomical abnormality or diabetes.",
  "细菌侵入尿道引起的炎症，女性更常见。症状包括尿频、尿急、排尿痛。易感因素包括饮水少、憋尿、卫生习惯不良、免疫力下降等。反复感染需排查有无解剖结构异常或糖尿病。管理需抗炎、提高免疫力并保证充足饮水。",
  "Inflamación por bacterias en la uretra, más común en mujeres. Factores: poca agua, retener la orina, higiene deficiente e inmunidad baja.",
  "मूत्रमार्ग में बैक्टीरिया से सूजन, महिलाओं में अधिक आम।"
 ],
 "Low sex drive or sexual problems": [
  "Reduced libido or sexual dysfunction involves both physiological and psychological factors. Physiologically it may relate to hormone levels, vascular function, neurological issues or chronic disease. Reflects overall vitality, hormonal balance and circulatory health.",
  "性欲减退或性功能障碍。与生理和心理因素都有关。生理上可能与激素水平（睾酮、雌激素）异常、血管功能（影响勃起或润滑）、神经系统问题或慢性疾病有关。心理压力、情绪问题也是重要因素。反映整体的活力、激素平衡和循环健康状况。",
  "La libido reducida implica factores fisiológicos y psicológicos. Refleja vitalidad general, equilibrio hormonal y salud circulatoria.",
  "कम कामेच्छा में शारीरिक और मानसिक दोनों कारक शामिल हैं।"
 ],
 "Gynecological infections": [
  "Vaginitis, cervicitis or pelvic inflammatory disease from bacterial, fungal or parasitic infection. Frequent episodes indicate low local immunity and vaginal microbiome imbalance, and may relate to poor blood sugar control. Holistically connected to overall immunity and gut health.",
  "阴道炎、宫颈炎、盆腔炎等。由细菌、真菌或寄生虫感染引起。频繁发作提示局部免疫力低下、菌群失衡（阴道微生态），也可能与血糖控制不良、个人卫生、性卫生有关。从整体看，与全身免疫力、炎症水平和肠道健康存在关联。",
  "Vaginitis, cervicitis o enfermedad pélvica inflamatoria. Los episodios frecuentes indican baja inmunidad local y desequilibrio del microbioma vaginal.",
  "योनिशोथ या श्रोणि सूजन। बार-बार होना कम स्थानीय प्रतिरक्षा दर्शाता है।"
 ],
 "High uric acid or gout": [
  "Uric acid is the end product of purine metabolism. High levels form urate crystals in joints, causing intense gout pain, and in the kidneys. Related to a high-purine diet, alcohol, obesity and reduced kidney excretion. A manifestation of metabolic syndrome.",
  "尿酸是嘌呤代谢的终产物，过高会形成尿酸盐结晶沉积在关节（引发痛风剧痛）和肾脏。与高嘌呤饮食（内脏、海鲜、肉汤）、饮酒、肥胖、肾脏排泄功能下降有关。是代谢综合征的表现之一，管理需调整饮食、促进排泄和抗炎。",
  "El ácido úrico es el producto final del metabolismo de purinas. Niveles altos forman cristales en articulaciones y riñones.",
  "यूरिक एसिड प्यूरीन चयापचय का अंतिम उत्पाद है। उच्च स्तर जोड़ों में क्रिस्टल बनाता है।"
 ],
 "Stones in gallbladder, kidney, or urinary tract": [
  "Hard deposits from minerals and salts. Gallstones relate to cholesterol supersaturation and bile stasis; kidney stones to high concentrations of calcium, oxalate or uric acid in urine. Formation is closely linked to diet, insufficient water intake and metabolic abnormality.",
  "矿物质和盐类在胆囊或泌尿系统中形成硬块。胆结石与胆固醇过饱和、胆汁淤积有关；肾结石与尿中钙、草酸、尿酸等浓度过高有关。形成与饮食、饮水不足、代谢异常密切相关。预防和调理需针对性调整饮食和增加液体摄入。",
  "Depósitos duros de minerales y sales. Su formación se liga a la dieta, poca ingesta de agua y anomalías metabólicas.",
  "खनिजों और लवणों से बने कठोर जमाव। इनका बनना आहार और कम पानी से जुड़ा है।"
 ],
 "Bad breath": [
  "A bitter taste is often related to bile reflux, indicating poor liver and gallbladder function. Bad breath mostly comes from oral bacteria, but persistent bad breath may link to gastrointestinal issues (H. pylori, low stomach acid, constipation causing toxin reabsorption) or poor liver and kidney metabolism.",
  "口苦常与胆汁反流有关，提示肝胆疏泄功能不佳。口臭大部分源于口腔细菌分解食物残渣产生挥发性硫化物，但顽固性口臭可能与胃肠道问题（如幽门螺杆菌感染、胃酸过低、便秘导致毒素重吸收）、或肝肾功能代谢不良有关。",
  "El sabor amargo suele relacionarse con reflujo biliar, indicando mala función hepatobiliar. El mal aliento persistente puede vincularse a problemas gastrointestinales o mal metabolismo hepático y renal.",
  "कड़वा स्वाद अक्सर पित्त प्रतिवाह से जुड़ा है। लगातार दुर्गंध जठरांत्र समस्याओं से जुड़ी हो सकती है।"
 ],
 "Bitter taste": [
  "A bitter taste is often related to bile reflux, indicating poor liver and gallbladder function. Bad breath mostly comes from oral bacteria, but persistent bad breath may link to gastrointestinal issues (H. pylori, low stomach acid, constipation causing toxin reabsorption) or poor liver and kidney metabolism.",
  "口苦常与胆汁反流有关，提示肝胆疏泄功能不佳。口臭大部分源于口腔细菌分解食物残渣产生挥发性硫化物，但顽固性口臭可能与胃肠道问题（如幽门螺杆菌感染、胃酸过低、便秘导致毒素重吸收）、或肝肾功能代谢不良有关。",
  "El sabor amargo suele relacionarse con reflujo biliar, indicando mala función hepatobiliar. El mal aliento persistente puede vincularse a problemas gastrointestinales o mal metabolismo hepático y renal.",
  "कड़वा स्वाद अक्सर पित्त प्रतिवाह से जुड़ा है। लगातार दुर्गंध जठरांत्र समस्याओं से जुड़ी हो सकती है।"
 ],
 "Constipation": [
  "Constipation means difficult or infrequent bowel movements, related to low fibre, low water intake, weak motility, dysbiosis or stress. Blood in the stool requires immediate attention: it may be haemorrhoids, but could also signal polyps, inflammatory bowel disease or colorectal cancer, and needs prompt medical evaluation.",
  "便秘指排便困难、次数减少，与膳食纤维摄入不足、饮水少、肠道蠕动无力、菌群失调或精神压力有关。大便带血必须警惕，可能为痔疮出血，也可能是结肠息肉、炎症性肠病甚至结直肠癌的征兆，需立即就医检查。",
  "El estreñimiento se relaciona con poca fibra, poca agua y motilidad débil. La sangre en heces requiere atención médica inmediata.",
  "कब्ज़ कम फ़ाइबर और पानी से जुड़ा है। मल में खून पर तुरंत डॉक्टर को दिखाएँ।"
 ],
 "Hard to fall asleep": [
  "Sleep is the golden time for repair and detoxification. Insomnia and vivid dreams indicate a restless mind, directly related to high stress, excessive worry and depletion of liver resources. The underlying causes are insufficient nutrients for neurotransmitter synthesis and daytime toxin accumulation interfering with the nervous system.",
  "睡眠是身体修复和排毒的黄金时间。失眠多梦表明肝不藏血或心神不宁，与压力大、思虑过度、肝血消耗过多直接相关。深层次原因是神经递质（如血清素、褪黑素）合成所需营养不足，以及日间毒素积累对神经系统的干扰。",
  "El sueño es el momento dorado de reparación. El insomnio y los sueños vívidos se relacionan con estrés alto y nutrientes insuficientes para sintetizar neurotransmisores.",
  "नींद मरम्मत का स्वर्णिम समय है। अनिद्रा उच्च तनाव और न्यूरोट्रांसमीटर के लिए अपर्याप्त पोषक तत्वों से जुड़ी है।"
 ],
 "Vivid dreams": [
  "Sleep is the golden time for repair and detoxification. Insomnia and vivid dreams indicate a restless mind, directly related to high stress, excessive worry and depletion of liver resources. The underlying causes are insufficient nutrients for neurotransmitter synthesis and daytime toxin accumulation interfering with the nervous system.",
  "睡眠是身体修复和排毒的黄金时间。失眠多梦表明肝不藏血或心神不宁，与压力大、思虑过度、肝血消耗过多直接相关。深层次原因是神经递质（如血清素、褪黑素）合成所需营养不足，以及日间毒素积累对神经系统的干扰。",
  "El sueño es el momento dorado de reparación. El insomnio y los sueños vívidos se relacionan con estrés alto y nutrientes insuficientes para sintetizar neurotransmisores.",
  "नींद मरम्मत का स्वर्णिम समय है। अनिद्रा उच्च तनाव और न्यूरोट्रांसमीटर के लिए अपर्याप्त पोषक तत्वों से जुड़ी है।"
 ],
 "Dry eyes": [
  "A common dry eye symptom, related to prolonged screen time, reduced blinking and poor tear quality. Deeper causes involve the liver's reduced ability to nourish the eyes, and insufficient anti-inflammatory nutrients such as Omega-3, affecting tear glands and ocular surface cells.",
  "现代人常见的干眼症症状，与长时间盯着电子屏幕、眨眼减少、泪液质量下降有关。深层原因涉及肝阴/肝血亏虚，无法充分滋养目窍，以及Omega-3脂肪酸等抗炎营养素摄入不足，影响了泪腺和眼表细胞的健康。",
  "Síntoma común de ojo seco por pantallas y menor parpadeo. Las causas profundas incluyen falta de nutrientes antiinflamatorios como el Omega-3.",
  "स्क्रीन समय से सूखी आँख का सामान्य लक्षण। गहरे कारणों में ओमेगा-3 की कमी शामिल है।"
 ],
 "Sore or aching eyes": [
  "A common dry eye symptom, related to prolonged screen time, reduced blinking and poor tear quality. Deeper causes involve the liver's reduced ability to nourish the eyes, and insufficient anti-inflammatory nutrients such as Omega-3, affecting tear glands and ocular surface cells.",
  "现代人常见的干眼症症状，与长时间盯着电子屏幕、眨眼减少、泪液质量下降有关。深层原因涉及肝阴/肝血亏虚，无法充分滋养目窍，以及Omega-3脂肪酸等抗炎营养素摄入不足，影响了泪腺和眼表细胞的健康。",
  "Síntoma común de ojo seco por pantallas y menor parpadeo. Las causas profundas incluyen falta de nutrientes antiinflamatorios como el Omega-3.",
  "स्क्रीन समय से सूखी आँख का सामान्य लक्षण। गहरे कारणों में ओमेगा-3 की कमी शामिल है।"
 ],
 "Dark circles": [
  "Persistent dark circles may relate to poor microcirculation around the eyes and venous congestion from poor sleep. Puffiness may indicate suboptimal kidney or lymphatic drainage, or excess salt and fluid before bed. Both can reflect a need to support liver and kidney metabolism.",
  "长期黑眼圈可能与血液循环不畅（尤其是眼部微循环）、睡眠质量差导致静脉淤血有关。眼睑浮肿则可能提示肾脏或淋巴排水功能不佳，或睡前摄入过多盐分和水分。两者都可能反映肝、肾代谢功能需要支持。",
  "Las ojeras persistentes se relacionan con mala microcirculación y congestión venosa por mal sueño. La hinchazón puede indicar drenaje renal o linfático subóptimo.",
  "लगातार काले घेरे खराब सूक्ष्म संचार और खराब नींद से जुड़े हैं।"
 ],
 "Puffy eyes": [
  "Persistent dark circles may relate to poor microcirculation around the eyes and venous congestion from poor sleep. Puffiness may indicate suboptimal kidney or lymphatic drainage, or excess salt and fluid before bed. Both can reflect a need to support liver and kidney metabolism.",
  "长期黑眼圈可能与血液循环不畅（尤其是眼部微循环）、睡眠质量差导致静脉淤血有关。眼睑浮肿则可能提示肾脏或淋巴排水功能不佳，或睡前摄入过多盐分和水分。两者都可能反映肝、肾代谢功能需要支持。",
  "Las ojeras persistentes se relacionan con mala microcirculación y congestión venosa por mal sueño. La hinchazón puede indicar drenaje renal o linfático subóptimo.",
  "लगातार काले घेरे खराब सूक्ष्म संचार और खराब नींद से जुड़े हैं।"
 ],
 "Poor night vision": [
  "Whether you see badly in dim light, and how long your eyes take to adjust after a bright light. This is about the retina's low-light cells, which run on vitamin A and zinc. It is not the same as needing glasses.",
  "指光线暗的时候看不清，以及从亮处进暗处需要多久才适应。这一题问的是视网膜暗视觉细胞，它靠维生素A和锌工作。和近视需要戴眼镜是两回事。",
  "Si ve mal con poca luz y cuánto tardan sus ojos en adaptarse tras una luz fuerte. Trata de las células de visión nocturna de la retina, que dependen de la vitamina A y el zinc. No es lo mismo que necesitar gafas.",
  "कम रोशनी में देखने की कठिनाई, और तेज़ रोशनी के बाद आँखों को समायोजित होने में लगने वाला समय। यह रेटिना की कम-प्रकाश कोशिकाओं के बारे में है, जो विटामिन A और ज़िंक पर चलती हैं। चश्मे की ज़रूरत से अलग बात है।"
 ],
 "Blurry vision": [
  "Vision that goes in and out of focus, or hazes over, at times when it is otherwise fine. If you are short-sighted and things are simply blurry without glasses, that is not this question. What matters here is blurring that comes and goes, which points at focusing fatigue, blood sugar swings, or the liver, rather than at the shape of your eye.",
  "指视力时清时糊、发花，本来看得清的东西有时候糊了。如果你是近视，不戴眼镜本来就看不清，那不算这一题。这里问的是时有时无的模糊，指向调节疲劳、血糖波动或肝，而不是眼球的形状。",
  "Visión que entra y sale de foco, o se nubla, en momentos en que por lo demás está bien. Si es miope y ve borroso sin gafas, esa no es esta pregunta. Aquí importa el desenfoque intermitente, que apunta a fatiga de enfoque, oscilaciones de azúcar o el hígado.",
  "दृष्टि जो कभी-कभी फ़ोकस से हट जाती है या धुंधली हो जाती है, जबकि बाकी समय ठीक रहती है। यदि आप निकट-दृष्टि दोष से ग्रस्त हैं और चश्मे के बिना धुंधला दिखता है, तो यह वह प्रश्न नहीं है। यहाँ आने-जाने वाला धुंधलापन मायने रखता है।"
 ],
 "Toothache": [
  "Red, swollen or receding gums indicate chronic oral infection and inflammation. Research links periodontitis to systemic inflammation and increased cardiovascular risk. Managing it requires both local hygiene and systemic anti-inflammatory measures.",
  "牙龈红肿、疼痛或退缩，是口腔慢性感染和炎症的表现。这不仅影响牙齿健康，研究表明牙周炎与全身性炎症、心血管疾病风险增加相关。控制口腔炎症需要局部清洁和全身抗炎、提升免疫力的双重管理。",
  "Encías rojas, hinchadas o retraídas indican infección oral crónica. La periodontitis se vincula a inflamación sistémica y mayor riesgo cardiovascular.",
  "लाल, सूजे मसूड़े पुराने मौखिक संक्रमण का संकेत हैं, जो हृदय जोखिम से जुड़े हैं।"
 ],
 "Loose teeth": [
  "Dental health reflects bone health. Loose teeth may relate to alveolar bone loss, an oral manifestation of osteoporosis. Cavities relate to imbalanced oral microbiota, high sugar intake, and changes in saliva composition. Signals a need to attend to mineral balance and diet.",
  "牙齿健康是骨骼健康的缩影。牙齿松动可能与牙槽骨流失（骨质疏松的口腔表现）有关；蛀牙则与口腔菌群失衡、饮食中糖分过高、以及唾液成分（受全身营养和酸碱平衡影响）改变有关。提示需要关注矿物质（钙、磷、镁）平衡和饮食结构。",
  "La salud dental refleja la ósea. Los dientes flojos pueden indicar pérdida de hueso alveolar; las caries, microbiota oral desequilibrada y azúcar alto.",
  "दंत स्वास्थ्य हड्डी के स्वास्थ्य को दर्शाता है। ढीले दांत हड्डी क्षय दर्शा सकते हैं।"
 ],
 "Cavities": [
  "Dental health reflects bone health. Loose teeth may relate to alveolar bone loss, an oral manifestation of osteoporosis. Cavities relate to imbalanced oral microbiota, high sugar intake, and changes in saliva composition. Signals a need to attend to mineral balance and diet.",
  "牙齿健康是骨骼健康的缩影。牙齿松动可能与牙槽骨流失（骨质疏松的口腔表现）有关；蛀牙则与口腔菌群失衡、饮食中糖分过高、以及唾液成分（受全身营养和酸碱平衡影响）改变有关。提示需要关注矿物质（钙、磷、镁）平衡和饮食结构。",
  "La salud dental refleja la ósea. Los dientes flojos pueden indicar pérdida de hueso alveolar; las caries, microbiota oral desequilibrada y azúcar alto.",
  "दंत स्वास्थ्य हड्डी के स्वास्थ्य को दर्शाता है। ढीले दांत हड्डी क्षय दर्शा सकते हैं।"
 ],
 "Dandruff": [
  "Excessive shedding of the scalp with itching. May relate to imbalanced sebum, Malassezia overgrowth, or contact dermatitis. From a health management view it is linked to systemic inflammation from a diet high in fat and sugar, B vitamin deficiency, stress, and poor gut health.",
  "头皮角质层过度脱落伴瘙痒。可能与头皮油脂分泌失衡、马拉色菌过度增殖、或接触性皮炎有关。从健康管理角度，与饮食过于油腻、高糖、B族维生素缺乏、压力及肠道健康不良导致的全身性炎症状态相关。",
  "Descamación excesiva con picor. Puede deberse a sebo desequilibrado o exceso de Malassezia, y se vincula a inflamación sistémica por dieta grasa y azucarada, déficit de vitaminas B, estrés y mala salud intestinal.",
  "खुजली के साथ अत्यधिक पपड़ी। यह असंतुलित सीबम, तनाव, बी विटामिन की कमी और खराब आंत स्वास्थ्य से जुड़ी है।"
 ],
 "Itchy scalp": [
  "Excessive shedding of the scalp with itching. May relate to imbalanced sebum, Malassezia overgrowth, or contact dermatitis. From a health management view it is linked to systemic inflammation from a diet high in fat and sugar, B vitamin deficiency, stress, and poor gut health.",
  "头皮角质层过度脱落伴瘙痒。可能与头皮油脂分泌失衡、马拉色菌过度增殖、或接触性皮炎有关。从健康管理角度，与饮食过于油腻、高糖、B族维生素缺乏、压力及肠道健康不良导致的全身性炎症状态相关。",
  "Descamación excesiva con picor. Puede deberse a sebo desequilibrado o exceso de Malassezia, y se vincula a inflamación sistémica por dieta grasa y azucarada, déficit de vitaminas B, estrés y mala salud intestinal.",
  "खुजली के साथ अत्यधिक पपड़ी। यह असंतुलित सीबम, तनाव, बी विटामिन की कमी और खराब आंत स्वास्थ्य से जुड़ी है।"
 ],
 "Cold hands and feet": [
  "Low temperature in the extremities, or cold yet sweaty hands and feet. Mostly related to peripheral circulation problems and autonomic dysregulation. May also indicate insufficient qi and blood, or a metabolic issue such as hypothyroidism.",
  "四肢末端温度低，或又冷又容易出汗。多与末梢血液循环障碍、自主神经功能调节紊乱（支配血管收缩和汗腺）有关。也可能提示气血不足、阳气不能达于四末，或存在甲状腺功能减退等代谢性问题。",
  "Temperatura baja en las extremidades, o manos y pies fríos pero sudorosos. Relacionado con circulación periférica y desregulación autonómica.",
  "हाथ-पैरों का ठंडा या ठंडा-पसीने वाला होना परिधीय संचार समस्या दर्शाता है।"
 ],
 "Sweaty hands and feet": [
  "Low temperature in the extremities, or cold yet sweaty hands and feet. Mostly related to peripheral circulation problems and autonomic dysregulation. May also indicate insufficient qi and blood, or a metabolic issue such as hypothyroidism.",
  "四肢末端温度低，或又冷又容易出汗。多与末梢血液循环障碍、自主神经功能调节紊乱（支配血管收缩和汗腺）有关。也可能提示气血不足、阳气不能达于四末，或存在甲状腺功能减退等代谢性问题。",
  "Temperatura baja en las extremidades, o manos y pies fríos pero sudorosos. Relacionado con circulación periférica y desregulación autonómica.",
  "हाथ-पैरों का ठंडा या ठंडा-पसीने वाला होना परिधीय संचार समस्या दर्शाता है।"
 ],
 "Numbness or tingling in limbs": [
  "Numbness may stem from nerve compression or peripheral neuropathy. Swelling is often related to impaired venous or lymphatic return, heart failure, kidney disease or local inflammation. A signal requiring careful differentiation of cause.",
  "肢体感觉异常（麻木、针刺感）或肿胀疼痛。麻木可能源于神经受压（如颈椎病、腰椎病）或周围神经病变（如糖尿病引起）。肿胀常与静脉或淋巴回流受阻、心力衰竭、肾脏疾病或局部炎症有关。是需要仔细甄别病因的信号。",
  "El entumecimiento puede venir de compresión nerviosa o neuropatía. La hinchazón suele relacionarse con retorno venoso o linfático deteriorado.",
  "सुन्नपन तंत्रिका दबाव से हो सकता है। सूजन शिरापरक या लसीका वापसी में बाधा दर्शाती है।"
 ],
 "Swelling in limbs": [
  "Numbness may stem from nerve compression or peripheral neuropathy. Swelling is often related to impaired venous or lymphatic return, heart failure, kidney disease or local inflammation. A signal requiring careful differentiation of cause.",
  "肢体感觉异常（麻木、针刺感）或肿胀疼痛。麻木可能源于神经受压（如颈椎病、腰椎病）或周围神经病变（如糖尿病引起）。肿胀常与静脉或淋巴回流受阻、心力衰竭、肾脏疾病或局部炎症有关。是需要仔细甄别病因的信号。",
  "El entumecimiento puede venir de compresión nerviosa o neuropatía. La hinchazón suele relacionarse con retorno venoso o linfático deteriorado.",
  "सुन्नपन तंत्रिका दबाव से हो सकता है। सूजन शिरापरक या लसीका वापसी में बाधा दर्शाती है।"
 ],
 "Unexplained weight gain": [
  "Significant weight change without deliberate diet or exercise change. Gain often relates to insulin resistance, hypothyroidism or raised cortisol; loss may link to hyperthyroidism, diabetes, malabsorption or chronic wasting. A sensitive indicator of altered metabolic status.",
  "在没有刻意改变饮食运动的情况下，体重短期内显著增加或减少。增重常与胰岛素抵抗、甲状腺功能减退、皮质醇升高（压力激素）有关；减重可能与甲状腺功能亢进、糖尿病、消化吸收障碍或慢性消耗性疾病有关。是代谢状态改变的敏感指标。",
  "Cambio de peso importante sin cambiar dieta ni ejercicio. La ganancia suele ligarse a resistencia a la insulina o hipotiroidismo; la pérdida, a hipertiroidismo o malabsorción.",
  "बिना आहार बदले वज़न में बड़ा बदलाव। वृद्धि इंसुलिन प्रतिरोध से, कमी अतिगलग्रंथिता से जुड़ी हो सकती है।"
 ],
 "Unexplained weight loss": [
  "Significant weight change without deliberate diet or exercise change. Gain often relates to insulin resistance, hypothyroidism or raised cortisol; loss may link to hyperthyroidism, diabetes, malabsorption or chronic wasting. A sensitive indicator of altered metabolic status.",
  "在没有刻意改变饮食运动的情况下，体重短期内显著增加或减少。增重常与胰岛素抵抗、甲状腺功能减退、皮质醇升高（压力激素）有关；减重可能与甲状腺功能亢进、糖尿病、消化吸收障碍或慢性消耗性疾病有关。是代谢状态改变的敏感指标。",
  "Cambio de peso importante sin cambiar dieta ni ejercicio. La ganancia suele ligarse a resistencia a la insulina o hipotiroidismo; la pérdida, a hipertiroidismo o malabsorción.",
  "बिना आहार बदले वज़न में बड़ा बदलाव। वृद्धि इंसुलिन प्रतिरोध से, कमी अतिगलग्रंथिता से जुड़ी हो सकती है।"
 ],
 "Overweight": [
  "Long-term deviation from an ideal weight range. Obesity is excess fat tissue, a breeding ground for inflammation and metabolic disease; being underweight may indicate inadequate nutrition, poor absorption or hypermetabolism. Both reflect imbalanced energy and nutrient metabolism.",
  "长期偏离理想体重范围。肥胖是脂肪组织过量堆积，是炎症和代谢疾病的温床；过度消瘦可能意味着营养摄入不足、吸收不良或代谢亢进。两者都是身体组成不健康、营养能量代谢失衡的长期表现，需要综合调整。",
  "Desviación prolongada del peso ideal. La obesidad es caldo de cultivo de inflamación; el bajo peso puede indicar mala nutrición o absorción.",
  "आदर्श वज़न से लंबे समय तक विचलन। मोटापा सूजन का आधार है।"
 ],
 "Underweight": [
  "Long-term deviation from an ideal weight range. Obesity is excess fat tissue, a breeding ground for inflammation and metabolic disease; being underweight may indicate inadequate nutrition, poor absorption or hypermetabolism. Both reflect imbalanced energy and nutrient metabolism.",
  "长期偏离理想体重范围。肥胖是脂肪组织过量堆积，是炎症和代谢疾病的温床；过度消瘦可能意味着营养摄入不足、吸收不良或代谢亢进。两者都是身体组成不健康、营养能量代谢失衡的长期表现，需要综合调整。",
  "Desviación prolongada del peso ideal. La obesidad es caldo de cultivo de inflamación; el bajo peso puede indicar mala nutrición o absorción.",
  "आदर्श वज़न से लंबे समय तक विचलन। मोटापा सूजन का आधार है।"
 ],
 "Blood sugar runs high": [
  "Persistently abnormal blood sugar. High blood sugar stems from insulin resistance or deficiency; low blood sugar may come from reactive hypoglycaemia or irregular eating. Instability damages vessels and nerves and causes energy and mood swings. Management centres on diet and insulin sensitivity.",
  "血糖水平持续异常。高血糖（糖尿病前期或糖尿病）源于胰岛素抵抗或分泌不足；低血糖可能由反应性低血糖、胰岛素瘤或饮食不规律引起。血糖不稳定会损伤血管和神经，并引发能量波动和情绪问题。管理核心是饮食调整和改善胰岛素敏感性。",
  "Azúcar persistentemente anormal. La inestabilidad daña vasos y nervios y causa oscilaciones de energía y ánimo.",
  "लगातार असामान्य रक्त शर्करा वाहिकाओं और तंत्रिकाओं को नुकसान पहुँचाती है।"
 ],
 "Blood sugar runs low": [
  "Persistently abnormal blood sugar. High blood sugar stems from insulin resistance or deficiency; low blood sugar may come from reactive hypoglycaemia or irregular eating. Instability damages vessels and nerves and causes energy and mood swings. Management centres on diet and insulin sensitivity.",
  "血糖水平持续异常。高血糖（糖尿病前期或糖尿病）源于胰岛素抵抗或分泌不足；低血糖可能由反应性低血糖、胰岛素瘤或饮食不规律引起。血糖不稳定会损伤血管和神经，并引发能量波动和情绪问题。管理核心是饮食调整和改善胰岛素敏感性。",
  "Azúcar persistentemente anormal. La inestabilidad daña vasos y nervios y causa oscilaciones de energía y ánimo.",
  "लगातार असामान्य रक्त शर्करा वाहिकाओं और तंत्रिकाओं को नुकसान पहुँचाती है।"
 ],
 "Blood pressure runs high": [
  "Blood pressure consistently outside the normal range. Hypertension is a silent killer damaging the vessel lining; hypotension may cause dizziness and fatigue. Nutrition, exercise, stress management and limiting sodium are key intervention points.",
  "血压长期偏离正常范围。高血压是无声杀手，损伤血管内皮；低血压可能导致头晕、乏力。两者都与血管弹性、血容量、心脏功能以及神经内分泌调节有关。营养、运动、压力管理和限制钠盐是关键干预点。",
  "Presión fuera del rango normal. La hipertensión es un asesino silencioso; la hipotensión puede causar mareo y fatiga.",
  "सामान्य सीमा से बाहर रक्तचाप। उच्च रक्तचाप मूक हत्यारा है।"
 ],
 "Blood pressure runs low": [
  "Blood pressure consistently outside the normal range. Hypertension is a silent killer damaging the vessel lining; hypotension may cause dizziness and fatigue. Nutrition, exercise, stress management and limiting sodium are key intervention points.",
  "血压长期偏离正常范围。高血压是无声杀手，损伤血管内皮；低血压可能导致头晕、乏力。两者都与血管弹性、血容量、心脏功能以及神经内分泌调节有关。营养、运动、压力管理和限制钠盐是关键干预点。",
  "Presión fuera del rango normal. La hipertensión es un asesino silencioso; la hipotensión puede causar mareo y fatiga.",
  "सामान्य सीमा से बाहर रक्तचाप। उच्च रक्तचाप मूक हत्यारा है।"
 ],
 "Urinate often": [
  "Abnormally frequent urination, urgency or night-time bed-wetting. Possible causes include urinary tract infection, overactive bladder, prostate enlargement, pelvic floor relaxation, diabetes or neurological disorders. Requires distinguishing functional from organic causes.",
  "排尿次数异常增多、有急迫感，或夜间遗尿。可能原因包括：泌尿系感染、膀胱过度活动症、前列腺增生（男性）、盆底肌松弛（女性）、糖尿病或神经系统疾病。需要区分是功能性问题还是器质性疾病，并针对原因管理。",
  "Micción anormalmente frecuente o urgente. Causas posibles: infección urinaria, vejiga hiperactiva, próstata, suelo pélvico o diabetes.",
  "असामान्य रूप से बार-बार पेशाब। कारण: मूत्र संक्रमण, अतिसक्रिय मूत्राशय या मधुमेह।"
 ],
 "Urgent urge to urinate": [
  "Abnormally frequent urination, urgency or night-time bed-wetting. Possible causes include urinary tract infection, overactive bladder, prostate enlargement, pelvic floor relaxation, diabetes or neurological disorders. Requires distinguishing functional from organic causes.",
  "排尿次数异常增多、有急迫感，或夜间遗尿。可能原因包括：泌尿系感染、膀胱过度活动症、前列腺增生（男性）、盆底肌松弛（女性）、糖尿病或神经系统疾病。需要区分是功能性问题还是器质性疾病，并针对原因管理。",
  "Micción anormalmente frecuente o urgente. Causas posibles: infección urinaria, vejiga hiperactiva, próstata, suelo pélvico o diabetes.",
  "असामान्य रूप से बार-बार पेशाब। कारण: मूत्र संक्रमण, अतिसक्रिय मूत्राशय या मधुमेह।"
 ],
 "Period pain": [
  "Dysmenorrhoea is abdominal pain during menstruation, primary or secondary. Abnormal discharge means changes in colour, odour or consistency, possibly indicating infection. Both relate to pelvic inflammation, hormonal imbalance with excess prostaglandins, uterine spasm or nutritional deficiency such as magnesium.",
  "痛经指经期腹痛，分原发性和继发性（如子宫内膜异位症、腺肌症）。异常白带指颜色、气味、性状改变，可能提示感染。两者均与盆腔炎症、激素失衡（前列腺素过高）、子宫肌肉痉挛或营养缺乏（如镁）有关。是生殖系统发出的重要健康警报。",
  "La dismenorrea es dolor abdominal menstrual. El flujo anormal puede indicar infección. Ambos se relacionan con inflamación pélvica y exceso de prostaglandinas.",
  "मासिक दर्द और असामान्य स्राव श्रोणि सूजन और हार्मोन असंतुलन से जुड़े हैं।"
 ],
 "Abnormal discharge": [
  "Dysmenorrhoea is abdominal pain during menstruation, primary or secondary. Abnormal discharge means changes in colour, odour or consistency, possibly indicating infection. Both relate to pelvic inflammation, hormonal imbalance with excess prostaglandins, uterine spasm or nutritional deficiency such as magnesium.",
  "痛经指经期腹痛，分原发性和继发性（如子宫内膜异位症、腺肌症）。异常白带指颜色、气味、性状改变，可能提示感染。两者均与盆腔炎症、激素失衡（前列腺素过高）、子宫肌肉痉挛或营养缺乏（如镁）有关。是生殖系统发出的重要健康警报。",
  "La dismenorrea es dolor abdominal menstrual. El flujo anormal puede indicar infección. Ambos se relacionan con inflamación pélvica y exceso de prostaglandinas.",
  "मासिक दर्द और असामान्य स्राव श्रोणि सूजन और हार्मोन असंतुलन से जुड़े हैं।"
 ]
};

/* Items everyone answers. The rest sit behind "show the rest of this section",
   because the real data shows a median of 19 answers out of ~50 offered:
   more questions on one screen produced fewer answers, not more. */
/* CORE_ITEMS used to decide which symptoms showed before the disclosure.
   Every item is visible now, so nothing reads it. */
const CORE_ITEMS = [];

if (typeof module !== 'undefined') module.exports = { LANGS, UI, SECTIONS, FIELDS, SYMPTOM_GROUPS, SYMPTOM_HELP, CORE_ITEMS };
