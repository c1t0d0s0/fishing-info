import { RigGuide } from "@/types/species";
import { Anchor, Sparkles, Crosshair } from "lucide-react";

interface RigGuideCardProps {
  rig: RigGuide;
}

export default function RigGuideCard({ rig }: RigGuideCardProps) {
  const {
    name,
    category,
    description,
    rod,
    reel,
    mainLine,
    leader,
    hookBait,
    actionTips,
  } = rig;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:border-ocean-300 dark:hover:border-ocean-700 transition-colors space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-ocean-600 dark:text-ocean-400 bg-ocean-50 dark:bg-ocean-950/60 px-2 py-0.5 rounded-full border border-ocean-200 dark:border-ocean-800">
            {category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5 flex items-center gap-2">
            <Anchor className="w-5 h-5 text-ocean-500" />
            {name}
          </h3>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>

      {/* Tackle Specs Table */}
      <div className="space-y-2 text-xs">
        <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="font-bold text-slate-400 w-16 shrink-0">ロッド (竿):</span>
          <span className="font-medium text-slate-800 dark:text-slate-200">{rod}</span>
        </div>
        <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="font-bold text-slate-400 w-16 shrink-0">リール:</span>
          <span className="font-medium text-slate-800 dark:text-slate-200">{reel}</span>
        </div>
        <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="font-bold text-slate-400 w-16 shrink-0">道糸 (ライン):</span>
          <span className="font-medium text-slate-800 dark:text-slate-200">{mainLine}</span>
        </div>
        <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="font-bold text-slate-400 w-16 shrink-0">リーダー:</span>
          <span className="font-medium text-slate-800 dark:text-slate-200">{leader}</span>
        </div>
        <div className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="font-bold text-slate-400 w-16 shrink-0">針・仕掛け:</span>
          <span className="font-medium text-slate-800 dark:text-slate-200">{hookBait}</span>
        </div>
      </div>

      {/* Action tips */}
      <div className="p-3 rounded-2xl bg-ocean-50/60 dark:bg-ocean-950/30 border border-ocean-200/80 dark:border-ocean-900/60 text-xs space-y-1">
        <div className="font-bold text-ocean-800 dark:text-ocean-200 flex items-center gap-1.5">
          <Crosshair className="w-4 h-4 text-ocean-500" />
          <span>動かし方・誘いのアクション</span>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {actionTips}
        </p>
      </div>
    </div>
  );
}
