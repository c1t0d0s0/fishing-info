import type { Object3D, Vector3 } from "three";

export interface FishMotion {
  id: string;
  ja: string;
  en: string;
  noteJa: string;
  noteEn: string;
  onLine: boolean;
}

export interface FishActor {
  object: Object3D;
  update(dt: number): void;
  setMotion(id: string): void;
  getMouth(out?: Vector3): Vector3;
  dispose(): void;
}

/** baseUrl は glb / webp の置き場所（末尾の / まで）。ids を省けば全部読む */
export function loadFish(baseUrl: string | ((name: string) => string), ids?: string[]): Promise<void>;

/** loadFish のあとに呼ぶ。読み込めなかった種類は null */
export function createFish(id: string, lengthCm?: number): FishActor | null;

export const MOTIONS: FishMotion[];
