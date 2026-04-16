"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Users } from "lucide-react";
import { HeatLevel, useCouple } from "@/lib/couple";
import { HeatSelector } from "./HeatSelector";

export function CoupleSetup() {
  const { config, update, ready, isInitialized } = useCouple();
  const pathname = usePathname();
  const [p1, setP1] = useState(config.p1);
  const [p2, setP2] = useState(config.p2);
  const [heat, setHeat] = useState<HeatLevel[]>(config.heat);

  // Only gate on game pages — landing & info pages stay unblocked so new
  // visitors can discover the app before entering prénoms.
  const onGameRoute = pathname?.startsWith("/jeux") ?? false;

  if (!ready || isInitialized || !onGameRoute) return null;

  const canSave = p1.trim().length > 0 && p2.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    update({ p1: p1.trim(), p2: p2.trim(), heat });
  };

  return (
    <AnimatePresence>
      <motion.div
        key="couple-setup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6 overflow-y-auto"
        style={{
          backdropFilter: "blur(26px) saturate(130%)",
          WebkitBackdropFilter: "blur(26px) saturate(130%)",
          background:
            "radial-gradient(ellipse at center, rgba(20, 0, 20, 0.7), rgba(0, 0, 0, 0.9))",
        }}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="glass-strong noise relative w-full max-w-lg rounded-3xl p-6 sm:p-8 glow-velvet overflow-hidden my-auto"
        >
          <Heart className="absolute -top-6 -right-6 h-32 w-32 text-ember-500/20" />

          <div className="relative">
            <div className="flex items-center gap-2 text-velvet-300">
              <Users className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Un duo à configurer
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Qui joue ce soir&nbsp;?
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Vos prénoms apparaîtront dans les défis. Modifiables à tout
              moment via les paramètres.
            </p>

            {/* Names */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <NameInput
                label="Joueur 1"
                value={p1}
                onChange={setP1}
                color="from-ember-500 to-velvet-600"
              />
              <NameInput
                label="Joueur 2"
                value={p2}
                onChange={setP2}
                color="from-velvet-500 to-midnight-600"
              />
            </div>

            {/* Heat */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-velvet-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-velvet-300">
                  Niveau de chaleur
                </span>
              </div>
              <HeatSelector heat={heat} onChange={setHeat} />
            </div>

            <button
              onClick={handleSave}
              disabled={!canSave}
              className="btn-hot mt-6 w-full rounded-full py-3.5 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Commencer l&apos;aventure
            </button>

            <p className="mt-4 text-[11px] text-white/40">
              Vos prénoms et préférences restent locaux sur votre appareil. Rien
              n&apos;est envoyé en ligne.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function NameInput({
  label,
  value,
  onChange,
  color,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  color: string;
}) {
  return (
    <div className={`rounded-2xl p-0.5 bg-gradient-to-br ${color}`}>
      <div className="rounded-[calc(1rem-2px)] bg-[#0d0513]/90 px-3 py-2 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} font-display font-bold text-white`}
        >
          {(value || "?").charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            {label}
          </div>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={16}
            placeholder="Prénom"
            className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/25 font-medium text-base"
          />
        </div>
      </div>
    </div>
  );
}

/** Legacy export kept for retro-compat (used by older code paths). */
export function HeatFlames({ heat }: { heat: HeatLevel[] }) {
  const set = new Set(heat);
  return (
    <div className="flex items-center gap-0.5 text-sm shrink-0" aria-hidden>
      {[1, 2, 3].map((l) => {
        const lit = set.has(l as HeatLevel);
        return (
          <span
            key={l}
            className="inline-block leading-none"
            style={{
              filter: lit
                ? "none"
                : "grayscale(1) brightness(0.45) opacity(0.55)",
            }}
          >
            🔥
          </span>
        );
      })}
    </div>
  );
}
