"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ZoomIn, ZoomOut, X, RotateCcw } from "lucide-react";

interface RigDiagramProps {
  rigId: string;
  name: string;
}

const ModalContext = React.createContext<boolean>(false);

export default function RigDiagram({ rigId, name }: RigDiagramProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [baseWidth, setBaseWidth] = useState(920);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Measure container when modal opens or on resize
  useEffect(() => {
    if (!isOpen) return;

    const measure = () => {
      if (containerRef.current) {
        const cw = containerRef.current.clientWidth;
        const pad = window.innerWidth < 640 ? 16 : 48;
        const available = cw - pad;
        // Cap baseWidth to 950px on desktop so 100% fits nicely, but allow full container on small
        const b = Math.min(available, 950);
        setBaseWidth(Math.max(320, b));
      }
    };

    // Initial measure after DOM paint
    const timer = setTimeout(measure, 50);
    window.addEventListener("resize", measure);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoomLevel((z) => Math.min(2.5, Number((z + 0.1).toFixed(2))));
      } else {
        setZoomLevel((z) => Math.max(0.8, Number((z - 0.1).toFixed(2))));
      }
    }
  };

  const renderContent = () => {
    switch (rigId) {
      case "sabiki":
        return <SabikiDiagram />;
      case "ajing":
        return <AjingDiagram />;
      case "shore-jigging":
        return <ShoreJiggingDiagram />;
      case "eging":
        return <EgingDiagram />;
      case "fukase":
        return <FukaseDiagram />;
      case "choinage":
        return <ChoinageDiagram />;
      case "sayori-rig":
        return <SayoriDiagram />;
      case "tako-rig":
        return <TakoDiagram />;
      case "hechi-rig":
        return <HechiDiagram />;
      case "tenagaebi-rig":
        return <TenagaebiDiagram />;
      case "kawahagi-rig":
        return <KawahagiDiagram />;
      case "ishidai-rig":
        return <IshidaiDiagram />;
      case "surf-flat-rig":
        return <SurfFlatDiagram />;
      case "kue-rig":
        return <KueDiagram />;
      default:
        return <DefaultRigDiagram name={name} />;
    }
  };

  return (
    <>
      {/* Clickable Card Diagram (Thumbnail View) */}
      <div
        onClick={() => {
          setZoomLevel(1);
          setIsOpen(true);
        }}
        className="relative group cursor-zoom-in rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-sky-500/60 transition-transform duration-200 hover:scale-[1.01]"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setZoomLevel(1);
            setIsOpen(true);
          }
        }}
        title="クリックして仕掛け図を拡大表示"
      >
        <ModalContext.Provider value={false}>
          {renderContent()}
        </ModalContext.Provider>

        {/* Hover / Corner Badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 hover:bg-sky-600 text-sky-200 hover:text-white border border-sky-500/40 backdrop-blur-md shadow-lg transition-all text-[11px] font-semibold opacity-85 group-hover:opacity-100 group-hover:scale-105 pointer-events-none">
          <ZoomIn className="w-3.5 h-3.5 text-sky-400 group-hover:text-white" />
          <span>クリックで拡大</span>
        </div>
      </div>

      {/* Lightbox Modal (Enlarged View) */}
      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-slate-900 border border-sky-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Toolbar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-950/90 border-b border-sky-900/60 text-white shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="px-2 py-0.5 rounded bg-sky-950/80 border border-sky-600/70 text-[10px] sm:text-xs font-mono font-bold text-sky-300 shrink-0">
                  CAD BLUEPRINT
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-100 truncate">
                  {name} 仕掛け構成図面
                </h3>
              </div>

              {/* Controls Toolbar */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Stepper Buttons */}
                <div className="flex items-center bg-slate-800/90 border border-slate-700 rounded-lg p-0.5">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(0.8, Number((z - 0.2).toFixed(1))))}
                    disabled={zoomLevel <= 0.8}
                    className="p-1 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white rounded transition-colors"
                    title="縮小 (80%まで)"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono px-1.5 sm:px-2 text-slate-200 min-w-[44px] text-center font-bold">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(2.5, Number((z + 0.2).toFixed(1))))}
                    disabled={zoomLevel >= 2.5}
                    className="p-1 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white rounded transition-colors"
                    title="拡大 (250%まで)"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Presets */}
                <div className="hidden sm:flex items-center gap-1">
                  {[1.0, 1.5, 2.0].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setZoomLevel(preset)}
                      className={`px-2 py-1 rounded text-[11px] font-mono transition-all border ${
                        Math.abs(zoomLevel - preset) < 0.05
                          ? "bg-sky-600 border-sky-400 text-white font-bold shadow"
                          : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                      }`}
                      title={`${Math.round(preset * 100)}% に設定`}
                    >
                      {Math.round(preset * 100)}%
                    </button>
                  ))}
                </div>

                {/* Reset button if not 1.0 */}
                {zoomLevel !== 1 && (
                  <button
                    type="button"
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-700 bg-slate-800/80"
                    title="倍率を100%にリセット"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-200 hover:text-white border border-slate-700 hover:border-rose-500 transition-all text-xs font-bold shadow"
                  title="閉じる (Esc)"
                >
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">閉じる</span>
                </button>
              </div>
            </div>

            {/* Modal Canvas Body (Scrollable with zoom) */}
            <div
              ref={containerRef}
              className="flex-1 overflow-auto p-3 sm:p-6 md:p-8 flex bg-[#070e1a]"
              onWheel={handleWheel}
            >
              <div
                style={{
                  width: `${Math.round(baseWidth * zoomLevel)}px`,
                  minWidth: `${Math.round(baseWidth * zoomLevel)}px`,
                  maxWidth: "none",
                  transition: "width 0.2s cubic-bezier(0.2, 0, 0, 1), min-width 0.2s cubic-bezier(0.2, 0, 0, 1)",
                }}
                className="m-auto shrink-0 select-none shadow-2xl rounded-xl cursor-default"
                onDoubleClick={() => setZoomLevel((z) => (z > 1.2 ? 1 : 1.5))}
                title="ダブルクリックで拡大切替"
              >
                <ModalContext.Provider value={true}>
                  {renderContent()}
                </ModalContext.Provider>
              </div>
            </div>

            {/* Modal Footer Toolbar */}
            <div className="px-3 sm:px-4 py-2 bg-slate-950/95 border-t border-sky-950/80 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-slate-400 gap-1 shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                高解像度ベクター図面（文字・ハリス・寸法線を鮮明に拡大表示中）
              </span>
              <span className="text-slate-500">
                ※ ダブルクリックで拡大切替 / 枠外クリックまたはEscキーで閉じます
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Common CAD Blueprint Canvas & Engineering Style Components
// ─────────────────────────────────────────────────────────────

interface BlueprintProps {
  figNo: string;
  title: string;
  subtitle: string;
  targetSpecies: string;
  standardDepth: string;
  mainLineSpec: string;
  styleSpec: string;
  children: React.ReactNode;
}

function BlueprintCanvas({
  figNo,
  title,
  subtitle,
  targetSpecies,
  standardDepth,
  mainLineSpec,
  styleSpec,
  children,
}: BlueprintProps) {
  const inModal = React.useContext(ModalContext);

  return (
    <svg
      viewBox="0 0 560 360"
      className={`w-full h-auto select-none rounded-xl border border-sky-800/80 shadow-2xl bg-[#09111e] overflow-hidden font-mono block ${
        inModal ? "" : "max-h-[360px]"
      }`}
    >
      <defs>
        {/* CAD Fine Grid (20x20) */}
        <pattern id="cadGridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e3a5f" strokeWidth="0.4" strokeOpacity="0.45" />
        </pattern>
        {/* CAD Major Grid (100x100) */}
        <pattern id="cadGridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#cadGridSmall)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0284c7" strokeWidth="0.8" strokeOpacity="0.22" />
        </pattern>
        {/* Arrow Markers for CAD Dimension Lines */}
        <marker id="arrowStart" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 9 2 L 1 5 L 9 8 Z" fill="#38bdf8" />
        </marker>
        <marker id="arrowEnd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 1 2 L 9 5 L 1 8 Z" fill="#38bdf8" />
        </marker>
        {/* Dot Marker for Leader Lines */}
        <marker id="dotMarker" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4">
          <circle cx="3" cy="3" r="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.6" />
        </marker>
      </defs>

      {/* Blueprint Grid Background */}
      <rect width="560" height="360" fill="#09111e" />
      <rect width="560" height="360" fill="url(#cadGridLarge)" />

      {/* Technical Double Frame */}
      <rect x="8" y="8" width="544" height="344" rx="3" fill="none" stroke="#0ea5e9" strokeWidth="1.2" strokeOpacity="0.8" />
      <rect x="12" y="12" width="536" height="336" fill="none" stroke="#0284c7" strokeWidth="0.6" strokeDasharray="4 2" strokeOpacity="0.5" />

      {/* Corner Technical Registration Crosshairs */}
      <path d="M 15 24 L 15 15 L 24 15" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
      <circle cx="19" cy="19" r="1.5" fill="#38bdf8" />
      <path d="M 545 24 L 545 15 L 536 15" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
      <circle cx="541" cy="19" r="1.5" fill="#38bdf8" />
      <path d="M 15 336 L 15 345 L 24 345" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
      <circle cx="19" cy="341" r="1.5" fill="#38bdf8" />
      <path d="M 545 336 L 545 345 L 536 345" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
      <circle cx="541" cy="341" r="1.5" fill="#38bdf8" />

      {/* Top Header / Title Block */}
      <g transform="translate(18, 16)">
        <rect x="0" y="0" width="58" height="18" rx="2" fill="#0369a1" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="1" />
        <text x="29" y="12.5" textAnchor="middle" className="text-[9px] font-bold fill-sky-200 tracking-wider">
          {figNo}
        </text>
        <text x="66" y="13.5" className="text-[12px] font-bold fill-sky-100 tracking-wide">
          {title}
        </text>
        <text x="66" y="24" className="text-[8px] fill-sky-400 font-mono tracking-wider opacity-85">
          {subtitle}
        </text>
      </g>

      {/* Reference Sea Surface Marker */}
      <g opacity="0.45">
        <line x1="20" y1="46" x2="540" y2="46" stroke="#0ea5e9" strokeWidth="0.6" strokeDasharray="5 3" />
        <text x="24" y="43" className="text-[7.5px] fill-sky-400 font-mono tracking-widest">▲ SEA SURFACE (水面基準線)</text>
      </g>

      {/* Reference Seabed Marker */}
      <g opacity="0.45">
        <line x1="20" y1="310" x2="540" y2="310" stroke="#0284c7" strokeWidth="0.8" />
        <path d="M 20 310 L 28 316 M 50 310 L 58 316 M 80 310 L 88 316 M 110 310 L 118 316 M 140 310 L 148 316 M 170 310 L 178 316 M 200 310 L 208 316 M 230 310 L 238 316 M 260 310 L 268 316 M 290 310 L 298 316 M 320 310 L 328 316 M 350 310 L 358 316 M 380 310 L 388 316 M 410 310 L 418 316 M 440 310 L 448 316 M 470 310 L 478 316 M 500 310 L 508 316 M 530 310 L 538 316" stroke="#0284c7" strokeWidth="0.7" />
        <text x="24" y="307" className="text-[7.5px] fill-sky-400 font-mono tracking-widest">▼ SEABED / REEF (海底ライン)</text>
      </g>

      {/* Technical Rig Artwork */}
      {children}

      {/* Bottom Specification Footer */}
      <g transform="translate(16, 318)">
        <rect x="0" y="0" width="528" height="28" rx="2" fill="#031527" fillOpacity="0.9" stroke="#0284c7" strokeWidth="0.8" />
        <line x1="126" y1="0" x2="126" y2="28" stroke="#1e3a5f" strokeWidth="0.8" />
        <line x1="250" y1="0" x2="250" y2="28" stroke="#1e3a5f" strokeWidth="0.8" />
        <line x1="390" y1="0" x2="390" y2="28" stroke="#1e3a5f" strokeWidth="0.8" />

        <text x="8" y="10.5" className="text-[7px] fill-sky-400 font-bold tracking-wider">TARGET (対象魚)</text>
        <text x="8" y="21.5" className="text-[8.5px] fill-slate-200 font-semibold">{targetSpecies}</text>

        <text x="134" y="10.5" className="text-[7px] fill-sky-400 font-bold tracking-wider">DEPTH (基準タナ)</text>
        <text x="134" y="21.5" className="text-[8.5px] fill-slate-200 font-semibold">{standardDepth}</text>

        <text x="258" y="10.5" className="text-[7px] fill-sky-400 font-bold tracking-wider">MAIN LINE (道糸規格)</text>
        <text x="258" y="21.5" className="text-[8.5px] fill-slate-200 font-semibold">{mainLineSpec}</text>

        <text x="398" y="10.5" className="text-[7px] fill-sky-400 font-bold tracking-wider">TACTIQUE (設計仕様)</text>
        <text x="398" y="21.5" className="text-[8.5px] fill-slate-200 font-semibold">{styleSpec}</text>
      </g>
    </svg>
  );
}

interface SpecBoxProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  num: number;
  title: string;
  spec: string;
  note?: string;
  tag?: string;
}

function SpecBox({ x, y, w = 154, h = 42, num, title, spec, note, tag }: SpecBoxProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="0"
        y="0"
        width={w}
        height={h}
        rx="3"
        fill="#07172b"
        fillOpacity="0.94"
        stroke="#0284c7"
        strokeWidth="0.8"
      />
      <line x1="0" y1="0" x2={w} y2="0" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.8" />
      <circle cx="12" cy="13" r="7" fill="#0369a1" stroke="#38bdf8" strokeWidth="0.8" />
      <text x="12" y="16" textAnchor="middle" className="text-[8.5px] font-bold fill-white">
        {num}
      </text>
      <text x="24" y="14" className="text-[9px] font-bold fill-sky-200">
        {title}
      </text>
      {tag && (
        <text x={w - 6} y="13" textAnchor="end" className="text-[7px] font-mono fill-cyan-400 opacity-75">
          [{tag}]
        </text>
      )}
      <text x="7" y="26.5" className="text-[8px] font-semibold fill-slate-100">
        {spec}
      </text>
      {note && (
        <text x="7" y="36.5" className="text-[7px] fill-sky-300/80 truncate">
          {note}
        </text>
      )}
    </g>
  );
}

interface DimensionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  offset?: number;
  orientation?: "vertical" | "horizontal";
}

function Dimension({
  x1,
  y1,
  x2,
  y2,
  label,
  offset = 0,
  orientation = "vertical",
}: DimensionProps) {
  if (orientation === "vertical") {
    const lx = x1 + offset;
    return (
      <g className="select-none opacity-85">
        <line x1={x1} y1={y1} x2={lx + (offset >= 0 ? 5 : -5)} y2={y1} stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1={x2} y1={y2} x2={lx + (offset >= 0 ? 5 : -5)} y2={y2} stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1={lx} y1={y1} x2={lx} y2={y2} stroke="#38bdf8" strokeWidth="0.8" markerStart="url(#arrowStart)" markerEnd="url(#arrowEnd)" />
        <rect x={lx - 25} y={(y1 + y2) / 2 - 6.5} width="50" height="13" rx="2" fill="#07172b" stroke="#0284c7" strokeWidth="0.6" />
        <text x={lx} y={(y1 + y2) / 2 + 3} textAnchor="middle" className="text-[7px] font-mono font-bold fill-cyan-200">
          {label}
        </text>
      </g>
    );
  } else {
    const ly = y1 + offset;
    return (
      <g className="select-none opacity-85">
        <line x1={x1} y1={y1} x2={x1} y2={ly + (offset >= 0 ? 5 : -5)} stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1={x2} y1={y2} x2={x2} y2={ly + (offset >= 0 ? 5 : -5)} stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1={x1} y1={ly} x2={x2} y2={ly} stroke="#38bdf8" strokeWidth="0.8" markerStart="url(#arrowStart)" markerEnd="url(#arrowEnd)" />
        <rect x={(x1 + x2) / 2 - 27} y={ly - 6.5} width="54" height="13" rx="2" fill="#07172b" stroke="#0284c7" strokeWidth="0.6" />
        <text x={(x1 + x2) / 2} y={ly + 3} textAnchor="middle" className="text-[7px] font-mono font-bold fill-cyan-200">
          {label}
        </text>
      </g>
    );
  }
}

function LeaderLine({ points }: { points: string }) {
  return (
    <polyline
      points={points}
      fill="none"
      stroke="#38bdf8"
      strokeWidth="0.8"
      strokeDasharray="3 2"
      markerEnd="url(#dotMarker)"
      opacity="0.8"
    />
  );
}

// ─────────────────────────────────────────────────────────────
// 1. サビキ釣り仕掛け (FIG-01)
// ─────────────────────────────────────────────────────────────
function SabikiDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-01"
      title="サビキ釣り仕掛け構成図 (下カゴ式)"
      subtitle="DWG REF: #SBK-01 / MULTI-HOOK SABIKI SYSTEM / SCALE: NON-SCALE"
      targetSpecies="アジ・イワシ・サバ・サッパ"
      standardDepth="表層〜底層 (5〜15m)"
      mainLineSpec="ナイロン 2〜3号 / PE 0.8号"
      styleSpec="下カゴ式・多点疑似針展開図"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="道糸 (メインライン)" spec="ナイロン 2〜3号 / PE 0.8号" note="適度なしなやかさで糸絡み防止" />
      <SpecBox x={384} y={60} w={154} h={42} num={2} title="幹糸・ハリス" spec="幹糸 1.5〜2号 / ハリス 0.8〜1.5号" note="フロロカーボン仕様" />
      <SpecBox x={20} y={148} w={154} h={42} num={3} title="擬似針 (5〜6本)" spec="ピンクスキン/ケイムラ 4〜6号" note="アミエビを模倣した多点針" />
      <SpecBox x={20} y={242} w={154} h={42} num={4} title="コマセカゴ＆オモリ" spec="下カゴ式 6〜10号" note="アミエビ煙幕を海底で放出" />

      <LeaderLine points="174,81 210,81 270,72" />
      <LeaderLine points="384,81 330,81 285,95" />
      <LeaderLine points="174,169 220,169 248,172" />
      <LeaderLine points="174,263 230,263 268,272" />

      <path d="M 230 46 L 248 56 L 246 59 L 228 49 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <line x1="247" y1="58" x2="280" y2="75" stroke="#fbbf24" strokeWidth="1.6" />

      <circle cx="280" cy="78" r="3" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
      <rect x="278" y="79" width="4" height="6" rx="1" fill="#475569" stroke="#94a3b8" strokeWidth="0.8" />
      <circle cx="280" cy="86" r="3" fill="none" stroke="#94a3b8" strokeWidth="1.2" />

      <line x1="280" y1="89" x2="280" y2="248" stroke="#38bdf8" strokeWidth="1.5" />

      {/* Branch 1 */}
      <g transform="translate(280, 110)">
        <line x1="0" y1="0" x2="35" y2="10" stroke="#7dd3fc" strokeWidth="1" />
        <path d="M 35 10 Q 42 13, 40 18 Q 36 21, 33 16" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M 34 8 Q 42 9, 44 14 Q 38 15, 34 11" fill="#f43f5e" fillOpacity="0.85" />
        <circle cx="35" cy="10" r="1.5" fill="#38bdf8" />
      </g>
      {/* Branch 2 */}
      <g transform="translate(280, 138)">
        <line x1="0" y1="0" x2="-35" y2="10" stroke="#7dd3fc" strokeWidth="1" />
        <path d="M -35 10 Q -42 13, -40 18 Q -36 21, -33 16" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M -34 8 Q -42 9, -44 14 Q -38 15, -34 11" fill="#06b6d4" fillOpacity="0.85" />
        <circle cx="-35" cy="10" r="1.5" fill="#38bdf8" />
      </g>
      {/* Branch 3 */}
      <g transform="translate(280, 166)">
        <line x1="0" y1="0" x2="35" y2="10" stroke="#7dd3fc" strokeWidth="1" />
        <path d="M 35 10 Q 42 13, 40 18 Q 36 21, 33 16" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M 34 8 Q 42 9, 44 14 Q 38 15, 34 11" fill="#fbbf24" fillOpacity="0.85" />
        <circle cx="35" cy="10" r="1.5" fill="#38bdf8" />
      </g>
      {/* Branch 4 */}
      <g transform="translate(280, 194)">
        <line x1="0" y1="0" x2="-35" y2="10" stroke="#7dd3fc" strokeWidth="1" />
        <path d="M -35 10 Q -42 13, -40 18 Q -36 21, -33 16" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M -34 8 Q -42 9, -44 14 Q -38 15, -34 11" fill="#f43f5e" fillOpacity="0.85" />
        <circle cx="-35" cy="10" r="1.5" fill="#38bdf8" />
      </g>
      {/* Branch 5 */}
      <g transform="translate(280, 222)">
        <line x1="0" y1="0" x2="35" y2="10" stroke="#7dd3fc" strokeWidth="1" />
        <path d="M 35 10 Q 42 13, 40 18 Q 36 21, 33 16" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M 34 8 Q 42 9, 44 14 Q 38 15, 34 11" fill="#06b6d4" fillOpacity="0.85" />
        <circle cx="35" cy="10" r="1.5" fill="#38bdf8" />
      </g>

      <circle cx="280" cy="249" r="2.5" fill="none" stroke="#94a3b8" strokeWidth="1" />
      <path d="M 280 252 L 280 258" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Chum Cage & Sinker */}
      <g transform="translate(280, 258)">
        <rect x="-11" y="0" width="22" height="28" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
        <line x1="-11" y1="7" x2="11" y2="7" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.6" />
        <line x1="-11" y1="14" x2="11" y2="14" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.6" />
        <line x1="-11" y1="21" x2="11" y2="21" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.6" />
        <line x1="-4" y1="0" x2="-4" y2="28" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.6" />
        <line x1="4" y1="0" x2="4" y2="28" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.6" />
        <polygon points="-11,28 11,28 0,44" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
        <text x="0" y="37" textAnchor="middle" className="text-[7px] font-bold fill-white">8号</text>
        <circle cx="-16" cy="10" r="1.2" fill="#fb7185" opacity="0.7" />
        <circle cx="-19" cy="18" r="1" fill="#fb7185" opacity="0.6" />
        <circle cx="16" cy="12" r="1.2" fill="#fb7185" opacity="0.7" />
        <circle cx="19" cy="22" r="1.4" fill="#fb7185" opacity="0.6" />
      </g>

      <Dimension x1={330} y1={89} x2={330} y2={248} label="仕掛け全長 1.5〜1.8m" offset={10} />
      <Dimension x1={330} y1={110} x2={330} y2={138} label="間隔 25cm" offset={42} />
      <Dimension x1={280} y1={110} x2={315} y2={110} label="エダス 3〜5cm" offset={-14} orientation="horizontal" />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. ジグ単アジング仕掛け (FIG-02)
// ─────────────────────────────────────────────────────────────
function AjingDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-02"
      title="ジグ単アジング仕掛け構成図 (ライトゲーム)"
      subtitle="DWG REF: #AJG-02 / ULTRA-LIGHT JIGHEAD RIG / SCALE: NON-SCALE"
      targetSpecies="アジ・メバル・カマス・サバ"
      standardDepth="全層対応 (カウントダウン管理)"
      mainLineSpec="エステル 0.3〜0.4号 (比重1.38)"
      styleSpec="ジグヘッド単体 + ピンテールワーム"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="メインライン" spec="エステルライン 0.3〜0.4号" note="比重1.38 / 極低伸度で微小アタリ伝達" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="結束部 (ノット)" spec="トリプルエイト / 3.5ノット" note="簡単結束・破断強度80%以上保持" />
      <SpecBox x={384} y={60} w={154} h={42} num={3} title="ショックリーダー" spec="フロロカーボン 0.8号 (3lb) 40cm" note="エステルの瞬間破断を防止" />
      <SpecBox x={360} y={242} w={178} h={42} num={4} title="ジグヘッド＆ワーム" spec="0.8〜1.5g + ワーム 1.5〜2.0inch" note="オープンゲイブで上顎即フッキング" />

      <LeaderLine points="174,81 210,81 230,95" />
      <LeaderLine points="265,97 265,115 270,128" />
      <LeaderLine points="384,81 350,81 330,150" />
      <LeaderLine points="360,263 320,263 360,225" />

      <path d="M 50 60 L 68 70 L 66 73 L 48 63 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 71 Q 160 110, 270 128" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="140" y="88" className="text-[7.5px] font-bold fill-amber-300">エステル 0.3号</text>

      <circle cx="270" cy="128" r="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
      <text x="270" y="142" textAnchor="middle" className="text-[7.5px] font-mono fill-cyan-300">FG / 3.5KNOT</text>

      <line x1="270" y1="128" x2="360" y2="200" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="6 1" />

      <g transform="translate(360, 200)">
        <ellipse cx="0" cy="0" rx="3" ry="5" fill="none" stroke="#94a3b8" strokeWidth="1" />
      </g>

      <g transform="translate(366, 202)">
        <circle cx="6" cy="6" r="6" fill="#475569" stroke="#94a3b8" strokeWidth="1.2" />
        <circle cx="6" cy="6" r="2" fill="#0f172a" />
        <path d="M 6 4 L 28 4 Q 38 4, 38 14 Q 38 20, 32 18" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
        <path d="M 12 4 Q 35 1, 60 7 Q 85 10, 105 8 Q 85 12, 60 13 Q 35 15, 12 8 Z" fill="#06b6d4" fillOpacity="0.45" stroke="#38bdf8" strokeWidth="1" />
        <line x1="24" y1="4" x2="24" y2="11" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.8" />
        <line x1="36" y1="4" x2="36" y2="12" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.8" />
        <line x1="48" y1="5" x2="48" y2="12" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.8" />
        <line x1="60" y1="7" x2="60" y2="13" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.8" />
        <text x="6" y="22" className="text-[7.5px] font-bold fill-sky-200">1.0g タングステン</text>
      </g>

      <g transform="translate(200, 210)" opacity="0.75">
        <path d="M 0 0 Q 30 20, 60 30" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#arrowEnd)" />
        <text x="10" y="32" className="text-[7.5px] font-mono fill-cyan-300">TENSION FALL 誘い</text>
      </g>

      <Dimension x1={270} y1={128} x2={360} y2={200} label="リーダー 30〜50cm" offset={-25} />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. ライトショアジギング仕掛け (FIG-03)
// ─────────────────────────────────────────────────────────────
function ShoreJiggingDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-03"
      title="ライトショアジギング仕掛け構成図"
      subtitle="DWG REF: #LSJ-03 / LIGHT SHORE JIGGING ARCHITECTURE / SCALE: NON-SCALE"
      targetSpecies="イナダ・サワラ・カンパチ・タチウオ"
      standardDepth="全層探査 (ボトム着底〜表層)"
      mainLineSpec="PE 1.0〜1.5号 (8本編み 200m+)"
      styleSpec="メタルジグ 30〜60g 遠投ワンピッチ"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="道糸 (PEライン)" spec="PE 1.0〜1.5号 200m以上" note="8本編み・遠投性と耐引張強度" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="摩擦系ノット" spec="FGノット / PRノット" note="ガイド抜け良好・結束強度90%以上" />
      <SpecBox x={20} y={150} w={154} h={42} num={3} title="ショックリーダー" spec="フロロ 4〜6号 (16〜25lb) 1.5m" note="青物の歯ズレ・根ズレをガード" />
      <SpecBox x={360} y={242} w={178} h={42} num={4} title="メタルジグ＆フック" spec="30〜60g (アシスト+リアトレブル)" note="センターバランス・強フラッシング" />

      <LeaderLine points="174,81 210,81 220,105" />
      <LeaderLine points="265,97 265,115 270,125" />
      <LeaderLine points="174,171 210,171 290,150" />
      <LeaderLine points="360,263 320,263 350,225" />

      <path d="M 50 65 L 68 75 L 66 78 L 48 68 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 76 Q 160 105, 270 125" fill="none" stroke="#10b981" strokeWidth="1.8" />
      <text x="140" y="85" className="text-[7.5px] font-bold fill-emerald-400">PE 1.2号 (8本編み)</text>

      <g transform="translate(270, 125)">
        <rect x="-6" y="-3" width="12" height="6" rx="1" fill="#047857" stroke="#34d399" strokeWidth="0.8" />
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="#f8fafc" strokeWidth="0.6" />
        <text x="0" y="14" textAnchor="middle" className="text-[7px] font-mono fill-emerald-300">FG KNOT</text>
      </g>

      <line x1="276" y1="125" x2="360" y2="185" stroke="#38bdf8" strokeWidth="1.6" />

      <g transform="translate(360, 185)">
        <circle cx="0" cy="0" r="3.5" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <circle cx="4" cy="2" r="3.5" fill="none" stroke="#94a3b8" strokeWidth="1" />
      </g>

      <g transform="translate(365, 188) rotate(20)">
        <path d="M 0 0 Q -10 -15, -15 -8 Q -20 2, -10 5" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
        <polygon points="-8,-4 -18,-12 -12,-16" fill="#f43f5e" fillOpacity="0.8" />
        <polygon points="0,0 80,0 86,5 78,10 0,5" fill="#0284c7" fillOpacity="0.75" stroke="#38bdf8" strokeWidth="1.2" />
        <line x1="0" y1="5" x2="86" y2="5" stroke="#f8fafc" strokeWidth="0.8" />
        <line x1="20" y1="0" x2="25" y2="10" stroke="#bae6fd" strokeWidth="0.6" />
        <line x1="40" y1="0" x2="45" y2="10" stroke="#bae6fd" strokeWidth="0.6" />
        <line x1="60" y1="0" x2="65" y2="10" stroke="#bae6fd" strokeWidth="0.6" />
        <circle cx="8" cy="4" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="0.6" />
        <text x="40" y="8" textAnchor="middle" className="text-[6.5px] font-bold fill-sky-100">40g JIG</text>
        <g transform="translate(86, 5)">
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
          <path d="M 3 0 L 10 5 M 3 0 L 10 -5 M 3 0 L 12 0" stroke="#f8fafc" strokeWidth="1.2" />
        </g>
      </g>

      <g transform="translate(190, 215)" opacity="0.8">
        <path d="M 0 25 L 25 5 L 35 15 L 60 -5" fill="none" stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#arrowEnd)" />
        <text x="5" y="38" className="text-[7.5px] font-mono fill-cyan-300">ONE-PITCH JERK 軌跡</text>
      </g>

      <Dimension x1={276} y1={125} x2={360} y2={185} label="リーダー 1.5m (フロロ5号)" offset={-25} />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. エギング仕掛け (FIG-04)
// ─────────────────────────────────────────────────────────────
function EgingDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-04"
      title="エギング仕掛け構成図 (アオリイカ攻略)"
      subtitle="DWG REF: #EGG-04 / SQUID JIG RIG SPECIFICATION / SCALE: NON-SCALE"
      targetSpecies="アオリイカ・コウイカ・ヤリイカ"
      standardDepth="底層〜中層 (カウントフォール)"
      mainLineSpec="PE 0.6〜0.8号 (150m以上)"
      styleSpec="エギ 2.5〜3.5号 左右ダート釣法"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="メインライン" spec="PE 0.6〜0.8号 150m+" note="低伸度・微細なイカパンチ感知" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="結束部" spec="FGノット / ダブルサージェンス" note="結束強度が高くガイド抜けスムーズ" />
      <SpecBox x={20} y={150} w={154} h={42} num={3} title="ショックリーダー" spec="フロロ 1.75〜2.5号 1.5m" note="海底のシモリ根ズレに強い耐摩耗性" />
      <SpecBox x={360} y={242} w={178} h={42} num={4} title="エギ (餌木本体)" spec="3.0〜3.5号 (2段傘針カンナ)" note="沈下速度 3〜3.5秒/m でイカを抱かせる" />

      <LeaderLine points="174,81 210,81 220,105" />
      <LeaderLine points="265,97 265,115 270,125" />
      <LeaderLine points="174,171 210,171 290,150" />
      <LeaderLine points="360,263 320,263 350,225" />

      <path d="M 50 65 L 68 75 L 66 78 L 48 68 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 76 Q 160 105, 270 125" fill="none" stroke="#10b981" strokeWidth="1.6" />
      <text x="140" y="85" className="text-[7.5px] font-bold fill-emerald-400">PE 0.8号</text>

      <circle cx="270" cy="125" r="3.5" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <text x="270" y="139" textAnchor="middle" className="text-[7px] font-mono fill-emerald-300">FG KNOT</text>

      <line x1="274" y1="125" x2="350" y2="185" stroke="#38bdf8" strokeWidth="1.5" />

      <g transform="translate(350, 185)">
        <polygon points="0,0 5,-2 8,2 3,4" fill="none" stroke="#94a3b8" strokeWidth="1" />
      </g>

      <g transform="translate(356, 188) rotate(15)">
        <polygon points="12,12 18,12 14,24" fill="#64748b" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="14" cy="17" r="1.5" fill="#09111e" />
        <path d="M 0 4 Q 15 0, 35 5 Q 60 12, 85 8 L 85 4 Q 55 5, 30 -2 Q 10 -4, 0 4 Z" fill="#ec4899" fillOpacity="0.75" stroke="#f43f5e" strokeWidth="1.2" />
        <line x1="20" y1="-1" x2="24" y2="7" stroke="#fbcfe8" strokeWidth="0.5" strokeOpacity="0.7" />
        <line x1="35" y1="1" x2="39" y2="9" stroke="#fbcfe8" strokeWidth="0.5" strokeOpacity="0.7" />
        <line x1="50" y1="4" x2="54" y2="11" stroke="#fbcfe8" strokeWidth="0.5" strokeOpacity="0.7" />
        <line x1="65" y1="6" x2="69" y2="10" stroke="#fbcfe8" strokeWidth="0.5" strokeOpacity="0.7" />
        <path d="M 16 6 Q 24 10, 28 8" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
        <circle cx="6" cy="2" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="0.8" />
        <circle cx="6" cy="2" r="1" fill="#09111e" />
        <g transform="translate(85, 6)">
          <line x1="0" y1="0" x2="6" y2="0" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M 4 -5 L 6 0 L 4 5 M 2 -4 L 6 0 L 2 4" stroke="#f8fafc" strokeWidth="1.2" fill="none" />
          <line x1="6" y1="0" x2="12" y2="0" stroke="#e2e8f0" strokeWidth="1.5" />
          <path d="M 10 -6 L 12 0 L 10 6 M 8 -5 L 12 0 L 8 5" stroke="#f8fafc" strokeWidth="1.2" fill="none" />
        </g>
        <text x="35" y="18" className="text-[7px] font-bold fill-pink-200">3.5号 沈下姿勢45°</text>
      </g>

      <g transform="translate(200, 215)" opacity="0.8">
        <path d="M 0 15 L 20 0 L 40 20 L 60 5" fill="none" stroke="#ec4899" strokeWidth="1.2" markerEnd="url(#arrowEnd)" />
        <text x="5" y="32" className="text-[7.5px] font-mono fill-pink-300">SHARP DART (左右ダート)</text>
      </g>

      <Dimension x1={274} y1={125} x2={350} y2={185} label="リーダー 1.2〜1.5m" offset={-25} />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. ウキフカセ釣り仕掛け (FIG-05)
// ─────────────────────────────────────────────────────────────
function FukaseDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-05"
      title="ウキフカセ釣り仕掛け構成図 (半遊動式)"
      subtitle="DWG REF: #FKS-05 / FLOAT RIG ARCHITECTURE / SCALE: NON-SCALE"
      targetSpecies="クロダイ(チヌ)・メジナ(グレ)"
      standardDepth="2ヒロ〜竿2本 (3〜10m)"
      mainLineSpec="ナイロン 1.5〜2.0号 (サスペンド)"
      styleSpec="円錐ウキ遊動式・マキエ同調"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="ウキ止め＆シモリ玉" spec="ウキ止め糸 + 半円シモリ玉" note="狙うタナに合わせて移動調整" />
      <SpecBox x={384} y={60} w={154} h={42} num={2} title="円錐ウキ (遊動式)" spec="中通し円錐ウキ (0号〜3B)" note="視認性オレンジトップ・感度重視" />
      <SpecBox x={20} y={150} w={154} h={42} num={3} title="潮受ゴム＆からまん棒" spec="潮受ウキゴム + サルカン" note="潮を掴んで仕掛けをマキエと同調" />
      <SpecBox x={20} y={242} w={154} h={42} num={4} title="ハリス・ガン玉・針" spec="フロロ 1.5号 3m + チヌ針2号" note="生オキアミを自然に漂わせる" />

      <LeaderLine points="174,81 210,81 270,72" />
      <LeaderLine points="384,81 330,81 292,95" />
      <LeaderLine points="174,171 220,171 270,145" />
      <LeaderLine points="174,263 220,263 270,270" />

      <line x1="280" y1="46" x2="280" y2="160" stroke="#fbbf24" strokeWidth="1.6" />

      <g transform="translate(280, 72)">
        <rect x="-4" y="-2" width="8" height="4" rx="1" fill="#f43f5e" stroke="#fb7185" strokeWidth="0.8" />
        <text x="10" y="2" className="text-[7px] font-bold fill-rose-300">ウキ止め糸</text>
      </g>

      <circle cx="280" cy="80" r="2.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.6" />

      <g transform="translate(280, 100)">
        <path d="M 0 -15 Q 12 -12, 12 0 Q 12 12, 0 15 Q -12 12, -12 0 Q -12 -12, 0 -15 Z" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" />
        <path d="M 0 -15 Q 12 -12, 12 0 L -12 0 Q -12 -12, 0 -15 Z" fill="#f97316" stroke="#fb923c" strokeWidth="0.8" />
        <line x1="0" y1="-15" x2="0" y2="15" stroke="#f8fafc" strokeWidth="0.8" strokeDasharray="1 1" />
        <text x="16" y="3" className="text-[7.5px] font-bold fill-sky-200">円錐ウキ B</text>
      </g>

      <g transform="translate(280, 138)">
        <ellipse cx="0" cy="-4" rx="3.5" ry="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#facc15" strokeWidth="1.5" />
        <text x="12" y="3" className="text-[7px] font-bold fill-amber-300">潮受からまん棒</text>
      </g>

      <circle cx="280" cy="158" r="2.5" fill="none" stroke="#94a3b8" strokeWidth="1" />
      <rect x="278.5" y="159" width="3" height="5" fill="#475569" stroke="#94a3b8" strokeWidth="0.6" />
      <circle cx="280" cy="165" r="2.5" fill="none" stroke="#94a3b8" strokeWidth="1" />

      <line x1="280" y1="167" x2="280" y2="285" stroke="#38bdf8" strokeWidth="1.4" />

      <g transform="translate(280, 220)">
        <circle cx="0" cy="0" r="3.5" fill="#64748b" stroke="#cbd5e1" strokeWidth="0.8" />
        <line x1="-3.5" y1="0" x2="3.5" y2="0" stroke="#0f172a" strokeWidth="0.8" />
        <text x="8" y="3" className="text-[7px] font-bold fill-slate-300">ガン玉 B</text>
      </g>

      <g transform="translate(280, 285)">
        <path d="M 0 0 L 0 8 Q 0 16, 8 16 Q 16 16, 14 6" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
        <path d="M 0 4 Q 8 6, 12 12 Q 8 18, 0 16" fill="#fb7185" fillOpacity="0.85" stroke="#f43f5e" strokeWidth="0.8" />
        <circle cx="2" cy="5" r="0.8" fill="#09111e" />
        <text x="18" y="12" className="text-[7.5px] font-bold fill-rose-200">生オキアミ</text>
      </g>

      <g transform="translate(320, 210)" opacity="0.6">
        <path d="M 30 -30 Q 15 10, -20 70" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#arrowEnd)" />
        <text x="25" y="-10" className="text-[7px] font-mono fill-amber-300">マキエの同調帯</text>
      </g>

      <Dimension x1={330} y1={167} x2={330} y2={285} label="ハリス 2ヒロ (約3m)" offset={15} />
      <Dimension x1={330} y1={72} x2={330} y2={138} label="遊動幅 (タナ設定)" offset={15} />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. チョイ投げ仕掛け (FIG-06)
// ─────────────────────────────────────────────────────────────
function ChoinageDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-06"
      title="チョイ投げ仕掛け構成図 (L型天秤式)"
      subtitle="DWG REF: #CHN-06 / LIGHT SURF RIG SCHEMATIC / SCALE: NON-SCALE"
      targetSpecies="シロギス・ハゼ・カレイ・メゴチ"
      standardDepth="海底ボトム (砂地・砂泥底)"
      mainLineSpec="ナイロン 2〜3号 / PE 0.8〜1.0号"
      styleSpec="L型遊動天秤 + 2本針底這わせ"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="メインライン" spec="ナイロン 2〜3号 / PE 0.8号" note="力糸なしで30〜50mキャスト可能" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="L型遊動天秤" spec="小型天秤 (6〜10号)" note="底取りが明確でアタリが直接手元へ" />
      <SpecBox x={20} y={190} w={154} h={42} num={3} title="キス専用2本針" spec="流線キス 6〜7号 (ハリス1号)" note="吸い込み抜群のロングシャンク針" />
      <SpecBox x={380} y={95} w={160} h={42} num={4} title="虫エサ (青イソメ)" spec="頭部通し刺し・タラシ1〜2cm" note="海底の砂煙で強烈アピール" />

      <LeaderLine points="174,81 210,81 220,110" />
      <LeaderLine points="265,97 265,115 250,140" />
      <LeaderLine points="174,211 220,211 310,250" />
      <LeaderLine points="380,116 350,116 410,240" />

      <path d="M 50 65 L 68 75 L 66 78 L 48 68 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 76 Q 140 100, 220 130" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="120" y="85" className="text-[7.5px] font-bold fill-amber-300">ナイロン 2〜3号</text>

      <g transform="translate(220, 130)">
        <circle cx="0" cy="0" r="2.5" fill="none" stroke="#94a3b8" strokeWidth="1" />
        <line x1="0" y1="2.5" x2="0" y2="40" stroke="#cbd5e1" strokeWidth="1.4" />
        <polygon points="-6,40 6,40 0,60" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
        <text x="0" y="52" textAnchor="middle" className="text-[7px] font-bold fill-white">8号</text>
        <line x1="0" y1="40" x2="50" y2="52" stroke="#cbd5e1" strokeWidth="1.4" />
        <circle cx="50" cy="52" r="2.5" fill="none" stroke="#94a3b8" strokeWidth="1" />
      </g>

      <g transform="translate(270, 182)">
        <rect x="0" y="-2" width="6" height="4" fill="#475569" stroke="#94a3b8" strokeWidth="0.6" />
        <line x1="6" y1="0" x2="190" y2="40" stroke="#38bdf8" strokeWidth="1.4" />

        <g transform="translate(70, 15)">
          <line x1="0" y1="0" x2="20" y2="-12" stroke="#7dd3fc" strokeWidth="1" />
          <path d="M 20 -12 L 28 -14 Q 34 -14, 33 -8 Q 30 -4, 25 -8" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
          <path d="M 22 -13 Q 32 -13, 42 -10 Q 52 -7, 56 -9" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" />
        </g>

        <g transform="translate(190, 40)">
          <circle cx="0" cy="0" r="2" fill="#ef4444" stroke="#f87171" strokeWidth="0.5" />
          <path d="M 0 0 L 10 2 Q 18 2, 17 8 Q 14 12, 9 8" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
          <path d="M 2 1 Q 12 1, 24 5 Q 36 8, 45 6" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      </g>

      <g transform="translate(360, 245)" opacity="0.75">
        <path d="M 40 -15 L 0 -15" stroke="#38bdf8" strokeWidth="1" markerEnd="url(#arrowEnd)" />
        <text x="20" y="-22" textAnchor="middle" className="text-[7px] font-mono fill-cyan-300">SLOW RETRIEVE (ズル引き)</text>
      </g>

      <Dimension x1={276} y1={182} x2={460} y2={182} label="仕掛け全長 80〜100cm" offset={-22} orientation="horizontal" />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 7. サヨリ専用カゴウキ仕掛け (FIG-07)
// ─────────────────────────────────────────────────────────────
function SayoriDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-07"
      title="サヨリ専用カゴウキ仕掛け構成図"
      subtitle="DWG REF: #SYR-07 / SURFACE FLOAT RIG / SCALE: NON-SCALE"
      targetSpecies="サヨリ (秋〜春の回遊群)"
      standardDepth="超表層 (水面直下 0〜20cm)"
      mainLineSpec="ナイロン 2〜3号 / PE 0.8号"
      styleSpec="スーパーサヨリカゴ + 連玉シモリ"
    >
      <SpecBox x={20} y={90} w={150} h={42} num={1} title="道糸" spec="ナイロン 2〜2.5号 / PE 0.8号" note="水面に浮くフローティング仕様" />
      <SpecBox x={150} y={145} w={160} h={42} num={2} title="ロケットカゴウキ" spec="スーパーサヨリ遠投カゴ" note="コマセ放出＆引き波で群れを寄せる" />
      <SpecBox x={20} y={225} w={160} h={42} num={3} title="3〜4連シモリ玉" spec="極小シモリウキ 3〜4玉" note="横走りアタリを水面で即座に視覚化" />
      <SpecBox x={375} y={145} w={165} h={42} num={4} title="サヨリ専用針＆エサ" spec="サヨリ針 3.5〜4.5号 + アミエビ" note="硬いくちばしを貫通する極小鋭利針" />

      <LeaderLine points="170,111 210,111 160,80" />
      <LeaderLine points="230,145 230,105 210,80" />
      <LeaderLine points="180,246 250,246 295,85" />
      <LeaderLine points="375,166 330,166 430,80" />

      <line x1="50" y1="75" x2="170" y2="80" stroke="#fbbf24" strokeWidth="1.6" />

      <g transform="translate(170, 80)">
        <polygon points="0,0 20,-6 40,-4 40,4 20,6 0,0" fill="#f97316" stroke="#ea580c" strokeWidth="1" />
        <polygon points="30,-10 40,-4 30,0" fill="#ea580c" />
        <polygon points="30,10 40,4 30,0" fill="#ea580c" />
        <rect x="40" y="-5" width="22" height="10" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="40" y1="0" x2="62" y2="0" stroke="#38bdf8" strokeWidth="0.6" strokeDasharray="1 1" />
        <line x1="51" y1="-5" x2="51" y2="5" stroke="#38bdf8" strokeWidth="0.6" strokeDasharray="1 1" />
      </g>

      <line x1="232" y1="80" x2="430" y2="80" stroke="#38bdf8" strokeWidth="1.2" />

      <g transform="translate(265, 80)">
        <ellipse cx="0" cy="0" rx="3.5" ry="2.5" fill="#f43f5e" stroke="#fb7185" strokeWidth="0.8" />
      </g>
      <g transform="translate(305, 80)">
        <ellipse cx="0" cy="0" rx="3.5" ry="2.5" fill="#fef08a" stroke="#eab308" strokeWidth="0.8" />
      </g>
      <g transform="translate(345, 80)">
        <ellipse cx="0" cy="0" rx="3.5" ry="2.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
      </g>

      <g transform="translate(430, 80)">
        <path d="M 0 0 L 8 0 Q 14 0, 13 5 Q 11 8, 8 6" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M 2 0 Q 6 3, 10 2 Q 13 4, 11 6" fill="#fb7185" fillOpacity="0.85" stroke="#f43f5e" strokeWidth="0.6" />
        <text x="16" y="4" className="text-[7.5px] font-bold fill-rose-200">アミエビ 1匹掛け</text>
      </g>

      <g transform="translate(250, 60)" opacity="0.7">
        <path d="M 0 0 L 20 -4 M 0 0 L 20 4" stroke="#38bdf8" strokeWidth="0.8" />
        <text x="30" y="2" className="text-[7px] font-mono fill-cyan-300">PULLING WAKE (引き波アクション)</text>
      </g>

      <Dimension x1={232} y1={80} x2={430} y2={80} label="ハリス 80cm (水面直下)" offset={25} orientation="horizontal" />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 8. タコエギ仕掛け (FIG-08)
// ─────────────────────────────────────────────────────────────
function TakoDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-08"
      title="タコエギ仕掛け構成図 (マダコ攻略)"
      subtitle="DWG REF: #TKO-08 / OCTOPUS BOTTOM RIG / SCALE: NON-SCALE"
      targetSpecies="マダコ・イイダコ"
      standardDepth="海底ボトム (敷石・岸壁際・捨て石)"
      mainLineSpec="PE 3.0〜5.0号 (太糸耐摩耗)"
      styleSpec="3又スナップ + 2連タコエギ + 重オモリ"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="メインライン" spec="極太PE 3.0〜5.0号" note="張り付いた大タコを海底から引き剥がす" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="先糸リーダー" spec="フロロ 8〜10号 (35lb) 1m" note="荒い敷石やカキ殻擦れに高耐久" />
      <SpecBox x={20} y={190} w={154} h={42} num={3} title="3又タコスナップ＆オモリ" spec="親子スナップ + ナス型 20〜30号" note="海底から浮かさず定点トントンシェイク" />
      <SpecBox x={360} y={242} w={178} h={42} num={4} title="タコエギ 2本仕様" spec="3.5号 2本 + 豚背脂ワイヤー巻き" note="太軸バーブレス針でガッチリ貫通" />

      <LeaderLine points="174,81 210,81 220,110" />
      <LeaderLine points="265,97 265,115 270,125" />
      <LeaderLine points="174,211 220,211 280,260" />
      <LeaderLine points="360,263 320,263 350,185" />

      <path d="M 50 65 L 68 75 L 66 78 L 48 68 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 76 Q 140 100, 260 120" fill="none" stroke="#10b981" strokeWidth="2.2" />
      <text x="120" y="85" className="text-[7.5px] font-bold fill-emerald-400">PE 4号 (引張強度40lb+)</text>

      <circle cx="260" cy="120" r="3" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <line x1="260" y1="120" x2="285" y2="170" stroke="#38bdf8" strokeWidth="2" />

      <g transform="translate(285, 170)">
        <circle cx="0" cy="0" r="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
        <line x1="0" y1="4" x2="0" y2="12" stroke="#cbd5e1" strokeWidth="1.5" />
      </g>

      <g transform="translate(285, 235)">
        <line x1="0" y1="-53" x2="0" y2="0" stroke="#cbd5e1" strokeWidth="1.5" />
        <ellipse cx="0" cy="20" rx="9" ry="20" fill="#475569" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="0" y="23" textAnchor="middle" className="text-[8px] font-bold fill-white">25号</text>
      </g>

      {/* Upper Egi */}
      <g transform="translate(285, 170) rotate(-10)">
        <line x1="0" y1="0" x2="25" y2="0" stroke="#94a3b8" strokeWidth="1.2" />
        <g transform="translate(25, 0)">
          <polygon points="0,0 45,-6 65,0 45,6" fill="#ca8a04" fillOpacity="0.8" stroke="#eab308" strokeWidth="1.2" />
          <rect x="15" y="-8" width="22" height="4" rx="1" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.8" />
          <line x1="20" y1="-8" x2="20" y2="-4" stroke="#e2e8f0" strokeWidth="0.6" />
          <line x1="30" y1="-8" x2="30" y2="-4" stroke="#e2e8f0" strokeWidth="0.6" />
          <text x="26" y="-10" textAnchor="middle" className="text-[6.5px] font-bold fill-amber-200">豚背脂巻き</text>
          <path d="M 65 0 L 72 0 Q 80 -4, 76 -12 M 72 0 Q 76 -2, 74 -8" fill="none" stroke="#f8fafc" strokeWidth="1.8" />
        </g>
      </g>

      {/* Lower Egi */}
      <g transform="translate(285, 185) rotate(15)">
        <line x1="0" y1="0" x2="25" y2="0" stroke="#94a3b8" strokeWidth="1.2" />
        <g transform="translate(25, 0)">
          <polygon points="0,0 45,-6 65,0 45,6" fill="#ec4899" fillOpacity="0.8" stroke="#f43f5e" strokeWidth="1.2" />
          <path d="M 65 0 L 72 0 Q 80 -4, 76 -12 M 72 0 Q 76 -2, 74 -8" fill="none" stroke="#f8fafc" strokeWidth="1.8" />
        </g>
      </g>

      <g transform="translate(250, 275)" opacity="0.8">
        <path d="M 0 0 L 8 -5 L 16 0 L 24 -5" fill="none" stroke="#38bdf8" strokeWidth="1" />
        <text x="32" y="-1" className="text-[7.5px] font-mono fill-cyan-300">BOTTOM SHAKE (トントン叩き)</text>
      </g>
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 9. ヘチ・落とし込み仕掛け (FIG-09)
// ─────────────────────────────────────────────────────────────
function HechiDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-09"
      title="ヘチ・落とし込み仕掛け構成図"
      subtitle="DWG REF: #HCH-09 / QUAY VERTICAL DROP RIG / SCALE: NON-SCALE"
      targetSpecies="クロダイ(チヌ)・カサゴ・キジハタ"
      standardDepth="水面直下〜底層 (岸壁際0〜10cm)"
      mainLineSpec="フロロ/ナイロン 1.5〜2.0号 (目印付き)"
      styleSpec="タイコリール・壁際スリット落とし込み"
    >
      <SpecBox x={115} y={55} w={154} h={42} num={1} title="目印付き道糸" spec="落とし込み用目印 (25cmピッチ)" note="わずかな糸フケ・止まりアタリを即視認" />
      <SpecBox x={375} y={55} w={160} h={42} num={2} title="専用タイコリール" spec="1:1 ダイレクトドライブ" note="スプールフリーでエサの重みだけで落下" />
      <SpecBox x={375} y={145} w={160} h={42} num={3} title="ハリス＆ガン玉" spec="フロロ 1.2〜1.5号 + ガン玉 B〜3B" note="壁際10cm以内をスルスル自然沈降" />
      <SpecBox x={375} y={235} w={160} h={42} num={4} title="チヌ針＆天然エサ" spec="チヌ針 2〜3号 + イソガニ/イガイ" note="カニ横刺し・貝殻1枚掛け" />

      <LeaderLine points="190,97 190,120 145,130" />
      <LeaderLine points="375,76 340,76 320,65" />
      <LeaderLine points="375,166 330,166 160,210" />
      <LeaderLine points="375,256 330,256 160,270" />

      {/* Vertical Pier Quay Wall on left */}
      <g transform="translate(15, 46)">
        <rect x="0" y="0" width="75" height="264" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <line x1="75" y1="50" x2="65" y2="50" stroke="#38bdf8" strokeWidth="1" />
        <text x="60" y="52" textAnchor="end" className="text-[7px] font-mono fill-sky-300">1.0m</text>
        <line x1="75" y1="100" x2="65" y2="100" stroke="#38bdf8" strokeWidth="1" />
        <text x="60" y="102" textAnchor="end" className="text-[7px] font-mono fill-sky-300">2.0m</text>
        <line x1="75" y1="150" x2="65" y2="150" stroke="#38bdf8" strokeWidth="1" />
        <text x="60" y="152" textAnchor="end" className="text-[7px] font-mono fill-sky-300">3.0m</text>
        <line x1="75" y1="200" x2="65" y2="200" stroke="#38bdf8" strokeWidth="1" />
        <text x="60" y="202" textAnchor="end" className="text-[7px] font-mono fill-sky-300">4.0m</text>
        <circle cx="80" cy="65" r="2.5" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />
        <circle cx="82" cy="72" r="3" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />
        <circle cx="79" cy="80" r="2" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />
        <circle cx="81" cy="120" r="2.5" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />
        <circle cx="83" cy="128" r="3.5" fill="#0f172a" stroke="#64748b" strokeWidth="0.8" />
      </g>

      <g transform="translate(125, 46)">
        <line x1="-35" y1="30" x2="15" y2="30" stroke="#0ea5e9" strokeWidth="0.6" strokeDasharray="2 2" />
        <text x="-10" y="26" textAnchor="middle" className="text-[6.5px] font-mono fill-cyan-300">壁際 10cm</text>

        <line x1="15" y1="0" x2="15" y2="140" stroke="#fbbf24" strokeWidth="1.4" />
        <ellipse cx="15" cy="35" rx="2.5" ry="5" fill="#f97316" stroke="#ea580c" strokeWidth="0.6" />
        <ellipse cx="15" cy="70" rx="2.5" ry="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.6" />
        <ellipse cx="15" cy="105" rx="2.5" ry="5" fill="#f97316" stroke="#ea580c" strokeWidth="0.6" />
        <ellipse cx="15" cy="140" rx="2.5" ry="5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.6" />

        <circle cx="15" cy="150" r="2" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
        <line x1="15" y1="152" x2="15" y2="235" stroke="#38bdf8" strokeWidth="1.2" />
        <circle cx="15" cy="225" r="3" fill="#64748b" stroke="#cbd5e1" strokeWidth="0.8" />

        <g transform="translate(15, 235)">
          <path d="M 0 0 L 0 7 Q 0 14, 7 14 Q 14 14, 12 5" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
          <ellipse cx="10" cy="10" rx="8" ry="6" fill="#15803d" stroke="#22c55e" strokeWidth="0.8" />
          <path d="M 18 8 L 24 6 M 18 10 L 25 10 M 18 12 L 24 14" stroke="#22c55e" strokeWidth="0.8" />
          <path d="M 2 8 L -4 6 M 2 10 L -5 10 M 2 12 L -4 14" stroke="#22c55e" strokeWidth="0.8" />
          <circle cx="16" cy="5" r="2" fill="#16a34a" />
          <circle cx="4" cy="5" r="2" fill="#16a34a" />
          <text x="28" y="12" className="text-[7.5px] font-bold fill-emerald-300">活きイソガニ</text>
        </g>
      </g>

      <g transform="translate(220, 240)" opacity="0.65">
        <path d="M 0 10 Q 25 -5, 55 5 Q 75 12, 90 6 L 85 15 L 90 24 Q 75 18, 55 25 Q 25 35, 0 20 Z" fill="#334155" stroke="#64748b" strokeWidth="1" />
        <polygon points="50,4 65,-8 68,5" fill="#334155" />
        <circle cx="15" cy="12" r="2" fill="#fef08a" />
        <text x="30" y="38" className="text-[7.5px] font-mono fill-slate-300">クロダイ捕食ゾーン</text>
      </g>
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 10. テナガエビ専用仕掛け (FIG-10)
// ─────────────────────────────────────────────────────────────
function TenagaebiDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-10"
      title="テナガエビ専用仕掛け構成図"
      subtitle="DWG REF: #TNE-10 / MICRO SHIMORI RIG / SCALE: NON-SCALE"
      targetSpecies="テナガエビ・ハゼ・小魚"
      standardDepth="テトラ・ゴロタ石の隙間 (底スレスレ)"
      mainLineSpec="ナイロン 0.8〜1.0号 (のべ竿直結)"
      styleSpec="4連シモリウキ + 極小エビ針"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="のべ竿直結道糸" spec="ナイロン 0.8〜1.0号 (竿と同寸)" note="リール不要・取り回し抜群の軽量設計" />
      <SpecBox x={375} y={60} w={160} h={42} num={2} title="4連シモリウキ" spec="超極小シモリ玉 4連" note="斜めに並べてエビの横引きを視覚化" />
      <SpecBox x={20} y={190} w={154} h={42} num={3} title="微小オモリ (板オモリ)" spec="板オモリ / 割りビシ小" note="シモリ玉1個浮き3個沈む浮力バランス" />
      <SpecBox x={360} y={235} w={175} h={42} num={4} title="エビ針＆アカムシ" spec="エビ針 2〜3号 + 赤虫通し刺し" note="アタリから15秒待ってゆっくり抜き上げ" />

      <LeaderLine points="174,81 210,81 220,105" />
      <LeaderLine points="375,81 330,81 290,130" />
      <LeaderLine points="174,211 220,211 250,230" />
      <LeaderLine points="360,256 320,256 280,270" />

      <path d="M 50 65 L 68 75 L 66 78 L 48 68 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 76 Q 160 100, 240 115" fill="none" stroke="#fbbf24" strokeWidth="1.4" />
      <text x="130" y="85" className="text-[7.5px] font-bold fill-amber-300">ナイロン 0.8号</text>

      <g transform="translate(240, 115)">
        <line x1="0" y1="0" x2="35" y2="40" stroke="#38bdf8" strokeWidth="1" />
        <ellipse cx="6" cy="7" rx="3" ry="2" fill="#f97316" stroke="#ea580c" strokeWidth="0.6" />
        <ellipse cx="15" cy="17" rx="3" ry="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.6" />
        <ellipse cx="24" cy="27" rx="3" ry="2" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.6" />
        <ellipse cx="33" cy="37" rx="3" ry="2" fill="#ec4899" stroke="#db2777" strokeWidth="0.6" />
        <text x="44" y="24" className="text-[7px] font-mono fill-cyan-300">4連シモリウキ</text>
      </g>

      <line x1="275" y1="155" x2="275" y2="230" stroke="#38bdf8" strokeWidth="1.2" />

      <g transform="translate(275, 230)">
        <rect x="-3" y="-2" width="6" height="4" rx="1" fill="#64748b" stroke="#cbd5e1" strokeWidth="0.8" />
        <text x="8" y="2" className="text-[7px] font-bold fill-slate-300">板オモリ</text>
      </g>

      <line x1="275" y1="234" x2="275" y2="275" stroke="#7dd3fc" strokeWidth="1" />

      <g transform="translate(275, 275)">
        <path d="M 0 0 L 0 5 Q 0 9, 5 9 Q 9 9, 8 4" fill="none" stroke="#f8fafc" strokeWidth="1.2" />
        <path d="M 0 2 Q 4 1, 8 4 Q 12 7, 14 5" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
        <text x="14" y="14" className="text-[7.5px] font-bold fill-rose-300">アカムシ (チョン掛け)</text>
      </g>

      <g transform="translate(320, 260)" opacity="0.65">
        <polygon points="10,20 40,-10 70,20 55,40 25,40" fill="#334155" stroke="#64748b" strokeWidth="1" />
        <ellipse cx="0" cy="15" rx="14" ry="6" fill="#047857" />
        <path d="M -10 13 L -35 8 L -45 14" fill="none" stroke="#10b981" strokeWidth="1.2" />
        <path d="M -10 17 L -32 22 L -42 20" fill="none" stroke="#10b981" strokeWidth="1.2" />
        <text x="-40" y="32" className="text-[7.5px] font-mono fill-emerald-300">テナガエビの潜み場</text>
      </g>

      <Dimension x1={275} y1={234} x2={275} y2={275} label="ハリス 15〜20cm" offset={-25} />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 11. カワハギ専用胴突き仕掛け (FIG-11)
// ─────────────────────────────────────────────────────────────
function KawahagiDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-11"
      title="カワハギ専用胴突き仕掛け構成図"
      subtitle="DWG REF: #KWH-11 / 3-HOOK DROPPER RIG / SCALE: NON-SCALE"
      targetSpecies="カワハギ・ウマヅラハギ"
      standardDepth="底層〜底から1m (根・砂泥混じり)"
      mainLineSpec="PE 0.8〜1.0号 (超高感度)"
      styleSpec="集魚板 + 中オモリ + 早掛け3本針"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="小型集魚板" spec="ホログラム集魚板" note="光の乱反射とヒラ打ちで群れを寄せる" />
      <SpecBox x={380} y={60} w={154} h={42} num={2} title="中オモリ (0.5〜1.5号)" spec="仕掛けのテンション調整" note="ハリスをたるませて吸い込ませる" />
      <SpecBox x={20} y={150} w={154} h={42} num={3} title="早掛け3本針仕様" spec="ハゲ針 4〜5号 / 自動ハリス止め" note="エサ取り名人の口に掛かる極短ハリス" />
      <SpecBox x={20} y={242} w={154} h={42} num={4} title="底オモリ＆アサリエサ" spec="六角オモリ 20〜25号 + アサリ" note="塩締めアサリを丸く縫い刺し" />

      <LeaderLine points="174,81 220,81 270,90" />
      <LeaderLine points="380,81 330,81 290,125" />
      <LeaderLine points="174,171 220,171 270,165" />
      <LeaderLine points="174,263 220,263 270,285" />

      <line x1="280" y1="46" x2="280" y2="80" stroke="#10b981" strokeWidth="1.6" />

      <g transform="translate(280, 92)">
        <polygon points="0,-12 12,0 0,12 -12,0" fill="#0284c7" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="1.2" />
        <line x1="-8" y1="-4" x2="8" y2="4" stroke="#f8fafc" strokeWidth="0.8" />
        <line x1="-8" y1="4" x2="8" y2="-4" stroke="#f8fafc" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="2" fill="#fef08a" />
        <text x="18" y="3" className="text-[7.5px] font-bold fill-cyan-200">ホロ集魚板</text>
      </g>

      <line x1="280" y1="104" x2="280" y2="120" stroke="#38bdf8" strokeWidth="1.4" />

      <g transform="translate(280, 125)">
        <circle cx="0" cy="0" r="4.5" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
        <text x="12" y="3" className="text-[7px] font-bold fill-slate-300">中オモリ 1号</text>
      </g>

      <line x1="280" y1="130" x2="280" y2="265" stroke="#38bdf8" strokeWidth="1.6" />

      {/* Hook 1 */}
      <g transform="translate(280, 155)">
        <circle cx="0" cy="0" r="2.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="35" y2="-5" stroke="#7dd3fc" strokeWidth="1.2" />
        <path d="M 35 -5 L 42 -5 Q 46 -5, 45 0 Q 43 4, 38 2" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
        <ellipse cx="40" cy="0" rx="5" ry="4" fill="#fb923c" fillOpacity="0.9" stroke="#ea580c" strokeWidth="0.8" />
        <circle cx="39" cy="-1" r="1.5" fill="#78350f" />
      </g>

      {/* Hook 2 */}
      <g transform="translate(280, 195)">
        <circle cx="0" cy="0" r="2.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="-35" y2="-5" stroke="#7dd3fc" strokeWidth="1.2" />
        <path d="M -35 -5 L -42 -5 Q -46 -5, -45 0 Q -43 4, -38 2" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
        <ellipse cx="-40" cy="0" rx="5" ry="4" fill="#fb923c" fillOpacity="0.9" stroke="#ea580c" strokeWidth="0.8" />
        <circle cx="-39" cy="-1" r="1.5" fill="#78350f" />
      </g>

      {/* Hook 3 */}
      <g transform="translate(280, 235)">
        <circle cx="0" cy="0" r="2.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="35" y2="-5" stroke="#7dd3fc" strokeWidth="1.2" />
        <path d="M 35 -5 L 42 -5 Q 46 -5, 45 0 Q 43 4, 38 2" fill="none" stroke="#f8fafc" strokeWidth="1.4" />
        <ellipse cx="40" cy="0" rx="5" ry="4" fill="#fb923c" fillOpacity="0.9" stroke="#ea580c" strokeWidth="0.8" />
        <circle cx="39" cy="-1" r="1.5" fill="#78350f" />
        <text x="48" y="3" className="text-[7px] font-bold fill-orange-200">塩締めアサリ</text>
      </g>

      <g transform="translate(280, 265)">
        <circle cx="0" cy="2" r="2" fill="none" stroke="#94a3b8" strokeWidth="0.8" />
        <polygon points="-8,8 8,8 12,24 0,32 -12,24" fill="#475569" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="0" y="22" textAnchor="middle" className="text-[7.5px] font-bold fill-white">25号</text>
      </g>

      <Dimension x1={330} y1={155} x2={330} y2={195} label="間隔 12〜15cm" offset={15} />
      <Dimension x1={280} y1={155} x2={315} y2={155} label="ハリス 5〜7cm" offset={-14} orientation="horizontal" />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 12. イシダイ専用底物仕掛け (FIG-12)
// ─────────────────────────────────────────────────────────────
function IshidaiDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-12"
      title="イシダイ専用底物仕掛け構成図"
      subtitle="DWG REF: #ISD-12 / HEAVY BOTTOM REEF RIG / SCALE: NON-SCALE"
      targetSpecies="イシダイ・イシガキダイ (磯の王者)"
      standardDepth="海底深み・根回りカケアガリ (10〜30m)"
      mainLineSpec="ナイロン 18〜24号 / PE 10〜12号"
      styleSpec="瀬ズレワイヤー + 捨て糸真空オモリ式"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="極太道糸" spec="ナイロン 18〜24号 150m" note="荒磯の根ズレに耐える耐摩耗性" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="瀬ズレワイヤー" spec="ステンレスワイヤー #37 1.5m" note="鋭利な瀬壁での破断を完全阻止" />
      <SpecBox x={20} y={190} w={154} h={42} num={3} title="捨て糸＆真空オモリ" spec="真空オモリ 25〜35号 (捨て糸3号)" note="根掛かり時はオモリのみ切断回収" />
      <SpecBox x={365} y={200} w={165} h={42} num={4} title="イシダイ針＆ガンガゼ" spec="イシダイ針 16〜18号 + ウニ" note="ウニ通しで芯刺し・舞い込み即合わせ" />

      <LeaderLine points="174,81 210,81 220,105" />
      <LeaderLine points="265,97 265,115 270,125" />
      <LeaderLine points="174,211 220,211 280,265" />
      <LeaderLine points="365,221 320,221 350,210" />

      <g transform="translate(45, 65)">
        <polygon points="-10,25 20,-15 35,-10 5,30" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
        <rect x="0" y="25" width="10" height="20" fill="#334155" />
        <text x="-5" y="55" className="text-[7px] font-bold fill-slate-300">磯ピトン固定</text>
      </g>

      <path d="M 68 76 Q 160 105, 250 120" fill="none" stroke="#fbbf24" strokeWidth="2.4" />
      <text x="130" y="88" className="text-[7.5px] font-bold fill-amber-300">ナイロン 20号</text>

      <circle cx="250" cy="120" r="3.5" fill="#475569" stroke="#94a3b8" strokeWidth="1.2" />

      <line x1="253" y1="120" x2="335" y2="185" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5 1" />
      <text x="265" y="160" className="text-[7px] font-mono fill-slate-200">瀬ズレワイヤー #37</text>

      <g transform="translate(335, 185)">
        <circle cx="0" cy="0" r="3.5" fill="#f59e0b" stroke="#d97706" strokeWidth="0.8" />
        <line x1="0" y1="3" x2="-15" y2="50" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
        <ellipse cx="-15" cy="55" rx="8" ry="16" fill="#475569" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="-15" y="58" textAnchor="middle" className="text-[7.5px] font-bold fill-white">30号</text>
      </g>

      <line x1="338" y1="185" x2="410" y2="215" stroke="#e2e8f0" strokeWidth="1.8" />

      <g transform="translate(410, 215)">
        <path d="M 0 0 L 12 5 Q 22 10, 18 20 Q 12 25, 6 18" fill="none" stroke="#f8fafc" strokeWidth="2.2" />
        <circle cx="16" cy="14" r="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <line x1="16" y1="4" x2="16" y2="-6" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="24" y1="8" x2="34" y2="0" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="26" y1="16" x2="38" y2="16" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="22" y1="22" x2="32" y2="30" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="14" y1="24" x2="12" y2="34" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="8" y1="20" x2="-2" y2="28" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="6" y1="12" x2="-4" y2="10" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="8" y1="6" x2="0" y2="-2" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="32" y="28" className="text-[7.5px] font-bold fill-sky-200">生ガンガゼウニ</text>
      </g>

      <g transform="translate(430, 250)" opacity="0.65">
        <ellipse cx="25" cy="0" rx="35" ry="20" fill="#334155" stroke="#64748b" strokeWidth="1" />
        <line x1="10" y1="-18" x2="10" y2="18" stroke="#0f172a" strokeWidth="3" />
        <line x1="22" y1="-20" x2="22" y2="20" stroke="#0f172a" strokeWidth="3" />
        <line x1="34" y1="-19" x2="34" y2="19" stroke="#0f172a" strokeWidth="3" />
        <polygon points="60,0 75,-12 70,0 75,12" fill="#334155" />
        <circle cx="5" cy="-5" r="2.5" fill="#fef08a" />
        <text x="15" y="30" className="text-[7.5px] font-bold fill-slate-300">石鯛の本アタリ</text>
      </g>
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 13. サーフフラット＆巨魚仕掛け (FIG-13)
// ─────────────────────────────────────────────────────────────
function SurfFlatDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-13"
      title="サーフフラット＆巨魚キャスティング仕掛け"
      subtitle="DWG REF: #SFF-13 / SURF CASTING ARCHITECTURE / SCALE: NON-SCALE"
      targetSpecies="ヒラメ・マゴチ・オオニベ・青物"
      standardDepth="砂底〜底上50cm (離岸流・ブレイク)"
      mainLineSpec="PE 1.0〜1.5号 (8本編み 200〜300m)"
      styleSpec="ヘビーシンペン/ジグヘッド 遠投トレース"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="キャスティングPE" spec="PE 1.0〜1.2号 200m+" note="風を切り裂き100m超の遠投性能" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="耐摩耗リーダー" spec="フロロ 5〜7号 (20〜25lb) 1.5m" note="海底の砂擦れに強い高硬度仕様" />
      <SpecBox x={370} y={65} w={165} h={42} num={3} title="サーフルアー" spec="ヘビーシンペン 30〜40g / ワーム" note="ボトム感知力と遠投性を両立" />
      <SpecBox x={20} y={230} w={154} h={42} num={4} title="ボトムトレース釣法" spec="底から50cm上をスローリトリーブ" note="離岸流やブレイクの切れ目を横切る" />

      <LeaderLine points="174,81 210,81 220,105" />
      <LeaderLine points="265,97 265,115 270,125" />
      <LeaderLine points="370,86 330,86 360,180" />
      <LeaderLine points="174,251 220,251 280,250" />

      <g opacity="0.35">
        <path d="M 20 220 Q 150 250, 260 260 Q 360 230, 440 260 L 540 290" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 3" />
        <text x="350" y="225" className="text-[7.5px] font-mono fill-cyan-300">SAND BAR (浅瀬馬の背)</text>
        <text x="470" y="275" className="text-[7.5px] font-mono fill-cyan-300">OUTER BREAK (沖ブレイク)</text>
      </g>

      <path d="M 50 65 L 68 75 L 66 78 L 48 68 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="0.8" />
      <path d="M 68 76 Q 180 95, 280 120" fill="none" stroke="#10b981" strokeWidth="1.8" />
      <text x="140" y="85" className="text-[7.5px] font-bold fill-emerald-400">PE 1.2号 8本編み</text>

      <circle cx="280" cy="120" r="3.5" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <line x1="284" y1="120" x2="360" y2="180" stroke="#38bdf8" strokeWidth="1.6" />

      <g transform="translate(365, 182) rotate(10)">
        <ellipse cx="35" cy="0" rx="35" ry="6" fill="#0284c7" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="1.2" />
        <line x1="0" y1="0" x2="70" y2="0" stroke="#f8fafc" strokeWidth="0.8" />
        <circle cx="8" cy="-1" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="0.6" />
        <g transform="translate(25, 6)">
          <path d="M 0 0 L 0 6 L -4 10 M 0 6 L 4 10" stroke="#f8fafc" strokeWidth="1.2" />
        </g>
        <g transform="translate(70, 0)">
          <path d="M 0 0 L 6 0 L 10 -4 M 6 0 L 10 4" stroke="#f8fafc" strokeWidth="1.2" />
        </g>
        <text x="35" y="16" textAnchor="middle" className="text-[7px] font-bold fill-sky-200">38g ヘビーシンペン</text>
      </g>

      <g transform="translate(320, 270)" opacity="0.7">
        <ellipse cx="40" cy="0" rx="45" ry="16" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <polygon points="85,0 98,-10 95,0 98,10" fill="#1e293b" />
        <circle cx="15" cy="-4" r="2" fill="#fef08a" />
        <circle cx="18" cy="-2" r="2" fill="#fef08a" />
        <text x="25" y="24" className="text-[7.5px] font-bold fill-slate-300">砂に潜むヒラメ (捕食体勢)</text>
      </g>

      <path d="M 320 185 Q 360 178, 440 182" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#arrowEnd)" />
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// 14. クエ・大型底物磯夜釣りぶっこみ仕掛け (FIG-14)
// ─────────────────────────────────────────────────────────────
function KueDiagram() {
  return (
    <BlueprintCanvas
      figNo="FIG-14"
      title="クエ・大型底物磯夜釣りぶっこみ仕掛け"
      subtitle="DWG REF: #KUE-14 / MONSTER GROUPER RIG / SCALE: NON-SCALE"
      targetSpecies="クエ (モロコ・アラ 30kg超)・タマン"
      standardDepth="海底巨大岩礁地帯・洞窟スリット (15〜50m)"
      mainLineSpec="ナイロン 80〜100号 (または PE 30号)"
      styleSpec="アンカー固定板バネ + ワイロンワイヤー"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="板バネ竿受け" spec="磯岩盤にアンカーボルトで完全固定" note="怪魚の初速100kg超の突進を受け止める" />
      <SpecBox x={190} y={55} w={150} h={42} num={2} title="超極太道糸" spec="ナイロン 80〜100号" note="絶対に切れない極限の怪魚規格" />
      <SpecBox x={20} y={190} w={154} h={42} num={3} title="ワイロンワイヤー" spec="#30 1.5m (ステンレス7×7被覆)" note="クエの鋭利な犬歯やエラ洗いをガード" />
      <SpecBox x={360} y={190} w={172} h={42} num={4} title="クエ針＆丸ごとエサ" spec="クエ針 35〜40号 + サバ丸ごと1匹" note="一撃で根に潜る巨魚を即座に引き離す" />

      <LeaderLine points="174,81 210,81 110,120" />
      <LeaderLine points="265,97 265,115 230,120" />
      <LeaderLine points="174,211 220,211 290,165" />
      <LeaderLine points="360,211 320,211 360,225" />

      <g transform="translate(45, 90)">
        <polygon points="-25,45 40,45 35,25 -25,25" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <line x1="-10" y1="25" x2="-10" y2="40" stroke="#f8fafc" strokeWidth="2.5" />
        <line x1="15" y1="25" x2="15" y2="40" stroke="#f8fafc" strokeWidth="2.5" />
        <path d="M -15 25 Q 10 20, 25 -10 L 35 -5 Q 20 22, -15 25 Z" fill="#64748b" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="-15" y="58" className="text-[7px] font-bold fill-slate-300">アンカー固定板バネ</text>
      </g>

      <path d="M 75 80 Q 150 100, 240 120" fill="none" stroke="#fbbf24" strokeWidth="3.2" />
      <text x="130" y="90" className="text-[7.5px] font-bold fill-amber-300">ナイロン 100号 (破断強度100kg+)</text>

      <g transform="translate(240, 120)">
        <circle cx="0" cy="0" r="5" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="2" fill="#0f172a" />
      </g>

      <line x1="245" y1="120" x2="350" y2="185" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 2" />
      <text x="260" y="160" className="text-[7px] font-mono fill-slate-200">ワイロンワイヤー #30</text>

      <g transform="translate(240, 125)">
        <line x1="0" y1="0" x2="-15" y2="110" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 2" />
        <ellipse cx="-15" cy="120" rx="10" ry="24" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="-15" y="123" textAnchor="middle" className="text-[8px] font-bold fill-white">60号</text>
        <text x="-15" y="150" textAnchor="middle" className="text-[6.5px] font-bold fill-cyan-300">捨て糸 12号</text>
      </g>

      <g transform="translate(350, 185)">
        <path d="M 0 0 L 14 6 Q 24 12, 18 24 Q 10 30, 2 20" fill="none" stroke="#f8fafc" strokeWidth="2.8" />
        <g transform="translate(18, 18) rotate(15)">
          <ellipse cx="28" cy="0" rx="35" ry="12" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.2" />
          <polygon points="63,0 75,-8 72,0 75,8" fill="#0284c7" />
          <circle cx="6" cy="-2" r="2.5" fill="#fef08a" stroke="#0f172a" strokeWidth="0.8" />
          <line x1="16" y1="-10" x2="20" y2="-3" stroke="#09111e" strokeWidth="1.5" />
          <line x1="28" y1="-11" x2="32" y2="-3" stroke="#09111e" strokeWidth="1.5" />
          <line x1="40" y1="-10" x2="44" y2="-3" stroke="#09111e" strokeWidth="1.5" />
          <text x="0" y="24" className="text-[7.5px] font-bold fill-sky-200">活きサバ 1匹掛け</text>
        </g>
      </g>

      <g transform="translate(420, 250)" opacity="0.6">
        <ellipse cx="40" cy="0" rx="55" ry="24" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <polygon points="95,0 115,-15 110,0 115,15" fill="#1e293b" />
        <circle cx="10" cy="-6" r="3" fill="#facc15" />
        <text x="15" y="38" className="text-[8px] font-extrabold fill-slate-300">伝説の巨魚 クエ (30kg超)</text>
      </g>
    </BlueprintCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// Default Fallback Diagram (FIG-00)
// ─────────────────────────────────────────────────────────────
function DefaultRigDiagram({ name }: { name: string }) {
  return (
    <BlueprintCanvas
      figNo="FIG-00"
      title={`${name} 仕掛け構成図`}
      subtitle="DWG REF: #DFT-00 / STANDARD RIG SCHEMATIC / SCALE: NON-SCALE"
      targetSpecies="対象魚種全般"
      standardDepth="表層〜底層 (全層対応)"
      mainLineSpec="推奨タックルに準拠"
      styleSpec="標準仕掛け仕様"
    >
      <SpecBox x={20} y={60} w={154} h={42} num={1} title="道糸 (メインライン)" spec="標準推奨ライン" note="対象魚に応じた号数をセレクト" />
      <SpecBox x={380} y={60} w={154} h={42} num={2} title="ハリス / リーダー" spec="フロロカーボン仕様" note="耐摩耗性・根ズレ対策" />
      <SpecBox x={20} y={190} w={154} h={42} num={3} title="接続金具 / サルカン" spec="ローリングスイベル" note="糸ヨレ解消・スムーズな回転" />
      <SpecBox x={360} y={230} w={170} h={42} num={4} title="針 / ルアー" spec="専用フックシステム" note="確実なフッキングを実現" />

      <line x1="280" y1="50" x2="280" y2="160" stroke="#fbbf24" strokeWidth="1.6" />
      <circle cx="280" cy="165" r="3.5" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
      <line x1="280" y1="170" x2="280" y2="270" stroke="#38bdf8" strokeWidth="1.4" />
      <circle cx="280" cy="220" r="4" fill="#64748b" stroke="#cbd5e1" strokeWidth="0.8" />
      <path d="M 280 270 L 280 280 Q 280 288, 288 288 Q 296 288, 294 278" fill="none" stroke="#f8fafc" strokeWidth="1.6" />

      <text x="280" y="140" textAnchor="middle" className="text-[9px] font-mono fill-sky-300">{name}</text>
    </BlueprintCanvas>
  );
}
