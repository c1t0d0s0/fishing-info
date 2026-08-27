"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Fish,
  Compass,
  BookOpen,
  Calendar,
  ShieldAlert,
  Menu,
  X,
  Sun,
  Moon,
  Waves,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme preference (default to light)
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  const navLinks = [
    { href: "/", label: "ダッシュボード", icon: Waves },
    { href: "/spots", label: "釣り場マップ", icon: Compass },
    { href: "/species", label: "魚種・仕掛け図鑑", icon: Fish },
    { href: "/forecast", label: "週間潮汐・海洋予報", icon: Calendar },
    { href: "/safety", label: "安全・ルール", icon: ShieldAlert },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-ocean-600 via-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Fish className="w-6 h-6 animate-float" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-ocean-700 via-sky-600 to-cyan-500 dark:from-ocean-400 dark:to-cyan-300 bg-clip-text text-transparent">
                釣行ナビ <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-ocean-100 dark:bg-ocean-950/60 text-ocean-700 dark:text-ocean-300 border border-ocean-200 dark:border-ocean-800 ml-1">Live</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium -mt-1 hidden sm:inline">
                全国潮汐・海洋気象・釣果ダッシュボード
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-ocean-50 dark:bg-ocean-950/50 text-ocean-600 dark:text-ocean-300 border border-ocean-200 dark:border-ocean-800/80 shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-ocean-600 dark:hover:text-ocean-400 hover:bg-slate-100/70 dark:hover:bg-slate-900/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-ocean-500" : "text-slate-400"}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Theme toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="テーマ切替"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニューを開く"
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-ocean-500 text-white shadow-md shadow-ocean-500/20"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"}`} />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
