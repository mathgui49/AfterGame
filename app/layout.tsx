import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AgeGate } from "@/components/AgeGate";
import { CoupleSetup } from "@/components/CoupleSetup";
import { DimApplier } from "@/components/DimApplier";
import { HardBackground } from "@/components/HardBackground";
import { siteUrl } from "@/lib/site";

const BASE_URL = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AfterGame — Le jeu hot pour couples audacieux",
    template: "%s · AfterGame",
  },
  description:
    "10 modes de jeu, 146+ cartes coquines, scénarios guidés, roulette des gages, bataille coquine, mode lumière tamisée, mode hard. Pour les couples qui veulent pimenter leurs soirées. 18+.",
  applicationName: "AfterGame",
  keywords: [
    "AfterGame",
    "jeu couple",
    "jeu hot couple",
    "jeu adulte",
    "jeu coquin",
    "cartes coquines",
    "action vérité couple",
    "soirée couple",
    "Osmooz",
    "Kama Sutra",
    "scénario coquin",
    "roulette des gages",
    "bataille coquine",
    "jeu érotique",
    "jeu sensuel",
  ],
  authors: [{ name: "AfterGame" }],
  creator: "AfterGame",
  publisher: "AfterGame",
  category: "Games",
  classification: "18+",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "AfterGame",
    title: "AfterGame — Rallumez la flamme",
    description:
      "10 modes de jeu, 146+ cartes, scénarios guidés, mode hard & lumière tamisée. Le jeu hot pour couples audacieux. 18+",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfterGame — Rallumez la flamme",
    description:
      "10 modes de jeu, 146+ cartes, scénarios guidés, mode hard & lumière tamisée. Pour couples audacieux. 18+",
  },
  other: {
    "rating": "adult",
    "content-rating": "mature",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0513",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Game",
  name: "AfterGame",
  description:
    "Jeu hot pour couples : 10 modes, 146+ cartes, scénarios guidés, mode hard et lumière tamisée.",
  url: BASE_URL,
  image: `${BASE_URL}/opengraph-image`,
  inLanguage: "fr",
  genre: ["Couple game", "Party game", "Adult game"],
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 18,
  },
  gamePlatform: ["Web", "iOS Safari", "Android Chrome"],
  numberOfPlayers: { "@type": "QuantitativeValue", minValue: 2, maxValue: 2 },
  isAccessibleForFree: true,
  publisher: { "@type": "Organization", name: "AfterGame" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <DimApplier />
        <HardBackground />
        <div className="relative z-10">
          <AgeGate />
          <CoupleSetup />
          {children}
        </div>
      </body>
    </html>
  );
}
