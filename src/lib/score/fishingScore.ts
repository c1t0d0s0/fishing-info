import { TideType } from "@/types/tide";

export interface FishingScoreResult {
  score: number; // 0 to 100
  grade: "S" | "A" | "B" | "C" | "D";
  title: string;
  advice: string;
  breakdown: {
    tideScore: number; // max 30
    timeScore: number; // max 30
    weatherScore: number; // max 25
    waveScore: number; // max 15
  };
  safetyWarning?: string;
}

interface ScoreInput {
  hour: number; // 0 to 23
  tideType: TideType;
  isMazume?: "morning" | "evening" | null;
  windSpeed: number; // m/s
  waveHeight: number; // m
  precipitation?: number; // mm
  isTideMoving?: boolean; // 潮が動いている時間帯か
}

/**
 * Calculate multi-factor Fishing Index Score (0-100)
 */
export function calculateFishingScore(input: ScoreInput): FishingScoreResult {
  let tideScore = 0;
  let timeScore = 15;
  let weatherScore = 20;
  let waveScore = 15;
  let safetyWarning: string | undefined;

  // 1. Tide Type Factor (max 20)
  switch (input.tideType) {
    case "大潮":
      tideScore += 20;
      break;
    case "中潮":
      tideScore += 17;
      break;
    case "若潮":
      tideScore += 14;
      break;
    case "小潮":
      tideScore += 10;
      break;
    case "長潮":
      tideScore += 6;
      break;
  }

  // Tide movement (max 10)
  if (input.isTideMoving !== false) {
    tideScore += 10;
  } else {
    tideScore += 2;
  }

  // 2. Time Factor (Mazume / Night / Day) (max 30)
  if (input.isMazume === "morning") {
    timeScore = 30; // 朝マズメ: 最大ボーナス
  } else if (input.isMazume === "evening") {
    timeScore = 28; // 夕マズメ
  } else if (input.hour >= 20 || input.hour <= 4) {
    timeScore = 20; // ナイトゲーム (アジング・メバリング・タチウオ等)
  } else if ((input.hour >= 6 && input.hour <= 9) || (input.hour >= 15 && input.hour <= 18)) {
    timeScore = 18;
  } else {
    timeScore = 12; // 日中のタフタイム
  }

  // 3. Wind & Rain Factor (max 25)
  if (input.windSpeed <= 2.5) {
    weatherScore = 25; // ほぼ無風〜微風 (最適)
  } else if (input.windSpeed <= 4.5) {
    weatherScore = 20; // 快適
  } else if (input.windSpeed <= 6.5) {
    weatherScore = 12; // やや風あり・ラインスラッグ注意
  } else if (input.windSpeed <= 8.5) {
    weatherScore = 5;
    safetyWarning = "強風注意: 風速7m以上の突風に注意してください。";
  } else {
    weatherScore = 0;
    safetyWarning = "危険: 強風警報レベル。堤防への立ち入りは危険です。";
  }

  if (input.precipitation && input.precipitation > 5) {
    weatherScore = Math.max(0, weatherScore - 8);
  }

  // 4. Wave Height Factor (max 15)
  if (input.waveHeight <= 0.6) {
    waveScore = 15; // 穏やか・安全
  } else if (input.waveHeight <= 1.2) {
    waveScore = 13; // 適度なサラシあり (シーバス・ヒラスズキ・クロダイ等に好適)
  } else if (input.waveHeight <= 1.8) {
    waveScore = 7; // うねりあり・足元注意
  } else if (input.waveHeight <= 2.5) {
    waveScore = 2;
    safetyWarning = "高波注意: 波高2m以上。波をかぶる危険のある場所は避けてください。";
  } else {
    waveScore = 0;
    safetyWarning = "危険: 大波・高潮警報レベル。釣行を見合わせてください。";
  }

  const rawScore = tideScore + timeScore + weatherScore + waveScore;
  const score = Math.min(100, Math.max(0, rawScore));

  let grade: "S" | "A" | "B" | "C" | "D" = "C";
  let title = "通常コンディション";
  let advice = "潮やタナを意識したアプローチが釣果アップの鍵です。";

  if (safetyWarning?.includes("危険")) {
    grade = "D";
    title = "悪天候・釣行見合わせ推奨";
    advice = "風・波が非常に強く危険です。安全を最優先にし、釣行を控えてください。";
  } else if (score >= 85) {
    grade = "S";
    title = "爆釣大チャンス！";
    advice = "潮回り・時間帯（マズメ）・海況が揃った絶好のタイミング！積極的な釣行がおすすめです。";
  } else if (score >= 70) {
    grade = "A";
    title = "好釣果が期待できる好条件";
    advice = "魚の活性が高い時間帯です。潮の効いているポイントやベイトの回遊を狙いましょう。";
  } else if (score >= 50) {
    grade = "B";
    title = "安定した釣り日和";
    advice = "天候は良好です。深場やストラクチャー周り、ワーム・エサのローテーションを試してみましょう。";
  } else if (score >= 35) {
    grade = "C";
    title = "ややタフなコンディション";
    advice = "潮止まりや風の影響を受けやすい時間帯です。重めのリグや底狙いが有効です。";
  } else {
    grade = "D";
    title = "厳しい状況";
    advice = "活性が低く釣果が出にくいタイミングです。休憩や場所移動を検討しましょう。";
  }

  return {
    score,
    grade,
    title,
    advice,
    breakdown: {
      tideScore,
      timeScore,
      weatherScore,
      waveScore,
    },
    safetyWarning,
  };
}
