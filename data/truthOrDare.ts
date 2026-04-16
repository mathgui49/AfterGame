export type TDLevel = "soft" | "hot" | "extreme";
export interface TDItem {
  id: string;
  level: TDLevel;
  text: string;
}

export const TRUTHS: TDItem[] = [
  // SOFT
  { id: "t-s-01", level: "soft", text: "Quelle a été ta première impression de moi ?" },
  { id: "t-s-02", level: "soft", text: "Quel est ton souvenir préféré avec moi ?" },
  { id: "t-s-03", level: "soft", text: "Quel est ton plus grand coup de cœur ciné ?" },
  { id: "t-s-04", level: "soft", text: "Quel est le compliment qui te ferait fondre ?" },
  { id: "t-s-05", level: "soft", text: "Quel est ton rendez-vous rêvé ?" },
  { id: "t-s-06", level: "soft", text: "Quelle est la chanson qui te rappelle moi ?" },
  { id: "t-s-07", level: "soft", text: "Quel est ton surnom secret pour moi dans ta tête ?" },
  { id: "t-s-08", level: "soft", text: "Qu'est-ce qui te rend jaloux·se ?" },
  { id: "t-s-09", level: "soft", text: "Quelle est la qualité que tu préfères chez moi ?" },
  { id: "t-s-10", level: "soft", text: "Quel est ton rêve le plus fou, même non-coquin ?" },

  // HOT
  { id: "t-h-01", level: "hot", text: "Quelle partie de mon corps préfères-tu embrasser ?" },
  { id: "t-h-02", level: "hot", text: "À quoi penses-tu quand tu te touches en pensant à moi ?" },
  { id: "t-h-03", level: "hot", text: "Où rêverais-tu qu'on fasse l'amour ?" },
  { id: "t-h-04", level: "hot", text: "Quelle est la tenue qui te fait perdre la tête sur moi ?" },
  { id: "t-h-05", level: "hot", text: "Quel est ton fantasme le plus récurrent ?" },
  { id: "t-h-06", level: "hot", text: "Quelle est la chose la plus osée que tu as faite en public ?" },
  { id: "t-h-07", level: "hot", text: "Combien de fois as-tu pensé à moi de manière coquine cette semaine ?" },
  { id: "t-h-08", level: "hot", text: "Quel mot d'amour cru aimerais-tu entendre de moi ?" },
  { id: "t-h-09", level: "hot", text: "Quelle expérience sensuelle voudrais-tu qu'on vive ?" },
  { id: "t-h-10", level: "hot", text: "Quel geste déjà fait entre nous voudrais-tu absolument refaire ce soir ?" },
  { id: "t-h-11", level: "hot", text: "Quelle odeur chez moi te fait de l'effet ?" },
  { id: "t-h-12", level: "hot", text: "Quel est le sextoy qui t'intrigue le plus ?" },

  // EXTREME
  { id: "t-x-01", level: "extreme", text: "Quel est le fantasme que tu n'as jamais osé me dire ?" },
  { id: "t-x-02", level: "extreme", text: "Quel est le scénario de jeu de rôle que tu rêves de vivre avec moi ?" },
  { id: "t-x-03", level: "extreme", text: "Quelle est ta limite secrète que tu aimerais peut-être repousser ?" },
  { id: "t-x-04", level: "extreme", text: "Y a-t-il une pratique tabou que tu aimerais qu'on essaie ?" },
  { id: "t-x-05", level: "extreme", text: "Quelle est la chose la plus excitante que tu ne m'as jamais avouée ?" },
  { id: "t-x-06", level: "extreme", text: "Quel est le rêve coquin le plus intense dont tu te rappelles ?" },
  { id: "t-x-07", level: "extreme", text: "Quelle scène imaginerais-tu si tu devais diriger un film coquin sur nous ?" },
  { id: "t-x-08", level: "extreme", text: "Quel rôle de domination ou soumission préfères-tu en secret ?" },
  { id: "t-x-09", level: "extreme", text: "Quelle est la position qu'on n'a jamais faite mais que tu meurs d'envie d'essayer ?" },

  // ============ EXPANSION ============
  // SOFT
  { id: "t-s-11", level: "soft", text: "Quelle est la déclaration la plus romantique qu'on t'ait faite ?" },
  { id: "t-s-12", level: "soft", text: "Quel geste simple de ma part te rassure toujours ?" },
  { id: "t-s-13", level: "soft", text: "Quelle chanson te ramène à un souvenir avec moi ?" },
  { id: "t-s-14", level: "soft", text: "Quel est ton souvenir de vacances préféré avec moi ?" },
  { id: "t-s-15", level: "soft", text: "Quelle qualité de toi t'a attiré·e chez moi en retour ?" },
  { id: "t-s-16", level: "soft", text: "Si on devait déménager ensemble dans une ville au hasard, tu choisirais laquelle ?" },
  { id: "t-s-17", level: "soft", text: "Quelle attention quotidienne te touche le plus ?" },
  { id: "t-s-18", level: "soft", text: "Qu'est-ce qui te manque le plus quand je ne suis pas là ?" },

  // HOT
  { id: "t-h-13", level: "hot", text: "Quelle est la tenue la plus sexy que tu aimerais essayer sur moi ?" },
  { id: "t-h-14", level: "hot", text: "Quelle est la dernière fois où tu as rêvé de moi ? Raconte." },
  { id: "t-h-15", level: "hot", text: "Quel est le geste le plus inattendu qui t'a déjà excité·e pendant la journée ?" },
  { id: "t-h-16", level: "hot", text: "Si je te massais là maintenant, où voudrais-tu que je commence ?" },
  { id: "t-h-17", level: "hot", text: "Quelle est la chose la plus sexy que je t'ai envoyée en message ?" },
  { id: "t-h-18", level: "hot", text: "Quelle est ta pensée récurrente quand tu t'endors à côté de moi ?" },
  { id: "t-h-19", level: "hot", text: "Dans quelle tenue je te fais le plus d'effet ?" },
  { id: "t-h-20", level: "hot", text: "Quel souvenir avec moi tu repasses dans ta tête pour te faire plaisir ?" },

  // EXTREME
  { id: "t-x-10", level: "extreme", text: "Raconte-moi le scénario qui te fait jouir le plus vite." },
  { id: "t-x-11", level: "extreme", text: "Quel est le rêve coquin le plus étrange que tu as fait avec moi ?" },
  { id: "t-x-12", level: "extreme", text: "Si tu pouvais me filmer dans une position précise, ce serait laquelle ?" },
  { id: "t-x-13", level: "extreme", text: "Quelle est la partie de notre intimité que tu aimerais explorer plus ?" },
  { id: "t-x-14", level: "extreme", text: "Est-ce qu'il y a un geste que je fais sans le savoir qui te fait perdre la tête ?" },
  { id: "t-x-15", level: "extreme", text: "Quel est le plus long que tu as tenu sans jouir par toi-même ?" },
];


export const DARES: TDItem[] = [
  // SOFT
  { id: "d-s-01", level: "soft", text: "Fais un câlin silencieux de 30 secondes." },
  { id: "d-s-02", level: "soft", text: "Murmure ton endroit préféré à l'oreille de l'autre." },
  { id: "d-s-03", level: "soft", text: "Embrasse la joue de l'autre 3 fois très doucement." },
  { id: "d-s-04", level: "soft", text: "Fais un bisou sur le dessus de la main." },
  { id: "d-s-05", level: "soft", text: "Regarde-le / la 20 secondes dans les yeux en souriant." },
  { id: "d-s-06", level: "soft", text: "Raconte un fou rire partagé à voix haute." },
  { id: "d-s-07", level: "soft", text: "Chante 20 secondes de votre chanson." },
  { id: "d-s-08", level: "soft", text: "Fais un massage du crâne pendant 1 minute." },
  { id: "d-s-09", level: "soft", text: "Dessine un cœur dans sa paume de main." },
  { id: "d-s-10", level: "soft", text: "Fais-lui un compliment que tu ne lui as jamais fait." },

  // HOT
  { id: "d-h-01", level: "hot", text: "Embrasse la nuque de l'autre pendant 20 secondes." },
  { id: "d-h-02", level: "hot", text: "Fais un massage du bas du dos sous les vêtements, pendant 1 minute." },
  { id: "d-h-03", level: "hot", text: "Mords doucement sa lèvre inférieure." },
  { id: "d-h-04", level: "hot", text: "Enlève un vêtement au choix de l'autre, lentement." },
  { id: "d-h-05", level: "hot", text: "Dépose 5 baisers dans des endroits inattendus." },
  { id: "d-h-06", level: "hot", text: "Fais-lui un suçon discret." },
  { id: "d-h-07", level: "hot", text: "Lèche ou souffle sur son oreille pendant 15 secondes." },
  { id: "d-h-08", level: "hot", text: "Fais un lap-dance debout de 20 secondes." },
  { id: "d-h-09", level: "hot", text: "Embrasse-le / la langoureusement, sans les mains, pendant 30 secondes." },
  { id: "d-h-10", level: "hot", text: "Guide ses mains sur ton corps sans parler." },
  { id: "d-h-11", level: "hot", text: "Mets-lui une musique sexy et danse 30 secondes pour lui / elle." },
  { id: "d-h-12", level: "hot", text: "Décris 3 choses que tu aimes qu'il / elle te fasse au lit." },

  // EXTREME
  { id: "d-x-01", level: "extreme", text: "Déshabille ton / ta partenaire sans utiliser tes mains." },
  { id: "d-x-02", level: "extreme", text: "Caresse-le / la sensuellement pendant 2 minutes sans l'embrasser." },
  { id: "d-x-03", level: "extreme", text: "Embrasse son bas-ventre très lentement pendant 30 secondes." },
  { id: "d-x-04", level: "extreme", text: "Bande les yeux de l'autre et fais-lui deviner 3 parties de ton corps avec la bouche." },
  { id: "d-x-05", level: "extreme", text: "Propose-lui un scénario coquin à mettre en scène d'ici 10 minutes." },
  { id: "d-x-06", level: "extreme", text: "Reproduis ta position préférée en mimant avec lui / elle." },
  { id: "d-x-07", level: "extreme", text: "Mets-toi dans la position qu'il / elle te demande et laisse-le / la te caresser 2 minutes." },
  { id: "d-x-08", level: "extreme", text: "Masse-le / la avec de l'huile pendant 3 minutes, focus zones sensibles." },
  { id: "d-x-09", level: "extreme", text: "Donne 3 ordres coquins qu'il / elle devra exécuter un par un." },
  { id: "d-x-10", level: "extreme", text: "Fais durer un baiser pendant 3 minutes, sans rien dire ni vous éloigner." },

  // ===== SOFT (batch 2) =====
  { id: "d-s-11", level: "soft", text: "Fais-lui un compliment sur un détail qu'il / elle n'a jamais entendu." },
  { id: "d-s-12", level: "soft", text: "Prends-le / la dans tes bras et balance-toi doucement pendant 30 secondes." },
  { id: "d-s-13", level: "soft", text: "Pose ton front contre le sien et respire à son rythme." },
  { id: "d-s-14", level: "soft", text: "Prends sa main et pose-la sur ton cœur 20 secondes." },
  { id: "d-s-15", level: "soft", text: "Embrasse-le / la sur les paupières, une à la fois." },

  // ===== HOT (batch 2) =====
  { id: "d-h-13", level: "hot", text: "Glisse ta main sous son haut et caresse son ventre pendant 30 secondes." },
  { id: "d-h-14", level: "hot", text: "Embrasse sa poitrine à travers le tissu, langue bien présente." },
  { id: "d-h-15", level: "hot", text: "Fais-lui un suçon dans le cou ou la clavicule." },
  { id: "d-h-16", level: "hot", text: "Dis-lui ce que tu as envie de lui faire en 3 phrases, sans bouger." },
  { id: "d-h-17", level: "hot", text: "Déboutonne son pantalon avec les dents — juste déboutonner." },

  // ===== EXTREME (batch 2) =====
  { id: "d-x-11", level: "extreme", text: "Raconte-lui, pendant 1 minute sans interruption, ce qui va se passer dans les 10 prochaines minutes." },
  { id: "d-x-12", level: "extreme", text: "Prends-le / la par les hanches et presse-toi contre lui / elle — laisse sentir ton envie." },
  { id: "d-x-13", level: "extreme", text: "Guide sa main exactement où tu veux — et ne lui lâche pas pendant 1 minute." },
  { id: "d-x-14", level: "extreme", text: "Bande-lui les yeux et fais-lui deviner 3 sensations (doigts, glaçon, bouche, plume…)." },
  { id: "d-x-15", level: "extreme", text: "Attrape son t-shirt à deux mains et rapproche-le / la de toi d'un coup sec." },
];
