"use client";

import { useState } from "react";
import { useCouple } from "@/lib/couple";
import { Shield, RotateCcw, EyeOff } from "lucide-react";

type View = "front" | "back";

interface Zone {
  id: string;
  label: string;
  view: View;
  x: number;
  y: number;
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

const SILHOUETTE_PATH =
  "M 50 5 C 45 5 41 9 41 15 C 41 20 43 24 46 25 L 45 30 L 36 33 C 32 35 28 39 27 44 L 22 70 L 20 95 L 25 107 L 28 98 L 30 74 L 32 60 L 32 80 L 30 100 L 28 140 L 28 180 L 32 210 L 38 211 L 42 182 L 44 145 L 46 115 L 50 115 L 54 115 L 56 145 L 58 182 L 62 211 L 68 210 L 72 180 L 72 140 L 70 100 L 68 80 L 68 60 L 70 74 L 72 98 L 75 107 L 80 95 L 78 70 L 73 44 C 72 39 68 35 64 33 L 55 30 L 54 25 C 57 24 59 20 59 15 C 59 9 55 5 50 5 Z";

export function BodyLimits() {
  const { config, update } = useCouple();
  const [active, setActive] = useState<"p1" | "p2">("p1");
  const [privacy, setPrivacy] = useState(false);

  const nameP1 = config.p1 || "Joueur 1";
  const nameP2 = config.p2 || "Joueur 2";
  const limits = new Set(active === "p1" ? config.p1Limits : config.p2Limits);

  const toggle = (id: string) => {
    const next = new Set(limits);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    const arr = Array.from(next);
    if (active === "p1") update({ p1Limits: arr });
    else update({ p2Limits: arr });
  };

  const resetAll = () => {
    if (active === "p1") update({ p1Limits: [] });
    else update({ p2Limits: [] });
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-4 w-4 text-emerald-400" />
        <h3 className="font-display text-xl font-bold">
          Ce que j&apos;accepte de recevoir
        </h3>
      </div>
      <p className="text-xs text-white/55 mb-3 leading-snug">
        Ces silhouettes représentent <b>ton propre corps</b>. Zones en vert =
        ok, en rouge = à ne pas toucher. Chacun·e paramètre le sien. Les
        limites sont sacrées.
      </p>

      {/* Privacy hint */}
      <div className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/65 leading-snug flex items-start gap-2">
        <EyeOff className="h-3.5 w-3.5 mt-0.5 shrink-0 text-velvet-300" />
        <span>
          Tu peux remplir ton corps sans montrer l&apos;écran à
          l&apos;autre — iel découvrira tes envies et tes refus au fur et à
          mesure des cartes.
          <button
            onClick={() => setPrivacy((p) => !p)}
            className="ml-2 underline text-velvet-300 hover:text-white transition"
          >
            {privacy ? "Tout afficher" : "Flouter"}
          </button>
        </span>
      </div>

      {/* Player tabs (no count badges — partner must not be able to guess
          whether the other set red zones). */}
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

      <div className="grid grid-cols-2 gap-3">
        <Silhouette
          view="front"
          zones={ZONES.filter((z) => z.view === "front")}
          limits={limits}
          onToggle={toggle}
          hidden={privacy}
        />
        <Silhouette
          view="back"
          zones={ZONES.filter((z) => z.view === "back")}
          limits={limits}
          onToggle={toggle}
          hidden={privacy}
        />
      </div>

      {/* Legend — hidden when privacy mode is on so the partner can't peek
          at the red labels either. */}
      {!privacy && (
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
      )}

      {!privacy && limits.size > 0 && (
        <button
          onClick={resetAll}
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/50 hover:text-emerald-400 transition"
        >
          <RotateCcw className="h-3 w-3" /> Tout remettre en vert pour{" "}
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

function Silhouette({
  view,
  zones,
  limits,
  onToggle,
  hidden,
}: {
  view: View;
  zones: Zone[];
  limits: Set<string>;
  onToggle: (id: string) => void;
  hidden: boolean;
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
        style={{ filter: hidden ? "blur(12px)" : "none" }}
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
              onClick={() => !hidden && onToggle(z.id)}
              style={{ cursor: hidden ? "default" : "pointer" }}
            >
              <title>{z.label}</title>
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
