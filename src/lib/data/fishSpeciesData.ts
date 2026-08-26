import { FishSpecies } from "@/types/species";

export const FISH_SPECIES_DATA: FishSpecies[] = [
  {
    "id": "aji",
    "name": "マアジ (鯵)",
    "kana": "まあじ",
    "scientificName": "Trachurus japonicus",
    "category": "popular_coastal",
    "description": "堤防釣りの主役にして最高の大衆魚。サビキ釣りで数釣り、ルアー（アジング）でゲーム性の高い繊細な駆け引きが楽しめます。",
    "habitat": "沿岸の港湾・堤防・サーフ・沖合の回遊ルート",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層付近（夜間やマズメは表層に浮くことも）",
    "averageSize": "15cm〜25cm (尺アジ30cm以上、メガアジ40cm)",
    "recordSize": "52cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・たたき",
      "アジフライ",
      "なめろう",
      "南蛮漬け",
      "塩焼き"
    ],
    "recommendedRigs": [
      "サビキ釣り",
      "ジグ単アジング",
      "キャロライナリグ",
      "カゴ釣り"
    ],
    "bestTime": "朝マズメ・夕マズメ・夜間（常夜灯の明暗部）",
    "favoriteBaits": [
      "アミエビ",
      "オキアミ",
      "ピンテールワーム 1.5〜2.5inch",
      "青イソメ"
    ],
    "fishingTips": "サビキでは底を取ってから少し巻き上げ、コマセカゴをシャープに振って煙幕の中に同調させるのがコツ。アジングでは1g前後のジグヘッドでカウントダウンし、アタリを感じたら即アワセ。",
    "isDangerous": false
  },
  {
    "id": "iwashi",
    "name": "マイワシ / カタクチイワシ / ウルメイワシ (鰯)",
    "kana": "まいわし / かたくちいわし",
    "scientificName": "Sardinops melanostictus",
    "category": "popular_coastal",
    "description": "海の生態系を支える代表的な大衆魚。春から秋にかけて堤防に巨大な群れで押し寄せ、サビキ釣りで子どもから大人まで誰でも大漁が狙えます。鮮度抜群の刺身や梅煮、フライは絶品。",
    "habitat": "沿岸全域・港湾・堤防・サーフ・沖合",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（キラキラと群れをなして遊泳）",
    "averageSize": "10cm〜20cm",
    "recordSize": "28cm",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・なめろう（当日釣りたて限定）",
      "イワシのフライ",
      "生姜梅煮",
      "オイルサーディン",
      "蒲焼き"
    ],
    "recommendedRigs": [
      "サビキ釣り (2〜5号)",
      "トリックサビキ",
      "ウルトラライトジギング"
    ],
    "bestTime": "朝夕マズメ・日中の潮が動く時間帯",
    "favoriteBaits": [
      "アミエビ",
      "ピンクスキンサビキ",
      "シラスワーム"
    ],
    "fishingTips": "口が柔らかくバレやすいため、強くアワセずにゆっくり巻き上げます。魚体が痛むのが極めて早いため、釣れたら即座に氷水（潮氷）に入れて鮮度を保ちましょう。",
    "isDangerous": false
  },
  {
    "id": "sayori",
    "name": "サヨリ (細魚 / 針魚)",
    "kana": "さより",
    "scientificName": "Hyporhamphus sajori",
    "category": "popular_coastal",
    "description": "銀色に光る細長い魚体と下アゴの紅い針が特徴の秋・冬の風物詩。表層を群れで泳ぎ、専用カゴウキ仕掛けで狙うスリリングな数釣りと、透き通る上品な白身が魅力。",
    "habitat": "潮通しの良い堤防外側・海釣り公園・波止・港内",
    "waterLayer": "surface",
    "waterLayerText": "極めて表層（水面直下0〜50cm）",
    "averageSize": "18cm〜25cm (30cm以上は「カンヌキ」と呼ばれる)",
    "recordSize": "42cm",
    "activeMonths": [
      9,
      10,
      11,
      12,
      1,
      2,
      3
    ],
    "peakMonths": [
      10,
      11,
      12
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・細造り（絶品）",
      "天ぷら",
      "塩焼き",
      "フライ",
      "干物・骨せんべい"
    ],
    "recommendedRigs": [
      "サヨリ専用カゴウキ仕掛け",
      "飛ばしウキ仕掛け",
      "トリックサビキ"
    ],
    "bestTime": "日中（朝マズメ〜日中の晴天時）・満潮前後の潮の緩い時間",
    "favoriteBaits": [
      "アミエビ（サシエ用小粒）",
      "オキアミ極小",
      "イカの切り身（米粒大）",
      "ジャリメ極小"
    ],
    "fishingTips": "仕掛けを遠投後、リールをゆっくり巻きながら波紋を立ててサヨリを誘います。シモリウキが横に走ったら手首を返すように軽くアワセを入れます。腹膜の黒皮は苦味があるため調理時に必ず除去。",
    "isDangerous": false
  },
  {
    "id": "konoshiro",
    "name": "コノシロ / コハダ (鮗)",
    "kana": "このしろ / こはだ",
    "scientificName": "Nematalosa japonica",
    "category": "popular_coastal",
    "description": "江戸前寿司の代表ネタ「シンコ・コハダ」の成魚。東京湾や内湾に多く、秋〜冬にサビキ釣りで大群がヒット。独特の旨味と酢締め（酢コノシロ）が絶品。",
    "habitat": "内湾・港湾・汽水域・河口付近",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（大群で海底付近を泳ぐ）",
    "averageSize": "15cm〜25cm (20cm以上でコノシロ)",
    "recordSize": "33cm",
    "activeMonths": [
      9,
      10,
      11,
      12,
      1,
      2,
      3
    ],
    "peakMonths": [
      10,
      11,
      12,
      1
    ],
    "difficulty": 1,
    "edibleRating": 4,
    "cookingMethods": [
      "酢締め（コハダ・コノシロ握り）",
      "南蛮漬け",
      "唐揚げ",
      "つみれ汁",
      "塩焼き"
    ],
    "recommendedRigs": [
      "サビキ釣り (ハゲ皮/ママカリサビキ 5〜7号)",
      "トリックサビキ",
      "引っ掛け釣り"
    ],
    "bestTime": "日中〜夕マズメ・満潮前後",
    "favoriteBaits": [
      "アミエビ",
      "集魚板付きサビキ"
    ],
    "fishingTips": "小骨が多いため、食べる際は丁寧に骨切りをするか、酢でしっかり締めて骨を柔らかくするのがコツ。サビキ針は少し大きめの6〜7号が外れにくくおすすめ。",
    "isDangerous": false
  },
  {
    "id": "sappa",
    "name": "サッパ / ママカリ (簑葉魚)",
    "kana": "さっぱ / ままかり",
    "scientificName": "Sardinella zunasi",
    "category": "popular_coastal",
    "description": "「あまりの美味さに隣の家から飯（ママ）を借りてまで食べた」ことから「ママカリ」の名で親しまれる内湾の定番小魚。サビキ釣りで鈴なりに釣れるファミリーフィッシングの味方。",
    "habitat": "内湾・港湾岸壁・運河・河口域",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層",
    "averageSize": "10cm〜15cm",
    "recordSize": "20cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 4,
    "cookingMethods": [
      "ママカリの酢漬け（岡山名物）",
      "唐揚げ",
      "南蛮漬け",
      "素揚げ（塩レモン）"
    ],
    "recommendedRigs": [
      "ママカリサビキ (4〜6号)",
      "トリックサビキ",
      "小型サビキ仕掛け"
    ],
    "bestTime": "日中〜夕マズメ・上げ潮時",
    "favoriteBaits": [
      "アミエビ",
      "白スキン/ピンクスキンサビキ"
    ],
    "fishingTips": "ギラギラと光るフラッシャーサビキに好反応。表層に群れが見えるときはカゴを浅いタナに合わせてコマセを撒くと入れ食いになります。下処理でウロコと頭・ワタを取り、酢漬けにすると骨まで柔らか。",
    "isDangerous": false
  },
  {
    "id": "kamasu",
    "name": "アカカマス / ヤマトカマス (梭子魚)",
    "kana": "あかかます / やまとかます",
    "scientificName": "Sphyraena pinguis",
    "category": "popular_coastal",
    "description": "鋭い歯と獰猛なフィッシュイーター気質を持つ回遊魚。ルアー（小型ミノーやジグ単）やカマスサビキに果敢にアタックし、干物や塩焼きの旨味は魚類屈指。",
    "habitat": "港湾・堤防・テトラ帯・潮通しの良い湾内・サーフ",
    "waterLayer": "middle",
    "waterLayerText": "中層〜表層（朝夕マズメや夜間は常夜灯周りに集まる）",
    "averageSize": "20cm〜30cm (40cm以上はアラハダ)",
    "recordSize": "48cm",
    "activeMonths": [
      7,
      8,
      9,
      10,
      11,
      12,
      1
    ],
    "peakMonths": [
      8,
      9,
      10,
      11
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "カマスの塩焼き（皮目が極上）",
      "自家製一夜干し",
      "炙り刺身",
      "天ぷら・フライ"
    ],
    "recommendedRigs": [
      "ライトソルトルアー (小型シンペン/ミノー)",
      "ジグヘッドワーム (3〜7g)",
      "カマス専用サビキ",
      "ウキ釣り（キビナゴ）"
    ],
    "bestTime": "朝夕マズメ・夜間の常夜灯周り・上げ潮",
    "favoriteBaits": [
      "小型ミノー・シンペン (5〜7cm)",
      "ピンテールワーム",
      "キビナゴ",
      "フラッシャーサビキ"
    ],
    "fishingTips": "歯がカミソリのように鋭いため、フロロカーボンリーダー（3〜4号）を長めに取るかバイトリーダーを結束。ただ巻きや軽いトゥイッチでリアクションバイトを誘います。",
    "isDangerous": true,
    "dangerNotes": "鋭い歯で指を切る恐れがあります。針を外す際は必ずフィッシュグリップとプライヤーを使用してください。"
  },
  {
    "id": "mebaru",
    "name": "メバル (目張)",
    "kana": "めばる",
    "scientificName": "Sebastes inermis",
    "category": "popular_coastal",
    "description": "「春告げ魚」とも呼ばれ、クリッとした大きな目が特徴のロックフィッシュ。夜間の繊細なメバリングやウキ釣りで人気。",
    "habitat": "海藻帯（藻場）・テトラポッド・常夜灯周り・敷石の隙間",
    "waterLayer": "middle",
    "waterLayerText": "表層〜中層（海藻の上やストラクチャーの陰）",
    "averageSize": "15cm〜25cm (尺メバル30cm以上)",
    "recordSize": "36cm",
    "activeMonths": [
      11,
      12,
      1,
      2,
      3,
      4,
      5
    ],
    "peakMonths": [
      12,
      1,
      2,
      3,
      4
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "煮付け",
      "刺身",
      "塩焼き",
      "アクアパッツァ",
      "唐揚げ"
    ],
    "recommendedRigs": [
      "ジグ単メバリング (0.5〜1.5g)",
      "マイクロプラグ",
      "ウキ釣り（青イソメ・モエビ）",
      "フロートリグ"
    ],
    "bestTime": "日没後の夜間（満潮前後の潮が動くタイミング）",
    "favoriteBaits": [
      "ストレートワーム",
      "モエビ（シラサエビ）",
      "青イソメ",
      "小型シンペン"
    ],
    "fishingTips": "視力が非常に良いため、細いリーダー（0.8号前後）を使用。リールを1秒に1回転以下のデッドスローでただ巻きするのが基本テクニック。",
    "isDangerous": false
  },
  {
    "id": "seabass",
    "name": "スズキ / シーバス / セイゴ / フッコ / ハネ (鱸)",
    "kana": "すずき / しーばす / せいご / ふっこ / はね",
    "scientificName": "Lateolabrax japonicus",
    "category": "popular_coastal",
    "description": "ルアーフィッシング最高峰のターゲット。エラ洗いの豪快なファイトと都市部河口から地磯まで狙える身近さが魅力。",
    "habitat": "河口・運河・港湾・堤防・サーフ・磯（ヒラスズキ）",
    "waterLayer": "all",
    "waterLayerText": "全層（ベイトの泳ぐレンジに同調）",
    "averageSize": "40cm〜70cm (ランカー80cm以上)",
    "recordSize": "103cm",
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      4,
      5,
      9,
      10,
      11
    ],
    "difficulty": 3,
    "edibleRating": 4,
    "cookingMethods": [
      "ムニエル",
      "洗い（刺身）",
      "ポワレ",
      "昆布締め",
      "塩焼き"
    ],
    "recommendedRigs": [
      "ミノー・シンペンルアー",
      "バイブレーション",
      "ワームジグヘッド",
      "エビ撒き釣り"
    ],
    "bestTime": "ナイトゲーム・朝夕マズメ・雨後の濁り時・潮の下げ始め",
    "favoriteBaits": [
      "ミノー (9〜14cm)",
      "シンキングペンシル",
      "鉄板バイブ",
      "シラサエビ"
    ],
    "fishingTips": "明暗の境目、橋脚のヨレ、潮目、ブレイクラインなどの「変化」にルアーを流し込み、違和感のないドリフトで食わせます。",
    "isDangerous": false
  },
  {
    "id": "kurodai",
    "name": "クロダイ / チヌ",
    "kana": "くろだい / ちぬ",
    "scientificName": "Acanthopagrus schlegelii",
    "category": "popular_coastal",
    "description": "警戒心が強く知能の高い「海の王者」。フカセ釣り・落とし込み（ヘチ釣り）・紀州釣り・チニングなど多彩な釣法が存在。",
    "habitat": "港湾岸壁・テトラ・汽水域河口・磯・サーフ",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層（障害物際）",
    "averageSize": "30cm〜45cm (年無し50cm以上)",
    "recordSize": "63cm",
    "activeMonths": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      3,
      4,
      5,
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 4,
    "cookingMethods": [
      "刺身",
      "カルパッチョ",
      "鯛めし",
      "塩焼き",
      "ポワレ"
    ],
    "recommendedRigs": [
      "ウキフカセ釣り",
      "ヘチ・落とし込み釣り",
      "チニング（フリーリグ/ポッパー）",
      "ダンゴ釣り"
    ],
    "bestTime": "朝夕マズメ・満潮前後・濁りの入ったタイミング",
    "favoriteBaits": [
      "オキアミ",
      "カニ",
      "イガイ（カラスガイ）",
      "コーン・サナギ",
      "クロー系ワーム"
    ],
    "fishingTips": "春の「乗っ込み（産卵期）」は大型の数釣りチャンス。気配を消し、自然にエサを底付近へ漂わせるのが釣果の分かれ目。",
    "isDangerous": false
  },
  {
    "id": "oyabiccha",
    "name": "オヤビッチャ (五線雀鯛)",
    "kana": "おやびっちゃ",
    "scientificName": "Abudefduf vaigiensis",
    "category": "popular_coastal",
    "description": "黄色と白のグラデーションに5本の黒い横縞が入った熱帯・温帯性のスズメダイ科の魚。本州太平洋岸の夏〜秋の磯や堤防、南西諸島で豊富に見られ、エサ取りの名手ながら塩焼きや唐揚げで美味。",
    "habitat": "岩礁帯・サンゴ礁・テトラ帯・潮通しの良い堤防際",
    "waterLayer": "middle",
    "waterLayerText": "表層〜中層（障害物周りに大群で群泳）",
    "averageSize": "12cm〜18cm",
    "recordSize": "22cm",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 3,
    "cookingMethods": [
      "唐揚げ（サクサク香ばしい）",
      "塩焼き",
      "南蛮漬け",
      "マース煮（沖縄風塩煮）"
    ],
    "recommendedRigs": [
      "ウキ釣り仕掛け",
      "胴突き仕掛け",
      "ノベ竿ウキ釣り",
      "フカセ釣り"
    ],
    "bestTime": "日中〜夕方",
    "favoriteBaits": [
      "オキアミ",
      "アミエビ",
      "練りエサ",
      "青イソメ細切り"
    ],
    "fishingTips": "好奇心旺盛でコマセに猛烈に群がります。口が小さいため、タナゴ針やグレ針3〜4号などの小針でウキの素早い消し込みに合わせて掛けます。",
    "isDangerous": false
  },
  {
    "id": "saba",
    "name": "マサバ / ゴマサバ (鯖)",
    "kana": "まさば / ごまさば",
    "scientificName": "Scomber japonicus",
    "category": "blue_pelagic",
    "description": "回遊魚の代表格。群れが接岸するとサビキ釣りやジグで入れ食いになり、強烈に横走りするパワフルなファイトが楽しめます。鮮度落ちが早いため釣り人のみが味わえる新鮮なサバ料理は格別。",
    "habitat": "外洋に面した堤防・海釣り公園・沖堤防・港湾部",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（群れで猛スピード回遊）",
    "averageSize": "20cm〜35cm (大サバ40cm以上)",
    "recordSize": "55cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 4,
    "cookingMethods": [
      "しめ鯖（※アニサキス注意・要冷凍）",
      "味噌煮",
      "塩焼き",
      "竜田揚げ",
      "みりん干し"
    ],
    "recommendedRigs": [
      "サビキ釣り",
      "ライトショアジギング (20〜40g)",
      "カゴ釣り",
      "ウキ釣り"
    ],
    "bestTime": "朝マズメ・夕マズメ・潮通しの良い満潮前後",
    "favoriteBaits": [
      "アミエビ",
      "オキアミ",
      "メタルジグ",
      "キビナゴ"
    ],
    "fishingTips": "掛かると横へ猛烈に走り周囲の仕掛けとお祭りしやすいため、掛かったら躊躇せず素早く巻き上げます。釣れたらすぐに首を折って血抜き（サバ折り）し、氷水で急冷（氷締め）するのが美味しく食べる秘訣。",
    "isDangerous": false,
    "dangerNotes": "ヒスタミン中毒やアニサキス寄生虫に注意。生食はマイナス20℃で24時間以上冷凍するか、しっかり加熱調理を。"
  },
  {
    "id": "buri",
    "name": "ブリ / イナダ / ハマチ / ワラサ / ヤズ / フクラギ (鰤)",
    "kana": "ぶり / いなだ / はまち / わらさ / やず / ふくらぎ",
    "scientificName": "Seriola quinqueradiata",
    "category": "blue_pelagic",
    "description": "出世魚の代表格。ショアジギングでメタルジグをかっ飛ばし、強烈な青物の引きを味わう爽快感は格別。",
    "habitat": "外洋に面した潮通しの良い堤防・海釣り公園・沖堤防・地磯",
    "waterLayer": "surface",
    "waterLayerText": "表層〜底層（ナブラ発生時は表層）",
    "averageSize": "30cm〜80cm (80cm以上でブリ、メーター超えも)",
    "recordSize": "110cm (15kg)",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      9,
      10,
      11,
      12
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "ブリしゃぶ",
      "刺身",
      "ブリ大根",
      "照り焼き",
      "カマ塩焼き"
    ],
    "recommendedRigs": [
      "ライトショアジギング (30〜60g)",
      "ショアプラッギング（ポッパー/ダイペン）",
      "泳がせ釣り"
    ],
    "bestTime": "朝マズメ（日の出直後）・潮がガンガン動く時間帯",
    "favoriteBaits": [
      "メタルジグ",
      "ダイビングペンシル",
      "活きアジ・イワシ"
    ],
    "fishingTips": "水面のボイルや鳥山（トリヤマ）を見逃さないこと。底を取ってからのワンピッチジャークで誘い上げ、フォールで食わせの間を作ります。",
    "isDangerous": false
  },
  {
    "id": "sawara",
    "name": "サワラ / サゴシ (鰆)",
    "kana": "さわら / さごし",
    "scientificName": "Scomberomorus niphonius",
    "category": "blue_pelagic",
    "description": "水面をジャンプする超高速スプリンター。春と秋に接岸し、ブレードジグやミノーの超高速巻きに強烈にバイト。上品な白身とトロのような脂の乗りが絶品。",
    "habitat": "潮通しの良い外洋堤防・湾口部・沖堤防",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層",
    "averageSize": "40cm〜70cm (70cm以上でサワラ)",
    "recordSize": "115cm",
    "activeMonths": [
      3,
      4,
      5,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      4,
      5,
      9,
      10,
      11
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "炙り刺身（皮目をバーナーで炙る）",
      "西京焼き",
      "竜田揚げ",
      "塩焼き"
    ],
    "recommendedRigs": [
      "ブレードジギング (30〜40g)",
      "ヘビーシンキングミノー",
      "ライトショアジギング"
    ],
    "bestTime": "早朝の朝マズメ・跳ね（ジャンプ）が見られる時合い",
    "favoriteBaits": [
      "ブレード付きメタルジグ",
      "ヘビーシンキングミノー",
      "メタルバイブ"
    ],
    "fishingTips": "カミソリのような歯でラインを切られるため、太めの先糸（バイトリーダー）をセット。ルアーはとにかく超高速で巻くのが見切られないコツ。",
    "isDangerous": true,
    "dangerNotes": "カミソリのような極めて鋭い歯を持ちます。針外し時は絶対に口元に手を近づけず、大型プライヤーを使用してください。"
  },
  {
    "id": "kanpachi",
    "name": "カンパチ / ショゴ / ネリゴ / ネイリ / シオ / ネイゴ (間八)",
    "kana": "かんぱち / しょご / ねりご / ねいり / しお / ねいご",
    "scientificName": "Seriola dumerili",
    "category": "blue_pelagic",
    "description": "青物の中でもトップクラスのトルクと引きの強さを誇る高級魚。若魚（ショゴ・ネリゴ 30〜45cm）は夏〜秋に堤防周辺へ群れで接岸し、ショアジギングで大人気。",
    "habitat": "外洋に面した潮通しの良い堤防・地磯・沖堤防",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（根周りに付く習性あり）",
    "averageSize": "30cm〜60cm (成魚は1m以上)",
    "recordSize": "190cm (80kg)",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      7,
      8,
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（絶品・コリコリの歯ごたえ）",
      "カマ塩焼き",
      "カルパッチョ",
      "しゃぶしゃぶ"
    ],
    "recommendedRigs": [
      "ライトショアジギング (30〜60g)",
      "ショアジグサビキ",
      "泳がせ釣り"
    ],
    "bestTime": "朝マズメ・潮がガンガン流れるタイミング",
    "favoriteBaits": [
      "メタルジグ",
      "活きアジ・イワシ"
    ],
    "fishingTips": "ヒットすると根（沈み根や基礎ブロック）に向かって突進するため、ドラグを強めに設定して一気に底から浮かせます。",
    "isDangerous": false
  },
  {
    "id": "karei",
    "name": "マコガレイ / カレイ / クロガシラガレイ / マツカワ (鰈)",
    "kana": "まこがれい / かれい / くろがしらがれい / まつかわ",
    "scientificName": "Pseudopleuronectes yokohamae",
    "category": "bottom_rock",
    "description": "冬の投げ釣りの代表格。「左ヒラメに右カレイ」で知られる砂泥底の好ターゲット。産卵前後の「花見カレイ」や晩秋〜冬の「落ちカレイ」は肉厚で甘みのある白身が絶品。",
    "habitat": "内湾の砂泥底・港湾航路筋・防波堤外側・河口域",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（砂泥の中に潜り目だけ出して潜む）",
    "averageSize": "20cm〜35cm (座布団カレイ40〜50cmオーバー)",
    "recordSize": "58cm",
    "activeMonths": [
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5
    ],
    "peakMonths": [
      11,
      12,
      3,
      4
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "煮付け（子持ちカレイ絶品）",
      "刺身（活け締め）",
      "唐揚げ",
      "ムニエル",
      "塩焼き"
    ],
    "recommendedRigs": [
      "投げ釣り（段差2本針/天秤仕掛け）",
      "チョイ投げ仕掛け",
      "胴突き仕掛け"
    ],
    "bestTime": "日中（朝マズメ〜昼前）・潮の動き始め・満潮前後",
    "favoriteBaits": [
      "青イソメ（房掛け）",
      "本虫（マムシ/イワイソメ）",
      "岩ゴカイ"
    ],
    "fishingTips": "エサの青イソメを3〜5匹たっぷりと「房掛け」にしてアピール。アタリがあってもすぐに合わせず、じっくり食い込ませて（聞きアワセ）から巻き上げるのが鉄則。",
    "isDangerous": false
  },
  {
    "id": "hirame",
    "name": "ヒラメ (鮃)",
    "kana": "ひらめ",
    "scientificName": "Paralichthys olivaceus",
    "category": "bottom_rock",
    "description": "サーフや堤防のフラットフィッシュ最高峰。海底に潜みベイトを待ち伏せして強襲する豪快なバイトと高級料亭級の甘い白身（縁側）が魅力。",
    "habitat": "外洋サーフ・港湾出入口・航路筋・急深な砂泥底",
    "waterLayer": "bottom",
    "waterLayerText": "底層（底から50cm〜1mを漂うベイトに飛びつく）",
    "averageSize": "40cm〜60cm (座布団ヒラメ70cm以上)",
    "recordSize": "105cm",
    "activeMonths": [
      4,
      5,
      6,
      9,
      10,
      11,
      12,
      1
    ],
    "peakMonths": [
      10,
      11,
      12,
      1
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・薄造り（縁側付き）",
      "ムニエル",
      "煮付け",
      "昆布締め",
      "天ぷら"
    ],
    "recommendedRigs": [
      "サーフルアー（シンキングミノー・ヘビーシンペン）",
      "ジグヘッドワーム (20〜30g)",
      "メタルジグ",
      "泳がせ釣り"
    ],
    "bestTime": "朝夕マズメ・満潮前後の潮の動き出し・離岸流",
    "favoriteBaits": [
      "活きイワシ・アジ",
      "シャッドテールワーム 4inch",
      "サーフ専用シンペン"
    ],
    "fishingTips": "砂浜の離岸流やヨブ（深み）を見つけて集中的にキャスト。底から50cm上を丁寧に引いてくるのがコツ。",
    "isDangerous": false
  },
  {
    "id": "magochi",
    "name": "マゴチ (真鯒)",
    "kana": "まごち",
    "scientificName": "Platycephalus sp.",
    "category": "bottom_rock",
    "description": "「照りゴチ」の名で知られる夏の砂泥底の王者。ワームやジグへの鋭い首振りバイトと、フグにも匹敵すると称される極上の弾力ある白身が絶品。",
    "habitat": "内湾・港湾・河口域・サーフ・干潟周辺の砂泥底",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（砂泥に潜んでベイトを待ち伏せ）",
    "averageSize": "40cm〜55cm (大型60cmオーバー)",
    "recordSize": "75cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "薄造り・刺身（洗い）",
      "唐揚げ",
      "天ぷら",
      "潮汁",
      "煮付け"
    ],
    "recommendedRigs": [
      "ジグヘッドワーム (14〜28g)",
      "フリーリグ / テキサスリグ",
      "ブレードジグ",
      "泳がせ釣り（ハゼ/エビ）"
    ],
    "bestTime": "早朝〜日中の晴天時・上げ潮時",
    "favoriteBaits": [
      "シャッドテールワーム 3.5〜4inch",
      "クロー系ワーム",
      "活きハゼ",
      "活きエビ"
    ],
    "fishingTips": "ボトムバンプ（リフト＆フォール）やストップ＆ゴーで海底に砂煙を立たせて誘います。ゴツンと当たったら一呼吸置いて強くフッキング。",
    "isDangerous": false,
    "dangerNotes": "エラ蓋に鋭いトゲ（側頭棘）があるため、素手で掴むと怪我をします。フィッシュグリップを使用してください。"
  },
  {
    "id": "kasago",
    "name": "カサゴ / ガシラ / ガラカブ / ホゴ (笠子)",
    "kana": "かさご / がしら / がらかぶ / ほご",
    "scientificName": "Sebastiscus marmoratus",
    "category": "bottom_rock",
    "description": "堤防際やテトラの穴釣りの定番。初心者でも簡単に釣れ、1年中狙えるありがたい根魚。唐揚げや味噌汁は絶品。",
    "habitat": "テトラポッドの隙間・堤防の敷石・岩礁帯・消波ブロック",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（岩やテトラの隙間）",
    "averageSize": "15cm〜25cm (尺ガシラ30cm)",
    "recordSize": "38cm",
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "丸ごと唐揚げ",
      "煮付け",
      "味噌汁（あら汁）",
      "刺身"
    ],
    "recommendedRigs": [
      "ブラクリ仕掛け (2〜4号)",
      "ジグヘッドリグ",
      "胴突き仕掛け"
    ],
    "bestTime": "日中（穴釣り）・夜間（障害物周り）",
    "favoriteBaits": [
      "青イソメ",
      "サバやサンマの切り身",
      "クロー系ワーム",
      "オキアミ"
    ],
    "fishingTips": "テトラの暗い隙間にブラクリを落とし込み、底に着いたら軽くチョンチョンと誘ってステイ。アタリがあったら一気に巻き上げ根に潜られないように。",
    "isDangerous": false
  },
  {
    "id": "shirogisu",
    "name": "シロギス / キス (鱚)",
    "kana": "しろぎす / きす",
    "scientificName": "Sillago japonica",
    "category": "tasty_table",
    "description": "「砂浜の貴婦人」と呼ばれる美しい白身魚。投げ釣りでプルプルッとした小気味良いアタリと絶品の天ぷらが楽しめます。",
    "habitat": "砂浜（サーフ）・砂泥底の堤防内湾・河口",
    "waterLayer": "bottom",
    "waterLayerText": "底層（海底の砂地を泳ぐ）",
    "averageSize": "15cm〜22cm (25cm以上でヒジタタキ)",
    "recordSize": "32cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "キスの天ぷら（最高峰）",
      "昆布締め",
      "刺身",
      "骨せんべい"
    ],
    "recommendedRigs": [
      "チョイ投げ仕掛け",
      "本格投げ釣り（天秤仕掛け）",
      "キス針6〜8号"
    ],
    "bestTime": "早朝〜午前中・上げ潮時",
    "favoriteBaits": [
      "石ゴカイ（ジャリメ）",
      "青イソメ"
    ],
    "fishingTips": "キャストしたら底を取り、リールをゆっくり巻きながら海底をサビく（引きずる）のが基本。カケアガリ（段差）でアタリが集中します。",
    "isDangerous": false
  },
  {
    "id": "gima",
    "name": "ギマ (擬麻)",
    "kana": "ぎま",
    "scientificName": "Triacanthus biaculeatus",
    "category": "tasty_table",
    "description": "銀色の菱形の体と腹部に2本の頑丈なトゲを持ち、地面に直立するユニークな魚。夏の内湾・サーフのチョイ投げでよく掛かり、粘液が多いもののカワハギ同様の巨大な肝（キモ）と淡白な極上白身を持つ隠れた高級魚。",
    "habitat": "内湾の砂泥底・港湾・サーフ・干潟周辺（水温の高い夏季）",
    "waterLayer": "bottom",
    "waterLayerText": "底層（砂泥底のカニや多毛類を捕食）",
    "averageSize": "20cm〜30cm",
    "recordSize": "35cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "肝醤油の刺身・薄造り（絶品）",
      "煮付け",
      "ムニエル",
      "天ぷら・フライ",
      "みりん干し"
    ],
    "recommendedRigs": [
      "チョイ投げ仕掛け",
      "胴突きカワハギ仕掛け",
      "ブッコミ釣り"
    ],
    "bestTime": "日中の晴天時・上げ潮時",
    "favoriteBaits": [
      "青イソメ",
      "石ゴカイ",
      "アサリの剥き身"
    ],
    "fishingTips": "カワハギ同様におちょぼ口でエサを取るのが上手いため、小さめの針（カワハギ針や流線針）を使用。体表の強烈なヌメリは塩とタワシでしっかり擦り落とし、皮を剥いで調理します。",
    "isDangerous": false,
    "dangerNotes": "背ビレと腹ビレのトゲが非常に硬く鋭いため、掴む際は怪我に注意。"
  },
  {
    "id": "kyusen",
    "name": "キュウセン / ベラ (九線 / ギザミ)",
    "kana": "きゅうせん / べら",
    "scientificName": "Parajulis poecilepterus",
    "category": "tasty_table",
    "description": "鮮やかな体色が特徴（オスは青緑色の「青ベラ」、メスは赤褐色の「赤ベラ」）。関東では外道扱いされがちですが、関西・瀬戸内では「ギザミ」と呼ばれ高級魚として珍重される非常に美味な魚。",
    "habitat": "沿岸の岩礁帯と砂泥底が混ざるエリア・堤防基礎周り・敷石際",
    "waterLayer": "bottom",
    "waterLayerText": "底層（夜間や冬期は砂の中に潜って眠る）",
    "averageSize": "15cm〜23cm (大型の青ベラは25cmオーバー)",
    "recordSize": "32cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "南蛮漬け・二度揚げ",
      "塩焼き（瀬戸内名物・皮目の香ばしさが絶品）",
      "刺身（青ベラの皮霜造り）",
      "煮付け"
    ],
    "recommendedRigs": [
      "チョイ投げ仕掛け",
      "胴突き探り釣り",
      "ブラクリ仕掛け"
    ],
    "bestTime": "日中（日没後は砂に潜って眠るため日中限定）",
    "favoriteBaits": [
      "青イソメ",
      "石ゴカイ",
      "オキアミ"
    ],
    "fishingTips": "アタリは鋭く「カンカンッ」と竿先を叩きます。口が硬くエサ取りが上手いため、早めにアワセを入れます。滑らかな白身は火を通すとふっくらと甘みが増します。",
    "isDangerous": false
  },
  {
    "id": "tachiuo",
    "name": "タチウオ (太刀魚)",
    "kana": "たちうお",
    "scientificName": "Trichiurus lepturus",
    "category": "tasty_table",
    "description": "銀色に輝く刀のような魚体と鋭い歯。夏〜秋の夕暮れから夜にかけて堤防が一気に賑わう大人気ターゲット。",
    "habitat": "水深のある湾内・港湾・堤防・航路筋",
    "waterLayer": "middle",
    "waterLayerText": "日中は深場底付近、夜間は表層〜中層へ浮上",
    "averageSize": "指3本〜4本幅 (70〜100cm、指5本以上はドラゴン級)",
    "recordSize": "150cm (指7本幅)",
    "activeMonths": [
      7,
      8,
      9,
      10,
      11,
      12,
      1
    ],
    "peakMonths": [
      8,
      9,
      10,
      11
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "炙り刺身",
      "塩焼き",
      "天ぷら・フライ",
      "煮付け",
      "骨せんべい"
    ],
    "recommendedRigs": [
      "タチウオテンヤ（キビナゴ・サンマ切り身）",
      "ワインド（ジグヘッドワーム）",
      "メタルジグ",
      "電気ウキ釣り"
    ],
    "bestTime": "夕マズメ〜夜間（日没直後の時合いは入れ食い必至）",
    "favoriteBaits": [
      "キビナゴ",
      "サンマ・サバ切り身",
      "シャッドテールワーム（夜光・ケイムラ）"
    ],
    "fishingTips": "カミソリのように鋭い歯を持つため、ワイヤーリーダーや太いフロロリーダー（30lb以上）が必須。タナがコロコロ変わるので探り分けが重要。",
    "isDangerous": true,
    "dangerNotes": "カミソリのような鋭い歯で手を切る危険大。魚ばさみ（フィッシュグリップ）と針外しプライヤー必須。"
  },
  {
    "id": "mahaze",
    "name": "マハゼ (真鯊)",
    "kana": "まはぜ",
    "scientificName": "Acanthogobius flavimanus",
    "category": "fresh_brackish",
    "description": "日本の秋を代表する大衆魚。浅い河口や運河でウキ釣りやチョイ投げ、見釣り（サイトフィッシング）で手軽に狙え、ふわふわで上品な天ぷらは秋の味覚の王様。",
    "habitat": "河口・運河・干潟・汽水域・浅い砂泥底の港湾",
    "waterLayer": "bottom",
    "waterLayerText": "底層（砂泥底や敷石の間）",
    "averageSize": "8cm〜15cm (晩秋の落ちハゼは18〜20cm級)",
    "recordSize": "26cm",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      8,
      9,
      10,
      11
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "ハゼの天ぷら（絶品）",
      "唐揚げ",
      "甘露煮・佃煮",
      "刺身（大型の洗い）",
      "焼き干し（出汁用）"
    ],
    "recommendedRigs": [
      "チョイ投げ仕掛け (5〜7号)",
      "玉ウキ・シモリウキ仕掛け",
      "ハゼクランク (ルアー)",
      "ミャク釣り"
    ],
    "bestTime": "早朝〜日中・上げ潮〜満潮時",
    "favoriteBaits": [
      "青イソメ・赤イソメ（1〜2cmに切る）",
      "ホタテの貝柱",
      "ボイルエビ",
      "ハゼ用小型クランクベイト"
    ],
    "fishingTips": "エサは針の大きさに合わせて小さく（垂らし1cm程度）付けるのがコツ。クランクベイトを底に当てて砂煙を立てながら巻く「ハゼクラ」も大人気。",
    "isDangerous": false
  },
  {
    "id": "madai",
    "name": "マダイ (真鯛)",
    "kana": "まだい",
    "scientificName": "Pagrus major",
    "category": "tasty_table",
    "description": "「百魚の王」と称される日本の象徴的な名魚。春の乗っ込み期や秋に堤防・磯・カゴ釣りで狙え、力強い三段引きと上品な旨味が釣り人を虜にします。",
    "habitat": "潮通しの良い沖堤防・地磯・急深なサーフ・水深10m以上の港湾",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層",
    "averageSize": "30cm〜60cm (大鯛70〜80cmオーバー)",
    "recordSize": "102cm (13kg)",
    "activeMonths": [
      3,
      4,
      5,
      6,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      4,
      5,
      9,
      10,
      11
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "鯛めし",
      "刺身・皮霜造り",
      "兜焼き・塩焼き",
      "潮汁",
      "ポワレ"
    ],
    "recommendedRigs": [
      "両軸遠投カゴ釣り",
      "ウキフカセ釣り",
      "ショアタイラバ",
      "ブッコミ釣り"
    ],
    "bestTime": "朝夕マズメ・夜間・潮が動き出す転流時",
    "favoriteBaits": [
      "オキアミ",
      "本虫（マムシ）",
      "ユムシ",
      "タイラバ (40〜80g)"
    ],
    "fishingTips": "非常に臆病で警戒心が強いため、ハリスを細く長く（4〜6m）取るのがカゴ釣りの基本。底から2〜3m上を漂わせて食わせます。",
    "isDangerous": false
  },
  {
    "id": "aoriika",
    "name": "アオリイカ / モイカ / ミズイカ (水墨烏賊)",
    "kana": "あおりいか / もいか / みずいか",
    "scientificName": "Sepioteuthis lessoniana",
    "category": "squid_octopus",
    "description": "「イカの王様」と称される最高級の甘みと旨味。エギ（餌木）を使ったエギングや、生きたアジを使うヤエン釣りが大熱狂。",
    "habitat": "沿岸の海藻帯（アマモ・ホンダワラ）・潮通しの良い堤防先端・地磯",
    "waterLayer": "middle",
    "waterLayerText": "底層から中層（フォール中に抱く）",
    "averageSize": "300g〜1.5kg (春の親イカは2〜3kgオーバー)",
    "recordSize": "5.1kg",
    "activeMonths": [
      4,
      5,
      6,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      4,
      5,
      6,
      9,
      10,
      11
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（絶品）",
      "天ぷら",
      "一夜干し",
      "ゲソバター焼き",
      "イカスミパスタ"
    ],
    "recommendedRigs": [
      "エギング (3.0〜3.5号)",
      "ヤエン仕掛け",
      "ウキ泳がせ釣り"
    ],
    "bestTime": "朝夕マズメ・夜間の月夜（大潮・中潮）・潮の動き出し",
    "favoriteBaits": [
      "エギ (餌木)",
      "活きアジ"
    ],
    "fishingTips": "シャクリを入れた後の「フリーフォールまたはテンションフォール」でピタッと止める瞬間に抱いてきます。ラインの走りに集中！",
    "isDangerous": false
  },
  {
    "id": "madako",
    "name": "マダコ / タコ (真蛸)",
    "kana": "まだこ / たこ",
    "scientificName": "Octopus sinensis",
    "category": "squid_octopus",
    "description": "堤防際や敷石に潜むタコ。タコエギやタコジグで海底をトントン叩いて誘う豪快な釣り。茹でたての明石タコ・地ダコは歯ごたえと旨味が抜群。",
    "habitat": "港湾岸壁・敷石の隙間・消波ブロック・硬い砂礫底",
    "waterLayer": "bottom",
    "waterLayerText": "完全な海底（岸壁の壁面や底の穴）",
    "averageSize": "300g〜1.5kg (大ダコ2〜3kgオーバー)",
    "recordSize": "4.5kg",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "茹でダコ・タコぶつ",
      "タコ焼き",
      "タコ飯",
      "唐揚げ",
      "カルパッチョ"
    ],
    "recommendedRigs": [
      "タコエギ仕掛け (シンカー付き)",
      "タコジグ（岸壁ヘチ用）",
      "テンヤ仕掛け"
    ],
    "bestTime": "早朝・日中（潮が緩むタイミング）",
    "favoriteBaits": [
      "タコエギ (豚バラ肉・脂身巻き)",
      "カニワーム",
      "冷凍イワシ"
    ],
    "fishingTips": "底をトントンと小刻みにシェイクしてアピール。ムニュッとした重みが乗ったら一呼吸置いてから一気に鬼アワセ！底に張り付かれないようゴリ巻きします。",
    "isDangerous": false
  },
  {
    "id": "mameika",
    "name": "マメイカ / ヤリイカ (ジンドウイカ)",
    "kana": "まめいか / やりいか",
    "scientificName": "Loliolus beka",
    "category": "squid_octopus",
    "description": "北海道や東北で春と秋に大ブームとなる小型ツツイカ。1.5〜1.8号のライトエギングで手軽に数釣りが楽しめ、柔らかく甘い身は絶品。",
    "habitat": "港湾・岸壁・常夜灯周り・防波堤",
    "waterLayer": "middle",
    "waterLayerText": "表層〜中層（常夜灯の明かりに集まる）",
    "averageSize": "10cm〜15cm",
    "recordSize": "20cm",
    "activeMonths": [
      5,
      6,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      5,
      6,
      10,
      11
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "丸ごと煮付け",
      "刺身",
      "沖漬け",
      "バター醤油炒め"
    ],
    "recommendedRigs": [
      "ライトエギング (1.5〜1.8号エギ)",
      "スッテ仕掛け",
      "チカイカ仕掛け"
    ],
    "bestTime": "日没後の夜間（常夜灯下・集魚灯周辺）",
    "favoriteBaits": [
      "小型エギ (1.5号・夜光/ケイムラ)",
      "おっぱいスッテ"
    ],
    "fishingTips": "常夜灯の明暗部へキャストし、チョンチョンと軽くトゥイッチしてテンションフォール。わずかに重みが乗る繊細なアタリを掛けます。",
    "isDangerous": false
  },
  {
    "id": "taman",
    "name": "タマン (ハマフエフキ / 浜笛吹)",
    "kana": "たまん / はまふえふき",
    "scientificName": "Lethrinus nebulosus",
    "category": "popular_coastal",
    "description": "沖縄の打ち込み（ぶっこみ）釣りの大本命。強烈なダッシュ力と重量感ある引きで釣り人を熱狂させる南国のスーパースター。",
    "habitat": "サンゴ礁リーフ・浅場サーフ・港湾岸壁・水深3〜15mの岩礁砂地",
    "waterLayer": "bottom",
    "waterLayerText": "底層（夜間に浅場のリーフへエサを探しに回遊）",
    "averageSize": "40cm〜65cm (ナナマル70cm以上は伝説級)",
    "recordSize": "88cm (8.5kg)",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・皮霜造り",
      "マース煮（塩煮）",
      "バター焼き",
      "潮汁・アラ汁"
    ],
    "recommendedRigs": [
      "タマン専用打ち込み仕掛け (オモリ30〜35号・タマン針20〜24号)",
      "ショアラバ"
    ],
    "bestTime": "夜間（満潮前後の大潮・中潮の夜）",
    "favoriteBaits": [
      "シガヤーダコ（ウデナガセボシダコ）",
      "イカ短冊",
      "カツオのハラス",
      "活きボラ"
    ],
    "fishingTips": "アタリは一気に竿が海面に突き刺さる豪快さ。竿尻をロープで固定し、ヒット後は根に潜られないよう全力でゴリ巻きするのが鉄則。",
    "isDangerous": false
  },
  {
    "id": "gala",
    "name": "ガーラ / ロウニンアジ / カスミアジ (GT)",
    "kana": "がーら / ろうにんあじ",
    "scientificName": "Caranx ignobilis",
    "category": "blue_pelagic",
    "description": "ショアGT・ガーラとして知られる最強の巨大回遊魚。若魚（メッキ・ガーラ 30〜50cm）からメーター超えのモンスターまで強烈なファイトが楽しめます。",
    "habitat": "外洋に面した堤防・湾口・リーフエッジ・サーフ",
    "waterLayer": "surface",
    "waterLayerText": "全層（ベイトを水面まで追い詰めて捕食）",
    "averageSize": "35cm〜80cm (ロウニンアジ成魚は1m・20kg超え)",
    "recordSize": "160cm (72kg)",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 4,
    "edibleRating": 4,
    "cookingMethods": [
      "刺身",
      "ガーラ汁（味噌仕立て）",
      "魚汁",
      "唐揚げ",
      "ステーキ"
    ],
    "recommendedRigs": [
      "ショアプラッギング (ポッパー/ダイペン)",
      "ヘビー打ち込み仕掛け",
      "ライトゲーム（スプーン/ミノー）"
    ],
    "bestTime": "朝夕マズメ・上げ潮時・荒天前後の高活性時",
    "favoriteBaits": [
      "活きボラ・アジ",
      "大型ポッパー (14〜20cm)",
      "スプーン (10〜18g)"
    ],
    "fishingTips": "水面の炸裂バイトは圧巻。ライトゲームでも小気味良い猛烈な引きを味わえます。大型狙いは太糸PE（5〜8号）必須。",
    "isDangerous": false
  },
  {
    "id": "mibai",
    "name": "ミーバイ (ヤイトハタ / スジアラ / アカジン)",
    "kana": "みーばい / やいとはた / すじあら",
    "scientificName": "Epinephelus coioides / Plectropomus leopardus",
    "category": "bottom_rock",
    "description": "沖縄の三大高級魚「アカジンミーバイ（スジアラ）」を含むハタ科の総称。美しい魚体と上品な白身、根に潜る強烈なファイトが魅力。",
    "habitat": "サンゴ礁・テトラ帯・水深のある港湾・リーフの落ち込み",
    "waterLayer": "bottom",
    "waterLayerText": "底層（岩穴やリーフの隙間）",
    "averageSize": "30cm〜60cm (大型ヤイトハタは1m超)",
    "recordSize": "120cm (30kg)",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（絶品・高級料亭の味）",
      "マース煮",
      "清蒸（中華風酒蒸し）",
      "味噌汁"
    ],
    "recommendedRigs": [
      "ヘビーロックフィッシュ（テキサスリグ/ジグヘッド）",
      "打ち込み仕掛け",
      "泳がせ釣り"
    ],
    "bestTime": "日中〜夜間・潮の動くタイミング",
    "favoriteBaits": [
      "クロー系ワーム 3〜4inch",
      "活きエビ・小魚",
      "サンマ切り身"
    ],
    "fishingTips": "バイトした瞬間に根の奥深くに潜ろうとするため、フッキングと同時に一気に数メートル根から引き剥がすパワーファイトが必要。",
    "isDangerous": false
  },
  {
    "id": "kuchinaji",
    "name": "クチナジ (イソフエフキ / 磯笛吹)",
    "kana": "くちなじ / いそふえふき",
    "scientificName": "Lethrinus atkinsoni",
    "category": "popular_coastal",
    "description": "黄色がかった美しい魚体と美味しい白身が特徴のフエフキダイの仲間。港湾やリーフから手軽に狙え、沖縄の食卓で親しまれる大衆美味魚。",
    "habitat": "サンゴ礁・内湾の港湾・リーフ・砂礫底",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層",
    "averageSize": "20cm〜35cm",
    "recordSize": "45cm",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "マース煮（塩煮）",
      "バター焼き",
      "唐揚げ",
      "刺身"
    ],
    "recommendedRigs": [
      "チョイ投げ / 胴突き仕掛け",
      "ライトゲーム（スプーン/小型ワーム）",
      "ウキ釣り"
    ],
    "bestTime": "朝夕マズメ・夜間",
    "favoriteBaits": [
      "青イソメ",
      "オキアミ",
      "イカの短冊",
      "スプーン 5〜10g"
    ],
    "fishingTips": "引きがシャープでパワフル。底付近をリフト＆フォールで探るか、エサ釣りで底を狙うと素直にヒットします。",
    "isDangerous": false
  },
  {
    "id": "gurukun",
    "name": "グルクン (タカサゴ / 沖縄県魚)",
    "kana": "ぐるくん / たかさご",
    "scientificName": "Pterocaesio digramma",
    "category": "popular_coastal",
    "description": "沖縄の「県魚」に指定されている代表的な大衆魚。群れで回遊し、サビキ釣りやカゴ釣りで数釣りが楽しめ、丸ごと揚げた「グルクンの唐揚げ」は沖縄名物。",
    "habitat": "潮通しの良い港湾堤防・リーフエッジ・沿岸回遊ルート",
    "waterLayer": "middle",
    "waterLayerText": "中層（エメラルドグリーンの群れで泳ぐ）",
    "averageSize": "18cm〜28cm",
    "recordSize": "38cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "グルクンの唐揚げ（骨までサクサク）",
      "刺身（釣りたて限定）",
      "マース煮"
    ],
    "recommendedRigs": [
      "ウキサビキ釣り (カゴ仕掛け)",
      "サビキ釣り (4〜6号)",
      "ライトカゴ釣り"
    ],
    "bestTime": "日中（朝マズメ〜日中の潮が流れる時間）",
    "favoriteBaits": [
      "アミエビ",
      "オキアミ極小"
    ],
    "fishingTips": "海中では美しい青緑色ですが、釣り上げると興奮して鮮やかな赤色に変化します。コマセを同調させてタナ（水深4〜8m）をキープするのが数釣りの秘訣。",
    "isDangerous": false
  },
  {
    "id": "nishin",
    "name": "ニシン (鰊 / 太平洋鰊)",
    "kana": "にしん",
    "scientificName": "Clupea pallasii",
    "category": "popular_coastal",
    "description": "北海道の冬〜春の風物詩。「群来（くき）」で知られる北の大衆魚。港湾に大群が押し寄せ、投光器サビキ釣りで鈴なりの数釣りが楽しめます。",
    "habitat": "沿岸の港湾・波止・寒冷な内湾",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（夜間は投光器の光に集まる）",
    "averageSize": "25cm〜35cm (大ニシン35cm以上)",
    "recordSize": "45cm",
    "activeMonths": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "peakMonths": [
      12,
      1,
      2,
      3
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "塩焼き（数の子・白子入り絶品）",
      "刺身（鮮度抜群時）",
      "ニシン漬け",
      "甘露煮（身欠きニシン）"
    ],
    "recommendedRigs": [
      "ニシン専用サビキ (ケイムラ/ハゲ皮 7〜9号)",
      "集魚灯サビキ仕掛け"
    ],
    "bestTime": "夜間（投光器点灯時）・朝夕マズメ",
    "favoriteBaits": [
      "アミエビ",
      "ニシン専用サビキ針"
    ],
    "fishingTips": "夜間に投光器で海面を照らすと光の帯に集まってきます。針が大きめの7〜9号仕掛けを使い、口切れを防ぐためゆっくり巻き上げます。",
    "isDangerous": false
  },
  {
    "id": "hokke",
    "name": "ホッケ (𩸽 / 真ホッケ・根ボッケ)",
    "kana": "ほっけ",
    "scientificName": "Pleurogrammus azonus",
    "category": "popular_coastal",
    "description": "北海道を代表する超美味魚。春と秋に港湾や磯場に大群で接岸し、ウキ釣りやジグで爆釣。脂がたっぷり乗った一夜干しやフライは最高のごちそう。",
    "habitat": "寒冷な外洋堤防・地磯・沖堤防・港湾部",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（マキエに狂乱して浮上することもあり）",
    "averageSize": "25cm〜38cm (メガホッケ40cmオーバー)",
    "recordSize": "52cm",
    "activeMonths": [
      3,
      4,
      5,
      10,
      11,
      12
    ],
    "peakMonths": [
      4,
      5,
      11,
      12
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "ホッケの一夜干し（脂の乗り最高）",
      "フライ",
      "煮付け",
      "ホッケのつみれ汁",
      "ちゃんちゃん焼き"
    ],
    "recommendedRigs": [
      "ウキ釣り（オキアミ/マグロ切り身）",
      "サビキ釣り",
      "ショアジギング (20〜40g)",
      "投げ釣り"
    ],
    "bestTime": "早朝〜午前中・潮の動く時間帯",
    "favoriteBaits": [
      "オキアミ",
      "マグロ・カツオのハラス切り身",
      "メタルジグ (ピンク/シルバー)"
    ],
    "fishingTips": "コマセ（アミエビ+配合エサ）を撒くと海面近くまで乱舞します。ウキ釣りでタナを合わせて入れ食いを楽しめます。",
    "isDangerous": false
  },
  {
    "id": "kurosoi",
    "name": "クロソイ (黒曹以)",
    "kana": "くろそい",
    "scientificName": "Sebastes schlegelii",
    "category": "bottom_rock",
    "description": "「北の鯛」と称されるロックフィッシュの最高峰。厳冬期でも力強い引きを見せ、夜間のワームやブラクリで50cm級の怪物が狙えます。",
    "habitat": "消波ブロック帯・港湾岸壁・敷石・岩礁帯",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層（夜間は障害物から浮上して捕食）",
    "averageSize": "25cm〜40cm (ランカー50cm以上)",
    "recordSize": "62cm",
    "activeMonths": [
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・湯引き（絶品）",
      "煮付け",
      "アクアパッツァ",
      "あら汁",
      "塩焼き"
    ],
    "recommendedRigs": [
      "ジグヘッドリグ (3.5〜10g)",
      "テキサスリグ",
      "ブラクリ仕掛け"
    ],
    "bestTime": "日没後の夜間（ナイトロックゲーム）",
    "favoriteBaits": [
      "シャッドテールワーム 3〜4inch",
      "グラブ",
      "イカ短冊",
      "青イソメ"
    ],
    "fishingTips": "夜間にテトラ際やケーソンの継ぎ目をスローにリトリーブ。ガツンと重いアタリが来たら即座にフッキングして根から離します。",
    "isDangerous": false
  },
  {
    "id": "chika",
    "name": "チカ (千魚)",
    "kana": "ちか",
    "scientificName": "Hypomesus japonicus",
    "category": "popular_coastal",
    "description": "ワカサギによく似た北海道・東北の沿岸魚。港の岸壁から足元サビキで手軽に数釣りが楽しめ、サクサクの天ぷらやフライが冬の定番味覚。",
    "habitat": "港湾岸壁・砂泥底の内湾・河口近くの浅場",
    "waterLayer": "middle",
    "waterLayerText": "表層〜中層",
    "averageSize": "10cm〜18cm (大チカ20cm級)",
    "recordSize": "25cm",
    "activeMonths": [
      9,
      10,
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "peakMonths": [
      10,
      11,
      12,
      1,
      2
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "チカの天ぷら（サクサク絶品）",
      "フライ",
      "南蛮漬け",
      "素揚げ",
      "塩焼き"
    ],
    "recommendedRigs": [
      "チカ専用サビキ (2〜4号・スピード餌付け)",
      "ウキ釣り仕掛け"
    ],
    "bestTime": "早朝〜日中",
    "favoriteBaits": [
      "スピード餌付け（アミエビ）",
      "イサザアミ",
      "オキアミ小粒"
    ],
    "fishingTips": "スピード仕掛けで針にアミエビを擦り付けると手返し良く釣れます。ファミリーフィッシングに最適。",
    "isDangerous": false
  },
  {
    "id": "ainame",
    "name": "アイナメ / アブラコ / エゾアイナメ / ウサギアイナメ (鮎並)",
    "kana": "あいなめ / あぶらこ / えぞあいなめ / うさぎあいなめ",
    "scientificName": "Hexagrammos otakii",
    "category": "bottom_rock",
    "description": "北海道・東北で「アブラコ」と呼ばれる大型根魚。秋の産卵期（スポーニング）には金色（婚姻色）に染まり、強烈な首振りダンスで釣り人を魅了。",
    "habitat": "岩礁帯・テトラ帯・敷石・消波ブロック・海藻帯",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（岩やテトラの隙間に潜む）",
    "averageSize": "30cm〜45cm (ポン級50cmオーバー)",
    "recordSize": "61cm",
    "activeMonths": [
      3,
      4,
      5,
      9,
      10,
      11,
      12,
      1
    ],
    "peakMonths": [
      10,
      11,
      12,
      4,
      5
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・皮霜造り（脂が乗って極上）",
      "煮付け",
      "天ぷら",
      "唐揚げ",
      "味噌漬け"
    ],
    "recommendedRigs": [
      "テキサスリグ (14〜28g)",
      "フリーリグ",
      "ブラクリ",
      "胴突き仕掛け"
    ],
    "bestTime": "日中（朝マズメ〜日中の明るい時間帯）",
    "favoriteBaits": [
      "ホッグ系・クロー系ワーム",
      "青イソメ・本虫",
      "カニ"
    ],
    "fishingTips": "テトラの奥や沈み根の隙間をテキサスリグで丁寧に探る「穴撃ち」が効果的。強いフッキングで一気に根から引き抜きます。",
    "isDangerous": false
  },
  {
    "id": "aigo-poison",
    "name": "【危険魚】アイゴ (バリ)",
    "kana": "あいご",
    "scientificName": "Siganus fuscescens",
    "category": "popular_coastal",
    "description": "強い引きでフカセ釣りの外道としてよく掛かるが、背ビレ・腹ビレ・尻ビレに強い毒針を持つ危険魚。下処理すれば美味しいが素手は厳禁。",
    "habitat": "沿岸岩礁帯・海藻帯・堤防周り",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層",
    "averageSize": "20cm〜35cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      7,
      8,
      9,
      10
    ],
    "difficulty": 2,
    "edibleRating": 3,
    "cookingMethods": [
      "刺身（鮮度抜群時）",
      "煮付け",
      "味噌煮"
    ],
    "recommendedRigs": [
      "フカセ釣り",
      "サビキ釣り"
    ],
    "bestTime": "日中",
    "favoriteBaits": [
      "オキアミ",
      "アオサ（海藻）"
    ],
    "fishingTips": "針を外す際は必ず魚ばさみで固定し、キッチンバサミで全てのトゲ（背ビレ・腹ビレ・尻ビレ）を切り落としてからクーラーボックスへ。",
    "isDangerous": true,
    "dangerNotes": "背ビレ・腹ビレ・尻ビレの棘に強い毒！刺されると数時間〜数日激痛と腫れが続きます。絶対に素手で触らないでください。刺されたら45℃前後の温水に患部を浸してください。"
  },
  {
    "id": "oniokoze-poison",
    "name": "【危険魚】オニオコゼ / ハオコゼ",
    "kana": "おにおこぜ / はおこぜ",
    "scientificName": "Inimicus japonicus",
    "category": "bottom_rock",
    "description": "岩や海藻に擬態した毒魚。堤防のサビキやチョイ投げで外道として掛かるハオコゼ（5〜10cm）も同様に強毒を持ち要注意。",
    "habitat": "浅い岩礁帯・砂泥底・タイドプール・堤防際",
    "waterLayer": "bottom",
    "waterLayerText": "海底にへばりついて擬態",
    "averageSize": "5cm〜25cm",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "difficulty": 1,
    "edibleRating": 4,
    "cookingMethods": [
      "唐揚げ",
      "薄造り（オニオコゼ）"
    ],
    "recommendedRigs": [
      "チョイ投げ",
      "サビキ",
      "ブラクリ"
    ],
    "bestTime": "全時間帯",
    "favoriteBaits": [
      "イソメ",
      "オキアミ"
    ],
    "fishingTips": "釣れた小魚が赤褐色でトゲトゲしていたらハオコゼの可能性大。針外しはプライヤーを使い、触らずに糸を切ってリリースするのも安全。",
    "isDangerous": true,
    "dangerNotes": "背ビレに猛毒の棘があります。刺されると患部が激しく腫れ上がり耐え難い激痛が走ります。温熱療法（45℃の湯）が有効ですが速やかに病院へ。"
  },
  {
    "id": "kyuriuo",
    "name": "キュウリウオ (胡瓜魚)",
    "kana": "きゅうりうお",
    "scientificName": "Osmerus dentex",
    "category": "popular_coastal",
    "description": "体表から新鮮なキュウリ（胡瓜）のような爽やかな独特の芳香を放つ北方系の美味魚。サケ科に近いキュウリウオ科で、鋭い歯を持ち、北海道の秋〜冬の港湾サビキやブッコミ釣りで20〜30cm級の良型がヒットします。",
    "habitat": "北海道沿岸・オホーツク海・太平洋沿岸の港湾・汽水域・河口",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（群れで回遊、夜間に浮上）",
    "averageSize": "18cm〜28cm (大型は30cm超)",
    "recordSize": "36cm",
    "activeMonths": [
      9,
      10,
      11,
      12,
      1,
      2,
      3
    ],
    "peakMonths": [
      10,
      11,
      12,
      1
    ],
    "difficulty": 2,
    "edibleRating": 4,
    "cookingMethods": [
      "塩焼き",
      "フライ",
      "天ぷら",
      "一夜干し（旨味が凝縮）",
      "から揚げ"
    ],
    "recommendedRigs": [
      "スピードサビキ (夜光・ケイムラ)",
      "胴突き仕掛け",
      "ライトルアー (小型ジグ・スプーン)"
    ],
    "bestTime": "マズメ時および夜釣り（集魚ライトや常夜灯周り）",
    "favoriteBaits": [
      "オキアミ",
      "イソメ (青イソメ・赤イソメ)",
      "サンマの短冊切り身",
      "赤虫ワーム"
    ],
    "fishingTips": "鋭い牙があるため細ハリスは切られることがあります。歯に強いハリス（1.5〜2号）を使用し、夜間に集魚灯を焚いたサビキ釣りで狙うと連続ヒットします。塩焼きや干物にすると独特の香りとジューシーな白身が絶品です。",
    "isDangerous": false
  },
  {
    "id": "karafutomasu",
    "name": "カラフトマス (樺太鱒 / セッパリマス / オホーツクサーモン)",
    "kana": "からふとます",
    "scientificName": "Oncorhynchus gorbuscha",
    "category": "blue_pelagic",
    "description": "夏のオホーツク海・知床・道東沿岸に大群で押し寄せる大人気サーモン。産卵期を迎えた雄は背部が大きく盛り上がり「セッパリマス」と呼ばれます。ウキフカセ釣りやルアー（スプーン＋タコベイト）での強烈なファイトが魅力。",
    "habitat": "北海道オホーツク海沿岸・知床半島・根室・十勝沿岸のサーフ・港湾・河口周辺",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（群れで波打ち際を回遊・ジャンプ）",
    "averageSize": "45cm〜55cm (最大65cm)",
    "recordSize": "68cm",
    "activeMonths": [
      7,
      8,
      9
    ],
    "peakMonths": [
      8,
      9
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "チャンチャン焼き",
      "フライ・ムニエル",
      "ルイベ（冷凍刺身）",
      "塩焼き",
      "イクラ（筋子）醤油漬け"
    ],
    "recommendedRigs": [
      "ウキフカセ仕掛け（タコベイト＋エサ）",
      "スプーンルアー単体 / アキアジスプーン",
      "ミノーキャスト"
    ],
    "bestTime": "早朝の夜明け前〜日の出直後（朝マズメが最大の勝負時）",
    "favoriteBaits": [
      "サンマ切り身（ニンニク・エビ粉漬け）",
      "紅イカ",
      "エビ",
      "ピンク・赤タコベイト"
    ],
    "fishingTips": "回遊ルートである港の先端やサーフの波打ち際を目視で探し、ウキ下を浅く（1m〜1.5m）設定して群れの進行方向に先回りしてキャストします。掛かると激しくローリング・ジャンプするためドラグ調整をしっかりと。",
    "isDangerous": false
  },
  {
    "id": "komai",
    "name": "コマイ (氷下魚 / カンカイ / オオマイ)",
    "kana": "こまい",
    "scientificName": "Eleginus gracilis",
    "category": "bottom_rock",
    "description": "氷の下に網を張って獲ることから名付けられた北海道・道東を代表するタラ科の美味魚。30cm以上の大型は「オオマイ」と呼ばれます。真冬の夜釣りブッコミで鈴なりにヒットする人気のターゲット。",
    "habitat": "北海道東部・オホーツク海・太平洋沿岸の砂泥底・港湾岸壁・汽水湖",
    "waterLayer": "bottom",
    "waterLayerText": "底層（海底の砂泥底に群生）",
    "averageSize": "20cm〜30cm (オオマイは35cm以上)",
    "recordSize": "48cm",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1,
      2
    ],
    "peakMonths": [
      10,
      11,
      12,
      1
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "氷下魚の一夜干し（マヨネーズ＋一味七味）",
      "塩焼き",
      "天ぷら・フライ",
      "三平汁（タラ汁）",
      "生干しルイベ"
    ],
    "recommendedRigs": [
      "コマイ専用胴突き仕掛け (2〜3本針・夜光玉付き)",
      "投げ釣りブッコミ仕掛け",
      "サビキ釣り"
    ],
    "bestTime": "夕マズメ〜夜間（日没後の常夜灯周りや暗闇の底狙い）",
    "favoriteBaits": [
      "アオイソメ",
      "生サンマの短冊切り身",
      "イカ短冊"
    ],
    "fishingTips": "オモリが底に着いたらラインを張ってアタリを待ちます。竿先に付けた鈴が激しく鳴り響いたらアワセを入れます。夜光玉や赤いビーズ付き仕掛けへの反応が抜群です。",
    "isDangerous": false
  },
  {
    "id": "matsukawa",
    "name": "マツカワ (王鰈 / 松川鰈 / タカノハ)",
    "kana": "まつかわ",
    "scientificName": "Verasper moseri",
    "category": "bottom_rock",
    "description": "ヒラメをも凌ぐ極上の身質と歯ごたえから「王鰈（キング・カレイ）」と称される幻の超高級カレイ。ヒレに走る黒い縞模様が特徴で、太平洋側（えりも・胆振・日高沿岸）の投げ釣りで50cm〜70cm超の巨魚が狙えます。",
    "habitat": "北海道太平洋沿岸・噴火湾・日高・襟裳の砂泥底・サーフ・港湾外側",
    "waterLayer": "bottom",
    "waterLayerText": "底層（海底の砂泥に潜み小魚を待ち伏せ）",
    "averageSize": "35cm〜55cm (大型は65cm〜80cm級)",
    "recordSize": "84cm",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      5,
      6,
      10,
      11
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "薄造り・刺身（コリコリとした極上エンガワ）",
      "塩焼き",
      "煮付け",
      "カレイの握り寿司",
      "昆布締め"
    ],
    "recommendedRigs": [
      "マツカワ専用胴突き投げ仕掛け (極太カレイ針16〜18号)",
      "ブッコミ釣り",
      "メタルジグ（ショアジギング底引き）"
    ],
    "bestTime": "朝マズメ・満潮前後・潮が大きく動く時間帯",
    "favoriteBaits": [
      "カツオのハラス・ハツ切り身",
      "サンマ短冊",
      "ソーダガツオ切り身",
      "イカゴロ"
    ],
    "fishingTips": "フィッシュイーターであるため、匂いとアピール力の強いカツオやサンマの切り身エサを使用します。アタリは「ガツガツ、グイーッ」と竿先が海面に突き刺さるような豪快な引きを見せます。",
    "isDangerous": false
  },
  {
    "id": "mejina",
    "name": "メジナ (グレ / クロ / 尾長グレ)",
    "kana": "めじな / ぐれ",
    "scientificName": "Girella punctata",
    "category": "popular_coastal",
    "description": "磯釣り・堤防ウキフカセ釣りの最高峰にして絶大な人気を誇る好敵手。鋭敏な視力と強烈な突っ込みパワーを持ち、繊細なウキフカセ仕掛けで知恵比べを挑む奥深い釣りの対象魚。冬の「寒グレ」は脂が乗り極上。",
    "habitat": "全国沿岸の潮通しの良い堤防・沖堤防・地磯・沖磯・テトラ帯",
    "waterLayer": "all",
    "waterLayerText": "全層（コマセに反応して水面下2〜3mまで浮上、普段は底〜中層）",
    "averageSize": "25cm〜40cm (磯の大物は50cm〜60cm超)",
    "recordSize": "66.5cm",
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（焼き霜造り・皮引き）",
      "グレしゃぶ",
      "煮付け",
      "塩焼き",
      "潮汁"
    ],
    "recommendedRigs": [
      "円錐ウキフカセ釣り（全遊動 / 半遊動）",
      "カゴ釣り",
      "紀州釣り（ダンゴ釣り）"
    ],
    "bestTime": "朝マズメ・夕マズメ・潮の動き出し（本流筋の潮目）",
    "favoriteBaits": [
      "オキアミ生",
      "海苔（冬場の海苔グレ）",
      "パン粉・集魚材",
      "練りエサ"
    ],
    "fishingTips": "コマセの煙幕の中に仕掛けの刺しエサを完全に同調させるのが最大の極意。アタリが出たら一気に根に向かって突っ込むため、強靭な竿の胴に乗せて素早く根から引き離します。",
    "isDangerous": false
  },
  {
    "id": "kijihata",
    "name": "キジハタ (アコウ / 雉羽太)",
    "kana": "きじはた / あこう",
    "scientificName": "Epinephelus akaara",
    "category": "bottom_rock",
    "description": "「夏のフグ」とも讃えられる超高級ハタ。体表に散りばめられた鮮やかな橙赤色の斑点が美しく、日本海・瀬戸内海・九州を中心にロックフィッシュ（グルーパーゲーム）の最高峰ターゲットとして絶大な人気を誇ります。",
    "habitat": "潮通しの良い岩礁帯・テトラ帯・敷石・ケーソンのスリット・海藻帯",
    "waterLayer": "bottom",
    "waterLayerText": "底層（岩の隙間や敷石の駆け上がりに潜伏）",
    "averageSize": "25cm〜40cm (大型は50cm超)",
    "recordSize": "58cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "薄造り・刺身（上品な甘みと旨味）",
      "酒蒸し・清蒸（中華風）",
      "煮付け",
      "アコウしゃぶしゃぶ",
      "兜焼き"
    ],
    "recommendedRigs": [
      "テキサスリグ / フリーリグ (クロー系ワーム 3〜4inch)",
      "ジグヘッドリグ",
      "泳がせ釣り（活きエビ・小アジ）",
      "タイラバ"
    ],
    "bestTime": "朝夕マズメ・夜間（夜行性でエサを探して活発に動く）",
    "favoriteBaits": [
      "活きエビ (シラサエビ・ウタセエビ)",
      "活き小アジ",
      "ホッグ系・クロー系ワーム",
      "シャッドテールワーム"
    ],
    "fishingTips": "ヒットした瞬間に一気に根に潜ろうとするため、アタリを感じたら即座にフルフッキングし、ゴリ巻きで底から数メートル引き剥がす強気のタックルセッティングが必須です。",
    "isDangerous": false
  },
  {
    "id": "kawahagi",
    "name": "カワハギ (皮剥 / 肝パンカワハギ)",
    "kana": "かわはぎ",
    "scientificName": "Stephanolepis cirrhifer",
    "category": "tasty_table",
    "description": "エサだけを巧みに盗る「エサ取り名人」として釣り人を熱狂させるテクニカルターゲット。秋から冬にかけて肥大化する巨大な「肝（キモ）」は海のフォアグラと称され、濃厚な肝醤油で食べる刺身は至福の美味。",
    "habitat": "沿岸の岩礁帯・テトラ帯・砂泥底が混じる堤防岸壁・筏・沖の根",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層（底から1m前後のホバリング）",
    "averageSize": "15cm〜25cm (尺ハギ30cm以上)",
    "recordSize": "35cm",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1
    ],
    "peakMonths": [
      9,
      10,
      11,
      12
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "薄造り（肝醤油和え）",
      "カワハギの煮付け",
      "肝入り鍋・ちり鍋",
      "塩焼き",
      "みりん干し"
    ],
    "recommendedRigs": [
      "胴突きカワハギ仕掛け (3本針・集魚板 / 中オモリ)",
      "チョイ投げカワハギ仕掛け",
      "かかり釣り"
    ],
    "bestTime": "日中（明るい時間帯に視覚でエサを探して捕食）",
    "favoriteBaits": [
      "アサリの生剥き身（塩締め）",
      "アオイソメ",
      "エビの切り身"
    ],
    "fishingTips": "中オモリを揺らしてエサをアピールする「たたき」や「たるませ」でアタリを誘い、わずかなモタレや違和感を手感度で捉えて素早く掛け合わせます。",
    "isDangerous": false
  },
  {
    "id": "hiramasa",
    "name": "ヒラマサ (平政 / 青物の王様)",
    "kana": "ひらまさ",
    "scientificName": "Seriola lalandi",
    "category": "blue_pelagic",
    "description": "ブリ・カンパチと並ぶブリ属御三家の中でも最高峰のスピードとトルクを誇る「磯のダンプカー」。水面を割るダイナミックなトップウォータープラグへのバイトやショアジギングでの圧倒的なパワーファイトは全アングラーの憧れ。",
    "habitat": "潮通し抜群の外海に面した沖磯・地磯・沖堤防・岬の先端",
    "waterLayer": "all",
    "waterLayerText": "表層〜底層（急流に乗ってベイトを高速追尾）",
    "averageSize": "60cm〜90cm (メーターオーバー・10kg〜20kg超)",
    "recordSize": "140cm (30kg超)",
    "activeMonths": [
      4,
      5,
      6,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      5,
      6,
      10,
      11
    ],
    "difficulty": 5,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（コリコリとした上品な脂と極上の歯ごたえ）",
      "カマの塩焼き",
      "ヒラマサしゃぶしゃぶ",
      "カルパッチョ",
      "漬け丼"
    ],
    "recommendedRigs": [
      "ショアプラッギング (ダイビングペンシル 160〜220mm)",
      "ヘビーショアジギング (80〜150gメタルジグ)",
      "カゴ釣り",
      "泳がせ釣り"
    ],
    "bestTime": "朝夕マズメ・潮が激しく走り出す上げ潮・下げ潮の潮変わり",
    "favoriteBaits": [
      "活きアジ",
      "活きイワシ",
      "トップウォーターペンシル",
      "ロングジグ"
    ],
    "fishingTips": "ブリと違い根に向かって一直線に突進するため、ファイト中は一歩もラインを出さずにドラグを締めて力でねじ伏せる強靭なタックル（PE4〜6号、リーダー80〜120lb）が必須です。",
    "isDangerous": false
  },
  {
    "id": "soudagatsuo",
    "name": "ソウダガツオ (ヒラソウダ / マルソウダ / 宗田鰹)",
    "kana": "そうだがつお",
    "scientificName": "Auxis rochei",
    "category": "blue_pelagic",
    "description": "夏から秋にかけて日本全国の沿岸に大群で押し寄せる超高速回遊魚。ヒラソウダ（美味）とマルソウダ（宗田節の原料）の2種が存在。ライトショアジギングや弓角、カゴ釣りで竿を絞り込む強烈な引きが魅力。",
    "habitat": "外洋に面した堤防・海釣り公園・サーフ・沖堤防",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（海面を水しぶきをあげてナブラを起こす）",
    "averageSize": "30cm〜45cm",
    "recordSize": "52cm",
    "activeMonths": [
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      8,
      9,
      10
    ],
    "difficulty": 2,
    "edibleRating": 4,
    "cookingMethods": [
      "たたき・刺身（※ヒラソウダ当日釣りたて限定）",
      "竜田揚げ",
      "塩焼き",
      "生姜煮",
      "宗田節・出汁用角煮"
    ],
    "recommendedRigs": [
      "ライトショアジギング (20〜40gジグ)",
      "弓角（マウス・ジェット天秤）",
      "ライトカゴ釣り",
      "ジグサビキ"
    ],
    "bestTime": "朝マズメ〜日中の潮が走る時間帯",
    "favoriteBaits": [
      "メタルジグ (ブルーピンク・シルバー)",
      "オキアミ",
      "弓角 (白・ピンク)"
    ],
    "fishingTips": "血合いが多くヒスタミン中毒を起こしやすいため、釣れたら即座にエラを切って血抜きし、強烈に冷やした海水氷（潮氷）で冷却保存することが絶対条件です。ヒラソウダの鮮度抜群のタタキは絶品。",
    "isDangerous": false
  },
  {
    "id": "isaki",
    "name": "イサキ (伊佐木 / 鍛冶屋殺し)",
    "kana": "いさき",
    "scientificName": "Parapristipoma trilineatum",
    "category": "tasty_table",
    "description": "初夏（6〜7月）の梅雨時に産卵期を迎え、全身に極上の脂を蓄える「梅雨イサキ」として名高い高級魚。骨が非常に硬いことから「鍛冶屋殺し」の異名を持ちます。夜釣りのかご釣りやフカセ釣りで大人気。",
    "habitat": "潮通しの良い沖磯・地磯・外海に面した防波堤先端・人工魚礁",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（タナがシビアに変化）",
    "averageSize": "25cm〜35cm (ジャンボイサキ40cm超)",
    "recordSize": "46cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      6,
      7,
      8
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（皮目を炙った焼き霜造り）",
      "イサキの塩焼き",
      "煮付け",
      "アクアパッツァ",
      "カルパッチョ"
    ],
    "recommendedRigs": [
      "ライトカゴ釣り / カゴサビキ",
      "夜釣り電気ウキフカセ仕掛け",
      "SLJ (スーパーライトジギング)"
    ],
    "bestTime": "夕マズメ〜夜間（夜行性で暗くなると浅場に浮上して乱舞する）",
    "favoriteBaits": [
      "オキアミ生・ボイル",
      "イカ短冊",
      "青イソメ",
      "マイクロジグ 20〜40g"
    ],
    "fishingTips": "イサキは「タナ（遊泳層）を釣れ」と言われるほどタナ合わせが重要。指示ダナにコマセと刺しエサをきっちり同調させると連発します。夜釣りでは常夜灯周辺や潮目直下を狙いましょう。",
    "isDangerous": false
  },
  {
    "id": "hatahata",
    "name": "ハタハタ (鰰 / 鱩 / カミナリウオ)",
    "kana": "はたはた",
    "scientificName": "Arctoscopus japonicus",
    "category": "popular_coastal",
    "description": "初冬の日本海に雷（ハタハタ）が鳴り響く頃、産卵のため沿岸の藻場に押し寄せる秋田・山陰の冬の風物詩。ウロコがなく滑らかな体皮を持ち、プチプチとした歯ごたえの卵塊「ブリコ」が絶品珍味として愛されています。",
    "habitat": "日本海沿岸・秋田・山形・新潟・鳥取の港湾岸壁・防波堤・浅海藻場",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層（産卵期は岸壁際まで大群で接岸）",
    "averageSize": "15cm〜22cm",
    "recordSize": "28cm",
    "activeMonths": [
      11,
      12,
      1
    ],
    "peakMonths": [
      12
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "ハタハタ鍋（しょっつる鍋）",
      "塩焼き（ブリコ入り）",
      "田楽焼き",
      "唐揚げ",
      "ハタハタ寿司（飯寿司）"
    ],
    "recommendedRigs": [
      "ハタハタ専用サビキ仕掛け (金針・白フラッシャー 6〜8号)",
      "胴突き仕掛け"
    ],
    "bestTime": "荒天時・冬の季節風が吹き荒れる日没後〜夜間",
    "favoriteBaits": [
      "空針サビキ（エサなし）",
      "オキアミ",
      "イソメ"
    ],
    "fishingTips": "接岸最盛期はエサの付いていない専用サビキ針を海底まで落として軽く上下にシャクるだけで鈴なりに掛かります。群れの足が早いため、接岸情報が出たら即座に釣行するのが釣果の鍵です。",
    "isDangerous": false
  },
  {
    "id": "shiriyakeika",
    "name": "シリヤケイカ / コウイカ (尻焼烏賊 / 墨烏賊)",
    "kana": "しりやけいか / こういか",
    "scientificName": "Sepiella japonica",
    "category": "squid_octopus",
    "description": "胴の先端部から茶褐色の液体を分泌することから「尻焼け」と呼ばれるコウイカの仲間。春（5〜6月）の東京湾や瀬戸内海・内湾の堤防に産卵のため大量接岸し、スッテやエギを海底で引くだけで手軽に釣れる人気ターゲット。",
    "habitat": "内湾・港湾・堤防・河口近くの砂泥底",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（海底の砂泥に張り付くように生息）",
    "averageSize": "胴長15cm〜25cm (重さ300g〜800g)",
    "recordSize": "胴長30cm (1.2kg)",
    "activeMonths": [
      4,
      5,
      6,
      7,
      10,
      11
    ],
    "peakMonths": [
      5,
      6
    ],
    "difficulty": 2,
    "edibleRating": 4,
    "cookingMethods": [
      "イカ墨パスタ・イカ墨汁",
      "天ぷら・フライ",
      "煮付け・大根とイカの煮物",
      "バター醤油炒め",
      "刺身"
    ],
    "recommendedRigs": [
      "スッテ胴突き仕掛け (オモリ5〜10号)",
      "小型エギ (2.5〜3.0号) + 中オモリリグ",
      "エギング底ズル引き"
    ],
    "bestTime": "朝マズメ・夕マズメ・日中の潮が動く時間帯",
    "favoriteBaits": [
      "スッテ (ピンク・オレンジ・夜光)",
      "エギ (オレンジ・ピンク・金下地)"
    ],
    "fishingTips": "アオリイカのように激しくシャクる必要はなく、オモリを海底に着けたまま「ズルズルと底を引き、時折止める」だけで抱きついてきます。大量の濃いスミを吐くため、取り込み時は墨袋の噴射口に注意しましょう。",
    "isDangerous": false
  },
  {
    "id": "kensakiika",
    "name": "ケンサキイカ (剣先烏賊 / シロイカ / アカイカ / マイカ)",
    "kana": "けんさきいか",
    "scientificName": "Uroteuthis edulis",
    "category": "squid_octopus",
    "description": "イカ類の中で最も甘みが強く「イカの女王」と称される最高峰の美味イカ。山陰では「シロイカ」、九州では「ヤリイカ/アカイカ」とも呼ばれます。夏の夜釣りで堤防や漁港の常夜灯下に回遊し、ライトエギングで狙えます。",
    "habitat": "日本海・東シナ海・太平洋沿岸の潮通しの良い港湾・沖堤防・磯",
    "waterLayer": "middle",
    "waterLayerText": "中層〜表層（夜間は常夜灯の明かりに集まり浮上）",
    "averageSize": "胴長15cm〜35cm (大剣クラス40cm超)",
    "recordSize": "胴長50cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      6,
      7,
      8
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・糸造り（極上の甘みととろける食感）",
      "イカそうめん",
      "姿焼き（生姜醤油）",
      "天ぷら",
      "沖漬け"
    ],
    "recommendedRigs": [
      "ライトエギング (1.8〜2.5号エギ)",
      "イカメタル / オモリグ仕掛け",
      "エサ巻きテーラーウキ仕掛け"
    ],
    "bestTime": "日没後の完全な夜間（港の常夜灯周りや集魚ライト下）",
    "favoriteBaits": [
      "小型エギ (夜光・赤テープ・ピンク)",
      "キビナゴ・鶏ササミ（エサ巻き）",
      "浮きスッテ"
    ],
    "fishingTips": "常夜灯の明暗の境目をスローフォールさせ、細かなシェイクを入れてアピールします。アタリは「フッとテンションが抜ける」「クイーッと竿先が重くなる」繊細な違和感を捉えて掛け合わせます。",
    "isDangerous": false
  },
  {
    "id": "tenagaebi",
    "name": "テナガエビ (手長海老)",
    "kana": "てながえび",
    "scientificName": "Macrobrachium nipponense",
    "category": "fresh_brackish",
    "description": "河口・汽水域の消波ブロックや護岸の隙間に生息する初夏（5〜7月）の風物詩。オスは体長の2倍近い長いハサミを持ち、短竿と極小ウキで駆け引きを楽しむファミリー・初心者にも大人気のターゲット。素揚げや唐揚げは香ばしくビールのお供に最高。",
    "habitat": "河口域・汽水域・親水河川公園・運河・テトラ帯・護岸の隙間",
    "waterLayer": "bottom",
    "waterLayerText": "底層（消波ブロックや岩の陰、足元のスリット隙間）",
    "averageSize": "8cm〜15cm (大型のオスはハサミを含め20cm超)",
    "recordSize": "22cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "peakMonths": [
      5,
      6,
      7
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "素揚げ（塩レモン）",
      "唐揚げ",
      "エビチリ",
      "塩茹で",
      "佃煮"
    ],
    "recommendedRigs": [
      "テナガエビ専用ウキ仕掛け (シモリウキ/玉ウキ)",
      "見釣り仕掛け (エビ針2〜3号)",
      "のべ竿ミャク釣り"
    ],
    "bestTime": "日中（晴天時は日陰・岩陰）・夕マズメ・上げ潮時",
    "favoriteBaits": [
      "アカムシ",
      "ミミズ (小さくカット)",
      "カニカマ",
      "魚肉ソーセージ",
      "ホタテヒモ"
    ],
    "fishingTips": "テトラや石の隙間に仕掛けを落とし込み、ウキがピクピク動いて横にスーッとスライドしたらエビがハサミで掴んで運んでいる合図。そこから10〜20秒じっくり待って口に運ばせてから、ゆっくり竿を立てて抜き上げます（強くアワセるとハサミが取れます）。釣った後は半日〜1日真水で泥抜き（エアレーション推奨）すると臭みが完全に抜けて絶品になります。",
    "isDangerous": false
  },
  {
    "id": "bora",
    "name": "ボラ / イナ / オボコ (鰡 / 鮱 / 寒ボラ)",
    "kana": "ぼら / いな / おぼこ",
    "scientificName": "Mugil cephalus",
    "category": "popular_coastal",
    "description": "オボコ→イナ→ボラ→トドと成長に伴い名前が変わる代表的な出世魚（「とどのつまり」の語源）。汽水域から外洋まで広く生息し、水面を大きくジャンプする姿でおなじみ。外洋や冬の澄んだ水で獲れる「寒ボラ」は鯛やヒラメを凌ぐ脂の乗りと極上の甘みを誇り、卵巣は高級珍味「カラスミ」の原料になります。",
    "habitat": "港湾・河口・汽水域・サーフ・外洋沿岸（水深0〜10m）",
    "waterLayer": "all",
    "waterLayerText": "表層〜底層（表層を群れで泳ぎつつ、底の泥や藻類を吸い込む）",
    "averageSize": "30cm〜50cm (大型トド級は60cm〜80cm)",
    "recordSize": "86cm",
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      11,
      12,
      1,
      2
    ],
    "difficulty": 2,
    "edibleRating": 4,
    "cookingMethods": [
      "寒ボラの洗い・刺身",
      "ボラちり鍋",
      "フライ",
      "塩焼き",
      "自家製カラスミ"
    ],
    "recommendedRigs": [
      "ウキフカセ釣り",
      "ボラ掛け（引っ掛け）仕掛け",
      "吸い込みサビキ / ぶっこみ釣り",
      "パンプカ釣り"
    ],
    "bestTime": "朝夕マズメ・上げ潮時・日中の潮通しの良い時間帯",
    "favoriteBaits": [
      "食パン",
      "オキアミ",
      "練りエサ",
      "青イソメ",
      "フカセ配合エサ"
    ],
    "fishingTips": "口が小さく吸い込み系の捕食を行うため、小さめの針（グレ針4〜5号・チヌ針1〜2号）に食パンや練りエサを包むように付けるのがコツ。ヒットすると青物並みの猛烈なダッシュとジャンプで竿を満月に曲げます。食べる際は冬期の外洋寄りの個体を選び、釣獲後すぐに血抜きと内臓処理・腹膜の黒皮除去を行うと臭みがなく絶品白身になります。",
    "isDangerous": false
  },
  {
    "id": "akahata",
    "name": "アカハタ / オオモンハタ (赤羽太 / 大紋羽太)",
    "kana": "あかはた / おおもんはた",
    "scientificName": "Epinephelus fasciatus",
    "category": "bottom_rock",
    "description": "南日本の暖流が当たる岩礁帯や堤防を彩るハタ科の代表格。真紅の美しい魚体のアカハタはボトムに張り付き、オオモンハタは中層のベイトを追うスイミング系の捕食を行う。どちらも引きが強烈で、上品な甘みと弾力ある白身は絶品。",
    "habitat": "磯場・ゴロタ浜・潮通しの良い堤防先端・沖磯",
    "waterLayer": "bottom",
    "waterLayerText": "底層（アカハタはベタ底、オオモンハタは底〜中層スイミング）",
    "averageSize": "25cm〜35cm (オオモンハタは50cm超)",
    "recordSize": "58cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "姿造り・刺身",
      "煮付け",
      "アクアパッツァ",
      "酒蒸し",
      "天ぷら・フライ"
    ],
    "recommendedRigs": [
      "テキサスリグ (14〜28g)",
      "ジグヘッドスイミング (ブレード付き)",
      "スロージギング",
      "活きエビ胴突き"
    ],
    "bestTime": "朝夕マズメ・日中の潮がガンガン流れるタイミング",
    "favoriteBaits": [
      "シャッドテールワーム (3.5〜4.5inch)",
      "クロー系ワーム",
      "メタルジグ 20〜40g",
      "活きエビ/キビナゴ"
    ],
    "fishingTips": "アカハタ狙いはテキサスリグでボトムを叩き、根から離さないように誘います。オオモンハタ狙いはジグヘッド＋シャッドテールワームでボトム着底後に中層までリールを10〜15回ただ巻きし、フォールを繰り返すスイミングメソッドが圧倒的に効果的。",
    "isDangerous": false
  },
  {
    "id": "shiira",
    "name": "シイラ / マヒマヒ (鱪 / 万力)",
    "kana": "しいら / まひまひ",
    "scientificName": "Coryphaena hippurus",
    "category": "blue_pelagic",
    "description": "鮮やかなエメラルドグリーンと黄金色の体色を持つ夏の回遊魚。オスは額が角ばる迫力満点のフォルム。「万力（マンリキ）」の異名を持ち、フッキングすると豪快なジャンプと猛烈な横走りを連発するエキサイティングなトップゲームが魅力。",
    "habitat": "外洋に面した潮通しの良い堤防先端・サーフ・沖磯・オフショア",
    "waterLayer": "surface",
    "waterLayerText": "極めて表層（水面直下0〜2m・漂流物や潮目周り）",
    "averageSize": "50cm〜80cm (メーターオーバーの大型は1m〜1.5m)",
    "recordSize": "180cm (40kg超)",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      7,
      8,
      9
    ],
    "difficulty": 3,
    "edibleRating": 4,
    "cookingMethods": [
      "ムニエル（焦がしバター）",
      "フライ・フィッシュバーガー",
      "照り焼き",
      "ハワイアンポキ",
      "刺身（新鮮な当日限定）"
    ],
    "recommendedRigs": [
      "トップウォータープラグ (ポッパー/ペンシル)",
      "ヘビーシンキングミノー",
      "ライトショアジギング (30〜60g)"
    ],
    "bestTime": "日中（太陽が高く昇った晴天時）・朝夕マズメ",
    "favoriteBaits": [
      "ポッパー 100〜140mm",
      "ダイビングペンシル",
      "メタルジグ",
      "活きイワシ"
    ],
    "fishingTips": "漂流物（流れ藻・流木）や潮目に向かってキャストし、ポッパーの激しいスプラッシュ音やハイスピードリトリーブで誘います。ジャンプ時はラインテンションが抜けてバラシやすいため、竿を横に倒してテンションを保ちながら寄せます。鮮度落ちが早いため釣獲後は即座に氷締めを徹底。",
    "isDangerous": false
  },
  {
    "id": "iidako",
    "name": "イイダコ (飯蛸 / 飯持ちイイダコ)",
    "kana": "いいだこ",
    "scientificName": "Amphioctopus fangsiao",
    "category": "squid_octopus",
    "description": "体長20cm前後の小型のタコ。秋〜冬から早春にかけてメスの胴に米粒のような卵（飯＝いい）がぎっしり詰まることから名付けられた。真っ白なラッキョウやスッテに抱きつく習性を利用した専用テンヤ釣りは誰でも手軽に大漁が狙える。",
    "habitat": "内湾・砂泥底の浅瀬・干潟・港内・海釣り公園",
    "waterLayer": "bottom",
    "waterLayerText": "底層ベタ底（砂泥地を這い回る）",
    "averageSize": "15cm〜25cm (全長)",
    "recordSize": "30cm",
    "activeMonths": [
      9,
      10,
      11,
      12,
      1,
      2
    ],
    "peakMonths": [
      9,
      10,
      11,
      12
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "丸ごと甘辛煮（飯持ちイイダコ煮）",
      "おでん",
      "天ぷら・唐揚げ",
      "塩茹で",
      "イイダコ飯"
    ],
    "recommendedRigs": [
      "イイダコテンヤ仕掛け (ラッキョウ/白プラ)",
      "イイやん・イイダコスッテ (ダウンショット)",
      "チョイ投げテンヤ"
    ],
    "bestTime": "日中（晴天時）・干潮から満潮への上げ潮時",
    "favoriteBaits": [
      "ラッキョウ",
      "白いカニ型ワーム",
      "イイダコ用極小スッテ",
      "豚の脂身"
    ],
    "fishingTips": "テンヤを軽くキャストし、底をトントンと小刻みに小突きながら手前へ引いてきます。竿先にモチッとした重みが乗ったらそのままアワセを入れて一定スピードで巻き上げます。塩揉みしてヌメリを取った後の甘辛い煮付けは子持ちの卵のプチプチ食感が絶品。",
    "isDangerous": false
  },
  {
    "id": "donko",
    "name": "ドンコ / エゾイソアイナメ (蝦夷磯鮎並)",
    "kana": "どんこ / えぞいそあいなめ",
    "scientificName": "Physiculus maximowiczi",
    "category": "bottom_rock",
    "description": "東北・北海道・三陸海岸の冬の釣りを代表するタラ目の底生魚。褐色のプニプニした魚体と下アゴのヒゲが特徴。冬のテトラ穴釣りや夜のぶっこみ釣りで定番。巨大で濃厚な肝（キモ）を持ち、東北名物「どんこ汁」や「肝和え」は冬の至高の味覚。",
    "habitat": "寒冷な海のテトラポッドの奥・岩礁帯・堤防基礎の隙間・深場",
    "waterLayer": "bottom",
    "waterLayerText": "底層（完全にテトラの穴の中や岩の隙間に潜む）",
    "averageSize": "20cm〜35cm (40cm超はメガドンコ)",
    "recordSize": "48cm",
    "activeMonths": [
      10,
      11,
      12,
      1,
      2,
      3,
      4
    ],
    "peakMonths": [
      11,
      12,
      1,
      2
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "どんこ汁（味噌仕立て・肝溶き）",
      "肝和え・刺身（当日新鮮なもの）",
      "煮付け",
      "唐揚げ",
      "塩焼き"
    ],
    "recommendedRigs": [
      "ブラクリ仕掛け (3〜6号)",
      "胴突き穴釣り仕掛け",
      "夜釣りぶっこみ仕掛け"
    ],
    "bestTime": "夜間・日没直後・日中のテトラ深穴",
    "favoriteBaits": [
      "青イソメ",
      "サンマの切り身",
      "サバ短冊",
      "イカの塩辛",
      "ホタルイカ"
    ],
    "fishingTips": "テトラの奥深く、光の届かない穴の底までブラクリを落とし込みます。着底後少しリフトして待つと「ググンッ」と明確なアタリが出るので即アワセ。身は柔らかい白身で水分が多いため、鍋にするか、新鮮な肝を包丁で叩いて身と和える「肝和え」が最高の贅沢。",
    "isDangerous": false
  },
  {
    "id": "umitanago",
    "name": "ウミタナゴ (海鱮 / 春告魚)",
    "kana": "うみたなご",
    "scientificName": "Ditrema temminckii",
    "category": "popular_coastal",
    "description": "卵ではなく稚魚を直接産む（胎生）珍しい海産魚。早春の産卵期に接岸し、他の魚が釣れにくい厳寒期〜春告魚（はるつげうお）として親しまれる。銀色や赤褐色の美しい魚体とウキ釣りの繊細なアタリが楽しい風情あるターゲット。",
    "habitat": "藻場・テトラ帯・堤防の内側・潮通しの良い港内",
    "waterLayer": "middle",
    "waterLayerText": "中層〜海藻の上（群れで海藻の周りを遊泳）",
    "averageSize": "15cm〜25cm",
    "recordSize": "32cm",
    "activeMonths": [
      12,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "peakMonths": [
      2,
      3,
      4,
      5
    ],
    "difficulty": 1,
    "edibleRating": 3,
    "cookingMethods": [
      "塩焼き（振り塩で締めてから）",
      "煮付け",
      "南蛮漬け",
      "唐揚げ",
      "フライ"
    ],
    "recommendedRigs": [
      "棒ウキ仕掛け / 玉ウキ釣り",
      "胴突き探り釣り",
      "サビキ釣り"
    ],
    "bestTime": "日中（朝マズメ〜日中の穏やかな時間）",
    "favoriteBaits": [
      "青イソメ/ジャリメ",
      "オキアミ極小",
      "アミエビ",
      "モエビ"
    ],
    "fishingTips": "口が小さくエサを取るのが上手いため、小さめの袖針（3〜5号）やタナゴ針を用います。海藻のキワにウキを浮かべ、ウキがピクピク沈んだら手首を返して掛けます。身はやや柔らかいため、塩焼きは振り塩をして少し身を締めてから焼くと旨味が引き立ちます。",
    "isDangerous": false
  },
  {
    "id": "hirasuzuki",
    "name": "ヒラスズキ (平鱸 / 荒磯の王者)",
    "kana": "ひらすずき",
    "scientificName": "Lateolabrax latus",
    "category": "popular_coastal",
    "description": "荒れ狂う外洋の磯にできる真っ白な泡（サラシ）の中に潜む「荒磯の王者」。普通のスズキ（マルスズキ）に比べ体高があり筋肉質。過酷な波と風の中でルアーを通し、サラシから銀鱗を翻してバイトする瞬間はソルトルアーゲームの最高峰。",
    "habitat": "外洋に面した荒磯・ゴロタ浜・岬・激流のテトラ帯",
    "waterLayer": "surface",
    "waterLayerText": "表層（白泡が広がるサラシの水面直下0〜1.5m）",
    "averageSize": "50cm〜75cm (80cm〜90cm超はランカーヒラ)",
    "recordSize": "98cm (10kg超)",
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      10,
      11,
      12
    ],
    "peakMonths": [
      3,
      4,
      5,
      11,
      12
    ],
    "difficulty": 5,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・薄造り（極上白身）",
      "カルパッチョ",
      "ヒラスズキのポワレ",
      "潮汁",
      "塩焼き"
    ],
    "recommendedRigs": [
      "ヒラスズキ専用タックル (11〜13ft M/MHロッド + PE1.5〜2号 + フロロ30〜40lb)",
      "フローティングミノー (110〜140mm)",
      "シンキングペンシル"
    ],
    "bestTime": "サラシが広がる荒天時（波高2〜3m）・朝夕マズメ・満潮前後",
    "favoriteBaits": [
      "フローティングミノー (リップ付き)",
      "シンキングペンシル",
      "バイブレーション"
    ],
    "fishingTips": "波のセットを見極め、大きな波が岩に砕けて真っ白なサラシが広がった瞬間、その引き波に乗せるようにルアーをスローリトリーブします。ヒット直後はエラ洗いや鋭い根ズレを連発するため、太軸フックと強靭なリーダーで一気に勝負をつけます。※安全装備（ライフジャケット・磯靴・ヘルメット・ウェットスーツ）が絶対必須の釣りです。",
    "isDangerous": false
  },
  {
    "id": "akame",
    "name": "アカメ (赤目 / 日本固有種 / 幻の怪魚)",
    "kana": "あかめ",
    "scientificName": "Lates japonicus",
    "category": "fresh_brackish",
    "description": "高知県（浦戸湾・四万十川など）や宮崎県などの限られた汽水域・沿岸にのみ生息する日本固有の巨大肉食魚。「日本三大怪魚」の一角。光を浴びるとルビー色に赤く輝く眼球と、鋼のような体躯、圧倒的な怪力を誇り、多くのアングラーが一生に一度の出逢いを求める幻の魚。",
    "habitat": "高知県・宮崎県の河口域・汽水域・港湾・運河・橋脚周り",
    "waterLayer": "all",
    "waterLayerText": "全層（夜間に橋脚の明暗やボトムからベイトを急襲）",
    "averageSize": "60cm〜90cm (メーター超え・20kg〜30kg超のモンスターも)",
    "recordSize": "138cm (39kg)",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 5,
    "edibleRating": 2,
    "cookingMethods": [
      "キャッチ＆リリース推奨（希少な天然記念的固有種のため原則リリース）"
    ],
    "recommendedRigs": [
      "怪魚用ヘビータックル (PE3〜5号 + ナイロン/フロロ 60〜100lbリーダー)",
      "ビッグベイト / ヘビーミノー (140〜200mm)",
      "活きコノシロ/ボラ泳がせ釣り"
    ],
    "bestTime": "夜間・深夜・大潮の下げ潮時・暗闇の潮目",
    "favoriteBaits": [
      "ビッグミノー",
      "大型スイムベイト",
      "活きボラ",
      "活きコノシロ"
    ],
    "fishingTips": "夜間の橋脚の明暗境や潮の流れがヨレるスポットへ大型ルアーを通します。バイトは「ドカンッ」と竿ごと持っていかれるほどの衝撃。フッキング後はドラグが悲鳴をあげる猛突進に耐え、じっくり体力を奪ってランディングします。貴重な固有種のため、撮影は手早く行い、水中で十分に回復させてから優しくリリースするのがアングラーのマナーです。",
    "isDangerous": false
  },
  {
    "id": "takabe",
    "name": "タカベ (高部 / 鰞 / 夏の極上魚)",
    "kana": "たかべ",
    "scientificName": "Labracoglossa argentiventris",
    "category": "tasty_table",
    "description": "背中に鮮やかなレモンイエローのラインが走る伊豆諸島・房総・紀伊半島の夏の風物詩。「海の鮎」とも称され、夏のタカベの塩焼きは滴るほどの極上の脂と香ばしさを誇る高級魚。潮通しの良い磯や堤防外側でウキ釣りで狙います。",
    "habitat": "潮通しの良い外洋堤防・磯場・島嶼部（水深0〜15m）",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（潮通しの良い潮目を大群で高速遊泳）",
    "averageSize": "15cm〜25cm (30cm超は特大)",
    "recordSize": "35cm",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      7,
      8,
      9
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "塩焼き（滴る脂が絶品）",
      "刺身（脂の乗った旬限定）",
      "煮付け",
      "南蛮漬け"
    ],
    "recommendedRigs": [
      "タカベ専用ウキフカセ仕掛け (ハリス0.8〜1.2号 + 袖針3〜4号)",
      "トリックサビキ",
      "カゴサビキ"
    ],
    "bestTime": "早朝マズメ〜日中の潮がガンガン走る時間帯",
    "favoriteBaits": [
      "アミエビ (小粒サシエ)",
      "オキアミ極小",
      "イカ短冊極小"
    ],
    "fishingTips": "マキエサに猛烈に群がりますが、目が良くハリスを見切るため、極細ハリス（0.8〜1号）と小針を使用するのがコツ。マキエサを撒いて群れを集め、その中にサシエサをサスペンドさせてウキが消し込んだら素早く掛け合わせます。",
    "isDangerous": false
  },
  {
    "id": "hedai",
    "name": "ヘダイ (平鯛 / 白チヌ)",
    "kana": "へだい",
    "scientificName": "Rhabdosargus sarba",
    "category": "tasty_table",
    "description": "クロダイに似た銀色の体型で、丸みを帯びた顔つき（平たい顔）と黄色い腹ビレ・尾ビレが特徴のタイ科魚類。クロダイ特有の磯臭さが全くなく、真鯛に匹敵する上品な甘みと適度な脂を持つ隠れた極上美味魚。",
    "habitat": "温暖な内湾・港湾・サーフ・河口・磯場",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層（砂泥底や岩礁のキワを遊泳）",
    "averageSize": "25cm〜40cm (50cm超も)",
    "recordSize": "55cm",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      8,
      9,
      10,
      11
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・皮霜造り",
      "塩焼き",
      "ヘダイの煮付け",
      "鯛めし（ヘダイご飯）",
      "アクアパッツァ"
    ],
    "recommendedRigs": [
      "ウキフカセ釣り",
      "渚釣り (サーフフカセ)",
      "チョイ投げ / ぶっこみ釣り",
      "落とし込み釣り"
    ],
    "bestTime": "朝夕マズメ・潮の動き始め・濁りが入った日",
    "favoriteBaits": [
      "オキアミ",
      "青イソメ/マムシ",
      "練りエサ",
      "コーン",
      "カニ"
    ],
    "fishingTips": "クロダイと同様のフカセ釣りや渚釣りで狙えます。引きはクロダイ以上にシャープで、竿をグングン叩く強烈なファイトが楽しめます。釣れたらクロダイ以上に美味しく食べられる嬉しいターゲットです。",
    "isDangerous": false
  },
  {
    "id": "ishigarei",
    "name": "イシガレイ / ナメタガレイ (石鰈 / 滑多鰈 / ババガレイ)",
    "kana": "いしがれい / なめたがれい",
    "scientificName": "Kareius bicoloratus",
    "category": "bottom_rock",
    "description": "背中に石のような骨質板を持つ「イシガレイ」と、厚いヌメリを持ち東北・北海道で正月の祝い魚として珍重される最高級ガレイ「ナメタガレイ（ババガレイ）」。マコガレイと並び、冬〜早春の投げ釣り・船釣りで絶大な人気を誇る。",
    "habitat": "砂泥底・岩礁混じりの砂地・深場・港湾堤防",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（海底の砂泥に潜り込んで擬態）",
    "averageSize": "30cm〜45cm (イシガレイは50cm超の「座布団」クラスも)",
    "recordSize": "62cm",
    "activeMonths": [
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "ナメタガレイの姿煮（子持ち煮付けは絶品）",
      "イシガレイの薄造り（縁側付き）",
      "唐揚げ",
      "ムニエル",
      "塩焼き"
    ],
    "recommendedRigs": [
      "投げ釣り段差2本針仕掛け (カレイ専用針12〜15号)",
      "胴突き投げ仕掛け",
      "船カレイ小突き仕掛け"
    ],
    "bestTime": "朝マズメ〜日中・満潮・干潮の潮止まり前後",
    "favoriteBaits": [
      "青イソメ（房掛け）",
      "本ムシ（マムシ/岩イソメ）",
      "ユムシ",
      "エラコ"
    ],
    "fishingTips": "イソメを3〜5匹たっぷり房掛けにして匂いとボリュームで強烈にアピール。キャスト後は置き竿にして待ち、時折リールを少し巻いて砂煙を立てて誘います。アタリは「モゾモゾ」とした前アタリから竿先が大きく引き込まれる本アタリまでじっくり食い込ませてから大きくアワセます。",
    "isDangerous": false
  },
  {
    "id": "takenokomebaru",
    "name": "タケノコメバル / ベッコウゾイ (筍目張 / 鼈甲曹以)",
    "kana": "たけのこめばる / べっこうぞい",
    "scientificName": "Sebastes oblongus",
    "category": "bottom_rock",
    "description": "タケノコが旬を迎える春に美味しくなることから名付けられた大型メバル・ロックフィッシュの仲間。東北では鼈甲色の模様から「ベッコウゾイ」と呼ばれる。ロックフィッシュの中でも引きのトルクが圧倒的に強く、40cmを超えるモンスターは怪力そのもの。",
    "habitat": "海藻の茂る岩礁帯・テトラポッドの隙間・堤防の基礎・ゴロタ浜",
    "waterLayer": "bottom",
    "waterLayerText": "底層（ホンダワラ等の海藻の中やテトラの隙間に密着）",
    "averageSize": "25cm〜35cm (40cm〜45cm超はランカーベッコウ)",
    "recordSize": "48cm",
    "activeMonths": [
      3,
      4,
      5,
      6,
      10,
      11,
      12
    ],
    "peakMonths": [
      3,
      4,
      5,
      11,
      12
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "薄造り・刺身（強い歯ごたえと甘み）",
      "煮付け",
      "酒蒸し",
      "塩焼き",
      "唐揚げ甘酢あんかけ"
    ],
    "recommendedRigs": [
      "テキサスリグ / ビフテキリグ (10〜21g)",
      "ジグヘッドリグ",
      "ブラクリ穴釣り",
      "フロートリグ"
    ],
    "bestTime": "夕マズメ〜夜間・朝マズメ・上げ潮時",
    "favoriteBaits": [
      "ホッグ系・クロー系ワーム 3〜4inch",
      "シャッドテールワーム",
      "青イソメ房掛け",
      "モエビ/カニ"
    ],
    "fishingTips": "海藻のポケットやテトラの奥へタイトにリグを送り込みます。バイトは明確な「ゴツンッ」という衝撃。ヒットの瞬間、強烈なトルクで海藻や根に潜ろうとするため、ヘビータックルで一気に引きずり出すパワーゲームが身上です。",
    "isDangerous": false
  },
  {
    "id": "ishidai",
    "name": "イシダイ / クチグロ (石鯛 / 磯の王者)",
    "kana": "いしだい / くちぐろ",
    "scientificName": "Oplegnathus fasciatus",
    "category": "bottom_rock",
    "description": "強靭なクチバシと縞模様（老成魚のオスは縞が消え口元が黒い「クチグロ」となる）を持つ磯釣りの頂点・「磯の王者」。ウニやサザエを噛み砕く怪力と、竿を海面に突き刺す「三段引き」が底物師を熱狂させる。締まった白身と脂の乗った皮・縁側は極上美味。",
    "habitat": "潮流の激しい荒磯・岬先端・急深な沖磯・地磯の深場（水深5〜30m）",
    "waterLayer": "bottom",
    "waterLayerText": "底層（海底のドロップオフやシモリ根の棚・オーバーハング）",
    "averageSize": "35cm〜55cm (60cm〜70cm超は幻の「ナナマル」)",
    "recordSize": "82cm (8.7kg)",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      5,
      6,
      9,
      10,
      11
    ],
    "difficulty": 5,
    "edibleRating": 5,
    "cookingMethods": [
      "本石の薄造り・刺身（皮湯引き付き）",
      "イシダイの兜煮・煮付け",
      "塩焼き",
      "潮汁・アラ汁",
      "握り寿司"
    ],
    "recommendedRigs": [
      "イシダイ専用底物仕掛け (イシダイ竿H + 両軸リール + ワイヤーハリス + イシダイ針15〜18号 + 捨てオモリ25〜35号)",
      "南方宙釣り仕掛け"
    ],
    "bestTime": "朝夕マズメ・大潮の上げ潮・満潮前後の潮止まり",
    "favoriteBaits": [
      "ガンガゼウニ / バフンウニ",
      "サザエ",
      "ヤドカリ",
      "トコブシ",
      "サルエビ"
    ],
    "fishingTips": "ウニ通しで針に刺したウニを海底のタナへ送り込み、置き竿にして前アタリを待ちます。「コツッ…コツッ」という前アタリに焦らず、本命がエサをくわえて一気に竿先が海中へ突き刺さる「舞い込み（本アタリ）」まで我慢してから豪快にアワセを入れます。",
    "isDangerous": false
  },
  {
    "id": "kue",
    "name": "クエ / アラ / モロコ (九絵 / 幻の巨大魚)",
    "kana": "くえ / あら / もろこ",
    "scientificName": "Epinephelus bruneus",
    "category": "bottom_rock",
    "description": "体長1m・体重30kg以上に成長するハタ科の最高峰にして「幻の巨大魚」。九州では「アラ」、伊豆・紀伊半島では「モロコ」と呼ばれる。夜の地磯・沖磯から超ヘビータックルで狙う一世一代の好敵手。コラーゲンと極上の脂に満ちた「クエ鍋」は日本最高の冬の味覚。",
    "habitat": "外洋に面した断崖絶壁の地磯・深海の海溝・沈み根の洞窟・テトラ帯",
    "waterLayer": "bottom",
    "waterLayerText": "完全な底層（海底の洞窟や大岩の隙間に潜伏し夜間に捕食活動）",
    "averageSize": "60cm〜90cm (メーター超え・20〜40kg級のモンスターも)",
    "recordSize": "145cm (48kg)",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 5,
    "edibleRating": 5,
    "cookingMethods": [
      "本クエ鍋（極上のコラーゲンと出汁）",
      "薄造り（肝和え・胃袋湯引き）",
      "クエの煮付け",
      "カマの塩焼き",
      "唐揚げ"
    ],
    "recommendedRigs": [
      "クエ専用板バネ仕掛け (クエ竿100号 + 大型両軸リール + ナイロン80〜100号 + ワイヤーハリス + クエ針35〜45号 + 捨てオモリ50〜80号)"
    ],
    "bestTime": "完全な夜間（日没後〜深夜）・潮止まり前後の緩み",
    "favoriteBaits": [
      "活きサバ / 活きアジ",
      "サバ丸ごと（1匹掛け）",
      "冷凍ムロアジ",
      "ソウダガツオ",
      "活きイカ"
    ],
    "fishingTips": "竿受けを磯の岩盤にアンカーボルトで強固に固定し、エサを海底の巣穴付近に鎮座させます。ヒット時は車が引っ張るような衝撃で竿がへし曲がるため、掛けた瞬間に根に潜らせないよう全力でウインチのようにリールを巻く超怪力勝負となります。",
    "isDangerous": false
  },
  {
    "id": "oonibe",
    "name": "オオニベ (大長魚 / サーフの巨魚)",
    "kana": "おおにべ",
    "scientificName": "Nibea japonica",
    "category": "blue_pelagic",
    "description": "宮崎県日向灘や静岡県遠州灘・高知県土佐湾の広大サーフを回遊する日本最大のニベ科魚類。体長1.5m・体重30kg超に達し、ショアから狙える最大級のターゲットとして全国のアングラーが冬の冷たい砂浜に集結する。強烈なトルクのファイトと白身の美味が魅力。",
    "habitat": "外洋に面した広大なサーフ・砂浜・河口域・沖合の水深10〜50m",
    "waterLayer": "all",
    "waterLayerText": "中層〜底層（コノシロやグチの群れを追って波打ち際まで突入）",
    "averageSize": "80cm〜120cm (150cm・30kg超は夢のトロフィー)",
    "recordSize": "162cm (38.5kg)",
    "activeMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "peakMonths": [
      12,
      1,
      2
    ],
    "difficulty": 5,
    "edibleRating": 4,
    "cookingMethods": [
      "刺身・しゃぶしゃぶ",
      "オオニベのムニエル",
      "フライ・唐揚げ",
      "アラ炊き・鍋",
      "西京焼き"
    ],
    "recommendedRigs": [
      "サーフヘビータックル (10.6〜11ft Hサーフロッド + 4000〜5000番ハイギア + PE1.5〜2号 + フロロ30〜40lb)",
      "ヘビーシンキングペンシル (120〜140mm)",
      "メタルジグ (40〜50g)"
    ],
    "bestTime": "早朝マズメ・夕マズメ・夜間・ベイト（コノシロ）接岸時",
    "favoriteBaits": [
      "ヘビーシンキングペンシル",
      "ロングミノー (140〜175mm)",
      "メタルバイブレーション (35g)",
      "活きコノシロ"
    ],
    "fishingTips": "冬のサーフでカモメの群れや波打ち際に打ち上げられるコノシロを探し、ベイトの群れの下をルアーでスローに通します。バイトは「ズンッ」と根掛かりしたような重量感から始まり、数百メートル走る猛烈なファーストランに耐えて砂浜にずり上げます。",
    "isDangerous": false
  },
  {
    "id": "sakuramasu",
    "name": "サクラマス / 海アメマス (桜鱒 / 降海型トラウト)",
    "kana": "さくらます / うみあめます",
    "scientificName": "Oncorhynchus masou",
    "category": "blue_pelagic",
    "description": "ヤマメが海へ下り、オホーツク海や日本海・太平洋の大海原で銀ピカに育ったサーモン系最高峰の美魚。春に桜が咲く頃に沿岸サーフや地磯へ接岸。サーモンを超える上品で甘い脂の乗りは「魚類最高の美味」と称される北の憧憬ターゲット。",
    "habitat": "北海道・東北沿岸のサーフ・ゴロタ浜・地磯・岬周辺・河口付近",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（水面直下0〜2mの波打ち際を高速回遊）",
    "averageSize": "45cm〜60cm (65cm〜70cm超・4kg以上は「板マス」)",
    "recordSize": "74cm (5.8kg)",
    "activeMonths": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "peakMonths": [
      3,
      4,
      5
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "サクラマスのルイベ・刺身",
      "塩焼き（滴る桜色の脂）",
      "ムニエル（バター醤油）",
      "マス寿司",
      "チャンチャン焼き"
    ],
    "recommendedRigs": [
      "海アメ・サクラマス専用ロッド 10〜11ft + PE1.0〜1.2号 + フロロ16〜20lb",
      "ジグミノー (28〜40g)",
      "メタルジグ (30〜45g)",
      "スリムミノー (120〜140mm)"
    ],
    "bestTime": "早朝マズメ (夜明け〜7:00)・満潮前後の潮の動き出し",
    "favoriteBaits": [
      "ジグミノー（カタクチイワシ・オオナゴカラー）",
      "メタルジグ（ピンク・グリーンゴールド）",
      "スプーン (18〜28g)"
    ],
    "fishingTips": "波打ち際から20〜30mの駆け上がりやブレイクラインを猛スピードで回遊します。ジグミノーをフルキャストし、ファストリトリーブの中に時折トゥイッチやストップを入れて食わせの間を作ります。口が柔らかいため強引に寄せずドラグを使って丁寧にランディング。",
    "isDangerous": false
  },
  {
    "id": "ishimochi",
    "name": "イシモチ / ニベ / シログチ (石持 / 白愚痴)",
    "kana": "いしもち / にべ / しろぐち",
    "scientificName": "Pennahia argentata",
    "category": "popular_coastal",
    "description": "頭骨の中に大きな耳石（石）を持つことから「イシモチ」と呼ばれる。釣り上げると浮き袋を伸縮させて「グーグー」と鳴くのが特徴。九十九里浜や外洋サーフ・堤防の濁り潮や夜釣りで大人気。新鮮な個体の塩焼きや昆布締めは上品な白身で絶品。",
    "habitat": "外洋サーフ・砂泥底の海岸・河口域・港湾堤防（水深2〜20m）",
    "waterLayer": "bottom",
    "waterLayerText": "底層（海底の砂泥地を群れで回遊しながらエサを探す）",
    "averageSize": "20cm〜30cm (35cm超は大型)",
    "recordSize": "45cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 1,
    "edibleRating": 4,
    "cookingMethods": [
      "塩焼き（振り塩で身を締めてから）",
      "昆布締め・刺身（当日新鮮なもの）",
      "天ぷら・フライ",
      "イシモチのつみれ汁",
      "南蛮漬け"
    ],
    "recommendedRigs": [
      "サーフ投げ釣り胴突き2〜3本針仕掛け (丸セイゴ12〜14号 + オモリ15〜25号)",
      "チョイ投げ仕掛け",
      "ぶっこみ釣り"
    ],
    "bestTime": "夕マズメ〜夜間・雨後の濁り潮が入った日・上げ潮時",
    "favoriteBaits": [
      "青イソメ (房掛け)",
      "岩イソメ (マムシ)",
      "ジャリメ",
      "サンマ切り身"
    ],
    "fishingTips": "波打ち際の濁りの中に群れが入ってきます。イソメを2〜3匹たっぷり房掛けにして投げ込み、置き竿にしてアタリを待ちます。「グングンッ！」と竿先が激しく揺れたら軽くアワセて巻き上げます。鮮度落ちが早いため釣れたら即座に氷締めしましょう。",
    "isDangerous": false
  },
  {
    "id": "shimaaji",
    "name": "シマアジ (縞鯵 / 究極の高級アジ)",
    "kana": "しまあじ",
    "scientificName": "Pseudocaranx dentex",
    "category": "tasty_table",
    "description": "アジ類の中で最も美味とされ、超高級料亭や寿司屋で珍重される「アジの王様」。体側に走る美しい黄金の縦縞がトレードマーク。伊豆諸島・房総半島・南紀・四国・九州の潮通しの良い地磯や堤防から遠投カゴ釣りやショアジギングで狙う至極のターゲット。",
    "habitat": "黒潮が当たる潮通しの良い沖磯・地磯・外洋堤防（水深5〜30m）",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（潮通しの良い根回りやカケアガリを群れで遊泳）",
    "averageSize": "30cm〜45cm (60cm〜70cm超はオオカミと呼ばれる特大級)",
    "recordSize": "85cm (8.2kg)",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "究極の刺身・握り寿司（とろける脂と上品な歯ごたえ）",
      "シマアジの塩焼き",
      "カマ焼き",
      "カルパッチョ",
      "潮汁"
    ],
    "recommendedRigs": [
      "遠投カゴ釣り仕掛け (ハリス3〜5号 + チヌ針3〜5号 + クッションゴム)",
      "SLJ / ショアジギング (30〜60g)",
      "ウキフカセ仕掛け"
    ],
    "bestTime": "早朝マズメ・夕マズメ・潮が激しく動く時間帯",
    "favoriteBaits": [
      "オキアミ生・ボイル",
      "アミエビ",
      "イカ短冊",
      "マイクロジグ"
    ],
    "fishingTips": "口元（口唇部）が非常に柔らかく「口切れ」によるバラシが多発します。強烈な突進力を受け止めるためにクッションゴムを装着し、無理にゴリ巻きせずロッドのしなりとドラグでいなしながら慎重にタモ網ですくいます。",
    "isDangerous": false
  },
  {
    "id": "korodai",
    "name": "コロダイ / シブダイ (胡椒鯛 / 白星笛吹 / 夜の怪力魚)",
    "kana": "ころだい / しぶだい",
    "scientificName": "Diagramma pictum",
    "category": "tasty_table",
    "description": "南紀・四国・九州の黒潮洗うサーフや地磯で、夏の夜釣りを熱狂させる怪力白身魚。コロダイは黒い斑点と分厚い唇を持ち、シブダイ（フエダイ/シロテン）は「幻の超高級魚」として白身に霜降り状の極上の脂を蓄える。竿ごと海に引きずり込む激震のアタリが魅力。",
    "habitat": "温暖な砂利浜サーフ・岩礁混じりのゴロタ場・地磯の深場（水深3〜20m）",
    "waterLayer": "bottom",
    "waterLayerText": "底層（日中は深場に潜み、夜間に波打ち際の浅瀬までエサを求めて突入）",
    "averageSize": "40cm〜60cm (70cm〜80cm超はモンスター級)",
    "recordSize": "88cm (9.5kg)",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      7,
      8,
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "シブダイの刺身（極上脂の霜降り白身）",
      "コロダイのカルパッチョ",
      "ポワレ・ムニエル",
      "塩焼き・兜焼き",
      "ちり鍋"
    ],
    "recommendedRigs": [
      "夜釣りぶっこみ仕掛け (タマン竿/投げ竿 + 大型スピニング + PE5〜8号 + ハリス10〜14号 + タマン針20号 + 捨てオモリ25〜35号)",
      "夜釣り電気ウキフカセ"
    ],
    "bestTime": "完全な夜間（日没後〜深夜）・満潮前後の潮の緩み",
    "favoriteBaits": [
      "キビナゴ",
      "イカの短冊",
      "イワシの切り身",
      "青イソメ房掛け",
      "活きエビ"
    ],
    "fishingTips": "夜間の浅瀬（サーフの波打ち際から数十メートル、地磯の足元）にエサを放り込み、竿受けに尻手ロープを必ず掛けて待ちます。アタリは前触れなく竿が満月に曲がり込むため、即座に竿を立てて根から引き離します。シブダイの刺身は一度食べると忘れられない至高の美味。",
    "isDangerous": false
  },
  {
    "id": "isomaguro",
    "name": "イソマグロ / 本カツオ (磯鮪 / ドッグトゥースツナ)",
    "kana": "いそまぐろ / ほんかつお",
    "scientificName": "Gymnosarda unicolor",
    "category": "blue_pelagic",
    "description": "鋭い犬のような牙（ドッグトゥース）を持ち、南西諸島（沖縄・トカラ・奄美・小笠原）の荒磯に君臨するショア最強のスピードファイター。時速80kmとも言われる超高速突進とダイビングペンシルへの爆裂バイトで、ショアアングラーの極限に挑む熱いターゲット。",
    "habitat": "黒潮本流が激突する外洋絶壁地磯・岬先端・リーフエッジ（水深10〜50m）",
    "waterLayer": "all",
    "waterLayerText": "表層〜中層・ドロップオフ（深い海溝から水面のベイトを急襲）",
    "averageSize": "70cm〜120cm (20kg〜40kg超のモンスターも)",
    "recordSize": "205cm (131kg)",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      8
    ],
    "difficulty": 5,
    "edibleRating": 3,
    "cookingMethods": [
      "竜田揚げ・フライ",
      "カツオのタタキ・ガーリックステーキ",
      "生姜醤油漬け焼き",
      "角煮"
    ],
    "recommendedRigs": [
      "超ヘビーショアキャスティング (GT/マグロ専用HHHロッド + 14000〜18000番リール + PE6〜8号 + ショックリーダー130〜170lb)",
      "大型ポッパー / ダイビングペンシル (180〜220mm)",
      "ヘビーメタルジグ (120〜200g)"
    ],
    "bestTime": "早朝マズメ・夕マズメ・満潮から干潮への急流時",
    "favoriteBaits": [
      "大型トップウォータープラグ",
      "ヘビーシンキングペンシル",
      "活きムロアジ / グルクン"
    ],
    "fishingTips": "激流のヨレへポッパーをキャストし、強烈な水飛沫とともに誘い出します。ヒット直後はドラグが火を吹く猛烈なファーストランで海底のリーフエッジへ突進するため、フルドラグ（10kg以上）で耐えて根ズレを防ぐ超絶パワーファイトが不可欠です。",
    "isDangerous": false
  },
  {
    "id": "datsu",
    "name": "ダツ / オキザヨリ / テンジクダツ (駄津 / 針口魚)",
    "kana": "だつ / おきざより / てんじくだつ",
    "scientificName": "Strongylura anastomella / Tylosurus crocodilus",
    "category": "popular_coastal",
    "description": "細長い魚体と鋭いハサミのような牙口を持つ表層のプレデター。サーフや磯のトップウォーターゲームでルアーに水面を飛び跳ねながら猛烈チェイスする好敵手。夜間に光に向かって猛スピードでジャンプ・突進する危険な習性も併せ持つ。骨が青緑色だが白身は唐揚げや干物で美味。",
    "habitat": "外洋サーフ・磯場・港湾・リーフ周辺（水深0〜5mの極めて表層）",
    "waterLayer": "surface",
    "waterLayerText": "極めて表層（水面直下を群れで滑走）",
    "averageSize": "60cm〜90cm (1m超のオキザヨリ・テンジクダツも)",
    "recordSize": "120cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 1,
    "edibleRating": 3,
    "cookingMethods": [
      "唐揚げ・竜田揚げ",
      "塩焼き",
      "みりん干し・一夜干し",
      "天ぷら",
      "つみれ汁"
    ],
    "recommendedRigs": [
      "トップウォータープラグ (ポッパー/ペンシル)",
      "ミノー / メタルジグ (20〜40g)",
      "カゴ釣り / サヨリ仕掛け"
    ],
    "bestTime": "日中（晴天時）・朝夕マズメ",
    "favoriteBaits": [
      "トップウォーターミノー",
      "メタルジグ",
      "キビナゴ",
      "オキアミ"
    ],
    "fishingTips": "水面をスキッピング（早巻きで水面を滑らせる）させると、水面を激しくジャンプしながらアタックしてきます。口先が硬いクチバシ状のためフッキングが難しいですが、しっかり追いアワセを決めると豪快なジャンプファイトが楽しめます。※夜釣りの際は海面をライトで照らすとダツが光に突進してくる危険があるため注意。",
    "isDangerous": true,
    "dangerNotes": "夜間に海面を強いライトで照らすと、光に向かって時速50km超で矢のようにジャンプ・突進してくる極めて危険な習性があります。夜釣りで海面を不用意に照らさないよう厳重注意してください。また口先の鋭い歯にも注意。"
  },
  {
    "id": "oomonhata",
    "name": "オオモンハタ (大紋羽太)",
    "kana": "おおもんはた",
    "scientificName": "Epinephelus areolatus",
    "category": "bottom_rock",
    "description": "網目状の美しい斑点と尾びれの白い縁取りが特徴の遊泳性ハタ。ボトムから中層までイワシなどの小魚を猛追し、強烈なバイトでルアーロッドを絞り込みます。",
    "habitat": "本州中部以南の温暖な岩礁帯・砂礫底混じりの磯・防波堤・サーフ隣接エリア",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（底から5m以上巻き上げて追尾してくる）",
    "averageSize": "30cm〜45cm (50cm超でランカー)",
    "recordSize": "58cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・炙り",
      "カルパッチョ",
      "ポワレ",
      "煮付け",
      "潮汁"
    ],
    "recommendedRigs": [
      "ジグヘッドスイミングリグ (20〜40g + シャッドテールワーム 4inch)",
      "メタルジグ (30〜45g)"
    ],
    "bestTime": "日中〜マズメ（澄み潮の晴天時に好反応）",
    "favoriteBaits": [
      "シャッドテールワーム",
      "カタクチイワシ",
      "メタルジグ"
    ],
    "fishingTips": "一度底を取ってから、リールを中層まで一定速度でスイミング（ただ巻き）。グンッ！とひったくるような豪快なバイトが出ます。",
    "isDangerous": false
  },
  {
    "id": "barahata",
    "name": "バラハタ / ナガジューミーバイ (薔薇羽太)",
    "kana": "ばらはた / ながじゅーみーばい",
    "scientificName": "Variola louti",
    "category": "bottom_rock",
    "description": "三日月型の尾びれと美しいグラデーションを持つ南洋・小笠原・沖縄の大型ハタ。ルアーへの果敢なアタックと強烈な引きで人気（※大型個体はシガテラ毒の可能性に注意）。",
    "habitat": "小笠原諸島・南西諸島・トカラ列島のサンゴ礁リーフ・ドロップオフ・外洋沖磯",
    "waterLayer": "bottom",
    "waterLayerText": "底層〜中層（リーフエッジの深みからチェイス）",
    "averageSize": "40cm〜65cm (80cm超に成長)",
    "recordSize": "85cm",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      5,
      6,
      7,
      8,
      9
    ],
    "difficulty": 3,
    "edibleRating": 3,
    "cookingMethods": [
      "唐揚げ",
      "バター焼き",
      "煮付け（※熱帯・大型個体はシガテラ注意）"
    ],
    "recommendedRigs": [
      "ショアジギング (40〜80g)",
      "大型シンペン",
      "タマン仕掛け"
    ],
    "bestTime": "日中〜マズメ",
    "favoriteBaits": [
      "メタルジグ",
      "イカ切り身",
      "小魚"
    ],
    "fishingTips": "リーフエッジの深みへメタルジグを投げてワンピッチジャーク。強烈に竿を引き込みます。",
    "isDangerous": true,
    "dangerNotes": "大型個体（特に50cm以上）はシガテラ毒（強力な神経毒）を保有しているリスクがあります。熱帯・亜熱帯海域で釣れた大型個体は食用を避けてリリースしてください。"
  },
  {
    "id": "shirodai",
    "name": "シロダイ (白鯛 / タマミ)",
    "kana": "しろだい",
    "scientificName": "Gymnocranius grandoculis",
    "category": "bottom_rock",
    "description": "小笠原・南西諸島・黒潮洗う南紀四国を代表する超怪力フエダイ。夜釣りの打ち込み仕掛けで竿をへし折るような猛烈な引きを見せるナイトゲームの王者。",
    "habitat": "小笠原諸島・南西諸島・太平洋暖海域の深場岩礁帯・サンゴ礁・沖堤防",
    "waterLayer": "bottom",
    "waterLayerText": "底層（水深10〜40mの岩礁・砂礫底）",
    "averageSize": "40cm〜65cm (70cm超・6kg以上実績多数)",
    "recordSize": "80cm / 8.5kg",
    "activeMonths": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      5,
      6,
      7,
      8
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・薄造り（脂が乗り極上の美味）",
      "兜煮・あら炊き",
      "塩焼き",
      "マース煮"
    ],
    "recommendedRigs": [
      "打ち込み仕掛け (PE6〜8号 + タマン針22〜24号 + イカ1匹掛け/ムロアジ)"
    ],
    "bestTime": "夜間（日没後〜深夜）",
    "favoriteBaits": [
      "イカ丸ごと",
      "ムロアジ切り身",
      "タコ脚"
    ],
    "fishingTips": "アタリは一撃で竿尻が跳ね上がります。強固に固定したピトンから素早く竿を外し、根に潜られないよう全力でポンピングします。",
    "isDangerous": false
  },
  {
    "id": "nanyoukaiwari",
    "name": "ナンヨウカイワリ / カッポレ (南洋甘木)",
    "kana": "なんようかいわり",
    "scientificName": "Carangoides orthogrammus",
    "category": "blue_pelagic",
    "description": "黄色い斑点と体高のある菱形の魚体が特徴の南洋ヒラアジ。八丈島や小笠原、南西諸島でジギングやフカセ釣りに強烈にヒット。刺身はアジ類最高峰の濃厚な脂。",
    "habitat": "伊豆諸島・小笠原・南西諸島の外洋急深岩礁・堤防先端",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層付近",
    "averageSize": "35cm〜55cm (70cm超に成長)",
    "recordSize": "78cm / 6.8kg",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身（濃厚な脂と強い旨味）",
      "塩焼き",
      "なめろう",
      "照り焼き"
    ],
    "recommendedRigs": [
      "ショアジギング (40〜80g)",
      "カゴ釣り",
      "ウキフカセ釣り"
    ],
    "bestTime": "朝夕マズメ・上げ潮時",
    "favoriteBaits": [
      "メタルジグ",
      "オキアミ",
      "小魚"
    ],
    "fishingTips": "ボトムから中層までシャープにワンピッチジャーク。アジ特有の強い引きとスピードで楽しませてくれます。",
    "isDangerous": false
  },
  {
    "id": "muroaji",
    "name": "ムロアジ / クサヤモロ (室鯵)",
    "kana": "むろあじ / くさやまろ",
    "scientificName": "Decapterus muroadsi / Decapterus macarellus",
    "category": "popular_coastal",
    "description": "伊豆諸島名産「くさや」の原料として名高い赤身の大型アジ。泳がせ釣りの最強の活きエサ（大物特効エサ）としても欠かせず、釣りたての刺身や塩焼きも美味。",
    "habitat": "伊豆諸島・小笠原・太平洋沿岸の潮通しの良い堤防・外洋",
    "waterLayer": "middle",
    "waterLayerText": "中層〜表層（群れで猛スピードで泳ぐ）",
    "averageSize": "25cm〜40cm",
    "recordSize": "50cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "difficulty": 1,
    "edibleRating": 4,
    "cookingMethods": [
      "くさや",
      "刺身（釣りたて限定）",
      "なめろう",
      "塩焼き",
      "フライ"
    ],
    "recommendedRigs": [
      "サビキ仕掛け (ハゲ皮 6〜8号)",
      "カゴ釣り",
      "ライトジグ"
    ],
    "bestTime": "朝夕マズメ・日中",
    "favoriteBaits": [
      "アミエビ",
      "オキアミ",
      "小型メタルジグ"
    ],
    "fishingTips": "サビキで足元を激しく上下させると群れで突進してきます。釣れたら活かしバッカンで活かしてカンパチやヒラマサの泳がせ釣りに使います。",
    "isDangerous": false
  },
  {
    "id": "tokajya",
    "name": "トカジャー / ニザダイ (三の字)",
    "kana": "とかじゃー / にざだい",
    "scientificName": "Prionurus scalprum / Acanthurus dussumieri",
    "category": "bottom_rock",
    "description": "尾柄部に鋭い骨質板（サンノジ）を持つ超怪力磯魚。沖縄では「トカジャー」と呼ばれフカセ釣りの大人気強烈ターゲット。冬場に適切な血抜きと内臓処理を行えば美味しい。",
    "habitat": "本州中部以南・四国・九州・沖縄・小笠原の磯・サンゴ礁・テトラ帯",
    "waterLayer": "middle",
    "waterLayerText": "中層〜底層（海藻や岩肌をついばむ）",
    "averageSize": "30cm〜50cm (60cm超で巨大)",
    "recordSize": "68cm",
    "activeMonths": [
      1,
      2,
      3,
      4,
      10,
      11,
      12
    ],
    "peakMonths": [
      11,
      12,
      1,
      2,
      3
    ],
    "difficulty": 3,
    "edibleRating": 3,
    "cookingMethods": [
      "刺身（冬の新鮮個体・血抜き必須）",
      "味噌煮",
      "唐揚げ",
      "フライ"
    ],
    "recommendedRigs": [
      "ウキフカセ仕掛け (ハリス太め2.5〜4号)"
    ],
    "bestTime": "日中〜マズメ",
    "favoriteBaits": [
      "オキアミ",
      "海苔",
      "練りエサ"
    ],
    "fishingTips": "掛けた瞬間のスピードとトルクはグレ以上。尾びれの付け根にあるトゲ（メス）で手を切らないようタオル等で掴んで針を外します。",
    "isDangerous": true,
    "dangerNotes": "尾ビレの付け根（尾柄部）にある骨質板（メス状の突起）が非常に鋭利で、暴れた際に素手で触ると深く切り裂かれます。針外し時はタオル等で魚体を固定してください。"
  },
  {
    "id": "shibudai",
    "name": "シブダイ / ハマダイ / フエダイ (白点)",
    "kana": "しぶだい / ふえだい",
    "scientificName": "Lutjanus stellatus / Lutjanus rivulatus",
    "category": "bottom_rock",
    "description": "「夏の夜釣りの王様」と呼ばれる超高級魚（キロ1万円超の市場値）。体側の白点が目印。強烈な引きと、全身に霜降り状に入った濃厚な脂・甘みは魚類最高峰。",
    "habitat": "紀伊半島・四国・九州南部・屋久島・奄美・沖縄の外洋荒磯・深場堤防",
    "waterLayer": "bottom",
    "waterLayerText": "底層（夜間に海底の岩礁スリットから浅場へ索餌回遊）",
    "averageSize": "35cm〜55cm (60cm超で特大)",
    "recordSize": "68cm / 5.2kg",
    "activeMonths": [
      6,
      7,
      8,
      9,
      10
    ],
    "peakMonths": [
      7,
      8,
      9
    ],
    "difficulty": 4,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・炙り（全身大トロ・超絶美味）",
      "兜焼き",
      "煮付け",
      "潮汁"
    ],
    "recommendedRigs": [
      "夜釣りシブダイ専用ぶっこみ仕掛け (PE6〜8号 + タマン針20〜22号 + キビナゴ/イワシ)",
      "ウキフカセ夜太仕掛け"
    ],
    "bestTime": "完全な夜間（日没後〜深夜）",
    "favoriteBaits": [
      "キビナゴ (房掛け)",
      "イワシ1匹掛け",
      "オキアミボイル",
      "イカ短冊"
    ],
    "fishingTips": "夜間に磯際やシモリ根の際へキビナゴを投入。一瞬で竿がへし折れんばかりに舞い込むため、竿尻をロープで固定して臨みます。",
    "isDangerous": false
  },
  {
    "id": "katsuo",
    "name": "カツオ / ハガツオ (鰹 / 歯鰹)",
    "kana": "かつお / はがつお",
    "scientificName": "Katsuwonus pelamis / Sarda orientalis",
    "category": "blue_pelagic",
    "description": "黒潮に乗って北上する日本の伝統魚カツオと、鋭い歯を持つ「キツネ（ハガツオ）」。ハガツオは身が非常に柔らかく、脂の甘みと旨味は本ガツオを凌ぐと絶賛される極上ターゲット。",
    "habitat": "外洋性の岬先端・沖磯・潮通しの良い深場堤防・伊豆・紀伊・四国・九州・沖縄",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（激しい鳥山とナブラを形成）",
    "averageSize": "40cm〜60cm (70cm超で大型)",
    "recordSize": "85cm / 7.2kg",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "カツオのタタキ（藁焼き）",
      "ハガツオの刺身（絶品モチモチ食感）",
      "漬け丼",
      "竜田揚げ",
      "塩焼き"
    ],
    "recommendedRigs": [
      "ショアジギング (40〜80g)",
      "ヘビーシンキングミノー (35〜50g)",
      "弓角仕掛け"
    ],
    "bestTime": "朝マズメ・黒潮分流が接岸した時合",
    "favoriteBaits": [
      "カタクチイワシ",
      "キビナゴ",
      "メタルジグ"
    ],
    "fishingTips": "ナブラの直撃または潮目へルアーを遠投し、スキッピングやハイスピードリトリーブ。一気に竿が曲がり強烈なバイブレーションが伝わります。",
    "isDangerous": false
  },
  {
    "id": "kihada",
    "name": "キハダマグロ / メジ (黄肌鮪)",
    "kana": "きはだまぐろ / めじ",
    "scientificName": "Thunnus albacares",
    "category": "blue_pelagic",
    "description": "黄色いヒレが特徴のパワフルな大型マグロ。ショアから狙える離島（小笠原・八丈島・沖縄・奄美）では20kg〜40kg超が回遊し、全国のビッグゲームアングラーが挑む究極の夢。",
    "habitat": "黒潮本流直撃の離島堤防・外洋沖磯・岬先端（小笠原・八丈島・トカラ・沖縄）",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（イワシやトビウオを追ってボイル）",
    "averageSize": "70cm〜130cm (ショアで10kg〜30kg超)",
    "recordSize": "190cm / 80kg (ショア記録)",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 5,
    "edibleRating": 5,
    "cookingMethods": [
      "キハダの刺身・中落ち",
      "漬け丼",
      "カマ焼き",
      "レアカツ",
      "カルパッチョ"
    ],
    "recommendedRigs": [
      "ヘビーショアキャスティング (ダイビングペンシル 160〜200mm)",
      "ヘビーショアジギング (80〜150g)",
      "泳がせ釣り"
    ],
    "bestTime": "朝夕マズメ・上げ潮時・トビウオ接岸時",
    "favoriteBaits": [
      "トビウオ",
      "ムロアジ",
      "マイワシ",
      "大型ダイビングペンシル"
    ],
    "fishingTips": "ボイル撃ちが基本。ダイビングペンシルを滑らかに引いてアピールし、ヒット後は数十メートルの疾走を耐えてからリフトします。",
    "isDangerous": false
  },
  {
    "id": "kouika",
    "name": "コウイカ / スミイカ / カミナリイカ (甲烏賊)",
    "kana": "こういか / すみいか",
    "scientificName": "Sepia esculenta",
    "category": "popular_coastal",
    "description": "背中に硬い甲（貝殻）を持つ愛嬌あるイカ。大量の墨を吐くことから「スミイカ」と呼ばれる。肉厚でモッチリとした歯ごたえと甘みが強く、江戸前寿司の最高級ネタ。",
    "habitat": "内湾・砂泥底の港湾・堤防・海釣り公園・サーフ",
    "waterLayer": "bottom",
    "waterLayerText": "完全底層（砂泥底に腹をつけて潜む）",
    "averageSize": "15cm〜25cm (胴長)",
    "recordSize": "32cm",
    "activeMonths": [
      3,
      4,
      5,
      9,
      10,
      11,
      12
    ],
    "peakMonths": [
      4,
      5,
      10,
      11
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "握り寿司・刺身（パキッとした食感と甘み）",
      "天ぷら（絶品）",
      "墨煮・イカスミパスタ",
      "煮付け"
    ],
    "recommendedRigs": [
      "エギング (底ズル引き専用スナップ/ナス型オモリ付き)",
      "胴突きスッテ仕掛け",
      "エギ (3.0〜3.5号)"
    ],
    "bestTime": "朝夕マズメ・日中・満潮前後",
    "favoriteBaits": [
      "エギ (ピンク/オレンジ/ゴールド系)",
      "エギ用オモリ",
      "キビナゴ"
    ],
    "fishingTips": "アオリイカと異なり「底をズル引きしてステイ」させるのが最大のコツ。重みを感じたらしっかりアワセを入れ、墨を吐かせてから取り込みます。",
    "isDangerous": false
  },
  {
    "id": "hiika",
    "name": "ヒイカ / ジンドウイカ (樋烏賊)",
    "kana": "ひいか / じんどういか",
    "scientificName": "Loliolus beka",
    "category": "popular_coastal",
    "description": "冬の港湾・ベイエリアに大群で押し寄せる手のひらサイズの可愛いツツイカ。小型エギ（1.5〜1.8号）を使ったライトエギングで連発し、丸ごと煮付けやボイルが最高。",
    "habitat": "内湾・都市港湾・運河・海釣り公園・常夜灯のある波止",
    "waterLayer": "all",
    "waterLayerText": "全層（常夜灯の明かりの表層から底まで）",
    "averageSize": "8cm〜14cm (胴長)",
    "recordSize": "18cm",
    "activeMonths": [
      10,
      11,
      12,
      1,
      2
    ],
    "peakMonths": [
      11,
      12,
      1
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "丸ごと甘辛煮付け",
      "丸ごとボイルポン酢",
      "イカ飯",
      "アヒージョ",
      "天ぷら"
    ],
    "recommendedRigs": [
      "ナオリー / 小型エギ (1.5〜1.8号)",
      "胴突きスッテ仕掛け",
      "電気ウキモエビ仕掛け"
    ],
    "bestTime": "夜間（常夜灯の明暗部周辺）",
    "favoriteBaits": [
      "モエビ (活きエビ)",
      "小型エギ (1.5号)",
      "スッテ"
    ],
    "fishingTips": "アジングロッド等のライトタックルで小型エギをキャスト。軽く2回チョンチョンとシャクって水平フォールさせるとツンッとアタリが出ます。",
    "isDangerous": false
  },
  {
    "id": "kubushimi",
    "name": "クブシミ / トラフコウイカ (大甲烏賊)",
    "kana": "くぶしみ / とらふこういか",
    "scientificName": "Sepia latimanus",
    "category": "popular_coastal",
    "description": "沖縄・南西諸島・小笠原で獲れる国内最大級の巨大コウイカ（5kg〜10kg超）。トラ柄の模様が美しく、エギングでドラグが唸る大物ファイト。刺身は驚くほど甘く肉厚。",
    "habitat": "沖縄・奄美・小笠原諸島のサンゴ礁リーフ・港湾・急深波止",
    "waterLayer": "bottom",
    "waterLayerText": "底層（水深5〜20mのサンゴ礁スリットや砂底）",
    "averageSize": "30cm〜60cm (3kg〜8kg超実績多数)",
    "recordSize": "75cm / 12kg",
    "activeMonths": [
      11,
      12,
      1,
      2,
      3,
      4,
      5
    ],
    "peakMonths": [
      12,
      1,
      2,
      3
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "刺身・握り（肉厚で濃厚な甘み）",
      "イカスミ汁",
      "天ぷら",
      "チャンプルー"
    ],
    "recommendedRigs": [
      "エギング (3.5〜4.0号 + シンカー追加)",
      "夜釣り泳がせ仕掛け"
    ],
    "bestTime": "夕マズメ〜夜間・朝マズメ",
    "favoriteBaits": [
      "大型エギ (ディープタイプ)",
      "活きグルクン",
      "魚の切り身"
    ],
    "fishingTips": "ボトムを徹底的に攻めます。エギを底にステイさせてゆっくり引くと、根掛かりのような重みで巨大なクブシミが乗ってきます。",
    "isDangerous": false
  },
  {
    "id": "hotaruika",
    "name": "ホタルイカ (蛍烏賊)",
    "kana": "ほたるいか",
    "scientificName": "Watasenia scintillans",
    "category": "popular_coastal",
    "description": "富山湾の神秘として国の特別天然記念物にも指定される青白く光る小型イカ。春の深夜〜未明に新月の大潮で砂浜へ大群が身投げ（接岸）し、タモ網での掬いやルアー釣りが春の名物。",
    "habitat": "富山湾・日本海の沖合深海（春の産卵期に沿岸サーフ・堤防へ接岸）",
    "waterLayer": "surface",
    "waterLayerText": "夜間に海底深層から波打ち際の超表層へ浮上",
    "averageSize": "5cm〜8cm",
    "recordSize": "10cm",
    "activeMonths": [
      3,
      4,
      5
    ],
    "peakMonths": [
      3,
      4,
      5
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "釜揚げ・ボイル酢味噌（春の至福）",
      "沖漬け",
      "天ぷら",
      "佃煮・串焼き"
    ],
    "recommendedRigs": [
      "タモ網（ウェーディング掬い）",
      "ホタルイカパターンルアー (ズィークイッド/フラッター等)"
    ],
    "bestTime": "新月の深夜23時〜未明4時（南風・波静かな夜）",
    "favoriteBaits": [
      "青色発光ルアー",
      "集魚灯"
    ],
    "fishingTips": "「ホタルイカの身投げ」の夜は、イカ掬いだけでなく、ホタルイカを捕食しに狂乱接岸する大型クロダイ・シーバス・メバル・キジハタがルアーで爆釣します。",
    "isDangerous": false
  },
  {
    "id": "anago",
    "name": "マアナゴ / アナゴ (真穴子)",
    "kana": "まあなご / あなご",
    "scientificName": "Conger myriaster",
    "category": "popular_coastal",
    "description": "江戸前天ぷら・寿司の代表格。夜の堤防や海釣り公園のぶっこみ釣りで鈴の音とともにヒットする夏の夜釣りの大人気ターゲット。ふっくら柔らかな煮穴子や天ぷらは絶品。",
    "habitat": "全国の内湾・砂泥底の港湾・堤防・海釣り公園・河口",
    "waterLayer": "bottom",
    "waterLayerText": "完全底層（海底の砂泥や石の隙間から夜間に索餌）",
    "averageSize": "30cm〜50cm (60cm超で「デカ穴子」)",
    "recordSize": "90cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 1,
    "edibleRating": 5,
    "cookingMethods": [
      "煮穴子・穴子丼（ふわふわ極上）",
      "天ぷら",
      "白焼き（わさび醤油）",
      "八幡巻き"
    ],
    "recommendedRigs": [
      "夜釣りぶっこみ2〜3本針仕掛け (うなぎ・アナゴ針10〜12号 + ケミホタル + オモリ10〜20号)",
      "チョイ投げ仕掛け"
    ],
    "bestTime": "日没後の夜間（夕マズメ〜深夜）",
    "favoriteBaits": [
      "青イソメ (房掛け)",
      "サンマの切り身",
      "サバの切り身",
      "イカ短冊"
    ],
    "fishingTips": "仕掛けの上にケミホタル（発光体）を付けるとアピール抜群。アタリが出たら一気に巻き上げ、仕掛けに巻き付かれないようにします。",
    "isDangerous": false
  },
  {
    "id": "sake",
    "name": "サケ / シロザケ / アキアジ / カラフトマス (鮭)",
    "kana": "さけ / あきあじ",
    "scientificName": "Oncorhynchus keta / Oncorhynchus gorbuscha",
    "category": "bottom_rock",
    "description": "北海道・東北の秋の海岸を熱狂させる「アキアジ」。母なる川へ遡上するために沿岸へ押し寄せる銀ピカの巨体。特大のイクラ（筋子）と豪快なウキルアーフィッシングが大人気。",
    "habitat": "北海道・東北（青森・岩手・宮城）のサーフ・港湾・河口規制外エリア",
    "waterLayer": "surface",
    "waterLayerText": "表層〜中層（水面直下0.5〜2mを群れで回遊）",
    "averageSize": "60cm〜80cm (80cm超・5kg以上で大型)",
    "recordSize": "92cm / 7.8kg",
    "activeMonths": [
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      9,
      10
    ],
    "difficulty": 3,
    "edibleRating": 5,
    "cookingMethods": [
      "自家製イクラの醤油漬け（至高）",
      "鮭のちゃんちゃん焼き",
      "石狩鍋",
      "ルイベ",
      "ハラス焼き"
    ],
    "recommendedRigs": [
      "アキアジ専用ウキルアー仕掛け (フロートウキ + アキアジスプーン 35〜50g + タコベイト + サンマ切り身)",
      "フカセ仕掛け",
      "ぶっこみ仕掛け"
    ],
    "bestTime": "早朝の夜明け前〜朝マズメ・夕マズメ",
    "favoriteBaits": [
      "サンマ切り身 (ニンニク・塩締め・紅染め)",
      "イカ短冊",
      "エビ"
    ],
    "fishingTips": "タナを1〜1.5mに合わせ、ウキが波に揺れる速度でスローリトリーブ。ウキがグーッと引き込まれて完全に海中へ消えたら豪快に合わせます（※河口規制厳守）。",
    "isDangerous": false
  },
  {
    "id": "surumeika",
    "name": "スルメイカ / マイカ / 真烏賊 (鯣烏賊)",
    "kana": "するめいか / まいか",
    "scientificName": "Todarodes pacificus",
    "category": "popular_coastal",
    "description": "日本で最も漁獲される国民的ツツイカ。初夏〜秋に沿岸へ回遊し、夜釣りのテーラー仕掛けやライトエギング、イカメタルで強烈なジェット噴射ファイト。イカそうめんや塩辛が最高。",
    "habitat": "日本海・太平洋沿岸の潮通しの良い堤防・沖堤防・沖合",
    "waterLayer": "middle",
    "waterLayerText": "中層〜表層（夜間に常夜灯や集魚灯周辺へ浮上）",
    "averageSize": "20cm〜30cm (胴長)",
    "recordSize": "38cm",
    "activeMonths": [
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "peakMonths": [
      6,
      7,
      8,
      9
    ],
    "difficulty": 2,
    "edibleRating": 5,
    "cookingMethods": [
      "イカそうめん・刺身（肝醤油）",
      "自家製イカの塩辛（絶品）",
      "イカの一夜干し・焼きイカ",
      "イカ飯",
      "天ぷら"
    ],
    "recommendedRigs": [
      "エギング (2.5〜3.5号)",
      "イカメタル / オモリグ",
      "テーラー電気ウキ仕掛け (キビナゴ/鳥ササミ)"
    ],
    "bestTime": "夜間（日没後〜深夜・常夜灯の明暗部）",
    "favoriteBaits": [
      "キビナゴ",
      "鳥ササミ塩締め",
      "夜光エギ・スッテ"
    ],
    "fishingTips": "夜間に常夜灯の明暗部へテーラーやエギをキャストし、表層から中層をスローにリトリーブ。グンッと重みが乗ったら一気に巻き上げます。",
    "isDangerous": false
  }
];
