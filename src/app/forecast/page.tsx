"use client";

import { useState, useEffect } from "react";
import { DEFAULT_SPOTS } from "@/lib/data/defaultSpots";
import { FishingSpot } from "@/types/spot";
import { DayTideInfo } from "@/types/tide";
import { MarineWeatherResponse, DailyForecastItem } from "@/types/weather";
import { generateDayTideInfo } from "@/lib/tide/tideEngine";
import {
  fetchMarineWeather,
  generateFallbackMarineWeather,
  getWeatherCodeInfo,
} from "@/lib/api/openMeteo";
import { getTideBadgeColor, formatDateJp } from "@/lib/utils/formatters";
import LocationSelector from "@/components/dashboard/LocationSelector";
import TideGraphCard from "@/components/dashboard/TideGraphCard";
import {
  Calendar,
  Sparkles,
  Waves,
  Wind,
  Sunrise,
  Sunset,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";

export default function ForecastPage() {
  const [selectedSpot, setSelectedSpot] = useState<FishingSpot>(DEFAULT_SPOTS[0]);
  const [weatherData, setWeatherData] = useState<MarineWeatherResponse | null>(null);
  const [sevenDayTides, setSevenDayTides] = useState<DayTideInfo[]>([]);
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load spot preference
  useEffect(() => {
    const savedSpotId = localStorage.getItem("preferred_fishing_spot_id");
    if (savedSpotId) {
      const found = DEFAULT_SPOTS.find((s) => s.id === savedSpotId);
      if (found) setSelectedSpot(found);
    }
  }, []);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const dates: Date[] = [];
      const tides: DayTideInfo[] = [];

      for (let i = 0; i < 7; i++) {
        const d = new Date(Date.now() + i * 86400000);
        dates.push(d);
        tides.push(generateDayTideInfo(d, selectedSpot.lat, selectedSpot.lng));
      }
      setSevenDayTides(tides);

      try {
        const weather = await fetchMarineWeather(selectedSpot.lat, selectedSpot.lng);
        setWeatherData(weather);
      } catch {
        setWeatherData(generateFallbackMarineWeather(selectedSpot.lat, selectedSpot.lng));
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
    localStorage.setItem("preferred_fishing_spot_id", selectedSpot.id);
  }, [selectedSpot]);

  const activeTide = sevenDayTides[activeDayIndex] || sevenDayTides[0];

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
          <Calendar className="w-7 h-7 text-ocean-500" />
          <span>7日間 潮汐・海洋気象マトリクス</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          週間大潮スケジュール・満干潮ピーク予測・波風トレンドでベストな釣行日を計画
        </p>
      </div>

      {/* Spot Selector */}
      <LocationSelector
        currentSpot={selectedSpot}
        onSelectSpot={(s) => setSelectedSpot(s)}
      />

      {/* 7-Day Matrix Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {sevenDayTides.map((tide, idx) => {
          const dailyWeather = weatherData?.daily?.[idx];
          const isSelected = activeDayIndex === idx;
          const weatherInfo = dailyWeather
            ? getWeatherCodeInfo(dailyWeather.weatherCode)
            : { text: "晴れ", icon: "☀️" };

          const isSpringTide = tide.tideType === "大潮";

          return (
            <div
              key={idx}
              onClick={() => setActiveDayIndex(idx)}
              className={`p-3.5 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2.5 text-center ${
                isSelected
                  ? "bg-ocean-50 dark:bg-ocean-950/50 border-ocean-500 shadow-md ring-2 ring-ocean-500/20"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-ocean-300 dark:hover:border-ocean-700"
              }`}
            >
              {/* Date & Day of week */}
              <div>
                <div className="text-[11px] font-bold text-slate-400">
                  {formatDateJp(tide.date)}
                </div>
                <div className="text-xs font-black text-slate-900 dark:text-white mt-0.5">
                  {idx === 0 ? "今日" : idx === 1 ? "明日" : `${idx}日後`}
                </div>
              </div>

              {/* Weather icon & temp */}
              <div className="space-y-0.5">
                <div className="text-2xl">{weatherInfo.icon}</div>
                <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {dailyWeather?.tempMax ?? 24}° / {dailyWeather?.tempMin ?? 18}°
                </div>
              </div>

              {/* Tide Type Badge */}
              <div
                className={`py-1 px-2 rounded-xl text-xs font-bold border ${getTideBadgeColor(
                  tide.tideType
                )}`}
              >
                {tide.tideType}
              </div>

              {/* Moon phase & age */}
              <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                <span>{tide.moonPhaseIcon}</span>
                <span>月齢 {tide.moonAge}</span>
              </div>

              {/* Fishing Score average */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                <span className="text-slate-400 text-[10px] block">釣行指数</span>
                <span
                  className={`font-black ${
                    isSpringTide
                      ? "text-rose-500"
                      : tide.tideType === "中潮"
                      ? "text-sky-500"
                      : "text-slate-500"
                  }`}
                >
                  {dailyWeather?.fishingScoreAvg ?? (isSpringTide ? 85 : 70)}点
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Day's In-Depth Details */}
      {activeTide && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-ocean-500" />
              <span>
                {formatDateJp(activeTide.date)} ({activeTide.tideType}) の詳細タイドグラフ
              </span>
            </h2>
          </div>

          <TideGraphCard tideInfo={activeTide} />

          {/* Extremes summary for this day */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-4 flex items-center gap-2">
              <Waves className="w-5 h-5 text-ocean-500" />
              この日の満潮・干潮 & マズメ時スケジュール
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-400 block">日の出 & 朝マズメ</span>
                <div className="text-sm font-black text-amber-600 dark:text-amber-400">
                  {activeTide.sunrise} (日の出)
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  マズメ時帯: {activeTide.morningMazume.start} 〜 {activeTide.morningMazume.end}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-400 block">日の入り & 夕マズメ</span>
                <div className="text-sm font-black text-orange-600 dark:text-orange-400">
                  {activeTide.sunset} (日の入り)
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  マズメ時帯: {activeTide.eveningMazume.start} 〜 {activeTide.eveningMazume.end}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 space-y-1.5 sm:col-span-2">
                <span className="font-bold text-sky-700 dark:text-sky-300 block">
                  満潮・干潮ピーク時刻
                </span>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {activeTide.extremes.map((e, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200"
                    >
                      {e.type === "high" ? "🌊 満潮" : "🪨 干潮"} {e.time} ({e.height}cm)
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
