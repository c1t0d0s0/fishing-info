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
      return "bg-rose-600 bg-gradient-to-r from-rose-600 to-red-600 text-white border-rose-500 shadow-xs shadow-rose-500/30";
    case "中潮":
      return "bg-sky-600 bg-gradient-to-r from-sky-600 to-blue-600 text-white border-sky-500 shadow-xs shadow-sky-500/30";
    case "小潮":
      return "bg-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-xs shadow-emerald-500/30";
    case "長潮":
      return "bg-amber-600 bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-500 shadow-xs shadow-amber-500/30";
    case "若潮":
      return "bg-indigo-600 bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-500 shadow-xs shadow-indigo-500/30";
    default:
      return "bg-slate-700 bg-gradient-to-r from-slate-600 to-slate-700 text-white border-slate-500 shadow-xs";
  }
}

export function getTideDescription(tideType: string): string {
  switch (tideType) {
    case "大潮":
      return "干満差が最も大きく潮が良く動く好時合";
    case "中潮":
      return "潮の動きが安定し多くの魚種で釣りやすい";
    case "小潮":
      return "干満差が穏やかで底釣りや緩潮向き";
    case "長潮":
      return "干満差が最小で潮止まりが長く続く";
    case "若潮":
      return "長潮の翌日・再び潮が動き出す好転期";
    default:
      return "";
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
