import React from "react";

interface RigDiagramProps {
  rigId: string;
  name: string;
}

export default function RigDiagram({ rigId, name }: RigDiagramProps) {
  switch (rigId) {
    case "sabiki":
      return <SabikiDiagram />;
    case "ajing":
      return <AjingDiagram />;
    case "shore-jigging":
      return <ShoreJiggingDiagram />;
    case "eging":
      return <EgingDiagram />;
    case "fukase":
      return <FukaseDiagram />;
    case "choinage":
      return <ChoinageDiagram />;
    case "sayori-rig":
      return <SayoriDiagram />;
    case "tako-rig":
      return <TakoDiagram />;
    case "hechi-rig":
      return <HechiDiagram />;
    case "tenagaebi-rig":
      return <TenagaebiDiagram />;
    case "kawahagi-rig":
      return <KawahagiDiagram />;
    case "ishidai-rig":
      return <IshidaiDiagram />;
    case "surf-flat-rig":
      return <SurfFlatDiagram />;
    case "kue-rig":
      return <KueDiagram />;
    default:
      return <DefaultRigDiagram name={name} />;
  }
}

// 1. サビキ釣り仕掛け
function SabikiDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-sky-50/80 via-white to-blue-50/50 dark:from-slate-900/90 dark:via-slate-900 dark:to-slate-800/80 border border-slate-200/80 dark:border-slate-800"
    >
      <defs>
        <linearGradient id="sabikiWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0.22" />
        </linearGradient>
        <radialGradient id="chumCloud" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#fb7185" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Water background & surface */}
      <rect x="0" y="45" width="540" height="285" fill="url(#sabikiWater)" />
      <path d="M 0 45 Q 67 40, 135 45 T 270 45 T 405 45 T 540 45" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.7" />
      <text x="14" y="38" className="text-[11px] font-bold fill-sky-600 dark:fill-sky-400">水面 (海面)</text>

      {/* Rod Tip (Top Left) */}
      <path d="M 20 15 Q 70 18, 120 28" stroke="#64748b" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="120" cy="28" r="4" fill="#0284c7" />
      <text x="30" y="12" className="text-[11px] font-bold fill-slate-700 dark:fill-slate-300">磯竿 2〜3号 / コンパクトロッド</text>

      {/* Main Line */}
      <path d="M 120 28 L 220 55" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" fill="none" />
      <rect x="135" y="32" width="105" height="18" rx="4" className="fill-amber-500/10 dark:fill-amber-500/20 stroke stroke-amber-500/30" />
      <text x="140" y="45" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-300">道糸: ナイロン 2〜3号</text>

      {/* Snap Swivel */}
      <circle cx="220" cy="55" r="4" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
      <text x="232" y="58" className="text-[10px] font-medium fill-slate-600 dark:fill-slate-400">スナップサルカン</text>

      {/* Main Trunk Line (幹糸) */}
      <line x1="220" y1="55" x2="220" y2="250" stroke="#0ea5e9" strokeWidth="2.5" />
      <text x="155" y="145" className="text-[10px] font-semibold fill-sky-700 dark:fill-sky-300">幹糸: 1.5〜2号</text>

      {/* Multi Sabiki Hooks (4 Branches) */}
      {/* Hook 1 */}
      <path d="M 220 85 Q 245 88, 260 80" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <ellipse cx="260" cy="80" rx="6" ry="3" fill="#f43f5e" transform="rotate(-20 260 80)" />
      <path d="M 260 80 Q 266 84, 263 90 Q 258 92, 255 87" stroke="#94a3b8" strokeWidth="1.8" fill="none" />
      <circle cx="260" cy="78" r="2" fill="#38bdf8" />

      {/* Hook 2 */}
      <path d="M 220 120 Q 245 123, 260 115" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <ellipse cx="260" cy="115" rx="6" ry="3" fill="#ec4899" transform="rotate(-20 260 115)" />
      <path d="M 260 115 Q 266 119, 263 125 Q 258 127, 255 122" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

      {/* Hook 3 */}
      <path d="M 220 155 Q 245 158, 260 150" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <ellipse cx="260" cy="150" rx="6" ry="3" fill="#f43f5e" transform="rotate(-20 260 150)" />
      <path d="M 260 150 Q 266 154, 263 160 Q 258 162, 255 157" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

      {/* Hook 4 */}
      <path d="M 220 190 Q 245 193, 260 185" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
      <ellipse cx="260" cy="185" rx="6" ry="3" fill="#ec4899" transform="rotate(-20 260 185)" />
      <path d="M 260 185 Q 266 189, 263 195 Q 258 197, 255 192" stroke="#94a3b8" strokeWidth="1.8" fill="none" />

      {/* Hook Label Callout */}
      <rect x="285" y="115" width="220" height="34" rx="8" className="fill-rose-50 dark:fill-rose-950/40 stroke stroke-rose-300 dark:stroke-rose-800" />
      <text x="295" y="130" className="text-[11px] font-bold fill-rose-700 dark:fill-rose-300">擬似針 (ピンクスキン/ハゲ皮 4〜6号)</text>
      <text x="295" y="143" className="text-[9px] fill-slate-500 dark:fill-slate-400">エダス: 0.8〜1.0号 (3〜5cm)</text>

      {/* Chum Cage & Cloud (Bottom) */}
      <circle cx="220" cy="275" r="42" fill="url(#chumCloud)" />
      
      {/* Chum Cage SVG */}
      <g transform="translate(208, 250)">
        <rect x="0" y="0" width="24" height="35" rx="5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" opacity="0.85" />
        <line x1="6" y1="0" x2="6" y2="35" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="12" y1="0" x2="12" y2="35" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="18" y1="0" x2="18" y2="35" stroke="#78350f" strokeWidth="1" strokeDasharray="3 3" />
        {/* Sinker on bottom */}
        <ellipse cx="12" cy="40" rx="8" ry="6" fill="#475569" stroke="#1e293b" strokeWidth="1" />
      </g>

      {/* Chum Cage Label */}
      <rect x="255" y="255" width="230" height="42" rx="8" className="fill-amber-50 dark:fill-amber-950/40 stroke stroke-amber-300 dark:stroke-amber-800" />
      <text x="265" y="272" className="text-[11px] font-bold fill-amber-800 dark:fill-amber-300">コマセカゴ + 底オモリ (6〜10号)</text>
      <text x="265" y="288" className="text-[9px] fill-slate-600 dark:fill-slate-400">アミエビを8分目詰め、シャクって煙幕と同調</text>
    </svg>
  );
}

// 2. ジグ単アジング仕掛け
function AjingDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950/80 border border-slate-800"
    >
      <defs>
        <radialGradient id="nightLightGlow" cx="80%" cy="10%" r="60%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Night Light glow background */}
      <circle cx="460" cy="30" r="140" fill="url(#nightLightGlow)" />
      <text x="400" y="25" className="text-[10px] font-bold fill-cyan-300">💡 常夜灯の明暗部</text>

      {/* Rod Tip (Solid Tip) */}
      <path d="M 20 50 Q 80 45, 140 65" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 140 65 Q 170 80, 190 100" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="190" cy="100" r="3" fill="#38bdf8" />
      <text x="20" y="35" className="text-[11px] font-bold fill-slate-200">アジングロッド 5.8〜6.4ft (UL ソリッド穂先)</text>

      {/* Ester Line */}
      <path d="M 190 100 Q 250 140, 310 170" stroke="#a3e635" strokeWidth="1.8" strokeDasharray="3 1.5" fill="none" />
      <rect x="170" y="125" width="135" height="18" rx="4" fill="#1e293b" stroke="#4d7c0f" strokeWidth="1" />
      <text x="175" y="138" className="text-[10px] font-bold fill-lime-300">道糸: エステル 0.3〜0.4号</text>

      {/* Knot Callout */}
      <circle cx="310" cy="170" r="3.5" fill="#f59e0b" />
      <text x="320" y="168" className="text-[9px] font-bold fill-amber-300">トリプルエイトノット / 3.5ノット</text>

      {/* Leader */}
      <line x1="310" y1="170" x2="410" y2="230" stroke="#38bdf8" strokeWidth="1.8" />
      <rect x="295" y="195" width="145" height="18" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
      <text x="300" y="208" className="text-[10px] font-bold fill-cyan-300">リーダー: フロロ 0.8号 (30〜50cm)</text>

      {/* Jighead & Worm */}
      <g transform="translate(410, 230)">
        {/* Sinker head */}
        <circle cx="0" cy="0" r="6" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="2" fill="#0284c7" />
        {/* Hook */}
        <path d="M 0 0 L 16 0 Q 22 0, 22 -6 Q 22 -12, 16 -12 L 14 -10" stroke="#f8fafc" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Worm Body (Glow/Translucent) */}
        <path d="M 4 0 Q 20 4, 38 0 Q 55 -3, 68 0" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9" />
        <path d="M 68 0 Q 75 1, 82 0" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      </g>

      {/* Jighead & Worm Callout */}
      <rect x="310" y="260" width="210" height="42" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
      <text x="320" y="277" className="text-[11px] font-bold fill-indigo-200">ジグヘッド 0.8〜1.5g (金針/オープン)</text>
      <text x="320" y="293" className="text-[10px] fill-pink-300">+ ピンテールワーム 1.5〜2.0inch (クリア系)</text>
    </svg>
  );
}

// 3. ライトショアジギング仕掛け
function ShoreJiggingDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-sky-100/60 via-white to-blue-100/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800"
    >
      {/* Heavy Rod */}
      <path d="M 20 30 Q 80 40, 150 70" stroke="#334155" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="150" cy="70" r="5" fill="#0284c7" />
      <text x="25" y="20" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">ショアジギングロッド 9.6〜10ft (M〜MH)</text>

      {/* PE Main Line */}
      <path d="M 150 70 Q 230 110, 280 140" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 2.5" fill="none" />
      <rect x="155" y="100" width="135" height="18" rx="4" className="fill-emerald-500/10 dark:fill-emerald-500/20 stroke stroke-emerald-500/40" />
      <text x="160" y="113" className="text-[10px] font-bold fill-emerald-700 dark:fill-emerald-300">PEライン 1.0〜1.5号 (200m+)</text>

      {/* FG Knot */}
      <circle cx="280" cy="140" r="4.5" fill="#f59e0b" />
      <text x="240" y="165" className="text-[10px] font-bold fill-amber-600 dark:fill-amber-400">FGノット (摩擦系ノット)</text>

      {/* Leader */}
      <line x1="280" y1="140" x2="380" y2="200" stroke="#0ea5e9" strokeWidth="3" />
      <rect x="290" y="180" width="155" height="18" rx="4" className="fill-sky-500/10 dark:fill-sky-500/20 stroke stroke-sky-500/40" />
      <text x="295" y="193" className="text-[10px] font-bold fill-sky-700 dark:fill-sky-300">フロロリーダー 4〜6号 (1.5m)</text>

      {/* Solid & Split Ring */}
      <circle cx="380" cy="200" r="4" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
      <circle cx="384" cy="204" r="4" fill="none" stroke="#475569" strokeWidth="1.5" />

      {/* Metal Jig (30〜60g) */}
      <g transform="translate(390, 210) rotate(25)">
        {/* Jig body */}
        <polygon points="0,0 70,-4 85,0 70,4" fill="#38bdf8" stroke="#0369a1" strokeWidth="1.5" />
        <polygon points="15,-2 55,-3 45,0 15,-1" fill="#f43f5e" opacity="0.8" />
        <circle cx="8" cy="0" r="2.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1" />

        {/* Front Assist Hook */}
        <path d="M 0 0 Q -10 -15, -15 -8 Q -18 0, -12 2" stroke="#64748b" strokeWidth="1.8" fill="none" />
        {/* Tinsel */}
        <line x1="-12" y1="-8" x2="-22" y2="-12" stroke="#fcd34d" strokeWidth="1" opacity="0.8" />
        <line x1="-12" y1="-8" x2="-20" y2="-5" stroke="#fcd34d" strokeWidth="1" opacity="0.8" />

        {/* Rear Treble Hook */}
        <path d="M 85 0 L 95 0 M 95 0 Q 102 6, 98 12 M 95 0 Q 102 -6, 98 -12" stroke="#64748b" strokeWidth="1.6" fill="none" />
      </g>

      {/* Jig Callout */}
      <rect x="300" y="260" width="220" height="42" rx="8" className="fill-cyan-50 dark:fill-cyan-950/40 stroke stroke-cyan-300 dark:stroke-cyan-800" />
      <text x="310" y="277" className="text-[11px] font-bold fill-cyan-800 dark:fill-cyan-300">メタルジグ 30〜60g</text>
      <text x="310" y="293" className="text-[10px] fill-slate-600 dark:fill-slate-400">フロントアシスト針 (ティンセル付) + リアトレブル</text>
    </svg>
  );
}

// 4. エギング仕掛け
function EgingDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-purple-50/60 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800"
    >
      {/* Rod */}
      <path d="M 20 40 Q 80 50, 150 75" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
      <text x="25" y="30" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">エギングロッド 8.3〜8.6ft (ML〜M)</text>

      {/* PE Line (Pink/High-vis) */}
      <path d="M 150 75 Q 230 115, 290 145" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" fill="none" />
      <rect x="160" y="105" width="130" height="18" rx="4" className="fill-rose-500/10 dark:fill-rose-500/20 stroke stroke-rose-500/40" />
      <text x="165" y="118" className="text-[10px] font-bold fill-rose-700 dark:fill-rose-300">PEライン 0.6〜0.8号</text>

      {/* Knot & Leader */}
      <circle cx="290" cy="145" r="4" fill="#f59e0b" />
      <line x1="290" y1="145" x2="380" y2="195" stroke="#0ea5e9" strokeWidth="2.5" />
      <rect x="290" y="175" width="155" height="18" rx="4" className="fill-sky-500/10 dark:fill-sky-500/20 stroke stroke-sky-500/40" />
      <text x="295" y="188" className="text-[10px] font-bold fill-sky-700 dark:fill-sky-300">フロロリーダー 1.75〜2.5号 (1.5m)</text>

      {/* Quick Snap */}
      <circle cx="380" cy="195" r="3.5" fill="#64748b" />
      <text x="345" y="215" className="text-[9px] font-bold fill-slate-600 dark:fill-slate-400">エギ用スナップ</text>

      {/* Egi (Squid Jig) */}
      <g transform="translate(390, 200) rotate(18)">
        {/* Egi Body */}
        <path d="M 0 0 Q 30 -12, 70 -6 Q 85 -2, 95 0 Q 80 8, 40 10 Q 15 8, 0 0 Z" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
        {/* Belly cloth & eye */}
        <circle cx="10" cy="0" r="3.5" fill="#fef08a" stroke="#0f172a" strokeWidth="1" />
        <circle cx="10" cy="0" r="1.5" fill="#0f172a" />
        {/* Chin Sinker */}
        <polygon points="12,5 20,18 24,12 18,5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
        {/* Feather wing */}
        <path d="M 28 0 Q 40 8, 50 14" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
        <path d="M 30 2 Q 42 10, 52 16" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
        {/* Double Umbrella Barbs (2段カンナ) */}
        <path d="M 95 0 L 105 0 M 105 0 Q 112 8, 106 14 M 105 0 Q 112 -8, 106 -14 M 110 0 L 118 0 M 118 0 Q 125 7, 120 12 M 118 0 Q 125 -7, 120 -12" stroke="#64748b" strokeWidth="1.6" fill="none" />
      </g>

      {/* Callout */}
      <rect x="290" y="260" width="230" height="42" rx="8" className="fill-orange-50 dark:fill-orange-950/40 stroke stroke-orange-300 dark:stroke-orange-800" />
      <text x="300" y="277" className="text-[11px] font-bold fill-orange-800 dark:fill-orange-300">餌木 (エギ 2.5〜3.5号)</text>
      <text x="300" y="293" className="text-[10px] fill-slate-600 dark:fill-slate-400">アゴのオモリ + 羽 + 傘針(2段カンナ)で水平フォール</text>
    </svg>
  );
}

// 5. ウキフカセ釣り仕掛け
function FukaseDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-sky-100/50 via-white to-blue-100/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800"
    >
      {/* Water surface */}
      <path d="M 0 65 Q 67 60, 135 65 T 270 65 T 405 65 T 540 65" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.8" />
      <text x="14" y="58" className="text-[11px] font-bold fill-sky-600 dark:fill-sky-400">水面 (ウキが浮く)</text>

      {/* Long Rod Tip (5.3m) */}
      <path d="M 20 18 Q 80 22, 140 35" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <text x="25" y="14" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">磯竿 1〜1.5号 5.3m (LBリール)</text>

      {/* Main Line */}
      <path d="M 140 35 L 220 50 L 220 280" stroke="#f59e0b" strokeWidth="2" fill="none" />
      <text x="145" y="45" className="text-[10px] font-bold fill-amber-600 dark:fill-amber-400">道糸: ナイロン 1.5〜2号</text>

      {/* Uki Stopper & Shimori Bead */}
      <rect x="216" y="52" width="8" height="4" fill="#ef4444" rx="2" />
      <text x="230" y="56" className="text-[9px] font-bold fill-rose-600 dark:fill-rose-400">ウキ止め糸 + シモリ玉</text>

      {/* Conical Float (円錐ウキ) */}
      <g transform="translate(220, 68)">
        <polygon points="-8,-10 8,-10 12,12 -12,12" fill="#ea580c" stroke="#9a3412" strokeWidth="1.2" />
        <polygon points="-12,12 12,12 8,24 -8,24" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
        <text x="18" y="10" className="text-[11px] font-bold fill-orange-700 dark:fill-orange-400">円錐ウキ (0号〜3B)</text>
      </g>

      {/* Karaman Bar / Cushion */}
      <rect x="217" y="115" width="6" height="14" fill="#10b981" rx="2" />
      <text x="230" y="126" className="text-[9px] font-semibold fill-emerald-600 dark:fill-emerald-400">からまん棒 / クッション</text>

      {/* Swivel */}
      <circle cx="220" cy="140" r="3.5" fill="#64748b" />

      {/* Long Harris (フロロ 2ヒロ/3m) */}
      <line x1="220" y1="140" x2="220" y2="280" stroke="#0ea5e9" strokeWidth="1.8" />
      <rect x="120" y="170" width="90" height="28" rx="4" className="fill-sky-500/10 dark:fill-sky-500/20 stroke stroke-sky-500/30" />
      <text x="125" y="183" className="text-[9px] font-bold fill-sky-700 dark:fill-sky-300">ハリス: フロロ 1.2〜1.75号</text>
      <text x="125" y="194" className="text-[8px] fill-slate-500 dark:fill-slate-400">2ヒロ (約3m)</text>

      {/* Split Shot (ガン玉 G2〜B) */}
      <circle cx="220" cy="210" r="3.5" fill="#475569" />
      <text x="230" y="213" className="text-[9px] font-bold fill-slate-600 dark:fill-slate-400">ガン玉 (G2〜B)</text>

      {/* Hook & Krill Bait */}
      <g transform="translate(220, 280)">
        <path d="M 0 0 L 0 8 Q 0 16, 8 16 Q 16 16, 16 8 L 14 6" stroke="#475569" strokeWidth="1.8" fill="none" />
        {/* Krill */}
        <path d="M 2 4 Q 10 12, 14 6" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>

      {/* Bottom Hook Callout */}
      <rect x="250" y="265" width="220" height="38" rx="8" className="fill-rose-50 dark:fill-rose-950/40 stroke stroke-rose-300 dark:stroke-rose-800" />
      <text x="260" y="282" className="text-[11px] font-bold fill-rose-800 dark:fill-rose-300">チヌ針 2〜3号 / グレ針 5〜7号</text>
      <text x="260" y="296" className="text-[9px] fill-slate-600 dark:fill-slate-400">生オキアミをマキエの帯と同調させて流す</text>
    </svg>
  );
}

// 6. チョイ投げ仕掛け
function ChoinageDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-sky-50/60 via-white to-amber-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800"
    >
      {/* Seabed Sandy Ground */}
      <path d="M 0 270 Q 150 265, 300 270 T 540 270 L 540 330 L 0 330 Z" fill="#fef3c7" className="dark:fill-amber-950/30" />
      <line x1="0" y1="270" x2="540" y2="270" stroke="#d97706" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.6" />
      <text x="14" y="295" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-400">海底 (砂地・シロギスやハゼの生息域)</text>

      {/* Rod */}
      <path d="M 20 40 Q 90 55, 160 85" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
      <text x="25" y="30" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">万能竿 / シーバスロッド 2.4〜3.0m</text>

      {/* Main Line */}
      <path d="M 160 85 Q 230 140, 270 230" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" fill="none" />
      <rect x="170" y="130" width="135" height="18" rx="4" className="fill-amber-500/10 dark:fill-amber-500/20 stroke stroke-amber-500/30" />
      <text x="175" y="143" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-300">道糸: ナイロン 2〜3号 / PE 0.8号</text>

      {/* L-shaped / Jet Sinker Tenbin */}
      <g transform="translate(270, 230)">
        {/* Heavy Sinker */}
        <polygon points="0,0 8,35 -8,35" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        {/* Arm wire */}
        <path d="M 0 0 L 25 5 L 60 15" stroke="#e2e8f0" strokeWidth="2" fill="none" />
        <circle cx="60" cy="15" r="3" fill="#64748b" />
      </g>
      <text x="210" y="275" className="text-[10px] font-bold fill-slate-700 dark:fill-slate-300">天秤オモリ (5〜10号)</text>

      {/* 2-Hook Kiss Rig on Seabed */}
      {/* Harris line trailing on sand */}
      <path d="M 330 245 L 390 260 L 480 265" stroke="#0ea5e9" strokeWidth="1.8" fill="none" />

      {/* Hook 1 */}
      <path d="M 390 260 L 415 272" stroke="#0ea5e9" strokeWidth="1.5" />
      <path d="M 415 272 Q 422 278, 418 284 Q 412 284, 410 278" stroke="#475569" strokeWidth="1.8" fill="none" />
      {/* Worm Bait */}
      <path d="M 414 274 Q 425 285, 435 280" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Hook 2 (End Hook) */}
      <path d="M 480 265 Q 488 270, 484 276 Q 478 276, 476 270" stroke="#475569" strokeWidth="1.8" fill="none" />
      {/* Worm Bait */}
      <path d="M 480 267 Q 495 276, 508 272" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Rig Callout */}
      <rect x="310" y="170" width="220" height="42" rx="8" className="fill-blue-50 dark:fill-blue-950/40 stroke stroke-blue-300 dark:stroke-blue-800" />
      <text x="320" y="187" className="text-[11px] font-bold fill-blue-800 dark:fill-blue-300">2本針仕掛け (キス・流線 6〜7号)</text>
      <text x="320" y="203" className="text-[10px] fill-slate-600 dark:fill-slate-400">青イソメ/石ゴカイを刺して底を引く</text>
    </svg>
  );
}

// 7. サヨリ専用カゴウキ仕掛け
function SayoriDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-sky-50/70 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800"
    >
      {/* Surface */}
      <path d="M 0 55 Q 67 50, 135 55 T 270 55 T 405 55 T 540 55" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.8" />
      <text x="14" y="45" className="text-[11px] font-bold fill-sky-600 dark:fill-sky-400">水面 (サヨリの遊泳層 0〜30cm)</text>

      {/* Rod */}
      <path d="M 20 20 Q 80 25, 140 40" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <text x="25" y="15" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">磯竿 1.5〜2号 / 遠投磯竿</text>

      {/* Main Line */}
      <line x1="140" y1="40" x2="220" y2="55" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
      <text x="145" y="32" className="text-[9px] font-bold fill-amber-600 dark:fill-amber-400">道糸: 2〜3号</text>

      {/* Super Sayori Float & Chum Cage */}
      <g transform="translate(220, 50)">
        {/* Floating Rocket Body */}
        <polygon points="-10,-10 25,-10 40,0 25,10 -10,10" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
        {/* Basket mesh under float */}
        <rect x="0" y="10" width="30" height="20" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
        <line x1="10" y1="10" x2="10" y2="30" stroke="#a16207" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="20" y1="10" x2="20" y2="30" stroke="#a16207" strokeWidth="1" strokeDasharray="2 2" />
      </g>
      <text x="180" y="95" className="text-[10px] font-bold fill-orange-700 dark:fill-orange-400">スーパーサヨリカゴ (飛ばしウキ+カゴ)</text>

      {/* Floating Harris with 3 Shimori Beads */}
      <line x1="260" y1="55" x2="480" y2="70" stroke="#0ea5e9" strokeWidth="1.5" />

      {/* Shimori Bead 1 */}
      <circle cx="310" cy="58" r="5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
      {/* Shimori Bead 2 */}
      <circle cx="350" cy="61" r="5" fill="#eab308" stroke="#a16207" strokeWidth="1" />
      {/* Shimori Bead 3 */}
      <circle cx="390" cy="64" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="1" />

      <text x="320" y="45" className="text-[9px] font-bold fill-rose-600 dark:fill-rose-400">連玉シモリウキ (アタリで横に走る)</text>

      {/* Hook & Tiny Krill */}
      <g transform="translate(480, 70)">
        <path d="M 0 0 L 10 5 Q 16 10, 12 15 Q 8 16, 6 11" stroke="#475569" strokeWidth="1.5" fill="none" />
        <ellipse cx="6" cy="8" rx="4" ry="2" fill="#f43f5e" />
      </g>

      {/* Callout */}
      <rect x="290" y="235" width="230" height="42" rx="8" className="fill-orange-50 dark:fill-orange-950/40 stroke stroke-orange-300 dark:stroke-orange-800" />
      <text x="300" y="252" className="text-[11px] font-bold fill-orange-800 dark:fill-orange-300">サヨリ針 3.5〜4.5号 (ハリス0.8号)</text>
      <text x="300" y="268" className="text-[10px] fill-slate-600 dark:fill-slate-400">ゆっくりリールを巻いて水面に引き波を立てる</text>
    </svg>
  );
}

// 8. タコエギ仕掛け
function TakoDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-slate-800"
    >
      {/* Seabed Rocks */}
      <path d="M 0 280 Q 80 265, 160 280 T 320 270 T 540 285 L 540 330 L 0 330 Z" fill="#1e293b" />
      <text x="14" y="305" className="text-[10px] font-bold fill-slate-400">海底 (敷石・岸壁の捨て石周り)</text>

      {/* Heavy Rod */}
      <path d="M 20 30 Q 80 40, 150 70" stroke="#64748b" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <text x="25" y="20" className="text-[11px] font-bold fill-slate-200">タコ専用竿 / ジギングロッド (Hパワー)</text>

      {/* Thick PE Line */}
      <path d="M 150 70 L 250 140" stroke="#f43f5e" strokeWidth="3.5" fill="none" />
      <rect x="150" y="95" width="135" height="18" rx="4" fill="#0f172a" stroke="#e11d48" strokeWidth="1" />
      <text x="155" y="108" className="text-[10px] font-bold fill-rose-300">極太PEライン 3.0〜5.0号</text>

      {/* Heavy Leader */}
      <line x1="250" y1="140" x2="330" y2="210" stroke="#38bdf8" strokeWidth="3" />
      <rect x="250" y="170" width="150" height="18" rx="4" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
      <text x="255" y="183" className="text-[10px] font-bold fill-cyan-300">フロロリーダー 8〜10号 (1m)</text>

      {/* Sinker + Snap */}
      <g transform="translate(330, 210)">
        <circle cx="0" cy="0" r="5" fill="#f59e0b" />
        {/* Big Sinker on Bottom */}
        <polygon points="0,0 12,45 -12,45" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
        <text x="18" y="30" className="text-[10px] font-bold fill-amber-300">ナス型オモリ 15〜30号</text>
      </g>

      {/* Dual Taco Egi */}
      <g transform="translate(335, 205) rotate(15)">
        {/* Egi 1 (Yellow/Glow) */}
        <path d="M 0 0 Q 30 -10, 60 -5 Q 75 -2, 85 0 Q 70 8, 35 10 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
        <path d="M 85 0 L 98 0 M 98 0 L 105 -10 M 98 0 L 105 10" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
        {/* Pork belly wrap */}
        <rect x="25" y="-6" width="16" height="14" rx="2" fill="#fecdd3" opacity="0.9" />
      </g>

      <g transform="translate(335, 215) rotate(35)">
        {/* Egi 2 (Pink/Red) */}
        <path d="M 0 0 Q 30 -10, 60 -5 Q 75 -2, 85 0 Q 70 8, 35 10 Z" fill="#f43f5e" stroke="#be123c" strokeWidth="1.5" />
        <path d="M 85 0 L 98 0 M 98 0 L 105 -10 M 98 0 L 105 10" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Callout */}
      <rect x="280" y="260" width="245" height="42" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
      <text x="290" y="277" className="text-[11px] font-bold fill-indigo-200">タコエギ 3.5号 (2本付け・豚バラ巻き)</text>
      <text x="290" y="293" className="text-[10px] fill-slate-300">底をトントン叩いてシェイクし、一気に鬼アワセ</text>
    </svg>
  );
}

// 9. ヘチ・落とし込み仕掛け
function HechiDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-slate-100 via-white to-sky-100/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800"
    >
      {/* Pier Wall (岸壁) on Left */}
      <rect x="0" y="0" width="120" height="330" fill="#cbd5e1" className="dark:fill-slate-800" />
      <line x1="120" y1="0" x2="120" y2="330" stroke="#475569" strokeWidth="3" />
      {/* Wall Texture / Barnacles */}
      <circle cx="114" cy="90" r="4" fill="#334155" />
      <circle cx="112" cy="140" r="5" fill="#334155" />
      <circle cx="115" cy="200" r="4" fill="#334155" />
      <circle cx="113" cy="260" r="6" fill="#334155" />
      <text x="20" y="160" className="text-[12px] font-extrabold fill-slate-600 dark:fill-slate-300" transform="rotate(-90 20 160)">岸壁 (スリット・貝着生)</text>

      {/* Angler Rod & Taiko Reel on Top Right */}
      <path d="M 280 20 Q 200 25, 140 40" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <text x="290" y="24" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">ヘチ竿 2.7〜3.1m + タイコリール</text>

      {/* Marked Line (目印付き道糸) Dropping within 10cm of wall */}
      <line x1="140" y1="40" x2="140" y2="280" stroke="#f59e0b" strokeWidth="2" />
      {/* Color Markers */}
      <rect x="137" y="70" width="6" height="12" fill="#ef4444" />
      <rect x="137" y="100" width="6" height="12" fill="#22c55e" />
      <rect x="137" y="130" width="6" height="12" fill="#ef4444" />
      <rect x="137" y="160" width="6" height="12" fill="#22c55e" />
      <text x="155" y="110" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-400">目印付き道糸 (1.5〜2号)</text>

      {/* Swivel */}
      <circle cx="140" cy="180" r="3" fill="#64748b" />

      {/* Harris */}
      <line x1="140" y1="180" x2="140" y2="280" stroke="#0ea5e9" strokeWidth="1.8" />
      <text x="155" y="210" className="text-[10px] font-bold fill-sky-700 dark:fill-sky-300">ハリス: フロロ 1.2〜1.5号 (1.5m)</text>

      {/* Split Shot (ガン玉 B〜3B) */}
      <circle cx="140" cy="245" r="4" fill="#475569" />
      <text x="155" y="248" className="text-[9px] font-bold fill-slate-600 dark:fill-slate-400">ガン玉 (B〜3B・針上20cm)</text>

      {/* Chinu Hook & Crab Bait */}
      <g transform="translate(140, 280)">
        <path d="M 0 0 L 0 10 Q 0 18, 8 18 Q 16 18, 16 10 L 14 8" stroke="#334155" strokeWidth="2" fill="none" />
        {/* Crab */}
        <ellipse cx="6" cy="8" rx="7" ry="5" fill="#78350f" stroke="#451a03" strokeWidth="1" />
        <line x1="0" y1="5" x2="-6" y2="3" stroke="#78350f" strokeWidth="1.5" />
        <line x1="0" y1="10" x2="-6" y2="12" stroke="#78350f" strokeWidth="1.5" />
        <line x1="12" y1="5" x2="18" y2="3" stroke="#78350f" strokeWidth="1.5" />
        <line x1="12" y1="10" x2="18" y2="12" stroke="#78350f" strokeWidth="1.5" />
      </g>

      {/* Callout */}
      <rect x="250" y="250" width="240" height="42" rx="8" className="fill-emerald-50 dark:fill-emerald-950/40 stroke stroke-emerald-300 dark:stroke-emerald-800" />
      <text x="260" y="267" className="text-[11px] font-bold fill-emerald-800 dark:fill-emerald-300">チヌ針 2〜3号 + カニ / カラスガイ</text>
      <text x="260" y="283" className="text-[10px] fill-slate-600 dark:fill-slate-400">壁際10cm以内をエサの自重でスルスル落とし込む</text>
    </svg>
  );
}

// 10. テナガエビ専用仕掛け
function TenagaebiDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-emerald-50/70 via-white to-sky-100/50 dark:from-slate-900 dark:via-slate-900 dark:to-teal-950/60 border border-slate-200 dark:border-slate-800"
    >
      <defs>
        <linearGradient id="tenagaWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Water & Bottom */}
      <rect x="0" y="55" width="540" height="275" fill="url(#tenagaWater)" />
      <path d="M 0 55 Q 67 50, 135 55 T 270 55 T 405 55 T 540 55" stroke="#14b8a6" strokeWidth="2" strokeDasharray="6 3" fill="none" opacity="0.8" />
      <text x="14" y="45" className="text-[11px] font-bold fill-teal-700 dark:fill-teal-400">水面 (河川・汽水域)</text>

      {/* Tetrapod / Stone Block on Left */}
      <g transform="translate(10, 150)" opacity="0.85">
        <polygon points="30,0 60,30 45,70 15,70 0,30" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" className="dark:fill-slate-700 dark:stroke-slate-600" />
        <polygon points="50,40 90,30 110,65 80,85 45,70" fill="#64748b" stroke="#334155" strokeWidth="1.5" className="dark:fill-slate-800 dark:stroke-slate-700" />
        <polygon points="10,65 45,70 35,110 -5,100" fill="#475569" stroke="#1e293b" strokeWidth="1.5" className="dark:fill-slate-900 dark:stroke-slate-800" />
        <text x="25" y="50" className="text-[10px] font-bold fill-white">消波ブロック / 敷石</text>
      </g>

      {/* Tenagaebi Shrimp Illustration on Bottom Right */}
      <g transform="translate(380, 240)">
        {/* Shrimp Body */}
        <path d="M 30 10 Q 50 0, 70 12 Q 85 25, 95 28 Q 80 32, 60 22 Q 40 18, 30 10 Z" fill="#b45309" stroke="#78350f" strokeWidth="1.2" opacity="0.8" />
        {/* Shrimp Tail Fan */}
        <polygon points="95,28 105,22 108,30 104,36" fill="#d97706" />
        {/* Legs */}
        <line x1="45" y1="18" x2="40" y2="28" stroke="#78350f" strokeWidth="1.2" />
        <line x1="55" y1="20" x2="52" y2="30" stroke="#78350f" strokeWidth="1.2" />
        <line x1="65" y1="22" x2="64" y2="31" stroke="#78350f" strokeWidth="1.2" />
        {/* Super Long Arms (Tenaga) */}
        <path d="M 32 12 Q 10 -5, -15 -8 Q -30 -10, -45 0" stroke="#b45309" strokeWidth="1.8" fill="none" />
        <path d="M -45 0 L -55 -2 M -45 0 L -53 5" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 34 14 Q 15 5, -5 8 Q -20 12, -35 22" stroke="#b45309" strokeWidth="1.8" fill="none" />
        <path d="M -35 22 L -45 20 M -35 22 L -43 27" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
        {/* Whiskers */}
        <path d="M 30 8 Q 10 2, -10 -20" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.7" />
        {/* Eye */}
        <circle cx="33" cy="8" r="1.5" fill="#0f172a" />
        <text x="-35" y="-14" className="text-[10px] font-bold fill-amber-800 dark:fill-amber-400">テナガエビ</text>
      </g>

      {/* Pole (Nobe-zao) */}
      <path d="M 20 20 Q 80 22, 160 32" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="160" cy="32" r="3.5" fill="#0d9488" />
      <text x="25" y="15" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">のべ竿 1.8〜2.4m (軽量・穂先直結リリアン)</text>

      {/* Main Line */}
      <path d="M 160 32 L 230 55 L 230 250" stroke="#f59e0b" strokeWidth="1.8" fill="none" />
      <rect x="135" y="42" width="90" height="18" rx="4" className="fill-amber-500/10 dark:fill-amber-500/20 stroke stroke-amber-500/30" />
      <text x="140" y="55" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-300">ナイロン 0.8〜1.0号</text>

      {/* 3-4 Multi Shimori Floats (シモリウキ連玉) */}
      <g transform="translate(230, 55)">
        <circle cx="0" cy="5" r="4.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
        <circle cx="0" cy="20" r="4.5" fill="#facc15" stroke="#a16207" strokeWidth="1" />
        <circle cx="0" cy="35" r="4.5" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
        <circle cx="0" cy="50" r="4.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
      </g>
      <rect x="245" y="65" width="155" height="30" rx="6" className="fill-emerald-50 dark:fill-emerald-950/50 stroke stroke-emerald-300 dark:stroke-emerald-800" />
      <text x="252" y="79" className="text-[10px] font-bold fill-emerald-800 dark:fill-emerald-300">極小シモリウキ 3〜4連</text>
      <text x="252" y="91" className="text-[8.5px] fill-slate-600 dark:fill-slate-400">エビが引くと水中で斜めにスライド</text>

      {/* Sinker (板オモリ / ガン玉) */}
      <circle cx="230" cy="180" r="3.5" fill="#64748b" stroke="#334155" strokeWidth="1" />
      <text x="145" y="184" className="text-[9px] font-bold fill-slate-600 dark:fill-slate-400">極小板オモリ / ガン玉</text>

      {/* Harris */}
      <line x1="230" y1="180" x2="230" y2="250" stroke="#0ea5e9" strokeWidth="1.4" />
      <text x="145" y="215" className="text-[9px] font-medium fill-sky-700 dark:fill-sky-400">ハリス 0.4〜0.6号 (15cm)</text>

      {/* Hook & Akamushi (Worm) */}
      <g transform="translate(230, 250)">
        <path d="M 0 0 L 0 8 Q 0 14, 6 14 Q 12 14, 12 8 L 10 6" stroke="#475569" strokeWidth="1.5" fill="none" />
        {/* Akamushi Bait */}
        <path d="M 2 4 Q 8 16, 18 12 Q 24 8, 28 14" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>
      <rect x="150" y="260" width="130" height="28" rx="5" className="fill-rose-50 dark:fill-rose-950/40 stroke stroke-rose-300 dark:stroke-rose-800" />
      <text x="156" y="273" className="text-[10px] font-bold fill-rose-700 dark:fill-rose-300">エビ針 / タナゴ針 2〜3号</text>
      <text x="156" y="284" className="text-[8.5px] fill-slate-500 dark:fill-slate-400">+ アカムシ (通し刺し)</text>

      {/* Callout */}
      <rect x="290" y="130" width="235" height="46" rx="8" className="fill-teal-50 dark:fill-teal-950/40 stroke stroke-teal-300 dark:stroke-teal-800" />
      <text x="300" y="148" className="text-[11px] font-bold fill-teal-800 dark:fill-teal-300">💡 隙間に落として待つのがコツ</text>
      <text x="300" y="162" className="text-[9.5px] fill-slate-600 dark:fill-slate-400">ウキが動いても即アワセは禁物！10〜15秒</text>
      <text x="300" y="172" className="text-[9.5px] fill-slate-600 dark:fill-slate-400">待って口に運ばせてからそっと竿を立てます</text>
    </svg>
  );
}

// 11. カワハギ専用胴突き仕掛け
function KawahagiDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-cyan-50/70 via-white to-sky-100/50 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/70 border border-slate-200 dark:border-slate-800"
    >
      <defs>
        <linearGradient id="flashGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>

      {/* Seabed Ground */}
      <path d="M 0 290 Q 150 285, 300 290 T 540 290 L 540 330 L 0 330 Z" fill="#cbd5e1" className="dark:fill-slate-800" />
      <text x="14" y="315" className="text-[10px] font-bold fill-slate-600 dark:fill-slate-400">海底 (砂地・根回り)</text>

      {/* Rod Tip (9:1 Super Fast Action) */}
      <path d="M 20 20 Q 90 22, 150 40" stroke="#334155" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 150 40 Q 170 48, 180 60" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="180" cy="60" r="3.5" fill="#0284c7" />
      <text x="25" y="15" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">カワハギ竿 1.8m (9:1極先調子 高感度カーボン)</text>

      {/* Main PE & Leader */}
      <path d="M 180 60 L 230 85" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" fill="none" />
      <text x="145" y="78" className="text-[9px] font-bold fill-emerald-700 dark:fill-emerald-400">PE 0.8〜1.0号</text>

      {/* Snap & Flash Attractor Plate (集魚板) */}
      <g transform="translate(230, 85)">
        <circle cx="0" cy="0" r="3.5" fill="#64748b" />
        {/* Hologram Attractor Plates (2連) */}
        <polygon points="0,5 12,20 0,35 -12,20" fill="url(#flashGlow)" stroke="#ca8a04" strokeWidth="1.2" />
        <polygon points="0,38 10,50 0,62 -10,50" fill="url(#flashGlow)" stroke="#ca8a04" strokeWidth="1.2" />
        {/* Sparkle icons */}
        <path d="M 18 15 L 22 20 L 18 25 L 14 20 Z" fill="#facc15" />
        <path d="M -16 45 L -12 50 L -16 55 L -20 50 Z" fill="#38bdf8" />
      </g>
      <rect x="255" y="95" width="125" height="32" rx="6" className="fill-amber-50 dark:fill-amber-950/50 stroke stroke-amber-300 dark:stroke-amber-800" />
      <text x="262" y="110" className="text-[10px] font-bold fill-amber-800 dark:fill-amber-300">キラキラ集魚板</text>
      <text x="262" y="122" className="text-[8.5px] fill-slate-600 dark:fill-slate-400">光の反射と波動で寄せる</text>

      {/* Drop Sinker (中オモリ) */}
      <circle cx="230" cy="155" r="5" fill="#eab308" stroke="#a16207" strokeWidth="1" />
      <text x="140" y="158" className="text-[9px] font-bold fill-amber-700 dark:fill-amber-400">中オモリ (1〜2号)</text>

      {/* Main Trunk (幹糸 フロロ3号) */}
      <line x1="230" y1="160" x2="230" y2="280" stroke="#0ea5e9" strokeWidth="2.5" />
      <text x="150" y="215" className="text-[9px] font-semibold fill-sky-700 dark:fill-sky-300">幹糸: 3号 (間隔15cm)</text>

      {/* 3-Hook Drop-shot Branches with Asari Clam Bait */}
      {/* Branch 1 */}
      <g transform="translate(230, 180)">
        <line x1="0" y1="0" x2="30" y2="5" stroke="#0ea5e9" strokeWidth="1.5" />
        <path d="M 30 5 L 42 7 Q 48 9, 46 14 Q 43 17, 38 14" stroke="#475569" strokeWidth="1.5" fill="none" />
        {/* Asari Clam bait */}
        <ellipse cx="42" cy="10" rx="6" ry="4" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
        <circle cx="44" cy="9" r="2" fill="#15803d" />
      </g>

      {/* Branch 2 */}
      <g transform="translate(230, 215)">
        <line x1="0" y1="0" x2="30" y2="5" stroke="#0ea5e9" strokeWidth="1.5" />
        <path d="M 30 5 L 42 7 Q 48 9, 46 14 Q 43 17, 38 14" stroke="#475569" strokeWidth="1.5" fill="none" />
        {/* Asari Clam bait */}
        <ellipse cx="42" cy="10" rx="6" ry="4" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
        <circle cx="44" cy="9" r="2" fill="#15803d" />
      </g>

      {/* Branch 3 */}
      <g transform="translate(230, 250)">
        <line x1="0" y1="0" x2="30" y2="5" stroke="#0ea5e9" strokeWidth="1.5" />
        <path d="M 30 5 L 42 7 Q 48 9, 46 14 Q 43 17, 38 14" stroke="#475569" strokeWidth="1.5" fill="none" />
        {/* Asari Clam bait */}
        <ellipse cx="42" cy="10" rx="6" ry="4" fill="#f97316" stroke="#c2410c" strokeWidth="1" />
        <circle cx="44" cy="9" r="2" fill="#15803d" />
      </g>

      {/* Bottom Sinker (ナス型/舵型オモリ 25号) */}
      <g transform="translate(230, 280)">
        <polygon points="0,0 10,25 -10,25" fill="#64748b" stroke="#334155" strokeWidth="1.5" />
      </g>
      <text x="135" y="295" className="text-[10px] font-bold fill-slate-700 dark:fill-slate-300">底オモリ (20〜30号)</text>

      {/* Kawahagi Fish Illustration Hovering */}
      <g transform="translate(350, 185)">
        {/* Diamond shaped Kawahagi Body */}
        <path d="M 0 10 Q 30 -15, 65 0 Q 80 15, 65 30 Q 30 45, 0 20 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" className="dark:fill-amber-900/60 dark:stroke-amber-500" />
        {/* Tail fin */}
        <polygon points="65,15 85,5 82,15 85,25" fill="#0284c7" opacity="0.8" />
        {/* Horn Spine */}
        <line x1="25" y1="-3" x2="32" y2="-18" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" />
        {/* Tiny Mouth */}
        <path d="M 0 10 L -6 13 L 0 16" stroke="#ea580c" strokeWidth="2" fill="#ea580c" />
        {/* Eye */}
        <circle cx="22" cy="5" r="3.5" fill="#0284c7" stroke="#0f172a" strokeWidth="1" />
        <circle cx="23" cy="4" r="1.2" fill="#ffffff" />
        {/* Blue fin stripes */}
        <path d="M 35 3 Q 50 2, 60 5" stroke="#0284c7" strokeWidth="1.5" fill="none" />
        <text x="10" y="55" className="text-[10px] font-bold fill-amber-900 dark:fill-amber-300">エサ取り名人 カワハギ</text>
      </g>

      {/* Hooks & Bait Callout */}
      <rect x="295" y="240" width="230" height="42" rx="8" className="fill-orange-50 dark:fill-orange-950/40 stroke stroke-orange-300 dark:stroke-orange-800" />
      <text x="305" y="257" className="text-[11px] font-bold fill-orange-800 dark:fill-orange-300">ハゲ針4〜5号 / 吸わせ針5〜6号</text>
      <text x="305" y="273" className="text-[9.5px] fill-slate-600 dark:fill-slate-400">エダス6cm + 生アサリ (水管・ベロ・肝縫い刺し)</text>
    </svg>
  );
}

// 12. イシダイ専用底物仕掛け
function IshidaiDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-slate-100 via-sky-50 to-slate-200/90 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 border border-slate-300 dark:border-slate-800"
    >
      {/* Rocky Seabed & Slit Reef */}
      <path d="M 0 260 L 80 230 L 150 265 L 240 235 L 340 270 L 440 240 L 540 270 L 540 330 L 0 330 Z" fill="#475569" className="dark:fill-slate-800" />
      <path d="M 150 265 L 180 330 M 340 270 L 370 330" stroke="#1e293b" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
      <text x="14" y="315" className="text-[10px] font-bold fill-slate-300">荒磯海底 (根・海溝・急峻なスリット)</text>

      {/* Piton & Heavy Ishidai Rod (Left Top) */}
      <g transform="translate(15, 10)">
        {/* Metal Piton Base */}
        <line x1="20" y1="50" x2="20" y2="85" stroke="#94a3b8" strokeWidth="4" />
        <rect x="12" y="45" width="16" height="10" rx="2" fill="#64748b" />
        {/* Rod in Piton (Heavy Carbon Ishidai Rod) */}
        <path d="M 15 50 Q 80 40, 160 55" stroke="#dc2626" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <circle cx="160" cy="55" r="4.5" fill="#f59e0b" />
        <text x="30" y="25" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">石鯛並継竿 5.0〜5.4m (ピトン固定)</text>
      </g>

      {/* Ultra Heavy Nylon Main Line (18〜24号) */}
      <path d="M 175 65 Q 240 100, 270 140" stroke="#f59e0b" strokeWidth="3" fill="none" />
      <rect x="165" y="90" width="145" height="18" rx="4" className="fill-amber-500/10 dark:fill-amber-500/20 stroke stroke-amber-500/40" />
      <text x="170" y="103" className="text-[10px] font-bold fill-amber-700 dark:fill-amber-300">道糸: ナイロン 18〜24号</text>

      {/* Three-way Swivel & Sezure Wire System */}
      <g transform="translate(270, 140)">
        {/* Swivel */}
        <circle cx="0" cy="0" r="4.5" fill="#64748b" stroke="#1e293b" strokeWidth="1.5" />
        
        {/* Sezure Wire (瀬ズレワイヤー #37 1.5m) */}
        <line x1="0" y1="0" x2="70" y2="50" stroke="#94a3b8" strokeWidth="2.5" />
        
        {/* Breakaway Sinker Line (捨て糸) */}
        <line x1="0" y1="0" x2="-20" y2="90" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 2" />
        <polygon points="-20,90 -12,120 -28,120" fill="#475569" stroke="#1e293b" strokeWidth="1.5" />
        <text x="-95" y="105" className="text-[9px] font-bold fill-sky-700 dark:fill-sky-300">捨て糸 4〜6号</text>
        <text x="-95" y="118" className="text-[9px] font-bold fill-slate-600 dark:fill-slate-400">捨てオモリ 25〜35号</text>
      </g>
      <rect x="290" y="135" width="165" height="28" rx="5" className="fill-slate-200 dark:fill-slate-800 stroke stroke-slate-400 dark:stroke-slate-600" />
      <text x="296" y="148" className="text-[9.5px] font-bold fill-slate-800 dark:fill-slate-200">瀬ズレワイヤー (#37 1.5m)</text>
      <text x="296" y="158" className="text-[8.5px] fill-slate-600 dark:fill-slate-400">根ズレによるラインブレイクを完全防止</text>

      {/* Wire Harris & Ishidai Hook */}
      <g transform="translate(340, 190)">
        {/* Small Swivel */}
        <circle cx="0" cy="0" r="3.5" fill="#64748b" />
        {/* Wire Harris (#38 30〜40cm) */}
        <line x1="0" y1="0" x2="60" y2="40" stroke="#94a3b8" strokeWidth="2" />
        <text x="15" y="15" className="text-[9px] font-bold fill-slate-700 dark:fill-slate-300">ワイヤーハリス #38</text>

        {/* Heavy Ishidai Hook 16号 */}
        <path d="M 60 40 L 72 48 Q 78 54, 73 60 Q 67 62, 63 56" stroke="#1e293b" strokeWidth="2.8" fill="none" />

        {/* Gangaze Sea Urchin Bait (ガンガゼウニ・トゲ付き) */}
        <g transform="translate(70, 48)">
          <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          {/* Spines */}
          <line x1="0" y1="-14" x2="0" y2="-24" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="10" y1="-10" x2="18" y2="-18" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="14" y1="0" x2="25" y2="0" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="10" y1="10" x2="19" y2="19" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="0" y1="14" x2="0" y2="24" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="-10" y1="10" x2="-19" y2="19" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="-14" y1="0" x2="-24" y2="0" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="-10" y1="-10" x2="-18" y2="-18" stroke="#0f172a" strokeWidth="1.5" />
          {/* Core pierce hole */}
          <circle cx="0" cy="0" r="2.5" fill="#f59e0b" />
        </g>
      </g>

      {/* Hook & Bait Callout */}
      <rect x="260" y="260" width="265" height="42" rx="8" className="fill-red-50 dark:fill-red-950/40 stroke stroke-red-300 dark:stroke-red-800" />
      <text x="270" y="277" className="text-[11px] font-bold fill-red-800 dark:fill-red-300">石鯛針 15〜18号 + ガンガゼウニ / サザエ</text>
      <text x="270" y="293" className="text-[9.5px] fill-slate-600 dark:fill-slate-400">ウニ通しで芯に貫通。竿先が海中へ突き刺さる本アタリで大アワセ！</text>
    </svg>
  );
}

// 13. サーフフラット＆巨魚キャスティング仕掛け
function SurfFlatDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-sky-100/70 via-white to-amber-50/70 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/40 border border-slate-200 dark:border-slate-800"
    >
      <defs>
        <linearGradient id="currentFlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Surf Break & Slope (Sandy Beach to Deep) */}
      <path d="M 0 250 Q 120 255, 200 270 Q 320 285, 540 285 L 540 330 L 0 330 Z" fill="#fef3c7" className="dark:fill-amber-950/40" />
      <line x1="0" y1="250" x2="200" y2="270" stroke="#d97706" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.6" />
      
      {/* Rip Current (離岸流ゾーン) */}
      <rect x="250" y="90" width="130" height="195" fill="url(#currentFlow)" rx="10" />
      <path d="M 315 270 L 315 110" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
      <polygon points="315,100 310,112 320,112" fill="#0284c7" opacity="0.8" />
      <text x="270" y="105" className="text-[10px] font-bold fill-sky-700 dark:fill-sky-300">🌊 離岸流 (カレント)</text>

      {/* Flatfish (Hirame) Camouflaged on Sand Bed */}
      <g transform="translate(420, 260) rotate(-10)">
        <ellipse cx="0" cy="0" rx="35" ry="18" fill="#a8a29e" stroke="#78716c" strokeWidth="1.2" className="dark:fill-amber-900/40 dark:stroke-amber-700" />
        <polygon points="35,0 48,-10 46,0 48,10" fill="#78716c" />
        {/* Two Eyes looking UP */}
        <circle cx="-12" cy="-4" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="1" />
        <circle cx="-6" cy="-6" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="1" />
        <circle cx="-12" cy="-4" r="1" fill="#0f172a" />
        <circle cx="-6" cy="-6" r="1" fill="#0f172a" />
        <text x="-25" y="28" className="text-[9.5px] font-bold fill-stone-600 dark:fill-stone-300">潜むヒラメ/マゴチ</text>
      </g>

      {/* Long Surf Rod (Left Top) */}
      <path d="M 20 25 Q 90 35, 170 65" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <circle cx="170" cy="65" r="4" fill="#0ea5e9" />
      <text x="25" y="16" className="text-[11px] font-bold fill-slate-800 dark:fill-slate-200">サーフロッド 10.6〜11.0ft (超遠投キャスティング)</text>

      {/* High-Grade PE Line */}
      <path d="M 170 65 Q 240 105, 290 135" stroke="#10b981" strokeWidth="2" strokeDasharray="5 2" fill="none" />
      <rect x="175" y="95" width="135" height="18" rx="4" className="fill-emerald-500/10 dark:fill-emerald-500/20 stroke stroke-emerald-500/40" />
      <text x="180" y="108" className="text-[10px] font-bold fill-emerald-700 dark:fill-emerald-300">PEライン 1.0〜1.5号 (200m+)</text>

      {/* FG Knot */}
      <circle cx="290" cy="135" r="4" fill="#f59e0b" />
      <text x="255" y="155" className="text-[9px] font-bold fill-amber-600 dark:fill-amber-400">FGノット</text>

      {/* Shock Leader */}
      <line x1="290" y1="135" x2="370" y2="185" stroke="#0ea5e9" strokeWidth="2.5" />
      <text x="295" y="175" className="text-[9.5px] font-bold fill-sky-700 dark:fill-sky-300">フロロ 5〜7号 (1.5m)</text>

      {/* Heavy Sinking Pencil / Jighead Lure (38g) */}
      <g transform="translate(370, 185) rotate(12)">
        {/* Lure Body */}
        <path d="M 0 0 Q 35 -8, 75 -2 Q 85 0, 75 4 Q 35 8, 0 0 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <polygon points="15,-4 45,-5 40,0 15,-1" fill="#ec4899" opacity="0.85" />
        {/* Eye */}
        <circle cx="8" cy="0" r="3" fill="#fef08a" stroke="#0f172a" strokeWidth="1" />
        <circle cx="8" cy="0" r="1.5" fill="#0f172a" />
        {/* Center Treble Hook */}
        <path d="M 35 5 L 35 15 M 35 15 Q 40 20, 36 24 M 35 15 Q 30 20, 34 24" stroke="#64748b" strokeWidth="1.6" fill="none" />
        {/* Rear Treble Hook */}
        <path d="M 75 0 L 85 0 M 85 0 Q 90 6, 86 11 M 85 0 Q 90 -6, 86 -11" stroke="#64748b" strokeWidth="1.6" fill="none" />
      </g>

      {/* Trace Path (50cm above seabed) */}
      <path d="M 230 230 Q 320 220, 420 235" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <text x="225" y="222" className="text-[9px] font-bold fill-pink-600 dark:fill-pink-400">底から50cm上をスイミング</text>

      {/* Callout */}
      <rect x="250" y="270" width="275" height="42" rx="8" className="fill-sky-50 dark:fill-sky-950/50 stroke stroke-sky-300 dark:stroke-sky-800" />
      <text x="260" y="287" className="text-[11px] font-bold fill-sky-900 dark:fill-sky-300">ヘビーシンペン 30〜45g / ジグヘッドワーム</text>
      <text x="260" y="303" className="text-[9.5px] fill-slate-600 dark:fill-slate-400">カケアガリや離岸流をスローに通し、ストップ＆フォールで食わせる！</text>
    </svg>
  );
}

// 14. クエ・大型底物夜釣りぶっこみ仕掛け
function KueDiagram() {
  return (
    <svg
      viewBox="0 0 540 330"
      className="w-full h-auto max-h-[340px] select-none rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 border border-slate-800"
    >
      <defs>
        <radialGradient id="nightMoonGlow" cx="90%" cy="10%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Night Atmosphere */}
      <circle cx="480" cy="30" r="120" fill="url(#nightMoonGlow)" />
      <text x="420" y="25" className="text-[10px] font-bold fill-cyan-300">🌙 磯夜釣り・月夜</text>

      {/* Heavy Rocky Seabed & Cavern on Bottom */}
      <path d="M 0 270 L 70 240 L 140 275 L 260 250 L 360 280 L 540 265 L 540 330 L 0 330 Z" fill="#0f172a" />
      <path d="M 360 280 Q 420 255, 480 285" stroke="#334155" strokeWidth="2" fill="none" />
      <text x="14" y="315" className="text-[10px] font-bold fill-slate-400">海底 (巨大岩礁・クエの潜む巣穴)</text>

      {/* Stainless Spring Plate Stand (板バネ竿受け) anchored into rock */}
      <g transform="translate(10, 15)">
        {/* Anchor bolts & Base plate */}
        <rect x="15" y="65" width="25" height="8" fill="#94a3b8" rx="2" />
        <line x1="20" y1="73" x2="20" y2="88" stroke="#cbd5e1" strokeWidth="3" />
        <line x1="35" y1="73" x2="35" y2="88" stroke="#cbd5e1" strokeWidth="3" />
        {/* Spring Plate (板バネ) curved */}
        <path d="M 25 65 Q 40 45, 55 50" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" fill="none" />
        {/* Giant Kue Rod 80〜100号 */}
        <path d="M 30 60 Q 90 45, 165 60" stroke="#f59e0b" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        {/* Huge Lever Drag Reel */}
        <rect x="60" y="55" width="18" height="20" rx="3" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
        <circle cx="69" cy="65" r="5" fill="#f59e0b" />
        <text x="30" y="25" className="text-[11px] font-bold fill-amber-300">クエ竿 80〜100号 + アンカー固定板バネ</text>
      </g>

      {/* Giant Nylon Main Line (80〜100号) */}
      <path d="M 175 75 Q 230 110, 260 145" stroke="#fbbf24" strokeWidth="4" fill="none" />
      <rect x="165" y="98" width="150" height="18" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
      <text x="170" y="111" className="text-[10px] font-bold fill-amber-300">道糸: 超極太ナイロン 80〜100号</text>

      {/* Heavy Duty Rotary Swivel (大型親子サルカン) */}
      <g transform="translate(260, 145)">
        <circle cx="0" cy="0" r="5.5" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
        {/* Breakaway Sinker line (捨て糸 14号) */}
        <line x1="0" y1="0" x2="-25" y2="85" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
        {/* Giant Lead Sinker (50〜80号) */}
        <polygon points="-25,85 -15,120 -35,120" fill="#64748b" stroke="#334155" strokeWidth="2" />
        <text x="-105" y="98" className="text-[9.5px] font-bold fill-rose-300">捨て糸 12〜16号</text>
        <text x="-105" y="112" className="text-[9.5px] font-bold fill-slate-300">巨大オモリ 50〜80号</text>

        {/* Wylon Wire Leader (#30〜28 1.5m) */}
        <line x1="0" y1="0" x2="80" y2="45" stroke="#e2e8f0" strokeWidth="3" />
      </g>
      <rect x="290" y="145" width="165" height="28" rx="5" fill="#0f172a" stroke="#94a3b8" strokeWidth="1" />
      <text x="296" y="158" className="text-[9.5px] font-bold fill-slate-200">ワイロンワイヤー (#30 1.5m)</text>
      <text x="296" y="168" className="text-[8.5px] fill-slate-400">巨大怪魚の鋭い歯とエラ洗いに耐える</text>

      {/* Giant Kue Hook (35〜40号) & Whole Baitfish (サバ1匹掛け) */}
      <g transform="translate(340, 190)">
        {/* Giant Hook */}
        <path d="M 0 0 L 15 10 Q 24 18, 16 28 Q 6 32, 0 22" stroke="#f8fafc" strokeWidth="3.8" fill="none" />

        {/* Whole Mackerel/Baitfish (サバ・ムロアジ1匹掛け) */}
        <g transform="translate(20, 20) rotate(15)">
          <ellipse cx="25" cy="0" rx="35" ry="12" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
          <polygon points="58,0 72,-8 68,0 72,8" fill="#0284c7" />
          <circle cx="5" cy="-2" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="1" />
          {/* Mackerel back stripes */}
          <path d="M 15 -10 L 18 -4 M 25 -11 L 28 -4 M 35 -10 L 38 -4" stroke="#082f49" strokeWidth="2" />
          <text x="-5" y="24" className="text-[9.5px] font-bold fill-sky-200">サバ/ムロアジ 1匹掛け</text>
        </g>
      </g>

      {/* Giant Kue Lurking (Giant Grouper Silhouette) */}
      <g transform="translate(410, 240)" opacity="0.65">
        <ellipse cx="40" cy="0" rx="55" ry="24" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <polygon points="90,0 110,-15 105,0 110,15" fill="#334155" />
        <circle cx="10" cy="-6" r="3" fill="#facc15" />
        <text x="15" y="38" className="text-[10px] font-extrabold fill-slate-300">伝説の巨魚 クエ (アラ)</text>
      </g>

      {/* Callout */}
      <rect x="250" y="260" width="275" height="42" rx="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
      <text x="260" y="277" className="text-[11px] font-bold fill-indigo-200">クエ針 35〜45号 + 活きサバ/冷凍ムロアジ</text>
      <text x="260" y="293" className="text-[9.5px] fill-slate-300">板バネが海面に突き刺さる！一瞬で根から引き離す超絶ファイト</text>
    </svg>
  );
}

// Default Fallback
function DefaultRigDiagram({ name }: { name: string }) {
  return (
    <div className="w-full h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-400 space-y-2 border border-slate-200 dark:border-slate-700">
      <span className="text-2xl">🎣</span>
      <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{name} 仕掛け構成図</span>
    </div>
  );
}
