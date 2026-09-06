export { type RegionId } from "./spot";
import { RegionId } from "./spot";

export interface UmiNoEki {
  id: string;
  slug: string;
  name: string;
  officialName: string;
  description: string;
  address: string;
  prefecture: string;
  region: RegionId;
  regionName: string;
  tel: string;
  businessHours: string;
  closedDays: string;
  visitorBerth: string;
  visitorRestriction: string;
  visitorFee: string;
  hasRentalBoat: boolean;
  rentalBoatText: string;
  hasFishing: boolean;
  fishingText: string;
  spotId?: string | null;
  seaAccess: string;
  landAccess: string;
  websiteUrl?: string;
  lat: number;
  lng: number;
  imageUrl?: string;
  photos?: string[];
}
