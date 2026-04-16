"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "aftergame:couple_v2";

export type HeatLevel = 1 | 2 | 3;

export type Sex = "M" | "F"; // Homme / Femme

/**
 * Type of relationship — drives which cards are relevant.
 * - "premier-soir": first night, one-time encounter
 * - "plan-cul": casual recurring hookup, no commitment
 * - "debut": early-stage couple (a few weeks to months)
 * - "couple": established couple (years)
 */
export type Relationship = "premier-soir" | "plan-cul" | "debut" | "couple";

export interface CoupleConfig {
  p1: string;
  p2: string;
  p1Sex: Sex;
  p2Sex: Sex;
  heat: HeatLevel[]; // one or more levels — picked randomly when drawing cards
  dim: boolean; // dimmed/tamisée UI mode
  hard: boolean; // unlocks explicit "Hard" content pool
  progressive: boolean; // overrides heat: heat rises as the session progresses
  progressCount: number; // cards drawn during the current session
  p1Limits: string[]; // body-zone IDs P1 marks as off-limits ON P1 ("to receive")
  p2Limits: string[]; // same, on P2
  p1Refuses: string[]; // practice IDs P1 refuses to DO
  p2Refuses: string[]; // same, on P2
  relationship: Relationship;
}

const DEFAULT_CONFIG: CoupleConfig = {
  p1: "",
  p2: "",
  p1Sex: "F",
  p2Sex: "M",
  heat: [1, 2, 3],
  dim: false,
  hard: false,
  progressive: false,
  progressCount: 0,
  p1Limits: [],
  p2Limits: [],
  p1Refuses: [],
  p2Refuses: [],
  relationship: "couple",
};

export const RELATIONSHIP_LABELS: Record<
  Relationship,
  { label: string; emoji: string; desc: string }
> = {
  "premier-soir": {
    label: "Premier soir",
    emoji: "✨",
    desc: "Ce soir seulement, peut-être sans lendemain.",
  },
  "plan-cul": {
    label: "Plan cul régulier",
    emoji: "🔥",
    desc: "On se revoit, mais sans attaches.",
  },
  debut: {
    label: "Début de relation",
    emoji: "💞",
    desc: "Quelques semaines ou mois — on se découvre.",
  },
  couple: {
    label: "Couple établi",
    emoji: "💕",
    desc: "On se connaît par cœur, on veut raviver.",
  },
};

export const HEAT_LABELS: Record<HeatLevel, { name: string; emoji: string }> = {
  1: { name: "Doux", emoji: "🔥" },
  2: { name: "Chaud", emoji: "🔥🔥" },
  3: { name: "Brûlant", emoji: "🔥🔥🔥" },
};

// ---------- Shared, cross-component store (module-scope) ----------

function readFromStorage(): CoupleConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_CONFIG,
        ...parsed,
        heat:
          Array.isArray(parsed?.heat) && parsed.heat.length
            ? (parsed.heat as HeatLevel[])
            : DEFAULT_CONFIG.heat,
      };
    }
  } catch {}
  return DEFAULT_CONFIG;
}

let currentState: CoupleConfig = DEFAULT_CONFIG;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // Lazy hydrate the store from localStorage on first subscribe (client only).
  if (!hydrated && typeof window !== "undefined") {
    hydrated = true;
    const fromStorage = readFromStorage();
    if (JSON.stringify(fromStorage) !== JSON.stringify(currentState)) {
      currentState = fromStorage;
      // Defer to next tick to avoid triggering state change during the render
      // pass that first subscribed.
      queueMicrotask(emit);
    }
  }

  // Cross-tab sync via the native storage event.
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      currentState = readFromStorage();
      emit();
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    listeners.delete(listener);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function getSnapshot(): CoupleConfig {
  return currentState;
}

function getServerSnapshot(): CoupleConfig {
  return DEFAULT_CONFIG;
}

export function useCouple() {
  const config = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const update = useCallback((patch: Partial<CoupleConfig>) => {
    const next: CoupleConfig = { ...currentState, ...patch };
    // Hard mode is only meaningful when the Brûlant (level 3) pool is active.
    // If heat changes and no longer includes 3, force hard off for coherence.
    if (!next.heat.includes(3)) {
      next.hard = false;
    }
    currentState = next;
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
      }
    } catch {}
    emit();
  }, []);

  const clear = useCallback(() => {
    currentState = { ...DEFAULT_CONFIG };
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {}
    emit();
  }, []);

  const ready = typeof window === "undefined" ? true : hydrated;
  const isInitialized =
    config.p1.trim().length > 0 && config.p2.trim().length > 0;

  return { config, update, clear, ready, isInitialized };
}

/** Pick one allowed level at random according to the couple's heat config. */
export function pickLevel(config: CoupleConfig): HeatLevel {
  const heat: HeatLevel[] = config.heat.length ? config.heat : [1, 2, 3];
  return heat[Math.floor(Math.random() * heat.length)];
}

/** Substitute {P1}, {P2}, {PX} (random), {PY} (the other) with bold names. */
export function renderWithCouple(
  template: string,
  config: CoupleConfig
): string {
  const p1 = config.p1 || "Toi";
  const p2 = config.p2 || "Partenaire";
  let out = template
    .replaceAll("{P1}", `<b>${p1}</b>`)
    .replaceAll("{P2}", `<b>${p2}</b>`);
  if (out.includes("{PX}") || out.includes("{PY}")) {
    const flip = Math.random() < 0.5;
    const X = flip ? p1 : p2;
    const Y = flip ? p2 : p1;
    out = out
      .replaceAll("{PX}", `<b>${X}</b>`)
      .replaceAll("{PY}", `<b>${Y}</b>`);
  }
  return out;
}
