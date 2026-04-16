"use client";

import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useCouple } from "@/lib/couple";
import { progressionState } from "@/lib/progressive";

/**
 * Sticky top banner visible only when the couple has enabled Progressive
 * mode. Shows the current tier (Tendre → Incandescent) and the heat-ramp
 * progress bar. Sits above the Header but under modals.
 */
export function ProgressBanner() {
  const { config } = useCouple();
  if (!config.progressive) return null;

  const state = progressionState(config.progressCount);
  const pct = Math.round(state.progress * 100);

  return (
    <AnimatePresence>
      <motion.div
        key="progress-banner"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0410]/80 border-b border-white/5"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center gap-3">
          <TrendingUp className="h-3.5 w-3.5 text-ember-400 shrink-0" />
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 shrink-0">
            <span>{state.tier}</span>
            {state.hardUnlocked && (
              <span className="text-ember-400">· Hard</span>
            )}
          </div>
          <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-ember-500 via-velvet-500 to-midnight-500"
            />
          </div>
          <div className="text-[11px] text-white/50 shrink-0 tabular-nums">
            {config.progressCount}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
