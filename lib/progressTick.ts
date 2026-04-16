"use client";

import { useCallback } from "react";
import { useCouple } from "./couple";

/**
 * Returns a `tick` function every game can call on each "draw" / "next"
 * action. When Progressive mode is enabled, this increments the shared
 * progression counter so the tier keeps rising no matter which game the
 * couple plays.
 */
export function useProgressTick() {
  const { config, update } = useCouple();
  return useCallback(() => {
    if (!config.progressive) return;
    update({ progressCount: (config.progressCount ?? 0) + 1 });
  }, [config.progressive, config.progressCount, update]);
}
