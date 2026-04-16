"use client";

import { useState } from "react";
import { EyeOff, Handshake, RotateCcw } from "lucide-react";
import { useCouple } from "@/lib/couple";
import { GROUP_LABELS, Practice, PRACTICES } from "@/data/practices";

export function PracticesManager() {
  const { config, update } = useCouple();
  const [active, setActive] = useState<"p1" | "p2">("p1");
  const [privacy, setPrivacy] = useState(false);

  const nameP1 = config.p1 || "Joueur 1";
  const nameP2 = config.p2 || "Joueur 2";
  const refuses = new Set(
    active === "p1" ? config.p1Refuses : config.p2Refuses
  );

  const toggle = (id: string) => {
    const next = new Set(refuses);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    const arr = Array.from(next);
    if (active === "p1") update({ p1Refuses: arr });
    else update({ p2Refuses: arr });
  };

  const resetAll = () => {
    if (active === "p1") update({ p1Refuses: [] });
    else update({ p2Refuses: [] });
  };

  // Filter by gender compatibility: the "subject" is the active tab's
  // player (who's doing the practice), the "partner" is the other one.
  const subjectSex = active === "p1" ? config.p1Sex : config.p2Sex;
  const partnerSex = active === "p1" ? config.p2Sex : config.p1Sex;

  const applicable = PRACTICES.filter((p) => {
    if (p.requires?.subject && p.requires.subject !== subjectSex) return false;
    if (p.requires?.partner && p.requires.partner !== partnerSex) return false;
    return true;
  });

  const grouped = Object.entries(GROUP_LABELS)
    .map(([key, label]) => ({
      key: key as Practice["group"],
      label,
      items: applicable.filter((p) => p.group === key),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Handshake className="h-4 w-4 text-emerald-400" />
        <h3 className="font-display text-xl font-bold">
          Ce que j&apos;accepte de faire
        </h3>
      </div>
      <p className="text-xs text-white/55 mb-3 leading-snug">
        Chaque pratique est par défaut <b className="text-emerald-400">en
        vert</b>. Désactive celles que tu ne veux pas faire — elles
        n&apos;apparaîtront jamais dans tes défis.
      </p>

      {/* Privacy */}
      <div className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/65 leading-snug flex items-start gap-2">
        <EyeOff className="h-3.5 w-3.5 mt-0.5 shrink-0 text-velvet-300" />
        <span>
          Tu peux paramétrer sans montrer à l&apos;autre. Iel découvrira tes
          refus au fur et à mesure des cartes.
          <button
            onClick={() => setPrivacy((p) => !p)}
            className="ml-2 underline text-velvet-300 hover:text-white transition"
          >
            {privacy ? "Tout afficher" : "Flouter"}
          </button>
        </span>
      </div>

      {/* Tabs */}
      <div className="mb-3 inline-flex w-full rounded-full border border-white/10 bg-white/5 p-0.5 text-xs">
        <TabButton
          active={active === "p1"}
          onClick={() => setActive("p1")}
          label={nameP1}
          gradient="from-ember-500 to-velvet-600"
        />
        <TabButton
          active={active === "p2"}
          onClick={() => setActive("p2")}
          label={nameP2}
          gradient="from-velvet-500 to-midnight-600"
        />
      </div>

      {/* Groups */}
      <div
        className={`space-y-4 transition-all ${
          privacy ? "blur-md pointer-events-none select-none" : ""
        }`}
      >
        {grouped.map((g) => (
          <div key={g.key}>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-2">
              {g.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((p) => {
                const off = refuses.has(p.id);
                return (
                  <button
                    key={p.id}
                    onClick={() => toggle(p.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 border text-[11px] transition ${
                      off
                        ? "border-ember-500/60 bg-ember-500/15 text-ember-300 line-through decoration-ember-400"
                        : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20"
                    }`}
                  >
                    <span aria-hidden>{p.emoji}</span>
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!privacy && refuses.size > 0 && (
        <button
          onClick={resetAll}
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-emerald-400 transition"
        >
          <RotateCcw className="h-3 w-3" /> Tout réactiver pour{" "}
          {active === "p1" ? nameP1 : nameP2}
        </button>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  label,
  gradient,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  gradient: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 transition truncate ${
        active
          ? `bg-gradient-to-r ${gradient} text-white font-semibold`
          : "text-white/60 hover:text-white"
      }`}
    >
      <span className="truncate">{label}</span>
    </button>
  );
}
