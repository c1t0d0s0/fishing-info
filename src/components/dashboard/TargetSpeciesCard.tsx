"use client";

import { useState } from "react";
import Link from "next/link";
import { FishingSpot } from "@/types/spot";
import { FISH_SPECIES_DATA } from "@/lib/data/fishSpeciesData";
import {
  Fish,
  ChevronRight,
  ChevronDown,
  Sparkles,
  BookOpen,
  Ban,
  ParkingSquare,
} from "lucide-react";

interface TargetSpeciesCardProps {
  spot: FishingSpot;
}

export default function TargetSpeciesCard({ spot }: TargetSpeciesCardProps) {
  const [showAll, setShowAll] = useState(false);

  // Current month (1-12) and season
  const currentMonth = new Date().getMonth() + 1;
  const currentSeason: "spring" | "summer" | "autumn" | "winter" =
    currentMonth >= 3 && currentMonth <= 5
      ? "spring"
      : currentMonth >= 6 && currentMonth <= 8
      ? "summer"
      : currentMonth >= 9 && currentMonth <= 11
      ? "autumn"
      : "winter";

  const seasonalFish = spot.bestSeasons[currentSeason] || [];

  // Helper to extract clean tokens from fish names like "タマン（ハマフエフキ）" -> ["タマン", "ハマフエフキ"]
  const extractTokens = (name: string): string[] => {
    return name
      .replace(/[（\(\)）]/g, " ")
      .replace(/[\/・等類]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 0);
  };

  // Resolve target fish cards (matched from encyclopedia or constructed with spot seasonality)
  const resolvedTargetFish = spot.targetFish
    .map((tfName) => {
      const tokens = extractTokens(tfName);

      const match = FISH_SPECIES_DATA.find((sp) => {
        const spTokens = extractTokens(sp.name);
        return (
          tokens.some(
            (t) =>
              sp.name.includes(t) ||
              sp.kana.includes(t) ||
              sp.id.toLowerCase() === t.toLowerCase()
          ) ||
          spTokens.some((st) => tfName.includes(st))
        );
      });

      const isSeasonal = seasonalFish.some((sf) =>
        tokens.some((t) => sf.includes(t) || t.includes(sf))
      );
      const isPeak = match ? match.peakMonths.includes(currentMonth) || isSeasonal : isSeasonal;

      if (match) {
        return {
          id: match.id,
          name: tfName.includes("（") ? tfName : match.name,
          description: match.description,
          recommendedRig: match.recommendedRigs[0] || spot.recommendedRigs[0] || "ウキ釣り / サビキ",
          waterLayer: match.waterLayerText.split("（")[0],
          isPeak,
        };
      }

      return {
        id: tfName,
        name: tfName,
        description: `${spot.name}で実績の高い人気ターゲット。旬の回遊やポイントの地形に合わせて狙えます。`,
        recommendedRig: spot.recommendedRigs[0] || "サビキ / チョイ投げ / ルアー",
        waterLayer: spot.depthRange ? `${spot.depthRange} 付近` : "全層",
        isPeak,
      };
    })
    .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id || t.name === item.name));

  // Sort: current season / peak fish first
  const sortedTargetFish = [...resolvedTargetFish].sort((a, b) => {
    if (a.isPeak && !b.isPeak) return -1;
    if (!a.isPeak && b.isPeak) return 1;
    return 0;
  });

  const displayedFish = showAll ? sortedTargetFish : sortedTargetFish.slice(0, 6);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Fish className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              この釣り場の狙い目魚種 (Target Fish)
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              今釣れるおすすめターゲット & 仕掛け ({sortedTargetFish.length}種登録)
            </span>
          </div>
        </div>

        <Link
          href={`/spots/${spot.id}`}
          className="text-xs font-semibold text-ocean-600 dark:text-ocean-400 hover:underline flex items-center gap-1"
        >
          <span>釣り場詳細・ルールを見る</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Target Fish Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayedFish.map((sp) => (
          <div
            key={sp.id}
            className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col justify-between space-y-2 hover:border-ocean-300 dark:hover:border-ocean-700 transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Fish className="w-4 h-4 text-ocean-500 shrink-0" />
                  <span className="truncate">{sp.name}</span>
                </span>
                {sp.isPeak && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 flex items-center gap-0.5 shrink-0">
                    <Sparkles className="w-2.5 h-2.5" />
                    今が旬!
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {sp.description}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span className="text-slate-400 text-[11px]">推奨仕掛け:</span>
                <span className="font-medium truncate max-w-[140px]">
                  {sp.recommendedRig}
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span className="text-slate-400 text-[11px]">生息タナ:</span>
                <span className="font-medium text-[11px]">
                  {sp.waterLayer}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show all / Collapse Toggle Button */}
      {sortedTargetFish.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full py-2 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-ocean-50 dark:hover:bg-ocean-950/40 text-ocean-600 dark:text-ocean-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200/70 dark:border-slate-700/60"
        >
          <span>{showAll ? "一部をたたむ" : `すべての狙い目魚種を表示 (+${sortedTargetFish.length - 6}種)`}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* Spot Rules & Parking Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {/* Local Rules Alert */}
        {spot.localRules && spot.localRules.length > 0 && (
          <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 text-xs space-y-1.5">
            <div className="font-bold text-rose-800 dark:text-rose-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Ban className="w-4 h-4 text-rose-500" />
                釣り場独自ルール・禁止事項
              </span>
              <Link
                href={`/spots/${spot.id}`}
                className="text-[10px] underline font-normal text-rose-600 dark:text-rose-400"
              >
                詳細
              </Link>
            </div>
            <ul className="text-slate-700 dark:text-slate-300 space-y-1 leading-relaxed">
              {spot.localRules.slice(0, 3).map((r, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Parking Info */}
        {spot.parkingDetails && (
          <div className="p-3.5 rounded-2xl bg-ocean-50/60 dark:bg-ocean-950/30 border border-ocean-200/80 dark:border-ocean-900/60 text-xs space-y-2">
            <div className="font-bold text-ocean-800 dark:text-ocean-300 flex items-center gap-1.5">
              <ParkingSquare className="w-4 h-4 text-ocean-500 shrink-0" />
              <span>駐車場インフォメーション</span>
            </div>
            <div className="space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400">料金: </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{spot.parkingDetails.fee}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400">収容 / 時間: </span>
                <span>{spot.parkingDetails.capacity}（{spot.parkingDetails.hours}）</span>
              </div>
            </div>
            {spot.parkingDetails.notes && (
              <div className="text-[11px] text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/50 p-2.5 rounded-xl border border-ocean-100 dark:border-ocean-900/40 leading-relaxed">
                💡 {spot.parkingDetails.notes}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Spot tips banner */}
      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 text-xs space-y-1">
        <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-ocean-500" />
          <span>現地攻略のヒント</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {spot.tips}
        </p>
      </div>
    </div>
  );
}
