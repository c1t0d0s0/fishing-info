import { FishingSpot, RegionId } from "@/types/spot";

export const REGIONS: { id: RegionId; name: string }[] = [
  { id: "kanto", name: "関東" },
  { id: "kansai", name: "関西" },
  { id: "tokai", name: "東海" },
  { id: "hokuriku", name: "北陸" },
  { id: "tohoku", name: "東北" },
  { id: "hokkaido", name: "北海道" },
  { id: "chugoku", name: "中国" },
  { id: "shikoku", name: "四国" },
  { id: "kyushu", name: "九州" },
  { id: "okinawa", name: "沖縄" },
];

export const DEFAULT_SPOTS: FishingSpot[] = [
  // --- 関東エリア ---
  {
    id: "wakasu-park",
    name: "若洲海浜公園 海釣り施設",
    kana: "わかすかいひんこうえん",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都江東区若洲3-1-2",
    lat: 35.6161,
    lng: 139.8322,
    category: "park",
    description: "東京ゲートブリッジを望む都内最大級の無料海釣り公園（利用時間 6:00〜21:00）。安全柵完備でファミリーや初心者にも大人気。",
    accessInfo: "新木場駅より都営バス「木11甲」系統で「若洲キャンプ場前」下車すぐ。首都高湾岸線「新木場IC」より約8分。",
    depthRange: "3m〜7m",
    bottomType: "砂泥・捨て石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: false,
      nightFishingText: "不可 (施設利用 6:00〜21:00)",
      openingHours: "6:00〜21:00",
    },
    targetFish: ["シーバス", "クロダイ", "イシモチ", "アジ", "サッパ", "ハゼ", "テナガエビ", "サヨリ", "カレイ", "ボラ", "メバル", "カサゴ"],
    bestSeasons: {
      spring: ["シーバス", "クロダイ", "メバル", "テナガエビ（人工磯）"],
      summer: ["イシモチ（ぶっこみ）", "アジ", "サッパ", "ハゼ", "テナガエビ", "クロダイ", "ボラ"],
      autumn: ["イシモチ", "サヨリ", "シーバス", "アジ", "サッパ", "ハゼ"],
      winter: ["カレイ", "カサゴ", "シーバス", "寒ボラ"],
    },
    recommendedRigs: ["サビキ釣り (カゴ式)", "トリックサビキ", "チョイ投げ (アンダースロー)", "ヘチ・落とし込み", "テナガエビ仕掛け"],
    localRules: [
      "海釣り施設（海釣り堤防・人工磯）の利用可能時間は 6:00〜21:00 です（夜間・時間外の立ち入り・釣り禁止）",
      "コマセの撒き餌（柄杓などでのバラ撒き）禁止 ※カゴに入れるサビキ・トリックサビキは使用可",
      "オーバースロー（上からの振りかぶり投げ釣り）禁止（安全のためアンダースロー限定）",
      "ウキフカセ釣りはコマセ撒き餌禁止のため不可",
      "ルアー釣りはオーバースロー禁止のため足元のライトゲームやアンダースローキャストのみ",
      "竿出しは1人2本まで",
      "海釣り施設内でのテント設営・BBQ禁止（キャンプ場エリア除く）",
    ],
    parkingDetails: {
      capacity: "普通車 492台（大型バス20台）",
      fee: "普通車 最初の1時間400円（入場後20分無料）/ 以後1時間毎100円 / 24時間最大1,000円（後払い）",
      hours: "6:00〜22:00（時間外の入出庫不可・夜間施錠閉鎖）",
      notes: "若洲公園駐車場。利用時間は6:00〜22:00で、22:00〜翌朝6:00は施錠閉鎖され時間外の入出庫はできません。出口精算（後払い方式）。現金・クレジットカード・電子マネー・交通系ICカード決済に対応。土日祝の開門前や日中は混雑するため、早めの到着をおすすめします。",
    },
    tips: "足元は敷石が入っているため根掛かりに注意。人工磯エリアでは初夏（5〜7月）のテナガエビや根魚（カサゴ・メバル）が狙え、堤防外側では夏〜秋にかけてイシモチの投げ釣りやサビキでのアジ・サッパ、秋のサヨリやボラが快適に楽しめます。",
  },
  {
    id: "honmoku-fishing",
    name: "本牧海づり施設",
    kana: "ほんもくうみづりしせつ",
    region: "kanto",
    prefecture: "神奈川県",
    address: "神奈川県横浜市中区本牧ふ頭1番地",
    lat: 35.4302,
    lng: 139.6867,
    category: "park",
    description: "東京湾の潮流が直接当たる超一級ポイント。アジ・サバ・イワシの回遊魚から大型タチウオ・青物、イシモチ・イイダコまで狙える名所。",
    accessInfo: "横浜駅・桜木町駅から横浜市営バス26系統「海づり桟橋」下車すぐ。首都高湾岸線「本牧ふ頭IC」より約5分。",
    depthRange: "10m〜18m",
    bottomType: "泥・砂泥",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人900円 / 小中学生300円",
      isNightFishingAllowed: false,
    },
    targetFish: ["アジ", "イワシ", "サバ", "タチウオ", "イシモチ", "イナダ", "サゴシ", "シイラ", "シーバス", "クロダイ", "シロギス", "ウミタナゴ", "イイダコ", "ボラ"],
    bestSeasons: {
      spring: ["シロギス", "カレイ", "クロダイ", "ウミタナゴ"],
      summer: ["アジ", "イワシ", "サバ", "タチウオ", "イシモチ", "シイラ（回遊時）", "ボラ"],
      autumn: ["タチウオ", "イナダ", "サゴシ", "アジ", "イシモチ", "イイダコ"],
      winter: ["カレイ", "カサゴ", "メバル", "ウミタナゴ", "寒ボラ"],
    },
    recommendedRigs: ["サビキ釣り", "ショアジギング (メタルジグ20〜40g)", "タチウオテンヤ / ジグヘッド", "チョイ投げ (キス・イシモチ)"],
    localRules: [
      "竿出しは1人2本まで",
      "アンダーハンドキャスト推奨（混雑時のオーバースロー禁止）",
      "ライフジャケット着用必須（無料レンタルあり）",
    ],
    tips: "沖桟橋の外側は潮通しが抜群で大型青物やタチウオ、シイラの回遊実績多数。内側や渡桟橋は足元が穏やかでサビキのアジ・イワシやチョイ投げのイシモチ・イイダコ、ウミタナゴが狙い目です。",
  },
  {
    id: "daikoku-fishing",
    name: "大黒海づり施設",
    kana: "だいこくうみづりしせつ",
    region: "kanto",
    prefecture: "神奈川県",
    address: "神奈川県横浜市鶴見区大黒ふ頭20番地先",
    lat: 35.4521,
    lng: 139.6912,
    category: "park",
    description: "横浜港の赤灯台に位置し、水深と潮流に恵まれた人気海づり施設。タチウオ・アジ・サバ・シーバス・イシモチ・クロダイの実績が高い。",
    accessInfo: "横浜駅・鶴見駅から横浜市営バス17系統「大黒海づり公園」下車すぐ。首都高湾岸線・大黒線「大黒ふ頭IC」より約3分。",
    depthRange: "7m〜15m",
    bottomType: "砂泥・基礎捨石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人900円 / 小中学生300円",
      isNightFishingAllowed: false,
    },
    targetFish: ["アジ", "イワシ", "サバ", "タチウオ", "イシモチ", "シーバス", "クロダイ", "シロギス", "イナダ", "ウミタナゴ", "カサゴ", "メバル", "ボラ"],
    bestSeasons: {
      spring: ["シロギス", "クロダイ", "シーバス", "ウミタナゴ"],
      summer: ["アジ", "イワシ", "サバ", "タチウオ", "イシモチ", "ボラ"],
      autumn: ["タチウオ", "イナダ", "アジ", "イシモチ", "サバ"],
      winter: ["カサゴ", "メバル", "カレイ", "ウミタナゴ", "寒ボラ"],
    },
    recommendedRigs: ["トリックサビキ", "ウキ釣り (電気ウキ)", "ルアー (メタルバイブ/ジグヘッドワーム)", "チョイ投げ仕掛け"],
    localRules: ["竿出しは1人2本まで", "投竿での遠投禁止（足元〜チョイ投げ）", "施設ルールに従うこと"],
    tips: "手前の基礎捨石周りにはカサゴやメバル、クロダイ、ウミタナゴが居着き、沖側はアジ・タチウオやイシモチが回遊します。",
  },
  {
    id: "jogashima-port",
    name: "三浦半島 城ヶ島岸壁・磯",
    kana: "じょうがしま",
    region: "kanto",
    prefecture: "神奈川県",
    address: "神奈川県三浦市三崎町城ヶ島",
    lat: 35.1336,
    lng: 139.6194,
    category: "rock",
    description: "三浦半島の最南端。潮通しが抜群で、地磯からのメジナ・クロダイフカセ釣り、岸壁からのアオリイカ・青物が有名。",
    accessInfo: "三浦海岸駅または三崎口駅から京急バス「城ヶ島」行き終点下車。横浜横須賀道路衣笠ICより三浦縦貫道経由約30分。",
    depthRange: "4m〜15m",
    bottomType: "岩礁・スリット・海藻帯",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["メジナ","クロダイ","イシダイ","アオリイカ","アカハタ","タカベ","ヘダイ","イサキ","カワハギ","イナダ・ショゴ","ウミタナゴ","ボラ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","メジナ","アオリイカ","ウミタナゴ"],
      summer: ["タカベ","アカハタ","イサキ","イシダイ","ショゴ","ボラ"],
      autumn: ["アオリイカ","カワハギ","青物（イナダ・ソウダ）","ヘダイ"],
      winter: ["寒グレ（メジナ）","ウミタナゴ","クロダイ","寒ボラ"],
    },
    recommendedRigs: ["ウキフカセ", "エギング", "ショアジギング", "胴突き"],
    localRules: [
      "地磯エリアは足場が非常に滑りやすいため、スパイクシューズ・ライジャケの完全着用必須",
      "漁港内は漁船の係留ロープや作業エリアへのキャスト厳禁",
      "フカセ釣りのコマセ・オキアミ汚れは必ず海水で洗い流して退去すること",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "城ヶ島ワンデーパス駐車場（島内計 6箇所・約450台）",
      fee: "普通車 1日 500円（平日・休日同額、当日中なら島内指定駐車場を何度でも移動可能）",
      hours: "8:00〜19:00（一部24時間利用可能エリアあり）",
      notes: "「城ヶ島第1〜第4駐車場」など、島内の公営駐車場は1枚の駐車券で共通利用できます。",
    },
    dangerNotes: ["地磯は濡れた海苔で滑りやすいためスパイクシューズ・ライジャケ必須", "大波による波被り注意"],
    tips: "春と秋のエギングは潮が動くタイミングで深場からシャローへ回遊するイカを狙うのが鉄則。磯場は潮位が高くなると退路が絶たれる場所があるため潮時表を厳重確認。",
  },
  {
    id: "oarai-port",
    name: "大洗港・大洗サンビーチ堤防",
    kana: "おおあらいこう",
    region: "kanto",
    prefecture: "茨城県",
    address: "茨城県東茨城郡大洗町港中央",
    lat: 36.3061,
    lng: 140.5715,
    category: "port",
    description: "太平洋に面した広大な港湾。車横付け可能なポイントもあり、サビキのアジ・イワシからヒラメ・タコ・青物まで多彩。",
    accessInfo: "大洗鹿島線「大洗駅」より徒歩約15分。北関東自動車道水戸大洗ICより約10分。",
    depthRange: "4m〜9m",
    bottomType: "砂・砂泥",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["イシモチ", "イシガレイ", "マコガレイ", "アイナメ", "タコ", "ヒラメ", "アジ", "イワシ", "サバ", "ドンコ", "ウミタナゴ", "ボラ"],
    bestSeasons: {
      spring: ["イシモチ", "カレイ", "アイナメ", "ウミタナゴ"],
      summer: ["イシモチ（爆釣期）", "タコ", "アジ", "イワシ", "ボラ"],
      autumn: ["ヒラメ", "アジ", "イシモチ", "サバ", "マダコ"],
      winter: ["イシガレイ", "マコガレイ", "ドンコ", "アイナメ", "寒ボラ"],
    },
    recommendedRigs: ["投げ釣り", "サビキ釣り", "泳がせ釣り", "サーフルアー"],
    localRules: [
      "フェリー発着場・港湾荷役エリアの立入禁止区域へは絶対に侵入しないこと",
      "作業中のフォークリフトやトラックの通行を妨げない駐車を徹底",
      "港内の船溜まりでの係留ロープへのキャスト禁止",
    ],
    parkingDetails: {
      capacity: "大洗港周辺駐車場（無料・約500台）",
      fee: "無料（海水浴シーズン等の特定エリア有料時あり）",
      hours: "24時間利用可能",
      notes: "大洗サンビーチ周辺や第1〜第4埠頭周辺に無料駐車スペースあり。車横付けポイントは安全運転を徹底。",
    },
    tips: "サビキで釣れた小アジやイワシを活き餌にして泳がせるとヒラメや大型青物がヒットする確率が高い。砂泥底のためカレイやシロギスの投げ釣りもおすすめ。",
  },
  {
    id: "jonanjima-park",
    name: "城南島海浜公園 みなと広場護岸",
    kana: "じょうなんじまかいひんこうえん",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都大田区城南島4-2-2",
    lat: 35.5781,
    lng: 139.7833,
    category: "park",
    description: "羽田空港を離着陸する大型航空機を頭上に間近で望む絶景海浜公園。みなと広場沿いのボードウォーク護岸で足場良く釣りが楽しめます。",
    accessInfo: "JR大森駅・京急平和島駅より京急バス「城南島循環」で「城南島四丁目」下車すぐ。首都高湾岸線「大井南IC」より約10分。",
    depthRange: "3m〜7m",
    bottomType: "砂泥・手前敷石帯・基礎ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "公園内24時間利用可能（つばさ浜エリア除く）",
    },
    targetFish: ["ハゼ", "シーバス", "クロダイ", "イシモチ", "テナガエビ", "メバル", "カサゴ", "ボラ", "サッパ"],
    bestSeasons: {
      spring: ["シーバス（バチ抜け）", "メバル", "テナガエビ"],
      summer: ["ハゼ（数釣り）", "イシモチ", "クロダイ", "テナガエビ", "ボラ"],
      autumn: ["落ちハゼ", "シーバス", "イシモチ", "サッパ"],
      winter: ["カサゴ", "メバル", "寒ボラ"],
    },
    recommendedRigs: ["ヘチ・落とし込み", "ウキ釣り", "チョイ投げ (アンダースロー)", "トリックサビキ"],
    localRules: [
      "つばさ浜（人工砂浜エリア）での釣り・遊泳は全面禁止（みなと広場ボードウォーク護岸のみ釣り可能）",
      "オーバースローでの投げ釣り禁止（背後の遊歩道利用者の安全のためアンダースロー限定）",
      "コマセの柄杓でのバラ撒き撒き餌禁止（カゴ釣り・サビキカゴは使用可）",
      "テント設営・直火BBQ禁止（指定キャンプ場エリア除く）",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "城南島海浜公園駐車場（第1・第2駐車場 計約280台）",
      fee: "平日 1回 500円 / 土日祝 最初の1時間300円、以後30分毎100円",
      hours: "7:30〜21:00（※夜間施錠されるため出庫時間に注意）",
      notes: "土日祝の飛行機見物やBBQ客で満車になりやすいため、早めの入場をおすすめします。",
    },
    tips: "足元から数メートル先までは敷石（捨て石）が入っているため根掛かりに注意。ウキ釣りでタナを2〜3mに設定して敷石の先を流すか、岸壁際のヘチ・落とし込みでクロダイ・カサゴを狙うのが定番。",
  },
  {
    id: "takasu-park",
    name: "浦安 高洲海浜公園",
    kana: "たかすかいひんこうえん",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県浦安市高洲9-1",
    lat: 35.632,
    lng: 139.9212,
    category: "park",
    description: "浦安市の最南端に位置する広大な東京湾岸公園。開放的なテラス護岸に安全フェンスが整備され、東京湾を一望しながらサヨリやシーバス、クロダイが狙えます。",
    accessInfo: "JR京葉線「新浦安駅」より東京ベイシティバス19系統「高洲海浜公園」終点下車すぐ。首都高湾岸線「浦安IC」より約15分。",
    depthRange: "2m〜6m",
    bottomType: "砂泥・前面テトラ帯",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "公園内24時間利用可能（駐車場は時間制限あり）",
    },
    targetFish: ["サヨリ", "シーバス", "クロダイ", "イシモチ", "タチウオ", "ギマ", "サッパ", "ボラ", "カレイ"],
    bestSeasons: {
      spring: ["シーバス", "クロダイ", "ギマ"],
      summer: ["サヨリ", "イシモチ", "クロダイ", "サッパ", "ボラ"],
      autumn: ["サヨリ（大回遊）", "タチウオ", "イシモチ", "シーバス"],
      winter: ["カレイ", "シーバス", "寒ボラ"],
    },
    recommendedRigs: ["サヨリ専用カゴウキ仕掛け", "チョイ投げ (遠投)", "ルアー (シンペン/バイブ)", "ウキフカセ"],
    localRules: [
      "フェンス乗り越えおよび前面テトラ帯への立ち入り厳禁",
      "背後の遊歩道・芝生広場に散歩・ジョギング利用者が多いため、キャスト時の後方確認を徹底",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "高洲海浜公園無料駐車場 約150台",
      fee: "無料",
      hours: "8:30〜19:30（※季節により変動あり、夜間は施錠閉鎖され出庫不可）",
      notes: "夜間に車で釣行する場合は、近隣の24時間営業コインパーキングをご利用ください。",
    },
    tips: "護岸の目の前に沈みテトラ帯が入っているため、取り込み時の根掛かりに注意。4m以上の長めの竿（磯竿や遠投竿）を使うとテトラをかわしやすい。秋のサヨリ遠投カゴ釣りは浦安名物。",
  },
  {
    id: "higashi-ogishima-west",
    name: "川崎 東扇島西公園",
    kana: "ひがしおおぎしまにしこうえん",
    region: "kanto",
    prefecture: "神奈川県",
    address: "神奈川県川崎市川崎区東扇島94-1",
    lat: 35.4885,
    lng: 139.7422,
    category: "park",
    description: "川崎港京浜運河に面した神奈川県屈指の超人気海釣り公園。安全柵完備・24時間年中無休で開放されており、アジ・タチウオ・青物・クロダイの魚影が極めて濃厚。",
    accessInfo: "川崎駅東口より市営バス「川05系統」で「東扇島西公園前」下車すぐ。首都高湾岸線「東扇島IC」より約5分。",
    depthRange: "6m〜12m",
    bottomType: "砂泥・敷石・基礎ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間年中無休（常時開放）",
    },
    targetFish: ["アジ","サバ","イワシ","タチウオ","イシモチ","イナダ","サヨリ","マゴチ","シーバス","クロダイ","アナゴ","カレイ","ボラ"],
    bestSeasons: {
      spring: ["シロギス","カレイ","クロダイ","シーバス"],
      summer: ["アジ","イワシ","サバ","タチウオ","イシモチ","マゴチ","ボラ"],
      autumn: ["タチウオ","イナダ","アジ","イシモチ","サヨリ","アナゴ"],
      winter: ["カレイ","メバル","カサゴ","寒ボラ"],
    },
    recommendedRigs: ["トリックサビキ", "タチウオテンヤ / ワインド", "ライトショアジギング", "投げ釣り", "ヘチ釣り"],
    localRules: [
      "混雑時の割り込み禁止・隣の釣り人と適度な間隔を確保",
      "公園内への車両乗り入れ禁止",
      "テント設営・直火バーベキュー禁止",
      "釣り座のコマセ汚れは必ず海水で洗い流して退去すること",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "東扇島西公園有料駐車場 約165台",
      fee: "3時間未満 200円 / 5時間未満 400円 / 8時間未満 600円 / 8時間以上 800円（24時間毎）",
      hours: "24時間入出庫可能",
      notes: "釣り場直結で売店・エサ販売（勇竿釣具店移動販売等）あり。週末の夜〜早朝は満車になることがあります。",
    },
    tips: "水深があり潮通し抜群。手前10〜15m付近に敷石の駆け上がりがあるため、投げ釣り時は早めに仕掛けを浮かせて回収するのが根掛かり回避のコツ。秋の夜釣りタチウオ・アジのトリックサビキが鉄板。",
  },
  {
    id: "fureyu-ura",
    name: "横浜 鶴見 ふれーゆ裏 (末広水際線プロムナード)",
    kana: "ふれーゆうら",
    region: "kanto",
    prefecture: "神奈川県",
    address: "神奈川県横浜市鶴見区末広町1-15-2",
    lat: 35.4796,
    lng: 139.6885,
    category: "pier",
    description: "横浜市高齢者保養研修施設「ふれーゆ」裏手に広がる全長数百メートルの遊歩道護岸。全面フェンス完備・無料・24時間釣り可能で、アジ・タチウオ・シーバスの実績多数。",
    accessInfo: "JR鶴見駅東口より川崎鶴見臨港バス「鶴08系統」で「ふれーゆ」終点下車すぐ。首都高横羽線「汐入IC」または「生麦IC」より約10分。",
    depthRange: "5m〜10m",
    bottomType: "砂泥・ヘドロ・基礎ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間常時開放",
    },
    targetFish: ["アジ", "タチウオ", "イシモチ", "コノシロ", "サバ", "シーバス", "クロダイ", "ヒイカ", "メバル", "カサゴ", "ボラ"],
    bestSeasons: {
      spring: ["メバル", "カサゴ", "クロダイ", "シーバス"],
      summer: ["アジ", "イシモチ", "コノシロ", "サバ", "ボラ"],
      autumn: ["タチウオ", "アジ", "イシモチ", "ヒイカ", "サバ"],
      winter: ["ヒイカ", "メバル", "カサゴ", "寒ボラ"],
    },
    recommendedRigs: ["トリックサビキ", "ジグ単アジング", "タチウオテンヤ / 電気ウキ", "ヘチ・落とし込み"],
    localRules: [
      "プロムナード遊歩道内のバイク・自転車乗り入れ走行禁止",
      "本格的な投げ釣り（重いオモリの振りかぶり遠投）は遊歩道利用者の安全のため禁止・足元中心の釣り推奨",
      "釣り糸・ゴミ・仕掛けの放置厳禁",
      "釣り座のコマセ汚れは必ずバケツの水で洗い流すこと",
    ],
    parkingDetails: {
      capacity: "ふれーゆ有料駐車場 約90台（施設専用）/ 近隣コインパーキング",
      fee: "普通車 2時間以内 300円、以後30分毎 50円（入庫後24時間最大 800円）",
      hours: "施設営業連動または24時間入出庫可能コインパーキング利用",
      notes: "ふれーゆ駐車場は夜間出庫規制時間帯がある場合があるため、夜釣り時は看板の最新利用規約をご確認ください。路上駐車は厳禁。",
    },
    tips: "足元から水深があり、アジの魚影が濃い。コマセを針に直接擦り付ける「トリックサビキ」が圧倒的な釣果を叩き出します。夜間は常夜灯の明暗部にタチウオやアジが集まります。",
  },
  {
    id: "kemigawahama-jetty",
    name: "千葉 美浜 検見川浜突堤 (稲毛ヨットハーバー横)",
    kana: "けみがわはまとってい",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県千葉市美浜区磯辺2-8",
    lat: 35.6318,
    lng: 140.046,
    category: "pier",
    description: "東京湾奥に突き出た全長約500mの無料突堤。転落防止柵（安全フェンス）が完備されており、イワシ・サッパ・コノシロ・サヨリ・アジ・ギマ・クロダイ・スズキなど多彩な魚種が狙える千葉屈指のファミリー＆ビギナースポット。",
    accessInfo: "JR京葉線「新検見川駅」または「検見川浜駅」より千葉海浜交通バス「稲毛ヨットハーバー」行き終点下車すぐ。東関東自動車道「湾岸習志野IC」または「湾岸千葉IC」より約15分。",
    depthRange: "3m〜7m",
    bottomType: "砂泥・ヘドロ・基礎捨石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "突堤ゲート 24時間常時開放（駐車場は利用時間制限あり）",
    },
    targetFish: ["サヨリ","イシモチ","ヒイカ","イナダ","タチウオ","シーバス","クロダイ","アジ","イワシ","シロギス","ボラ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","クロダイ"],
      summer: ["サヨリ","イシモチ","アジ","イワシ","ボラ"],
      autumn: ["サヨリ","タチウオ","イナダ","イシモチ","ヒイカ"],
      winter: ["ヒイカ","カレイ","寒ボラ"],
    },
    recommendedRigs: ["トリックサビキ", "サヨリカゴ仕掛け", "チョイ投げ仕掛け", "ヘチ・落とし込み"],
    localRules: [
      "突堤内への自転車・バイクの乗り入れ禁止",
      "本格的なオーバースロー遠投投げ釣りは混雑時危険なため禁止（足元〜チョイ投げ推奨）",
      "コマセの汚れはバケツの水で洗い流すこと",
      "ゴミ・仕掛けの放置厳禁",
    ],
    parkingDetails: {
      capacity: "稲毛ヨットハーバー有料駐車場 約270台",
      fee: "1回 500円（普通車）",
      hours: "7:30〜22:00（時期により変動あり、時間外施錠）",
      notes: "夜間〜早朝入庫不可のため、早朝釣行時は近隣コインパーキング利用推奨。",
    },
    tips: "初夏（6〜7月）のギマ釣り（アオイソメのチョイ投げ）と秋のサヨリ（シモリウキ付きサヨリカゴ仕掛け）が名物。足元サビキは針にアミエビを擦り付けるトリックサビキが抜群の釣果を出します。",
  },
  {
    id: "ichihara-umiduri-park",
    name: "千葉 市原 オリジナルメーカー海づり公園 (市原市海づり施設)",
    kana: "おりじなるめーかーうみづりこうえん",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県市原市五井南海岸1-12",
    lat: 35.5425,
    lng: 140.0605,
    category: "park",
    description: "養老川河口近くの東京湾に突き出た長大なT字型桟橋を持つ有料海釣り公園。潮流が良く水深もあり、アジ・イワシ・サバ・サヨリ・スズキ・クロダイ・シリヤケイカ・コノシロの実績が抜群。売店・食堂・貸竿完備。",
    accessInfo: "館山自動車道「市原IC」より約15分。JR内房線「五井駅」西口よりタクシーで約15分（バス便あり）。",
    depthRange: "5m〜10m",
    bottomType: "砂泥・捨石・基礎パイル",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 920円 / 65歳以上 460円 / 中学生以下 無料（見学 大人220円/子供110円）※7〜10月夕方割引あり",
      isNightFishingAllowed: false,
      openingHours: "4月〜10月 6:00〜19:00（7〜10月は21:00まで延長営業） / 11月〜3月 7:00〜17:00（毎週月曜休館・祝日営業）",
    },
    targetFish: ["アジ","サバ","イワシ","サヨリ","イシモチ","イイダコ","フッコ・スズキ","クロダイ","シロギス","コノシロ","ボラ"],
    bestSeasons: {
      spring: ["シロギス","カレイ","クロダイ","スズキ"],
      summer: ["アジ","イワシ","サバ","イシモチ","コノシロ","ボラ"],
      autumn: ["サヨリ","イイダコ","タチウオ","イシモチ","アジ"],
      winter: ["カレイ","フッコ","寒ボラ"],
    },
    recommendedRigs: ["サビキ釣り", "ウキフカセ釣り", "スッテ・エギ仕掛け", "チョイ投げ仕掛け"],
    localRules: [
      "安全管理のため入場定員制（満員時整理券配布）",
      "投げ釣り（振りかぶり遠投）およびルアー釣りは指定エリア・時間外禁止（アンダースロー足元推奨）",
      "竿出しは1人2本まで",
      "小学生以下のお子様はライフジャケット着用必須（無料貸出あり）",
    ],
    parkingDetails: {
      capacity: "施設専用無料駐車場 約330台",
      fee: "無料",
      hours: "開館30分前〜閉館30分後まで",
      notes: "週末や青物・イカ回遊時は開場前から入場待ちの列ができる人気施設です。",
    },
    tips: "桟橋の支柱周りに大型クロダイやフッコが居着いています。春（5〜6月）のシリヤケイカ（スッテ仕掛け）と秋のアジ・サヨリが名物。足元直下のサビキで鈴なりに釣れます。",
  },
  {
    id: "tateyama-port",
    name: "千葉 南房総 館山港 (砂揚げ場・夕日桟橋)",
    kana: "たてやまこう",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県館山市沼1686-17",
    lat: 35.0034,
    lng: 139.8665,
    category: "port",
    description: "南房総・館山湾の最奥に位置する超一級の天然良港。水深が10m以上あり黒潮の恩恵を受けるため、アジ・イワシ・ソウダガツオ・イナダ・ショゴ（カンパチ幼魚）・アオリイカ・タチウオ・カマス・クロダイと魚種の豊富さは関東屈指。車横付け可能なエリア（砂揚げ場）もあり大人気。",
    accessInfo: "富津館山道路「富浦IC」より国道127号経由で約15分。JR内房線「館山駅」より徒歩約20分または館山日東バス「洲崎方面」行きで「館山港」下車。",
    depthRange: "8m〜15m",
    bottomType: "砂泥・基礎ケーソン・一部沈み根",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間常時開放（港湾作業中・フェンス閉鎖区域除く）",
    },
    targetFish: ["ソウダガツオ", "ショゴ（カンパチ幼魚）", "シイラ", "タカベ", "アオリイカ", "イシモチ", "アジ", "イワシ", "シロギス", "クロダイ", "アカハタ", "ボラ"],
    bestSeasons: {
      spring: ["アオリイカ", "シロギス", "クロダイ"],
      summer: ["ソウダガツオ", "ショゴ", "シイラ", "タカベ", "イシモチ", "アジ", "ボラ"],
      autumn: ["青物（ソウダ・ショゴ）", "アオリイカ", "アカハタ", "アジ"],
      winter: ["カマス", "アジ", "寒ボラ"],
    },
    recommendedRigs: ["ライトショアジギング", "サビキ釣り / トリックサビキ", "エギング", "カマス引っ掛け・ジグサビキ", "タチウオテンヤ"],
    localRules: [
      "港湾関係車両・大型船着岸作業時は速やかに場所を譲り立ち入らないこと",
      "立入禁止区域（荷役専用エリア、突堤先端フェンス等）への侵入厳禁",
      "ゴミ・コマセ汚れ・釣り糸の放置厳禁、スミ跡は必ず洗い流すこと",
      "迷惑駐車禁止（指定の駐車スペースを利用）",
    ],
    parkingDetails: {
      capacity: "館山港周辺・夕日桟橋駐車場 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "砂揚げ場岸壁への乗り入れ時は作業動線を塞がないよう十分ご注意ください。",
    },
    tips: "夏〜秋の回遊魚（ヒラソウダ・マルソウダ・ショゴ）の弓角・メタルジグが激アツ。夜釣りでは常夜灯周りのアジングやタチウオ、冬場は越冬カマス狙いで賑わいます。",
  },
  {
    id: "kamogawa-fisherina",
    name: "千葉 外房 フィッシャリーナ鴨川 (鴨川港)",
    kana: "ふぃっしゃりーなかもがわ",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県鴨川市前原359-71",
    lat: 35.0983,
    lng: 140.1054,
    category: "port",
    description: "外房鴨川の前原海岸に隣接するマリーナ＆港湾親水施設。安全柵が整備された遊歩道護岸があり、外房特有の良型アジ回遊（夕マズメ〜夜間）やクロダイ・メジナ・アオリイカ・シロギス・ヒラメが狙える南房総の快適スポット。",
    accessInfo: "JR外房線「安房鴨川駅」より徒歩約15分。館山自動車道「君津IC」より房総スカイライン・県道24号経由で約45分。",
    depthRange: "4m〜8m",
    bottomType: "砂泥・岩礁・テトラポッド",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能（マリーナ施設・浮桟橋内は立入禁止）",
    },
    targetFish: ["アジ","メジナ","クロダイ","アオリイカ","タカベ","ウミタナゴ","ショゴ","カマス","アカハタ","ヒラスズキ","ボラ"],
    bestSeasons: {
      spring: ["親アオリイカ","メジナ","クロダイ","ウミタナゴ"],
      summer: ["タカベ","アジ","ショゴ","アカハタ","ボラ"],
      autumn: ["アオリイカ","カマス","アジ","ヒラスズキ","ショゴ"],
      winter: ["寒グレ（メジナ）","カマス","ウミタナゴ","寒ボラ"],
    },
    recommendedRigs: ["ジグ単アジング", "サビキ釣り（カゴサビキ）", "エギング", "チョイ投げ仕掛け", "ウキフカセ釣り"],
    localRules: [
      "マリーナ内浮桟橋およびプレジャーボート係留エリアへの立入禁止",
      "遊歩道利用者の安全のため、仕掛けのキャスト時は後方確認徹底",
      "ゴミ・仕掛けの持ち帰り厳守、コマセ汚れはきれいに洗い流すこと",
    ],
    parkingDetails: {
      capacity: "フィッシャリーナ鴨川公営駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "観光シーズンやサーファーで混雑することがあります。",
    },
    tips: "外房特有の夕マズメのアジ時合が強烈で、20〜25cm超の良型アジがバタバタと釣れます。外向きテトラ周辺はエギングのアオリイカやフカセのクロダイ・メジナ、内向き砂地はシロギス・ヒラメ狙いが有望です。",
  },
  {
    id: "izu-oshima-motomachi",
    name: "伊豆大島 元町港 桟橋・防波堤",
    kana: "いずおおしまもとまちこう",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都大島町元町1-18",
    lat: 34.7505,
    lng: 139.3542,
    category: "port",
    description: "伊豆大島の表玄関口となる大型港湾。黒潮の恩恵を直接受け、ショアから巨大カンパチ・ヒラマサ・シイラ・タカベ・アオリイカ・大型メジナが狙える超一級ポイント。",
    accessInfo: "竹芝桟橋（東京）や熱海港より東海汽船ジェット船または大型客船で元町港着（海況により岡田港着になる場合あり）。港から徒歩すぐ。",
    depthRange: "8m〜20m+",
    bottomType: "溶岩岩礁・砂礫・基礎ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能（定期船着岸時・荒天時除く）",
    },
    targetFish: ["タカベ","シマアジ","イサキ","メジナ","アカハタ","オオモンハタ","アオリイカ","ナンヨウカイワリ","カンパチ","ヒラスズキ","ダツ"],
    bestSeasons: {
      spring: ["大型メジナ","親アオリイカ","シマアジ","ヒラスズキ"],
      summer: ["タカベ","イサキ","アカハタ","オオモンハタ","ダツ","カンパチ"],
      autumn: ["シマアジ","ナンヨウカイワリ","アオリイカ","青物"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ","アカハタ"],
    },
    recommendedRigs: ["ロックショアジギング (60〜100g)", "ショアプラッギング", "エギング (3.5〜4.0号)", "カゴ釣り (ハリス6m)", "ウキフカセ"],
    localRules: [
      "東海汽船等の定期旅客船・貨物船の入出港作業中は指示に従い釣りを中断・安全な場所へ退避すること",
      "ライフジャケット・滑り止めシューズの完全着用必須（大波・うねりによる波被り厳重警戒）",
      "立ち入り禁止区域・フェンス内への侵入厳禁",
      "コマセの洗い流し・ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "元町港船客待合所周辺無料駐車場 約60台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "島内レンタカーやレンタルバイクの利用が便利です。",
    },
    dangerNotes: ["外洋に面しているため、西寄りの強風や台風・低気圧通過時は巨大なうねり・高波が堤防を洗います。波が高い時は絶対に立ち入らないでください。"],
    tips: "西風に弱いため、西風や高波時は風裏となる岡田港や波浮港へ移動するのが島釣りのセオリー。夏〜秋の朝マズメはメタルジグやトップウォータープラグで青物・シイラの爆釣劇が期待できます。",
  },

  // --- 関西エリア ---
  {
    id: "nanko-park",
    name: "大阪南港魚つり園護岸",
    kana: "おおさかなんこううおつりえん",
    region: "kansai",
    prefecture: "大阪府",
    address: "大阪市住之江区南港南6丁目9番3号",
    lat: 34.6146,
    lng: 135.4032,
    category: "park",
    description: "大阪湾の大型無料釣り施設。安全柵完備で南港沖の潮通しが良く、秋の青物・タチウオシーズンは大盛況。",
    accessInfo: "ニュートラム南港ポートタウン線「フェリーターミナル駅」よりバス。阪神高速湾岸線「南港南IC」より約5分。",
    depthRange: "6m〜11m",
    bottomType: "敷石・砂泥",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: false,
    },
    targetFish: ["タチウオ","アジ","イワシ","サバ","ハマチ・メジロ","クロダイ（チヌ）","イシモチ","タケノコメバル","ガシラ（カサゴ）","イイダコ","ボラ"],
    bestSeasons: {
      spring: ["チヌ（乗っ込み）","ハネ（スズキ）","ガシラ","タケノコメバル"],
      summer: ["アジ","サバ","イワシ","タコ","イシモチ","ボラ"],
      autumn: ["タチウオ（名物）","ハマチ","アジ","イイダコ","イシモチ"],
      winter: ["ガシラ","メバル","ハネ","寒ボラ"],
    },
    recommendedRigs: ["ショアジギング", "タチウオワインド・テンヤ", "サビキ", "エビ撒き釣り"],
    localRules: [
      "ライフジャケットの着用義務（未着用時は入場不可・無料貸出あり）",
      "開園時間外（夜間）の立ち入り・居残り禁止",
      "竿出しは1人2本まで",
      "投げ釣り・ルアー釣り時は後方および周囲の安全確認を徹底",
    ],
    parkingDetails: {
      capacity: "有料駐車場 約200台",
      fee: "最初の30分無料 / 最初の1時間500円 / 以後1時間毎200円（1日最大1,500円）",
      hours: "開園時間の30分前〜閉園後30分まで",
      notes: "開園待ちの路上駐車は厳禁です。指定の有料駐車場をご利用ください。",
    },
    tips: "朝マズメの開園直後にメタルジグ（30〜40g）で青物の回遊を狙うのが定番パターン。水深があるため底をしっかり取ることが肝心。",
  },
  {
    id: "kobe-port-island",
    name: "神戸 ポートアイランド北公園",
    kana: "こうべぽーとあいらんどきたこうえん",
    region: "kansai",
    prefecture: "兵庫県",
    address: "兵庫県神戸市中央区港島2丁目",
    lat: 34.6768,
    lng: 135.2046,
    category: "park",
    description: "神戸大橋のライトアップを眺めながら釣りができる絶景ポイント。潮の流れが速く、大型青物やアオリイカ、タチウオの実績多数。",
    accessInfo: "ポートライナー「中公園駅」または「みなとじま駅」より徒歩約8分。阪神高速神戸線「京橋IC」より約5分。",
    depthRange: "8m〜14m",
    bottomType: "砂泥・石畳",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["タチウオ","アジ","サバ","イワシ","ハマチ","クロダイ（チヌ）","シーバス","タケノコメバル","ガシラ","ボラ"],
    bestSeasons: {
      spring: ["シーバス","チヌ","ガシラ","タケノコメバル"],
      summer: ["アジ","サバ","イワシ","ケンサキイカ（大蔵・ポーアイ）","ボラ"],
      autumn: ["タチウオ","ハマチ","アジ","サゴシ"],
      winter: ["メバル","ガシラ","シーバス","寒ボラ"],
    },
    recommendedRigs: ["ワインド", "エギング", "ライトショアジギング", "アジング"],
    localRules: [
      "本格的な投げ釣り（重いオモリの振りかぶり遠投）は遊歩道利用者の安全のため禁止",
      "公園内での火気使用（BBQ・コンロ等）厳禁",
      "釣り糸・ゴミの持ち帰りおよび釣り座のコマセ洗い流し必須",
    ],
    parkingDetails: {
      capacity: "ポートアイランド北公園駐車場 38台",
      fee: "最初の1時間 100円（以後1時間毎 100円）",
      hours: "24時間利用可能",
      notes: "台数が少なめのため、満車時は近隣のコインパーキングをご利用ください。",
    },
    tips: "潮流が激流になる時間帯があるため、潮が緩むタイミング（転流時・潮止まり前後）に集中して狙うのが秘訣。夜間の常夜灯周りはアジングやタチウオの好ポイント。",
  },
  {
    id: "akashi-port",
    name: "明石港・大蔵海岸",
    kana: "あかしこう・おおくらかいがん",
    region: "kansai",
    prefecture: "兵庫県",
    address: "兵庫県明石市大蔵海岸通",
    lat: 34.6425,
    lng: 135.0083,
    category: "pier",
    description: "明石海峡の激流に育まれた極上の明石鯛・明石タコ・青物・アオリイカが集まる関西最高峰の激アツエリア。",
    accessInfo: "JR朝霧駅または山陽電鉄大蔵谷駅より徒歩すぐ。第二神明道路「大蔵谷IC」より約10分。",
    depthRange: "5m〜16m",
    bottomType: "玉石・砂礫・岩礁",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["アオリイカ","ケンサキイカ","ハマチ・メジロ","タチウオ","アジ","マダイ","イシモチ","イイダコ","ウミタナゴ","タケノコメバル","ボラ"],
    bestSeasons: {
      spring: ["親アオリイカ","メバル","チヌ","ウミタナゴ"],
      summer: ["ケンサキイカ（大蔵名物）","大サバ","アジ","イシモチ","ボラ"],
      autumn: ["アオリイカ","タチウオ","ハマチ","イイダコ","マダイ"],
      winter: ["メバル","ガシラ","アイナメ","タケノコメバル","寒ボラ"],
    },
    recommendedRigs: ["タコエギ", "エギング", "ショアジギング", "カゴ釣り", "ライトゲーム"],
    localRules: [
      "大蔵海岸護岸のフェンス乗り越え・テトラ帯への立ち入り厳禁",
      "指定BBQエリア以外での火気使用禁止",
      "混雑時の割り込み禁止・隣の釣り人と適度なオマツリ防止間隔を確保",
      "タコ釣り時のタコ掛け針のロスト防止に配慮",
    ],
    parkingDetails: {
      capacity: "大蔵海岸中駐車場・東駐車場 計約400台",
      fee: "1時間 100円（24時間最大 1,000円）",
      hours: "24時間入出庫可能",
      notes: "大型駐車場完備でアクセス抜群。駅近のため電車釣行にも最適です。",
    },
    tips: "大蔵海岸は足場が非常に良くトイレも近い。夏はタコエギでのマダコ、秋は夜エギングでのアオリイカが名物。",
  },
  {
    id: "wakayama-marina",
    name: "和歌山マリーナシティ大波止",
    kana: "わかやままりーなしてぃ",
    region: "kansai",
    prefecture: "和歌山県",
    address: "和歌山県和歌山市毛見1527",
    lat: 34.1542,
    lng: 135.1768,
    category: "port",
    description: "黒潮の影響を色濃く受ける関西屈指の好漁場。大波止外側は潮通し抜群で、メーター級のシイラやブリ・カンパチも回遊。",
    accessInfo: "JR海南駅からバス「マリーナシティ」下車。阪和自動車道「海南IC」より約10分。",
    depthRange: "6m〜13m",
    bottomType: "砂泥・基礎ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["タチウオ","アオリイカ","ハマチ・メジロ","ヘダイ","アカハタ","オオモンハタ","イシモチ","コロダイ","アジ","イワシ","ボラ"],
    bestSeasons: {
      spring: ["アオリイカ","クロダイ","シロギス","ヘダイ"],
      summer: ["アジ","イワシ","タチウオ","アカハタ","オオモンハタ","イシモチ","ボラ"],
      autumn: ["タチウオ（爆釣期）","青物（ハマチ）","アオリイカ","コロダイ","ヘダイ"],
      winter: ["ガシラ","メバル","アジ","寒ボラ"],
    },
    recommendedRigs: ["ヤエン・ウキ釣り", "エギング", "ショアジギング", "ワインド"],
    localRules: [
      "大波止の外側は高さがあるためライフジャケット必須・タモ網（5〜6m以上）必携",
      "マリーナ施設内（ヨットハーバー・リゾート内）の立ち入り禁止エリア厳守",
      "夜間の騒音防止・ゴミ持ち帰り",
    ],
    parkingDetails: {
      capacity: "マリーナシティ周辺有料駐車場（約1,500台）",
      fee: "1日 1,500円（周辺に1日500円〜1000円の民間駐車場あり）",
      hours: "24時間入出庫可能",
      notes: "わかやま館裏や大波止手前の有料駐車場が釣り座に近くて便利です。",
    },
    tips: "春の親イカ狙い（キロアップ）はヤエン仕掛けやエギングで大人気。秋は夜のタチウオ数釣りが楽しめる。",
  },
  {
    id: "wakayama-shirahama-kawakyu",
    name: "和歌山 南紀白浜 ホテル川久裏 護岸",
    kana: "ほてるかわきゅううら",
    region: "kansai",
    prefecture: "和歌山県",
    address: "和歌山県西牟婁郡白浜町3745",
    lat: 33.6886,
    lng: 135.3574,
    category: "pier",
    description: "南紀白浜のシンボル「ホテル川久」をぐるりと囲む全長約800mの広大な親水護岸。古賀浦湾内に位置するため波が穏やかで足場も平坦、アオリイカのエギング・ヤエン釣りやアジ、チヌ、グレ、タチウオ、青物、根魚が狙える南紀屈指の人気無料釣り場。",
    accessInfo: "紀勢自動車道「南紀白浜IC」より約15分。JRきのくに線「白浜駅」より明光バスで約15分「古賀浦」下車すぐ。",
    depthRange: "4m〜10m",
    bottomType: "砂泥・岩礁・敷石・藻場",
    facilities: {
      hasParking: true,
      hasToilet: false,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能（ホテル私有地・船着場桟橋内は立入禁止）",
    },
    targetFish: ["アオリイカ","アジ","タチウオ","クロダイ（チヌ）","ヘダイ","アカハタ","オオモンハタ","コロダイ","ガシラ","ボラ"],
    bestSeasons: {
      spring: ["親アオリイカ","チヌ","ヘダイ"],
      summer: ["アジ","タチウオ","アカハタ","オオモンハタ","ボラ"],
      autumn: ["アオリイカ（数釣り）","タチウオ","コロダイ","ヘダイ"],
      winter: ["メバル","ガシラ","アジ","寒ボラ"],
    },
    recommendedRigs: ["エギング / ヤエン仕掛け（アオリイカ）", "カゴサビキ / ライトかご釣り", "ライトショアジギング", "ウキフカセ釣り", "タチウオテンヤ / 電気ウキ"],
    localRules: [
      "ホテル川久敷地内および船着き場・専用桟橋への立入・釣りは禁止",
      "夜間の大声・騒音厳禁（近隣ホテル・旅館・住宅街への配慮徹底）",
      "イカスミ跡やコマセの汚れは海水で必ず洗い流して退去すること",
      "ゴミ・仕掛けの放置厳禁",
      "釣り場にトイレはないため、近隣の綱不知公園等の公衆トイレを利用すること",
    ],
    parkingDetails: {
      capacity: "護岸周辺駐車スペース 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "ホテル専用駐車場や私有地への無断駐車厳禁。公道や通行の邪魔にならないスペースに駐車してください。",
    },
    tips: "南紀白浜を代表するアオリイカの超実績ポイント。春は2kg〜3kg超の親アオリイカのヤエン釣り、秋はエギングの数釣りが楽しめます。湾奥のため北西風などの冬の季節風にも比較的強く、夜釣りでは常夜灯周りのアジングやタチウオも狙い目です。",
  },
  {
    "id": "kyoto-miyazu-fishingpark",
    "name": "京都 丹後 宮津市海洋つり場 (栗田湾)",
    "kana": "みやずしかいようつりば",
    "region": "kansai",
    "prefecture": "京都府",
    "address": "京都府宮津市字小田宿野1006",
    "lat": 35.5342,
    "lng": 135.2415,
    "category": "park",
    "description": "日本三景・天橋立に近い波静かな栗田湾（くんだわん）に突き出た有料海釣り桟橋。安全柵・売店・トイレ・貸竿完備で、アジ・アオリイカ・チヌ・グレ・マダイ・サゴシが狙える京都府内唯一の本格海づり施設。",
    "accessInfo": "京都縦貫自動車道「宮津天橋立IC」より国道178号経由で約15分。京都丹後鉄道「宮津駅」よりタクシー約15分。",
    "depthRange": "6m〜12m",
    "bottomType": "砂泥・魚礁・基礎パイル",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": false,
      "hasConvenienceStoreNearby": false,
      "hasTackleShopNearby": true,
      "isFeeRequired": true,
      "feeText": "大人 1,100円 / 小人(小中学生) 550円（見学 大人200円/小人100円）",
      "isNightFishingAllowed": false,
      "openingHours": "4月〜11月 7:00〜17:00（夏期延長あり・毎週木曜休園、祝日営業）"
    },
    "targetFish": [
      "アジ",
      "アオリイカ",
      "クロダイ",
      "メジナ",
      "マダイ",
      "サワラ（サゴシ）",
      "シロギス"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "メジナ",
        "サゴシ",
        "マダイ"
      ],
      "summer": [
        "アジ",
        "シロギス",
        "キジハタ"
      ],
      "autumn": [
        "アオリイカ",
        "アジ",
        "サゴシ",
        "クロダイ"
      ],
      "winter": [
        "休園期間（12月〜3月）"
      ]
    },
    "recommendedRigs": [
      "サビキ釣り",
      "ウキフカセ釣り",
      "エギング",
      "胴突き仕掛け"
    ],
    "localRules": [
      "安全のためライフジャケット着用必須（無料貸出あり）",
      "投げ釣り（オーバースロー遠投）およびルアーの投げ釣り制限あり（足元・アンダースロー推奨）",
      "竿出しは1人2本まで"
    ],
    "parkingDetails": {
      "capacity": "海洋つり場専用無料駐車場 約80台",
      "fee": "無料",
      "hours": "開園時間に合わせて利用可能",
      "notes": "釣り場直結で快適に利用できます。"
    },
    "tips": "桟橋周辺に魚礁が沈められており、サビキ釣りでアジの数釣りやウキフカセでチヌ・グレ・マダイが狙えます。秋はアオリイカのエギングも人気。"
  },


  // --- 東海・中部エリア ---
  {
    id: "shimizu-port",
    name: "静岡 清水港・巴川河口",
    kana: "しみずこう",
    region: "tokai",
    prefecture: "静岡県",
    address: "静岡県静岡市清水区日の出町",
    lat: 35.0068,
    lng: 138.4949,
    category: "port",
    description: "水深の深い駿河湾に面した天然の良港。クロダイのかかり釣り（ダンゴ釣り）発祥の地として知られ、タチウオやアジも魚影濃厚。",
    accessInfo: "JR清水駅より徒歩または静鉄バス。東名高速「清水IC」より約15分。",
    depthRange: "6m〜15m",
    bottomType: "砂泥・ヘドロ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["タチウオ","アジ","クロダイ","カマス","シーバス","アオリイカ","イシモチ","オオモンハタ","ヘダイ","ボラ","テナガエビ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","シーバス","テナガエビ（巴川）"],
      summer: ["タチウオ","アジ","イシモチ","オオモンハタ","ボラ","テナガエビ"],
      autumn: ["タチウオ","カマス","アオリイカ","ヘダイ","シーバス"],
      winter: ["カマス","ヒラメ","クロダイ","寒ボラ"],
    },
    recommendedRigs: ["紀州釣り（ダンゴ）", "タチウオテンヤ", "アジング", "ワインド"],
    localRules: [
      "港湾荷役作業中岸壁・大型客船着岸エリアは立入禁止",
      "ダンゴ釣り・コマセ釣り後は必ずバケツで海水を汲んで釣り座を洗い流すこと",
      "係留船のロープ周りへのキャスト禁止",
    ],
    parkingDetails: {
      capacity: "マリンパーク駐車場・日の出駐車場 約200台",
      fee: "1時間 200円（最大料金設定あり）",
      hours: "24時間利用可能",
      notes: "エスパルスドリームプラザ隣接エリア周辺にコインパーキング多数あり。",
    },
    tips: "巴川河口付近はシーバスやクロダイのストックが抜群。秋〜冬の夜釣りは常夜灯周りのアジング・カマス狙いが熱い。",
  },
  {
    id: "numazu-senbonhama",
    name: "沼津 千本浜・静浦港",
    kana: "ぬまづせんぼんはま",
    region: "tokai",
    prefecture: "静岡県",
    address: "静岡県沼津市千本",
    lat: 35.0548,
    lng: 138.884,
    category: "surf",
    description: "急深な駿河湾特有のサーフ。波打ち際から数十メートルで水深数十メートルに達し、遠投カゴ釣りやショアジギングの聖地。",
    accessInfo: "JR沼津駅より車で約10分。東名高速「愛鷹スマートIC」より約15分。",
    depthRange: "10m〜30m+",
    bottomType: "ゴロタ・急深砂利",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["ソウダガツオ", "サバ", "イナダ", "シイラ", "マダイ", "タチウオ", "オオモンハタ", "アオリイカ"],
    bestSeasons: {
      spring: ["マダイ", "アオリイカ"],
      summer: ["ソウダガツオ", "シイラ", "タチウオ"],
      autumn: ["イナダ", "ソウダガツオ", "タチウオ", "オオモンハタ"],
      winter: ["マダイ", "ヒラメ"],
    },
    recommendedRigs: ["両軸遠投カゴ釣り", "ショアジギング", "弓角（サーフトローリング）"],
    localRules: [
      "急深サーフのため引き波・波足が極めて強烈。波打ち際への接近厳禁",
      "遊歩道・砂浜を散歩する観光客へのキャスト後方確認を徹底",
      "夜間の大声・アイドリング禁止",
    ],
    parkingDetails: {
      capacity: "千本浜公園無料駐車場 約80台",
      fee: "無料",
      hours: "6:00〜21:00（夜間閉鎖あり・出庫時間に注意）",
      notes: "夜釣りで長時間の駐車をする場合は、周辺の24時間営業コインパーキングをご利用ください。",
    },
    dangerNotes: ["急深なため波足が長く引き波が強烈。絶対に波打ち際に近づきすぎないこと"],
    tips: "両軸リールを使った遠投カゴ釣り（ハリス6m）が伝統スタイル。夏のソウダガツオ・秋のイナダの引きは強烈。",
  },
  {
    "id": "aichi-chita-shinmaiko",
    "name": "愛知 知多半島 新舞子マリンパーク 魚釣り施設",
    "kana": "しんまいこまりんぱーく",
    "region": "tokai",
    "prefecture": "愛知県",
    "address": "愛知県知多市緑浜町2",
    "lat": 34.9548,
    "lng": 136.8216,
    "category": "park",
    "description": "知多半島西海岸の人工島に整備された全長約740mの無料海釣り公園。全面安全フェンス・足場平坦で、アジ・イワシ・サッパ・ギマ・クロダイ・シーバス・マゴチ・シロギスが狙える愛知県内屈指の超人気スポット。",
    "accessInfo": "西知多産業道路「日長IC」より約5分。名鉄常滑線「新舞子駅」より徒歩約15分。",
    "depthRange": "3m〜7m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": false,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": false,
      "openingHours": "6:00〜20:00（夜間施錠閉鎖・夜釣り禁止）"
    },
    "targetFish": [
      "アジ",
      "マイワシ",
      "サッパ",
      "ギマ",
      "クロダイ",
      "シーバス",
      "マゴチ",
      "シロギス"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "シーバス",
        "ギマ"
      ],
      "summer": [
        "ギマ（名物）",
        "サッパ",
        "マイワシ",
        "アジ",
        "シロギス",
        "マゴチ"
      ],
      "autumn": [
        "アジ",
        "マイワシ",
        "クロダイ",
        "シーバス",
        "タチウオ"
      ],
      "winter": [
        "カレイ",
        "カサゴ",
        "アイナメ"
      ]
    },
    "recommendedRigs": [
      "サビキ釣り / トリックサビキ",
      "チョイ投げ仕掛け",
      "ヘチ・落とし込み",
      "ルアー（マゴチ・シーバス）"
    ],
    "localRules": [
      "利用時間は 6:00〜20:00（時間外の立ち入り・夜釣り禁止）",
      "オーバースロー（上からの振りかぶり遠投）禁止（安全のためアンダースロー限定）",
      "投げサビキ・ルアーの遠投禁止（足元〜チョイ投げ推奨）",
      "竿出しは1人2本まで、ゴミ持ち帰り徹底"
    ],
    "parkingDetails": {
      "capacity": "新舞子マリンパーク駐車場 約1,000台",
      "fee": "無料（夏季プール・海水浴期間のみ有料 1回500円）",
      "hours": "開門時間に連動",
      "notes": "土日祝やイワシ回遊時は朝早くから満車になることがあります。"
    },
    "tips": "初夏（6〜8月）のギマ釣り（アオイソメのチョイ投げ）とサビキでのサッパ・イワシ・アジが名物。足元敷石周りの落とし込みで大型クロダイの釣果も多数。"
  },
  {
    "id": "mie-yokkaichi-kasumigaura",
    "name": "三重 四日市 霞ヶ浦緑地公園 霞釣り公園護岸",
    "kana": "かすみがうらりょくちこうえん",
    "region": "tokai",
    "prefecture": "三重県",
    "address": "三重県四日市市大字羽津甲5169",
    "lat": 34.9914,
    "lng": 136.6535,
    "category": "park",
    "description": "四日市ドーム隣接の海岸緑地に整備された無料の釣り公園護岸。安全フェンス・大型無料駐車場・トイレ完備で、シーバス・クロダイ・マゴチ・ハゼ・アジ・タチウオが狙える伊勢湾奥の定番スポット。",
    "accessInfo": "伊勢湾岸自動車道「みえ川越IC」より約10分。近鉄名古屋線「霞ヶ浦駅」より徒歩約20分。",
    "depthRange": "3m〜7m",
    "bottomType": "砂泥・敷石",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "マゴチ",
      "マハゼ",
      "アジ",
      "タチウオ",
      "サバ"
    ],
    "bestSeasons": {
      "spring": [
        "シーバス",
        "クロダイ"
      ],
      "summer": [
        "マハゼ",
        "マゴチ",
        "クロダイ",
        "サッパ"
      ],
      "autumn": [
        "シーバス",
        "タチウオ",
        "マハゼ",
        "アジ"
      ],
      "winter": [
        "カサゴ",
        "メバル",
        "カレイ"
      ]
    },
    "recommendedRigs": [
      "ルアー（シーバス・マゴチ）",
      "チョイ投げ仕掛け（ハゼ）",
      "前打ち / ヘチ釣り（クロダイ）",
      "タチウオワインド / 電気ウキ"
    ],
    "localRules": [
      "公園散策者・ランナーの後方安全確認徹底",
      "四日市ドーム周辺および港湾立ち入り禁止エリアへの侵入厳禁",
      "ゴミ・仕掛けの放置厳禁"
    ],
    "parkingDetails": {
      "capacity": "霞ヶ浦緑地公園無料駐車場 約300台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "ドームでイベント開催時は混雑することがあります。"
    },
    "tips": "夏〜秋のハゼのチョイ投げ数釣りと夜釣りのシーバス・タチウオが人気。敷石沿いの前打ちでクロダイの魚影も濃いエリアです。"
  },


  // --- 九州・沖縄エリア ---
  {
    id: "fukuoka-seagull",
    name: "福岡 博多湾 かもめ広場・箱崎埠頭",
    kana: "ふくおかはかたわん",
    region: "kyushu",
    prefecture: "福岡県",
    address: "福岡県福岡市中央区港2丁目",
    lat: 33.5946,
    lng: 130.3803,
    category: "pier",
    description: "福岡市街地から至近の人気湾岸スポット。アジング・メバリング・タチウオ・シーバスが手軽に狙えるナイトゲームの名所。",
    accessInfo: "地下鉄空港線「大濠公園駅」または「赤坂駅」より徒歩15分。福岡都市高速「西公園ランプ」より約5分。",
    depthRange: "4m〜8m",
    bottomType: "砂泥・岸壁",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["アジ", "タチウオ", "シーバス", "メバル", "ヒイカ", "チヌ", "サゴシ"],
    bestSeasons: {
      spring: ["メバル", "シーバス", "チヌ"],
      summer: ["豆アジ", "サゴシ"],
      autumn: ["アジ", "タチウオ", "ヒイカ", "シーバス"],
      winter: ["アジング", "メバル", "ヒイカ"],
    },
    recommendedRigs: ["ジグ単アジング (0.8〜1.5g)", "ワインド", "ライトエギング (1.5〜2.0号)", "サビキ"],
    localRules: [
      "船舶係留岸壁・荷役作業エリアへの立入禁止",
      "住宅街近接のため夜間の大声・騒音・路上駐車の厳禁",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "かもめ広場周辺コインパーキング（複数箇所・計約150台）",
      fee: "昼間 30〜60分 100〜200円 / 夜間最大 400〜600円",
      hours: "24時間営業",
      notes: "路上駐車の取り締まりが厳しいため、必ず近隣のコインパーキングをご利用ください。",
    },
    tips: "常夜灯の明暗境目にキャストし、カウントダウンして一定レンジをゆっくり引いてくるのがアジ・メバルの基本攻略。",
  },
  {
    id: "nagasaki-megami",
    name: "長崎 女神大橋下・神ノ島",
    kana: "ながさきめがみおおはし",
    region: "kyushu",
    prefecture: "長崎県",
    address: "長崎県長崎市神ノ島町",
    lat: 32.7238,
    lng: 129.8078,
    category: "port",
    description: "五島灘へ繋がる長崎港の出入口。潮流が激しく、ショアからヒラマサ・ブリ・大型アオリイカが狙える全国屈指の一級地。",
    accessInfo: "長崎駅より長崎バス「神ノ島教会下」方面行き。ながさき出島道路より女神大橋経由約15分。",
    depthRange: "10m〜25m",
    bottomType: "岩礁・敷石・砂礫",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["ヒラマサ", "ブリ", "アオリイカ（ミズイカ）", "マダイ", "アカハタ", "オオモンハタ", "アジ"],
    bestSeasons: {
      spring: ["春イカ（3kg級）", "ヒラマサ", "マダイ"],
      summer: ["アカハタ", "オオモンハタ", "ネリゴ（カンパチ幼魚）"],
      autumn: ["ヒラマサ", "ブリ", "アオリイカ", "ヤズ"],
      winter: ["寒グレ（メジナ）", "メガアジ", "ヒラスズキ"],
    },
    recommendedRigs: ["ロックショアジギング (60〜100g)", "エギング (3.5〜4.0号)", "泳がせ", "ロックフィッシュ"],
    localRules: [
      "港湾工業敷地内・立入禁止フェンス内への侵入厳禁",
      "潮流が非常に速く水深があるため、ライフジャケット・滑り止めシューズ必須",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "神ノ島公園駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "工業道路沿いのため大型トラックの通行を妨げる迷惑駐車は厳禁です。",
    },
    tips: "潮が川のように流れるため、ヘビーシンカーやジグが必要。潮止まり直前後の反転流に超大物が食ってきます。",
  },
  {
    "id": "saga-karatsu-yobuko",
    "name": "佐賀 唐津 呼子港 呼子大橋下・加部島波止",
    "kana": "よぶここう",
    "region": "kyushu",
    "prefecture": "佐賀県",
    "address": "佐賀県唐津市呼子町呼子",
    "lat": 33.5412,
    "lng": 129.8912,
    "category": "port",
    "description": "イカの聖地として全国に名高い玄界灘の超一級港湾。透明度抜群で潮通しが極めて良く、アオリイカ（ミズイカ）・ヤリイカ・メガアジ・サワラ・マダイ・根魚の実績が圧倒的な九州屈指の人気釣り場。",
    "accessInfo": "西九州自動車道「唐津IC」より国道204号経由で約30分。JR唐津駅より昭和バスで約30分。",
    "depthRange": "7m〜15m",
    "bottomType": "岩礁・砂泥・海藻帯・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "アジ（尺アジ）",
      "アオリイカ（ミズイカ）",
      "ヤリイカ",
      "サワラ",
      "マダイ",
      "キジハタ",
      "カサゴ"
    ],
    "bestSeasons": {
      "spring": [
        "親アオリイカ（キロアップ・2kg超）",
        "マダイ",
        "ヤリイカ"
      ],
      "summer": [
        "キジハタ",
        "アジ",
        "カマス"
      ],
      "autumn": [
        "新子アオリイカ",
        "サワラ",
        "アジ",
        "青物"
      ],
      "winter": [
        "ヤリイカ（ササイカ）",
        "尺アジ",
        "メバル"
      ]
    },
    "recommendedRigs": [
      "エギング / ヤエン仕掛け",
      "ジグ単アジング",
      "ショアジギング",
      "ウキフカセ釣り",
      "エサ巻きテーラー"
    ],
    "localRules": [
      "呼子朝市通り周辺や定期観光船（ジーラ等）発着場での釣り禁止",
      "イカスミ跡は必ずバケツの水で綺麗に洗い流して退去すること",
      "漁具・係留ロープへの仕掛け引っ掛け禁止"
    ],
    "parkingDetails": {
      "capacity": "呼子港周辺駐車場・臨港駐車場 計約150台",
      "fee": "無料（一部有料駐車場あり）",
      "hours": "24時間利用可能",
      "notes": "漁業関係者の荷役エリアを避けて駐車してください。"
    },
    "tips": "春と秋のエギングは九州随一の人気。夜釣りでは常夜灯周りのアジングで25〜30cm超の尺アジが連発し、冬場はヤリイカ（ササイカ）のウキ釣りで賑わいます。"
  },
  {
    "id": "kumamoto-amakusa-ushibuka",
    "name": "熊本 天草 牛深港 ハイヤ大橋下・後浜岸壁",
    "kana": "うしぶかこう",
    "region": "kyushu",
    "prefecture": "熊本県",
    "address": "熊本県天草市牛深町",
    "lat": 32.1938,
    "lng": 130.0275,
    "category": "port",
    "description": "天草諸島の最南端に位置する黒潮分岐流が当たる超一級港湾。牛深ハイヤ大橋を望む足場の良い岸壁で、大型アオリイカ（ミズイカ）・尺アジ・ガラカブ（カサゴ）・キジハタ・チヌ・青物が狙える天草屈指の好釣り場。",
    "accessInfo": "九州自動車道「松橋IC」より国道266号経由で約2時間。道の駅うしぶか海彩館すぐ。",
    "depthRange": "6m〜14m",
    "bottomType": "岩礁・敷石・砂泥",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能"
    },
    "targetFish": [
      "アジ",
      "アオリイカ（ミズイカ）",
      "カサゴ（ガラカブ）",
      "キジハタ",
      "クロダイ",
      "ブリ（ヤズ）"
    ],
    "bestSeasons": {
      "spring": [
        "親アオリイカ",
        "クロダイ",
        "マダイ"
      ],
      "summer": [
        "キジハタ",
        "ガラカブ",
        "アジ"
      ],
      "autumn": [
        "アオリイカ",
        "青物（ヤズ）",
        "アジ",
        "タチウオ"
      ],
      "winter": [
        "尺アジ",
        "ガラカブ",
        "メバル"
      ]
    },
    "recommendedRigs": [
      "エギング",
      "ジグ単アジング",
      "胴突き探り釣り",
      "ライトショアジギング",
      "ウキフカセ釣り"
    ],
    "localRules": [
      "道の駅うしぶか海彩館のフェリー発着桟橋での釣り禁止",
      "ゴミ・仕掛けの放置厳禁",
      "スミ跡やコマセは海水できれいに洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "うしぶか海彩館・港湾無料駐車場 約120台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "足元近くに駐車可能でアクセス良好です。"
    },
    "tips": "暖流の恩恵で魚影が濃く、冬でも水温が高いため通年アオリイカやロックフィッシュが狙えます。常夜灯下のアジングでは尺アジの期待大。"
  },
  {
    "id": "oita-saiki-tsurumi",
    "name": "大分 豊後水道 佐伯 鶴見 間元港・地松浦波止",
    "kana": "さいきつるみまもとこう",
    "region": "kyushu",
    "prefecture": "大分県",
    "address": "大分県佐伯市鶴見大字地松浦",
    "lat": 32.9625,
    "lng": 132.0125,
    "category": "port",
    "description": "豊後水道の激流に育まれた日本有数の魚の宝庫・佐伯市鶴見半島。関アジにも匹敵する極上アジ（尺アジ・ギガアジ）やモイカ（アオリイカ）・クロ（メジナ）・ブリ・タチウオが狙える大分県内随一の好釣り場。",
    "accessInfo": "東九州自動車道「佐伯IC」より車で約25分。佐伯市街地より鶴見半島方面へ約20分。",
    "depthRange": "8m〜18m",
    "bottomType": "岩礁・基礎ケーソン・砂泥",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": false,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能"
    },
    "targetFish": [
      "アジ（関アジ・尺アジ）",
      "アオリイカ（モイカ）",
      "メジナ（クロ）",
      "ブリ",
      "タチウオ",
      "マダイ"
    ],
    "bestSeasons": {
      "spring": [
        "親モイカ（2kg〜3kg超）",
        "クロ（メジナ）",
        "マダイ"
      ],
      "summer": [
        "イサキ",
        "アジ",
        "根魚"
      ],
      "autumn": [
        "新子モイカ",
        "ブリ・ハマチ",
        "タチウオ",
        "アジ"
      ],
      "winter": [
        "尺アジ・ギガアジ",
        "寒グレ",
        "モイカ"
      ]
    },
    "recommendedRigs": [
      "ジグ単アジング / キャロ",
      "ヤエン仕掛け / エギング",
      "カゴ釣り",
      "ウキフカセ釣り",
      "ショアジギング"
    ],
    "localRules": [
      "渡船乗船所・漁船係留エリアへの迷惑駐車および仕掛け投入禁止",
      "波止が高いためライフジャケット着用必須・長柄タモ網（5m以上）必携",
      "ゴミ・仕掛けの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "港周辺無料駐車スペース 約40台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "漁業者作業の邪魔にならない場所に駐車してください。"
    },
    "tips": "豊後水道の急潮に揉まれたアジの引きと味は日本一級。アジングでの40cm超（ギガアジ）や、春の3kgクラスのモイカ（ヤエン釣り）の実績が多数あります。"
  },
  {
    "id": "miyazaki-nichinan-aburatsu",
    "name": "宮崎 日南 油津港 東波止・チョロ船乗り場",
    "kana": "あぶらつこう",
    "region": "kyushu",
    "prefecture": "宮崎県",
    "address": "宮崎県日南市油津",
    "lat": 31.5782,
    "lng": 131.4085,
    "category": "port",
    "description": "日南海岸・日向灘に面した南国情緒あふれる大型天然良港。黒潮が直接洗うため水温が高く、カンパチ（ネイゴ）・アオリイカ（ミズイカ）・アジ・タチウオ・シブダイ・オオモンハタが狙える宮崎屈指の好ポイント。",
    "accessInfo": "宮崎自動車道「田野IC」より日南方面へ約45分。JR日南線「油津駅」より車で約5分。",
    "depthRange": "7m〜15m",
    "bottomType": "砂泥・岩礁・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "カンパチ（ネイゴ）",
      "アオリイカ（ミズイカ）",
      "アジ",
      "タチウオ",
      "ハマダイ・シブダイ",
      "オオモンハタ"
    ],
    "bestSeasons": {
      "spring": [
        "親ミズイカ",
        "マダイ",
        "クロダイ"
      ],
      "summer": [
        "カンパチ（ネイゴ）",
        "オオモンハタ",
        "シブダイ（夜釣り）"
      ],
      "autumn": [
        "ネイゴ",
        "ミズイカ",
        "タチウオ",
        "アジ"
      ],
      "winter": [
        "尺アジ",
        "メジナ",
        "カサゴ"
      ]
    },
    "recommendedRigs": [
      "ライトショアジギング",
      "エギング / ヤエン仕掛け",
      "カゴ釣り",
      "アジング",
      "ブッコミ釣り（夜シブダイ）"
    ],
    "localRules": [
      "フェリー・大型貨物船発着エリアへの立ち入り禁止",
      "イカスミ跡やコマセは海水できれいに洗い流すこと",
      "ゴミの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "油津港周辺無料駐車場 約100台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "岸壁近くに駐車可能なスペースあり。"
    },
    "tips": "夏〜秋のショアジギングでカンパチ幼魚（ネイゴ）の強烈な引きが味わえます。夏の夜釣りのブッコミでは幻の高級魚シブダイ、秋〜春はミズイカのエギングが盛んです。"
  },
  {
    "id": "kagoshima-sakurajima-park",
    "name": "鹿児島 錦江湾 桜島 桜島港海づり公園",
    "kana": "さくらじまこううみづりこうえん",
    "region": "kyushu",
    "prefecture": "鹿児島県",
    "address": "鹿児島県鹿児島市桜島横山町1722-48",
    "lat": 31.5942,
    "lng": 130.5968,
    "category": "park",
    "description": "雄大な桜島と錦江湾（鹿児島湾）を望む有料海づり公園。安全柵・トイレ完備で足場が良く、水深が深いためマダイ・カンパチ（ネイゴ）・アジ・アオリイカ・コロダイ・オオモンハタが狙える鹿児島屈指の快適スポット。",
    "accessInfo": "鹿児島本港より桜島フェリー（24時間運航）で約15分、桜島港フェリーターミナルより徒歩約3分。",
    "depthRange": "8m〜16m",
    "bottomType": "溶岩岩礁・砂泥・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": false,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": true,
      "feeText": "大人 200円 / 小人(小中学生) 100円（見学無料）",
      "isNightFishingAllowed": false,
      "openingHours": "6:00〜19:00（4月〜10月） / 7:00〜17:00（11月〜3月）年中無休"
    },
    "targetFish": [
      "マダイ",
      "カンパチ（ネイゴ）",
      "アジ",
      "アオリイカ",
      "コロダイ",
      "オオモンハタ",
      "クロダイ"
    ],
    "bestSeasons": {
      "spring": [
        "マダイ",
        "アオリイカ",
        "クロダイ"
      ],
      "summer": [
        "カンパチ（ネイゴ）",
        "オオモンハタ",
        "アジ"
      ],
      "autumn": [
        "マダイ",
        "カンパチ",
        "アオリイカ",
        "コロダイ"
      ],
      "winter": [
        "マダイ",
        "カサゴ",
        "メジナ"
      ]
    },
    "recommendedRigs": [
      "カゴ釣り",
      "サビキ釣り",
      "エギング",
      "ライトショアジギング",
      "胴突き仕掛け"
    ],
    "localRules": [
      "利用時間外の立ち入り・夜釣り禁止",
      "ライフジャケット着用推奨（無料貸出あり）",
      "竿出しは1人2本まで、フェリー航路への投げ釣り厳禁"
    ],
    "parkingDetails": {
      "capacity": "桜島港周辺駐車場 約100台",
      "fee": "1時間無料（以後1時間毎100円）",
      "hours": "24時間利用可能",
      "notes": "桜島フェリーターミナルから徒歩すぐ。"
    },
    "tips": "錦江湾の深海と直結しているため、防波堤からでも50cm〜70cm級のマダイやコロダイがヒットします。夏〜秋はネイゴ（カンパチ幼魚）の回遊やエギングのアオリイカが有望です。"
  },

  {
    id: "okinawa-naha",
    name: "沖縄 那覇港・三重城タワー護岸",
    kana: "おきなわなはこう",
    region: "okinawa",
    prefecture: "沖縄県",
    address: "沖縄県那覇市西3丁目",
    lat: 26.2146,
    lng: 127.6666,
    category: "port",
    description: "南国の熱帯魚から大型回遊魚GT（ロウニンアジ）、タマン（ハマフエフキ）、ガーラが狙える沖縄の代表的フィッシングスポット。",
    accessInfo: "那覇空港より車で約10分。ゆいレール「旭橋駅」より徒歩約20分。",
    depthRange: "5m〜14m",
    bottomType: "サンゴ礁・リーフ・砂地",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["タマン（ハマフエフキ）", "ガーラ（ロウニンアジ等）", "ミーバイ（ハタ類）", "クチナジ", "アオリイカ（アオリ）"],
    bestSeasons: {
      spring: ["タマン", "ガーラ", "アオリイカ"],
      summer: ["タマン", "ガーラ", "ミーバイ", "グルクン"],
      autumn: ["ガーラ", "タマン", "アオリイカ"],
      winter: ["アオリイカ（クブシミ含む）", "チヌ（ミナミクロダイ）"],
    },
    recommendedRigs: ["打ち込み釣り（ぶっこみ）", "ライトゲーム（スプーン/小型シンペン）", "エギング"],
    localRules: [
      "遊泳ビーチエリアおよびダイビング船・旅客船航路へのキャスト禁止",
      "大物打ち込み釣り時は置き竿の引きずり込み防止ロープ固定を徹底",
      "サンゴ礁・貴重な海洋生物の保護",
    ],
    parkingDetails: {
      capacity: "波の上うみそら公園有料駐車場 約500台",
      fee: "最初の30分無料 / 以後1時間毎 100円（24時間最大 500円）",
      hours: "24時間入出庫可能",
      notes: "護岸のすぐ横に大容量駐車場があり、トイレや自販機も近く快適です。",
    },
    tips: "夜の打ち込み釣りでイカの切り身やタコを餌にすると強烈な引きのタマンがヒット。ドラグ設定と太仕掛け必須。",
  },

  // --- 北海道・東北・北陸 ---
  {
    id: "otaru-port",
    name: "北海道 小樽港 厩町岸壁・南防波堤",
    kana: "おたるこううまやまち",
    region: "hokkaido",
    prefecture: "北海道",
    address: "北海道小樽市港町",
    lat: 43.2017,
    lng: 141.0085,
    category: "port",
    description: "車横付け可能でファミリーに愛される北海道の超有名スポット。ニシン・チカ・マイワシのサビキからマメイカ、ロックフィッシュまで。",
    accessInfo: "札樽自動車道「小樽IC」より約10分。JR小樽駅より中央バス。",
    depthRange: "5m〜9m",
    bottomType: "砂泥・ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["マイワシ", "ニシン", "チカ", "マメイカ", "ヤリイカ", "ホッケ", "クロソイ", "イシガレイ", "サクラマス", "ヒラメ", "ハゼ"],
    bestSeasons: {
      spring: ["ヤリイカ", "ホッケ", "サクラマス", "チカ", "イシガレイ"],
      summer: ["マイワシ（大群）", "マメイカ", "ヒラメ", "ハゼ"],
      autumn: ["マメイカ", "サバ", "マイワシ", "クロソイ", "サケ"],
      winter: ["ニシン（群来）", "チカ", "ホッケ", "クロソイ"],
    },
    recommendedRigs: ["集魚灯付きサビキ", "エギング（おっぱいスッテ・1.5号）", "ロックフィッシュワーム"],
    localRules: [
      "冬期の岸壁凍結によるスリップ・落水事故に厳重注意（滑り止めスパイク・ライフジャケット必須）",
      "車横付け駐車時のアイドリング・夜間騒音に配慮",
      "投光器使用時は他船・他の釣り人への照射配慮",
    ],
    parkingDetails: {
      capacity: "厩町岸壁内横付け駐車スペース（無料・約80台）",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "岸壁に車を横付けして釣りが楽しめます。係船柱（ビット）付近や作業船の停泊場所は空けて駐車してください。",
    },
    tips: "冬の夜釣りは投光器を使ったニシンサビキが名物。秋は1.5号の小型エギでマメイカの数釣りが楽しめます。",
  },
  {
    id: "sendai-port",
    name: "宮城 仙台港 3号码頭・中央公園",
    kana: "せんだいこう",
    region: "tohoku",
    prefecture: "宮城県",
    address: "宮城県仙台市宮城野区港",
    lat: 38.2716,
    lng: 140.9978,
    category: "port",
    description: "東北最大級の港湾釣り場。シャローから深場まで揃い、大型アイナメやベッコウゾイ、ヒラメ・マゴチのフラットフィッシュが狙える。",
    accessInfo: "JR仙石線「中野栄駅」より車で約10分。仙台東部道路「仙台港IC」より約5分。",
    depthRange: "5m〜12m",
    bottomType: "砂泥・敷石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
    },
    targetFish: ["アイナメ", "ベッコウゾイ（タケノコメバル）", "ヒラメ", "マゴチ", "イシガレイ", "マコガレイ", "ドンコ", "イシモチ", "ウミタナゴ", "サバ", "シーバス", "ボラ"],
    bestSeasons: {
      spring: ["マコガレイ", "イシガレイ", "アイナメ", "ウミタナゴ"],
      summer: ["マゴチ", "イシモチ", "ヒラメ", "サバ", "シーバス", "ボラ"],
      autumn: ["ベッコウゾイ", "アイナメ", "ヒラメ", "イシモチ", "サバ"],
      winter: ["ドンコ（エゾイソアイナメ）", "イシガレイ", "マコガレイ", "アイナメ"],
    },
    recommendedRigs: ["テキサスリグ (14〜28g)", "投げ釣り（青イソメ房掛け）", "ジグヘッドワーム"],
    localRules: [
      "物流埠頭・コンテナヤード等の立入禁止区域へは絶対に侵入しないこと",
      "大型トレーラー・作業車の通行スペースを絶対に塞がないこと",
      "釣り糸・仕掛け・ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "スリーエム仙台港パーク無料駐車場 約200台",
      fee: "無料",
      hours: "8:00〜18:00（季節変動あり・夜間施錠されるため出庫時間に注意）",
      notes: "公園内の無料駐車場が利用できます。夜釣り時は利用可能時間をご確認ください。",
    },
    tips: "晩秋〜冬のアイナメは大型が狙えるベストシーズン。敷石の隙間やブレイクラインをテキサスリグで丁寧に探るのが吉。",
  },
  {
    "id": "aomori-port-aspam",
    "name": "青森 青森港 アスパム裏・新中央埠頭",
    "kana": "あおもりこうあすぱむうら",
    "region": "tohoku",
    "prefecture": "青森県",
    "address": "青森県青森市安方1-1-40",
    "lat": 40.8322,
    "lng": 140.7412,
    "category": "pier",
    "description": "青森観光物産館アスパムの裏手に広がる青い海公園・新中央埠頭護岸。陸奥湾の穏やかな内海に面し、アジ・イワシ・サバのサビキ釣りからクロソイ・メバル・ヒラメ・ヤリイカまで狙える県内屈指の足場良好スポット。",
    "accessInfo": "JR青森駅東口より徒歩約8分。青森自動車道「青森中央IC」より約15分。",
    "depthRange": "5m〜9m",
    "bottomType": "砂泥・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放（イベント開催時・客船接岸時制限あり）"
    },
    "targetFish": [
      "マイワシ",
      "アジ",
      "サバ",
      "クロソイ",
      "メバル",
      "ヒラメ",
      "アイナメ",
      "ヤリイカ"
    ],
    "bestSeasons": {
      "spring": [
        "クロソイ",
        "アイナメ",
        "ヤリイカ"
      ],
      "summer": [
        "マイワシ",
        "アジ",
        "サバ",
        "ヒラメ"
      ],
      "autumn": [
        "アジ",
        "サバ",
        "マイワシ",
        "クロソイ",
        "ヒラメ"
      ],
      "winter": [
        "ヤリイカ",
        "クロソイ",
        "チカ"
      ]
    },
    "recommendedRigs": [
      "サビキ釣り",
      "ジグヘッドリグ（ロックフィッシュ）",
      "チョイ投げ仕掛け",
      "エギング / テーラー仕掛け"
    ],
    "localRules": [
      "青い海公園プロムナード内の歩行者・観光客の往来に十分配慮すること",
      "大型観光客船接岸時およびフェンス規制エリアへの立ち入り禁止",
      "ゴミ・仕掛けの放置厳禁、コマセ汚れは必ず海水で洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "アスパム駐車場・青い海公園有料駐車場 計約200台",
      "fee": "最初の1時間 220円 / 以後30分毎 110円",
      "hours": "24時間利用可能",
      "notes": "アスパム利用での駐車割引あり。路上駐車は厳禁。"
    },
    "tips": "夏〜秋のイワシ・アジの回遊時はファミリーサビキで大漁が狙えます。夜間は常夜灯下でクロソイやメバルのライトロックフィッシュ、冬場はヤリイカのテーラーウキ釣りが名物です。"
  },
  {
    "id": "iwate-miyako-dezaki",
    "name": "岩手 三陸 宮古港 出崎埠頭",
    "kana": "みやここうでざきふとう",
    "region": "tohoku",
    "prefecture": "岩手県",
    "address": "岩手県宮古市臨港通2-1",
    "lat": 39.6458,
    "lng": 141.9682,
    "category": "pier",
    "description": "三陸リアス海岸の天然良港・宮古港に位置する広大な出崎埠頭。道の駅シートピアなあどに隣接し、アイナメ・クロソイ・ヒラメ・チカ・イワシ・ヤリイカが狙える三陸屈指の快適釣り場。",
    "accessInfo": "JR山田線・三陸鉄道「宮古駅」より車で約10分。東北横断自動車道「宮古港IC」より約5分。",
    "depthRange": "6m〜12m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（荷役岸壁・作業エリア除く）"
    },
    "targetFish": ["ドンコ（エゾイソアイナメ）","アイナメ","クロソイ","ヒラメ","ヤリイカ","サクラマス","イシガレイ","ウミタナゴ","サバ","マイワシ"],
    "bestSeasons": {
      "spring": ["サクラマス","ヤリイカ","イシガレイ","ウミタナゴ"],
      "summer": ["アイナメ","ヒラメ","マイワシ","サバ"],
      "autumn": ["クロソイ","アイナメ","ヤリイカ","ヒラメ"],
      "winter": ["ドンコ（どんこ汁名物）","クロソイ","アイナメ","ヤリイカ"]
    },
    "recommendedRigs": [
      "テキサスリグ / ロックフィッシュ仕掛け",
      "サビキ釣り",
      "胴突き探り釣り",
      "ヤエン / テーラー仕掛け"
    ],
    "localRules": [
      "漁業関係者・港湾荷役作業の邪魔にならないよう配慮徹底",
      "立入禁止ロープ・看板のある岸壁への立ち入り厳禁",
      "ゴミ・釣り糸は必ず持ち帰ること"
    ],
    "parkingDetails": {
      "capacity": "シートピアなあど周辺無料駐車場 約200台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "施設利用者や大型作業車両の動線を塞がないよう駐車してください。"
    },
    "tips": "三陸特有の大型アイナメ（ビール瓶サイズ）やクロソイの実績が高く、岸壁の継ぎ目や敷石周りのテキサスリグで好釣果。冬の夜釣りはドンコやヤリイカで賑わいます。"
  },
  {
    "id": "akita-port-selion",
    "name": "秋田 秋田港 セリオン前岸壁・中島埠頭",
    "kana": "あきたこうせりおんまえ",
    "region": "tohoku",
    "prefecture": "秋田県",
    "address": "秋田県秋田市土崎港西1-9-1",
    "lat": 39.7538,
    "lng": 140.0612,
    "category": "pier",
    "description": "道の駅あきた港（セリオンタワー）直下に広がる広大な港湾岸壁。足場が平坦で大駐車場・トイレ・売店が隣接し、アジ・イワシ・シロギス・クロダイ・シーバス・冬のハタハタまで狙える秋田を代表する超人気スポット。",
    "accessInfo": "JR奥羽本線「土崎駅」より徒歩約15分。秋田自動車道「秋田北IC」より約15分。",
    "depthRange": "6m〜11m",
    "bottomType": "砂泥・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（定期船発着時・作業中エリア除く）"
    },
    "targetFish": [
      "アジ",
      "マイワシ",
      "シロギス",
      "クロダイ",
      "シーバス",
      "ハタハタ",
      "ヒラメ",
      "マコガレイ"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "シーバス",
        "マコガレイ"
      ],
      "summer": [
        "アジ",
        "マイワシ",
        "シロギス",
        "クロダイ"
      ],
      "autumn": [
        "アジ",
        "サヨリ",
        "シーバス",
        "ヒラメ"
      ],
      "winter": [
        "ハタハタ（秋田名物）",
        "マコガレイ"
      ]
    },
    "recommendedRigs": [
      "サビキ釣り",
      "チョイ投げ仕掛け",
      "ウキフカセ釣り",
      "ハタハタ専用サビキ仕掛け"
    ],
    "localRules": [
      "フェリーターミナルや荷役専用岸壁への立ち入り禁止",
      "冬のハタハタ釣り時は混雑マナーとゴミの完全持ち帰りを徹底",
      "コマセ汚れは必ずバケツの水で洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "セリオン無料大駐車場 約250台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "道の駅の営業時間外もトイレ・駐車場が利用可能です。"
    },
    "tips": "春〜秋はアジ・イワシのサビキやシロギスのチョイ投げで賑わい、12月上旬〜中旬のハタハタ接岸期は県内外から多くの釣り人が集まる名物ポイントです。"
  },
  {
    "id": "yamagata-sakata-mizubayashi",
    "name": "山形 庄内 酒田港 水林親水護岸",
    "kana": "さかたこうみずばやし",
    "region": "tohoku",
    "prefecture": "山形県",
    "address": "山形県酒田市高砂",
    "lat": 38.9482,
    "lng": 139.8275,
    "category": "pier",
    "description": "日本海に面した山形県最大の重要港湾・酒田港の親水護岸。最上川河口に近く汽水と海水が混ざり合う豊かな水域で、アジ・キス・クロダイ・青物（イナダ・サゴシ）・ヒラメ・シーバスの実績が抜群。",
    "accessInfo": "JR羽越本線「酒田駅」より車で約10分。日本海東北自動車道「酒田IC」より約15分。",
    "depthRange": "5m〜10m",
    "bottomType": "砂泥・捨石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "アジ",
      "シロギス",
      "クロダイ",
      "ブリ（イナダ）",
      "サワラ（サゴシ）",
      "ヒラメ",
      "シーバス"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "シーバス",
        "サワラ（サゴシ）"
      ],
      "summer": [
        "アジ",
        "シロギス",
        "ヒラメ"
      ],
      "autumn": [
        "ブリ（イナダ）",
        "サワラ（サゴシ）",
        "アジ",
        "クロダイ"
      ],
      "winter": [
        "ハタハタ",
        "クロソイ",
        "マコガレイ"
      ]
    },
    "recommendedRigs": [
      "ライトショアジギング",
      "サビキ釣り",
      "投げ釣り / チョイ投げ",
      "ウキフカセ釣り"
    ],
    "localRules": [
      "親水護岸の手すり柵を乗り越えての釣り禁止",
      "酒田北港水路や火力発電所敷地内の立入禁止エリア厳守",
      "ゴミ・仕掛けの持ち帰り厳守"
    ],
    "parkingDetails": {
      "capacity": "水林緑地無料駐車場 約60台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "護岸に隣接した駐車スペースあり。"
    },
    "tips": "春と秋はメタルジグでの青物（イナダ・サゴシ）回遊が強烈。初夏〜秋はチョイ投げで良型シロギスが連発し、フカセ釣りでは大型クロダイが狙えます。"
  },
  {
    "id": "fukushima-onahama-aquamarine",
    "name": "福島 いわき 小名浜港 アクアマリンパーク護岸",
    "kana": "おなはまこうあくあまりんぱーく",
    "region": "tohoku",
    "prefecture": "福島県",
    "address": "福島県いわき市小名浜辰巳町43-9",
    "lat": 36.9425,
    "lng": 140.9038,
    "category": "pier",
    "description": "環境水族館アクアマリンふくしまやイオンモールに隣接する広大な親水護岸。全面安全フェンス完備・無料・足場抜群で、アジ・イワシ・サバ・サヨリ・ヒラメ・アイナメ・メバルが狙える常磐屈指のファミリースポット。",
    "accessInfo": "常磐自動車道「いわき湯本IC」より約20分。JR常磐線「泉駅」より路線バス「小名浜案内所」下車徒歩約5分。",
    "depthRange": "4m〜8m",
    "bottomType": "砂泥・捨石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "アジ",
      "マイワシ",
      "サバ",
      "サヨリ",
      "ヒラメ",
      "アイナメ",
      "メバル",
      "クロダイ"
    ],
    "bestSeasons": {
      "spring": [
        "メバル",
        "アイナメ",
        "カレイ"
      ],
      "summer": [
        "アジ",
        "マイワシ",
        "サバ",
        "ヒラメ"
      ],
      "autumn": [
        "サヨリ",
        "アジ",
        "サバ",
        "ヒラメ",
        "アイナメ"
      ],
      "winter": [
        "ヒイカ",
        "メバル",
        "ドンコ"
      ]
    },
    "recommendedRigs": [
      "サビキ釣り / トリックサビキ",
      "サヨリカゴ仕掛け",
      "チョイ投げ仕掛け",
      "ライトゲーム（アジング・メバリング）"
    ],
    "localRules": [
      "観光客や遊歩道利用者の安全のため、キャスト時の後方確認徹底",
      "観光船乗り場・水族館施設前への立入・釣り禁止",
      "コマセの汚れはバケツの水できれいに洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "アクアマリンパーク無料駐車場 約500台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "大型無料駐車場完備でファミリーや初心者釣行にも最適です。"
    },
    "tips": "秋のサヨリ釣り（専用シモリウキカゴ）とトリックサビキでのアジ・イワシが大人気。夜間は常夜灯下でアジングやメバリング、冬はヒイカ狙いが楽しめます。"
  },

  {
    id: "niigata-east-port",
    name: "新潟東港第2東防波堤 管理釣り場",
    kana: "にいがたひがしこう",
    region: "hokuriku",
    prefecture: "新潟県",
    address: "新潟県北蒲原郡聖籠町東港",
    lat: 37.9783,
    lng: 139.2499,
    category: "park",
    description: "日本海屈指の青物・サワラ・アオリイカの聖地。外洋に突き出た長大な堤防で、春と秋の爆釣劇は全国の釣り人を魅了。",
    accessInfo: "日本海東北自動車道「聖籠新発田IC」より車で約15分。JR白新線「佐々木駅」よりタクシー約15分。",
    depthRange: "10m〜16m",
    bottomType: "砂泥・テトラ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人1,500円 / 高校生1,000円 / 中学生500円",
      isNightFishingAllowed: false,
    },
    targetFish: ["サワラ（サゴシ）", "イナダ", "ワラサ", "アオリイカ", "クロダイ", "キジハタ", "アジ", "ヒラメ"],
    bestSeasons: {
      spring: ["サゴシ", "イナダ", "クロダイ"],
      summer: ["キジハタ", "アジ", "シロギス"],
      autumn: ["アオリイカ", "ワラサ", "サゴシ", "ヒラメ"],
      winter: ["寒ブリ", "カレイ"],
    },
    recommendedRigs: ["ショアジギング (30〜60g)", "エギング", "前打ち・落とし込み", "カゴ釣り"],
    localRules: [
      "救命胴衣（ライフジャケット）の常時着用絶対義務",
      "波浪・強風警報発令時は即時全面閉鎖・避難アナウンス指示に従うこと",
      "飲酒・焚き火・バーベキュー・テント設営禁止",
      "堤防外側テトラポットへの飛び移り禁止",
    ],
    parkingDetails: {
      capacity: "管理棟前専用無料駐車場 約150台",
      fee: "無料（入場料別途）",
      hours: "開園時間（季節により5:00〜18:00等）に連動",
      notes: "人気シーズンの開門前には入場待ちの車列ができるため、早めの到着をおすすめします。",
    },
    tips: "春のサゴシ祭りでは表層〜中層の早巻きが鉄板。メタルジグにワイヤーリーダーや太めフロロを推奨。",
  },
  {
    "id": "toyama-shinko-shinminato",
    "name": "富山 射水 富山新港・新湊漁港 護岸",
    "kana": "とやましんこうしんみなと",
    "region": "hokuriku",
    "prefecture": "富山県",
    "address": "富山県射水市海王町8",
    "lat": 36.7812,
    "lng": 137.1092,
    "category": "pier",
    "description": "富山湾の富山新港・新湊大橋を望む好漁場。水深が深く潮流が効くため、富山湾名物のキジハタをはじめ、クロダイ・アオリイカ・アジ・ヒラメ・青物（フクラギ）の実績が極めて高い北陸屈指の名所。",
    "accessInfo": "北陸自動車道「小杉IC」より約20分。万葉線「海王丸駅」より徒歩約8分。",
    "depthRange": "6m〜14m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（海王丸パーク内禁止エリア・港湾作業岸壁除く）"
    },
    "targetFish": [
      "キジハタ",
      "クロダイ",
      "アオリイカ",
      "アジ",
      "ヒラメ",
      "ブリ（フクラギ）",
      "シロギス"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "フクラギ",
        "ヤリイカ"
      ],
      "summer": [
        "キジハタ",
        "アジ",
        "シロギス"
      ],
      "autumn": [
        "アオリイカ",
        "キジハタ",
        "フクラギ",
        "アジ"
      ],
      "winter": [
        "クロダイ",
        "メバル",
        "カレイ"
      ]
    },
    "recommendedRigs": [
      "テキサスリグ / ロックフィッシュ仕掛け",
      "エギング",
      "ライトショアジギング",
      "ウキフカセ釣り",
      "サビキ釣り"
    ],
    "localRules": [
      "海王丸パーク内の船体周辺・芝生広場護岸での釣り禁止エリア厳守",
      "漁協施設前・作業船の係留索周辺への割り込み禁止",
      "イカスミ・コマセ汚れは必ず洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "新湊港周辺無料駐車場 約150台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "釣り場近くに無料駐車スペースあり。"
    },
    "tips": "夏〜秋のキジハタ（テキサスリグやジグヘッド）と秋のエギング（アオリイカ）が名物。水深があるため回遊青物（フクラギ）のショアジギングも高実績です。"
  },
  {
    "id": "ishikawa-kanazawa-ohama",
    "name": "石川 金沢港 大浜釣り公園（金沢港ふれあい広場）",
    "kana": "かなざわこうおおはまつりこうえん",
    "region": "hokuriku",
    "prefecture": "石川県",
    "address": "石川県金沢市大浜町",
    "lat": 36.5614,
    "lng": 136.6567,
    "category": "park",
    "description": "金沢港の湾奥に整備された無料の釣り公園。安全柵・ベンチ・トイレ・大駐車場が完備され、アジ・アオリイカ・クロダイ・シロギス・ヒラメ・サゴシが狙える石川県内トップクラスのファミリースポット。",
    "accessInfo": "北陸自動車道「金沢西IC」または「金沢東IC」より約15分。JR金沢駅西口より車で約20分。",
    "depthRange": "4m〜8m",
    "bottomType": "砂泥・捨石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "アジ",
      "アオリイカ",
      "クロダイ",
      "シロギス",
      "ヒラメ",
      "サワラ（サゴシ）",
      "マコガレイ"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "サゴシ",
        "マコガレイ"
      ],
      "summer": [
        "アジ",
        "シロギス",
        "マゴチ"
      ],
      "autumn": [
        "アオリイカ",
        "アジ",
        "サゴシ",
        "ヒラメ"
      ],
      "winter": [
        "マコガレイ",
        "メバル",
        "クロソイ"
      ]
    },
    "recommendedRigs": [
      "サビキ釣り",
      "チョイ投げ仕掛け",
      "エギング",
      "ライトショアジギング",
      "ウキフカセ釣り"
    ],
    "localRules": [
      "公園柵を乗り越えてのテトラ帯進入禁止",
      "本格的なオーバースロー遠投は混雑時危険なため注意",
      "ゴミ・仕掛けの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "大浜釣り公園専用無料駐車場 約120台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "釣り場直結で大人気の駐車場です。"
    },
    "tips": "足元サビキでアジの数釣りが楽しめるほか、秋はエギングのアオリイカやメタルジグでのサゴシ回遊が熱い。砂地が多いためチョイ投げでキス・カレイも有望です。"
  },
  {
    "id": "fukui-tsuruga-maruyama",
    "name": "福井 若狭 敦賀港 鞠山海水浴場突堤",
    "kana": "つるがこうまるやま",
    "region": "hokuriku",
    "prefecture": "福井県",
    "address": "福井県敦賀市鞠山",
    "lat": 35.6738,
    "lng": 136.0825,
    "category": "pier",
    "description": "敦賀湾の東側に位置する足場の良い長大な突堤。潮通しが抜群でアオリイカのエギングの聖地として名高く、アジ・サゴシ・ハマチ・シロギス・カレイ・メバルと魚種が極めて豊富。",
    "accessInfo": "北陸自動車道「敦賀IC」より国道8号経由で約10分。JR北陸本線・北陸新幹線「敦賀駅」より車で約15分。",
    "depthRange": "5m〜11m",
    "bottomType": "砂泥・岩礁・基礎捨石",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": false,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（荒天・高波時立入禁止）"
    },
    "targetFish": [
      "アオリイカ",
      "アジ",
      "サワラ（サゴシ）",
      "ブリ（ハマチ）",
      "シロギス",
      "マコガレイ",
      "メバル"
    ],
    "bestSeasons": {
      "spring": [
        "親アオリイカ",
        "サゴシ",
        "メバル",
        "カレイ"
      ],
      "summer": [
        "アジ",
        "シロギス",
        "キジハタ"
      ],
      "autumn": [
        "新子アオリイカ",
        "サゴシ",
        "ハマチ",
        "アジ"
      ],
      "winter": [
        "ヤリイカ",
        "メバル",
        "カレイ"
      ]
    },
    "recommendedRigs": [
      "エギング",
      "ライトショアジギング",
      "サビキ釣り",
      "投げ釣り / チョイ投げ"
    ],
    "localRules": [
      "突堤外側のテトラ帯への無理な進入禁止・ライフジャケット着用必須",
      "海水浴シーズン（夏期）の遊泳エリアでの釣り禁止",
      "イカスミ・コマセは海水できれいに洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "鞠山海岸駐車場 約80台",
      "fee": "無料（夏季海水浴期間のみ有料の場合あり）",
      "hours": "24時間利用可能",
      "notes": "突堤入口付近に駐車スペースあり。"
    },
    "tips": "春の親アオリイカ（キロアップ）および秋の新子数釣りで関西・中京圏からエギンガーが殺到。ショアジギングでのサゴシ・ハマチのボイル撃ちも高実績です。"
  },


  // --- 中国エリア ---
  {
    id: "hiroshima-ujina",
    name: "広島 宇品波止場公園・広島港護岸",
    kana: "うじなはとばこうえん",
    region: "chugoku",
    prefecture: "広島県",
    address: "広島県広島市南区宇品海岸3-12",
    lat: 34.353,
    lng: 132.4702,
    category: "park",
    description: "広島港に隣接する足場抜群の海浜公園。安全フェンス完備でファミリーフィッシングからチニング、アジング、タチウオまで瀬戸内海の魚種が豊富。",
    accessInfo: "広島電鉄宇品線「海岸通駅」または「元宇品口駅」より徒歩約5分。広島高速3号線「宇品出入口」より約3分。",
    depthRange: "4m〜9m",
    bottomType: "砂泥・敷石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能",
    },
    targetFish: ["タチウオ","クロダイ（チヌ）","アジ","メバル","イシモチ","イイダコ","タケノコメバル","コウイカ","サゴシ","ボラ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ","メバル","コウイカ"],
      summer: ["アジ","イシモチ","タコ","ボラ"],
      autumn: ["タチウオ","アジ","イイダコ","サゴシ","イシモチ"],
      winter: ["メバル","タケノコメバル","カサゴ","寒ボラ"],
    },
    recommendedRigs: ["チニング (フリーリグ/ポッパー)", "ジグ単アジング", "タチウオテンヤ", "サビキ釣り"],
    localRules: [
      "フェリー発着桟橋や立入禁止エリアへの進入厳禁",
      "公園利用客・散歩者の往来に十分配慮しキャスト前後の安全確認を徹底",
      "ゴミの完全持ち帰り・コマセ汚れの海水洗浄",
    ],
    parkingDetails: {
      capacity: "宇品波止場公園有料駐車場 約180台",
      fee: "1時間まで無料 / 以後1時間毎 200円（入庫後24時間最大 1,000円）",
      hours: "24時間入出庫可能",
      notes: "最初の1時間無料。公園に隣接しておりアクセス抜群。",
    },
    tips: "広島名物のチニング（フリーリグやトップウォーター）の聖地。夜間は常夜灯の明暗にタチウオやアジが集まります。",
  },
  {
    id: "okayama-tamashima",
    name: "岡山 水島港 玉島ハーバーブリッジ下・沙美海岸",
    kana: "たましまはーばーあいらんど",
    region: "chugoku",
    prefecture: "岡山県",
    address: "岡山県倉敷市玉島乙島字新湊",
    lat: 34.5055,
    lng: 133.6781,
    category: "pier",
    description: "瀬戸内海の潮流が抜ける水島灘の名ポイント。岡山名物「ママカリ（サッパ）」サビキの超一級ポイントであり、マダコやチヌ、ギザミ（キュウセン）も実績多数。",
    accessInfo: "山陽自動車道「玉島IC」より車で約20分。JR山陽本線「新倉敷駅」より車で約15分。",
    depthRange: "3m〜8m",
    bottomType: "砂泥・敷石・基礎ブロック",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能",
    },
    targetFish: ["ママカリ（サッパ）","マダコ","クロダイ（チヌ）","キュウセン（ギザミ）","シロギス","イイダコ","イシモチ","タケノコメバル","コウイカ","メバル","ボラ"],
    bestSeasons: {
      spring: ["メバル","チヌ","コウイカ"],
      summer: ["ママカリ","マダコ","シロギス","ギザミ","イシモチ","ボラ"],
      autumn: ["イイダコ（沙美名物）","ママカリ","チヌ","イシモチ"],
      winter: ["タケノコメバル","カサゴ","アイナメ","寒ボラ"],
    },
    recommendedRigs: ["ママカリ専用サビキ", "タコエギ仕掛け", "チョイ投げ (キス・ギザミ)", "フカセ釣り"],
    localRules: [
      "港湾物流作業エリアや係留船のロープ周りでの釣り厳禁",
      "車横付けポイントでは荷役車両の通行を絶対に妨げないこと",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "岸壁周辺駐車スペース（無料・約80台）",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "作業車両の通行に配慮して駐車してください。",
    },
    tips: "初夏〜秋のママカリサビキは入れ食い必至。フラッシャー付きサビキ仕掛けが好釣果をもたらします。",
  },
  {
    id: "tottori-yumeminato",
    name: "鳥取 境港 夢みなと公園 護岸",
    kana: "ゆめみなとこうえん",
    region: "chugoku",
    prefecture: "鳥取県",
    address: "鳥取県境港市竹内団地255-3",
    lat: 35.5182,
    lng: 133.2551,
    category: "park",
    description: "日本海と美保湾を一望する広大な海浜公園。境水道からの急潮流が差し込み、春と秋のサゴシ・アオリイカ・ヒラメ・大型キスが狙える山陰屈指の好釣り場。",
    accessInfo: "米子自動車道「米子IC」より国道431号経由で約30分。米子鬼太郎空港より車で約5分。",
    depthRange: "5m〜11m",
    bottomType: "砂泥・基礎敷石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間開放（タワー内施設は営業時間あり）",
    },
    targetFish: ["サワラ（サゴシ）", "アオリイカ", "ヒラメ", "マゴチ", "シロギス", "アジ", "スズキ", "キジハタ（アコウ）"],
    bestSeasons: {
      spring: ["サゴシ", "シロギス", "スズキ"],
      summer: ["アジ", "キジハタ", "シロギス", "マゴチ"],
      autumn: ["アオリイカ", "サゴシ", "ヒラメ", "アジ"],
      winter: ["カレイ", "スズキ", "サゴシ"],
    },
    recommendedRigs: ["ショアジギング (20〜40g)", "エギング (3.0〜3.5号)", "投げ釣り", "サビキ釣り"],
    localRules: [
      "安全柵を乗り越えての立ち入り禁止",
      "観光客や散歩者とのトラブル防止のため後方安全確認を徹底",
      "釣り糸・仕掛け・ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "夢みなと公園大駐車場 約500台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "広大で停めやすく、トイレもすぐ近くに完備されています。",
    },
    tips: "美保湾の潮通しを活かしたショアジギングでサゴシや青物が狙えます。海底は砂地のためキスやヒラメの魚影も抜群。",
  },
  {
    id: "yamaguchi-senzaki",
    name: "山口 長門 仙崎港・青海島白津波止",
    kana: "せんざきこう",
    region: "chugoku",
    prefecture: "山口県",
    address: "山口県長門市仙崎",
    lat: 34.3919,
    lng: 131.1994,
    category: "port",
    description: "北長門海岸国定公園の美しい海に囲まれた天然の良港。透明度抜群でアオリイカのエギングの聖地として名高く、尺アジや青物、キジハタの実績多数。",
    accessInfo: "中国自動車道「美祢IC」より国道316号経由で約40分。JR山陰本線「仙崎駅」より徒歩約10分。",
    depthRange: "6m〜14m",
    bottomType: "岩礁・砂泥・海藻帯",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能",
    },
    targetFish: ["アオリイカ", "アジ（尺アジ）", "ヤリイカ", "ヤズ・ヒラマサ", "キジハタ", "カマス", "メバル"],
    bestSeasons: {
      spring: ["親アオリイカ", "ヤリイカ", "ヒラマサ"],
      summer: ["キジハタ", "アジ", "カマス"],
      autumn: ["新子アオリイカ", "青物", "カマス", "アジ"],
      winter: ["ヤリイカ（冬の風物詩）", "メバル", "カサゴ"],
    },
    recommendedRigs: ["エギング", "ジグ単アジング / メバリング", "ライトショアジギング", "ウキ釣り（エサ巻きテーラー）"],
    localRules: [
      "道の駅センザキッチン周辺および観光遊覧船発着エリアでの釣り禁止",
      "漁協施設前や荷揚げ場への駐車・作業妨害厳禁",
      "スミ跡やコマセは海水できれいに洗い流して退去すること",
    ],
    parkingDetails: {
      capacity: "仙崎港・白津港周辺駐車場 約100台",
      fee: "無料（一部観光駐車場有料時間帯あり）",
      hours: "24時間利用可能",
      notes: "漁業関係者の作業車両の邪魔にならない場所に駐車してください。",
    },
    tips: "春・秋のエギングに加え、冬の夜釣りで狙うヤリイカのテーラー仕掛けが名物。夜間は常夜灯下のアジングで尺アジが出ます。",
  },
  {
    id: "yamaguchi-fishingpark-hikari",
    name: "山口 光市 フィッシングパーク光",
    kana: "ふぃっしんぐぱーくひかり",
    region: "chugoku",
    prefecture: "山口県",
    address: "山口県光市室積六丁目17-1",
    lat: 33.9280,
    lng: 131.9643,
    category: "park",
    description: "周防灘に突き出た室積半島の天然好漁場に設置された有料海釣り公園。安全柵完備の釣り桟橋で、アジ・サバ・チヌ（クロダイ）・シロギス・カレイ・メバルなどが狙える初心者・ファミリーに人気の施設。",
    accessInfo: "山陽自動車道「徳山東IC」または「熊毛IC」より車で約30分。JR山陽本線「光駅」より周防絵堂行き等の防長バスで「室積公園口」下車すぐ。",
    depthRange: "6m〜12m",
    bottomType: "砂泥・基礎捨石・岩礁",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 690円 / 小人(小中学生) 410円（4時間利用）、見学 大人 230円 / 小人 110円",
      isNightFishingAllowed: true,
      nightFishingText: "5月〜10月は21:00まで営業（時期により17:00〜20:00閉園）",
      openingHours: "5〜8月 5:00〜21:00 / 4・9・10月 6:00〜21:00 / 11・3月 6:00〜20:00 / 12〜2月 7:00〜17:00（水曜休園・祝日営業）",
    },
    targetFish: ["アジ", "サバ", "クロダイ", "シロギス", "マコガレイ", "メバル", "カサゴ", "マイワシ", "サヨリ"],
    bestSeasons: {
      spring: ["メバル", "クロダイ", "マコガレイ", "サヨリ"],
      summer: ["アジ", "シロギス", "マイワシ", "サバ"],
      autumn: ["アジ", "サバ", "クロダイ", "サヨリ", "シロギス"],
      winter: ["マコガレイ", "メバル", "カサゴ"],
    },
    recommendedRigs: ["サビキ釣り", "チョイ投げ仕掛け", "ウキフカセ釣り", "胴突き仕掛け"],
    localRules: [
      "ルアー釣り・エギング等は周囲の安全確保のため禁止",
      "竿は1人2本まで",
      "投げ釣り時は周囲の安全を確認し、アンダースローまたは足元への投入推奨",
      "小学生以下のお子様は救命胴衣（ライフジャケット）着用必須（無料レンタルあり）",
      "ゴミ・仕掛けの放置厳禁、コマセ汚れはバケツで清掃すること",
    ],
    parkingDetails: {
      capacity: "施設専用駐車場 約70台",
      fee: "無料",
      hours: "開園時間に合わせて利用可能",
      notes: "フィッシングパーク光の利用者専用駐車場あり。",
    },
    tips: "水深があり潮通しが良いため、サビキ釣りでアジ・サバ・イワシの数釣りが楽しめます。底狙いのチョイ投げで初夏〜秋はシロギス、秋〜春はマコガレイが有望。売店でエサ・仕掛けの販売や貸竿サービスも充実しています。",
  },
  {
    "id": "shimane-hamada-port",
    "name": "島根 浜田 浜田港 お魚センター裏護岸・長浜波止",
    "kana": "はまだこうおさかなせんたーうら",
    "region": "chugoku",
    "prefecture": "島根県",
    "address": "島根県浜田市原井町3050-46",
    "lat": 34.8967,
    "lng": 132.0628,
    "category": "port",
    "description": "山陰屈指の大型漁港・浜田港に位置する人気スポット。しまねお魚センター裏手の足場良好な護岸で、アジ・アオリイカ・ヤリイカ・ヒラマサ・サゴシ・キジハタが狙える山陰の超一級ポイント。",
    "accessInfo": "山陰自動車道「浜田IC」または「竹迫IC」より車で約10分。JR山陰本線「浜田駅」よりバス約10分。",
    "depthRange": "6m〜13m",
    "bottomType": "砂泥・捨石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（市場荷揚げ作業エリア除く）"
    },
    "targetFish": [
      "アジ",
      "アオリイカ",
      "ヤリイカ",
      "ヒラマサ",
      "サワラ（サゴシ）",
      "キジハタ",
      "クロダイ"
    ],
    "bestSeasons": {
      "spring": [
        "親アオリイカ",
        "ヤリイカ",
        "ヒラマサ"
      ],
      "summer": [
        "キジハタ",
        "アジ",
        "シロギス"
      ],
      "autumn": [
        "新子アオリイカ",
        "ヒラマサ",
        "サゴシ",
        "アジ"
      ],
      "winter": [
        "ヤリイカ（山陰名物）",
        "メバル",
        "カサゴ"
      ]
    },
    "recommendedRigs": [
      "カゴ釣り（ヒラマサ・アジ）",
      "エギング / テーラー仕掛け",
      "ショアジギング",
      "サビキ釣り"
    ],
    "localRules": [
      "魚市場・水揚げ施設周辺への立ち入り・駐車厳禁",
      "夜間の騒音防止およびゴミの完全持ち帰り",
      "イカスミやコマセ汚れは必ず海水で洗浄すること"
    ],
    "parkingDetails": {
      "capacity": "お魚センター周辺無料駐車場 約200台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "観光施設利用者と共用のためマナーを守って駐車してください。"
    },
    "tips": "山陰名物の山陰カゴ釣りでのヒラマサ・尺アジ狙いが盛ん。秋のエギングや冬〜春のヤリイカ（テーラー仕掛け）も高い実績を誇ります。"
  },


  // --- 四国エリア ---
  {
    id: "kagawa-takamatsu-port",
    name: "香川 高松港 せとしるべ（赤灯台防波堤）",
    kana: "たかまつこうせとしるべ",
    region: "shikoku",
    prefecture: "香川県",
    address: "香川県高松市サンポート8",
    lat: 34.3615,
    lng: 134.0517,
    category: "pier",
    description: "世界初の総ガラス製灯台「せとしるべ」へ続く長大な遊歩道防波堤。瀬戸内海の激流がぶつかるチヌフカセの聖地で、アジングやタチウオ、アオリイカも大人気。",
    accessInfo: "JR予讃線・高徳線「高松駅」より徒歩約10分。高松自動車道「高松中央IC」より約20分。",
    depthRange: "5m〜12m",
    bottomType: "敷石・砂泥・基礎ケーソン",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能（荒天時ゲート閉鎖あり）",
    },
    targetFish: ["アジ","タチウオ","アオリイカ","ハマチ","イイダコ","イシモチ","タケノコメバル","カサゴ","メバル","クロダイ","ボラ"],
    bestSeasons: {
      spring: ["メバル","カサゴ","チヌ"],
      summer: ["アジ","イシモチ","マダコ","ボラ"],
      autumn: ["タチウオ","アオリイカ","イイダコ","ハマチ","イシモチ"],
      winter: ["タケノコメバル","メバル","カサゴ","寒ボラ"],
    },
    recommendedRigs: ["ウキフカセ釣り (チヌ)", "ジグ単アジング", "タチウオテンヤ / ワインド", "エギング"],
    localRules: [
      "防波堤遊歩道は観光客・ウォーキング利用者が多いためキャスト時の後方確認を厳守",
      "フェリー航路への遠投禁止",
      "フカセのオキアミ・コマセ汚れは必ずバケツの水で綺麗に洗い流すこと",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "サンポート高松地下駐車場 約900台 / 周辺有料コインパーキング",
      fee: "20分毎 100円（最大料金設定ありコインパーキング推奨）",
      hours: "24時間入出庫可能",
      notes: "高松駅・サンポート周辺に多数の24時間コインパーキングが点在しています。",
    },
    tips: "潮が川のように速く流れるため、フカセ釣りは重めの仕掛けで底を這わせるのがコツ。秋の夕マズメ〜夜はタチウオのウキ釣りやワインドで連発します。",
  },
  {
    id: "tokushima-naruto-okazaki",
    name: "徳島 鳴門 岡崎海岸・亀浦港波止",
    kana: "なるとおかざきかいがん",
    region: "shikoku",
    prefecture: "徳島県",
    address: "徳島県鳴門市撫養町岡崎",
    lat: 34.1855,
    lng: 134.602,
    category: "port",
    description: "鳴門海峡の激流に育まれた魚影の濃さが自慢。ショアから「鳴門鯛」と呼ばれるマダイが狙えるほか、ハマチ・メジロ、アオリイカ、タチウオの実績が全国区。",
    accessInfo: "神戸淡路鳴門自動車道「鳴門北IC」より車で約10分。JR鳴門線「鳴門駅」より車で約8分。",
    depthRange: "6m〜15m",
    bottomType: "岩礁・敷石・急流砂礫底",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能",
    },
    targetFish: ["マダイ（鳴門鯛）", "ハマチ・メジロ", "アオリイカ", "タチウオ", "アジ", "メバル", "スズキ", "カワハギ"],
    bestSeasons: {
      spring: ["乗っ込みマダイ", "アオリイカ", "メバル"],
      summer: ["青物", "アジ", "タチウオ", "キス"],
      autumn: ["マダイ", "ハマチ", "アオリイカ", "タチウオ"],
      winter: ["寒メバル", "スズキ", "カサゴ"],
    },
    recommendedRigs: ["遠投カゴ釣り (マダイ・青物)", "ショアジギング (40〜80g)", "エギング", "ウキ釣り"],
    localRules: [
      "潮流が極めて激しいため、ライフジャケットの着用を強く推奨",
      "渡船・漁船の出入港時は仕掛けを回収し航路を空けること",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "岡崎海岸・亀浦港周辺無料駐車場 約60台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "海辺の駐車スペースが無料で利用可能。夜釣りにも便利です。",
    },
    tips: "大潮の引き潮時は激流となるため、潮止まり（転流時）前後の30分〜1時間が最大のチャンスタイム。カゴ釣りでタナを底から2mに設定すると良型マダイが出ます。",
  },
  {
    id: "ehime-mitsu-port",
    name: "愛媛 松山 三津浜港 防波堤",
    kana: "みつはまこう",
    region: "shikoku",
    prefecture: "愛媛県",
    address: "愛媛県松山市三津",
    lat: 33.865,
    lng: 132.7095,
    category: "port",
    description: "伊予灘に面した松山市を代表する歴史ある名港。アジングの聖地・愛媛県らしく良型アジの魚影が濃く、タチウオやハマチ、アオリイカ、カワハギが狙えます。",
    accessInfo: "伊予鉄道高浜線「三津駅」より徒歩約10分。松山自動車道「松山IC」より車で約25分。",
    depthRange: "5m〜10m",
    bottomType: "砂泥・敷石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能",
    },
    targetFish: ["アジ（尺アジ）", "タチウオ", "ハマチ", "アオリイカ", "カワハギ", "メバル", "クロダイ", "シロギス"],
    bestSeasons: {
      spring: ["アオリイカ", "メバル", "クロダイ"],
      summer: ["アジ", "タチウオ", "キス", "カワハギ"],
      autumn: ["尺アジ", "タチウオ", "ハマチ", "アオリイカ"],
      winter: ["良型メバル", "アジング", "カサゴ"],
    },
    recommendedRigs: ["ジグ単アジング (0.8〜1.5g)", "タチウオテンヤ / ワインド", "サビキ釣り", "胴突きカワハギ仕掛け"],
    localRules: [
      "フェリー・三津の渡し船の発着所周辺は釣り禁止",
      "漁業作業エリアへの駐車禁止",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "三津浜港周辺駐車スペース 約70台",
      fee: "無料（一部コインパーキングあり）",
      hours: "24時間利用可能",
      notes: "港湾利用者の迷惑にならないよう駐車してください。",
    },
    tips: "夜間の常夜灯周りでのアジングは全国トップレベルの魚影。水温が下がる秋〜初冬には30cm前後の尺アジが回遊します。",
  },
  {
    id: "ehime-uwajima-kitanada",
    name: "愛媛 宇和島 北灘漁港 (大浜波止)",
    kana: "きたなだぎょこう",
    region: "shikoku",
    prefecture: "愛媛県",
    address: "愛媛県宇和島市津島町北灘",
    lat: 33.1425,
    lng: 132.4786,
    category: "port",
    description: "豊後水道・宇和海に面した北灘湾の天然良港。黒潮の恩恵とリアス海岸の深い水深により魚影の濃さは四国屈指で、宇和島名物の尺アジ・ギガアジのアジング、春のモンスター級アオリイカ（2kg〜3kg超）、マダイ、オオモンハタ・キジハタ、青物が狙える超一級ポイント。",
    accessInfo: "松山自動車道（宇和島道路）「津島高田IC」より国道56号経由で約15分。JR予讃線「宇和島駅」より車で約30分。",
    depthRange: "7m〜16m",
    bottomType: "砂泥・岩礁・敷石・藻場",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間常時開放（養殖作業・漁協施設周辺除く）",
    },
    targetFish: ["アジ（尺アジ・ギガアジ）", "アオリイカ（モイカ）", "マダイ", "オオモンハタ", "キジハタ", "カンパチ（ネイゴ）", "ブリ（ヤズ・ハマチ）", "タチウオ", "クロダイ", "メジナ"],
    bestSeasons: {
      spring: ["親アオリイカ（2kg〜3kg超）", "マダイ", "クロダイ", "尺アジ"],
      summer: ["オオモンハタ", "キジハタ", "カンパチ（ネイゴ）", "アジ"],
      autumn: ["新子アオリイカ", "ハマチ", "タチウオ", "尺アジ", "オオモンハタ"],
      winter: ["ギガアジ（40cm超）", "寒メジナ", "ヤリイカ", "カサゴ"],
    },
    recommendedRigs: ["ジグ単アジング / キャロライナリグ", "エギング / ヤエン仕掛け", "ライトショアジギング / スロージギング", "ウキフカセ釣り", "タイラバ / テンヤ（波止キャスト）"],
    localRules: [
      "湾内の真珠・魚類養殖筏（いかだ）や係留ロープ周辺への仕掛けのキャスト・引っかけ厳禁",
      "漁協施設前や水揚げ作業エリアへの駐車および作業妨害禁止",
      "波止の外側は高さがあるためライフジャケット着用必須・長柄タモ網（5m以上）必携",
      "イカスミ跡やコマセ汚れは必ず海水できれいに洗い流すこと",
      "ゴミ・仕掛け・釣り糸の完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "漁港周辺駐車スペース 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "漁業関係者の作業車両や船の積み降ろしの邪魔にならない場所に配慮して駐車してください。",
    },
    tips: "宇和海のアジング聖地として名高く、常夜灯周りやディープエリアで30cm〜40cm超のギガアジがヒットします。春は3kg前後の巨大親アオリイカが狙えるほか、底付近をスロージグやワームで探るとオオモンハタやアカハタが高確率でヒットします。",
  },
  {
    id: "kochi-tanezaki",
    name: "高知 浦戸湾 種崎赤灯台・種崎千松公園護岸",
    kana: "たねざきあかとうだい",
    region: "shikoku",
    prefecture: "高知県",
    address: "高知県高知市種崎",
    lat: 33.5038,
    lng: 133.5694,
    category: "port",
    description: "太平洋と浦戸湾を結ぶ湾口に位置する黒潮直結の超一級ポイント。ネイリ（カンパチ若魚）やヒラメ、タチウオ、シロギス、そして怪魚アカメの聖地として名高い。",
    accessInfo: "高知自動車道「高知IC」より車で約20分。とさでん交通バス「種崎」下車すぐ。",
    depthRange: "5m〜13m",
    bottomType: "砂・砂礫・基礎ブロック",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      openingHours: "24時間利用可能",
    },
    targetFish: ["ネイリ（カンパチ）", "ヒラメ", "タチウオ", "シロギス", "アオリイカ", "マゴチ", "アカメ", "ヘダイ"],
    bestSeasons: {
      spring: ["シロギス", "アオリイカ", "ヒラメ"],
      summer: ["ネイリ（ショゴ）", "キス", "マゴチ", "アカメ"],
      autumn: ["ネイリ", "タチウオ", "ヒラメ", "アオリイカ"],
      winter: ["ヒラメ", "スズキ", "カサゴ"],
    },
    recommendedRigs: ["ショアジギング (30〜60g)", "泳がせ釣り（活きアジ/イワシ）", "投げ釣り (キス)", "タチウオテンヤ"],
    localRules: [
      "浦戸湾口は船の往来が非常に多いため、航路中央へのキャスト厳禁",
      "アカメを釣る場合は県の保護ルール・キャッチ＆リリース推奨指針を遵守すること",
      "ライフジャケット着用を強く推奨",
      "ゴミの完全持ち帰り",
    ],
    parkingDetails: {
      capacity: "種崎千松公園無料駐車場 約120台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "松林の公園内に広大な無料駐車場とトイレが完備されています。",
    },
    dangerNotes: ["湾口部は潮流が極めて速く、外洋のうねりが入るため落水に厳重警戒してください。"],
    tips: "夏〜秋の朝マズメはメタルジグや泳がせ釣りでネイリ（カンパチ）が猛烈にヒット。砂底のチョイ投げでは良型のキスが数釣りできます。",
  },
  {
    "id": "shizuoka-hamamatsu-arai",
    "name": "静岡 浜松・浜名湖 新居弁天海釣公園 (今切口)",
    "kana": "あらいべんてんうみづりこうえん",
    "region": "tokai",
    "prefecture": "静岡県",
    "address": "静岡県湖西市新居町新居官有無番地",
    "lat": 34.6813,
    "lng": 137.5916,
    "category": "park",
    "description": "浜名湖と遠州灘が繋がる「今切口」に面したT字型突堤が並ぶ無料海釣り公園。潮通しが極めて良く、クロダイ・キビレ・アジ・サッパ・ギマ・ヒラメ・マゴチ・シーバス・タコと魚種の豊富さは東海屈指。",
    "accessInfo": "東名高速「三ヶ日IC」より約30分、または国道1号浜名バイパス「新居弁天IC」よりすぐ。JR東海道本線「新居町駅」より徒歩約20分。",
    "depthRange": "4m〜8m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "クロダイ（チヌ）",
      "キビレ",
      "ヘダイ",
      "アジ",
      "サッパ",
      "サヨリ",
      "タケノコメバル",
      "テナガエビ",
      "ボラ",
      "ギマ",
      "ヒラメ",
      "マゴチ",
      "シーバス",
      "シロギス",
      "マダコ"
    ],
    "bestSeasons": {
      "spring": [
        "クロダイ",
        "キビレ",
        "シーバス",
        "シロギス"
      ],
      "summer": [
        "ギマ",
        "サッパ",
        "アジ",
        "マゴチ",
        "タコ",
        "キビレ"
      ],
      "autumn": [
        "クロダイ",
        "アジ",
        "ヒラメ",
        "マゴチ",
        "シーバス"
      ],
      "winter": [
        "カレイ",
        "カサゴ",
        "クロダイ"
      ]
    },
    "recommendedRigs": [
      "前打ち / ヘチ釣り（クロダイ・キビレ）",
      "サビキ釣り",
      "チョイ投げ仕掛け",
      "ルアー（マゴチ・ヒラメ）",
      "タコエギ"
    ],
    "localRules": [
      "T字堤防は潮の流れが速いため、急流時の無理な仕掛け投入や立ち泳ぎ禁止",
      "安全柵を乗り越えての釣り禁止",
      "ゴミ・仕掛けの完全持ち帰り、コマセ汚れはバケツで洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "海釣公園有料駐車場 約400台",
      "fee": "1回 500円（普通車）※30分以内無料",
      "hours": "24時間利用可能",
      "notes": "T字堤防の目の前に駐車できアクセス抜群です。"
    },
    "tips": "今切口の激流がぶつかるT字堤のヨレに大型クロダイ・キビレが溜まります。夏はチョイ投げでギマやマゴチ、サビキでのアジ・サッパ数釣りがファミリーに大人気です。"
  },
  {
    "id": "mie-shima-wagu",
    "name": "三重 志摩 英虞湾・熊野灘 和具漁港",
    "kana": "わぐぎょこう",
    "region": "tokai",
    "prefecture": "三重県",
    "address": "三重県志摩市志摩町和具",
    "lat": 34.2631,
    "lng": 136.8119,
    "category": "port",
    "description": "志摩半島の南端、英虞湾口と熊野灘に面した三重県屈指の超大型港湾。黒潮が直接洗うため魚影が極めて濃く、アオリイカのエギング・ヤエン釣りの聖地として全国に知られ、尺アジ・青物・ロックフィッシュの実績多数。",
    "accessInfo": "伊勢自動車道「伊勢西IC」より伊勢道路経由で約1時間。近鉄志摩線「鵜方駅」より三重交通バスで約40分。",
    "depthRange": "6m〜15m",
    "bottomType": "岩礁・基礎ケーソン・砂泥・藻場",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（市場荷役エリア除く）"
    },
    "targetFish": [
      "アオリイカ",
      "アジ（尺アジ）",
      "クロダイ",
      "メジナ（グレ）",
      "ブリ（ワラサ）",
      "カンパチ（シオ）",
      "オオモンハタ",
      "アカハタ"
    ],
    "bestSeasons": {
      "spring": [
        "親アオリイカ（2kg〜3kg超）",
        "クロダイ",
        "グレ",
        "マダイ"
      ],
      "summer": [
        "オオモンハタ",
        "アカハタ",
        "カンパチ（シオ）",
        "アジ"
      ],
      "autumn": [
        "新子アオリイカ",
        "ブリ・ワラサ",
        "シオ",
        "アジ",
        "カマス"
      ],
      "winter": [
        "寒グレ",
        "尺アジ",
        "アオリイカ",
        "メバル"
      ]
    },
    "recommendedRigs": [
      "エギング / ヤエン仕掛け",
      "ライトショアジギング",
      "ジグ単アジング",
      "ウキフカセ釣り",
      "ロックフィッシュテキサスリグ"
    ],
    "localRules": [
      "漁業協同組合施設・魚市場周辺の荷揚げ作業エリアへの駐車・立ち入り禁止",
      "大波止の外海側は足場が高いためライフジャケット着用必須・長柄タモ網（6m以上）必携",
      "スミ跡やコマセは海水できれいに洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "和具港周辺駐車スペース 約80台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "漁業関係者の作業動線を塞がないよう十分配慮して駐車してください。"
    },
    "tips": "春は3kg超えの巨大アオリイカが狙えるヤエン・エギングの超一級ポイント。大波止先端からのショアジギングではワラサやシオ、底狙いでオオモンハタやアカハタの高級魚が狙えます。"
  },
  {
    "id": "niigata-joetsu-naoetsu",
    "name": "新潟 上越 直江津港第3東防波堤 管理釣り場",
    "kana": "なおえつこうだいさんひがしぼうはてい",
    "region": "hokuriku",
    "prefecture": "新潟県",
    "address": "新潟県上越市八千浦4",
    "lat": 37.1685,
    "lng": 138.2581,
    "category": "park",
    "description": "日本海に突き出た全長約500mの有料メガ防波堤管理釣り場（ハッピーフィッシング運営）。水深10m以上・潮通し抜群で、40cm超のメガアジ・メーター級マダイ・イナダ・ワラサ・サゴシ・アオリイカが爆釣する超弩級ポイント。",
    "accessInfo": "北陸自動車道「上越IC」より約15分。えちごトキめき鉄道・JR信越本線「直江津駅」より車で約15分。",
    "depthRange": "8m〜15m",
    "bottomType": "砂泥・基礎ケーソン・人工魚礁",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": false,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": true,
      "feeText": "大人 1,000円 / 65歳以上 800円 / 中学生 500円 / 小学生 400円",
      "isNightFishingAllowed": false,
      "openingHours": "季節変動（4月〜11月開園、日の出〜日没まで）※冬期閉鎖"
    },
    "targetFish": [
      "アジ（メガアジ・尺アジ）",
      "クロダイ",
      "マダイ",
      "ブリ（イナダ・ワラサ）",
      "サワラ（サゴシ）",
      "アオリイカ",
      "ヒラメ",
      "キジハタ"
    ],
    "bestSeasons": {
      "spring": [
        "乗っ込みマダイ",
        "サゴシ",
        "イナダ",
        "メガアジ"
      ],
      "summer": [
        "キジハタ",
        "アジ",
        "ヒラメ",
        "クロダイ"
      ],
      "autumn": [
        "アオリイカ",
        "ワラサ",
        "サゴシ",
        "尺アジ",
        "マダイ"
      ],
      "winter": [
        "冬期閉鎖（12月〜3月）"
      ]
    },
    "recommendedRigs": [
      "カゴ釣り（マダイ・大アジ）",
      "ショアジギング",
      "エギング",
      "ウキフカセ釣り",
      "サビキ釣り"
    ],
    "localRules": [
      "ライフジャケット着用必須（国土交通省型式承認Type A推奨・無料レンタルあり）",
      "天候急変・高波警報時は即時退場指示に従うこと",
      "防波堤外側への投げ釣り・仕掛け投入時は周囲確認徹底"
    ],
    "parkingDetails": {
      "capacity": "管理釣り場専用駐車場 約150台",
      "fee": "無料",
      "hours": "開園時間に合わせて利用可能",
      "notes": "週末や青物回遊時は開園前から整理券配布の列ができます。"
    },
    "tips": "沖向きカゴ釣りでの大マダイ（70〜80cm級）や40cm級メガアジは全国屈指の実績。春・秋のメタルジグでの青物乱舞やエギングのアオリイカ数釣りも圧倒的です。"
  },
  {
    "id": "miyagi-kesennuma-port",
    "name": "宮城 三陸 気仙沼港 コの字岸壁・観光桟橋",
    "kana": "けせんぬまこう",
    "region": "tohoku",
    "prefecture": "宮城県",
    "address": "宮城県気仙沼市魚市場前8-25",
    "lat": 38.9008,
    "lng": 141.5794,
    "category": "port",
    "description": "三陸を代表する巨大天然良港・気仙沼港の湾奥に位置する足場抜群の岸壁（通称「コの字岸壁」）。水深があり波静かで、大型アイナメ・クロソイ・ヒラメ・イワシ・サバ・チカ・ヤリイカ・ドンコが狙える三陸南部の定番スポット。",
    "accessInfo": "三陸沿岸道路「気仙沼港IC」より約5分。JR大船渡線BRT「気仙沼市魚市場前駅」より徒歩約5分。",
    "depthRange": "6m〜12m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（魚市場作業岸壁除く）"
    },
    "targetFish": [
      "アイナメ",
      "クロソイ",
      "ヒラメ",
      "マイワシ",
      "サバ",
      "チカ",
      "ヤリイカ",
      "エゾアイナメ（ドンコ）"
    ],
    "bestSeasons": {
      "spring": [
        "アイナメ",
        "クロソイ",
        "カレイ"
      ],
      "summer": [
        "マイワシ",
        "サバ",
        "ヒラメ"
      ],
      "autumn": [
        "アイナメ",
        "クロソイ",
        "サバ",
        "ヤリイカ"
      ],
      "winter": [
        "ヤリイカ",
        "ドンコ",
        "チカ",
        "クロソイ"
      ]
    },
    "recommendedRigs": [
      "テキサスリグ / ロックフィッシュ仕掛け",
      "サビキ釣り",
      "チョイ投げ仕掛け",
      "テーラーウキ釣り / エギング"
    ],
    "localRules": [
      "魚市場の水揚げ作業エリアおよび専用岸壁への立ち入り・駐車禁止",
      "夜間の大声・騒音防止、ゴミの完全持ち帰り",
      "コマセ汚れは必ず海水で洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "海の市・魚市場周辺無料駐車場 約150台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "観光施設「みやすみプラザ・海の市」至近で利便性抜群。"
    },
    "tips": "岸壁のヘチや敷石周りをワーム（テキサスリグ）で探ると40cm超の良型アイナメやクロソイが飛び出します。秋〜冬の夜釣りは常夜灯下でのヤリイカやドンコ狙いが名物です。"
  },
  {
    "id": "hokkaido-hakodate-greenisland",
    "name": "北海道 函館 函館港 緑の島護岸・弁天台場",
    "kana": "はこだてこうみどりのしま",
    "region": "hokkaido",
    "prefecture": "北海道",
    "address": "北海道函館市大町15",
    "lat": 41.7713,
    "lng": 140.7141,
    "category": "park",
    "description": "函館山とベイエリア赤レンガ倉庫を望む函館港の人工島（緑の島）。安全フェンス完備の親水プロムナードで、イワシ・サバ・マメイカ（ヒイカ）・ヤリイカ・アブラコ（アイナメ）・クロソイ・マガレイが狙える道南屈指の快適スポット。",
    "accessInfo": "函館市電「大町電停」より徒歩約5分。JR函館駅より車で約8分。函館江差自動車道「函館IC」より約20分。",
    "depthRange": "5m〜9m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": false,
      "openingHours": "9:00〜20:00（4月〜9月） / 9:00〜17:00（10月〜3月）※夜間ゲート施錠閉鎖"
    },
    "targetFish": ["マイカ（スルメイカ）","ヤリイカ","イシガレイ","マコガレイ","アイナメ","クロソイ","ドンコ","サクラマス","サバ","イワシ"],
    "bestSeasons": {
      "spring": ["ヤリイカ","サクラマス","イシガレイ","マコガレイ"],
      "summer": ["マイカ","サバ","マイワシ","アイナメ"],
      "autumn": ["マイカ","クロソイ","サケ","ヒラメ"],
      "winter": ["ドンコ","ヤリイカ","カレイ","クロソイ"]
    },
    "recommendedRigs": [
      "ライトエギング（1.5〜2.0号エギ / スッテ）",
      "サビキ釣り",
      "ブッコミ釣り / 投げ釣り",
      "ジグヘッドロックフィッシュ"
    ],
    "localRules": [
      "緑の島ゲート開放時間内のみ利用可能（時間外は車両・人ともに立ち入り不可）",
      "公園内の芝生広場やイベントステージ周辺での釣り禁止",
      "ゴミ・仕掛けの放置厳禁、イカスミは必ず水で洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "緑の島内無料駐車場 約120台",
      "fee": "無料",
      "hours": "開島時間に連動（夜間閉鎖）",
      "notes": "島内に直結した大型無料駐車場完備でファミリーに最適。"
    },
    "tips": "初夏と秋に回遊するマメイカ（ヒイカ）のライトエギングが大人気。夏〜秋のイワシ・サバのサビキ数釣りや、外海向きへの遠投でマガレイ・アブラコが狙えます。"
  },
  {
    "id": "hokkaido-tomakomai-kirakira",
    "name": "北海道 太平洋 苫小牧西港 キラキラ公園（北埠頭緑地）",
    "kana": "とまこまいにしこうきらきらこうえん",
    "region": "hokkaido",
    "prefecture": "北海道",
    "address": "北海道苫小牧市入船町3-1",
    "lat": 42.6438,
    "lng": 141.6234,
    "category": "park",
    "description": "太平洋側最大の国際拠点港・苫小牧西港の北埠頭に整備された親水緑地公園。全面安全柵・トイレ・駐車場完備で、冬〜春の名物「群来ニシン」をはじめ、チカ・マイワシ・キュウリウオ・クロソイ・アブラコ・幻の高級魚マツカワ（王鰈）が狙える超人気スポット。",
    "accessInfo": "道央自動車道「苫小牧東IC」または「苫小牧西IC」より約20分。JR室蘭本線「苫小牧駅」より車で約10分。",
    "depthRange": "6m〜11m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放（冬季積雪時一部閉鎖あり）"
    },
    "targetFish": [
      "ニシン",
      "チカ",
      "マイワシ",
      "キュウリウオ",
      "クロソイ",
      "アイナメ（アブラコ）",
      "コマイ",
      "マツカワ（王鰈）"
    ],
    "bestSeasons": {
      "spring": [
        "大ニシン（名物群来）",
        "チカ",
        "マツカワ"
      ],
      "summer": [
        "マイワシ",
        "サバ",
        "アブラコ"
      ],
      "autumn": [
        "マイワシ",
        "チカ",
        "サバ",
        "クロソイ",
        "マツカワ"
      ],
      "winter": [
        "ニシン",
        "チカ",
        "キュウリウオ",
        "コマイ"
      ]
    },
    "recommendedRigs": [
      "ニシン・チカ専用サビキ仕掛け（集魚ライト）",
      "ブッコミ釣り / 投げ仕掛け",
      "胴突きロックフィッシュ仕掛け"
    ],
    "localRules": [
      "フェリーおよび貨物船の着岸・離岸作業時は指示に従い仕掛けを回収すること",
      "投げ釣り時は背後の散策路利用者に十分注意すること",
      "ゴミ・アミエビ等のコマセ汚れは必ず洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "キラキラ公園専用無料駐車場 約80台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "ニシンの回遊期や秋のイワシ最盛期は夜間・早朝から満車になります。"
    },
    "tips": "冬から早春にかけて回遊する30cm超のオオニシンのサビキ釣り（集魚ライト付き）が道内屈指の人気。投げ釣りでは幻の高級カレイ「マツカワ」の実績も高く狙い目です。"
  },
  {
    "id": "hokkaido-kushiro-westport",
    "name": "北海道 道東 釧路港 耐震岸壁・副港護岸",
    "kana": "くしろこうたいしんがんぺき",
    "region": "hokkaido",
    "prefecture": "北海道",
    "address": "北海道釧路市南浜町",
    "lat": 42.9858,
    "lng": 144.3522,
    "category": "port",
    "description": "道東・太平洋岸を代表する大港湾・釧路港。水深が深く車横付け可能なエリアもあり、道東名物のコマイ（カンカイ）・大型チカ・キュウリウオ・ウサギアイナメ・クロソイ・オオマイが狙える道東屈指の好漁場。",
    "accessInfo": "道東自動車道「阿寒IC」より国道38号経由で約40分。JR根室本線「釧路駅」より車で約10分。",
    "depthRange": "7m〜14m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（大型客船・貨物船荷役エリア除く）"
    },
    "targetFish": [
      "コマイ",
      "チカ",
      "キュウリウオ",
      "アイナメ（ウサギアイナメ）",
      "クロソイ",
      "オオマイ",
      "カラフトマス",
      "マツカワ"
    ],
    "bestSeasons": {
      "spring": [
        "大型チカ",
        "キュウリウオ",
        "クロガシラガレイ"
      ],
      "summer": [
        "コマイ",
        "ウサギアイナメ",
        "マイワシ"
      ],
      "autumn": [
        "コマイ（大漁期）",
        "大型チカ",
        "秋サケ・カラフトマス",
        "クロソイ"
      ],
      "winter": [
        "寒コマイ",
        "キュウリウオ",
        "チカ"
      ]
    },
    "recommendedRigs": [
      "コマイ専用胴突き・投げ仕掛け（イソメ・サンマ切り身）",
      "チカ専用スピードサビキ",
      "ロックフィッシュジグヘッド"
    ],
    "localRules": [
      "大型観光クルーズ船・貨物船接岸時の立ち入り制限・指示厳守",
      "港湾関係車両の通行路を塞ぐ駐車厳禁",
      "極寒期の防寒対策およびライフジャケット着用必須"
    ],
    "parkingDetails": {
      "capacity": "耐震岸壁周辺駐車スペース 約100台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "岸壁近くに駐車可能（作業エリア除く）。"
    },
    "tips": "夏〜秋の夜釣りで狙うコマイのブッコミ釣りは鈴なりでヒットする道東の風物詩。秋〜冬は20cm前後の大チカがサビキでクーラー満タンになることも珍しくありません。"
  },
  {
    "id": "hokkaido-abashiri-port",
    "name": "北海道 オホーツク 網走港 帽子岩・道の駅流氷街道裏護岸",
    "kana": "あばしりこうぼうしいわ",
    "region": "hokkaido",
    "prefecture": "北海道",
    "address": "北海道網走市南3条東4丁目",
    "lat": 44.0242,
    "lng": 144.2844,
    "category": "port",
    "description": "オホーツク海に面した流氷の街・網走港のシンボル「帽子岩」を望む好釣り場。道の駅流氷街道網走に隣接し、流氷明けの春から秋にかけて大型チカ・ニシン・クロガシラガレイ・マガレイ・コマイ・ホッケが狙えるオホーツクの拠点。",
    "accessInfo": "女満別空港より車で約25分。JR石北本線・釧網本線「網走駅」より車で約8分。",
    "depthRange": "5m〜10m",
    "bottomType": "砂泥・岩礁・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": false,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": true,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（秋サケ規制区域・流氷船おーろら発着場除く）"
    },
    "targetFish": [
      "チカ",
      "ニシン",
      "クロガシラガレイ",
      "マガレイ",
      "コマイ",
      "クロソイ",
      "ホッケ",
      "カラフトマス"
    ],
    "bestSeasons": {
      "spring": [
        "ホッケ",
        "大チカ",
        "クロガシラガレイ",
        "マガレイ"
      ],
      "summer": [
        "大チカ",
        "コマイ",
        "カラフトマス"
      ],
      "autumn": [
        "大チカ",
        "ニシン",
        "コマイ",
        "クロソイ",
        "カレイ"
      ],
      "winter": [
        "流氷接岸期（釣り不可・観光シーズン）"
      ]
    },
    "recommendedRigs": [
      "スピードサビキ（チカ・ニシン）",
      "カレイ投げ仕掛け / ブッコミ釣り",
      "ウキフカセ釣り（ホッケ）"
    ],
    "localRules": [
      "秋サケ（アキアジ）採捕禁止区域およびライセンス船発着エリアのルール厳守",
      "観光砕氷船「おーろら」専用桟橋周辺での釣り禁止",
      "ゴミの完全持ち帰り徹底"
    ],
    "parkingDetails": {
      "capacity": "道の駅流氷街道網走駐車場 約100台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "道の駅隣接でトイレ・売店が利用可能。"
    },
    "tips": "春の流氷明け（海明け）のホッケや肉厚クロガシラガレイ、秋の20cm超の大チカ入れ食いが名物。オホーツク海の豊かな恵みを気軽に楽しめる好スポットです。"
  },
  {
    "id": "tokyo-akatsuki-park",
    "name": "東京 お台場 暁ふ頭公園 護岸",
    "kana": "あかつきふとうこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都江東区青海4丁目",
    "lat": 35.6084,
    "lng": 139.7897,
    "category": "park",
    "description": "お台場最南端の青海ふ頭先端に位置する海浜公園。東京港を出入りする大型貨物船やレインボーブリッジ・東京ゲートブリッジを望み、安全柵完備。夜釣りのシーバス・クロダイ、秋のサビキでのアジ・サヨリが狙えます。",
    "accessInfo": "新交通ゆりかもめ「テレコムセンター駅」より徒歩約20分。首都高速湾岸線「臨海副都心出入口」より約10分。",
    "depthRange": "4m〜8m",
    "bottomType": "砂泥・基礎ケーソン・敷石",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": false,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "アジ",
      "サヨリ",
      "ハゼ",
      "メバル",
      "カサゴ"
    ],
    "bestSeasons": {
      "spring": [
        "バチ抜けシーバス",
        "クロダイ",
        "メバル"
      ],
      "summer": [
        "ハゼ",
        "クロダイ",
        "シーバス"
      ],
      "autumn": [
        "アジ",
        "サヨリ",
        "シーバス",
        "クロダイ"
      ],
      "winter": [
        "メバル",
        "カサゴ",
        "セイゴ"
      ]
    },
    "recommendedRigs": [
      "ウキ釣り / ヘチ釣り（クロダイ）",
      "ルアー（シーバス / メバリング）",
      "トリックサビキ",
      "チョイ投げ仕掛け"
    ],
    "localRules": [
      "オーバースロー（大遠投）による投げ釣り禁止（アンダースロー・足元推奨）",
      "バーベキューエリア以外での火気使用禁止",
      "ゴミ・仕掛け・コマセ汚れの完全持ち帰り・清掃"
    ],
    "parkingDetails": {
      "capacity": "暁ふ頭公園有料駐車場 約30台",
      "fee": "最初の1時間200円 / 以後30分毎100円（普通車）",
      "hours": "24時間利用可能",
      "notes": "公園直結で便利。夜間釣行にも利用できます。"
    },
    "tips": "角付近や常夜灯の明暗境界がシーバスやメバルの好ポイント。秋はサヨリ専用仕掛けやトリックサビキでアジ・サッパが狙えます。"
  },
  {
    "id": "tokyo-shibaura-south-park",
    "name": "東京 港区 芝浦南ふ頭公園",
    "kana": "しばうらみなみふとうこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都港区海岸3丁目",
    "lat": 35.6371,
    "lng": 139.7603,
    "category": "park",
    "description": "レインボーブリッジの巨大な橋脚真下に位置する海上公園。水深があり潮通し抜群で、ヘチ釣りでのクロダイやルアーでのシーバス、秋のアジ・サッパサビキに人気の絶景夜景スポット。",
    "accessInfo": "新交通ゆりかもめ「芝浦ふ頭駅」より徒歩約10分。JR山手線「田町駅」東口より徒歩約20分。",
    "depthRange": "5m〜10m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": false,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": false,
      "openingHours": "8:00〜21:00（運動広場・園路開放時間）※夜間閉鎖"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "アジ",
      "サッパ",
      "メバル",
      "ハゼ",
      "コノシロ"
    ],
    "bestSeasons": {
      "spring": [
        "シーバス",
        "クロダイ",
        "メバル"
      ],
      "summer": [
        "ハゼ",
        "クロダイ（落とし込み）",
        "サッパ"
      ],
      "autumn": [
        "アジ",
        "シーバス",
        "コノシロ",
        "クロダイ"
      ],
      "winter": [
        "メバル",
        "カサゴ"
      ]
    },
    "recommendedRigs": [
      "ヘチ釣り / 落とし込み（クロダイ）",
      "サビキ釣り",
      "ルアーキャスティング",
      "ジグヘッドリグ"
    ],
    "localRules": [
      "公園開園時間（8:00〜21:00）外の立ち入り禁止",
      "投げ釣り禁止（足元・ヘチ推奨）",
      "運動広場（少年野球等）利用時は周囲の安全に十分配慮すること"
    ],
    "parkingDetails": {
      "capacity": "専用駐車場なし（近隣コインパーキング利用）",
      "fee": "近隣タイムズ等 30分300円前後",
      "hours": "24時間利用可能",
      "notes": "公共交通機関（ゆりかもめ芝浦ふ頭駅）の利用が便利です。"
    },
    "tips": "レインボーブリッジの橋脚周りは潮が効いて大型クロダイやシーバスの格好のストラクチャー。足元のケーソン隙間をヘチ釣りで探ると好釣果。"
  },
  {
    "id": "tokyo-shibaura-canal",
    "name": "東京 港区 芝浦運河・新芝運河 親水遊歩道",
    "kana": "しばうらうんが",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都港区芝浦3丁目・4丁目",
    "lat": 35.6485,
    "lng": 139.7569,
    "category": "pier",
    "description": "田町駅・芝浦ふ頭周辺に広がる都市型運河の親水遊歩道。橋脚の明暗部や護岸のスリットに居着くシーバスやクロダイの落とし込み・前打ち釣りのメッカとして知られます。",
    "accessInfo": "JR山手線・京浜東北線「田町駅」芝浦口（東口）より徒歩約5分。都営地下鉄「三田駅」より徒歩約7分。",
    "depthRange": "2m〜5m",
    "bottomType": "砂泥・ヘドロ・コンクリート護岸",
    "facilities": {
      "hasParking": false,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": false,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間利用可能（住宅街遊歩道）"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "ハゼ",
      "ボラ"
    ],
    "bestSeasons": {
      "spring": [
        "バチ抜けシーバス（名物）",
        "乗っ込みクロダイ"
      ],
      "summer": [
        "ハゼ",
        "クロダイ（ヘチ・イガイ）",
        "シーバス"
      ],
      "autumn": [
        "落ちアユ・コノシロパターン シーバス",
        "ハゼ"
      ],
      "winter": [
        "温排水周りシーバス",
        "底生ハゼ"
      ]
    },
    "recommendedRigs": [
      "ヘチ釣り（カニ・フジツボ・イガイ）",
      "シンキングペンシル / ワーム",
      "ハゼミャク釣り"
    ],
    "localRules": [
      "周辺は閑静なオフィス・住宅街のため夜間の大声・騒音厳禁",
      "遊歩道の歩行者・ジョギングランナーへの仕掛け接触事故防止",
      "水上タクシー・観光船の運航路のためキャスト注意"
    ],
    "parkingDetails": {
      "capacity": "専用駐車場なし（近隣コインパーキング利用）",
      "fee": "近隣コインパーキング多数あり",
      "hours": "24時間利用可能",
      "notes": "田町駅・三田駅から徒歩すぐの電車釣行がベスト。"
    },
    "tips": "春（3〜5月）の大潮・後中潮の夜間に発生する「バチ抜け」パターンでは表層引きのシンキングペンシルでシーバスが連発します。"
  },
  {
    "id": "tokyo-toyosu-gururi-park",
    "name": "東京 湾奥 豊洲ぐるり公園 (豊洲ふ頭内海親水護岸)",
    "kana": "とよすぐるりこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都江東区豊洲6丁目1番先",
    "lat": 35.6412,
    "lng": 139.7784,
    "category": "park",
    "description": "豊洲市場をぐるりと取り囲む全長約4.5kmの開放的な親水海上公園。全面安全柵完備・足場良好で都内トップクラスの人気を誇り、秋のタチウオ（テンヤ・ワインド）、サビキのアジ・イワシ、ヘチ釣りのクロダイで大賑わい。",
    "accessInfo": "新交通ゆりかもめ「市場前駅」より徒歩約10分。首都高速10号晴海線「豊洲出入口」より約5分。",
    "depthRange": "4m〜8m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": ["シーバス","クロダイ","イシモチ","アジ","サッパ","コノシロ","ハゼ","タチウオ","ヒイカ","ボラ"],
    "bestSeasons": {
      "spring": ["シーバス（バチ抜け）","クロダイ","ハゼ"],
      "summer": ["アジ","イシモチ","サッパ","コノシロ","クロダイ","ボラ"],
      "autumn": ["タチウオ","シーバス","イシモチ","ヒイカ","サヨリ"],
      "winter": ["ヒイカ","カレイ","メバル","寒ボラ"]
    },
    "recommendedRigs": [
      "タチウオテンヤ / ワインド",
      "トリックサビキ / サビキ釣り",
      "ヘチ釣り（クロダイ）",
      "ルアーキャスティング"
    ],
    "localRules": [
      "背後のランニングコース利用者への配慮徹底（キャスト時の後方確認）",
      "オーバースローによる大遠投禁止（足元・アンダースロー推奨）",
      "ゴミの完全持ち帰り、タチウオの血痕・コマセ汚れは必ず海水で洗い流すこと"
    ],
    "parkingDetails": {
      "capacity": "豊洲ぐるり公園自動車駐車場 約100台",
      "fee": "1時間400円 / 以後30分毎200円",
      "hours": "24時間利用可能",
      "notes": "週末や秋のタチウオシーズン夜間は満車になりやすいため早めの確保推奨。"
    },
    "tips": "秋（9〜11月）の夕マズメから夜間にかけて湾奥に接岸するタチウオの回遊は都内随一の盛り上がり。キビナゴを巻いた発光タチウオテンヤの引き釣りやワインドが鉄板。"
  },
  {
    "id": "tokyo-keihinjima-tsubasa-park",
    "name": "東京 大田区 京浜島つばさ公園 護岸",
    "kana": "けいひんじまつばさこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都大田区京浜島2丁目",
    "lat": 35.5691,
    "lng": 139.7689,
    "category": "park",
    "description": "羽田空港B滑走路の対岸に位置し、ジャンボジェット機の離着陸を大迫力で望める長大な海浜公園。前面に敷石・ゴロタ帯が沈んでおり、夜釣りのメバリング・カサゴ、ウキフカセでのクロダイ、ルアーシーバスの好ポイント。",
    "accessInfo": "JR大森駅・京急平和島駅より京浜島循環バス「京浜島二丁目」下車徒歩約3分。首都高速湾岸線「大井南出入口」より約10分。",
    "depthRange": "3m〜7m",
    "bottomType": "敷石・ゴロタ石・砂泥",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": false,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "メバル",
      "カサゴ",
      "ハゼ",
      "アジ",
      "サヨリ"
    ],
    "bestSeasons": {
      "spring": [
        "メバル",
        "カサゴ",
        "クロダイ",
        "シーバス"
      ],
      "summer": [
        "ハゼ",
        "クロダイ",
        "シーバス"
      ],
      "autumn": [
        "サヨリ",
        "アジ",
        "シーバス",
        "クロダイ"
      ],
      "winter": [
        "メバル",
        "カサゴ",
        "アイナメ"
      ]
    },
    "recommendedRigs": [
      "ライトロックフィッシュ（ジグヘッド＋ワーム）",
      "ウキフカセ釣り",
      "前打ち仕掛け",
      "チョイ投げ釣り"
    ],
    "localRules": [
      "投げ釣り（オーバースロー遠投）禁止",
      "バーベキュー禁止区域での火気使用禁止",
      "ゴミの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "京浜島つばさ公園専用無料駐車場 約18台",
      "fee": "無料（利用時間制限あり：日中のみ開門の場合あり）",
      "hours": "夜間閉鎖の場合あり（近隣路上駐車厳禁）",
      "notes": "台数が少ないため週末は近隣パーキングの確認を。"
    },
    "tips": "手前の敷石スリット周りにメバルやカサゴがびっしり潜んでいます。暗くなってから1〜1.5gのジグヘッドワームで敷石際をスローリトリーブすると好釣果。"
  },
  {
    "id": "tokyo-tokai-pier-park",
    "name": "東京 大田区 東海ふ頭公園 人工磯・運河護岸",
    "kana": "とうかいふとうこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都大田区東海2丁目",
    "lat": 35.5782,
    "lng": 139.7566,
    "category": "park",
    "description": "京浜運河沿いに位置し、都内では貴重な人工磯（ゴロタ石・砂浜エリア）を備えた隠れ家的海浜公園。春〜秋のハゼ釣りやルアーシーバス、クロダイが狙えます。",
    "accessInfo": "東京モノレール「流通センター駅」より徒歩約15分。首都高速湾岸線「大井南出入口」より約5分。",
    "depthRange": "1.5m〜4m",
    "bottomType": "ゴロタ石・砂泥・人工干潟",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": ["ハゼ","テナガエビ","クロダイ","シーバス","イシモチ","カサゴ","メバル","ボラ"],
    "bestSeasons": {
      "spring": ["テナガエビ（5〜7月）","クロダイ","メバル"],
      "summer": ["ハゼ","テナガエビ","イシモチ","ボラ"],
      "autumn": ["落ちハゼ","シーバス","クロダイ"],
      "winter": ["カサゴ","メバル","寒ボラ"]
    },
    "recommendedRigs": [
      "ハゼウキ釣り / ミャク釣り",
      "チョイ投げ仕掛け",
      "ジグヘッドワーム",
      "シーバスミノー"
    ],
    "localRules": [
      "人工磯の濡れたゴロタ石は滑りやすいため滑り止めシューズ着用推奨",
      "投げ釣り時は背後の散策者に注意",
      "ゴミの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "東海ふ頭公園無料駐車場 約12台",
      "fee": "無料",
      "hours": "24時間利用可能",
      "notes": "大井埠頭トラックターミナル近くでアクセス良好。"
    },
    "tips": "人工磯の浅場は夏のハゼ釣りに最適。潮が満ちてくると運河側からシーバスやクロダイがエサを探して差してきます。"
  },
  {
    "id": "tokyo-mizu-no-hiroba-park",
    "name": "東京 お台場・有明 水の広場公園 親水護岸",
    "kana": "みずのひろばこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都江東区有明3丁目6-15",
    "lat": 35.6275,
    "lng": 139.7839,
    "category": "park",
    "description": "お台場パレットタウン跡地〜東京ビッグサイト〜夢の大橋周辺に広がる長大な運河沿い親水公園。安全柵完備で足場が良く、夜釣りの常夜灯下アジング・シーバス、クロダイの落とし込みに人気。",
    "accessInfo": "ゆりかもめ「東京ビッグサイト駅」または「青海駅」より徒歩約3分。りんかい線「国際展示場駅」より徒歩約7分。",
    "depthRange": "3m〜7m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": false,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "アジ",
      "コノシロ",
      "サッパ",
      "ハゼ",
      "メバル"
    ],
    "bestSeasons": {
      "spring": [
        "バチ抜けシーバス",
        "メバル",
        "クロダイ"
      ],
      "summer": [
        "ハゼ",
        "サッパ",
        "クロダイ"
      ],
      "autumn": [
        "アジ（アジング）",
        "シーバス",
        "コノシロ",
        "サヨリ"
      ],
      "winter": [
        "メバル",
        "カサゴ",
        "セイゴ"
      ]
    },
    "recommendedRigs": [
      "ジグ単アジング (0.8〜1.5g)",
      "ヘチ釣り（クロダイ）",
      "ルアーキャスティング",
      "トリックサビキ"
    ],
    "localRules": [
      "投げ釣り禁止（足元・アンダースロー推奨）",
      "水上バス・観光船の発着桟橋周辺での釣り禁止",
      "ゴミの完全持ち帰り、コマセ清掃徹底"
    ],
    "parkingDetails": {
      "capacity": "専用駐車場なし（近隣有明・お台場コインパーキング利用）",
      "fee": "近隣パーキング多数あり",
      "hours": "24時間利用可能",
      "notes": "駅近のため電車釣行が快適です。"
    },
    "tips": "夢の大橋やあけみ橋周辺の橋脚明暗部・常夜灯下は夜アジングやシーバスの一級ポイント。ワームをスローリトリーブするとアタリが頻発します。"
  },
  {
    "id": "tokyo-ariake-west-park",
    "name": "東京 有明 有明西ふ頭公園 (東京ビッグサイト南側護岸)",
    "kana": "ありあけにしふとうこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都江東区有明3丁目11",
    "lat": 35.628,
    "lng": 139.794,
    "category": "park",
    "description": "東京ビッグサイトの南側に広がる東京湾に面した眺望抜群の海上公園。水深があり潮通しが良く、秋のタチウオやアジサビキ、ヘチ釣りでのクロダイの実績が高い好釣り場。",
    "accessInfo": "ゆりかもめ「東京ビッグサイト駅」より徒歩約5分。りんかい線「国際展示場駅」より徒歩約10分。",
    "depthRange": "4m〜9m",
    "bottomType": "砂泥・敷石・基礎ケーソン",
    "facilities": {
      "hasParking": false,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "シーバス",
      "クロダイ",
      "アジ",
      "タチウオ",
      "サヨリ",
      "ハゼ"
    ],
    "bestSeasons": {
      "spring": [
        "シーバス",
        "クロダイ"
      ],
      "summer": [
        "ハゼ",
        "サッパ",
        "クロダイ"
      ],
      "autumn": [
        "タチウオ",
        "アジ",
        "サヨリ",
        "シーバス"
      ],
      "winter": [
        "カサゴ",
        "メバル"
      ]
    },
    "recommendedRigs": [
      "タチウオテンヤ / ワインド",
      "サビキ釣り",
      "ヘチ釣り（クロダイ）",
      "ルアーキャスティング"
    ],
    "localRules": [
      "客船ターミナル・水上バス発着所周辺での釣り禁止",
      "投げ釣り禁止（アンダースロー推奨）",
      "ゴミの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "専用駐車場なし（有明パークビル・東京ビッグサイト周辺駐車場利用）",
      "fee": "近隣タイムズ等 30分300円前後",
      "hours": "24時間利用可能",
      "notes": "ビッグサイトのイベント開催時は混雑に注意。"
    },
    "tips": "外海（東京港本船航路）に近いフェンス沿いは水深があり、秋にはタチウオやアジが回遊してきます。"
  },
  {
    "id": "tokyo-kasai-rinkai-park",
    "name": "東京 江戸川 葛西臨海公園 護岸・荒川河口",
    "kana": "かさいりんかいこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都江戸川区臨海町6丁目2-1",
    "lat": 35.6431,
    "lng": 139.8604,
    "category": "park",
    "description": "荒川と旧江戸川の河口に挟まれた広大な都立海浜公園。西なぎさ（人工干潟）や東京湾沿いの護岸で夏〜秋のハゼ釣り（チョイ投げ・ウキ釣り）、秋〜初冬の荒川河口シーバス・クロダイ狙いのメッカ。",
    "accessInfo": "JR京葉線「葛西臨海公園駅」より徒歩約1分。首都高速湾岸線「葛西出入口」すぐ。",
    "depthRange": "1.5m〜5m",
    "bottomType": "砂泥・干潟・敷石",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放（※西なぎさは9:00〜17:00開門）"
    },
    "targetFish": ["シーバス","クロダイ","ハゼ","テナガエビ","イシモチ","ボラ","サッパ"],
    "bestSeasons": {
      "spring": ["シーバス（荒川バチ抜け）","テナガエビ","クロダイ"],
      "summer": ["ハゼ（数釣り）","イシモチ","テナガエビ","クロダイ","ボラ"],
      "autumn": ["ランカーシーバス","ハゼ","イシモチ"],
      "winter": ["シーバス","寒ボラ","カレイ"]
    },
    "recommendedRigs": [
      "ハゼチョイ投げ仕掛け",
      "ハゼウキ釣り",
      "シーバスルアー（ミノー・バイブレーション）",
      "ブッコミ釣り"
    ],
    "localRules": [
      "西なぎさ干潟内への立ち入りは開園時間内のみ（夜間閉鎖）",
      "鳥類園内および水路の一部は釣り禁止区域",
      "ゴミの完全持ち帰り、安全第一での釣行"
    ],
    "parkingDetails": {
      "capacity": "葛西臨海公園専用駐車場 約2700台",
      "fee": "1時間300円 / 以後20分毎100円（普通車）",
      "hours": "24時間利用可能",
      "notes": "駅前直結・超大型駐車場完備でファミリーに最適。"
    },
    "tips": "夏（7〜9月）の西なぎさでは青イソメをエサにしたチョイ投げで束釣り（100匹以上）のハゼ入れ食いが体験できます。秋の荒川河口側はランカーシーバスの実績多数。"
  },
  {
    "id": "tokyo-oi-central-seaside-park",
    "name": "東京 品川 大井ふ頭中央海浜公園 (なぎさの森・しおじ磯)",
    "kana": "おおいふとうちゅうおうかいひんこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都品川区八潮4丁目1-19",
    "lat": 35.5917,
    "lng": 139.7525,
    "category": "park",
    "description": "京浜運河に面した「なぎさの森」内に人工磯（しおじ磯・夕やけなぎさ）を備えた緑豊かな自然公園。都内随一のハゼ釣り聖地としてファミリーに親しまれ、夜間のルアーシーバス・クロダイも人気。",
    "accessInfo": "東京モノレール「大井競馬場前駅」より徒歩約8分。首都高速湾岸線「大井出入口」より約5分。",
    "depthRange": "1m〜4m",
    "bottomType": "ゴロタ石・砂泥・人工干潟",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放（※なぎさの森の一部ゾーンは夜間閉鎖あり）"
    },
    "targetFish": ["ハゼ","テナガエビ","クロダイ","シーバス","イシモチ","カサゴ","ボラ"],
    "bestSeasons": {
      "spring": ["テナガエビ（しおじ磯名物）","シーバス"],
      "summer": ["ハゼ（数釣り）","テナガエビ","イシモチ","ボラ"],
      "autumn": ["落ちハゼ","クロダイ","シーバス"],
      "winter": ["カサゴ","寒ボラ"]
    },
    "recommendedRigs": [
      "ハゼミャク釣り / ウキ釣り（のべ竿3〜4.5m）",
      "チョイ投げ仕掛け",
      "シーバスルアー"
    ],
    "localRules": [
      "しおじ磯の岩場は滑りやすいため足元注意",
      "野鳥保護区（観察池等）への立ち入り・釣り禁止",
      "ゴミ・仕掛けの完全持ち帰り"
    ],
    "parkingDetails": {
      "capacity": "大井ふ頭中央海浜公園駐車場 約290台",
      "fee": "1時間300円 / 以後30分毎100円",
      "hours": "24時間利用可能",
      "notes": "なぎさの森側に直結した駐車場あり。"
    },
    "tips": "初夏〜秋のハゼ釣りシーズンはのべ竿でのミャク釣りが手返し抜群で大漁確実。ホタテ貝柱や青イソメを小さく付けて岩の隙間を探るのがコツ。"
  },
  {
    "id": "tokyo-shin-sakongawa-park",
    "name": "東京 江戸川 新左近川親水公園 護岸",
    "kana": "しんさこんがわしんすいこうえん",
    "region": "kanto",
    "prefecture": "東京都",
    "address": "東京都江戸川区臨海町3丁目",
    "lat": 35.6536,
    "lng": 139.86,
    "category": "park",
    "description": "旧左近川を親水緑地として整備した波静かで穏やかな親水公園。足場が平坦で安全柵も整っており、初夏（5〜7月）のテナガエビ釣りや夏〜秋のハゼ釣りの超定番ファミリースポット。",
    "accessInfo": "東京メトロ東西線「西葛西駅」より都営バス「新左近川親水公園前」下車。首都高速湾岸線「葛西出入口」より約5分。",
    "depthRange": "1m〜2.5m",
    "bottomType": "砂泥・ゴロタ石・護岸ブロック",
    "facilities": {
      "hasParking": true,
      "hasToilet": true,
      "hasSafetyFence": true,
      "isFamilyFriendly": true,
      "hasNightLight": true,
      "hasConvenienceStoreNearby": true,
      "hasTackleShopNearby": false,
      "isFeeRequired": false,
      "isNightFishingAllowed": true,
      "openingHours": "24時間常時開放"
    },
    "targetFish": [
      "ハゼ",
      "テナガエビ",
      "シーバス",
      "クロダイ",
      "コイ"
    ],
    "bestSeasons": {
      "spring": [
        "テナガエビ（5〜7月名物）",
        "バチ抜けシーバス"
      ],
      "summer": [
        "ハゼ（数釣り）",
        "テナガエビ"
      ],
      "autumn": [
        "良型ハゼ",
        "シーバス"
      ],
      "winter": [
        "底生ハゼ",
        "コイ"
      ]
    },
    "recommendedRigs": [
      "テナガエビ専用仕掛け（極小ウキ・シモリウキ・エビ針2〜3号）",
      "ハゼのべ竿ウキ釣り / ミャク釣り",
      "チョイ投げ釣り"
    ],
    "localRules": [
      "カヌー場やボート発着場周辺での釣り禁止",
      "投げ釣り禁止（アンダースロー推奨）",
      "ゴミの完全持ち帰り、水生生物の愛護"
    ],
    "parkingDetails": {
      "capacity": "新左近川親水公園駐車場 約200台",
      "fee": "最初の1時間200円 / 以後1時間毎100円",
      "hours": "24時間利用可能",
      "notes": "バーベキュー広場や遊具広場も併設。"
    },
    "tips": "初夏（5月〜7月）のテナガエビ釣りは消波ブロックや護岸スリットの隙間にアカムシを落とすと入れ食いに。ウキが横にスライドしたらゆっくり引き上げます。"
  },

  // ==========================================
  // --- 全国サーフ（砂浜）& 地磯（磯場）特集 ---
  // ==========================================

  // --- 北海道エリア ---
  {
    id: "ishikari-surf",
    name: "北海道 石狩 石狩浜・あそびーちサーフ",
    kana: "いしかりはま・あそびーちさーふ",
    region: "hokkaido",
    prefecture: "北海道",
    address: "北海道石狩市弁天町",
    lat: 43.2562,
    lng: 141.3481,
    category: "surf",
    description: "石狩川河口の南側に広がる広大な日本海サーフ。秋のサケ（アキアジ）ぶっこみ・ウキルアーや、春〜初夏のヒラメ・イシガレイ・海アメマスで賑わう北海道を代表する名サーフ。",
    accessInfo: "札樽自動車道「札幌北IC」より国道231号経由で約35分。石狩川河口・あそびーち石狩駐車場利用。",
    depthRange: "1m〜4m",
    bottomType: "遠浅砂底・沖合カケアガリ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      feeText: "海水浴シーズン（夏期）のみ駐車有料の場合あり",
      isNightFishingAllowed: true,
      nightFishingText: "可能 (ヘッドライト・熊鈴・防寒必須)",
    },
    targetFish: ["サケ（アキアジ）", "ヒラメ", "イシガレイ", "マツカワ", "シーバス", "海アメマス", "海サクラマス", "クロソイ"],
    bestSeasons: {
      spring: ["海アメマス", "サクラマス", "イシガレイ", "クロソイ"],
      summer: ["ヒラメ", "イシガレイ", "クロソイ"],
      autumn: ["サケ（アキアジ）", "ヒラメ", "イシガレイ"],
      winter: ["コマイ", "カレイ"]
    },
    recommendedRigs: ["サーフヒラメ用シンキングペンシル / メタルジグ (30〜40g)", "アキアジ用ウキルアー (スプーン45g+タコベイト)", "カレイ投げ釣り段差仕掛け"],
    localRules: [
      "サケ（アキアジ）の河川内採捕は法令で厳しく禁止されています（河口規制エリアの境界標識を必ず確認）",
      "夏期の海水浴エリアへのキャスト禁止",
      "ウェーダー着用時はフローティングベスト必須"
    ],
    parkingDetails: {
      capacity: "石狩浜駐車場 約1,000台",
      fee: "通常無料（夏期海水浴期間のみ1日1,000円程度）",
      hours: "24時間利用可能",
      notes: "砂浜へのスタック（車の埋没）に注意。舗装駐車場または固い砂地に駐車してください。"
    },
    tips: "石狩川からの濁りと潮目がぶつかる離岸流周辺がヒラメやサケの回遊ルート。遠投して沖のブレイクラインを探るのがキモ。"
  },
  {
    id: "shakotan-kamui-rock",
    name: "北海道 積丹 積丹半島 神威岬・兜千畳敷地磯",
    kana: "しゃこたんはんとう・かむいみさき・かぶとせんじょうじき",
    region: "hokkaido",
    prefecture: "北海道",
    address: "北海道積丹郡積丹町神威岬 / 古宇郡泊村兜",
    lat: 43.3308,
    lng: 140.3475,
    category: "rock",
    description: "「積丹ブルー」と呼ばれる超高透明度の海と激流が走る北海道屈指のショアジギング・フカセの聖地。春のサクラマス・ホッケ、初夏〜秋のショアブリ・ヒラメ、冬の大型根魚が狙える一級地磯。",
    accessInfo: "小樽市内より国道5号・国道229号経由で約1時間40分。兜千畳敷トンネル横の駐車帯から徒歩で磯へエントリー。",
    depthRange: "5m〜25m",
    bottomType: "大岩礁帯・スリット・ドロップオフ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（ただし足場が険しいため単独釣行厳禁）",
    },
    targetFish: ["ブリ", "ホッケ", "ヒラメ", "サクラマス", "アメマス", "クロソイ", "アイナメ", "マイカ"],
    bestSeasons: {
      spring: ["ホッケ", "サクラマス", "アイナメ", "ヤリイカ"],
      summer: ["ショアブリ (5〜10kg)", "ヒラメ", "マイカ"],
      autumn: ["ブリ", "ヒラメ", "クロソイ", "ホッケ"],
      winter: ["ホッケ（メガホッケ）", "クロソイ", "コマイ"]
    },
    recommendedRigs: ["ショアジギング (60〜100g メタルジグ)", "ダイビングペンシル (140〜190mm)", "ホッケ用ウキ釣り仕掛け", "ワームテキサスリグ"],
    localRules: [
      "スパイクブーツ・フローティングベスト・磯用グローブの完全着用必須",
      "高波・うねり発生時の立ち入り厳禁",
      "ゴミ・コマセの汚れは海水で洗い流して退去すること"
    ],
    parkingDetails: {
      capacity: "兜千畳敷駐車場 約30台 / 神威岬駐車場 約300台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "磯への降り口は傾斜があるため荷物は背負子でまとめ、両手を空けてアプローチしてください。"
    },
    tips: "外洋に向かってフルキャストし、ボトムを取ってからのワンピッチジャークで10kgクラスのブリがヒットします。春のホッケの寄り時はオキアミのウキ釣りでクーラー満タンの爆釣も。"
  },

  // --- 東北エリア ---
  {
    id: "kennan-surf",
    name: "宮城 仙台湾 県南サーフ (荒浜・鳥の海海岸)",
    kana: "みやぎ・せんだいわん・けんなんさーふ",
    region: "tohoku",
    prefecture: "宮城県",
    address: "宮城県亘理郡亘理町荒浜〜鳥の海",
    lat: 38.0415,
    lng: 140.9168,
    category: "surf",
    description: "全国のフラットフィッシュ（ヒラメ・マゴチ）アングラーが憧れる超一級サーフ。阿武隈川河口からの豊富なベイトと遠浅の地形が広がり、座布団ヒラメや60cm超のマゴチが連発する聖地。",
    accessInfo: "常磐自動車道「鳥の海スマートIC」より車で約5分。鳥の海公園・荒浜に駐車スペース多数。",
    depthRange: "1.5m〜5m",
    bottomType: "砂底・サンドバー（浅瀬）・カケアガリ・離岸流",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜間のマゴチ・シーバス狙い)",
    },
    targetFish: ["ヒラメ", "マゴチ", "イナダ", "シーバス", "シロギス", "イシモチ", "ヒラメ（座布団級）"],
    bestSeasons: {
      spring: ["マゴチ", "シーバス", "シロギス"],
      summer: ["マゴチ（爆釣期）", "ヒラメ", "シロギス"],
      autumn: ["ヒラメ（座布団クラス）", "イナダ", "シーバス"],
      winter: ["寒ヒラメ", "アイナメ"]
    },
    recommendedRigs: ["サーフ用メタルジグ (30〜40g)", "ヘビーシンキングペンシル (95〜120mm)", "ジグヘッド (20〜30g) + シャッドテールワーム (4inch)"],
    localRules: [
      "フローティングベスト・ウェーダー着用必須",
      "離岸流（カレント）への立ち込みすぎ厳禁",
      "サーファーや一般観光客との安全距離（50m以上）の確保"
    ],
    parkingDetails: {
      capacity: "鳥の海公園駐車場 約200台 / 荒浜にじいろパーキング 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・足洗い場・温泉施設（わたり温泉鳥の海）も隣接しており快適です。"
    },
    tips: "白波が立っていない色の濃い部分（離岸流＝カレント）や、沖のサンドバーの手前をスローリトリーブで引いてくると強烈なバイトが出ます。初夏のマゴチ、晩秋の大型ヒラメは圧巻。"
  },
  {
    id: "oga-shiosezaki-rock",
    name: "秋田 男鹿半島 潮瀬崎・ゴジラ岩地磯",
    kana: "おがはんとう・しおせざき・ごじらいわじいそ",
    region: "tohoku",
    prefecture: "秋田県",
    address: "秋田県男鹿市船川港本山門前",
    lat: 39.8789,
    lng: 139.7548,
    category: "rock",
    description: "男鹿半島の南西端に位置する奇岩「ゴジラ岩」周辺の広大な平磯・地磯群。日本海の激流と豊富な海藻帯が広がり、春の乗っ込みクロダイ・マダイ、秋のアオリイカ・キジハタ・青物で賑わう名所。",
    accessInfo: "秋田自動車道「昭和男鹿半島IC」より国道101号経由で約45分。潮瀬崎駐車場（ゴジラ岩駐車場）すぐ。",
    depthRange: "3m〜15m",
    bottomType: "平盤岩・スリット・海藻帯・捨石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りのメバル・クロダイ・ヤリイカ)",
    },
    targetFish: ["クロダイ", "メジナ", "マダイ", "アオリイカ", "キジハタ", "ホッケ", "メバル", "スズキ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ (50cm超)", "マダイ", "ホッケ", "メバル"],
      summer: ["キジハタ", "アオリイカ（新子）", "クロダイ"],
      autumn: ["アオリイカ（エギング聖地）", "キジハタ", "イナダ", "チヌ"],
      winter: ["ハタハタ", "ホッケ", "寒チヌ"]
    },
    recommendedRigs: ["ウキフカセ仕掛け (円錐ウキ0〜3B)", "エギング (3.0〜3.5号)", "ロックフィッシュ用フリーリグ / テキサスリグ (14g)"],
    localRules: [
      "スパイクブーツ・ライフジャケット完全着用",
      "波をかぶりやすい低座のため急な高波に常に注意",
      "観光客の多いゴジラ岩直近でのキャストは避け、外側の磯座へ入ること"
    ],
    parkingDetails: {
      capacity: "潮瀬崎駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。駐車場から磯場まで徒歩1〜3分とアクセス抜群。"
    },
    tips: "沖に向かって伸びる沈み根のキワへコマセを流し込むと大型クロダイが浮上。秋は足元のスリットから良型アオリイカがサイトで狙えます。"
  },

  // --- 関東エリア ---
  {
    id: "seisho-kouzu-surf",
    name: "神奈川 西湘 国府津海岸・酒匂海岸サーフ",
    kana: "せいしょう・こうづかいがん・さかわかいがんさーふ",
    region: "kanto",
    prefecture: "神奈川県",
    address: "神奈川県小田原市国府津〜酒匂",
    lat: 35.2798,
    lng: 139.2065,
    category: "surf",
    description: "相模湾に面した関東屈指の超急深サーフ。波打ち際から数十メートルで水深10m以上に達するため、ショアから青物（イナダ・ワラサ・ソウダ・シイラ・サバ）やヒラメ・シロギスが狙える関東アングラーの聖地。",
    accessInfo: "JR東海道線「国府津駅」より徒歩約5分。西湘バイパス「国府津IC」または「酒匂IC」すぐ。",
    depthRange: "3m〜20m (極めて急深なドン深サーフ)",
    bottomType: "砂利・小石・急勾配カケアガリ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜間のタチウオ・大アジ・マルスズキ)",
    },
    targetFish: ["イナダ", "ワラサ", "ソウダガツオ", "シイラ", "タチウオ", "ヒラメ", "マゴチ", "シロギス", "サバ"],
    bestSeasons: {
      spring: ["シロギス", "ヒラメ", "シーバス"],
      summer: ["ソウダガツオ", "シイラ", "サバ", "ショゴ"],
      autumn: ["イナダ（青物祭り）", "ワラサ", "タチウオ", "ヒラメ"],
      winter: ["寒ヒラメ", "シーバス", "大アジ"]
    },
    recommendedRigs: ["ショアジギング (30〜60g メタルジグ)", "弓角サーフトローリング (ジェット天秤20〜25号)", "サーフヒラメミノー / シンペン", "投げ釣り仕掛け"],
    localRules: [
      "急深なため波足が極めて強く、ウェーディング（立ち込み）は危険・厳禁",
      "投げ釣り・ルアーマンが密集するため隣のアングラーと十分な間隔を空けること",
      "ライフジャケット着用必須"
    ],
    parkingDetails: {
      capacity: "西湘パーキングエリア / 小田原市営駐車場 / 国府津駅前コインパーキング 多数",
      fee: "駅前コインパーキング 24時間最大800〜1,200円程度",
      hours: "24時間利用可能",
      notes: "路上駐車は警察の取締りが非常に厳しいため絶対禁止。駅周辺有料駐車場を利用。"
    },
    tips: "夏のソウダ・秋のイナダシーズンは朝マズメに大ナブラが発生。メタルジグを遠投して表層〜中層をハイスピードリトリーブすると強烈にヒットします。"
  },
  {
    id: "kujukuri-ichinomiya-surf",
    name: "千葉 九十九里浜 一宮海岸・釣ヶ崎サーフ",
    kana: "ちば・くじゅうくりはま・いちのみやかいがん・つりがさきさーふ",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県長生郡一宮町一宮〜東浪見",
    lat: 35.3721,
    lng: 140.3887,
    category: "surf",
    description: "太平洋の力強い波が打ち寄せる外房の広大サーフ。ヘッドランド（人工突堤）やサンドバー周辺にベイトが溜まり、座布団ヒラメ・ランカーシーバス・マゴチ・イシモチ・青物が狙える好ポイント。",
    accessInfo: "九十九里有料道路「一宮IC」すぐ。JR外房線「上総一ノ宮駅」よりタクシー約8分。",
    depthRange: "1.5m〜5m",
    bottomType: "遠浅砂底・ヘッドランド（消波ブロック）・サンドバー",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜間のシーバス・イシモチぶっこみ)",
    },
    targetFish: ["ヒラメ", "マゴチ", "シーバス", "イシモチ", "イナダ", "シロギス", "ヒラスズキ"],
    bestSeasons: {
      spring: ["ヒラメ", "マゴチ", "イシモチ", "シーバス"],
      summer: ["マゴチ", "イシモチ", "シロギス", "ショゴ"],
      autumn: ["座布団ヒラメ", "ランカーシーバス", "イナダ"],
      winter: ["寒ヒラメ", "シーバス"]
    },
    recommendedRigs: ["サーフ用ヘビーミノー (120〜140mm)", "シンキングペンシル (30〜40g)", "ワーム+ジグヘッド (21〜28g)", "イシモチぶっこみ2本針仕掛け"],
    localRules: [
      "サーフィンの国際的名所のため、サーファーとの接触事故防止（周囲50m以上の距離確保）",
      "ヘッドランド（消波突堤）への無理な立ち入り禁止",
      "ライフジャケット・ウェーダー着用"
    ],
    parkingDetails: {
      capacity: "一宮海岸公衆駐車場 約300台 / 釣ヶ崎海岸駐車場 約150台",
      fee: "無料（一部夏期有料期間あり）",
      hours: "24時間利用可能",
      notes: "きれいな水洗トイレ・シャワー施設完備。"
    },
    tips: "ヘッドランドの左右にできる強い離岸流（カレント）のヨレにヒラメやシーバスがステイ。ミノーを波に乗せてスローに漂わせるのが必釣パターン。"
  },
  {
    id: "boso-nojimazaki-rock",
    name: "千葉 南房総 野島崎・白浜乙浜地磯",
    kana: "みなみぼうそう・のじまざき・しらはまおとはまじいそ",
    region: "kanto",
    prefecture: "千葉県",
    address: "千葉県南房総市白浜町白浜",
    lat: 34.9015,
    lng: 139.8885,
    category: "rock",
    description: "房総半島最南端に位置し、黒潮の分流がダイレクトに当たる超一級地磯。荒磯のサラシを撃つヒラスズキ、フカセ釣りでの大型メジナ・クロダイ、カゴ釣りでのイサキ・シマアジ・青物が狙える関東屈指の名磯。",
    accessInfo: "富津館山道路「富浦IC」より国道410号経由で約35分。野島崎公園駐車場より徒歩で磯へエントリー。",
    depthRange: "3m〜12m",
    bottomType: "隆起岩礁帯・深いスリット・沈み根・サラシ場",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（ただしウネリに細心の注意が必要）",
    },
    targetFish: ["ヒラスズキ", "メジナ", "クロダイ", "イサキ", "アオリイカ", "ヒラマサ", "ショゴ", "イシダイ"],
    bestSeasons: {
      spring: ["乗っ込みメジナ", "ヒラスズキ", "アオリイカ（親イカ）"],
      summer: ["夜イサキ", "ショゴ", "シマアジ", "クロダイ"],
      autumn: ["ヒラスズキ", "アオリイカ", "イナダ・ヒラマサ"],
      winter: ["寒グレ（大型口太・尾長）", "ヒラスズキ"]
    },
    recommendedRigs: ["ヒラスズキ用フローティングミノー (120〜140mm)", "円錐ウキフカセ仕掛け (1.5〜2号ハリス)", "夜釣り電気ウキ仕掛け (イサキ狙い)"],
    localRules: [
      "スパイクブーツ（フェルトスパイク）・膨張式ではない固型式ライフジャケット必須",
      "台風や低気圧接近時、波高2.5m以上の日は絶対に入磯しないこと",
      "房総の磯は満潮時に帰り道が水没する箇所があるため潮位変化を事前確認すること"
    ],
    parkingDetails: {
      capacity: "野島崎公園無料駐車場 約120台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・コンビニ・飲食店が徒歩圏内にあり非常に便利。"
    },
    tips: "北風〜西風が吹き荒れ、白泡のサラシが広がった日がヒラスズキのXデー。サラシの切れ目にミノーを漂わせると強烈に引ったくられます。"
  },

  // --- 北陸エリア ---
  {
    id: "chirihama-surf",
    name: "石川 能登 千里浜なぎさドライブウェイ・今浜サーフ",
    kana: "いしかわ・のと・ちりはまなぎさどらいぶうぇい・いまはまさーふ",
    region: "hokuriku",
    prefecture: "石川県",
    address: "石川県羽咋市千里浜町〜羽咋郡宝達志水町今浜",
    lat: 36.8524,
    lng: 136.7541,
    category: "surf",
    description: "日本で唯一、砂浜を車で走ることができる延長約8kmの世界的観光名所にして、日本海屈指のシロギス数釣り＆フラットフィッシュの超一級サーフ。車を波打ち際に横付けして釣りができる快適なポイント。",
    accessInfo: "のと里山海道「今浜IC」または「千里浜IC」下車すぐ。砂浜海岸線へ直接進入。",
    depthRange: "1m〜4m",
    bottomType: "極めて粒子が細かい締まった砂底・遠浅",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りのスズキ・クロダイ・ギマ)",
    },
    targetFish: ["シロギス (束釣り200匹超えも)", "ヒラメ", "マゴチ", "スズキ", "クロダイ", "サゴシ", "ヒラメ"],
    bestSeasons: {
      spring: ["乗っ込みシロギス", "ヒラメ", "シーバス"],
      summer: ["シロギス（数釣り最盛期・波打ち際で入食い）", "マゴチ"],
      autumn: ["落ちギス（良型20cm超連発）", "ヒラメ", "サゴシ"],
      winter: ["シーバス", "寒ビラメ"]
    },
    recommendedRigs: ["本格投げ釣り5〜8本針仕掛け (オモリ20〜30号)", "チョイ投げ仕掛け (ファミリー向け)", "サーフシンキングペンシル / ワーム"],
    localRules: [
      "砂浜を走行する車に十分注意（速度制限遵守・歩行者優先）",
      "荒天・高波時はドライブウェイが通行規制・進入禁止となります",
      "ゴミの完全持ち帰り"
    ],
    parkingDetails: {
      capacity: "砂浜上に駐車可能（数千台規模） / 各IC口に公衆駐車場・レストハウスあり",
      fee: "無料",
      hours: "24時間（道路規制時除く）",
      notes: "千里浜の砂は細かく固く締まっているため一般車でもスタックしにくいですが、波打ち際の柔らかい砂地には踏み入れないようにしてください。"
    },
    tips: "初夏〜秋はわずか5m〜10mの波打ち際でシロギスが入れ食い。多点針仕掛けにジャリメを小さく刺し、ゆっくりサビくだけで鈴なりに釣れます。"
  },
  {
    id: "noto-rokkosaki-rock",
    name: "石川 奥能登 禄剛崎・狼煙地磯",
    kana: "おくのと・ろっこうさき・のろしじいそ",
    region: "hokuriku",
    prefecture: "石川県",
    address: "石川県珠洲市狼煙町",
    lat: 37.5273,
    lng: 137.3325,
    category: "rock",
    description: "能登半島の最先端に突き出た岬。対馬暖流とリマン寒流が交錯する超一級ポイント。足元から水深があり、ショアジギングでのヒラマサ・ブリ、秋のモンスターアオリイカ、キジハタ、大型クロダイの宝庫。",
    accessInfo: "のと里山海道「のと里山空港IC」より珠洲道路経由で約1時間15分。狼煙港・道の駅狼煙駐車場より徒歩。",
    depthRange: "5m〜20m",
    bottomType: "大岩礁帯・スリット・カケアガリ・潮目",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (ただしヘッドライト・防寒・安全装備必須)",
    },
    targetFish: ["ヒラマサ", "ブリ（フクラギ・ガンド）", "キジハタ", "アオリイカ", "クロダイ", "メジナ", "スズキ", "マダイ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ", "マダイ", "ヤリイカ", "ヒラマサ"],
      summer: ["キジハタ (40cm超)", "ヒラマサ", "クロダイ"],
      autumn: ["アオリイカ（キロアップ多数）", "ブリ", "ヒラマサ", "キジハタ"],
      winter: ["寒ブリ", "寒チヌ", "メバル"]
    },
    recommendedRigs: ["ショアジギング / プラッギング (PE2〜3号 + 60〜80gジグ)", "エギング (3.5〜4.0号)", "テキサスリグ (キジハタ狙い)", "ウキフカセ"],
    localRules: [
      "スパイクブーツ・ライフジャケット・グローブ完全着用",
      "外洋のウネリに注意（波が高い日は絶対に磯に乗らないこと）",
      "灯台周辺の遊歩道では観光客に配慮すること"
    ],
    parkingDetails: {
      capacity: "道の駅 狼煙 駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。地磯までは登り降りがあり徒歩15〜20分程度かかります。"
    },
    tips: "岬先端の潮流が激しく渦巻く潮目へダイビングペンシルやメタルジグを投入。秋のエギングではディープエリアから2kg超の大型アオリイカが狙えます。"
  },
  {
    id: "echizen-coast-rock",
    name: "福井 越前海岸 左右・呼鳥門地磯",
    kana: "ふくい・えちぜんかいがん・そう・こちょうもんじいそ",
    region: "hokuriku",
    prefecture: "福井県",
    address: "福井県丹生郡越前町左右〜梨子ヶ平",
    lat: 35.9754,
    lng: 136.0028,
    category: "rock",
    description: "越前加賀海岸国定公園の荒々しい奇岩・断崖が続く関西・中京アングラーに大人気の地磯エリア。日本海特有の深い水深と潮通しの良さで、秋のエギング聖地、夏のキジハタ・青物、冬のヤリイカまで年中楽しめる名所。",
    accessInfo: "北陸自動車道「敦賀IC」または「武生IC」より国道305号経由で約40分。",
    depthRange: "4m〜18m",
    bottomType: "荒根・岩盤・スリット・玉石混じり",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りのヤリイカ・アオリイカ・キジハタ)",
    },
    targetFish: ["アオリイカ", "キジハタ（アコウ）", "ヤリイカ", "ハマチ・メジロ", "ヒラマサ", "グレ", "チヌ", "マゴチ"],
    bestSeasons: {
      spring: ["親アオリイカ", "ヤリイカ", "クロダイ", "メバル"],
      summer: ["キジハタ（高級魚入れ食い）", "青物", "シロギス"],
      autumn: ["アオリイカ（エギング超聖地）", "ショアジギング青物", "キジハタ"],
      winter: ["ヤリイカ（テーラー仕掛け）", "寒グレ", "スズキ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)", "ロックフィッシュ用テキサス / フリーリグ", "ショアジギング (30〜60g)", "電気ウキヤリイカ仕掛け"],
    localRules: [
      "スパイクシューズ・ライフジャケット着用必須",
      "国道沿いへの違法駐車厳禁（指定駐車場を利用）",
      "ゴミ・イカ墨の洗い流し徹底"
    ],
    parkingDetails: {
      capacity: "左右漁港横駐車場 / 呼鳥門駐車場 約40台",
      fee: "無料（清掃協力金等の場合あり）",
      hours: "24時間利用可能",
      notes: "公衆トイレあり。"
    },
    tips: "秋のアオリイカは足元のスリットから無数の新子が追尾。冬場（12〜3月）は夜間に電気ウキテーラー（キビナゴ巻き）でヤリイカの数釣りが楽しめます。"
  },

  // --- 東海エリア ---
  {
    id: "enshunada-surf",
    name: "静岡 遠州灘 表浜・中田島サーフ",
    kana: "しずおか・えんしゅうなだ・おもてはま・なかたじまさーふ",
    region: "tokai",
    prefecture: "静岡県",
    address: "静岡県浜松市中央区中田島町〜湖西市潮見坂",
    lat: 34.6621,
    lng: 137.7428,
    category: "surf",
    description: "太平洋の怒涛が打ち寄せる日本屈指の大規模サーフ。東西数十キロに及ぶ広大な砂浜で、座布団ヒラメ・大型マゴチ・ワラサやブリの回遊、ナイトサーフのタチウオ・オオニベなど、全国屈指の実績を誇るサーフの総本山。",
    accessInfo: "東名高速道路「浜松IC」より約25分、または国道1号浜名バイパス各ICよりすぐ。",
    depthRange: "2m〜7m",
    bottomType: "砂底・サンドバー・激しい離岸流・カケアガリ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜間のタチウオ・オオニベ・イシモチ・スズキ)",
    },
    targetFish: ["ヒラメ", "マゴチ", "ブリ（ワラサ・イナダ）", "タチウオ", "オオニベ", "シーバス", "シロギス"],
    bestSeasons: {
      spring: ["マゴチ", "ヒラメ", "シロギス", "シーバス"],
      summer: ["マゴチ", "ショゴ", "シロギス", "タチウオ"],
      autumn: ["青物（ワラサ・ブリ大回遊）", "ヒラメ", "タチウオ"],
      winter: ["寒ヒラメ（座布団クラス）", "オオニベ", "シーバス"]
    },
    recommendedRigs: ["サーフ用メタルジグ (30〜45g)", "ヘビーシンキングペンシル (100〜125mm)", "サーフ用ワームジグヘッド (21〜28g)"],
    localRules: [
      "遠州灘特有の強烈な離岸流・高波があるため立ち込み厳禁",
      "ライフジャケット・ウェーダー完全着用",
      "アカウミガメ産卵地（保護エリア）への車両進入禁止"
    ],
    parkingDetails: {
      capacity: "中田島海浜公園駐車場 約180台 / 潮見坂・表浜各所に駐車スペース多数",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "中田島海浜公園に大型トイレ完備。"
    },
    tips: "強い西風（遠州のからっ風）が吹く冬期は風背になるポイントを探すか追い風を利用した超遠投が有利。離岸流の払い出しを見つけることが最大の釣果への近道。"
  },
  {
    id: "jogasaki-rock",
    name: "静岡 東伊豆 城ヶ崎海岸・門脇地磯",
    kana: "しずおか・ひがしいず・じょうがさきかいがん・かどわきじいそ",
    region: "tokai",
    prefecture: "静岡県",
    address: "静岡県伊東市富戸城ヶ崎",
    lat: 34.8988,
    lng: 139.1362,
    category: "rock",
    description: "大室山の溶岩が海に流れ込んで形成された壮大な柱状節理の絶壁地磯。足元から一気に水深20m前後に落ち込み、黒潮の分流が激しく渦巻くため、大型メジナ・イサキ・ヒラスズキ・ブリ・ヒラマサ・アオリイカが狙える東伊豆最強の地磯。",
    accessInfo: "伊豆スカイライン「天城高原IC」より約25分。伊豆急行「城ヶ崎海岸駅」より徒歩約25分。",
    depthRange: "8m〜25m (断崖絶壁・超深場)",
    bottomType: "溶岩岩礁・深いドロップオフ・スリット",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（ただし断崖のため単独釣行は絶対禁止）",
    },
    targetFish: ["メジナ (口太・尾長)", "イサキ", "ヒラスズキ", "ブリ", "ヒラマサ", "アオリイカ", "イシダイ", "アカハタ"],
    bestSeasons: {
      spring: ["大型メジナ", "親アオリイカ", "ヒラスズキ"],
      summer: ["夜イサキ (脂の乗った梅雨イサキ)", "アカハタ", "青物"],
      autumn: ["青物（ブリ・ヒラマサ）", "アオリイカ", "シイラ"],
      winter: ["寒グレ（50cm超大型尾長）", "ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ仕掛け (磯竿1.5〜2号 + 円錐ウキ0〜3B)", "ショアプラッギング (ダイビングペンシル 160mm)", "夜釣り電気ウキ仕掛け"],
    localRules: [
      "足場が高いため、6m以上のロング玉網（タモ網）または落としダモ必須",
      "スパイクブーツ・磯用ライフジャケット・ヘルメット・グローブ完全着用",
      "観光つり橋周辺など観光客の多いエリアでの釣り禁止"
    ],
    parkingDetails: {
      capacity: "門脇有料駐車場 約120台 / 伊東市営駐車場",
      fee: "1回500円（普通車）",
      hours: "24時間利用可能",
      notes: "駐車場から磯場までは遊歩道を通り徒歩10〜15分程度。アップダウンがあるため荷物は背負子で運搬。"
    },
    tips: "足元のサラシにオキアミコマセを入れると大型グレが浮上。沖の潮目にはダイビングペンシルを投入してヒラマサやブリを狙います。"
  },
  {
    id: "irouzaki-rock",
    name: "静岡 南伊豆 石廊崎・入間千畳敷地磯",
    kana: "しずおか・みなみいず・いろうざき・いるませんじょうじき",
    region: "tokai",
    prefecture: "静岡県",
    address: "静岡県賀茂郡南伊豆町石廊崎〜入間",
    lat: 34.6035,
    lng: 138.8475,
    category: "rock",
    description: "伊豆半島最南端に位置し、本流の黒潮がダイレクトにぶつかる日本屈指の磯釣りの聖地。渡船を使わず歩いてエントリーできる「千畳敷」をはじめ、60cm級の巨グレ（尾長グレ）、本石（イシダイ）、モロコ（クエ）、ヒラスズキが狙える夢のフィールド。",
    accessInfo: "東名「沼津IC」または新東名「長泉沼津IC」より伊豆縦貫道経由で約2時間。入間港または石廊崎オーシャンパーク駐車場利用。",
    depthRange: "5m〜25m",
    bottomType: "巨大スレート岩盤・急深スリット・海底洞窟",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（山道歩きがあるためヘッドライト・熊鈴等必須）",
    },
    targetFish: ["尾長メジナ", "口太メジナ", "イシダイ", "ヒラスズキ", "イサキ", "クエ（モロコ）", "カンパチ", "アカハタ"],
    bestSeasons: {
      spring: ["巨グレ (50〜60cm)", "ヒラスズキ", "イシダイ"],
      summer: ["イサキ", "アカハタ", "カンパチ（ネイゴ）"],
      autumn: ["青物", "アオリイカ", "イシダイ", "クエ"],
      winter: ["寒グレ（全国屈指の超大型尾長）", "ヒラスズキ"]
    },
    recommendedRigs: ["尾長専用フカセタックル (磯竿2〜2.5号 + ハリス3〜5号)", "イシダイ底物仕掛け (ワイヤーハリス+サザエ/ウニ)", "ヒラスズキ用ヘビールアー"],
    localRules: [
      "完全な磯用安全装備（スパイク・固型ベスト・ロープ等）必須",
      "入間千畳敷へのアプローチは山道を徒歩約30分歩くため、十分な体力と水分持参が必須",
      "荒天時・南西風強風時は波が這い上がるため釣行中止すること"
    ],
    parkingDetails: {
      capacity: "石廊崎オーシャンパーク駐車場 約100台 / 入間港駐車場 約30台",
      fee: "1日500円〜1,000円",
      hours: "24時間利用可能",
      notes: "入間側から千畳敷へ向かうルートは健脚向けトレッキングコースとなります。"
    },
    tips: "強烈な潮が沖に向かって払い出すポイントへ仕掛けを流し込むと、強烈な体感ショックとともに大型尾長グレが竿をのします。ハリスは太め（3号以上）が推奨。"
  },

  // --- 関西エリア ---
  {
    id: "enjugahama-surf",
    name: "和歌山 中紀 煙樹ヶ浜サーフ",
    kana: "わかやま・ちゅうき・えんじゅがはまさーふ",
    region: "kansai",
    prefecture: "和歌山県",
    address: "和歌山県日高郡美浜町和田",
    lat: 33.8752,
    lng: 135.1385,
    category: "surf",
    description: "日高川河口から日ノ御埼方面へ約4kmにわたって広がる関西屈指の急深砂利浜サーフ。波打ち際から急激に落ち込むため、遠投カゴ釣りやショアジギングで青物（シオ・ハマチ・ソウダ）・マダイ・ヒラメが狙える超有名釣り場。",
    accessInfo: "阪和自動車道「御坊IC」より車で約15分。煙樹ヶ浜海岸沿いに無料駐車場多数。",
    depthRange: "3m〜18m (強烈なドン深サーフ)",
    bottomType: "丸砂利・玉石・急勾配カケアガリ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜間のマダイ・タチウオ・コロダイ・大アジ)",
    },
    targetFish: ["ソウダガツオ", "ハマチ・メジロ", "カンパチ（シオ）", "マダイ", "ヒラメ", "タチウオ", "コロダイ", "シロギス"],
    bestSeasons: {
      spring: ["マダイ", "シロギス", "ヒラメ"],
      summer: ["ソウダガツオ", "シオ", "タチウオ", "コロダイ"],
      autumn: ["青物（ハマチ・シオ）", "ソウダガツオ", "ヒラメ"],
      winter: ["寒マダイ", "ヒラメ", "カレイ"]
    },
    recommendedRigs: ["遠投カゴ釣り仕掛け (両軸/スピニング 6〜10号ウキ)", "ショアジギング (40〜60g)", "ぶっこみ釣り (夜マダイ・コロダイ)"],
    localRules: [
      "急深かつ巻き波（引き波）が極めて強いため、波打ち際への立ち込みは厳禁・波に背を向けないこと",
      "松林内の焚き火・直火BBQ禁止",
      "ライフジャケット着用"
    ],
    parkingDetails: {
      capacity: "煙樹ヶ浜公衆駐車場 約150台（海岸線沿いに無料スペース多数）",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "きれいな公衆トイレ・キャンプ場施設あり。"
    },
    tips: "関西伝統の「煙樹ヶ浜両軸遠投カゴ釣り」の聖地。100m以上遠投して潮目を直撃すると、夏のソウダガツオや秋のシオ、夜釣りでは大型マダイやコロダイが竿を引き倒します。"
  },
  {
    id: "shirahama-senjojiki-rock",
    name: "和歌山 南紀 白浜千畳敷・三段壁地磯",
    kana: "わかやま・なんき・しらはませんじょうじき・さんだんべきじいそ",
    region: "kansai",
    prefecture: "和歌山県",
    address: "和歌山県西牟婁郡白浜町千畳敷",
    lat: 33.6668,
    lng: 135.3341,
    category: "rock",
    description: "太平洋に突き出た広大なスレート状の畳敷き岩盤が広がる南紀白浜の一級地磯。黒潮の影響を強く受け、フカセ釣りでの大型グレ・チヌ、エギングでのモンスターアオリイカ、ショアジギングでの青物やヒラスズキが高実績。",
    accessInfo: "阪和自動車道「南紀白浜IC」より約15分。千畳敷駐車場より徒歩すぐ。",
    depthRange: "4m〜15m",
    bottomType: "平盤砂岩・スリット・海藻帯・ドロップオフ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（ただし足元スリットや波に注意）",
    },
    targetFish: ["メジナ (口太・尾長)", "クロダイ", "アオリイカ", "ハマチ・メジロ", "ヒラスズキ", "イシダイ", "アイゴ", "コロダイ"],
    bestSeasons: {
      spring: ["親アオリイカ（2〜3kg超）", "乗っ込みチヌ", "グレ"],
      summer: ["青物", "コロダイ", "イシダイ", "アイゴ"],
      autumn: ["アオリイカ（数釣り）", "ハマチ", "シオ", "グレ"],
      winter: ["寒グレ（40cm〜50cmクラス連発）", "ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ仕掛け (円錐ウキ0〜B + ハリス1.75〜2.5号)", "エギング (3.5〜4.0号)", "ショアジギング (40〜80g)"],
    localRules: [
      "観光客の立ち入りエリアでのキャスト禁止（先端の磯座を利用）",
      "スパイクブーツ・フローティングベスト完全着用",
      "南風や台風通過時のウネリには厳重警戒"
    ],
    parkingDetails: {
      capacity: "千畳敷公衆駐車場 約70台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "公衆トイレ・土産物店・飲食店隣接。"
    },
    tips: "先端付近のサラシや潮ヨレが絶好のポイント。春のエギングやヤエン釣りでは2kg〜3kgオーバーのモンスターアオリイカが頻繁にキャッチされます。"
  },
  {
    id: "shionomisaki-rock",
    name: "和歌山 南紀 串本 潮岬・出雲崎地磯",
    kana: "わかやま・なんき・くしもと・しおのみさき・いずもざきじいそ",
    region: "kansai",
    prefecture: "和歌山県",
    address: "和歌山県東牟婁郡串本町潮岬〜出雲",
    lat: 33.4332,
    lng: 135.7628,
    category: "rock",
    description: "本州最南端に位置し、黒潮本流が直接ぶつかる全国の磯釣り師の聖地。足元から流れる本流潮に仕掛けを乗せるフカセ釣りで50cm超の尾長グレ・口太グレ、カゴ釣りやルアーでのヒラマサ・カンパチ・GT・大型アオリイカが狙える最高峰フィールド。",
    accessInfo: "紀勢自動車道「すさみ南IC」より国道42号経由で約40分。潮岬観光タワー駐車場または出雲地区駐車スペース利用。",
    depthRange: "6m〜25m (本流激流ポイント)",
    bottomType: "黒色大岩礁・急深ドロップオフ・激流本流",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（大型クエ・タマン・シブダイ狙い）",
    },
    targetFish: ["尾長メジナ", "口太メジナ", "ヒラマサ", "カンパチ", "イシダイ", "アオリイカ", "クエ", "タマン", "ヒラスズキ"],
    bestSeasons: {
      spring: ["モンスター尾長グレ", "親アオリイカ", "ヒラマサ"],
      summer: ["シブダイ（夜釣り）", "タマン", "カンパチ", "クエ"],
      autumn: ["青物（ヒラマサ・カンパチ）", "アオリイカ", "イシダイ"],
      winter: ["寒グレ（全国屈指のメジナ爆釣期）", "ヒラスズキ"]
    },
    recommendedRigs: ["本流フカセ仕掛け (磯竿2〜3号 + 大型ウキ + ハリス3〜6号)", "ショアプラッギング / ジギング (80〜120g)", "底物イシダイ・クエ仕掛け"],
    localRules: [
      "救命胴衣（磯用フローティングベスト）・スパイクブーツ完全着用",
      "黒潮の急激な潮流変化や三角波に常に注意",
      "ゴミの完全持ち帰り"
    ],
    parkingDetails: {
      capacity: "潮岬望楼の芝駐車場 約200台 / 潮岬灯台駐車場",
      fee: "無料（灯台駐車場は一部有料の場合あり）",
      hours: "24時間利用可能",
      notes: "トイレ・自販機あり。地磯へのアプローチは滑りやすい岩場を歩くため注意。"
    },
    tips: "黒潮がガンガン流れる本流筋へ仕掛けを流し込み、スプールからラインをバチバチッと弾き出す豪快な「本流流し釣り」が魅力。夏の夜釣りでは幻の高級魚シブダイも狙えます。"
  },

  // --- 中国エリア ---
  {
    id: "tottori-hakuto-surf",
    name: "鳥取 日本海 白兎海岸・鳥取砂丘前サーフ",
    kana: "とっとり・にほんかい・はくとかいがん・とっとりさきゅうまえさーふ",
    region: "chugoku",
    prefecture: "鳥取県",
    address: "鳥取県鳥取市白兎〜福部町湯山",
    lat: 35.5412,
    lng: 134.1245,
    category: "surf",
    description: "因幡の白兎伝説で有名な美しい白砂青松が続く日本海の広大サーフ。山陰ジオパークの雄大な景観の中、ヒラメ・マゴチのフラットフィッシュゲームや、秋のサゴシ・青物、シロギスの数釣りが楽しめる名所。",
    accessInfo: "鳥取自動車道「鳥取IC」より国道9号経由で約15分。道の駅神話の里白うさぎ、または鳥取砂丘市営駐車場すぐ。",
    depthRange: "1.5m〜6m",
    bottomType: "遠浅砂底・沖合沈み根・サンドバー",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りのシーバス・ヒラメ・シロギス)",
    },
    targetFish: ["ヒラメ", "マゴチ", "シーバス", "サワラ（サゴシ）", "シロギス", "クロダイ", "ハマチ"],
    bestSeasons: {
      spring: ["乗っ込みシロギス", "ヒラメ", "サゴシ", "シーバス"],
      summer: ["マゴチ", "シロギス（数釣り）", "スズキ"],
      autumn: ["座布団ヒラメ", "サゴシ・ハマチ", "落ちギス"],
      winter: ["寒ヒラメ", "ハタハタ", "シーバス"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (28〜40g)", "メタルジグ (30〜40g)", "ジグヘッド+シャッドテールワーム (4inch)", "投げ釣り仕掛け"],
    localRules: [
      "観光客・海水浴客の多いエリアでのキャスト禁止",
      "ウェーダー・ライフジャケット着用",
      "鳥取砂丘の天然記念物指定区域のルール厳守"
    ],
    parkingDetails: {
      capacity: "道の駅 神話の里 白うさぎ駐車場 約130台 / 鳥取砂丘市営駐車場",
      fee: "無料（砂丘一部有料期間あり）",
      hours: "24時間利用可能",
      notes: "道の駅に24時間トイレ・物産館・飲食店あり。"
    },
    tips: "沖に見える「白兎島」周辺の水道や、海岸の払い出し（離岸流）にベイトが密集。朝マズメにミノーやシンペンを通すと大型ヒラメが炸裂します。"
  },
  {
    id: "hinomisaki-rock",
    name: "島根 山陰 出雲 日御碕・鵜峠地磯",
    kana: "しまね・さんいん・いずも・ひのみさき・うどじいそ",
    region: "chugoku",
    prefecture: "島根県",
    address: "島根県出雲市大社町日御碕〜鵜峠",
    lat: 35.4338,
    lng: 132.6289,
    category: "rock",
    description: "出雲大社の西方、日本海の荒波が削り出した柱状節理と奇岩が広がる山陰最強のショアジギング・フカセの聖地。東洋一の白亜の灯台「日御碕灯台」の下で、ヒラマサ・大型ブリ・クエ・キジハタ・アオリイカが狙える屈指の名磯。",
    accessInfo: "山陰自動車道「出雲IC」より国道431号・県道29号経由で約30分。日御碕灯台駐車場より磯へエントリー。",
    depthRange: "6m〜22m (急深岩礁帯)",
    bottomType: "流紋岩柱状節理・深いスリット・沈み根",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（クエ・キジハタ・ヤリイカ狙い）",
    },
    targetFish: ["ヒラマサ", "ブリ", "キジハタ（アコウ）", "クエ", "アオリイカ", "尾長メジナ", "クロダイ", "ヒラスズキ"],
    bestSeasons: {
      spring: ["ヒラマサ（春マサ）", "親アオリイカ", "クロダイ", "ヤリイカ"],
      summer: ["キジハタ (40〜50cm級)", "ヒラマサ", "クエ"],
      autumn: ["ヒラマサ（秋の数釣り）", "ブリ", "アオリイカ", "キジハタ"],
      winter: ["寒グレ", "ヒラスズキ", "ヤリイカ"]
    },
    recommendedRigs: ["ショアプラッギング (ダイビングペンシル 160〜190mm)", "ショアジギング (60〜100g)", "テキサスリグ / クエぶっこみ仕掛け"],
    localRules: [
      "スパイクブーツ・磯用ライフジャケット・ヘルメット完全着用必須",
      "断崖からの落石および日本海の高波に厳重注意",
      "観光遊歩道の柵を越える際は安全なルートを確認すること"
    ],
    parkingDetails: {
      capacity: "出雲日御碕灯台無料駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・飲食店・商店あり。駐車場から磯場までは遊歩道経由で徒歩10〜15分。"
    },
    tips: "山陰カゴ釣りやトップウォータープラグでヒラマサを狙うアングラーが全国から集結。潮が激しく動くタイミングで海面が炸裂します。"
  },

  // --- 四国エリア ---
  {
    id: "tosawan-niyodo-surf",
    name: "高知 土佐湾 仁淀川河口サーフ・新居海岸",
    kana: "こうち・とさわん・によどがわかこうさーふ・にいかいがん",
    region: "shikoku",
    prefecture: "高知県",
    address: "高知県土佐市新居〜高知市春野町",
    lat: 33.4862,
    lng: 133.5187,
    category: "surf",
    description: "「奇跡の清流」仁淀川が太平洋に注ぐ広大なサーフ・河口ポイント。日本三大怪魚「アカメ」の超有名ポイントであると同時に、メーター級オオニベ・ヒラメ・ランカーシーバス・青物が狙える四国最高峰の怪魚・サーフフィールド。",
    accessInfo: "高知自動車道「土佐IC」より車で約15分。新居緑地公園駐車場利用。",
    depthRange: "2m〜8m",
    bottomType: "砂泥・砂利・サンドバー・激流河口カケアガリ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜のアカメ・オオニベ・シーバス・ヒラメ)",
    },
    targetFish: ["アカメ", "ヒラメ", "オオニベ", "シーバス", "ブリ", "マゴチ", "カンパチ（ネイリ）"],
    bestSeasons: {
      spring: ["シーバス", "ヒラメ", "マゴチ"],
      summer: ["アカメ（最盛期）", "オオニベ", "カンパチ（ネイリ）"],
      autumn: ["アカメ", "座布団ヒラメ", "ブリ", "ランカーシーバス"],
      winter: ["オオニベ", "寒ヒラメ", "シーバス"]
    },
    recommendedRigs: ["アカメ用ヘビータックル (ビッグベイト / ヘビーミノー 140〜178mm)", "サーフ用メタルジグ / シンペン", "泳がせ仕掛け (活きボラ/コノシロ)"],
    localRules: [
      "アカメ釣獲時は希少種保護のため手早く撮影し完全リリースを徹底すること",
      "仁淀川の急流と土佐湾の急な高波（土佐の三角波）に厳重注意",
      "ウェーダー・ライフジャケット着用必須"
    ],
    parkingDetails: {
      capacity: "新居緑地公園駐車場 約100台 / 仁淀川河口大橋下駐車スペース",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "新居緑地公園にトイレ・自販機・観光交流施設あり。"
    },
    tips: "大潮の下げ潮時に仁淀川から吐き出されるベイトの群れを待ち伏せるアカメやオオニベがターゲット。強靭なリーダー（60〜100lb）とフックセッティングが不可欠です。"
  },
  {
    id: "ashizuri-usubae-rock",
    name: "高知 足摺岬 臼碆（うすばえ）地磯",
    kana: "こうち・あしずりみさき・うすばえじいそ",
    region: "shikoku",
    prefecture: "高知県",
    address: "高知県土佐清水市足摺岬臼碆",
    lat: 32.7235,
    lng: 132.9698,
    category: "rock",
    description: "「日本で最も黒潮が陸地に接近する場所」として名高い足摺岬の一級地磯。激流の黒潮本流が岸壁に直接激突するため、ショアから巨大カンパチ・ヒラマサ・GT・60cm超の尾長グレ・イシダイ・ヒラスズキが狙える四国最強のモンスターポイント。",
    accessInfo: "高知市内より高知自動車道経由で約2時間40分。臼碆竜宮神社参道口駐車場より徒歩約15分。",
    depthRange: "8m〜30m (黒潮直撃・激流ドロップオフ)",
    bottomType: "花崗岩大断崖・激流海溝・スリット",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（ただし断崖のため単独釣行厳禁）",
    },
    targetFish: ["カンパチ", "ヒラマサ", "尾長メジナ", "イシダイ", "ヒラスズキ", "GT（ロウニンアジ）", "キハダマグロ", "タマン"],
    bestSeasons: {
      spring: ["巨グレ (60cmオーバー)", "ヒラマサ", "ヒラスズキ"],
      summer: ["大型カンパチ", "GT", "タマン", "イサキ"],
      autumn: ["カンパチ", "ヒラマサ", "アオリイカ", "キハダ"],
      winter: ["寒グレ（全国最高峰の尾長）", "ヒラスズキ"]
    },
    recommendedRigs: ["超ヘビーショアジギング / プラッギング (PE4〜6号 + 100〜150gジグ)", "尾長本流フカセ (磯竿2.5〜3号 + ハリス4〜8号)", "イシダイワイヤー仕掛け"],
    localRules: [
      "完全装備（スパイク・固型ベスト・ヘルメット・ロープ）着用必須",
      "台風・ウネリ発生時は波高が急激に跳ね上がるため入磯絶対禁止",
      "足場が非常に高いため荷物は背負子でまとめ、体力に余裕を持つこと"
    ],
    parkingDetails: {
      capacity: "臼碆駐車場（竜宮神社前） 約15台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "駐車場から自然歩道・階段を下りて磯へ出ます（帰りは急坂のため体力が必要）。"
    },
    tips: "黒潮の青い激流が目の前を川のように流れます。本流のヨレへ150mm超のペンシルを投入すると水柱を上げて10kg超の青物がアタックしてきます。"
  },
  {
    id: "yura-peninsula-rock",
    name: "愛媛 宇和海 由良半島地磯・須下",
    kana: "えひめ・うわかい・ゆらはんとうじいそ・すげ",
    region: "shikoku",
    prefecture: "愛媛県",
    address: "愛媛県南宇和郡愛南町由良半島須下",
    lat: 32.9982,
    lng: 132.4124,
    category: "rock",
    description: "豊後水道・宇和海に細長く突き出た由良半島。リアス海岸の深い水深と黒潮の恩恵により「60cmの尾長グレが釣れる地磯」として四国・関西のグレ師の憧れの的。オオモンハタ・マダイ・大型アオリイカの実績も抜群。",
    accessInfo: "松山自動車道「津島岩松IC」より国道56号経由で約50分。由良半島先端方面の駐車帯よりエントリー。",
    depthRange: "6m〜25m",
    bottomType: "石灰岩・スレート岩盤・深いカケアガリ・海藻帯",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りのイサキ・マダイ・大型アオリイカ)",
    },
    targetFish: ["尾長メジナ", "口太メジナ", "オオモンハタ", "マダイ", "イサキ", "アオリイカ", "ブリ", "カンパチ"],
    bestSeasons: {
      spring: ["巨グレ（ロクマル挑戦）", "親アオリイカ (3kg超)", "マダイ"],
      summer: ["オオモンハタ", "イサキ", "アカハタ", "ネイリ"],
      autumn: ["アオリイカ（数・型）", "オオモンハタ", "青物"],
      winter: ["寒グレ（日本屈指の超特大尾長）", "マダイ"]
    },
    recommendedRigs: ["ウキフカセ仕掛け (磯竿2号 + ハリス2.5〜4号)", "ロックフィッシュ用ジグヘッドスイミング (30g)", "エギング (3.5〜4.0号)"],
    localRules: [
      "スパイクシューズ・フローティングベスト完全着用",
      "磯への山道トレッキング時は滑落・マムシ等に注意",
      "コマセの汚れは釣行後に海水で綺麗に洗い流すこと"
    ],
    parkingDetails: {
      capacity: "須下港周辺・半島道路脇駐車スペース 約15台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "地磯歩きは20〜30分程度かかります。"
    },
    tips: "夕マズメから半夜にかけて潮が緩むタイミングがモンスター尾長グレの捕食タイム。中層スイミングでは50cmクラスのオオモンハタが頻発します。"
  },

  // --- 九州エリア ---
  {
    id: "hyuganada-surf",
    name: "宮崎 日向灘 一ツ葉海岸・日向サンパーク下サーフ",
    kana: "みやざき・ひゅうがなだ・ひとつばかいがん・ひゅうがさんぱーくしたさーふ",
    region: "kyushu",
    prefecture: "宮崎県",
    address: "宮崎県宮崎市新別府町〜日向市幸脇",
    lat: 31.9325,
    lng: 131.4642,
    category: "surf",
    description: "黒潮が洗う広大な日向灘サーフ。全国の怪魚・サーフアングラーの聖地として知られ、冬のオオニベ（150cm・30kg超）をはじめ、座布団ヒラメ・ランカーシーバス・ブリ・シロギスが狙える九州屈指の大海原サーフ。",
    accessInfo: "宮崎自動車道「宮崎IC」より一ツ葉有料道路経由で約10分。みやざき臨海公園またはサンマリーナ駐車場利用。",
    depthRange: "2m〜6m",
    bottomType: "広大砂底・サンドバー・強い離岸流",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (冬期の夜釣りオオニベ狙いが全国的に有名)",
    },
    targetFish: ["オオニベ (1m〜1.5m)", "ヒラメ", "シーバス", "ブリ", "マゴチ", "シロギス", "タチウオ"],
    bestSeasons: {
      spring: ["ヒラメ", "マゴチ", "シロギス", "シーバス"],
      summer: ["マゴチ", "シロギス（数釣り）", "ショゴ"],
      autumn: ["ヒラメ", "ブリ", "シーバス", "オオニベ"],
      winter: ["オオニベ（全国からアングラー集結）", "寒ヒラメ", "ランカーシーバス"]
    },
    recommendedRigs: ["オオニベ専用タックル (ヘビーミノー 140〜175mm / メタルジグ 40〜60g)", "サーフ用シンキングペンシル", "投げ釣り仕掛け"],
    localRules: [
      "日向灘の急な高波（ウネリ）と強烈な離岸流に厳重注意",
      "ウェーダー・ライフジャケット着用必須",
      "夜間の単独釣行時は安全確保（ヘッドライト・携帯電話防水携行）"
    ],
    parkingDetails: {
      capacity: "みやざき臨海公園駐車場 約300台 / 一ツ葉海岸各所パーキング",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・足洗い場完備。"
    },
    tips: "冬期（12〜2月）にコノシロやグチの群れが接岸するとオオニベのチャンス。メタルジグやヘビーシンペンを遠投してボトム付近をゆっくり引くのが基本パターン。"
  },
  {
    id: "fukiagehama-surf",
    name: "鹿児島 薩摩 吹上浜サーフ",
    kana: "かごしま・さつま・ふきあげはまさーふ",
    region: "kyushu",
    prefecture: "鹿児島県",
    address: "鹿児島県日置市日吉町〜南さつま市加世田",
    lat: 31.5721,
    lng: 130.3215,
    category: "surf",
    description: "日本三大砂丘の一つに数えられ、東シナ海に面して長さ約47kmに及ぶ日本最長の超広大白砂青松サーフ。遠浅ながら潮通しが抜群で、ヒラメ・マゴチ・シロギス・スズキ・ブリ・コロダイが狙える大人気フィールド。",
    accessInfo: "南九州西回り自動車道「美山IC」または「吹上IC」より車で約15分。吹上浜海浜公園等に駐車スペース多数。",
    depthRange: "1m〜5m",
    bottomType: "広大砂底・遠浅・サンドバー・浅瀬スリット",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りのコロダイ・スズキ・ヒラメ)",
    },
    targetFish: ["ヒラメ", "マゴチ", "シロギス", "シーバス", "ブリ", "コロダイ", "ヘダイ"],
    bestSeasons: {
      spring: ["シロギス", "ヒラメ", "マゴチ", "シーバス"],
      summer: ["シロギス（束釣り可能）", "マゴチ", "コロダイ"],
      autumn: ["座布団ヒラメ", "ブリ", "落ちギス", "ヘダイ"],
      winter: ["寒ヒラメ", "シーバス"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30〜40g)", "メタルジグ (30〜40g)", "ワーム+ジグヘッド (21〜28g)", "シロギス投げ仕掛け (4〜7本針)"],
    localRules: [
      "砂丘内への一般車両乗り入れ禁止",
      "ライフジャケット・ウェーダー着用",
      "ウミガメ上陸記念保護区域の看板ルールに従うこと"
    ],
    parkingDetails: {
      capacity: "吹上浜海浜公園駐車場 約400台 / 各海岸口に無料駐車スペース多数",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "海浜公園に大型トイレ・シャワー・キャンプ場完備。"
    },
    tips: "砂浜が果てしなく続くため、河口周辺やサンドバー（白波の崩れる場所）の切れ目を見極めてランガンするのが釣果の秘訣です。"
  },
  {
    id: "ikitsuki-obae-rock",
    name: "長崎 平戸 生月島 大バエ・塩俵断崖地磯",
    kana: "ながさき・ひらど・いきつきじま・おおばえ・しおだわらじいそ",
    region: "kyushu",
    prefecture: "長崎県",
    address: "長崎県平戸市生月町御崎",
    lat: 33.3985,
    lng: 129.4312,
    category: "rock",
    description: "東シナ海と対馬海峡の潮流がぶつかり合う日本屈指のショア青物・ヒラスズキの聖地。大バエ灯台下の断崖絶壁からフルキャストするショアジギング・プラッギングで、10kg超のヒラマサ・ブリ・大型クエ（アラ）・ヒラスズキが狙える全国のショアアングラー憧憬の地。",
    accessInfo: "西九州自動車道「佐々IC」より国道204号・生月大橋経由で約1時間。大バエ灯台駐車場より磯へエントリー。",
    depthRange: "10m〜30m (超深海・激流地磯)",
    bottomType: "玄武岩柱状節理・深いドロップオフ・激流海溝",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（クエ・アラ狙いのアングラー多数）",
    },
    targetFish: ["ヒラマサ", "ブリ", "ヒラスズキ", "クエ（アラ）", "アオリイカ（ミズイカ）", "尾長メジナ", "カンパチ"],
    bestSeasons: {
      spring: ["春マサ（10kg超）", "親アオリイカ", "ヒラスズキ"],
      summer: ["クエ（アラ）", "カンパチ", "シイラ"],
      autumn: ["秋マサ", "ブリ", "アオリイカ", "ヒラスズキ"],
      winter: ["寒ヒラマサ", "大型寒グレ", "ヒラスズキ"]
    },
    recommendedRigs: ["ヘビーショアプラッギング (PE4〜6号 + 160〜220mm ダイビングペンシル)", "ショアジギング (80〜120g)", "アラ（クエ）専用板バネ仕掛け"],
    localRules: [
      "断崖のためスパイクシューズ・固型ベスト・ヘルメット完全着用",
      "高波や突風時は足場まで波が駆け上がるため無理な入磯厳禁",
      "荷物は背負子でまとめ、ロープ昇降箇所では足元に注意"
    ],
    parkingDetails: {
      capacity: "大バエ灯台駐車場 約30台 / 塩俵断崖駐車場 約20台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。駐車場から磯場までは遊歩道・岩場を下り徒歩10〜15分。"
    },
    tips: "潮が激流のように流れる時間帯にダイビングペンシルを潮目にダイブさせると、ヒラマサが背ビレを出して猛然とアタックしてきます。"
  },
  {
    id: "satamisaki-rock",
    name: "鹿児島 大隅 佐多岬地磯",
    kana: "かごしま・おおすみ・さたみさきじいそ",
    region: "kyushu",
    prefecture: "鹿児島県",
    address: "鹿児島県肝属郡南大隅町佐多岬",
    lat: 30.9938,
    lng: 130.6582,
    category: "rock",
    description: "本土最南端の岬。太平洋・東シナ海・錦江湾が交わる激流海域で、黒潮が直撃する日本屈指の超巨大魚スポット。ショアからのGT（ロウニンアジ）・大型カンパチ・ヒラスズキ・イシダイ・クエが狙える大隅半島最高峰の荒磯。",
    accessInfo: "大隅縦貫道経由で南大隅町へ。佐多岬展望台駐車場より徒歩で地磯へアプローチ。",
    depthRange: "10m〜35m",
    bottomType: "花崗岩大岩礁・深い海溝・急深ドロップオフ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（ただし断崖絶壁のため単独釣行厳禁）",
    },
    targetFish: ["GT（ロウニンアジ）", "カンパチ", "ヒラスズキ", "イシダイ", "クエ", "タマン", "シブダイ", "尾長メジナ"],
    bestSeasons: {
      spring: ["ヒラスズキ", "イシダイ", "尾長グレ"],
      summer: ["GT（ロウニンアジ）", "カンパチ", "シブダイ", "タマン"],
      autumn: ["大型カンパチ", "GT", "アオリイカ", "クエ"],
      winter: ["寒グレ", "ヒラスズキ", "イシダイ"]
    },
    recommendedRigs: ["超ヘビータックル (PE6〜8号 + 大型ポッパー/ペンシル 180〜230mm)", "ショアジギング (100〜150g)", "クエ・イシダイ底物仕掛け"],
    localRules: [
      "完全磯安全装備（スパイク・固型ベスト・ヘルメット）着用必須",
      "佐多岬展望公園内の観光路を外れる際は安全に細心の注意を払うこと",
      "急な天候悪化・ウネリの立ち上がりに厳重警戒"
    ],
    parkingDetails: {
      capacity: "佐多岬展望公園駐車場 約100台",
      fee: "無料",
      hours: "8:00〜日没（ゲートあり、時間外は手前駐車場利用）",
      notes: "大型展望観光案内所・トイレ・自販機あり。"
    },
    tips: "黒潮の激流に潜む20kg〜30kg超のGTやカンパチがターゲット。ヒットした瞬間に強引にリフトできるヘビータックルが必須です。"
  },

  // --- 沖縄エリア ---
  {
    id: "miyakojima-surf",
    name: "沖縄 宮古島 与那覇前浜〜東平安名崎リーフサーフ",
    kana: "おきなわ・みやこじま・よなはまえはま・ひがしへんなざきりーふさーふ",
    region: "okinawa",
    prefecture: "沖縄県",
    address: "沖縄県宮古島市下地与那覇〜城辺保良",
    lat: 24.7335,
    lng: 125.2638,
    category: "surf",
    description: "「東洋一の美しさ」と称される宮古島の真っ白なパウダーサンドサーフとインリーフ・アウトリーフの広大なポイント。タマン（ハマフエフキ）・ガーラ（GT）・クチナジ・ミーバイが浅瀬に差し込む南国ならではのサーフフィッシング。",
    accessInfo: "宮古空港より車で約15〜25分。与那覇前浜ビーチまたは東平安名崎公園駐車場すぐ。",
    depthRange: "1m〜5m (リーフエッジは15m以上)",
    bottomType: "純白サンゴ砂・インリーフ浅瀬・サンゴ礁",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜間のタマンぶっこみ釣りが大人気)",
    },
    targetFish: ["タマン (ハマフエフキ)", "ガーラ (GT / オニヒラアジ)", "クチナジ", "ミーバイ", "アオリイカ (クブシミ・アオリ)", "ダツ"],
    bestSeasons: {
      spring: ["タマン（乗っ込み）", "ガーラ", "アオリイカ"],
      summer: ["タマン（夜釣り最盛期）", "ガーラ", "ミーバイ"],
      autumn: ["ガーラ", "タマン", "クチナジ", "アオリイカ"],
      winter: ["アオリイカ（クブシミ）", "ミーバイ", "チヌ（ミナミクロダイ）"]
    },
    recommendedRigs: ["沖縄タマンぶっこみ仕掛け (タマン竿+大型スピニング+PE5〜8号+イカ短/魚切り身)", "ライトソルトルアー (小型シンペン/トップ)", "エギング (3.5〜4.0号)"],
    localRules: [
      "海水浴エリア・マリンアクティビティエリアでの釣り禁止",
      "リーフ内への立ち込み時はマリンシューズまたはフェルトスパイク・ライフジャケット着用（オニオコゼ・ガンガゼ・毒ヘビ注意）",
      "サンゴ礁を傷つけないマナー厳守"
    ],
    parkingDetails: {
      capacity: "与那覇前浜駐車場 約100台 / 東平安名崎駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型公衆トイレ・シャワー施設完備。"
    },
    tips: "夜間の満潮前後にタマンがエサを求めて波打ち際の浅瀬まで接岸。ぶっこみ仕掛けを投入して竿先に鈴やケミホタルを付けて待つと、竿ごと海に引きずり込まれる激震が走ります。"
  },
  {
    id: "zanpamisaki-rock",
    name: "沖縄 本島 読谷 残波岬地磯",
    kana: "おきなわ・ほんとう・よみたん・ざんぱみさきじいそ",
    region: "okinawa",
    prefecture: "沖縄県",
    address: "沖縄県中頭郡読谷村宇座",
    lat: 26.4421,
    lng: 127.7125,
    category: "rock",
    description: "高さ約30mの断崖絶壁が約2kmにわたって続く沖縄本島屈指の荒磯ポイント。東シナ海の大海原が広がり、ショアからのGT（ロウニンアジ・ジャイアントトレバリー）・イソマグロ・大型タマン・アカジンミーバイが狙える沖縄屈指のモンスターフィールド。",
    accessInfo: "那覇空港より国道58号経由で約1時間10分。残波岬公園駐車場より徒歩で磯へエントリー。",
    depthRange: "8m〜30m (隆起サンゴ礁断崖・外洋深海)",
    bottomType: "隆起サンゴ礁断崖（琉球石灰岩）・鋭利なリーフエッジ・海溝",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（大物狙いアングラー多数・足元に注意）",
    },
    targetFish: ["ガーラ (GT / ロウニンアジ)", "タマン", "イソマグロ", "アカジンミーバイ (スジアラ)", "カツオ", "シイラ", "クブシミ"],
    bestSeasons: {
      spring: ["タマン", "ガーラ", "クブシミ"],
      summer: ["GT（ロウニンアジ）", "イソマグロ", "カツオ", "シイラ"],
      autumn: ["ガーラ", "タマン", "アカジンミーバイ"],
      winter: ["アカジン", "ミーバイ", "クブシミ"]
    },
    recommendedRigs: ["GT専用ショアキャスティングタックル (PE6〜8号 + 大型ポッパー/ダイペン 180〜230mm)", "タマン・ガーラぶっこみ仕掛け", "ヘビーショアジギング (80〜150g)"],
    localRules: [
      "琉球石灰岩（リーフ）は刃物のように鋭利なため、厚底スパイクシューズ・グローブ・ライフジャケット完全着用必須",
      "断崖からの落水防止（立ち位置に十分注意）",
      "台風接近時・高波時は絶対に近寄らないこと"
    ],
    parkingDetails: {
      capacity: "残波岬公園無料駐車場 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・自販機・レストラン併設。"
    },
    tips: "岬先端の激流ポイントへ大型ポッパーをキャストし、強烈なポップ音でGTを誘い出します。夜釣りでは活き魚やイカをエサにしたぶっこみ釣りで大型タマンやガーラが狙えます。"
  }
];
