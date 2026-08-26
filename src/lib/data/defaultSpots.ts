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
    lat: 35.616,
    lng: 139.8324,
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
    lat: 35.4304,
    lng: 139.6865,
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
    lat: 35.4522,
    lng: 139.6914,
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
    lat: 36.3065,
    lng: 140.5718,
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
    lat: 35.6322,
    lng: 139.9215,
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
    lng: 140.0462,
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
    lat: 35.5424,
    lng: 140.0604,
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
    lat: 34.9925,
    lng: 139.8545,
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
    lat: 35.1052,
    lng: 140.1085,
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
    lat: 34.7512,
    lng: 139.3524,
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
    lat: 34.6062,
    lng: 135.3985,
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
    lat: 34.6782,
    lng: 135.2045,
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
    lat: 34.1538,
    lng: 135.1745,
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
    lat: 35.5682,
    lng: 135.2485,
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
    lat: 35.0815,
    lng: 138.8545,
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
    lat: 34.9485,
    lng: 136.8285,
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
    lat: 32.7215,
    lng: 129.8385,
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
    lat: 31.5785,
    lng: 131.4145,
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
    lat: 43.2045,
    lng: 141.0115,
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
    lat: 39.7545,
    lng: 140.0615,
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
    lat: 34.3485,
    lng: 132.4615,
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
    lat: 35.5515,
    lng: 133.2545,
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
    lat: 34.3852,
    lng: 131.2045,
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
    lat: 33.928,
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
    lat: 34.3545,
    lng: 134.0485,
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
    lat: 34.1985,
    lng: 134.6185,
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
    lat: 33.8645,
    lng: 132.7085,
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
    lat: 33.1585,
    lng: 132.4385,
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
    lat: 33.5045,
    lng: 133.5785,
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
    lat: 37.1852,
    lng: 138.2585,
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
  },
  {
    id: "aomori-tappi-rock",
    name: "青森 津軽半島 竜飛崎・帯島地磯",
    kana: "あおもり・つがるはんとう・たっぴざき・おびしまじいそ",
    region: "tohoku",
    prefecture: "青森県",
    address: "青森県東津軽郡外ヶ浜町三厩龍浜",
    lat: 41.2583,
    lng: 140.3444,
    category: "rock",
    description: "本州最北端・津軽海峡の激流が洗う超一級地磯。帯島周辺は足場が良く、春〜初夏のマダイ・クロダイ、秋のショア青物（ブリ・ヒラマサ）、冬のヤリイカ・ホッケで名高い聖地。",
    accessInfo: "東北自動車道「青森IC」より国道280号経由で約1時間40分。竜飛岬観光駐車場または帯島漁港駐車帯すぐ。",
    depthRange: "6m〜25m (激流海峡)",
    bottomType: "荒根・岩盤・スリット・海溝",
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
      nightFishingText: "夜釣り可能（ただし突風・高波に厳重注意）",
      
    },
    targetFish: ["マダイ","クロダイ","ブリ","ヒラマサ","ヤリイカ","ホッケ","メバル","アイナメ"],
    bestSeasons: {
      spring: ["乗っ込みマダイ","クロダイ","ヤリイカ","ホッケ"],
      summer: ["ショアブリ","ヒラマサ","マダイ","キジハタ"],
      autumn: ["青物","アオリイカ","マダイ","クロダイ"],
      winter: ["ヤリイカ","ホッケ","ドンコ","寒マダイ"]
    },
    recommendedRigs: ["ショアジギング (60〜100g)","ウキフカセ / カゴ釣り","ヤリイカテーラー仕掛け"],
    localRules: ["スパイクブーツ・磯用ライフジャケット着用必須","津軽海峡特有の強風・高波に注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "帯島周辺に駐車可能。"
    },
    tips: "激流の本流と引かれ潮がぶつかる潮目を重めのメタルジグやカゴ釣りで直撃。マダイや青物が強烈にヒットします。"
  },
  {
    id: "aomori-hachinohe-port",
    name: "青森 八戸港 白銀埠頭・ポートアイランド",
    kana: "あおもり・はちのへこう・しろがねふとう",
    region: "tohoku",
    prefecture: "青森県",
    address: "青森県八戸市白銀町・築港街",
    lat: 40.5285,
    lng: 141.5348,
    category: "port",
    description: "太平洋に面した東北屈指の大規模重要港湾。潮通しが良く水深があり、アイナメ・クロソイ・ドンコ等のロックフィッシュから、サバ・マイワシ・サケ・ヒラメ・ヤリイカまで年中狙える人気釣り場。",
    accessInfo: "八戸自動車道「八戸IC」より車で約20分。JR八戸線「白銀駅」より徒歩約10分。",
    depthRange: "5m〜14m",
    bottomType: "砂泥・捨石・敷石・岸壁",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤリイカ・ソイ)",
      
    },
    targetFish: ["アイナメ","クロソイ","ドンコ","サバ","マイワシ","ヒラメ","イシガレイ","ヤリイカ","サケ"],
    bestSeasons: {
      spring: ["カレイ","アイナメ","ヤリイカ","ウミタナゴ"],
      summer: ["サバ","マイワシ","ヒラメ","アジ"],
      autumn: ["サケ（アキアジ）","アイナメ","サバ","クロソイ"],
      winter: ["ドンコ（エゾイソアイナメ）","クロソイ","ヤリイカ","チカ"]
    },
    recommendedRigs: ["テキサスリグ / ジグヘッド","サビキ釣り","投げ釣り仕掛け","夜釣り電気ウキ"],
    localRules: ["港湾作業船・荷役エリアへの立ち入り禁止","関係者車両の通行を妨げない駐車","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "岸壁周辺に駐車スペース多数",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "作業エリアを避けて駐車。"
    },
    tips: "足元の岸壁スリットや底の敷石をワームで探ると良型アイナメやクロソイが連発。秋〜冬の夜釣りは常夜灯下でヤリイカやドンコが狙い目。"
  },
  {
    id: "aomori-ajigasawa-surf",
    name: "青森 日本海 鰺ヶ沢・七里長浜サーフ",
    kana: "あおもり・にほんかい・あじがさわ・しちりながはまさーふ",
    region: "tohoku",
    prefecture: "青森県",
    address: "青森県西津軽郡鰺ヶ沢町舞戸町",
    lat: 40.7812,
    lng: 140.2185,
    category: "surf",
    description: "白神山地を源流とする岩木川・中村川が注ぎ込む広大な日本海サーフ。ベイトが極めて豊富で、座布団ヒラメ・マゴチ・ランカーシーバス・サクラマス・青物（イナダ/サゴシ）が狙える名サーフ。",
    accessInfo: "津軽自動車道「つがる柏IC」より国道101号経由で約25分。海の駅わんど等に駐車。",
    depthRange: "1.5m〜6m",
    bottomType: "砂底・サンドバー・河口カケアガリ",
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
      nightFishingText: "可能 (夜間のシーバス・ヒラメ狙い)",
      
    },
    targetFish: ["ヒラメ","マゴチ","シーバス","サクラマス","海アメマス","シロギス","サゴシ","イナダ"],
    bestSeasons: {
      spring: ["サクラマス","海アメマス","シーバス","シロギス"],
      summer: ["マゴチ","シロギス","ヒラメ"],
      autumn: ["座布団ヒラメ","ランカーシーバス","イナダ","サゴシ"],
      winter: ["寒ヒラメ","シーバス","ハタハタ"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30〜40g)","メタルジグ (30〜45g)","ジグヘッドワーム (21〜28g)"],
    localRules: ["ウェーダー・ライフジャケット着用必須","河口付近の流れの急変に注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "海の駅わんど・海岸沿い駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・物産館あり。"
    },
    tips: "河口からの濁りと澄み潮の境目（潮目）をシンペンで漂わせるとランカーシーバスやヒラメが炸裂。初夏のシロギス投げ釣りも手堅い。"
  },
  {
    id: "aomori-asari-port",
    name: "青森 浅虫 浅虫海づり公園・浅虫漁港",
    kana: "あおもり・あさむし・あさむしうみづりこうえん",
    region: "tohoku",
    prefecture: "青森県",
    address: "青森県青森市浅虫螢谷34",
    lat: 40.8935,
    lng: 140.8585,
    category: "park",
    description: "陸奥湾の穏やかな波と湯ノ島を望む浅虫温泉街の海づり公園。安全柵付きの釣り桟橋と漁港波止があり、マダイ・カレイ・アジ・メバル・ウミタナゴがファミリーから本格派まで楽しめる。",
    accessInfo: "青森市中心部より国道4号経由で約30分。青い森鉄道「浅虫温泉駅」より徒歩約7分。",
    depthRange: "4m〜9m",
    bottomType: "砂泥・敷石・海藻帯",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 520円 / 小人 260円（海づり公園桟橋利用時。外側漁港は無料）",
      isNightFishingAllowed: false,
      
      openingHours: "4月下旬〜11月上旬 9:00〜17:00",
    },
    targetFish: ["マダイ","マコガレイ","イシガレイ","アジ","メバル","クロダイ","ウミタナゴ","マイワシ"],
    bestSeasons: {
      spring: ["カレイ","マダイ","メバル","ウミタナゴ"],
      summer: ["アジ","マイワシ","小ダイ","クロダイ"],
      autumn: ["マダイ","アジ","カレイ","サバ"],
      winter: ["カレイ（漁港側）","メバル","ドンコ"]
    },
    recommendedRigs: ["サビキ釣り","チョイ投げ仕掛け","ウキフカセ釣り","胴突き仕掛け"],
    localRules: ["公園桟橋内での投げ釣り禁止（アンダースロー・足元推奨）","ライフジャケット着用","釣竿は1人2本まで"],
    parkingDetails: {
      capacity: "道の駅浅虫温泉・公園駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "温泉施設・足湯も隣接。"
    },
    tips: "陸奥湾名物のマダイが桟橋の足元でヒットすることも。オキアミを付けた胴突きやウキ釣り、サビキでアジ・イワシが鈴なりになります。"
  },
  {
    id: "miyagi-oshika-rock",
    name: "宮城 牡鹿半島 御番所公園下・寄磯地磯",
    kana: "みやぎ・おしかはんとう・ごばんしょこうえんした・よりいそじいそ",
    region: "tohoku",
    prefecture: "宮城県",
    address: "宮城県石巻市鮎川浜",
    lat: 38.2981,
    lng: 141.5074,
    category: "rock",
    description: "太平洋と仙台湾を分ける牡鹿半島の先端エリア。三陸屈指の磯釣りフィールドで、50cm超のベッコウゾイ（タケノコメバル）、モンスターアイナメ、青物、ヒラメが狙える超有名地磯。",
    accessInfo: "三陸沿岸道路「石巻港IC」より車で約1時間。御番所公園駐車場または寄磯漁港よりアプローチ。",
    depthRange: "5m〜18m",
    bottomType: "荒根・大岩礁・スリット・海藻帯",
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
      nightFishingText: "夜釣り可能（磯歩き時のヘッドライト・足元注意）",
      
    },
    targetFish: ["ベッコウゾイ","アイナメ","クロソイ","イナダ・ワラサ","ヒラメ","ドンコ"],
    bestSeasons: {
      spring: ["乗っ込みアイナメ","ベッコウゾイ","クロソイ"],
      summer: ["青物（イナダ/ショゴ）","ヒラメ","クロソイ"],
      autumn: ["黄金アイナメ","モンスターベッコウゾイ","青物"],
      winter: ["大型アイナメ","ドンコ","クロソイ"]
    },
    recommendedRigs: ["ロックフィッシュテキサス / フリーリグ (18〜28g)","ショアジギング (40〜60g)","スイミングジグヘッド"],
    localRules: ["スパイクブーツ・ライフジャケット着用必須","単独釣行を避け安全第一","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "御番所公園駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "海溝の壁面やスリットの奥にリグを落とし込みステイ。ベッコウゾイ特有の金属的なアタリをアワセて根から引き剥がします。"
  },
  {
    id: "miyagi-shichigahama-surf",
    name: "宮城 七ヶ浜 菖蒲田浜・小豆浜サーフ",
    kana: "みやぎ・しちがはま・しょうぶだはま・あずきはまさーふ",
    region: "tohoku",
    prefecture: "宮城県",
    address: "宮城県宮城郡七ヶ浜町菖蒲田浜",
    lat: 38.2934,
    lng: 141.0682,
    category: "surf",
    description: "仙台市街地から最も近い仙台湾の人気サーフ。遠浅の美しい砂浜で、初夏〜晩秋のヒラメ・マゴチ（フラットフィッシュ）や青物（イナダ）、シロギス、シーバスの実績が高い。",
    accessInfo: "仙台東部道路「仙台港IC」より車で約15分。JR仙石線「多賀城駅」より車で約15分。",
    depthRange: "1m〜4m",
    bottomType: "細砂・サンドバー・離岸流カケアガリ",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ)",
      
    },
    targetFish: ["ヒラメ","マゴチ","イナダ","シロギス","シーバス","イシモチ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","カレイ"],
      summer: ["マゴチ（照りゴチ）","シロギス","イシモチ"],
      autumn: ["座布団ヒラメ","イナダ","マゴチ","シーバス"],
      winter: ["寒ヒラメ","カレイ"]
    },
    recommendedRigs: ["ジグヘッドワーム (21〜28g)","メタルジグ (30〜40g)","サーフ用シンペン (30g)","チョイ投げ仕掛け"],
    localRules: ["海水浴期間中の遊泳エリア内釣り禁止","サーファーとの十分な距離確保","ライフジャケット着用"],
    parkingDetails: {
      capacity: "菖蒲田浜駐車場 約200台",
      fee: "無料（夏季海水浴場開設期のみ1日500円）",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "沖の波立ちが途切れている「離岸流（カレント）」を狙い、ジグヘッドワームをボトムバンプさせてマゴチやヒラメを誘い出します。"
  },
  {
    id: "akita-noshiro-port",
    name: "秋田 能代港 米代川河口・赤灯台堤防",
    kana: "あきた・のしろこう・よねしろがわかこう・あかとうだいていぼう",
    region: "tohoku",
    prefecture: "秋田県",
    address: "秋田県能代市大森山・下浜",
    lat: 40.2185,
    lng: 140.0145,
    category: "port",
    description: "名川・米代川の河口と能代港が隣接する東北屈指の汽水・大回遊ポイント。春のサクラマスやランカーシーバス、ヒラメ、青物（イナダ/サゴシ）、クロダイ、キスの超人気釣り場。",
    accessInfo: "秋田自動車道「能代南IC」より車で約15分。JR五能線「能代駅」より車で約10分。",
    depthRange: "3m〜12m",
    bottomType: "砂底・捨石・テトラ・河口砂州",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜シーバス)",
      
    },
    targetFish: ["シーバス","サクラマス","ヒラメ","クロダイ","イナダ","サゴシ","シロギス","アジ"],
    bestSeasons: {
      spring: ["サクラマス","シーバス","クロダイ","シロギス"],
      summer: ["アジ","シロギス","キジハタ","マゴチ"],
      autumn: ["ランカーシーバス","イナダ","サゴシ","ヒラメ"],
      winter: ["ハタハタ","寒ヒラメ","クロソイ"]
    },
    recommendedRigs: ["ミノー / シンペン (120〜140mm)","メタルジグ (30〜60g)","サビキ釣り","投げ釣り仕掛け"],
    localRules: ["立ち入り禁止区域（外洋テトラ帯）の遵守","救命胴衣着用","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "能代港湾緑地公園駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・緑地広場完備。"
    },
    tips: "米代川の豊富な淡水と日本海の海水が混ざり合う潮目をミノーで引くと、丸太のようなランカーシーバスが水面を割ってバイトします。"
  },
  {
    id: "akita-kisakata-rock",
    name: "秋田 にかほ 象潟港・鳥海山下地磯",
    kana: "あきた・にかほ・きさかたこう・ちょうかいさんしたじいそ",
    region: "tohoku",
    prefecture: "秋田県",
    address: "秋田県にかほ市象潟町冠石下",
    lat: 39.2084,
    lng: 139.9021,
    category: "rock",
    description: "鳥海山の伏流水が海底から湧き出る豊かな日本海沿岸。象潟港の白灯台堤防と周囲の溶岩地磯からなり、クロダイのウキフカセ釣り、アオリイカ、キジハタ、メジナ、ヒラメの好ポイント。",
    accessInfo: "日本海東北自動車道「象潟IC」より車で約5分。JR羽越本線「象潟駅」より徒歩約15分。",
    depthRange: "3m〜9m",
    bottomType: "溶岩岩礁・砂泥・沈みテトラ・藻場",
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
      nightFishingText: "可能 (夜釣りの電気ウキクロダイ・アオリイカ)",
      
    },
    targetFish: ["クロダイ","アオリイカ","キジハタ","メジナ","アジ","ヒラメ","シロギス"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","メジナ","シロギス"],
      summer: ["キジハタ","アジ","クロダイ","シロギス"],
      autumn: ["アオリイカ（数釣り）","良型クロダイ","キジハタ"],
      winter: ["ハタハタ","クロソイ","アイナメ"]
    },
    recommendedRigs: ["ウキフカセ釣り (円錐ウキ0〜3B)","エギング (3.0〜3.5号)","テキサスリグ (ロックフィッシュ)"],
    localRules: ["磯場でのスパイクシューズ・ライフジャケット着用","撒き餌で汚れた釣り座の海水洗い流し","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "象潟港内駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "道の駅象潟「ねむの丘」隣接。"
    },
    tips: "秋のアオリイカは地磯のスリットや港の澪筋で爆釣。ウキフカセのクロダイは鳥海山の湧水が適度な塩分濃度を作り周年楽しめます。"
  },
  {
    id: "akita-honjo-surf",
    name: "秋田 由利本荘 本荘マリーナ・子吉川河口サーフ",
    kana: "あきた・ゆりほんじょう・ほんじょうまりーな・こよしがわかこうさーふ",
    region: "tohoku",
    prefecture: "秋田県",
    address: "秋田県由利本荘市石脇田尻",
    lat: 39.3941,
    lng: 140.0214,
    category: "surf",
    description: "大河・子吉川の河口と本荘マリーナ海水浴場に広がる名サーフ。ベイトが溜まりやすく、ランカーシーバス、座布団ヒラメ、マゴチ、シロギスの数釣り、秋の青物回遊で賑わうポイント。",
    accessInfo: "日本海東北自動車道「本荘IC」より車で約10分。JR羽越本線「羽後本荘駅」より車で約10分。",
    depthRange: "1.5m〜5m",
    bottomType: "細砂・河口サンドバー・リップカレント",
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
      nightFishingText: "可能 (夜のリバーシーバス・ヒラメ狙い)",
      
    },
    targetFish: ["シーバス","ヒラメ","マゴチ","シロギス","サゴシ","イナダ"],
    bestSeasons: {
      spring: ["シーバス","シロギス","サクラマス"],
      summer: ["マゴチ","シロギス（束釣り）","ヒラメ"],
      autumn: ["落ちアユパターンシーバス","座布団ヒラメ","青物"],
      winter: ["ハタハタ","寒ヒラメ"]
    },
    recommendedRigs: ["フローティング / シンキングミノー (120〜140mm)","ジグヘッドワーム (21〜28g)","投げ釣り連掛け仕掛け"],
    localRules: ["ウェーディング時のエイガード・ライジャケ着用","河口急流部への深入り禁止","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "本荘マリーナ大駐車場 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・シャワー施設併設。"
    },
    tips: "秋の子吉川「落ちアユ」シーズンは全国からアングラーが集結。河口の払い出しに大型ミノーを流し込むとメーター級シーバスが炸裂。"
  },
  {
    id: "yamagata-tsuruoka-kamo-rock",
    name: "山形 庄内 鶴岡 加茂・荒崎地磯",
    kana: "やまがた・しょうない・つるおか・かも・あらさきじいそ",
    region: "tohoku",
    prefecture: "山形県",
    address: "山形県鶴岡市加茂",
    lat: 38.7562,
    lng: 139.7214,
    category: "rock",
    description: "加茂水族館の裏手に連なる日本海の荒磯。庄内を代表するクロダイウキフカセの聖地で、春の乗っ込みクロダイ、初夏のマダイ、秋のアオリイカ・キジハタ、青物が狙える一級磯。",
    accessInfo: "日本海東北自動車道「鶴岡西IC」より車で約15分。JR羽越本線「鶴岡駅」よりバス約30分。",
    depthRange: "4m〜14m",
    bottomType: "岩盤・スリット・沈み根・海藻帯",
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
      nightFishingText: "夜釣り可能（足元・波に十分注意）",
      
    },
    targetFish: ["クロダイ","マダイ","アオリイカ","キジハタ","メジナ","イナダ・ワラサ","アイナメ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","マダイ","メジナ"],
      summer: ["キジハタ","アジ","マダイ"],
      autumn: ["アオリイカ","良型クロダイ","イナダ"],
      winter: ["寒クロダイ","アイナメ","クロソイ"]
    },
    recommendedRigs: ["庄内竿ウキフカセ釣り (円錐ウキ/棒ウキ)","エギング (3.0〜3.5号)","ショアジギング (40〜60g)"],
    localRules: ["スパイクブーツ・フローティングベスト着用必須","コマセの洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "加茂緑地公園駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "潮が磯際をかすめて沖へ払い出す潮筋にウキを流し込み、沈み根周りでコマセと同調させると50cm超の庄内チヌが食い込みます。"
  },
  {
    id: "yamagata-kamo-port",
    name: "山形 鶴岡 加茂港 白灯台堤防・レインボービーチ",
    kana: "やまがた・つるおか・かもこう・はくとうだいていぼう",
    region: "tohoku",
    prefecture: "山形県",
    address: "山形県鶴岡市加茂港町",
    lat: 38.7585,
    lng: 139.7345,
    category: "port",
    description: "クラゲで有名な加茂水族館近くの天然良港。堤防先端部は潮通しが良く、アオリイカ、アジ、キジハタ、クロダイ、サゴシ、シロギスが狙える庄内屈指のファミリー＆ルアーポイント。",
    accessInfo: "日本海東北自動車道「鶴岡西IC」より車で約15分。",
    depthRange: "3m〜9m",
    bottomType: "砂泥・捨石・テトラ・基礎スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤリイカ)",
      
    },
    targetFish: ["アオリイカ","アジ","キジハタ","クロダイ","シロギス","サゴシ","カマス"],
    bestSeasons: {
      spring: ["クロダイ","シロギス","メバル"],
      summer: ["アジ","キジハタ","シロギス"],
      autumn: ["アオリイカ（数釣り）","サゴシ","アジ"],
      winter: ["ヤリイカ","クロソイ","ハタハタ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)","サビキ釣り","ジグ単アジング (0.8〜1.5g)","チョイ投げ仕掛け"],
    localRules: ["漁港作業エリアへの駐車禁止","スミ跡は海水で洗い流すこと","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "加茂港内駐車スペース 約60台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "秋のエギングシーズンは白灯台先端から沖向きへのキャストでアオリイカが連発。夜間は常夜灯下でアジングが楽しめます。"
  },
  {
    id: "yamagata-shonai-surf",
    name: "山形 庄内 湯野浜海岸・吹浦サーフ",
    kana: "やまがた・しょうない・ゆのはまかいがん・ふくらさーふ",
    region: "tohoku",
    prefecture: "山形県",
    address: "山形県鶴岡市湯野浜・飽海郡遊佐町吹浦",
    lat: 38.7942,
    lng: 139.7541,
    category: "surf",
    description: "鳥海山をバックに広がる庄内平野の雄大な日本海砂浜。遠浅の広大なサーフで、シロギスの束釣り（数釣り）、座布団ヒラメ、マゴチ、シーバス、サゴシのナブラ撃ちが楽しめる名サーフ。",
    accessInfo: "山形自動車道「庄内空港IC」より車で約10分。JR羽越本線「鶴岡駅」よりバス約35分。",
    depthRange: "1.5m〜5m",
    bottomType: "細砂・離岸流溝・沖合サンドバー",
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
      nightFishingText: "可能 (夜間のシーバス・ヒラメ狙い)",
      
    },
    targetFish: ["シロギス (束釣り)","ヒラメ","マゴチ","シーバス","サゴシ","イナダ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","サクラマス"],
      summer: ["シロギス（爆釣期）","マゴチ","ヒラメ"],
      autumn: ["座布団ヒラメ","サゴシ","イナダ","ランカーシーバス"],
      winter: ["寒ヒラメ","ハタハタ"]
    },
    recommendedRigs: ["投げ釣り多点針仕掛け (5〜7本針)","サーフ用シンペン (30〜40g)","メタルジグ (30〜40g)"],
    localRules: ["夏季海水浴場エリア内での釣り自粛","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "湯野浜海岸駐車場 約200台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "温泉街・公衆トイレ隣接。"
    },
    tips: "初夏〜秋のシロギスは波打ち際〜3色（75m）で鈴なりにヒット。朝マズメは沖のブレイクラインをメタルジグで探るとヒラメやサゴシが食い付きます。"
  },
  {
    id: "yamagata-nezugaseki-port",
    name: "山形 庄内 鼠ヶ関港・弁天島磯",
    kana: "やまがた・しょうない・ねずがせきこう・べんてんじまいそ",
    region: "tohoku",
    prefecture: "山形県",
    address: "山形県鶴岡市鼠ヶ関",
    lat: 38.5585,
    lng: 139.5485,
    category: "port",
    description: "山形県最南端に位置し新潟県境に近い名港。港に隣接する「弁天島」の磯場と長い防波堤からなり、クロダイ、アオリイカ、ヤリイカ、キジハタ、マダイ、メジナ、シロギスが狙える人気釣り場。",
    accessInfo: "日本海東北自動車道「あつみ温泉IC」より車で約15分。JR羽越本線「鼠ヶ関駅」より徒歩約10分。",
    depthRange: "3m〜11m",
    bottomType: "岩礁・砂泥・海藻帯・テトラ",
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
      nightFishingText: "可能 (常夜灯周りでのアジング・ヤリイカ)",
      
    },
    targetFish: ["クロダイ","アオリイカ","ヤリイカ","キジハタ","マダイ","アジ","シロギス"],
    bestSeasons: {
      spring: ["クロダイ","ヤリイカ","シロギス"],
      summer: ["キジハタ","アジ","クロダイ"],
      autumn: ["アオリイカ","クロダイ","イナダ"],
      winter: ["ヤリイカ","クロソイ","寒クロダイ"]
    },
    recommendedRigs: ["ウキフカセ釣り","エギング (3.0〜3.5号 / ヤリイカテーラー)","テキサスリグ"],
    localRules: ["弁天島遊歩道での歩行者優先","ゴミの持ち帰り","ライフジャケット着用"],
    parkingDetails: {
      capacity: "鼠ヶ関マリーナ・港内駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・弁天島遊歩道完備。"
    },
    tips: "弁天島の沖向き磯はウキフカセで大型クロダイやマダイの実績多数。秋〜冬のヤリイカは港内波止の電気ウキ釣りで数釣りが楽しめます。"
  },
  {
    id: "fukushima-soma-port",
    name: "福島 相馬 相馬港 相馬原釜海浜公園・3号码頭",
    kana: "ふくしま・そうま・そうまこう・はらがまかいひんこうえん",
    region: "tohoku",
    prefecture: "福島県",
    address: "福島県相馬市尾浜字船越",
    lat: 37.8285,
    lng: 140.9685,
    category: "port",
    description: "福島県北部を代表する大規模港湾。足場の良い相馬原釜地方卸売市場前や公園護岸から、アイナメ・ヒラメ・カレイ・アジ・サバ・イナダ・タチウオ・アナゴが狙える人気スポット。",
    accessInfo: "常磐自動車道「相馬IC」より車で約15分。JR常磐線「相馬駅」より車で約15分。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・捨石・岸壁スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・アナゴ)",
      
    },
    targetFish: ["アイナメ","ヒラメ","マコガレイ","イシガレイ","アジ","サバ","イナダ","アナゴ"],
    bestSeasons: {
      spring: ["カレイ","アイナメ","シロギス"],
      summer: ["アジ","サバ","ヒラメ","アナゴ"],
      autumn: ["イナダ","ヒラメ","アイナメ","アジ"],
      winter: ["マコガレイ","イシガレイ","ドンコ"]
    },
    recommendedRigs: ["サビキ釣り","投げ釣り仕掛け (カレイ/キス)","ショアジギング (30〜40g)","テキサスリグ"],
    localRules: ["立ち入り禁止フェンス内への侵入禁止","荷役エリアでの作業妨害禁止","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "原釜海浜公園駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・展望緑地完備。"
    },
    tips: "春と秋のカレイ・アイナメは投げ釣りで青イソメを房掛けにして遠投。夏〜秋の朝夕はサビキでアジ・サバが数釣れます。"
  },
  {
    id: "fukushima-shinchi-park",
    name: "福島 新地 新地町海釣り公園 (温排水口)",
    kana: "ふくしま・しんち・しんちまちうみづりこうえん",
    region: "tohoku",
    prefecture: "福島県",
    address: "福島県相馬郡新地町今泉字前川原211-1",
    lat: 37.8762,
    lng: 140.9328,
    category: "park",
    description: "相馬共同火力発電所の温排水口に設置された管理海釣り公園。温排水の影響で冬でも水温が高く、周年50cm超の大型クロダイ、スズキ、ヒラメ、イナダ、タチウオ、イシモチが狙える東北屈指の高活性釣り場。",
    accessInfo: "常磐自動車道「新地IC」より車で約10分。JR常磐線「新地駅」より車で約8分。",
    depthRange: "5m〜10m (温排水急流)",
    bottomType: "コンクリート消波ブロック・砂泥・捨石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 1,000円 / 小中学生 500円（4時間）",
      isNightFishingAllowed: false,
      
      openingHours: "6:00〜17:00（時期により変動・火曜休園）",
    },
    targetFish: ["クロダイ (大型)","スズキ・フッコ","ヒラメ","イナダ","イシモチ","アジ","タチウオ"],
    bestSeasons: {
      spring: ["大型クロダイ","スズキ","ヒラメ"],
      summer: ["イシモチ","クロダイ","アジ","イナダ"],
      autumn: ["イナダ","ヒラメ","タチウオ","クロダイ"],
      winter: ["温排水クロダイ（爆釣）","スズキ","ヒラメ"]
    },
    recommendedRigs: ["ウキフカセ釣り","ルアー (バイブレーション / ジグヘッドワーム)","チョイ投げ仕掛け"],
    localRules: ["ライフジャケット着用必須（無料レンタルあり）","投げ釣りはアンダースロー限定","ルアーは周囲の安全確認を徹底"],
    parkingDetails: {
      capacity: "公園専用駐車場 約60台",
      fee: "無料",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・トイレ・釣具販売あり。"
    },
    tips: "温排水の払い出しの反転流にウキフカセの仕掛けをなじませると、真冬でも年無しクロダイ（50cm超）が怒涛の入れ食いになります。"
  },
  {
    id: "fukushima-iwaki-surf",
    name: "福島 いわき 勿来海岸・新舞子サーフ",
    kana: "ふくしま・いわき・なこそかいがん・しんまいこさーふ",
    region: "tohoku",
    prefecture: "福島県",
    address: "福島県いわき市勿来町関田・平藤間",
    lat: 36.8741,
    lng: 140.7942,
    category: "surf",
    description: "黒潮と親潮が交差する「潮目の海」に面したいわき市の名サーフ。鮫川や夏井川の河口が絡みベイトが豊富で、座布団ヒラメ（80cm超実績）、マゴチ、イナダ、シロギス、シーバスの名所。",
    accessInfo: "常磐自動車道「いわき勿来IC」より車で約10分。JR常磐線「勿来駅」より徒歩約15分。",
    depthRange: "1.5m〜6m",
    bottomType: "細砂・サンドバー・離岸流カケアガリ",
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
      nightFishingText: "可能 (夜間のシーバス・ヒラメ)",
      
    },
    targetFish: ["ヒラメ (座布団級)","マゴチ","イナダ・ワラサ","シロギス","シーバス","イシモチ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["マゴチ（照りゴチ）","シロギス","イシモチ"],
      autumn: ["座布団ヒラメ","青物（イナダ/ワラサ）","ランカーシーバス"],
      winter: ["寒ヒラメ","イシガレイ"]
    },
    recommendedRigs: ["ヘビーシンキングペンシル (30〜45g)","メタルジグ (30〜40g)","ジグヘッドワーム (21〜28g)"],
    localRules: ["ウェーダー・ライフジャケット着用必須","離岸流による急な深みに注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "勿来海岸・新舞子海岸駐車場 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・遊歩道完備。"
    },
    tips: "沖のブレイクライン（ヨブ）に向かってヘビーシンペンをフルキャスト。ボトムから1m上をスローリトリーブすると座布団ヒラメが食い上げます。"
  },
  {
    id: "fukushima-hirono-rock",
    name: "福島 双葉 広野・楢葉 夕日の丘・天神岬下地磯",
    kana: "ふくしま・ふたば・ひろの・ならは・ゆうひのおか・てんじんみさきしたじいそ",
    region: "tohoku",
    prefecture: "福島県",
    address: "福島県双葉郡楢葉町北田天神原",
    lat: 37.2842,
    lng: 141.0142,
    category: "rock",
    description: "太平洋を一望する天神岬の高台下に広がる広野・楢葉の岩礁海岸。沈みテトラと自然の岩盤が複雑に入り組み、アイナメ・クロソイ・ヒラメ・イシガレイ・ウミタナゴ・シーバスが狙える好磯場。",
    accessInfo: "常磐自動車道「広野IC」または「ならはスマートIC」より車で約10分。JR常磐線「竜田駅」より車で約8分。",
    depthRange: "3m〜9m",
    bottomType: "岩盤・砂泥・沈みテトラ・海藻帯",
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
      nightFishingText: "夜釣り可能（足元に十分注意）",
      
    },
    targetFish: ["アイナメ","クロソイ","ヒラメ","イシガレイ","シーバス","ウミタナゴ","ドンコ"],
    bestSeasons: {
      spring: ["アイナメ","イシガレイ","ウミタナゴ"],
      summer: ["ヒラメ","シーバス","クロダイ"],
      autumn: ["良型アイナメ","クロソイ","ヒラメ"],
      winter: ["ドンコ","カレイ","クロソイ"]
    },
    recommendedRigs: ["テキサスリグ (14〜21g)","ジグヘッドワーム","胴突きブラクリ仕掛け"],
    localRules: ["スパイクシューズ・ライフジャケット着用必須","急な波の這い上がりに警戒","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "天神岬スポーツ公園駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "温泉施設・トイレ・キャンプ場完備。"
    },
    tips: "岩盤の割れ目や沈みテトラの隙間にテキサスリグを落とし込むと、首振りの強烈な大型アイナメやクロソイが飛び出します。"
  },
  {
    id: "ibaraki-kashima-port",
    name: "茨城 鹿島港 鹿島港魚釣園",
    kana: "いばらき・かしまこう・かしまこううおつりえん",
    region: "kanto",
    prefecture: "茨城県",
    address: "茨城県鹿嶋市新浜11",
    lat: 35.9185,
    lng: 140.7024,
    category: "park",
    description: "鹿島灘の黒潮と親潮が交差する鹿島港南防波堤の根元に位置する有料海釣り施設。安全柵完備で、ショゴ（カンパチ幼魚）・イナダ・ヒラメ・タチウオ・アジ・タコ・カレイ・イシモチが一年中狙える茨城屈指の名釣り場。",
    accessInfo: "東関東自動車道「潮来IC」より車で約25分。JR鹿島線「鹿島神宮駅」よりタクシー約20分。",
    depthRange: "6m〜14m",
    bottomType: "砂泥・捨石・基礎ブロック",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 600円 / 小人 300円（見学 大人200円/小人100円）",
      isNightFishingAllowed: false,
      
      openingHours: "5〜10月 7:00〜19:00 / 11〜4月 8:00〜17:00（火曜休園）",
    },
    targetFish: ["ショゴ (カンパチ)","イナダ","ヒラメ","タチウオ","アジ","イシモチ","マダコ","シロギス","カレイ"],
    bestSeasons: {
      spring: ["カレイ","シロギス","クロダイ"],
      summer: ["ショゴ","イシモチ","アジ","マダコ"],
      autumn: ["イナダ","カンパチ","タチウオ","ヒラメ","イシモチ"],
      winter: ["カレイ","アイナメ","ウミタナゴ"]
    },
    recommendedRigs: ["ショアジギング (30〜60g)","サビキ釣り","タコテンヤ / タコエギ","チョイ投げ仕掛け"],
    localRules: ["ライフジャケット着用必須（無料レンタルあり）","投げ釣りはアンダースロー限定","飲酒禁止・ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "施設専用駐車場 約150台",
      fee: "無料",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・売店・トイレ・自販機完備。"
    },
    tips: "秋の青物シーズンは朝マズメにメタルジグを遠投してワンピッチジャーク。カンパチやイナダが強烈に引きます。足元ではタコエギで良型マダコが狙い目。"
  },
  {
    id: "ibaraki-hitachi-kuji",
    name: "茨城 日立 久慈港・日立港第5埠頭",
    kana: "いばらき・ひたち・くじこう・ひたちこうだいごふとう",
    region: "kanto",
    prefecture: "茨城県",
    address: "茨城県日立市久慈町",
    lat: 36.4952,
    lng: 140.6245,
    category: "port",
    description: "久慈川の河口南側に広がる大規模港湾。外洋に面して潮通しが良く、イシモチ・ヒラメ・アジ・イワシ・タコ・カレイ・クロダイ・アイナメ・サバが狙える日立エリアの定番ポイント。",
    accessInfo: "常磐自動車道「日立南太田IC」より車で約10分。JR常磐線「大甕駅」より車で約8分。",
    depthRange: "4m〜11m",
    bottomType: "砂泥・敷石・岸壁",
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
      nightFishingText: "可能 (夜間のアナゴ・アジング・イシモチ)",
      
    },
    targetFish: ["イシモチ","ヒラメ","アジ","イワシ","タコ","マコガレイ","クロダイ","サバ","アナゴ"],
    bestSeasons: {
      spring: ["カレイ","シロギス","クロダイ"],
      summer: ["イシモチ（投げ釣り）","アジ","イワシ","タコ"],
      autumn: ["ヒラメ","アジ","イナダ","イシモチ"],
      winter: ["マコガレイ","アイナメ","ドンコ"]
    },
    recommendedRigs: ["チョイ投げ / ぶっこみ仕掛け (イシモチ・カレイ)","サビキ釣り","タコエギ","ルアー"],
    localRules: ["立ち入り禁止フェンス内への進入禁止","港湾作業の邪魔にならない駐車","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "久慈港親水公園・岸壁周辺 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "夏〜秋のイシモチは夕マズメ〜夜のぶっこみ釣りでアオイソメを房掛けにすると入れ食い。日中はサビキでアジ・イワシが家族で楽しめます。"
  },
  {
    id: "ibaraki-hasaki-surf",
    name: "茨城 神栖 波崎海岸・日川浜サーフ",
    kana: "いばらき・かみす・はさきかいがん・にっかわはまさーふ",
    region: "kanto",
    prefecture: "茨城県",
    address: "茨城県神栖市波崎・日川",
    lat: 35.7582,
    lng: 140.8241,
    category: "surf",
    description: "利根川河口から鹿島港まで一直線に続く鹿島灘の大外洋サーフ。強烈な離岸流（カレント）と豊富なベイトが絡み、座布団ヒラメ、マゴチ、ランカーシーバス、イシモチ、イナダが狙える全国屈指のサーフ聖地。",
    accessInfo: "東関東自動車道「潮来IC」より車で約35分、または圏央道「神崎IC」より約45分。",
    depthRange: "1.5m〜6m (遠浅外洋)",
    bottomType: "細砂・激流サンドバー・離岸流海溝",
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
    targetFish: ["ヒラメ (座布団級)","マゴチ","シーバス","イシモチ","イナダ・ワラサ","シロギス"],
    bestSeasons: {
      spring: ["シーバス","シロギス","ヒラメ"],
      summer: ["マゴチ","イシモチ（爆釣）","シロギス"],
      autumn: ["座布団ヒラメ","イナダ","ランカーシーバス"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["ヘビーシンキングペンシル (30〜45g)","メタルジグ (30〜45g)","ジグヘッドワーム (21〜28g)","イシモチ投げ仕掛け"],
    localRules: ["ウェーダー・ライフジャケット完全着用必須","強烈な離岸流への立ち込み禁止","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "波崎海水浴場・日川浜海岸駐車場 約300台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・シャワー棟完備。"
    },
    tips: "白波が立たずに海面がざわつく離岸流の払い出しへヘビーシンペンをキャスト。フォール中や巻き始めに座布団ヒラメの強烈バイトが集中します。"
  },
  {
    id: "ibaraki-isoara-rock",
    name: "茨城 北茨城 平潟港・五浦海岸地磯",
    kana: "いばらき・きたいばらき・ひらかたこう・いづらかいがんじいそ",
    region: "kanto",
    prefecture: "茨城県",
    address: "茨城県北茨城市大津町・平潟町",
    lat: 36.8341,
    lng: 140.7982,
    category: "rock",
    description: "岡倉天心の六角堂で有名な五浦海岸の景勝岩礁帯と平潟港。複雑に入り組む入り江と岩盤スリットから、アイナメ・クロダイ・ウミタナゴ・メバル・ヒラメ・クロソイが狙える茨城最北の一級磯場。",
    accessInfo: "常磐自動車道「北茨城IC」または「いわき勿来IC」より車で約15分。JR常磐線「大津港駅」より車で約7分。",
    depthRange: "3m〜12m",
    bottomType: "岩盤・沈み根・スリット・海藻帯",
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
      nightFishingText: "夜釣り可能（平潟港内は常夜灯あり）",
      
    },
    targetFish: ["アイナメ","クロダイ","ウミタナゴ","メバル","ヒラメ","クロソイ","ドンコ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","ウミタナゴ","アイナメ"],
      summer: ["ヒラメ","アジ","クロダイ"],
      autumn: ["大型アイナメ","クロダイ","ヒラメ","メバル"],
      winter: ["ドンコ","クロソイ","アイナメ"]
    },
    recommendedRigs: ["ウキフカセ釣り","ロックフィッシュテキサス","胴突き仕掛け","メバリングジグ単"],
    localRules: ["スパイクシューズ・フローティングベスト着用必須","景勝地・文化財エリアへの配慮","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "五浦岬公園・平潟港駐車場 約60台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "磯際のサラシや払い出しの潮筋にウキフカセでオキアミを流すと、良型のクロダイやウミタナゴ、アイナメが連発します。"
  },
  {
    id: "niigata-sado-rock",
    name: "新潟 佐渡島 尖閣湾・平根崎地磯",
    kana: "にいがた・さどしま・せんかくわん・ひらねざきじいそ",
    region: "hokuriku",
    prefecture: "新潟県",
    address: "新潟県佐渡市北狄・小川",
    lat: 38.0841,
    lng: 138.2412,
    category: "rock",
    description: "佐渡島北西岸のダイナミックな海岸段丘に位置する全国屈指の一級地磯。水深が足元から一気に落ち込み、ヒラマサ・マダイ・大型メジナ（尾長グレ）・クロダイ・アオリイカ・キジハタが狙える超弩級フィールド。",
    accessInfo: "両津港より車で約50分、小木港より約1時間15分。平根崎波蝕甌穴群の駐車場より磯へエントリー。",
    depthRange: "8m〜30m (足元から急深)",
    bottomType: "溶岩岩盤・スリット・海溝・ドロップオフ",
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
      nightFishingText: "夜釣り可能（大波・突風に厳重注意）",
      
    },
    targetFish: ["ヒラマサ (メーター級)","マダイ (80cmUP)","メジナ (大型)","クロダイ","アオリイカ","キジハタ","ブリ・ワラサ"],
    bestSeasons: {
      spring: ["乗っ込みマダイ","大型クロダイ","ヒラマサ"],
      summer: ["キジハタ","ヒラマサ","ショアジギング青物"],
      autumn: ["アオリイカ（特大）","ヒラマサ","マダイ","グレ"],
      winter: ["寒グレ（大型尾長）","寒マダイ"]
    },
    recommendedRigs: ["ロックショアジギング (80〜120g)","ショアプラッギング (ダイビングペンシル 160〜190mm)","遠投カゴ釣り / ウキフカセ"],
    localRules: ["フェルトスパイク・固型式ライフジャケット着用必須","荒天時・ウネリ時の磯乗り絶対禁止","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "平根崎駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "足元から水深20m以上のドロップオフ。潮が激しく走るタイミングでダイビングペンシルを引くとメーターオーバーのヒラマサが炸裂。"
  },
  {
    id: "niigata-kashiwazaki-surf",
    name: "新潟 柏崎 鯨波・中央海岸サーフ",
    kana: "にいがた・かしわざき・くじらなみ・ちゅうおうかいがんさーふ",
    region: "hokuriku",
    prefecture: "新潟県",
    address: "新潟県柏崎市鯨波・西港町",
    lat: 37.3541,
    lng: 138.5321,
    category: "surf",
    description: "米山を望む景勝サーフ。適度な起伏と岩礁が点在する砂浜で、初夏のシロギス数釣り、秋のサゴシ・イナダのナブラ撃ち、ヒラメ、マゴチ、春のサクラマスが狙える人気スポット。",
    accessInfo: "北陸自動車道「柏崎IC」または「米山IC」より車で約10分。JR信越本線「鯨波駅」より徒歩約5分。",
    depthRange: "1.5m〜6m",
    bottomType: "砂底・沈み根・サンドバー・テトラ",
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
      nightFishingText: "可能 (夜間のシーバス・フラットフィッシュ)",
      
    },
    targetFish: ["シロギス","ヒラメ","マゴチ","サゴシ","イナダ","シーバス","クロダイ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","サクラマス"],
      summer: ["シロギス（数釣り）","マゴチ","キジハタ"],
      autumn: ["サゴシ（大ナブラ）","イナダ","ヒラメ","アオリイカ"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["投げ釣り仕掛け (3〜5本針)","メタルジグ (30〜40g)","サーフ用ミノー / シンペン"],
    localRules: ["海水浴期間中の釣りエリア制限遵守","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "鯨波海岸駐車場 約100台",
      fee: "無料（夏季有料期間あり）",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "初夏は波打ち際50m以内でシロギスが連掛け。秋は沖で湧くサゴシやイナダのナブラをメタルジグの表層早巻きで狙い撃ちします。"
  },
  {
    id: "niigata-iwafune-port",
    name: "新潟 村上 岩船港 白灯台堤防",
    kana: "にいがた・むらかみ・いわふねこう・はくとうだいていぼう",
    region: "hokuriku",
    prefecture: "新潟県",
    address: "新潟県村上市岩船港町",
    lat: 38.2185,
    lng: 139.4415,
    category: "port",
    description: "粟島への連絡船が発着する下越の名港。長い防波堤と三面川の河口が近く、アジ、アオリイカ、サゴシ、イナダ、キジハタ、クロダイ、ヒラメが一年中楽しめる大人気防波堤。",
    accessInfo: "日本海東北自動車道「神林岩船港IC」より車で約8分。JR羽越本線「村上駅」より車で約15分。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・テトラ・捨石・基礎スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜釣り)",
      
    },
    targetFish: ["アジ","アオリイカ","サゴシ","イナダ","キジハタ","クロダイ","ヒラメ","サヨリ"],
    bestSeasons: {
      spring: ["クロダイ","サクラマス","シロギス"],
      summer: ["アジ","キジハタ","サヨリ"],
      autumn: ["アオリイカ（爆釣）","サゴシ","イナダ","アジ"],
      winter: ["ヤリイカ","ハタハタ","クロソイ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)","ショアジギング (30〜45g)","サビキ釣り","ジグ単アジング"],
    localRules: ["フェリー発着所周辺の立ち入り禁止区域遵守","スミ跡の洗い流し","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "岩船港緑地・港内駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・物産直売所隣接。"
    },
    tips: "秋のエギングは白灯台先端から外海へのキャストで胴長20cm超のアオリイカが連発。サビキのアジを泳がせるとヒラメやキジハタが狙えます。"
  },
  {
    id: "toyama-himi-port",
    name: "富山 氷見 氷見港・比美乃江公園護岸",
    kana: "とやま・ひみ・ひみこう・ひみのえこうえんごがん",
    region: "hokuriku",
    prefecture: "富山県",
    address: "富山県氷見市北大町・比美町",
    lat: 36.8585,
    lng: 136.9885,
    category: "port",
    description: "「寒ブリ」で名高い富山湾西部の中心港。比美乃江公園の安全な親水護岸と港内波止からなり、アオリイカ・フクラギ（ブリ幼魚）・クロダイ・アジ・サバ・シロギス・サヨリが狙える氷見のメイン釣り場。",
    accessInfo: "能越自動車道「氷見IC」より車で約8分。JR氷見線「氷見駅」より徒歩約20分。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・捨石・岸壁",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜フカセ)",
      
    },
    targetFish: ["フクラギ (ブリ幼魚)","アオリイカ","クロダイ","アジ","サバ","サヨリ","シロギス","キジハタ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","サヨリ","シロギス"],
      summer: ["アジ","キジハタ","サバ"],
      autumn: ["フクラギ（青物回遊）","アオリイカ","クロダイ"],
      winter: ["寒ブリ（外海回遊）","カマス","メバル"]
    },
    recommendedRigs: ["ショアジギング (30〜40g)","エギング (2.5〜3.5号)","サビキ釣り","ウキフカセ釣り"],
    localRules: ["市場・漁協作業エリアへの立ち入り禁止","ゴミの完全持ち帰り","ライフジャケット着用"],
    parkingDetails: {
      capacity: "道の駅 氷見（比美乃江公園）駐車場 約300台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・温泉施設・鮮魚市場隣接。"
    },
    tips: "秋は朝マズメにフクラギのナブラが湧きやすくメタルジグの表層早巻きが効果的。道の駅隣接でファミリーフィッシングにも最適です。"
  },
  {
    id: "toyama-iwase-surf",
    name: "富山 富山湾 岩瀬浜・八重津浜サーフ",
    kana: "とやま・とやまわん・いわせはま・やえづはまさーふ",
    region: "hokuriku",
    prefecture: "富山県",
    address: "富山県富山市岩瀬古志町・四方",
    lat: 36.7582,
    lng: 137.2241,
    category: "surf",
    description: "神通川・常願寺川が注ぐ富山湾中央の砂浜サーフ。春の「ホタルイカ身投げ」で全国的に知られ、ホタルイカパターンでの大型黒鯛（チヌ）・シーバス・ヒラメ・マゴチ・シロギスの超有名ポイント。",
    accessInfo: "北陸自動車道「富山東IC」または「富山西IC」より車で約25分。富山ライトレール「岩瀬浜駅」より徒歩約10分。",
    depthRange: "2m〜8m (急深サーフ)",
    bottomType: "砂底・砂利・サンドバー・海溝",
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
      nightFishingText: "可能 (春の夜のホタルイカパターン黒鯛・シーバス)",
      
    },
    targetFish: ["クロダイ (ホタルイカパターン)","シーバス","ヒラメ","マゴチ","シロギス","サゴシ","ホタルイカ"],
    bestSeasons: {
      spring: ["クロダイ（ホタルイカルアー）","ランカーシーバス","シロギス"],
      summer: ["マゴチ","シロギス（数釣り）","ヒラメ"],
      autumn: ["サゴシ","フクラギ","ヒラメ","アオリイカ"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["ホタルイカ型プラグ / ズィークイッド (68〜90mm)","サーフ用シンペン (30g)","投げ釣り仕掛け"],
    localRules: ["新月大潮時のホタルイカ掬い客とのトラブル防止","ウェーダー・ライジャケ着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "岩瀬浜・八重津浜駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "3〜5月の新月大潮の夜、ホタルイカルアーをデッドスローで漂わせると、波打ち際で50cm超の丸々と太った黒鯛やシーバスが狂ったようにバイト。"
  },
  {
    id: "toyama-amaharashi-rock",
    name: "富山 高岡 雨晴海岸・女岩地磯",
    kana: "とやま・たかおか・あまはらしかいがん・おんないわじいそ",
    region: "hokuriku",
    prefecture: "富山県",
    address: "富山県高岡市太田雨晴",
    lat: 36.8142,
    lng: 137.0412,
    category: "rock",
    description: "立山連峰を海越しに望む絶景の景勝海岸。岩礁と砂地が複雑に絡み合い、クロダイのウキフカセ・渚釣り、キジハタ、アオリイカ、メバル、シーバスが狙える高岡を代表する風光明媚なフィールド。",
    accessInfo: "能越自動車道「高岡北IC」より車で約15分。JR氷見線「雨晴駅」より徒歩約5分。",
    depthRange: "2m〜7m",
    bottomType: "岩礁・スリット・砂泥・藻場",
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
      nightFishingText: "夜釣り可能（観光客・線路への立ち入り注意）",
      
    },
    targetFish: ["クロダイ","キジハタ","アオリイカ","メバル","シーバス","シロギス"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ（渚釣り）","メバル","シーバス"],
      summer: ["キジハタ","シロギス","クロダイ"],
      autumn: ["アオリイカ","良型クロダイ","キジハタ"],
      winter: ["クロソイ","メバル"]
    },
    recommendedRigs: ["渚釣り / ウキフカセ仕掛け","エギング (3.0〜3.5号)","テキサスリグ (ロックフィッシュ)"],
    localRules: ["JR氷見線線路内への立ち入り絶対禁止","観光遊歩道利用者の邪魔にならないマナー","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "道の駅 雨晴駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・展望デッキ完備。"
    },
    tips: "女岩周辺の沈み根周りへエギを通すとアオリイカが好反応。砂浜と岩礁の境目をウキフカセで狙うクロダイ渚釣りも大人気です。"
  },
  {
    id: "toyama-ikuji-port",
    name: "富山 黒部 生地鼻・生地漁港波止",
    kana: "とやま・くろべ・いくじはな・いくじぎょこうはと",
    region: "hokuriku",
    prefecture: "富山県",
    address: "富山県黒部市生地中区",
    lat: 36.8945,
    lng: 137.4145,
    category: "port",
    description: "黒部川の湧水群「生地の清水」で有名な生地鼻の港。富山湾の海底谷（藍瓶）に面して岸から急激に深くなっており、青物（フクラギ/サゴシ）、アオリイカ、カマス、キジハタ、アジが狙える屈指のドン深好ポイント。",
    accessInfo: "北陸自動車道「黒部IC」より車で約15分。あいの風とやま鉄道「生地駅」より車で約5分。",
    depthRange: "6m〜20m (超急深)",
    bottomType: "砂利・基礎捨石・急深スリット・海底谷",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤリイカ)",
      
    },
    targetFish: ["フクラギ","サゴシ","アオリイカ","カマス","キジハタ","アジ","クロダイ"],
    bestSeasons: {
      spring: ["カマス","クロダイ","ヤリイカ"],
      summer: ["キジハタ","アジ","サバ"],
      autumn: ["青物（フクラギ/サゴシ）","アオリイカ","カマス"],
      winter: ["ヤリイカ","寒サバ","クロソイ"]
    },
    recommendedRigs: ["ショアジギング (40〜60g)","エギング (3.0〜3.5号)","カマス専用ジグサビキ","ジグ単アジング"],
    localRules: ["回転橋（生地中橋）周辺でのキャスト禁止","漁協施設内への無断駐車禁止","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "生地鼻灯台・くろべ漁協周辺 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "足元から水深10m以上あるため、重めのジグサビキを底まで落としてシャクると良型カマスやアジが鈴なり。秋は青物の回遊も強烈です。"
  },
  {
    id: "ishikawa-suzu-tako-rock",
    name: "石川 能登 九十九湾・小木港地磯",
    kana: "いしかわ・のと・つくもわん・おぎこうじいそ",
    region: "hokuriku",
    prefecture: "石川県",
    address: "石川県鳳珠郡能登町市之瀬・小木",
    lat: 37.3042,
    lng: 137.2341,
    category: "rock",
    description: "日本百景に選ばれるリアス式海岸・九十九湾とイカ漁の町・小木港。透明度が高く複雑な入り江と沈み根が連続し、全国屈指のアオリイカの聖地。キジハタ・クロダイ・メバル・アジの実績も圧倒的。",
    accessInfo: "のと里山海道「のと里山空港IC」より珠洲道路経由で約45分。",
    depthRange: "4m〜16m",
    bottomType: "岩盤・スリット・海藻帯・沈み根",
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
      nightFishingText: "可能 (常夜灯下のエギング・メバリング)",
      
    },
    targetFish: ["アオリイカ (大型実績)","キジハタ","クロダイ","メバル","アジ","ヤリイカ","マダイ"],
    bestSeasons: {
      spring: ["親アオリイカ (キロアップ)","乗っ込みクロダイ","メバル"],
      summer: ["キジハタ","アジ","小ダイ"],
      autumn: ["アオリイカ（数釣り爆発）","キジハタ","青物"],
      winter: ["ヤリイカ","メバル","クロソイ"]
    },
    recommendedRigs: ["エギング (3.0〜3.5号)","テキサスリグ / フリーリグ (14〜21g)","ジグ単メバリング (1.0〜2.0g)"],
    localRules: ["遊歩道の手すりや自然景観の保全","スミ跡の海水洗い流し徹底","ライフジャケット着用"],
    parkingDetails: {
      capacity: "九十九湾園地・小木港駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "イカの駅つくモール・トイレ併設。"
    },
    tips: "春は藻場回りのスラックジャークで2kg超の親アオリイカ、秋は新子のサイトフィッシング。ボトムを叩けば尺超えキジハタが飛び出します。"
  },
  {
    id: "ishikawa-hashidate-port",
    name: "石川 加賀 橋立港・片野海岸",
    kana: "いしかわ・かが・はしだてこう・かたのかいがん",
    region: "hokuriku",
    prefecture: "石川県",
    address: "石川県加賀市橋立町・片野町",
    lat: 36.3585,
    lng: 136.3145,
    category: "port",
    description: "ズワイガニ水揚げで名高い加賀の名港と砂浜・地磯が融合したポイント。外防波堤や片野海岸のサーフ・磯から、アオリイカ・クロダイ・シロギス・ヒラメ・サゴシ・アジが狙える南加賀屈指の人気釣り場。",
    accessInfo: "北陸自動車道「加賀IC」または「片山津IC」より車で約10分。JR北陸本線「加賀温泉駅」より車で約15分。",
    depthRange: "3m〜10m",
    bottomType: "砂泥・岩礁・テトラ・海藻帯",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜フカセ)",
      
    },
    targetFish: ["アオリイカ","クロダイ","シロギス","ヒラメ","サゴシ","アジ","キジハタ"],
    bestSeasons: {
      spring: ["クロダイ","シロギス","メバル"],
      summer: ["シロギス（束釣り）","アジ","キジハタ"],
      autumn: ["アオリイカ","サゴシ","ヒラメ","クロダイ"],
      winter: ["寒クロダイ","ヤリイカ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)","投げ釣り仕掛け (キス)","ウキフカセ釣り","ショアジギング (30g)"],
    localRules: ["市場荷役エリアへの立ち入り禁止","ゴミの持ち帰り","ライフジャケット着用"],
    parkingDetails: {
      capacity: "橋立港・片野海岸駐車場 約100台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "トイレ・海鮮食堂隣接。"
    },
    tips: "片野海岸のサーフからは初夏〜秋に良型シロギスが連発。港の防波堤外側では秋にサゴシのナブラやアオリイカの数釣りが楽しめます。"
  },
  {
    id: "fukui-tojinbo-rock",
    name: "福井 坂井 東尋坊・雄島地磯",
    kana: "ふくい・さかい・とうじんぼう・おしまじいそ",
    region: "hokuriku",
    prefecture: "福井県",
    address: "福井県坂井市三国町安島",
    lat: 36.2482,
    lng: 136.1412,
    category: "rock",
    description: "越前加賀海岸国定公園のシンボル・雄島（朱塗りの橋で渡れる島）と東尋坊周辺の柱状節理地磯。日本海の荒波が直接当たり、ヒラマサ・ブリ・大型グレ・アオリイカ・マダイが狙える北陸屈指の超弩級ショアポイント。",
    accessInfo: "北陸自動車道「金津IC」より車で約25分。えちぜん鉄道「三国港駅」よりバス約15分。",
    depthRange: "6m〜22m (激流荒磯)",
    bottomType: "安山岩柱状節理・スリット・海溝・ドロップオフ",
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
      nightFishingText: "夜釣り可能（雄島周りの足元に十分注意）",
      
    },
    targetFish: ["ヒラマサ (メーター級)","ブリ・ワラサ","メジナ (大型)","マダイ","アオリイカ","キジハタ","ヒラスズキ"],
    bestSeasons: {
      spring: ["ヒラマサ","乗っ込みマダイ","大型メジナ"],
      summer: ["キジハタ","青物ショアジギング"],
      autumn: ["ヒラマサ（秋マサ）","ブリ","アオリイカ","グレ"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ロックショアジギング (60〜100g)","ダイビングペンシル (160〜190mm)","ウキフカセ (太仕掛け)","エギング (3.5号)"],
    localRules: ["フェルトスパイク・固型式ライフジャケット着用必須","雄島神社境内・神域への敬意とマナー遵守","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "雄島橋たもと駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。島へは橋を徒歩で渡る。"
    },
    tips: "雄島の裏手（外海側）の磯は潮通しが抜群。朝夕のマズメに沖の潮目へダイビングペンシルをダイブさせるとメーター超えのヒラマサが水面を割ります。"
  },
  {
    id: "fukui-mihama-surf",
    name: "福井 若狭 水島・水晶浜サーフ",
    kana: "ふくい・わかさ・みずしま・すいしょうはまさーふ",
    region: "hokuriku",
    prefecture: "福井県",
    address: "福井県三方郡美浜町竹波",
    lat: 35.7142,
    lng: 135.9841,
    category: "surf",
    description: "エメラルドグリーンの透明度と白いきらめく砂浜を誇る若狭屈指の美海岸。遠浅ながら沖に沈み根が点在し、初夏〜晩秋のシロギス数釣り、ヒラメ、マゴチ、アオリイカ、シーバスの実績が高い名サーフ。",
    accessInfo: "舞鶴若狭自動車道「若狭美浜IC」または北陸道「敦賀IC」より車で約25分。",
    depthRange: "1.5m〜6m",
    bottomType: "極細白砂・沈み根・藻場・カケアガリ",
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
    targetFish: ["シロギス (数釣り)","ヒラメ","マゴチ","アオリイカ","シーバス","キジハタ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","メバル"],
      summer: ["シロギス（爆釣期）","マゴチ","キジハタ"],
      autumn: ["アオリイカ","ヒラメ","サゴシ","落ちギス"],
      winter: ["寒ヒラメ","カレイ"]
    },
    recommendedRigs: ["ライト投げ釣り仕掛け (2〜3本針)","ジグヘッドワーム (14〜21g)","エギング (2.5〜3.5号)"],
    localRules: ["夏季海水浴場開設期間中の日中遊泳エリア釣り禁止","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "水晶浜大駐車場 約500台（夏季有料1,000〜1,500円/他無料）",
      fee: "無料（夏季海水浴期のみ有料）",
      hours: "24時間利用可能",
      notes: "大型トイレ・シャワー施設完備。"
    },
    tips: "水が澄んでいるため、キスの魚影や追いかけてくるアオリイカが偏光グラス越しに丸見え。岩場寄りのブレイクを探るとキジハタやマゴチも好反応。"
  },
  {
    id: "fukui-takahama-port",
    name: "福井 若狭 高浜 音海大波止・若狭和田",
    kana: "ふくい・わかさ・たかはま・おとみおおはと・わかさわだ",
    region: "hokuriku",
    prefecture: "福井県",
    address: "福井県大飯郡高浜町音海",
    lat: 35.5583,
    lng: 135.5085,
    category: "port",
    description: "内浦湾の最奥部に位置する関西・中京アングラーに大人気の巨大防波堤。足元から水深20m以上あり、秋〜冬の青物（サゴシ・ハマチ）、タチウオ、アオリイカ、アジ、グレ、カマスが狙える超一級大波止。",
    accessInfo: "舞鶴若狭自動車道「大飯高浜IC」より車で約20分。JR小浜線「若狭高浜駅」より車で約15分。",
    depthRange: "10m〜24m (超深海波止)",
    bottomType: "砂泥・基礎捨石・深海スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜タチウオ)",
      
    },
    targetFish: ["サゴシ","ハマチ","タチウオ","アオリイカ","アジ (尺アジ)","グレ","カマス","キジハタ"],
    bestSeasons: {
      spring: ["ヤリイカ","アジ","クロダイ"],
      summer: ["アジ","キジハタ","サバ"],
      autumn: ["サゴシ（数釣り）","ハマチ","タチウオ","アオリイカ"],
      winter: ["ヤリイカ","大アジ","寒グレ"]
    },
    recommendedRigs: ["ショアジギング (30〜60g)","タチウオテンヤ / ワインド","エギング (3.0〜3.5号)","サビキ釣り (カゴサビキ)"],
    localRules: ["清掃協力金（駐車場代）の支払い","外側高所堤防でのライフジャケット着用必須","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "音海漁港駐車場 約80台",
      fee: "清掃協力金 1台 500〜1,000円",
      hours: "24時間利用可能",
      notes: "仮設トイレ完備。"
    },
    tips: "水深が非常に深いため、メタルジグやサビキをしっかりボトムまで沈めてから巻き上げるのがコツ。秋のサゴシや夕マズメのタチウオは爆発力があります。"
  },
  {
    id: "aichi-toyohashi-surf",
    name: "愛知 渥美半島 表浜・百々海岸サーフ",
    kana: "あいち・あつみはんとう・おもてはま・どうどかいがんさーふ",
    region: "tokai",
    prefecture: "愛知県",
    address: "愛知県田原市百々町・豊橋市伊古部町",
    lat: 34.6541,
    lng: 137.2841,
    category: "surf",
    description: "太平洋・遠州灘に面して数十キロ続く表浜海岸のメジャーサーフ。潮通しが極めて良く、座布団ヒラメ・マゴチ・オオニベ・青物（ブリ/ワラサ/ショゴ）・シーバス・シロギスが狙える東海アングラー憧れのサーフ聖地。",
    accessInfo: "東名高速「豊川IC」または「音羽蒲郡IC」より車で約50分。国道42号（表浜街道）沿い。",
    depthRange: "2m〜7m (外洋オープンサーフ)",
    bottomType: "細砂・激流サンドバー・離岸流海溝",
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
      nightFishingText: "可能 (夜間のシーバス・オオニベ・ヒラメ)",
      
    },
    targetFish: ["ヒラメ (座布団級)","マゴチ","オオニベ","ブリ・ワラサ","カンパチ (ショゴ)","シロギス","シーバス"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["マゴチ","シロギス（連掛け）","ショゴ"],
      autumn: ["座布団ヒラメ","ワラサ・ブリ","オオニベ","シーバス"],
      winter: ["寒ヒラメ","オオニベ","シーバス"]
    },
    recommendedRigs: ["ヘビーシンキングペンシル (30〜45g)","メタルジグ (30〜45g)","ジグヘッドワーム (21〜28g)","投げ釣り仕掛け"],
    localRules: ["ウェーダー・ライフジャケット完全着用必須","急な高波（土用波）に厳重警戒","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "百々海岸・伊古部海岸駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "沖合の瀬と瀬の間の離岸流（払い出し）へヘビーシンペンをキャストし、ボトムすれすれをスローにリトリーブ。座布団ヒラメやワラサが強烈に引きます。"
  },
  {
    id: "aichi-irago-port",
    name: "愛知 渥美半島 伊良湖港・恋路ヶ浜",
    kana: "あいち・あつみはんとう・いらごこう・こいじがはま",
    region: "tokai",
    prefecture: "愛知県",
    address: "愛知県田原市伊良湖町宮下",
    lat: 34.5841,
    lng: 137.0241,
    category: "port",
    description: "渥美半島の最先端に位置し、伊勢湾と太平洋（遠州灘）がぶつかる激流の好漁場。赤灯台堤防や恋路ヶ浜サーフから、ワラサ・カンパチ・サワラ・タチウオ・アオリイカ・ヒラメ・クロダイが狙える超一級ポイント。",
    accessInfo: "東名高速「豊川IC」より国道259号経由で約1時間20分。道の駅伊良湖クリスタルポルトすぐ。",
    depthRange: "4m〜15m (激流水道)",
    bottomType: "砂泥・捨石・テトラ・岩礁スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜タチウオ)",
      
    },
    targetFish: ["ワラサ・ブリ","カンパチ (ショゴ)","サワラ","タチウオ","アオリイカ","ヒラメ","クロダイ","アジ"],
    bestSeasons: {
      spring: ["親アオリイカ","クロダイ","シロギス"],
      summer: ["ショゴ","アジ","マゴチ","タチウオ"],
      autumn: ["ワラサ","サワラ","タチウオ","アオリイカ","ヒラメ"],
      winter: ["寒ブリ","メバル","カサゴ"]
    },
    recommendedRigs: ["ショアジギング (40〜80g)","タチウオテンヤ / ワインド","エギング (3.5号)","泳がせ釣り仕掛け"],
    localRules: ["フェリー・観光船航路へのキャスト禁止","堤防外側テトラでのライフジャケット着用必須","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "伊良湖港・道の駅駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・飲食店・売店隣接。"
    },
    tips: "伊良湖水道の潮が動き出すタイミングで青物やタチウオが堤防際にベイトを追い込みます。メタルジグのワンピッチや泳がせ釣りで大物が連発。"
  },
  {
    id: "aichi-morosaki-port",
    name: "愛知 知多半島 師崎港・羽豆岬",
    kana: "あいち・ちたはんとう・もろざきこう・はずみさき",
    region: "tokai",
    prefecture: "愛知県",
    address: "愛知県知多郡南知多町師崎明神山",
    lat: 34.6985,
    lng: 136.9685,
    category: "port",
    description: "知多半島の最南端、伊勢湾と三河湾の境界に位置する重要拠点。潮通しが抜群で、クロダイ（前打ち/ウキフカセ）・アジ・メバル・アオリイカ・タケノコメバル・マダコ・カレイ・カワハギが年中狙える人気港。",
    accessInfo: "南知多道路「豊丘IC」より車で約10分。名鉄「河和駅」よりバス約30分。",
    depthRange: "4m〜12m (潮流速い)",
    bottomType: "砂泥・敷石・テトラ・岩礁",
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
      nightFishingText: "可能 (常夜灯下のアジング・メバリング)",
      
    },
    targetFish: ["クロダイ","アジ","メバル","タケノコメバル","アオリイカ","マダコ","カワハギ","カレイ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","メバル","タケノコメバル"],
      summer: ["アジ","マダコ","クロダイ (前打ち)","シロギス"],
      autumn: ["アオリイカ","カワハギ","アジ","タチウオ"],
      winter: ["メバル","カレイ","アイナメ"]
    },
    recommendedRigs: ["前打ち / 落とし込み仕掛け (カラス貝/カニ)","ウキフカセ釣り","ジグ単ライトゲーム (1.0〜2.0g)","タコエギ"],
    localRules: ["フェリー・高速船発着所周辺の立ち入り禁止区域遵守","ゴミの完全持ち帰り","ライフジャケット着用"],
    parkingDetails: {
      capacity: "師崎港駐車場 約150台（1時間100円/24時間最大1,000円）",
      fee: "有料 (最初の数十分無料)",
      hours: "24時間利用可能",
      notes: "フェリーターミナル・トイレ・売店完備。"
    },
    tips: "羽豆岬周辺のスリットやテトラ帯はクロダイ前打ちのメッカ。夜間は常夜灯下で尺メバルやアジ、タケノコメバルのライトゲームが楽しめます。"
  },
  {
    id: "aichi-toyohama-pier",
    name: "愛知 知多半島 豊浜漁港 釣り桟橋",
    kana: "あいち・ちたはんとう・とよはまぎょこう・つりさんばし",
    region: "tokai",
    prefecture: "愛知県",
    address: "愛知県知多郡南知多町豊浜",
    lat: 34.7088,
    lng: 136.9388,
    category: "park",
    description: "知多半島で最も賑わう超大型海釣り桟橋（無料）。安全手すり完備で、サビキ釣りのアジ・イワシ・サバから、タチウオ・アオリイカ・タケノコメバル・クロダイ・アオリイカまでファミリーからベテランまで大人気。",
    accessInfo: "南知多道路「南知多IC」または「豊丘IC」より車で約15分。魚ひろばすぐ。",
    depthRange: "5m〜9m",
    bottomType: "砂泥・敷石・桟橋基礎スリット",
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
      nightFishingText: "可能 (常夜灯あり・夜タチウオ/アジ)",
      
    },
    targetFish: ["アジ","イワシ","サバ","タチウオ","アオリイカ","タケノコメバル","クロダイ","イシモチ","サヨリ"],
    bestSeasons: {
      spring: ["サヨリ","クロダイ","メバル","タケノコメバル"],
      summer: ["アジ","イワシ","サバ","タチウオ","イシモチ"],
      autumn: ["タチウオ（爆釣期）","アジ","アオリイカ","カワハギ"],
      winter: ["カレイ","メバル","カサゴ"]
    },
    recommendedRigs: ["サビキ釣り (トリックサビキ)","タチウオテンヤ / 電気ウキ仕掛け","チョイ投げ仕掛け","胴突き根魚仕掛け"],
    localRules: ["桟橋上での投げ釣り（オーバースロー）禁止","撒き餌で汚れた床面のバケツ洗浄","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "豊浜漁港・釣り桟橋前無料駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・豊浜魚ひろば隣接。"
    },
    tips: "初夏〜秋のサビキ釣りは初心者でもアジ・イワシが束釣り可能。秋の夜釣りは電気ウキやテンヤで指4本超のタチウオが桟橋全体で竿を曲げます。"
  },
  {
    id: "mie-shichiri-surf",
    name: "三重 熊野 七里御浜サーフ (鬼ヶ城〜新宮)",
    kana: "みえ・くまの・しちりみはまさーふ",
    region: "tokai",
    prefecture: "三重県",
    address: "三重県熊野市木本町〜南牟婁郡御浜町・紀宝町",
    lat: 33.8841,
    lng: 136.0982,
    category: "surf",
    description: "世界遺産・熊野古道に沿って延長約22kmにわたりドン深玉砂利浜が続く全国屈指の超弩級サーフ。足元から一気に深くなり、ショアからブリ・カンパチ・シイラ・ヒラメ・マダイ・オオニベが狙えるショアジギングの聖地。",
    accessInfo: "熊野尾鷲道路「熊野大泊IC」すぐ。JR紀勢本線「熊野市駅」より徒歩約10分。",
    depthRange: "5m〜25m (足元から超急深玉砂利)",
    bottomType: "丸玉砂利（みはま小石）・急深ドロップオフ・沖合海溝",
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
      nightFishingText: "可能 (夜間のマダイ・タマン・オオニベ投げ釣り)",
      
    },
    targetFish: ["ブリ・ワラサ","カンパチ (ショゴ/シオ)","シイラ","ヒラメ","マダイ (ショア真鯛)","オオニベ","アオリイカ"],
    bestSeasons: {
      spring: ["ショア真鯛","アオリイカ","ヒラメ"],
      summer: ["シイラ（メーター級）","カンパチ","ソウダガツオ"],
      autumn: ["ブリ・ワラサ","シオ","ヒラメ","オオニベ"],
      winter: ["寒ブリ","ショア真鯛","ヒラメ"]
    },
    recommendedRigs: ["ショアジギング (60〜100g)","弓角（サーフトローリング）","両軸遠投カゴ釣り (マダイ/青物)","ぶっこみ仕掛け"],
    localRules: ["急激なカケアガリと巻き波による引き波に厳重警戒（海へ近づきすぎない）","ライフジャケット着用必須","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "道の駅 パーク七里御浜・海岸沿い駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・物産館完備。"
    },
    tips: "波打ち際から10mで水深10m以上に落ち込む急深地形。60g以上のメタルジグを遠投して底を取ってからシャクり上げると青物や真鯛が直撃します。"
  },
  {
    id: "mie-owase-port",
    name: "三重 紀北 尾鷲港 行野浦波止・三木浦",
    kana: "みえ・きほく・おわせこう・ゆくのうらはと・みきうら",
    region: "tokai",
    prefecture: "三重県",
    address: "三重県尾鷲市行野浦・三木浦町",
    lat: 34.0685,
    lng: 136.2085,
    category: "port",
    description: "黒潮の恩恵を受ける熊野灘の天然深水湾。水深と潮通しに恵まれ、アオリイカ（エギング/ヤエン釣りで3kg超実績）、アジ、オオモンハタ、アカハタ、タチウオ、青物、カワハギが年中狙える好フィールド。",
    accessInfo: "紀勢自動車道「尾鷲北IC」または「尾鷲南IC」より車で約10分。JR紀勢本線「尾鷲駅」より車で約8分。",
    depthRange: "6m〜18m",
    bottomType: "砂泥・敷石・沈みテトラ・岩礁",
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
      nightFishingText: "可能 (夜釣りのヤエン・アジング・タチウオ)",
      
    },
    targetFish: ["アオリイカ (3kgUP実績)","アジ","オオモンハタ","アカハタ","タチウオ","シオ (カンパチ幼魚)","カワハギ"],
    bestSeasons: {
      spring: ["モンスター親アオリイカ (ヤエン/エギング)","マダイ","アジ"],
      summer: ["アカハタ","オオモンハタ","アジ","シオ"],
      autumn: ["アオリイカ（数釣り）","タチウオ","カワハギ","青物"],
      winter: ["大型アオリイカ","メバル","カサゴ"]
    },
    recommendedRigs: ["ヤエン仕掛け / ウキ泳がせ (活きアジ)","エギング (3.5〜4.0号)","ブレードジグ / スイミングテンヤ (オオモンハタ)"],
    localRules: ["漁港関係者の作業スペースへの無断駐車禁止","スミ跡の洗い流し徹底","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "尾鷲港内・行野浦駐車スペース 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "春と秋〜冬のアオリイカは活きアジを使ったヤエン釣りやエギングでモンスター級が狙えます。日中はブレードジグでオオモンハタの強烈バイトが楽しめます。"
  },
  {
    id: "mie-toba-rock",
    name: "三重 鳥羽 国崎・菅島地磯",
    kana: "みえ・とば・くざき・すがしまじいそ",
    region: "tokai",
    prefecture: "三重県",
    address: "三重県鳥羽市国崎町・安楽島町",
    lat: 34.4282,
    lng: 136.9142,
    category: "rock",
    description: "伊勢志摩国立公園の豊かな海に突き出た岬地磯群。黒潮分流が直撃し、大型尾長グレ（メジナ）・イシダイ・マダイ・アオリイカ・イサキ・ハマチが狙える志摩半島屈指の本格地磯。",
    accessInfo: "伊勢二見鳥羽ライン「鳥羽IC」よりパールロード経由で約25分。",
    depthRange: "5m〜16m",
    bottomType: "荒根・岩盤・スリット・海藻帯・沈み根",
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
      nightFishingText: "夜釣り可能（夜の大型イサキ・タマン狙い）",
      
    },
    targetFish: ["尾長グレ・口太グレ","イシダイ","マダイ","アオリイカ","イサキ","アカハタ","ハマチ"],
    bestSeasons: {
      spring: ["乗っ込みクロダイ","親アオリイカ","マダイ"],
      summer: ["イサキ（夜釣り）","アカハタ","イシダイ"],
      autumn: ["アオリイカ","グレ","青物（ハマチ/シオ）"],
      winter: ["寒グレ（大型尾長）","寒マダイ"]
    },
    recommendedRigs: ["ウキフカセ釣り (円錐ウキ00〜3B)","イシダイ仕掛け (ワイヤーハリス + ウニ/サザエ)","エギング (3.5号)"],
    localRules: ["フェルトスパイクシューズ・固型式ライフジャケット着用必須","急な高波に警戒","コマセの磯洗い流し"],
    parkingDetails: {
      capacity: "国崎漁港・鎧崎周辺駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "沖へ向かって払い出すサラシと本流が合流する潮目にウキフカセの仕掛けを流すと、強烈な引きの良型グレやマダイが食い上がってきます。"
  },
  {
    id: "kyoto-kyotango-rock",
    name: "京都 丹後 経ヶ岬地磯・間人",
    kana: "きょうと・たんご・きょうがみさきじいそ・たいざ",
    region: "kansai",
    prefecture: "京都府",
    address: "京都府京丹後市丹後町袖志・間人",
    lat: 35.7782,
    lng: 135.2141,
    category: "rock",
    description: "近畿地方の最北端・日本海へ突き出た大絶壁の地磯群。対馬海流が直撃し、ショアからヒラマサ・ブリ・大型アオリイカ・グレ・マダイ・キジハタが狙える関西屈指の本格ロックショアフィールド。",
    accessInfo: "山陰近畿自動車道「京丹後大宮IC」より国道178号経由で約40分。経ヶ岬灯台駐車場より磯へアプローチ。",
    depthRange: "6m〜25m (激流荒磯)",
    bottomType: "柱状節理岩盤・スリット・海溝・ドロップオフ",
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
      nightFishingText: "夜釣り可能（磯歩き時の足元に厳重警戒）",
      
    },
    targetFish: ["ヒラマサ (メーター級)","ブリ・メジロ","アオリイカ","メジナ (グレ)","マダイ","キジハタ","ヒラスズキ"],
    bestSeasons: {
      spring: ["ヒラマサ","親アオリイカ","乗っ込みマダイ"],
      summer: ["キジハタ","青物ショアジギング"],
      autumn: ["秋ヒラマサ","ブリ・メジロ","アオリイカ","グレ"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ロックショアジギング (60〜100g)","ダイビングペンシル (160〜190mm)","エギング (3.5号)","ウキフカセ太仕掛け"],
    localRules: ["フェルトスパイク・固型式ライフジャケット着用必須","強風・高波時の磯降り絶対禁止","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "経ヶ岬駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。磯へは山道を徒歩約15分。"
    },
    tips: "岬先端の本流と反転流の境目をダイビングペンシルで誘い出すと、強烈な水柱とともに大型ヒラマサがアタックしてきます。"
  },
  {
    id: "kyoto-ine-port",
    name: "京都 丹後 伊根 舟屋の里・伊根港波止",
    kana: "きょうと・たんご・いね・ふなやのさと・いねこうはと",
    region: "kansai",
    prefecture: "京都府",
    address: "京都府与謝郡伊根町平田",
    lat: 35.6745,
    lng: 135.2885,
    category: "port",
    description: "重要伝統的建造物群「伊根の舟屋」が立ち並ぶ穏やかな入江の名港。潮通しと水深に恵まれ、アオリイカ（エギング聖地）、アジ、キジハタ、カマス、チヌ、タチウオが情緒あふれる風景の中で楽しめる。",
    accessInfo: "山陰近畿自動車道「与謝天橋立IC」より国道178号経由で約35分。道の駅舟屋の里伊根すぐ。",
    depthRange: "5m〜14m",
    bottomType: "砂泥・捨石・基礎スリット・海藻帯",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤリイカ)",
      
    },
    targetFish: ["アオリイカ","アジ","キジハタ","カマス","クロダイ (チヌ)","タチウオ","ヤリイカ"],
    bestSeasons: {
      spring: ["親アオリイカ","チヌ","メバル"],
      summer: ["アジ","キジハタ","カマス"],
      autumn: ["アオリイカ（数釣り爆発）","タチウオ","アジ"],
      winter: ["ヤリイカ","クロソイ","メバル"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)","ジグ単アジング (0.8〜1.5g)","サビキ釣り","テキサスリグ"],
    localRules: ["私有地（舟屋内部や個人桟橋）への立ち入り厳禁","スミ跡は必ず海水で洗い流すこと","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "伊根浦公園・七面山駐車場 約100台（有料・最初の30分無料）",
      fee: "有料 (30分無料/以降30分100円)",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "秋の新子アオリイカは足元の見えイカをサイトフィッシング。夜間は常夜灯周辺でジグ単アジングや秋〜冬のヤリイカ釣りが手堅いです。"
  },
  {
    id: "kyoto-maizuru-pier",
    name: "京都 舞鶴 親海公園 護岸プラザ",
    kana: "きょうと・まいづる・しんかいこうえん・ごがんぷらざ",
    region: "kansai",
    prefecture: "京都府",
    address: "京都府舞鶴市字大引770",
    lat: 35.5385,
    lng: 135.3785,
    category: "park",
    description: "舞鶴湾の湾口部に位置する入場無料の海釣り親水公園。全面に安全柵（手すり）が設置され、サビキ釣りでのアジ・イワシ、タチウオ、アオリイカ、サゴシ、チヌ、グレが安全・快適に狙える人気スポット。",
    accessInfo: "舞鶴若狭自動車道「舞鶴東IC」より車で約25分。JR舞鶴線「東舞鶴駅」より車で約20分。",
    depthRange: "5m〜10m",
    bottomType: "砂泥・敷石・スリット護岸",
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
      nightFishingText: "可能 (夜釣りのタチウオ・アジング)",
      
    },
    targetFish: ["アジ","イワシ","タチウオ","アオリイカ","サゴシ","クロダイ (チヌ)","グレ","サヨリ"],
    bestSeasons: {
      spring: ["サヨリ","チヌ","メバル"],
      summer: ["アジ","イワシ","サバ","タチウオ"],
      autumn: ["タチウオ（数釣り）","サゴシ","アオリイカ","アジ"],
      winter: ["カレイ","メバル","ガシラ"]
    },
    recommendedRigs: ["サビキ釣り (カゴサビキ)","タチウオテンヤ / ワインド","エギング (2.5〜3.5号)","ウキフカセ釣り"],
    localRules: ["オーバースロー（上投げ）禁止（アンダースロー限定）","釣り場を汚さないマナー","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "親海公園無料駐車場 約120台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "レストラン・大型トイレ・自販機完備。"
    },
    tips: "足元に安全柵があり、ファミリーでも安心。初夏〜秋はサビキでアジが鈴なりになり、秋の夕マズメからはワインドやテンヤでタチウオが連発します。"
  },
  {
    id: "kyoto-kotobikihama-surf",
    name: "京都 丹後 鳴き砂 琴引浜・八丁浜サーフ",
    kana: "きょうと・たんご・ことびきはま・はっちょうはまさーふ",
    region: "kansai",
    prefecture: "京都府",
    address: "京都府京丹後市網野町掛津・浅茂川",
    lat: 35.7042,
    lng: 135.0482,
    category: "surf",
    description: "国の天然記念物「鳴き砂」で知られる白砂青松の美しい丹後海岸。透明度抜群の遠浅サーフで、初夏〜秋のシロギス数釣り、ヒラメ、マゴチ、シーバス、サゴシが狙える山陰屈指の名サーフ。",
    accessInfo: "山陰近畿自動車道「京丹後大宮IC」より車で約30分。京都丹後鉄道「網野駅」よりバス約15分。",
    depthRange: "1.5m〜5m",
    bottomType: "鳴き砂（石英細砂）・沖合サンドバー・沈み根",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["シロギス (数釣り)","ヒラメ","マゴチ","シーバス","サゴシ","アオリイカ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","サクラマス"],
      summer: ["シロギス（束釣り）","マゴチ","ヒラメ"],
      autumn: ["座布団ヒラメ","サゴシ","アオリイカ","落ちギス"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["投げ釣り多点仕掛け (3〜6本針)","サーフ用シンキングペンシル (28〜35g)","ジグヘッドワーム (18〜28g)"],
    localRules: ["鳴き砂保全のため禁煙・ゴミ持ち帰り絶対厳守","夏季海水浴場エリアでの釣り自粛","ライフジャケット着用"],
    parkingDetails: {
      capacity: "琴引浜・八丁浜駐車場 約200台（環境保全協力金/夏季有料）",
      fee: "1台 1,000円 (環境保全金)",
      hours: "24時間利用可能",
      notes: "トイレ・温水シャワー完備。"
    },
    tips: "砂地と沈み根のキワにシロギスが群生。3色〜波打ち際をサビくと小気味よいアタリで連掛けに。濁りが入った日はヒラメやシーバスが有望です。"
  },
  {
    id: "osaka-tsumori-kaizuka",
    name: "大阪 泉南 貝塚人工島 プール・沖向きテトラ",
    kana: "おおさか・せんなん・かいづかじんこうとう・ぷーる・てとら",
    region: "kansai",
    prefecture: "大阪府",
    address: "大阪府貝塚市二色の浜産業団地",
    lat: 34.4512,
    lng: 135.3415,
    category: "port",
    description: "大阪湾奥で屈指のショアジギング＆タチウオ聖地。沖向きテトラ帯は潮流が速く、秋にはブリ・メジロ・ハマチ・サゴシのナブラが湧き、内向き「プール」は足場が良くサビキのアジ・イワシ・タチウオで大人気。",
    accessInfo: "阪神高速4号湾岸線「貝塚IC」より車で約5分。南海本線「貝塚駅」よりタクシー約10分。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・大型テトラ・敷石・岸壁",
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
      nightFishingText: "可能 (夜間のタチウオ・アジング)",
      
    },
    targetFish: ["ブリ・メジロ・ハマチ","サゴシ","タチウオ","アジ","イワシ","クロダイ (チヌ)","マダコ"],
    bestSeasons: {
      spring: ["チヌ","ハネ（スズキ）","ガシラ"],
      summer: ["アジ","イワシ","マダコ","タチウオ"],
      autumn: ["青物（ブリ/メジロ/サゴシ）","タチウオ（大回遊）","アオリイカ"],
      winter: ["メバル","ガシラ","寒チヌ"]
    },
    recommendedRigs: ["ショアジギング (30〜60g)","タチウオテンヤ / ドジョウ引き釣り","ワインド","サビキ釣り"],
    localRules: ["沖向きテトラでのライフジャケット・滑り止めシューズ着用必須","路上駐車禁止（無料駐車場利用）","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "貝塚人工島無料駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "簡易トイレあり。"
    },
    tips: "秋の朝マズメは沖向きテトラからメタルジグやセットアッパーをフルキャスト。メジロやサゴシが連続ヒット。夜はプール内でタチウオテンヤが好調。"
  },
  {
    id: "osaka-sennan-tanagawa",
    name: "大阪 泉南 岬町海づり公園 (とっとパーク小島)",
    kana: "おおさか・せんなん・みさきちょう・とっとぱーくこしま",
    region: "kansai",
    prefecture: "大阪府",
    address: "大阪府泉南郡岬町多奈川小島455-1",
    lat: 34.3312,
    lng: 135.1285,
    category: "park",
    description: "関西国際空港土砂積出桟橋跡を利用した海釣り公園。友ヶ島水道に面して水深と急流に恵まれ、ショアからマダイ（70cm超）・青物（ブリ/メジロ）・アオリイカ・大アジ・タチウオ・グレが狙える関西最高峰の釣り桟橋。",
    accessInfo: "阪和自動車道「泉南IC」または第二阪和国道「深日IC」より車で約20分。南海多奈川線「多奈川駅」より岬町コミュニティバス約15分。",
    depthRange: "10m〜25m (激流深海桟橋)",
    bottomType: "砂泥・敷石・橋脚基礎・急流スリット",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 1,500円 / 小人(小中学生) 750円（見学 大人200円/小人100円）",
      isNightFishingAllowed: false,
      
      openingHours: "3〜11月 6:00〜20:00 / 12〜2月 7:00〜18:00（金曜休園）",
    },
    targetFish: ["マダイ (大型)","ブリ・メジロ・ハマチ","アオリイカ","アジ (鬼アジ/尺アジ)","タチウオ","グレ","ウマヅラハギ"],
    bestSeasons: {
      spring: ["乗っ込みマダイ","親アオリイカ","グレ"],
      summer: ["大アジ","イサキ","タチウオ","青物"],
      autumn: ["ブリ・メジロ","マダイ","アオリイカ","タチウオ"],
      winter: ["寒マダイ","寒グレ","大アジ"]
    },
    recommendedRigs: ["カゴ釣り (両軸/スピニング遠投)","ウキフカセ釣り","ノマセ釣り (活きアジ泳がせ)","エギング"],
    localRules: ["入場整理券順の入場（開園前整理券配布）","オモリ号数は潮流に合わせて20〜30号使用推奨","竿は1人1本（予備竿可）"],
    parkingDetails: {
      capacity: "施設専用駐車場 約150台",
      fee: "無料",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・売店・トイレ・自販機・休憩所完備。"
    },
    tips: "友ヶ島水道の激流が桟橋を直撃するため、潮の緩む「潮止まり前後」がマダイや青物の最大の時合。カゴ釣りでオキアミを深ダナに届けるのが鉄則。"
  },
  {
    id: "osaka-senboku-rinsho",
    name: "大阪 泉北 助松埠頭・汐見埠頭砂上げ場",
    kana: "おおさか・せんぼく・すけまつふとう・しおみふとうすなあげば",
    region: "kansai",
    prefecture: "大阪府",
    address: "大阪府泉大津市汐見町・小津島町",
    lat: 34.5215,
    lng: 135.3985,
    category: "port",
    description: "車を横付けして釣りができる大阪湾奥屈指のファミリー＆タチウオポイント。サビキ釣りでアジ・イワシ・サバが手軽に狙えるほか、秋〜冬の夜釣りではタチウオやハネ（スズキ）、チヌが賑わう好岸壁。",
    accessInfo: "阪神高速4号湾岸線「泉大津IC」または「助松IC」より車で約5分。南海本線「泉大津駅」より車で約10分。",
    depthRange: "4m〜8m",
    bottomType: "泥・砂泥・岸壁スリット",
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
      nightFishingText: "可能 (常夜灯あり・夜タチウオ/アジ)",
      
    },
    targetFish: ["タチウオ","アジ","イワシ","サバ","ハネ・スズキ","クロダイ (チヌ)","サッパ"],
    bestSeasons: {
      spring: ["ハネ（エビ撒き釣り）","チヌ"],
      summer: ["アジ","イワシ","サバ","タコ"],
      autumn: ["タチウオ（車横付け数釣り）","アジ","サバ"],
      winter: ["ハネ","チヌ","ガシラ"]
    },
    recommendedRigs: ["タチウオ電気ウキ仕掛け / テンヤ","サビキ釣り","エビ撒き釣り (シラサエビ)","フカセ釣り"],
    localRules: ["港湾荷役・大型トレーラーの作業を絶対に妨げないこと","立ち入り禁止フェンスの遵守","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "岸壁横付け駐車可能（作業エリア除く）",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "簡易トイレあり。"
    },
    tips: "秋のタチウオシーズンは夕方から電気ウキが海一面に並ぶ名所。キビナゴやドジョウを付けたウキ釣りやテンヤ引きで手軽に数釣りが楽しめます。"
  },
  {
    id: "osaka-rinku-surf",
    name: "大阪 泉南 りんくう南浜 マーブルビーチ・男里川河口",
    kana: "おおさか・せんなん・りんくうみなみはま・まーぶるびーち・おのさとがわ",
    region: "kansai",
    prefecture: "大阪府",
    address: "大阪府泉南市りんくう南浜",
    lat: 34.3741,
    lng: 135.2682,
    category: "surf",
    description: "関西国際空港連絡橋を望む白い玉石が敷き詰められたマーブルビーチと男里川河口サーフ。シーバス・チヌ（チニング）・シロギス・ヒラメ・メバル・アオリイカが狙える南大阪屈指のルアーポイント。",
    accessInfo: "阪南スカイラインまたは阪神高速4号湾岸線「泉佐野南IC」より車で約10分。南海本線「岡田浦駅」または「樽井駅」より徒歩約15分。",
    depthRange: "1.5m〜5m",
    bottomType: "白大理石玉石・砂底・河口干潟・沈みテトラ",
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
      nightFishingText: "可能 (夜のチニング・シーバス・メバリング)",
      
    },
    targetFish: ["クロダイ・キビレ (チニング)","シーバス","シロギス","ヒラメ","マゴチ","メバル","アオリイカ"],
    bestSeasons: {
      spring: ["バチ抜けシーバス","メバル","チヌ"],
      summer: ["チニング (トップ/フリーリグ)","シロギス","マゴチ"],
      autumn: ["シーバス","アオリイカ","ヒラメ","チヌ"],
      winter: ["メバル","ガシラ"]
    },
    recommendedRigs: ["チニング専用フリーリグ (5〜10g) / トップウォーターポッパー","ライトショアジギング (20〜30g)","ジグヘッドワーム"],
    localRules: ["遊歩道やビーチ利用者の背後確認","BBQエリア外での直火禁止","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "SENNAN LONG PARK駐車場 約1,000台",
      fee: "有料（1時間無料/以降課金・1日最大あり）",
      hours: "24時間利用可能",
      notes: "大型トイレ・カフェ・温泉施設併設。"
    },
    tips: "男里川河口の干潟やマーブルビーチのブレイクへフリーリグをキャストしズル引き。キビレやクロダイの小気味よいバイトが病みつきになります。"
  },
  {
    id: "hyogo-awaji-rock",
    name: "兵庫 淡路島 江埼灯台下・野島断崖地磯",
    kana: "ひょうご・あわじしま・えさきとうだいした・のじまだんがいじいそ",
    region: "kansai",
    prefecture: "兵庫県",
    address: "兵庫県淡路市野島江川",
    lat: 34.5982,
    lng: 134.9841,
    category: "rock",
    description: "明石海峡の最大流速・潮流を間近に臨む淡路島北端の超一級地磯。激流が沈み根に当たるポイントで、ハマチ・メジロ・ブリ、アオリイカ、大型グレ、マダイ、ヒラスズキが狙えるロックショア激戦区。",
    accessInfo: "神戸淡路鳴門自動車道「淡路IC」より車で約10分。江埼灯台下遊歩道よりエントリー。",
    depthRange: "5m〜18m (明石海峡激流)",
    bottomType: "岩盤・沈み根・スリット・激流海溝",
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
      nightFishingText: "夜釣り可能（急流・足元に厳重警戒）",
      
    },
    targetFish: ["ハマチ・メジロ・ブリ","アオリイカ","メジナ (グレ)","マダイ","ヒラスズキ","タチウオ"],
    bestSeasons: {
      spring: ["親アオリイカ","乗っ込みマダイ","メジナ"],
      summer: ["青物（ハマチ）","アジ","タチウオ"],
      autumn: ["ブリ・メジロ","アオリイカ","タチウオ","グレ"],
      winter: ["寒グレ","ヒラスズキ"]
    },
    recommendedRigs: ["ショアジギング (40〜80g)","エギング (3.5号)","ウキフカセ釣り","ミノー / シンペン"],
    localRules: ["フェルトスパイク・ライフジャケット完全着用必須","急流による流され注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "江埼灯台駐車場 約15台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "明石海峡の潮が緩む一瞬のタイミングでメタルジグを投入。激流で鍛えられた丸々と太ったメジロやブリが強烈に竿を絞り込みます。"
  },
  {
    id: "hyogo-himeji-port",
    name: "兵庫 姫路 家島諸島・妻鹿漁港（白灯台・坊勢）",
    kana: "ひょうご・ひめじ・いえしましょとう・めがぎょこう",
    region: "kansai",
    prefecture: "兵庫県",
    address: "兵庫県姫路市白浜町・飾磨区妻鹿",
    lat: 34.7785,
    lng: 134.6845,
    category: "port",
    description: "播磨灘に面した姫路港・妻鹿漁港周辺エリア。温排水や家島諸島への連絡船航路が絡み、チヌ（フカセ/落とし込み）・タチウオ・アジ・アオリイカ・シーバス・青物が一年中狙える播州屈指の好漁場。",
    accessInfo: "姫路バイパス「市川ランプ」より車で約10分。山陽電鉄「妻鹿駅」または「白浜の宮駅」より車で約5分。",
    depthRange: "4m〜10m",
    bottomType: "砂泥・捨石・テトラ・岸壁",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜タチウオ)",
      
    },
    targetFish: ["クロダイ (チヌ)","タチウオ","アジ","アオリイカ","シーバス (ハネ)","青物（ハマチ/サゴシ）","マダコ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ (50cmUP)","ハネ","メバル"],
      summer: ["アジ","マダコ","タチウオ"],
      autumn: ["タチウオ（爆釣期）","ハマチ","サゴシ","アオリイカ"],
      winter: ["寒チヌ","メバル","ガシラ"]
    },
    recommendedRigs: ["フカセ釣り (棒ウキ/円錐ウキ)","タチウオテンヤ / ワインド","サビキ釣り","落とし込み仕掛け"],
    localRules: ["立ち入り禁止区域の厳守","撒き餌汚れの洗い流し","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "妻鹿漁港・白浜海岸周辺 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "フカセ釣りのチヌは全国屈指の実績場。秋は夕マズメからワインドやテンヤでタチウオの数釣りが楽しめます。"
  },
  {
    id: "hyogo-kasumi-surf",
    name: "兵庫 日本海 香住 今子浦・香住浜サーフ",
    kana: "ひょうご・にほんかい・かすみ・いまごうら・かすみはまさーふ",
    region: "kansai",
    prefecture: "兵庫県",
    address: "兵庫県美方郡香美町香住区境・一日市",
    lat: 35.6441,
    lng: 134.6241,
    category: "surf",
    description: "山陰海岸ジオパークの中心地・香住海岸の美サーフ。入り江状の今子浦「かえる島」周辺や香住浜は波が穏やかで、シロギスの数釣り、ヒラメ、マゴチ、アオリイカ、スズキが狙える名所。",
    accessInfo: "北近畿豊岡自動車道「日高神鍋高原IC」より車で約45分。JR山陰本線「香住駅」より車で約5分。",
    depthRange: "1.5m〜6m",
    bottomType: "細砂・沈み根・小磯・海藻帯",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["シロギス","ヒラメ","マゴチ","アオリイカ","シーバス","キジハタ","クロダイ"],
    bestSeasons: {
      spring: ["シロギス","クロダイ","メバル"],
      summer: ["シロギス（束釣り）","マゴチ","キジハタ"],
      autumn: ["アオリイカ","ヒラメ","サゴシ","落ちギス"],
      winter: ["寒ヒラメ","カレイ"]
    },
    recommendedRigs: ["ライト投げ釣り仕掛け","エギング (2.5〜3.5号)","ジグヘッドワーム (14〜21g)"],
    localRules: ["かえる島周辺の景観保全","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "今子浦・香住浜駐車場 約120台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "公衆トイレ・キャンプ場完備。"
    },
    tips: "岩場と砂浜の境目をエギで通すとアオリイカが好反応。砂浜中央部をチョイ投げでサビけば良型シロギスが手軽に釣れます。"
  },
  {
    id: "tottori-iwami-rock",
    name: "鳥取 岩美 浦富海岸・城原海岸地磯",
    kana: "とっとり・いわみ・うらどめかいがん・しらわらかいがんじいそ",
    region: "chugoku",
    prefecture: "鳥取県",
    address: "鳥取県岩美郡岩美町田後・浦富",
    lat: 35.5982,
    lng: 134.3041,
    category: "rock",
    description: "山陰海岸ジオパークを代表する日本屈指の透明度を誇るリアス岩礁帯。洞門や奇岩が連なり、ヒラマサ・アオリイカ・キジハタ（アコウ）・グレ・マダイが狙える山陰屈指の景勝ロックショア。",
    accessInfo: "山陰道「鳥取IC」より国道9号経由で約30分。JR山陰本線「岩美駅」よりバス約15分。",
    depthRange: "4m〜16m",
    bottomType: "花崗岩岩盤・スリット・海溝・透明海藻帯",
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
      nightFishingText: "夜釣り可能（足元に十分注意）",
      
    },
    targetFish: ["ヒラマサ","アオリイカ","キジハタ","メジナ (グレ)","マダイ","ヒラスズキ","イサキ"],
    bestSeasons: {
      spring: ["親アオリイカ","ヒラマサ","乗っ込みマダイ"],
      summer: ["キジハタ","イサキ","アジ"],
      autumn: ["アオリイカ（爆釣）","秋ヒラマサ","グレ"],
      winter: ["寒グレ","ヒラスズキ"]
    },
    recommendedRigs: ["エギング (3.0〜3.5号)","ロックショアジギング (40〜80g)","テキサスリグ (14〜28g)","ウキフカセ釣り"],
    localRules: ["遊歩道や景勝地への配慮","フェルトスパイク・ライフジャケット着用必須","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "城原海岸・浦富海岸駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・展望台完備。"
    },
    tips: "驚異的な透明度のため、アオリイカやキジハタが底から浮いてバイトする瞬間が見られます。荒れ気味の日はサラシでヒラスズキも一級品。"
  },
  {
    id: "tottori-akasaki-port",
    name: "鳥取 琴浦 赤碕港・菊港波止",
    kana: "とっとり・ことうら・あかさきこう・きくこうはと",
    region: "chugoku",
    prefecture: "鳥取県",
    address: "鳥取県東伯郡琴浦町赤碕",
    lat: 35.5285,
    lng: 133.6745,
    category: "port",
    description: "大山を背に日本海へ突き出た中部の名港。外防波堤は潮通しが良く水深があり、アオリイカ・サゴシ・アジ・クロダイ・キジハタ・ヒラメ・シロギスが狙える山陰のメジャーポイント。",
    accessInfo: "山陰道「琴浦船上山IC」より車で約5分。JR山陰本線「赤碕駅」より車で約5分。",
    depthRange: "4m〜11m",
    bottomType: "砂泥・捨石・テトラ・基礎ブロック",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜フカセ)",
      
    },
    targetFish: ["アオリイカ","サゴシ","アジ","クロダイ (チヌ)","キジハタ","ヒラメ","シロギス"],
    bestSeasons: {
      spring: ["クロダイ","シロギス","メバル"],
      summer: ["アジ","キジハタ","シロギス"],
      autumn: ["アオリイカ（数釣り）","サゴシ","アジ","ヒラメ"],
      winter: ["ヤリイカ","寒チヌ","カサゴ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)","ショアジギング (30〜45g)","サビキ釣り","ジグ単アジング"],
    localRules: ["漁協作業エリアでの荷役邪魔禁止","スミ跡の洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "赤碕港内・道の駅ポート赤碕周辺 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "道の駅・トイレ・海鮮市場隣接。"
    },
    tips: "道の駅ポート赤碕に隣接しアクセス抜群。秋は外防波堤からメタルジグを投げるとサゴシのナブラ撃ちやエギングのアオリイカが楽しめます。"
  },
  {
    id: "tottori-kaike-surf",
    name: "鳥取 米子 皆生海岸サーフ・日野川河口",
    kana: "とっとり・よなご・かいけかいがんさーふ・ひのがわかこう",
    region: "chugoku",
    prefecture: "鳥取県",
    address: "鳥取県米子市皆生温泉・車尾",
    lat: 35.4541,
    lng: 133.3541,
    category: "surf",
    description: "大山を望む皆生温泉街の前面に広がる砂浜と名川・日野川の河口サーフ。日野川からの豊かなベイトと離岸堤のヨブが絡み、座布団ヒラメ、マゴチ、ランカーシーバス、サゴシ、シロギスの大人気ポイント。",
    accessInfo: "米子自動車道「米子IC」より車で約10分。JR山陰本線「米子駅」よりバス約20分。",
    depthRange: "1.5m〜6m",
    bottomType: "細砂・河口サンドバー・離岸堤テトラ・カケアガリ",
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
      nightFishingText: "可能 (夜間のシーバス・フラットフィッシュ)",
      
    },
    targetFish: ["ヒラメ","マゴチ","シーバス","サゴシ","シロギス","クロダイ"],
    bestSeasons: {
      spring: ["シーバス","シロギス","サクラマス"],
      summer: ["マゴチ","シロギス（数釣り）","ヒラメ"],
      autumn: ["落ちアユシーバス (ランカー)","座布団ヒラメ","サゴシ"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["サーフ用ミノー / シンキングペンシル (120〜140mm)","ジグヘッドワーム (21〜28g)","メタルジグ (30〜40g)"],
    localRules: ["温泉街遊歩道利用者の背後確認","離岸堤周辺の急な深み・流れに注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "皆生海浜公園駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "温泉施設・足湯・公衆トイレ完備。"
    },
    tips: "秋の日野川落ちアユシーズンは全国屈指のランカーシーバスポイント。河口の払い出しへミノーを流し込むと80cm超が強烈バイト。"
  },
  {
    id: "shimane-oki-rock",
    name: "島根 隠岐諸島 島後 国賀海岸・白島崎地磯",
    kana: "しまね・おきしょとう・どうご・くにがかいがん・しらしまざきじいそ",
    region: "chugoku",
    prefecture: "島根県",
    address: "島根県隠岐郡隠岐の島町西村・中村",
    lat: 36.3142,
    lng: 133.3182,
    category: "rock",
    description: "ユネスコ世界ジオパークに認定された絶海の孤島・隠岐諸島。対馬暖流が直撃する絶壁地磯で、10kg超のオオマサ（ヒラマサ）・巨大クエ・ロクマル尾長グレ・イシダイ・マダイが狙える日本最高峰の磯釣り聖地。",
    accessInfo: "西郷港より車で約40分。白島展望台または国賀海岸遊歩道よりアプローチ。",
    depthRange: "8m〜35m (超急深外洋断崖)",
    bottomType: "玄武岩大岩礁・スリット・海溝・ドロップオフ",
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
      nightFishingText: "夜釣り可能（夜のクエ・タマン・イサキ狙い）",
      
    },
    targetFish: ["ヒラマサ (10kgUP)","クエ (モロコ)","尾長グレ (60cmUP)","イシダイ","マダイ","アオリイカ","キジハタ"],
    bestSeasons: {
      spring: ["春マサ (オオマサ)","乗っ込みマダイ","親アオリイカ"],
      summer: ["クエ","イシダイ","キジハタ","イサキ"],
      autumn: ["秋ヒラマサ","大型尾長グレ","アオリイカ"],
      winter: ["寒グレ（ロクマル）","寒マダイ"]
    },
    recommendedRigs: ["ヘビーロックショアジギング (80〜150g)","ショアプラッギング (ダイビングペンシル 190〜230mm)","クエぶっこみ仕掛け (ワイヤーハリス + サバ1匹掛け)"],
    localRules: ["フェルトスパイク・固型式ライフジャケット完全着用必須","荷物は背負子で運搬し単独釣行自粛","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "白島展望台駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "激流の潮目を大型ダイビングペンシルでロングダイブさせると、水面を大きく割って10kgオーバーのヒラマサが突進してきます。"
  },
  {
    id: "shimane-taisha-port",
    name: "島根 出雲 大社港・稲佐の浜",
    kana: "しまね・いずも・たいしゃこう・いなさのはま",
    region: "chugoku",
    prefecture: "島根県",
    address: "島根県出雲市大社町杵築北",
    lat: 35.4045,
    lng: 132.6745,
    category: "port",
    description: "出雲大社のお膝元・神話の舞台「稲佐の浜」に隣接する大社築港。潮通しが良く、秋〜冬のアオリイカ・ヒラマサ・サゴシ・アジ・シロギス・ヒラメ・スズキが狙える出雲エリア屈指の人気釣り場。",
    accessInfo: "山陰道「出雲IC」より車で約15分。一畑電車「出雲大社前駅」より車で約5分。",
    depthRange: "3m〜10m",
    bottomType: "砂泥・捨石・テトラ・基礎スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤリイカ)",
      
    },
    targetFish: ["アオリイカ","ヒラマサ","サゴシ","シロギス","ヒラメ","アジ","シーバス"],
    bestSeasons: {
      spring: ["親アオリイカ","シロギス","シーバス"],
      summer: ["アジ","シロギス","キジハタ"],
      autumn: ["アオリイカ（数釣り）","ヒラマサ","サゴシ","ヒラメ"],
      winter: ["ヤリイカ","寒ヒラメ","クロソイ"]
    },
    recommendedRigs: ["エギング (3.0〜3.5号)","ショアジギング (30〜60g)","サビキ釣り","投げ釣り仕掛け"],
    localRules: ["神仏・鳥居周辺への立ち入り・駐車マナー遵守","スミ跡の洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "稲佐の浜・大社港駐車場 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "稲佐の浜サーフからは初夏〜秋に良型シロギスやヒラメ、港の赤灯台堤防からは秋にアオリイカやサゴシ、ヒラマサが狙えます。"
  },
  {
    id: "shimane-kirara-surf",
    name: "島根 出雲 キララ多伎海岸サーフ",
    kana: "しまね・いずも・きららたきかいがんさーふ",
    region: "chugoku",
    prefecture: "島根県",
    address: "島根県出雲市多伎町多岐",
    lat: 35.2941,
    lng: 132.5841,
    category: "surf",
    description: "道の駅キララ多伎の目前に広がる夕日の名所サーフ。コバルトブルーの日本海と遠浅の美しい砂浜で、初夏〜晩秋のシロギス数釣り、ヒラメ、マゴチ、シーバス、サゴシが狙える山陰屈指のサーフ。",
    accessInfo: "山陰道「出雲多伎IC」より車で約5分。JR山陰本線「小田駅」より徒歩約10分。",
    depthRange: "1.5m〜5m",
    bottomType: "細砂・沈みテトラ・サンドバー",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["シロギス","ヒラメ","マゴチ","シーバス","サゴシ","クロダイ"],
    bestSeasons: {
      spring: ["シロギス","シーバス"],
      summer: ["シロギス（数釣り）","マゴチ","ヒラメ"],
      autumn: ["座布団ヒラメ","サゴシ","落ちギス","シーバス"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["ライト投げ釣り仕掛け (2〜3本針)","ジグヘッドワーム (14〜28g)","メタルジグ (30g)"],
    localRules: ["海水浴期間中の遊泳エリアでの釣り自粛","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "道の駅 キララ多伎駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・レストラン・温泉隣接。"
    },
    tips: "道の駅に直結し足場抜群。波打ち際から2色（50m）付近をサビくと小気味よいアタリで良型キスが連発します。"
  },
  {
    id: "okayama-ushimado-port",
    name: "岡山 瀬戸内 牛窓港・前島波止",
    kana: "おかやま・せとうち・うしまどこう・まえじまはと",
    region: "chugoku",
    prefecture: "岡山県",
    address: "岡山県瀬戸内市牛窓町牛窓",
    lat: 34.6145,
    lng: 134.1645,
    category: "port",
    description: "「日本のエーゲ海」と呼ばれる温暖な景勝地。牛窓港の波止やフェリーで渡る前島の波止から、チヌ（フカセ/落とし込み）・ママカリ（サッパ）・メバル・アオリイカ・タチウオ・アジが狙える名港。",
    accessInfo: "岡山ブルーライン「邑久IC」または「牛窓IC」より車で約15分。JR赤穂線「邑久駅」よりバス約20分。",
    depthRange: "3m〜9m",
    bottomType: "砂泥・敷石・スリット護岸・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・メバリング)",
      
    },
    targetFish: ["クロダイ (チヌ)","ママカリ (サッパ)","メバル","アオリイカ","タチウオ","イイダコ","アジ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ","メバル","コウイカ"],
      summer: ["ママカリ（サビキ）","マダコ","チヌ"],
      autumn: ["アオリイカ","タチウオ","イイダコ","アジ"],
      winter: ["メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["ウキフカセ釣り / 渚釣り","ママカリ専用サビキ仕掛け","エギング (2.5〜3.5号)","イイダコテンヤ / スッテ"],
    localRules: ["フェリー発着所周辺へのキャスト禁止","スミ跡・コマセ汚れの洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "牛窓フェリー乗り場・港内駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "岡山名物ママカリは専用サビキで足元を上下させるだけで鈴なりに。秋は前島周辺でアオリイカやイイダコが有望。"
  },
  {
    id: "okayama-shibukawa-surf",
    name: "岡山 玉野 渋川海岸サーフ",
    kana: "おかやま・たまの・しぶかわかいがんさーふ",
    region: "chugoku",
    prefecture: "岡山県",
    address: "岡山県玉野市渋川",
    lat: 34.4541,
    lng: 133.9082,
    category: "surf",
    description: "白砂青松の海岸線が約1km続く岡山県下最大の海水浴場サーフ。瀬戸内海の穏やかな遠浅砂浜で、シロギス、チヌ（渚釣り）、ヒラメ、マゴチ、シーバス、イイダコが手軽に狙える人気ポイント。",
    accessInfo: "瀬戸中央自動車道「児島IC」より車で約20分。JR宇野線「宇野駅」よりバス約25分。",
    depthRange: "1m〜4m",
    bottomType: "白細砂・アマモ場・沖合サンドバー",
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
      nightFishingText: "可能 (夜間の渚チヌ・シーバス)",
      
    },
    targetFish: ["シロギス","クロダイ (チヌ渚釣り)","ヒラメ","マゴチ","イイダコ","シーバス"],
    bestSeasons: {
      spring: ["チヌ（渚フカセ）","シロギス","シーバス"],
      summer: ["シロギス（数釣り）","マゴチ","ギザミ（キュウセン）"],
      autumn: ["イイダコ","ヒラメ","落ちギス","チヌ"],
      winter: ["カレイ","アイナメ"]
    },
    recommendedRigs: ["ライト投げ釣り仕掛け","渚釣りフカセ仕掛け (大チヌ)","イイダコらっきょう仕掛け / スッテ"],
    localRules: ["海水浴期間中の釣り自粛","水族館・ホテル周辺への配慮","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "渋川観光駐車場 約900台（有料・1日1,000円/他無料）",
      fee: "有料/無料時期あり",
      hours: "24時間利用可能",
      notes: "大型トイレ・渋川マリン水族館隣接。"
    },
    tips: "砂浜から波打ち際にマキエを撒いて狙う「チヌの渚釣り」が有名。遠浅の砂浜に警戒心の薄れた良型チヌが寄ってきます。"
  },
  {
    id: "okayama-hinase-rock",
    name: "岡山 備前 日生諸島・頭島地磯",
    kana: "おかやま・びぜん・ひなせしょとう・かしらじまじいそ",
    region: "chugoku",
    prefecture: "岡山県",
    address: "岡山県備前市日生町頭島",
    lat: 34.7042,
    lng: 134.2841,
    category: "rock",
    description: "備前♡日生大橋で本土と陸続きになった日生諸島の頭島・鹿久居島の地磯。カキ養殖筏が広がる栄養豊富な海で、チヌ（年無し連発）、マダコ、メバル、アイナメ、シーバスが狙える好磯場。",
    accessInfo: "山陽自動車道「赤穂IC」より車で約25分。JR赤穂線「日生駅」より車で約10分。",
    depthRange: "3m〜9m",
    bottomType: "岩盤・砂泥・カキ殻帯・敷石",
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
      nightFishingText: "夜釣り可能（メバリング・夜チヌ）",
      
    },
    targetFish: ["クロダイ (チヌ)","マダコ","メバル","アイナメ","シーバス","アジ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ (カキ筏周り)","メバル","アイナメ"],
      summer: ["マダコ","チヌ (落とし込み)","アジ"],
      autumn: ["アオリイカ","チヌ","タチウオ"],
      winter: ["メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["ウキフカセ釣り","タコエギ / テンヤ","ジグ単メバリング (1.0〜2.0g)"],
    localRules: ["カキ養殖筏・作業船へのキャスト厳禁","橋上からの釣り禁止","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "頭島港・たぬき山展望台駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "カキ殻が堆積した岩礁周りはチヌの絶好のエサ場。オキアミやコーンを使ったフカセ釣りで50cm超の年無しチヌが高確率でヒットします。"
  },
  {
    id: "okayama-kojima-port",
    name: "岡山 倉敷 児島 下津井港・田之浦",
    kana: "おかやま・くらしき・こじま・しもついこう・たのうら",
    region: "chugoku",
    prefecture: "岡山県",
    address: "岡山県倉敷市下津井田之浦",
    lat: 34.4385,
    lng: 133.7985,
    category: "port",
    description: "瀬戸大橋の真下に位置する下津井瀬戸の激流港。名物「下津井タコ」をはじめ、ショアからのマダイ（ショア真鯛）、アコウ（キジハタ）、アジ、メバル、タチウオ、チヌが狙える全国的有名ポイント。",
    accessInfo: "瀬戸中央自動車道「児島IC」より車で約8分。JR瀬戸大橋線「児島駅」よりバス約15分。",
    depthRange: "5m〜15m (下津井激流瀬戸)",
    bottomType: "砂泥・岩礁・基礎捨石・急流スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・メバリング・夜マダイ)",
      
    },
    targetFish: ["マダコ (下津井名物)","マダイ (ショア真鯛)","アコウ (キジハタ)","アジ","メバル","タチウオ","チヌ"],
    bestSeasons: {
      spring: ["ショア真鯛","メバル","乗っ込みチヌ"],
      summer: ["マダコ（爆釣期）","アコウ","アジ"],
      autumn: ["マダイ","タチウオ","アコウ","アオリイカ"],
      winter: ["メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["タコエギ / タコテンヤ","タイラバ (ショアラバ 30〜60g)","テキサスリグ (アコウ)","ジグ単アジング"],
    localRules: ["遊覧船・漁船航路へのキャスト禁止","激流時のオモリ流され注意","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "下津井港・田之浦緑地駐車場 約60台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "潮の速い下津井瀬戸では潮が緩むタイミングが最大のチャンス。タコエギで足元や敷石を探れば身の引き締まった絶品マダコが狙えます。"
  },
  {
    id: "tokushima-komatsushima-surf",
    name: "徳島 小松島 和田島サーフ・大手海岸",
    kana: "とくしま・こまつしま・わだじまさーふ・おおてかいがん",
    region: "shikoku",
    prefecture: "徳島県",
    address: "徳島県小松島市和田島町・大手",
    lat: 33.9841,
    lng: 134.6441,
    category: "surf",
    description: "紀伊水道と勝浦川・那賀川の河口流がぶつかる徳島屈指のメジャーサーフ。座布団ヒラメ、マゴチ、青物（ハマチ/サゴシ）、タチウオ、シロギスが狙える広大な砂浜ポイント。",
    accessInfo: "徳島南部自動車道「徳島津田IC」より車で約20分。JR牟岐線「阿波赤石駅」より車で約10分。",
    depthRange: "1.5m〜6m",
    bottomType: "細砂・サンドバー・河口カケアガリ",
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
      nightFishingText: "可能 (夜間のタチウオ・シーバス・ヒラメ)",
      
    },
    targetFish: ["ヒラメ","マゴチ","ハマチ・サゴシ","タチウオ","シロギス","シーバス"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["マゴチ","シロギス（数釣り）","タチウオ"],
      autumn: ["座布団ヒラメ","ハマチ","サゴシ","タチウオ"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30〜40g)","ジグヘッドワーム (21〜28g)","メタルジグ (30〜40g)","投げ釣り仕掛け"],
    localRules: ["ウェーダー・ライフジャケット着用必須","離岸流（引き波）への注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "和田島緑地・大手海岸駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "沖のブレイクライン（白波の手前）にジグヘッドワームをキャストし、ボトムバンプ。初夏のマゴチや秋〜冬の座布団ヒラメが直撃します。"
  },
  {
    id: "tokushima-mugi-rock",
    name: "徳島 県南 牟岐・日和佐大浜海岸地磯",
    kana: "とくしま・けんなん・むぎ・ひわさおおはまかいがんじいそ",
    region: "shikoku",
    prefecture: "徳島県",
    address: "徳島県海部郡牟岐町・美波町日和佐浦",
    lat: 33.7282,
    lng: 134.5482,
    category: "rock",
    description: "黒潮が直接洗う四国東南端のダイナミックな太平洋荒磯。尾長グレ・口太グレの魚影が濃く、ヒラスズキ・イシダイ・アオリイカ・シブダイ・カンパチが狙える磯釣りの超激戦区。",
    accessInfo: "日和佐道路「日和佐出入口」より車で約15分。JR牟岐線「牟岐駅」または「日和佐駅」より車で約10分。",
    depthRange: "6m〜20m (黒潮外洋荒磯)",
    bottomType: "大岩礁・スリット・海溝・サラシ帯",
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
      nightFishingText: "夜釣り可能（夜のシブダイ・タマン・イサキ）",
      
    },
    targetFish: ["尾長グレ・口太グレ","ヒラスズキ","イシダイ","アオリイカ","シブダイ (白点)","カンパチ (シオ)"],
    bestSeasons: {
      spring: ["親アオリイカ","ヒラスズキ","乗っ込みグレ"],
      summer: ["シブダイ（夜釣り）","イシダイ","イサキ"],
      autumn: ["アオリイカ","グレ","青物（カンパチ/ハマチ）"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ釣り (円錐ウキ0〜3B)","ヒラスズキ専用ミノー (120〜140mm)","イシダイぶっこみ仕掛け","エギング (3.5号)"],
    localRules: ["フェルトスパイクシューズ・固型式ライジャケ完全着用","ウミガメ産卵地（大浜）の保護ルール遵守","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "大浜海岸・牟岐港周辺駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "うみがめ博物館・トイレ完備。"
    },
    tips: "サラシが広がるタイミングで磯際へヒラスズキミノーを流し込むと一撃でヒット。ウキフカセでは本流筋に仕掛けを流して大型尾長グレを狙います。"
  },
  {
    id: "tokushima-yuki-port",
    name: "徳島 阿南 由岐港・伊島渡船基地",
    kana: "とくしま・あなん・ゆきこう・いしまとせんきち",
    region: "shikoku",
    prefecture: "徳島県",
    address: "徳島県海部郡美波町由岐・木岐",
    lat: 33.7745,
    lng: 134.5985,
    category: "port",
    description: "伊島への渡船基地としても知られる県南の天然良港。潮通しが良く水深があり、アオリイカ（ヤエン/エギング）、アジ、マダイ、タチウオ、青物、グレ、カワハギが狙える屈指の名港。",
    accessInfo: "国道55号経由で徳島市街地より車で約1時間。JR牟岐線「由岐駅」より徒歩約8分。",
    depthRange: "5m〜14m",
    bottomType: "砂泥・捨石・テトラ・岸壁スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤエン・タチウオ)",
      
    },
    targetFish: ["アオリイカ (大型実績)","アジ","マダイ","タチウオ","ハマチ","グレ","カワハギ"],
    bestSeasons: {
      spring: ["キロアップ親アオリイカ","マダイ","アジ"],
      summer: ["アジ","タチウオ","青物"],
      autumn: ["アオリイカ（数釣り）","タチウオ","ハマチ","カワハギ"],
      winter: ["大型アオリイカ","メバル","グレ"]
    },
    recommendedRigs: ["エギング (3.0〜3.5号)","ヤエン仕掛け / ウキ泳がせ","サビキ釣り","ショアジギング (30〜45g)"],
    localRules: ["漁協・渡船桟橋エリアへの無断駐車禁止","スミ跡の洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "由岐港内駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "春と秋のエギング・ヤエン釣りは全国区の実績。白灯台先端からは潮目を回遊するハマチやタチウオ、アジがサビキやジグで手堅く釣れます。"
  },
  {
    id: "tokushima-naruto-tsurishi",
    name: "徳島 鳴門 鳴門海づり公園（亀浦）",
    kana: "とくしま・なると・なるとうみづりこうえん・かめうら",
    region: "shikoku",
    prefecture: "徳島県",
    address: "徳島県鳴門市鳴門町土佐泊浦大毛16",
    lat: 34.2345,
    lng: 134.6185,
    category: "park",
    description: "鳴門海峡の激流が育む名魚「鳴門鯛」の海に浮かぶ管理海釣り公園。安全柵完備のイカダ・浮桟橋から、マダイ・ハマチ・アオリイカ・ウマヅラハギ・アジ・サバ・チヌがファミリーから本格派まで楽しめる。",
    accessInfo: "神戸淡路鳴門自動車道「鳴門北IC」より車で約5分。JR鳴門線「鳴門駅」より車で約15分。",
    depthRange: "6m〜15m (鳴門海峡激流)",
    bottomType: "砂泥・捨石・イカダ周辺基礎",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 1,650円 / 小人 820円（見学 大人200円/小人100円）",
      isNightFishingAllowed: false,
      
      openingHours: "4〜11月 6:00〜17:00 / 12〜3月 7:00〜16:30（荒天休園）",
    },
    targetFish: ["マダイ (鳴門鯛)","ハマチ","アオリイカ","ウマヅラハギ","アジ","サバ","クロダイ (チヌ)"],
    bestSeasons: {
      spring: ["鳴門桜鯛（マダイ）","親アオリイカ","チヌ"],
      summer: ["アジ","サバ","ハマチ"],
      autumn: ["マダイ","ハマチ","アオリイカ","ウマヅラハギ"],
      winter: ["寒マダイ","ウマヅラハギ","メバル"]
    },
    recommendedRigs: ["ウキフカセ釣り / カゴ釣り","サビキ釣り","胴突きハゲ仕掛け (ウマヅラハギ)","ノマセ釣り (活きアジ)"],
    localRules: ["ライフジャケット着用必須（無料貸出あり）","撒き餌・仕掛けのルール厳守","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "亀浦観光港駐車場 約100台",
      fee: "無料",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・売店・トイレ・自販機完備。"
    },
    tips: "鳴門海峡特有の潮流に合わせてオモリの号数を調整。潮が緩んだタイミングでオキアミを同調させると、激流で引き締まった絶品マダイが強烈にヒット。"
  },
  {
    id: "kagawa-shodoshima-rock",
    name: "香川 小豆島 寒霞渓下・福田地磯",
    kana: "かがわ・しょうどしま・かんかけいした・ふくだじいそ",
    region: "shikoku",
    prefecture: "香川県",
    address: "香川県小豆郡小豆島町福田・吉田",
    lat: 34.5341,
    lng: 134.3341,
    category: "rock",
    description: "播磨灘に浮かぶ小豆島東岸のダイナミックな花崗岩地磯。潮流が速く岩礁スリットが発達し、アコウ（キジハタ 40cm超）、ショア真鯛、チヌ、アオリイカ、メバル、青物が狙える瀬戸内海の超一級ロックショア。",
    accessInfo: "姫路港・高松港よりフェリーで福田港へ（フェリー約1時間）。福田港より車で約5分。",
    depthRange: "4m〜14m",
    bottomType: "花崗岩岩盤・スリット・沈み根・海藻帯",
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
      nightFishingText: "夜釣り可能（夜のアコウ・メバリング）",
      
    },
    targetFish: ["アコウ (キジハタ)","マダイ (ショア真鯛)","クロダイ (チヌ)","アオリイカ","メバル","青物（ハマチ）"],
    bestSeasons: {
      spring: ["ショア真鯛","乗っ込みチヌ","メバル"],
      summer: ["アコウ（最盛期）","アジ","チヌ"],
      autumn: ["アオリイカ","アコウ","ハマチ","マダイ"],
      winter: ["尺メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["テキサスリグ / フリーリグ (14〜28g)","ショアラバ (30〜60g)","エギング (3.0〜3.5号)","プラグメバリング"],
    localRules: ["フェルトスパイク・ライフジャケット着用必須","フェリー発着所周辺の注意","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "福田港・吉田ふれあい広場駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "岩盤の隙間や海溝へフリーリグを送り込み、丁寧なボトムバンプ。夕マズメには40cm級のアコウやマダイが連発します。"
  },
  {
    id: "kagawa-marugame-port",
    name: "香川 丸亀 丸亀港・蓬莱緑地護岸",
    kana: "かがわ・まるがめ・まるがめこう・ほうらいりょくちごがん",
    region: "shikoku",
    prefecture: "香川県",
    address: "香川県丸亀市蓬莱町・港町",
    lat: 34.3045,
    lng: 133.7985,
    category: "port",
    description: "丸亀城を望む中讃の中心港。蓬莱緑地の整備された護岸や波止から、タチウオ・アジ・チヌ・ママカリ・コウイカ・イイダコ・シーバスが狙える足場の良い人気釣り場。",
    accessInfo: "高松自動車道「坂出IC」または「丸亀飯山IC」より車で約15分。JR予讃線「丸亀駅」より車で約5分。",
    depthRange: "4m〜9m",
    bottomType: "砂泥・敷石・岸壁スリット",
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
      nightFishingText: "可能 (常夜灯あり・夜タチウオ/アジ)",
      
    },
    targetFish: ["タチウオ","アジ","クロダイ (チヌ)","ママカリ","コウイカ","イイダコ","シーバス"],
    bestSeasons: {
      spring: ["チヌ","コウイカ","シーバス"],
      summer: ["アジ","ママカリ","タコ"],
      autumn: ["タチウオ（爆釣）","アジ","イイダコ","チヌ"],
      winter: ["メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["タチウオテンヤ / ワインド","サビキ釣り","フカセ釣り","イイダコテンヤ"],
    localRules: ["フェリー航路へのキャスト禁止","緑地公園利用者の歩行安全確保","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "蓬莱緑地公園駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・緑地遊歩道完備。"
    },
    tips: "秋のタチウオシーズンは夕マズメからワインドやテンヤで大フィーバー。足場が平坦で安全柵もあり、家族連れにも安心です。"
  },
  {
    id: "kagawa-chichibugahama-surf",
    name: "香川 三豊 父母ヶ浜・仁尾サーフ",
    kana: "かがわ・みとよ・ちちぶがはま・におさーふ",
    region: "shikoku",
    prefecture: "香川県",
    address: "香川県三豊市仁尾町仁尾乙",
    lat: 34.1841,
    lng: 133.6482,
    category: "surf",
    description: "「日本のウユニ塩湖」と称される遠浅の絶景干潟・砂浜サーフ。干満差の大きな瀬戸内海の砂浜で、シロギス（数釣り）、マゴチ、ヒラメ、チヌ（渚釣り）、シーバスが狙える風光明媚なポイント。",
    accessInfo: "高松自動車道「さぬき豊中IC」または「三豊鳥坂IC」より車で約20分。JR予讃線「詫間駅」よりバス約20分。",
    depthRange: "1m〜4m (広大遠浅干潟サーフ)",
    bottomType: "細砂・アマモ場・潮だまり・サンドバー",
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
      nightFishingText: "可能 (夜間のシーバス・渚チヌ)",
      
    },
    targetFish: ["シロギス (数釣り)","マゴチ","クロダイ (チヌ渚釣り)","ヒラメ","シーバス"],
    bestSeasons: {
      spring: ["シロギス","チヌ","シーバス"],
      summer: ["シロギス（爆釣）","マゴチ","ギザミ"],
      autumn: ["ヒラメ","落ちギス","シーバス","チヌ"],
      winter: ["カレイ","アイナメ"]
    },
    recommendedRigs: ["ライト投げ釣り仕掛け (2〜3本針)","ジグヘッドワーム (14〜21g)","渚フカセ仕掛け"],
    localRules: ["干潮時の観光写真撮影エリアへの配慮","ライフジャケット着用","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "父母ヶ浜観光駐車場 約300台（一部有料時期あり）",
      fee: "無料/有料時期あり",
      hours: "24時間利用可能",
      notes: "大型公衆トイレ・カフェ併設。"
    },
    tips: "満潮前後の潮が動くタイミングで沖の深みへキャスト。良型のシロギスが手前の波打ち際まで群れて連掛けになります。"
  },
  {
    id: "kagawa-higashikagawa-port",
    name: "香川 東かがわ 引田安戸池（ソルトレイクひけた）",
    kana: "かがわ・ひがしかがわ・ひけたあんどいけ",
    region: "shikoku",
    prefecture: "香川県",
    address: "香川県東かがわ市引田4373",
    lat: 34.2285,
    lng: 134.4185,
    category: "park",
    description: "世界で初めてハマチ養殖に成功した発祥の地・安戸池の海水管理釣り場・海釣り公園。巨大な海水池と外海波止があり、大型ハマチ・カンパチ・マダイ・チヌ・アジが手軽かつ強烈に楽しめる。",
    accessInfo: "高松自動車道「引田IC」より車で約10分。JR高徳線「引田駅」よりタクシー約5分。",
    depthRange: "4m〜10m",
    bottomType: "砂泥・捨石・護岸",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 1,500〜4,500円（釣り堀コース別・外海波止は無料）",
      isNightFishingAllowed: false,
      
      openingHours: "7:00〜16:00（火曜休園・外海波止は24時間）",
    },
    targetFish: ["ハマチ・ブリ","カンパチ","マダイ","クロダイ (チヌ)","アジ","サヨリ"],
    bestSeasons: {
      spring: ["マダイ","チヌ","サヨリ"],
      summer: ["ハマチ","カンパチ","アジ"],
      autumn: ["ハマチ（強烈バイト）","マダイ","タチウオ"],
      winter: ["寒ブリ","寒マダイ","メバル"]
    },
    recommendedRigs: ["ルアーキャスティング (ミノー/ジグ)","ウキフカセ釣り","ノマセ釣り (活きアジ)"],
    localRules: ["施設利用ルール・指定仕掛けの遵守","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "ワーサン亭・安戸池駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "ハマチ料理レストラン・売店・トイレ併設。"
    },
    tips: "池内では養殖発祥の地ならではの強烈な青物引きを堪能。外海波止でも秋に回遊青物やサヨリ、チヌが狙えます。"
  },
  {
    id: "ehime-shimanami-rock",
    name: "愛媛 今治 しまなみ海道 大島・伯方島地磯",
    kana: "えひめ・いまばり・しまなみかいどう・おおしま・はかたじまじいそ",
    region: "shikoku",
    prefecture: "愛媛県",
    address: "愛媛県今治市吉海町・伯方町",
    lat: 34.1541,
    lng: 133.0482,
    category: "rock",
    description: "来島海峡の最大流速10ノット（時速約18km）の激流が洗うしまなみ海道の島しょ地磯。ショア真鯛（70cm超実績）、アコウ（キジハタ）、ブリ・ハマチ、アオリイカ、大型メバルが狙える激流モンスターポイント。",
    accessInfo: "西瀬戸自動車道「大島北IC」または「伯方島IC」より車で約10分。",
    depthRange: "6m〜20m (日本屈指の激流海峡)",
    bottomType: "花崗岩岩盤・スリット・海溝・激流ドロップオフ",
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
      nightFishingText: "夜釣り可能（激流・落水に厳重注意）",
      
    },
    targetFish: ["マダイ (ショア真鯛 70cmUP)","アコウ (キジハタ)","ブリ・ハマチ","アオリイカ","メバル (尺メバル)","チヌ"],
    bestSeasons: {
      spring: ["来島桜鯛 (大型ショア真鯛)","親アオリイカ","メバル"],
      summer: ["アコウ（最盛期）","ハマチ","アジ"],
      autumn: ["マダイ","ブリ・ハマチ","アオリイカ","アコウ"],
      winter: ["寒マダイ","尺メバル","寒チヌ"]
    },
    recommendedRigs: ["ショアラバ (45〜80g)","テキサスリグ / フリーリグ (18〜35g)","遠投カゴ釣り (重オモリ15〜25号)","エギング (3.5号)"],
    localRules: ["フェルトスパイク・ライフジャケット完全着用必須","潮流の急変による取り残され注意","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "よしうみバラ公園・道の駅伯方S・Cパーク等 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "来島海峡の潮が転流する（潮止まりの前後30分）が最大のゴールデンタイム。重めのショアラバやテキサスで底を取るとモンスター真鯛やアコウが炸裂。"
  },
  {
    id: "ehime-ikata-surf",
    name: "愛媛 佐田岬 伊方・三机湾サーフ・波止",
    kana: "えひめ・さだみさき・いかた・みつくえわんさーふ・はと",
    region: "shikoku",
    prefecture: "愛媛県",
    address: "愛媛県西宇和郡伊方町三机・九町",
    lat: 33.4782,
    lng: 132.2041,
    category: "surf",
    description: "日本一細長い佐田岬半島の宇和海側に位置する三机湾。宇和海の豊かな黒潮分流が入り込み、ギガアジ（40cm超アジング）、ハマチ・カンパチ、アオリイカ、マダイ、ヒラメが狙える超一級ポイント。",
    accessInfo: "松山自動車道「大洲IC」より佐田岬メロディーライン経由で約50分。道の駅伊方きらら館すぐ。",
    depthRange: "4m〜16m",
    bottomType: "砂泥・砂利・捨石・沈み根・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤエン・夜青物)",
      
    },
    targetFish: ["アジ (ギガアジ/40cmUP)","ハマチ・カンパチ (ネイリ)","アオリイカ","マダイ","ヒラメ","タチウオ"],
    bestSeasons: {
      spring: ["親アオリイカ","マダイ","ギガアジ"],
      summer: ["ネイリ (カンパチ幼魚)","アジ","タチウオ"],
      autumn: ["ハマチ","アオリイカ（数釣り）","大アジ","ヒラメ"],
      winter: ["ギガアジ（越冬大型）","寒ブリ","メバル"]
    },
    recommendedRigs: ["キャロ / ジグ単アジング (1.5〜3.0g)","ショアジギング (30〜60g)","エギング (3.5号)","ノマセ釣り"],
    localRules: ["漁協作業エリア・係留船周辺への配慮","スミ跡の洗い流し","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "三机港・須賀公園駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "全国のアジンガーが遠征するギガアジの聖地。遠投キャロやジグ単をディープエリアまで送り込むと、丸太のような40cm超アジが強烈に引き込みます。"
  },
  {
    id: "kochi-muroto-rock",
    name: "高知 室戸岬 地磯群・三津漁港",
    kana: "こうち・むろとみさき・じいそぐん・みつぎょこう",
    region: "shikoku",
    prefecture: "高知県",
    address: "高知県室戸市室戸岬町・三津",
    lat: 33.2482,
    lng: 134.1741,
    category: "rock",
    description: "太平洋へ鋭く突き出た室戸岬の大断崖岩礁帯。黒潮本流が岸を直接洗い、GT（ロウニンアジ）・ヒラマサ・カンパチ・大型尾長グレ・イシダイ・クエ・ヒラスズキが狙える四国屈指の超弩級ビッグゲーム地磯。",
    accessInfo: "高知東部自動車道「高知南IC」より国道55号経由で約1時間45分。室戸岬観光駐車場よりエントリー。",
    depthRange: "8m〜30m (黒潮直撃超急深)",
    bottomType: "斑れい岩大岩礁・スリット・海溝・サラシ帯",
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
      nightFishingText: "夜釣り可能（夜のクエ・シブダイ・タマン）",
      
    },
    targetFish: ["GT (ロウニンアジ)","ヒラマサ","カンパチ","尾長グレ (60cmUP)","イシダイ","クエ","ヒラスズキ"],
    bestSeasons: {
      spring: ["大型ヒラマサ","ヒラスズキ","乗っ込み尾長グレ"],
      summer: ["GT（ロウニンアジ）","カンパチ","クエ","シブダイ"],
      autumn: ["青物（カンパチ/ヒラマサ）","アオリイカ","グレ"],
      winter: ["寒グレ（ロクマル尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ヘビーロックショアGTタックル (大型ダイペン/ポッパー 180〜230mm)","ショアジギング (80〜150g)","イシダイ / クエ仕掛け"],
    localRules: ["フェルトスパイク・固型式ライフジャケット完全着用必須","黒潮による突発的高波（三角波）に厳重警戒","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "室戸岬中池駐車場・三津漁港 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "黒潮が直接当たる岬先端は日本屈指のモンスターフィールド。大型ダイビングペンシルを荒波のサラシに通すとGTやカンパチが水面爆発。"
  },
  {
    id: "kochi-kuroshio-surf",
    name: "高知 幡多 黒潮町 入野海岸サーフ",
    kana: "こうち・はた・くろしおちょう・いりのかいがんさーふ",
    region: "shikoku",
    prefecture: "高知県",
    address: "高知県幡多郡黒潮町入野",
    lat: 33.0142,
    lng: 133.0082,
    category: "surf",
    description: "延長約4kmにわたる太平洋の広大な白砂青松サーフ。四国西南部の豊かな黒潮海域で、幻の怪魚「オオニベ（メーター級超）」、座布団ヒラメ、マゴチ、青物（ブリ/カンパチ）、シロギスが狙える名サーフ。",
    accessInfo: "高知道「四万十町中央IC」より国道56号経由で約40分。土佐くろしお鉄道「土佐入野駅」より徒歩約10分。",
    depthRange: "1.5m〜7m (太平洋外洋サーフ)",
    bottomType: "細砂・激流サンドバー・離岸流海溝",
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
      nightFishingText: "可能 (夜間のオオニベ・ヒラメぶっこみ/ルアー)",
      
    },
    targetFish: ["オオニベ (メーター級)","ヒラメ (座布団級)","マゴチ","ブリ・ハマチ","カンパチ (ネイリ)","シロギス"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["マゴチ","シロギス（連掛け）","ネイリ"],
      autumn: ["オオニベ（夢のメーター級）","座布団ヒラメ","ブリ"],
      winter: ["寒ヒラメ","オオニベ","ヒラスズキ"]
    },
    recommendedRigs: ["ヘビーシンキングペンシル (35〜50g)","メタルジグ (40〜60g)","ジグヘッドワーム (28〜35g)","オオニベぶっこみ仕掛け"],
    localRules: ["ウェーダー・ライフジャケット着用必須","サーファーとの十分な距離確保","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "道の駅ビオスおおがた・砂浜美術館駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・シャワー・物産館併設。"
    },
    tips: "秋〜冬にコノシロやイワシの群れが接岸するとオオニベが回遊。ヘビーシンペンを遠投してカケアガリをスローに引くのがモンスターへの近道。"
  },
  {
    id: "yamaguchi-shimonoseki-surf",
    name: "山口 下関 響灘 吉母・安岡サーフ",
    kana: "やまぐち・しものせき・ひびきなだ・よしも・やすおかさーふ",
    region: "chugoku",
    prefecture: "山口県",
    address: "山口県下関市吉母・安岡町",
    lat: 34.0682,
    lng: 130.8982,
    category: "surf",
    description: "響灘に面した白砂青松の遠浅サーフ。水質が極めて良く、座布団ヒラメ、マゴチ、シロギス（数釣り）、シーバス、青物（ヤズ/サゴシ）が狙える下関エリアのメジャーサーフ。",
    accessInfo: "中国自動車道「下関IC」より国道191号経由で約25分。JR山陰本線「安岡駅」または「吉見駅」より車で約5分。",
    depthRange: "1.5m〜5m",
    bottomType: "細砂・沈み根・サンドバー・離岸流",
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
      nightFishingText: "可能 (夜間のシーバス・フラットフィッシュ)",
      
    },
    targetFish: ["ヒラメ","マゴチ","シロギス","シーバス","ヤズ (ブリ幼魚)","サゴシ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["マゴチ","シロギス（束釣り）","ヒラメ"],
      autumn: ["座布団ヒラメ","青物（ヤズ/サゴシ）","シーバス"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30g)","ジグヘッドワーム (21〜28g)","投げ釣り連掛け仕掛け"],
    localRules: ["海水浴期間中の遊泳エリアでの釣り自粛","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "吉母・安岡海岸駐車場 約80台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "沖のサンドバーとブレイクラインをワームやシンペンで丹念に探ると良型ヒラメやマゴチが連発。初夏のシロギス投げ釣りも手堅い。"
  },
  {
    id: "yamaguchi-suo-oshima-port",
    name: "山口 周防大島 久賀港",
    kana: "やまぐち・すおうおおしま・くかこう",
    region: "chugoku",
    prefecture: "山口県",
    address: "山口県大島郡周防大島町久賀",
    lat: 33.9484,
    lng: 132.2656,
    category: "port",
    description: "周防大島の北東部に位置する大型港湾・漁港。潮通しが良く水深もあり、アジ・メバル・アオリイカ・タチウオ・チヌ・マダイ・青物など多彩な魚種が狙える山口県東部の人気フィールド。",
    accessInfo: "山陽自動車道「玖珂IC」より大島大橋経由で約35分（国道437号線沿い）。JR山陽本線「大畠駅」より防長バス「久賀」方面行き。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・捨石・基礎ブロック・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・ヤエン・タチウオ)",
      
    },
    targetFish: ["タチウオ","アオリイカ","アジ (尺アジ)","アコウ (キジハタ)","マダイ","クロダイ (チヌ)","ハマチ"],
    bestSeasons: {
      spring: ["親アオリイカ","メバル","乗っ込みチヌ"],
      summer: ["アジ","アコウ","タチウオ"],
      autumn: ["タチウオ（大爆釣）","アオリイカ","アジ","青物"],
      winter: ["大アジ（寒アジング）","メバル","寒チヌ"]
    },
    recommendedRigs: ["ジグ単アジング (0.8〜1.5g)","タチウオテンヤ / ワインド","エギング (3.0〜3.5号)","テキサスリグ"],
    localRules: ["関係者専用エリア・作業スペースへの立入・駐車禁止","係留船・漁具周辺へのキャスト禁止","スミ跡の洗い流し・ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "久賀サンロード・港周辺駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "漁業関係者の作業スペースへの駐車厳禁。港内ゲートの施錠規制等に注意。近隣にトイレ・商業施設あり。"
    },
    tips: "秋の夜釣りは常夜灯下でタチウオや良型アジが入れ食い。日中はエギングでアオリイカ、ボトムでアコウが狙えます。"
  },
  {
    id: "fukuoka-umizuridai",
    name: "福岡 福岡市海づり公園 (唐泊)",
    kana: "ふくおか・ふくおかしうみづりこうえん・からどまり",
    region: "kyushu",
    prefecture: "福岡県",
    address: "福岡県福岡市西区大字小田字池ノ浦地先",
    lat: 33.6275,
    lng: 130.2312,
    category: "park",
    description: "博多湾と玄界灘をつなぐ今津湾口に突き出たT字型メガ海釣り桟橋（全長480m）。全面安全柵完備で、マダイ・ヤズ（ブリ幼魚）・アジ・アオリイカ・カワハギ・タチウオが安全・快適に狙える九州屈指の有料海釣り施設。",
    accessInfo: "西九州自動車道「今宿IC」より車で約20分。JR筑肥線「九大学研都市駅」または「今宿駅」より昭和バス（西の浦線）「海づり公園前」下車すぐ。",
    depthRange: "6m〜12m",
    bottomType: "砂泥・捨石・人工漁礁ブロック",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 1,000円 / 小人(小中学生) 500円（4時間・見学 大人200円/小人100円）",
      isNightFishingAllowed: false,
      
      openingHours: "4〜10月 6:00〜19:00 / 11〜3月 7:00〜17:00（火曜休園・祝日営業）",
    },
    targetFish: ["マダイ","ヤズ・ネリゴ (青物)","アジ","アオリイカ","カワハギ","クロダイ (チヌ)","タチウオ"],
    bestSeasons: {
      spring: ["マダイ","親アオリイカ","チヌ","サヨリ"],
      summer: ["アジ","ヤズ","タチウオ","カワハギ"],
      autumn: ["ヤズ・ネリゴ","マダイ","アオリイカ","アジ"],
      winter: ["寒マダイ","ウマヅラハギ","メバル"]
    },
    recommendedRigs: ["サビキ釣り (カゴサビキ)","ウキフカセ釣り / カゴ釣り","胴突きカワハギ仕掛け","泳がせノマセ釣り"],
    localRules: ["ライフジャケット着用必須（無料レンタルあり）","投げ釣り（振りかぶり投法）禁止","飲酒・火気厳禁"],
    parkingDetails: {
      capacity: "施設専用駐車場 約300台",
      fee: "普通車 1日300円",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・売店・釣具レンタル・食堂・バリアフリートイレ完備。"
    },
    tips: "沖合に設置された人工魚礁に魚が定着。サビキで釣った小アジをそのままエレベーター仕掛けで沈めるとマダイやヤズが一発でヒット。"
  },
  {
    id: "fukuoka-umizuridai-imajuku",
    name: "福岡 福岡市海づり公園 (今宿)",
    kana: "ふくおか・ふくおかしうみづりこうえん・いまじゅく",
    region: "kyushu",
    prefecture: "福岡県",
    address: "福岡県福岡市西区今宿駅前・長垂",
    lat: 33.5855,
    lng: 130.2585,
    category: "surf",
    description: "JR今宿駅から徒歩圏内に広がる今宿海岸・長垂海浜公園周辺の釣り場。波穏やかな遠浅サーフと突堤が広がり、初夏〜秋のシロギス投げ釣りを中心に、シーバス（スズキ）、ヒラメ、マゴチ、チヌなどが手軽に狙える人気スポット。",
    accessInfo: "西九州自動車道「今宿IC」より車で約5分。JR筑肥線「今宿駅」より徒歩約5〜8分。",
    depthRange: "1.5m〜5m",
    bottomType: "砂地・砂泥・小磯・突堤基礎",
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
      nightFishingText: "可能 (常夜灯下・夜の投げ釣り・ナイトシーバス)",
      
    },
    targetFish: ["シロギス","シーバス (スズキ)","ヒラメ","マゴチ","クロダイ (チヌ)","ハゼ","アジ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ","シーバス","メバル"],
      summer: ["シロギス（数釣り）","ハゼ","マゴチ"],
      autumn: ["落ちギス","シーバス","ヒラメ","青物"],
      winter: ["カレイ","ヒラメ","シーバス"]
    },
    recommendedRigs: ["投げ釣り仕掛け / チョイ投げ (キス・カレイ)","ミノー / シンキングペンシル (シーバス)","ジグヘッドワーム (フラットフィッシュ)","サビキ仕掛け"],
    localRules: ["海水浴客・公園散策者への配慮・周囲確認","ゴミ・仕掛けの完全持ち帰り","近隣住宅・道路への迷惑駐車禁止"],
    parkingDetails: {
      capacity: "長垂海浜公園駐車場・近隣コインパーキング 約40台",
      fee: "有料 (時間貸し/一部季節有料)",
      hours: "24時間利用可能",
      notes: "公衆トイレあり。今宿駅周辺にコンビニ・釣具店あり。"
    },
    tips: "初夏から秋にかけては手前の波打ち際から20〜50mほどのチョイ投げでキスが好反応。朝夕マズメにはルアーでシーバスやフラットフィッシュが狙えます。"
  },
  {
    id: "fukuoka-itoshima-surf",
    name: "福岡 糸島 芥屋・二丈姉子の浜サーフ",
    kana: "ふくおか・いとしま・けや・にじょうあねごのはまさーふ",
    region: "kyushu",
    prefecture: "福岡県",
    address: "福岡県糸島市志摩芥屋・二丈鹿家",
    lat: 33.5282,
    lng: 130.0741,
    category: "surf",
    description: "玄界灘に面した「鳴き砂」で知られる姉子の浜や芥屋大門周辺の絶景サーフ。透明度が高く、ヒラメ・マゴチ・青物（ヤズ/サゴシ）・シロギス（数釣り）・シーバスが狙える福岡屈指の人気サーフスポット。",
    accessInfo: "西九州自動車道「前原IC」より車で約25分。JR筑肥線「鹿家駅」より徒歩約15分。",
    depthRange: "1.5m〜6m (玄界灘オープンサーフ)",
    bottomType: "石英白砂・サンドバー・離岸流・小磯",
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
      nightFishingText: "可能 (夜間のシーバス・ヒラメ狙い)",
      
    },
    targetFish: ["ヒラメ","マゴチ","ヤズ・サゴシ","シロギス (数釣り)","シーバス","ヒラスズキ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["マゴチ","シロギス（束釣り）","ヒラメ"],
      autumn: ["座布団ヒラメ","ヤズ","サゴシ","ヒラスズキ"],
      winter: ["寒ヒラメ","ヒラスズキ"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30〜40g)","メタルジグ (30〜45g)","ジグヘッドワーム (21〜28g)","投げ釣り連掛け仕掛け"],
    localRules: ["鳴き砂の環境保全とゴミ持ち帰り厳守","ライフジャケット着用","サーファーとの安全距離確保"],
    parkingDetails: {
      capacity: "姉子の浜・芥屋海水浴場駐車場 約120台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "トイレ・展望パーキング完備。"
    },
    tips: "沖のブレイクライン（波頭の立つ手前）へシンペンをキャストしスローリトリーブ。初夏〜秋はキスを追ったマゴチやヒラメが炸裂。"
  },
  {
    id: "fukuoka-munakata-rock",
    name: "福岡 宗像・玄海 神湊・鐘崎地磯",
    kana: "ふくおか・むなかた・げんかい・こうのみなと・かねざきじいそ",
    region: "kyushu",
    prefecture: "福岡県",
    address: "福岡県宗像市神湊・鐘崎",
    lat: 33.8841,
    lng: 130.5282,
    category: "rock",
    description: "世界遺産・宗像大社沖ノ島を望む玄界灘の超一級地磯・波止エリア。響灘と玄界灘の激流がぶつかり、ヒラマサ・ヤズ・クロダイ（チヌ）・大型グレ・アオリイカ・アジ・ヒラスズキが狙える名所。",
    accessInfo: "九州自動車道「古賀IC」または「若宮IC」より車で約30分。JR鹿児島本線「東郷駅」よりバス約20分。",
    depthRange: "4m〜14m",
    bottomType: "岩盤・スリット・捨石・テトラ・海藻帯",
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
      nightFishingText: "夜釣り可能（地磯での足元に十分注意）",
      
    },
    targetFish: ["ヒラマサ","ヤズ・ハマチ","クロダイ (チヌ)","メジナ (グレ)","アオリイカ","ヒラスズキ","アジ"],
    bestSeasons: {
      spring: ["春マサ (ヒラマサ)","乗っ込みチヌ","親アオリイカ"],
      summer: ["アジ","キジハタ","青物"],
      autumn: ["秋ヒラマサ","ヤズ","アオリイカ","グレ"],
      winter: ["寒グレ（尾長）","ヒラスズキ","寒チヌ"]
    },
    recommendedRigs: ["ロックショアジギング (60〜80g)","ダイビングペンシル (140〜160mm)","ウキフカセ釣り","エギング (3.5号)"],
    localRules: ["フェルトスパイク・ライフジャケット着用必須","大島渡船発着所周辺の注意","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "神湊港・鐘崎港駐車場 約150台（一部有料・1回300円/他無料）",
      fee: "有料/無料あり",
      hours: "24時間利用可能",
      notes: "トイレ・フェリーターミナル完備。"
    },
    tips: "岬先端の払い出し潮へダイビングペンシルを通すと、水面を大きく割ってヒラマサがアタック。フカセでは50cm超のチヌや口太グレが有望。"
  },
  {
    id: "fukuoka-kitakyushu-port",
    name: "福岡 北九州 門司 脇田海釣り桟橋・白野江",
    kana: "ふくおか・きたきゅうしゅう・もじ・わいたうみづりさんばし・しらのえ",
    region: "kyushu",
    prefecture: "福岡県",
    address: "福岡県北九州市若松区安屋・門司区白野江",
    lat: 33.9215,
    lng: 130.7385,
    category: "park",
    description: "響灘の沖合に突き出た「脇田海釣り桟橋（若松）」や関門海峡東口の白野江海岸。激流と魚影の濃さで知られ、マダイ・青物（ヤズ/ヒラマサ）・タチウオ・アジ・アオリイカ・カワハギが狙える北九州屈指の好釣り場。",
    accessInfo: "北九州都市高速「若戸大橋口」より車で約25分、または「門司IC」より約15分。",
    depthRange: "6m〜15m (響灘・関門激流)",
    bottomType: "砂泥・捨石・人工魚礁・橋脚基礎",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "大人 1,000円 / 小中学生 500円（脇田海釣り桟橋利用時）",
      isNightFishingAllowed: false,
      
      openingHours: "4〜10月 6:00〜19:00 / 11〜3月 7:00〜17:00（火曜休園）",
    },
    targetFish: ["マダイ","ヒラマサ・ヤズ","タチウオ","アジ","アオリイカ","カワハギ","クロダイ (チヌ)"],
    bestSeasons: {
      spring: ["マダイ","親アオリイカ","チヌ"],
      summer: ["アジ","ヤズ","タチウオ","カワハギ"],
      autumn: ["ヒラマサ","ヤズ","アオリイカ","マダイ"],
      winter: ["寒マダイ","ウマヅラハギ","メバル"]
    },
    recommendedRigs: ["カゴ釣り / フカセ釣り","サビキ釣り","ショアジギング (30〜60g)","胴突きカワハギ仕掛け"],
    localRules: ["ライフジャケット着用必須（無料レンタルあり）","投げ釣り制限の遵守","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "脇田海づり桟橋駐車場 約200台",
      fee: "普通車 1日300円",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・売店・トイレ完備。"
    },
    tips: "沖合にせり出した桟橋からは良型アジやマダイ、回遊青物が連日ヒット。ファミリーから大物狙いのベテランまで大人気です。"
  },
  {
    id: "saga-hatazu-rock",
    name: "佐賀 伊万里 波多津・名村地磯",
    kana: "さが・いまり・はたつ・なむらじいそ",
    region: "kyushu",
    prefecture: "佐賀県",
    address: "佐賀県伊万里市波多津町煤打・辻林",
    lat: 33.3782,
    lng: 129.8482,
    category: "rock",
    description: "波静かな伊万里湾の湾口部に位置する名磯・波止エリア。カブトガニが棲む豊かな汽水・岩礁海域で、チヌ（フカセ/前打ちで年無し多発）、アオリイカ、アジ、キジハタ、シーバスが狙える佐賀屈指のフィールド。",
    accessInfo: "西九州自動車道「伊万里東府招IC」より車で約25分。JR筑肥線・松浦鉄道「伊万里駅」より車で約20分。",
    depthRange: "3m〜10m",
    bottomType: "岩盤・砂泥・カキ殻帯・藻場",
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
      nightFishingText: "夜釣り可能（常夜灯下のアジング・夜チヌ）",
      
    },
    targetFish: ["クロダイ (チヌ 50cmUP)","アオリイカ","アジ","キジハタ (アコウ)","シーバス","マゴチ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ (年無し連発)","親アオリイカ","シーバス"],
      summer: ["アコウ","アジ","マゴチ","チヌ"],
      autumn: ["アオリイカ（数釣り）","チヌ","アジ"],
      winter: ["寒チヌ","メバル","カサゴ"]
    },
    recommendedRigs: ["ウキフカセ釣り (円錐ウキ0〜B)","エギング (3.0〜3.5号)","テキサスリグ (アコウ)","ジグ単アジング"],
    localRules: ["カキ・真珠養殖筏へのキャスト厳禁","スパイクシューズ・ライジャケ着用","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "波多津港周辺駐車スペース 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "簡易トイレあり。"
    },
    tips: "伊万里湾のカキ筏や岩礁帯周りはチヌの魚影が圧倒的。オキアミやコーンをマキエと同調させると50cmオーバーが連打します。"
  },
  {
    id: "saga-karatsu-surf",
    name: "佐賀 唐津 虹の松原・浜崎海岸サーフ",
    kana: "さが・からつ・にじのまつばら・はまさきかいがんさーふ",
    region: "kyushu",
    prefecture: "佐賀県",
    address: "佐賀県唐津市浜玉町浜崎・東唐津",
    lat: 33.4482,
    lng: 130.0082,
    category: "surf",
    description: "日本三大松原「虹の松原」に沿って弓なりに約4.5km続く唐津湾の白砂青松サーフ。玉島川の河口が絡む遠浅海岸で、シロギスの束釣り（数釣り）、座布団ヒラメ、マゴチ、シーバスが狙える名サーフ。",
    accessInfo: "西九州自動車道「浜玉IC」すぐ。JR筑肥線「浜崎駅」より徒歩約5分。",
    depthRange: "1m〜5m",
    bottomType: "細砂・玉島川河口サンドバー・沖合カケアガリ",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["シロギス (数釣り)","ヒラメ","マゴチ","シーバス","サゴシ","クロダイ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["シロギス（爆釣期）","マゴチ","ギザミ"],
      autumn: ["座布団ヒラメ","サゴシ","落ちギス","シーバス"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["投げ釣り多点仕掛け (4〜7本針)","サーフ用シンキングペンシル (28〜35g)","ジグヘッドワーム (21〜28g)"],
    localRules: ["松原内へのゴミ放置・直火絶対禁止","海水浴期間中の釣りエリア制限","ライフジャケット着用"],
    parkingDetails: {
      capacity: "浜崎海岸・虹の松原駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "初夏〜秋のシロギスは投げてサビくだけで鈴なりヒット。玉島川河口の払い出しではミノーやシンペンでランカーシーバスやヒラメも好調。"
  },
  {
    id: "saga-genkai-park",
    name: "佐賀 玄海 仮屋湾遊漁センター (海上釣り堀/地磯)",
    kana: "さが・げんかい・かりやわんゆうぎょせんたー",
    region: "kyushu",
    prefecture: "佐賀県",
    address: "佐賀県東松浦郡玄海町仮屋1082-1",
    lat: 33.4785,
    lng: 129.8545,
    category: "park",
    description: "波静かな仮屋湾に設置された九州屈指の海上釣り堀・海釣り施設。外海側波止や地磯エリアからは、天然のマダイ・イシダイ・青物（ヒラマサ/ヤズ）・アオリイカ・チヌ・アジが手軽かつ豪快に楽しめる。",
    accessInfo: "西九州自動車道「唐津IC」より国道204号経由で約35分。JR唐津駅より車で約30分。",
    depthRange: "5m〜14m",
    bottomType: "砂泥・捨石・イカダ基礎ブロック",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: true,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: true,
      isFeeRequired: true,
      feeText: "コース別 2,000〜5,000円（見学・外側波止は別途）",
      isNightFishingAllowed: false,
      
      openingHours: "7:00〜16:00（水曜休園・祝日営業）",
    },
    targetFish: ["マダイ","ヒラマサ・ヤズ","イシダイ","アオリイカ","クロダイ (チヌ)","アジ"],
    bestSeasons: {
      spring: ["マダイ","親アオリイカ","チヌ"],
      summer: ["アジ","青物","イシダイ"],
      autumn: ["ヒラマサ","マダイ","アオリイカ","ヤズ"],
      winter: ["寒マダイ","メバル","寒チヌ"]
    },
    recommendedRigs: ["海上釣り堀仕掛け / ウキフカセ釣り","エギング (3.0〜3.5号)","サビキ釣り"],
    localRules: ["施設ルール・指定エサの遵守","ライフジャケット着用必須","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "施設専用駐車場 約80台",
      fee: "無料",
      hours: "開園時間に合わせて利用可能",
      notes: "管理棟・売店・トイレ完備。"
    },
    tips: "初心者やファミリーでも手軽に大ダイや青物の豪快な引きを体験可能。周辺の自然磯や波止でもアオリイカやチヌの実績大。"
  },
  {
    id: "saga-tara-port",
    name: "佐賀 有明海 太良港・竹崎港波止",
    kana: "さが・ありあけかい・たらこう・たけざきこうはと",
    region: "kyushu",
    prefecture: "佐賀県",
    address: "佐賀県藤津郡太良町多良・竹崎",
    lat: 32.9985,
    lng: 130.2145,
    category: "port",
    description: "最大6mの干満差を誇る「有明海」に面した太良・竹崎港。「竹崎カニ」で名高く、日本一の干満差が育む超巨大スズキ（有明スズキ/ランカーシーバス）、チヌ（メイタ）、ハゼ、マゴチが狙える個性派フィールド。",
    accessInfo: "長崎自動車道「武雄北方IC」または「諫早IC」より国道207号経由で約45分。JR長崎本線「多良駅」より車で約5分。",
    depthRange: "1m〜6m (干満差最大6mの激変海)",
    bottomType: "干潟泥・敷石・岸壁スリット",
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
      nightFishingText: "可能 (満潮前後の夜スズキ・チヌ狙い)",
      
    },
    targetFish: ["シーバス (有明スズキ 80cmUP)","クロダイ・キビレ","マゴチ","ハゼ","コノシロ"],
    bestSeasons: {
      spring: ["バチ抜けシーバス","チヌ"],
      summer: ["ハゼ（数釣り）","マゴチ","キビレ"],
      autumn: ["ランカー有明スズキ","落ちハゼ","チヌ"],
      winter: ["シーバス","寒チヌ"]
    },
    recommendedRigs: ["大型ミノー / シンペン (120〜150mm)","バイブレーション (20〜28g)","チョイ投げハゼ仕掛け"],
    localRules: ["干潮時の干潟泥への立ち入り厳禁（足が抜けなくなります）","満潮時の潮位上昇に厳重警戒","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "道の駅太良・竹崎港駐車場 約120台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "竹崎カニ食堂・トイレ完備。"
    },
    tips: "満潮に向かって潮が満ちてくる「上げ潮時」が最大のチャンス。濁り潮の中へ大型ミノーを引くと、丸太のような巨体スズキが猛然とチェイス。"
  },
  {
    id: "nagasaki-tsushima-rock",
    name: "長崎 対馬 浅茅湾・神口地磯",
    kana: "ながさき・つしま・あそうわん・こうぐちじいそ",
    region: "kyushu",
    prefecture: "長崎県",
    address: "長崎県対馬市美津島町昼ヶ浦・竹敷",
    lat: 34.3042,
    lng: 129.3182,
    category: "rock",
    description: "国境の島・対馬が誇るリアス式海岸・浅茅湾の湾口地磯群。対馬海流の激流が流れ込み、大型ヒラマサ・クエ（アラ）・ロクマル尾長グレ・イシダイ・モンスターアオリイカが狙える日本屈指のモンスターアイランド。",
    accessInfo: "対馬空港（やまねこ空港）または厳原港より車で約30分。",
    depthRange: "6m〜28m (対馬海流激流海溝)",
    bottomType: "泥岩大岩礁・スリット・海溝・ドロップオフ",
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
      nightFishingText: "夜釣り可能（夜のアラ・クエ・タマン狙い）",
      
    },
    targetFish: ["ヒラマサ (10kgUP)","クエ (アラ 30kg実績)","尾長グレ (60cmUP)","イシダイ","アオリイカ","マダイ"],
    bestSeasons: {
      spring: ["春マサ (オオマサ)","親アオリイカ (3kgUP)","乗っ込みマダイ"],
      summer: ["アラ (クエ夜釣り)","イシダイ","キジハタ"],
      autumn: ["秋ヒラマサ","大型尾長グレ","アオリイカ"],
      winter: ["寒グレ（ロクマル）","ヒラスズキ","寒マダイ"]
    },
    recommendedRigs: ["ロックショアキャスティング (ダイビングペンシル 190〜230mm)","アラ (クエ) 専用仕掛け","ウキフカセ太仕掛け","エギング (3.5〜4.0号)"],
    localRules: ["フェルトスパイク・固型式ライフジャケット着用必須","自然環境の保全","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "神口園地・港周辺駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "対馬海流の走る潮目をダイビングペンシルで強烈に誘い出すと10kg超のオオマサが水面爆発。夜はサバ1匹掛けで巨大クエの夢が追えます。"
  },
  {
    id: "nagasaki-goto-rock",
    name: "長崎 五島列島 福江島 大瀬崎地磯",
    kana: "ながさき・ごとうれっとう・ふくえじま・おおせざきじいそ",
    region: "kyushu",
    prefecture: "長崎県",
    address: "長崎県五島市玉之浦町玉之浦",
    lat: 32.6142,
    lng: 128.6041,
    category: "rock",
    description: "日本の西端・五島列島の大瀬崎灯台下に広がる日本最高峰の磯釣り聖地。東シナ海の荒波と対馬暖流が直撃し、60cmオーバーの尾長グレ、オオマサ（ヒラマサ）、イシダイ、クエ、ヒラスズキが狙える伝説の磯場。",
    accessInfo: "福江港または福江空港（五島つばき空港）より車で約1時間。大瀬崎灯台展望台駐車場より遊歩道を下りアプローチ。",
    depthRange: "10m〜35m (東シナ海超弩級断崖)",
    bottomType: "砂岩・泥岩互層大岩礁・垂直ドロップオフ・サラシ帯",
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
      nightFishingText: "夜釣り可能（山道歩行・大波に厳重注意）",
      
    },
    targetFish: ["尾長グレ (ロクマル 60cmUP)","ヒラマサ (オオマサ)","イシダイ","クエ","ヒラスズキ","アオリイカ"],
    bestSeasons: {
      spring: ["春ヒラマサ","ヒラスズキ","親アオリイカ"],
      summer: ["クエ (アラ)","イシダイ","キジハタ"],
      autumn: ["大型尾長グレ","秋ヒラマサ","イシダイ"],
      winter: ["寒グレ（全国屈指のロクマル）","ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ超太仕掛け (道糸4〜6号/ハリス4〜6号)","ロックショアキャスティング (180〜230mm)","イシダイ仕掛け"],
    localRules: ["フェルトスパイク・固型式ライフジャケット完全着用必須","灯台遊歩道の歩行マナー遵守","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "大瀬崎灯台展望台駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。磯へは徒歩約25分。"
    },
    tips: "激流の本流引かれ潮に仕掛けを潜り込ませると、竿をへし折るような衝撃で60cm超の尾長グレがアタック。全国のグレ師憧れの聖地です。"
  },
  {
    id: "nagasaki-saikai-surf",
    name: "長崎 西海 崎戸大島・尻久砂里サーフ",
    kana: "ながさき・さいかい・さきとおおしま・しりくさりさーふ",
    region: "kyushu",
    prefecture: "長崎県",
    address: "長崎県西海市大島町尻久砂里",
    lat: 33.0441,
    lng: 129.6182,
    category: "surf",
    description: "大島大橋で本土と結ばれた西海諸島の絶景白砂ビーチサーフ。東シナ海に面した透明度抜群の遠浅海岸で、座布団ヒラメ、マゴチ、青物（ヤズ/ヒラマサ）、シロギス、ヒラスズキが狙える名サーフ。",
    accessInfo: "西九州自動車道「佐世保大塔IC」より車で約50分（大島大橋経由）。",
    depthRange: "1.5m〜6m",
    bottomType: "極上白細砂・沈み根・サンドバー・海藻帯",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["ヒラメ","マゴチ","ヒラマサ・ヤズ","シロギス (数釣り)","ヒラスズキ","アオリイカ"],
    bestSeasons: {
      spring: ["シロギス","親アオリイカ","ヒラメ"],
      summer: ["マゴチ","シロギス（束釣り）","ヒラメ"],
      autumn: ["座布団ヒラメ","ヒラマサ","アオリイカ","ヒラスズキ"],
      winter: ["寒ヒラメ","ヒラスズキ"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30〜40g)","ジグヘッドワーム (21〜28g)","ライト投げ仕掛け"],
    localRules: ["海水浴期間中の遊泳エリア内釣り禁止","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "尻久砂里海浜公園駐車場 約80台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "トイレ・シャワー・キャンプ場完備。"
    },
    tips: "白砂と小磯の境目にベイトが溜まりやすく、シンペンやワームを通すと良型マゴチやヒラメが連発。朝マズメは青物のナブラも発生。"
  },
  {
    id: "kumamoto-amakusa-rock",
    name: "熊本 天草 下島 大ヶ瀬・小ヶ瀬地磯",
    kana: "くまもと・あまくさ・しもじま・おおがせ・こがせじいそ",
    region: "kyushu",
    prefecture: "熊本県",
    address: "熊本県天草市天草町高浜北",
    lat: 32.3941,
    lng: 129.9841,
    category: "rock",
    description: "「日本の夕陽百選」に選ばれる天草西海岸の超一級岩礁帯。東シナ海の荒波が直接当たり、ヒラスズキ・青物（ブリ/カンパチ/ヒラマサ）・大型グレ・チヌ・アオリイカが狙える九州を代表するロックショアポイント。",
    accessInfo: "九州自動車道「松橋IC」より国道266号・324号経由で約2時間。白鶴浜海水浴場または大ヶ瀬展望台よりエントリー。",
    depthRange: "5m〜20m",
    bottomType: "安山岩岩盤・スリット・海溝・激流サラシ帯",
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
      nightFishingText: "夜釣り可能（夜のタマン・シブダイ狙い）",
      
    },
    targetFish: ["ヒラスズキ","ブリ・ハマチ","カンパチ (ネリゴ)","メジナ (グレ)","クロダイ (チヌ)","アオリイカ"],
    bestSeasons: {
      spring: ["ヒラスズキ","親アオリイカ","乗っ込みチヌ"],
      summer: ["ネリゴ","シブダイ（夜釣り）","キジハタ"],
      autumn: ["青物（ブリ/カンパチ）","ヒラスズキ","アオリイカ","グレ"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ヒラスズキ専用プラグ (120〜140mm)","ショアジギング (60〜100g)","ウキフカセ釣り","エギング (3.5号)"],
    localRules: ["フェルトスパイク・ライフジャケット完全着用必須","夕景撮影の観光客への配慮","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "大ヶ瀬夕陽展望所駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "大ヶ瀬周辺に広がる巨大なサラシへフローティングミノーを漂わせると、銀ピカのヒラスズキが水面を割ってバイトします。"
  },
  {
    id: "kumamoto-kamiamakusa-port",
    name: "熊本 上天草 樋島・大道港波止",
    kana: "くまもと・かみあまくさ・ひのしま・おおどうこうはと",
    region: "kyushu",
    prefecture: "熊本県",
    address: "熊本県上天草市龍ヶ岳町樋島・大道",
    lat: 32.3545,
    lng: 130.4185,
    category: "port",
    description: "八代海（不知火海）に面した上天草の好漁場。樋島大橋で結ばれた島しょ港湾で、アジ（尺アジ・ギガアジ）、タチウオ、ガラカブ（カサゴ）、マダイ、アオリイカ、チヌが狙える上天草屈指の人気ポイント。",
    accessInfo: "九州自動車道「松橋IC」より国道266号経由で約1時間15分。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・捨石・基礎スリット・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜タチウオ・ガラカブ)",
      
    },
    targetFish: ["アジ (尺アジ)","タチウオ","ガラカブ (カサゴ)","マダイ","アオリイカ","クロダイ (チヌ)","コウイカ"],
    bestSeasons: {
      spring: ["親アオリイカ","乗っ込みチヌ","コウイカ"],
      summer: ["アジ","タチウオ","ガラカブ"],
      autumn: ["タチウオ（数釣り）","大アジ","アオリイカ","マダイ"],
      winter: ["尺アジ（寒アジング）","ガラカブ","寒チヌ"]
    },
    recommendedRigs: ["ジグ単アジング (0.8〜1.5g)","タチウオテンヤ / ワインド","胴突きガラカブ仕掛け","エギング (3.0〜3.5号)"],
    localRules: ["漁港荷役エリアへの立ち入り禁止","スミ跡の洗い流し","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "樋島港・大道港駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "八代海特有の豊かなベイトが集まる常夜灯下でアジング。秋〜冬は30cm超の尺アジや指4本級のタチウオが連発します。"
  },
  {
    id: "kumamoto-yatsushiro-surf",
    name: "熊本 八代 球磨川河口サーフ・不知火海岸",
    kana: "くまもと・やつしろ・くまがわかこうさーふ・しらぬいかいがん",
    region: "kyushu",
    prefecture: "熊本県",
    address: "熊本県八代市植柳・郡築",
    lat: 32.5042,
    lng: 130.5482,
    category: "surf",
    description: "日本三大急流・球磨川が八代海に注ぐ大河口干潟サーフ。全国のシーバスアングラーが憧れる「球磨川リバーシーバス（メーター級超）」の聖地。チヌ（チニング）、マゴチ、ヒラメ、ハゼの実績も絶大。",
    accessInfo: "九州自動車道「八代IC」より車で約15分。JR鹿児島本線「八代駅」より車で約15分。",
    depthRange: "1m〜5m (大河口干潟サーフ)",
    bottomType: "細砂・球磨川河口砂州・リップカレント・泥干潟",
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
      nightFishingText: "可能 (夜間のランカーシーバス・チニング)",
      
    },
    targetFish: ["シーバス (メーター級球磨川スズキ)","クロダイ・キビレ (チニング)","マゴチ","ヒラメ","ハゼ","コノシロ"],
    bestSeasons: {
      spring: ["稚鮎パターンシーバス","チヌ"],
      summer: ["チニング (トップ/フリーリグ)","マゴチ","ハゼ"],
      autumn: ["落ち鮎パターンシーバス (メーター級)","ヒラメ","チヌ"],
      winter: ["ランカーシーバス","寒チヌ"]
    },
    recommendedRigs: ["大型プラグ / ビッグベイト (140〜180mm)","チニング専用フリーリグ (7〜14g)","バイブレーション (20〜28g)"],
    localRules: ["ウェーディング時の急流・エイへの厳重警戒（エイガード必須）","干満差による急激な潮位変化に注意","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "球磨川河川緑地・郡築海岸駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "秋の球磨川名物「落ち鮎シーズン」は大型ビッグベイトを河口の流心へ流し込むと、全国屈指のメーターオーバー巨鱸が炸裂。"
  },
  {
    id: "kumamoto-matsushima-pier",
    name: "熊本 天草 松島 合津港・前島親水桟橋",
    kana: "くまもと・あまくさ・まつしま・あいつこう・まえじましんすいさんばし",
    region: "kyushu",
    prefecture: "熊本県",
    address: "熊本県上天草市松島町合津",
    lat: 32.5285,
    lng: 130.4345,
    category: "port",
    description: "天草五橋の4号橋・5号橋近くに位置する風光明媚な親水港湾。潮通しが良く、マダイ・アオリイカ・コウイカ・カワハギ・アジ・チヌ・タチウオが足場の良い桟橋・護岸から楽しめる。",
    accessInfo: "九州自動車道「松橋IC」より国道266号経由で約50分。リゾラテラス天草すぐ。",
    depthRange: "4m〜10m",
    bottomType: "砂泥・敷石・桟橋基礎・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜タチウオ)",
      
    },
    targetFish: ["マダイ","アオリイカ","コウイカ","カワハギ","アジ","クロダイ (チヌ)","タチウオ"],
    bestSeasons: {
      spring: ["マダイ","親アオリイカ","コウイカ","チヌ"],
      summer: ["アジ","カワハギ","タチウオ"],
      autumn: ["アオリイカ（エギング）","タチウオ","カワハギ","マダイ"],
      winter: ["メバル","ガラカブ","寒チヌ"]
    },
    recommendedRigs: ["エギング (3.0〜3.5号)","サビキ釣り","ショアラバ (30〜45g)","胴突きカワハギ仕掛け"],
    localRules: ["観光船・クルーズ船発着所へのキャスト禁止","スミ跡の洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "前島リゾラテラス駐車場 約150台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "観光商業施設・カフェ・大型トイレ併設。"
    },
    tips: "リゾート施設に隣接しファミリーにも最適。秋はエギングでアオリイカやコウイカが手堅く、足元の胴突き仕掛けで良型カワハギが釣れます。"
  },
  {
    id: "oita-seki-port",
    name: "大分 佐賀関 関崎・佐賀関港白灯台",
    kana: "おおいた・さがのせき・せきざき・さがのせきこうはくとうだい",
    region: "kyushu",
    prefecture: "大分県",
    address: "大分県大分市大字佐賀関",
    lat: 33.2545,
    lng: 131.8745,
    category: "port",
    description: "全国ブランド「関アジ・関サバ」を育む豊後水道・速吸瀬戸の激流に突き出た超一級港湾。急潮に揉まれた大アジ（関アジ級）・サバ・ブリ・ハマチ・タチウオ・モイカ（アオリイカ）が狙える名所。",
    accessInfo: "東九州自動車道「大分宮河内IC」より国道197号経由で約30分。JR日豊本線「幸崎駅」よりバス約25分。",
    depthRange: "6m〜18m (豊後水道激流)",
    bottomType: "砂泥・捨石・テトラ・急流スリット",
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
      nightFishingText: "可能 (常夜灯下の大アジ・タチウオ・モイカ)",
      
    },
    targetFish: ["関アジ (大アジ 40cmUP)","関サバ","ブリ・ハマチ","タチウオ","モイカ (アオリイカ)","マダイ"],
    bestSeasons: {
      spring: ["親モイカ","マダイ","大アジ"],
      summer: ["アジ","サバ","タチウオ","青物"],
      autumn: ["モイカ（秋イカ爆釣）","ハマチ・ブリ","タチウオ","大アジ"],
      winter: ["関アジ（寒アジ）","寒サバ","寒ブリ"]
    },
    recommendedRigs: ["遠投カゴ釣り (オキアミ)","ショアジギング (40〜80g)","エギング (3.0〜3.5号 / ヤエン)","タチウオテンヤ"],
    localRules: ["九四フェリー発着所周辺の立ち入り禁止区域遵守","スミ跡の洗い流し","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "佐賀関港・フェリーターミナル駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "道の駅さがのせき・トイレ隣接。"
    },
    tips: "速吸瀬戸の激流が反転する潮ヨレを遠投カゴ釣りやメタルジグで直撃。丸々と太った関アジ級の大アジや青物が強烈に引きます。"
  },
  {
    id: "oita-kunisaki-surf",
    name: "大分 国東半島 奈多海岸サーフ",
    kana: "おおいた・くにさきはんとう・なだかいがんさーふ",
    region: "kyushu",
    prefecture: "大分県",
    address: "大分県杵築市奈多",
    lat: 33.4182,
    lng: 131.6441,
    category: "surf",
    description: "白砂青松の奈多宮・八幡奈多宮の目前に広がる約2kmの遠浅美サーフ。伊予灘に面した穏やかな海で、シロギスの数釣り、座布団ヒラメ、マゴチ、シーバス、青物（ヤズ/サゴシ）が狙える名ポイント。",
    accessInfo: "大分空港道路「杵築IC」より車で約15分。大分空港より車で約10分。",
    depthRange: "1m〜5m",
    bottomType: "極細白砂・サンドバー・海中鳥居周辺浅瀬",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["シロギス (数釣り)","ヒラメ","マゴチ","シーバス","ヤズ・サゴシ","クロダイ"],
    bestSeasons: {
      spring: ["シロギス","シーバス","ヒラメ"],
      summer: ["シロギス（束釣り）","マゴチ","ギザミ"],
      autumn: ["座布団ヒラメ","ヤズ","サゴシ","落ちギス"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["投げ釣り多点仕掛け (3〜6本針)","サーフ用シンキングペンシル (28〜35g)","ジグヘッドワーム (18〜28g)"],
    localRules: ["八幡奈多宮の神域・海中鳥居周辺への配慮","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "奈多海岸駐車場 約100台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "公衆トイレ完備。"
    },
    tips: "沖のブレイクラインへライト投げ仕掛けをキャスト。波打ち際まで良型シロギスが群生し、初夏はマゴチのルアーゲームも有望。"
  },
  {
    id: "oita-tsukumi-rock",
    name: "大分 津久見 保戸島下・四浦半島地磯",
    kana: "おおいた・つくみ・ほとじました・ようらはんとうじいそ",
    region: "kyushu",
    prefecture: "大分県",
    address: "大分県津久見市四浦・落の浦",
    lat: 33.0682,
    lng: 131.9841,
    category: "rock",
    description: "「モイカ（アオリイカ）の聖地」として全国的に有名な四浦半島のリアス地磯・波止群。豊後水道の黒潮が入り込み、大型モイカ、グレ、イシダイ、マダイ、ブリ・ハマチが狙える大分屈指の好釣り場。",
    accessInfo: "東九州自動車道「津久見IC」より車で約25分。JR日豊本線「津久見駅」より車で約20分。",
    depthRange: "5m〜16m",
    bottomType: "岩盤・スリット・海溝・藻場・沈み根",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: false,
      hasNightLight: true,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（夜のヤエン・エギング・アジング）",
      
    },
    targetFish: ["モイカ (アオリイカ 3kgUP)","メジナ (グレ)","イシダイ","マダイ","ブリ・ハマチ","アジ"],
    bestSeasons: {
      spring: ["親モイカ (モンスター級)","乗っ込みマダイ","グレ"],
      summer: ["アジ","青物","イシダイ"],
      autumn: ["モイカ（四浦モイカ祭り爆釣）","ハマチ","グレ"],
      winter: ["寒グレ（尾長）","大型モイカ","寒マダイ"]
    },
    recommendedRigs: ["エギング (3.0〜3.5号)","ヤエン仕掛け (活きアジ泳がせ)","ウキフカセ釣り","ショアジギング (40〜60g)"],
    localRules: ["フェルトスパイク・ライフジャケット着用必須","スミ跡の洗い流し徹底","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "四浦半島各港・展望所駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "秋に開催される「モイカ祭り」で有名な全国最高峰のイカ釣り場。深場の藻場回りをヤエンやエギで探るとキロ超えが連発します。"
  },
  {
    id: "oita-beppu-port",
    name: "大分 別府 別府観光港・上人ヶ浜護岸",
    kana: "おおいた・べっぷ・べっぷかんこうこう・しょうにんがはまごがん",
    region: "kyushu",
    prefecture: "大分県",
    address: "大分県別府市汐見町・上人ケ浜",
    lat: 33.3045,
    lng: 131.5045,
    category: "port",
    description: "日本一の温泉都市・別府湾の中心に位置する大型親水港湾。足場が良く安全で、タチウオ・アジ・サヨリ・チヌ・メバル・アオリイカ・青物がファミリーからルアーマンまで手軽に楽しめる。",
    accessInfo: "大分自動車道「別府IC」より車で約15分。JR日豊本線「別府大学駅」より徒歩約8分。",
    depthRange: "4m〜10m",
    bottomType: "砂泥・敷石・スリット護岸",
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
      nightFishingText: "可能 (常夜灯あり・夜タチウオ/アジング)",
      
    },
    targetFish: ["タチウオ","アジ","サヨリ","クロダイ (チヌ)","メバル","アオリイカ","サゴシ"],
    bestSeasons: {
      spring: ["サヨリ","乗っ込みチヌ","メバル"],
      summer: ["アジ","サバ","タチウオ"],
      autumn: ["タチウオ（爆釣期）","サヨリ","アジ","アオリイカ"],
      winter: ["メバル","寒チヌ","カサゴ"]
    },
    recommendedRigs: ["タチウオテンヤ / ワインド","サヨリ専用カゴウキ仕掛け","サビキ釣り","ジグ単アジング"],
    localRules: ["フェリー・観光船航路へのキャスト禁止","温泉海浜公園利用者の歩行安全確保","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "別府国際観光港・上人ヶ浜公園駐車場 約200台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・別府海浜砂湯隣接。"
    },
    tips: "秋はサヨリカゴ仕掛けで良型サヨリの数釣り、夕方からはワインドやテンヤでタチウオの入れ食いが楽しめます。釣りの後は名湯巡りも最高。"
  },
  {
    id: "miyazaki-kadogawa-rock",
    name: "宮崎 門川 遠見半島・枇杷島地磯",
    kana: "みやざき・かどがわ・とおみはんとう・びわじまじいそ",
    region: "kyushu",
    prefecture: "宮崎県",
    address: "宮崎県東臼杵郡門川町庵川",
    lat: 32.4841,
    lng: 131.6982,
    category: "rock",
    description: "日向灘の黒潮が直撃する遠見半島の断崖地磯群。巨グレ（尾長・口太）・イシダイ・ヒラスズキ・シブダイ（白点）・カンパチが狙える宮崎県北部屈指の超一級磯場。",
    accessInfo: "東九州自動車道「門川IC」より車で約15分。JR日豊本線「門川駅」より車で約10分。",
    depthRange: "6m〜22m (日向灘外洋荒磯)",
    bottomType: "柱状節理岩盤・スリット・海溝・サラシ帯",
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
      nightFishingText: "夜釣り可能（夜のシブダイ・タマン・イサキ）",
      
    },
    targetFish: ["尾長グレ・口太グレ","イシダイ","ヒラスズキ","シブダイ","カンパチ (ネイゴ)","アオリイカ"],
    bestSeasons: {
      spring: ["親アオリイカ","ヒラスズキ","乗っ込みグレ"],
      summer: ["シブダイ（夏の夜釣り王者）","イシダイ","ネイゴ"],
      autumn: ["大型尾長グレ","カンパチ","ヒラスズキ"],
      winter: ["寒グレ（50cm超）","ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ太仕掛け","シブダイぶっこみ仕掛け (イワシ/キビナゴ)","ヒラスズキミノー","エギング (3.5号)"],
    localRules: ["フェルトスパイク・固型式ライジャケ着用必須","急なウネリ・高波に警戒","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "遠見半島展望台・庵川漁港駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "夏の夜釣りは「シブダイ」の超特級ポイント。ぶっこみ仕掛けにキビナゴを付け、暗闇の磯際を狙うと強烈無比な引きで竿が舞い込みます。"
  },
  {
    id: "miyazaki-kushima-rock",
    name: "宮崎 串間 都井岬地磯・築島",
    kana: "みやざき・くしま・といみさきじいそ・つきしま",
    region: "kyushu",
    prefecture: "宮崎県",
    address: "宮崎県串間市大納都井岬",
    lat: 31.3541,
    lng: 131.3412,
    category: "rock",
    description: "野生馬（御崎馬）が生息する都井岬の太平洋大断崖。黒潮本流が磯際をかすめ、超大型ヒラスズキ、イシダイ（本イシ/ガキ）、カンパチ、GT（ロウニンアジ）、尾長グレが狙える宮崎最南端の秘境磯。",
    accessInfo: "宮崎自動車道「都城IC」より国道220号・222号経由で約1時間40分。都井岬灯台駐車場よりエントリー。",
    depthRange: "8m〜30m (黒潮本流直撃断崖)",
    bottomType: "大砂岩岩盤・垂直ドロップオフ・激流海溝・大サラシ",
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
      nightFishingText: "夜釣り可能（夜のクエ・シブダイ・タマン）",
      
    },
    targetFish: ["ヒラスズキ (ランカー)","イシダイ (70cm実績)","カンパチ","GT (ロウニンアジ)","尾長グレ","クエ"],
    bestSeasons: {
      spring: ["大型ヒラスズキ","春カンパチ","親アオリイカ"],
      summer: ["GT","イシダイ","クエ","シブダイ"],
      autumn: ["カンパチ","ヒラスズキ","大型尾長グレ"],
      winter: ["寒グレ（尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ヒラスズキ専用タックル (ヘビーミノー 140mm)","イシダイ仕掛け (瀬ズレワイヤー + ウニ/ガンガゼ)","ショアジギング (80〜120g)"],
    localRules: ["野生馬への接近・餌やり禁止","フェルトスパイク・ライフジャケット完全着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "都井岬観光案内所・灯台駐車場 約100台",
      fee: "無料（都井岬野生馬保護協力金 軽・普通車400円）",
      hours: "24時間利用可能",
      notes: "トイレ・観光売店完備。"
    },
    tips: "黒潮の怒涛のサラシが広がる磯際へヘビーミノーを通すと、体高のあるランカーヒラスズキが猛烈にバイト。イシダイ釣り師にも垂涎の的。"
  },
  {
    id: "miyazaki-nobeoka-port",
    name: "宮崎 延岡 五ヶ瀬川河口・延岡新港",
    kana: "みやざき・のべおか・ごかせがわかこう・のべおかしんこう",
    region: "kyushu",
    prefecture: "宮崎県",
    address: "宮崎県延岡市新浜町・大武町",
    lat: 32.5541,
    lng: 131.7041,
    category: "surf",
    description: "大瀬川・五ヶ瀬川の二大河川が日向灘に注ぐ大河口サーフ＆新港岸壁。幻の怪魚「アカメ（メーター級超）」、オオニベ、座布団ヒラメ、ランカーシーバス、アジ、タチウオが狙える宮崎県屈指のモンスター汽水域。",
    accessInfo: "東九州自動車道「延岡IC」または「延岡南IC」より車で約15分。JR日豊本線「延岡駅」より車で約15分。",
    depthRange: "2m〜9m",
    bottomType: "細砂・河口サンドバー・捨石・岸壁",
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
      nightFishingText: "可能 (夜のアカメ・オオニベ・シーバス狙い)",
      
    },
    targetFish: ["アカメ (メーター級怪魚)","オオニベ","ヒラメ","シーバス","タチウオ","アジ","マゴチ"],
    bestSeasons: {
      spring: ["シーバス","シロギス","ヒラメ"],
      summer: ["アカメ（夏の夜釣り夢の怪魚）","マゴチ","タチウオ"],
      autumn: ["オオニベ","座布団ヒラメ","ランカーシーバス","アカメ"],
      winter: ["寒ヒラメ","シーバス"]
    },
    recommendedRigs: ["アカメ専用ヘビータックル (PE4〜6号 + 大型ミノー/コノシロ型ビッグベイト)","サーフ用シンペン (35〜45g)","タチウオテンヤ"],
    localRules: ["アカメ捕獲時の生息環境保護ルール遵守（キャッチ＆イグジット推奨）","ライフジャケット着用","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "延岡新港親水緑地・河口公園駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "夏〜秋の夜釣りでコノシロやボラがざわつく河口の明暗部へビッグベイトを流し込むと、赤い目が光る巨大魚アカメが豪快に水面を破ります。"
  },
  {
    id: "kagoshima-yakushima-rock",
    name: "鹿児島 屋久島 栗生・永田いなか浜地磯",
    kana: "かごしま・やくしま・くりお・ながたいなかはまじいそ",
    region: "kyushu",
    prefecture: "鹿児島県",
    address: "鹿児島県熊毛郡屋久島町栗生・永田",
    lat: 30.3541,
    lng: 130.4182,
    category: "rock",
    description: "世界自然遺産・屋久島を取り囲む超弩級の花崗岩地磯。黒潮本流が直接ぶつかり、GT（ロウニンアジ 30kg超）、大型カンパチ、タマン（ハマフエフキ）、巨大クエ、カスミアジがショアから狙える世界最高峰の怪魚パラダイス。",
    accessInfo: "屋久島空港または宮之浦港より車で約40分。栗生タイドプールまたは永田灯台周辺よりエントリー。",
    depthRange: "6m〜30m (黒潮本流直撃)",
    bottomType: "巨大花崗岩岩盤・スリット・海溝・サンゴ礁リーフ",
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
      nightFishingText: "夜釣り可能（夜のタマン・クエ・シブダイ）",
      
    },
    targetFish: ["GT (ロウニンアジ 30kgUP)","カンパチ (10kgUP)","タマン (ハマフエフキ)","クエ (アラ)","カスミアジ","シイラ"],
    bestSeasons: {
      spring: ["春GT","カンパチ","親アオリイカ"],
      summer: ["モンスターGT","タマン","クエ","シイラ"],
      autumn: ["GT","大型カンパチ","カスミアジ"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ","カンパチ"]
    },
    recommendedRigs: ["ヘビーGTキャスティングタックル (大型ポッパー/ダイペン 180〜230mm)","タマンぶっこみ仕掛け (極太タマン針 + イカ1杯掛け)"],
    localRules: ["フェルトスパイク・固型式ライジャケ着用必須","ウミガメ産卵地（永田）の保護期間ルール遵守","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "栗生海水浴場・永田いなか浜駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "黒潮が押し寄せる潮目へ大型ポッパーをフルキャストして強烈ポップ。ドカンッ！と30kg超のGTがルアーを吸い込む衝撃は一生の思い出に。"
  },
  {
    id: "kagoshima-makurazaki-port",
    name: "鹿児島 薩摩 枕崎港・火之神公園立神岩地磯",
    kana: "かごしま・さつま・まくらざきこう・ひのかみこうえんたてがみいわじいそ",
    region: "kyushu",
    prefecture: "鹿児島県",
    address: "鹿児島県枕崎市火之神岬町・港町",
    lat: 31.2545,
    lng: 130.2845,
    category: "port",
    description: "カツオ節生産日本一の町・枕崎の南端に位置する大自然ポイント。東シナ海にそびえるシンボル「立神岩」周辺の地磯と枕崎港大波止から、大型青物（ブリ/カンパチ/カツオ）、ヒラスズキ、グレ、イシダイ、アオリイカが狙える名所。",
    accessInfo: "指宿スカイライン「頴娃IC」より車で約30分。JR指宿枕崎線「枕崎駅」より車で約8分。",
    depthRange: "5m〜18m",
    bottomType: "溶岩岩礁・捨石・テトラ・激流スリット",
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
      nightFishingText: "可能 (夜釣りでのタマン・シブダイ・アジング)",
      
    },
    targetFish: ["ハガツオ・カツオ","カンパチ (ネイゴ)","ブリ・ハマチ","ヒラスズキ","メジナ (グレ)","イシダイ","アオリイカ"],
    bestSeasons: {
      spring: ["ハガツオ","親アオリイカ","ヒラスズキ"],
      summer: ["ネイゴ","カツオ","シブダイ（夜釣り）"],
      autumn: ["青物（ブリ/カンパチ）","アオリイカ","ハガツオ"],
      winter: ["寒グレ（尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ショアジギング (40〜80g)","ダイビングペンシル (140〜180mm)","ウキフカセ釣り","エギング (3.5号)"],
    localRules: ["火之神公園キャンプ場利用者の安全確保","磯場でのスパイク・ライジャケ着用","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "火之神公園駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "キャンプ場・トイレ・展望台完備。"
    },
    tips: "秋〜初冬は立神岩沖を回遊するハガツオやカンパチがメタルジグに猛烈ヒット。磯周りのサラシではヒラスズキも絶好調。"
  },
  {
    id: "okinawa-ishigakijima-surf",
    name: "沖縄 石垣島 米原ビーチ・平久保崎リーフサーフ",
    kana: "おきなわ・いしがきじま・よねばらびーち・ひらくぼざきりーふさーふ",
    region: "okinawa",
    prefecture: "沖縄県",
    address: "沖縄県石垣市字桴海・平久保",
    lat: 24.4541,
    lng: 124.1841,
    category: "surf",
    description: "八重山諸島の中心・石垣島北部のエメラルドグリーンリーフサーフ。広大なサンゴ礁リーフエッジとインリーフから、タマン（ハマフエフキ）、ガーラ（GT/カスミアジ）、ミーバイ（スジアラ）、クチナジ、ウムナガーが狙える南国パラダイス。",
    accessInfo: "石垣空港（南ぬ島石垣空港）より車で約25分。石垣港離島ターミナルより車で約35分。",
    depthRange: "1m〜6m (リーフエッジ以深急深)",
    bottomType: "サンゴ礁リーフ・白砂・インリーフスリット・ドロップオフ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りの大型タマン・ガーラ打ち込み)",
      
    },
    targetFish: ["タマン (ハマフエフキ)","ガーラ (GT/カスミアジ)","ミーバイ (スジアラ/アカジン)","クチナジ (イソフエフキ)","ダツ","アオリイカ (アオリ)"],
    bestSeasons: {
      spring: ["タマン（打ち込み最盛期）","ガーラ","クブシミ"],
      summer: ["タマン","GT","ミーバイ","ダツ"],
      autumn: ["ガーラ","タマン","クチナジ","アオリイカ"],
      winter: ["ミーバイ","クブシミ（巨大コウイカ）","タマン"]
    },
    recommendedRigs: ["タマン・ガーラ打ち込み仕掛け (PE6〜8号 + タマン針22〜24号 + イカ短冊)","リーフライトゲーム (スプーン 7〜14g / シンペン)"],
    localRules: ["サンゴ礁の踏み荒らし・破壊絶対禁止","毒魚（オニダルマオコゼ・ウミヘビ等）に厳重注意","厚底マリンシューズ着用"],
    parkingDetails: {
      capacity: "米原キャンプ場・ビーチ駐車場 約60台（有料・1日500円）",
      fee: "有料 (500円)",
      hours: "24時間利用可能",
      notes: "トイレ・シャワー完備。"
    },
    tips: "夜釣りではイカやタコをエサにした「打ち込み釣り」で70cm級のタマンが竿尻を跳ね上げる豪快なアタリ。日中はスプーンのライトゲームで多彩な南国魚が遊んでくれます。"
  },
  {
    id: "okinawa-motobu-port",
    name: "沖縄 本島 本部 本部港・備瀬崎リーフ",
    kana: "おきなわ・ほんとう・もとぶ・もとぶこう・びせざきりーふ",
    region: "okinawa",
    prefecture: "沖縄県",
    address: "沖縄県国頭郡本部町崎本部・備瀬",
    lat: 26.6545,
    lng: 127.8785,
    category: "port",
    description: "美ら海水族館のお膝元に位置する沖縄本島北部屈指の名港＆リーフ。伊江島航路の水深があり潮通し抜群で、ガラサーミーバイ（イシダイ/イシガキダイ）、ガーラ（ロウニンアジ）、タマン、トカジャー、グルクン、カツオが狙える大物ポイント。",
    accessInfo: "沖縄自動車道「許田IC」より国道58号・449号経由で約35分。美ら海水族館より車で約10分。",
    depthRange: "4m〜16m",
    bottomType: "琉球石灰岩・サンゴ礁・捨石・岸壁スリット",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜の打ち込み)",
      
    },
    targetFish: ["ガラサーミーバイ (イシガキダイ)","ガーラ (GT/ロウニンアジ)","タマン","グルクン","トカジャー","カツオ","アオリイカ"],
    bestSeasons: {
      spring: ["ガラサーミーバイ","タマン","グルクン"],
      summer: ["ガーラ (GT)","カツオ","タマン","ダツ"],
      autumn: ["ガーラ","ガラサーミーバイ","アオリイカ","グルクン"],
      winter: ["トカジャー","ミーバイ","クブシミ"]
    },
    recommendedRigs: ["ガラサー仕掛け (ワイヤーハリス + ウニ/ヤドカリ)","タマン打ち込み仕掛け","サビキ釣り (グルクン用サビキ)","エギング (3.5号)"],
    localRules: ["フェリー発着所周辺の立ち入り制限遵守","琉球石灰岩でのスパイク着用","ゴミ完全持ち帰り"],
    parkingDetails: {
      capacity: "本部港・備瀬崎駐車場 約100台",
      fee: "無料（備瀬崎一部有料500円）",
      hours: "24時間利用可能",
      notes: "フェリーターミナル・トイレ完備。"
    },
    tips: "沖向き堤防の角やテトラ際はガラサーミーバイの超名所。夜間は打ち込み仕掛けで大型タマンやガーラが狙えます。"
  },
  {
    id: "iwate-kamaishi-port",
    name: "岩手 三陸 釜石港 T字岸壁・公共埠頭",
    kana: "いわて・さんりく・かまいしこう・てぃーじがんぺき",
    region: "tohoku",
    prefecture: "岩手県",
    address: "岩手県釜石市港町",
    lat: 39.2718,
    lng: 141.8925,
    category: "port",
    description: "リアス海岸の奥深くに位置する天然の良港。水深があり足場が良く、アイナメ・ドンコ・ヒラメ・ヤリイカ・サバ・マイワシ・タチウオ・サケが狙える三陸屈指の大人気岸壁。",
    accessInfo: "釜石自動車道「釜石中央IC」より車で約8分。JR釜石線「釜石駅」より車で約5分。",
    depthRange: "6m〜15m",
    bottomType: "砂泥・敷石・岸壁",
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
      nightFishingText: "可能 (常夜灯下でのヤリイカ・ソイ・ドンコ)",
      
    },
    targetFish: ["アイナメ","ドンコ","ヒラメ","ヤリイカ","サバ","マイワシ","クロソイ","タチウオ","サケ"],
    bestSeasons: {
      spring: ["カレイ","ヤリイカ","アイナメ"],
      summer: ["サバ","マイワシ","ヒラメ","アナゴ"],
      autumn: ["ヤリイカ","サケ","アイナメ","クロソイ"],
      winter: ["ドンコ（エゾイソアイナメ）","ヤリイカ","クロソイ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号 / テーラー)","テキサスリグ / ブラクリ","サビキ釣り","投げ釣り仕掛け"],
    localRules: ["関係者専用岸壁への立ち入り禁止","ゴミの完全持ち帰り","ライフジャケット着用"],
    parkingDetails: {
      capacity: "岸壁周辺に駐車スペース多数",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "荷役エリア外に駐車。"
    },
    tips: "秋〜冬の夜釣りで常夜灯周辺にヤリイカの群れが回遊。底をブラクリやジグヘッドで探れば特大ドンコやアイナメが楽しめます。"
  },
  {
    id: "iwate-ofunato-rock",
    name: "岩手 陸前高田 広田半島・黒崎地磯",
    kana: "いわて・りくぜんたかた・ひろたはんとう・くろさきじいそ",
    region: "tohoku",
    prefecture: "岩手県",
    address: "岩手県陸前高田市広田町黒崎",
    lat: 38.9624,
    lng: 141.7135,
    category: "rock",
    description: "太平洋に突き出た広田半島の先端。三陸特有のリアス大岩礁帯で、50cm超のモンスターアイナメ、ベッコウゾイ（タケノコメバル）、ヒラメ、青物、ヤリイカが狙える全国屈指のロックフィッシュ聖地。",
    accessInfo: "三陸沿岸道路「陸前高田長部IC」より車で約25分。黒崎神社・黒崎展望台駐車場より徒歩で磯へエントリー。",
    depthRange: "5m〜20m",
    bottomType: "大岩礁帯・海溝・スリット・海藻帯",
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
      nightFishingText: "可能 (夜釣りの大型クロソイ・ヤリイカ)",
      
    },
    targetFish: ["アイナメ (50cmUP)","ベッコウゾイ","クロソイ","ヒラメ","青物（イナダ/ワラサ）","ドンコ","ヤリイカ"],
    bestSeasons: {
      spring: ["乗っ込みアイナメ","ヤリイカ","ヒラメ"],
      summer: ["青物","ヒラメ","クロソイ"],
      autumn: ["アイナメ（婚姻色特大）","ベッコウゾイ","ヤリイカ"],
      winter: ["大型アイナメ","ドンコ","クロソイ"]
    },
    recommendedRigs: ["ロックフィッシュ専用ヘビーテキサス (14〜28g)","フリーリグ","ショアジギング (40〜60g)"],
    localRules: ["フェルトスパイクシューズ・固型式ライフジャケット着用必須","急なウネリ・高波に警戒","荷物は背負子で運搬"],
    parkingDetails: {
      capacity: "黒崎展望台駐車場 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。磯へは徒歩10〜15分。"
    },
    tips: "沈み根の隙間や海溝のエッジへテキサスリグを落とし込み、リフト＆フォール。ゴンッ！と竿先を引ったくる強烈なバイトが出ます。"
  },
  {
    id: "iwate-kuji-port",
    name: "岩手 北三陸 久慈港 湾内岸壁・半崎波止",
    kana: "いわて・きたさんりく・くじこう・はんざきはと",
    region: "tohoku",
    prefecture: "岩手県",
    address: "岩手県久慈市侍浜町・長内町",
    lat: 40.1988,
    lng: 141.8024,
    category: "port",
    description: "北三陸を代表する港湾。沖の防波堤と湾内岸壁からなり、アイナメ・クロソイ・ドンコ・ウミタナゴ・チカ・サケ・ヤリイカ・カレイの実績が高い好釣り場。",
    accessInfo: "八戸久慈自動車道「久慈IC」より車で約10分。JR八戸線・三陸鉄道「久慈駅」より車で約12分。",
    depthRange: "4m〜12m",
    bottomType: "砂泥・捨石・テトラ・岸壁",
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
      nightFishingText: "可能 (常夜灯周りでのロックフィッシュ・イカ)",
      
    },
    targetFish: ["アイナメ","クロソイ","ドンコ","チカ","ウミタナゴ","イシガレイ","ヤリイカ","サケ"],
    bestSeasons: {
      spring: ["チカ","ウミタナゴ","イシガレイ","ヤリイカ"],
      summer: ["アイナメ","サバ","イワシ"],
      autumn: ["サケ（アキアジ）","アイナメ","クロソイ","ヤリイカ"],
      winter: ["ドンコ","チカ","クロソイ"]
    },
    recommendedRigs: ["サビキ釣り (チカ/イワシ用)","テキサスリグ / ブラクリ","投げ釣り仕掛け"],
    localRules: ["関係者以外立ち入り禁止区域を遵守","ゴミの完全持ち帰り","ライフジャケット着用"],
    parkingDetails: {
      capacity: "港内駐車スペース多数",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "作業エリアを避けて駐車。"
    },
    tips: "春と冬は足元のサビキでチカの数釣り、夜はテトラの穴釣りや岸壁際でドンコ汁用の良型ドンコが手堅く釣れます。"
  },
  {
    id: "iwate-takada-matsubara-surf",
    name: "岩手 陸前高田 高田松原海岸サーフ",
    kana: "いわて・りくぜんたかた・たかたまつばらかいがんさーふ",
    region: "tohoku",
    prefecture: "岩手県",
    address: "岩手県陸前高田市気仙町",
    lat: 39.0042,
    lng: 141.6324,
    category: "surf",
    description: "気仙川の河口と広田湾に面した美しい復興砂浜サーフ。淡水と海水が交わる豊かな海域で、座布団ヒラメ・マゴチ・イシガレイ・シーバス・青物が狙える三陸屈指のサーフポイント。",
    accessInfo: "三陸沿岸道路「陸前高田IC」より車で約5分。高田松原津波復興祈念公園（道の駅高田松原）すぐ。",
    depthRange: "1.5m〜6m",
    bottomType: "砂底・気仙川河口サンドバー・カケアガリ",
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
      nightFishingText: "可能 (夜間のシーバス・マゴチ狙い)",
      
    },
    targetFish: ["ヒラメ","マゴチ","イシガレイ","マコガレイ","シーバス","イナダ","シロギス"],
    bestSeasons: {
      spring: ["カレイ","シーバス","シロギス"],
      summer: ["マゴチ","ヒラメ","シロギス"],
      autumn: ["座布団ヒラメ","イナダ","ランカーシーバス"],
      winter: ["イシガレイ","寒ヒラメ"]
    },
    recommendedRigs: ["サーフ用シンキングペンシル (30g)","メタルジグ (30〜40g)","カレイ投げ釣り仕掛け"],
    localRules: ["ウェーダー・ライフジャケット着用必須","気仙川河口の流れの変化に注意","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "道の駅 高田松原駐車場 約300台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・商業施設隣接。"
    },
    tips: "気仙川の払い出し（カレント）周辺にベイトが集結。シンペンやワームを遠投してカケアガリを通すと大型フラットフィッシュがヒットします。"
  },
  {
    id: "hiroshima-onomichi-rock",
    name: "広島 尾道 しまなみ海道 向島・因島地磯",
    kana: "ひろしま・おのみち・しまなみかいどう・むかいしま・いんのしまじいそ",
    region: "chugoku",
    prefecture: "広島県",
    address: "広島県尾道市向島町・因島大浜町",
    lat: 34.3782,
    lng: 133.1982,
    category: "rock",
    description: "しまなみ海道の急流水道に面した島しょ部地磯群。布刈瀬戸などの激流が洗う岩礁帯で、アコウ（高級魚キジハタ）、マダイ（ショアラバ）、チヌ、アオリイカ、メバルが狙える瀬戸内屈指のロック＆タイラバフィールド。",
    accessInfo: "西瀬戸自動車道（しまなみ海道）「向島IC」または「因島北IC」より車で約10分。",
    depthRange: "4m〜15m (急流瀬戸)",
    bottomType: "岩盤・砂礫・スリット・海藻帯",
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
      nightFishingText: "夜釣り可能（夜のアコウ・メバリング）",
      
    },
    targetFish: ["アコウ (キジハタ 40cmUP)","マダイ","クロダイ (チヌ)","アオリイカ","メバル","アジ"],
    bestSeasons: {
      spring: ["ショア真鯛","乗っ込みチヌ","メバル"],
      summer: ["アコウ（最盛期）","アジ","チヌ"],
      autumn: ["アオリイカ","アコウ","マダイ","タチウオ"],
      winter: ["メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["テキサスリグ / フリーリグ (14〜28g)","ショアラバ (30〜60g)","エギング (3.0〜3.5号)","プラグメバリング"],
    localRules: ["フェルトスパイク・ライフジャケット着用必須","潮流による仕掛け流されに注意","ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "因島大橋記念公園駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "急流が岩礁に当たってヨレるポイントへフリーリグを送り込みリフト＆フォール。ゴンッ！とアコウがワームをひったくります。"
  },
  {
    id: "hiroshima-kure-port",
    name: "広島 呉 倉橋島 音戸・室尾漁港波止",
    kana: "ひろしま・くれ・くらはしじま・おんど・むろおぎょこうはと",
    region: "chugoku",
    prefecture: "広島県",
    address: "広島県呉市倉橋町室尾・音戸町",
    lat: 34.1285,
    lng: 132.5485,
    category: "port",
    description: "音戸の瀬戸を渡った先の倉橋島南部に位置する名港。潮通しが極めて良く、アジ（良型アジング）、タチウオ、アオリイカ、メバル、チヌ、青物が一年中狙える広島屈指のライトゲーム＆エギング聖地。",
    accessInfo: "広島呉道路「呉IC」より国道487号経由で約40分（音戸大橋・第二音戸大橋経由）。",
    depthRange: "5m〜13m",
    bottomType: "砂泥・捨石・基礎スリット・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・メバリング・タチウオ)",
      
    },
    targetFish: ["アジ (尺アジ)","タチウオ","アオリイカ","メバル","クロダイ (チヌ)","ハマチ","アコウ"],
    bestSeasons: {
      spring: ["親アオリイカ","メバル","チヌ"],
      summer: ["アジ","アコウ","タチウオ"],
      autumn: ["タチウオ（爆釣）","アオリイカ","アジ","青物"],
      winter: ["大アジ（寒アジング）","メバル","ガシラ"]
    },
    recommendedRigs: ["ジグ単アジング (0.8〜1.5g)","タチウオテンヤ / ワインド","エギング (3.0号)","ウキフカセ釣り"],
    localRules: ["漁港荷役エリア・漁船の係留ロープへの配慮","スミ跡の洗い流し","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "室尾漁港周辺駐車スペース 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "夜間は常夜灯の明暗部へジグヘッドをキャストし、フォールで誘うと尺超えアジが連発。秋のタチウオテンヤも実績大。"
  },
  {
    id: "hiroshima-etajima-surf",
    name: "広島 江田島 長浜・がんねムーンビーチサーフ",
    kana: "ひろしま・えたじま・ながはま・がんねむーんびーちさーふ",
    region: "chugoku",
    prefecture: "広島県",
    address: "広島県江田島市沖美町是長・大柿町",
    lat: 34.2042,
    lng: 132.4182,
    category: "surf",
    description: "瀬戸内海の多島美を一望する江田島西海岸の美しい砂浜サーフ。穏やかな遠浅海岸で、シロギス、マゴチ、チヌ（渚釣り）、ヒラメ、シーバス、イイダコが狙えるファミリーにも人気のポイント。",
    accessInfo: "広島呉道路「呉IC」より早瀬大橋経由で約1時間、または宇品港よりフェリー約30分。",
    depthRange: "1m〜5m",
    bottomType: "細砂・アマモ場・沖合サンドバー",
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
      nightFishingText: "可能 (夜間のシーバス・チヌ渚釣り)",
      
    },
    targetFish: ["シロギス","マゴチ","クロダイ (チヌ)","ヒラメ","イイダコ","シーバス"],
    bestSeasons: {
      spring: ["シロギス","チヌ","シーバス"],
      summer: ["シロギス（数釣り）","マゴチ","ギザミ"],
      autumn: ["イイダコ","ヒラメ","落ちギス","チヌ"],
      winter: ["カレイ","アイナメ"]
    },
    recommendedRigs: ["チョイ投げ仕掛け (2〜3本針)","ジグヘッドワーム (14〜21g)","渚フカセ仕掛け"],
    localRules: ["海水浴エリアでの遊泳者優先","ライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "長浜・がんねムーンビーチ駐車場 約80台",
      fee: "無料（夏季一部有料）",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "沖のアマモ場の切れ目をチョイ投げで探ると20cm超の良型シロギスが連発。初夏〜秋はマゴチのルアーゲームも有望。"
  },
  {
    id: "hiroshima-fukuyama-port",
    name: "広島 福山 内海町 田島・横島波止",
    kana: "ひろしま・ふくやま・うつみちょう・たしま・よこしまはと",
    region: "chugoku",
    prefecture: "広島県",
    address: "広島県福山市内海町田島・横島",
    lat: 34.3545,
    lng: 133.3245,
    category: "port",
    description: "内海大橋・睦橋で本土と結ばれた田島・横島の漁港群。備後灘の豊かな潮流に恵まれ、アオリイカ・タチウオ・チヌ・メバル・アジ・マダコ・ママカリが年中狙える福山・備後エリアのメイン釣り場。",
    accessInfo: "山陽自動車道「福山西IC」より車で約35分。JR山陽本線「松永駅」より車で約25分。",
    depthRange: "3m〜9m",
    bottomType: "砂泥・捨石・基礎スリット・藻場",
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
      nightFishingText: "可能 (常夜灯下のアジング・メバリング・タチウオ)",
      
    },
    targetFish: ["アオリイカ","タチウオ","クロダイ (チヌ)","メバル","アジ","マダコ","ママカリ"],
    bestSeasons: {
      spring: ["乗っ込みチヌ","メバル","コウイカ"],
      summer: ["マダコ","アジ","ママカリ"],
      autumn: ["アオリイカ","タチウオ","イイダコ","チヌ"],
      winter: ["メバル","カサゴ","寒チヌ"]
    },
    recommendedRigs: ["エギング (2.5〜3.5号)","タチウオテンヤ / ワインド","サビキ釣り","フカセ釣り"],
    localRules: ["漁港内でのアイドリングストップ・騒音防止","スミ跡の洗い流し","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "クレセントビーチ・各港周辺駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "内海大橋周辺の水道部は潮通し抜群。秋はエギングでのアオリイカ、夜釣りでのタチウオやアジのウキ釣りが大人気です。"
  },
  {
    id: "yamaguchi-tsunoshima-rock",
    name: "山口 下関 角島・角島灯台下地磯",
    kana: "やまぐち・しものせき・つのしま・つのしまとうだいしたじいそ",
    region: "chugoku",
    prefecture: "山口県",
    address: "山口県下関市豊北町角島",
    lat: 34.3541,
    lng: 130.8482,
    category: "rock",
    description: "エメラルドグリーンの絶景海峡「角島大橋」で知られる角島の先端地磯。日本海と響灘の潮流がぶつかり、ヒラマサ・ヒラスズキ・アオリイカ・大型グレ・マダイ・イシダイが狙える山口県屈指の一級磯。",
    accessInfo: "中国自動車道「美祢IC」より国道435号経由で約1時間10分。角島灯台公園駐車場より磯へエントリー。",
    depthRange: "5m〜18m (日本海潮流)",
    bottomType: "玄武岩岩盤・スリット・海溝・サラシ帯",
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
      nightFishingText: "夜釣り可能（大波・足元に十分注意）",
      
    },
    targetFish: ["ヒラマサ","ヒラスズキ","アオリイカ","メジナ (グレ)","マダイ","イシダイ","ヤズ・ネリゴ"],
    bestSeasons: {
      spring: ["春ヒラマサ","親アオリイカ","ヒラスズキ"],
      summer: ["ネリゴ（カンパチ幼魚）","イシダイ","キジハタ"],
      autumn: ["秋ヒラマサ","アオリイカ","ヒラスズキ","グレ"],
      winter: ["寒グレ（大型尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ロックショアジギング (60〜100g)","ダイビングペンシル (140〜180mm)","ヒラスズキ専用ミノー","エギング (3.5号)"],
    localRules: ["フェルトスパイク・ライフジャケット着用必須","観光客への配慮と安全確保","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "角島灯台公園駐車場 約100台（有料・1回300円）",
      fee: "有料 (300円)",
      hours: "24時間利用可能",
      notes: "トイレ・観光売店完備。"
    },
    tips: "北西風でサラシが広がるタイミングはヒラスズキの独壇場。潮目が磯際を通るときにダイビングペンシルを引けばヒラマサが水面を割ります。"
  },
  {
    id: "tokyo-hachijojima-yaene",
    name: "東京 八丈島 八重根港・八重根タイドプール地磯",
    kana: "とうきょう・はちじょうじま・やえねこう・やえねたいどぷーるじいそ",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都八丈島八丈町大賀郷",
    lat: 33.1024,
    lng: 139.7741,
    category: "port",
    description: "黒潮本流が島を取り巻く八丈島西岸の超一級ビッグゲームポイント。港内の深い澪筋や外側溶岩地磯から、大型シマアジ・カンパチ・ヒラマサ・キハダマグロ・尾長グレ・アカハタ・タカベ・ナンヨウカイワリが狙える全国の離島アングラー憧れの聖地。",
    accessInfo: "八丈島空港より車で約10分、または底土港より車で約15分。八重根港岸壁すぐ。",
    depthRange: "6m〜20m (黒潮本流急深)",
    bottomType: "玄武岩溶岩・捨石・急深スリット・海溝",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜フカセシマアジ)",
      
    },
    targetFish: ["シマアジ (大型)","カンパチ (ショゴ/ネリゴ)","ヒラマサ","キハダマグロ","尾長グレ (60cmUP)","アカハタ","タカベ","ナンヨウカイワリ"],
    bestSeasons: {
      spring: ["シマアジ (夜釣り/朝マズメ)","ヒラマサ","親アオリイカ","乗っ込み尾長グレ"],
      summer: ["キハダマグロ","カンパチ","タカベ","アカハタ","シイラ"],
      autumn: ["大型シマアジ","カンパチ","ナンヨウカイワリ","青物"],
      winter: ["寒グレ（ロクマル尾長）","シマアジ","ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ太仕掛け (道糸4〜6号/ハリス4〜6号 + オキアミ)","ショアジギング (60〜100g)","カゴ釣り (ハリス6〜8m)","タイドプール・ロックフィッシュリグ"],
    localRules: ["外側テトラ・溶岩磯でのスパイクシューズ・固型式ライフジャケット着用必須","定期船・給油作業エリアへの立ち入り禁止","コマセ汚れの海水洗い流し・ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "八重根港内駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・休憩所完備。タイドプール遊歩道隣接。"
    },
    tips: "八丈島名物のシマアジは朝夕マズメや夜釣りのウキフカセ・カゴ釣りが本番。ウキが海中へ消し込む電撃バイトに素早くアワセ、強烈な横走りを耐えて根から引き剥がします。"
  },
  {
    id: "tokyo-hachijojima-sokodo",
    name: "東京 八丈島 底土港・底土海水浴場波止",
    kana: "とうきょう・はちじょうじま・そこどこう・そこどかいすいよくじょうはと",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都八丈島八丈町三根",
    lat: 33.1241,
    lng: 139.8182,
    category: "port",
    description: "東京（竹芝）からの大型定期船「橘丸」が発着する八丈島のメイン港。大型客船が接岸するため足元から水深が15m以上あり、シマアジ・ヒラマサ・カンパチ・ムロアジ・タマン・アオリイカが堤防から手軽に狙える屈指の大物ポイント。",
    accessInfo: "底土客船ターミナル直結。八丈島空港より車で約10分。",
    depthRange: "8m〜18m",
    bottomType: "砂泥・基礎捨石・大型ケーソン岸壁",
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
      nightFishingText: "可能 (常夜灯下でのムロアジサビキ・夜釣り)",
      
    },
    targetFish: ["シマアジ","ヒラマサ","カンパチ","ムロアジ","タマン (ハマフエフキ)","アオリイカ","アカハタ"],
    bestSeasons: {
      spring: ["シマアジ","ヒラマサ","親アオリイカ"],
      summer: ["ムロアジ（生きエサ用）","カンパチ","タマン","シイラ"],
      autumn: ["大型シマアジ","ヒラマサ","カンパチ","アオリイカ"],
      winter: ["寒グレ","シマアジ","メバル"]
    },
    recommendedRigs: ["カゴ釣り (両軸/スピニング遠投)","泳がせノマセ釣り (活きムロアジ)","ショアジギング (60〜80g)","サビキ釣り"],
    localRules: ["東海汽船客船の入出港作業中は指定エリアへの立ち入り・釣り禁止","岸壁でのライフジャケット着用","ゴミの持ち帰り"],
    parkingDetails: {
      capacity: "底土港船客待合所駐車場 約80台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・待合所・自販機完備。"
    },
    tips: "サビキで足元のムロアジを確保し、エレベーター仕掛けやウキ泳がせで投入するとヒラマサやカンパチが一発で竿を絞り込みます。"
  },
  {
    id: "tokyo-ogasawara-chichijima-futami",
    name: "東京 小笠原 父島 二見港・青灯台桟橋",
    kana: "とうきょう・おがさわら・ちちじま・ふたみこう・あおとうだいさんばし",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都小笠原村父島東町・西町",
    lat: 27.0941,
    lng: 142.1941,
    category: "port",
    description: "世界自然遺産・小笠原諸島父島の海の玄関口「おがさわら丸」が接岸する二見港と青灯台桟橋。透明度抜群のボニンブルーの海で、堤防からGT（ロウニンアジ）・キハダマグロ・シロダイ・アカバ（アカハタ）・タマン・サワラ・ナンヨウカイワリが狙える日本屈指のモンスターフィールド。",
    accessInfo: "東京・竹芝桟橋より定期船「おがさわら丸」で約24時間。二見港客船待合所より徒歩すぐ。",
    depthRange: "6m〜20m",
    bottomType: "サンゴ礁・砂泥・岸壁ケーソン・捨石",
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
      nightFishingText: "可能 (常夜灯下での夜サメ・GT・タマン打ち込み)",
      
    },
    targetFish: ["GT (ロウニンアジ 20kg超)","キハダマグロ","シロダイ","アカバ (アカハタ)","タマン","サワラ (オキサワラ)","ナンヨウカイワリ"],
    bestSeasons: {
      spring: ["大型シロダイ","タマン","キハダマグロ"],
      summer: ["GT（ロウニンアジ）","サワラ","アカバ","ナンヨウカイワリ"],
      autumn: ["GT","キハダマグロ","カンパチ","シロダイ"],
      winter: ["アカバ","大型GT","タマン"]
    },
    recommendedRigs: ["ヘビーキャスティングタックル (大型ポッパー/ダイペン 160〜200mm)","タマン・シロダイ打ち込み仕掛け (PE6〜8号 + ムロアジ1匹掛け)","メタルジグ (40〜80g)"],
    localRules: ["世界自然遺産小笠原のルール・外来種持ち込み防止の徹底","ウミガメ・エイ等への配慮","定期船入出港時の作業エリア規制遵守","ゴミの完全持ち帰り"],
    parkingDetails: {
      capacity: "二見港船客待合所周辺 約30台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "観光案内所・大型トイレ・売店完備。"
    },
    tips: "夕マズメから夜間にかけて青灯台周辺へ回遊してくるGTやシロダイは圧巻。ムロアジを泳がせるか、大型ポッパーのポッピングで水面が爆発します。"
  },
  {
    id: "tokyo-ogasawara-chichijima-miyanohama",
    name: "東京 小笠原 父島 宮之浜・兄島海峡リーフ",
    kana: "とうきょう・おがさわら・ちちじま・みやのはま・あにじまかいきょうりーふ",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都小笠原村父島宮之浜",
    lat: 27.1082,
    lng: 142.1882,
    category: "rock",
    description: "父島北部、兄島瀬戸の激流に面した白砂ビーチと巨大リーフ地磯。ボニンブルーの急流に大型カスミアジ・カンパチ・イソマグロ・アカバ・タマン・ダツが群れ、シュノーケリングでも魚影が確認できる大自然パラダイス。",
    accessInfo: "二見港集落（大村地区）より車で約5分、または徒歩約20分。",
    depthRange: "2m〜14m (兄島瀬戸激流)",
    bottomType: "サンゴ礁リーフ・白砂・激流スリット・ドロップオフ",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: false,
      hasConvenienceStoreNearby: false,
      hasTackleShopNearby: true,
      isFeeRequired: false,
      
      isNightFishingAllowed: true,
      nightFishingText: "夜釣り可能（リーフ歩行時の足元注意）",
      
    },
    targetFish: ["カスミアジ","カンパチ","イソマグロ","アカバ (アカハタ)","タマン","ダツ","バラハタ"],
    bestSeasons: {
      spring: ["タマン","カスミアジ","カンパチ"],
      summer: ["イソマグロ","カスミアジ","アカバ","ダツ"],
      autumn: ["カンパチ","タマン","バラハタ"],
      winter: ["アカバ","カスミアジ"]
    },
    recommendedRigs: ["ショアキャスティング (シンペン/ポッパー 120〜160mm)","ライトショアジギング (30〜60g)","テキサスリグ (アカバ狙い)"],
    localRules: ["サンゴ礁を踏み荒らさないこと（マナーシューズ着用）","兄島瀬戸の急流への流されに厳重警戒","ライフジャケット着用必須"],
    parkingDetails: {
      capacity: "宮之浜園地駐車場 約15台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ・東屋完備。"
    },
    tips: "兄島瀬戸から流れ込む激流がリーフエッジにぶつかるポイントへシンペンをキャスト。エメラルドグリーンの浅瀬からカスミアジやカンパチが猛追してきます。"
  },
  {
    id: "tokyo-ogasawara-hahajima-oki",
    name: "東京 小笠原 母島 沖港・脇浜波止",
    kana: "とうきょう・おがさわら・ははじま・おきこう・わきはまはと",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都小笠原村母島元地",
    lat: 26.6382,
    lng: 142.1541,
    category: "port",
    description: "父島からさらに南へ定期船「ははじま丸」で渡る日本最南端級の有人離島・母島のメイン港。手つかずの超濃厚な魚影を誇り、イソマグロ・キハダ・GT・シロダイ・アカバ・バラハタ・タマンが港の防波堤から狙える幻のパラダイス。",
    accessInfo: "父島二見港より定期船「ははじま丸」で約2時間10分。沖港船客待合所すぐ。",
    depthRange: "5m〜16m",
    bottomType: "サンゴ礁・砂泥・岸壁ケーソン・捨石",
    facilities: {
      hasParking: true,
      hasToilet: true,
      hasSafetyFence: false,
      isFamilyFriendly: true,
      hasNightLight: true,
      hasConvenienceStoreNearby: true,
      hasTackleShopNearby: false,
      isFeeRequired: false,
      
      isNightFishingAllowed: true,
      nightFishingText: "可能 (夜釣りの大型シロダイ・GT・タマン打ち込み)",
      
    },
    targetFish: ["イソマグロ (大型)","キハダマグロ","GT (ロウニンアジ)","シロダイ (70cmUP)","アカバ (アカハタ)","バラハタ","タマン"],
    bestSeasons: {
      spring: ["シロダイ","タマン","キハダマグロ"],
      summer: ["イソマグロ","GT","アカバ","バラハタ"],
      autumn: ["イソマグロ","GT","キハダ","シロダイ"],
      winter: ["アカバ","タマン","カスミアジ"]
    },
    recommendedRigs: ["ヘビーショアキャスティング (ダイビングペンシル 160〜200mm)","タマン・シロダイ打ち込み仕掛け (極太タマン針 + イカ/ムロアジ)","メタルジグ (40〜80g)"],
    localRules: ["自然環境保全・クダマキガイ等の採捕禁止","定期船入出港時の作業安全確保","ゴミの完全持ち帰り（島内処理不可のため本土持ち帰り）"],
    parkingDetails: {
      capacity: "沖港待合所周辺 約20台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "船客待合所・トイレ・自販機完備。"
    },
    tips: "港の防波堤先端から外洋へ向かってメタルジグやポッパーを投げると、イソマグロやキハダが回遊。夜は足元で良型アカバやシロダイが連発。"
  },
  {
    id: "tokyo-miyakejima-akakokko",
    name: "東京 三宅島 三池港・サタドー岬地磯",
    kana: "とうきょう・みやけじま・みいけこう・さたどーみさきじいそ",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都三宅島三宅村坪田",
    lat: 34.0841,
    lng: 139.5482,
    category: "rock",
    description: "黒潮本流が激しく洗う火山島・三宅島の南東部の一級地磯＆港湾。水深が足元から落ち込み、60cmオーバーの超巨大尾長グレ・ヒラマサ・カンパチ・シマアジ・大型イサキが狙える全国のグレ釣り師憧れの聖地。",
    accessInfo: "三宅島空港より車で約5分、または錆ヶ浜港より車で約15分。サタドー岬灯台駐車場よりエントリー。",
    depthRange: "6m〜25m (黒潮本流直撃)",
    bottomType: "玄武岩溶岩・スリット・海溝・ドロップオフ",
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
      nightFishingText: "夜釣り可能（夜の大型イサキ・シマアジ・フカセ）",
      
    },
    targetFish: ["尾長グレ (60cmUP)","ヒラマサ","カンパチ","シマアジ","イサキ (ジャンボイサキ)","タカベ","アカハタ"],
    bestSeasons: {
      spring: ["乗っ込み尾長グレ","シマアジ","ヒラマサ"],
      summer: ["ジャンボイサキ（夜釣り爆釣）","カンパチ","タカベ","アカハタ"],
      autumn: ["ヒラマサ","カンパチ","シマアジ","大型尾長グレ"],
      winter: ["寒グレ（ロクマル尾長）","ヒラスズキ"]
    },
    recommendedRigs: ["ウキフカセ太仕掛け (道糸4〜6号/ハリス4〜6号)","ロックショアジギング (60〜100g)","カゴ釣り仕掛け (夜釣りイサキ/シマアジ)"],
    localRules: ["溶岩磯でのスパイクシューズ・固型式ライフジャケット完全着用必須","高波・ウネリ時の磯乗り絶対禁止","コマセの洗い流し・ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "サタドー岬・三池港駐車場 約40台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "トイレ完備。"
    },
    tips: "サタドー岬の激流潮目へウキフカセでオキアミを流し込むと、60cm級の尾長グレが一撃で竿を満月に曲げます。夏の夜釣りはジャンボイサキが数釣り可能。"
  },
  {
    id: "tokyo-kouzushima-tako",
    name: "東京 神津島 多幸湾 三浦港・赤崎遊歩道磯",
    kana: "とうきょう・こうづしま・たこうわん・みうらこう・あかさきゆうほどういそ",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都神津島村多幸湾・赤崎",
    lat: 34.2042,
    lng: 139.1482,
    category: "rock",
    description: "天上山の大白壁を背にする神秘の入江・多幸湾三浦港と、木道が整備された赤崎遊歩道磯。湧水と黒潮が育む名海域で、シマアジ・イシダイ・尾長グレ・カンパチ・タカベ・アオリイカが狙える風光明媚な超一級ポイント。",
    accessInfo: "神津島港（前浜港）より車で約10分、または神津島空港より車で約8分。村営バス「多幸湾」下車すぐ。",
    depthRange: "5m〜16m",
    bottomType: "流紋岩白砂・岩盤・スリット・海藻帯",
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
      nightFishingText: "可能 (常夜灯下のアジング・夜フカセ)",
      
    },
    targetFish: ["シマアジ","イシダイ","尾長グレ","カンパチ (ショゴ)","タカベ","アオリイカ","アカハタ"],
    bestSeasons: {
      spring: ["シマアジ","親アオリイカ","乗っ込みグレ"],
      summer: ["タカベ","カンパチ","アカハタ","イシダイ"],
      autumn: ["シマアジ","アオリイカ","カンパチ","イシダイ"],
      winter: ["寒グレ（尾長）","寒マダイ","シマアジ"]
    },
    recommendedRigs: ["ウキフカセ釣り","イシダイ仕掛け (ウニ/サザエ)","ショアジギング (40〜80g)","エギング (3.5号)"],
    localRules: ["多幸湧水地の保全","赤崎遊歩道での一般観光客への配慮","ライフジャケット着用・ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "多幸湾待合所・赤崎遊歩道駐車場 約50台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "待合所・トイレ・自販機完備。"
    },
    tips: "多幸湾三浦港の赤灯台先端からは潮目に乗せてシマアジやカンパチが狙え、赤崎遊歩道磯では足元のサラシで尾長グレやアカハタが手堅く釣れます。"
  },
  {
    id: "tokyo-niijima-habushiura",
    name: "東京 新島 羽伏浦海岸サーフ・新島港",
    kana: "とうきょう・にいじま・はぶしうらかいがんさーふ・にいじまこう",
    region: "kanto",
    prefecture: "東京都",
    address: "東京都新島村羽伏浦・本村",
    lat: 34.3741,
    lng: 139.2682,
    category: "surf",
    description: "世界屈指のサーフポイントとして知られる延長約6.5kmの真っ白なコーラルサンド大サーフと新島港。黒潮の力強い波が打ち寄せ、ショアから座布団ヒラメ・カンパチ・ヒラマサ・シマアジ・シロギス・マダイが狙える絶景サーフ。",
    accessInfo: "新島港より車で約10分、または新島空港より車で約5分。羽伏浦メインゲートすぐ。",
    depthRange: "2m〜8m (外洋大波サーフ)",
    bottomType: "コーラル白細砂・激流サンドバー・離岸流海溝",
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
      nightFishingText: "可能 (夜間のシーバス・大型ヒラメ狙い)",
      
    },
    targetFish: ["ヒラメ (座布団級)","カンパチ (ショゴ)","ヒラマサ","シマアジ","シロギス","マダイ","シーバス"],
    bestSeasons: {
      spring: ["シロギス","ショア真鯛","ヒラメ"],
      summer: ["カンパチ","シマアジ","シロギス"],
      autumn: ["座布団ヒラメ","カンパチ","ヒラマサ","シマアジ"],
      winter: ["寒ヒラメ","ヒラスズキ"]
    },
    recommendedRigs: ["ヘビーシンキングペンシル (35〜45g)","メタルジグ (40〜60g)","ジグヘッドワーム (28〜35g)","投げ釣り仕掛け"],
    localRules: ["サーファーとの十分な安全距離確保（世界的人気サーフポイントのため）","高波・巻き波による引き波に厳重注意","ライフジャケット着用・ゴミ持ち帰り"],
    parkingDetails: {
      capacity: "羽伏浦海岸メインゲート駐車場 約100台",
      fee: "無料",
      hours: "24時間利用可能",
      notes: "大型トイレ・シャワー・展望台完備。"
    },
    tips: "白い砂浜の沖合にあるブレイクラインへヘビーシンペンをフルキャスト。白波の切れ目の払い出しを通すと座布団ヒラメやカンパチが強烈にヒットします。"
  }
];
