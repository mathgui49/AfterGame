// Main Osmooz Hot-style deck
// Level 1 = Warm-up (flammes: 1), Level 2 = Hot (2), Level 3 = On Fire (3)
// Categories: action, verite, defis, positions, sijepouvais, quiestleplus, connais, bons

export type Level = 1 | 2 | 3;
export type Category =
  | "action"
  | "verite"
  | "defis"
  | "positions"
  | "sijepouvais"
  | "quiestleplus"
  | "connais"
  | "bons";

export interface HotCard {
  id: string;
  category: Category;
  level: Level;
  prompt: string;
}

export const CATEGORY_META: Record<
  Category,
  { label: string; emoji: string; color: string; description: string }
> = {
  action: {
    label: "Action",
    emoji: "🔥",
    color: "from-ember-500 to-velvet-600",
    description: "Des gestes à réaliser sur le champ",
  },
  verite: {
    label: "Vérité",
    emoji: "💬",
    color: "from-velvet-500 to-midnight-600",
    description: "Des questions qui creusent l'intimité",
  },
  defis: {
    label: "Défis du mois",
    emoji: "🗓️",
    color: "from-ember-600 to-ember-800",
    description: "À réaliser dans la semaine qui vient",
  },
  positions: {
    label: "Positions",
    emoji: "🧘‍♀️",
    color: "from-velvet-600 to-ember-500",
    description: "Suggestions à essayer à deux",
  },
  sijepouvais: {
    label: "Et si je pouvais…",
    emoji: "✨",
    color: "from-midnight-500 to-velvet-600",
    description: "Fantasmes à partager",
  },
  quiestleplus: {
    label: "Qui est le plus…",
    emoji: "🎯",
    color: "from-midnight-600 to-ember-600",
    description: "Devine ou désigne ton / ta partenaire",
  },
  connais: {
    label: "Tu me connais ?",
    emoji: "💞",
    color: "from-velvet-400 to-midnight-500",
    description: "Questions pour tester votre complicité",
  },
  bons: {
    label: "Bons à utiliser",
    emoji: "🎟️",
    color: "from-ember-400 to-velvet-500",
    description: "À réclamer dans la semaine",
  },
};

export const HOT_CARDS: HotCard[] = [
  // ===== ACTION — Level 1 =====
  { id: "a1-01", category: "action", level: 1, prompt: "Fais un câlin de 30 secondes sans rien dire, juste respirer ensemble." },
  { id: "a1-02", category: "action", level: 1, prompt: "Embrasse ton / ta partenaire dans le cou, très doucement." },
  { id: "a1-03", category: "action", level: 1, prompt: "Murmure à l'oreille la première chose qui t'a plu physiquement chez l'autre." },
  { id: "a1-04", category: "action", level: 1, prompt: "Fais un massage des mains pendant 1 minute." },
  { id: "a1-05", category: "action", level: 1, prompt: "Échangez un baiser les yeux fermés, sans vous toucher avec les mains." },
  { id: "a1-06", category: "action", level: 1, prompt: "Regarde ton / ta partenaire dans les yeux pendant 30 secondes sans parler." },
  { id: "a1-07", category: "action", level: 1, prompt: "Danse lentement avec l'autre sur une musique que tu choisis." },
  { id: "a1-08", category: "action", level: 1, prompt: "Caresse les cheveux de l'autre pendant 1 minute." },
  { id: "a1-09", category: "action", level: 1, prompt: "Embrasse 3 parties du corps de l'autre, à lui / elle de deviner lesquelles." },
  { id: "a1-10", category: "action", level: 1, prompt: "Fais un compliment sincère sur une partie précise du corps de l'autre." },
  { id: "a1-11", category: "action", level: 1, prompt: "Tiens la main de ton / ta partenaire jusqu'à la prochaine carte." },
  { id: "a1-12", category: "action", level: 1, prompt: "Fais-lui les yeux doux pendant 20 secondes sans sourire." },
  { id: "a1-13", category: "action", level: 1, prompt: "Dessine un cœur avec ton doigt dans le dos de l'autre." },
  { id: "a1-14", category: "action", level: 1, prompt: "Décris à voix haute ce qui te plaît dans sa manière de t'embrasser." },
  { id: "a1-15", category: "action", level: 1, prompt: "Fais un slow de 1 minute collé·e à l'autre, yeux fermés." },

  // ===== ACTION — Level 2 =====
  { id: "a2-01", category: "action", level: 2, prompt: "Embrasse ton / ta partenaire avec beaucoup plus de langue que d'habitude pendant 20 secondes." },
  { id: "a2-02", category: "action", level: 2, prompt: "Enlève un vêtement de ton / ta partenaire, au choix." },
  { id: "a2-03", category: "action", level: 2, prompt: "Fais-lui un suçon à un endroit où personne ne le verra." },
  { id: "a2-04", category: "action", level: 2, prompt: "Mordille délicatement son lobe d'oreille." },
  { id: "a2-05", category: "action", level: 2, prompt: "Masse le bas de son dos pendant 2 minutes." },
  { id: "a2-06", category: "action", level: 2, prompt: "Embrasse la zone la plus sensible de son cou que tu connaisses." },
  { id: "a2-07", category: "action", level: 2, prompt: "Parcours son corps avec un glaçon (ou tes doigts) pendant 30 secondes." },
  { id: "a2-08", category: "action", level: 2, prompt: "Prends-le / la dans tes bras et embrasse-le / la comme si c'était la première fois." },
  { id: "a2-09", category: "action", level: 2, prompt: "Caresse son entrejambe par-dessus ses vêtements pendant 30 secondes." },
  { id: "a2-10", category: "action", level: 2, prompt: "Embrasse sa nuque, ses épaules, puis sa clavicule, sans t'arrêter." },
  { id: "a2-11", category: "action", level: 2, prompt: "Regarde-le / la droit dans les yeux et décris ce que tu aimerais lui faire maintenant." },
  { id: "a2-12", category: "action", level: 2, prompt: "Lèche doucement une goutte d'eau déposée sur sa peau." },
  { id: "a2-13", category: "action", level: 2, prompt: "Enlève ton haut très lentement, pendant qu'il / elle te regarde." },
  { id: "a2-14", category: "action", level: 2, prompt: "Fais-lui un strip-tease de 30 secondes sur la musique de ton choix." },
  { id: "a2-15", category: "action", level: 2, prompt: "Guide sa main vers l'endroit de ton corps que tu veux qu'il / elle touche." },
  { id: "a2-16", category: "action", level: 2, prompt: "Passe 1 minute à l'embrasser partout sauf sur la bouche." },
  { id: "a2-17", category: "action", level: 2, prompt: "Fais-lui un massage sensuel des cuisses pendant 2 minutes." },
  { id: "a2-18", category: "action", level: 2, prompt: "Chuchote-lui 3 choses excitantes que tu veux lui faire ce soir." },

  // ===== ACTION — Level 3 =====
  { id: "a3-01", category: "action", level: 3, prompt: "Embrasse-le / la langoureusement pendant 2 minutes sans vous arrêter." },
  { id: "a3-02", category: "action", level: 3, prompt: "Déshabille entièrement ton / ta partenaire, très lentement." },
  { id: "a3-03", category: "action", level: 3, prompt: "Bande-lui les yeux et fais-lui découvrir 3 sensations différentes." },
  { id: "a3-04", category: "action", level: 3, prompt: "Embrasse son intimité par-dessus ses sous-vêtements." },
  { id: "a3-05", category: "action", level: 3, prompt: "Prends le contrôle total pendant 3 minutes, il / elle n'a pas le droit de bouger." },
  { id: "a3-06", category: "action", level: 3, prompt: "Mets-toi à genoux et regarde-le / la comme si tu allais le / la dévorer." },
  { id: "a3-07", category: "action", level: 3, prompt: "Descends ta bouche de son nombril jusqu'au bas ventre, très lentement." },
  { id: "a3-08", category: "action", level: 3, prompt: "Guide-le / la pour qu'il / elle te fasse exactement ce que tu aimes, étape par étape." },
  { id: "a3-09", category: "action", level: 3, prompt: "Place-toi dans la position qu'il / elle choisit, et laisse-toi faire pendant 2 minutes." },
  { id: "a3-10", category: "action", level: 3, prompt: "Stimule ton / ta partenaire avec tes mains jusqu'à ce qu'il / elle te supplie d'arrêter ou de continuer." },
  { id: "a3-11", category: "action", level: 3, prompt: "Propose-lui d'inverser complètement les rôles pour les 10 prochaines minutes." },
  { id: "a3-12", category: "action", level: 3, prompt: "Enlève un de tes sous-vêtements avec les dents (ou aide de ta bouche)." },
  { id: "a3-13", category: "action", level: 3, prompt: "Fais-lui l'amour sans bouger du canapé / siège sur lequel vous êtes." },
  { id: "a3-14", category: "action", level: 3, prompt: "Recommence à jouer seulement quand ton / ta partenaire aura eu un orgasme (ou atteint un moment intense)." },
  { id: "a3-15", category: "action", level: 3, prompt: "Mime ta position préférée, et invite-le / la à la reproduire." },
  { id: "a3-16", category: "action", level: 3, prompt: "Essaie d'exciter ton / ta partenaire uniquement avec ta voix pendant 1 minute." },

  // ===== VÉRITÉ — Level 1 =====
  { id: "v1-01", category: "verite", level: 1, prompt: "Quel a été ton premier souvenir de séduction avec moi ?" },
  { id: "v1-02", category: "verite", level: 1, prompt: "Quelle est la partie de mon corps que tu préfères embrasser ?" },
  { id: "v1-03", category: "verite", level: 1, prompt: "Quel est l'endroit le plus insolite où tu as déjà embrassé quelqu'un ?" },
  { id: "v1-04", category: "verite", level: 1, prompt: "À quel moment as-tu su que tu craquais pour moi ?" },
  { id: "v1-05", category: "verite", level: 1, prompt: "Quel est le plus gros coup de foudre que tu as eu dans ta vie ?" },
  { id: "v1-06", category: "verite", level: 1, prompt: "Quel vêtement te rend irrésistible chez moi ?" },
  { id: "v1-07", category: "verite", level: 1, prompt: "Quelle est ta chanson qui te met en mode séduction ?" },
  { id: "v1-08", category: "verite", level: 1, prompt: "Si on devait refaire notre premier rendez-vous, tu changerais quoi ?" },
  { id: "v1-09", category: "verite", level: 1, prompt: "Quel est le plus beau compliment qu'on t'ait fait ?" },
  { id: "v1-10", category: "verite", level: 1, prompt: "Quelle partie de toi aimes-tu le plus physiquement ?" },

  // ===== VÉRITÉ — Level 2 =====
  { id: "v2-01", category: "verite", level: 2, prompt: "Quel est le fantasme que tu n'as jamais osé me dire ?" },
  { id: "v2-02", category: "verite", level: 2, prompt: "Qu'est-ce qui t'excite le plus chez moi, physiquement ?" },
  { id: "v2-03", category: "verite", level: 2, prompt: "Quelle scène de film t'a déjà fait monter la température ?" },
  { id: "v2-04", category: "verite", level: 2, prompt: "Quel est l'endroit public le plus osé où tu rêverais de faire quelque chose avec moi ?" },
  { id: "v2-05", category: "verite", level: 2, prompt: "Quelle est la dernière pensée coquine que tu as eue à mon sujet ?" },
  { id: "v2-06", category: "verite", level: 2, prompt: "Quel est le truc que j'ai fait qui t'a le plus excité·e ?" },
  { id: "v2-07", category: "verite", level: 2, prompt: "Préfères-tu dominer ou être dominé·e ? Et pourquoi ?" },
  { id: "v2-08", category: "verite", level: 2, prompt: "Quel mot chaud me dirais-tu à l'oreille là tout de suite ?" },
  { id: "v2-09", category: "verite", level: 2, prompt: "As-tu déjà pensé à moi sous la douche ? Raconte." },
  { id: "v2-10", category: "verite", level: 2, prompt: "Quel est le moment le plus excitant qu'on ait partagé ensemble ?" },
  { id: "v2-11", category: "verite", level: 2, prompt: "Quelle est la tenue que tu aimerais me voir porter ce soir ?" },
  { id: "v2-12", category: "verite", level: 2, prompt: "Si tu devais me donner un ordre coquin, ce serait lequel ?" },

  // ===== VÉRITÉ — Level 3 =====
  { id: "v3-01", category: "verite", level: 3, prompt: "Raconte-moi ton fantasme le plus secret, en détail." },
  { id: "v3-02", category: "verite", level: 3, prompt: "Qu'est-ce que tu rêves de me faire là maintenant, sans censure ?" },
  { id: "v3-03", category: "verite", level: 3, prompt: "Quelle est la chose la plus interdite dont tu as déjà rêvé ?" },
  { id: "v3-04", category: "verite", level: 3, prompt: "Quel est ton plus grand kink assumé ?" },
  { id: "v3-05", category: "verite", level: 3, prompt: "Si je te demandais de rejouer ta meilleure expérience intime avec moi, ce serait laquelle ?" },
  { id: "v3-06", category: "verite", level: 3, prompt: "Quel endroit de mon corps rêves-tu d'explorer davantage ?" },
  { id: "v3-07", category: "verite", level: 3, prompt: "Quelle est la pratique que tu aimerais introduire dans notre couple ?" },
  { id: "v3-08", category: "verite", level: 3, prompt: "Quel scénario te ferais craquer instantanément ?" },
  { id: "v3-09", category: "verite", level: 3, prompt: "Y a-t-il un objet que tu aimerais qu'on utilise ensemble ?" },
  { id: "v3-10", category: "verite", level: 3, prompt: "Quel est le mot le plus cru que tu aimerais entendre de ma bouche ?" },

  // ===== DÉFIS DU MOIS =====
  { id: "d1-01", category: "defis", level: 1, prompt: "Cette semaine : organisez une soirée sans téléphone, juste tous les deux." },
  { id: "d1-02", category: "defis", level: 1, prompt: "Envoie-lui un message coquin au milieu de sa journée de travail." },
  { id: "d1-03", category: "defis", level: 1, prompt: "Un petit-déjeuner au lit surprise pour l'autre avant la fin du mois." },
  { id: "d2-01", category: "defis", level: 2, prompt: "Dans les 7 jours : un massage complet d'au moins 15 minutes." },
  { id: "d2-02", category: "defis", level: 2, prompt: "Cette semaine : partager un bain ou une douche à deux en allumant des bougies." },
  { id: "d2-03", category: "defis", level: 2, prompt: "Dans le mois : envoyer une photo sexy (flouté si besoin) en milieu de journée." },
  { id: "d3-01", category: "defis", level: 3, prompt: "Dans le mois : essayer une nouvelle position que vous n'avez jamais faite." },
  { id: "d3-02", category: "defis", level: 3, prompt: "Dans la semaine : faire l'amour ailleurs que dans la chambre." },
  { id: "d3-03", category: "defis", level: 3, prompt: "Ce mois-ci : acheter ensemble un accessoire coquin." },
  { id: "d3-04", category: "defis", level: 3, prompt: "Organiser une soirée jeu de rôle avec costume choisi par l'autre." },

  // ===== POSITIONS =====
  { id: "p1-01", category: "positions", level: 1, prompt: "La cuillère : collé·e·s dans le dos, il / elle te caresse lentement." },
  { id: "p1-02", category: "positions", level: 1, prompt: "Face à face allongé·e·s, vos jambes entrelacées, fronts contre fronts." },
  { id: "p1-03", category: "positions", level: 1, prompt: "Assis·e sur ses genoux en canapé, bras autour du cou, vous vous embrassez longuement." },
  { id: "p2-01", category: "positions", level: 2, prompt: "Le missionnaire revisité : avec ses jambes sur tes épaules." },
  { id: "p2-02", category: "positions", level: 2, prompt: "La chaise : lui / elle assis·e, toi sur ses genoux face à lui / elle." },
  { id: "p2-03", category: "positions", level: 2, prompt: "La levrette douce : en appui sur les avant-bras, tout en lenteur." },
  { id: "p2-04", category: "positions", level: 2, prompt: "Lotus : assis·e·s face à face, jambes entrelacées, bercements synchronisés." },
  { id: "p3-01", category: "positions", level: 3, prompt: "La brouette : elle en appui sur les mains, il lui tient les jambes." },
  { id: "p3-02", category: "positions", level: 3, prompt: "L'Andromaque renversée : elle sur lui, dos à lui, elle mène la cadence." },
  { id: "p3-03", category: "positions", level: 3, prompt: "Contre un mur : elle / lui jambes autour de sa taille, totalement porté·e." },
  { id: "p3-04", category: "positions", level: 3, prompt: "La cathédrale : elle assise sur lui, lui allongé, elle mène le jeu." },
  { id: "p3-05", category: "positions", level: 3, prompt: "La pince : il / elle sur le côté, l'autre perpendiculaire, les jambes serrées." },
  { id: "p3-06", category: "positions", level: 3, prompt: "Le 69 classique : face à face inversé·e·s, chacun donne du plaisir à l'autre." },
  { id: "p3-07", category: "positions", level: 3, prompt: "Le bord du lit : elle / lui au bord, l'autre debout, mains libres." },

  // ===== SI JE POUVAIS =====
  { id: "s1-01", category: "sijepouvais", level: 1, prompt: "Et si je pouvais t'offrir un week-end surprise demain… où irait-on ?" },
  { id: "s1-02", category: "sijepouvais", level: 1, prompt: "Et si je pouvais cuisiner parfaitement pour toi… quel serait ton menu ?" },
  { id: "s2-01", category: "sijepouvais", level: 2, prompt: "Et si je pouvais te séduire dans un lieu inattendu… tu choisirais lequel ?" },
  { id: "s2-02", category: "sijepouvais", level: 2, prompt: "Et si je pouvais devenir quelqu'un d'autre pour une nuit… qui voudrais-tu que je sois ?" },
  { id: "s2-03", category: "sijepouvais", level: 2, prompt: "Et si je pouvais lire dans tes pensées coquines là, maintenant… je verrais quoi ?" },
  { id: "s3-01", category: "sijepouvais", level: 3, prompt: "Et si je pouvais exaucer un seul de tes fantasmes ce soir… lequel ?" },
  { id: "s3-02", category: "sijepouvais", level: 3, prompt: "Et si je pouvais te faire totalement perdre le contrôle… comment m'y prendrais-je ?" },
  { id: "s3-03", category: "sijepouvais", level: 3, prompt: "Et si je pouvais filmer un instant chaud entre nous… ce serait quoi (pour nous, juste nous) ?" },
  { id: "s3-04", category: "sijepouvais", level: 3, prompt: "Et si je pouvais t'offrir une heure sans aucun tabou… tu me demanderais quoi ?" },

  // ===== QUI EST LE PLUS =====
  { id: "q1-01", category: "quiestleplus", level: 1, prompt: "Qui est le / la plus romantique de nous deux ?" },
  { id: "q1-02", category: "quiestleplus", level: 1, prompt: "Qui a les lèvres les plus embrassables ?" },
  { id: "q1-03", category: "quiestleplus", level: 1, prompt: "Qui a le sourire le plus ravageur ?" },
  { id: "q2-01", category: "quiestleplus", level: 2, prompt: "Qui est le / la plus joueur·euse au lit ?" },
  { id: "q2-02", category: "quiestleplus", level: 2, prompt: "Qui initie le plus souvent le premier pas coquin ?" },
  { id: "q2-03", category: "quiestleplus", level: 2, prompt: "Qui a les mains les plus douées ?" },
  { id: "q2-04", category: "quiestleplus", level: 2, prompt: "Qui est le / la plus bruyant·e pendant l'amour ?" },
  { id: "q3-01", category: "quiestleplus", level: 3, prompt: "Qui a le plus d'imagination au lit ?" },
  { id: "q3-02", category: "quiestleplus", level: 3, prompt: "Qui est le / la plus dominant·e des deux ?" },
  { id: "q3-03", category: "quiestleplus", level: 3, prompt: "Qui tiendrait le plus longtemps sans craquer face à une séance de teasing ?" },
  { id: "q3-04", category: "quiestleplus", level: 3, prompt: "Qui est le / la plus à l'aise avec les jeux de rôle ?" },

  // ===== TU ME CONNAIS ? =====
  { id: "c1-01", category: "connais", level: 1, prompt: "Quel est mon plat préféré à l'instant t ?" },
  { id: "c1-02", category: "connais", level: 1, prompt: "Quelle est ma série du moment ?" },
  { id: "c1-03", category: "connais", level: 1, prompt: "Quel est mon petit défaut qui t'attendrit le plus ?" },
  { id: "c1-04", category: "connais", level: 1, prompt: "Quelle est la dernière chose qui m'a fait rire aux éclats ?" },
  { id: "c2-01", category: "connais", level: 2, prompt: "Sais-tu quelle est ma zone érogène numéro un ?" },
  { id: "c2-02", category: "connais", level: 2, prompt: "Quelle est la tenue dans laquelle je me sens la plus sexy ?" },
  { id: "c2-03", category: "connais", level: 2, prompt: "À quelle heure suis-je le plus câlin·e en général ?" },
  { id: "c3-01", category: "connais", level: 3, prompt: "Sais-tu ce qui me fait venir le plus vite ?" },
  { id: "c3-02", category: "connais", level: 3, prompt: "Connais-tu mon fantasme le plus récurrent ?" },
  { id: "c3-03", category: "connais", level: 3, prompt: "Quel est le mot cru qui me fait le plus d'effet ?" },

  // ===== BONS À UTILISER =====
  { id: "b1-01", category: "bons", level: 1, prompt: "Bon pour un massage relaxant de 15 minutes, à réclamer quand tu veux." },
  { id: "b1-02", category: "bons", level: 1, prompt: "Bon pour un bisou long au réveil, valable une fois ce mois-ci." },
  { id: "b1-03", category: "bons", level: 1, prompt: "Bon pour choisir un film et imposer des câlins pendant tout le film." },
  { id: "b2-01", category: "bons", level: 2, prompt: "Bon pour un strip-tease sur une musique au choix du / de la détenteur·rice." },
  { id: "b2-02", category: "bons", level: 2, prompt: "Bon pour une séance de sextos pendant ta journée de boulot." },
  { id: "b2-03", category: "bons", level: 2, prompt: "Bon pour une douche sensuelle à deux quand tu le souhaites." },
  { id: "b2-04", category: "bons", level: 2, prompt: "Bon pour un massage sensuel avec huile, pendant 20 minutes." },
  { id: "b3-01", category: "bons", level: 3, prompt: "Bon pour une nuit où tu choisis tout : la position, le lieu, le tempo." },
  { id: "b3-02", category: "bons", level: 3, prompt: "Bon pour réaliser un fantasme de ton choix, dans la limite du consenti." },
  { id: "b3-03", category: "bons", level: 3, prompt: "Bon pour une séance où tu dictes à l'autre ce qu'il / elle doit te faire." },
  { id: "b3-04", category: "bons", level: 3, prompt: "Bon pour une surprise coquine inattendue dans la semaine." },
];

export function cardsByFilters(filters: {
  levels?: Level[];
  categories?: Category[];
}): HotCard[] {
  return HOT_CARDS.filter(
    (c) =>
      (!filters.levels?.length || filters.levels.includes(c.level)) &&
      (!filters.categories?.length || filters.categories.includes(c.category))
  );
}
