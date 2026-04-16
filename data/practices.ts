// Practices — things you accept or refuse to DO in the games.
// The ID is used for filtering cards tagged with matching practice keys.

import type { Sex } from "@/lib/couple";

export interface Practice {
  id: string;
  label: string;
  emoji: string;
  group: "oral" | "manuel" | "intense" | "verbal" | "mise_en_scene";
  /**
   * Gender requirements for this practice to be relevant. The UI hides
   * practices whose requirements aren't met. E.g. "branler le pénis de
   * l'autre" only shows if the PARTNER is male.
   */
  requires?: {
    /** The sex of the player DOING this practice (the tab owner). */
    subject?: Sex;
    /** The sex of the OTHER player (partner receiving). */
    partner?: Sex;
  };
}

export const PRACTICES: Practice[] = [
  // Oral / embrasser
  { id: "fellation", label: "Faire une fellation", emoji: "👄", group: "oral", requires: { partner: "M" } },
  { id: "cunnilingus", label: "Faire un cunnilingus", emoji: "👅", group: "oral", requires: { partner: "F" } },
  { id: "embrasser-sexe", label: "Embrasser / lécher le sexe", emoji: "💋", group: "oral" },
  { id: "anulingus", label: "Anulingus", emoji: "🌸", group: "oral" },
  { id: "avaler", label: "Avaler", emoji: "🌊", group: "oral", requires: { partner: "M" } },

  // Manuel
  { id: "doigter", label: "Doigter ton / ta partenaire", emoji: "🖐️", group: "manuel", requires: { partner: "F" } },
  { id: "branler", label: "Branler ton / ta partenaire", emoji: "✋", group: "manuel", requires: { partner: "M" } },
  { id: "masturb-spectacle", label: "Me masturber devant l'autre", emoji: "👀", group: "manuel" },

  // Intense
  { id: "anal-donner", label: "Pénétration anale (donner)", emoji: "🌹", group: "intense", requires: { subject: "M" } },
  { id: "anal-recevoir", label: "Pénétration anale (recevoir)", emoji: "🌷", group: "intense" },
  { id: "ejac-visage", label: "Éjaculer sur le visage", emoji: "💦", group: "intense", requires: { subject: "M" } },
  { id: "ejac-corps", label: "Éjaculer sur le corps", emoji: "✨", group: "intense", requires: { subject: "M" } },
  { id: "sucons", label: "Faire des suçons visibles", emoji: "🩷", group: "intense" },
  { id: "mordre", label: "Mordre ton / ta partenaire", emoji: "🦷", group: "intense" },

  // Verbal
  { id: "dirty-talk", label: "Dire des mots crus", emoji: "💬", group: "verbal" },
  { id: "gemir-fort", label: "Gémir fort", emoji: "🔊", group: "verbal" },

  // Mise en scène
  { id: "jeu-role", label: "Jeu de rôle", emoji: "🎭", group: "mise_en_scene" },
  { id: "dominer", label: "Dominer l'autre", emoji: "👑", group: "mise_en_scene" },
  { id: "etre-domine", label: "Être dominé·e", emoji: "🛐", group: "mise_en_scene" },
  { id: "bondage", label: "Attaches / bondage léger", emoji: "⛓️", group: "mise_en_scene" },
  { id: "bandeau", label: "Bandeau sur les yeux", emoji: "🙈", group: "mise_en_scene" },
  { id: "spanking", label: "Fessée", emoji: "🖐️", group: "mise_en_scene" },
  { id: "sextoy", label: "Utiliser un sextoy", emoji: "🔮", group: "mise_en_scene" },
  { id: "photos", label: "Photos / vidéos intimes", emoji: "📸", group: "mise_en_scene" },
];

export const GROUP_LABELS: Record<Practice["group"], string> = {
  oral: "Oral",
  manuel: "Manuel",
  intense: "Intense",
  verbal: "Verbal",
  mise_en_scene: "Mise en scène",
};
