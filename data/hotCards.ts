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

import type { Relationship } from "@/lib/couple";

export interface HotCard {
  id: string;
  category: Category;
  level: Level;
  prompt: string;
  /**
   * If set, card only appears for these relationship types. If omitted, the
   * card is universal. Defis (weekly/monthly challenges) should be tagged to
   * ["debut", "couple"] since a one-night stand has no next week.
   */
  relationships?: Relationship[];
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
    description: "Devine ou désigne {partner}",
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
  { id: "a1-02", category: "action", level: 1, prompt: "Embrasse {partner} dans le cou, très doucement." },
  { id: "a1-03", category: "action", level: 1, prompt: "Murmure à l'oreille la première chose qui t'a plu physiquement chez l'autre." },
  { id: "a1-04", category: "action", level: 1, prompt: "Fais un massage des mains pendant 1 minute." },
  { id: "a1-05", category: "action", level: 1, prompt: "Échangez un baiser les yeux fermés, sans vous toucher avec les mains." },
  { id: "a1-06", category: "action", level: 1, prompt: "Regarde {partner} dans les yeux pendant 30 secondes sans parler." },
  { id: "a1-07", category: "action", level: 1, prompt: "Danse lentement avec l'autre sur une musique que tu choisis." },
  { id: "a1-08", category: "action", level: 1, prompt: "Caresse les cheveux de l'autre pendant 1 minute." },
  { id: "a1-09", category: "action", level: 1, prompt: "Embrasse 3 parties du corps de l'autre, à lui / elle de deviner lesquelles." },
  { id: "a1-10", category: "action", level: 1, prompt: "Fais un compliment sincère sur une partie précise du corps de l'autre." },
  { id: "a1-11", category: "action", level: 1, prompt: "Tiens la main de {partner} jusqu'à la prochaine carte." },
  { id: "a1-12", category: "action", level: 1, prompt: "Fais-lui les yeux doux pendant 20 secondes sans sourire." },
  { id: "a1-13", category: "action", level: 1, prompt: "Dessine un cœur avec ton doigt dans le dos de l'autre." },
  { id: "a1-14", category: "action", level: 1, prompt: "Décris à voix haute ce qui te plaît dans sa manière de t'embrasser." },
  { id: "a1-15", category: "action", level: 1, prompt: "Fais un slow de 1 minute collé·e à l'autre, yeux fermés." },

  // ===== ACTION — Level 2 =====
  { id: "a2-01", category: "action", level: 2, prompt: "Embrasse {partner} avec beaucoup plus de langue que d'habitude pendant 20 secondes." },
  { id: "a2-02", category: "action", level: 2, prompt: "Enlève un vêtement de {partner}, au choix." },
  { id: "a2-03", category: "action", level: 2, prompt: "Fais-lui un suçon à un endroit où personne ne le verra." },
  { id: "a2-04", category: "action", level: 2, prompt: "Mordille délicatement son lobe d'oreille." },
  { id: "a2-05", category: "action", level: 2, prompt: "Masse le bas de son dos pendant 2 minutes." },
  { id: "a2-06", category: "action", level: 2, prompt: "Embrasse la zone la plus sensible de son cou que tu connaisses." },
  { id: "a2-07", category: "action", level: 2, prompt: "Parcours son corps avec un glaçon (ou tes doigts) pendant 30 secondes." },
  { id: "a2-08", category: "action", level: 2, prompt: "Prends-{partner:le} dans tes bras et embrasse-{partner:le} comme si c'était la première fois." },
  { id: "a2-09", category: "action", level: 2, prompt: "Caresse son entrejambe par-dessus ses vêtements pendant 30 secondes." },
  { id: "a2-10", category: "action", level: 2, prompt: "Embrasse sa nuque, ses épaules, puis sa clavicule, sans t'arrêter." },
  { id: "a2-11", category: "action", level: 2, prompt: "Regarde-{partner:le} droit dans les yeux et décris ce que tu aimerais lui faire maintenant." },
  { id: "a2-12", category: "action", level: 2, prompt: "Lèche doucement une goutte d'eau déposée sur sa peau." },
  { id: "a2-13", category: "action", level: 2, prompt: "Enlève ton haut très lentement, pendant qu'{partner:il} te regarde." },
  { id: "a2-14", category: "action", level: 2, prompt: "Fais-lui un strip-tease de 30 secondes sur la musique de ton choix." },
  { id: "a2-15", category: "action", level: 2, prompt: "Guide sa main vers l'endroit de ton corps que tu veux qu'{partner:il} touche." },
  { id: "a2-16", category: "action", level: 2, prompt: "Passe 1 minute à l'embrasser partout sauf sur la bouche." },
  { id: "a2-17", category: "action", level: 2, prompt: "Fais-lui un massage sensuel des cuisses pendant 2 minutes." },
  { id: "a2-18", category: "action", level: 2, prompt: "Chuchote-lui 3 choses excitantes que tu veux lui faire ce soir." },

  // ===== ACTION — Level 3 =====
  { id: "a3-01", category: "action", level: 3, prompt: "Embrasse-{partner:le} langoureusement pendant 2 minutes sans vous arrêter." },
  { id: "a3-02", category: "action", level: 3, prompt: "Déshabille entièrement {partner}, très lentement." },
  { id: "a3-03", category: "action", level: 3, prompt: "Bande-lui les yeux et fais-lui découvrir 3 sensations différentes." },
  { id: "a3-04", category: "action", level: 3, prompt: "Embrasse son intimité par-dessus ses sous-vêtements." },
  { id: "a3-05", category: "action", level: 3, prompt: "Prends le contrôle total pendant 3 minutes, {partner:il} n'a pas le droit de bouger." },
  { id: "a3-06", category: "action", level: 3, prompt: "Mets-toi à genoux et regarde-{partner:le} comme si tu allais {partner:le} dévorer." },
  { id: "a3-07", category: "action", level: 3, prompt: "Descends ta bouche de son nombril jusqu'au bas ventre, très lentement." },
  { id: "a3-08", category: "action", level: 3, prompt: "Guide-{partner:le} pour qu'{partner:il} te fasse exactement ce que tu aimes, étape par étape." },
  { id: "a3-09", category: "action", level: 3, prompt: "Place-toi dans la position qu'{partner:il} choisit, et laisse-toi faire pendant 2 minutes." },
  { id: "a3-10", category: "action", level: 3, prompt: "Stimule {partner} avec tes mains jusqu'à ce qu'{partner:il} te supplie d'arrêter ou de continuer." },
  { id: "a3-11", category: "action", level: 3, prompt: "Propose-lui d'inverser complètement les rôles pour les 10 prochaines minutes." },
  { id: "a3-12", category: "action", level: 3, prompt: "Enlève un de tes sous-vêtements avec les dents (ou aide de ta bouche)." },
  { id: "a3-13", category: "action", level: 3, prompt: "Fais-lui l'amour sans bouger du canapé / siège sur lequel vous êtes." },
  { id: "a3-14", category: "action", level: 3, prompt: "Recommence à jouer seulement quand {partner} aura eu un orgasme (ou atteint un moment intense)." },
  { id: "a3-15", category: "action", level: 3, prompt: "Mime ta position préférée, et invite {partner} à la reproduire." },
  { id: "a3-16", category: "action", level: 3, prompt: "Essaie d'exciter {partner} uniquement avec ta voix pendant 1 minute." },

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
  { id: "v3-07", category: "verite", level: 3, prompt: "Quelle est la pratique que tu aimerais introduire {rel:nous} ?" },
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
  { id: "p1-01", category: "positions", level: 1, prompt: "La cuillère : collé·e·s dans le dos, {partner:il} te caresse lentement." },
  { id: "p1-02", category: "positions", level: 1, prompt: "Face à face allongé·e·s, vos jambes entrelacées, fronts contre fronts." },
  { id: "p1-03", category: "positions", level: 1, prompt: "Assis·e sur ses genoux en canapé, bras autour du cou, vous vous embrassez longuement." },
  { id: "p2-01", category: "positions", level: 2, prompt: "Le missionnaire revisité : avec ses jambes sur tes épaules." },
  { id: "p2-02", category: "positions", level: 2, prompt: "La chaise : {partner:il} assis·e, toi sur ses genoux face à {partner:lui}." },
  { id: "p2-03", category: "positions", level: 2, prompt: "La levrette douce : en appui sur les avant-bras, tout en lenteur." },
  { id: "p2-04", category: "positions", level: 2, prompt: "Lotus : assis·e·s face à face, jambes entrelacées, bercements synchronisés." },
  { id: "p3-01", category: "positions", level: 3, prompt: "La brouette : elle en appui sur les mains, il lui tient les jambes." },
  { id: "p3-02", category: "positions", level: 3, prompt: "L'Andromaque renversée : elle sur lui, dos à lui, elle mène la cadence." },
  { id: "p3-03", category: "positions", level: 3, prompt: "Contre un mur : {partner:il} jambes autour de sa taille, totalement porté{partner:e}." },
  { id: "p3-04", category: "positions", level: 3, prompt: "La cathédrale : elle assise sur lui, lui allongé, elle mène le jeu." },
  { id: "p3-05", category: "positions", level: 3, prompt: "La pince : {partner:il} sur le côté, l'autre perpendiculaire, les jambes serrées." },
  { id: "p3-06", category: "positions", level: 3, prompt: "Le 69 classique : face à face inversé·e·s, chacun donne du plaisir à l'autre." },
  { id: "p3-07", category: "positions", level: 3, prompt: "Le bord du lit : {partner} au bord, l'autre debout, mains libres." },

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
  { id: "b3-03", category: "bons", level: 3, prompt: "Bon pour une séance où tu dictes à l'autre ce qu'{partner:il} doit te faire." },
  { id: "b3-04", category: "bons", level: 3, prompt: "Bon pour une surprise coquine inattendue dans la semaine." },

  // =================== EXPANSION POOL 2 ===================
  // ===== ACTION — Level 1 (tender) =====
  { id: "a1-16", category: "action", level: 1, prompt: "Pose ta tête sur son épaule pendant 1 minute, sans rien dire." },
  { id: "a1-17", category: "action", level: 1, prompt: "Prends sa main et embrasse chaque doigt, un par un." },
  { id: "a1-18", category: "action", level: 1, prompt: "Fais-lui un bisou papillon (battement de cils contre sa joue)." },
  { id: "a1-19", category: "action", level: 1, prompt: "Écris un mot doux sur sa paume de main avec ton doigt." },
  { id: "a1-20", category: "action", level: 1, prompt: "Regarde {partner} et dis-lui ce que tu aimes le plus chez lui / elle ce soir." },
  { id: "a1-21", category: "action", level: 1, prompt: "Embrasse ses paupières l'une après l'autre, très doucement." },
  { id: "a1-22", category: "action", level: 1, prompt: "Fais un massage des tempes pendant 1 minute, les yeux fermés." },
  { id: "a1-23", category: "action", level: 1, prompt: "Partage un fruit avec {partner} sans utiliser vos mains." },
  { id: "a1-24", category: "action", level: 1, prompt: "Allumez une bougie ensemble et faites un vœu à voix basse." },
  { id: "a1-25", category: "action", level: 1, prompt: "Tiens-lui le visage à deux mains et regarde-{partner:le} 30 secondes." },

  // ===== ACTION — Level 2 (hot) =====
  { id: "a2-19", category: "action", level: 2, prompt: "Glisse ta main sous son t-shirt et caresse son dos pendant 1 minute." },
  { id: "a2-20", category: "action", level: 2, prompt: "Fais-lui un massage sensuel des fesses par-dessus les vêtements." },
  { id: "a2-21", category: "action", level: 2, prompt: "Embrasse sa poitrine en remontant jusqu'au cou, très lentement." },
  { id: "a2-22", category: "action", level: 2, prompt: "Mords délicatement sa clavicule en descendant vers l'épaule." },
  { id: "a2-23", category: "action", level: 2, prompt: "Souffle lentement de l'oreille jusqu'au bas du dos." },
  { id: "a2-24", category: "action", level: 2, prompt: "Retire doucement un bouton / une fermeture éclair avec une seule main." },
  { id: "a2-25", category: "action", level: 2, prompt: "Chuchote à son oreille les 3 endroits que tu veux embrasser ensuite." },
  { id: "a2-26", category: "action", level: 2, prompt: "Caresse l'intérieur de son poignet avec ta langue pendant 15 secondes." },
  { id: "a2-27", category: "action", level: 2, prompt: "Passe tes doigts dans ses cheveux en l'embrassant lentement." },
  { id: "a2-28", category: "action", level: 2, prompt: "Prends-lui le visage et embrasse-{partner:le} comme dans un film — 20 secondes." },
  { id: "a2-29", category: "action", level: 2, prompt: "Laisse-{partner:le} déboutonner ta chemise / faire glisser ta bretelle sans bouger." },
  { id: "a2-30", category: "action", level: 2, prompt: "Dépose un long baiser dans le creux de sa nuque, tout en massant ses épaules." },
  { id: "a2-31", category: "action", level: 2, prompt: "Promène un glaçon sur sa clavicule, puis ta langue juste après." },
  { id: "a2-32", category: "action", level: 2, prompt: "Accroche-toi à lui / elle par-derrière et embrasse sa nuque pendant 30 secondes." },
  { id: "a2-33", category: "action", level: 2, prompt: "Caresse l'arrière de ses genoux, c'est une zone souvent ignorée." },

  // ===== ACTION — Level 3 (fire) =====
  { id: "a3-17", category: "action", level: 3, prompt: "Pose-toi sur ses cuisses et embrasse-{partner:le} lentement pendant 2 minutes." },
  { id: "a3-18", category: "action", level: 3, prompt: "Déshabille-toi très lentement pendant qu'{partner:il} te regarde, sans {partner:le} toucher." },
  { id: "a3-19", category: "action", level: 3, prompt: "Laisse-{partner:le} guider tes mains n'importe où sur son corps pendant 1 minute." },
  { id: "a3-20", category: "action", level: 3, prompt: "Mets-lui les mains derrière le dos et prends le contrôle du baiser." },
  { id: "a3-21", category: "action", level: 3, prompt: "Embrasse chaque centimètre de son cou en descendant jusqu'à l'épaule." },
  { id: "a3-22", category: "action", level: 3, prompt: "Fais-lui un massage du bas du dos en descendant lentement sur les fesses." },
  { id: "a3-23", category: "action", level: 3, prompt: "Demande-lui un fantasme secret, chuchoté à l'oreille, et propose de le réaliser." },
  { id: "a3-24", category: "action", level: 3, prompt: "Embrasse l'intérieur de ses cuisses en remontant très lentement." },
  { id: "a3-25", category: "action", level: 3, prompt: "Fais-lui sentir ton souffle de la nuque jusqu'au bas du dos, sans jamais {partner:le} toucher." },
  { id: "a3-26", category: "action", level: 3, prompt: "Prends-{partner:le} dans tes bras, mets-{partner:le} contre le mur, embrasse-{partner:le} sans retenue." },
  { id: "a3-27", category: "action", level: 3, prompt: "Caresse son corps les yeux bandés — fais-lui deviner où tu iras ensuite." },
  { id: "a3-28", category: "action", level: 3, prompt: "Raconte-lui à voix basse ce que tu veux qu'{partner:il} te fasse ensuite, geste par geste." },
  { id: "a3-29", category: "action", level: 3, prompt: "Enlève-lui son sous-vêtement avec les dents — prends ton temps." },
  { id: "a3-30", category: "action", level: 3, prompt: "Écartez les lumières, gardez juste une bougie, et dansez nu·e·s 2 minutes." },
  { id: "a3-31", category: "action", level: 3, prompt: "Échangez un baiser sous la douche ou dans la salle de bain." },
  { id: "a3-32", category: "action", level: 3, prompt: "Attrape-{partner:le} par les hanches et presse ton bassin contre le sien — laisse durer." },

  // ===== VÉRITÉ — Level 1 =====
  { id: "v1-11", category: "verite", level: 1, prompt: "Quel est le meilleur baiser qu'on ait échangé ?" },
  { id: "v1-12", category: "verite", level: 1, prompt: "Quand as-tu su que tu voulais plus que de l'amitié avec moi ?" },
  { id: "v1-13", category: "verite", level: 1, prompt: "Quelle est ta manière préférée de commencer une soirée romantique ?" },
  { id: "v1-14", category: "verite", level: 1, prompt: "Quel parfum / odeur me rappelle un beau souvenir pour toi ?" },
  { id: "v1-15", category: "verite", level: 1, prompt: "Quelle musique te donne envie de me prendre dans tes bras ?" },
  { id: "v1-16", category: "verite", level: 1, prompt: "Quel est le plus beau lieu dans lequel on a partagé un baiser ?" },
  { id: "v1-17", category: "verite", level: 1, prompt: "Quel détail chez moi te fait fondre à chaque fois ?" },
  { id: "v1-18", category: "verite", level: 1, prompt: "Raconte la fois où tu t'es dit « je suis dingue de lui / elle »." },

  // ===== VÉRITÉ — Level 2 =====
  { id: "v2-13", category: "verite", level: 2, prompt: "Quel est ton souvenir le plus chaud avec moi jusqu'à présent ?" },
  { id: "v2-14", category: "verite", level: 2, prompt: "Quelle scène d'un film m'imaginer te ferait craquer ?" },
  { id: "v2-15", category: "verite", level: 2, prompt: "Dans quel endroit public avais-tu envie de me toucher, sans oser ?" },
  { id: "v2-16", category: "verite", level: 2, prompt: "Quelle est ta zone préférée à toucher sur moi ?" },
  { id: "v2-17", category: "verite", level: 2, prompt: "Tu as déjà eu une pensée coquine pour moi au boulot ? Raconte." },
  { id: "v2-18", category: "verite", level: 2, prompt: "Quel moment de la journée te donne le plus envie de moi ?" },
  { id: "v2-19", category: "verite", level: 2, prompt: "Quelle tenue rêverais-tu me voir enlever devant toi ?" },
  { id: "v2-20", category: "verite", level: 2, prompt: "Quelle est la chose la plus inattendue qui t'excite chez moi ?" },
  { id: "v2-21", category: "verite", level: 2, prompt: "Sur une échelle de 1 à 10, à combien suis-je là, tout de suite ?" },

  // ===== VÉRITÉ — Level 3 =====
  { id: "v3-11", category: "verite", level: 3, prompt: "Quel est l'endroit du corps où personne ne m'a jamais embrassé·e, et où tu rêves de poser ta bouche ?" },
  { id: "v3-12", category: "verite", level: 3, prompt: "Si tu devais choisir entre me regarder me faire plaisir seul·e ou prendre le contrôle, tu choisis quoi ?" },
  { id: "v3-13", category: "verite", level: 3, prompt: "Quelle scène coquine t'a le plus marqué·e ? (film, livre, vrai souvenir)" },
  { id: "v3-14", category: "verite", level: 3, prompt: "Quel est ton rythme idéal — lent et intense, ou rapide et puissant ?" },
  { id: "v3-15", category: "verite", level: 3, prompt: "Si on devait filmer une nuit (juste pour nous), qu'est-ce que tu aimerais y voir ?" },
  { id: "v3-16", category: "verite", level: 3, prompt: "Quel est ton pire fantasme, celui que tu n'aurais jamais imaginé avant ?" },
  { id: "v3-17", category: "verite", level: 3, prompt: "Qu'est-ce qui manque à nos moments intimes selon toi ? Sois honnête." },
  { id: "v3-18", category: "verite", level: 3, prompt: "Quelle serait ma réaction parfaite si tu me surprenais nu·e au lit demain matin ?" },

  // ===== DÉFIS DU MOIS =====
  { id: "d1-04", category: "defis", level: 1, prompt: "Cette semaine : une balade main dans la main sans téléphone ni musique." },
  { id: "d1-05", category: "defis", level: 1, prompt: "Dans les 7 jours : un petit-déjeuner en tête-à-tête sans parler de boulot." },
  { id: "d1-06", category: "defis", level: 1, prompt: "Ce mois-ci : laissez-vous un mot d'amour caché à trouver." },
  { id: "d2-04", category: "defis", level: 2, prompt: "Dans la semaine : une séance de sextos coordonnée en plein milieu de journée." },
  { id: "d2-05", category: "defis", level: 2, prompt: "Ce mois-ci : achetez ensemble un vêtement qui vous excite mutuellement." },
  { id: "d2-06", category: "defis", level: 2, prompt: "Dans 10 jours : un week-end romantique improvisé (même proche de chez vous)." },
  { id: "d3-05", category: "defis", level: 3, prompt: "Dans le mois : essayez un nouveau lieu de la maison pour l'amour." },
  { id: "d3-06", category: "defis", level: 3, prompt: "Ce mois-ci : offrez-vous un jouet à deux et testez-le ensemble." },
  { id: "d3-07", category: "defis", level: 3, prompt: "Dans la semaine : une nuit sans aucun tabou et avec safe word établi." },
  { id: "d3-08", category: "defis", level: 3, prompt: "Dans 14 jours : rejouez un scénario de votre choix — tenues & rôles compris." },

  // ===== POSITIONS =====
  { id: "p1-04", category: "positions", level: 1, prompt: "Tête contre tête, jambes enlacées, respirations synchronisées — rien d'autre." },
  { id: "p1-05", category: "positions", level: 1, prompt: "Assis dos à dos, une main dans le dos de l'autre — rapprochez-vous lentement." },
  { id: "p2-05", category: "positions", level: 2, prompt: "Le miroir : assis·e·s face à face, genoux repliés, mains posées l'une contre l'autre." },
  { id: "p2-06", category: "positions", level: 2, prompt: "Debout enlacé·e·s, l'un·e porté·e sur l'autre contre un mur — simulez la danse." },
  { id: "p2-07", category: "positions", level: 2, prompt: "Allongé·e·s côte à côte, bouche contre bouche, main entre les cuisses par-dessus les vêtements." },
  { id: "p2-08", category: "positions", level: 2, prompt: "Amazone douce : à cheval sur ses cuisses, tu ondules lentement." },
  { id: "p3-08", category: "positions", level: 3, prompt: "Le tabouret : l'un·e assis·e sur une chaise, l'autre à califourchon, rythme lent." },
  { id: "p3-09", category: "positions", level: 3, prompt: "Assis·e sur la table, jambes écartées, partenaire debout — accès total." },
  { id: "p3-10", category: "positions", level: 3, prompt: "La brouette assise : elle / il sur les cuisses, pieds posés de chaque côté des hanches." },

  // ===== SI JE POUVAIS =====
  { id: "s1-03", category: "sijepouvais", level: 1, prompt: "Et si je pouvais t'organiser un rdv surprise ce week-end — tu aimerais plutôt dehors ou à la maison ?" },
  { id: "s1-04", category: "sijepouvais", level: 1, prompt: "Et si je pouvais te masser pendant une heure — quelle zone je traiterais en priorité ?" },
  { id: "s1-05", category: "sijepouvais", level: 1, prompt: "Et si je pouvais te faire un album photo de nos 5 plus beaux souvenirs — lesquels tu choisirais ?" },
  { id: "s2-04", category: "sijepouvais", level: 2, prompt: "Et si je pouvais t'envoyer un message aujourd'hui pour t'exciter au boulot — tu voudrais quoi dedans ?" },
  { id: "s2-05", category: "sijepouvais", level: 2, prompt: "Et si je pouvais te déshabiller là où tu veux — on irait où dans la maison ?" },
  { id: "s2-06", category: "sijepouvais", level: 2, prompt: "Et si je pouvais te dédier une playlist érotique — quel morceau serait le premier ?" },
  { id: "s3-05", category: "sijepouvais", level: 3, prompt: "Et si je pouvais te dominer totalement une soirée — ça te tenterait ? Pourquoi ?" },
  { id: "s3-06", category: "sijepouvais", level: 3, prompt: "Et si je pouvais te faire jouir sans jamais te toucher, juste avec la voix — j'essaie ?" },
  { id: "s3-07", category: "sijepouvais", level: 3, prompt: "Et si je pouvais effacer tous les tabous pour une seule nuit — tu me demanderais quoi ?" },

  // ===== QUI EST LE PLUS =====
  { id: "q1-04", category: "quiestleplus", level: 1, prompt: "Qui est le / la plus patient·e du couple ?" },
  { id: "q1-05", category: "quiestleplus", level: 1, prompt: "Qui est le / la plus câlin·e le matin ?" },
  { id: "q1-06", category: "quiestleplus", level: 1, prompt: "Qui sait le mieux faire rire l'autre ?" },
  { id: "q2-05", category: "quiestleplus", level: 2, prompt: "Qui envoie le / la premier·ère un message coquin ?" },
  { id: "q2-06", category: "quiestleplus", level: 2, prompt: "Qui est le / la plus taquin·e pendant les préliminaires ?" },
  { id: "q2-07", category: "quiestleplus", level: 2, prompt: "Qui s'endort le / la plus vite après une séance ?" },
  { id: "q3-05", category: "quiestleplus", level: 3, prompt: "Qui est le / la plus aventureux·se pour tester de nouvelles choses ?" },
  { id: "q3-06", category: "quiestleplus", level: 3, prompt: "Qui aime le plus être regardé·e et admiré·e en train de jouir ?" },
  { id: "q3-07", category: "quiestleplus", level: 3, prompt: "Qui donnerait le plus d'orgasmes d'affilée à l'autre ?" },
  { id: "q3-08", category: "quiestleplus", level: 3, prompt: "Qui serait plus à l'aise dans un club libertin pour observer ?" },

  // ===== TU ME CONNAIS ? =====
  { id: "c1-05", category: "connais", level: 1, prompt: "Quel est mon film préféré de tous les temps ?" },
  { id: "c1-06", category: "connais", level: 1, prompt: "Quelle est ma phrase ou expression récurrente en ce moment ?" },
  { id: "c1-07", category: "connais", level: 1, prompt: "Quelle est mon idée de la soirée parfaite en semaine ?" },
  { id: "c2-04", category: "connais", level: 2, prompt: "Quel est le geste qui me fait instantanément fondre ?" },
  { id: "c2-05", category: "connais", level: 2, prompt: "Quelle partie de ton corps je préfère le plus ?" },
  { id: "c2-06", category: "connais", level: 2, prompt: "Quel genre de baiser j'aime le plus recevoir ?" },
  { id: "c3-04", category: "connais", level: 3, prompt: "Quel est mon rêve coquin le plus fréquent ?" },
  { id: "c3-05", category: "connais", level: 3, prompt: "Quelle est la chose qui me met dans l'humeur en 2 minutes chrono ?" },
  { id: "c3-06", category: "connais", level: 3, prompt: "Qu'est-ce qui me fait jouir le plus fort avec toi ?" },
  { id: "c3-07", category: "connais", level: 3, prompt: "Quel est le fantasme que tu m'as entendu·e évoquer sans vraiment y croire ?" },

  // ===== BONS À UTILISER =====
  { id: "b1-04", category: "bons", level: 1, prompt: "Bon pour un film + câlins forcés (toute la séance collé·e·s)." },
  { id: "b1-05", category: "bons", level: 1, prompt: "Bon pour un massage des pieds de 10 minutes, quand tu veux." },
  { id: "b1-06", category: "bons", level: 1, prompt: "Bon pour une playlist romantique dédiée — à écouter ensemble un soir." },
  { id: "b2-05", category: "bons", level: 2, prompt: "Bon pour un slow à deux dans le salon, musique au choix du / de la détenteur·rice." },
  { id: "b2-06", category: "bons", level: 2, prompt: "Bon pour un massage sensuel à l'huile, cuisses + dos, 20 minutes." },
  { id: "b2-07", category: "bons", level: 2, prompt: "Bon pour un long baiser langoureux dès le prochain lever." },
  { id: "b3-05", category: "bons", level: 3, prompt: "Bon pour un soir où tu décides de tout : tenue, lieu, position, rythme." },
  { id: "b3-06", category: "bons", level: 3, prompt: "Bon pour une surprise coquine le jour où tu t'y attends le moins." },
  { id: "b3-07", category: "bons", level: 3, prompt: "Bon pour un scénario de rôle dont tu choisis entièrement le script." },
  { id: "b3-08", category: "bons", level: 3, prompt: "Bon pour choisir une carte Hot niveau 3 à exécuter par l'autre — sans débat." },
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
