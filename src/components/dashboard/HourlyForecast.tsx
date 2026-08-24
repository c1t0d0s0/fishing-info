import { HourlyForecastItem } from "@/types/weather";
import { getWeatherCodeInfo } from "@/lib/api/openMeteo";
import { Clock, Sparkles, Navigation2 } from "lucide-react";

interface HourlyForecastProps {
  hourly: HourlyForecastItem[];
}

export default function HourlyForecast({ hourly }: HourlyForecastProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              24時間コンディション推移 (Hourly Matrix)
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              時間別の釣行指数・波・風・潮位
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling timeline */}
      <div className="overflow-x-auto pb-3 pt-1 scrollbar-thin">
        <div className="flex items-stretch gap-2.5 min-w-max">
          {hourly.map((item, idx) => {
            const weatherIcon = getWeatherCodeInfo(item.weatherCode).icon;
            const isScoreHigh = item.fishingScore >= 80;
            const isScoreMedium = item.fishingScore >= 60 && item.fishingScore < 80;

            return (
              <div
                key={idx}
                className={`w-28 p-3 rounded-2xl border flex flex-col justify-between items-center text-center transition-all ${
                  item.isMazume
                    ? "bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700/80 shadow-xs"
                    : isScoreHigh
                    ? "bg-ocean-50/50 dark:bg-ocean-950/20 border-ocean-200 dark:border-ocean-800/60"
                    : "bg-slate-50/70 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800/80"
                }`}
              >
                {/* Time & Mazume badge */}
                <div className="space-y-0.5">
                  {item.isMazume ? (
                    <span className="text-[10px] font-black text-amber-700 dark:text-amber-300 bg-amber-200/70 dark:bg-amber-900/60 px-1.5 py-0.2 rounded flex items-center gap-0.5 justify-center">
                      <Sparkles className="w-2.5 h-2.5" />
                      {item.isMazume === "morning" ? "朝マズメ" : "夕マズメ"}
                    </span>
                  ) : (
                    <div className="h-4" />
                  )}
                  <div className="text-xs font-black text-slate-900 dark:text-white">
                    {item.time}
                  </div>
                </div>

                {/* Weather icon & temp */}
                <div className="my-2 space-y-0.5">
                  <div className="text-xl">{weatherIcon}</div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item.temperature}°C
                  </div>
                </div>

                {/* Fishing Score pill */}
                <div className="w-full my-1.5">
                  <div className="text-[10px] font-medium text-slate-400 mb-0.5">釣行指数</div>
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
                    <span className="text-[9px] font-normal opacity-80">点</span>
                  </div>
                </div>

                {/* Wind & Wave & Tide summary */}
                <div className="w-full text-[10px] text-slate-500 dark:text-slate-400 space-y-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center justify-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                    <Navigation2
                      className="w-2.5 h-2.5 text-teal-500"
                      style={{ transform: `rotate(${item.windDirection + 180}deg)` }}
                    />
                    <span>{item.windSpeed}m/s</span>
                  </div>
                  <div>
                    波 <span className="font-semibold text-slate-700 dark:text-slate-300">{item.waveHeight}m</span>
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
