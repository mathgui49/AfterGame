"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Settings,
  X,
  Heart,
  Sparkles,
  Trash2,
  Moon,
  Flame,
  TrendingUp,
  RotateCcw,
  Check,
} from "lucide-react";
import { HeatLevel, Sex, useCouple } from "@/lib/couple";
import { progressionState } from "@/lib/progressive";
import { PlayerField } from "./CoupleSetup";
import { HeatSelector } from "./HeatSelector";
import { CustomCardsManager } from "./CustomCardsManager";
import { BodyLimits } from "./BodyLimits";
import { PracticesManager } from "./PracticesManager";
import { RelationshipSelector } from "./RelationshipSelector";

export function SettingsPanel() {
  const { config, update, clear } = useCouple();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Auto-save helpers — mutate shared store directly
  const setP1 = (v: string) => flashAndUpdate({ p1: v });
  const setP2 = (v: string) => flashAndUpdate({ p2: v });
  const setP1Sex = (s: Sex) => flashAndUpdate({ p1Sex: s });
  const setP2Sex = (s: Sex) => flashAndUpdate({ p2Sex: s });
  const setHeat = (h: HeatLevel[]) => flashAndUpdate({ heat: h });

  function flashAndUpdate(patch: Parameters<typeof update>[0]) {
    update(patch);
    setSavedFlash(true);
    window.setTimeout(() => setSavedFlash(false), 1200);
  }

  const toggleDim = () => flashAndUpdate({ dim: !config.dim });
  const toggleHard = () => flashAndUpdate({ hard: !config.hard });
  const toggleProgressive = () => {
    if (config.progressive) {
      flashAndUpdate({ progressive: false });
    } else {
      flashAndUpdate({
        progressive: true,
        progressCount: 0,
        heat: [1, 2, 3],
      });
    }
  };
  const resetProgress = () => flashAndUpdate({ progressCount: 0 });

  const reset = () => {
    if (
      confirm(
        "Réinitialiser tous les paramètres (prénoms, chaleur, limites, pratiques, cartes perso, etc.) ?"
      )
    ) {
      clear();
      setOpen(false);
    }
  };

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="settings-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
        />
      )}
      {open && (
        <motion.aside
          key="settings-panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className="fixed top-0 right-0 bottom-0 z-[81] w-full sm:max-w-md bg-[#0d0513]/95 border-l border-white/10 overflow-y-auto flex flex-col"
          style={{ height: "100dvh" }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0d0513]/95 backdrop-blur shrink-0">
            <div className="flex items-center gap-2 text-velvet-300">
              <Settings className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Paramètres
              </span>
              <AnimatePresence>
                {savedFlash && (
                  <motion.span
                    key="saved"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="ml-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-emerald-400"
                  >
                    <Check className="h-3 w-3" />
                    Enregistré
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <button
              aria-label="Fermer"
              onClick={() => setOpen(false)}
              className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-5 py-6 space-y-8 flex-1">
            {/* Names */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-4 w-4 text-ember-400" />
                <h3 className="font-display text-xl font-bold">Le duo</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <PlayerField
                  label="Joueur 1"
                  color="from-ember-500 to-velvet-600"
                  name={config.p1}
                  onName={setP1}
                  sex={config.p1Sex}
                  onSex={setP1Sex}
                />
                <PlayerField
                  label="Joueur 2"
                  color="from-velvet-500 to-midnight-600"
                  name={config.p2}
                  onName={setP2}
                  sex={config.p2Sex}
                  onSex={setP2Sex}
                />
              </div>
            </section>

            {/* Relationship */}
            <section>
              <RelationshipSelector />
            </section>

            {/* Progressive */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-velvet-300" />
                <h3 className="font-display text-xl font-bold">
                  Mode progressif
                </h3>
              </div>
              <button
                onClick={toggleProgressive}
                className={`w-full text-left rounded-2xl px-4 py-3 border transition flex items-center gap-3 ${
                  config.progressive
                    ? "border-ember-500 bg-ember-500/10"
                    : "border-white/10 hover:bg-white/5"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">
                    La chaleur monte d&apos;elle-même
                  </div>
                  <div className="text-xs text-white/55 leading-snug">
                    Plus tu joues, plus les cartes deviennent chaudes. Le mode
                    Hard s&apos;active au fur et à mesure, jusqu&apos;à devenir
                    permanent.
                  </div>
                </div>
                <Toggle active={config.progressive} />
              </button>
              {config.progressive && (
                <ProgressiveStatus
                  count={config.progressCount}
                  onReset={resetProgress}
                />
              )}
            </section>

            {/* Heat — manuel (masqué quand progressif actif) */}
            {!config.progressive && (
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-velvet-300" />
                  <h3 className="font-display text-xl font-bold">Chaleur</h3>
                </div>
                <HeatSelector heat={config.heat} onChange={setHeat} />
              </section>
            )}

            {/* Hard — masqué en mode progressif, sinon gated par niveau 3 */}
            {!config.progressive && config.heat.includes(3) && (
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="h-4 w-4 text-ember-500" />
                  <h3 className="font-display text-xl font-bold">Mode Hard</h3>
                </div>
                <button
                  onClick={toggleHard}
                  className={`w-full text-left rounded-2xl px-4 py-3 border transition flex items-center gap-3 ${
                    config.hard
                      ? "border-ember-500 bg-ember-500/15"
                      : "border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">
                      Contenu explicite & cru
                    </div>
                    <div className="text-xs text-white/55 leading-snug">
                      Active un pool de défis et vérités très directs, avec
                      des mots crus. Arrière-plan sensuel activé.
                    </div>
                  </div>
                  <Toggle active={config.hard} />
                </button>
                {config.hard && (
                  <p className="mt-2 text-[11px] text-ember-400/80 leading-snug">
                    ⚠️ Rappel : toujours avec consentement mutuel. Un simple
                    &laquo; pas ce soir &raquo; suffit à passer une carte.
                  </p>
                )}
              </section>
            )}

            {/* Ambience */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Moon className="h-4 w-4 text-midnight-300" />
                <h3 className="font-display text-xl font-bold">Ambiance</h3>
              </div>
              <button
                onClick={toggleDim}
                className={`w-full text-left rounded-2xl px-4 py-3 border transition flex items-center gap-3 ${
                  config.dim
                    ? "border-midnight-500 bg-midnight-500/10"
                    : "border-white/10 hover:bg-white/5"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">Lumière tamisée</div>
                  <div className="text-xs text-white/55">
                    Assombrit l&apos;interface quand vous baissez les lumières.
                  </div>
                </div>
                <Toggle active={config.dim} />
              </button>
            </section>

            {/* Body limits — ce que j'accepte de recevoir */}
            <section>
              <BodyLimits />
            </section>

            {/* Practices — ce que j'accepte de faire */}
            <section>
              <PracticesManager />
            </section>

            {/* Custom cards */}
            <section>
              <CustomCardsManager />
            </section>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 text-sm text-white/50 hover:text-ember-400 transition"
              >
                <Trash2 className="h-4 w-4" /> Réinitialiser tous les paramètres
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        aria-label="Paramètres"
        onClick={() => setOpen(true)}
        className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition"
      >
        <Settings className="h-5 w-5" />
      </button>
      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}

function ProgressiveStatus({
  count,
  onReset,
}: {
  count: number;
  onReset: () => void;
}) {
  const state = progressionState(count);
  const pct = Math.round(state.progress * 100);
  return (
    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="text-white/60">
          Tier :{" "}
          <span className="font-semibold text-ember-400">{state.tier}</span>
          {state.hardUnlocked && (
            <span className="ml-2 text-[10px] uppercase tracking-widest text-ember-400/80">
              · Hard actif
            </span>
          )}
        </div>
        <div className="text-white/50">
          {count} cartes · {pct}%
        </div>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-ember-500 via-velvet-500 to-midnight-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-ember-400 transition"
      >
        <RotateCcw className="h-3 w-3" /> Réinitialiser la progression
      </button>
    </div>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div
      className={`h-6 w-11 rounded-full transition relative shrink-0 ${
        active ? "bg-ember-500" : "bg-white/15"
      }`}
    >
      <div
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          active ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </div>
  );
}
