// Hard cards — explicit, crude, sexually direct content reserved for the
// Hard mode. Merged into the Hot Cards deck only when Hard mode is enabled
// (behind age gate + consenting duo + Brûlant level).
//
// Tokens (see lib/templater.ts):
//   {you} / {partner}     → current-turn actor / receiver (bolded)
//   {partner:sexe}        → "pénis" / "clitoris" (toujours précédé de "son")
//   {partner:oralv}       → "une fellation" / "un cunnilingus"
//   {partner:touche}      → "branler" / "doigter" (infinitif)
//   {partner:suc}         → "sucer" / "lécher"
//   {partner:le}          → "le" / "la"
//   {partner:il}          → "il" / "elle"
//   {you:cum}             → "éjaculer" / "mouiller"

import type { HotCard } from "./hotCards";

export const HARD_CARDS: HotCard[] = [
  // ===== ACTION — oral =====
  { id: "h-a-01", category: "action", level: 3, prompt: "{you}, lèche lentement son {partner:sexe} pendant 30 secondes, en variant la pression." },
  { id: "h-a-02", category: "action", level: 3, prompt: "{you}, fais {partner:oralv} à {partner} jusqu'à ce qu'{partner:il} soit à deux doigts de jouir — puis arrête." },
  { id: "h-a-03", category: "action", level: 3, prompt: "{you}, aspire doucement le {partner:sexe} de {partner}, alterne avec des coups de langue plus larges." },
  { id: "h-a-04", category: "action", level: 3, prompt: "{you}, embrasse son {partner:sexe} avec toute ta bouche, comme si tu l'embrassais sur les lèvres." },
  { id: "h-a-05", category: "action", level: 3, prompt: "{you}, prends ton temps pour {partner:suc} son {partner:sexe} en gardant le regard levé vers {partner}." },
  { id: "h-a-06", category: "action", level: 3, prompt: "{you}, fais un 69 avec {partner} pendant 2 minutes : chacun·e donne du plaisir à l'autre en même temps." },
  { id: "h-a-07", category: "action", level: 3, prompt: "{you}, fais {partner:oralv} à {partner} aussi profondément que tu peux pendant 10 secondes, puis remonte très lentement." },
  { id: "h-a-08", category: "action", level: 3, prompt: "{you}, souffle chaud sur le {partner:sexe} de {partner} avant de le toucher — fais-{partner:lui} attendre." },
  { id: "h-a-09", category: "action", level: 3, prompt: "{you}, embrasse tout son {partner:sexe} avec une pression très douce, langue large et détendue." },

  // ===== ACTION — manuel =====
  { id: "h-a-10", category: "action", level: 3, prompt: "{you}, {partner:touche} {partner} doucement pendant 1 minute en observant ses réactions." },
  { id: "h-a-11", category: "action", level: 3, prompt: "{you}, {partner:touche} {partner} avec ta main pendant que tu l'embrasses langoureusement." },
  { id: "h-a-12", category: "action", level: 3, prompt: "{you}, glisse un doigt, puis deux, puis trois en toi-même ou dans {partner}, en te calant sur son rythme." },
  { id: "h-a-13", category: "action", level: 3, prompt: "{you}, caresse le {partner:sexe} de {partner} en petits cercles fermes, alterne avec la langue, jusqu'à l'orgasme si possible." },
  { id: "h-a-14", category: "action", level: 3, prompt: "{you}, retiens {partner} au bord de l'orgasme 3 fois d'affilée avant de {partner:le} laisser jouir pour de bon." },

  // ===== ACTION — spectacle =====
  { id: "h-a-15", category: "action", level: 3, prompt: "{you}, masturbe-toi devant {partner} — {partner:il} doit garder les mains dans le dos et juste te regarder jouir." },
  { id: "h-a-16", category: "action", level: 3, prompt: "{you}, demande à {partner} de se {partner:touche} devant toi pendant que tu décris ce que tu vas lui faire après." },
  { id: "h-a-17", category: "action", level: 3, prompt: "{you}, lèche {partner} pendant qu'{partner:il} se {partner:touche} — ta main autour de la sienne pour guider le rythme." },

  // ===== ACTION — corps =====
  { id: "h-a-18", category: "action", level: 3, prompt: "{you}, lèche les tétons de {partner} pendant que ta main s'occupe du reste de son corps." },
  { id: "h-a-19", category: "action", level: 3, prompt: "{you}, fais un suçon à l'intérieur de la cuisse de {partner}, tout près de son {partner:sexe}." },
  { id: "h-a-20", category: "action", level: 3, prompt: "{you}, mords doucement la lèvre inférieure de {partner} en fin de baiser." },
  { id: "h-a-21", category: "action", level: 3, prompt: "{you}, mets tes doigts dans la bouche de {partner} après qu'ils aient touché son {partner:sexe}." },

  // ===== ACTION — explicit =====
  { id: "h-a-22", category: "action", level: 3, prompt: "{you}, prends {partner} par derrière, lentement, en murmurant tout ce que tu es en train de faire." },
  { id: "h-a-23", category: "action", level: 3, prompt: "{you}, négociez à voix haute : où {you} veut finir — bouche, visage, ventre, poitrine ? Dites-le clairement." },
  { id: "h-a-24", category: "action", level: 3, prompt: "{you}, stimule l'anus de {partner} du bout du doigt (avec lubrifiant) pendant que ta bouche s'occupe de son {partner:sexe}." },
  { id: "h-a-25", category: "action", level: 3, prompt: "{you}, explore tout le {partner:sexe} de {partner} du bout de la langue : contours, plis, zones les plus sensibles — prends ton temps." },
  { id: "h-a-26", category: "action", level: 3, prompt: "{you}, écarte doucement son corps et regarde {partner} dans les yeux juste avant d'y plonger la langue." },

  // ===== ACTION — supplément =====
  { id: "h-a-27", category: "action", level: 3, prompt: "{you}, dis à {partner} exactement ce que tu veux qu'{partner:il} te fasse, avec les mots les plus crus possibles." },
  { id: "h-a-28", category: "action", level: 3, prompt: "{you}, donne une légère fessée à {partner} en lui tenant les poignets dans ton autre main." },
  { id: "h-a-29", category: "action", level: 3, prompt: "{you}, grimpe sur {partner} et frotte-toi contre son {partner:sexe} jusqu'à être prêt{you:e} à exploser." },
  { id: "h-a-30", category: "action", level: 3, prompt: "{you}, bande les yeux de {partner} et fais-lui deviner 3 sensations différentes (ta langue, ta main, un glaçon)." },
  { id: "h-a-31", category: "action", level: 3, prompt: "{you}, attache doucement les poignets de {partner} avec une écharpe et prends le contrôle total pendant 2 minutes." },
  { id: "h-a-32", category: "action", level: 3, prompt: "{you}, chevauche {partner} et guide son {partner:sexe} pour qu'{partner:il} te stimule exactement là où tu aimes." },
  { id: "h-a-33", category: "action", level: 3, prompt: "{you}, {partner:suc} lentement chaque doigt de {partner} comme tu aimerais {partner:suc} son {partner:sexe}." },

  // ===== VÉRITÉ — crude direct =====
  { id: "h-v-01", category: "verite", level: 3, prompt: "{you}, raconte avec tes mots comment tu aimes qu'on te fasse {you:oralv}." },
  { id: "h-v-02", category: "verite", level: 3, prompt: "{you}, la dernière fois que tu t'es {you:touche} tout{you:e} seul{you:e} en pensant à {partner}, tu imaginais quoi exactement ?" },
  { id: "h-v-03", category: "verite", level: 3, prompt: "{you}, tu préfères que {partner} jouisse dans ta bouche, sur toi, ou en toi ? Sans détour." },
  { id: "h-v-04", category: "verite", level: 3, prompt: "{you}, quel mot cru te fait {you:cum} en 3 secondes ?" },
  { id: "h-v-05", category: "verite", level: 3, prompt: "{you}, décris à {partner} ce que tu aimerais qu'{partner:il} te fasse là tout de suite, sans filtre." },
  { id: "h-v-06", category: "verite", level: 3, prompt: "{you}, quelle partie du corps de {partner} tu voudrais lécher toute la nuit ?" },
  { id: "h-v-07", category: "verite", level: 3, prompt: "{you}, tu préfères avaler, cracher, ou recevoir sur le corps ? Explique ta préférence." },
  { id: "h-v-08", category: "verite", level: 3, prompt: "{you}, tu aimes être {you:touche} lentement ou vite ? Montre le rythme sur la main de {partner}." },
  { id: "h-v-09", category: "verite", level: 3, prompt: "{you}, tu préfères que {partner} soit doux·ce ou cru·e au lit ? Quels mots tu veux entendre ?" },
  { id: "h-v-10", category: "verite", level: 3, prompt: "{you}, ton fantasme le plus tabou avec {partner} — les mots exacts, cette fois." },
  { id: "h-v-11", category: "verite", level: 3, prompt: "{you}, tu as déjà joui juste en regardant {partner}, sans qu'{partner:il} ne te touche ? Raconte." },
  { id: "h-v-12", category: "verite", level: 3, prompt: "{you}, quelle pratique tu n'as jamais osé demander à {partner} mais dont tu rêves ?" },
  { id: "h-v-13", category: "verite", level: 3, prompt: "{you}, tu aimes qu'on te regarde quand tu te {you:touche} ? Tu aimerais que {partner} te regarde ?" },
  { id: "h-v-14", category: "verite", level: 3, prompt: "{you}, quel son tu fais quand tu jouis fort ? Fais-le maintenant pour {partner}." },
  { id: "h-v-15", category: "verite", level: 3, prompt: "{you}, tu as déjà pensé à de l'anal avec {partner} ? Comment tu l'imagines ?" },
  { id: "h-v-16", category: "verite", level: 3, prompt: "{you}, là maintenant : {partner:oralv} d'abord, ou pénétration tout de suite ? Choisis." },
  { id: "h-v-17", category: "verite", level: 3, prompt: "{you}, nomme 3 endroits de ton corps où tu rêves que {partner} dépose sa langue ce soir." },
  { id: "h-v-18", category: "verite", level: 3, prompt: "{you}, quelle est la position qui te fait le plus jouir avec {partner} ? Montre-la là, debout, sans la faire." },
  { id: "h-v-19", category: "verite", level: 3, prompt: "{you}, est-ce que tu regardes du porno ? Lequel t'excite le plus quand tu penses à {partner} ?" },
  { id: "h-v-20", category: "verite", level: 3, prompt: "{you}, décris le corps de {partner} avec les mots les plus crus que tu connais." },

  // ===== POSITIONS — explicit =====
  { id: "h-p-01", category: "positions", level: 3, prompt: "Doggy, tête au matelas, hanches en l'air — pénétration profonde, une main dans les cheveux de {partner}, l'autre sur son {partner:sexe}." },
  { id: "h-p-02", category: "positions", level: 3, prompt: "69 inversé : celui/celle en dessous contrôle le rythme, l'autre se laisse faire." },
  { id: "h-p-03", category: "positions", level: 3, prompt: "Cuillère en Y : un genou remonté sur le côté — accès total au {partner:sexe} en même temps que la pénétration." },
  { id: "h-p-04", category: "positions", level: 3, prompt: "Andromaque : {you} à cheval sur {partner} — {you} mène, l'autre stimule son {partner:sexe} ou ses tétons." },
  { id: "h-p-05", category: "positions", level: 3, prompt: "Bord du lit : {partner} allongé{partner:e} les cuisses largement ouvertes, {you} debout — alterne langue et pénétration." },
  { id: "h-p-06", category: "positions", level: 3, prompt: "Face à face assis·e·s, enlacé·e·s : mouvements lents, son {partner:sexe} stimulé en continu par le frottement." },
  { id: "h-p-07", category: "positions", level: 3, prompt: "Levrette debout contre un mur : {partner} plaqué{partner:e} dos à {you}, qui tient les hanches." },
  { id: "h-p-08", category: "positions", level: 3, prompt: "La chaise inversée : {you} assis·e, {partner} face à toi les jambes autour de ta taille, stimulation croisée." },

  // ===== QUI EST LE PLUS — crude =====
  { id: "h-q-01", category: "quiestleplus", level: 3, prompt: "Qui jouit le plus vite rien qu'avec des mots crus à l'oreille ?" },
  { id: "h-q-02", category: "quiestleplus", level: 3, prompt: "Qui gémit le plus fort quand il/elle jouit ?" },
  { id: "h-q-03", category: "quiestleplus", level: 3, prompt: "Entre {P1} et {P2}, qui est le/la plus doué·e pour les préliminaires oraux ?" },
  { id: "h-q-04", category: "quiestleplus", level: 3, prompt: "Qui serait le/la plus chaud·e à essayer un plan à 3 — et avec qui ?" },
  { id: "h-q-05", category: "quiestleplus", level: 3, prompt: "Qui jouit le plus souvent en seulement quelques minutes ?" },
  { id: "h-q-06", category: "quiestleplus", level: 3, prompt: "Qui prend le plus d'initiative pour caresser l'autre discrètement en public ?" },
  { id: "h-q-07", category: "quiestleplus", level: 3, prompt: "Qui aime le plus être regardé·e en train de se donner du plaisir ?" },

  // ===== SI JE POUVAIS — direct =====
  { id: "h-s-01", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais t'attacher doucement et te lécher pendant 10 minutes sans te laisser bouger — tu accepterais ?" },
  { id: "h-s-02", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te faire jouir avec juste ma bouche et mes doigts, sans pénétration — tu tiendrais combien de temps ?" },
  { id: "h-s-03", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te filmer en train de te {you:touche} juste pour moi, tu me l'enverrais ?" },
  { id: "h-s-04", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais réaliser un de tes fantasmes ce soir, sans aucune limite sauf le consentement — tu choisis quoi ?" },
  { id: "h-s-05", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te mettre dans la position que je veux et te prendre comme je veux pendant 15 minutes — oui ou non ?" },
  { id: "h-s-06", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te masser et finir fatalement par {partner:oralv} — tu acceptes ?" },
  { id: "h-s-07", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais t'écrire le scénario d'une nuit parfaite entre nous, tu commencerais par quoi ?" },
  { id: "h-s-08", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais t'enregistrer un message vocal coquin — tu voudrais l'écouter avant de te coucher chaque soir ?" },
];
