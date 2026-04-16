"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, PieChart } from "lucide-react";
import Link from "next/link";
import { SECTORS, rollSector } from "@/data/roulette";
import { useCouple } from "@/lib/couple";
import { useProgressTick } from "@/lib/progressTick";

const SEG = 360 / SECTORS.length; // 45 deg

export default function RoulettePage() {
  const { config } = useCouple();
  const tick = useProgressTick();
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<{
    sectorIdx: number;
    dare: string;
  } | null>(null);
  const lastRot = useRef(0);

  const allowedIdx = useMemo(
    () =>
      SECTORS.map((s, i) => ({ s, i }))
        .filter(({ s }) => config.heat.includes(s.level))
        .map(({ i }) => i),
    [config.heat]
  );

  const spin = () => {
    if (spinning) return;
    tick();
    setSpinning(true);
    setResult(null);
    // Pick only among allowed sectors given the heat config
    const pool = allowedIdx.length ? allowedIdx : SECTORS.map((_, i) => i);
    const sectorIdx = pool[Math.floor(Math.random() * pool.length)];
    // Needle points up at 0°. We want the chosen sector's center at 0°.
    // Sector i covers [i*SEG ... (i+1)*SEG] starting at top, rotating clockwise.
    // Its center angle (from top, clockwise) = i*SEG + SEG/2
    // To align under the needle, we rotate the wheel by -(center) + full turns.
    const center = sectorIdx * SEG + SEG / 2;
    const turns = 5 + Math.floor(Math.random() * 3); // 5..7
    const newRot = turns * 360 + (360 - center);
    const target = lastRot.current + newRot;
    lastRot.current = target;
    setRotation(target);
    window.setTimeout(() => {
      const sector = SECTORS[sectorIdx];
      setResult({ sectorIdx, dare: rollSector(sector) });
      setSpinning(false);
    }, 3300);
  };

  const sector = result ? SECTORS[result.sectorIdx] : null;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-6 pb-20">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>
        <div className="mt-4">
          <div className="flex items-center gap-2 text-velvet-300">
            <PieChart className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Hasard & Plaisir
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Roulette des Gages
          </h1>
          <p className="mt-1 text-sm text-white/60">
            8 secteurs thématiques, 32 défis possibles. Le hasard décide de la
            nuance.
          </p>
        </div>

        {/* Wheel */}
        <div className="relative mt-12 mx-auto h-[320px] w-[320px] sm:h-[440px] sm:w-[440px]">
          {/* Needle */}
          <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 z-20">
            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-ember-500 drop-shadow-[0_0_10px_rgba(237,15,35,0.8)]" />
          </div>

          <motion.div
            animate={{ rotate: rotation }}
            transition={{ duration: 3.3, ease: [0.17, 0.67, 0.15, 1] }}
            className="absolute inset-0"
          >
            <svg viewBox="-100 -100 200 200" className="w-full h-full drop-shadow-[0_10px_40px_rgba(228,51,122,0.35)]">
              <defs>
                {SECTORS.map((s, i) => (
                  <linearGradient key={i} id={`g${i}`} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor={s.from} />
                    <stop offset="1" stopColor={s.to} />
                  </linearGradient>
                ))}
              </defs>
              {SECTORS.map((s, i) => {
                const start = (i * SEG - 90) * (Math.PI / 180);
                const end = ((i + 1) * SEG - 90) * (Math.PI / 180);
                const x1 = 98 * Math.cos(start);
                const y1 = 98 * Math.sin(start);
                const x2 = 98 * Math.cos(end);
                const y2 = 98 * Math.sin(end);
                const largeArc = SEG > 180 ? 1 : 0;
                const midAngle = ((i * SEG + SEG / 2) - 90) * (Math.PI / 180);
                const lx = 60 * Math.cos(midAngle);
                const ly = 60 * Math.sin(midAngle);
                return (
                  <g key={s.id}>
                    <path
                      d={`M0 0 L${x1} ${y1} A98 98 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={`url(#g${i})`}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="0.6"
                    />
                    <text
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="9"
                      fontWeight="700"
                      fill="white"
                      style={{
                        transform: `rotate(${i * SEG + SEG / 2}deg)`,
                        transformOrigin: `${lx}px ${ly}px`,
                      }}
                    >
                      {s.emoji} {s.label}
                    </text>
                  </g>
                );
              })}
              {/* Center */}
              <circle cx="0" cy="0" r="18" fill="#0d0513" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <circle cx="0" cy="0" r="6" fill="#e3337a" />
            </svg>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={spin}
            disabled={spinning}
            className="btn-hot rounded-full px-8 py-4 text-base font-semibold disabled:opacity-60"
          >
            {spinning ? "Ça tourne..." : result ? "Relancer la roulette" : "Faire tourner"}
          </button>
        </div>

        {result && sector && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-3xl p-0.5"
            style={{
              background: `linear-gradient(135deg, ${sector.from}, ${sector.to})`,
            }}
          >
            <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/92 p-7 sm:p-8 noise relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                <span>{sector.emoji}</span> {sector.label} · Niveau{" "}
                {sector.level}
              </div>
              <p className="mt-3 font-display text-2xl sm:text-3xl leading-snug font-medium">
                {result.dare}
              </p>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  );
}
