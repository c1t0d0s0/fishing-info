"use client";

import { useState } from "react";
import { FishingSpot, RegionId } from "@/types/spot";
import { DEFAULT_SPOTS, REGIONS } from "@/lib/data/defaultSpots";
import { MapPin, Navigation, Search, ChevronDown, Check } from "lucide-react";

interface LocationSelectorProps {
  currentSpot: FishingSpot;
  onSelectSpot: (spot: FishingSpot) => void;
}

export default function LocationSelector({
  currentSpot,
  onSelectSpot,
}: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionId | "all">("all");
  const [isLocating, setIsLocating] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);

  // Filter spots by search & region
  const filteredSpots = DEFAULT_SPOTS.filter((spot) => {
    const matchRegion =
      selectedRegion === "all" || spot.region === selectedRegion;
    if (!searchQuery) return matchRegion;

    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      spot.name.toLowerCase().includes(q) ||
      spot.kana.toLowerCase().includes(q) ||
      spot.prefecture.toLowerCase().includes(q) ||
      spot.address.toLowerCase().includes(q) ||
      spot.description.toLowerCase().includes(q) ||
      spot.targetFish.some((f) => f.toLowerCase().includes(q)) ||
      spot.localRules.some((r) => r.toLowerCase().includes(q)) ||
      spot.tips.toLowerCase().includes(q) ||
      (spot.facilities.feeText?.toLowerCase().includes(q) ?? false) ||
      (spot.facilities.nightFishingText?.toLowerCase().includes(q) ?? false) ||
      spot.recommendedRigs.some((r) => r.toLowerCase().includes(q));

    return matchRegion && matchSearch;
  });

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocError("お使いの端末は位置情報に対応していません。");
      return;
    }
    setIsLocating(true);
    setLocError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude, longitude } = pos.coords;

        // Find closest spot
        let closest = DEFAULT_SPOTS[0];
        let minDist = Infinity;

        DEFAULT_SPOTS.forEach((s) => {
          const d =
            Math.pow(s.lat - latitude, 2) + Math.pow(s.lng - longitude, 2);
          if (d < minDist) {
            minDist = d;
            closest = s;
          }
        });

        onSelectSpot(closest);
        setIsOpen(false);
      },
      (err) => {
        setIsLocating(false);
        setLocError("位置情報の取得を許可してください。");
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className="relative z-30">
      {/* Current location trigger bar */}
      <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 min-w-[200px] flex items-center justify-between gap-3 text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ocean-500/10 text-ocean-600 dark:text-ocean-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {currentSpot.prefecture}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {currentSpot.category === "park"
                    ? "海釣り施設"
                    : currentSpot.category === "port"
                    ? "漁港・防波堤"
                    : currentSpot.category === "surf"
                    ? "サーフ"
                    : currentSpot.category === "rock"
                    ? "地磯"
                    : "釣り場"}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-ocean-600 dark:group-hover:text-ocean-400 transition-colors">
                {currentSpot.name}
              </h2>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Quick GPS locate button */}
        <button
          onClick={handleGetCurrentLocation}
          disabled={isLocating}
          className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-ocean-50 dark:hover:bg-ocean-950/60 text-slate-700 dark:text-slate-200 hover:text-ocean-600 dark:hover:text-ocean-300 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
        >
          <Navigation className={`w-3.5 h-3.5 ${isLocating ? "animate-spin" : ""}`} />
          {isLocating ? "測位中..." : "現在地から探す"}
        </button>
      </div>

      {locError && (
        <div className="mt-2 text-xs text-rose-500 bg-rose-50 dark:bg-rose-950/30 p-2 rounded-lg border border-rose-200 dark:border-rose-900">
          {locError}
        </div>
      )}

      {/* Spot Selection Modal / Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col animate-in fade-in-50 zoom-in-95 duration-150">
            {/* Header & Search */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50/70 dark:bg-slate-950/70">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ocean-500" />
                  釣り場を選択
                </h3>
                <span className="text-xs text-slate-500">
                  {filteredSpots.length} 件見つかりました
                </span>
              </div>

              {/* Search bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="釣り場名、都道府県、対象魚、キーワード (UMIGO, 予約等)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>

              {/* Region filter pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setSelectedRegion("all")}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
                    selectedRegion === "all"
                      ? "bg-ocean-600 text-white shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  全国
                </button>
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRegion(r.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
                      selectedRegion === r.id
                        ? "bg-ocean-600 text-white shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Spots List */}
            <div className="overflow-y-auto p-2 space-y-1 divide-y divide-slate-100 dark:divide-slate-800/60 max-h-96">
              {filteredSpots.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                  該当する釣り場が見つかりませんでした。別のキーワードをお試しください。
                </div>
              ) : (
                filteredSpots.map((spot) => {
                  const isSelected = spot.id === currentSpot.id;
                  const isUmigo =
                    spot.facilities.feeText?.includes("UMIGO") ||
                    spot.description.includes("UMIGO") ||
                    spot.localRules.some((r) => r.includes("UMIGO"));

                  return (
                    <button
                      key={spot.id}
                      onClick={() => {
                        onSelectSpot(spot);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl flex items-start justify-between gap-3 transition-colors ${
                        isSelected
                          ? "bg-ocean-50 dark:bg-ocean-950/40 border border-ocean-200 dark:border-ocean-800"
                          : "hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-bold text-ocean-600 dark:text-ocean-400 bg-ocean-100 dark:bg-ocean-900/60 px-1.5 py-0.5 rounded">
                            {spot.prefecture}
                          </span>
                          <span className="font-semibold text-sm text-slate-900 dark:text-white">
                            {spot.name}
                          </span>
                          {isUmigo && (
                            <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.2 rounded font-extrabold border border-blue-200 dark:border-blue-800">
                              🎟️ UMIGO予約
                            </span>
                          )}
                          {spot.facilities.isFamilyFriendly && (
                            <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.2 rounded font-medium">
                              ファミリー向け
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                          {spot.description}
                        </p>
                        <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 dark:text-slate-300 pt-0.5">
                          <span className="font-medium text-slate-400">対象魚:</span>
                          {spot.targetFish.slice(0, 5).map((f) => (
                            <span
                              key={f}
                              className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 text-[10px]"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-ocean-500 text-white flex items-center justify-center shrink-0 mt-1">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
