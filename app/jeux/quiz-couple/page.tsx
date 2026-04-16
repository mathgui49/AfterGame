"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QUIZ_ITEMS } from "@/data/quiz";
import { shuffle } from "@/lib/utils";
import {
  ArrowLeft,
  HeartHandshake,
  RotateCcw,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";

type Mode = "idle" | "playing" | "done";

export default function QuizPage() {
  const [mode, setMode] = useState<Mode>("idle");
  const [deck, setDeck] = useState(() => shuffle(QUIZ_ITEMS).slice(0, 10));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<null | "right" | "wrong">(null);
  const [reveal, setReveal] = useState(false);

  const current = deck[index];

  const start = () => {
    setDeck(shuffle(QUIZ_ITEMS).slice(0, 10));
    setIndex(0);
    setScore(0);
    setAnswered(null);
    setReveal(false);
    setMode("playing");
  };

  const answer = (right: boolean) => {
    setAnswered(right ? "right" : "wrong");
    if (right) setScore((s) => s + 1);
  };

  const next = () => {
    setAnswered(null);
    setReveal(false);
    if (index + 1 >= deck.length) {
      setMode("done");
    } else {
      setIndex((i) => i + 1);
    }
  };

  useEffect(() => {
    setReveal(false);
  }, [index]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-6 pb-20">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>

        <div className="mt-4">
          <div className="flex items-center gap-2 text-velvet-300">
            <HeartHandshake className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Testez votre complicité
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Tu me connais ?
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Une manche = 10 questions tirées parmi {QUIZ_ITEMS.length}.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {mode === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 glass-strong rounded-3xl p-8 text-center"
            >
              <p className="text-white/80 max-w-prose mx-auto">
                Un·e lit la question à voix haute, l&apos;autre annonce sa
                réponse. Puis on révèle la vraie réponse : juste ou à côté ?
                Chaque bonne réponse = +1 point.
              </p>
              <button
                onClick={start}
                className="btn-hot mt-6 inline-flex rounded-full px-7 py-3.5 font-semibold"
              >
                Démarrer la manche
              </button>
            </motion.div>
          )}

          {mode === "playing" && current && (
            <motion.div
              key={`q-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8"
            >
              <div className="flex items-center justify-between text-xs text-white/50 uppercase tracking-widest">
                <span>
                  Question {index + 1} / {deck.length}
                </span>
                <span>Score {score}</span>
              </div>

              <div className="mt-4 glass-strong rounded-3xl p-7 sm:p-10 noise relative overflow-hidden">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {current.category}
                </div>
                <p className="mt-3 font-display text-2xl sm:text-3xl font-medium leading-snug">
                  {current.prompt}
                </p>

                {!reveal ? (
                  <button
                    onClick={() => setReveal(true)}
                    className="mt-8 rounded-full border border-white/15 px-5 py-2.5 text-sm hover:bg-white/5"
                  >
                    Révéler la vraie réponse
                  </button>
                ) : (
                  <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5 text-white/80">
                    💬 C&apos;est à celui / celle qui est interrogé·e de donner
                    la vraie réponse à voix haute.
                  </div>
                )}

                <div className="mt-6 flex gap-3 flex-wrap">
                  <button
                    onClick={() => answer(true)}
                    disabled={!!answered}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-5 py-2.5 text-sm hover:bg-emerald-500/30 transition disabled:opacity-40"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Bonne réponse
                  </button>
                  <button
                    onClick={() => answer(false)}
                    disabled={!!answered}
                    className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 px-5 py-2.5 text-sm hover:bg-red-500/30 transition disabled:opacity-40"
                  >
                    <XCircle className="h-4 w-4" /> À côté
                  </button>
                  {answered && (
                    <button
                      onClick={next}
                      className="btn-hot rounded-full px-6 py-2.5 text-sm font-semibold ml-auto"
                    >
                      {index + 1 === deck.length ? "Voir le score" : "Question suivante"}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {mode === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 glass-strong rounded-3xl p-10 text-center"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-velvet-300">
                Résultat
              </div>
              <div className="mt-2 font-display text-6xl sm:text-7xl font-bold">
                {score}
                <span className="text-white/40">/{deck.length}</span>
              </div>
              <p className="mt-4 text-white/70 max-w-prose mx-auto">
                {score >= 8
                  ? "Fusion totale ! Vous vous connaissez par cœur."
                  : score >= 5
                  ? "Belle complicité. Il reste encore des choses à découvrir 😉"
                  : "Le jeu ne fait que commencer. Vous avez plein de choses à (re)découvrir."}
              </p>
              <button
                onClick={start}
                className="btn-hot mt-6 inline-flex rounded-full px-6 py-3 font-semibold"
              >
                <RotateCcw className="h-4 w-4 mr-2" /> Refaire une manche
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
