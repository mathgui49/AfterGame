"use client";

import { useCallback, useEffect, useState } from "react";
import type { Category, HotCard, Level } from "@/data/hotCards";

const STORAGE_KEY = "aftergame:custom_cards_v1";

export interface CustomCard extends HotCard {
  custom: true;
  createdAt: number;
}

export function useCustomCards() {
  const [cards, setCards] = useState<CustomCard[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setCards(parsed);
      }
    } catch {}
    setReady(true);
  }, []);

  const persist = useCallback((list: CustomCard[]) => {
    setCards(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
  }, []);

  const add = useCallback(
    (input: { prompt: string; category: Category; level: Level }) => {
      const card: CustomCard = {
        id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        prompt: input.prompt.trim(),
        category: input.category,
        level: input.level,
        custom: true,
        createdAt: Date.now(),
      };
      persist([card, ...cards]);
    },
    [cards, persist]
  );

  const remove = useCallback(
    (id: string) => persist(cards.filter((c) => c.id !== id)),
    [cards, persist]
  );

  const clear = useCallback(() => persist([]), [persist]);

  return { cards, add, remove, clear, ready };
}
