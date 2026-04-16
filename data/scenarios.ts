// Scenarios — a guided 3-5 step journey with a theme.
// Level: overall intensity. Each step builds the tension.

export type ScenarioLevel = 1 | 2 | 3;

export interface ScenarioStep {
  title: string;
  icon: string;
  prompt: string;
  hint?: string;
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  level: ScenarioLevel;
  duration: string;
  gradient: string; // tailwind gradient classes
  steps: ScenarioStep[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: "slow-dance",
    title: "Slow Dance",
    subtitle: "Quand la musique vous rapproche",
    emoji: "💃",
    level: 1,
    duration: "15 minutes",
    gradient: "from-velvet-400 to-midnight-600",
    steps: [
      {
        title: "Ambiance",
        icon: "🎵",
        prompt: "Choisissez une chanson lente ensemble, baissez les lumières, et versez un verre.",
        hint: "Prenez le temps : la respiration guide le tempo.",
      },
      {
        title: "Le slow",
        icon: "💃",
        prompt: "Dansez l'un contre l'autre, front contre front, pendant toute la chanson. Les mains se cherchent.",
      },
      {
        title: "Le regard",
        icon: "👁️",
        prompt: "À la fin de la chanson, prenez 30 secondes pour vous regarder sans parler. Souffle à souffle.",
      },
      {
        title: "Le baiser",
        icon: "💋",
        prompt: "Laissez venir le baiser qui s'impose — long, sans précipitation, sans les mains.",
      },
    ],
  },
  {
    id: "massage-rituel",
    title: "Rituel Massage",
    subtitle: "Détente profonde et caresses lentes",
    emoji: "🫴",
    level: 1,
    duration: "25 minutes",
    gradient: "from-ember-400 to-velvet-500",
    steps: [
      {
        title: "Préparation",
        icon: "🕯️",
        prompt: "Allumez 2 bougies, sortez une huile ou une crème, faites chauffer la pièce. Musique calme en fond.",
      },
      {
        title: "Massage du dos",
        icon: "💆",
        prompt: "Massez le dos pendant 5 minutes, en descendant lentement des épaules vers les reins. Paumes entières.",
        hint: "Aucune parole, uniquement des murmures si besoin.",
      },
      {
        title: "Le creux des reins",
        icon: "🔥",
        prompt: "Ralentissez au creux des reins et sur les hanches pendant 2 minutes. Accentuez doucement la pression.",
      },
      {
        title: "Retournement",
        icon: "🙃",
        prompt: "Aide ton / ta partenaire à se retourner. Caresse ensuite le ventre et la poitrine du bout des doigts pendant 2 minutes.",
      },
      {
        title: "Baiser final",
        icon: "💋",
        prompt: "Termine par un baiser profond sur les lèvres. Les mains se posent où elles veulent désormais.",
      },
    ],
  },
  {
    id: "voyage-sens",
    title: "Voyage des sens",
    subtitle: "5 sens, 5 surprises",
    emoji: "🌶️",
    level: 2,
    duration: "20 minutes",
    gradient: "from-velvet-500 to-ember-500",
    steps: [
      {
        title: "Vue — bandeau",
        icon: "👁️",
        prompt: "Bande les yeux de ton / ta partenaire avec une écharpe ou un foulard. Il / elle ne verra plus rien des 4 prochaines étapes.",
      },
      {
        title: "Toucher — plume ou doigts",
        icon: "🪶",
        prompt: "Caresse son corps avec une plume (ou tes doigts très légers) pendant 90 secondes. Zones inattendues.",
      },
      {
        title: "Goût — une saveur",
        icon: "🍓",
        prompt: "Fais-lui goûter quelque chose à l'aveugle : fruit, chocolat, miel sur ton doigt. Il / elle doit deviner.",
      },
      {
        title: "Odorat — un parfum",
        icon: "🌸",
        prompt: "Approche un parfum, un zest d'agrume, une fleur, ton cou. Il / elle respire, devine, s'abandonne.",
      },
      {
        title: "Ouïe — chuchote",
        icon: "👄",
        prompt: "Retire le bandeau et chuchote à son oreille exactement ce que tu as envie de lui faire là, maintenant.",
      },
    ],
  },
  {
    id: "strip-express",
    title: "Strip Express",
    subtitle: "4 étapes, intensité croissante",
    emoji: "👗",
    level: 2,
    duration: "15 minutes",
    gradient: "from-ember-500 to-velvet-600",
    steps: [
      {
        title: "Musique",
        icon: "🎧",
        prompt: "Mets une musique sensuelle. Ton / ta partenaire s'assoit confortablement, les mains sur les genoux.",
      },
      {
        title: "Premier vêtement",
        icon: "👔",
        prompt: "Enlève un vêtement (hors sous-vêtement), très lentement, en gardant le contact visuel.",
      },
      {
        title: "Lap dance",
        icon: "💃",
        prompt: "30 secondes de lap dance collé·e·s. Il / elle n'a pas le droit de te toucher.",
      },
      {
        title: "Strip final",
        icon: "🔥",
        prompt: "Termine le strip avec une règle : tu choisis ce que tu gardes. Offre-toi à son regard.",
      },
    ],
  },
  {
    id: "bain-sensuel",
    title: "Bain Sensuel",
    subtitle: "Chaleur, vapeur, peau à peau",
    emoji: "🛁",
    level: 2,
    duration: "30 minutes",
    gradient: "from-midnight-500 to-velvet-600",
    steps: [
      {
        title: "Couler le bain",
        icon: "🛁",
        prompt: "Bain chaud, mousse, bougies, 2 verres à portée. Musique douce.",
      },
      {
        title: "Déshabiller l'autre",
        icon: "👘",
        prompt: "Déshabillez-vous mutuellement, doucement. Aucun baiser encore : juste le regard.",
      },
      {
        title: "Dans l'eau",
        icon: "💧",
        prompt: "Entrez ensemble. Savonne ou masse les épaules et la nuque de ton / ta partenaire pendant 3 minutes.",
      },
      {
        title: "Baiser vapeur",
        icon: "💋",
        prompt: "Embrassez-vous langoureusement dans la vapeur. La suite se passe peut-être déjà ici.",
      },
    ],
  },
  {
    id: "jeu-role",
    title: "Jeu de rôle — La rencontre",
    subtitle: "Deux inconnu·e·s dans un bar",
    emoji: "🎭",
    level: 2,
    duration: "20 minutes",
    gradient: "from-velvet-500 to-midnight-600",
    steps: [
      {
        title: "Setup",
        icon: "🍸",
        prompt: "Mettez chacun une tenue qui ne soit pas la vôtre habituelle. Sortez deux verres. Le décor : un bar chic.",
      },
      {
        title: "L'approche",
        icon: "💬",
        prompt: "L'un·e entre dans la pièce, l'autre engage la conversation comme avec un·e inconnu·e. Nouveaux prénoms.",
      },
      {
        title: "Le rapprochement",
        icon: "🤫",
        prompt: "Invitez-vous à rapprocher vos chaises. Le / la 'séducteur·rice' tente une ligne de drague osée.",
      },
      {
        title: "La nuit commence",
        icon: "🔥",
        prompt: "Vous montez dans sa 'chambre'. Restez dans le personnage tant que ça fonctionne.",
      },
    ],
  },
  {
    id: "dominance-douce",
    title: "Dominance douce",
    subtitle: "L'un·e dicte, l'autre s'abandonne",
    emoji: "⛓️",
    level: 3,
    duration: "20 minutes",
    gradient: "from-ember-600 to-midnight-700",
    steps: [
      {
        title: "Safe word",
        icon: "🛑",
        prompt: "Choisissez un mot-stop ensemble. À tout moment, il suspend tout. Pas de jugement, pas de déception.",
        hint: "Ce mot est sacré. Il protège le jeu.",
      },
      {
        title: "Premier ordre",
        icon: "👑",
        prompt: "Le / la dominant·e donne un premier ordre simple : 'Viens', 'À genoux', 'Regarde-moi'. Les yeux ne se détachent plus.",
      },
      {
        title: "Le corps",
        icon: "🔥",
        prompt: "Enchaîne 3 ordres autour du corps : enlever un vêtement, toucher une zone, embrasser un endroit. Rythme lent.",
      },
      {
        title: "La récompense",
        icon: "💋",
        prompt: "Récompense le / la soumis·e par ce que tu veux lui offrir : un baiser, une caresse appuyée, ton souffle.",
      },
    ],
  },
  {
    id: "nuit-sauvage",
    title: "Nuit sauvage",
    subtitle: "Sans retenue, du début à la fin",
    emoji: "💥",
    level: 3,
    duration: "45 minutes",
    gradient: "from-ember-500 to-velvet-700",
    steps: [
      {
        title: "Préliminaires",
        icon: "💋",
        prompt: "Commencez par un long baiser debout, contre un mur. Les mains apprennent à redécouvrir tout le corps.",
      },
      {
        title: "Strip commun",
        icon: "👕",
        prompt: "Déshabillez-vous mutuellement en laissant tomber les vêtements au sol, sans effort, sans pudeur.",
      },
      {
        title: "Caresses appuyées",
        icon: "🔥",
        prompt: "5 minutes de caresses et baisers partout, sans tabou sur les zones. La respiration s'accélère.",
      },
      {
        title: "Union",
        icon: "♾️",
        prompt: "Rejoignez-vous dans la position qu'il / elle préfère. Restez connecté·e·s par le regard.",
      },
      {
        title: "Abandon",
        icon: "🌌",
        prompt: "Laissez le désir vous emporter. Quand c'est fini, restez 3 minutes collé·e·s sans bouger.",
      },
    ],
  },
];
