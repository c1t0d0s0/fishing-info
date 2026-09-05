"use client";

import { useEffect, useRef, useState } from "react";
import { HourlyForecastItem } from "@/types/weather";
import { getWeatherCodeInfo } from "@/lib/api/openMeteo";
import { Clock, Sparkles, Navigation2, Crosshair } from "lucide-react";

interface HourlyForecastProps {
  hourly: HourlyForecastItem[];
}

export default function HourlyForecast({ hourly }: HourlyForecastProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentItemRef = useRef<HTMLDivElement>(null);
  const [currentHour, setCurrentHour] = useState<number>(new Date().getHours());

  useEffect(() => {
    setCurrentHour(new Date().getHours());
  }, []);

  const scrollToCurrentHour = (behavior: ScrollBehavior = "smooth") => {
    if (containerRef.current && currentItemRef.current) {
      const container = containerRef.current;
      const target = currentItemRef.current;
      const scrollLeft =
        target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior,
      });
    }
  };

  // Center on current time on initial mount and when hourly data loads
  useEffect(() => {
    if (hourly && hourly.length > 0) {
      const timer = setTimeout(() => {
        scrollToCurrentHour("auto");
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [hourly, currentHour]);

  // Find index of current hour
  const currentIdx = hourly.findIndex((item) => {
    if (item.fullTime) {
      const itemDate = new Date(item.fullTime);
      const now = new Date();
      if (
        itemDate.getDate() === now.getDate() &&
        itemDate.getHours() === now.getHours()
      ) {
        return true;
      }
    }
    const hourNum = parseInt(item.time.split(":")[0], 10);
    return hourNum === currentHour;
  });

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              24時間コンディション推移
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              時間別の釣行指数・波・風・潮位
            </span>
          </div>
        </div>

        {/* Quick jump to current hour button */}
        <button
          onClick={() => scrollToCurrentHour("smooth")}
          className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
          title="現在時刻にスクロール"
        >
          <Crosshair className="w-3.5 h-3.5 text-indigo-500" />
          <span className="hidden sm:inline">現在時刻へ</span>
        </button>
      </div>

      {/* Horizontal scrolling timeline */}
      <div
        ref={containerRef}
        className="overflow-x-auto pb-3 pt-1 scrollbar-thin scroll-smooth"
      >
        <div className="flex items-stretch gap-2.5 min-w-max">
          {hourly.map((item, idx) => {
            const isCurrent = idx === currentIdx || (currentIdx === -1 && idx === 0);
            const weatherIcon = getWeatherCodeInfo(item.weatherCode).icon;
            const isScoreHigh = item.fishingScore >= 80;
            const isScoreMedium =
              item.fishingScore >= 60 && item.fishingScore < 80;

            const tempColor =
              item.temperature >= 30
                ? "text-rose-600 dark:text-rose-400 font-black"
                : item.temperature <= 7
                ? "text-sky-600 dark:text-sky-400 font-black"
                : "text-slate-800 dark:text-slate-200";

            const windColor =
              item.windSpeed >= 7.0
                ? "text-rose-600 dark:text-rose-400 font-bold"
                : item.windSpeed >= 4.5
                ? "text-amber-600 dark:text-amber-400 font-bold"
                : "text-slate-700 dark:text-slate-300";

            const waveColor =
              item.waveHeight >= 2.0
                ? "text-rose-600 dark:text-rose-400 font-bold"
                : item.waveHeight >= 1.2
                ? "text-amber-600 dark:text-amber-400 font-bold"
                : "text-slate-700 dark:text-slate-300";

            return (
              <div
                key={idx}
                ref={isCurrent ? currentItemRef : null}
                className={`w-28 p-3 rounded-2xl border flex flex-col justify-between items-center text-center transition-all ${
                  isCurrent
                    ? "ring-2 ring-indigo-500 dark:ring-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/50 border-indigo-300 dark:border-indigo-700 shadow-md transform -translate-y-0.5"
                    : item.isMazume
                    ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700/80 shadow-xs"
                    : isScoreHigh
                    ? "bg-ocean-50/50 dark:bg-ocean-950/20 border-ocean-200 dark:border-ocean-800/60"
                    : "bg-slate-50/70 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800/80"
                }`}
              >
                {/* Time & Mazume / Current badge */}
                <div className="space-y-0.5 w-full">
                  {isCurrent ? (
                    <span className="text-[10px] font-black text-white bg-indigo-600 dark:bg-indigo-500 px-1.5 py-0.5 rounded flex items-center gap-0.5 justify-center shadow-xs animate-pulse">
                      <Clock className="w-2.5 h-2.5" />
                      現在
                    </span>
                  ) : item.isMazume ? (
                    <span className="text-[10px] font-black text-amber-700 dark:text-amber-300 bg-amber-200/70 dark:bg-amber-900/60 px-1.5 py-0.2 rounded flex items-center gap-0.5 justify-center">
                      <Sparkles className="w-2.5 h-2.5" />
                      {item.isMazume === "morning" ? "朝マズメ" : "夕マズメ"}
                    </span>
                  ) : (
                    <div className="h-4" />
                  )}
                  <div
                    className={`text-xs font-black ${
                      isCurrent
                        ? "text-indigo-600 dark:text-indigo-400 font-extrabold"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {item.time}
                  </div>
                </div>

                {/* Weather icon & temp */}
                <div className="my-2 space-y-0.5">
                  <div className="text-xl">{weatherIcon}</div>
                  <div className={`text-xs font-bold ${tempColor}`}>
                    {item.temperature}°C
                  </div>
                </div>

                {/* Fishing Score pill */}
                <div className="w-full my-1.5">
                  <div className="text-[10px] font-medium text-slate-400 mb-0.5">
                    釣行指数
                  </div>
                  <div
                    className={`py-0.5 px-1.5 rounded-lg text-xs font-black ${
                      isScoreHigh
                        ? "bg-rose-500 text-white"
                        : isScoreMedium
                        ? "bg-sky-500 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {item.fishingScore}
                    <span className="text-[9px] font-normal opacity-80">
                      点
                    </span>
                  </div>
                </div>

                {/* Wind & Wave & Tide summary */}
                <div className="w-full text-[10px] text-slate-500 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center justify-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                    <Navigation2
                      className="w-2.5 h-2.5 text-teal-500"
                      style={{
                        transform: `rotate(${item.windDirection + 180}deg)`,
                      }}
                    />
                    <span className={windColor}>{item.windSpeed}m/s</span>
                  </div>
                  <div>
                    波{" "}
                    <span className={`font-semibold ${waveColor}`}>
                      {item.waveHeight}m
                    </span>
                  </div>
                  {item.tideHeight !== undefined && (
                    <div className="text-ocean-600 dark:text-ocean-400 font-semibold">
                      潮位 {item.tideHeight}cm
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
