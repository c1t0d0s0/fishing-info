import { DayTideInfo, TideExtreme, TideHourlyPoint } from "@/types/tide";
import {
  calculateMazumeTimes,
  calculateMoonAge,
  getMoonPhaseInfo,
  calculateSunTimes,
  getTideType,
} from "./lunarEngine";
import { JMA_TIDE_STATIONS, TideHarmonicStation } from "./jmaStations";

/**
 * Astronomical Harmonic Tide Engine for Japanese Coastal Waters
 * Based on Japan Meteorological Agency (JMA / 気象庁) harmonic constants and
 * classical tidal harmonic constituent analysis.
 */

function getJulianDate(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

function mod360(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

/**
 * Find nearest JMA observation station based on coordinates
 */
export function findNearestTideStation(
  lat: number,
  lng: number
): { station: TideHarmonicStation; distanceKm: number } {
  let nearest = JMA_TIDE_STATIONS[0];
  let minDistanceSq = Infinity;

  for (const stn of JMA_TIDE_STATIONS) {
    const dLat = (stn.lat - lat) * 111.0;
    const dLng = (stn.lng - lng) * 91.0;
    const distSq = dLat * dLat + dLng * dLng;
    if (distSq < minDistanceSq) {
      minDistanceSq = distSq;
      nearest = stn;
    }
  }

  return {
    station: nearest,
    distanceKm: Math.sqrt(minDistanceSq),
  };
}

/**
 * Calculate water level (cm) at a specific JST hour on a given date and coordinates
 */
export function calculateTideHeightAt(
  date: Date,
  jstHourDecimal: number,
  lat: number = 35.6895,
  lng: number = 139.6917,
  round: boolean = true
): number {
  const { station } = findNearestTideStation(lat, lng);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const jstMinutes = (jstHourDecimal % 1) * 60;
  const jstSecs = (jstMinutes % 1) * 60;
  const jstIntHour = Math.floor(jstHourDecimal);

  // UTC Date corresponding to target JST hour (JST = UTC + 9)
  const utcDate = new Date(
    Date.UTC(
      year,
      month,
      day,
      jstIntHour - 9,
      Math.floor(jstMinutes),
      Math.floor(jstSecs)
    )
  );

  const jd = getJulianDate(utcDate);
  const T = (jd - 2451545.0) / 36525; // Julian centuries from J2000.0
  const utHours =
    utcDate.getUTCHours() +
    utcDate.getUTCMinutes() / 60 +
    utcDate.getUTCSeconds() / 3600;

  // Mean astronomical longitudes (degrees)
  const s = mod360(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T);
  const h = mod360(280.4664567 + 36000.76982779 * T + 0.0003032 * T * T);
  const p = mod360(83.3532465 + 4069.0137287 * T - 0.0103200 * T * T);
  const N = mod360(125.0445222 - 1934.1362608 * T + 0.0020708 * T * T);

  const rad = Math.PI / 180;
  const Nrad = N * rad;

  // Nodal factors (f) and nodal angles (u)
  const f_M2 = 1.000 - 0.0373 * Math.cos(Nrad);
  const u_M2 = -2.14 * Math.sin(Nrad);
  const f_S2 = 1.0;
  const u_S2 = 0;
  const f_K1 = 1.006 + 0.1150 * Math.cos(Nrad);
  const u_K1 = -8.86 * Math.sin(Nrad);
  const f_O1 = 1.0089 + 0.1871 * Math.cos(Nrad);
  const u_O1 = 10.80 * Math.sin(Nrad);

  const f_N2 = f_M2;
  const u_N2 = u_M2;
  const f_K2 = 1.0241 + 0.2863 * Math.cos(Nrad);
  const u_K2 = -17.74 * Math.sin(Nrad);
  const f_P1 = 1.0;
  const u_P1 = 0;
  const f_Q1 = f_O1;
  const u_Q1 = u_O1;

  // Astronomical arguments (V) referenced to 135°E (JST meridian):
  // For species m constituent: V_jst = V_greenwich + m * 135°
  const tau = 15 * utHours + h - s;
  const V_M2 = 2 * tau + 270;
  const V_S2 = 30 * utHours + 270;
  const V_K1 = 15 * utHours + h + 90 + 135;
  const V_O1 = 15 * utHours + h - 2 * s - 90 + 135;
  const V_N2 = 2 * tau - s + p + 270;
  const V_K2 = 30 * utHours + 2 * h + 270;
  const V_P1 = 15 * utHours - h + 90 + 135;
  const V_Q1 = 15 * utHours + h - 3 * s + p - 90 + 135;

  // Derived minor constituents
  const n2Amp = station.m2.amp * 0.20;
  const n2Lag = mod360(station.m2.lag - 20);
  const k2Amp = station.s2.amp * 0.27;
  const k2Lag = station.s2.lag;
  const p1Amp = station.k1.amp * 0.33;
  const p1Lag = station.k1.lag;
  const q1Amp = station.o1.amp * 0.20;
  const q1Lag = station.o1.lag;

  const constituents = [
    { f: f_M2, H: station.m2.amp, V: V_M2, u: u_M2, kappa: station.m2.lag },
    { f: f_S2, H: station.s2.amp, V: V_S2, u: u_S2, kappa: station.s2.lag },
    { f: f_K1, H: station.k1.amp, V: V_K1, u: u_K1, kappa: station.k1.lag },
    { f: f_O1, H: station.o1.amp, V: V_O1, u: u_O1, kappa: station.o1.lag },
    { f: f_N2, H: n2Amp, V: V_N2, u: u_N2, kappa: n2Lag },
    { f: f_K2, H: k2Amp, V: V_K2, u: u_K2, kappa: k2Lag },
    { f: f_P1, H: p1Amp, V: V_P1, u: u_P1, kappa: p1Lag },
    { f: f_Q1, H: q1Amp, V: V_Q1, u: u_Q1, kappa: q1Lag },
  ];

  let total = station.z0;
  for (const c of constituents) {
    const angle = (c.V + c.u - c.kappa) * rad;
    total += c.f * c.H * Math.cos(angle);
  }

  const height = Math.max(0, total);
  return round ? Math.round(height) : height;
}

/**
 * Generate full 24-hour day tide info including highs/lows and hourly points
 */
export function generateDayTideInfo(
  date: Date,
  lat: number = 35.6895,
  lng: number = 139.6917
): DayTideInfo {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const d = date.getDate().toString().padStart(2, "0");
  const dateStr = `${y}-${m}-${d}`;

  const moonAge = calculateMoonAge(date);
  const moonPhaseInfo = getMoonPhaseInfo(moonAge);
  const tideType = getTideType(moonAge);
  const sunTimes = calculateSunTimes(date, lat, lng);
  const mazumeTimes = calculateMazumeTimes(sunTimes.sunrise, sunTimes.sunset);

  // Generate hourly points (00:00 to 24:00)
  const hourlyHeights: number[] = [];
  for (let h = 0; h <= 24; h++) {
    hourlyHeights.push(calculateTideHeightAt(date, h, lat, lng, true));
  }

  const hourlyPoints: TideHourlyPoint[] = [];
  for (let h = 0; h <= 24; h++) {
    const hourLabel = `${h.toString().padStart(2, "0")}:00`;
    const prevH = h > 0 ? hourlyHeights[h - 1] : hourlyHeights[0];
    const nextH = h < 24 ? hourlyHeights[h + 1] : hourlyHeights[24];
    const rateOfChange = Math.round(((nextH - prevH) / (h === 0 || h === 24 ? 1 : 2)) * 10) / 10;

    hourlyPoints.push({
      time: hourLabel,
      height: hourlyHeights[h],
      rateOfChange,
    });
  }

  // Find continuous high and low tide extremes with 1-minute step across the day
  const STEP = 1 / 60; // 1 minute
  const rawPoints: { hour: number; height: number }[] = [];
  for (let t = -0.3; t <= 24.3; t += STEP) {
    rawPoints.push({
      hour: t,
      height: calculateTideHeightAt(date, t, lat, lng, false),
    });
  }

  const extremes: TideExtreme[] = [];
  for (let i = 1; i < rawPoints.length - 1; i++) {
    const prev = rawPoints[i - 1].height;
    const curr = rawPoints[i].height;
    const next = rawPoints[i + 1].height;

    if (curr > prev && curr >= next) {
      // Local maximum -> High Tide (満潮)
      const h = Math.floor(rawPoints[i].hour);
      const min = Math.round((rawPoints[i].hour - h) * 60);
      if (h >= 0 && h < 24) {
        extremes.push({
          time: `${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`,
          type: "high",
          height: Math.round(curr),
        });
      }
    } else if (curr < prev && curr <= next) {
      // Local minimum -> Low Tide (干潮)
      const h = Math.floor(rawPoints[i].hour);
      const min = Math.round((rawPoints[i].hour - h) * 60);
      if (h >= 0 && h < 24) {
        extremes.push({
          time: `${h.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`,
          type: "low",
          height: Math.round(curr),
        });
      }
    }
  }

  // Filter out adjacent duplicate extremes within 60 minutes
  const filteredExtremes: TideExtreme[] = [];
  for (const ext of extremes) {
    const [h, min] = ext.time.split(":").map(Number);
    const totalMin = h * 60 + min;
    const isTooClose = filteredExtremes.some((existing) => {
      const [eh, em] = existing.time.split(":").map(Number);
      const eMin = eh * 60 + em;
      return Math.abs(totalMin - eMin) < 60 && existing.type === ext.type;
    });
    if (!isTooClose) {
      filteredExtremes.push(ext);
    }
  }

  return {
    date: dateStr,
    tideType,
    moonAge,
    moonPhase: moonPhaseInfo.phase,
    moonPhaseName: moonPhaseInfo.name,
    moonPhaseIcon: moonPhaseInfo.icon,
    sunrise: sunTimes.sunrise,
    sunset: sunTimes.sunset,
    morningMazume: mazumeTimes.morningMazume,
    eveningMazume: mazumeTimes.eveningMazume,
    extremes: filteredExtremes,
    hourlyPoints,
  };
}
