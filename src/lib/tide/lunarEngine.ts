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
 * High-precision New Moon (朔) Julian Ephemeris Day calculation
 * Reference: Jean Meeus, "Astronomical Algorithms", Chapter 49 (Phases of the Moon)
 */
export function getNewMoonJd(k: number): number {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;

  let jde =
    2451550.09765 +
    29.530588853 * k +
    0.0001337 * T2 -
    0.000000150 * T3 +
    0.00000000073 * T4;

  const deg2rad = Math.PI / 180;

  // Sun's mean anomaly
  const M = (2.5534 + 29.10535669 * k - 0.0000218 * T2 - 0.00000011 * T3) * deg2rad;
  // Moon's mean anomaly
  const Mp =
    (201.5643 +
      385.81693528 * k +
      0.0107438 * T2 +
      0.00001239 * T3 -
      0.000000058 * T4) * deg2rad;
  // Moon's argument of latitude
  const F = (160.7108 + 390.67050274 * k - 0.0016341 * T2 - 0.00000227 * T3) * deg2rad;
  const E = 1 - 0.002516 * T - 0.0000074 * T2;

  // Periodic perturbations (principal periodic terms)
  jde += -0.40720 * Math.sin(Mp);
  jde += 0.17241 * E * Math.sin(M);
  jde += 0.01608 * Math.sin(2 * Mp);
  jde += 0.01039 * Math.sin(2 * F);
  jde += 0.00739 * E * Math.sin(Mp - M);
  jde += -0.00514 * E * Math.sin(Mp + M);
  jde += 0.00208 * E * E * Math.sin(2 * M);
  jde += -0.00111 * Math.sin(Mp - 2 * F);
  jde += -0.00057 * Math.sin(Mp + 2 * F);
  jde += 0.00056 * E * Math.sin(2 * Mp + M);
  jde += -0.00042 * Math.sin(3 * Mp);
  jde += 0.00042 * E * Math.sin(M + 2 * F);
  jde += 0.00038 * E * Math.sin(M - 2 * F);
  jde += -0.00024 * E * Math.sin(2 * Mp - M);

  return jde;
}

/**
 * Find the Julian Day of the most recent New Moon prior to or on the given date/time
 */
export function getPrecedingNewMoon(targetDate: Date): number {
  const y = targetDate.getFullYear();
  const m = targetDate.getMonth() + 1;
  const approxK = Math.round((y + (m - 1) / 12 - 2000.0) * 12.36853086);

  const targetJd = getJulianDate(targetDate);
  let bestJd = -1;

  for (let offset = -3; offset <= 3; offset++) {
    const k = approxK + offset;
    const nmJd = getNewMoonJd(k);
    if (nmJd <= targetJd) {
      if (bestJd === -1 || nmJd > bestJd) {
        bestJd = nmJd;
      }
    }
  }
  return bestJd;
}

/**
 * Calculate NAOJ-standard Moon Age (正午月齢) for a given date at JST noon (12:00 JST / 03:00 UTC)
 */
export function calculateMoonAge(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const noonJST = new Date(Date.UTC(y, m, d, 3, 0, 0));
  const noonJd = getJulianDate(noonJST);

  const nmJd = getPrecedingNewMoon(noonJST);
  const age = noonJd - nmJd;
  return Math.round(age * 10) / 10;
}

/**
 * Calculate Japanese lunar calendar day (旧暦日, 1-30)
 * The calendar day on which the astronomical New Moon occurs (JST) is Lunar Day 1.
 */
export function getLunarDay(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();

  // Reference at JST noon
  const noonJST = new Date(Date.UTC(y, m, d, 3, 0, 0));
  const nmJd = getPrecedingNewMoon(noonJST);
  const nmTime = (nmJd - 2440587.5) * 86400000;

  // New Moon date in JST (UTC + 9 hours)
  const nmJST = new Date(nmTime + 9 * 3600000);
  const nmYear = nmJST.getUTCFullYear();
  const nmMonth = nmJST.getUTCMonth();
  const nmDay = nmJST.getUTCDate();
  const nmStartDayJST = new Date(Date.UTC(nmYear, nmMonth, nmDay, 0, 0, 0));

  const currentDayJST = new Date(Date.UTC(y, m, d, 0, 0, 0));
  const diffDays = Math.round((currentDayJST.getTime() - nmStartDayJST.getTime()) / 86400000);

  return diffDays + 1; // 1-indexed (Day of new moon = 1)
}

/**
 * Determine Japanese Tide Type (大潮, 中潮, 小潮, 長潮, 若潮)
 * Based on the standard 15-day / 30-day lunar cycle widely used in Japan (釣割, 潮見表, タイドグラフBI).
 *
 * Cycle specification:
 * - 大潮 (Spring tide): Lunar days 1, 2, 14, 15, 16, 17, 29, 30 (4 days around New Moon, 4 days around Full Moon)
 * - 中潮 (Medium tide): Lunar days 3, 4, 5, 6 (after New Moon), 12, 13 (before Full Moon),
 *                      18, 19, 20, 21 (after Full Moon), 27, 28 (before New Moon)
 * - 小潮 (Neap tide):   Lunar days 7, 8, 9 (1st quarter), 22, 23, 24 (last quarter)
 * - 長潮 (Nagashio):   Lunar days 10, 25 (1 day each, minimum tidal movement)
 * - 若潮 (Wakashio):   Lunar days 11, 26 (1 day each, turning point where tide begins to rejuvenate)
 */
export function getTideType(dateOrMoonAge: Date | number, fallbackDate?: Date): TideType {
  if (dateOrMoonAge instanceof Date) {
    const lunarDay = getLunarDay(dateOrMoonAge);
    let d = ((lunarDay - 1) % 30) + 1;
    if (d <= 0) d += 30;

    if (d === 1 || d === 2 || d === 14 || d === 15 || d === 16 || d === 17 || d === 29 || d === 30) {
      return "大潮";
    } else if (
      (d >= 3 && d <= 6) ||
      d === 12 ||
      d === 13 ||
      (d >= 18 && d <= 21) ||
      d === 27 ||
      d === 28
    ) {
      return "中潮";
    } else if ((d >= 7 && d <= 9) || (d >= 22 && d <= 24)) {
      return "小潮";
    } else if (d === 10 || d === 25) {
      return "長潮";
    } else if (d === 11 || d === 26) {
      return "若潮";
    }
    return "中潮";
  }

  if (fallbackDate instanceof Date) {
    return getTideType(fallbackDate);
  }

  // Fallback when only continuous moonAge (0 ~ 29.53) is provided:
  // Use robust half-open interval boundaries centered around typical age points
  const age = ((dateOrMoonAge % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;

  if (age >= 28.5 || age < 2.5 || (age >= 13.5 && age < 17.5)) {
    return "大潮";
  } else if (
    (age >= 2.5 && age < 6.5) ||
    (age >= 11.5 && age < 13.5) ||
    (age >= 17.5 && age < 21.5) ||
    (age >= 26.5 && age < 28.5)
  ) {
    return "中潮";
  } else if ((age >= 6.5 && age < 9.5) || (age >= 21.5 && age < 24.5)) {
    return "小潮";
  } else if ((age >= 9.5 && age < 10.5) || (age >= 24.5 && age < 25.5)) {
    return "長潮";
  } else if ((age >= 10.5 && age < 11.5) || (age >= 25.5 && age < 26.5)) {
    return "若潮";
  } else {
    return "中潮";
  }
}

export function getMoonPhaseInfo(
  moonAge: number,
  tideType?: TideType
): {
  phase: number; // 0 to 1
  name: string;
  icon: string;
} {
  const phase = moonAge / SYNODIC_MONTH;
  const tideLabel = tideType ? ` (${tideType})` : "";

  if (moonAge < 1.5 || moonAge >= 28.5) {
    return { phase, name: `新月${tideLabel}`, icon: "🌑" };
  } else if (moonAge >= 1.5 && moonAge < 6.5) {
    return { phase, name: `三日月${tideLabel}`, icon: "🌒" };
  } else if (moonAge >= 6.5 && moonAge < 9.5) {
    return { phase, name: `上弦の月${tideLabel}`, icon: "🌓" };
  } else if (moonAge >= 9.5 && moonAge < 11.5) {
    return { phase, name: `十日余の月${tideLabel}`, icon: "🌔" };
  } else if (moonAge >= 11.5 && moonAge < 13.5) {
    return { phase, name: `十三夜${tideLabel}`, icon: "🌔" };
  } else if (moonAge >= 13.5 && moonAge < 16.5) {
    return { phase, name: `満月${tideLabel}`, icon: "🌕" };
  } else if (moonAge >= 16.5 && moonAge < 21.5) {
    return { phase, name: `十六夜${tideLabel}`, icon: "🌖" };
  } else if (moonAge >= 21.5 && moonAge < 24.5) {
    return { phase, name: `下弦の月${tideLabel}`, icon: "🌗" };
  } else if (moonAge >= 24.5 && moonAge < 26.5) {
    return { phase, name: `二十六夜${tideLabel}`, icon: "🌘" };
  } else {
    return { phase, name: `有明月${tideLabel}`, icon: "🌘" };
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
