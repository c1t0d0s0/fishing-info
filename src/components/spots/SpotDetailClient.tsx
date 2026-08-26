"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

import FishingScoreCard from "@/components/dashboard/FishingScoreCard";
import TideGraphCard from "@/components/dashboard/TideGraphCard";
import MarineWeatherCard from "@/components/dashboard/MarineWeatherCard";
import HourlyForecast from "@/components/dashboard/HourlyForecast";

import {
  ArrowLeft,
  MapPin,
  Car,
  Shield,
  Clock,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  ParkingSquare,
  Ban,
  Info,
} from "lucide-react";

interface SpotDetailClientProps {
  spotId: string;
}

export default function SpotDetailClient({ spotId }: SpotDetailClientProps) {
  const spot = DEFAULT_SPOTS.find((s) => s.id === spotId) || DEFAULT_SPOTS[0];

  const [tideInfo, setTideInfo] = useState<DayTideInfo | null>(null);
  const [weatherData, setWeatherData] = useState<MarineWeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
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
    }
    loadData();
  }, [spot]);

  const currentScore = tideInfo
    ? calculateFishingScore({
        hour: new Date().getHours(),
        tideType: tideInfo.tideType,
        windSpeed: weatherData?.current.windSpeed ?? 2.5,
        waveHeight: weatherData?.current.waveHeight ?? 0.6,
      })
    : null;

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Back button */}
      <div>
        <Link
          href="/spots"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-ocean-600 dark:text-slate-400 dark:hover:text-ocean-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>釣り場マップ一覧へ戻る</span>
        </Link>
      </div>

      {/* Spot Hero Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-ocean-600 text-white">
              {spot.prefecture}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {spot.category === "park"
                ? "海釣り施設・公園"
                : spot.category === "port"
                ? "漁港・防波堤"
                : spot.category === "surf"
                ? "サーフ・砂浜"
                : spot.category === "rock"
                ? "地磯"
                : "釣り場"}
            </span>
          </div>

          <div className="text-xs text-slate-400">
            緯度経度: {spot.lat.toFixed(4)}, {spot.lng.toFixed(4)}
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {spot.name}
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">{spot.kana}</p>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {spot.description}
        </p>

        {/* Danger warning if any */}
        {spot.dangerNotes && spot.dangerNotes.length > 0 && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              注意事項・安全確認
            </div>
            {spot.dangerNotes.map((d, i) => (
              <p key={i}>・{d}</p>
            ))}
          </div>
        )}

        {/* Spot Details specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl">
            <span className="text-slate-400 block mb-0.5 text-[11px]">水深目安</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {spot.depthRange}
            </span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl">
            <span className="text-slate-400 block mb-0.5 text-[11px]">海底の底質</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {spot.bottomType}
            </span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl">
            <span className="text-slate-400 block mb-0.5 text-[11px]">利用料金</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {spot.facilities.isFeeRequired
                ? spot.facilities.feeText || "有料"
                : "無料"}
            </span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl">
            <span className="text-slate-400 block mb-0.5 text-[11px]">夜釣り / 開園時間</span>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {spot.facilities.nightFishingText ||
                (spot.facilities.isNightFishingAllowed ? "可能 (常夜灯あり)" : "不可 (日中のみ/夜間閉鎖)")}
            </span>
          </div>
        </div>
      </div>

      {/* Row: Local Rules & Parking Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Local Rules & Prohibited Actions */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-3.5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Ban className="w-5 h-5 text-rose-500" />
              釣り場独自ルール & 禁止事項
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
              重要
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {spot.localRules && spot.localRules.length > 0 ? (
              spot.localRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 flex items-start gap-2.5 text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </div>
              ))
            ) : (
              <div className="p-3 text-slate-400">特記事項なし（一般的な港湾マナーをお守りください）</div>
            )}
          </div>
        </div>

        {/* 2. Parking Information */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-3.5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <ParkingSquare className="w-5 h-5 text-ocean-500" />
              駐車場インフォメーション
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-ocean-100 dark:bg-ocean-950/60 text-ocean-700 dark:text-ocean-300">
              {spot.facilities.hasParking ? "駐車場あり" : "駐車場なし"}
            </span>
          </div>

          {spot.parkingDetails ? (
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block mb-0.5 text-[11px]">収容台数</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {spot.parkingDetails.capacity}
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 block mb-0.5 text-[11px]">駐車料金</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {spot.parkingDetails.fee}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 block mb-0.5 text-[11px]">利用可能時間</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {spot.parkingDetails.hours}
                </span>
              </div>

              {spot.parkingDetails.notes && (
                <div className="p-3 rounded-2xl bg-ocean-50/50 dark:bg-ocean-950/20 border border-ocean-100 dark:border-ocean-900/40 leading-relaxed text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-ocean-800 dark:text-ocean-300 block mb-0.5">
                    💡 駐車のワンポイント:
                  </span>
                  {spot.parkingDetails.notes}
                </div>
              )}
            </div>
          ) : (
            <div className="p-3 text-slate-400 text-xs">近隣の有料コインパーキングをご利用ください。</div>
          )}
        </div>
      </div>

      {/* Facilities Checklist & Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Facilities Checklist */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <Shield className="w-5 h-5 text-ocean-500" />
            設備・施設インフォメーション
          </h3>

          <div className="grid grid-cols-2 gap-2.5 text-xs pt-1">
            <div className="flex items-center gap-2">
              {spot.facilities.hasToilet ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              <span className={spot.facilities.hasToilet ? "font-bold text-slate-800 dark:text-slate-200" : "text-slate-400"}>
                トイレ完備
              </span>
            </div>

            <div className="flex items-center gap-2">
              {spot.facilities.hasParking ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              <span className={spot.facilities.hasParking ? "font-bold text-slate-800 dark:text-slate-200" : "text-slate-400"}>
                駐車場あり
              </span>
            </div>

            <div className="flex items-center gap-2">
              {spot.facilities.hasSafetyFence ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              <span className={spot.facilities.hasSafetyFence ? "font-bold text-slate-800 dark:text-slate-200" : "text-slate-400"}>
                安全柵あり (手すり)
              </span>
            </div>

            <div className="flex items-center gap-2">
              {spot.facilities.isFamilyFriendly ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              <span className={spot.facilities.isFamilyFriendly ? "font-bold text-slate-800 dark:text-slate-200" : "text-slate-400"}>
                ファミリー向け
              </span>
            </div>

            <div className="flex items-center gap-2">
              {spot.facilities.hasConvenienceStoreNearby ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              <span className={spot.facilities.hasConvenienceStoreNearby ? "font-bold text-slate-800 dark:text-slate-200" : "text-slate-400"}>
                近隣コンビニあり
              </span>
            </div>

            <div className="flex items-center gap-2">
              {spot.facilities.hasTackleShopNearby ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <XCircle className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              )}
              <span className={spot.facilities.hasTackleShopNearby ? "font-bold text-slate-800 dark:text-slate-200" : "text-slate-400"}>
                近隣エサ・釣具店あり
              </span>
            </div>
          </div>
        </div>

        {/* Access & Address */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <Car className="w-5 h-5 text-ocean-500" />
            アクセス・所在地
          </h3>

          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[11px]">住所</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {spot.address}
                </span>
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl leading-relaxed">
              {spot.accessInfo}
            </div>
          </div>
        </div>
      </div>

      {/* Live Forecasts for this Spot */}
      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white pt-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-ocean-500" />
        この釣り場のリアルタイム海況・タイドグラフ
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          {currentScore && (
            <FishingScoreCard scoreResult={currentScore} timeLabel="現在" />
          )}
        </div>
        <div className="lg:col-span-7">
          {tideInfo && <TideGraphCard tideInfo={tideInfo} />}
        </div>
      </div>

      {weatherData && <MarineWeatherCard weather={weatherData.current} />}
      {weatherData && weatherData.hourly.length > 0 && (
        <HourlyForecast hourly={weatherData.hourly} />
      )}

      {/* Seasonal Target Fish Breakdown */}
      {(() => {
        const currentMonth = new Date().getMonth() + 1;
        const currentSeasonKey =
          currentMonth >= 3 && currentMonth <= 5
            ? "spring"
            : currentMonth >= 6 && currentMonth <= 8
            ? "summer"
            : currentMonth >= 9 && currentMonth <= 11
            ? "autumn"
            : "winter";

        const seasons = [
          {
            key: "spring",
            label: "🌸 春 (3月〜5月)",
            fishes: spot.bestSeasons.spring,
          },
          {
            key: "summer",
            label: "☀️ 夏 (6月〜8月)",
            fishes: spot.bestSeasons.summer,
          },
          {
            key: "autumn",
            label: "🍁 秋 (9月〜11月)",
            fishes: spot.bestSeasons.autumn,
          },
          {
            key: "winter",
            label: "❄️ 冬 (12月〜2月)",
            fishes: spot.bestSeasons.winter,
          },
        ];

        return (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Clock className="w-5 h-5 text-ocean-500" />
              四季のターゲット魚種カレンダー
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {seasons.map((season) => {
                const isCurrent = season.key === currentSeasonKey;
                return (
                  <div
                    key={season.key}
                    className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 space-y-2 transition-all ${
                      isCurrent
                        ? "border-2 border-ocean-600 dark:border-ocean-400 ring-2 ring-ocean-500/20 shadow-sm"
                        : "border border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">
                        {season.label}
                      </span>
                      {isCurrent && (
                        <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-ocean-600 text-white dark:bg-ocean-500">
                          現在
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {season.fishes.map((f) => (
                        <span
                          key={f}
                          className="bg-white dark:bg-slate-700/80 px-2 py-0.5 rounded-md font-medium text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/40"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
