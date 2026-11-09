// 魚モデル ギャラリー (https://cda-social.github.io/fish/gallery.html) の 3D モデルがある魚種。
// モデル本体は public/fish-models/ (CC0 1.0)。
export interface FishModel {
  /** fish-kit のモデル id（サムネイルのファイル名にも使う） */
  modelId: string;
  /** 図鑑の項目が複数種をまとめているとき、モデルがどの種か */
  modelName?: string;
}

/** 図鑑の id → モデル */
export const FISH_MODELS: Readonly<Record<string, FishModel>> = {
  aji: { modelId: "aji" },
  seabass: { modelId: "seabass" },
  mebaru: { modelId: "mebaru" },
  kasago: { modelId: "kasago" },
  saba: { modelId: "saba" },
  tachiuo: { modelId: "tachiuo" },
  sawara: { modelId: "sawara" },
  kamasu: { modelId: "kamasu" },
  buri: { modelId: "buri" },
  hiramasa: { modelId: "hiramasa" },
  kihada: { modelId: "kihada" },
  magochi: { modelId: "magochi" },
  kurodai: { modelId: "kurodai" },
  madai: { modelId: "madai" },
  isaki: { modelId: "isaki" },
  shibudai: { modelId: "shibudai" },
  iwashi: { modelId: "katakuchi", modelName: "カタクチイワシ" },
};

export const FISH_MODEL_CREDIT = {
  label: "魚モデル: 魚モデル ギャラリー (CC0 1.0)",
  url: "https://cda-social.github.io/fish/gallery.html",
} as const;

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** public/fish-models/ 以下のファイルの URL（basePath 付き） */
export function fishModelAsset(path = ""): string {
  return `${BASE_PATH}/fish-models/${path}`;
}

export function fishThumbnailUrl(modelId: string): string {
  return fishModelAsset(`thumbs/${modelId}.webp`);
}
