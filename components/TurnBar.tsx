"use client";

import { ArrowLeftRight } from "lucide-react";
import { useCouple, HEAT_PRESETS, HeatLevel } from "@/lib/couple";

export function TurnBar({
  turn,
  onSwap,
  showHeat = true,
}: {
  turn: 0 | 1;
  onSwap?: () => void;
  showHeat?: boolean;
}) {
  const { config } = useCouple();
  const names = [config.p1 || "Toi", config.p2 || "Partenaire"];
  const current = names[turn];

  const preset =
    HEAT_PRESETS.find(
      (p) =>
        p.heat.length === config.heat.length &&
        p.heat.every((l) => config.heat.includes(l as HeatLevel))
    ) ?? HEAT_PRESETS[0];

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl glass px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display font-bold text-white bg-gradient-to-br ${
            turn === 0
              ? "from-ember-500 to-velvet-600"
              : "from-velvet-500 to-midnight-600"
          }`}
        >
          {current.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            C&apos;est à…
          </div>
          <div className="font-semibold truncate">{current}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {showHeat && (
          <span
            className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
            title={preset.label}
          >
            {[1, 2, 3].map((l) => (
              <span
                key={l}
                className={
                  config.heat.includes(l as HeatLevel)
                    ? "text-ember-400"
                    : "text-white/20"
                }
              >
                🔥
              </span>
            ))}
          </span>
        )}
        {onSwap && (
          <button
            onClick={onSwap}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 hover:bg-white/10 transition"
            title="Changer de joueur"
          >
            <ArrowLeftRight className="h-3 w-3" /> Swap
          </button>
        )}
      </div>
    </div>
  );
}
