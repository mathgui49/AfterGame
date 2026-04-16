"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "aftergame:playlists_v1";

export type PlaylistKey = "chill" | "sensuel" | "intense";

export type PlaylistOverrides = Partial<Record<PlaylistKey, string>>;

export function usePlaylistOverrides() {
  const [overrides, setOverrides] = useState<PlaylistOverrides>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setOverrides(parsed);
      }
    } catch {}
    setReady(true);
  }, []);

  const persist = useCallback((next: PlaylistOverrides) => {
    setOverrides(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const setOverride = useCallback(
    (key: PlaylistKey, id: string | null) => {
      const next = { ...overrides };
      if (id) next[key] = id;
      else delete next[key];
      persist(next);
    },
    [overrides, persist]
  );

  const clear = useCallback(() => persist({}), [persist]);

  return { overrides, setOverride, clear, ready };
}
