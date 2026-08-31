import Link from "next/link";
import { Fish, ShieldCheck, Heart, Waves, Compass, CloudSun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-ocean-600 to-cyan-400 flex items-center justify-center text-white shadow-sm">
                <Fish className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-ocean-700 to-cyan-600 dark:from-ocean-400 dark:to-cyan-300 bg-clip-text text-transparent">
                釣行ナビ (Fishing Info Dashboard)
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              日本全国の釣り人のための無料ダッシュボード。Open-Meteoオープンソース海洋気象データと精密タイドグラフ・月齢・釣行指数をリアルタイムにお届けします。
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>完全無料・登録不要・安心のプライバシー（APIキー不要・オープンデータ活用）</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              コンテンツ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-ocean-500" />
                  釣行ダッシュボード
                </Link>
              </li>
              <li>
                <Link href="/spots" className="text-slate-600 dark:text-slate-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-ocean-500" />
                  全国釣り場マップ
                </Link>
              </li>
              <li>
                <Link href="/species" className="text-slate-600 dark:text-slate-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors flex items-center gap-1.5">
                  <Fish className="w-3.5 h-3.5 text-ocean-500" />
                  魚種・仕掛け図鑑
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-slate-600 dark:text-slate-400 hover:text-ocean-600 dark:hover:text-ocean-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-ocean-500" />
                  釣りの安全・毒魚ガイド
                </Link>
              </li>
            </ul>
          </div>

          {/* Attribution & Safety */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              データソース & 免責
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal flex items-start gap-1.5">
              <CloudSun className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
              <span>
                気象・海洋予報データ:{" "}
                <a
                  href="https://open-meteo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean-600 dark:text-ocean-400 underline underline-offset-2 hover:opacity-80"
                >
                  Open-Meteo
                </a>{" "}
                (CC BY 4.0)
              </span>
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 leading-normal">
              ※本サイトの潮汐・気象情報は予測値です。航海用には使用できません。実際の釣行時は現地の天候急変や海難防止に十分留意し、必ずライフジャケットを着用してください。
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div>© {new Date().getFullYear()} c1t0d0s0  All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for all anglers across Japan.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
