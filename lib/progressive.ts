import { HeatLevel } from "./couple";

export type Tier = "Tendre" | "Tiède" | "Chaud" | "Brûlant" | "Incandescent";

export interface ProgressionState {
  /** Probability weights for picking levels 1 / 2 / 3. Sum to 1. */
  weights: [number, number, number];
  /** Probability, when a level-3 card is picked, that it's a Hard card. */
  hardFraction: number;
  /** Current tier label. */
  tier: Tier;
  /** 0..1 progress along the heat ramp. */
  progress: number;
  /** Has the session reached Hard territory? */
  hardUnlocked: boolean;
}

/**
 * Compute the current progression state from the number of cards already drawn
 * this session. Smooth ramp from "all level 1" to "only hard level 3".
 *
 * Milestones (approximate):
 *  - 0-4 cards   : mostly Doux
 *  - 5-12        : Doux + Chaud
 *  - 13-19       : Chaud + Brûlant starts to appear
 *  - 20-29       : Brûlant dominant, Hard starts unlocking
 *  - 30-39       : Only Brûlant, Hard frequent
 *  - 40+         : Only Hard level 3
 */
export function progressionState(count: number): ProgressionState {
  const t = Math.min(Math.max(count, 0) / 40, 1);

  // Weight for level 1 (Doux): starts at 1, drops to 0 by t≈0.5
  const w1 = Math.max(0, 1 - t * 2);
  // Weight for level 3 (Brûlant): grows from 0 to 1 as t → 1
  const w3 = Math.max(0, t * 1.6 - 0.15);
  // Level 2 (Chaud) fills what's left
  const w2 = Math.max(0, 1 - w1 - w3);

  const total = w1 + w2 + w3 || 1;
  const weights: [number, number, number] = [
    w1 / total,
    w2 / total,
    w3 / total,
  ];

  // Hard unlocks at t ~ 0.5 and ramps up to 1.0 at t = 1
  const hardFraction = Math.max(0, Math.min(1, (t - 0.5) * 2));

  let tier: Tier;
  if (count < 5) tier = "Tendre";
  else if (count < 13) tier = "Tiède";
  else if (count < 20) tier = "Chaud";
  else if (count < 30) tier = "Brûlant";
  else tier = "Incandescent";

  return {
    weights,
    hardFraction,
    tier,
    progress: t,
    hardUnlocked: hardFraction > 0,
  };
}

/** Pick a level from the progressive state. */
export function pickProgressiveLevel(count: number): HeatLevel {
  const { weights } = progressionState(count);
  const r = Math.random();
  if (r < weights[0]) return 1;
  if (r < weights[0] + weights[1]) return 2;
  return 3;
}

/** Should this level-3 card be pulled from the Hard pool? */
export function shouldUseHard(count: number, level: HeatLevel): boolean {
  if (level !== 3) return false;
  const { hardFraction } = progressionState(count);
  return Math.random() < hardFraction;
}
