"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TurnBar } from "@/components/TurnBar";
import { TDItem, TDLevel, TRUTHS, DARES } from "@/data/truthOrDare";
import { HeatLevel, pickLevel, useCouple } from "@/lib/couple";
import { useProgressTick } from "@/lib/progressTick";
import { pick } from "@/lib/utils";
import { ArrowLeft, Flame, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";

function heatToTD(l: HeatLevel): TDLevel {
  return l === 1 ? "soft" : l === 2 ? "hot" : "extreme";
}

export default function TruthOrDarePage() {
  const { config } = useCouple();
  const tick = useProgressTick();
  const [choice, setChoice] = useState<"truth" | "dare" | null>(null);
  const [item, setItem] = useState<TDItem | null>(null);
  const [turn, setTurn] = useState<0 | 1>(0);

  const truthsByLevel = useMemo(() => {
    const allowed = config.heat.map(heatToTD);
    return TRUTHS.filter((t) => allowed.includes(t.level));
  }, [config.heat]);
  const daresByLevel = useMemo(() => {
    const allowed = config.heat.map(heatToTD);
    return DARES.filter((t) => allowed.includes(t.level));
  }, [config.heat]);

  const draw = (c: "truth" | "dare") => {
    tick();
    setChoice(c);
    // Pick a heat level from couple's config then filter pool to that level
    const lvl = heatToTD(pickLevel(config));
    const pool = (c === "truth" ? truthsByLevel : daresByLevel).filter(
      (t) => t.level === lvl
    );
    const fallback = c === "truth" ? truthsByLevel : daresByLevel;
    setItem(pick(pool.length ? pool : fallback));
  };

  const reset = () => {
    setChoice(null);
    setItem(null);
    setTurn((t) => (t === 0 ? 1 : 0));
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
            <HelpCircle className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Le classique remix
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Action ou Vérité ?
          </h1>
          <p className="mt-1 text-sm text-white/60">
            {truthsByLevel.length} vérités & {daresByLevel.length} actions selon
            ta chaleur actuelle.
          </p>
        </div>

        <div className="mt-5">
          <TurnBar turn={turn} onSwap={() => setTurn(turn === 0 ? 1 : 0)} />
        </div>

        {/* Stage */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {!item ? (
              <motion.div
                key="choose"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                <button
                  onClick={() => draw("truth")}
                  className="group relative rounded-3xl p-0.5 bg-gradient-to-br from-velvet-500 to-midnight-600 glow-velvet"
                >
                  <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/85 p-8 h-64 flex flex-col justify-between text-left">
                    <Sparkles className="h-8 w-8 text-velvet-300" />
                    <div>
                      <div className="font-display text-4xl font-bold">Vérité</div>
                      <div className="mt-1 text-sm text-white/60">
                        Réponds honnêtement. Pas de triche.
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => draw("dare")}
                  className="group relative rounded-3xl p-0.5 bg-gradient-to-br from-ember-500 to-velvet-600 glow-ember"
                >
                  <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/85 p-8 h-64 flex flex-col justify-between text-left">
                    <Flame className="h-8 w-8 text-ember-400" />
                    <div>
                      <div className="font-display text-4xl font-bold">Action</div>
                      <div className="mt-1 text-sm text-white/60">
                        Assume. {config.p2 || "Ton / ta partenaire"} observe.
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className={`relative rounded-3xl p-0.5 bg-gradient-to-br ${
                  choice === "truth"
                    ? "from-velvet-500 to-midnight-600"
                    : "from-ember-500 to-velvet-600"
                } glow-velvet`}
              >
                <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/95 p-7 sm:p-10 noise relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest">
                      {choice === "truth" ? "Vérité" : "Action"}
                    </div>
                    <div className="text-xs text-white/50">
                      {item.level === "soft"
                        ? "🔥 Doux"
                        : item.level === "hot"
                        ? "🔥🔥 Chaud"
                        : "🔥🔥🔥 Brûlant"}
                    </div>
                  </div>
                  <p className="mt-8 font-display text-2xl sm:text-3xl font-medium leading-snug">
                    {item.text}
                  </p>
                  <div className="mt-10 flex gap-3 flex-wrap">
                    <button
                      onClick={() => draw(choice!)}
                      className="btn-hot rounded-full px-6 py-3 text-sm font-semibold"
                    >
                      Nouvelle {choice === "truth" ? "vérité" : "action"}
                    </button>
                    <button
                      onClick={reset}
                      className="rounded-full px-6 py-3 text-sm border border-white/15 hover:bg-white/5 transition"
                    >
                      Au tour de l&apos;autre
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
