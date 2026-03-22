import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'aloe-vera-soap',
    name: {
      ta: 'அலோ வேரா சோப்பு',
      en: 'Aloe Vera Soap'
    },
    description: {
      ta: 'இயற்கையான முறையில் தயாரிக்கப்பட்ட அலோ வேரா சோப்பு.',
      en: 'Naturally prepared Aloe Vera soap for skin rejuvenation.'
    },
    benefits: {
      ta: [
        'கருமையை குறைத்தும் பளபளப்பை வழங்கும் மற்றும் அழகை அதிகரிக்கும்.',
        'வெயில் அல்லது எரிந்த சருமத்திற்கு மிகவும் இயற்கையான தீர்வு.',
        'தோல் வயதானதை எதிர்த்து போராடுகிறது (Vitamin C, E & Beta Carotene).',
        'வயதான எதிர்ப்பு பண்புகளை கொண்டுள்ளது.',
        'ஆண்டிமைக்ரோபியல் மற்றும் அழற்சி எதிர்ப்பு பண்புகளை கொண்டுள்ளது.',
        'சருமத்தில் உள்ள கறைகளை நீக்கவும், வயது வரிகளை குறைக்கவும் உதவுகிறது.',
        'தொற்று மற்றும் முகப்பருவை குறைக்கிறது.',
        'முகப்பருவால் அவதிப்படுவர்கள் அலோ வேறாவில் நிவாரணம் பெறுவார்கள்.',
        'இது மென்மையான சுத்திகரிப்புக்கு உதவுகிறது.',
        'சருமத்திற்கு எந்த சேதத்தையும் ஏற்படுத்தாமல் பருக்களை குணப்படுத்துகிறது.',
        'முகத்தில் உள்ள கறைகளை குறைக்கிறது.',
        'தோல் உயிரணு இன்பெருக்கத்தை அதிகரிக்கும், சிவப்பை குறைக்கும்.',
        'தோல் அழற்சியை எதிர்த்து போராடும் முடியும்.'
      ],
      en: [
        'Reduces darkness and provides glow, enhancing beauty.',
        'Natural solution for sun-damaged or burnt skin.',
        'Fights skin aging (Rich in Vitamin C, E & Beta Carotene).',
        'Has anti-aging properties.',
        'Has antimicrobial and anti-inflammatory properties.',
        'Helps remove skin blemishes and reduce age lines.',
        'Reduces infections and acne.',
        'Relief for acne sufferers.',
        'Helps in gentle cleansing.',
        'Heals pimples without damaging skin.',
        'Reduces facial blemishes.',
        'Increases skin cell reproduction and reduces redness.',
        'Fights skin inflammation.'
      ]
    },
    price: 120,
    image: 'https://picsum.photos/seed/aloe/400/400',
    category: 'skincare',
    size: '100gm'
  },
  {
    id: 'red-sandal-honey-soap',
    name: {
      ta: 'சிவப்பு சந்தனம் & தேன் சோப்பு',
      en: 'Red Sandal & Honey Soap'
    },
    description: {
      ta: 'கருமை, மங்கு மற்றும் முகப்பருவுக்கு மிகவும் பயனுள்ளதாக இருக்கும்.',
      en: 'Highly effective for pigmentation, blemishes, and acne.'
    },
    benefits: {
      ta: [
        'குளிர்ச்சியான பண்புகளால் படுப்பு மற்றும் கருமையை ஆற்றி உதவுகிறது.',
        'தோல் செல்களுக்கு ஊட்டச்சத்து அளிக்கிறது.',
        'சருமத்தின் சுரப்பை சீராக்க உதவுகிறது மற்றும் துளைகளை இறுக்கமாக்குகிறது.',
        'முகப்பரு மற்றும் முகப்பரு வடுக்கள் மற்றும் எரிச்சலைக் குறைக்க உதவுகிறது.',
        'சருமத்தை புத்துணர்ச்சியுடன் உணர வைக்கிறது.',
        'கரும்புள்ளிகளை அகற்றி உதவுகிறது மற்றும் நிறமியை குறைக்கிறது.',
        'சிவப்பு சந்தனம் சூரிய ஒளியினால் ஏற்பட்ட கருமையை குறைக்க உதவுகிறது.',
        'மென்மையான மற்றும் ஒளிரும் தோல் உண்டாகும்.',
        'இயற்கையாக சருமத்தை ஒளிர செய்யும் பண்புகள் உள்ளன.'
      ],
      en: [
        'Cooling properties help soothe and reduce darkness.',
        'Provides nutrition to skin cells.',
        'Regulates skin secretions and tightens pores.',
        'Helps reduce acne, scars, and irritation.',
        'Makes skin feel refreshed.',
        'Removes blackheads and reduces pigmentation.',
        'Reduces sun tan effectively.',
        'Results in soft and glowing skin.',
        'Contains natural skin brightening properties.'
      ]
    },
    price: 150,
    image: 'https://picsum.photos/seed/sandal/400/400',
    category: 'skincare',
    size: '100gm'
  },
  {
    id: 'honey-amla',
    name: {
      ta: 'தேன் நெல்லிக்காய் (Honey Amla)',
      en: 'Honey Amla (Immunity Booster)'
    },
    description: {
      ta: 'இயற்கையின் நன்மைகள் நிரம்பிய சிறந்த கலவை!',
      en: 'A perfect blend packed with nature\'s goodness!'
    },
    benefits: {
      ta: [
        'உடல் நலனுக்கான சக்திவாய்ந்த சத்துக்களின் மூலம்.',
        'நோய் எதிர்ப்பு சக்தியை அதிகரிக்கும்.',
        'தூய தேன் மற்றும் ஊட்டச்சத்து நிறைந்த நெல்லிக்காயின் கலவை.'
      ],
      en: [
        'Powerful source of nutrients for overall health.',
        'Boosts immunity naturally.',
        'Combination of pure honey and nutrient-rich Amla (Indian Gooseberry).'
      ]
    },
    price: 280,
    image: 'https://picsum.photos/seed/honeyamla/400/400',
    category: 'wellness',
    size: '250gm'
  },
  {
    id: 'markandeya-ilagam',
    name: {
      ta: 'மார்க்கண்டேய லேகியம்',
      en: 'Markandeya Ilagam'
    },
    description: {
      ta: 'உடல் வலிமை மற்றும் நரம்பு ஊக்கத்திற்கான பாரம்பரிய லேகியம்.',
      en: 'Traditional herbal jam for body strength and nerve health.'
    },
    benefits: {
      ta: [
        'கை, கால் மூட்டுக்கு சக்தியை அளித்து வலிகளை போக்கும்.',
        'மெலிந்த உடலை தேற்றும் மற்றும் நரம்புகளுக்கு ஊக்கம் அளிக்கும்.',
        'நோய் எதிர்ப்பு சக்தியை அதிகரித்து உடலுக்கு நல்ல வலிமையை தரும்.',
        'தாது உற்பத்தியை அதிகரிக்கும்.',
        'உடற்பயிற்சி செய்வோருக்கு இது ஒரு இயற்கை ஊக்கியாகும்.'
      ],
      en: [
        'Strengthens joints and relieves limb pain.',
        'Nourishes thin bodies and boosts nerve health.',
        'Increases immunity and provides overall body strength.',
        'Improves vital fluid production.',
        'Natural booster for those who exercise.'
      ]
    },
    ingredients: {
      ta: ['பாதாம்', 'பிஸ்தா', 'முந்திரி', 'திராட்சை', 'அமுக்கரா', 'ஜாதிக்காய்', 'பூசணி விதை'],
      en: ['Almond', 'Pistachio', 'Cashew', 'Raisins', 'Ashwagandha', 'Nutmeg', 'Pumpkin Seeds']
    },
    price: 450,
    image: 'https://picsum.photos/seed/herbal/400/400',
    category: 'health',
    size: '500gm'
  },
  {
    id: 'gulkand',
    name: {
      ta: 'குல்கந்து - பன்னீர் ரோஜா',
      en: 'Gulkand – Panner Rose'
    },
    description: {
      ta: 'உடல் சூட்டை தணிக்கும் சுவையான குல்கந்து.',
      en: 'Delicious Gulkand to reduce body heat.'
    },
    benefits: {
      ta: [
        'நச்சு அகற்றியாக செயல்படுகிறது.',
        'உடல் சூடு மற்றும் முகச் சுருக்கத்தை நீக்குகிறது.',
        'நெஞ்செரிச்சல் மற்றும் செரிமான சிக்கல்களை சரி செய்யும்.',
        'உடல் துர்நாற்றத்தை போக்கும்.'
      ],
      en: [
        'Acts as a natural detoxifier.',
        'Reduces body heat and prevents facial wrinkles.',
        'Relieves heartburn and digestive issues.',
        'Reduces body odor.'
      ]
    },
    price: 180,
    image: 'https://picsum.photos/seed/rose/400/400',
    category: 'wellness',
    size: '250gm'
  },
  {
    id: 'foot-crack-cream',
    name: {
      ta: 'பாதவெடிப்பு களிம்பு',
      en: 'Foot Crack Cream'
    },
    description: {
      ta: 'பாத வெடிப்புகளை குணமாக்கும் சிறந்த களிம்பு.',
      en: 'Effective cream for healing cracked heels.'
    },
    benefits: {
      ta: [
        'பாத வெடிப்புகளை விரைவாக குணமாக்கும்.',
        'சருமத்தை மென்மையாக்கும்.'
      ],
      en: [
        'Heals foot cracks quickly.',
        'Softens the skin on heels.'
      ]
    },
    usage: {
      ta: 'கால் பாதத்தை கழுவி காயவிட்டு, களிமையை மிதமாக தேய்க்கவும். தினமும் பயன்படுத்தவும்.',
      en: 'Wash and dry feet, apply cream moderately on cracks. Use daily.'
    },
    price: 95,
    image: 'https://picsum.photos/seed/foot/400/400',
    category: 'skincare',
    size: '20gm'
  },
  {
    id: 'akil-bathing-powder',
    name: {
      ta: 'அகில் குளியல் பொடி',
      en: 'Akil Bathing Powder'
    },
    description: {
      ta: 'அகில் குளியல் பொடி நமது தோலையும் அதன் மேல் படிந்துள்ள அழுக்குகள் கிருமிகளை அகற்றி உதவுகிறது.',
      en: 'Akil bathing powder helps remove dirt and germs from the skin.'
    },
    benefits: {
      ta: [
        'நம் தோலில் உள்ள இறந்த அணுக்களையும், அழுக்குகளையும் நீக்குகிறது.',
        'தோல் துவாரங்களை சுருங்கச் செய்கிறது.',
        'முகப்பரு, எண்ணெய் சருமம், கருமை, கறைகளை சரி செய்கிறது.',
        'சருமத்தை ஆழமாக சுத்தப்படுத்துகிறது.',
        'வறண்ட மற்றும் சேதமடைந்த சருமத்தை புத்துயிர் பெற செய்கிறது.',
        'சருமத்தை இறுக்கமாகவும், உறுதியானதாகவும் ஆக்குகிறது.',
        'தேமல், புண், அரிப்பு போன்ற தோல் நோய்களுக்கு பயன்படுகிறது.'
      ],
      en: [
        'Removes dead cells and dirt from the skin.',
        'Shrinks skin pores.',
        'Corrects acne, oily skin, darkness, and blemishes.',
        'Deeply cleanses the skin.',
        'Revitalizes dry and damaged skin.',
        'Makes skin tight and firm.',
        'Used for skin diseases like itching and sores.'
      ]
    },
    ingredients: {
      ta: ['அகில் பட்டை', 'சந்தனம்', 'கஸ்தூரி மஞ்சள்', 'கருஞ்சீரகம்', 'வெட்டிவேர்', 'ரோஜா மொட்டு', 'சிறு பருப்பு', 'வெள்ளை உளுந்து'],
      en: ['Akil Bark', 'Sandalwood', 'Wild Turmeric', 'Black Cumin', 'Vetiver', 'Rose Bud', 'Moong Dal', 'White Urad Dal']
    },
    price: 160,
    image: 'https://picsum.photos/seed/akil/400/400',
    category: 'skincare',
    size: '100gm'
  },
  {
    id: 'avarampoo-drink',
    name: {
      ta: 'ஆவாரம் பூ பானம்',
      en: 'Avarampoo Drink'
    },
    description: {
      ta: 'ஆவாரம் பூ தேநீர் ஒரு அற்புதமான மூலிகை பானம் மற்றும் குறிப்பாக நீரிழிவு நோயாளிகளுக்கு மகத்தான ஆரோக்கிய நன்மைகளை கொண்டுள்ளது.',
      en: 'Avarampoo tea is a wonderful herbal drink with immense health benefits, especially for diabetics.'
    },
    benefits: {
      ta: [
        'நீரிழிவு நோயாளிகளுக்கு மிகவும் நல்லது.',
        'உடல் சூட்டை தணிக்கும்.',
        'சருமத்திற்கு பொலிவு தரும்.'
      ],
      en: [
        'Very beneficial for diabetics.',
        'Reduces body heat.',
        'Gives a natural glow to the skin.'
      ]
    },
    price: 140,
    image: 'https://picsum.photos/seed/avaram/400/400',
    category: 'wellness',
    size: '100gm'
  },
  {
    id: 'face-elixir',
    name: {
      ta: 'பேஸ் எலிக்சர் (Face Elixir)',
      en: 'Face Elixir'
    },
    description: {
      ta: 'சரும பொலிவு மற்றும் கரும்புள்ளி நீக்கத்திற்கான சீரம்.',
      en: 'Serum for skin glow and dark spot removal.'
    },
    benefits: {
      ta: [
        'தோல் பிரகாசம் மற்றும் கரும்புள்ளி நீக்கம்.',
        'சமமான நிறமாக்குதல் மற்றும் சூரிய ஒளி பாதிப்பு சரி செய்தல்.',
        'மென்மையான கறை மற்றும் தழும்பு இல்லாத தோல்.',
        'கண்களைச் சுற்றி கருவளையத்தை சரி செய்கிறது.'
      ],
      en: [
        'Skin brightening and dark spot removal.',
        'Even skin tone and sun damage repair.',
        'Smooth, blemish-free and scar-free skin.',
        'Corrects dark circles around eyes.'
      ]
    },
    price: 350,
    image: 'https://picsum.photos/seed/elixir/400/400',
    category: 'skincare',
    size: '30ml'
  },
  {
    id: 'hair-oil',
    name: {
      ta: 'முதியார் கூந்தல் தைலம்',
      en: 'Muthiyar Koonthal Hair Oil'
    },
    description: {
      ta: '100% இயற்கை மூலிகை கூந்தல் எண்ணெய்.',
      en: '100% Natural herbal hair oil.'
    },
    benefits: {
      ta: [
        'முடி உதிர்தல் மற்றும் பொடுகு தொல்லையை நீக்கும்.',
        'முடி அடர்த்தி மற்றும் நீள வளர்ச்சியை தூண்டும்.',
        'முடி வேர்களை பலப்படுத்தும்.',
        'பட்டு போல மென்மையான கூந்தலை தரும்.'
      ],
      en: [
        'Prevents hair fall and dandruff.',
        'Promotes hair thickness and length.',
        'Strengthens hair roots.',
        'Provides silky smooth hair.'
      ]
    },
    price: 320,
    image: 'https://picsum.photos/seed/hairoil/400/400',
    category: 'haircare',
    size: '500ml'
  },
  {
    id: 'butterfly-pea-drink',
    name: {
      ta: 'சங்குப்பூ பானம்',
      en: 'Butterfly Pea Flower Drink'
    },
    description: {
      ta: 'மன அமைதி மற்றும் ஆரோக்கியத்திற்கான மூலிகை பானம்.',
      en: 'Herbal drink for mental peace and health.'
    },
    benefits: {
      ta: [
        'மன இறுக்கம் மற்றும் குழப்பங்களை நீக்க உதவும்.',
        'சரும ஆரோக்கியம் மற்றும் முடி வளர்ச்சிக்கு உதவும்.',
        'நினைவுத்திறன் மற்றும் இதய ஆரோக்கியத்தை மேம்படுத்தும்.',
        'செரிமானத்தை எளிதாக்குகிறது.'
      ],
      en: [
        'Helps relieve stress and mental confusion.',
        'Supports skin health and hair growth.',
        'Improves memory and heart health.',
        'Eases digestion.'
      ]
    },
    price: 190,
    image: 'https://picsum.photos/seed/bluepea/400/400',
    category: 'wellness',
    size: '250gm'
  },
  {
    id: 'jamun-seed-drink',
    name: {
      ta: 'நாவல் விதை பானம்',
      en: 'Jamun Seed Drink'
    },
    description: {
      ta: 'நீரிழிவு நோய்க்கு சிறந்த இயற்கை மருந்து.',
      en: 'Excellent natural remedy for diabetes.'
    },
    benefits: {
      ta: [
        'நீரிழிவு நோய்க்கு அருமருந்து.',
        'கணையத்தில் இன்சுலின் சுரப்பை சீராக்கும்.',
        'இரத்த அழுத்தம் மற்றும் இரத்த சுத்திகரிப்புக்கு உதவும்.',
        'கை, கால் மரத்துபோவதை சரி செய்யும்.'
      ],
      en: [
        'Great remedy for diabetes.',
        'Regulates insulin secretion in the pancreas.',
        'Helps with blood pressure and blood purification.',
        'Fixes numbness in limbs.'
      ]
    },
    price: 220,
    image: 'https://picsum.photos/seed/jamun/400/400',
    category: 'health',
    size: '250gm'
  },
  {
    id: 'moringa-powder',
    name: {
      ta: 'முருங்கை அன்னப்பொடி',
      en: 'Moringa Annapodi'
    },
    description: {
      ta: 'ஊட்டச்சத்து நிறைந்த முருங்கை இலை பொடி.',
      en: 'Nutrient-rich Moringa leaf powder.'
    },
    benefits: {
      ta: [
        'வைட்டமின்கள் ஏ, சி மற்றும் ஈ நிறைந்தது.',
        'நோயெதிர்ப்பு சக்தி வேண்டுவோருக்கு அருமையான உணவு பொருள்.',
        'உடலுக்கு தேவையான ஒட்டுமொத்த ஊட்டச்சத்தையும் அளிக்கிறது.',
        'செரிமானத்தை மேம்படுத்துகிறது.',
        'உளுந்து மற்றும் கரிவேப்பிலையின் நன்மைகள் கொண்டது.'
      ],
      en: [
        'Rich in Vitamins A, C, and E.',
        'Excellent food for boosting immunity.',
        'Provides overall nutrition to the body.',
        'Improves digestion.',
        'Contains benefits of Urad Dal and Curry Leaves.'
      ]
    },
    ingredients: {
      ta: ['முருங்கை இலை தூள்', 'மிளகு', 'தேங்காய் உலுந்து', 'கரிவேப்பிலை', 'வெந்தயம்', 'பூண்டு', 'கொத்தமல்லி', 'காயம்', 'புளி', 'எள்'],
      en: ['Moringa Leaf Powder', 'Pepper', 'Coconut Urad Dal', 'Curry Leaves', 'Fenugreek', 'Garlic', 'Coriander', 'Asafoetida', 'Tamarind', 'Sesame']
    },
    price: 415,
    image: 'https://picsum.photos/seed/moringa/400/400',
    category: 'health',
    size: '200gm'
  },
  {
    id: 'palmyra-mix',
    name: {
      ta: 'பனை முளை மிக்ஸ்',
      en: 'Palmyra Sprout Mix'
    },
    description: {
      ta: 'அதிக புரதச்சத்து கொண்ட பனை முளை பானம்.',
      en: 'High protein Palmyra sprout health mix.'
    },
    benefits: {
      ta: [
        'அதிக புரதச்சத்து மற்றும் இரும்புச் சத்து நிறைந்தது.',
        'செரிமானத்தை மேம்படுத்துகிறது மற்றும் மலச்சிக்கலைத் தடுக்கும்.',
        'ஃபோலேட் (Folic Acid) சத்து நிறைந்தது.',
        'இதய நோய் பிரச்சனைகளை குறைக்க உதவும்.',
        'எலும்புகளை பலப்படுத்துகிறது.',
        'இரத்த ஓட்டத்தை மேம்படுத்துகிறது.',
        'உடல் சூட்டை கட்டுப்படுத்துகிறது.'
      ],
      en: [
        'High in protein and iron.',
        'Improves digestion and prevents constipation.',
        'Rich in Folate (Folic Acid).',
        'Helps reduce heart disease risks.',
        'Strengthens bones.',
        'Improves blood circulation.',
        'Controls body heat.'
      ]
    },
    usage: {
      ta: '1 டேபிள் ஸ்பூன் மிக்ஸை ஒரு கப் சூடான பால் அல்லது புதிய தேங்காய் பாலில் கலந்து குடிக்கவும். தேவையான அளவு பனை சர்க்கரை அல்லது கரும்பு வெல்லப் பொடி சேர்க்கலாம்.',
      en: 'Mix 1 tbsp in a cup of hot milk or fresh coconut milk. Add palm sugar or jaggery as needed.'
    },
    price: 260,
    image: 'https://picsum.photos/seed/palmyra/400/400',
    category: 'health',
    size: '400gm'
  }
];
