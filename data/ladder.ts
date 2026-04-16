// Échelle du Désir — 10 progressive steps from tendre to torride.
// Each step: you can accept (climb) or decline (pay a forfeit / give a "bon")
export interface LadderStep {
  step: number;
  title: string;
  prompt: string;
  icon: string;
  intensity: 1 | 2 | 3;
}

export const LADDER: LadderStep[] = [
  {
    step: 1,
    title: "Regard",
    prompt: "Regardez-vous 30 secondes dans les yeux, sans parler, sans sourire.",
    icon: "👁️",
    intensity: 1,
  },
  {
    step: 2,
    title: "Souffle",
    prompt: "Approche ton visage à 2 cm du sien et respire avec lui / elle pendant 30 secondes.",
    icon: "🌬️",
    intensity: 1,
  },
  {
    step: 3,
    title: "Tendresse",
    prompt: "Caresse son visage, ses cheveux et sa nuque pendant 1 minute.",
    icon: "🤚",
    intensity: 1,
  },
  {
    step: 4,
    title: "Baiser",
    prompt: "Un vrai baiser profond, yeux fermés, pendant 30 secondes minimum.",
    icon: "💋",
    intensity: 2,
  },
  {
    step: 5,
    title: "Descente",
    prompt: "Descends une ligne de baisers de la mâchoire au creux de la clavicule.",
    icon: "🔥",
    intensity: 2,
  },
  {
    step: 6,
    title: "Strip",
    prompt: "Enlève lentement un vêtement à ton / ta partenaire, puis un des tiens.",
    icon: "👗",
    intensity: 2,
  },
  {
    step: 7,
    title: "Massage",
    prompt: "Massage sensuel à l'huile (ou crème) du dos pendant 2 minutes, sans parler.",
    icon: "🫴",
    intensity: 2,
  },
  {
    step: 8,
    title: "Exploration",
    prompt: "Parcours son corps avec ta bouche, de haut en bas, en t'arrêtant 5 secondes aux endroits qui le / la font frissonner.",
    icon: "🌶️",
    intensity: 3,
  },
  {
    step: 9,
    title: "Contrôle",
    prompt: "Prends le contrôle total pendant 2 minutes. Il / elle ne bouge pas, ne parle pas.",
    icon: "⛓️",
    intensity: 3,
  },
  {
    step: 10,
    title: "Incandescent",
    prompt: "Faites l'amour comme si c'était la première nuit. Sans téléphone, sans précipitation.",
    icon: "💥",
    intensity: 3,
  },
];

// Forfeits for declining a step
export const FORFEITS = [
  "Tu dois à ton / ta partenaire un bon 'massage sensuel 15 min' à échéance 7 jours.",
  "Tu offres un petit-déj coquin au lit dans la semaine.",
  "Tu envoies un sexto chaque jour de la semaine qui suit.",
  "Tu dois exaucer un fantasme (consenti) choisi par ton / ta partenaire.",
  "Tu prépares une soirée sensuelle surprise dans les 10 jours.",
];
