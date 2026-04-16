"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SPIN_CHALLENGES } from "@/data/spin";
import { pick } from "@/lib/utils";
import { ArrowLeft, Disc3 } from "lucide-react";
import Link from "next/link";

export default function SpinPage() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [challenge, setChallenge] = useState<string | null>(null);
  const lastRot = useRef(0);

  const spin = () => {
    if (spinning) return;
    setChallenge(null);
    setSpinning(true);
    const extra = 1800 + Math.random() * 1440; // 5-9 turns
    const newRot = lastRot.current + extra;
    lastRot.current = newRot;
    setRotation(newRot);
    window.setTimeout(() => {
      setSpinning(false);
      setChallenge(pick(SPIN_CHALLENGES));
    }, 2400);
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-20">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>
        <div className="mt-4">
          <div className="flex items-center gap-2 text-velvet-300">
            <Disc3 className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Hasard total
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Spin the Bottle
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Fais tourner la bouteille. {SPIN_CHALLENGES.length} défis possibles.
          </p>
        </div>

        {/* Wheel */}
        <div className="relative mt-12 mx-auto h-[320px] w-[320px] sm:h-[420px] sm:w-[420px]">
          {/* Plate */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-velvet-900/70 to-midnight-950 border border-white/10 shadow-inner" />
          <div className="absolute inset-6 rounded-full bg-[#0d0513]/90 border border-white/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                AfterGame
              </div>
              <div className="font-display text-2xl mt-1 shimmer-text">Hot Spin</div>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-10">
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-ember-500 drop-shadow-[0_0_8px_rgba(237,15,35,0.7)]" />
          </div>

          {/* Bottle */}
          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 2.3, ease: [0.17, 0.67, 0.35, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <svg
              width="80"
              height="280"
              viewBox="0 0 80 280"
              className="flame-filter"
            >
              <defs>
                <linearGradient id="bottle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ff6266" />
                  <stop offset="0.5" stopColor="#e3337a" />
                  <stop offset="1" stopColor="#6f3be6" />
                </linearGradient>
              </defs>
              <rect x="34" y="8" width="12" height="34" rx="3" fill="url(#bottle)" />
              <path
                d="M30 42 L50 42 L56 80 Q62 110 62 160 L62 250 Q62 270 40 270 Q18 270 18 250 L18 160 Q18 110 24 80 Z"
                fill="url(#bottle)"
              />
              <rect x="26" y="160" width="28" height="40" fill="rgba(255,255,255,0.12)" rx="4" />
            </svg>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={spin}
            disabled={spinning}
            className="btn-hot rounded-full px-8 py-4 text-base font-semibold disabled:opacity-60"
          >
            {spinning ? "Ça tourne..." : "Faire tourner"}
          </button>
        </div>

        {challenge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 glass-strong rounded-3xl p-6 sm:p-8 noise relative overflow-hidden"
          >
            <div className="text-xs uppercase tracking-widest text-white/50">
              La bouteille a parlé
            </div>
            <p className="mt-2 font-display text-2xl sm:text-3xl leading-snug font-medium">
              {challenge}
            </p>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  );
}
