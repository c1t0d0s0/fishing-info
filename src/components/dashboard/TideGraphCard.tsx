"use client";

import { useState } from "react";
import { DayTideInfo } from "@/types/tide";
import { getTideBadgeColor } from "@/lib/utils/formatters";
import {
  Waves,
  Sunrise,
  Sunset,
  ArrowUpRight,
  ArrowDownRight,
  Moon,
  Sparkles,
} from "lucide-react";

interface TideGraphCardProps {
  tideInfo: DayTideInfo;
  currentHour?: number;
}

export default function TideGraphCard({
  tideInfo,
  currentHour = new Date().getHours() + new Date().getMinutes() / 60,
}: TideGraphCardProps) {
  const [hoveredHour, setHoveredHour] = useState<number | null>(null);

  const {
    tideType,
    moonAge,
    moonPhaseName,
    moonPhaseIcon,
    sunrise,
    sunset,
    morningMazume,
    eveningMazume,
    extremes,
    hourlyPoints,
  } = tideInfo;

  // Calculate SVG Dimensions and scales
  const heights = hourlyPoints.map((p) => p.height);
  const minH = Math.max(0, Math.min(...heights) - 20);
  const maxH = Math.max(...heights) + 25;
  const rangeH = Math.max(1, maxH - minH);

  const svgWidth = 600;
  const svgHeight = 160;
  const paddingX = 20;
  const paddingY = 20;
  const plotWidth = svgWidth - paddingX * 2;
  const plotHeight = svgHeight - paddingY * 2;

  // Coordinate mapping
  const getX = (hour: number) => paddingX + (hour / 24) * plotWidth;
  const getY = (hVal: number) =>
    paddingY + plotHeight - ((hVal - minH) / rangeH) * plotHeight;

  // Build SVG path
  const pathD = hourlyPoints.reduce((acc, pt, idx) => {
    const hour = idx;
    const x = getX(hour);
    const y = getY(pt.height);
    if (idx === 0) return `M ${x} ${y}`;

    // Smooth cubic bezier curve
    const prevPt = hourlyPoints[idx - 1];
    const prevX = getX(idx - 1);
    const prevY = getY(prevPt.height);
    const cpX1 = prevX + (x - prevX) / 2;
    const cpY1 = prevY;
    const cpX2 = prevX + (x - prevX) / 2;
    const cpY2 = y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
  }, "");

  // Area path (closed at bottom)
  const areaD = `${pathD} L ${getX(24)} ${svgHeight - paddingY} L ${getX(0)} ${
    svgHeight - paddingY
  } Z`;

  // Parse sunrise & sunset hours for Mazume highlight zones
  const sunriseHour =
    parseInt(sunrise.split(":")[0]) + parseInt(sunrise.split(":")[1]) / 60;
  const sunsetHour =
    parseInt(sunset.split(":")[0]) + parseInt(sunset.split(":")[1]) / 60;

  // Current time X
  const currentX = getX(currentHour);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Top Bar: Title + Tide Type Badge + Moon info */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
            <Waves className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              タイドグラフ (Tide Graph)
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              潮位推移 & 満潮・干潮予測
            </span>
          </div>
        </div>

        {/* Tide Badge & Moon Phase */}
        <div className="flex items-center gap-2">
          <div
            className={`px-3 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${getTideBadgeColor(
              tideType
            )}`}
          >
            <span>{tideType}</span>
          </div>
          <div className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <span className="text-sm">{moonPhaseIcon}</span>
            <span>月齢 {moonAge}</span>
          </div>
        </div>
      </div>

      {/* Extremes (High & Low Tides) Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {extremes.map((ext, i) => {
          const isHigh = ext.type === "high";
          return (
            <div
              key={i}
              className={`p-2.5 rounded-2xl border flex items-center gap-2.5 ${
                isHigh
                  ? "bg-sky-50/70 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800/60"
                  : "bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/60"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isHigh
                    ? "bg-sky-500 text-white"
                    : "bg-amber-500 text-white"
                }`}
              >
                {isHigh ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1">
                  <span
                    className={`text-[11px] font-bold ${
                      isHigh
                        ? "text-sky-600 dark:text-sky-400"
                        : "text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {isHigh ? "満潮" : "干潮"}
                  </span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {ext.time}
                  </span>
                </div>
                <div className="text-sm font-black text-slate-900 dark:text-white">
                  {ext.height} <span className="text-[10px] font-normal text-slate-400">cm</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SVG Interactive Tide Chart */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50/30 to-ocean-50/60 dark:from-slate-950 dark:to-ocean-950/30 rounded-2xl border border-slate-100 dark:border-slate-800/80 p-2">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            {/* Linear gradient for water area */}
            <linearGradient id="tideGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
            </linearGradient>

            {/* Pattern for Mazume golden hour zones */}
            <linearGradient id="mazumeMorning" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Morning Mazume Highlight Zone */}
          <rect
            x={getX(Math.max(0, sunriseHour - 0.8))}
            y={paddingY}
            width={getX(sunriseHour + 0.8) - getX(sunriseHour - 0.8)}
            height={plotHeight}
            fill="url(#mazumeMorning)"
            rx="4"
          />

          {/* Evening Mazume Highlight Zone */}
          <rect
            x={getX(Math.max(0, sunsetHour - 0.8))}
            y={paddingY}
            width={getX(sunsetHour + 0.8) - getX(sunsetHour - 0.8)}
            height={plotHeight}
            fill="url(#mazumeMorning)"
            rx="4"
          />

          {/* Grid lines (every 6 hours) */}
          {[0, 6, 12, 18, 24].map((h) => (
            <line
              key={h}
              x1={getX(h)}
              y1={paddingY}
              x2={getX(h)}
              y2={svgHeight - paddingY}
              stroke="currentColor"
              className="text-slate-200 dark:text-slate-800"
              strokeDasharray="3 3"
            />
          ))}

          {/* Tide Area Fill */}
          <path d={areaD} fill="url(#tideGradient)" />

          {/* Tide Curve Stroke */}
          <path
            d={pathD}
            fill="none"
            stroke="#0284c7"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Sunrise / Sunset vertical markers */}
          <line
            x1={getX(sunriseHour)}
            y1={paddingY}
            x2={getX(sunriseHour)}
            y2={svgHeight - paddingY}
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <line
            x1={getX(sunsetHour)}
            y1={paddingY}
            x2={getX(sunsetHour)}
            y2={svgHeight - paddingY}
            stroke="#f97316"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* High / Low peak marker circles */}
          {extremes.map((ext, idx) => {
            const [h, m] = ext.time.split(":").map(Number);
            const hourDec = h + m / 60;
            const cx = getX(hourDec);
            const cy = getY(ext.height);
            const isHigh = ext.type === "high";

            return (
              <g key={idx}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill={isHigh ? "#0284c7" : "#f59e0b"}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="shadow-sm"
                />
                <text
                  x={cx}
                  y={isHigh ? cy - 8 : cy + 14}
                  textAnchor="middle"
                  className="text-[9px] font-bold fill-slate-700 dark:fill-slate-200"
                >
                  {ext.height}cm
                </text>
              </g>
            );
          })}

          {/* Current time indicator line */}
          <line
            x1={currentX}
            y1={paddingY - 5}
            x2={currentX}
            y2={svgHeight - paddingY + 5}
            stroke="#ec4899"
            strokeWidth="2"
          />
          <circle
            cx={currentX}
            cy={paddingY - 4}
            r="3.5"
            fill="#ec4899"
          />
          <text
            x={currentX}
            y={paddingY - 8}
            textAnchor="middle"
            className="text-[8px] font-black fill-pink-500"
          >
            現在
          </text>
        </svg>

        {/* Time X-axis labels */}
        <div className="flex justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500 px-4 pt-1">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>

      {/* Sun & Mazume footer bar */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-medium">
            <Sunrise className="w-4 h-4 text-amber-500" />
            日の出 {sunrise}
          </span>
          <span className="flex items-center gap-1 font-medium">
            <Sunset className="w-4 h-4 text-orange-500" />
            日の入り {sunset}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            朝マズメ: {morningMazume.start}〜{morningMazume.end}
          </span>
          <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            夕マズメ: {eveningMazume.start}〜{eveningMazume.end}
          </span>
        </div>
      </div>
    </div>
  );
}
