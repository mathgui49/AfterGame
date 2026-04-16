"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Wand2 } from "lucide-react";
import { useCustomCards } from "@/lib/customCards";
import { CATEGORY_META, Category, Level } from "@/data/hotCards";

const CATS: Category[] = [
  "action",
  "verite",
  "defis",
  "positions",
  "sijepouvais",
  "quiestleplus",
  "connais",
  "bons",
];

export function CustomCardsManager() {
  const { cards, add, remove } = useCustomCards();
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState<Category>("action");
  const [level, setLevel] = useState<Level>(2);

  const canAdd = prompt.trim().length >= 5;

  const submit = () => {
    if (!canAdd) return;
    add({ prompt, category, level });
    setPrompt("");
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Wand2 className="h-4 w-4 text-velvet-300" />
        <h3 className="font-display text-xl font-bold">Cartes perso</h3>
        <span className="ml-auto text-xs text-white/50">{cards.length}</span>
      </div>

      <div className="glass rounded-2xl p-4 space-y-3">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: Embrasse-moi dans le noir sans rien dire pendant 1 minute…"
          maxLength={240}
          rows={2}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-ember-500/60 transition"
        />
        <div className="grid grid-cols-2 gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="rounded-xl border border-white/10 bg-[#0d0513] px-3 py-2 text-sm outline-none"
          >
            {CATS.map((c) => (
              <option key={c} value={c}>
                {CATEGORY_META[c].emoji} {CATEGORY_META[c].label}
              </option>
            ))}
          </select>
          <select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value) as Level)}
            className="rounded-xl border border-white/10 bg-[#0d0513] px-3 py-2 text-sm outline-none"
          >
            <option value={1}>🔥 Doux</option>
            <option value={2}>🔥🔥 Chaud</option>
            <option value={3}>🔥🔥🔥 Brûlant</option>
          </select>
        </div>
        <button
          onClick={submit}
          disabled={!canAdd}
          className="btn-hot w-full inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold disabled:opacity-50"
        >
          <Plus className="h-4 w-4" /> Ajouter ma carte
        </button>
      </div>

      {/* List */}
      <div className="mt-4 space-y-2 max-h-[280px] overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {cards.length === 0 && (
            <p className="text-xs text-white/40 italic">
              Tes cartes apparaîtront ici. Elles s&apos;intègrent automatiquement
              dans le jeu Hot Cards.
            </p>
          )}
          {cards.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-start gap-3"
            >
              <div className="text-xs text-white/50 shrink-0">
                {CATEGORY_META[c.category].emoji}
                <div className="text-[9px] mt-1">{"🔥".repeat(c.level)}</div>
              </div>
              <div className="flex-1 min-w-0 text-sm text-white/85 leading-snug">
                {c.prompt}
              </div>
              <button
                onClick={() => remove(c.id)}
                className="shrink-0 p-1.5 rounded-full text-white/40 hover:text-ember-400 hover:bg-white/5"
                aria-label="Supprimer"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
