import { FishingScoreResult } from "@/lib/score/fishingScore";
import { getScoreGradeColor } from "@/lib/utils/formatters";
import { Sparkles, AlertTriangle, ShieldCheck, Activity, Flame } from "lucide-react";

interface FishingScoreCardProps {
  scoreResult: FishingScoreResult;
  timeLabel?: string;
  className?: string;
}

export default function FishingScoreCard({
  scoreResult,
  timeLabel = "現在",
  className = "",
}: FishingScoreCardProps) {
  const { score, grade, title, advice, breakdown, safetyWarning } = scoreResult;

  // Calculate gauge circumference
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}>
      {/* Background ambient glow */}
      <div
        className={`absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none ${
          grade === "S"
            ? "bg-rose-500"
            : grade === "A"
            ? "bg-emerald-500"
            : grade === "B"
            ? "bg-sky-500"
            : "bg-slate-500"
        }`}
      />

      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-ocean-500/10 text-ocean-600 dark:text-ocean-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              釣行指数
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {timeLabel}の総合コンディション判定
            </span>
          </div>
        </div>

        {/* Grade badge */}
        <div
          className={`px-3 py-1 rounded-xl font-extrabold text-sm shadow-sm bg-gradient-to-r ${getScoreGradeColor(
            grade
          )} flex items-center gap-1`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>RANK {grade}</span>
        </div>
      </div>

      {/* Main Score Display & Gauge */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Circular Gauge */}
        <div className="sm:col-span-4 flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="text-slate-100 dark:text-slate-800"
                strokeWidth="9"
                stroke="currentColor"
                fill="transparent"
              />
              {/* Animated Progress circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className={`transition-all duration-1000 ease-out ${
                  grade === "S"
                    ? "text-rose-500"
                    : grade === "A"
                    ? "text-emerald-500"
                    : grade === "B"
                    ? "text-sky-500"
                    : "text-slate-400"
                }`}
                strokeWidth="9"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                {score}
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 -mt-1">
                / 100点
              </span>
            </div>
          </div>
        </div>

        {/* Advice & Title */}
        <div className="sm:col-span-8 space-y-3">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
              {advice}
            </p>
          </div>

          {/* Safety Alert if any */}
          {safetyWarning && (
            <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 p-2.5 rounded-xl text-xs font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{safetyWarning}</span>
            </div>
          )}

          {/* Breakdown bars */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            {/* Tide factor */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-slate-500 dark:text-slate-400 font-medium mb-1">
                <span>潮回り・潮位</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  {breakdown.tideScore}/30
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-ocean-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(breakdown.tideScore / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Time / Mazume */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-slate-500 dark:text-slate-400 font-medium mb-1">
                <span>時間帯・マズメ</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  {breakdown.timeScore}/30
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(breakdown.timeScore / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Weather / Wind */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-slate-500 dark:text-slate-400 font-medium mb-1">
                <span>風・天候</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  {breakdown.weatherScore}/25
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-teal-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(breakdown.weatherScore / 25) * 100}%` }}
                />
              </div>
            </div>

            {/* Wave / Sea */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-slate-500 dark:text-slate-400 font-medium mb-1">
                <span>波高・うねり</span>
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  {breakdown.waveScore}/15
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(breakdown.waveScore / 15) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar aligning with TideGraphCard */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1.5 font-medium min-w-0">
          <Activity className="w-4 h-4 text-ocean-500 shrink-0" />
          <span className="truncate">
            解析: <strong className="text-slate-800 dark:text-slate-200 font-bold">{breakdown.tideScore >= 20 ? "潮の動き活発" : "潮止まり前後の緩潮"}</strong> (4要素総合判定)
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>海洋気象連動</span>
        </div>
      </div>
    </div>
  );
}
