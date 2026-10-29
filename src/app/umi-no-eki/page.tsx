"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { UMI_NO_EKI_LIST } from "@/lib/data/umiNoEkiData";
import { UmiNoEki } from "@/types/uminoeki";
import { RegionId } from "@/types/spot";
import UmiNoEkiMap from "@/components/map/UmiNoEkiMap";
import {
  Anchor,
  Search,
  Filter,
  MapPin,
  Phone,
  Clock,
  Calendar,
  Ship,
  Fish,
  ExternalLink,
  ShieldAlert,
  Compass,
  Check,
  X,
  ChevronRight,
  Info,
  DollarSign,
  AlertCircle,
  Dices,
} from "lucide-react";

const REGIONS: { id: RegionId | "all"; name: string }[] = [
  { id: "all", name: "全国" },
  { id: "hokkaido", name: "北海道" },
  { id: "tohoku", name: "東北" },
  { id: "kanto", name: "関東" },
  { id: "hokuriku", name: "北陸・甲信越" },
  { id: "tokai", name: "東海" },
  { id: "kansai", name: "近畿" },
  { id: "chugoku", name: "中国" },
  { id: "shikoku", name: "四国" },
  { id: "kyushu", name: "九州・沖縄" },
];

function normalizeText(text: string): string {
  if (!text) return "";
  let str = text
    .toLowerCase()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/[\s　]+/g, "");
  str = str.replace(/[\u30a1-\u30f6]/g, (m) => String.fromCharCode(m.charCodeAt(0) - 0x60));
  return str;
}

export default function UmiNoEkiPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | "all">("all");
  const [filterRentalBoat, setFilterRentalBoat] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [activeStation, setActiveStation] = useState<UmiNoEki>(() => UMI_NO_EKI_LIST[0]);

  // On client-side mount, pick a random station
  useEffect(() => {
    if (UMI_NO_EKI_LIST.length > 0) {
      const randomIndex = Math.floor(Math.random() * UMI_NO_EKI_LIST.length);
      setActiveStation(UMI_NO_EKI_LIST[randomIndex]);
    }
  }, []);

  // Handler to pick another random station
  const handleRandomStation = () => {
    if (UMI_NO_EKI_LIST.length > 0) {
      const candidates = UMI_NO_EKI_LIST.filter((s) => s.id !== activeStation?.id);
      const pool = candidates.length > 0 ? candidates : UMI_NO_EKI_LIST;
      const picked = pool[Math.floor(Math.random() * pool.length)];

      // Reset any active filters that would exclude the randomly picked station
      if (searchQuery) {
        setSearchQuery("");
      }
      if (selectedRegion !== "all" && picked.region !== selectedRegion) {
        setSelectedRegion("all");
      }
      if (filterRentalBoat && !picked.hasRentalBoat) {
        setFilterRentalBoat(false);
      }

      setActiveStation(picked);
    }
  };

  // Filter stations
  const filteredStations = useMemo(() => {
    return UMI_NO_EKI_LIST.filter((station) => {
      if (selectedRegion !== "all" && station.region !== selectedRegion) return false;
      if (filterRentalBoat && !station.hasRentalBoat) return false;

      if (searchQuery) {
        const rawQ = searchQuery.toLowerCase().trim();
        const normQ = normalizeText(searchQuery);

        const targetTexts = [
          station.name,
          station.officialName,
          station.address,
          station.prefecture,
          station.description,
          station.visitorBerth,
          station.rentalBoatText,
          station.tel,
        ];

        const matches = targetTexts.some((txt) => {
          if (!txt) return false;
          const raw = txt.toLowerCase();
          const norm = normalizeText(txt);
          return raw.includes(rawQ) || norm.includes(normQ);
        });

        if (!matches) return false;
      }

      return true;
    });
  }, [selectedRegion, filterRentalBoat, searchQuery]);

  // Keep activeStation valid
  useEffect(() => {
    if (filteredStations.length > 0 && !filteredStations.some((s) => s.id === activeStation.id)) {
      setActiveStation(filteredStations[0]);
    }
  }, [filteredStations, activeStation.id]);

  const totalCount = UMI_NO_EKI_LIST.length;
  const rentalCount = useMemo(() => UMI_NO_EKI_LIST.filter((u) => u.hasRentalBoat).length, []);

  // Some stations list several numbers (or a FAX) in one field; dial only the first number
  const firstTel = activeStation?.tel
    .match(/0\d{1,4}[-－‐]\d{1,4}[-－‐]\d{3,4}/)?.[0]
    .replace(/[－‐]/g, "-");

  const handleResetFilters = () => {
    setSelectedRegion("all");
    setFilterRentalBoat(false);
    setSearchQuery("");
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
            <span>全国海の駅マップ & マリンステーション情報</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-3xl leading-relaxed">
            国土交通省認定の全国{totalCount}箇所にある「海の駅」を完全網羅。営業時間・ビジターバース（係留設備）・利用料金・レンタルボートの有無・電話番号を掲載。周辺の潮汐・海況は当サイトの「釣り場マップ」で確認できます（釣りの可否は各施設へお問い合わせください）。
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="px-3 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs text-center min-w-[80px]">
            <div className="text-[10px] text-slate-500 font-semibold">全登録駅</div>
            <div className="text-lg font-black text-slate-900 dark:text-white">{totalCount}</div>
          </div>
          <div className="px-3 py-2 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 shadow-xs text-center min-w-[80px]">
            <div className="text-[10px] text-sky-700 dark:text-sky-300 font-semibold flex items-center justify-center gap-1">
              <Ship className="w-3 h-3" />
              ボート
            </div>
            <div className="text-lg font-black text-sky-600 dark:text-sky-400">{rentalCount}</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full lg:max-w-md">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="駅名、都道府県、施設名、住所、電話番号..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl text-sm sm:text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
                title="検索クリア"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>

          {/* Quick Filter Toggles */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setFilterRentalBoat(!filterRentalBoat)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRentalBoat
                  ? "bg-sky-600 text-white shadow-xs shadow-sky-600/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>レンタルボートあり ({rentalCount})</span>
            </button>

            <button
              onClick={handleRandomStation}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200/80 dark:border-cyan-800 shadow-xs"
              title="海の駅をランダムに表示"
            >
              <Dices className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>ランダム選択</span>
            </button>

            {(selectedRegion !== "all" || filterRentalBoat || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline underline-offset-4 ml-1"
              >
                条件をリセット
              </button>
            )}
          </div>
        </div>

        {/* Region Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {REGIONS.map((reg) => {
            const count =
              reg.id === "all"
                ? UMI_NO_EKI_LIST.length
                : UMI_NO_EKI_LIST.filter((u) => u.region === reg.id).length;
            const isSelected = selectedRegion === reg.id;
            return (
              <button
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-cyan-600 text-white shadow-xs shadow-cyan-600/20"
                    : "bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{reg.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-200/80 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid: Map + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Map Area */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              該当件数: <strong className="text-slate-800 dark:text-slate-200 font-bold">{filteredStations.length}</strong> 件
            </span>
            <span>ピンをクリックして詳細を表示</span>
          </div>

          <UmiNoEkiMap
            stations={filteredStations}
            selectedStation={activeStation}
            onSelectStation={(st) => setActiveStation(st)}
          />
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-5">
          {activeStation ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-5 sticky top-24">
              {/* Header Badges & Title */}
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800">
                      {activeStation.prefecture} / {activeStation.regionName}
                    </span>
                    {activeStation.hasRentalBoat && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800 flex items-center gap-1">
                        <Ship className="w-3.5 h-3.5" />
                        レンタルボート
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleRandomStation}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="別の海の駅をランダムに表示"
                  >
                    <Dices className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>ランダム変更</span>
                  </button>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                  {activeStation.name}
                </h2>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  施設名: {activeStation.officialName}
                </div>
              </div>

              {/* Description */}
              {activeStation.description && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                  {activeStation.description}
                </p>
              )}

              {/* LINK TO SPOT PAGE (TIDE / MARINE WEATHER) */}
              {activeStation.spotId && (
                <div className="bg-linear-to-br from-cyan-500 to-sky-600 rounded-2xl p-4 text-white shadow-md shadow-cyan-500/20">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold opacity-90 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" />
                        <span>釣り場マップ連携スポット</span>
                      </div>
                      <div className="font-bold text-sm sm:text-base mt-0.5">
                        周辺の潮汐グラフ・海況を確認
                      </div>
                      <p className="text-xs text-white/80 mt-1">
                        この海の駅周辺の潮汐・気象予報が閲覧できます。施設内や周辺での釣りの可否は、必ず事前に施設へご確認ください。
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/spots/${activeStation.spotId}`}
                    className="mt-3.5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-cyan-800 font-extrabold text-xs sm:text-sm shadow-xs hover:bg-cyan-50 transition-colors"
                  >
                    <span>潮汐・海況情報を見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Key Specs Table */}
              <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">所在地:</span>
                    <div className="mt-0.5">{activeStation.address}</div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStation.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>Googleマップで開く</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {activeStation.tel && (
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">電話番号:</span>
                      <div className="mt-0.5">
                        {firstTel ? (
                          <a href={`tel:${firstTel}`} className="hover:underline text-cyan-700 dark:text-cyan-300 font-semibold">
                            {activeStation.tel}
                          </a>
                        ) : (
                          activeStation.tel
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">営業時間:</span>
                    <div className="mt-0.5">{activeStation.businessHours || "-"}</div>
                    {activeStation.closedDays && (
                      <div className="text-slate-500 mt-0.5 text-[11px]">定休日: {activeStation.closedDays}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">座標 (緯度・経度):</span>
                    <div className="mt-0.5 font-mono text-[11px]">
                      {activeStation.lat}, {activeStation.lng}
                    </div>
                    {activeStation.seaAccess && (
                      <div className="text-slate-500 mt-0.5 text-[10px]">海からのアクセス: {activeStation.seaAccess}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Ship className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">ビジターバース数:</span>
                    <div className="mt-0.5">{activeStation.visitorBerth || "事前問合せ"}</div>
                  </div>
                </div>

                {activeStation.visitorRestriction && (
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">利用制限・要件:</span>
                      <div className="mt-0.5 text-slate-700 dark:text-slate-300">{activeStation.visitorRestriction}</div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-2.5">
                  <DollarSign className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">ビジター利用料金:</span>
                    <div className="mt-0.5 text-slate-700 dark:text-slate-300 leading-relaxed">{activeStation.visitorFee || "各施設にお問い合わせください"}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Ship className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">レンタルボート:</span>
                    <div className="mt-0.5">{activeStation.rentalBoatText || (activeStation.hasRentalBoat ? "有り" : "無し")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Fish className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold text-slate-800 dark:text-slate-200">釣行可否:</span>
                    <div className="mt-0.5">各施設へお問い合わせください（マリーナ・港湾施設内は釣りが禁止されている場合があります）</div>
                  </div>
                </div>
              </div>

              {/* External Website Button */}
              {activeStation.websiteUrl && (
                <a
                  href={activeStation.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span>海の駅 公式サイト・施設ページへ</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center text-slate-400">
              海の駅を選択してください
            </div>
          )}
        </div>
      </div>

      {/* Filtered Stations Card Grid */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Anchor className="w-5 h-5 text-cyan-600" />
            <span>登録「海の駅」一覧 ({filteredStations.length}駅)</span>
          </h3>
          <span className="text-xs text-slate-500">カードをクリックして地図で確認</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStations.map((station) => {
            const isSelected = activeStation?.id === station.id;
            return (
              <div
                key={station.id}
                onClick={() => {
                  setActiveStation(station);
                  window.scrollTo({ top: 200, behavior: "smooth" });
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-cyan-50/70 dark:bg-cyan-950/30 border-cyan-500 shadow-md ring-2 ring-cyan-500/20"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {station.prefecture}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {station.hasRentalBoat && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                          🛥️ ボート
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                    {station.name}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {station.officialName}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1 line-clamp-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{station.address}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="text-slate-500 font-mono text-[11px]">
                    バース: {station.visitorBerth ? station.visitorBerth.slice(0, 10) : "要確認"}
                  </div>

                  <div className="flex items-center gap-2">
                    {station.spotId && (
                      <Link
                        href={`/spots/${station.spotId}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5"
                      >
                        <span>潮汐・海況</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    )}
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-0.5">
                      <span>詳細</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
