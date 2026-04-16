"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LevelBadge } from "@/components/LevelBadge";
import { TurnBar } from "@/components/TurnBar";
import {
  CATEGORY_META,
  Category,
  HOT_CARDS,
  HotCard,
} from "@/data/hotCards";
import { HARD_CARDS } from "@/data/hardCards";
import { useCouple } from "@/lib/couple";
import { useCustomCards } from "@/lib/customCards";
import { pickProgressiveLevel, shouldUseHard } from "@/lib/progressive";
import { useProgressTick } from "@/lib/progressTick";
import { renderCard } from "@/lib/templater";
import { pick, shuffle } from "@/lib/utils";
import { ArrowLeft, Flame, RefreshCw, SlidersHorizontal, Shuffle } from "lucide-react";
import Link from "next/link";

const ALL_CATEGORIES: Category[] = [
  "action",
  "verite",
  "defis",
  "positions",
  "sijepouvais",
  "quiestleplus",
  "connais",
  "bons",
];

export default function HotCardsPage() {
  const { config, update } = useCouple();
  const { cards: customCards } = useCustomCards();
  const tick = useProgressTick();
  const [categories, setCategories] = useState<Category[]>([...ALL_CATEGORIES]);
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const [seed, setSeed] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [turn, setTurn] = useState<0 | 1>(0);
  const [progressiveCard, setProgressiveCard] = useState<HotCard | null>(null);

  const deck: HotCard[] = useMemo(() => {
    const all: HotCard[] = [
      ...HOT_CARDS,
      ...customCards,
      ...(config.hard ? HARD_CARDS : []),
    ];
    const oneShot =
      config.relationship === "premier-soir" ||
      config.relationship === "plan-cul";
    const filtered = all.filter((c) => {
      if (config.heat.length && !config.heat.includes(c.level)) return false;
      if (categories.length && !categories.includes(c.category)) return false;
      // Weekly/monthly defis need a recurring relationship
      if (oneShot && c.category === "defis") return false;
      if (c.relationships && !c.relationships.includes(config.relationship)) {
        return false;
      }
      return true;
    });
    return shuffle(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, seed, config.heat, config.hard, config.relationship, customCards]);

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [seed, config.heat]);

  // Draw the first progressive card on mount if progressive mode is active.
  useEffect(() => {
    if (config.progressive && !progressiveCard) {
      setProgressiveCard(drawProgressiveCard(config.progressCount, categories, customCards));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.progressive]);

  const current = config.progressive ? progressiveCard : deck[index];

  const nextCard = () => {
    setFlipped(false);
    setTurn((t) => (t === 0 ? 1 : 0));
    setTimeout(() => {
      tick();
      if (config.progressive) {
        const nextCount = (config.progressCount ?? 0) + 1;
        setProgressiveCard(
          drawProgressiveCard(nextCount, categories, customCards)
        );
      } else {
        setIndex((i) => (deck.length ? (i + 1) % deck.length : 0));
      }
    }, 250);
  };

  const toggleCategory = (c: Category) => {
    setCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

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

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-velvet-300">
              <Flame className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Jeu principal
              </span>
            </div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Hot Cards
            </h1>
            <p className="mt-1 text-sm text-white/60">
              {deck.length} cartes filtrées selon ta chaleur et tes catégories.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters((s) => !s)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              <SlidersHorizontal className="h-4 w-4" /> Catégories
            </button>
            <button
              onClick={() => setSeed((s) => s + 1)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition"
            >
              <Shuffle className="h-4 w-4" /> Remélanger
            </button>
          </div>
        </div>

        {/* Turn bar */}
        <div className="mt-5">
          <TurnBar turn={turn} onSwap={() => setTurn(turn === 0 ? 1 : 0)} />
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="glass mt-5 rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-white/50 mb-3">
                  Catégories
                </div>
                <div className="flex gap-2 flex-wrap">
                  {ALL_CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleCategory(c)}
                      className={`rounded-full px-3 py-1.5 text-xs sm:text-sm border transition ${
                        categories.includes(c)
                          ? "border-velvet-500 bg-velvet-500/15 text-white"
                          : "border-white/10 text-white/60 hover:bg-white/5"
                      }`}
                    >
                      {CATEGORY_META[c].emoji} {CATEGORY_META[c].label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-white/40 mt-4">
                  Le niveau de chaleur se règle dans les paramètres ⚙️ en haut
                  à droite.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Flipper */}
        <div className="mt-8 flex flex-col items-center">
          {current ? (
            <motion.div
              key={`${current.id}-${seed}`}
              initial={{ y: 20, opacity: 0, rotate: -4 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.45 }}
              className="perspective w-full max-w-md"
            >
              <div
                onClick={() => setFlipped((f) => !f)}
                className={`preserve-3d relative mx-auto h-[470px] sm:h-[540px] w-full cursor-pointer transition-transform duration-700 ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                {/* BACK */}
                <div className="backface-hidden absolute inset-0 rounded-[28px] p-0.5 bg-gradient-to-br from-ember-500 via-velvet-500 to-midnight-600 glow-velvet">
                  <div className="h-full w-full rounded-[26px] bg-[#0d0513]/85 flex flex-col items-center justify-center relative overflow-hidden noise">
                    <div className="absolute inset-0 bg-ember-glow pointer-events-none" />
                    <Flame className="absolute top-6 right-6 h-10 w-10 text-ember-400/60 flame-filter animate-flame" />
                    <Flame className="absolute bottom-6 left-6 h-8 w-8 text-velvet-400/60 flame-filter animate-flame" />

                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      AfterGame
                    </div>
                    <div className="mt-4 font-display text-6xl sm:text-7xl font-bold">
                      <span className="shimmer-text">Hot</span>
                    </div>
                    <div className="mt-2 font-display text-4xl sm:text-5xl font-bold italic text-white/85">
                      Cards
                    </div>
                    <div className="mt-8 text-sm text-white/60 flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" /> Tape pour révéler
                    </div>
                  </div>
                </div>
                {/* FRONT */}
                <div className="backface-hidden rotate-y-180 absolute inset-0 rounded-[28px] p-0.5 bg-gradient-to-br from-ember-500 via-velvet-500 to-midnight-600 glow-velvet">
                  <div className="h-full w-full rounded-[26px] bg-[#0d0513]/95 p-7 sm:p-8 flex flex-col justify-between noise relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                        <span>{CATEGORY_META[current.category].emoji}</span>
                        <span className="uppercase tracking-widest text-[10px]">
                          {CATEGORY_META[current.category].label}
                        </span>
                      </div>
                      <LevelBadge level={current.level} />
                    </div>

                    <p
                      className="text-[22px] sm:text-[26px] leading-snug font-display font-medium [&_b]:text-ember-400 [&_b]:font-bold [&_b]:not-italic"
                      dangerouslySetInnerHTML={{
                        __html: renderCard(
                          current.prompt,
                          turn === 0
                            ? { name: config.p1 || "Toi", sex: config.p1Sex }
                            : { name: config.p2 || "Partenaire", sex: config.p2Sex },
                          turn === 0
                            ? { name: config.p2 || "Partenaire", sex: config.p2Sex }
                            : { name: config.p1 || "Toi", sex: config.p1Sex },
                          { name: config.p1 || "Toi", sex: config.p1Sex },
                          { name: config.p2 || "Partenaire", sex: config.p2Sex },
                          config.relationship
                        ),
                      }}
                    />


                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>
                        {index + 1} / {deck.length}
                      </span>
                      <span className="uppercase tracking-widest">
                        {CATEGORY_META[current.category].description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="glass mt-6 rounded-2xl p-8 text-center text-white/60">
              Aucune carte ne correspond à ces catégories + niveau de chaleur.
              Ajuste-les pour lancer une partie.
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setFlipped((f) => !f)}
              className="rounded-full px-5 py-3 text-sm border border-white/15 hover:bg-white/5 transition"
              disabled={!current}
            >
              {flipped ? "Retourner" : "Révéler"}
            </button>
            <button
              onClick={nextCard}
              className="btn-hot rounded-full px-7 py-3 text-sm font-semibold"
              disabled={!current}
            >
              Carte suivante
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/**
 * Progressive draw: pick a level from the progression tier, decide if this
 * draw pulls from the Hard pool, then return a random matching card.
 */
function drawProgressiveCard(
  count: number,
  categories: Category[],
  customCards: HotCard[]
): HotCard | null {
  const level = pickProgressiveLevel(count);
  const useHard = shouldUseHard(count, level);
  const pool: HotCard[] = useHard
    ? HARD_CARDS
    : [...HOT_CARDS, ...customCards];
  const filtered = pool.filter(
    (c) =>
      c.level === level &&
      (!categories.length || categories.includes(c.category))
  );
  if (filtered.length === 0) {
    // Fallback: ignore level constraint but keep category.
    const fb = (useHard ? HARD_CARDS : [...HOT_CARDS, ...customCards]).filter(
      (c) => !categories.length || categories.includes(c.category)
    );
    return fb.length ? pick(fb) : null;
  }
  return pick(filtered);
}
