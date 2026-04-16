/**
 * Resolve the canonical site URL for metadata, sitemap, robots and OG.
 * Preference order:
 *   1. NEXT_PUBLIC_SITE_URL (explicit, e.g. "https://aftergame.app")
 *   2. VERCEL_PROJECT_PRODUCTION_URL (stable prod alias on Vercel)
 *   3. VERCEL_URL (deployment URL — used for previews)
 *   4. localhost:3000 fallback for local dev
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
