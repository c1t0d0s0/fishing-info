"use client";

import React, { useState, useRef } from "react";
import { DayTideInfo } from "@/types/tide";
import { getTideBadgeColor, getTideDescription } from "@/lib/utils/formatters";
import {
  Waves,
  Sunrise,
  Sunset,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

interface TideGraphCardProps {
  tideInfo: DayTideInfo;
  currentHour?: number;
  showCurrentTime?: boolean;
  className?: string;
}

interface Point2D {
  x: number;
  y: number;
  hour: number;
  height: number;
}

/**
 * Converts an array of points into a smooth Catmull-Rom cubic bezier SVG path
 */
function getCatmullRomSplinePath(points: Point2D[], tension: number = 0.5): string {
  if (points.length < 2) return "";
  let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[0];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + ((p2.x - p0.x) / 6) * tension * 2;
    const cp1y = p1.y + ((p2.y - p0.y) / 6) * tension * 2;
    const cp2x = p2.x - ((p3.x - p1.x) / 6) * tension * 2;
    const cp2y = p2.y - ((p3.y - p1.y) / 6) * tension * 2;

    path += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(
      2
    )} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return path;
}

export default function TideGraphCard({
  tideInfo,
  currentHour = new Date().getHours() + new Date().getMinutes() / 60,
  showCurrentTime,
  className = "",
}: TideGraphCardProps) {
  const [hoveredData, setHoveredData] = useState<{
    hour: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  const svgRef = useRef<SVGSVGElement>(null);

  // Check if this graph represents today
  const isToday = (() => {
    if (showCurrentTime !== undefined) return showCurrentTime;
    if (!tideInfo.date) return true;
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    return tideInfo.date === todayStr;
  })();

  const {
    tideType,
    moonAge,
    moonPhaseIcon,
    sunrise,
    sunset,
    morningMazume,
    eveningMazume,
    extremes,
    hourlyPoints,
  } = tideInfo;

  // Calculate SVG Dimensions and scales
  const allHeights = [
    ...hourlyPoints.map((p) => p.height),
    ...extremes.map((e) => e.height),
  ];
  const minH = Math.max(0, Math.min(...allHeights) - 15);
  const maxH = Math.max(...allHeights) + 25;
  const rangeH = Math.max(1, maxH - minH);

  const svgWidth = 640;
  const svgHeight = 170;
  const paddingX = 24;
  const paddingY = 22;
  const plotWidth = svgWidth - paddingX * 2;
  const plotHeight = svgHeight - paddingY * 2;

  // Coordinate mapping
  const getX = (hour: number) => paddingX + (hour / 24) * plotWidth;
  const getY = (hVal: number) =>
    paddingY + plotHeight - ((hVal - minH) / rangeH) * plotHeight;

  // Merge hourly points and exact extreme peaks in chronological order
  const rawKeyPoints: { hour: number; height: number }[] = [];
  hourlyPoints.forEach((p, idx) => {
    rawKeyPoints.push({ hour: idx, height: p.height });
  });

  extremes.forEach((ext) => {
    const [h, m] = ext.time.split(":").map(Number);
    rawKeyPoints.push({ hour: h + m / 60, height: ext.height });
  });

  rawKeyPoints.sort((a, b) => a.hour - b.hour);

  // Filter out any duplicate or near-coincident points (< 10 minutes apart)
  const keyPoints: { hour: number; height: number }[] = [];
  for (const pt of rawKeyPoints) {
    if (keyPoints.length === 0) {
      keyPoints.push(pt);
    } else {
      const last = keyPoints[keyPoints.length - 1];
      if (Math.abs(pt.hour - last.hour) < 0.15) {
        // Keep the more accurate extreme value
        keyPoints[keyPoints.length - 1] = pt;
      } else {
        keyPoints.push(pt);
      }
    }
  }

  // Convert key points to 2D screen coordinates
  const screenPoints: Point2D[] = keyPoints.map((p) => ({
    x: getX(p.hour),
    y: getY(p.height),
    hour: p.hour,
    height: p.height,
  }));

  // Generate ultra-smooth Catmull-Rom cubic bezier curve
  const pathD = getCatmullRomSplinePath(screenPoints, 0.5);

  // Closed area path for gradient water fill
  const areaD = `${pathD} L ${getX(24).toFixed(2)} ${(
    svgHeight - paddingY
  ).toFixed(2)} L ${getX(0).toFixed(2)} ${(svgHeight - paddingY).toFixed(2)} Z`;

  // Parse sunrise & sunset hours for Mazume highlight zones
  const sunriseHour =
    parseInt(sunrise.split(":")[0]) + parseInt(sunrise.split(":")[1]) / 60;
  const sunsetHour =
    parseInt(sunset.split(":")[0]) + parseInt(sunset.split(":")[1]) / 60;

  // Current time X & Y
  const currentX = getX(currentHour);

  // Function to interpolate tide height at arbitrary decimal hour
  const interpolateHeight = (hour: number): number => {
    if (screenPoints.length === 0) return 100;
    if (hour <= screenPoints[0].hour) return screenPoints[0].height;
    if (hour >= screenPoints[screenPoints.length - 1].hour)
      return screenPoints[screenPoints.length - 1].height;

    for (let i = 0; i < screenPoints.length - 1; i++) {
      const p1 = screenPoints[i];
      const p2 = screenPoints[i + 1];
      if (hour >= p1.hour && hour <= p2.hour) {
        const t = (hour - p1.hour) / (p2.hour - p1.hour);
        // Cosine interpolation for smooth wave profile
        const mu = (1 - Math.cos(t * Math.PI)) / 2;
        return Math.round((p1.height * (1 - mu) + p2.height * mu) * 10) / 10;
      }
    }
    return screenPoints[0].height;
  };

  // Mouse move handler for interactive inspection
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const ratio = Math.max(
      0,
      Math.min(
        1,
        (clientX - (paddingX / svgWidth) * rect.width) /
          ((plotWidth / svgWidth) * rect.width)
      )
    );
    const hour = Math.max(0, Math.min(24, ratio * 24));
    const h = interpolateHeight(hour);
    setHoveredData({
      hour,
      height: Math.round(h),
      x: getX(hour),
      y: getY(h),
    });
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  const formatHourMinute = (decimalHour: number) => {
    const h = Math.floor(decimalHour);
    const m = Math.round((decimalHour - h) * 60);
    const safeH = h >= 24 ? 23 : h;
    const safeM = h >= 24 ? 59 : m;
    return `${safeH.toString().padStart(2, "0")}:${safeM
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}>
      {/* Top Bar: Title + Tide Type Badge + Moon info */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
            <Waves className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              タイドグラフ
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span>潮位推移 & 満潮・干潮予測</span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
              <span className="hidden sm:inline font-medium text-slate-600 dark:text-slate-300">
                {getTideDescription(tideType)}
              </span>
            </p>
          </div>
        </div>

        {/* Tide Badge & Moon Phase */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Prominent Tide Badge */}
          <div
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl border flex items-center gap-2 shadow-sm transition-transform hover:scale-[1.02] ${getTideBadgeColor(
              tideType
            )}`}
            title={`${tideType}: ${getTideDescription(tideType)}`}
          >
            <span className="text-[11px] font-bold opacity-85 hidden sm:inline tracking-wider">
              潮回り
            </span>
            <span className="text-base sm:text-xl font-black tracking-wide leading-none">
              {tideType}
            </span>
          </div>

          {/* Moon Info Badge */}
          <div className="px-3 py-1.5 sm:py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
            <span className="text-base sm:text-lg leading-none">{moonPhaseIcon}</span>
            <span className="leading-none">月齢 {moonAge}</span>
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
              className={`p-2.5 rounded-2xl border flex items-center gap-2.5 transition-transform hover:scale-[1.02] ${
                isHigh
                  ? "bg-sky-50/70 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800/60"
                  : "bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/60"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
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
                  {ext.height}{" "}
                  <span className="text-[10px] font-normal text-slate-400">
                    cm
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SVG Interactive Tide Chart */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50/30 via-slate-50/40 to-ocean-50/70 dark:from-slate-950 dark:via-slate-900/50 dark:to-ocean-950/40 rounded-2xl border border-slate-100 dark:border-slate-800/80 p-2 group">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible select-none cursor-crosshair"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            {/* Linear gradient for smooth water area */}
            <linearGradient id="tideWaterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.38" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.02" />
            </linearGradient>

            {/* Pattern for Morning Mazume zone */}
            <linearGradient id="mazumeMorningGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>

            {/* Pattern for Evening Mazume zone */}
            <linearGradient id="mazumeEveningGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
            </linearGradient>

            {/* Curve stroke shadow */}
            <filter id="curveShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0284c7" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Morning Mazume Highlight Zone */}
          <rect
            x={getX(Math.max(0, sunriseHour - 0.8))}
            y={paddingY}
            width={getX(sunriseHour + 0.8) - getX(sunriseHour - 0.8)}
            height={plotHeight}
            fill="url(#mazumeMorningGrad)"
            rx="4"
          />

          {/* Evening Mazume Highlight Zone */}
          <rect
            x={getX(Math.max(0, sunsetHour - 0.8))}
            y={paddingY}
            width={getX(sunsetHour + 0.8) - getX(sunsetHour - 0.8)}
            height={plotHeight}
            fill="url(#mazumeEveningGrad)"
            rx="4"
          />

          {/* Grid lines (every 3 hours) */}
          {[0, 3, 6, 9, 12, 15, 18, 21, 24].map((h) => (
            <line
              key={h}
              x1={getX(h)}
              y1={paddingY}
              x2={getX(h)}
              y2={svgHeight - paddingY}
              stroke="currentColor"
              className={
                h % 6 === 0
                  ? "text-slate-200 dark:text-slate-700/80"
                  : "text-slate-100 dark:text-slate-800/40"
              }
              strokeDasharray={h % 6 === 0 ? "3 3" : "2 4"}
              strokeWidth="1"
            />
          ))}

          {/* Tide Area Fill (Silky smooth closed bezier polygon) */}
          <path d={areaD} fill="url(#tideWaterGradient)" />

          {/* Tide Curve Stroke (Silky smooth Catmull-Rom cubic bezier) */}
          <path
            d={pathD}
            fill="none"
            stroke="#0284c7"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#curveShadow)"
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

          {/* High / Low peak marker circles with tags */}
          {extremes.map((ext, idx) => {
            const [h, m] = ext.time.split(":").map(Number);
            const hourDec = h + m / 60;
            const cx = getX(hourDec);
            const cy = getY(ext.height);
            const isHigh = ext.type === "high";

            return (
              <g key={idx} className="transition-transform hover:scale-110">
                <circle
                  cx={cx}
                  cy={cy}
                  r="5.5"
                  fill={isHigh ? "#0284c7" : "#f59e0b"}
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  className="shadow-sm drop-shadow"
                />
                <rect
                  x={cx - 24}
                  y={isHigh ? cy - 24 : cy + 8}
                  width="48"
                  height="16"
                  rx="6"
                  className={
                    isHigh
                      ? "fill-sky-600/90 dark:fill-sky-700/90"
                      : "fill-amber-600/90 dark:fill-amber-700/90"
                  }
                />
                <text
                  x={cx}
                  y={isHigh ? cy - 12 : cy + 20}
                  textAnchor="middle"
                  className="text-[9px] font-black fill-white"
                >
                  {ext.height}cm
                </text>
              </g>
            );
          })}

          {/* Current time indicator line (Today only) */}
          {isToday && (
            <g>
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
            </g>
          )}

          {/* Interactive Hover inspection line & circle */}
          {hoveredData && (
            <g>
              <line
                x1={hoveredData.x}
                y1={paddingY}
                x2={hoveredData.x}
                y2={svgHeight - paddingY}
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Ripple animation centered on hovered point */}
              <circle
                cx={hoveredData.x}
                cy={hoveredData.y}
                r="5"
                fill="#6366f1"
                opacity="0.6"
              >
                <animate
                  attributeName="r"
                  values="5;13"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Main point */}
              <circle
                cx={hoveredData.x}
                cy={hoveredData.y}
                r="5"
                fill="#6366f1"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </g>
          )}
        </svg>

        {/* Hover Floating Tooltip */}
        {hoveredData && (
          <div
            className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-xl shadow-lg border border-slate-700 backdrop-blur-xs flex items-center gap-2 transition-all duration-75"
            style={{
              left: `${(hoveredData.x / svgWidth) * 100}%`,
              top: `${(hoveredData.y / svgHeight) * 100 - 4}%`,
            }}
          >
            <span className="text-sky-300">
              {formatHourMinute(hoveredData.hour)}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="text-white font-black">
              {hoveredData.height}
              <span className="text-[9px] font-normal text-slate-300 ml-0.5">cm</span>
            </span>
          </div>
        )}

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
