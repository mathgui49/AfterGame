"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ACTIONS, BODY_PARTS, DURATION, INTENSITY } from "@/data/dice";
import { useProgressTick } from "@/lib/progressTick";
import { pick } from "@/lib/utils";
import { ArrowLeft, Dice5 } from "lucide-react";
import Link from "next/link";

type DiceState = {
  action: string;
  part: string;
  duration: string;
  intensity: string;
};

export default function DicePage() {
  const tick = useProgressTick();
  const [rolling, setRolling] = useState(false);
  const [state, setState] = useState<DiceState | null>(null);

  const roll = () => {
    tick();
    setRolling(true);
    // Animate multiple reshuffles
    let count = 0;
    const interval = setInterval(() => {
      setState({
        action: pick(ACTIONS),
        part: pick(BODY_PARTS),
        duration: pick(DURATION),
        intensity: pick(INTENSITY),
      });
      count++;
      if (count > 8) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 90);
  };

  const combos =
    ACTIONS.length * BODY_PARTS.length * DURATION.length * INTENSITY.length;

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
            <Dice5 className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Hasard & frissons
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Dés Coquins
          </h1>
          <p className="mt-1 text-sm text-white/60">
            4 dés × {combos.toLocaleString("fr-FR")} combinaisons possibles.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <DieFace label="Action" value={state?.action} rolling={rolling} />
          <DieFace label="Zone" value={state?.part} rolling={rolling} />
          <DieFace label="Durée" value={state?.duration} rolling={rolling} />
          <DieFace
            label="Intensité"
            value={state?.intensity}
            rolling={rolling}
          />
        </div>

        {state && !rolling && (
          <motion.div
            key={`${state.action}-${state.part}-${state.duration}-${state.intensity}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 glass-strong rounded-3xl p-6 sm:p-8 noise relative overflow-hidden"
          >
            <div className="text-xs uppercase tracking-widest text-white/50">
              Ton défi
            </div>
            <p className="mt-3 font-display text-2xl sm:text-3xl leading-snug font-medium">
              <span className="text-ember-400">{state.action}</span>{" "}
              {state.part} <span className="text-velvet-300">{state.intensity}</span>
              , {state.duration}.
            </p>
          </motion.div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            onClick={roll}
            disabled={rolling}
            className="btn-hot rounded-full px-8 py-4 text-base font-semibold disabled:opacity-60"
          >
            {rolling ? "Ça tourne..." : state ? "Relancer les dés" : "Lancer les dés"}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

function DieFace({
  label,
  value,
  rolling,
}: {
  label: string;
  value?: string;
  rolling: boolean;
}) {
  return (
    <div className="relative aspect-square rounded-3xl p-0.5 bg-gradient-to-br from-ember-500/60 to-velvet-600/60">
      <div className="h-full w-full rounded-[calc(1.5rem-2px)] bg-[#0d0513]/90 p-4 flex flex-col justify-between overflow-hidden">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
          {label}
        </div>
        <motion.div
          key={`${label}-${value}-${rolling}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-sm sm:text-base font-semibold leading-tight"
        >
          {value ?? "—"}
        </motion.div>
      </div>
    </div>
  );
}
