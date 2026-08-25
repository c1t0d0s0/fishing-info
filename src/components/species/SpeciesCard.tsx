"use client";

import { useState } from "react";
import { FishSpecies, FishCategory, WaterLayer } from "@/types/species";
import {
  Fish,
  AlertTriangle,
  Star,
  Utensils,
  ChevronDown,
  Sparkles,
  Clock,
  Waves,
  Ruler,
  Compass,
  CheckCircle2,
} from "lucide-react";

interface SpeciesCardProps {
  species: FishSpecies;
}

function getCategoryBadge(category: FishCategory) {
  switch (category) {
    case "popular_coastal":
      return { label: "堤防人気魚", className: "bg-ocean-50 text-ocean-700 dark:bg-ocean-950/60 dark:text-ocean-300 border-ocean-200 dark:border-ocean-800" };
    case "blue_pelagic":
      return { label: "青物・回遊魚", className: "bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800" };
    case "bottom_rock":
      return { label: "根魚・フラット", className: "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800" };
    case "squid_octopus":
      return { label: "イカ・タコ", className: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800" };
    case "tasty_table":
      return { label: "美味しい食卓魚", className: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800" };
    case "fresh_brackish":
      return { label: "河口・汽水魚", className: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800" };
    default:
      return { label: "沿岸魚", className: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700" };
  }
}

function getWaterLayerBadge(waterLayer: WaterLayer) {
  switch (waterLayer) {
    case "surface":
      return { label: "表層", icon: "🌊", className: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800" };
    case "middle":
      return { label: "中層", icon: "🏊", className: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800" };
    case "bottom":
      return { label: "底層", icon: "⚓", className: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800" };
    case "all":
      return { label: "全層", icon: "🔄", className: "bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300 border-violet-200 dark:border-violet-800" };
    default:
      return { label: "全層", icon: "🌊", className: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700" };
  }
}

export default function SpeciesCard({ species }: SpeciesCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentMonth = new Date().getMonth() + 1;

  const {
    id,
    name,
    kana,
    scientificName,
    category,
    description,
    habitat,
    waterLayer,
    waterLayerText,
    averageSize,
    recordSize,
    activeMonths,
    peakMonths,
    difficulty,
    edibleRating,
    cookingMethods,
    recommendedRigs,
    bestTime,
    favoriteBaits,
    fishingTips,
    isDangerous,
    dangerNotes,
  } = species;

  const categoryBadge = getCategoryBadge(category);
  const layerBadge = getWaterLayerBadge(waterLayer);
  const isPeakThisMonth = peakMonths.includes(currentMonth);

  return (
    <div
      className={`bg-white dark:bg-slate-900 border rounded-3xl p-5 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md ${
        isDangerous
          ? "border-rose-300 dark:border-rose-900/60 bg-gradient-to-b from-rose-50/20 to-transparent"
          : "border-slate-200 dark:border-slate-800 hover:border-ocean-300 dark:hover:border-ocean-700"
      }`}
    >
      {/* 1. Header: Kana, Categories, Danger Alert, Peak Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 font-medium">{kana}</span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${categoryBadge.className}`}
          >
            {categoryBadge.label}
          </span>
          {isDangerous && (
            <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-rose-500 text-white flex items-center gap-1 animate-pulse shadow-xs">
              <AlertTriangle className="w-3 h-3" />
              危険魚・毒注意
            </span>
          )}
          {isPeakThisMonth && (
            <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              今月旬 ({currentMonth}月)
            </span>
          )}
        </div>

        {/* Difficulty & Edible Rating Pills */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 px-2 py-1 rounded-xl">
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">難度</span>
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < difficulty
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-200 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-800/50 px-2 py-1 rounded-xl">
            <span className="text-[10px] text-rose-600 dark:text-rose-400 font-bold">食味</span>
            <div className="flex text-rose-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Utensils
                  key={i}
                  className={`w-3 h-3 ${
                    i < edibleRating
                      ? "text-rose-500 fill-rose-500"
                      : "text-slate-200 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Title & Scientific Name */}
      <div className="mb-3">
        <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Fish
            className={`w-5 h-5 shrink-0 ${
              isDangerous ? "text-rose-500" : "text-ocean-500"
            }`}
          />
          <span>{name}</span>
        </h3>
        <span className="text-[11px] text-slate-400 font-mono italic">
          {scientificName}
        </span>
      </div>

      {/* 3. High-Density Key Specs Grid (Minimal Badges) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3.5">
        {/* Water layer / タナ */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-0.5">
            <span>遊泳層 (タナ)</span>
            <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold border ${layerBadge.className}`}>
              {layerBadge.icon} {layerBadge.label}
            </span>
          </div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
            {waterLayerText.split("（")[0]}
          </span>
        </div>

        {/* Size / サイズ */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <span className="text-[10px] text-slate-400 font-medium block mb-0.5">
            平均サイズ
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
            {averageSize.split(" (")[0]}
          </span>
        </div>

        {/* Habitat / 生息地 */}
        <div className="col-span-2 sm:col-span-1 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800">
          <span className="text-[10px] text-slate-400 font-medium block mb-0.5">
            主な生息エリア
          </span>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
            {habitat.split("・")[0]}・{habitat.split("・")[1] || "沿岸"}
          </span>
        </div>
      </div>

      {/* 4. Description Paragraph */}
      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
        {description}
      </p>

      {/* Danger Warning Alert Box */}
      {isDangerous && dangerNotes && (
        <div className="mb-3.5 p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200 text-xs leading-relaxed space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <span>毒棘・危険部位に関する注意</span>
          </div>
          <p>{dangerNotes}</p>
        </div>
      )}

      {/* 5. 12-Month Seasonality Heatmap Bar */}
      <div className="mb-3.5 space-y-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>年間シーズンカレンダー</span>
          <span className="text-[10px] flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-xs bg-rose-500" /> 旬・爆釣
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-xs bg-ocean-400" /> 釣期
            </span>
          </span>
        </div>
        <div className="grid grid-cols-12 gap-1 text-center text-[10px] font-black">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
            const isPeak = peakMonths.includes(m);
            const isActive = activeMonths.includes(m);
            const isThisMonth = m === currentMonth;

            return (
              <div
                key={m}
                className={`py-1 rounded-md transition-all ${
                  isPeak
                    ? "bg-rose-500 text-white shadow-2xs font-black"
                    : isActive
                    ? "bg-ocean-100 dark:bg-ocean-950 text-ocean-700 dark:text-ocean-300 font-bold"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-300 dark:text-slate-600"
                } ${isThisMonth ? "ring-2 ring-amber-400 font-black" : ""}`}
              >
                {m}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Quick Badges: Recommended Rigs & Cooking */}
      <div className="space-y-2 mb-3.5">
        <div className="flex items-center gap-1.5 flex-wrap text-xs">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
            🎣 推奨釣法:
          </span>
          {recommendedRigs.slice(0, 4).map((rig) => (
            <span
              key={rig}
              className="px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-ocean-50 dark:bg-ocean-950/50 text-ocean-700 dark:text-ocean-300 border border-ocean-200/80 dark:border-ocean-800"
            >
              {rig}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap text-xs">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
            🍳 おすすめ調理:
          </span>
          {cookingMethods.slice(0, 4).map((cm) => (
            <span
              key={cm}
              className="px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200/80 dark:border-rose-900"
            >
              {cm}
            </span>
          ))}
        </div>
      </div>

      {/* 7. Expand / Collapse for Detailed Tackle & Tactics */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
      >
        <span>{isExpanded ? "詳細攻略・エサ・コツを閉じる" : "詳細攻略・エサ・釣りのコツを見る"}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 8. Expanded Details Accordion */}
      {isExpanded && (
        <div className="mt-3.5 pt-3.5 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs animate-in fade-in-50 duration-150">
          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              🪱 効果的なエサ / ルアー
            </span>
            <p className="text-slate-600 dark:text-slate-300">
              {favoriteBaits.join("、")}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              ⏰ おすすめの時間帯・潮
            </span>
            <p className="text-slate-600 dark:text-slate-300">{bestTime}</p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              💡 攻略のワンポイント
            </span>
            <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 leading-relaxed">
              {fishingTips}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              🍳 全ての調理法・食べ方
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cookingMethods.map((cm) => (
                <span
                  key={cm}
                  className="bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 px-2 py-0.5 rounded-md font-medium"
                >
                  {cm}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
