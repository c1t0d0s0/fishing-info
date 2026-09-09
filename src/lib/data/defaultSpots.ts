import { FishingSpot, RegionId } from "@/types/spot";
import spotsData from "@/data/spots.json";

export const REGIONS: { id: RegionId; name: string }[] = [
  { id: "kanto", name: "関東" },
  { id: "kansai", name: "関西" },
  { id: "tokai", name: "東海" },
  { id: "hokuriku", name: "北陸" },
  { id: "tohoku", name: "東北" },
  { id: "hokkaido", name: "北海道" },
  { id: "chugoku", name: "中国" },
  { id: "shikoku", name: "四国" },
  { id: "kyushu", name: "九州" },
  { id: "okinawa", name: "沖縄" },
];

export const DEFAULT_SPOTS: FishingSpot[] = spotsData as FishingSpot[];
