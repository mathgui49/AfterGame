"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flame, Heart, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-velvet-300 flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> À propos d&apos;AfterGame
        </div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Rallumer la flamme, <br />
          <span className="shimmer-text">sans complexe</span>
        </h1>
        <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed">
          AfterGame est inspiré des meilleurs jeux de cartes pour adultes (Osmooz
          Hot, jeux d&apos;ambiance entre couples, truth or dare coquins). Notre
          objectif : vous donner une boîte à outils ludique et élégante pour
          raviver le désir, explorer de nouvelles facettes de votre partenaire
          et partager des moments intenses.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              Icon: Flame,
              title: "3 niveaux de chaleur",
              text: "Chauffez la soirée à votre rythme : du tendre au torride.",
            },
            {
              Icon: Heart,
              title: "Respect & consentement",
              text: "Aucun défi ne doit être imposé. La communication guide tout.",
            },
            {
              Icon: Shield,
              title: "100% privé",
              text: "Aucune donnée récoltée. Vos secrets restent entre vous.",
            },
          ].map((c) => (
            <div key={c.title} className="glass rounded-2xl p-5">
              <c.Icon className="h-6 w-6 text-ember-400" />
              <div className="mt-3 font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-white/60">{c.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Les règles d&apos;or
          </h2>
          <ul className="mt-5 space-y-3 text-white/80 text-sm sm:text-base">
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Consentement mutuel sur
              chaque action : un simple &laquo; pas ce soir &raquo; suffit à
              passer.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Jouez au calme, sans
              interruption ni regard extérieur.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Ajustez le niveau de
              flammes à votre complicité du moment.
            </li>
            <li className="flex gap-3">
              <span className="text-ember-400">•</span> Ce qui se passe pendant
              AfterGame reste entre vous. Toujours.
            </li>
          </ul>
        </div>

        <Link
          href="/#jeux"
          className="btn-hot mt-10 inline-flex items-center rounded-full px-7 py-3.5 font-semibold"
        >
          Retour aux jeux
        </Link>
      </main>
      <Footer />
    </>
  );
}
