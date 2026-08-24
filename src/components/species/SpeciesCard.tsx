"use client";

import { useState } from "react";
import { FishSpecies } from "@/types/species";
import {
  Fish,
  AlertTriangle,
  Star,
  Utensils,
  ChevronDown,
  Layers,
  Sparkles,
  Clock,
} from "lucide-react";

interface SpeciesCardProps {
  species: FishSpecies;
}

export default function SpeciesCard({ species }: SpeciesCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentMonth = new Date().getMonth() + 1;

  const {
    name,
    kana,
    scientificName,
    description,
    habitat,
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

  return (
    <div
      className={`bg-white dark:bg-slate-900 border rounded-3xl p-5 sm:p-6 shadow-sm transition-all duration-200 ${
        isDangerous
          ? "border-rose-300 dark:border-rose-900/60 bg-gradient-to-b from-rose-50/20 to-transparent"
          : "border-slate-200 dark:border-slate-800 hover:border-ocean-300 dark:hover:border-ocean-700"
      }`}
    >
      {/* Header: Name, kana, danger alert, peak badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-medium">{kana}</span>
            {isDangerous && (
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-500 text-white flex items-center gap-1 animate-pulse">
                <AlertTriangle className="w-3 h-3" />
                危険魚・毒注意
              </span>
            )}
            {peakMonths.includes(currentMonth) && (
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" />
                今月旬!
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Fish
              className={`w-5 h-5 ${
                isDangerous ? "text-rose-500" : "text-ocean-500"
              }`}
            />
            {name}
          </h3>
          <span className="text-[11px] text-slate-400 italic">
            {scientificName}
          </span>
        </div>

        {/* Difficulty & Edible Stars */}
        <div className="text-right space-y-1 text-xs shrink-0">
          <div className="flex items-center justify-end gap-1 text-slate-600 dark:text-slate-300">
            <span className="text-[10px] text-slate-400">難易度:</span>
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < difficulty ? "fill-amber-400 text-amber-400" : "text-slate-200 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-1 text-slate-600 dark:text-slate-300">
            <span className="text-[10px] text-slate-400">食味:</span>
            <div className="flex text-rose-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Utensils
                  key={i}
                  className={`w-3 h-3 ${
                    i < edibleRating ? "text-rose-500" : "text-slate-200 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        {description}
      </p>

      {/* Dangerous warning banner if dangerous */}
      {isDangerous && dangerNotes && (
        <div className="mb-4 p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs leading-relaxed space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            毒針・危険部位のアラート
          </div>
          <p>{dangerNotes}</p>
        </div>
      )}

      {/* 12-Month Seasonality Bar */}
      <div className="mb-4 space-y-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>年間シーズンカレンダー</span>
          <span className="text-[10px] flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-xs bg-rose-500" /> 旬・爆釣
            <span className="inline-block w-2.5 h-2.5 rounded-xs bg-ocean-300" /> 釣れる
          </span>
        </div>
        <div className="grid grid-cols-12 gap-1 text-center text-[10px] font-bold">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
            const isPeak = peakMonths.includes(m);
            const isActive = activeMonths.includes(m);
            const isThisMonth = m === currentMonth;

            return (
              <div
                key={m}
                className={`py-1 rounded-md transition-all ${
                  isPeak
                    ? "bg-rose-500 text-white shadow-xs font-black"
                    : isActive
                    ? "bg-ocean-100 dark:bg-ocean-950 text-ocean-700 dark:text-ocean-300"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600"
                } ${isThisMonth ? "ring-2 ring-amber-400" : ""}`}
              >
                {m}
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Quick Specs */}
      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
        <div className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="text-[10px] text-slate-400 block mb-0.5">生息タナ (遊泳層)</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {waterLayerText}
          </span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="text-[10px] text-slate-400 block mb-0.5">平均サイズ</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {averageSize}
          </span>
        </div>
      </div>

      {/* Expand / Collapse for Tackle & Tactics */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
      >
        <span>{isExpanded ? "仕掛け・攻略法を閉じる" : "推奨仕掛け・攻略法を見る"}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs animate-in fade-in-50 duration-150">
          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              🎣 推奨仕掛け・釣法
            </span>
            <div className="flex flex-wrap gap-1.5">
              {recommendedRigs.map((rig) => (
                <span
                  key={rig}
                  className="bg-ocean-50 dark:bg-ocean-950/60 text-ocean-700 dark:text-ocean-300 border border-ocean-200 dark:border-ocean-800 px-2 py-0.5 rounded-md font-medium"
                >
                  {rig}
                </span>
              ))}
            </div>
          </div>

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
              🍳 おすすめの調理法・食べ方
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cookingMethods.map((cm) => (
                <span
                  key={cm}
                  className="bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 px-2 py-0.5 rounded-md"
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
