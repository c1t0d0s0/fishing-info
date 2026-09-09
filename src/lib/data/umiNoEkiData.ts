import { UmiNoEki, RegionId } from "@/types/uminoeki";
import umiNoEkiData from "@/data/umiNoEki.json";

export const umiNoEkiList: UmiNoEki[] = umiNoEkiData as UmiNoEki[];

export const UMI_NO_EKI_LIST = umiNoEkiList;

export function getAllUmiNoEki(): UmiNoEki[] {
  return umiNoEkiList;
}

export function getUmiNoEkiById(id: string): UmiNoEki | undefined {
  return umiNoEkiList.find((station) => station.id === id || station.slug === id);
}

export function getUmiNoEkiByRegion(region: RegionId): UmiNoEki[] {
  return umiNoEkiList.filter((station) => station.region === region);
}

export function getFishingUmiNoEki(): UmiNoEki[] {
  return umiNoEkiList.filter((station) => station.hasFishing);
}

export function getRentalBoatUmiNoEki(): UmiNoEki[] {
  return umiNoEkiList.filter((station) => station.hasRentalBoat);
}
