"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Settings, X, Heart, Sparkles, Trash2, Moon } from "lucide-react";
import {
  HEAT_PRESETS,
  HeatLevel,
  useCouple,
} from "@/lib/couple";
import { HeatFlames, NameInput } from "./CoupleSetup";
import { CustomCardsManager } from "./CustomCardsManager";
import { PlaylistsCustomizer } from "./PlaylistsCustomizer";

export function SettingsPanel() {
  const { config, update, clear } = useCouple();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [p1, setP1] = useState(config.p1);
  const [p2, setP2] = useState(config.p2);
  const [heat, setHeat] = useState<HeatLevel[]>(config.heat);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      setP1(config.p1);
      setP2(config.p2);
      setHeat(config.heat);
    }
  }, [open, config]);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const currentKey =
    HEAT_PRESETS.find(
      (p) =>
        p.heat.length === heat.length &&
        p.heat.every((l) => heat.includes(l))
    )?.key ?? "custom";

  const save = () => {
    if (!p1.trim() || !p2.trim()) return;
    update({ p1: p1.trim(), p2: p2.trim(), heat });
    setOpen(false);
  };

  const toggleDim = () => update({ dim: !config.dim });

  const reset = () => {
    if (confirm("Réinitialiser prénoms et niveau de chaleur ?")) {
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
            </section>

            {/* Heat */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-velvet-300" />
                <h3 className="font-display text-xl font-bold">Chaleur</h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {HEAT_PRESETS.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setHeat(p.heat)}
                    className={`text-left rounded-2xl px-4 py-3 border transition flex items-center gap-3 ${
                      currentKey === p.key
                        ? "border-ember-500 bg-ember-500/10"
                        : "border-white/10 hover:bg-white/5"
                    }`}
                  >
                    <HeatFlames heat={p.heat} />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{p.label}</div>
                      <div className="text-xs text-white/55 truncate">
                        {p.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

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
                <div
                  className={`h-6 w-11 rounded-full transition relative ${
                    config.dim ? "bg-ember-500" : "bg-white/15"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                      config.dim ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </button>
            </section>

            {/* Custom cards */}
            <section>
              <CustomCardsManager />
            </section>

            {/* Playlists */}
            <section>
              <PlaylistsCustomizer />
            </section>

            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <button
                onClick={save}
                disabled={!p1.trim() || !p2.trim()}
                className="btn-hot w-full rounded-full py-3 font-semibold disabled:opacity-50"
              >
                Enregistrer prénoms & chaleur
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 text-sm text-white/50 hover:text-ember-400 transition"
              >
                <Trash2 className="h-4 w-4" /> Réinitialiser les paramètres
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
