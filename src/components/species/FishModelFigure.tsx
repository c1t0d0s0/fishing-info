"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "lucide-react";
import { FISH_MODELS, fishThumbnailUrl } from "@/lib/data/fishModels";
import FishModelCredit from "./FishModelCredit";

// three.js は 3D ビューアを開いたときにだけ読み込む
const FishModelViewer = dynamic(() => import("./FishModelViewer"), { ssr: false });

interface FishModelFigureProps {
  id: string;
  name: string;
}

export default function FishModelFigure({ id, name }: FishModelFigureProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const closeViewer = useCallback(() => setIsViewerOpen(false), []);

  const model = FISH_MODELS[id];
  if (!model) return null;
  const title = model.modelName ?? name;

  return (
    <figure className="mb-3.5">
      <button
        type="button"
        onClick={() => setIsViewerOpen(true)}
        className="group relative block w-full rounded-2xl bg-linear-to-b from-sky-50 to-slate-50 dark:from-slate-800/60 dark:to-slate-800/30 border border-slate-100 dark:border-slate-800 overflow-hidden"
        aria-label={`${title} を3Dで見る`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fishThumbnailUrl(model.modelId)}
          alt={title}
          width={640}
          height={320}
          loading="lazy"
          className="w-full h-auto aspect-2/1 object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-lg bg-white/80 dark:bg-slate-900/80 text-ocean-700 dark:text-ocean-300 border border-ocean-200 dark:border-ocean-800">
          <Box className="w-3 h-3" />
          3Dで見る
        </span>
      </button>
      <figcaption className="mt-1 flex justify-end gap-2 text-[10px] text-slate-400 leading-none">
        {model.modelName && <span>画像は{model.modelName}</span>}
        <FishModelCredit />
      </figcaption>
      {isViewerOpen && <FishModelViewer modelId={model.modelId} name={title} onClose={closeViewer} />}
    </figure>
  );
}
