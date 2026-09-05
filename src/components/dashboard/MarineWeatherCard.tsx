import { CurrentMarineWeather } from "@/types/weather";
import {
  Wind,
  Waves,
  Thermometer,
  Gauge,
  Compass as CompassIcon,
  Sun,
  Navigation2,
  CloudRain,
} from "lucide-react";

interface MarineWeatherCardProps {
  weather: CurrentMarineWeather;
}

export default function MarineWeatherCard({ weather }: MarineWeatherCardProps) {
  const {
    temperature,
    apparentTemperature,
    precipitation,
    weatherDescription,
    windSpeed,
    windDirection,
    windDirectionCompass,
    windGusts,
    waveHeight,
    wavePeriod,
    swellWaveHeight,
    swellWavePeriod,
    seaWaterTemperature,
    surfacePressure,
    uvIndex,
  } = weather;

  // Wave condition styling & thresholds
  const isHighWave = waveHeight >= 2.0;
  const isModerateWave = waveHeight >= 1.2 && waveHeight < 2.0;
  const waveHeightColor = isHighWave
    ? "text-rose-600 dark:text-rose-400"
    : isModerateWave
    ? "text-amber-600 dark:text-amber-400"
    : "text-slate-900 dark:text-white";

  const isHighSwell = swellWaveHeight >= 1.5;
  const isModerateSwell = swellWaveHeight >= 1.0 && swellWaveHeight < 1.5;
  const swellColor = isHighSwell
    ? "text-rose-600 dark:text-rose-400"
    : isModerateSwell
    ? "text-amber-600 dark:text-amber-400"
    : "text-slate-800 dark:text-slate-200";

  // Wind condition styling & thresholds
  const isStrongWind = windSpeed >= 7.0;
  const isModerateWind = windSpeed >= 4.5 && windSpeed < 7.0;
  const windSpeedColor = isStrongWind
    ? "text-rose-600 dark:text-rose-400"
    : isModerateWind
    ? "text-amber-600 dark:text-amber-400"
    : "text-slate-900 dark:text-white";

  const isStrongGust = windGusts >= 10.0;
  const isModerateGust = windGusts >= 7.0 && windGusts < 10.0;
  const gustColor = isStrongGust
    ? "text-rose-600 dark:text-rose-400"
    : isModerateGust
    ? "text-amber-600 dark:text-amber-400"
    : "text-slate-800 dark:text-slate-200";

  // Sea water temperature styling & thresholds
  const isHighSeaTemp = seaWaterTemperature >= 26.0;
  const isLowSeaTemp = seaWaterTemperature <= 13.0;
  const seaTempColor = isHighSeaTemp
    ? "text-rose-600 dark:text-rose-400"
    : isLowSeaTemp
    ? "text-sky-600 dark:text-sky-400"
    : "text-slate-900 dark:text-white";

  // Air temperature styling & thresholds
  const isHighTemp = temperature >= 30.0;
  const isLowTemp = temperature <= 7.0;
  const tempNumberColor = isHighTemp
    ? "text-rose-600 dark:text-rose-400"
    : isLowTemp
    ? "text-sky-600 dark:text-sky-400"
    : "text-slate-800 dark:text-slate-200";

  const headerTempColor = isHighTemp
    ? "text-rose-600 dark:text-rose-400 font-extrabold"
    : isLowTemp
    ? "text-sky-600 dark:text-sky-400 font-extrabold"
    : "text-ocean-600 dark:text-ocean-400";

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
            <Wind className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-slate-900 dark:text-white text-base truncate">
              海洋・気象実況
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 block truncate">
              波高・風向風速・海水温・気圧
            </span>
          </div>
        </div>

        {/* Current Weather condition chip */}
        <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shrink-0 whitespace-nowrap shadow-2xs">
          <span>{weatherDescription}</span>
          <span className={headerTempColor}>{temperature}°C</span>
        </div>
      </div>

      {/* Main Grid: Wave, Wind, Sea Temp, Pressure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Wave Height & Swell */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50/50 dark:from-sky-950/30 dark:to-blue-950/20 border border-sky-100 dark:border-sky-900/40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
              <Waves className="w-4 h-4" />
              波の高さ・うねり
            </span>
            <span
              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                isHighWave
                  ? "bg-rose-500 text-white"
                  : isModerateWave
                  ? "bg-amber-500 text-white"
                  : "bg-emerald-500 text-white"
              }`}
            >
              {isHighWave ? "高波注意" : isModerateWave ? "やや波あり" : "穏やか"}
            </span>
          </div>

          <div className="flex items-baseline gap-1 my-1">
            <span className={`text-3xl font-black transition-colors ${waveHeightColor}`}>
              {waveHeight}
            </span>
            <span className="text-sm font-bold text-slate-500">m</span>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 pt-1">
            <div>
              波の周期: <span className="font-semibold text-slate-800 dark:text-slate-200">{wavePeriod}秒</span>
            </div>
            <div>
              うねり: <span className={`font-semibold ${swellColor}`}>{swellWaveHeight}m</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold"> ({swellWavePeriod}秒)</span>
            </div>
          </div>
        </div>

        {/* 2. Wind Speed & Direction Compass */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50/50 dark:from-teal-950/30 dark:to-emerald-950/20 border border-teal-100 dark:border-teal-900/40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
              <Wind className="w-4 h-4" />
              風向・風速
            </span>
            <span
              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                isStrongWind
                  ? "bg-rose-500 text-white"
                  : isModerateWind
                  ? "bg-amber-500 text-white"
                  : "bg-emerald-500 text-white"
              }`}
            >
              {isStrongWind ? "強風警戒" : isModerateWind ? "やや風あり" : "微風・快適"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1 my-1">
              <span className={`text-3xl font-black transition-colors ${windSpeedColor}`}>
                {windSpeed}
              </span>
              <span className="text-sm font-bold text-slate-500">m/s</span>
            </div>

            {/* Compass arrow */}
            <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-teal-200 dark:border-teal-800">
              <div
                className="transition-transform duration-700"
                style={{ transform: `rotate(${windDirection + 180}deg)` }}
              >
                <Navigation2 className="w-4 h-4 text-teal-600 dark:text-teal-400 fill-teal-600 dark:fill-teal-400" />
              </div>
              <span className="text-xs font-bold text-teal-800 dark:text-teal-200">
                {windDirectionCompass}
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-400 pt-1">
            最大瞬間突風: <span className={`font-semibold ${gustColor}`}>{windGusts} m/s</span>
          </div>
        </div>

        {/* 3. Sea Water Temperature & Air Temp */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50/50 dark:from-cyan-950/30 dark:to-sky-950/20 border border-cyan-100 dark:border-cyan-900/40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5">
              <Thermometer className="w-4 h-4" />
              海水温・気温
            </span>
            <span
              className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                isHighSeaTemp
                  ? "bg-rose-500 text-white"
                  : isLowSeaTemp
                  ? "bg-sky-500 text-white"
                  : "bg-cyan-100 dark:bg-cyan-900/60 text-cyan-800 dark:text-cyan-200"
              }`}
            >
              {isHighSeaTemp ? "高水温注意" : isLowSeaTemp ? "低水温警戒" : "魚の活性目安"}
            </span>
          </div>

          <div className="flex items-baseline gap-1 my-1">
            <span className={`text-3xl font-black transition-colors ${seaTempColor}`}>
              {seaWaterTemperature}
            </span>
            <span className="text-sm font-bold text-slate-500">°C</span>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 pt-1">
            <div>
              気温:{" "}
              <span className={`font-semibold ${tempNumberColor}`}>
                {temperature}°C
              </span>
              {" "}
              <span className="text-slate-500 dark:text-slate-400">
                (体感 {apparentTemperature}°C)
              </span>
            </div>
            <div>
              降水量: <span className="font-semibold text-slate-800 dark:text-slate-200">{precipitation} mm/h</span>
            </div>
          </div>
        </div>

        {/* 4. Atmospheric Pressure & UV */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" />
              気圧・UV指数
            </span>
            <span className="text-[10px] font-semibold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200 px-2 py-0.5 rounded-full">
              浮袋活性
            </span>
          </div>

          <div className="flex items-baseline gap-1 my-1">
            <span className="text-3xl font-black text-slate-900 dark:text-white">
              {surfacePressure}
            </span>
            <span className="text-sm font-bold text-slate-500">hPa</span>
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5 pt-1">
            <div>
              気圧状態:{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {surfacePressure < 1010 ? "低気圧 (活性上昇チャンス)" : "安定"}
              </span>
            </div>
            <div>
              紫外線UV: <span className="font-semibold text-slate-800 dark:text-slate-200">Index {uvIndex}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
