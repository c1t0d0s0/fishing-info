export type RegionId =
  | "hokkaido"
  | "tohoku"
  | "kanto"
  | "hokuriku"
  | "tokai"
  | "kansai"
  | "chugoku"
  | "shikoku"
  | "kyushu"
  | "okinawa";

export type SpotCategory =
  | "port" // 漁港・防波堤
  | "park" // 海釣り公園・海づり施設
  | "surf" // サーフ・砂浜
  | "rock" // 磯・地磯
  | "river_mouth" // 河口・汽水域
  | "pier"; // 桟橋・岸壁

export interface SpotFacility {
  hasParking: boolean;
  hasToilet: boolean;
  hasSafetyFence: boolean;
  isFamilyFriendly: boolean;
  hasNightLight: boolean;
  hasConvenienceStoreNearby: boolean;
  hasTackleShopNearby: boolean;
  isFeeRequired: boolean;
  feeText?: string;
  isNightFishingAllowed: boolean;
  nightFishingText?: string;
  openingHours?: string;
}

export interface FishingSpot {
  id: string;
  name: string;
  kana: string;
  region: RegionId;
  prefecture: string;
  address: string;
  lat: number;
  lng: number;
  category: SpotCategory;
  description: string;
  accessInfo: string;
  depthRange: string; // e.g. "3m〜12m"
  bottomType: string; // e.g. "砂泥・敷石・テトラ"
  facilities: SpotFacility;
  targetFish: string[]; // e.g. ["アジ", "メバル", "シーバス", "アオリイカ", "タチウオ"]
  bestSeasons: {
    spring: string[];
    summer: string[];
    autumn: string[];
    winter: string[];
  };
  recommendedRigs: string[]; // e.g. ["サビキ釣り", "アジング", "エギング"]
  localRules: string[]; // e.g. ["コマセ撒き餌禁止", "オーバースロー禁止", "竿出し2本まで"]
  parkingDetails?: {
    capacity: string; // e.g. "約492台"
    fee: string; // e.g. "1回500円"
    hours: string; // e.g. "24時間"
    notes?: string;
  };
  dangerNotes?: string[];
  tips: string;
  imageUrl?: string;
}
