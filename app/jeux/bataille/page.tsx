"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Swords, Trophy, RotateCcw } from "lucide-react";
import Link from "next/link";
import { BattleCard, SUIT_META, buildBattleDeck } from "@/data/battle";
import { shuffle } from "@/lib/utils";
import { useCouple } from "@/lib/couple";

type Round = {
  p1: BattleCard;
  p2: BattleCard;
  winner: 1 | 2 | 0; // 0 = tie
};

export default function BattlePage() {
  const { config } = useCouple();
  const [deckSeed, setDeckSeed] = useState(0);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [round, setRound] = useState<Round | null>(null);
  const [flipped, setFlipped] = useState(false);

  const deck = useMemo(() => {
    // Keep full 52 but bias dares via heat filter on resulting dares
    // We'll still draw randomly; if drawn card's dare-level isn't allowed,
    // we allow it (battle = chance). The bias only affects the RESULT text
    // using heat-preferred level via config.
    return shuffle(buildBattleDeck());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckSeed]);

  const [deckIndex, setDeckIndex] = useState(0);

  const nameA = config.p1 || "Joueur A";
  const nameB = config.p2 || "Joueur B";

  const drawRound = () => {
    setFlipped(false);
    if (deckIndex + 2 > deck.length) {
      setDeckSeed((s) => s + 1);
      setDeckIndex(0);
      return;
    }
    const p1 = deck[deckIndex];
    const p2 = deck[deckIndex + 1];
    const winner: 1 | 2 | 0 =
      p1.rank > p2.rank ? 1 : p1.rank < p2.rank ? 2 : 0;
    setRound({ p1, p2, winner });
    setDeckIndex((i) => i + 2);
    window.setTimeout(() => setFlipped(true), 450);
    if (winner === 1) setScoreA((s) => s + 1);
    if (winner === 2) setScoreB((s) => s + 1);
  };

  const reset = () => {
    setScoreA(0);
    setScoreB(0);
    setRound(null);
    setDeckIndex(0);
    setDeckSeed((s) => s + 1);
  };

  const winnerName = round
    ? round.winner === 1
      ? nameA
      : round.winner === 2
      ? nameB
      : null
    : null;
  const loserName = round
    ? round.winner === 1
      ? nameB
      : round.winner === 2
      ? nameA
      : null
    : null;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 pb-24">
        <Link
          href="/#jeux"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>

        <div className="mt-4">
          <div className="flex items-center gap-2 text-velvet-300">
            <Swords className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Inspiré de Kama Sutra Battle
            </span>
          </div>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Bataille Coquine
          </h1>
          <p className="mt-1 text-sm text-white/60">
            52 cartes. Plus forte carte impose le défi à l&apos;autre.
          </p>
        </div>

        {/* Score */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6">
          <ScorePanel
            label={nameA}
            score={scoreA}
            color="from-ember-500 to-velvet-600"
          />
          <ScorePanel
            label={nameB}
            score={scoreB}
            color="from-midnight-500 to-velvet-600"
          />
        </div>

        {/* Arena */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-8 items-stretch">
          <CardSlot
            card={round?.p1}
            side={nameA}
            flipped={flipped}
            winner={round?.winner === 1}
          />
          <CardSlot
            card={round?.p2}
            side={nameB}
            flipped={flipped}
            winner={round?.winner === 2}
          />
        </div>

        {/* Result */}
        <AnimatePresence mode="wait">
          {round && flipped && (
            <motion.div
              key={`res-${deckIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 glass-strong rounded-3xl p-6 sm:p-7 noise relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-velvet-300 text-xs font-semibold uppercase tracking-[0.22em]">
                <Trophy className="h-4 w-4" />
                {round.winner === 0
                  ? "Égalité parfaite"
                  : `${winnerName} gagne la manche`}
              </div>
              <p className="mt-3 font-display text-xl sm:text-2xl font-medium leading-snug">
                {round.winner === 0 ? (
                  <>
                    Vous tirez la même valeur. Offrez-vous un baiser long, puis
                    repiochez.
                  </>
                ) : (
                  <>
                    <span className="text-ember-400">{loserName}</span> exécute
                    :{" "}
                    {round.winner === 1 ? round.p1.dare : round.p2.dare}
                  </>
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={drawRound}
            className="btn-hot rounded-full px-8 py-4 text-base font-semibold"
          >
            {round ? "Manche suivante" : "Tirer la première manche"}
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/5"
          >
            <RotateCcw className="h-4 w-4" /> Recommencer
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ScorePanel({
  label,
  score,
  color,
}: {
  label: string;
  score: number;
  color: string;
}) {
  return (
    <div className={`relative rounded-2xl p-0.5 bg-gradient-to-br ${color}`}>
      <div className="rounded-[calc(1rem-2px)] bg-[#0d0513]/90 p-4 sm:p-5 flex items-center justify-between">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 truncate">
            {label}
          </div>
          <div className="font-display text-4xl sm:text-5xl font-bold mt-0.5">
            {score}
          </div>
        </div>
        <Trophy className="h-6 w-6 text-white/30 shrink-0" />
      </div>
    </div>
  );
}

function CardSlot({
  card,
  side,
  flipped,
  winner,
}: {
  card?: BattleCard;
  side: string;
  flipped: boolean;
  winner?: boolean;
}) {
  if (!card) {
    return (
      <div className="aspect-[2/3] rounded-3xl border border-dashed border-white/10 flex items-center justify-center text-white/30 text-sm px-2 text-center">
        {side}
      </div>
    );
  }
  const suitMeta = SUIT_META[card.suit];
  return (
    <div className="perspective">
      <motion.div
        animate={{
          rotateY: flipped ? 0 : 180,
          scale: winner && flipped ? 1.04 : 1,
        }}
        transition={{ duration: 0.6 }}
        className={`preserve-3d relative aspect-[2/3] w-full ${
          winner && flipped ? "glow-ember" : ""
        }`}
      >
        {/* Back */}
        <div className="backface-hidden absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-br from-ember-500 to-velvet-600">
          <div className="rounded-[calc(1rem-2px)] h-full w-full bg-[#0d0513]/95 flex items-center justify-center relative overflow-hidden noise">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                AfterGame
              </div>
              <div className="font-display text-2xl mt-1 shimmer-text">
                Bataille
              </div>
              <div className="text-[10px] mt-1 text-white/40 truncate px-2">
                {side}
              </div>
            </div>
          </div>
        </div>
        {/* Front */}
        <div
          className={`backface-hidden rotate-y-180 absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-br ${suitMeta.color}`}
        >
          <div className="rounded-[calc(1rem-2px)] h-full w-full bg-[#fff3f5] text-midnight-950 p-3 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between font-display font-bold">
              <div className="text-left leading-none">
                <div className="text-2xl sm:text-3xl">{card.label}</div>
                <div className="text-lg">{suitMeta.emoji}</div>
              </div>
            </div>
            <div className="text-center font-display text-5xl sm:text-7xl">
              {suitMeta.emoji}
            </div>
            <div className="flex items-center justify-between font-display font-bold rotate-180">
              <div className="text-left leading-none">
                <div className="text-2xl sm:text-3xl">{card.label}</div>
                <div className="text-lg">{suitMeta.emoji}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
