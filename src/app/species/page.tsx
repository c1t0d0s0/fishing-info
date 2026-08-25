"use client";

import { useState } from "react";
import { FISH_SPECIES_DATA } from "@/lib/data/fishSpeciesData";
import { RIG_GUIDES } from "@/lib/data/rigData";
import { FishCategory } from "@/types/species";
import SpeciesCard from "@/components/species/SpeciesCard";
import RigGuideCard from "@/components/species/RigGuideCard";
import {
  Fish,
  Anchor,
  Search,
  Sparkles,
  AlertTriangle,
  Star,
  Layers,
  Filter,
} from "lucide-react";

export default function SpeciesPage() {
  const [activeTab, setActiveTab] = useState<"species" | "rigs">("species");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FishCategory | "all" | "dangerous" | "peak_now">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<number | "all">("all");

  const currentMonth = new Date().getMonth() + 1;

  // Filter species
  const filteredSpecies = FISH_SPECIES_DATA.filter((sp) => {
    if (selectedCategory === "dangerous") {
      if (!sp.isDangerous) return false;
    } else if (selectedCategory === "peak_now") {
      if (!sp.peakMonths.includes(currentMonth)) return false;
    } else if (selectedCategory !== "all") {
      if (sp.category !== selectedCategory) return false;
    }

    if (difficultyFilter !== "all" && sp.difficulty !== difficultyFilter) {
      return false;
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = sp.name.toLowerCase().includes(q) || sp.kana.includes(q);
      const matchRig = sp.recommendedRigs.some((r) => r.toLowerCase().includes(q));
      const matchBait = sp.favoriteBaits.some((b) => b.toLowerCase().includes(q));
      const matchCook = sp.cookingMethods.some((c) => c.toLowerCase().includes(q));
      if (!matchName && !matchRig && !matchBait && !matchCook) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Page Title & Main Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
            <Fish className="w-7 h-7 text-ocean-500" />
            <span>魚種図鑑 & 仕掛け・攻略ガイド</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            全国沿岸の全52魚種のデータ・タナ・生息域・釣期・仕掛け・食味 & 毒魚アラート
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center p-1 bg-slate-200/70 dark:bg-slate-800 rounded-2xl w-fit">
          <button
            onClick={() => setActiveTab("species")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "species"
                ? "bg-white dark:bg-slate-900 text-ocean-600 dark:text-ocean-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <Fish className="w-4 h-4" />
            <span>魚種図鑑 ({FISH_SPECIES_DATA.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("rigs")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "rigs"
                ? "bg-white dark:bg-slate-900 text-ocean-600 dark:text-ocean-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
            }`}
          >
            <Anchor className="w-4 h-4" />
            <span>仕掛け・タックル図解 ({RIG_GUIDES.length})</span>
          </button>
        </div>
      </div>

      {activeTab === "species" ? (
        <>
          {/* Search and Filter Controls */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="魚名、仕掛け、エサ、料理名 (例: アジ, エギング, アジフライ)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>

              {/* Quick filter buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                    selectedCategory === "all"
                      ? "bg-ocean-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  すべて
                </button>
                <button
                  onClick={() => setSelectedCategory("peak_now")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 flex items-center gap-1 ${
                    selectedCategory === "peak_now"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  今月旬 ({currentMonth}月)
                </button>
                <button
                  onClick={() => setSelectedCategory("popular_coastal")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                    selectedCategory === "popular_coastal"
                      ? "bg-ocean-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  堤防人気魚
                </button>
                <button
                  onClick={() => setSelectedCategory("blue_pelagic")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                    selectedCategory === "blue_pelagic"
                      ? "bg-sky-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  青物・回遊魚
                </button>
                <button
                  onClick={() => setSelectedCategory("bottom_rock")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                    selectedCategory === "bottom_rock"
                      ? "bg-teal-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  根魚・フラット
                </button>
                <button
                  onClick={() => setSelectedCategory("squid_octopus")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 ${
                    selectedCategory === "squid_octopus"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  イカ・タコ
                </button>
                <button
                  onClick={() => setSelectedCategory("dangerous")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-colors shrink-0 flex items-center gap-1 ${
                    selectedCategory === "dangerous"
                      ? "bg-rose-600 text-white shadow-xs"
                      : "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900"
                  }`}
                >
                  <AlertTriangle className="w-3 h-3" />
                  危険魚
                </button>
              </div>
            </div>
          </div>

          {/* Species Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSpecies.map((species) => (
              <SpeciesCard key={species.id} species={species} />
            ))}
          </div>
        </>
      ) : (
        /* Rigs Guide Tab */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RIG_GUIDES.map((rig) => (
            <RigGuideCard key={rig.id} rig={rig} />
          ))}
        </div>
      )}
    </div>
  );
}
