import {
  ShieldAlert,
  LifeBuoy,
  AlertTriangle,
  HeartPulse,
  Trash2,
  PhoneCall,
  Flame,
  Waves,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function SafetyPage() {
  const dangerousCreatures = [
    {
      name: "ハオコゼ / オニオコゼ",
      categoryBadge: "棘毒（タンパク毒）",
      dangerLevel: "★★★★★ (強毒)",
      poisonType: "背ビレ・胸ビレの棘毒（タンパク毒）",
      symptom: "刺された瞬間に電撃のような激痛が走り、患部が赤く腫れ上がり数時間〜数日痛みが持続。",
      treatment: "45℃前後のお湯に患部を30分〜60分浸す（タンパク毒の熱分解）。針や棘が残っていればピンセットで除去し医療機関へ。",
    },
    {
      name: "アイゴ (バリ)",
      categoryBadge: "棘毒（ヒレ毒）",
      dangerLevel: "★★★★☆ (強毒)",
      poisonType: "背ビレ・腹ビレ・尻ビレの鋭い棘毒",
      symptom: "サビキやフカセの外道で釣れ、素手で触ると激痛と腫れ。死んでも毒性は残ります。",
      treatment: "魚バサミで挟みハサミですべてのヒレを切り落とす。刺されたら45℃の温水に患部を浸す。",
    },
    {
      name: "アカエイ",
      categoryBadge: "尾部毒棘・外科的重傷",
      dangerLevel: "★★★★★ (猛毒・外科的重傷)",
      poisonType: "尾の付け根にあるノコギリ状の毒棘",
      symptom: "サーフや河口の砂地に潜み、誤って踏むと深く刺さって毒が注入され、組織壊死や失血の恐れ。",
      treatment: "傷口を水で洗い流し温水に浸す。出血が多いため止血し直ちに救急外来を受診。",
    },
    {
      name: "ゴンズイ",
      categoryBadge: "棘毒（ヒレ毒）",
      dangerLevel: "★★★★☆ (強毒)",
      poisonType: "背ビレと胸ビレの鋭い毒棘",
      symptom: "夜釣りの堤防で群れて釣れるナマズに似た魚。刺されると猛烈な痛みが患部全体に広がります。",
      treatment: "絶対に素手で触らずメゴチバサミで針を外す。刺された場合は45℃の温水浸潤。",
    },
    {
      name: "ヒョウモンダコ",
      categoryBadge: "神経猛毒（咬傷）",
      dangerLevel: "★★★★★ (致死猛毒)",
      poisonType: "唾液腺に含まれるテトロドトキシン（神経毒）",
      symptom: "興奮すると青いヒョウ柄が発色。噛まれると呼吸困難や麻痺を引き起こし命に関わる。",
      treatment: "絶対に素手で触らない。噛まれた場合は直ちに119番通報し心肺蘇生措置。",
    },
    {
      name: "ダツ / オキザヨリ",
      categoryBadge: "突進・物理的刺傷",
      dangerLevel: "★★★★★ (突進・刺傷事故)",
      poisonType: "槍のように鋭利なクチバシと鋭い歯（物理的凶器）",
      symptom: "夜間のヘッドライトや光る装飾品に時速60kmで突進・ジャンプし、人体に突き刺さる重大事故（頸部・胴体貫通や失明など命に関わる）。",
      treatment: "夜釣りでは海面を絶対にライトで照らさない。万が一刺さった場合は無理に引き抜かず、固定して直ちに119番通報・救急搬送。",
    },
    {
      name: "タチウオ (太刀魚)",
      categoryBadge: "カミソリ牙・切創出血",
      dangerLevel: "★★★★☆ (鋭利な牙・出血切創)",
      poisonType: "カミソリのように極めて鋭く尖った牙（外科用メス並みの切れ味）",
      symptom: "暴れた際に手や指に触れると肉深くまで一瞬でスパッと切れ、大量出血。歯の表面の海洋細菌による感染症リスク。",
      treatment: "絶対に素手で口周りを掴まない。フィッシュグリップで頭部を挟み、ロングノーズプライヤーで針を外す。切傷時は流水洗浄・圧迫止血・消毒。",
    },
    {
      name: "サワラ / サゴシ (鰆)",
      categoryBadge: "鋭利な三角歯・切創",
      dangerLevel: "★★★★☆ (カミソリ歯・激しい暴れ)",
      poisonType: "カミソリ状の三角形の鋭利な歯。時速80kmの遊泳力から繰り出される噛みつき",
      symptom: "ルアーを丸呑みされた際や船上・堤防で激しく暴れた際に口周りを触ると重度の切傷・腱損傷の恐れ。",
      treatment: "口の中に指を入れたりエラ持ちをしない。大型プライヤーで安全に針外しを行い、必要に応じて即座に脳締めして暴れを止める。",
    },
    {
      name: "アカカマス / ヤマトカマス (梭子魚)",
      categoryBadge: "鋭利な犬歯・切創",
      dangerLevel: "★★★☆☆ (鋭利な歯・指の裂傷)",
      poisonType: "口内にびっしりと並んだ鋭く硬い犬歯状の牙",
      symptom: "針外し時に魚が暴れて指を深く切る事故が多発。歯が非常に細かく鋭いため傷口が塞がりにくい。",
      treatment: "魚ばさみ（メゴチバサミ）やフィッシュグリップで胴体を確実に固定し、プライヤーや針外し器具を使用する。",
    },
    {
      name: "トカジャー / ニザダイ (三の字)",
      categoryBadge: "尾柄部メス状骨板",
      dangerLevel: "★★★★☆ (鋭利な骨板・切創)",
      poisonType: "尾ビレの付け根（尾柄部）にある3〜4個の鋭利な突起（サージカルナイフのようなメス状骨板）",
      symptom: "フカセ釣りで暴れた魚を素手で抑えたり掴むと、尾を激しく振られた際に手のひらや指を深く切り裂かれる。",
      treatment: "尾柄部周辺には絶対に触れない。タオルや魚ばさみで頭側をしっかりホールドして針を外す。切創時は止血と消毒。",
    },
    {
      name: "バラハタ (ナガジューミーバイ)",
      categoryBadge: "シガテラ毒・神経障害",
      dangerLevel: "★★★★★ (シガテラ毒・重度食中毒)",
      poisonType: "食物連鎖で体内に蓄積されるシガテラ毒素（渦鞭毛藻由来の強力な神経毒）",
      symptom: "食べると温度感覚異常（ドライアイスセンセーション：水に触れると電撃のように痛む）、激しい下痢、嘔吐、関節痛、倦怠感が数ヶ月〜数年持続。",
      treatment: "加熱しても毒素は分解されない。南西諸島や小笠原で釣れた大型個体（特に50cm以上）は食べずにリリース。発症時は直ちに神経内科・消化器内科を受診。",
    },
    {
      name: "クサフグ・キタマクラ",
      categoryBadge: "体内致死毒（テトロドトキシン）",
      dangerLevel: "★★★★★ (体内致死毒)",
      poisonType: "内臓・筋肉・皮膚のテトロドトキシン",
      symptom: "加熱しても毒は消えません。素人調理による誤食は呼吸麻痺で死に至ります。",
      treatment: "調理師免許を持たない場合は絶対に持ち帰って食べない。速やかにリリース。",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
          <ShieldAlert className="w-7 h-7 text-rose-500" />
          <span>釣りの安全・危険魚・マナーガイド</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          海難事故防止の基本装備・毒魚の応急処置・釣り場環境を守るマナー
        </p>
      </div>

      {/* Emergency Hotline Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-600 via-red-500 to-amber-500 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
            海難事故・落水時の緊急連絡先
          </span>
          <h2 className="text-xl sm:text-2xl font-black flex items-center gap-2">
            <PhoneCall className="w-6 h-6 animate-bounce" />
            海のもしもは 「118番」 (海上保安庁)
          </h2>
          <p className="text-xs sm:text-sm opacity-90">
            堤防・磯からの落水、沖合での漂流、海難事故を目撃した際は局番なしの118番へ通報してください。
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl text-xs space-y-0.5 shrink-0 border border-white/20">
          <div>救急車・消防: <strong>119番</strong></div>
          <div>警察・トラブル: <strong>110番</strong></div>
        </div>
      </div>

      {/* 1. Safety Equipment & Weather Guidelines */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <h2 className="font-extrabold text-slate-900 dark:text-white text-lg flex items-center gap-2">
          <LifeBuoy className="w-5 h-5 text-ocean-500" />
          釣り人の命を守る必須安全基準
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 space-y-2">
            <div className="font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              ライフジャケット完全着用
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              海中転落時の生存率はライジャケ着用で2倍以上に向上します。国交省認定桜マーク付き（Type A）やフローティングベストを必ず着用しましょう。
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 space-y-2">
            <div className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              釣行見合わせの気象基準
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              <strong>風速7m/s以上</strong>または<strong>波高1.8m以上</strong>は波被りや転落の危険性が跳ね上がります。「迷ったら釣行中止」が鉄則です。
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2">
            <div className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              足元の滑り対策 & 防災装備
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              磯や濡れた敷石ではスパイクシューズ必須。防水スマホケース、ホイッスル、ヘッドライト（夜釣り）を常備してください。
            </p>
          </div>
        </div>
      </div>

      {/* 2. Poisonous Sea Creatures Guide */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
        <div>
          <h2 className="font-extrabold text-slate-900 dark:text-white text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            要注意！危険魚・毒魚・牙魚図鑑 & 応急処置
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            堤防・サーフ・磯で釣れる毒魚・カミソリ歯・有毒魚の見分け方と救急法
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dangerousCreatures.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-2 text-xs"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-white/80 dark:bg-rose-950/80 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-900/60 inline-block mb-1">
                    {item.categoryBadge}
                  </span>
                  <h3 className="font-black text-sm text-rose-700 dark:text-rose-400">
                    {item.name}
                  </h3>
                </div>
                <span className="font-bold text-[10px] bg-rose-200 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200 px-2 py-0.5 rounded-full shrink-0">
                  {item.dangerLevel}
                </span>
              </div>

              <div>
                <span className="font-bold text-slate-700 dark:text-slate-300">危険部位・毒の特徴: </span>
                <span className="text-slate-600 dark:text-slate-400">{item.poisonType}</span>
              </div>

              <div>
                <span className="font-bold text-slate-700 dark:text-slate-300">危険性・症状: </span>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.symptom}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950">
                <span className="font-bold text-rose-600 dark:text-rose-400 block mb-0.5">
                  🚑 応急手当・対処法:
                </span>
                <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Etiquette & Rules */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <h2 className="font-extrabold text-slate-900 dark:text-white text-lg flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-emerald-500" />
          釣り場のマナー・ルールを守ろう
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              1
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block">ゴミ・糸・針の完全持ち帰り</strong>
              放置された釣り糸や針は野鳥や犬猫、子供に刺さる大事故に繋がります。自分のゴミ＋周囲のゴミを1つ持ち帰りましょう。
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              2
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block">コマセ・イカスミで汚れた釣り座の水洗い</strong>
              サビキのアミエビやイカスミは放置すると悪臭やハエの原因になり、釣り禁止の最大の理由になります。水汲みバケツで必ず海水を流して綺麗にしましょう。
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              3
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block">立ち入り禁止エリア・漁業施設への配慮</strong>
              漁港は漁師さんの仕事場です。係留ロープへのキャスト、作業の邪魔になる駐車、立入禁止フェンスの乗り越えは絶対にやめましょう。
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              4
            </span>
            <div>
              <strong className="text-slate-900 dark:text-white block">小型魚・抱卵個体のリリース</strong>
              将来の豊かな海を守るため、食べきれない魚や小さな稚魚（15cm未満のアジ・カサゴ等）、卵を持ったメスは優しく海へ帰しましょう。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
