"use client";

import { useState, useEffect } from "react";
import { DEFAULT_SPOTS } from "@/lib/data/defaultSpots";
import { FishingSpot } from "@/types/spot";
import { DayTideInfo } from "@/types/tide";
import { MarineWeatherResponse } from "@/types/weather";
import { generateDayTideInfo } from "@/lib/tide/tideEngine";
import {
  fetchMarineWeather,
  generateFallbackMarineWeather,
} from "@/lib/api/openMeteo";
import { calculateFishingScore } from "@/lib/score/fishingScore";

import LocationSelector from "@/components/dashboard/LocationSelector";
import FishingScoreCard from "@/components/dashboard/FishingScoreCard";
import TideGraphCard from "@/components/dashboard/TideGraphCard";
import MarineWeatherCard from "@/components/dashboard/MarineWeatherCard";
import HourlyForecast from "@/components/dashboard/HourlyForecast";
import TargetSpeciesCard from "@/components/dashboard/TargetSpeciesCard";

import {
  Waves,
  Calendar,
  Compass,
  Fish,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [selectedSpot, setSelectedSpot] = useState<FishingSpot>(DEFAULT_SPOTS[0]);
  const [tideInfo, setTideInfo] = useState<DayTideInfo | null>(null);
  const [weatherData, setWeatherData] = useState<MarineWeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load spot preference & forecast
  useEffect(() => {
    const savedSpotId = localStorage.getItem("preferred_fishing_spot_id");
    if (savedSpotId) {
      const found = DEFAULT_SPOTS.find((s) => s.id === savedSpotId);
      if (found) setSelectedSpot(found);
    }
  }, []);

  const loadForecast = async (spot: FishingSpot) => {
    setIsLoading(true);
    const now = new Date();
    const tide = generateDayTideInfo(now, spot.lat, spot.lng);
    setTideInfo(tide);

    try {
      const weather = await fetchMarineWeather(spot.lat, spot.lng);
      setWeatherData(weather);
    } catch {
      setWeatherData(generateFallbackMarineWeather(spot.lat, spot.lng));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadForecast(selectedSpot);
    localStorage.setItem("preferred_fishing_spot_id", selectedSpot.id);
  }, [selectedSpot]);

  // Real-time calculated score
  const now = new Date();
  const currentHour = now.getHours();
  const currentScore = tideInfo
    ? calculateFishingScore({
        hour: currentHour,
        tideType: tideInfo.tideType,
        windSpeed: weatherData?.current.windSpeed ?? 2.5,
        waveHeight: weatherData?.current.waveHeight ?? 0.6,
      })
    : null;

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
            <span>釣行ダッシュボード</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              LIVE
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {selectedSpot.prefecture} {selectedSpot.name} の潮汐・海洋気象・釣行指数
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => loadForecast(selectedSpot)}
            disabled={isLoading}
            className="p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-ocean-600 dark:hover:text-ocean-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs flex items-center gap-1.5 text-xs font-semibold"
            title="最新データに更新"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-ocean-500" : ""}`} />
            <span>最新データ更新</span>
          </button>
        </div>
      </div>

      {/* Spot Selector Bar */}
      <LocationSelector
        currentSpot={selectedSpot}
        onSelectSpot={(s) => setSelectedSpot(s)}
      />

      {/* Row 1: Fishing Score & Tide Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Fishing Score (40% width on desktop) */}
        <div className="lg:col-span-5 flex flex-col">
          {currentScore ? (
            <FishingScoreCard scoreResult={currentScore} timeLabel="現在" className="h-full" />
          ) : (
            <div className="h-full min-h-[360px] bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse" />
          )}
        </div>

        {/* Tide Graph (60% width on desktop) */}
        <div className="lg:col-span-7 flex flex-col">
          {tideInfo ? (
            <TideGraphCard tideInfo={tideInfo} className="h-full" />
          ) : (
            <div className="h-full min-h-[360px] bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse" />
          )}
        </div>
      </div>

      {/* Row 2: Marine Weather Conditions */}
      {weatherData ? (
        <MarineWeatherCard weather={weatherData.current} />
      ) : (
        <div className="h-44 bg-slate-100 dark:bg-slate-900 rounded-3xl animate-pulse" />
      )}

      {/* Row 3: Hourly Matrix */}
      {weatherData && weatherData.hourly.length > 0 && (
        <HourlyForecast hourly={weatherData.hourly} />
      )}

      {/* Row 4: Recommended Target Fish & Spot Tips */}
      <TargetSpeciesCard spot={selectedSpot} />

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <Link
          href="/spots"
          className="p-5 rounded-3xl bg-gradient-to-br from-white to-sky-50/50 dark:from-slate-900 dark:to-ocean-950/30 border border-slate-200 dark:border-slate-800 hover:border-ocean-400 dark:hover:border-ocean-600 transition-all group shadow-sm flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold text-ocean-600 dark:text-ocean-400">
              釣り場を探す
            </span>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-ocean-600 dark:group-hover:text-ocean-400 transition-colors">
              全国釣り場マップ
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              218箇所の施設・堤防・サーフ・地磯・離島
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-ocean-500/10 text-ocean-600 dark:text-ocean-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
        </Link>

        <Link
          href="/forecast"
          className="p-5 rounded-3xl bg-gradient-to-br from-white to-teal-50/50 dark:from-slate-900 dark:to-teal-950/30 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all group shadow-sm flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
              釣行計画を立てる
            </span>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              7日間 潮汐・海洋予報
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              大潮カレンダー & 週間波風
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Calendar className="w-5 h-5" />
          </div>
        </Link>

        <Link
          href="/species"
          className="p-5 rounded-3xl bg-gradient-to-br from-white to-cyan-50/50 dark:from-slate-900 dark:to-cyan-950/30 border border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all group shadow-sm flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
              魚種・仕掛けを調べる
            </span>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              魚種図鑑 & 仕掛けガイド
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              全国74魚種のタナ・旬・タックル
            </p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Fish className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
