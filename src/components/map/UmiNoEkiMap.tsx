"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { UmiNoEki } from "@/types/uminoeki";
import { Anchor, Fish, Ship, ExternalLink, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface UmiNoEkiMapProps {
  stations: UmiNoEki[];
  selectedStation?: UmiNoEki;
  onSelectStation: (station: UmiNoEki) => void;
}

// Custom Marker Generator
function createCustomIcon(L: any, station: UmiNoEki, isSelected: boolean) {
  // If fishing is allowed, use emerald/cyan, otherwise ocean/sky
  const bgColor = station.hasFishing ? "#059669" : "#0284c7";
  const size = isSelected ? 36 : 28;
  const border = isSelected ? "3px solid #ec4899" : "2px solid #ffffff";
  const iconEmoji = station.hasFishing ? "🎣" : "⚓";

  return L.divIcon({
    className: "custom-uminoeki-pin",
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
      font-size: ${isSelected ? "16px" : "13px"};
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
    ">
      ${iconEmoji}
    </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4],
  });
}

export default function UmiNoEkiMap({
  stations,
  selectedStation,
  onSelectStation,
}: UmiNoEkiMapProps) {
  const router = useRouter();
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [L, setL] = useState<any>(null);

  const markersRef = useRef<Map<string, any>>(new Map());
  const selectedStationIdRef = useRef<string | undefined>(selectedStation?.id);
  const prevStationsKeyRef = useRef<string>("");

  // Dynamic import Leaflet on client
  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet.default);
    });
  }, []);

  // Initialize Map
  useEffect(() => {
    if (!L || mapInstance) return;

    const centerLat = selectedStation ? selectedStation.lat : 36.5;
    const centerLng = selectedStation ? selectedStation.lng : 136.5;
    const zoom = selectedStation ? 11 : 6;

    const map = L.map("uminoeki-map", {
      center: [centerLat, centerLng],
      zoom: zoom,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
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

    const currentKey = stations.map((s) => s.id).join(",");
    const listChanged = currentKey !== prevStationsKeyRef.current;

    if (listChanged) {
      // Clear existing markers
      markersRef.current.forEach((marker: any) => {
        mapInstance.removeLayer(marker);
      });
      markersRef.current.clear();
      prevStationsKeyRef.current = currentKey;

      // Add new markers
      stations.forEach((station) => {
        if (!station.lat || !station.lng) return;

        const isSelected = selectedStation?.id === station.id;
        const icon = createCustomIcon(L, station, isSelected);

        const marker = L.marker([station.lat, station.lng], { icon });

        // Build popup content
        const fishingBadge = station.hasFishing
          ? `<span style="background-color: #d1fae5; color: #065f46; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 9999px;">🎣 釣り可能</span>`
          : `<span style="background-color: #f1f5f9; color: #64748b; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 9999px;">釣り制限あり</span>`;

        const rentalBadge = station.hasRentalBoat
          ? `<span style="background-color: #e0f2fe; color: #0369a1; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 9999px;">🛥️ レンタルボート</span>`
          : "";

        const berthInfo = station.visitorBerth
          ? `<div style="font-size: 11px; color: #64748b; margin-top: 4px;">ビジターバース: ${station.visitorBerth}</div>`
          : "";

        const spotLinkHtml =
          station.hasFishing && station.spotId
            ? `<a href="/spots/${station.spotId}" style="display: inline-block; margin-top: 6px; padding: 4px 10px; background-color: #0284c7; color: white; border-radius: 6px; font-size: 11px; text-decoration: none; font-weight: bold;">🎣 釣り場情報を見る →</a>`
            : "";

        const popupContent = `
          <div style="font-family: sans-serif; min-width: 200px; max-width: 260px;">
            <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 4px;">
              ${fishingBadge}
              ${rentalBadge}
            </div>
            <div style="font-weight: bold; font-size: 14px; color: #0f172a; line-height: 1.3;">${station.name}</div>
            <div style="font-size: 11px; color: #64748b; margin-top: 2px;">${station.officialName}</div>
            <div style="font-size: 11px; color: #334155; margin-top: 4px;">📍 ${station.address}</div>
            ${berthInfo}
            <div style="font-size: 11px; color: #64748b; margin-top: 2px;">🕒 ${station.businessHours || "-"}</div>
            ${spotLinkHtml}
          </div>
        `;

        marker.bindPopup(popupContent, {
          autoPan: false,
          closeButton: true,
        });

        marker.on("click", () => {
          onSelectStation(station);
        });

        marker.addTo(mapInstance);
        markersRef.current.set(station.id, marker);
      });

      if (selectedStation && markersRef.current.has(selectedStation.id)) {
        markersRef.current.get(selectedStation.id).openPopup();
      }
    } else {
      // Update marker icons on selection change
      if (selectedStationIdRef.current !== selectedStation?.id) {
        markersRef.current.forEach((marker: any, id: string) => {
          const st = stations.find((s) => s.id === id);
          if (st) {
            const isSelected = selectedStation?.id === id;
            marker.setIcon(createCustomIcon(L, st, isSelected));
            if (isSelected) {
              marker.setZIndexOffset(1000);
            } else {
              marker.setZIndexOffset(0);
            }
          }
        });
      }
    }

    selectedStationIdRef.current = selectedStation?.id;
  }, [stations, selectedStation, mapInstance, L]);

  // Center on selected station
  useEffect(() => {
    if (!mapInstance || !selectedStation || !selectedStation.lat || !selectedStation.lng) return;

    mapInstance.invalidateSize();
    mapInstance.setView([selectedStation.lat, selectedStation.lng], 12, {
      animate: false,
    });

    const marker = markersRef.current.get(selectedStation.id);
    if (marker) {
      marker.openPopup();
    } else {
      const timer = setTimeout(() => {
        const m = markersRef.current.get(selectedStation.id);
        if (m) {
          m.openPopup();
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedStation, mapInstance]);

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm z-0">
      <div id="uminoeki-map" className="w-full h-full" />

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md text-xs space-y-1.5 pointer-events-none">
        <div className="font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
          <Anchor className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>ピンの種別</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-600" />
          <span className="text-slate-600 dark:text-slate-300">🎣 釣り可能（マリーナ・護岸等）</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky-600" />
          <span className="text-slate-600 dark:text-slate-300">⚓ 海の駅（一般・マリン利用）</span>
        </div>
      </div>
    </div>
  );
}
