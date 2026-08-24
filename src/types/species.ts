export type WaterLayer = "surface" | "middle" | "bottom" | "all"; // 表層・中層・底層・全層

export type FishCategory =
  | "popular_coastal" // 堤防・沿岸人気魚 (アジ・メバル・クロダイ・シーバス等)
  | "blue_pelagic"    // 青物・回遊魚 (ブリ・カンパチ・サワラ・ソウダ等)
  | "bottom_rock"     // 底物・ロックフィッシュ (カサゴ・アイナメ・ハタ・ヒラメ・マゴチ)
  | "squid_octopus"   // イカ・タコ (アオリイカ・コウイカ・マダコ)
  | "tasty_table"     // 美味しい食卓魚 (キス・カワハギ・タチウオ・マダイ)
  | "fresh_brackish"; // 河口・汽水・汽水魚 (ハゼ・スズキ・ウナギ)

export interface RigGuide {
  id: string;
  name: string;
  category: string; // サビキ, 投げ釣り, ルアー, フカセ, エギング, etc.
  description: string;
  rod: string;
  reel: string;
  mainLine: string;
  leader: string;
  hookBait: string;
  actionTips: string;
}

export interface FishSpecies {
  id: string;
  name: string;
  kana: string;
  scientificName: string;
  category: FishCategory;
  description: string;
  habitat: string;
  waterLayer: WaterLayer;
  waterLayerText: string;
  averageSize: string; // e.g. "15cm〜30cm (最大40cm)"
  recordSize?: string;
  activeMonths: number[]; // 1-12
  peakMonths: number[];   // 旬・爆釣期 1-12
  difficulty: 1 | 2 | 3 | 4 | 5; // 1: 初心者超おすすめ 〜 5: 上級者向け
  edibleRating: 1 | 2 | 3 | 4 | 5; // 1: リリース推奨 〜 5: 極上美味
  cookingMethods: string[]; // e.g. ["刺身", "塩焼き", "フライ", "南蛮漬け", "煮付け"]
  recommendedRigs: string[]; // e.g. ["サビキ釣り", "アジング", "ウキフカセ"]
  bestTime: string; // e.g. "朝夕マズメ・夜間・上げ潮時"
  favoriteBaits: string[]; // e.g. ["アミエビ", "オキアミ", "青イソメ", "ワーム1.5〜2inch"]
  fishingTips: string;
  isDangerous: boolean;
  dangerNotes?: string;
  imageUrl?: string;
}
