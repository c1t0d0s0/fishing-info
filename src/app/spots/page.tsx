"use client";

import { useState, useEffect, useMemo } from "react";
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
  X,
} from "lucide-react";

// Robust search normalization helper
function normalizeSearchText(text: string): string {
  if (!text) return "";
  let str = text
    .toLowerCase()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/[\s　]+/g, ""); // strip whitespace

  // Convert Katakana to Hiragana
  str = str.replace(/[\u30a1-\u30f6]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });

  return str;
}

function isSpotMatchingQuery(spot: FishingSpot, query: string): boolean {
  if (!query) return true;
  const rawQ = query.toLowerCase().trim();
  const normQ = normalizeSearchText(query);

  // Direct check for UMIGO / 海Go / ウミゴ / うみご
  const isUmigoSearch =
    normQ.includes("umigo") ||
    normQ.includes("うみご") ||
    rawQ.includes("umigo") ||
    rawQ.includes("海go") ||
    rawQ.includes("海ゴー") ||
    rawQ.includes("ウミゴ");

  if (isUmigoSearch) {
    const isUmigoSpot =
      spot.facilities.feeText?.includes("UMIGO") ||
      spot.facilities.feeText?.includes("海Go") ||
      spot.facilities.feeText?.includes("ウミゴ") ||
      spot.description.includes("UMIGO") ||
      spot.description.includes("海Go") ||
      spot.kana.includes("うみご") ||
      spot.kana.includes("umigo") ||
      spot.localRules.some((r) => r.includes("UMIGO") || r.includes("海Go"));
    if (isUmigoSpot) return true;
  }

  // All searchable texts
  const targetTexts = [
    spot.name,
    spot.kana,
    spot.prefecture,
    spot.address,
    spot.description,
    spot.tips,
    spot.facilities.feeText || "",
    spot.facilities.nightFishingText || "",
    ...spot.targetFish,
    ...spot.localRules,
    ...spot.recommendedRigs,
  ];

  return targetTexts.some((text) => {
    if (!text) return false;
    const rawText = text.toLowerCase();
    const normText = normalizeSearchText(text);
    return (
      rawText.includes(rawQ) ||
      normText.includes(normQ) ||
      (normQ.length >= 2 && normText.includes(normQ))
    );
  });
}

export default function SpotsPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<SpotCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpot, setActiveSpot] = useState<FishingSpot>(DEFAULT_SPOTS[0]);

  // Comprehensive Search and Filters
  const filteredSpots = useMemo(() => {
    return DEFAULT_SPOTS.filter((spot) => {
      // If a search query is typed, search across all regions so spots in Shizuoka/Kobe etc. are not filtered out by region tabs
      if (!searchQuery && selectedRegion !== "all" && spot.region !== selectedRegion) return false;
      if (selectedCategory !== "all" && spot.category !== selectedCategory) return false;
      if (searchQuery && !isSpotMatchingQuery(spot, searchQuery)) return false;
      return true;
    });
  }, [searchQuery, selectedRegion, selectedCategory]);

  // Keep activeSpot synced when filtered
  useEffect(() => {
    if (filteredSpots.length > 0 && !filteredSpots.some((s) => s.id === activeSpot.id)) {
      setActiveSpot(filteredSpots[0]);
    }
  }, [filteredSpots, activeSpot.id]);

  const handleResetFilters = () => {
    setSelectedRegion("all");
    setSelectedCategory("all");
    setSearchQuery("");
  };

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

      {/* Top Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="釣り場名、都道府県、魚種、キーワード (UMIGO, 予約等)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
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

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs border-t border-slate-100 dark:border-slate-800/80 pt-3">
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mr-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> タイプ:
          </span>
          {[
            { id: "all", name: "全タイプ" },
            { id: "park", name: "海釣り公園・施設" },
            { id: "port", name: "漁港・防波堤" },
            { id: "surf", name: "サーフ・砂浜" },
            { id: "rock", name: "地磯・磯場" },
            { id: "pier", name: "桟橋・岸壁" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as SpotCategory | "all")}
              className={`px-2.5 py-1 rounded-xl font-bold transition-colors shrink-0 ${
                selectedCategory === cat.id
                  ? cat.id === "surf"
                    ? "bg-amber-600 text-white shadow-xs"
                    : cat.id === "rock"
                    ? "bg-purple-600 text-white shadow-xs"
                    : cat.id === "park"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : cat.id === "port"
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-ocean-600 text-white shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-slate-400 font-medium shrink-0 pl-2">
            該当 <span className="font-bold text-ocean-600 dark:text-ocean-400">{filteredSpots.length}</span> 件
          </span>
        </div>
      </div>

      {/* Map Component with filtered spots */}
      <SpotMap
        spots={filteredSpots}
        selectedSpot={activeSpot}
        onSelectSpot={(s) => setActiveSpot(s)}
      />

      {/* Spot Cards Container */}
      <div className="space-y-4">
        {filteredSpots.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center space-y-3">
            <p className="text-base font-bold text-slate-700 dark:text-slate-300">
              「{searchQuery}」に一致する釣り場が見つかりませんでした。
            </p>
            <p className="text-xs text-slate-500">
              別のキーワード（例: アジ、タチウオ、UMIGO、静岡、神奈川など）をお試しいただくか、条件をリセットしてください。
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-2 px-4 py-2 bg-ocean-600 text-white rounded-xl text-xs font-bold hover:bg-ocean-700 transition-colors"
            >
              検索条件をリセット
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSpots.map((spot) => {
            const isUmigo =
              spot.facilities.feeText?.includes("UMIGO") ||
              spot.description.includes("UMIGO") ||
              spot.localRules.some((r) => r.includes("UMIGO"));

            return (
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
                    <div className="flex items-center gap-1.5 flex-wrap">
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

                    <div className="flex items-center gap-1">
                      {isUmigo && (
                        <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded font-extrabold border border-blue-200 dark:border-blue-800">
                          🎟️ UMIGO予約
                        </span>
                      )}
                      {spot.facilities.isFamilyFriendly && (
                        <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                          ファミリー向け
                        </span>
                      )}
                    </div>
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
                          ? spot.parkingDetails.fee.includes("円") ||
                            !spot.parkingDetails.fee.includes("無料")
                            ? "有料P"
                            : "無料P"
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
          );
        })}
          </div>
        )}
      </div>
    </div>
  );
}
