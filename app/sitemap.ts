import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] =
    [
      { path: "", priority: 1.0, freq: "weekly" },
      { path: "/a-propos", priority: 0.6, freq: "monthly" },
      { path: "/jeux/hot-cards", priority: 0.9, freq: "monthly" },
      { path: "/jeux/action-verite", priority: 0.9, freq: "monthly" },
      { path: "/jeux/des-coquins", priority: 0.8, freq: "monthly" },
      { path: "/jeux/spin", priority: 0.8, freq: "monthly" },
      { path: "/jeux/quiz-couple", priority: 0.8, freq: "monthly" },
      { path: "/jeux/bons", priority: 0.8, freq: "monthly" },
      { path: "/jeux/bataille", priority: 0.9, freq: "monthly" },
      { path: "/jeux/roulette", priority: 0.9, freq: "monthly" },
      { path: "/jeux/echelle", priority: 0.9, freq: "monthly" },
      { path: "/jeux/scenario", priority: 0.9, freq: "monthly" },
    ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }));
}
