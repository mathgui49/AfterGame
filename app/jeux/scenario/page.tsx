"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCheck,
  Clock,
  RotateCcw,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LevelBadge } from "@/components/LevelBadge";
import { SCENARIOS, Scenario } from "@/data/scenarios";
import { useCouple } from "@/lib/couple";

type Mode = "pick" | "play" | "done";

export default function ScenarioPage() {
  const { config } = useCouple();
  const [mode, setMode] = useState<Mode>("pick");
  const [chosen, setChosen] = useState<Scenario | null>(null);
  const [step, setStep] = useState(0);

  const available = useMemo(
    () => SCENARIOS.filter((s) => config.heat.includes(s.level)),
    [config.heat]
  );

  const start = (s: Scenario) => {
    setChosen(s);
    setStep(0);
    setMode("play");
  };
  const next = () => {
    if (!chosen) return;
    if (step + 1 >= chosen.steps.length) {
      setMode("done");
    } else {
      setStep((s) => s + 1);
    }
  };
  const reset = () => {
    setChosen(null);
    setStep(0);
    setMode("pick");
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 pb-24">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>

        <div className="mt-4">
          <div className="flex items-center gap-2 text-velvet-300">
            <BookOpen className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Nuit thématique
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Mode Scénario
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Choisis une ambiance — 3 à 5 étapes qui racontent une mini-histoire.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {mode === "pick" && (
            <motion.div
              key="pick"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8"
            >
              {available.length === 0 ? (
                <div className="glass rounded-2xl p-6 text-center text-white/70">
                  Aucun scénario disponible pour ce niveau de chaleur. Élargis
                  dans les paramètres ⚙️.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {available.map((s, i) => (
                    <motion.button
                      key={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => start(s)}
                      className="group text-left"
                    >
                      <div
                        className={`rounded-3xl p-0.5 bg-gradient-to-br ${s.gradient} glow-velvet transition-transform group-hover:scale-[1.02]`}
                      >
                        <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/85 p-5 sm:p-6 h-full min-h-[220px] flex flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <div className="text-4xl">{s.emoji}</div>
                            <LevelBadge level={s.level} />
                          </div>
                          <div>
                            <div className="font-display text-2xl font-bold">
                              {s.title}
                            </div>
                            <div className="mt-1 text-sm text-white/60 leading-snug">
                              {s.subtitle}
                            </div>
                            <div className="mt-3 flex items-center gap-3 text-xs text-white/45">
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {s.duration}
                              </span>
                              <span>{s.steps.length} étapes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {mode === "play" && chosen && (
            <motion.div
              key={`play-${chosen.id}-${step}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8"
            >
              {/* progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>
                    Étape {step + 1} / {chosen.steps.length} ·{" "}
                    <span className="text-white/80">{chosen.title}</span>
                  </span>
                  <span>
                    {Math.round(((step + 1) / chosen.steps.length) * 100)}%
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    animate={{
                      width: `${((step + 1) / chosen.steps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`h-full rounded-full bg-gradient-to-r ${chosen.gradient}`}
                  />
                </div>
              </div>

              <div
                className={`rounded-3xl p-0.5 bg-gradient-to-br ${chosen.gradient} glow-velvet`}
              >
                <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/95 p-7 sm:p-10 noise relative overflow-hidden min-h-[360px] flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest">
                      {step + 1}. {chosen.steps[step].title}
                    </div>
                    <div className="text-4xl">{chosen.steps[step].icon}</div>
                  </div>
                  <p className="mt-6 font-display text-2xl sm:text-3xl leading-snug font-medium">
                    {chosen.steps[step].prompt}
                  </p>
                  {chosen.steps[step].hint && (
                    <p className="mt-3 text-sm text-white/55 italic">
                      {chosen.steps[step].hint}
                    </p>
                  )}
                  <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                    <button
                      onClick={reset}
                      className="text-xs text-white/50 hover:text-white transition"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={next}
                      className="btn-hot inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                    >
                      {step + 1 === chosen.steps.length ? (
                        <>
                          <CheckCheck className="h-4 w-4" /> Terminer
                        </>
                      ) : (
                        <>
                          Étape suivante <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {mode === "done" && chosen && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 glass-strong rounded-3xl p-10 text-center"
            >
              <div className="text-5xl">{chosen.emoji}</div>
              <div className="mt-3 font-display text-3xl sm:text-4xl font-bold">
                « {chosen.title} » terminé
              </div>
              <p className="mt-3 text-white/70 max-w-prose mx-auto">
                Restez ensemble, silencieusement, quelques minutes. Le reste
                s&apos;écrit hors des cartes.
              </p>
              <div className="mt-6 flex justify-center gap-3 flex-wrap">
                <button
                  onClick={reset}
                  className="btn-hot inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  <RotateCcw className="h-4 w-4" /> Choisir un autre scénario
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
