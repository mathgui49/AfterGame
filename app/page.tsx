"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  HelpCircle,
  Dice5,
  Disc3,
  HeartHandshake,
  Ticket,
  Sparkles,
  ArrowRight,
  Swords,
  PieChart,
  TrendingUp,
  BookOpen,
  Music2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameTile } from "@/components/GameTile";
import { HOT_CARDS } from "@/data/hotCards";
import { TRUTHS, DARES } from "@/data/truthOrDare";
import { QUIZ_ITEMS } from "@/data/quiz";

export default function Page() {
  const totalCards = HOT_CARDS.length + TRUTHS.length + DARES.length + QUIZ_ITEMS.length;

  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-ember-glow pointer-events-none" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-velvet-600/30 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-ember-500/25 blur-3xl animate-pulse-slow" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-24 sm:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/70">
                <Flame className="h-3.5 w-3.5 text-ember-400" />
                Le jeu hot pour couples audacieux
              </div>

              <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Rallumez la
                <br />
                <span className="shimmer-text italic">flamme</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
                10 modes de jeu, scénarios guidés, playlists Spotify, mode
                lumière tamisée et tes propres cartes maison. Le tout pour
                vous deux.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#jeux"
                  className="btn-hot group rounded-full px-7 py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 no-select"
                >
                  Commencer à jouer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/a-propos"
                  className="rounded-full px-7 py-4 text-sm sm:text-base font-medium text-white/80 border border-white/15 hover:bg-white/5 transition text-center no-select"
                >
                  Comment ça marche ?
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 max-w-lg gap-6">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold">
                    {HOT_CARDS.length}+
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-wide mt-1">
                    Cartes Hot
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold">10</div>
                  <div className="text-xs text-white/50 uppercase tracking-wide mt-1">
                    Modes de jeu
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold">3</div>
                  <div className="text-xs text-white/50 uppercase tracking-wide mt-1">
                    Niveaux de chaleur
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating cards decoration */}
            <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2">
              <FloatingCards />
            </div>
          </div>
        </section>

        {/* Games grid */}
        <section id="jeux" className="relative scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-10 sm:mb-14"
            >
              <div className="flex items-center gap-2 text-velvet-300">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Choisis ton jeu
                </span>
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
                10 expériences,
                <br />
                <span className="shimmer-text">une seule nuit</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <GameTile
                href="/jeux/hot-cards"
                title="Hot Cards"
                tagline="Tire une carte parmi 8 catégories, 3 niveaux de flammes."
                count={`${HOT_CARDS.length} cartes`}
                Icon={Flame}
                gradient="from-ember-500 to-velvet-600"
                delay={0.05}
              />
              <GameTile
                href="/jeux/action-verite"
                title="Action ou Vérité"
                tagline="Le classique remix sexy. Choisis ton camp, assume ta carte."
                count={`${TRUTHS.length + DARES.length} défis`}
                Icon={HelpCircle}
                gradient="from-velvet-500 to-midnight-600"
                delay={0.1}
              />
              <GameTile
                href="/jeux/des-coquins"
                title="Dés Coquins"
                tagline="4 dés, une infinité de combinaisons chaudes à tirer au sort."
                count="10 000+ combos"
                Icon={Dice5}
                gradient="from-ember-600 to-ember-800"
                delay={0.15}
              />
              <GameTile
                href="/jeux/spin"
                title="Spin the Bottle"
                tagline="Fais tourner la bouteille et laisse le hasard décider du défi."
                count={`${18} défis`}
                Icon={Disc3}
                gradient="from-midnight-500 to-velvet-600"
                delay={0.2}
              />
              <GameTile
                href="/jeux/quiz-couple"
                title="Tu me connais ?"
                tagline="Testez votre complicité sur 4 thèmes, des plus tendres aux plus chauds."
                count={`${QUIZ_ITEMS.length} questions`}
                Icon={HeartHandshake}
                gradient="from-velvet-400 to-midnight-500"
                delay={0.25}
              />
              <GameTile
                href="/jeux/bons"
                title="Bons à réclamer"
                tagline="Tire un bon coquin à utiliser dans la semaine. Promesse = tenue."
                count="Surprises garanties"
                Icon={Ticket}
                gradient="from-ember-400 to-velvet-500"
                delay={0.3}
              />
              <GameTile
                href="/jeux/bataille"
                title="Bataille Coquine"
                tagline="52 cartes, duel façon bataille. La plus forte carte impose le défi."
                count="52 cartes"
                Icon={Swords}
                gradient="from-ember-600 to-velvet-700"
                delay={0.4}
              />
              <GameTile
                href="/jeux/roulette"
                title="Roulette des Gages"
                tagline="8 secteurs thématiques, roulette animée. Laisse le hasard choisir."
                count="32 gages"
                Icon={PieChart}
                gradient="from-velvet-500 to-ember-500"
                delay={0.45}
              />
              <GameTile
                href="/jeux/echelle"
                title="Échelle du Désir"
                tagline="10 paliers du tendre au torride. Refuser = payer un gage."
                count="10 paliers"
                Icon={TrendingUp}
                gradient="from-velvet-400 to-ember-600"
                delay={0.5}
              />
              <GameTile
                href="/jeux/scenario"
                title="Mode Scénario"
                tagline="Nuits thématiques guidées en 3 à 5 étapes, du slow dance à l'incandescence."
                count="8 scénarios"
                Icon={BookOpen}
                gradient="from-velvet-500 to-ember-500"
                delay={0.55}
              />
            </div>

            {/* Ambiance shortcut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/ambiance"
                className="group relative flex items-center gap-4 rounded-3xl p-0.5 bg-gradient-to-r from-midnight-600 via-velvet-600 to-ember-500 glow-velvet"
              >
                <div className="flex-1 rounded-[calc(1.5rem-2px)] bg-[#0d0513]/85 px-5 sm:px-7 py-5 sm:py-6 flex items-center gap-5">
                  <Music2 className="h-7 w-7 text-velvet-300 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                      Playlists Spotify intégrées
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-bold mt-0.5">
                      3 ambiances prêtes à l&apos;emploi
                    </div>
                    <div className="text-sm text-white/60 mt-0.5">
                      Chill romantique · Sensuel · Intense
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition" />
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to play */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="glass-strong noise rounded-3xl p-7 sm:p-12 relative overflow-hidden"
            >
              <Flame className="absolute -top-8 -right-8 h-48 w-48 text-ember-500/10" />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-velvet-300">
                  Mode d&apos;emploi
                </div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold">
                  Simple, intense,{" "}
                  <span className="shimmer-text">irrésistible</span>.
                </h3>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      n: "01",
                      t: "Choisis un jeu",
                      d: "Cartes, défis, dés, quiz… Choisis l'ambiance qui vous correspond ce soir.",
                    },
                    {
                      n: "02",
                      t: "Ajuste la chaleur",
                      d: "Trois niveaux de flammes : 🔥 warm-up, 🔥🔥 chaud, 🔥🔥🔥 explosif.",
                    },
                    {
                      n: "03",
                      t: "Jouez le jeu",
                      d: "Tirez à tour de rôle, respectez toujours les limites de l'autre, amusez-vous.",
                    },
                  ].map((s) => (
                    <div key={s.n} className="glass rounded-2xl p-5">
                      <div className="font-display text-5xl font-bold text-ember-500/80">
                        {s.n}
                      </div>
                      <div className="mt-3 font-semibold">{s.t}</div>
                      <div className="mt-1 text-sm text-white/60 leading-relaxed">
                        {s.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function FloatingCards() {
  return (
    <div className="relative h-96 w-64">
      {[
        { rot: -14, delay: 0, color: "from-ember-500 to-velvet-600", emoji: "🔥", label: "Action" },
        { rot: 0, delay: 1, color: "from-velvet-500 to-midnight-600", emoji: "💬", label: "Vérité" },
        { rot: 12, delay: 2, color: "from-midnight-500 to-ember-500", emoji: "💞", label: "Intime" },
      ].map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, rotate: c.rot }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
          style={{ left: i * 24, top: i * 12, rotate: `${c.rot}deg` }}
          className="absolute"
        >
          <div
            className={`relative h-56 w-40 rounded-2xl bg-gradient-to-br ${c.color} p-0.5 glow-velvet animate-float`}
            style={{ animationDelay: `${c.delay}s` }}
          >
            <div className="h-full w-full rounded-[calc(1rem-2px)] bg-[#0d0513]/85 p-5 flex flex-col justify-between">
              <div className="text-3xl">{c.emoji}</div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  AfterGame
                </div>
                <div className="font-display text-xl font-bold">{c.label}</div>
                <div className="mt-2 flex gap-1">
                  <span>🔥</span>
                  <span>🔥</span>
                  <span className="opacity-30">🔥</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
