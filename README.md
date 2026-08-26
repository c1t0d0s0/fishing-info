# 🎣 釣行ナビ (Fishing Info Dashboard)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Open-Meteo](https://img.shields.io/badge/Open--Meteo-API%20Free-0ea5e9)](https://open-meteo.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

日本全国の釣り人（初心者〜中上級者）のための、**完全無料（サーバー代・外部API代 0円）** で運用可能なモダン・フィッシングWebダッシュボードです。

潮汐（タイドグラフ・大潮/中潮・満干潮）、Open-Meteo海洋気象（波高・うねり・風向風速・海水温・気圧）、独自アルゴリズムによるリアルタイム釣行指数、全国釣り場マップ、魚種・仕掛け図鑑、安全ガイドをワンストップで提供します。

---

## ✨ 主な機能

### 1. 📊 釣行ダッシュボード (`/`)
- **Open-Meteo 海洋・気象データ連携**: APIキー登録不要で波高（m）、波周期、うねり、風速（m/s）、風向（16方位コンパス）、海水温、気圧、紫外線UV、降水量を取得。
- **高精度タイドグラフ (Tide Graph)**: 日本沿岸の潮汐調和定数に基づき、24時間の潮位推移、大潮・中潮・小潮・長潮・若潮の判定、満潮・干潮時刻と潮位、月齢・月相、日の出・日の入り・朝夕マズメ時間帯を完全描画。
- **釣行指数ゲージ (Fishing Index Score 0〜100点)**: 潮回り、潮の動き、マズメ時、風速、波高、気圧を総合評価し、現在のコンディション判定（RANK S〜D）と戦術アドバイス、強風・高波の安全警告を表示。
- **今日の狙い目魚種 & 攻略ワンポイント**: 選択した釣り場と現在の季節に応じたおすすめターゲットと推奨仕掛けをピックアップ。

### 2. 🗺️ 全国釣り場マップ & スポット詳細 (`/spots`, `/spots/[id]`)
- **Leaflet & OpenStreetMap インタラクティブマップ**: 全国50箇所以上の主要海釣り公園、漁港、防波堤、サーフ、地磯を収録。
- **設備・条件フィルター**: 「🅿️ 駐車場あり」「🚻 トイレ完備」「🛡️ 安全柵あり」「👨‍👩‍👧 ファミリー向け」「🆓 無料」で瞬時に絞り込み。
- **釣り場個別ページ**: ピンポイント座標のリアルタイム海況・タイドグラフ、水深、底質、アクセス、四季のターゲット魚種カレンダー、注意事項を掲載。

### 3. 🐟 魚種図鑑 & 仕掛け・タックル図解 (`/species`)
- **人気ターゲット30種以上**: アジ、メバル、シーバス、クロダイ、アオリイカ、ブリ/青物、タチウオ、シロギス、ヒラメ等の生息タナ、旬カレンダー、難易度、食味、調理法。
- **危険魚・毒魚アラート**: アイゴ、ハオコゼ、アカエイ、ゴンズイ、ヒョウモンダコ等の毒部位と応急手当（45℃温熱療法）ガイド。
- **仕掛け・タックル解説**: サビキ、ジグ単アジング、ライトショアジギング、エギング、ウキフカセ、チョイ投げのロッド・リール・ライン・針・アクション方法を図解。

### 4. 📅 7日間 潮汐・海洋気象マトリクス (`/forecast`)
- 今後1週間の大潮スケジュール、満干潮ピーク時刻、日の出・日の入り・マズメ時帯、波風トレンドを一目で確認。

### 5. 🦺 釣りの安全・毒魚・マナーガイド (`/safety`)
- 海難緊急通報 **「118番」**（海上保安庁）案内、ライフジャケット着用基準、釣行見合わせ気象基準（風速7m/波高1.8m）。
- 釣り場のゴミ完全持ち帰り、コマセ洗い流し等のマナー普及。

---

## 🛠️ 技術スタック & アーキテクチャ

| レイヤー | 技術 | 特徴・選定理由 |
|---|---|---|
| **フロントエンド** | Next.js 14 (App Router) | 高速なSSR/SSG、SEO最適化、モダンなルーティング |
| **言語** | TypeScript | 完全な型安全性と保守性 |
| **スタイリング** | Tailwind CSS + Lucide Icons | 軽量、レスポンシブ、ダーク/ライトモード対応 |
| **気象データ** | Open-Meteo Marine & Weather API | **APIキー不要・完全無料・利用制限フリー** |
| **潮汐・天文計算** | 自作純粋 TypeScript エンジン | 外部スクレイピング不要で高速・高精度な潮汐・月齢演算 |
| **マップ** | Leaflet + OpenStreetMap | **APIキー不要・完全無償**の地図描画 |

---

## 🚀 クイックスタート (ローカル起動)

### 必要要件
- Node.js 18.17.0 以上 (Node 20 / 22 / 24 推奨)
- npm, yarn, または pnpm

### インストールと起動手順

```bash
# 1. リポジトリのクローン
git clone https://github.com/your-username/fishing-info.git
cd fishing-info

# 2. 依存パッケージのインストール
npm install

# 3. 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとダッシュボードが表示されます。

### 本番ビルド
```bash
# プロダクションビルド
npm run build

# 本番サーバー起動
npm start
```

---

## 🌐 Webサーバー (Apache / Nginx / DocumentRoot) へのデプロイ

本プロジェクトは **静的HTMLエクスポート (SSG)** に対応しており、Node.js サーバーを起動することなく、一般的な Web サーバー（Apache, Nginx, レンタルサーバー等）のドキュメントルート配下に配置するだけで運用できます。

### ドキュメントルート配下の `fishing-info` ディレクトリとして公開する場合
デフォルトで `basePath: '/fishing-info'` および `output: 'export'` が設定されています。

1. ビルドを実行します：
   ```bash
   npm run build
   ```
2. ビルド完了後、生成された **`dist` ディレクトリの中身すべて（または `dist` を `fishing-info` にリネーム）** を Web サーバーの `DocumentRoot/fishing-info/` にコピーします。
   ```bash
   # 例: Apache の場合
   cp -r dist/* /var/www/html/fishing-info/
   ```
3. ブラウザで `https://your-domain.com/fishing-info/` にアクセスすれば完了です。

### ドメイン直下 (ルート `/`) で公開したい場合
環境変数 `BASE_PATH=""` を指定してビルドします：
```bash
BASE_PATH="" npm run build
```
生成された `dist` の中身を `DocumentRoot/` 直下に配置してください。


---

## 📁 ディレクトリ構成

```
fishing-info/
├── README.md                 # プロジェクトドキュメント
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
└── src/
    ├── app/                  # Next.js App Router ルート
    │   ├── layout.tsx        # 共通レイアウト (Header, Footer)
    │   ├── page.tsx          # メインダッシュボード (Top)
    │   ├── spots/            # 全国釣り場マップ & スポット一覧
    │   │   ├── page.tsx
    │   │   └── [id]/page.tsx # 釣り場個別詳細
    │   ├── species/          # 魚種図鑑 & 仕掛けガイド
    │   │   └── page.tsx
    │   ├── forecast/         # 7日間 潮汐・海洋予報
    │   │   └── page.tsx
    │   └── safety/           # 安全・マナー・毒魚ガイド
    │       └── page.tsx
    ├── components/
    │   ├── layout/           # Header, Footer, Navigation
    │   ├── dashboard/        # FishingScoreCard, TideGraphCard, MarineWeatherCard, HourlyForecast, TargetSpeciesCard, LocationSelector
    │   ├── map/              # SpotMap (Leaflet)
    │   └── species/          # SpeciesCard, RigGuideCard
    ├── lib/
    │   ├── api/              # Open-Meteo Marine/Weather API クライアント
    │   ├── tide/             # 潮汐推移・満干潮・月齢・日の出日の入り計算エンジン
    │   ├── score/            # 釣行指数（0〜100点）アルゴリズム
    │   ├── data/             # 全国50+釣り場、主要30+魚種、仕掛けマスターデータ
    │   └── utils/            # 日時・バッジ色・フォーマッター
    └── types/                # TypeScript 型定義 (weather, tide, spot, species)
```

---

## 📜 免責事項 (Disclaimer)

- 本サイトで提供する気象・潮汐データは Open-Meteo API および数理計算モデルに基づく予測値です。航海用や人命に関わる用途には使用できません。
- 実際の釣行時は現地の最新の天候変化、波浪警報、自治体や港湾管理者の指示を必ず確認し、ライフジャケットを着用の上、安全第一で行動してください。

---

## 📄 ライセンス

本プロジェクトは [MIT License](LICENSE) の下で公開されています。商用・非商用問わず自由にご利用・カスタマイズいただけます。
