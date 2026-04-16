import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AgeGate } from "@/components/AgeGate";
import { CoupleSetup } from "@/components/CoupleSetup";
import { DimApplier } from "@/components/DimApplier";

export const metadata: Metadata = {
  title: "AfterGame — Le jeu hot pour couples audacieux",
  description:
    "Plus de 400 cartes, défis, dés coquins, quiz et bons à réclamer. Un jeu pour couples qui veulent pimenter leurs soirées.",
  keywords: [
    "jeu couple",
    "jeu hot",
    "jeu adulte",
    "soirée couple",
    "cartes coquines",
    "action vérité",
  ],
  openGraph: {
    title: "AfterGame",
    description: "Le jeu hot pour couples audacieux. 18+",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0513",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DimApplier />
        <AgeGate />
        <CoupleSetup />
        {children}
      </body>
    </html>
  );
}
