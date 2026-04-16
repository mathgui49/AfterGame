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
 * this session. Slow, sensual ramp — orgasm-level content only arrives late.
 *
 * Milestones (≈):
 *   0-10 cards    : Tendre (level 1 dominant)
 *   10-25         : Tiède (1 + some 2)
 *   25-45         : Chaud (2 dominant, 3 rare)
 *   45-70         : Brûlant (3 rising)
 *   70+           : Incandescent (3 + Hard)
 */
export function progressionState(count: number): ProgressionState {
  const t = Math.min(Math.max(count, 0) / 80, 1);

  // Level 1 (Doux): starts at 1, fades out by t ≈ 0.55 (count 44)
  const w1 = Math.max(0, 1 - t * 1.85);
  // Level 3 (Brûlant): grows slowly, only meaningful after t ≈ 0.4 (count 32)
  const w3 = Math.max(0, (t - 0.35) * 1.7);
  // Level 2 (Chaud) fills the middle
  const w2 = Math.max(0, 1 - w1 - w3);

  const total = w1 + w2 + w3 || 1;
  const weights: [number, number, number] = [
    w1 / total,
    w2 / total,
    w3 / total,
  ];

  // Hard unlocks at t ≈ 0.7 (count 56) and ramps up to 1.0 by t = 1.0 (count 80).
  const hardFraction = Math.max(0, Math.min(1, (t - 0.7) * 3.3));

  let tier: Tier;
  if (count < 10) tier = "Tendre";
  else if (count < 25) tier = "Tiède";
  else if (count < 45) tier = "Chaud";
  else if (count < 70) tier = "Brûlant";
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
