/* Intake form content: labels, help text and options in four languages.
 *
 * One file to add a language, same as the report renderer. Keys are the input ids
 * already in intake.html, so the submission payload is untouched by translation.
 *
 * `help` is not decoration. Each one says what the answer is actually used for, because
 * a person who understands why a question is asked gives a more accurate answer, and
 * accuracy here is what the whole report is built on.
 */

const LANGS = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'zh', label: '中', name: '中文' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'hi', label: 'HI', name: 'हिन्दी' }
];

/* UI chrome */
const UI = {
  title:      ['Health Assessment', '健康评估', 'Evaluación de Salud', 'स्वास्थ्य मूल्यांकन'],
  step:       ['Step', '第', 'Paso', 'चरण'],
  of:         ['of', '步，共', 'de', 'का'],
  s1:         ['About You', '关于你', 'Sobre usted', 'आपके बारे में'],
  s2:         ['Symptoms', '症状', 'Síntomas', 'लक्षण'],
  s3:         ['Daily Habits', '日常习惯', 'Hábitos diarios', 'दैनिक आदतें'],
  next:       ['Continue →', '继续 →', 'Continuar →', 'आगे →'],
  back:       ['← Back', '← 返回', '← Atrás', '← पीछे'],
  submit:     ['Generate My Report →', '生成我的报告 →', 'Generar mi informe →', 'मेरी रिपोर्ट बनाएँ →'],
  why:        ['Why we ask', '为什么问这个', 'Por qué preguntamos', 'हम क्यों पूछते हैं'],
  optional:   ['optional', '选填', 'opcional', 'वैकल्पिक'],
  freqNever:  ['Never', '从不', 'Nunca', 'कभी नहीं'],
  freqOcc:    ['Occasionally', '偶尔', 'A veces', 'कभी-कभी'],
  freqOften:  ['Often', '经常', 'A menudo', 'अक्सर'],
  select:     ['Select...', '请选择...', 'Seleccione...', 'चुनें...'],
  stoolTitle: ['Bowel and Digestion', '排便与消化', 'Intestino y digestión', 'मल और पाचन'],
  stoolSub:   ['The most direct read on gut health there is, and the one people skip. Nothing here is embarrassing; it is just data.',
               '这是判断肠道健康最直接的依据，也是最常被跳过的部分。这里没有什么难为情的，都只是数据。',
               'La lectura más directa que existe sobre la salud intestinal, y la que la gente omite. Nada aquí es vergonzoso; son solo datos.',
               'आंत के स्वास्थ्य का सबसे सीधा संकेत, और वही जिसे लोग छोड़ देते हैं। यहाँ कुछ भी शर्मनाक नहीं है, यह केवल डेटा है।'],
  cycleTitle: ['Menstrual Cycle', '月经周期', 'Ciclo menstrual', 'मासिक चक्र'],
  redFlag:    ['Blood in stool, or black tarry stool, should be looked at by a doctor rather than a consultant. Please see a physician.',
               '便血或柏油样黑便应由医生处理，而非顾问。请去看医生。',
               'La sangre en las heces o las heces negras y alquitranadas deben ser evaluadas por un médico, no por un consultor. Consulte a un médico.',
               'मल में खून, या काला चिपचिपा मल, सलाहकार नहीं बल्कि डॉक्टर को दिखाना चाहिए। कृपया चिकित्सक से मिलें।']
};

/* Per-question help. Written to be genuinely informative rather than reassuring. */
const HELP = {
  'f-dob': ['Reference intakes differ by age, and several body-composition readings are interpreted against it. Metabolic age only means something next to your real age.',
            '参考摄入量按年龄不同，多项体成分指标也要对照年龄解读。代谢年龄只有和实际年龄比较才有意义。',
            'Las ingestas de referencia varían con la edad, y varias lecturas de composición corporal se interpretan en relación con ella.',
            'संदर्भ मात्राएँ उम्र के अनुसार बदलती हैं, और शरीर संरचना के कई माप इसी के सापेक्ष पढ़े जाते हैं।'],
  'f-gender': ['Reference intakes for iron, calcium and several B vitamins differ by sex, so this changes the amounts, not just the wording.',
               '铁、钙和多种B族维生素的参考摄入量按性别不同，所以这会改变用量，而不只是措辞。',
               'Las ingestas de referencia de hierro, calcio y varias vitaminas B difieren por sexo, así que esto cambia las cantidades.',
               'आयरन, कैल्शियम और कई बी विटामिनों की संदर्भ मात्राएँ लिंग के अनुसार भिन्न हैं।'],
  'f-weight': ['Protein requirement is calculated per kilogram of body weight, so without this the protein part of the plan is guesswork.',
               '蛋白质需要量按每公斤体重计算，没有这个数字，方案里蛋白质那部分就只能靠猜。',
               'El requerimiento de proteína se calcula por kilogramo de peso corporal.',
               'प्रोटीन की आवश्यकता शरीर के वज़न के प्रति किलोग्राम के हिसाब से निकाली जाती है।'],
  'f-visceralFat': ['Visceral fat sits around the organs and is the single reading that tracks metabolic risk. Total weight cannot see it, which is why a person can look fine and still read high.',
                    '内脏脂肪包在器官周围，是唯一能反映代谢风险的指标。体重看不出它，所以有人外表正常但这项偏高。',
                    'La grasa visceral rodea los órganos y es la lectura que sigue el riesgo metabólico. El peso total no puede verla.',
                    'आंतरिक वसा अंगों के आसपास होती है और यही चयापचय जोखिम को दर्शाती है। कुल वज़न इसे नहीं देख सकता।'],
  'f-protein': ['Body protein percentage is where a shortage shows up before you feel it. Below about 16% is low, and hair and nails are usually the first visible sign.',
                '身体蛋白质百分比是缺乏最早出现的地方，早于你的感觉。低于约16%偏低，头发和指甲通常是最先能看出来的。',
                'El porcentaje de proteína corporal es donde una carencia aparece antes de sentirla. Por debajo del 16% es bajo.',
                'शरीर में प्रोटीन प्रतिशत वह जगह है जहाँ कमी महसूस होने से पहले दिखती है। लगभग 16% से नीचे कम है।'],
  'f-water': ['Every clearance pathway runs on water: the kidneys, the gut, and moving what the liver has processed out of the body. This is usually the largest and cheapest gap to close.',
              '所有清除通路都靠水运行：肾脏、肠道，以及把肝脏处理完的废物排出体外。这通常是差距最大、也最不花钱就能补上的一项。',
              'Todas las vías de eliminación funcionan con agua: los riñones, el intestino, y sacar del cuerpo lo que el hígado ha procesado.',
              'शरीर के सभी निकासी मार्ग पानी पर चलते हैं: गुर्दे, आंत, और जिगर द्वारा संसाधित पदार्थ को बाहर निकालना।'],
  'f-produce': ['Vegetables and fruit are the only source of the plant compound families, and no capsule reproduces the full range. Count servings rather than estimating; almost everyone overestimates.',
                '蔬菜水果是植物化合物的唯一来源，没有任何胶囊能复制它的全部范围。请数份数而不是估计，几乎所有人都会高估。',
                'Las verduras y frutas son la única fuente de las familias de compuestos vegetales. Cuente las porciones en vez de estimarlas.',
                'सब्ज़ियाँ और फल पादप यौगिकों का एकमात्र स्रोत हैं। अनुमान लगाने के बजाय हिस्से गिनें।'],
  'f-coldFood': ['In this framework digestion runs on warmth, and consistently cold food and drink lowers its efficiency at the point where it starts. It is one of the most common causes of the digestive cluster.',
                 '在这套框架里消化靠温度运行，长期吃冷食冷饮会在消化起点上降低效率。这是消化类症状最常见的原因之一。',
                 'En este marco la digestión funciona con calor, y la comida y bebida fría constante reduce su eficiencia desde el inicio.',
                 'इस ढांचे में पाचन गर्मी पर चलता है, और लगातार ठंडा भोजन शुरुआत में ही इसकी क्षमता घटाता है।'],
  'f-breakfastFreq': ['The 7 to 9 AM window is when the digestive system is at its strongest, so a skipped breakfast is the meal that would have counted most.',
                      '上午7到9点是消化系统最强的时段（胃经当令），所以跳过的这一餐本来是最有价值的。',
                      'La ventana de 7 a 9 AM es cuando el sistema digestivo está más fuerte, así que el desayuno omitido es la comida que más habría contado.',
                      'सुबह 7 से 9 बजे की खिड़की में पाचन तंत्र सबसे मज़बूत होता है।'],
  'f-bedtime': ['Deep sleep is weighted toward the early part of the night, so a late bedtime cuts into it regardless of total hours slept.',
                '深睡集中在前半夜，所以睡得晚会切掉这部分，跟总睡眠时长无关。',
                'El sueño profundo se concentra en la primera parte de la noche, así que acostarse tarde lo recorta sin importar las horas totales.',
                'गहरी नींद रात के पहले हिस्से में केंद्रित होती है, इसलिए देर से सोना उसे काटता है।'],
  'f-waking13': ['The 1 to 3 AM window is when the liver does its heaviest processing. Waking in it consistently is read as information rather than as insomnia, and it connects to the eyes, emotional regulation and hormones.',
                 '凌晨1到3点是肝脏处理负荷最重的时段（肝经当令）。持续在这个时段醒来被视为一条信息而不是失眠，它和眼睛、情绪调节、激素都相连。',
                 'La ventana de 1 a 3 AM es cuando el hígado hace su procesamiento más pesado. Despertarse en ella se lee como información, no como insomnio.',
                 '1 से 3 बजे की खिड़की में जिगर सबसे भारी कार्य करता है। उस समय जागना जानकारी है, अनिद्रा नहीं।'],
  'f-supplements': ['List everything, including what you take irregularly. Knowing what you already take is what stops a recommendation duplicating it, and duplication is the most common way people overspend.',
                    '请全部列出，包括吃得不规律的。知道你已经在吃什么，才能避免重复推荐，而重复正是最常见的浪费钱的方式。',
                    'Liste todo, incluso lo que toma de forma irregular. Saber lo que ya toma evita duplicar una recomendación.',
                    'सब कुछ सूचीबद्ध करें, वह भी जो अनियमित रूप से लेते हैं। इससे सिफ़ारिश दोहराई नहीं जाएगी।'],
  'f-supplementFreq': ['Consistency usually matters more than the number of products. Four taken daily does more than ten taken sometimes.',
                       '规律性通常比产品数量更重要。每天吃四种，胜过偶尔吃十种。',
                       'La constancia suele importar más que el número de productos. Cuatro tomados a diario hacen más que diez tomados a veces.',
                       'निरंतरता आमतौर पर उत्पादों की संख्या से अधिक मायने रखती है।'],

  /* Bowel section */
  'f-bowelFreq': ['Once or twice a day with an easy pass is the target. Less than that and material is sitting too long; much more and it is moving through faster than it can be absorbed.',
                  '每天一到两次、排出顺畅是目标。少于这个，废物停留过久；明显多于这个，说明通过太快，来不及吸收。',
                  'Una o dos veces al día con paso fácil es el objetivo. Menos y el material permanece demasiado tiempo; mucho más y pasa antes de poder absorberse.',
                  'दिन में एक या दो बार आसानी से निकलना लक्ष्य है।'],
  'f-stoolForm': ['Form is a fibre and water readout. Hard pellets mean slow transit and too little fibre; loose means it is moving faster than the gut can work with. Smooth and soft is what the clearing stage is aiming at.',
                  '形状反映纤维和水分。硬球说明通过慢、纤维不足；稀软说明通过太快，肠道来不及处理。成形柔软正是"清"这一阶段的目标。',
                  'La forma es una lectura de fibra y agua. Los trozos duros indican tránsito lento y poca fibra; las heces sueltas indican que pasa demasiado rápido.',
                  'आकार फ़ाइबर और पानी का संकेत है। कठोर गोलियाँ धीमी गति और कम फ़ाइबर दर्शाती हैं।'],
  'f-stoolColor': ['Normal is medium to dark brown. Pale or clay-coloured can mean bile is not arriving, which points at the liver and gallbladder. Red or black needs a doctor, not a consultant.',
                   '正常是中到深棕色。灰白或陶土色可能说明胆汁没到位，指向肝胆。红色或黑色需要看医生，不是顾问能处理的。',
                   'Lo normal es marrón medio a oscuro. Pálido o color arcilla puede significar que la bilis no está llegando. Rojo o negro necesita un médico.',
                   'सामान्य मध्यम से गहरा भूरा है। पीला या मिट्टी जैसा रंग पित्त की कमी दर्शा सकता है। लाल या काला होने पर डॉक्टर को दिखाएँ।'],
  'f-stoolFloat': ['Stool that consistently floats and is hard to flush usually means fat is not being absorbed properly, which points at the pancreas, bile, or the small intestine lining.',
                   '大便持续漂浮、不易冲走，通常说明脂肪吸收不良，指向胰腺、胆汁或小肠黏膜。',
                   'Las heces que flotan de forma constante y son difíciles de descargar suelen indicar que la grasa no se está absorbiendo bien.',
                   'जो मल लगातार तैरता है, वह वसा के ठीक से न पचने का संकेत देता है।'],
  'f-stoolComplete': ['Feeling like it never finishes is a different problem from constipation, and it usually points at pelvic floor coordination or not enough bulk rather than at transit speed.',
                      '总觉得排不干净，和便秘是两回事，通常指向盆底协调或容积不足，而不是通过速度。',
                      'Sentir que nunca termina es un problema distinto del estreñimiento, y suele apuntar a la coordinación del suelo pélvico o a falta de volumen.',
                      'ऐसा लगना कि कभी पूरा नहीं होता, कब्ज़ से अलग समस्या है।'],
  'f-wiping': ['A single wipe means the stool was well formed. Repeated wiping usually means it was either too soft or evacuation did not complete, so this cross-checks the form answer above.',
               '一次擦净说明成形良好。反复擦拭通常说明太软或没排干净，所以这题是用来交叉验证上面形状那题的。',
               'Una sola limpieza significa que las heces estaban bien formadas. Limpiar repetidamente suele indicar que estaban demasiado blandas o que la evacuación no se completó.',
               'एक बार में साफ़ होना अच्छे आकार का संकेत है।'],
  'f-stoolOdor': ['A strong, distinctly foul smell usually reflects what the gut bacteria are being fed. A high meat and low plant intake shifts fermentation toward the products that smell worst.',
                  '气味特别难闻，通常反映肠道菌群吃的是什么。高肉低植物的饮食会让发酵产物往最臭的方向偏。',
                  'Un olor fuerte y claramente desagradable suele reflejar lo que están comiendo las bacterias intestinales.',
                  'तेज़ दुर्गंध आमतौर पर दर्शाती है कि आंत के बैक्टीरिया क्या खा रहे हैं।'],
  'f-undigested': ['Recognisable food in the stool, beyond things like corn and seeds which are normal, suggests the food is passing through faster than the enzymes can work on it.',
                   '大便里能认出食物原形（玉米、种子这类本来就正常，不算），说明食物通过速度快过消化酶的作用速度。',
                   'Comida reconocible en las heces, aparte del maíz y las semillas que es normal, sugiere que pasa más rápido de lo que las enzimas pueden actuar.',
                   'मल में पहचानने योग्य भोजन यह बताता है कि भोजन एंजाइमों के काम करने से तेज़ी से निकल रहा है।'],

  /* Cycle section */
  'f-cycleRegular': ['A regular cycle is one of the better general signals that hormones are clearing properly. Irregularity is common and is information, not an alarm.',
                     '周期规律是激素清除正常的较好整体信号之一。不规律很常见，它是信息，不是警报。',
                     'Un ciclo regular es una de las mejores señales generales de que las hormonas se están eliminando bien.',
                     'नियमित चक्र यह दर्शाता है कि हार्मोन ठीक से साफ़ हो रहे हैं।'],
  'f-menstrualPain': ['Cramping severity is largely set by prostaglandins, and prostaglandin balance follows the ratio of fats in the diet. That makes it one of the more changeable symptoms here.',
                      '痛经的严重程度主要由前列腺素决定，而前列腺素的平衡取决于饮食里脂肪的比例。所以这是本表里较容易改变的症状之一。',
                      'La intensidad de los cólicos depende en gran medida de las prostaglandinas, cuyo equilibrio sigue la proporción de grasas en la dieta.',
                      'ऐंठन की तीव्रता मुख्यतः प्रोस्टाग्लैंडिन से तय होती है।'],
  'f-heavyFlow': ['Heavy flow over years is the most common route to low iron, and low iron shows up as fatigue, brain fog and hair loss long before anything else.',
                  '长期经量大是缺铁最常见的路径，而缺铁会以疲劳、脑雾、掉发的形式出现，远早于其他表现。',
                  'El flujo abundante durante años es la vía más común hacia el hierro bajo, que aparece como fatiga, niebla mental y caída del cabello.',
                  'वर्षों तक अधिक रक्तस्राव आयरन की कमी का सबसे आम कारण है।'],
  'f-pmsMoodSwings': ['Premenstrual mood change tracks with how completely oestrogen is cleared after it has done its job, which is liver work rather than a purely reproductive matter.',
                      '经前情绪波动，和雌激素完成作用后被清除得是否彻底有关，这是肝脏的工作，而不纯粹是生殖系统的事。',
                      'El cambio de humor premenstrual sigue a qué tan completamente se elimina el estrógeno después de cumplir su función.',
                      'मासिक-पूर्व मूड परिवर्तन इस बात पर निर्भर करता है कि एस्ट्रोजन कितनी अच्छी तरह साफ़ होता है।']
};

/* New questions added to the last step. Options are [value, en, zh, es, hi]. */
const NEW_QUESTIONS = {
  stool: [
    { id: 'f-bowelFreq', label: ['How often do you have a bowel movement?', '你多久排便一次？', '¿Con qué frecuencia evacúa?', 'आप कितनी बार शौच जाते हैं?'],
      options: [
        ['3+ times a day', '3+ times a day', '每天3次以上', '3+ veces al día', 'दिन में 3+ बार'],
        ['1-2 times a day', '1–2 times a day', '每天1-2次', '1–2 veces al día', 'दिन में 1–2 बार'],
        ['Every other day', 'Every other day', '隔天一次', 'Cada dos días', 'हर दूसरे दिन'],
        ['2-3 times a week', '2–3 times a week', '每周2-3次', '2–3 veces por semana', 'सप्ताह में 2–3 बार'],
        ['Less than twice a week', 'Less than twice a week', '每周不到2次', 'Menos de dos veces por semana', 'सप्ताह में दो बार से कम']]},
    { id: 'f-stoolForm', label: ['What does it usually look like?', '通常是什么形状？', '¿Qué aspecto suele tener?', 'यह आमतौर पर कैसा दिखता है?'],
      options: [
        ['Separate hard lumps', 'Separate hard lumps, hard to pass', '一颗颗硬球，难排出', 'Trozos duros separados, difíciles de expulsar', 'अलग कठोर गोलियाँ'],
        ['Lumpy sausage', 'Sausage-shaped but lumpy', '香肠状但表面有块', 'Con forma de salchicha pero grumosa', 'सॉसेज जैसा पर गांठदार'],
        ['Cracked sausage', 'Sausage-shaped with cracks on the surface', '香肠状，表面有裂痕', 'Con forma de salchicha con grietas', 'सतह पर दरारों के साथ'],
        ['Smooth and soft', 'Smooth and soft, easy to pass', '光滑柔软，排出顺畅', 'Lisa y blanda, fácil de expulsar', 'चिकना और नरम'],
        ['Soft blobs', 'Soft blobs with clear edges', '软块，边缘清晰', 'Masas blandas con bordes definidos', 'नरम टुकड़े'],
        ['Mushy', 'Mushy with ragged edges', '糊状，边缘不整齐', 'Pastosa con bordes irregulares', 'गूदेदार'],
        ['Watery', 'Watery, no solid pieces', '水样，无固体', 'Acuosa, sin piezas sólidas', 'पानी जैसा']]},
    { id: 'f-stoolColor', label: ['What colour is it usually?', '通常是什么颜色？', '¿De qué color suele ser?', 'इसका रंग आमतौर पर क्या होता है?'],
      options: [
        ['Medium to dark brown', 'Medium to dark brown (typical)', '中到深棕色（常见）', 'Marrón medio a oscuro (típico)', 'मध्यम से गहरा भूरा (सामान्य)'],
        ['Light brown or yellow', 'Light brown or yellowish', '浅棕或偏黄', 'Marrón claro o amarillento', 'हल्का भूरा या पीला'],
        ['Green', 'Green', '绿色', 'Verde', 'हरा'],
        ['Pale or clay coloured', 'Pale, grey or clay coloured', '灰白或陶土色', 'Pálido, gris o color arcilla', 'पीला, धूसर या मिट्टी जैसा'],
        ['Very dark or black', 'Very dark or black', '很深或发黑', 'Muy oscuro o negro', 'बहुत गहरा या काला'],
        ['Red or blood present', 'Red, or blood present', '红色或带血', 'Rojo, o con sangre', 'लाल, या खून के साथ']]},
    { id: 'f-stoolFloat', label: ['Does it float or sink?', '是漂浮还是下沉？', '¿Flota o se hunde?', 'यह तैरता है या डूबता है?'],
      options: [
        ['Sinks', 'Sinks', '下沉', 'Se hunde', 'डूबता है'],
        ['Sometimes floats', 'Sometimes floats', '有时漂浮', 'A veces flota', 'कभी-कभी तैरता है'],
        ['Usually floats', 'Usually floats, hard to flush', '经常漂浮，不易冲走', 'Suele flotar, difícil de descargar', 'आमतौर पर तैरता है']]},
    { id: 'f-stoolComplete', label: ['Do you feel finished afterwards?', '排完后有排净的感觉吗？', '¿Siente que terminó?', 'क्या आपको पूरा होने का अनुभव होता है?'],
      options: [
        ['Yes, complete', 'Yes, feels complete', '有，觉得排干净了', 'Sí, se siente completo', 'हाँ, पूरा लगता है'],
        ['Sometimes incomplete', 'Sometimes feels incomplete', '有时觉得没排干净', 'A veces se siente incompleto', 'कभी-कभी अधूरा लगता है'],
        ['Usually incomplete', 'Usually feels incomplete', '经常觉得没排干净', 'Casi siempre incompleto', 'अक्सर अधूरा लगता है'],
        ['Need to strain', 'Have to strain a lot', '需要很用力', 'Tengo que esforzarme mucho', 'बहुत ज़ोर लगाना पड़ता है']]},
    { id: 'f-wiping', label: ['How many wipes, typically?', '通常擦几次？', '¿Cuántas limpiezas, normalmente?', 'आमतौर पर कितनी बार पोंछना पड़ता है?'],
      options: [
        ['1 wipe', '1 wipe', '1次', '1 vez', '1 बार'],
        ['2-3 wipes', '2–3 wipes', '2-3次', '2–3 veces', '2–3 बार'],
        ['4+ wipes', '4 or more wipes', '4次以上', '4 o más veces', '4 या अधिक बार']]},
    { id: 'f-stoolOdor', label: ['How strong is the smell?', '气味有多重？', '¿Qué tan fuerte es el olor?', 'गंध कितनी तेज़ है?'],
      options: [
        ['Mild', 'Mild', '轻微', 'Leve', 'हल्की'],
        ['Noticeable', 'Noticeable but normal', '明显但正常', 'Perceptible pero normal', 'ध्यान देने योग्य'],
        ['Strongly foul', 'Strongly foul', '非常难闻', 'Muy desagradable', 'बहुत तेज़ दुर्गंध']]},
    { id: 'f-undigested', label: ['Do you see undigested food in it?', '能看到未消化的食物吗？', '¿Ve comida sin digerir?', 'क्या आपको बिना पचा भोजन दिखता है?'],
      options: [
        ['No', 'No', '没有', 'No', 'नहीं'],
        ['Occasionally', 'Occasionally', '偶尔', 'A veces', 'कभी-कभी'],
        ['Often', 'Often', '经常', 'A menudo', 'अक्सर']]}
  ],
  cycle: [
    { id: 'f-cycleRegular', label: ['Is your cycle regular?', '你的周期规律吗？', '¿Su ciclo es regular?', 'क्या आपका चक्र नियमित है?'],
      options: [
        ['Regular', 'Regular', '规律', 'Regular', 'नियमित'],
        ['Irregular', 'Irregular', '不规律', 'Irregular', 'अनियमित'],
        ['No longer menstruating', 'No longer menstruating', '已绝经', 'Ya no menstrúo', 'अब मासिक नहीं होता']]},
    { id: 'f-menstrualPain', label: ['Period pain', '经期疼痛', 'Dolor menstrual', 'मासिक दर्द'],
      options: [
        ['None', 'None', '没有', 'Ninguno', 'कोई नहीं'],
        ['Mild', 'Mild', '轻微', 'Leve', 'हल्का'],
        ['Moderate', 'Moderate', '中等', 'Moderado', 'मध्यम'],
        ['Severe', 'Severe', '严重', 'Intenso', 'गंभीर']]},
    { id: 'f-heavyFlow', label: ['Heavy flow?', '经量大吗？', '¿Flujo abundante?', 'क्या रक्तस्राव अधिक है?'],
      options: [
        ['No', 'No', '否', 'No', 'नहीं'],
        ['Yes', 'Yes', '是', 'Sí', 'हाँ']]},
    { id: 'f-pmsMoodSwings', label: ['PMS mood swings?', '经前情绪波动？', '¿Cambios de humor premenstruales?', 'मासिक-पूर्व मूड बदलाव?'],
      options: [
        ['No', 'No', '否', 'No', 'नहीं'],
        ['Yes', 'Yes', '是', 'Sí', 'हाँ']]}
  ]
};

if (typeof module !== 'undefined') module.exports = { LANGS, UI, HELP, NEW_QUESTIONS };
