"use client";

import { useCouple } from "@/lib/couple";

/**
 * Ambient background for Hard mode. Abstract body silhouettes described by
 * soft Bezier curves, heavily blurred, positioned around the viewport and
 * mixed with warm color blobs. Evocative, not explicit — only renders when
 * the couple has explicitly enabled Hard mode.
 */
export function HardBackground() {
  const { config } = useCouple();
  if (!config.hard) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Warm ambient blobs */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 520px 700px at 12% 22%, rgba(255,120,150,0.24), transparent 62%),
            radial-gradient(ellipse 460px 620px at 88% 78%, rgba(237,15,35,0.22), transparent 58%),
            radial-gradient(ellipse 420px 500px at 55% 108%, rgba(180,60,140,0.22), transparent 55%)
          `,
        }}
      />

      {/* Silhouette 1 — left, back curve */}
      <svg
        className="absolute top-[6%] -left-[10%] w-[56vw] max-w-[520px] h-auto opacity-60"
        viewBox="0 0 100 200"
        style={{ filter: "blur(38px)" }}
      >
        <defs>
          <linearGradient id="sil1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(255,110,140,0.55)" />
            <stop offset="1" stopColor="rgba(111,59,230,0.35)" />
          </linearGradient>
        </defs>
        <path
          d="M50 8 Q56 14 55 24 Q63 28 70 44 Q73 56 68 70 Q60 76 58 86 Q60 102 65 122 Q68 144 62 172 L38 172 Q32 144 35 122 Q40 102 42 86 Q40 76 32 70 Q27 56 30 44 Q37 28 45 24 Q44 14 50 8 Z"
          fill="url(#sil1)"
        />
      </svg>

      {/* Silhouette 2 — right, hip / torso */}
      <svg
        className="absolute bottom-[8%] -right-[12%] w-[52vw] max-w-[480px] h-auto opacity-55"
        viewBox="0 0 100 200"
        style={{ filter: "blur(42px)" }}
      >
        <defs>
          <linearGradient id="sil2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(228,51,122,0.55)" />
            <stop offset="1" stopColor="rgba(111,59,230,0.3)" />
          </linearGradient>
        </defs>
        <path
          d="M52 12 Q60 18 58 30 Q72 38 72 58 Q72 70 60 78 Q56 94 62 112 Q70 130 66 160 L34 160 Q30 130 38 112 Q44 94 40 78 Q28 70 28 58 Q28 38 42 30 Q40 18 52 12 Z"
          fill="url(#sil2)"
        />
      </svg>

      {/* Silhouette 3 — mid, intertwined curves (suggestion de duo) */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[700px] h-auto opacity-30"
        viewBox="0 0 200 200"
        style={{ filter: "blur(50px)" }}
      >
        <defs>
          <radialGradient id="sil3" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0" stopColor="rgba(255,140,160,0.5)" />
            <stop offset="1" stopColor="rgba(20,5,25,0)" />
          </radialGradient>
        </defs>
        <path
          d="M60 60 Q80 40 110 60 Q135 80 120 110 Q100 140 75 130 Q45 115 50 85 Q55 70 60 60 Z"
          fill="url(#sil3)"
        />
        <path
          d="M90 120 Q110 95 140 110 Q160 130 145 155 Q125 175 100 165 Q75 150 80 130 Q85 125 90 120 Z"
          fill="url(#sil3)"
        />
      </svg>

      {/* Top glow for added warmth */}
      <div
        className="absolute inset-x-0 top-0 h-[50vh]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(237,15,35,0.18), transparent 70%)",
        }}
      />
    </div>
  );
}
