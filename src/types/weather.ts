export interface CurrentMarineWeather {
  time: string;
  temperature: number; // °C
  apparentTemperature: number; // °C
  precipitation: number; // mm
  weatherCode: number;
  weatherDescription: string;
  windSpeed: number; // m/s
  windDirection: number; // degrees
  windDirectionCompass: string;
  windGusts: number; // m/s
  waveHeight: number; // m
  waveDirection: number; // degrees
  wavePeriod: number; // s
  swellWaveHeight: number; // m
  swellWaveDirection: number; // degrees
  swellWavePeriod: number; // s
  seaWaterTemperature: number; // °C
  surfacePressure: number; // hPa
  uvIndex: number;
}

export interface HourlyForecastItem {
  time: string; // ISO or "HH:00"
  fullTime: string;
  temperature: number;
  weatherCode: number;
  weatherDescription: string;
  precipitation: number;
  precipitationProbability: number;
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  windGusts: number;
  waveHeight: number;
  wavePeriod: number;
  waveDirection: number;
  seaWaterTemperature: number;
  surfacePressure: number;
  fishingScore: number;
  tideHeight?: number;
  isMazume?: "morning" | "evening" | null;
}

export interface DailyForecastItem {
  date: string; // YYYY-MM-DD
  dayOfWeek: string;
  weatherCode: number;
  weatherDescription: string;
  tempMax: number;
  tempMin: number;
  precipitationSum: number;
  windSpeedMax: number;
  waveHeightMax: number;
  seaWaterTempAvg: number;
  tideName: string; // 大潮, 中潮, 小潮, etc.
  moonAge: number;
  moonPhaseName: string;
  sunrise: string;
  sunset: string;
  fishingScoreAvg: number;
}

export interface MarineWeatherResponse {
  current: CurrentMarineWeather;
  hourly: HourlyForecastItem[];
  daily: DailyForecastItem[];
  updatedAt: string;
}
