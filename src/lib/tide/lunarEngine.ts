import { TideType } from "@/types/tide";

/**
 * Astronomical calculation for Moon Age (月齢), Phase and Tide Classification
 */

// Reference known New Moon: 2000-01-06 18:14 UTC (Julian Day: 2451550.26)
const SYNODIC_MONTH = 29.530588853;

export function getJulianDate(date: Date): number {
  const time = date.getTime();
  return time / 86400000 + 2440587.5;
}

/**
 * Calculate Moon Age (月齢) for a given date at standard JST noon (12:00 JST / 03:00 UTC)
 * Uses astronomical elongation between Moon and Sun to avoid secular epoch drift.
 */
export function calculateMoonAge(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  // Standard JST Noon (03:00 UTC)
  const noonJST = new Date(Date.UTC(y, m, d, 3, 0, 0));
  const jd = getJulianDate(noonJST);
  const T = (jd - 2451545.0) / 36525;

  const s = ((218.3164477 + 481267.88123421 * T - 0.0015786 * T * T) % 360 + 360) % 360;
  const h = ((280.4664567 + 36000.76982779 * T + 0.0003032 * T * T) % 360 + 360) % 360;
  
  // Moon-Sun elongation
  const elongation = ((s - h) % 360 + 360) % 360;
  const moonAge = (elongation / 360) * SYNODIC_MONTH;
  return Math.round(moonAge * 10) / 10;
}

export function getMoonPhaseInfo(moonAge: number): {
  phase: number; // 0 to 1
  name: string;
  icon: string;
} {
  const phase = moonAge / SYNODIC_MONTH;

  if (moonAge < 1.5 || moonAge >= 28.0) {
    return { phase, name: "新月 (大潮)", icon: "🌑" };
  } else if (moonAge >= 1.5 && moonAge < 6.5) {
    return { phase, name: "三日月 (中潮)", icon: "🌒" };
  } else if (moonAge >= 6.5 && moonAge < 9.5) {
    return { phase, name: "上弦の月 (小潮)", icon: "🌓" };
  } else if (moonAge >= 9.5 && moonAge < 11.5) {
    return { phase, name: "十日余の月 (長潮・若潮)", icon: "🌔" };
  } else if (moonAge >= 11.5 && moonAge < 13.5) {
    return { phase, name: "十三夜 (中潮)", icon: "🌔" };
  } else if (moonAge >= 13.5 && moonAge < 16.5) {
    return { phase, name: "満月 (大潮)", icon: "🌕" };
  } else if (moonAge >= 16.5 && moonAge < 21.5) {
    return { phase, name: "十六夜 (中潮)", icon: "🌖" };
  } else if (moonAge >= 21.5 && moonAge < 24.5) {
    return { phase, name: "下弦の月 (小潮)", icon: "🌗" };
  } else if (moonAge >= 24.5 && moonAge < 26.5) {
    return { phase, name: "二十六夜 (長潮・若潮)", icon: "🌘" };
  } else {
    return { phase, name: "有明月 (中潮)", icon: "🌘" };
  }
}

/**
 * Determine Japanese Tide Type (大潮, 中潮, 小潮, 長潮, 若潮) based on Japanese fishing calendar
 */
export function getTideType(moonAge: number): TideType {
  const age = Math.floor(moonAge);
  if ((age >= 0 && age <= 2) || (age >= 14 && age <= 17) || age >= 29) {
    return "大潮";
  } else if (
    (age >= 3 && age <= 6) ||
    (age >= 12 && age <= 13) ||
    (age >= 18 && age <= 21) ||
    (age >= 27 && age <= 28)
  ) {
    return "中潮";
  } else if ((age >= 7 && age <= 9) || (age >= 22 && age <= 24)) {
    return "小潮";
  } else if (age === 10 || age === 25) {
    return "長潮";
  } else if (age === 11 || age === 26) {
    return "若潮";
  } else {
    return "中潮";
  }
}

/**
 * Calculate approximate Sunrise & Sunset times in JST
 */
export function calculateSunTimes(
  date: Date,
  lat: number = 35.6895,
  lng: number = 139.6917
): { sunrise: string; sunset: string } {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor(
    (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Solar declination (radians)
  const declination = 0.4093 * Math.sin(((2 * Math.PI) / 365) * (dayOfYear - 81));
  const latRad = (lat * Math.PI) / 180;

  // Hour angle
  const cosH =
    (Math.sin((-0.833 * Math.PI) / 180) - Math.sin(latRad) * Math.sin(declination)) /
    (Math.cos(latRad) * Math.cos(declination));

  const clampedCosH = Math.min(1, Math.max(-1, cosH));
  const hourAngle = (Math.acos(clampedCosH) * 180) / Math.PI;

  // Solar noon in hours UTC
  const equationOfTime =
    9.87 * Math.sin((4 * Math.PI * (dayOfYear - 81)) / 365) -
    7.53 * Math.cos((2 * Math.PI * (dayOfYear - 81)) / 365) -
    1.5 * Math.sin((2 * Math.PI * (dayOfYear - 81)) / 365);
  const solarNoonUTC = 12 - equationOfTime / 60 - lng / 15;
  const solarNoonJST = solarNoonUTC + 9;

  const sunriseHours = solarNoonJST - hourAngle / 15;
  const sunsetHours = solarNoonJST + hourAngle / 15;

  const formatHourMin = (hrs: number): string => {
    let normalized = (hrs + 24) % 24;
    const h = Math.floor(normalized);
    const m = Math.floor((normalized - h) * 60);
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  };

  return {
    sunrise: formatHourMin(sunriseHours),
    sunset: formatHourMin(sunsetHours),
  };
}

/**
 * Calculate Mazume times (Golden fishing hours around sunrise & sunset)
 */
export function calculateMazumeTimes(
  sunrise: string,
  sunset: string
): {
  morningMazume: { start: string; end: string };
  eveningMazume: { start: string; end: string };
} {
  const addMinutes = (timeStr: string, minutes: number): string => {
    const [h, m] = timeStr.split(":").map(Number);
    let totalMinutes = h * 60 + m + minutes;
    if (totalMinutes < 0) totalMinutes += 24 * 60;
    totalMinutes %= 24 * 60;
    const resH = Math.floor(totalMinutes / 60);
    const resM = totalMinutes % 60;
    return `${resH.toString().padStart(2, "0")}:${resM.toString().padStart(2, "0")}`;
  };

  return {
    morningMazume: {
      start: addMinutes(sunrise, -45),
      end: addMinutes(sunrise, 45),
    },
    eveningMazume: {
      start: addMinutes(sunset, -45),
      end: addMinutes(sunset, 45),
    },
  };
}
