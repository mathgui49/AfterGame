"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "aftergame:couple_v2";

export type HeatLevel = 1 | 2 | 3;

export interface CoupleConfig {
  p1: string;
  p2: string;
  heat: HeatLevel[]; // one or more levels — picked randomly when drawing cards
  dim: boolean; // dimmed/tamisée UI mode
}

const DEFAULT_CONFIG: CoupleConfig = {
  p1: "",
  p2: "",
  heat: [1, 2, 3],
  dim: false,
};

export const HEAT_PRESETS: {
  key: string;
  label: string;
  desc: string;
  heat: HeatLevel[];
}[] = [
  {
    key: "all",
    label: "Aléatoire — toutes",
    desc: "Tirage au hasard parmi les 3 intensités.",
    heat: [1, 2, 3],
  },
  {
    key: "soft-hot",
    label: "Aléatoire — Doux & Chaud",
    desc: "On reste dans le tendre et le sensuel.",
    heat: [1, 2],
  },
  {
    key: "hot-extreme",
    label: "Aléatoire — Chaud & Brûlant",
    desc: "On chauffe fort, sans retenue.",
    heat: [2, 3],
  },
  {
    key: "soft-extreme",
    label: "Aléatoire — Doux & Brûlant",
    desc: "Du tendre au torride, sans intermédiaire.",
    heat: [1, 3],
  },
  {
    key: "soft",
    label: "Uniquement Doux",
    desc: "Warm-up romantique, aucun gêne possible.",
    heat: [1],
  },
  {
    key: "hot",
    label: "Uniquement Chaud",
    desc: "Hot, mais pas encore incandescent.",
    heat: [2],
  },
  {
    key: "extreme",
    label: "Uniquement Brûlant",
    desc: "Que du niveau 3. Vous êtes prévenu·e·s.",
    heat: [3],
  },
];

export const HEAT_LABELS: Record<HeatLevel, { name: string; emoji: string }> = {
  1: { name: "Doux", emoji: "🔥" },
  2: { name: "Chaud", emoji: "🔥🔥" },
  3: { name: "Brûlant", emoji: "🔥🔥🔥" },
};

export function useCouple() {
  const [config, setConfigState] = useState<CoupleConfig>(DEFAULT_CONFIG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setConfigState({
          ...DEFAULT_CONFIG,
          ...parsed,
          heat:
            Array.isArray(parsed.heat) && parsed.heat.length
              ? (parsed.heat as HeatLevel[])
              : DEFAULT_CONFIG.heat,
        });
      }
    } catch {}
    setReady(true);
  }, []);

  const update = useCallback((patch: Partial<CoupleConfig>) => {
    setConfigState((prev) => {
      const next: CoupleConfig = { ...prev, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setConfigState(DEFAULT_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  const isInitialized =
    config.p1.trim().length > 0 && config.p2.trim().length > 0;

  return { config, update, clear, ready, isInitialized };
}

/** Pick one allowed level at random according to the couple's heat config. */
export function pickLevel(config: CoupleConfig): HeatLevel {
  const heat = config.heat.length ? config.heat : [1, 2, 3];
  return heat[Math.floor(Math.random() * heat.length)];
}

/** Substitute {P1}, {P2}, {PX} (random), {PY} (the other) with bold names. */
export function renderWithCouple(template: string, config: CoupleConfig): string {
  const p1 = config.p1 || "Toi";
  const p2 = config.p2 || "Partenaire";
  let out = template.replaceAll("{P1}", `<b>${p1}</b>`).replaceAll("{P2}", `<b>${p2}</b>`);
  if (out.includes("{PX}") || out.includes("{PY}")) {
    const flip = Math.random() < 0.5;
    const X = flip ? p1 : p2;
    const Y = flip ? p2 : p1;
    out = out.replaceAll("{PX}", `<b>${X}</b>`).replaceAll("{PY}", `<b>${Y}</b>`);
  }
  return out;
}
