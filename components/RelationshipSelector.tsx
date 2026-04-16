"use client";

import { Relationship, RELATIONSHIP_LABELS, useCouple } from "@/lib/couple";
import { HeartHandshake } from "lucide-react";

const OPTIONS: Relationship[] = [
  "premier-soir",
  "plan-cul",
  "debut",
  "couple",
];

export function RelationshipSelector() {
  const { config, update } = useCouple();

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <HeartHandshake className="h-4 w-4 text-velvet-300" />
        <h3 className="font-display text-xl font-bold">Type de relation</h3>
      </div>
      <p className="text-xs text-white/55 mb-3 leading-snug">
        Le jeu s&apos;adapte : les défis du mois ne s&apos;affichent que pour
        les couples établis, et certaines formulations changent.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {OPTIONS.map((r) => {
          const active = config.relationship === r;
          const meta = RELATIONSHIP_LABELS[r];
          return (
            <button
              key={r}
              onClick={() => update({ relationship: r })}
              className={`text-left rounded-2xl px-4 py-3 border transition ${
                active
                  ? "border-ember-500 bg-ember-500/10"
                  : "border-white/10 hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{meta.emoji}</span>
                <span className="font-semibold text-sm">{meta.label}</span>
              </div>
              <div className="text-xs text-white/55 mt-1 leading-snug">
                {meta.desc}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
