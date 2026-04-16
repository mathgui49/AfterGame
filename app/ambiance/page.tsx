"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Music2, Settings as SettingsIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PLAYLISTS } from "@/data/playlists";
import { usePlaylistOverrides } from "@/lib/playlists";

export default function AmbiancePage() {
  const { overrides } = usePlaylistOverrides();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" /> Retour
        </Link>

        <div className="mt-4 flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-velvet-300">
              <Music2 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Ambiance sonore
              </span>
            </div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
              3 playlists, 3 ambiances
            </h1>
            <p className="mt-1 text-sm text-white/60 max-w-2xl">
              Glisse l&apos;une des playlists en fond, garde ton téléphone à
              portée de main, et retourne aux jeux. Remplace chaque playlist
              par la tienne via les paramètres <SettingsIcon className="inline h-3.5 w-3.5" />.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PLAYLISTS.map((p, i) => {
            const id = overrides[p.key] || p.id;
            const isCustom = !!overrides[p.key];
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-3xl p-0.5 bg-gradient-to-br ${p.gradient} glow-velvet`}
              >
                <div className="rounded-[calc(1.5rem-2px)] bg-[#0d0513]/92 p-5 sm:p-6 noise relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{p.emoji}</div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                        {p.mood}
                      </div>
                      <div className="font-display text-xl font-bold truncate">
                        {p.title}
                      </div>
                    </div>
                    {isCustom && (
                      <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-ember-400 bg-ember-500/15 border border-ember-500/40 rounded-full px-2 py-0.5">
                        Personnalisée
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-snug">
                    {p.description}
                  </p>

                  {/* Spotify embed */}
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
                    <iframe
                      key={id}
                      title={p.title}
                      src={`https://open.spotify.com/embed/playlist/${id}?theme=0`}
                      width="100%"
                      height="352"
                      frameBorder={0}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ display: "block" }}
                    />
                  </div>

                  <div className="mt-3 flex items-center gap-3 flex-wrap text-xs">
                    <a
                      href={`https://open.spotify.com/playlist/${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition"
                    >
                      Ouvrir dans Spotify{" "}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={p.searchFallback}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/70 transition"
                    >
                      Chercher d&apos;autres
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 glass rounded-2xl p-5 text-sm text-white/60 flex items-start gap-3">
          <SettingsIcon className="h-4 w-4 mt-0.5 text-velvet-300 shrink-0" />
          <span>
            Tu veux tes propres playlists ? Ouvre les paramètres en haut à
            droite, section <b>Playlists</b>, et colle l&apos;URL de ta
            playlist Spotify.
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
