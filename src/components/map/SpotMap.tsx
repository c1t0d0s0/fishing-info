"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FishingSpot, SpotCategory } from "@/types/spot";
import { MapPin, Filter, Check, ExternalLink, Info } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface SpotMapProps {
  spots: FishingSpot[];
  selectedSpot?: FishingSpot;
  onSelectSpot: (spot: FishingSpot) => void;
}

export default function SpotMap({
  spots,
  selectedSpot,
  onSelectSpot,
}: SpotMapProps) {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState<SpotCategory | "all">("all");
  const [filterParking, setFilterParking] = useState(false);
  const [filterToilet, setFilterToilet] = useState(false);
  const [filterFence, setFilterFence] = useState(false);
  const [filterFamily, setFilterFamily] = useState(false);

  const [mapInstance, setMapInstance] = useState<any>(null);
  const [L, setL] = useState<any>(null);

  // Filter spots
  const filteredSpots = spots.filter((spot) => {
    if (categoryFilter !== "all" && spot.category !== categoryFilter) return false;
    if (filterParking && !spot.facilities.hasParking) return false;
    if (filterToilet && !spot.facilities.hasToilet) return false;
    if (filterFence && !spot.facilities.hasSafetyFence) return false;
    if (filterFamily && !spot.facilities.isFamilyFriendly) return false;
    return true;
  });

  // Dynamic import Leaflet on client
  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet.default);
    });
  }, []);

  // Initialize Map
  useEffect(() => {
    if (!L || mapInstance) return;

    const centerLat = selectedSpot ? selectedSpot.lat : 35.4312;
    const centerLng = selectedSpot ? selectedSpot.lng : 139.6917;

    const map = L.map("fishing-spot-map", {
      center: [centerLat, centerLng],
      zoom: 10,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    setMapInstance(map);

    return () => {
      map.remove();
    };
  }, [L]);

  // Update Markers
  useEffect(() => {
    if (!L || !mapInstance) return;

    // Clear existing marker layers
    mapInstance.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        mapInstance.removeLayer(layer);
      }
    });

    // Custom Icon Generator
    const createCustomIcon = (category: SpotCategory, isSelected: boolean) => {
      let bgColor = "#0284c7"; // default ocean
      if (category === "park") bgColor = "#059669"; // emerald
      if (category === "surf") bgColor = "#d97706"; // amber
      if (category === "rock") bgColor = "#7c3aed"; // violet

      const size = isSelected ? 36 : 28;
      const border = isSelected ? "3px solid #ec4899" : "2px solid #ffffff";

      return L.divIcon({
        className: "custom-map-pin",
        html: `<div style="
          background-color: ${bgColor};
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          border: ${border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
          transform: translate(-50%, -50%);
        ">
          🎣
        </div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });
    };

    // Add markers
    filteredSpots.forEach((spot) => {
      const isSelected = selectedSpot?.id === spot.id;
      const isUmigo =
        spot.facilities.feeText?.includes("UMIGO") ||
        spot.description.includes("UMIGO") ||
        spot.localRules.some((r) => r.includes("UMIGO"));

      const marker = L.marker([spot.lat, spot.lng], {
        icon: createCustomIcon(spot.category, isSelected),
      }).addTo(mapInstance);

      // Popup html
      const popupContent = document.createElement("div");
      popupContent.className = "p-1 space-y-1.5 font-sans text-xs min-w-[200px]";
      popupContent.innerHTML = `
        <div style="font-weight: bold; font-size: 13px; color: #0f172a; margin-bottom: 2px;">
          ${spot.name}
        </div>
        <div style="font-size: 11px; color: #64748b;">
          ${spot.prefecture} / ${spot.category === "park" ? "海釣り施設" : spot.category === "port" ? "漁港・防波堤" : spot.category === "surf" ? "サーフ" : "磯場・釣り場"}
        </div>
        ${isUmigo ? '<div style="margin-top: 4px; display: inline-block; background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px;">🎟️ UMIGO（海Go）事前予約</div>' : ""}
        <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px;">
          ${spot.facilities.hasToilet ? '<span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px;">🚻 トイレ</span>' : ""}
          ${spot.facilities.hasParking ? `<span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px;">🅿️ ${spot.parkingDetails ? (spot.parkingDetails.fee.includes("円") || !spot.parkingDetails.fee.includes("無料") ? "有料P" : "無料P") : "駐車場"}</span>` : ""}
          ${spot.facilities.hasSafetyFence ? '<span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 10px;">🛡️ 柵あり</span>' : ""}
        </div>
        <div style="margin-top: 6px; font-size: 11px; color: #334155;">
          <strong>主な対象魚:</strong> ${spot.targetFish.slice(0, 4).join(", ")}
        </div>
        <a id="btn-detail-${spot.id}" href="/spots/${spot.id}" style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 8px;
          width: 100%;
          box-sizing: border-box;
          background: #0284c7;
          color: white;
          padding: 7px 10px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 12px;
          text-decoration: none;
          cursor: pointer;
        ">
          <span>この釣り場の詳細</span>
          <span style="font-size: 13px;">→</span>
        </a>
      `;

      marker.bindPopup(popupContent);

      marker.on("popupopen", () => {
        onSelectSpot(spot);
        const btn = document.getElementById(`btn-detail-${spot.id}`);
        if (btn) {
          btn.onclick = (e) => {
            e.preventDefault();
            router.push(`/spots/${spot.id}`);
          };
        }
      });
    });

    // Fit bounds if filtered spots changed
    if (filteredSpots.length > 0) {
      if (filteredSpots.length === 1) {
        mapInstance.flyTo([filteredSpots[0].lat, filteredSpots[0].lng], 12, { duration: 0.8 });
      } else {
        const bounds = L.latLngBounds(filteredSpots.map((s) => [s.lat, s.lng]));
        mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
      }
    }
  }, [filteredSpots, mapInstance, L, router]);

  // Pan to selected spot when selectedSpot changes
  useEffect(() => {
    if (mapInstance && selectedSpot) {
      mapInstance.flyTo([selectedSpot.lat, selectedSpot.lng], 12, {
        duration: 1.2,
      });
    }
  }, [selectedSpot, mapInstance]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
      {/* Map Header & Filter controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <MapPin className="w-5 h-5 text-ocean-500" />
            全国釣り場インタラクティブマップ
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {filteredSpots.length} 箇所の釣り場を表示中
          </span>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <button
            onClick={() => setCategoryFilter("all")}
            className={`px-2.5 py-1 rounded-xl font-semibold transition-colors ${
              categoryFilter === "all"
                ? "bg-ocean-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => setCategoryFilter("park")}
            className={`px-2.5 py-1 rounded-xl font-semibold transition-colors ${
              categoryFilter === "park"
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            海釣り施設・公園
          </button>
          <button
            onClick={() => setCategoryFilter("port")}
            className={`px-2.5 py-1 rounded-xl font-semibold transition-colors ${
              categoryFilter === "port"
                ? "bg-sky-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            漁港・防波堤
          </button>
          <button
            onClick={() => setCategoryFilter("surf")}
            className={`px-2.5 py-1 rounded-xl font-semibold transition-colors ${
              categoryFilter === "surf"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            サーフ
          </button>
          <button
            onClick={() => setCategoryFilter("rock")}
            className={`px-2.5 py-1 rounded-xl font-semibold transition-colors ${
              categoryFilter === "rock"
                ? "bg-purple-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            地磯
          </button>
        </div>
      </div>

      {/* Facility Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 text-xs">
        <span className="text-slate-400 font-medium text-[11px] flex items-center gap-1">
          <Filter className="w-3 h-3" /> 条件:
        </span>

        <button
          onClick={() => setFilterParking(!filterParking)}
          className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-colors ${
            filterParking
              ? "bg-ocean-50 dark:bg-ocean-950/60 border-ocean-400 text-ocean-700 dark:text-ocean-300 font-bold"
              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
          }`}
        >
          🅿️ 駐車場あり
        </button>

        <button
          onClick={() => setFilterToilet(!filterToilet)}
          className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-colors ${
            filterToilet
              ? "bg-ocean-50 dark:bg-ocean-950/60 border-ocean-400 text-ocean-700 dark:text-ocean-300 font-bold"
              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
          }`}
        >
          🚻 トイレ完備
        </button>

        <button
          onClick={() => setFilterFence(!filterFence)}
          className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-colors ${
            filterFence
              ? "bg-ocean-50 dark:bg-ocean-950/60 border-ocean-400 text-ocean-700 dark:text-ocean-300 font-bold"
              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
          }`}
        >
          🛡️ 安全柵あり
        </button>

        <button
          onClick={() => setFilterFamily(!filterFamily)}
          className={`px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-colors ${
            filterFamily
              ? "bg-ocean-50 dark:bg-ocean-950/60 border-ocean-400 text-ocean-700 dark:text-ocean-300 font-bold"
              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
          }`}
        >
          👨‍👩‍👧 ファミリー向け
        </button>
      </div>

      {/* Map Container */}
      <div
        id="fishing-spot-map"
        className="w-full h-[420px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner z-10"
      />
    </div>
  );
}
