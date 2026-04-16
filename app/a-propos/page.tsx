"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Flame,
  Heart,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  BookOpen,
  Moon,
  Wand2,
  EyeOff,
  Download,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-velvet-300 flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> Comment ça marche
        </div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Rallumer la flamme, <br />
          <span className="shimmer-text">sur-mesure</span>
        </h1>
        <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed">
          AfterGame est inspiré des meilleurs jeux de cartes pour adultes
          (Osmooz Hot, Kama Sutra Battle, jeux d&apos;ambiance pour couples).
          Objectif : vous donner une boîte à outils ludique et finement
          paramétrable pour raviver le désir et explorer de nouvelles facettes
          de votre partenaire — à votre rythme, dans votre cadre.
        </p>

        {/* Steps */}
        <section className="mt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5">
            En 3 temps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                title: "Configurez votre duo",
                text: "Vos deux prénoms, votre sexe, et votre niveau de chaleur préféré. Les cartes parleront de vous.",
              },
              {
                n: "02",
                title: "Choisissez un mode de jeu",
                text: "10 expériences : Hot Cards, Action/Vérité, Bataille, Roulette, Échelle, Scénario, Dés, Quiz, Bons, Spin.",
              },
              {
                n: "03",
                title: "Jouez à votre rythme",
                text: "Activez les options qui vous parlent. Une carte qui ne vous inspire pas ? Passe à la suivante.",
              },
            ].map((s) => (
              <div key={s.n} className="glass rounded-2xl p-5">
                <div className="font-display text-4xl font-bold text-ember-500/80">
                  {s.n}
                </div>
                <div className="mt-3 font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-white/60 leading-relaxed">
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5">
            Tout est <span className="shimmer-text">paramétrable</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Feature
              Icon={Users}
              title="Prénoms & sexe"
              text="Vos prénoms apparaissent dans les défis. Sexe M / F / Autre — les cartes se conjuguent automatiquement (fellation / cunnilingus, pronoms, accords)."
            />
            <Feature
              Icon={Flame}
              title="Niveau de chaleur"
              text="Mode Aléatoire (choisissez les intensités dans le pool) ou Uniquement (un seul niveau). Doux · Chaud · Brûlant."
            />
            <Feature
              Icon={TrendingUp}
              title="Mode progressif"
              text="La chaleur monte d'elle-même au fil de la session. Les cartes Doux cèdent la place au Chaud, puis au Brûlant, puis au Hard."
            />
            <Feature
              Icon={Flame}
              title="Mode Hard"
              text="Pool de cartes explicites avec mots crus et vocabulaire anatomique direct. Disponible quand le niveau Brûlant est actif. Arrière-plan sensuel."
            />
            <Feature
              Icon={BookOpen}
              title="Scénarios guidés"
              text="8 nuits thématiques en 3 à 5 étapes : Slow Dance, Rituel Massage, Voyage des sens, Bain sensuel, Jeu de rôle, Dominance douce…"
            />
            <Feature
              Icon={Shield}
              title="Silhouettes de consentement"
              text="Chacun·e paramètre son propre corps (devant / dos). Zones en vert = OK, en rouge = à éviter. Configurable en privé — votre partenaire découvre au fur et à mesure."
            />
            <Feature
              Icon={Wand2}
              title="Cartes perso"
              text="Ajoutez vos propres défis et vérités. Ils s'intègrent automatiquement au deck Hot Cards avec les autres."
            />
            <Feature
              Icon={Moon}
              title="Lumière tamisée"
              text="Un toggle qui assombrit drastiquement l'UI. Parfait quand vous baissez les lumières."
            />
            <Feature
              Icon={EyeOff}
              title="100% local"
              text="Aucune donnée envoyée. Prénoms, préférences, cartes perso, progression — tout reste dans votre navigateur."
            />
            <Feature
              Icon={Download}
              title="Installable"
              text="Ajoutez AfterGame à l'écran d'accueil de votre téléphone ou en favoris sur ordinateur — plein écran, plus discret."
            />
          </div>
        </section>

        {/* Rules */}
        <section className="mt-14 glass-strong rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Les règles d&apos;or
          </h2>
          <ul className="mt-5 space-y-3 text-white/80 text-sm sm:text-base">
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Consentement mutuel sur
              chaque action. Un simple « pas ce soir » suffit à passer la carte.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Les zones rouges de vos
              silhouettes sont sacrées — même en plein jeu, même en mode Hard.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Au moindre malaise,
              choisissez un mot-stop ensemble. Il suspend tout immédiatement,
              sans jugement.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Jouez au calme, sans
              interruption, sans regard extérieur.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Ce qui se passe pendant
              AfterGame reste entre vous. Toujours.
            </li>
          </ul>
        </section>

        <Link
          href="/#jeux"
          className="btn-hot mt-10 inline-flex items-center rounded-full px-7 py-3.5 font-semibold"
        >
          Commencer à jouer
        </Link>
      </main>
      <Footer />
    </>
  );
}

function Feature({
  Icon,
  title,
  text,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <Icon className="h-5 w-5 text-ember-400" />
      <div className="mt-3 font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/60 leading-relaxed">{text}</div>
    </div>
  );
}
