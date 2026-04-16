"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, TrendingUp, Check, X, Trophy, RotateCcw } from "lucide-react";
import Link from "next/link";
import { LADDER, FORFEITS } from "@/data/ladder";
import { pick } from "@/lib/utils";

export default function LadderPage() {
  const [current, setCurrent] = useState(0); // next step to play (0-based index)
  const [forfeits, setForfeits] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const step = LADDER[current];
  const progress = useMemo(
    () => Math.round((current / LADDER.length) * 100),
    [current]
  );

  const accept = () => {
    if (current + 1 >= LADDER.length) {
      setCurrent(LADDER.length);
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };
  const decline = () => {
    setForfeits((f) => [...f, pick(FORFEITS)]);
  };
  const reset = () => {
    setCurrent(0);
    setForfeits([]);
    setDone(false);
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-24">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>
        <div className="mt-4">
          <div className="flex items-center gap-2 text-velvet-300">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Progression sensuelle
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Échelle du Désir
          </h1>
          <p className="mt-1 text-sm text-white/60">
            10 paliers du tendre au torride. Refuser = payer un gage à
            réclamer dans les 7 jours.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Palier {Math.min(current + 1, LADDER.length)} / {LADDER.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6 }}
              className="h-full rounded-full bg-gradient-to-r from-ember-500 via-velvet-500 to-midnight-500"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!done && step && (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 rounded-3xl p-0.5 bg-gradient-to-br from-ember-500 via-velvet-500 to-midnight-600 glow-velvet"
            >
              <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/95 p-7 sm:p-10 noise relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest">
                    Palier {step.step} · {step.title}
                  </div>
                  <div className="text-xs text-white/50">
                    {"🔥".repeat(step.intensity)}
                  </div>
                </div>
                <div className="mt-5 text-7xl sm:text-8xl">{step.icon}</div>
                <p className="mt-4 font-display text-2xl sm:text-3xl leading-snug font-medium">
                  {step.prompt}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={accept}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-5 py-3 text-sm hover:bg-emerald-500/30 transition"
                  >
                    <Check className="h-4 w-4" /> J&apos;accepte, on monte
                  </button>
                  <button
                    onClick={decline}
                    className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-200 px-5 py-3 text-sm hover:bg-red-500/25 transition"
                  >
                    <X className="h-4 w-4" /> Je passe (gage)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {done && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 glass-strong rounded-3xl p-8 text-center"
          >
            <Trophy className="mx-auto h-10 w-10 text-ember-400" />
            <div className="mt-3 font-display text-4xl font-bold">
              Sommet atteint 🔥
            </div>
            <p className="mt-2 text-white/70 max-w-prose mx-auto">
              Vous avez gravi les 10 paliers. À vous d&apos;improviser la suite.
            </p>
            <button
              onClick={reset}
              className="btn-hot mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
            >
              <RotateCcw className="h-4 w-4" /> Recommencer
            </button>
          </motion.div>
        )}

        {/* Forfeits */}
        {forfeits.length > 0 && (
          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-3">
              Gages à honorer ({forfeits.length})
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {forfeits.map((f, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-4 text-sm text-white/80 flex items-start gap-3"
                >
                  <span className="text-ember-400">•</span> {f}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
