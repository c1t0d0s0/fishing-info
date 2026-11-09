import { FISH_MODEL_CREDIT } from "@/lib/data/fishModels";

export default function FishModelCredit({ className = "" }: { className?: string }) {
  return (
    <a
      href={FISH_MODEL_CREDIT.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[10px] text-slate-400 hover:text-ocean-500 hover:underline ${className}`}
    >
      {FISH_MODEL_CREDIT.label}
    </a>
  );
}
