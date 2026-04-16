"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { SettingsPanel } from "./SettingsPanel";
import { ProgressBanner } from "./ProgressBanner";

export function Header() {
  return (
    <>
      <ProgressBanner />
    <header className="sticky top-0 z-30 border-b border-white/5 backdrop-blur-xl bg-[#0d0513]/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 gap-3">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition">
            Accueil
          </Link>
          <Link href="/#jeux" className="hover:text-white transition">
            Jeux
          </Link>
          <Link href="/a-propos" className="hover:text-white transition">
            À propos
          </Link>
        </nav>
        <div className="flex items-center gap-1">
          <SettingsPanel />
          <Link
            href="/#jeux"
            className="btn-hot rounded-full px-4 py-2 text-xs sm:text-sm font-semibold no-select"
          >
            Jouer
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}
