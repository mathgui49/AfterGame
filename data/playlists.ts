// Curated Spotify playlists for 3 moods.
// Default IDs point to real public playlists verified in 2026. If the user
// sets custom URLs via Settings, those override these defaults.

export interface Playlist {
  key: "chill" | "sensuel" | "intense";
  id: string; // Spotify playlist ID (for embed)
  title: string;
  mood: string;
  description: string;
  emoji: string;
  gradient: string;
  searchFallback: string;
}

export const PLAYLISTS: Playlist[] = [
  {
    key: "chill",
    id: "3nPPEjd1hqFCeHbOqFi22F",
    title: "Chill Romantique",
    mood: "Doux & tendre",
    description:
      "Soft Love Songs 2026 — voix feutrées, acoustiques, pour les câlins et les baisers lents.",
    emoji: "🕯️",
    gradient: "from-velvet-400 to-midnight-500",
    searchFallback:
      "https://open.spotify.com/search/soft%20love%20songs",
  },
  {
    key: "sensuel",
    id: "6n8DxE0BwralHzkSlMYEaC",
    title: "Sensuel",
    mood: "Hot & groovy",
    description:
      "Bedroom Playlist — R&B nocturne et love songs pour chauffer l'ambiance.",
    emoji: "🔥",
    gradient: "from-ember-500 to-velvet-600",
    searchFallback:
      "https://open.spotify.com/search/bedroom%20playlist%20sensual",
  },
  {
    key: "intense",
    id: "0cvittMyMe4cu3lKMXb96m",
    title: "Intense",
    mood: "Brûlant & sans filtre",
    description:
      "Music For Sex 2026 — mix sensuel, basses lentes, énergie montante.",
    emoji: "⚡",
    gradient: "from-ember-600 to-midnight-700",
    searchFallback:
      "https://open.spotify.com/search/music%20for%20sex%20playlist",
  },
];

/** Parse a Spotify URL and extract the playlist ID. */
export function parseSpotifyUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  // Already an ID (22 chars alphanum)
  if (/^[A-Za-z0-9]{20,30}$/.test(trimmed)) return trimmed;
  // Full URL: open.spotify.com/playlist/ID?si=…
  const m = trimmed.match(/playlist\/([A-Za-z0-9]+)/);
  if (m) return m[1];
  return null;
}
