import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AfterGame — Le jeu hot pour couples audacieux",
    short_name: "AfterGame",
    description:
      "Plus de 200 cartes, scénarios, bataille coquine, roulette, mode hard, lumière tamisée. 18+",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0d0513",
    theme_color: "#0d0513",
    categories: ["entertainment", "lifestyle"],
    lang: "fr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
