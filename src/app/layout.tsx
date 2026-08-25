import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "釣行ナビ | 全国潮汐・タイドグラフ・海洋気象・釣果ダッシュボード",
  description:
    "全国50箇所以上の釣り場の潮汐（タイドグラフ・大潮/中潮・満干潮）、Open-Meteo海洋気象（波高・風速・海水温）、独自アルゴリズムによる釣行指数、魚種図鑑・仕掛けガイド、マイ釣果ログを完全無料で提供する釣り人専用ダッシュボード。",
  keywords: [
    "釣り",
    "タイドグラフ",
    "潮汐",
    "波の高さ",
    "風速",
    "海水温",
    "釣行指数",
    "アジング",
    "エギング",
    "ショアジギング",
    "釣果記録",
    "海釣り公園",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || process.env.GTM_ID;

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+dl:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-ocean-500 selection:text-white">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

