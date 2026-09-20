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
  weatherCode?: number; // WMO weather code (0~99)
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

  const wCode = input.weatherCode ?? 0;
  const precip = input.precipitation ?? 0;

  // Weather conditions analysis
  const isThunderstorm = wCode >= 95;
  const isSnow =
    wCode === 71 ||
    wCode === 73 ||
    wCode === 75 ||
    wCode === 77 ||
    wCode === 85 ||
    wCode === 86;
  const isHeavyRain =
    precip >= 5 ||
    wCode === 65 ||
    wCode === 82;
  const isRain =
    isHeavyRain ||
    precip > 0 ||
    (wCode >= 51 && wCode <= 67) ||
    (wCode >= 80 && wCode <= 82);

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

  // 3. Wind & Rain Factor (max 25: Wind up to 15, Rain/Precip up to 10)
  let windFactor = 15;
  if (input.windSpeed <= 2.5) {
    windFactor = 15; // ほぼ無風〜微風 (最適)
  } else if (input.windSpeed <= 4.5) {
    windFactor = 12; // 快適
  } else if (input.windSpeed <= 6.5) {
    windFactor = 7; // やや風あり・ラインスラッグ注意
  } else if (input.windSpeed <= 8.5) {
    windFactor = 2;
    safetyWarning = "強風注意: 風速7m以上の突風に注意してください。";
  } else {
    windFactor = 0;
    safetyWarning = "危険: 強風警報レベル。堤防への立ち入りは危険です。";
  }

  let rainFactor = 10;
  if (isThunderstorm) {
    rainFactor = 0;
    safetyWarning = "落雷危険: カーボンロッドは通電するため極めて危険です。釣行を即座に中止し車や建物へ避難してください。";
  } else if (precip >= 10) {
    rainFactor = 0;
    safetyWarning = "豪雨警戒: 視界不良および堤防・磯場の急激な足場悪化に警戒してください。";
  } else if (isHeavyRain) {
    rainFactor = 2;
  } else if (precip >= 1 || (wCode >= 61 && wCode <= 63)) {
    rainFactor = 5; // 本雨
  } else if (isRain) {
    rainFactor = 7; // 小雨・霧雨 (低気圧で魚の警戒心が薄れチャンスになることも)
  } else if (isSnow) {
    rainFactor = 4;
  } else {
    rainFactor = 10; // 晴れ・曇り (雨なし)
  }

  weatherScore = Math.max(0, Math.min(25, windFactor + rainFactor));

  // 4. Wave Height Factor (max 15)
  if (input.waveHeight <= 0.6) {
    waveScore = 15; // 穏やか・安全
  } else if (input.waveHeight <= 1.2) {
    waveScore = 13; // 適度なサラシあり (シーバス・ヒラスズキ・クロダイ等に好適)
  } else if (input.waveHeight <= 1.8) {
    waveScore = 7; // うねりあり・足元注意
  } else if (input.waveHeight <= 2.5) {
    waveScore = 2;
    if (!safetyWarning) {
      safetyWarning = "高波注意: 波高2m以上。波をかぶる危険のある場所は避けてください。";
    }
  } else {
    waveScore = 0;
    safetyWarning = "危険: 大波・高潮警報レベル。釣行を見合わせてください。";
  }

  const rawScore = tideScore + timeScore + weatherScore + waveScore;
  const score = Math.min(100, Math.max(0, rawScore));

  let grade: "S" | "A" | "B" | "C" | "D" = "C";
  let title = "通常コンディション";
  let advice = "潮やタナを意識したアプローチが釣果アップの鍵です。";

  if (safetyWarning?.includes("危険") || safetyWarning?.includes("中止")) {
    grade = "D";
    if (isThunderstorm) {
      title = "落雷危険・釣行中止推奨";
      advice = "雷雲や雷鳴が確認された場合は竿を畳み、直ちに車や頑丈な建物内に避難してください。";
    } else {
      title = "悪天候・釣行見合わせ推奨";
      advice = "風・波が非常に強く危険です。安全を最優先にし、釣行を控えてください。";
    }
  } else if (score >= 85) {
    grade = "S";
    if (isRain) {
      title = "雨天の好時合！爆釣チャンス";
      advice = "潮回り・時間帯が抜群です！雨による気圧低下や水面の濁りで魚の警戒心が薄れ大チャンス。レインウェア着用と足元の滑りに注意して攻めましょう。";
    } else {
      title = "爆釣大チャンス！";
      advice = "潮回り・時間帯（マズメ）・海況が揃った絶好のタイミング！積極的な釣行がおすすめです。";
    }
  } else if (score >= 70) {
    grade = "A";
    if (isRain) {
      title = "好釣果が期待できる雨天コンディション";
      advice = "潮の動きが良く魚の活性が高まるタイミングです。防水レインウェアを着用し、足元の滑りに十分注意しながら手返し良く探りましょう。";
    } else {
      title = "好釣果が期待できる好条件";
      advice = "魚の活性が高い時間帯です。潮の効いているポイントやベイトの回遊を狙いましょう。";
    }
  } else if (score >= 50) {
    grade = "B";
    if (isHeavyRain) {
      title = "雨天コンディション（足元・増水注意）";
      advice = "雨脚が強まっています。防水レインウェアを着用し、足元の滑りや急な増水に注意して無理のない釣行を心がけましょう。";
    } else if (isRain) {
      title = "小雨混じりの釣行コンディション";
      advice = "雨具の準備が必要です。雨による濁りや水温変化を意識し、アピール力の高いルアーやエサのローテーションが効果的です。";
    } else if (isSnow) {
      title = "降雪・防寒対策必須コンディション";
      advice = "冷え込みと足元の凍結に十分注意してください。極厚の防寒着や防水手袋を着用し、短時間勝負を意識しましょう。";
    } else {
      title = "安定した釣り日和";
      advice = "天候は安定しています。深場やストラクチャー周り、ワーム・エサのローテーションを試してみましょう。";
    }
  } else if (score >= 35) {
    grade = "C";
    if (isRain) {
      title = "雨天のタフコンディション";
      advice = "雨の影響や潮の緩さでややタフな状況です。体温を奪われないよう防寒・防水対策を行い、重めのリグや底狙いでじっくり探りましょう。";
    } else {
      title = "ややタフなコンディション";
      advice = "潮止まりや風の影響を受けやすい時間帯です。重めのリグや底狙いが有効です。";
    }
  } else {
    grade = "D";
    if (isRain) {
      title = "雨天・厳しいコンディション";
      advice = "活性が低く、雨中での長時間の粘りは体力を消耗します。無理をせず、天候や潮が上向くまで待機や場所移動を検討しましょう。";
    } else {
      title = "厳しい状況";
      advice = "活性が低く釣果が出にくいタイミングです。休憩や場所移動を検討しましょう。";
    }
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
