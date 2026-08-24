export type TideType = "大潮" | "中潮" | "小潮" | "長潮" | "若潮";

export interface TideExtreme {
  time: string; // "HH:MM"
  type: "high" | "low"; // 満潮 or 干潮
  height: number; // cm
}

export interface TideHourlyPoint {
  time: string; // "HH:00"
  height: number; // cm
  rateOfChange?: number; // cm/hr
}

export interface DayTideInfo {
  date: string; // YYYY-MM-DD
  tideType: TideType;
  moonAge: number; // 月齢 (e.g. 14.5)
  moonPhase: number; // 0 to 1 (0: 新月, 0.5: 満月)
  moonPhaseName: string; // 新月, 上弦の月, 満月, 下弦の月
  moonPhaseIcon: string; // 🌑, 🌓, 🌕, 🌗
  sunrise: string; // "HH:MM"
  sunset: string; // "HH:MM"
  morningMazume: { start: string; end: string }; // 朝マズメ (日の出前後1時間)
  eveningMazume: { start: string; end: string }; // 夕マズメ (日の入り前後1時間)
  extremes: TideExtreme[]; // 満潮・干潮リスト
  hourlyPoints: TideHourlyPoint[]; // 24時間の潮位カーブ
}
