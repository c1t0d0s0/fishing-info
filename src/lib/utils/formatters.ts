export function formatDateJp(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const m = d.getMonth() + 1;
    const day = d.getDate();
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const dw = days[d.getDay()];
    return `${m}月${day}日(${dw})`;
  } catch {
    return dateStr;
  }
}

export function formatDateTimeJp(isoStr: string): string {
  try {
    const d = new Date(isoStr);
    const m = d.getMonth() + 1;
    const day = d.getDate();
    const h = d.getHours().toString().padStart(2, "0");
    const min = d.getMinutes().toString().padStart(2, "0");
    return `${m}月${day}日 ${h}:${min}`;
  } catch {
    return isoStr;
  }
}

export function getTideBadgeColor(tideType: string): string {
  switch (tideType) {
    case "大潮":
      return "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30";
    case "中潮":
      return "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30";
    case "小潮":
      return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    case "長潮":
      return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30";
    case "若潮":
      return "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30";
    default:
      return "bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30";
  }
}

export function getScoreGradeColor(grade: string): string {
  switch (grade) {
    case "S":
      return "from-amber-400 via-rose-500 to-red-500 text-white";
    case "A":
      return "from-emerald-400 to-teal-600 text-white";
    case "B":
      return "from-sky-400 to-blue-600 text-white";
    case "C":
      return "from-slate-400 to-slate-600 text-white";
    case "D":
      return "from-red-500 to-rose-700 text-white";
    default:
      return "from-sky-400 to-blue-600 text-white";
  }
}
