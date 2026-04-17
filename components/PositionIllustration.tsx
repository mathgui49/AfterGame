"use client";

/**
 * Schematic SVG illustrations for sex positions — abstract silhouettes
 * (head = circle, torso = rounded rect, limbs = stylised shapes). Two colors
 * distinguish the two players. Never realistic, always tasteful.
 */

const GRAD_A = "posGradA";
const GRAD_B = "posGradB";

function Defs() {
  return (
    <defs>
      <linearGradient id={GRAD_A} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff6266" />
        <stop offset="1" stopColor="#e3337a" />
      </linearGradient>
      <linearGradient id={GRAD_B} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#9e87f8" />
        <stop offset="1" stopColor="#6f3be6" />
      </linearGradient>
    </defs>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 220 140"
      className="w-full h-auto max-w-[260px] mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

// --- Individual position SVGs ---

function Missionnaire() {
  return (
    <Wrapper>
      <Defs />
      {/* Lying body (A) : face up, horizontal */}
      <ellipse cx="110" cy="90" rx="85" ry="14" fill={`url(#${GRAD_A})`} opacity="0.85" />
      <circle cx="30" cy="90" r="11" fill={`url(#${GRAD_A})`} />
      {/* Legs apart at knees */}
      <path d="M180 80 Q205 70 205 50" stroke={`url(#${GRAD_A})`} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M180 100 Q205 110 205 130" stroke={`url(#${GRAD_A})`} strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Top body (B) : on top, face to face, parallel */}
      <ellipse cx="110" cy="60" rx="75" ry="12" fill={`url(#${GRAD_B})`} />
      <circle cx="40" cy="60" r="10" fill={`url(#${GRAD_B})`} />
      {/* Arms supporting */}
      <path d="M90 60 Q85 75 85 90" stroke={`url(#${GRAD_B})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M130 60 Q135 75 135 90" stroke={`url(#${GRAD_B})`} strokeWidth="6" fill="none" strokeLinecap="round" />
    </Wrapper>
  );
}

function Levrette() {
  return (
    <Wrapper>
      <Defs />
      {/* Body A : on all fours, facing left */}
      <ellipse cx="80" cy="90" rx="55" ry="12" fill={`url(#${GRAD_A})`} />
      <circle cx="30" cy="85" r="10" fill={`url(#${GRAD_A})`} />
      <path d="M60 100 L55 125" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M90 100 L85 125" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M60 80 L55 60" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M90 80 L85 60" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      {/* Body B : kneeling behind */}
      <ellipse cx="155" cy="80" rx="30" ry="20" fill={`url(#${GRAD_B})`} />
      <circle cx="175" cy="55" r="11" fill={`url(#${GRAD_B})`} />
      <path d="M140 100 L138 128" stroke={`url(#${GRAD_B})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M170 100 L172 128" stroke={`url(#${GRAD_B})`} strokeWidth="7" strokeLinecap="round" />
    </Wrapper>
  );
}

function Cuillere() {
  return (
    <Wrapper>
      <Defs />
      {/* Body A : curled, facing right */}
      <path d="M70 70 Q55 40 85 35 Q140 45 150 75 Q140 100 85 105 Q55 100 70 70 Z" fill={`url(#${GRAD_A})`} opacity="0.9" />
      <circle cx="65" cy="55" r="10" fill={`url(#${GRAD_A})`} />
      {/* Body B : behind, matching curl */}
      <path d="M95 95 Q80 70 110 65 Q165 75 175 100 Q165 125 110 130 Q80 125 95 95 Z" fill={`url(#${GRAD_B})`} opacity="0.95" />
      <circle cx="90" cy="80" r="10" fill={`url(#${GRAD_B})`} />
      {/* Arm of B wrapping around A */}
      <path d="M140 80 Q160 65 175 75" stroke={`url(#${GRAD_B})`} strokeWidth="6" fill="none" strokeLinecap="round" />
    </Wrapper>
  );
}

function SixNine() {
  return (
    <Wrapper>
      <Defs />
      {/* Body A : horizontal, head on right */}
      <ellipse cx="100" cy="55" rx="85" ry="11" fill={`url(#${GRAD_A})`} />
      <circle cx="185" cy="55" r="10" fill={`url(#${GRAD_A})`} />
      <path d="M30 60 L5 75" stroke={`url(#${GRAD_A})`} strokeWidth="6" strokeLinecap="round" />
      <path d="M30 50 L5 40" stroke={`url(#${GRAD_A})`} strokeWidth="6" strokeLinecap="round" />
      {/* Body B : horizontal, head on left, opposite */}
      <ellipse cx="120" cy="85" rx="85" ry="11" fill={`url(#${GRAD_B})`} />
      <circle cx="35" cy="85" r="10" fill={`url(#${GRAD_B})`} />
      <path d="M190 80 L215 65" stroke={`url(#${GRAD_B})`} strokeWidth="6" strokeLinecap="round" />
      <path d="M190 90 L215 100" stroke={`url(#${GRAD_B})`} strokeWidth="6" strokeLinecap="round" />
    </Wrapper>
  );
}

function Andromaque() {
  return (
    <Wrapper>
      <Defs />
      {/* Body A : lying on back */}
      <ellipse cx="110" cy="100" rx="85" ry="13" fill={`url(#${GRAD_A})`} opacity="0.85" />
      <circle cx="30" cy="100" r="10" fill={`url(#${GRAD_A})`} />
      <path d="M185 100 L210 95" stroke={`url(#${GRAD_A})`} strokeWidth="6" strokeLinecap="round" />
      {/* Body B : sitting astride on top */}
      <ellipse cx="130" cy="60" rx="22" ry="35" fill={`url(#${GRAD_B})`} />
      <circle cx="130" cy="25" r="11" fill={`url(#${GRAD_B})`} />
      <path d="M110 80 L90 100" stroke={`url(#${GRAD_B})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M150 80 L170 100" stroke={`url(#${GRAD_B})`} strokeWidth="7" strokeLinecap="round" />
    </Wrapper>
  );
}

function Lotus() {
  return (
    <Wrapper>
      <Defs />
      {/* Body A : sitting on left, facing right */}
      <ellipse cx="80" cy="80" rx="22" ry="35" fill={`url(#${GRAD_A})`} />
      <circle cx="80" cy="45" r="11" fill={`url(#${GRAD_A})`} />
      <path d="M95 95 L120 110" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      {/* Body B : sitting on right, facing left, legs wrapping around A */}
      <ellipse cx="140" cy="80" rx="22" ry="35" fill={`url(#${GRAD_B})`} />
      <circle cx="140" cy="45" r="11" fill={`url(#${GRAD_B})`} />
      <path d="M125 95 L100 110" stroke={`url(#${GRAD_B})`} strokeWidth="7" strokeLinecap="round" />
      {/* Arms locked */}
      <path d="M95 55 Q110 48 125 55" stroke="rgba(255,255,255,0.35)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Wrapper>
  );
}

function ContreMur() {
  return (
    <Wrapper>
      <Defs />
      {/* Wall on right */}
      <rect x="190" y="0" width="30" height="140" fill="rgba(255,255,255,0.08)" />
      {/* Body A : standing, holding */}
      <ellipse cx="120" cy="75" rx="22" ry="40" fill={`url(#${GRAD_A})`} />
      <circle cx="120" cy="30" r="12" fill={`url(#${GRAD_A})`} />
      <path d="M115 115 L110 135" stroke={`url(#${GRAD_A})`} strokeWidth="8" strokeLinecap="round" />
      <path d="M125 115 L130 135" stroke={`url(#${GRAD_A})`} strokeWidth="8" strokeLinecap="round" />
      {/* Body B : lifted against wall */}
      <ellipse cx="165" cy="70" rx="20" ry="32" fill={`url(#${GRAD_B})`} />
      <circle cx="165" cy="32" r="11" fill={`url(#${GRAD_B})`} />
      {/* Legs wrapped */}
      <path d="M145 80 Q120 70 105 75" stroke={`url(#${GRAD_B})`} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M145 95 Q120 100 108 90" stroke={`url(#${GRAD_B})`} strokeWidth="7" fill="none" strokeLinecap="round" />
    </Wrapper>
  );
}

function BordLit() {
  return (
    <Wrapper>
      <Defs />
      {/* Bed edge */}
      <rect x="0" y="95" width="150" height="45" fill="rgba(255,255,255,0.08)" rx="4" />
      <line x1="150" y1="95" x2="150" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      {/* Body A : lying on back, legs dangling */}
      <ellipse cx="75" cy="80" rx="55" ry="11" fill={`url(#${GRAD_A})`} opacity="0.85" />
      <circle cx="25" cy="80" r="10" fill={`url(#${GRAD_A})`} />
      <path d="M130 85 L155 110" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      <path d="M130 75 L155 55" stroke={`url(#${GRAD_A})`} strokeWidth="7" strokeLinecap="round" />
      {/* Body B : standing at bed edge */}
      <ellipse cx="180" cy="65" rx="20" ry="35" fill={`url(#${GRAD_B})`} />
      <circle cx="180" cy="25" r="11" fill={`url(#${GRAD_B})`} />
      <path d="M175 100 L172 135" stroke={`url(#${GRAD_B})`} strokeWidth="8" strokeLinecap="round" />
      <path d="M185 100 L188 135" stroke={`url(#${GRAD_B})`} strokeWidth="8" strokeLinecap="round" />
    </Wrapper>
  );
}

function FaceAFace() {
  return (
    <Wrapper>
      <Defs />
      {/* Two bodies lying horizontally, facing each other */}
      <ellipse cx="60" cy="65" rx="55" ry="11" fill={`url(#${GRAD_A})`} />
      <circle cx="110" cy="65" r="11" fill={`url(#${GRAD_A})`} />
      <ellipse cx="160" cy="90" rx="55" ry="11" fill={`url(#${GRAD_B})`} />
      <circle cx="110" cy="90" r="11" fill={`url(#${GRAD_B})`} />
      {/* Hand touching */}
      <path d="M100 75 Q110 80 120 78" stroke="rgba(255,255,255,0.35)" strokeWidth="3" fill="none" />
    </Wrapper>
  );
}

function Chaise() {
  return (
    <Wrapper>
      <Defs />
      {/* Chair */}
      <rect x="80" y="85" width="60" height="12" fill="rgba(255,255,255,0.1)" />
      <rect x="80" y="97" width="8" height="35" fill="rgba(255,255,255,0.08)" />
      <rect x="132" y="97" width="8" height="35" fill="rgba(255,255,255,0.08)" />
      <rect x="132" y="50" width="8" height="45" fill="rgba(255,255,255,0.08)" />
      {/* Body A : sitting */}
      <ellipse cx="110" cy="65" rx="20" ry="25" fill={`url(#${GRAD_A})`} />
      <circle cx="110" cy="35" r="11" fill={`url(#${GRAD_A})`} />
      {/* Body B : sitting on A, facing */}
      <ellipse cx="110" cy="45" rx="18" ry="22" fill={`url(#${GRAD_B})`} opacity="0.9" />
      <circle cx="110" cy="18" r="10" fill={`url(#${GRAD_B})`} />
      {/* B's legs wrapping A */}
      <path d="M92 55 Q75 70 80 95" stroke={`url(#${GRAD_B})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M128 55 Q145 70 140 95" stroke={`url(#${GRAD_B})`} strokeWidth="6" fill="none" strokeLinecap="round" />
    </Wrapper>
  );
}

function DosADos() {
  return (
    <Wrapper>
      <Defs />
      <ellipse cx="85" cy="80" rx="22" ry="32" fill={`url(#${GRAD_A})`} />
      <circle cx="85" cy="40" r="11" fill={`url(#${GRAD_A})`} />
      <ellipse cx="135" cy="80" rx="22" ry="32" fill={`url(#${GRAD_B})`} />
      <circle cx="135" cy="40" r="11" fill={`url(#${GRAD_B})`} />
      {/* Line between indicating back-to-back */}
      <line x1="110" y1="50" x2="110" y2="115" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" strokeWidth="1.5" />
    </Wrapper>
  );
}

function CoteACote() {
  return (
    <Wrapper>
      <Defs />
      <ellipse cx="110" cy="55" rx="90" ry="11" fill={`url(#${GRAD_A})`} />
      <circle cx="25" cy="55" r="10" fill={`url(#${GRAD_A})`} />
      <ellipse cx="110" cy="90" rx="90" ry="11" fill={`url(#${GRAD_B})`} />
      <circle cx="25" cy="90" r="10" fill={`url(#${GRAD_B})`} />
    </Wrapper>
  );
}

export const POSITION_IDS = [
  "missionnaire",
  "levrette",
  "cuillere",
  "69",
  "andromaque",
  "lotus",
  "contre-mur",
  "bord-lit",
  "face-a-face",
  "chaise",
  "dos-a-dos",
  "cote-a-cote",
] as const;

export type PositionId = (typeof POSITION_IDS)[number];

export function PositionIllustration({ position }: { position?: string }) {
  if (!position) return null;
  switch (position) {
    case "missionnaire":
      return <Missionnaire />;
    case "levrette":
      return <Levrette />;
    case "cuillere":
      return <Cuillere />;
    case "69":
      return <SixNine />;
    case "andromaque":
      return <Andromaque />;
    case "lotus":
      return <Lotus />;
    case "contre-mur":
      return <ContreMur />;
    case "bord-lit":
      return <BordLit />;
    case "face-a-face":
      return <FaceAFace />;
    case "chaise":
      return <Chaise />;
    case "dos-a-dos":
      return <DosADos />;
    case "cote-a-cote":
      return <CoteACote />;
    default:
      return null;
  }
}
