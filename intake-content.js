/* GENERATED FILE, DO NOT EDIT.
   Built from intake/questions.json (v2.0) and intake/chrome.json
   by intake/build-intake.py on 2026-08-24.

   Edit the question set in intake/questions.json and run the build again.
   Editing this file directly means the next build silently reverts you. */

const FORM_VERSION = "2.0";

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'hi', label: 'हिन्दी' }
];

const UI = {
 "pageTitle": [
  "Health Assessment",
  "健康评估",
  "Evaluación de Salud",
  "स्वास्थ्य मूल्यांकन"
 ],
 "heroTitle": [
  "Personal Health Assessment",
  "个人健康评估",
  "Evaluación Personal de Salud",
  "व्यक्तिगत स्वास्थ्य मूल्यांकन"
 ],
 "heroSub": [
  "Fill this out once and receive a personalized report with root cause analysis and targeted recommendations.",
  "填写一次，即可获得一份包含根本原因分析和针对性建议的个人报告。",
  "Complete esto una vez y reciba un informe personalizado con análisis de causa raíz y recomendaciones específicas.",
  "इसे एक बार भरें और मूल कारण विश्लेषण तथा लक्षित सिफ़ारिशों के साथ व्यक्तिगत रिपोर्ट पाएँ।"
 ],
 "backLink": [
  "← Back to products",
  "← 返回产品页",
  "← Volver a productos",
  "← उत्पादों पर लौटें"
 ],
 "stepFmt": [
  "Step {n} of 3 — {t}",
  "第 {n} 步，共 3 步 — {t}",
  "Paso {n} de 3 — {t}",
  "चरण {n} / 3 — {t}"
 ],
 "step1": [
  "About You",
  "关于你",
  "Sobre usted",
  "आपके बारे में"
 ],
 "step2": [
  "How I Feel",
  "身体感受",
  "Cómo me siento",
  "मैं कैसा महसूस करता हूँ"
 ],
 "step3": [
  "Daily Habits",
  "日常习惯",
  "Hábitos diarios",
  "दैनिक आदतें"
 ],
 "next": [
  "Continue →",
  "继续 →",
  "Continuar →",
  "आगे →"
 ],
 "back": [
  "← Back",
  "← 返回",
  "← Atrás",
  "← पीछे"
 ],
 "submit": [
  "Generate My Report →",
  "生成我的报告 →",
  "Generar mi informe →",
  "मेरी रिपोर्ट बनाएँ →"
 ],
 "why": [
  "Why we ask",
  "为什么问这个",
  "Por qué preguntamos",
  "हम क्यों पूछते हैं"
 ],
 "select": [
  "Select...",
  "请选择...",
  "Seleccione...",
  "चुनें..."
 ],
 "required": [
  "Please fill in your name, email, date of birth, and gender before continuing.",
  "请先填写姓名、邮箱、出生日期和性别，然后继续。",
  "Complete su nombre, correo, fecha de nacimiento y sexo antes de continuar.",
  "आगे बढ़ने से पहले कृपया नाम, ईमेल, जन्म तिथि और लिंग भरें।"
 ],
 "loadTitle": [
  "Generating your report...",
  "正在生成你的报告...",
  "Generando su informe...",
  "आपकी रिपोर्ट बन रही है..."
 ],
 "loadSub": [
  "Analyzing your data against your health profile.",
  "正在结合你的健康档案分析数据。",
  "Analizando sus datos según su perfil de salud.",
  "आपके स्वास्थ्य प्रोफ़ाइल के अनुसार डेटा का विश्लेषण।"
 ],
 "scaleToggle": [
  "I have smart scale data to enter",
  "我有体脂秤数据要填",
  "Tengo datos de báscula inteligente",
  "मेरे पास स्मार्ट स्केल डेटा है"
 ],
 "scaleHint": [
  "Optional but improves accuracy",
  "选填，但会显著提高准确度",
  "Opcional pero mejora la precisión",
  "वैकल्पिक, पर सटीकता बढ़ाता है"
 ],
 "scaleHelp": [
  "Enter values from your smart scale app (e.g. FitIndex, Renpho, Xiaomi Health). Body fat and muscle entries should be percentages, not decimals.",
  "填体脂秤 App 里的数值（如 FitIndex、Renpho、小米运动健康）。体脂和肌肉请填百分数，不要填小数。",
  "Introduzca los valores de su app de báscula inteligente (FitIndex, Renpho, Xiaomi Health). La grasa y el músculo van en porcentaje, no en decimales.",
  "अपने स्मार्ट स्केल ऐप के मान भरें (FitIndex, Renpho, Xiaomi Health)। वसा और मांसपेशी प्रतिशत में भरें, दशमलव में नहीं।"
 ],
 "okTitle": [
  "Your report is ready.",
  "你的报告已生成。",
  "Su informe está listo.",
  "आपकी रिपोर्ट तैयार है।"
 ],
 "okSub": [
  "A personalized analysis with your health signals, the root causes behind them, and a plan for the first month.",
  "一份属于你的分析：你的健康信号、背后的成因，以及第一个月的方案。",
  "Un análisis personalizado con sus señales de salud, las causas que hay detrás y un plan para el primer mes.",
  "आपके स्वास्थ्य संकेतों, उनके मूल कारणों और पहले महीने की योजना के साथ एक व्यक्तिगत विश्लेषण।"
 ],
 "okNote": [
  "You can also share this link with your consultant.",
  "这个链接也可以发给你的顾问。",
  "También puede compartir este enlace con su consultor.",
  "आप यह लिंक अपने सलाहकार के साथ भी साझा कर सकते हैं।"
 ],
 "symptomsSub": [
  "Tap how often each one happens. Tap N/A if it does not apply to you, and tap your answer again to clear it.",
  "点选每一项发生的频率。不适用的选\"不适用\"，再点一次已选的就能取消。",
  "Toque con qué frecuencia ocurre cada uno. Toque N/A si no aplica, y toque de nuevo su respuesta para borrarla.",
  "हर एक की आवृत्ति चुनें। लागू न हो तो N/A चुनें, और अपना उत्तर दोबारा दबाकर हटा दें।"
 ],
 "fOften": [
  "Often",
  "经常",
  "A menudo",
  "अक्सर"
 ],
 "fOcc": [
  "Occasionally",
  "偶尔",
  "A veces",
  "कभी-कभी"
 ],
 "fBarely": [
  "Barely",
  "几乎不",
  "Casi nunca",
  "लगभग कभी नहीं"
 ],
 "fNA": [
  "N/A",
  "不适用",
  "N/A",
  "लागू नहीं"
 ],
 "showMore": [
  "Show the rest of this section ({n} more)",
  "展开这一节其余 {n} 项",
  "Ver el resto de esta sección ({n} más)",
  "इस भाग के बाकी {n} देखें"
 ],
 "showLess": [
  "Hide the rest",
  "收起其余项",
  "Ocultar el resto",
  "बाकी छिपाएँ"
 ],
 "redFlag": [
  "Blood in stool, or black tarry stool, should be looked at by a doctor rather than a consultant. Please see a physician.",
  "便血或柏油样黑便应由医生处理，而不是顾问。请去看医生。",
  "La sangre en las heces o las heces negras y alquitranadas deben ser evaluadas por un médico, no por un consultor.",
  "मल में खून या काला चिपचिपा मल डॉक्टर को दिखाएँ, सलाहकार को नहीं।"
 ]
};

const SECTIONS = {
 "personal": [
  "Personal Information",
  "基本信息",
  "Información personal",
  "व्यक्तिगत जानकारी"
 ],
 "bodyComp": [
  "Body Composition (Smart Scale)",
  "身体成分（体脂秤）",
  "Composición corporal (báscula inteligente)",
  "शरीर संरचना (स्मार्ट स्केल)"
 ],
 "symptoms": [
  "Symptoms",
  "症状",
  "Síntomas",
  "लक्षण"
 ],
 "habits": [
  "Daily Habits",
  "日常习惯",
  "Hábitos diarios",
  "दैनिक आदतें"
 ],
 "supplements": [
  "Supplements",
  "补充剂",
  "Suplementos",
  "अनुपूरक"
 ],
 "bowel": [
  "Bowel and Digestion",
  "排便与消化",
  "Intestino y digestión",
  "मल और पाचन"
 ],
 "bowelSub": [
  "The most direct read on gut health there is, and the one people skip. Nothing here is embarrassing; it is just data.",
  "这是判断肠道健康最直接的依据，也是最常被跳过的部分。这里没什么难为情的，都只是数据。",
  "La lectura más directa que existe sobre la salud intestinal, y la que la gente omite. No hay nada vergonzoso aquí.",
  "आंत के स्वास्थ्य का सबसे सीधा संकेत, जिसे लोग अक्सर छोड़ देते हैं। यहाँ कुछ भी शर्मनाक नहीं है।"
 ],
 "cycle": [
  "Menstrual Cycle",
  "月经周期",
  "Ciclo menstrual",
  "मासिक चक्र"
 ]
};

const FIELDS = {
 "f-name": {
  "l": [
   "First and Last Name *",
   "姓名 *",
   "Nombre y apellido *",
   "पूरा नाम *"
  ],
  "h": [
   "Used on the report itself so you can tell yours apart from a family member’s, and to match a follow-up assessment to this one.",
   "会印在报告上，方便和家人的报告区分，也用于把后续复查和这一次对应起来。",
   "Aparece en el informe para distinguirlo del de un familiar y vincular una evaluación de seguimiento con esta.",
   "रिपोर्ट पर दिखता है ताकि परिवार के किसी सदस्य की रिपोर्ट से अलग पहचाना जा सके।"
  ]
 },
 "f-email": {
  "l": [
   "Email *",
   "邮箱 *",
   "Correo electrónico *",
   "ईमेल *"
  ],
  "h": [
   "Where the report link goes. It is a private link, not a public page, so it is worth using an address you actually check.",
   "报告链接会发到这里。这是私密链接不是公开页面，所以请填你常用的邮箱。",
   "Adonde va el enlace del informe. Es un enlace privado, no una página pública.",
   "रिपोर्ट लिंक यहीं जाता है। यह निजी लिंक है, सार्वजनिक पृष्ठ नहीं।"
  ]
 },
 "f-dob": {
  "l": [
   "Date of Birth *",
   "出生日期 *",
   "Fecha de nacimiento *",
   "जन्म तिथि *"
  ],
  "h": [
   "Reference intakes differ by age, and several body-composition readings are interpreted against it. Metabolic age only means something next to your real age.",
   "参考摄入量按年龄不同，多项体成分指标也要对照年龄解读。代谢年龄只有和实际年龄比较才有意义。",
   "Las ingestas de referencia varían con la edad, y varias lecturas corporales se interpretan en relación con ella.",
   "संदर्भ मात्राएँ उम्र के अनुसार बदलती हैं, और शरीर संरचना के कई माप इसी के सापेक्ष पढ़े जाते हैं।"
  ]
 },
 "f-gender": {
  "l": [
   "Gender *",
   "性别 *",
   "Sexo *",
   "लिंग *"
  ],
  "h": [
   "Reference intakes for iron, calcium and several B vitamins differ by sex, so this changes the amounts recommended, not just the wording.",
   "铁、钙和多种B族维生素的参考摄入量按性别不同，所以这会改变推荐的用量，而不只是措辞。",
   "Las ingestas de referencia de hierro, calcio y varias vitaminas B difieren por sexo, así que cambian las cantidades.",
   "आयरन, कैल्शियम और कई बी विटामिनों की संदर्भ मात्राएँ लिंग के अनुसार भिन्न हैं।"
  ],
  "o": [
   [
    "Male",
    "Male",
    "男",
    "Masculino",
    "पुरुष"
   ],
   [
    "Female",
    "Female",
    "女",
    "Femenino",
    "महिला"
   ],
   [
    "Other",
    "Other",
    "其他",
    "Otro",
    "अन्य"
   ]
  ]
 },
 "f-height": {
  "l": [
   "Height",
   "身高",
   "Estatura",
   "कद"
  ],
  "h": [
   "Needed with weight to compute BMI. BMI is a poor measure for anyone carrying a lot of muscle, which is why the scale readings below matter more.",
   "和体重一起用来算BMI。对肌肉量大的人BMI不准，所以下面体脂秤的数据更重要。",
   "Se necesita con el peso para calcular el IMC. El IMC es una mala medida para quien tiene mucha masa muscular.",
   "बीएमआई निकालने के लिए वज़न के साथ चाहिए।"
  ]
 },
 "f-weight": {
  "l": [
   "Weight (lb)",
   "体重（磅）",
   "Peso (lb)",
   "वज़न (lb)"
  ],
  "h": [
   "Protein requirement is calculated per kilogram of body weight, so without this the protein part of the plan is guesswork.",
   "蛋白质需要量按每公斤体重计算，没有这个数字，方案里蛋白质那部分只能靠猜。",
   "El requerimiento de proteína se calcula por kilogramo de peso corporal.",
   "प्रोटीन की आवश्यकता प्रति किलोग्राम वज़न से निकाली जाती है।"
  ]
 },
 "f-bmi": {
  "l": [
   "BMI",
   "身体质量指数 BMI",
   "IMC",
   "बीएमआई"
  ],
  "h": [
   "A rough screen only. It cannot tell muscle from fat, so a strong person can read \"overweight\" while being metabolically fine.",
   "只是粗筛。它分不出肌肉和脂肪，所以肌肉多的人可能显示\"超重\"但代谢完全正常。",
   "Solo un cribado aproximado. No distingue músculo de grasa.",
   "केवल मोटा अनुमान। यह मांसपेशी और वसा में अंतर नहीं कर सकता।"
  ]
 },
 "f-bodyFat": {
  "l": [
   "Body Fat %",
   "体脂率 %",
   "% de grasa corporal",
   "शरीर में वसा %"
  ],
  "h": [
   "More useful than weight, because it separates fat from everything else. Healthy bands differ by sex and age.",
   "比体重有用，因为它把脂肪和其他成分分开了。健康区间按性别和年龄不同。",
   "Más útil que el peso, porque separa la grasa del resto.",
   "वज़न से अधिक उपयोगी, क्योंकि यह वसा को बाकी सबसे अलग करता है।"
  ]
 },
 "f-skeletalMuscle": {
  "l": [
   "Skeletal Muscle %",
   "骨骼肌 %",
   "% de músculo esquelético",
   "कंकाल पेशी %"
  ],
  "h": [
   "Muscle is where glucose gets disposed of, so it is the asset to protect while fat comes down. Losing muscle to lose weight is a bad trade.",
   "肌肉是葡萄糖的去处，所以减脂过程中它是要保护的资产。靠掉肌肉来减重是笔坏买卖。",
   "El músculo es donde se elimina la glucosa, así que es el activo a proteger mientras baja la grasa.",
   "मांसपेशी वह जगह है जहाँ ग्लूकोज़ निपटाया जाता है, इसलिए इसे बचाना ज़रूरी है।"
  ]
 },
 "f-visceralFat": {
  "l": [
   "Visceral Fat (1–20)",
   "内脏脂肪（1–20）",
   "Grasa visceral (1–20)",
   "आंतरिक वसा (1–20)"
  ],
  "h": [
   "Visceral fat sits around the organs and is the single reading that tracks metabolic risk. Total weight cannot see it, which is why a person can look fine and still read high. Under 10 is the target.",
   "内脏脂肪包在器官周围，是唯一能反映代谢风险的指标。体重看不出它，所以有人外表正常但这项偏高。目标是低于10。",
   "La grasa visceral rodea los órganos y es la lectura que sigue el riesgo metabólico. Menos de 10 es el objetivo.",
   "आंतरिक वसा अंगों के आसपास होती है और चयापचय जोखिम दर्शाती है। 10 से कम लक्ष्य है।"
  ]
 },
 "f-bodyWater": {
  "l": [
   "Body Water %",
   "身体水分 %",
   "% de agua corporal",
   "शरीर में जल %"
  ],
  "h": [
   "Tracks with muscle, because muscle tissue holds most of the body’s water. A low reading usually means low muscle or genuine under-drinking.",
   "和肌肉同步，因为身体大部分水分储存在肌肉组织里。数值低通常意味着肌肉少或确实喝水不足。",
   "Sigue al músculo, porque el tejido muscular retiene la mayor parte del agua del cuerpo.",
   "यह मांसपेशी के साथ चलता है, क्योंकि अधिकांश पानी मांसपेशी ऊतक में होता है।"
  ]
 },
 "f-metabolicAge": {
  "l": [
   "Metabolic Age",
   "代谢年龄",
   "Edad metabólica",
   "चयापचय आयु"
  ],
  "h": [
   "Only meaningful next to your real age. Reading several years above it is a summary of the other numbers, not a separate finding.",
   "只有和实际年龄对比才有意义。高出几岁是其他指标的汇总结果，不是一个独立的发现。",
   "Solo tiene sentido junto a su edad real. Leer varios años por encima resume las otras cifras.",
   "यह केवल आपकी वास्तविक आयु के साथ अर्थपूर्ण है।"
  ]
 },
 "f-protein": {
  "l": [
   "Protein %",
   "蛋白质 %",
   "% de proteína",
   "प्रोटीन %"
  ],
  "h": [
   "Where a shortage shows up before you feel it. Below about 16% is low, and hair and nails are usually the first visible sign.",
   "缺乏最早出现的地方，早于你的感觉。低于约16%偏低，头发和指甲通常是最先看得出来的。",
   "Donde una carencia aparece antes de sentirla. Por debajo del 16% es bajo.",
   "जहाँ कमी महसूस होने से पहले दिखती है। लगभग 16% से नीचे कम है।"
  ]
 },
 "f-muscleMass": {
  "l": [
   "Muscle Mass (lb)",
   "肌肉量（磅）",
   "Masa muscular (lb)",
   "मांसपेशी द्रव्यमान (lb)"
  ],
  "h": [
   "The absolute figure behind the muscle percentage. Watching it hold steady while fat falls is the sign a plan is working properly.",
   "肌肉百分比背后的绝对值。减脂期间它保持稳定，才说明方案是对的。",
   "La cifra absoluta detrás del porcentaje muscular. Que se mantenga mientras baja la grasa indica que el plan funciona.",
   "मांसपेशी प्रतिशत के पीछे की वास्तविक संख्या।"
  ]
 },
 "f-fatFreeMass": {
  "l": [
   "Fat-free Mass (lb)",
   "去脂体重（磅）",
   "Masa libre de grasa (lb)",
   "वसा-रहित द्रव्यमान (lb)"
  ],
  "h": [
   "Everything that is not fat: muscle, bone, organs and water. Used as a cross-check on the other readings.",
   "除脂肪以外的全部：肌肉、骨骼、器官和水分。用来交叉验证其他数据。",
   "Todo lo que no es grasa: músculo, hueso, órganos y agua.",
   "वह सब जो वसा नहीं है: मांसपेशी, हड्डी, अंग और पानी।"
  ]
 },
 "f-breakfastFreq": {
  "l": [
   "Do you eat breakfast?",
   "你吃早餐吗？",
   "¿Desayuna?",
   "क्या आप नाश्ता करते हैं?"
  ],
  "h": [
   "The 7 to 9 AM window is when the digestive system is at its strongest, so a skipped breakfast is the meal that would have counted most.",
   "上午7到9点是消化系统最强的时段（胃经当令），所以跳过的这一餐本来是最有价值的。",
   "La ventana de 7 a 9 AM es cuando el sistema digestivo está más fuerte.",
   "सुबह 7 से 9 बजे पाचन तंत्र सबसे मज़बूत होता है।"
  ],
  "o": [
   [
    "Yes, daily",
    "Yes, every day",
    "是，每天",
    "Sí, todos los días",
    "हाँ, रोज़"
   ],
   [
    "Sometimes (3–4x/week)",
    "Sometimes, 3–4 days a week",
    "有时，每周3-4天",
    "A veces, 3–4 días por semana",
    "कभी-कभी, सप्ताह में 3–4 दिन"
   ],
   [
    "Rarely or never",
    "Rarely or never",
    "很少或从不",
    "Rara vez o nunca",
    "शायद ही या कभी नहीं"
   ]
  ]
 },
 "f-bedtime": {
  "l": [
   "Typical bedtime",
   "通常几点睡",
   "Hora habitual de acostarse",
   "सामान्य सोने का समय"
  ],
  "h": [
   "Deep sleep is weighted toward the early part of the night, so a late bedtime cuts into it regardless of total hours slept.",
   "深睡集中在前半夜，所以睡得晚就会切掉这部分，和总睡眠时长无关。",
   "El sueño profundo se concentra al principio de la noche, así que acostarse tarde lo recorta.",
   "गहरी नींद रात के पहले हिस्से में केंद्रित होती है।"
  ],
  "o": [
   [
    "Before 10 PM",
    "Before 10 PM",
    "晚上10点前",
    "Antes de las 10 PM",
    "रात 10 बजे से पहले"
   ],
   [
    "10–11 PM",
    "10–11 PM",
    "10–11点",
    "10–11 PM",
    "10–11 बजे"
   ],
   [
    "11 PM–midnight",
    "11 PM to midnight",
    "11点到午夜",
    "11 PM a medianoche",
    "11 बजे से आधी रात"
   ],
   [
    "After midnight",
    "After midnight",
    "午夜以后",
    "Después de medianoche",
    "आधी रात के बाद"
   ]
  ]
 },
 "f-waking13": {
  "l": [
   "How often do you wake up during the night?",
   "你夜里醒来的频率是？",
   "¿Con qué frecuencia se despierta por la noche?",
   "आप रात में कितनी बार जागते हैं?"
  ],
  "h": [
   "Waking at night is worth separating from trouble falling asleep, because they have different causes. The 1 to 3 AM window matters specifically: it is when the liver does its heaviest processing, so waking in it regularly is read as information rather than as insomnia, and it connects to the eyes, emotional regulation and hormones.",
   "夜醒和入睡困难要分开看，因为成因不同。凌晨1到3点这个时段尤其有意义：那是肝脏处理负荷最重的时候（肝经当令），持续在这个时段醒来被视为一条信息而不是失眠，它和眼睛、情绪调节、激素都相连。",
   "Despertarse de noche conviene separarlo de la dificultad para dormirse, porque tienen causas distintas. La ventana de 1 a 3 AM importa en particular: es cuando el hígado hace su procesamiento más pesado.",
   "रात में जागना और नींद आने में कठिनाई अलग-अलग हैं। 1 से 3 बजे की खिड़की विशेष रूप से मायने रखती है: तब जिगर सबसे भारी कार्य करता है।"
  ],
  "o": [
   [
    "Most nights, usually 1-3 AM",
    "Most nights, usually between 1 and 3 AM",
    "几乎每晚，通常在凌晨1-3点",
    "Casi todas las noches, entre la 1 y las 3 AM",
    "ज़्यादातर रातें, आमतौर पर 1-3 बजे"
   ],
   [
    "Most nights, other times",
    "Most nights, but at other times",
    "几乎每晚，但不是这个时段",
    "Casi todas las noches, a otras horas",
    "ज़्यादातर रातें, अन्य समय"
   ],
   [
    "A few nights a week",
    "A few nights a week",
    "每周几晚",
    "Algunas noches por semana",
    "सप्ताह में कुछ रातें"
   ],
   [
    "Occasionally",
    "Occasionally",
    "偶尔",
    "De vez en cuando",
    "कभी-कभार"
   ],
   [
    "Rarely or never",
    "Rarely or never",
    "很少或从不",
    "Rara vez o nunca",
    "शायद ही या कभी नहीं"
   ]
  ]
 },
 "f-supplements": {
  "l": [
   "What supplements do you currently take?",
   "你目前在吃哪些补充剂？",
   "¿Qué suplementos toma actualmente?",
   "आप वर्तमान में कौन से अनुपूरक लेते हैं?"
  ],
  "h": [
   "List everything, including what you take irregularly. Knowing what you already take is what stops a recommendation duplicating it, and duplication is the most common way people overspend.",
   "请全部列出，包括吃得不规律的。知道你已经在吃什么，才能避免重复推荐，而重复正是最常见的浪费钱的方式。",
   "Liste todo, incluso lo irregular. Saber lo que ya toma evita duplicar una recomendación.",
   "सब कुछ सूचीबद्ध करें। इससे सिफ़ारिश दोहराई नहीं जाएगी।"
  ]
 },
 "f-supplementFreq": {
  "l": [
   "How consistently do you take them?",
   "你吃得有多规律？",
   "¿Con qué constancia los toma?",
   "आप उन्हें कितनी नियमितता से लेते हैं?"
  ],
  "h": [
   "Consistency usually matters more than the number of products. Four taken daily does more than ten taken sometimes.",
   "规律性通常比产品数量更重要。每天吃四种，胜过偶尔吃十种。",
   "La constancia importa más que el número de productos. Cuatro a diario hacen más que diez a veces.",
   "निरंतरता उत्पादों की संख्या से अधिक मायने रखती है।"
  ],
  "o": [
   [
    "Daily without fail",
    "Daily without fail",
    "每天，从不间断",
    "A diario sin falta",
    "रोज़, बिना चूके"
   ],
   [
    "Sometimes (3–4x/week)",
    "Sometimes, 3–4 days a week",
    "有时，每周3-4天",
    "A veces, 3–4 días por semana",
    "कभी-कभी, सप्ताह में 3–4 दिन"
   ],
   [
    "Rarely (1–2x/week)",
    "Rarely, 1–2 days a week",
    "很少，每周1-2天",
    "Rara vez, 1–2 días por semana",
    "शायद ही, सप्ताह में 1–2 दिन"
   ],
   [
    "Not currently taking any",
    "Not taking any right now",
    "目前没有在吃",
    "No tomo ninguno ahora",
    "अभी कोई नहीं ले रहा"
   ]
  ]
 },
 "f-notes": {
  "l": [
   "Anything else you want the consultant to know?",
   "还有什么想让顾问知道的？",
   "¿Algo más que deba saber el consultor?",
   "सलाहकार को और क्या बताना चाहेंगे?"
  ],
  "h": [
   "Recent changes, a diagnosis, medication, or a goal. Anything that would change how the answers above should be read belongs here.",
   "最近的变化、诊断、正在吃的药，或者你的目标。任何会改变上面答案解读方式的事情都写在这里。",
   "Cambios recientes, un diagnóstico, medicación o un objetivo.",
   "हाल के बदलाव, कोई निदान, दवा, या लक्ष्य।"
  ]
 },
 "f-bowelFreq": {
  "l": [
   "How often do you have a bowel movement?",
   "你多久排便一次？",
   "¿Con qué frecuencia evacúa?",
   "आप कितनी बार शौच जाते हैं?"
  ],
  "h": [
   "Once or twice a day with an easy pass is the target. Less than that and material is sitting too long; much more and it is moving through faster than it can be absorbed.",
   "每天一到两次、排出顺畅是目标。少于这个，废物停留过久；明显多于这个，说明通过太快，来不及吸收。",
   "Una o dos veces al día con paso fácil es el objetivo.",
   "दिन में एक या दो बार आसानी से निकलना लक्ष्य है।"
  ],
  "o": [
   [
    "3+ times a day",
    "3 or more times a day",
    "每天3次以上",
    "3 o más veces al día",
    "दिन में 3+ बार"
   ],
   [
    "1-2 times a day",
    "1–2 times a day",
    "每天1-2次",
    "1–2 veces al día",
    "दिन में 1–2 बार"
   ],
   [
    "Every other day",
    "Every other day",
    "隔天一次",
    "Cada dos días",
    "हर दूसरे दिन"
   ],
   [
    "2-3 times a week",
    "2–3 times a week",
    "每周2-3次",
    "2–3 veces por semana",
    "सप्ताह में 2–3 बार"
   ],
   [
    "Less than twice a week",
    "Less than twice a week",
    "每周不到2次",
    "Menos de dos veces por semana",
    "सप्ताह में दो बार से कम"
   ]
  ]
 },
 "f-wiping": {
  "l": [
   "How many wipes, typically?",
   "通常擦几次？",
   "¿Cuántas limpiezas?",
   "कितनी बार पोंछना पड़ता है?"
  ],
  "h": [
   "A single wipe means the stool was well formed. Repeated wiping usually means it was either too soft or evacuation did not complete, so it is a quick read on whether things are moving the way they should.",
   "一次擦净说明成形良好。反复擦拭通常说明太软或没排干净，所以这一题能快速看出排便是否顺畅。",
   "Una sola limpieza indica heces bien formadas. Limpiar repetidamente sugiere lo contrario.",
   "एक बार में साफ़ होना अच्छे आकार का संकेत है।"
  ],
  "o": [
   [
    "1 wipe",
    "1 wipe",
    "1次",
    "1 vez",
    "1 बार"
   ],
   [
    "2-3 wipes",
    "2–3 wipes",
    "2-3次",
    "2–3 veces",
    "2–3 बार"
   ],
   [
    "4+ wipes",
    "4 or more wipes",
    "4次以上",
    "4 o más veces",
    "4 या अधिक बार"
   ]
  ]
 },
 "f-cycleRegular": {
  "l": [
   "Is your cycle regular?",
   "你的周期规律吗？",
   "¿Su ciclo es regular?",
   "क्या आपका चक्र नियमित है?"
  ],
  "h": [
   "A regular cycle is one of the better general signals that hormones are clearing properly. Irregularity is common and is information, not an alarm.",
   "周期规律是激素清除正常的较好整体信号之一。不规律很常见，它是信息，不是警报。",
   "Un ciclo regular es una buena señal de que las hormonas se eliminan bien.",
   "नियमित चक्र दर्शाता है कि हार्मोन ठीक से साफ़ हो रहे हैं।"
  ],
  "o": [
   [
    "Regular",
    "Regular",
    "规律",
    "Regular",
    "नियमित"
   ],
   [
    "Irregular",
    "Irregular",
    "不规律",
    "Irregular",
    "अनियमित"
   ],
   [
    "No longer menstruating",
    "No longer menstruating",
    "已绝经",
    "Ya no menstrúo",
    "अब मासिक नहीं होता"
   ]
  ]
 },
 "f-menstrualPain": {
  "l": [
   "Period pain",
   "经期疼痛",
   "Dolor menstrual",
   "मासिक दर्द"
  ],
  "h": [
   "Cramping severity is largely set by prostaglandins, and prostaglandin balance follows the ratio of fats in the diet. That makes it one of the more changeable symptoms here.",
   "痛经的严重程度主要由前列腺素决定，而前列腺素的平衡取决于饮食里脂肪的比例。所以这是本表里较容易改变的症状之一。",
   "La intensidad de los cólicos depende de las prostaglandinas, cuyo equilibrio sigue la proporción de grasas.",
   "ऐंठन की तीव्रता मुख्यतः प्रोस्टाग्लैंडिन से तय होती है।"
  ],
  "o": [
   [
    "None",
    "None",
    "没有",
    "Ninguno",
    "कोई नहीं"
   ],
   [
    "Mild",
    "Mild",
    "轻微",
    "Leve",
    "हल्का"
   ],
   [
    "Moderate",
    "Moderate",
    "中等",
    "Moderado",
    "मध्यम"
   ],
   [
    "Severe",
    "Severe",
    "严重",
    "Intenso",
    "गंभीर"
   ]
  ]
 },
 "f-heavyFlow": {
  "l": [
   "Heavy flow?",
   "经量大吗？",
   "¿Flujo abundante?",
   "क्या रक्तस्राव अधिक है?"
  ],
  "h": [
   "Heavy flow over years is the most common route to low iron, and low iron shows up as fatigue, brain fog and hair loss long before anything else.",
   "长期经量大是缺铁最常见的路径，而缺铁会以疲劳、脑雾、掉发的形式出现，远早于其他表现。",
   "El flujo abundante durante años es la vía más común hacia el hierro bajo.",
   "वर्षों तक अधिक रक्तस्राव आयरन की कमी का सबसे आम कारण है।"
  ],
  "o": [
   [
    "No",
    "No",
    "否",
    "No",
    "नहीं"
   ],
   [
    "Yes",
    "Yes",
    "是",
    "Sí",
    "हाँ"
   ]
  ]
 },
 "f-pmsMoodSwings": {
  "l": [
   "PMS mood swings?",
   "经前情绪波动？",
   "¿Cambios de humor premenstruales?",
   "मासिक-पूर्व मूड बदलाव?"
  ],
  "h": [
   "Premenstrual mood change tracks with how completely oestrogen is cleared after it has done its job, which is liver work rather than a purely reproductive matter.",
   "经前情绪波动，和雌激素完成作用后被清除得是否彻底有关，这是肝脏的工作，而不纯粹是生殖系统的事。",
   "El cambio de humor premenstrual sigue a qué tan completamente se elimina el estrógeno.",
   "मासिक-पूर्व मूड परिवर्तन एस्ट्रोजन की सफ़ाई पर निर्भर करता है।"
  ],
  "o": [
   [
    "No",
    "No",
    "否",
    "No",
    "नहीं"
   ],
   [
    "Yes",
    "Yes",
    "是",
    "Sí",
    "हाँ"
   ]
  ]
 },
 "f-diet": {
  "t": "textarea",
  "l": [
   "Describe what you typically eat in a day",
   "描述你一天通常怎么吃",
   "Describa lo que come normalmente en un día",
   "बताएँ कि आप आमतौर पर दिन भर क्या खाते हैं"
  ],
  "ph": [
   "e.g. Breakfast: skip, just coffee. Lunch: chicken rice bowl. Dinner: beef, two veg, rice. Snacks: chips, an apple. Drinks: 2 coffees, some Coke. The more you name actual foods and rough portions, the closer the protein and nutrient estimate gets.",
   "例如：早餐不吃，只喝一杯咖啡。午餐一碗鸡肉盖饭。晚餐牛肉配两个青菜和米饭。零食吃薯片和一个苹果。喝的是两杯咖啡加一点可乐。你把吃了什么、大概多少写得越具体，蛋白质和营养素的估算就越接近真实。",
   "p. ej. Desayuno: me lo salto, solo café. Comida: arroz con pollo. Cena: ternera, dos verduras y arroz. Picoteo: patatas fritas y una manzana. Bebidas: 2 cafés y algo de refresco. Cuanto más concrete los alimentos y las porciones, más se acerca la estimación.",
   "उदा. नाश्ता: छोड़ देता हूँ, बस कॉफ़ी। दोपहर: चिकन राइस बाउल। रात: बीफ़, दो सब्ज़ियाँ, चावल। स्नैक्स: चिप्स, एक सेब। पेय: 2 कॉफ़ी, थोड़ा कोक। आप जितना ठोस रूप से भोजन और मात्रा बताएँगे, प्रोटीन और पोषक तत्वों का अनुमान उतना सटीक होगा।"
  ],
  "h": [
   "This is the answer the protein and nutrient estimate is built from, which is why it is a box and not a dropdown. Your protein requirement is your body weight in kilograms times 1.2 grams, and the only way to know whether you are meeting it is to see what you actually eat.",
   "蛋白质和营养素的估算就是从这段话里算出来的，所以这里是文本框而不是下拉选项。你的蛋白质需要量等于体重（公斤）乘以 1.2 克，而要判断你有没有吃够，只能看你实际吃了什么。",
   "De esta respuesta se construye la estimación de proteína y nutrientes, y por eso es un cuadro y no un desplegable. Su requerimiento de proteína es su peso en kilogramos por 1,2 gramos, y la única manera de saber si lo cubre es ver qué come en realidad.",
   "प्रोटीन और पोषक तत्वों का अनुमान इसी उत्तर से बनता है, इसीलिए यह एक बॉक्स है, ड्रॉपडाउन नहीं। आपकी प्रोटीन आवश्यकता आपके वज़न (किलोग्राम) × 1.2 ग्राम है, और यह जानने का एकमात्र तरीका है कि आप वास्तव में क्या खाते हैं।"
  ]
 },
 "f-water": {
  "l": [
   "Water you drink in a day",
   "你一天喝多少水",
   "Agua que bebe al día",
   "आप दिन में कितना पानी पीते हैं"
  ],
  "h": [
   "Every clearance pathway runs on water: the kidneys, the gut, and moving what the liver has already processed out of the body. It is usually the largest gap on this page and the cheapest one to close.",
   "身体所有的清除通路都靠水在跑：肾脏、肠道，还有把肝脏处理完的东西真正排出去。这通常是这一页上差距最大的一项，也是最不花钱就能补上的一项。",
   "Todas las vías de eliminación funcionan con agua: los riñones, el intestino y sacar del cuerpo lo que el hígado ya ha procesado. Suele ser la mayor carencia de esta página y la más barata de corregir.",
   "शरीर के सभी निकासी मार्ग पानी पर चलते हैं: गुर्दे, आँत, और यकृत द्वारा संसाधित पदार्थों को बाहर निकालना। यह आमतौर पर इस पृष्ठ की सबसे बड़ी कमी है और सबसे सस्ती भी।"
  ],
  "o": [
   [
    "Less than 1L",
    "Less than 1 L",
    "不到 1 升",
    "Menos de 1 L",
    "1 लीटर से कम"
   ],
   [
    "1-1.5L",
    "1 to 1.5 L",
    "1 至 1.5 升",
    "1 a 1,5 L",
    "1 से 1.5 लीटर"
   ],
   [
    "1.5-2L",
    "1.5 to 2 L",
    "1.5 至 2 升",
    "1,5 a 2 L",
    "1.5 से 2 लीटर"
   ],
   [
    "2-2.5L",
    "2 to 2.5 L",
    "2 至 2.5 升",
    "2 a 2,5 L",
    "2 से 2.5 लीटर"
   ],
   [
    "2.5L+",
    "2.5 L or more",
    "2.5 升以上",
    "2,5 L o más",
    "2.5 लीटर या अधिक"
   ]
  ]
 },
 "f-smoking": {
  "l": [
   "Do you smoke or vape?",
   "你抽烟或用电子烟吗？",
   "¿Fuma o vapea?",
   "क्या आप धूम्रपान या वेप करते हैं?"
  ],
  "h": [
   "Asked on its own rather than bundled with alcohol, because it changes a number rather than adding a note: NIH sets the vitamin C requirement 35 mg a day higher for smokers.",
   "这一题单独问，没有和喝酒放在一起，因为它改变的是一个数字而不是一句备注：NIH 规定吸烟者的维生素 C 需要量每天要高出 35 毫克。",
   "Se pregunta aparte y no junto al alcohol porque cambia una cifra, no una observación: el NIH fija el requerimiento de vitamina C 35 mg al día más alto en fumadores.",
   "यह प्रश्न शराब के साथ नहीं, अलग पूछा जाता है क्योंकि यह एक संख्या बदलता है: NIH धूम्रपान करने वालों के लिए विटामिन C की आवश्यकता प्रतिदिन 35 मिग्रा अधिक तय करता है।"
  ],
  "o": [
   [
    "Daily",
    "Daily",
    "每天",
    "A diario",
    "रोज़"
   ],
   [
    "Sometimes",
    "Sometimes",
    "有时",
    "A veces",
    "कभी-कभी"
   ],
   [
    "No",
    "No",
    "不抽",
    "No",
    "नहीं"
   ],
   [
    "Quit",
    "I quit",
    "已戒",
    "Lo dejé",
    "छोड़ दिया"
   ]
  ]
 },
 "f-medication": {
  "t": "textarea",
  "l": [
   "Are you taking any prescription medication?",
   "你在服用处方药吗？",
   "¿Toma algún medicamento con receta?",
   "क्या आप कोई डॉक्टरी दवा ले रहे हैं?"
  ],
  "ph": [
   "Names are enough. Optional.",
   "写药名就够了，选填。",
   "Con los nombres basta. Opcional.",
   "नाम पर्याप्त हैं। वैकल्पिक।"
  ],
  "h": [
   "Some supplements interact with medication, and some compete with it for absorption. Naming yours lets the plan work around them instead of around a guess.",
   "有些补充剂会和药物相互作用，有些会和药物争夺吸收。写出来，方案就能避开这些冲突，而不是靠猜。",
   "Algunos suplementos interactúan con los medicamentos y otros compiten con ellos por la absorción. Si los nombra, el plan puede evitarlos en lugar de trabajar sobre una suposición.",
   "कुछ अनुपूरक दवाओं के साथ प्रतिक्रिया करते हैं और कुछ अवशोषण में उनसे प्रतिस्पर्धा करते हैं। नाम बताने पर योजना अनुमान के बजाय वास्तविकता के आसपास बनाई जा सकती है।"
  ]
 },
 "f-diagnosedNote": {
  "t": "textarea",
  "l": [
   "Anything you want to add about the above",
   "以上有什么想补充的",
   "Algo que quiera añadir sobre lo anterior",
   "उपरोक्त के बारे में कुछ जोड़ना चाहें"
  ],
  "ph": [
   "When it was diagnosed, whether it is being treated, anything you were told.",
   "什么时候查出来的、有没有在治疗、医生当时怎么说的。",
   "Cuándo se diagnosticó, si está en tratamiento, qué le dijeron.",
   "कब पता चला, इलाज चल रहा है या नहीं, आपको क्या बताया गया।"
  ]
 }
};

/* The two scales. Symptom bands are read by lib/dose.py; renaming one breaks
   stored data. Diet bands are compared across re-assessments, so they are
   equally fixed. Deliberately different from each other: "Never" is a real
   answer about food and meaningless about a symptom, and "N/A" the reverse. */
const SCALES = {
 "symptom": {
  "note": "Bands are read by lib/dose.py. Renaming one breaks stored data and makes two assessments incomparable.",
  "bands": [
   {
    "value": "Often",
    "l": [
     "Often",
     "经常",
     "A menudo",
     "अक्सर"
    ]
   },
   {
    "value": "Occasionally",
    "l": [
     "Occasionally",
     "偶尔",
     "A veces",
     "कभी-कभी"
    ]
   },
   {
    "value": "Barely",
    "l": [
     "Barely",
     "几乎不",
     "Casi nunca",
     "लगभग कभी नहीं"
    ]
   },
   {
    "value": "NA",
    "l": [
     "N/A",
     "不适用",
     "N/A",
     "लागू नहीं"
    ]
   }
  ]
 },
 "diet": {
  "note": "Deliberately different from the symptom scale. Never is a true and common answer about food and it drives the omega 3 recommendation; N/A is meaningless about food. Stable across versions because re-assessment compares them.",
  "bands": [
   {
    "value": "Most days",
    "l": [
     "Most days",
     "几乎每天",
     "Casi todos los días",
     "अधिकतर दिन"
    ]
   },
   {
    "value": "Few weekly",
    "l": [
     "A few times a week",
     "每周几次",
     "Algunas veces por semana",
     "सप्ताह में कुछ बार"
    ]
   },
   {
    "value": "Rarely",
    "l": [
     "Rarely",
     "很少",
     "Rara vez",
     "कभी-कभार"
    ]
   },
   {
    "value": "Never",
    "l": [
     "Never",
     "从不",
     "Nunca",
     "कभी नहीं"
    ]
   }
  ]
 }
};

const STAGE_SETTING = {
 "headline": [
  "What this assessment is actually for",
  "这份评估的意义",
  "Para qué sirve realmente esta evaluación",
  "यह मूल्यांकन असल में किसलिए है"
 ],
 "body": [
  "Modern medicine is extremely good at treating disease. What it cannot do is out treat a lifestyle that keeps pushing you in the wrong direction. Sitting all day, running on stress, eating food engineered to spike your blood sugar: none of that shows up as a diagnosis for years, and then it shows up all at once.\n\nFitness is 30% workout and 70% diet. This assessment is not a symptom checker and it is not a shopping list. It exists to answer one question: for your body, your habits and what you are actually feeling right now, how much of each nutrient should you intake?\n\nThat number is not the one printed on the bottle. The bottle carries a single figure set for the entire population. Yours depends on your weight, your diet and which things you are feeling often rather than rarely. It is also not fixed. As your habits change and symptoms settle, the number moves, which is why this is worth redoing rather than reading once.\n\nAnswer it honestly rather than optimistically. Nothing here is graded, and a report built on flattering answers is a report about somebody else.",
  "现代医学在治疗疾病方面非常强大。但它无法抵消那些持续把身体推向错误方向的生活方式。久坐一整天、长期处于压力之下、吃那些经过加工设计、容易让血糖快速升高的食物——这些问题可能很多年都不会以某种“疾病诊断”的形式出现，但一旦显现，往往就是多个问题同时爆发。\n\n健康三分靠练七分靠吃。这份评估不是一个“症状自查工具”，也不是一张“购物清单”。它只想回答一个问题：根据你的身体状况、生活习惯，以及你此刻真实的身体感受，你究竟需要多少每一种营养素？\n\n这个数字并不是营养补充剂瓶子上印着的那个数字。瓶身上的建议量，是针对整个大众设定的统一参考值；而真正适合你的量，会取决于你的体重、饮食习惯，以及哪些身体状况是经常出现，而不是偶尔发生。\n\n而且，这个数字并不是一成不变的。随着你的生活习惯改善、身体不适逐渐缓解，你的营养需求也会随之变化。所以，这份评估值得定期重新做，而不是做过一次、看过一次就结束。\n\n回答问题时，请诚实，而不是乐观。这里没有评分，也没有所谓的“正确答案”。如果你为了让自己的情况看起来更好而美化答案，那么最终得到的报告，描述的其实是另一个人，而不是真实的你。",
  "La medicina moderna es extraordinaria tratando enfermedades. Lo que no puede hacer es compensar un estilo de vida que empuja al cuerpo día tras día en la dirección equivocada. Pasar la jornada sentado, vivir con el acelerador del estrés puesto, comer productos diseñados para disparar el azúcar en sangre: nada de eso aparece como diagnóstico durante años, y cuando aparece suele hacerlo todo junto.\n\nLa salud es 30% entrenamiento y 70% alimentación. Esta evaluación no es un buscador de síntomas ni una lista de la compra. Existe para responder una sola pregunta: para su cuerpo, sus hábitos y lo que está sintiendo ahora mismo, ¿cuánto necesita de cada nutriente?\n\nEsa cifra no es la del frasco. La del frasco es un único valor pensado para toda la población. La suya depende de su peso, de lo que come y de qué cosas siente a menudo y no rara vez. Tampoco es fija: a medida que cambian sus hábitos y ceden los síntomas, la cifra se mueve. Por eso conviene repetir esta evaluación y no leerla una sola vez.\n\nResponda con honestidad, no con optimismo. Aquí no se puntúa a nadie, y un informe construido sobre respuestas favorecedoras es un informe sobre otra persona.",
  "आधुनिक चिकित्सा बीमारी का इलाज करने में बेहद सक्षम है। जो वह नहीं कर सकती, वह है ऐसी जीवनशैली की भरपाई जो शरीर को लगातार गलत दिशा में धकेलती रहे। दिन भर बैठे रहना, तनाव के सहारे चलना, ऐसा खाना जो रक्त शर्करा को तेज़ी से बढ़ा दे: यह सब वर्षों तक किसी निदान के रूप में सामने नहीं आता, और फिर एक साथ सामने आ जाता है।\n\nस्वास्थ्य में 30% व्यायाम है और 70% खानपान। यह मूल्यांकन न लक्षण जाँचने का उपकरण है, न खरीदारी की सूची। यह केवल एक प्रश्न का उत्तर देता है: आपके शरीर, आपकी आदतों और अभी आप जो महसूस कर रहे हैं, उसके हिसाब से हर पोषक तत्व आपको कितना चाहिए?\n\nयह संख्या वह नहीं है जो बोतल पर छपी है। बोतल पर पूरी आबादी के लिए तय एक ही आंकड़ा होता है। आपकी संख्या आपके वज़न, आपके खानपान और इस बात पर निर्भर करती है कि कौन सी चीज़ें आपको अक्सर होती हैं, कभी-कभार नहीं। यह स्थिर भी नहीं है: आदतें बदलने और लक्षण घटने के साथ यह संख्या भी बदलती है, इसीलिए इसे समय-समय पर दोहराना सार्थक है।\n\nईमानदारी से उत्तर दें, आशावाद से नहीं। यहाँ किसी को अंक नहीं दिए जाते, और सुंदर बनाए गए उत्तरों पर बनी रिपोर्ट असल में किसी और की रिपोर्ट होती है।"
 ],
 "footnote": [
  "Around 9 minutes. Your report is a private link, not a public page.",
  "大约 9 分钟。你的报告是一条私密链接，不是公开页面。",
  "Unos 9 minutos. Su informe es un enlace privado, no una página pública.",
  "लगभग 9 मिनट। आपकी रिपोर्ट एक निजी लिंक है, सार्वजनिक पृष्ठ नहीं।"
 ]
};

const MOTIVATION = {
 "id": "f-motivation",
 "type": "multi",
 "limit": 0,
 "page": 1,
 "after": "f-gender",
 "l": [
  "What made you decide to do this?",
  "是什么让你想做这份评估？",
  "¿Qué le llevó a hacer esta evaluación?",
  "आपने यह मूल्यांकन करने का मन क्यों बनाया?"
 ],
 "h": [
  "There is no wrong answer and no limit. It decides what the report opens on, because two people with the same symptoms who came for different reasons should not read the same report.",
  "没有标准答案，选几个都行。这一题决定报告从哪里讲起：症状相同但来意不同的两个人，不该读到同一份报告。",
  "No hay respuesta incorrecta ni límite. Determina por dónde empieza el informe, porque dos personas con los mismos síntomas y motivos distintos no deberían leer lo mismo.",
  "कोई गलत उत्तर नहीं है और कोई सीमा नहीं। यह तय करता है कि रिपोर्ट किस बात से शुरू होगी, क्योंकि समान लक्षणों वाले दो लोग जो अलग कारणों से आए हैं, उन्हें एक जैसी रिपोर्ट नहीं पढ़नी चाहिए।"
 ],
 "o": [
  [
   "Specific problem",
   "Something specific is bothering me and I want to know why",
   "有个具体的问题一直困扰我，我想弄清楚原因",
   "Algo concreto me molesta y quiero saber por qué",
   "कोई विशेष समस्या परेशान कर रही है और मैं कारण जानना चाहता हूँ"
  ],
  [
   "Flat and tired",
   "I feel flat, tired, or older than I should",
   "整体状态提不起来，容易累，感觉比实际年龄老",
   "Me siento apagado, cansado o mayor de lo que soy",
   "थकान, सुस्ती, या उम्र से ज़्यादा बूढ़ा महसूस करना"
  ],
  [
   "Prevention",
   "Nothing is wrong yet and I want to keep it that way",
   "目前没什么毛病，想把这个状态保持住",
   "Todavía no me pasa nada y quiero que siga así",
   "अभी कुछ गड़बड़ नहीं है और मैं इसे बनाए रखना चाहता हूँ"
  ],
  [
   "Family history",
   "Something runs in my family and I want to get ahead of it",
   "家里有遗传倾向，想早做准备",
   "Hay antecedentes en mi familia y quiero adelantarme",
   "परिवार में कोई बीमारी चलती है और मैं पहले से सतर्क रहना चाहता हूँ"
  ],
  [
   "Already supplementing",
   "I already take supplements and want to know if they are the right ones, in the right amounts",
   "已经在吃补充剂，想知道吃得对不对、量够不够",
   "Ya tomo suplementos y quiero saber si son los adecuados y en la cantidad correcta",
   "मैं पहले से अनुपूरक लेता हूँ और जानना चाहता हूँ कि सही हैं या नहीं, और मात्रा ठीक है या नहीं"
  ],
  [
   "Body composition",
   "I want to lose fat or build muscle and get the nutrition side right",
   "想减脂或增肌，把营养这块弄明白",
   "Quiero perder grasa o ganar músculo y acertar con la nutrición",
   "मैं वसा घटाना या मांसपेशी बढ़ाना चाहता हूँ और पोषण सही रखना चाहता हूँ"
  ]
 ]
};

/* Frequency questions for the diet section. `computes` records what each one
   feeds, so a question nobody acts on is visible as such. */
const DIET_FREQ = [
 {
  "id": "d-veg",
  "computes": "fibre, folate, magnesium, potassium",
  "l": [
   "Vegetables, not counting potatoes",
   "蔬菜（土豆不算）",
   "Verduras, sin contar patatas",
   "सब्ज़ियाँ, आलू को छोड़कर"
  ]
 },
 {
  "id": "d-fruit",
  "computes": "vitamin C, potassium",
  "l": [
   "Fruit",
   "水果",
   "Fruta",
   "फल"
  ]
 },
 {
  "id": "d-protein",
  "computes": "protein, B12, iron, zinc",
  "l": [
   "Meat, eggs, or fish as part of a meal",
   "正餐里有肉、蛋或鱼",
   "Carne, huevo o pescado en una comida",
   "भोजन में मांस, अंडा या मछली"
  ]
 },
 {
  "id": "d-oilyfish",
  "computes": "omega 3 EPA and DHA",
  "l": [
   "Oily fish such as salmon, sardines, or mackerel",
   "深海鱼，如三文鱼、沙丁鱼、鲭鱼",
   "Pescado azul como salmón, sardinas o caballa",
   "तैलीय मछली जैसे सैल्मन, सार्डिन या मैकेरल"
  ]
 },
 {
  "id": "d-dairy",
  "computes": "calcium, vitamin D",
  "l": [
   "Milk, yoghurt, cheese, or a calcium fortified alternative",
   "牛奶、酸奶、奶酪，或强化钙的植物奶",
   "Leche, yogur, queso o una alternativa enriquecida en calcio",
   "दूध, दही, पनीर, या कैल्शियम-युक्त विकल्प"
  ]
 },
 {
  "id": "d-wholegrain",
  "computes": "fibre, B vitamins, magnesium",
  "l": [
   "Whole grains, beans, or lentils",
   "全谷物、豆类",
   "Cereales integrales, alubias o lentejas",
   "साबुत अनाज, बीन्स या दालें"
  ]
 },
 {
  "id": "d-processed",
  "computes": "ultra processed share, sodium, inflammatory load",
  "l": [
   "Packaged or takeaway food as the main part of a meal",
   "一餐主要是包装食品或外卖",
   "Comida envasada o para llevar como plato principal",
   "पैकेटबंद या बाहर का खाना, भोजन के मुख्य भाग के रूप में"
  ]
 },
 {
  "id": "d-sugarydrink",
  "computes": "blood sugar load",
  "l": [
   "Sugary drinks, counting juice and sweetened coffee",
   "含糖饮料（果汁、加糖咖啡都算）",
   "Bebidas azucaradas, incluidos zumos y café endulzado",
   "मीठे पेय, जूस और मीठी कॉफ़ी सहित"
  ]
 },
 {
  "id": "d-alcohol",
  "computes": "liver load, B vitamin and magnesium depletion",
  "l": [
   "Alcoholic drinks",
   "喝酒",
   "Bebidas alcohólicas",
   "मादक पेय"
  ]
 }
];

const DIET_SECTION = {
 "title": [
  "What You Eat and Drink",
  "你平时吃什么、喝什么",
  "Qué come y qué bebe",
  "आप क्या खाते और पीते हैं"
 ],
 "sub": [
  "This is where the nutrient numbers come from. Answer for a normal week, not your best one.",
  "营养素的数字就是从这一节算出来的。按你平常那一周来答，不要按最自律的那一周。",
  "De aquí salen las cifras de nutrientes. Responda pensando en una semana normal, no en su mejor semana.",
  "पोषक तत्वों की गणना यहीं से होती है। सामान्य सप्ताह के हिसाब से उत्तर दें, अपने सबसे अच्छे सप्ताह के नहीं।"
 ]
};

const DIAGNOSES = {
 "id": "f-diagnosed",
 "type": "multi",
 "page": 3,
 "l": [
  "Has a doctor diagnosed you with any of these?",
  "医生有没有明确诊断过以下任何一项？",
  "¿Un médico le ha diagnosticado alguna de estas?",
  "क्या डॉक्टर ने आपको इनमें से कुछ बताया है?"
 ],
 "h": [
  "Only things a doctor has actually told you. Leave it blank if you are not sure. This changes how the whole plan is written and whether it asks you to involve your physician, so a guess here is worse than a gap.",
  "只填医生明确告诉过你的。不确定就空着。这一题会改变整份方案的写法，也决定报告要不要建议你让医生参与，所以在这里猜一个，比空着更糟。",
  "Solo lo que un médico le haya dicho realmente. Déjelo en blanco si no está seguro. Esto cambia cómo se redacta todo el plan y si le pedimos que implique a su médico, así que aquí adivinar es peor que dejarlo vacío.",
  "केवल वही जो डॉक्टर ने वास्तव में बताया हो। यदि निश्चित न हों तो खाली छोड़ दें। इससे पूरी योजना का स्वरूप बदलता है और यह भी कि रिपोर्ट आपके डॉक्टर को शामिल करने को कहे या नहीं, इसलिए यहाँ अनुमान लगाना खाली छोड़ने से बुरा है।"
 ],
 "o": [
  [
   "High blood pressure",
   "High blood pressure",
   "高血压",
   "Hipertensión",
   "उच्च रक्तचाप"
  ],
  [
   "High cholesterol",
   "High cholesterol or high blood lipids",
   "高血脂 / 胆固醇偏高",
   "Colesterol alto o lípidos altos",
   "उच्च कोलेस्ट्रॉल या रक्त वसा"
  ],
  [
   "Type 2 diabetes",
   "Type 2 diabetes or prediabetes",
   "2 型糖尿病 或 糖尿病前期",
   "Diabetes tipo 2 o prediabetes",
   "टाइप 2 मधुमेह या प्री-डायबिटीज़"
  ],
  [
   "Fatty liver",
   "Fatty liver",
   "脂肪肝",
   "Hígado graso",
   "फैटी लिवर"
  ],
  [
   "Elevated liver enzymes",
   "Elevated liver enzymes",
   "肝功能异常 / 转氨酶偏高",
   "Enzimas hepáticas elevadas",
   "यकृत एंज़ाइम बढ़े हुए"
  ],
  [
   "Gastritis or ulcer",
   "Gastritis, reflux, or ulcer",
   "胃炎、反流 或 溃疡",
   "Gastritis, reflujo o úlcera",
   "गैस्ट्राइटिस, रिफ्लक्स या अल्सर"
  ],
  [
   "Anaemia",
   "Anaemia",
   "贫血",
   "Anemia",
   "एनीमिया"
  ],
  [
   "Thyroid condition",
   "Thyroid condition",
   "甲状腺疾病",
   "Trastorno de tiroides",
   "थायरॉइड की समस्या"
  ],
  [
   "Gout",
   "Gout or high uric acid",
   "痛风 或 尿酸偏高",
   "Gota o ácido úrico alto",
   "गाउट या यूरिक एसिड अधिक"
  ],
  [
   "Arthritis",
   "Arthritis",
   "关节炎",
   "Artritis",
   "गठिया"
  ],
  [
   "Osteoporosis",
   "Osteoporosis or low bone density",
   "骨质疏松 或 骨密度偏低",
   "Osteoporosis o densidad ósea baja",
   "ऑस्टियोपोरोसिस या कम अस्थि घनत्व"
  ],
  [
   "Stones",
   "Kidney or gallbladder stones",
   "肾结石 或 胆结石",
   "Cálculos renales o biliares",
   "गुर्दे या पित्ताशय की पथरी"
  ],
  [
   "Asthma",
   "Asthma or chronic bronchitis",
   "哮喘 或 慢性支气管炎",
   "Asma o bronquitis crónica",
   "अस्थमा या पुरानी ब्रोंकाइटिस"
  ],
  [
   "Disc or bone spur",
   "Lumbar disc problem or bone spurs",
   "腰椎间盘突出 或 骨刺",
   "Problema de disco lumbar o espolones óseos",
   "काठ की डिस्क समस्या या हड्डी का बढ़ाव"
  ],
  [
   "Other",
   "Something else",
   "其他",
   "Otra cosa",
   "कुछ और"
  ]
 ]
};

/* 65 core items. Everyone answers all of them: age and sex only ever ADD,
   never hide, so an early metabolic signal in a young person is still found. */
const SYMPTOM_GROUPS = [
 {
  "key": "lifestyle",
  "g": [
   "Lifestyle Habits",
   "生活习惯",
   "Hábitos de vida",
   "जीवनशैली की आदतें"
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
    "Engage in binge eating or overeating",
    "Binge eating or overeating",
    "暴饮暴食",
    "Atracones o comer en exceso",
    "अधिक या तेज़ी से खाना"
   ],
   [
    "Go a whole day without getting outside",
    "Go a whole day without getting outside",
    "一整天都没出过门",
    "Pasar un día entero sin salir a la calle",
    "पूरा दिन बिना बाहर निकले बीत जाना"
   ]
  ]
 },
 {
  "key": "digest",
  "g": [
   "Digestion",
   "消化",
   "Digestión",
   "पाचन"
  ],
  "items": [
   [
    "Bloating, burping, or a heavy feeling after eating",
    "Bloating, burping, or a heavy feeling after eating",
    "饭后腹胀、打嗝，或胃里沉甸甸的",
    "Hinchazón, eructos o pesadez después de comer",
    "खाने के बाद पेट फूलना, डकार, या भारीपन"
   ],
   [
    "Stomach pain or discomfort after eating",
    "Stomach pain or discomfort after eating",
    "饭后胃疼或胃不舒服",
    "Dolor o molestia de estómago después de comer",
    "खाने के बाद पेट में दर्द या असहजता"
   ],
   [
    "Nausea or feel like throwing up",
    "Nausea or feeling sick",
    "易呕吐",
    "Náuseas o ganas de vomitar",
    "मतली या उल्टी जैसा"
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
   ],
   [
    "Unexplained weight change",
    "Weight goes up or down without an obvious reason",
    "体重无缘无故地上下变化",
    "El peso sube o baja sin una razón clara",
    "बिना स्पष्ट कारण वज़न का घटना-बढ़ना"
   ]
  ]
 },
 {
  "key": "mouth",
  "g": [
   "Mouth and Teeth",
   "口腔与牙齿",
   "Boca y dientes",
   "मुँह और दाँत"
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
    "Bleed easily when brushing teeth",
    "Gums bleed when brushing, or are swollen and sore",
    "刷牙出血，或牙龈红肿疼痛",
    "Encías sangran al cepillar, o están hinchadas y doloridas",
    "ब्रश करते समय मसूड़ों से खून, या सूजन और दर्द"
   ],
   [
    "Toothache, loose teeth, or frequent cavities",
    "Toothache, loose teeth, or frequent cavities",
    "牙疼、牙齿松动，或经常蛀牙",
    "Dolor de muelas, dientes flojos o caries frecuentes",
    "दाँत दर्द, दाँतों का ढीलापन, या बार-बार कैविटी"
   ]
  ]
 },
 {
  "key": "sleep",
  "g": [
   "Sleep and Mood",
   "睡眠与情绪",
   "Sueño y estado de ánimo",
   "नींद और मनोदशा"
  ],
  "items": [
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
    "Irritable, or emotions feel out of control",
    "Lose your temper easily, or feel your emotions running you",
    "容易发脾气，或者情绪由不得自己",
    "Pierde los nervios con facilidad, o siente que las emociones le manejan",
    "जल्दी गुस्सा आना, या भावनाओं पर नियंत्रण न रहना"
   ]
  ]
 },
 {
  "key": "nerve",
  "g": [
   "Head and Nerves",
   "头部与神经",
   "Cabeza y sistema nervioso",
   "सिर और तंत्रिका तंत्र"
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
    "Hard to focus, forgetful, or foggy",
    "Hard to focus, forgetful, or mentally foggy",
    "注意力集中不了、记性变差、脑子发懵",
    "Le cuesta concentrarse, olvida cosas, o siente la mente nublada",
    "ध्यान लगाने में कठिनाई, भूलना, या दिमाग़ धुंधला लगना"
   ],
   [
    "Bump into things, drop things, or hurt yourself without meaning to",
    "Bump into things, drop things, or hurt yourself without meaning to",
    "经常磕碰到东西、失手掉东西，或不小心弄伤自己",
    "Choca con cosas, se le caen objetos, o se hace daño sin querer",
    "चीज़ों से टकराना, चीज़ें गिरा देना, या बिना चाहे खुद को चोट लगाना"
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
   ]
  ]
 },
 {
  "key": "eyes",
  "g": [
   "Eyes",
   "眼睛",
   "Ojos",
   "आँखें"
  ],
  "items": [
   [
    "Dry, sore, or gritty eyes",
    "Dry, sore, or gritty eyes",
    "眼睛干涩、酸胀，或有异物感",
    "Ojos secos, doloridos o con sensación de arenilla",
    "आँखों में सूखापन, दर्द, या किरकिरापन"
   ],
   [
    "Eyes sensitive to light, tear easily",
    "Eyes sensitive to light, tear easily",
    "眼怕光易流泪",
    "Ojos sensibles a la luz, lagrimeo",
    "आँखें प्रकाश के प्रति संवेदनशील"
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
    "Dark circles or puffy eyelids",
    "Dark circles or puffy eyelids",
    "黑眼圈或眼睑浮肿",
    "Ojeras o párpados hinchados",
    "आँखों के नीचे कालापन या पलकों में सूजन"
   ]
  ]
 },
 {
  "key": "skin",
  "g": [
   "Skin and Hair",
   "皮肤与头发",
   "Piel y cabello",
   "त्वचा और बाल"
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
    "Dandruff or itchy scalp",
    "Dandruff or itchy scalp",
    "头皮屑多或头皮发痒",
    "Caspa o picor en el cuero cabelludo",
    "रूसी या सिर की त्वचा में खुजली"
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
    "Nail fungus or athlete's foot",
    "Nail fungus or athlete's foot",
    "灰指甲或脚气",
    "Hongos en las uñas o pie de atleta",
    "नाखून में फंगस या एथलीट फुट"
   ]
  ]
 },
 {
  "key": "bone",
  "g": [
   "Bones, Joints and Muscles",
   "骨骼、关节与肌肉",
   "Huesos, articulaciones y músculos",
   "हड्डियाँ, जोड़ और मांसपेशियाँ"
  ],
  "items": [
   [
    "Cold or clammy hands and feet",
    "Cold or clammy hands and feet",
    "手脚发凉，或手脚容易出汗发黏",
    "Manos y pies fríos o sudorosos",
    "हाथ-पैर ठंडे या चिपचिपे पसीने वाले"
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
    "Cold feeling in lower back",
    "Cold feeling in the lower back",
    "腰部发凉",
    "Sensación de frío en la zona lumbar",
    "पीठ के निचले हिस्से में ठंडक"
   ],
   [
    "Back or spine pain and stiffness",
    "Back or spine pain and stiffness",
    "腰背或脊柱酸痛、发僵",
    "Dolor o rigidez en la espalda o la columna",
    "पीठ या रीढ़ में दर्द और अकड़न"
   ],
   [
    "Neck stiffness or neck pain",
    "Neck stiffness or pain",
    "颈项僵硬、疼痛",
    "Rigidez o dolor de cuello",
    "गर्दन में अकड़न या दर्द"
   ]
  ]
 },
 {
  "key": "resp",
  "g": [
   "Immunity and Respiratory",
   "免疫与呼吸",
   "Inmunidad y vías respiratorias",
   "प्रतिरक्षा और श्वसन"
  ],
  "items": [
   [
    "Catch colds often",
    "Catch colds often",
    "常感冒",
    "Resfriados frecuentes",
    "बार-बार सर्दी"
   ],
   [
    "Cough easily",
    "Cough easily",
    "易咳嗽",
    "Tos fácil",
    "आसानी से खांसी"
   ],
   [
    "Runny nose, sneezing, or nasal allergies",
    "Runny nose, sneezing, or nasal allergies",
    "流鼻涕、打喷嚏，或鼻子过敏",
    "Goteo nasal, estornudos o alergia nasal",
    "नाक बहना, छींक आना, या नाक की एलर्जी"
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
   ]
  ]
 },
 {
  "key": "circ",
  "g": [
   "Circulation",
   "循环",
   "Circulación",
   "रक्त संचार"
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
   "生殖与泌尿",
   "Reproductivo y urinario",
   "प्रजनन और मूत्र"
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
    "Urinate often or urgently",
    "Urinate often, or need to go in a hurry",
    "尿频，或者一有尿意就憋不住",
    "Orina con frecuencia, o con urgencia",
    "बार-बार पेशाब आना, या तुरंत जाने की ज़रूरत"
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
   ]
  ]
 }
];

/* 10 further items, shown only where `when` matches. */
const ADDITIVE_GROUPS = [
 {
  "key": "female",
  "when": {
   "gender": "Female"
  },
  "g": [
   "Menstrual Health",
   "月经健康",
   "Salud menstrual",
   "मासिक स्वास्थ्य"
  ],
  "items": [
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
   ]
  ]
 },
 {
  "key": "female45",
  "when": {
   "gender": "Female",
   "minAge": 45
  },
  "g": [
   "Around Menopause",
   "更年期前后",
   "En torno a la menopausia",
   "रजोनिवृत्ति के आसपास"
  ],
  "items": [
   [
    "Hot flushes or night sweats",
    "Hot flushes or night sweats",
    "潮热或夜间盗汗",
    "Sofocos o sudores nocturnos",
    "गर्मी के झोंके या रात में पसीना"
   ],
   [
    "Periods have become irregular or stopped",
    "Periods have become irregular or stopped",
    "月经变得不规律，或者已经停了",
    "La regla se ha vuelto irregular o ha cesado",
    "मासिक धर्म अनियमित हो गया है या बंद हो गया है"
   ],
   [
    "Sleep has changed noticeably in the last two years",
    "Sleep has changed noticeably in the last two years",
    "最近两年睡眠明显和以前不一样了",
    "El sueño ha cambiado de forma notable en los últimos dos años",
    "पिछले दो वर्षों में नींद में स्पष्ट बदलाव आया है"
   ]
  ]
 },
 {
  "key": "male45",
  "when": {
   "gender": "Male",
   "minAge": 45
  },
  "g": [
   "Prostate and Urinary",
   "前列腺与排尿",
   "Próstata y micción",
   "प्रोस्टेट और मूत्र"
  ],
  "items": [
   [
    "Weak or interrupted urine stream",
    "Weak or interrupted urine stream",
    "尿流变细、变弱，或断断续续",
    "Chorro de orina débil o entrecortado",
    "पेशाब की धार कमज़ोर या रुक-रुक कर"
   ],
   [
    "Getting up more than once a night to urinate",
    "Getting up more than once a night to urinate",
    "一晚上要起来上厕所不止一次",
    "Levantarse más de una vez por noche a orinar",
    "रात में एक से अधिक बार पेशाब के लिए उठना"
   ]
  ]
 },
 {
  "key": "age55",
  "when": {
   "minAge": 55
  },
  "g": [
   "Strength and Balance",
   "力量与平衡",
   "Fuerza y equilibrio",
   "शक्ति और संतुलन"
  ],
  "items": [
   [
    "Feel unsteady on your feet, or have had a fall",
    "Feel unsteady on your feet, or have had a fall",
    "走路发飘站不稳，或者摔过跤",
    "Se siente inestable al andar, o ha sufrido una caída",
    "चलते समय अस्थिर महसूस होना, या गिर चुके हों"
   ],
   [
    "Grip has weakened, or lids and jars have got harder",
    "Grip has weakened, or lids and jars have got harder to open",
    "握力变差了，拧瓶盖比以前吃力",
    "La fuerza de agarre ha bajado, o cuesta más abrir tapas y frascos",
    "पकड़ कमज़ोर हुई है, या ढक्कन और डिब्बे खोलना मुश्किल हो गया है"
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
 "Engage in binge eating or overeating": [
  "Overloading your system with food in a short time shocks your digestion, causing bloating and acid reflux. Long-term it damages your gut, disrupts blood sugar and hormones, leading directly to obesity and metabolic issues.",
  "短时内大量进食会严重冲击消化系统，引发胃胀、反酸，长期会损伤胃肠、扰乱血糖和激素，直接导致肥胖和代谢紊乱。",
  "Sobrecargar el sistema con comida en poco tiempo golpea la digestión, causando hinchazón y reflujo. A largo plazo daña el intestino y altera azúcar y hormonas.",
  "कम समय में अधिक भोजन पाचन पर आघात करता है, जिससे फूलना और एसिड रिफ्लक्स होता है।"
 ],
 "Go a whole day without getting outside": [
  "This is the vitamin D question, and it is the only one on the form. Skin makes vitamin D from direct sunlight and almost nothing else does: food supplies very little of it, so somebody who commutes indoors and works indoors can run low all year without any obvious cause. Vitamin D governs how much calcium you absorb and how well immune cells respond.",
  "这是整份表单里唯一一道关于维生素D的题。维生素D主要靠皮肤在阳光下自己合成，食物里几乎没有多少。所以一个每天从室内通勤到室内办公的人，可能常年偏低却找不到明显原因。维生素D决定你能吸收多少钙，也影响免疫细胞的反应能力。",
  "Esta es la pregunta de la vitamina D y es la única del formulario. La piel la fabrica con luz solar directa y casi nada más lo hace: los alimentos aportan muy poco. Quien va de un interior a otro puede estar bajo todo el año sin causa aparente. La vitamina D determina cuánto calcio absorbe y cómo responden las células inmunitarias.",
  "यह विटामिन D का प्रश्न है और फ़ॉर्म में एकमात्र है। त्वचा सीधी धूप से इसे बनाती है और लगभग कोई अन्य स्रोत नहीं है: भोजन से बहुत कम मिलता है। घर से दफ़्तर तक भीतर ही रहने वाला व्यक्ति पूरे साल कम रह सकता है। विटामिन D तय करता है कि आप कितना कैल्शियम अवशोषित करते हैं।"
 ],
 "Bloating, burping, or a heavy feeling after eating": [
  "All three point at the same place: food is sitting in the stomach longer than it should. Usually that is not enough stomach acid or not enough digestive enzyme, which means protein is not being broken down properly. What is not broken down ferments, and fermentation is where the gas and the pressure come from.",
  "这三个感觉指向同一件事：食物在胃里停留的时间超过了应有的长度。多数情况是胃酸不足或消化酶不够，蛋白质没有被充分分解。没分解掉的东西就会发酵，胀气和压迫感正是从这里来的。",
  "Los tres apuntan al mismo sitio: la comida permanece en el estómago más tiempo del debido. Normalmente es falta de ácido gástrico o de enzimas, con lo que la proteína no se descompone bien. Lo que no se descompone fermenta, y de ahí vienen el gas y la presión.",
  "तीनों एक ही ओर संकेत करते हैं: भोजन पेट में ज़रूरत से ज़्यादा देर तक रुका रहता है। आमतौर पर पेट में अम्ल या एंज़ाइम कम होते हैं, जिससे प्रोटीन ठीक से नहीं टूटता। जो नहीं टूटता वह किण्वित होता है, और वहीं से गैस और दबाव आता है।"
 ],
 "Stomach pain or discomfort after eating": [
  "Pain that arrives with or after a meal is different from general indigestion. It usually means the stomach lining itself is irritated rather than simply slow. Long running irritation thins the barrier that protects the lining, and that barrier is built and repaired from protein, vitamin A and zinc.",
  "吃饭时或饭后出现的疼痛，和一般的消化不良不是一回事。它通常说明胃黏膜本身已经受到刺激，而不只是消化慢。长期的刺激会让保护胃壁的那层屏障变薄，而这层屏障的构建和修复，靠的是蛋白质、维生素A和锌。",
  "El dolor que aparece con la comida o después no es lo mismo que una digestión pesada. Suele indicar que la mucosa gástrica está irritada, no solo lenta. La irritación prolongada adelgaza la barrera que la protege, y esa barrera se construye y repara con proteína, vitamina A y zinc.",
  "भोजन के दौरान या बाद में होने वाला दर्द सामान्य अपच से अलग है। यह आमतौर पर बताता है कि पेट की परत में जलन है, केवल धीमापन नहीं। लंबे समय की जलन उस सुरक्षा परत को पतला करती है, जो प्रोटीन, विटामिन A और ज़िंक से बनती और मरम्मत होती है।"
 ],
 "Nausea or feel like throwing up": [
  "Nausea is the body signalling an attempt to expel an irritant from the stomach. Possible causes include contaminated food, overeating, reflux, motion sickness, liver or gallbladder disease, or raised intracranial pressure. Frequent nausea needs investigation for organic causes.",
  "恶心感是身体试图排出胃内不良刺激物的信号。可能原因包括：食物不洁、暴饮暴食、胃食管反流、晕动症、肝胆疾病、或颅内压力增高等。频繁恶心需要排查器质性问题，并关注饮食习惯和消化功能。",
  "La náusea es la señal del cuerpo para expulsar un irritante. Las náuseas frecuentes requieren investigar causas orgánicas.",
  "मतली शरीर का उत्तेजक पदार्थ निकालने का संकेत है। बार-बार होने पर जाँच आवश्यक है।"
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
 "Constipation": [
  "Constipation means difficult or infrequent bowel movements, related to low fibre, low water intake, weak motility, dysbiosis or stress. Blood in the stool requires immediate attention: it may be haemorrhoids, but could also signal polyps, inflammatory bowel disease or colorectal cancer, and needs prompt medical evaluation.",
  "便秘指排便困难、次数减少，与膳食纤维摄入不足、饮水少、肠道蠕动无力、菌群失调或精神压力有关。大便带血必须警惕，可能为痔疮出血，也可能是结肠息肉、炎症性肠病甚至结直肠癌的征兆，需立即就医检查。",
  "El estreñimiento se relaciona con poca fibra, poca agua y motilidad débil. La sangre en heces requiere atención médica inmediata.",
  "कब्ज़ कम फ़ाइबर और पानी से जुड़ा है। मल में खून पर तुरंत डॉक्टर को दिखाएँ।"
 ],
 "Unexplained weight change": [
  "Weight moving in either direction without a change in what you eat or how you move is a signal about the systems that set your metabolic rate: the thyroid, blood sugar handling, and how well you are absorbing what you eat. The direction matters less than the fact that it moved on its own.",
  "在饮食和运动都没变的情况下，体重自己往上或往下走，说明的是决定代谢速率的那几个系统出了变化：甲状腺、血糖调节，以及你对食物的吸收效率。往哪个方向变不重要，重要的是它是自己变的。",
  "Que el peso suba o baje sin cambios en lo que come o en cuánto se mueve es una señal sobre los sistemas que fijan su ritmo metabólico: la tiroides, el manejo del azúcar en sangre y la eficacia con la que absorbe lo que come. Importa menos la dirección que el hecho de que se moviera solo.",
  "खानपान या गतिविधि बदले बिना वज़न का किसी भी दिशा में बदलना उन प्रणालियों का संकेत है जो आपकी चयापचय दर तय करती हैं: थायरॉइड, रक्त शर्करा का प्रबंधन, और आप जो खाते हैं उसका अवशोषण। दिशा से अधिक यह मायने रखता है कि यह अपने आप बदला।"
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
 "Mouth sores": [
  "Breaks and ulcers in the oral mucosa relate to reduced local immunity and insufficient mucosal repair. Common triggers include stress, lack of sleep, nutritional deficiency (especially B vitamins, iron, zinc), food allergy or intolerance, or an oral manifestation of gut disease.",
  "口腔粘膜的破损和溃疡，与局部免疫力下降、粘膜修复能力不足有关。常见诱因包括压力、熬夜、营养缺乏（尤其是维生素B族、铁、锌）、食物过敏或不耐受，或胃肠道问题的口腔表现。",
  "Úlceras en la mucosa oral por baja inmunidad local y reparación insuficiente. Desencadenantes comunes: estrés, falta de sueño, déficit de vitaminas B, hierro y zinc.",
  "मौखिक श्लेष्मा के छाले कम स्थानीय प्रतिरक्षा से जुड़े हैं। तनाव, नींद की कमी और बी विटामिन की कमी आम कारण हैं।"
 ],
 "Bleed easily when brushing teeth": [
  "Bleeding when you brush, and gums that are red, swollen, sore or receding. It is the same problem at two stages. Vitamin C builds the collagen that holds gum tissue and small vessels together, so fragile bleeding gums are often the first visible sign of a shortfall. Left alone it becomes periodontitis, which raises inflammation body-wide.",
  "刷牙出血，以及牙龈红肿、疼痛或萎缩。这是同一个问题的两个阶段。维生素C负责合成把牙龈组织和微血管连在一起的胶原，所以牙龈脆弱出血常常是缺乏最早看得见的信号。放着不管会发展成牙周炎，全身炎症水平随之升高。",
  "Sangrado al cepillar, y encías rojas, hinchadas, doloridas o retraídas. Es el mismo problema en dos etapas. La vitamina C forma el colágeno que mantiene unidos el tejido de la encía y los vasos pequeños, así que encías frágiles suelen ser el primer signo visible de una carencia.",
  "ब्रश करते समय खून आना, और मसूड़ों का लाल, सूजा, दर्दनाक या सिकुड़ा होना। यह एक ही समस्या के दो चरण हैं। विटामिन C वह कोलेजन बनाता है जो मसूड़े के ऊतक और छोटी वाहिकाओं को जोड़े रखता है।"
 ],
 "Toothache, loose teeth, or frequent cavities": [
  "Teeth are bone, and they are maintained by the same materials as the rest of your skeleton: calcium, vitamin D to absorb it, vitamin K2 to direct it, and protein for the matrix underneath. Frequent cavities in an adult who brushes normally is usually a supply problem rather than a hygiene one.",
  "牙齿本身就是骨组织，维持它的材料和维持全身骨骼的是同一套：钙、帮助吸收钙的维生素D、把钙引导到正确位置的维生素K2，以及构成底层基质的蛋白质。一个刷牙习惯正常的成年人还是频繁蛀牙，通常是原料供应的问题，而不是清洁的问题。",
  "Los dientes son hueso y se mantienen con los mismos materiales que el resto del esqueleto: calcio, vitamina D para absorberlo, vitamina K2 para dirigirlo y proteína para la matriz de debajo. Caries frecuentes en un adulto que se cepilla con normalidad suelen ser un problema de suministro, no de higiene.",
  "दाँत हड्डी हैं और उन्हें वही सामग्री बनाए रखती है जो बाकी कंकाल को: कैल्शियम, उसे अवशोषित करने के लिए विटामिन D, उसे सही जगह भेजने के लिए विटामिन K2, और नीचे की संरचना के लिए प्रोटीन। सामान्य रूप से ब्रश करने वाले वयस्क में बार-बार कैविटी आमतौर पर आपूर्ति की समस्या है, सफ़ाई की नहीं।"
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
 "Irritable, or emotions feel out of control": [
  "A short fuse and feeling run by your emotions are the same picture at two intensities. Emotional control costs the brain a lot of energy and specific raw materials: B vitamins to make the calming neurotransmitters, magnesium to let the nervous system stand down, and stable blood sugar so the brain is not running on an empty tank.",
  "一点就着，和感觉情绪牵着自己走，是同一件事的两种强度。控制情绪对大脑来说是很耗能的工作，而且需要特定的原料：B族维生素用来合成让人平静的神经递质，镁让神经系统能降下来，还有稳定的血糖，让大脑不至于在空油箱上运转。",
  "Saltar a la primera y sentir que las emociones le manejan son el mismo cuadro en dos intensidades. Controlar las emociones le cuesta al cerebro mucha energía y materias primas concretas: vitaminas B para fabricar los neurotransmisores calmantes, magnesio para que el sistema nervioso baje revoluciones, y azúcar en sangre estable para que el cerebro no funcione en reserva.",
  "जल्दी भड़क जाना और भावनाओं के बहाव में रहना एक ही तस्वीर की दो तीव्रताएँ हैं। भावनाओं पर नियंत्रण मस्तिष्क से बहुत ऊर्जा और विशिष्ट कच्चा माल माँगता है: शांत करने वाले न्यूरोट्रांसमीटर बनाने के लिए बी विटामिन, तंत्रिका तंत्र को शांत करने के लिए मैग्नीशियम, और स्थिर रक्त शर्करा।"
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
 "Hard to focus, forgetful, or foggy": [
  "The brain runs on about a fifth of everything you eat despite being a fiftieth of your weight, so it is the first organ to show a shortfall. Foggy thinking usually traces to one of three things: blood sugar swinging, B vitamins running low, or not enough of the fats that brain cell membranes are built from.",
  "大脑只占体重的五十分之一，却要消耗你摄入能量的五分之一左右，所以它是最先表现出供应不足的器官。脑子发懵通常追溯到三件事之一：血糖在大幅波动、B族维生素不够、或者构成脑细胞膜的那类脂肪摄入太少。",
  "El cerebro consume alrededor de una quinta parte de todo lo que come pese a ser una cincuentava parte de su peso, así que es el primer órgano que acusa una carencia. La niebla mental suele venir de tres sitios: el azúcar en sangre oscilando, las vitaminas B bajas, o pocas grasas de las que forman la membrana de las células cerebrales.",
  "मस्तिष्क आपके वज़न का पचासवाँ हिस्सा है पर आपके खाए हुए का लगभग पाँचवाँ हिस्सा खर्च करता है, इसलिए कमी सबसे पहले वहीं दिखती है। धुंधली सोच आमतौर पर तीन में से एक कारण से होती है: रक्त शर्करा का उतार-चढ़ाव, बी विटामिन की कमी, या मस्तिष्क कोशिका झिल्ली बनाने वाली वसा की कमी।"
 ],
 "Bump into things, drop things, or hurt yourself without meaning to": [
  "This is not a clumsiness question, it is an attention question. Walking into the corner of a table, dropping what you are holding, cutting yourself while distracted: these say something about where your attention was, and attention runs on the same supply as focus and memory. Frequent small injuries are worth counting, because most people never think of them as data.",
  "这不是问你笨不笨，是问你的注意力状态。撞到桌角、手里的东西没拿住、走神的时候切到手，这些说明的是那一刻你的注意力在哪里，而注意力和专注、记忆用的是同一套供给。经常发生的小磕小碰值得记下来，因为大多数人从来没把它当成一条数据。",
  "No es una pregunta sobre torpeza, es una pregunta sobre atención. Chocar con la esquina de una mesa, que se le caiga lo que lleva, cortarse mientras está distraído: eso dice dónde estaba su atención, y la atención se sostiene con el mismo suministro que la concentración y la memoria. Las lesiones pequeñas y frecuentes merecen contarse, porque casi nadie las considera un dato.",
  "यह अनाड़ीपन का प्रश्न नहीं, ध्यान का प्रश्न है। मेज़ के कोने से टकराना, हाथ से चीज़ गिर जाना, ध्यान बँटने पर खुद को काट लेना: ये बताते हैं कि उस क्षण आपका ध्यान कहाँ था, और ध्यान उसी आपूर्ति पर चलता है जिस पर एकाग्रता और स्मृति। बार-बार होने वाली छोटी चोटें गिनने लायक हैं।"
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
 "Dry, sore, or gritty eyes": [
  "The eye keeps itself wet with a film that has a fat layer on the outside to stop it evaporating. Dryness and that sandy feeling usually mean the film is breaking too fast, which points at the omega 3 fats that build the layer, and at vitamin A, which maintains the surface underneath it.",
  "眼睛靠一层泪膜保持湿润，泪膜最外面有一层油脂，作用是防止水分蒸发。干涩和沙砾感通常说明这层膜破得太快，指向的是构成油脂层的omega-3脂肪，以及维持下方眼表的维生素A。",
  "El ojo se mantiene húmedo con una película que lleva por fuera una capa grasa para que no se evapore. La sequedad y esa sensación de arenilla suelen significar que la película se rompe demasiado rápido, lo que apunta a las grasas omega 3 que forman esa capa y a la vitamina A, que mantiene la superficie de debajo.",
  "आँख खुद को एक झिल्ली से नम रखती है जिसकी बाहरी परत वसा की होती है ताकि वाष्पीकरण रुके। सूखापन और किरकिरापन आमतौर पर बताते हैं कि यह झिल्ली बहुत जल्दी टूट रही है, जो ओमेगा 3 वसा और नीचे की सतह बनाए रखने वाले विटामिन A की ओर संकेत करता है।"
 ],
 "Eyes sensitive to light, tear easily": [
  "Oversensitivity to light or unexplained tearing indicates sensitive ocular surface nerves or abnormal tear regulation. May relate to insufficient liver blood, since the liver opens into the eyes, long-term eye strain, or a lack of protective antioxidants such as lutein, zeaxanthin and vitamin A.",
  "眼睛对光线过度敏感或无故流泪，是眼表神经敏感或泪液分泌调节异常的表现。可能与肝血不足（肝开窍于目）、长期用眼过度导致视神经疲劳，或缺乏保护眼睛的抗氧化营养素（如叶黄素、玉米黄质、维生素A）有关。",
  "La sensibilidad a la luz o el lagrimeo indican nervios oculares sensibles. Puede relacionarse con fatiga visual o falta de luteína, zeaxantina y vitamina A.",
  "प्रकाश संवेदनशीलता या आँसू आना संवेदनशील नेत्र तंत्रिकाओं का संकेत है।"
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
 "Dark circles or puffy eyelids": [
  "The skin under the eye is the thinnest on the body, so what is happening underneath shows through there first. Persistent darkness or puffiness that is not about last night's sleep usually reflects circulation and fluid handling, and often iron status, which is worth checking rather than guessing at.",
  "眼下的皮肤是全身最薄的，所以下面发生的事最先在那里显出来。如果不是因为昨晚没睡好，而是长期存在的发黑或浮肿，通常反映的是循环和体液代谢的状况，也常常和铁有关，而铁是值得去查一下、不该靠猜的。",
  "La piel bajo el ojo es la más fina del cuerpo, así que lo que ocurre por debajo se ve ahí primero. Un oscurecimiento o una hinchazón persistentes que no vienen de la noche anterior suelen reflejar circulación y manejo de líquidos, y a menudo el estado del hierro, que conviene medir en vez de suponer.",
  "आँख के नीचे की त्वचा शरीर में सबसे पतली है, इसलिए नीचे जो हो रहा है वह वहीं पहले दिखता है। कल रात की नींद से असंबंधित लगातार कालापन या सूजन आमतौर पर रक्त संचार और तरल प्रबंधन दर्शाती है, और अक्सर आयरन की स्थिति, जिसे अनुमान के बजाय जाँचना चाहिए।"
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
 "Dandruff or itchy scalp": [
  "Flaking and itching are the scalp's version of a barrier that is not holding. The skin barrier is built from fats and needs zinc and B vitamins to renew itself, and when it is thin the yeast that lives on everybody's skin gets the upper hand. Treating only the surface leaves the supply problem in place.",
  "头皮屑和发痒，是头皮这层屏障没守住的表现。皮肤屏障由脂类构成，更新时需要锌和B族维生素。屏障一薄，本来就住在每个人皮肤上的那种真菌就占了上风。只处理表面，供应端的问题还留在原地。",
  "La descamación y el picor son la versión del cuero cabelludo de una barrera que no aguanta. La barrera cutánea está hecha de grasas y necesita zinc y vitaminas B para renovarse; cuando adelgaza, la levadura que vive en la piel de todo el mundo toma ventaja. Tratar solo la superficie deja intacto el problema de suministro.",
  "पपड़ी और खुजली सिर की त्वचा की उस अवरोध परत का संकेत हैं जो टिक नहीं रही। त्वचा की यह परत वसा से बनती है और नवीनीकरण के लिए ज़िंक तथा बी विटामिन चाहिए। परत पतली होते ही वह यीस्ट हावी हो जाता है जो सभी की त्वचा पर रहता है।"
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
 "Nail fungus or athlete's foot": [
  "Both are the same organism finding a foothold. Everybody is exposed; whether it takes hold depends on how well local immunity is holding the line, which runs on zinc, vitamin A and the state of your gut flora. Recurring infection after treatment is a defence question rather than a hygiene one.",
  "这两件事其实是同一类真菌找到了立足点。人人都会接触到它，会不会长起来，取决于局部免疫守不守得住，而这一层免疫靠的是锌、维生素A和肠道菌群的状态。治好了又反复，问的是防御力，不是卫生习惯。",
  "Ambos son el mismo organismo encontrando un hueco. Todo el mundo está expuesto; que arraigue depende de si la inmunidad local aguanta, y esa inmunidad se sostiene con zinc, vitamina A y el estado de la flora intestinal. Que vuelva después del tratamiento es una cuestión de defensas, no de higiene.",
  "दोनों एक ही जीव को जगह मिल जाने का परिणाम हैं। संपर्क सबका होता है; टिकना इस पर निर्भर है कि स्थानीय प्रतिरक्षा कितनी मज़बूत है, जो ज़िंक, विटामिन A और आँत के सूक्ष्मजीवों की स्थिति पर चलती है। इलाज के बाद बार-बार लौटना बचाव का प्रश्न है, सफ़ाई का नहीं।"
 ],
 "Cold or clammy hands and feet": [
  "Hands and feet are the end of the line, so they are the first to be given up when circulation is prioritised elsewhere. Cold extremities point at blood flow, thyroid output and iron; clammy ones point at the nervous system staying in an alert state it should have come out of. People often have both, which is why they are asked together.",
  "手和脚在循环的末端，所以当身体要优先保证别处时，最先被放弃的就是它们。手脚发凉指向血流、甲状腺功能和铁；出汗发黏则指向神经系统一直停在本该退出的警觉状态。很多人两者都有，所以这一题把它们放在一起问。",
  "Las manos y los pies están al final del recorrido, así que son lo primero que se sacrifica cuando la circulación se prioriza en otra parte. El frío apunta al flujo sanguíneo, la tiroides y el hierro; el sudor frío apunta a un sistema nervioso que sigue en alerta cuando ya debería haber salido de ella. Mucha gente tiene ambos, y por eso se preguntan juntos.",
  "हाथ-पैर संचार की अंतिम कड़ी हैं, इसलिए जब शरीर कहीं और प्राथमिकता देता है तो सबसे पहले वही छूटते हैं। ठंडापन रक्त प्रवाह, थायरॉइड और आयरन की ओर संकेत करता है; चिपचिपा पसीना तंत्रिका तंत्र के सतर्क बने रहने की ओर। कई लोगों में दोनों होते हैं, इसीलिए एक साथ पूछा जाता है।"
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
 "Muscle cramps": [
  "Sudden involuntary contraction with severe pain. Common causes include electrolyte imbalance (magnesium, calcium, potassium), dehydration, muscle fatigue, poor circulation or neurological abnormality. Night-time calf cramps are especially common.",
  "肌肉突然、不自主的强直收缩，伴剧烈疼痛。常见原因包括：电解质失衡（缺镁、钙、钾）、脱水、肌肉疲劳、血液循环不良、或神经系统异常。夜间小腿抽筋尤其常见，提示需要关注矿物质营养和局部循环。",
  "Contracción súbita e involuntaria con dolor intenso. Causas: desequilibrio de electrolitos (magnesio, calcio, potasio), deshidratación o mala circulación.",
  "अचानक अनैच्छिक संकुचन। कारण: इलेक्ट्रोलाइट असंतुलन (मैग्नीशियम, कैल्शियम, पोटैशियम)।"
 ],
 "Cold feeling in lower back": [
  "A subjective feeling of coldness in the lower back even in a warm environment. May relate to poor circulation there, local muscle tension reducing blood flow, or autonomic dysregulation. Suggests improving local circulation and warming the body.",
  "自觉腰部有寒冷感，即使环境不冷。中医认为是肾阳虚或寒湿滞留的表现。现代视角可能与腰部血液循环不良、局部肌肉紧张痉挛导致血流减少，或自主神经调节功能异常有关。提示需要改善局部循环和温煦身体。",
  "Sensación de frío lumbar incluso en ambiente cálido. Puede deberse a mala circulación local o tensión muscular que reduce el flujo sanguíneo.",
  "गर्म वातावरण में भी पीठ में ठंडक। यह स्थानीय खराब संचार दर्शा सकता है।"
 ],
 "Back or spine pain and stiffness": [
  "Discs are mostly water held in place by collagen, and both the water and the collagen depend on what you are taking in. Stiffness that is worst after sitting is usually a circulation and hydration picture; pain that persists regardless is a structural one and belongs with your doctor rather than with a supplement.",
  "椎间盘主要是被胶原固定住的水分，而水分和胶原都取决于你摄入了什么。久坐之后最明显的僵硬，通常反映的是循环和水分状况；如果不管怎样都持续疼痛，那是结构层面的问题，该交给医生，而不是交给补充剂。",
  "Los discos son sobre todo agua sostenida por colágeno, y tanto el agua como el colágeno dependen de lo que usted ingiere. La rigidez que empeora tras estar sentado suele ser un cuadro de circulación e hidratación; el dolor que persiste pase lo que pase es estructural y corresponde a su médico, no a un suplemento.",
  "डिस्क मुख्यतः कोलेजन द्वारा थामा गया पानी है, और पानी तथा कोलेजन दोनों आपके सेवन पर निर्भर हैं। बैठने के बाद बढ़ने वाली अकड़न आमतौर पर रक्त संचार और जलयोजन की तस्वीर है; लगातार बना रहने वाला दर्द संरचनात्मक है और वह आपके डॉक्टर का विषय है, अनुपूरक का नहीं।"
 ],
 "Neck stiffness or neck pain": [
  "Restricted neck movement with pain, often from muscle spasm or cervical joint dysfunction. Directly related to prolonged forward head posture using phones and computers. Indicates chronically tense neck and shoulder muscles with impaired circulation and nutrient supply.",
  "颈部活动受限伴疼痛，常由肌肉痉挛、颈椎小关节紊乱、颈椎病或落枕引起。与现代人长期低头使用手机电脑直接相关。提示颈肩部肌肉长期处于紧张状态，血液循环和营养供应受阻，需纠正姿势并放松肌肉。",
  "Movimiento restringido con dolor, a menudo por espasmo muscular. Directamente ligado a la postura de cabeza adelantada con móviles y ordenadores.",
  "दर्द के साथ सीमित गति, अक्सर मांसपेशी ऐंठन से। यह झुकी गर्दन की मुद्रा से जुड़ा है।"
 ],
 "Catch colds often": [
  "More than three or four colds a year, or prolonged recovery, is a clear sign of low immunity. Immunity is rooted in nutrition (protein, vitamins A/C/D, zinc), gut health, adequate sleep and stress management. Frequent colds indicate deficiencies in these areas.",
  "每年感冒超过3-4次，或病程迁延不愈，是免疫力低下的明确标志。免疫力根植于营养（蛋白质、维生素A/C/D、锌等）、肠道健康、充足的睡眠和压力管理。常感冒提示在这些方面存在短板，身体需要全面的支持来重建免疫防线。",
  "Más de tres o cuatro resfriados al año es señal clara de baja inmunidad, arraigada en nutrición, salud intestinal, sueño y manejo del estrés.",
  "साल में तीन-चार से अधिक सर्दी कम प्रतिरक्षा का स्पष्ट संकेत है।"
 ],
 "Cough easily": [
  "Coughing is a defensive reflex clearing the airways. Chronic coughing without clear infection may stem from airway hyperresponsiveness, allergic inflammation or reflux irritation. Requires reducing allergen exposure, lowering systemic inflammation and repairing respiratory epithelium.",
  "咳嗽是呼吸道清除异物的防御反射。无明确感染的长期慢性咳嗽或易咳，可能源于呼吸道高反应性、过敏性炎症，或胃食管反流刺激。从健康管理看，需要减少接触过敏原、降低全身炎症水平，并修复呼吸道上皮细胞。",
  "La tos es un reflejo defensivo. La tos crónica sin infección clara puede venir de hiperreactividad, inflamación alérgica o reflujo.",
  "खांसी एक रक्षात्मक प्रतिवर्त है। बिना संक्रमण की पुरानी खांसी एलर्जी सूजन से हो सकती है।"
 ],
 "Runny nose, sneezing, or nasal allergies": [
  "All three are the same reaction at different strengths: the lining of the nose responding to something it has decided is a threat. How readily that switch flips depends on how calm the immune system is overall, and a large share of that is set in the gut. Antihistamines quiet the reaction; they do not change the threshold.",
  "这三样是同一个反应的不同强度：鼻腔黏膜对它认定为威胁的东西做出应答。这个开关有多容易被拨动，取决于整体免疫系统有多平稳，而这一点很大程度上是由肠道决定的。抗组胺药让反应安静下来，但不改变那个阈值。",
  "Los tres son la misma reacción con distinta intensidad: la mucosa nasal respondiendo a algo que ha decidido que es una amenaza. Con qué facilidad se dispara ese interruptor depende de lo calmado que esté el sistema inmunitario en conjunto, y buena parte de eso se decide en el intestino. Los antihistamínicos silencian la reacción; no cambian el umbral.",
  "तीनों एक ही प्रतिक्रिया की अलग-अलग तीव्रताएँ हैं: नाक की परत किसी चीज़ को खतरा मानकर जवाब देती है। यह स्विच कितनी आसानी से चलता है, यह पूरी प्रतिरक्षा प्रणाली की स्थिरता पर निर्भर है, जिसका बड़ा हिस्सा आँत में तय होता है। एंटीहिस्टामिन प्रतिक्रिया शांत करते हैं, सीमा नहीं बदलते।"
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
 "Urinate often or urgently": [
  "Frequency and urgency travel together often enough to ask as one. Both can be simple, such as how much you drink and how much caffeine is in it, and both can point at blood sugar, at bladder irritation, or in men at the prostate. Waking to go at night is asked separately, because that one is about sleep as much as about the bladder.",
  "尿频和尿急经常一起出现，所以合成一题问。它们可能只是喝了多少水、其中有多少咖啡因这么简单，也可能指向血糖、膀胱刺激，男性还可能指向前列腺。夜里起来上厕所单独问，因为那一题既关乎膀胱，也关乎睡眠。",
  "La frecuencia y la urgencia van juntas lo bastante a menudo como para preguntarse en una sola cuestión. Pueden ser algo simple, como cuánto bebe y cuánta cafeína lleva, y pueden apuntar al azúcar en sangre, a irritación vesical o, en hombres, a la próstata. Levantarse de noche se pregunta aparte, porque eso tiene tanto de sueño como de vejiga.",
  "बार-बार और तुरंत जाने की ज़रूरत अक्सर साथ चलती हैं, इसलिए एक ही प्रश्न में पूछी जाती हैं। यह इतना सरल हो सकता है कि आप कितना पीते हैं और उसमें कितनी कैफ़ीन है, और यह रक्त शर्करा, मूत्राशय की जलन, या पुरुषों में प्रोस्टेट की ओर भी संकेत कर सकता है।"
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
 ],
 "Gynecological infections": [
  "Vaginitis, cervicitis or pelvic inflammatory disease from bacterial, fungal or parasitic infection. Frequent episodes indicate low local immunity and vaginal microbiome imbalance, and may relate to poor blood sugar control. Holistically connected to overall immunity and gut health.",
  "阴道炎、宫颈炎、盆腔炎等。由细菌、真菌或寄生虫感染引起。频繁发作提示局部免疫力低下、菌群失衡（阴道微生态），也可能与血糖控制不良、个人卫生、性卫生有关。从整体看，与全身免疫力、炎症水平和肠道健康存在关联。",
  "Vaginitis, cervicitis o enfermedad pélvica inflamatoria. Los episodios frecuentes indican baja inmunidad local y desequilibrio del microbioma vaginal.",
  "योनिशोथ या श्रोणि सूजन। बार-बार होना कम स्थानीय प्रतिरक्षा दर्शाता है।"
 ],
 "Hot flushes or night sweats": [
  "These come from the temperature control centre reacting to a falling and unsteady oestrogen level. They are not something to endure quietly: the same hormonal shift is quietly changing bone density and cardiovascular risk at the same time, and both respond to what you are taking in.",
  "潮热和盗汗，来自体温调节中枢对雌激素下降且不稳定的反应。这不是应该默默忍过去的事：同一个激素变化，正在同时悄悄改变骨密度和心血管风险，而这两者都会对你的营养摄入做出反应。",
  "Vienen del centro de control de la temperatura reaccionando a un nivel de estrógeno que baja y se vuelve inestable. No son algo que haya que soportar en silencio: ese mismo cambio hormonal está modificando a la vez la densidad ósea y el riesgo cardiovascular, y ambos responden a lo que usted ingiere.",
  "ये तापमान नियंत्रण केंद्र की उस प्रतिक्रिया से आते हैं जब एस्ट्रोजन गिरता और अस्थिर होता है। इन्हें चुपचाप सहना ज़रूरी नहीं: वही हार्मोनल बदलाव साथ-साथ अस्थि घनत्व और हृदय जोखिम भी बदल रहा है, और दोनों आपके पोषण पर प्रतिक्रिया देते हैं।"
 ],
 "Periods have become irregular or stopped": [
  "This dates the transition, which matters because the years around it are when bone is lost fastest. Knowing roughly where you are in it changes what the plan prioritises, particularly calcium, vitamin D and vitamin K2, and the protein that the bone matrix is built from.",
  "这一题是为了判断你处在这个过渡期的哪个位置，而这很重要，因为前后这几年正是骨量流失最快的时候。知道你大概走到哪一步，会改变方案优先处理什么，尤其是钙、维生素D、维生素K2，以及构成骨基质的蛋白质。",
  "Esto sitúa la transición, y eso importa porque los años que la rodean son cuando más rápido se pierde hueso. Saber aproximadamente en qué punto está cambia lo que el plan prioriza, en particular calcio, vitamina D y vitamina K2, y la proteína con la que se construye la matriz ósea.",
  "यह इस संक्रमण का समय बताता है, जो महत्वपूर्ण है क्योंकि इसके आसपास के वर्षों में हड्डी सबसे तेज़ी से घटती है। आप कहाँ हैं यह जानने से योजना की प्राथमिकताएँ बदलती हैं, विशेषकर कैल्शियम, विटामिन D, विटामिन K2 और अस्थि संरचना बनाने वाला प्रोटीन।"
 ],
 "Sleep has changed noticeably in the last two years": [
  "Sleep changing around this time is usually hormonal rather than a new habit, and it is worth separating from ordinary insomnia because the two are addressed differently. Poor sleep during this window also accelerates the bone loss, so it is not only a comfort question.",
  "在这个阶段睡眠出现变化，多数是激素带来的，而不是新养成的坏习惯。把它和普通失眠区分开是有意义的，因为两者的处理方式不一样。而且这段时间睡不好还会加速骨量流失，所以这不只是舒不舒服的问题。",
  "Que el sueño cambie en esta etapa suele ser hormonal y no un hábito nuevo, y conviene separarlo del insomnio corriente porque se abordan de forma distinta. Dormir mal en esta ventana además acelera la pérdida de hueso, así que no es solo una cuestión de comodidad.",
  "इस दौर में नींद का बदलना आमतौर पर हार्मोनल होता है, कोई नई आदत नहीं, और इसे सामान्य अनिद्रा से अलग रखना उचित है क्योंकि दोनों का समाधान भिन्न है। इस अवधि में खराब नींद हड्डी की हानि भी तेज़ करती है।"
 ],
 "Weak or interrupted urine stream": [
  "This is the earliest thing most men notice, and it is usually the prostate gradually narrowing the passage rather than anything sudden. It is asked because it is easy to dismiss for years. Zinc, selenium and the tomato carotenoids all have a place here, and so does a doctor if it is progressing.",
  "这通常是男性最早注意到的一个变化，多数情况是前列腺逐渐压窄了通道，而不是突然发生了什么。之所以问这一题，是因为它很容易被忽略好几年。锌、硒和番茄红素这一类在这里都有位置，但如果在持续加重，医生也有位置。",
  "Es lo primero que la mayoría de los hombres nota, y suele deberse a que la próstata va estrechando el paso de forma gradual, no a algo repentino. Se pregunta porque es fácil restarle importancia durante años. El zinc, el selenio y los carotenoides del tomate tienen sitio aquí, y también el médico si va a más.",
  "यह वह पहली बात है जो अधिकतर पुरुष देखते हैं, और आमतौर पर प्रोस्टेट धीरे-धीरे मार्ग को सँकरा करता है, कुछ अचानक नहीं। यह इसलिए पूछा जाता है क्योंकि वर्षों तक इसे टाल दिया जाता है। ज़िंक, सेलेनियम और टमाटर के कैरोटीनॉयड यहाँ काम आते हैं।"
 ],
 "Getting up more than once a night to urinate": [
  "Asked separately from daytime frequency because this one costs you sleep, and broken sleep has its own consequences regardless of what is waking you. The cause can be the prostate, blood sugar, or simply the timing of what you drink in the evening, and those are told apart by the rest of your answers.",
  "这一题和白天的尿频分开问，因为它损失的是睡眠，而睡眠被打断本身就有后果，不管是什么把你叫醒的。原因可能是前列腺、血糖，也可能只是晚上喝水的时间，这几种要靠你其他题的答案来区分。",
  "Se pregunta aparte de la frecuencia diurna porque esta le cuesta horas de sueño, y el sueño roto tiene consecuencias propias sea cual sea la causa. Puede ser la próstata, el azúcar en sangre o simplemente a qué hora bebe por la noche, y eso se distingue con el resto de sus respuestas.",
  "यह दिन की आवृत्ति से अलग पूछा जाता है क्योंकि इसमें नींद का नुकसान होता है, और टूटी नींद के अपने परिणाम हैं। कारण प्रोस्टेट, रक्त शर्करा, या शाम को पीने का समय हो सकता है, जिन्हें आपके बाकी उत्तर अलग करते हैं।"
 ],
 "Feel unsteady on your feet, or have had a fall": [
  "Balance is muscle, inner ear and nerve signalling working together, and vitamin D affects all three. This is asked plainly because a fall is the event that changes everything afterwards, and the years before the first one are when it is still preventable.",
  "平衡是肌肉、内耳和神经信号三者协同的结果，而维生素D对这三者都有影响。这一题问得直接，是因为一次跌倒往往会改变之后的一切，而第一次跌倒之前的那几年，是它还能被预防的时候。",
  "El equilibrio es músculo, oído interno y señal nerviosa trabajando juntos, y la vitamina D afecta a los tres. Se pregunta sin rodeos porque una caída es el acontecimiento que cambia todo lo que viene después, y los años previos a la primera son cuando aún se puede prevenir.",
  "संतुलन मांसपेशी, भीतरी कान और तंत्रिका संकेतों के मिलकर काम करने से बनता है, और विटामिन D तीनों को प्रभावित करता है। यह सीधे पूछा जाता है क्योंकि एक बार गिरना उसके बाद सब कुछ बदल देता है, और पहली बार से पहले के वर्ष ही रोकथाम का समय हैं।"
 ],
 "Grip has weakened, or lids and jars have got harder": [
  "Grip strength is the most practical measure of whole body muscle there is, which is why a jar you used to open is worth noticing. Muscle is lost from around forty onward unless it is actively defended, and defending it takes both protein and resistance work. Protein alone will not do it, and neither will exercise on an inadequate intake.",
  "握力是衡量全身肌肉量最实用的一个指标，所以一个从前拧得开的瓶盖，现在拧不开了，是值得注意的。人从四十岁前后就开始掉肌肉，除非主动去守。而守住它需要两件事：足够的蛋白质，加上抗阻训练。只补蛋白不动没用，摄入不够光练也没用。",
  "La fuerza de agarre es la medida más práctica que existe del músculo de todo el cuerpo, y por eso un bote que antes abría sin problema merece atención. El músculo se pierde a partir de los cuarenta salvo que se defienda activamente, y defenderlo exige proteína y trabajo de fuerza. Solo con proteína no basta, y entrenar con una ingesta insuficiente tampoco.",
  "पकड़ की ताकत पूरे शरीर की मांसपेशी का सबसे व्यावहारिक माप है, इसलिए वह डिब्बा जो पहले खुल जाता था, ध्यान देने योग्य है। चालीस के आसपास से मांसपेशी घटने लगती है जब तक सक्रिय रूप से बचाई न जाए, और उसके लिए प्रोटीन और शक्ति-प्रशिक्षण दोनों चाहिए।"
 ]
};

if (typeof module !== 'undefined') module.exports = {
  FORM_VERSION, LANGS, UI, SECTIONS, FIELDS, SCALES, STAGE_SETTING, MOTIVATION,
  DIET_FREQ, DIET_SECTION, DIAGNOSES, SYMPTOM_GROUPS, ADDITIVE_GROUPS, SYMPTOM_HELP
};
