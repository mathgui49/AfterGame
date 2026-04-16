"use client";

import { useState } from "react";
import { Music2, Check, RotateCcw } from "lucide-react";
import { PLAYLISTS, parseSpotifyUrl } from "@/data/playlists";
import { PlaylistKey, usePlaylistOverrides } from "@/lib/playlists";

export function PlaylistsCustomizer() {
  const { overrides, setOverride } = usePlaylistOverrides();

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Music2 className="h-4 w-4 text-velvet-300" />
        <h3 className="font-display text-xl font-bold">Playlists</h3>
      </div>
      <p className="text-xs text-white/50 mb-3">
        Colle l&apos;URL d&apos;une playlist Spotify pour remplacer la
        playlist par défaut. Laisse vide pour garder celle par défaut.
      </p>
      <div className="space-y-3">
        {PLAYLISTS.map((p) => (
          <PlaylistRow
            key={p.key}
            pkey={p.key}
            label={p.title}
            emoji={p.emoji}
            current={overrides[p.key]}
            onSet={(id) => setOverride(p.key, id)}
          />
        ))}
      </div>
    </div>
  );
}

function PlaylistRow({
  pkey,
  label,
  emoji,
  current,
  onSet,
}: {
  pkey: PlaylistKey;
  label: string;
  emoji: string;
  current?: string;
  onSet: (id: string | null) => void;
}) {
  const [value, setValue] = useState(
    current ? `https://open.spotify.com/playlist/${current}` : ""
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  const save = () => {
    if (!value.trim()) {
      onSet(null);
      setFeedback("Réinitialisé par défaut");
      setTimeout(() => setFeedback(null), 1800);
      return;
    }
    const id = parseSpotifyUrl(value);
    if (!id) {
      setFeedback("URL Spotify invalide");
      setTimeout(() => setFeedback(null), 2400);
      return;
    }
    onSet(id);
    setFeedback("Playlist enregistrée ✓");
    setTimeout(() => setFeedback(null), 1800);
  };

  const reset = () => {
    onSet(null);
    setValue("");
    setFeedback("Réinitialisé");
    setTimeout(() => setFeedback(null), 1500);
  };

  return (
    <div className="glass rounded-2xl p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{emoji}</span>
        <span className="text-sm font-semibold">{label}</span>
        {current && (
          <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-ember-400">
            Perso
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="https://open.spotify.com/playlist/..."
          className="flex-1 min-w-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-ember-500/60 transition"
        />
        <button
          onClick={save}
          className="shrink-0 btn-hot rounded-xl px-3 py-2 text-sm font-semibold"
          aria-label="Enregistrer"
        >
          <Check className="h-4 w-4" />
        </button>
        {current && (
          <button
            onClick={reset}
            className="shrink-0 rounded-xl border border-white/10 p-2 text-white/60 hover:text-ember-400"
            aria-label="Réinitialiser"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>
      {feedback && (
        <div className="mt-2 text-[11px] text-velvet-300">{feedback}</div>
      )}
    </div>
  );
}
