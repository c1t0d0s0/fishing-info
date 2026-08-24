"use client";

import { useState } from "react";
import Link from "next/link";
import { DEFAULT_SPOTS, REGIONS } from "@/lib/data/defaultSpots";
import { FishingSpot, RegionId, SpotCategory } from "@/types/spot";
import SpotMap from "@/components/map/SpotMap";
import {
  Compass,
  MapPin,
  Search,
  Filter,
  Check,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function SpotsPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<SpotCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpot, setActiveSpot] = useState<FishingSpot>(DEFAULT_SPOTS[0]);

  // Filters
  const filteredSpots = DEFAULT_SPOTS.filter((spot) => {
    if (selectedRegion !== "all" && spot.region !== selectedRegion) return false;
    if (selectedCategory !== "all" && spot.category !== selectedCategory) return false;
    if (
      searchQuery &&
      !spot.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !spot.prefecture.includes(searchQuery) &&
      !spot.targetFish.some((f) => f.includes(searchQuery))
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
          <Compass className="w-7 h-7 text-ocean-500" />
          <span>全国釣り場マップ & スポット図鑑</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          日本全国の海釣り施設、漁港、堤防、サーフ、地磯の詳細ガイド & リアルタイム海況
        </p>
      </div>

      {/* Map Component */}
      <SpotMap
        spots={DEFAULT_SPOTS}
        selectedSpot={activeSpot}
        onSelectSpot={(s) => setActiveSpot(s)}
      />

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="釣り場名、都道府県、狙いたい魚 (アジ, タチウオ等)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedRegion("all")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                selectedRegion === "all"
                  ? "bg-ocean-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              全国すべて
            </button>
            {REGIONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRegion(r.id)}
                className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                  selectedRegion === r.id
                    ? "bg-ocean-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        {/* Spot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              onClick={() => setActiveSpot(spot)}
              className={`p-5 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                activeSpot.id === spot.id
                  ? "bg-ocean-50/70 dark:bg-ocean-950/40 border-ocean-400 dark:border-ocean-600 shadow-md ring-2 ring-ocean-500/20"
                  : "bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/60 hover:border-ocean-300 dark:hover:border-ocean-700"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-ocean-700 dark:text-ocean-300 bg-ocean-100 dark:bg-ocean-900/60 px-2 py-0.5 rounded-md">
                      {spot.prefecture}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {spot.category === "park"
                        ? "海釣り施設"
                        : spot.category === "port"
                        ? "漁港・防波堤"
                        : spot.category === "surf"
                        ? "サーフ"
                        : spot.category === "rock"
                        ? "地磯"
                        : "釣り場"}
                    </span>
                  </div>

                  {spot.facilities.isFamilyFriendly && (
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                      ファミリー向け
                    </span>
                  )}
                </div>

                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {spot.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {spot.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                {/* Target fish pills */}
                <div className="flex flex-wrap gap-1">
                  {spot.targetFish.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md text-[10px]"
                    >
                      {f}
                    </span>
                  ))}
                  {spot.targetFish.length > 4 && (
                    <span className="text-[10px] text-slate-400 self-center">
                      +{spot.targetFish.length - 4}
                    </span>
                  )}
                </div>

                {/* Key Rule Tag if any */}
                {spot.localRules && spot.localRules.length > 0 && (
                  <div className="text-[11px] text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-lg border border-rose-100 dark:border-rose-900/40 line-clamp-1">
                    ⚠️ {spot.localRules[0]}
                  </div>
                )}

                {/* Facilities & Parking summary */}
                <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  <div className="flex items-center gap-2">
                    {spot.facilities.hasToilet && <span>🚻 トイレ</span>}
                    {spot.facilities.hasParking && (
                      <span>
                        🅿️{" "}
                        {spot.parkingDetails
                          ? spot.parkingDetails.fee.includes("無料")
                            ? "無料P"
                            : "有料P"
                          : "駐車場あり"}
                      </span>
                    )}
                    {spot.facilities.hasSafetyFence && <span>🛡️ 柵あり</span>}
                  </div>
                  <span>{spot.depthRange}</span>
                </div>

                {/* View Spot Link */}
                <Link
                  href={`/spots/${spot.id}`}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-ocean-600 hover:text-white dark:hover:bg-ocean-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <span>個別詳細・ルール・海況を見る</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
