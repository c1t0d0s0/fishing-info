"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface FishIllustrationProps {
  speciesId: string;
  className?: string;
}

// 24 watercolor field guide images
const WATERCOLOR_IMAGE_SET = new Set([
  "aji",
  "madai",
  "kurodai",
  "seabass",
  "buri",
  "tachiuo",
  "aoriika",
  "hirame",
  "mebaru",
  "kasago",
  "saba",
  "shirogisu",
  "madako",
  "iwashi",
  "sayori",
  "konoshiro",
  "sappa",
  "kamasu",
  "oyabiccha",
  "sawara",
  "kanpachi",
  "karei",
  "magochi",
  "gima",
  "kyusen",
  "mahaze",
]);

export default function FishIllustration({ speciesId, className = "" }: FishIllustrationProps) {
  const pathname = usePathname() || "/";
  const [imageError, setImageError] = useState(false);

  const getRelativeImagePath = (id: string): string => {
    const cleanPath = pathname.replace(/^\/|\/$/g, "");
    const segments = cleanPath ? cleanPath.split("/").filter(Boolean) : [];
    const relevantSegments = segments.filter((s) => s !== "fishing-info");
    const depth = relevantSegments.length;
    const prefix = depth === 0 ? "./" : "../".repeat(depth);
    return `${prefix}images/species/${id}.jpg`;
  };

  const imageSrc = getRelativeImagePath(speciesId);

  if (imageSrc && !imageError) {
    return (
      <div className={`relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden select-none bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group ${className}`}>
        <img
          src={imageSrc}
          alt={speciesId}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out bg-white dark:bg-slate-950"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Consistent Watercolor Field Guide Plate SVG fallback
  return (
    <div className={`relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden select-none border border-slate-200 dark:border-slate-800 shadow-sm group ${className}`}>
      {renderFieldGuidePlate(speciesId)}
    </div>
  );
}

function renderFieldGuidePlate(id: string) {
  return (
    <svg viewBox="0 0 640 360" className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
      <defs>
        {/* Paper texture and parchment frame */}
        <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbf9f4" />
          <stop offset="100%" stopColor="#f3eee3" />
        </linearGradient>

        {/* Ocean watercolor backdrop */}
        <linearGradient id="oceanShallow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="35%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>

        <linearGradient id="oceanDeep" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#0284c7" />
          <stop offset="80%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        <linearGradient id="oceanTropical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="40%" stopColor="#14b8a6" />
          <stop offset="80%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>

        <linearGradient id="oceanNorthern" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="45%" stopColor="#3b82f6" />
          <stop offset="85%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Light rays filter */}
        <linearGradient id="lightRay" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Vintage Paper Canvas Base */}
      <rect width="640" height="360" fill="url(#paperGrad)" />

      {/* 2. Inner Watercolor Plate Window */}
      <rect x="24" y="20" width="592" height="320" rx="8" fill={getPlateBackground(id)} stroke="#cbd5e1" strokeWidth="1" />

      {/* Sun rays from surface */}
      <polygon points="120,20 180,20 280,260 210,260" fill="url(#lightRay)" opacity="0.4" />
      <polygon points="340,20 410,20 480,260 400,260" fill="url(#lightRay)" opacity="0.35" />
      <polygon points="460,20 510,20 570,260 520,260" fill="url(#lightRay)" opacity="0.25" />

      {/* Underwater Seabed / Kelp / Corals */}
      {renderSeabedScenery(id)}

      {/* Species Watercolor Illustration */}
      {renderSpeciesArt(id)}

      {/* Japanese Field Guide Specimen Header / Footer */}
      {renderFieldGuideLabel(id)}
    </svg>
  );
}

function getPlateBackground(id: string) {
  if (["taman", "gala", "mibai", "kuchinaji", "gurukun", "oyabiccha"].includes(id)) {
    return "url(#oceanTropical)";
  }
  if (["nishin", "hokke", "kurosoi", "chika", "ainame", "kyuriuo", "karafutomasu", "komai", "matsukawa", "hatahata", "donko", "ishigarei"].includes(id)) {
    return "url(#oceanNorthern)";
  }
  if (["kamasu", "sawara", "kanpachi", "aigo-poison", "oniokoze-poison", "mejina", "kijihata", "hiramasa", "soudagatsuo", "isaki", "kensakiika", "akahata", "shiira", "hirasuzuki", "takabe", "takenokomebaru"].includes(id)) {
    return "url(#oceanDeep)";
  }
  return "url(#oceanShallow)";
}

function renderSeabedScenery(id: string) {
  const isTropical = ["taman", "gala", "mibai", "kuchinaji", "gurukun", "oyabiccha"].includes(id);
  const isRocky = ["kurosoi", "ainame", "hokke", "aigo-poison", "oniokoze-poison", "kyusen", "akahata", "donko", "takenokomebaru"].includes(id);

  if (isTropical) {
    return (
      <g opacity="0.85">
        {/* Tropical Coral Reef */}
        <path d="M 24 340 Q 100 310, 190 325 Q 320 300, 480 328 Q 560 315, 616 340 L 616 340 L 24 340 Z" fill="#134e4a" opacity="0.6" />
        {/* Brain & staghorn coral shapes */}
        <ellipse cx="90" cy="318" rx="35" ry="18" fill="#fda4af" stroke="#e11d48" strokeWidth="1.5" opacity="0.7" />
        <ellipse cx="530" cy="320" rx="42" ry="22" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" opacity="0.7" />
        {/* Soft seaweeds */}
        <path d="M 160 330 Q 145 270, 165 240 Q 175 275, 170 330" fill="#2dd4bf" opacity="0.6" />
        <path d="M 460 335 Q 480 260, 465 230 Q 450 270, 470 335" fill="#34d399" opacity="0.6" />
      </g>
    );
  }

  if (isRocky) {
    return (
      <g opacity="0.85">
        {/* Coastal Reef / Kelp */}
        <path d="M 24 340 Q 120 300, 240 315 Q 380 295, 510 320 Q 570 305, 616 340 Z" fill="#0f172a" opacity="0.7" />
        {/* Kelp fronds */}
        <path d="M 70 330 Q 50 240, 80 180 Q 95 245, 80 330" fill="#854d0e" opacity="0.75" />
        <path d="M 540 335 Q 565 235, 535 175 Q 515 250, 545 335" fill="#713f12" opacity="0.75" />
      </g>
    );
  }

  // Sandbar / Coastal Water
  return (
    <g opacity="0.85">
      {/* Sandy ripples */}
      <path d="M 24 340 Q 150 315, 300 325 Q 450 310, 616 340 Z" fill="#ca8a04" opacity="0.3" />
      <path d="M 40 328 Q 120 320, 200 326" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M 320 325 Q 420 318, 520 325" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.4" />
    </g>
  );
}

function renderSpeciesArt(id: string) {
  switch (id) {
    // 1. マイワシ (Sardinops melanostictus)
    case "iwashi":
      return (
        <g id="fish-iwashi">
          <polygon points="460,175 540,120 515,175 540,230" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" opacity="0.9" />
          <path d="M 120 175 Q 200 115, 360 120 Q 440 130, 470 175 Q 440 215, 360 225 Q 200 230, 120 175 Z" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2.5" />
          <path d="M 120 175 Q 200 125, 360 128 Q 440 138, 470 175" fill="#1e3a8a" opacity="0.75" />
          <path d="M 150 185 Q 280 180, 450 185" stroke="#38bdf8" strokeWidth="3" fill="none" />
          {/* Seven Spots (七つ星) */}
          {[220, 255, 290, 325, 360, 395, 430].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={165} r={4.5} fill="#0f172a" />
              <circle cx={cx - 1} cy={164} r={1.5} fill="#ffffff" opacity="0.8" />
            </g>
          ))}
          {/* Head & eye */}
          <circle cx="160" cy="162" r="10" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="158" cy="162" r="5.5" fill="#0f172a" />
          <circle cx="156" cy="160" r="2" fill="#ffffff" />
          <path d="M 120 175 Q 145 178, 155 185" stroke="#1e3a8a" strokeWidth="2" fill="none" />
        </g>
      );

    // 2. サヨリ (Hyporhamphus sajori)
    case "sayori":
      return (
        <g id="fish-sayori">
          <polygon points="490,175 560,135 538,175 560,215" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
          <path d="M 130 170 Q 280 145, 495 170 Q 280 190, 130 176 Z" fill="#f8fafc" stroke="#0284c7" strokeWidth="2" />
          {/* Long lower jaw with red tip */}
          <polygon points="130,176 45,178 130,173" fill="#0f172a" />
          <circle cx="47" cy="178" r="4.5" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
          {/* Emerald green lateral stripe */}
          <path d="M 130 170 Q 280 152, 492 170" stroke="#06b6d4" strokeWidth="4" fill="none" />
          <path d="M 130 172 Q 280 154, 492 172" stroke="#10b981" strokeWidth="1.5" fill="none" />
          {/* Eye */}
          <circle cx="152" cy="167" r="7.5" fill="#ffffff" stroke="#0369a1" strokeWidth="1.5" />
          <circle cx="151" cy="167" r="4" fill="#0f172a" />
          <circle cx="149" cy="165" r="1.5" fill="#ffffff" />
        </g>
      );

    // 3. コノシロ (Konosirus punctatus)
    case "konoshiro":
      return (
        <g id="fish-konoshiro">
          <polygon points="455,175 535,115 510,175 535,235" fill="#93c5fd" stroke="#3b82f6" strokeWidth="2" />
          {/* Dorsal trailing thread */}
          <path d="M 280 110 Q 380 90, 440 120 Q 360 115, 295 118" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
          {/* Diamond body */}
          <path d="M 125 175 Q 185 105, 330 110 Q 425 125, 460 175 Q 425 225, 330 238 Q 185 240, 125 175 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
          {/* Shoulder spot */}
          <circle cx="210" cy="160" r="7" fill="#0f172a" />
          {/* Rows of dotted lines */}
          {[142, 154, 166, 178].map((y, row) => (
            <g key={row} opacity="0.75">
              {[235, 260, 285, 310, 335, 360, 385, 410].map((cx, i) => (
                <circle key={i} cx={cx} cy={y} r={2} fill="#0369a1" />
              ))}
            </g>
          ))}
          {/* Eye */}
          <circle cx="165" cy="160" r="9" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
          <circle cx="163" cy="160" r="5" fill="#0f172a" />
        </g>
      );

    // 4. サッパ (Sardinella zunasi)
    case "sappa":
      return (
        <g id="fish-sappa">
          <polygon points="445,175 520,125 500,175 520,225" fill="#fef08a" stroke="#eab308" strokeWidth="2" opacity="0.8" />
          {/* Compressed sharp body */}
          <path d="M 130 175 Q 190 115, 320 118 Q 410 130, 450 175 Q 405 235, 310 245 Q 190 240, 130 175 Z" fill="#f1f5f9" stroke="#64748b" strokeWidth="2.5" />
          <path d="M 130 175 Q 190 120, 320 122 Q 410 133, 450 175" fill="#22d3ee" opacity="0.5" />
          {/* Eye */}
          <circle cx="165" cy="165" r="8.5" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
          <circle cx="164" cy="165" r="4.5" fill="#0f172a" />
        </g>
      );

    // 5. アカカマス (Sphyraena pinguis)
    case "kamasu":
      return (
        <g id="fish-kamasu">
          <polygon points="480,175 555,130 530,175 555,220" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          {/* Two separate dorsal fins */}
          <polygon points="300,135 330,95 345,138" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
          <polygon points="390,145 415,110 430,148" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
          {/* Pike-like body */}
          <path d="M 90 175 Q 220 130, 380 138 Q 450 148, 485 175 Q 450 200, 380 208 Q 220 215, 90 175 Z" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2.5" />
          {/* Sharp jaw */}
          <polygon points="90,175 140,168 140,182" fill="#ca8a04" opacity="0.4" />
          <path d="M 90 175 Q 130 185, 145 188" stroke="#78350f" strokeWidth="2" fill="none" />
          {/* Eye */}
          <circle cx="150" cy="165" r="8" fill="#ffffff" stroke="#78350f" strokeWidth="1.5" />
          <circle cx="149" cy="165" r="4.5" fill="#0f172a" />
        </g>
      );

    // 6. オヤビッチャ (Abudefduf vaigiensis)
    case "oyabiccha":
      return (
        <g id="fish-oyabiccha">
          <polygon points="435,175 515,115 490,175 515,235" fill="#67e8f9" stroke="#0891b2" strokeWidth="2" />
          {/* High oval body */}
          <path d="M 140 175 Q 190 95, 310 95 Q 400 115, 440 175 Q 400 235, 310 255 Q 190 255, 140 175 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
          {/* 5 Bold Black Stripes */}
          {[220, 265, 310, 355, 400].map((cx, i) => (
            <path key={i} d={`M ${cx} 98 Q ${cx + 10} 175, ${cx - 5} 250`} stroke="#0f172a" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
          ))}
          {/* Eye */}
          <circle cx="185" cy="155" r="10" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <circle cx="184" cy="155" r="5.5" fill="#0f172a" />
        </g>
      );

    // 7. サワラ (Scomberomorus niphonius)
    case "sawara":
      return (
        <g id="fish-sawara">
          <polygon points="495,175 570,120 545,175 570,230" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
          {/* Sleek torpedo body */}
          <path d="M 95 175 Q 220 120, 380 128 Q 460 140, 500 175 Q 460 205, 380 218 Q 220 225, 95 175 Z" fill="#cbd5e1" stroke="#334155" strokeWidth="2.5" />
          <path d="M 95 175 Q 220 122, 380 130 Q 460 142, 500 175" fill="#3b82f6" opacity="0.6" />
          {/* Spotted flank patterns */}
          {[210, 245, 280, 315, 350, 385, 420, 455].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={165 + (i % 3) * 8} r={3.5} fill="#1e293b" opacity="0.8" />
              <circle cx={cx + 15} cy={180 - (i % 2) * 8} r={3} fill="#1e293b" opacity="0.8" />
            </g>
          ))}
          {/* Predatory Eye & Jaw */}
          <circle cx="145" cy="165" r="8" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="144" cy="165" r="4.5" fill="#0f172a" />
          <path d="M 95 175 Q 130 178, 148 185" stroke="#0f172a" strokeWidth="2" fill="none" />
        </g>
      );

    // 8. カンパチ (Seriola dumerili)
    case "kanpachi":
      return (
        <g id="fish-kanpachi">
          <polygon points="475,175 550,118 528,175 550,232" fill="#ca8a04" stroke="#a16207" strokeWidth="2" />
          {/* Deep muscular body */}
          <path d="M 115 175 Q 190 108, 340 112 Q 440 125, 480 175 Q 440 220, 340 235 Q 190 238, 115 175 Z" fill="#e2e8f0" stroke="#713f12" strokeWidth="2.5" />
          <path d="M 115 175 Q 190 110, 340 115 Q 440 128, 480 175" fill="#a16207" opacity="0.65" />
          {/* Distinct Kanpachi "八" head band */}
          <path d="M 140 135 L 180 195" stroke="#451a03" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
          {/* Golden lateral line */}
          <path d="M 170 175 Q 310 160, 475 175" stroke="#eab308" strokeWidth="5" fill="none" />
          {/* Eye */}
          <circle cx="158" cy="165" r="9.5" fill="#ffffff" stroke="#451a03" strokeWidth="2" />
          <circle cx="156" cy="165" r="5" fill="#0f172a" />
        </g>
      );

    // 9. マコガレイ (Pseudopleuronectes yokohamae)
    case "karei":
      return (
        <g id="fish-karei">
          {/* Tail on left side */}
          <polygon points="175,175 100,125 125,175 100,225" fill="#a16207" stroke="#78350f" strokeWidth="2" />
          {/* Flat oval body */}
          <path d="M 170 175 Q 215 105, 360 105 Q 480 125, 520 175 Q 480 225, 360 245 Q 215 245, 170 175 Z" fill="#92400e" stroke="#451a03" strokeWidth="2.5" />
          {/* Sandy camouflage spots */}
          {[230, 270, 310, 350, 390, 430, 460].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={140 + (i % 3) * 20} r={6} fill="#451a03" opacity="0.6" />
              <circle cx={cx + 15} cy={175 - (i % 2) * 15} r={4} fill="#fef08a" opacity="0.5" />
            </g>
          ))}
          {/* Both eyes on RIGHT side of head */}
          <circle cx="495" cy="160" r="7" fill="#fef08a" stroke="#451a03" strokeWidth="1.5" />
          <circle cx="495" cy="160" r="3.5" fill="#0f172a" />
          <circle cx="482" cy="152" r="7" fill="#fef08a" stroke="#451a03" strokeWidth="1.5" />
          <circle cx="482" cy="152" r="3.5" fill="#0f172a" />
          {/* Small mouth */}
          <path d="M 520 175 Q 505 180, 495 185" stroke="#451a03" strokeWidth="2" fill="none" />
        </g>
      );

    // 10. マゴチ (Platycephalus indicus)
    case "magochi":
      return (
        <g id="fish-magochi">
          <polygon points="480,175 555,125 530,175 555,225" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
          {/* Broad flat body */}
          <path d="M 100 175 Q 180 120, 340 135 Q 445 145, 485 175 Q 445 205, 340 215 Q 180 230, 100 175 Z" fill="#a16207" stroke="#713f12" strokeWidth="2.5" />
          {/* Wide duckbill head */}
          <path d="M 100 175 Q 140 140, 185 145 Q 185 205, 140 210 Z" fill="#78350f" opacity="0.8" />
          {/* Upward eyes */}
          <circle cx="155" cy="150" r="7" fill="#fef08a" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="154" cy="150" r="3.5" fill="#0f172a" />
          <circle cx="155" cy="195" r="7" fill="#fef08a" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="154" cy="195" r="3.5" fill="#0f172a" />
        </g>
      );

    // 11. ギマ (Triacanthus biaculeatus)
    case "gima":
      return (
        <g id="fish-gima">
          <polygon points="445,175 525,120 500,175 525,230" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
          {/* Huge top spike */}
          <polygon points="235,115 250,30 265,115" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          {/* Two bottom belly spikes */}
          <polygon points="260,240 270,315 285,240" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          {/* Diamond leatherjacket body */}
          <path d="M 125 175 Q 180 110, 310 115 Q 405 135, 450 175 Q 405 215, 310 240 Q 180 240, 125 175 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="2.5" />
          {/* Eye */}
          <circle cx="180" cy="150" r="9" fill="#fef08a" stroke="#0f172a" strokeWidth="2" />
          <circle cx="178" cy="150" r="4.5" fill="#0f172a" />
        </g>
      );

    // 12. キュウセン (Halichoeres poecilopterus)
    case "kyusen":
      return (
        <g id="fish-kyusen">
          <polygon points="475,175 545,130 525,175 545,220" fill="#2dd4bf" stroke="#0d9488" strokeWidth="2" />
          {/* Slender wrasse body */}
          <path d="M 115 175 Q 210 130, 350 135 Q 435 145, 480 175 Q 435 205, 350 215 Q 210 220, 115 175 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2.5" />
          {/* Vivid pink/orange horizontal bands */}
          <path d="M 130 175 Q 260 160, 470 175" stroke="#fb7185" strokeWidth="8" fill="none" opacity="0.85" />
          {/* Eye */}
          <circle cx="158" cy="165" r="8" fill="#fef08a" stroke="#0f766e" strokeWidth="1.5" />
          <circle cx="157" cy="165" r="4" fill="#0f172a" />
        </g>
      );

    // 13. マハゼ (Acanthogobius flavimanus)
    case "mahaze":
      return (
        <g id="fish-mahaze">
          <polygon points="475,175 545,130 525,175 545,220" fill="#ca8a04" stroke="#a16207" strokeWidth="2" />
          {/* Goby body */}
          <path d="M 115 175 Q 200 135, 350 140 Q 435 150, 480 175 Q 435 200, 350 210 Q 200 215, 115 175 Z" fill="#d97706" stroke="#92400e" strokeWidth="2.5" />
          {/* Big round head & big eye */}
          <circle cx="160" cy="155" r="10" fill="#fef08a" stroke="#78350f" strokeWidth="2" />
          <circle cx="158" cy="155" r="5.5" fill="#0f172a" />
          {/* Leopard spots on flank */}
          {[220, 260, 300, 340, 380, 420].map((cx, i) => (
            <circle key={i} cx={cx} cy={175} r={4.5} fill="#451a03" opacity="0.75" />
          ))}
        </g>
      );

    // 14. マメイカ (Loliolus beka)
    case "mameika":
      return (
        <g id="fish-mameika">
          {/* Round compact squid body */}
          <ellipse cx="280" cy="175" rx="110" ry="45" fill="#fda4af" stroke="#e11d48" strokeWidth="2" opacity="0.9" />
          {/* Rounded fin mantle */}
          <ellipse cx="200" cy="175" rx="50" ry="60" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" opacity="0.75" />
          {/* Arms on right */}
          {[140, 155, 170, 185, 200].map((y, i) => (
            <path key={i} d={`M 380 175 Q 440 ${y}, 490 ${y + 5}`} stroke="#f43f5e" strokeWidth="4" fill="none" strokeLinecap="round" />
          ))}
          {/* Glowing Eyes */}
          <circle cx="360" cy="162" r="8" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
          <circle cx="359" cy="162" r="4" fill="#0f172a" />
        </g>
      );

    // 15. タマン / ハマフエフキ (Lethrinus nebulosus)
    case "taman":
      return (
        <g id="fish-taman">
          <polygon points="465,175 545,115 520,175 545,235" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
          {/* High emperor body */}
          <path d="M 125 175 Q 185 98, 335 100 Q 425 118, 470 175 Q 425 230, 335 250 Q 185 250, 125 175 Z" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2.5" />
          {/* Electric sky blue facial streaks */}
          <path d="M 135 175 Q 175 160, 220 155" stroke="#38bdf8" strokeWidth="4" fill="none" />
          <path d="M 145 185 Q 185 175, 230 170" stroke="#38bdf8" strokeWidth="4" fill="none" />
          <path d="M 155 195 Q 195 190, 240 185" stroke="#38bdf8" strokeWidth="4" fill="none" />
          {/* Eye */}
          <circle cx="180" cy="145" r="10" fill="#fef08a" stroke="#0369a1" strokeWidth="2" />
          <circle cx="178" cy="145" r="5" fill="#0f172a" />
        </g>
      );

    // 16. ガーラ / ロウニンアジ (Caranx ignobilis)
    case "gala":
      return (
        <g id="fish-gala">
          <polygon points="465,175 555,105 525,175 555,245" fill="#334155" stroke="#0f172a" strokeWidth="2.5" />
          {/* Steep sloping giant forehead */}
          <path d="M 120 175 Q 140 85, 300 95 Q 425 115, 475 175 Q 425 235, 300 255 Q 140 255, 120 175 Z" fill="#64748b" stroke="#1e293b" strokeWidth="3" />
          {/* Heavy eye */}
          <circle cx="175" cy="135" r="11" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="173" cy="135" r="6" fill="#0f172a" />
          {/* Scutes on tail */}
          <path d="M 360 175 Q 420 175, 470 175" stroke="#0f172a" strokeWidth="5" fill="none" />
        </g>
      );

    // 17. ミーバイ / スジアラ (Plectropomus leopardus)
    case "mibai":
      return (
        <g id="fish-mibai">
          <polygon points="465,175 545,120 520,175 545,230" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
          {/* Scarlet Grouper body */}
          <path d="M 120 175 Q 185 100, 335 105 Q 425 120, 470 175 Q 425 230, 335 245 Q 185 250, 120 175 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2.5" />
          {/* Hundred blue neon dots */}
          {[190, 230, 270, 310, 350, 390, 430].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={135 + (i % 3) * 22} r={3.5} fill="#38bdf8" />
              <circle cx={cx + 18} cy={155 + (i % 2) * 25} r={3.5} fill="#38bdf8" />
            </g>
          ))}
          {/* Eye */}
          <circle cx="175" cy="150" r="10" fill="#fef08a" stroke="#991b1b" strokeWidth="2" />
          <circle cx="173" cy="150" r="5" fill="#0f172a" />
        </g>
      );

    // 18. クチナジ / イソフエフキ (Lethrinus atkinsoni)
    case "kuchinaji":
      return (
        <g id="fish-kuchinaji">
          <polygon points="465,175 545,115 520,175 545,235" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          {/* Golden Emperor body */}
          <path d="M 125 175 Q 185 102, 335 105 Q 425 120, 470 175 Q 425 230, 335 245 Q 185 248, 125 175 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
          {/* Eye */}
          <circle cx="180" cy="148" r="9.5" fill="#ffffff" stroke="#b45309" strokeWidth="2" />
          <circle cx="178" cy="148" r="5" fill="#0f172a" />
        </g>
      );

    // 19. グルクン / タカサゴ (Pterocaesio digramma)
    case "gurukun":
      return (
        <g id="fish-gurukun">
          <polygon points="475,175 550,118 528,175 550,232" fill="#fb7185" stroke="#e11d48" strokeWidth="2" />
          {/* Streamlined Fusilier body */}
          <path d="M 120 175 Q 200 115, 360 118 Q 440 128, 480 175 Q 440 220, 360 232 Q 200 235, 120 175 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="2.5" />
          {/* Bright yellow lateral stripe */}
          <path d="M 140 175 Q 280 162, 475 175" stroke="#facc15" strokeWidth="6" fill="none" />
          {/* Pink belly flush */}
          <path d="M 180 205 Q 320 225, 430 205" fill="#fda4af" opacity="0.6" />
          {/* Eye */}
          <circle cx="160" cy="162" r="9" fill="#ffffff" stroke="#0f766e" strokeWidth="1.5" />
          <circle cx="158" cy="162" r="4.5" fill="#0f172a" />
        </g>
      );

    // 20. ニシン (Clupea pallasii)
    case "nishin":
      return (
        <g id="fish-nishin">
          <polygon points="465,175 545,118 520,175 545,232" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
          {/* Herring body */}
          <path d="M 120 175 Q 200 118, 360 122 Q 440 132, 475 175 Q 440 218, 360 228 Q 200 232, 120 175 Z" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2.5" />
          <path d="M 120 175 Q 200 120, 360 124 Q 440 134, 475 175" fill="#1e3a8a" opacity="0.7" />
          {/* Eye */}
          <circle cx="160" cy="162" r="9" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
          <circle cx="158" cy="162" r="5" fill="#0f172a" />
        </g>
      );

    // 21. ホッケ (Pleurogrammus azonus)
    case "hokke":
      return (
        <g id="fish-hokke">
          <polygon points="475,175 550,120 528,175 550,230" fill="#b45309" stroke="#78350f" strokeWidth="2" />
          {/* Long body */}
          <path d="M 115 175 Q 200 120, 360 122 Q 445 132, 480 175 Q 445 218, 360 228 Q 200 230, 115 175 Z" fill="#d97706" stroke="#92400e" strokeWidth="2.5" />
          {/* Dark brown vertical cloud bars */}
          {[220, 270, 320, 370, 420].map((cx, i) => (
            <path key={i} d={`M ${cx} 125 Q ${cx + 15} 175, ${cx} 225`} stroke="#78350f" strokeWidth="12" strokeLinecap="round" opacity="0.75" />
          ))}
          {/* Eye */}
          <circle cx="155" cy="162" r="9" fill="#fef08a" stroke="#78350f" strokeWidth="2" />
          <circle cx="153" cy="162" r="4.5" fill="#0f172a" />
        </g>
      );

    // 22. クロソイ (Sebastes schlegelii)
    case "kurosoi":
      return (
        <g id="fish-kurosoi">
          <polygon points="465,175 545,115 520,175 545,235" fill="#18181b" stroke="#09090b" strokeWidth="2" />
          {/* Black armor rockfish body */}
          <path d="M 120 175 Q 185 98, 335 100 Q 425 118, 470 175 Q 425 230, 335 250 Q 185 250, 120 175 Z" fill="#27272a" stroke="#09090b" strokeWidth="3" />
          {/* Spiky dorsal */}
          <polygon points="210,105 230,45 250,105" fill="#18181b" stroke="#09090b" strokeWidth="2" />
          <polygon points="260,105 285,40 310,105" fill="#18181b" stroke="#09090b" strokeWidth="2" />
          <polygon points="320,105 345,45 370,105" fill="#18181b" stroke="#09090b" strokeWidth="2" />
          {/* 3 Spines below eye */}
          <polygon points="160,180 150,195 165,185" fill="#71717a" />
          <polygon points="175,180 170,198 182,185" fill="#71717a" />
          <polygon points="190,180 188,198 198,185" fill="#71717a" />
          {/* Eye */}
          <circle cx="175" cy="148" r="10" fill="#fef08a" stroke="#09090b" strokeWidth="2.5" />
          <circle cx="173" cy="148" r="5.5" fill="#09090b" />
        </g>
      );

    // 23. チカ (Hypomesus japonicus)
    case "chika":
      return (
        <g id="fish-chika">
          <polygon points="475,175 545,130 525,175 545,220" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
          {/* Delicate smelt body */}
          <path d="M 120 175 Q 210 135, 350 138 Q 435 148, 480 175 Q 435 202, 350 212 Q 210 215, 120 175 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
          <path d="M 140 175 Q 280 168, 470 175" stroke="#38bdf8" strokeWidth="3" fill="none" opacity="0.6" />
          {/* Eye */}
          <circle cx="155" cy="165" r="7.5" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
          <circle cx="154" cy="165" r="4" fill="#0f172a" />
        </g>
      );

    // 24. アイナメ / アブラコ (Hexagrammos otakii)
    case "ainame":
      return (
        <g id="fish-ainame">
          <polygon points="475,175 550,120 528,175 550,230" fill="#ca8a04" stroke="#854d0e" strokeWidth="2" />
          {/* Long wavy continuous dorsal */}
          <path d="M 190 120 Q 320 70, 460 140" stroke="#ca8a04" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.85" />
          {/* Golden brown body */}
          <path d="M 115 175 Q 200 115, 360 120 Q 445 130, 480 175 Q 445 220, 360 230 Q 200 235, 115 175 Z" fill="#eab308" stroke="#a16207" strokeWidth="2.5" />
          {/* Marbled pattern */}
          {[220, 265, 310, 355, 400].map((cx, i) => (
            <g key={i}>
              <ellipse cx={cx} cy={155 + (i % 2) * 20} rx={12} ry={6} fill="#78350f" opacity="0.5" />
              <ellipse cx={cx + 20} cy={185 - (i % 2) * 20} rx={10} ry={5} fill="#78350f" opacity="0.5" />
            </g>
          ))}
          {/* Eye */}
          <circle cx="158" cy="160" r="9" fill="#fef08a" stroke="#854d0e" strokeWidth="2" />
          <circle cx="156" cy="160" r="4.5" fill="#0f172a" />
        </g>
      );

    // 25. アイゴ (Siganus fuscescens)
    case "aigo-poison":
      return (
        <g id="fish-aigo">
          <polygon points="465,175 545,115 520,175 545,235" fill="#92400e" stroke="#78350f" strokeWidth="2" />
          {/* Venomous spines on dorsal and anal */}
          <g stroke="#ef4444" strokeWidth="3.5" fill="none">
            <line x1="200" y1="105" x2="210" y2="40" />
            <line x1="240" y1="98" x2="255" y2="35" />
            <line x1="280" y1="98" x2="300" y2="35" />
            <line x1="320" y1="102" x2="345" y2="40" />
            <line x1="360" y1="110" x2="390" y2="50" />
            {/* Anal spines */}
            <line x1="280" y1="250" x2="300" y2="310" />
            <line x1="320" y1="245" x2="345" y2="305" />
          </g>
          {/* Body */}
          <path d="M 125 175 Q 185 100, 335 102 Q 425 120, 470 175 Q 425 230, 335 248 Q 185 250, 125 175 Z" fill="#a16207" stroke="#713f12" strokeWidth="2.5" />
          {/* White spots */}
          {[200, 240, 280, 320, 360, 400].map((cx, i) => (
            <g key={i}>
              <circle cx={cx} cy={140 + (i % 3) * 20} r={3} fill="#ffffff" opacity="0.8" />
              <circle cx={cx + 15} cy={165 + (i % 2) * 20} r={3} fill="#ffffff" opacity="0.8" />
            </g>
          ))}
          {/* Eye */}
          <circle cx="165" cy="155" r="9" fill="#ffffff" stroke="#451a03" strokeWidth="2" />
          <circle cx="163" cy="155" r="4.5" fill="#0f172a" />
        </g>
      );

    // 26. オニオコゼ (Inimicus japonicus)
    case "oniokoze-poison":
      return (
        <g id="fish-oniokoze">
          {/* Venomous rugged dorsal spines */}
          <g stroke="#ef4444" strokeWidth="4" fill="none">
            <line x1="200" y1="115" x2="208" y2="35" />
            <line x1="235" y1="110" x2="248" y2="30" />
            <line x1="270" y1="112" x2="288" y2="30" />
            <line x1="305" y1="118" x2="328" y2="40" />
            <line x1="340" y1="125" x2="368" y2="50" />
          </g>
          {/* Monstrous camouflaged body */}
          <path d="M 110 190 Q 180 110, 330 120 Q 420 140, 465 190 Q 420 240, 330 250 Q 180 250, 110 190 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2.5" />
          {/* Upturned monstrous mouth */}
          <polygon points="110,190 145,155 160,185" fill="#7f1d1d" />
          {/* Eye */}
          <circle cx="165" cy="155" r="8" fill="#fef08a" stroke="#451a03" strokeWidth="2" />
          <circle cx="164" cy="155" r="4" fill="#0f172a" />
        </g>
      );

    default:
      return (
        <g id="fish-default">
          <polygon points="465,175 545,115 520,175 545,235" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
          <path d="M 125 175 Q 190 105, 340 110 Q 430 125, 470 175 Q 430 225, 340 240 Q 190 245, 125 175 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
          <circle cx="170" cy="158" r="9" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
          <circle cx="168" cy="158" r="4.5" fill="#0f172a" />
        </g>
      );
  }
}

function renderFieldGuideLabel(id: string) {
  const titles: Record<string, { ja: string; en: string; danger?: boolean }> = {
    iwashi: { ja: "マイワシ（真鰯）", en: "Sardinops melanostictus" },
    sayori: { ja: "サヨリ（細魚）", en: "Hyporhamphus sajori" },
    konoshiro: { ja: "コノシロ（鮗）", en: "Konosirus punctatus" },
    sappa: { ja: "サッパ（ママカリ）", en: "Sardinella zunasi" },
    kamasu: { ja: "アカカマス（赤叺）", en: "Sphyraena pinguis" },
    oyabiccha: { ja: "オヤビッチャ", en: "Abudefduf vaigiensis" },
    sawara: { ja: "サワラ（鰆）/ サゴシ", en: "Scomberomorus niphonius" },
    kanpachi: { ja: "カンパチ（間八）", en: "Seriola dumerili" },
    karei: { ja: "マコガレイ（真子鰈）", en: "Pseudopleuronectes yokohamae" },
    magochi: { ja: "マゴチ（真鯒）", en: "Platycephalus indicus" },
    gima: { ja: "ギマ（擬瞞）", en: "Triacanthus biaculeatus" },
    kyusen: { ja: "キュウセン（ベラ）", en: "Halichoeres poecilopterus" },
    mahaze: { ja: "マハゼ（真沙魚）", en: "Acanthogobius flavimanus" },
    mameika: { ja: "マメイカ（ジンドウイカ）", en: "Loliolus beka" },
    taman: { ja: "タマン（ハマフエフキ）", en: "Lethrinus nebulosus" },
    gala: { ja: "ガーラ（ロウニンアジ / GT）", en: "Caranx ignobilis" },
    mibai: { ja: "ミーバイ（スジアラ）", en: "Plectropomus leopardus" },
    kuchinaji: { ja: "クチナジ（イソフエフキ）", en: "Lethrinus atkinsoni" },
    gurukun: { ja: "グルクン（タカサゴ）", en: "Pterocaesio digramma" },
    nishin: { ja: "ニシン（鰊）", en: "Clupea pallasii" },
    hokke: { ja: "ホッケ（𩸽）", en: "Pleurogrammus azonus" },
    kurosoi: { ja: "クロソイ（黒曹以）", en: "Sebastes schlegelii" },
    chika: { ja: "チカ（千香）", en: "Hypomesus japonicus" },
    ainame: { ja: "アイナメ（鮎並 / アブラコ）", en: "Hexagrammos otakii" },
    "aigo-poison": { ja: "アイゴ（藍子）", en: "Siganus fuscescens", danger: true },
    "oniokoze-poison": { ja: "オニオコゼ（鬼虎魚）", en: "Inimicus japonicus", danger: true },
    kyuriuo: { ja: "キュウリウオ（胡瓜魚）", en: "Osmerus dentex" },
    karafutomasu: { ja: "カラフトマス（樺太鱒）", en: "Oncorhynchus gorbuscha" },
    komai: { ja: "コマイ（氷下魚）", en: "Eleginus gracilis" },
    matsukawa: { ja: "マツカワ（王鰈）", en: "Verasper moseri" },
    mejina: { ja: "メジナ（グレ / 尾長）", en: "Girella punctata" },
    kijihata: { ja: "キジハタ（アコウ）", en: "Epinephelus akaara" },
    kawahagi: { ja: "カワハギ（皮剥）", en: "Stephanolepis cirrhifer" },
    hiramasa: { ja: "ヒラマサ（平政）", en: "Seriola lalandi" },
    soudagatsuo: { ja: "ソウダガツオ（宗田鰹）", en: "Auxis rochei" },
    isaki: { ja: "イサキ（伊佐木）", en: "Parapristipoma trilineatum" },
    hatahata: { ja: "ハタハタ（鰰 / 鱩）", en: "Arctoscopus japonicus" },
    shiriyakeika: { ja: "シリヤケイカ / コウイカ", en: "Sepiella japonica" },
    kensakiika: { ja: "ケンサキイカ（剣先烏賊）", en: "Uroteuthis edulis" },
    tenagaebi: { ja: "テナガエビ（手長海老）", en: "Macrobrachium nipponense" },
    bora: { ja: "ボラ（鰡 / 鮱）", en: "Mugil cephalus" },
    akahata: { ja: "アカハタ（赤羽太）", en: "Epinephelus fasciatus" },
    shiira: { ja: "シイラ（鱪 / 万力）", en: "Coryphaena hippurus" },
    iidako: { ja: "イイダコ（飯蛸）", en: "Amphioctopus fangsiao" },
    donko: { ja: "ドンコ（エゾイソアイナメ）", en: "Physiculus maximowiczi" },
    umitanago: { ja: "ウミタナゴ（海鱮）", en: "Ditrema temminckii" },
    hirasuzuki: { ja: "ヒラスズキ（平鱸）", en: "Lateolabrax latus" },
    akame: { ja: "アカメ（赤目）", en: "Lates japonicus" },
    takabe: { ja: "タカベ（高部 / 鰞）", en: "Labracoglossa argentiventris" },
    hedai: { ja: "ヘダイ（平鯛 / 白チヌ）", en: "Rhabdosargus sarba" },
    ishigarei: { ja: "イシガレイ（石鰈）", en: "Kareius bicoloratus" },
    takenokomebaru: { ja: "タケノコメバル（筍目張）", en: "Sebastes oblongus" },
  };

  const item = titles[id];
  if (!item) return null;

  return (
    <g>
      {/* Label Header Plate */}
      <rect x="36" y="30" width="220" height="42" rx="6" fill="#0f172a" fillOpacity="0.8" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
      <text x="48" y="50" fill="#ffffff" fontSize="14" fontWeight="800" fontFamily="sans-serif">
        {item.ja}
      </text>
      <text x="48" y="64" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="sans-serif">
        {item.en}
      </text>

      {/* Danger Banner if applicable */}
      {item.danger && (
        <g>
          <rect x="264" y="30" width="120" height="26" rx="6" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
          <text x="274" y="47" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            ⚠️ 毒棘・危険魚
          </text>
        </g>
      )}

      {/* Footer Specimen Plate */}
      <text x="590" y="325" textAnchor="end" fill="#ffffff" fillOpacity="0.8" fontSize="10" fontWeight="700" fontFamily="sans-serif">
        日本沿岸海産魚類図鑑
      </text>
    </g>
  );
}
