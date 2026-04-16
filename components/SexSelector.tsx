"use client";

import type { Sex } from "@/lib/couple";

const OPTIONS: { value: Sex; label: string; symbol: string }[] = [
  { value: "F", label: "Femme", symbol: "♀" },
  { value: "M", label: "Homme", symbol: "♂" },
];

export function SexSelector({
  value,
  onChange,
}: {
  value: Sex;
  onChange: (s: Sex) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-0.5 text-[11px]">
      {OPTIONS.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 transition ${
              active
                ? "bg-gradient-to-r from-ember-500 to-velvet-600 text-white font-semibold"
                : "text-white/55 hover:text-white"
            }`}
            aria-pressed={active}
          >
            <span className="text-sm leading-none">{o.symbol}</span>
            <span>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
