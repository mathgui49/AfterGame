"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HOT_CARDS } from "@/data/hotCards";
import { useCouple } from "@/lib/couple";
import { shuffle } from "@/lib/utils";
import { ArrowLeft, Ticket, Scissors } from "lucide-react";
import Link from "next/link";

export default function VouchersPage() {
  const { config } = useCouple();
  const [seed, setSeed] = useState(0);

  const bons = useMemo(() => {
    const pool = HOT_CARDS.filter(
      (c) => c.category === "bons" && config.heat.includes(c.level)
    );
    return shuffle(pool).slice(0, 6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.heat, seed]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 pb-20">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-velvet-300">
              <Ticket className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Promesses coquines
              </span>
            </div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Bons à réclamer
            </h1>
            <p className="mt-1 text-sm text-white/60">
              Tire une poignée de bons à utiliser dans la semaine. Filtrés
              selon ta chaleur.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSeed((s) => s + 1)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5"
            >
              Nouvelle fournée
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {bons.map((b, i) => (
            <motion.div
              key={b.id + seed}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="relative"
            >
              <div className="relative rounded-2xl p-0.5 bg-gradient-to-br from-ember-400/80 via-velvet-500/70 to-midnight-600/70 glow-velvet">
                <div className="rounded-[calc(1rem-2px)] bg-[#0d0513]/90 p-5 sm:p-6 noise relative overflow-hidden">
                  {/* Ticket holes */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#0a0410]" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#0a0410]" />

                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/45">
                    <Scissors className="h-3 w-3" />
                    Bon n°{i + 1}
                    <span className="ml-auto">{"🔥".repeat(b.level)}</span>
                  </div>
                  <p className="mt-3 font-display text-lg sm:text-xl leading-snug">
                    {b.prompt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[11px] text-white/40">
                    <span>Valable 7 jours</span>
                    <span className="font-display italic">
                      {config.p1 || "AfterGame"}&nbsp;&amp;&nbsp;
                      {config.p2 || "…"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {bons.length === 0 && (
          <div className="mt-10 glass rounded-2xl p-6 text-center text-white/60">
            Aucun bon pour ce niveau de chaleur. Ajuste-le dans les paramètres
            ⚙️.
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
