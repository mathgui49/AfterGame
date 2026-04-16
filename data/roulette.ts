// Roulette des Gages — wheel with 8 colored sectors. Each sector has a theme + random dare pulled from its pool.

import { pick } from "@/lib/utils";

export type Sector = {
  id: string;
  label: string;
  emoji: string;
  from: string;
  to: string;
  level: 1 | 2 | 3;
  dares: string[];
};

export const SECTORS: Sector[] = [
  {
    id: "caresse",
    label: "Caresse",
    emoji: "💋",
    from: "#ff6266",
    to: "#e3337a",
    level: 1,
    dares: [
      "Caresse son bras de la main à l'épaule pendant 30 secondes.",
      "Caresse son visage en remontant ses cheveux, yeux dans les yeux.",
      "Pose ta main sur son genou et remonte lentement jusqu'à mi-cuisse.",
      "Trace un cœur sur son torse ou son dos avec ton doigt.",
    ],
  },
  {
    id: "baiser",
    label: "Baiser",
    emoji: "💞",
    from: "#e3337a",
    to: "#c41d63",
    level: 1,
    dares: [
      "Un baiser de 10 secondes, langoureux, sans les mains.",
      "Trois baisers à trois endroits que tu choisis.",
      "Un baiser esquimau suivi d'un baiser sur la bouche.",
      "Un long baiser en lui tenant le visage à deux mains.",
    ],
  },
  {
    id: "masse",
    label: "Massage",
    emoji: "🖐️",
    from: "#c41d63",
    to: "#86133f",
    level: 2,
    dares: [
      "Massage du bas du dos pendant 2 minutes, sous les vêtements si tu veux.",
      "Massage des cuisses pendant 90 secondes.",
      "Massage du crâne et de la nuque pendant 2 minutes.",
      "Massage des pieds, lentement, pendant 2 minutes.",
    ],
  },
  {
    id: "strip",
    label: "Strip",
    emoji: "👕",
    from: "#86133f",
    to: "#5f2bcb",
    level: 2,
    dares: [
      "Enlève un vêtement choisi par ton / ta partenaire.",
      "Enlève lui un vêtement uniquement avec ta bouche (ou tente).",
      "Strip-tease de 30 secondes sur la musique qu'il / elle choisit.",
      "Échangez un vêtement pendant les 2 prochaines manches.",
    ],
  },
  {
    id: "mots",
    label: "Dirty talk",
    emoji: "💬",
    from: "#5f2bcb",
    to: "#6f3be6",
    level: 2,
    dares: [
      "Chuchote 3 choses coquines que tu as envie de lui faire.",
      "Décris à voix haute la dernière fois où il / elle t'a rendu·e fou / folle.",
      "Confie-lui à l'oreille une pensée coquine récente.",
      "Raconte-lui ton fantasme favori en 30 secondes.",
    ],
  },
  {
    id: "dare",
    label: "Action",
    emoji: "🔥",
    from: "#6f3be6",
    to: "#ed0f23",
    level: 3,
    dares: [
      "Mets-toi à califourchon sur ton / ta partenaire pendant 1 minute.",
      "Embrasse sa clavicule puis descend jusqu'au nombril.",
      "Fais-lui un suçon discret.",
      "Laisse tes mains sous son vêtement pendant 1 minute.",
    ],
  },
  {
    id: "fant",
    label: "Fantasme",
    emoji: "✨",
    from: "#ed0f23",
    to: "#ff6266",
    level: 3,
    dares: [
      "Mime avec ton / ta partenaire le fantasme de ton choix, en lumière tamisée.",
      "Révèle un fantasme que tu n'avais jamais osé dire.",
      "Guide ses mains exactement comme tu aimes qu'il / elle te touche.",
      "Propose un jeu de rôle à mettre en place dans les 10 prochaines minutes.",
    ],
  },
  {
    id: "bon",
    label: "Bon",
    emoji: "🎟️",
    from: "#ff9b9d",
    to: "#e3337a",
    level: 1,
    dares: [
      "Offre-lui un bon à utiliser dans la semaine : massage sensuel au choix.",
      "Bon pour une nuit où tu lui dois un fantasme réaliste (consenti).",
      "Bon pour un petit-déj coquin au lit, jour au choix.",
      "Bon pour un strip-tease sur demande dans les 7 jours.",
    ],
  },
];

export function rollSector(sector: Sector) {
  return pick(sector.dares);
}
