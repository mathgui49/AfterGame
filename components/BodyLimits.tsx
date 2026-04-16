"use client";

import { useCouple } from "@/lib/couple";
import { Shield, RotateCcw } from "lucide-react";

type View = "front" | "back";

interface Zone {
  id: string;
  label: string;
  view: View;
  x: number; // % of 100-wide viewBox
  y: number; // % of 220-tall viewBox
}

const ZONES: Zone[] = [
  // FRONT
  { id: "head", label: "Tête / visage", view: "front", x: 50, y: 12 },
  { id: "mouth", label: "Bouche", view: "front", x: 50, y: 20 },
  { id: "neck", label: "Cou", view: "front", x: 50, y: 32 },
  { id: "shoulders", label: "Épaules", view: "front", x: 30, y: 42 },
  { id: "chest", label: "Poitrine / seins", view: "front", x: 50, y: 58 },
  { id: "belly", label: "Ventre", view: "front", x: 50, y: 82 },
  { id: "hands", label: "Mains / poignets", view: "front", x: 18, y: 105 },
  { id: "genitals", label: "Sexe (devant)", view: "front", x: 50, y: 110 },
  { id: "inner-thighs", label: "Intérieur cuisses", view: "front", x: 50, y: 132 },
  { id: "knees", label: "Genoux", view: "front", x: 50, y: 170 },
  { id: "feet", label: "Pieds", view: "front", x: 50, y: 205 },

  // BACK
  { id: "nape", label: "Nuque", view: "back", x: 50, y: 32 },
  { id: "upper-back", label: "Haut du dos", view: "back", x: 50, y: 55 },
  { id: "lower-back", label: "Bas du dos / reins", view: "back", x: 50, y: 95 },
  { id: "buttocks", label: "Fesses", view: "back", x: 50, y: 118 },
  { id: "anus", label: "Anus", view: "back", x: 50, y: 126 },
  { id: "back-thighs", label: "Arrière cuisses", view: "back", x: 50, y: 145 },
  { id: "calves", label: "Mollets", view: "back", x: 50, y: 180 },
];

// Simplified human silhouette — head circle + torso + limbs as a single path.
// viewBox 0 0 100 220 (matches ZONES coords).
const SILHOUETTE_PATH =
  "M 50 5 C 45 5 41 9 41 15 C 41 20 43 24 46 25 L 45 30 L 36 33 C 32 35 28 39 27 44 L 22 70 L 20 95 L 25 107 L 28 98 L 30 74 L 32 60 L 32 80 L 30 100 L 28 140 L 28 180 L 32 210 L 38 211 L 42 182 L 44 145 L 46 115 L 50 115 L 54 115 L 56 145 L 58 182 L 62 211 L 68 210 L 72 180 L 72 140 L 70 100 L 68 80 L 68 60 L 70 74 L 72 98 L 75 107 L 80 95 L 78 70 L 73 44 C 72 39 68 35 64 33 L 55 30 L 54 25 C 57 24 59 20 59 15 C 59 9 55 5 50 5 Z";

export function BodyLimits() {
  const { config, update } = useCouple();
  const limits = new Set(config.limits);

  const toggle = (id: string) => {
    const next = new Set(limits);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    update({ limits: Array.from(next) });
  };

  const resetAll = () => update({ limits: [] });

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-4 w-4 text-emerald-400" />
        <h3 className="font-display text-xl font-bold">Limites du duo</h3>
        {limits.size > 0 && (
          <span className="ml-auto text-[11px] text-ember-400">
            {limits.size} zone{limits.size > 1 ? "s" : ""} interdite
            {limits.size > 1 ? "s" : ""}
          </span>
        )}
      </div>
      <p className="text-xs text-white/55 mb-3 leading-snug">
        Tape sur un point pour passer du <b className="text-emerald-400">vert</b>{" "}
        (ok) au <b className="text-ember-400">rouge</b> (à éviter). Les limites
        sont toujours sacrées — même en plein jeu.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <Silhouette
          view="front"
          zones={ZONES.filter((z) => z.view === "front")}
          limits={limits}
          onToggle={toggle}
        />
        <Silhouette
          view="back"
          zones={ZONES.filter((z) => z.view === "back")}
          limits={limits}
          onToggle={toggle}
        />
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
        {ZONES.map((z) => {
          const forbidden = limits.has(z.id);
          return (
            <button
              key={z.id}
              onClick={() => toggle(z.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 border transition ${
                forbidden
                  ? "border-ember-500/60 bg-ember-500/15 text-ember-300"
                  : "border-emerald-500/40 bg-emerald-500/10 text-emerald-300/90 hover:bg-emerald-500/20"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  forbidden ? "bg-ember-500" : "bg-emerald-400"
                }`}
              />
              {z.label}
            </button>
          );
        })}
      </div>

      {limits.size > 0 && (
        <button
          onClick={resetAll}
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-emerald-400 transition"
        >
          <RotateCcw className="h-3 w-3" /> Tout remettre en vert
        </button>
      )}
    </div>
  );
}

function Silhouette({
  view,
  zones,
  limits,
  onToggle,
}: {
  view: View;
  zones: Zone[];
  limits: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-midnight-950/60 to-velvet-950/60 p-3 overflow-hidden">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 text-center">
        {view === "front" ? "Devant" : "Dos"}
      </div>
      <svg
        viewBox="0 0 100 220"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={`body-${view}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.07)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>
        <path
          d={SILHOUETTE_PATH}
          fill={`url(#body-${view})`}
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.6"
        />
        {zones.map((z) => {
          const forbidden = limits.has(z.id);
          return (
            <g
              key={z.id}
              onClick={() => onToggle(z.id)}
              style={{ cursor: "pointer" }}
            >
              <title>{z.label}</title>
              {/* Larger invisible hit area for easy tapping */}
              <circle cx={z.x} cy={z.y} r={6} fill="transparent" />
              <circle
                cx={z.x}
                cy={z.y}
                r={3.2}
                fill={forbidden ? "#ed0f23" : "#10b981"}
                stroke="white"
                strokeWidth="0.8"
                style={{
                  filter: forbidden
                    ? "drop-shadow(0 0 3px rgba(237,15,35,0.7))"
                    : "drop-shadow(0 0 3px rgba(16,185,129,0.55))",
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
