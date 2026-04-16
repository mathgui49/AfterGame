"use client";

import { useMemo } from "react";
import { Shuffle, Target } from "lucide-react";
import { HEAT_LABELS, HeatLevel } from "@/lib/couple";

type Mode = "random" | "only";

export function HeatSelector({
  heat,
  onChange,
}: {
  heat: HeatLevel[];
  onChange: (h: HeatLevel[]) => void;
}) {
  const mode: Mode = heat.length === 1 ? "only" : "random";

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    if (next === "only") {
      onChange([heat[0] ?? 2]);
    } else {
      onChange([1, 2, 3]);
    }
  };

  const toggle = (l: HeatLevel) => {
    if (mode === "only") {
      onChange([l]);
      return;
    }
    if (heat.includes(l)) {
      if (heat.length > 1) {
        onChange(heat.filter((x) => x !== l).sort() as HeatLevel[]);
      }
    } else {
      onChange([...heat, l].sort() as HeatLevel[]);
    }
  };

  const description = useMemo(() => {
    if (mode === "only") {
      const lvl = heat[0] ?? 1;
      return `Seul le niveau ${HEAT_LABELS[lvl].name.toLowerCase()} sera utilisé.`;
    }
    const names = heat
      .map((l) => HEAT_LABELS[l].name.toLowerCase())
      .join(", ");
    return `Tirage aléatoire parmi : ${names}.`;
  }, [heat, mode]);

  return (
    <div className="space-y-3">
      {/* Mode segmented toggle */}
      <div className="inline-flex w-full rounded-full border border-white/10 bg-white/5 p-1">
        <ModePill
          active={mode === "random"}
          onClick={() => switchMode("random")}
          icon={<Shuffle className="h-3.5 w-3.5" />}
          label="Aléatoire"
        />
        <ModePill
          active={mode === "only"}
          onClick={() => switchMode("only")}
          icon={<Target className="h-3.5 w-3.5" />}
          label="Uniquement"
        />
      </div>

      {/* Levels */}
      <div className="grid grid-cols-3 gap-2">
        {([1, 2, 3] as HeatLevel[]).map((l) => (
          <LevelButton
            key={l}
            level={l}
            selected={heat.includes(l)}
            disabled={
              mode === "random" && heat.length === 1 && heat.includes(l)
            }
            onClick={() => toggle(l)}
          />
        ))}
      </div>

      <p className="text-[11px] text-white/55 leading-snug">{description}</p>
    </div>
  );
}

function ModePill({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${
        active
          ? "bg-gradient-to-r from-ember-500 to-velvet-600 text-white shadow-md"
          : "text-white/60 hover:text-white"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function LevelButton({
  level,
  selected,
  disabled,
  onClick,
}: {
  level: HeatLevel;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-2xl border px-2 py-3 flex flex-col items-center gap-1.5 transition text-center ${
        selected
          ? "border-ember-500 bg-ember-500/10"
          : "border-white/10 hover:bg-white/5"
      } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      <div className="flex items-center gap-0.5" aria-hidden>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="inline-block leading-none text-base"
            style={{
              filter:
                i <= level
                  ? "none"
                  : "grayscale(1) brightness(0.45) opacity(0.55)",
            }}
          >
            🔥
          </span>
        ))}
      </div>
      <div
        className={`text-xs font-semibold ${
          selected ? "text-white" : "text-white/70"
        }`}
      >
        {HEAT_LABELS[level].name}
      </div>
    </button>
  );
}
