// Hard cards — explicit, crude, sexually direct content reserved for the
// Hard mode. Merged into the Hot Cards deck only when the couple has Hard
// mode enabled (behind age gate + consenting duo + Brûlant level).
//
// Tokens:
//   {you}            → the current turn's player name (bolded)
//   {partner}        → the other player's name (bolded)
//   {you:xxx} / {partner:xxx} → gender-aware anatomy/pronouns/verbs
//     (see lib/templater.ts for the full list).

import type { HotCard } from "./hotCards";

export const HARD_CARDS: HotCard[] = [
  // ===== ACTION — crude anatomical (templated) =====
  { id: "h-a-01", category: "action", level: 3, prompt: "{you}, lèche lentement {partner:son} {partner:sexe} pendant 30 secondes, en variant la pression." },
  { id: "h-a-02", category: "action", level: 3, prompt: "{you}, {partner:touche} {partner} doucement pendant 1 minute, en observant {partner:ses} réactions." },
  { id: "h-a-03", category: "action", level: 3, prompt: "{you}, fais {partner:oralv} à {partner} jusqu'à ce qu'iel soit à deux doigts de jouir — puis arrête." },
  { id: "h-a-04", category: "action", level: 3, prompt: "{you}, aspire doucement {partner:son} {partner:sexe}, alterne avec des coups de langue plus larges." },
  { id: "h-a-05", category: "action", level: 3, prompt: "{you}, embrasse {partner:le} {partner:sexe} de {partner} avec toute ta bouche, comme si tu embrassais {partner:sa} bouche." },
  { id: "h-a-06", category: "action", level: 3, prompt: "{you}, {partner:suc} {partner:son} {partner:sexe} lentement en gardant le regard levé vers {partner}." },
  { id: "h-a-07", category: "action", level: 3, prompt: "{you}, {partner:touche} {partner} avec ta main pendant que tu l'embrasses langoureusement." },
  { id: "h-a-08", category: "action", level: 3, prompt: "{you}, demande à {partner} de te dire exactement où le toucher, avec des mots crus. Exécute chaque ordre." },
  { id: "h-a-09", category: "action", level: 3, prompt: "{you}, glisse un doigt, puis deux, puis trois, en te calant sur le rythme de {partner}." },
  { id: "h-a-10", category: "action", level: 3, prompt: "{you}, lèche les tétons de {partner} pendant que ta main s'occupe du reste de {partner:son} corps." },
  { id: "h-a-11", category: "action", level: 3, prompt: "{you}, fais un suçon à l'intérieur de la cuisse de {partner}, tout près de {partner:son} {partner:sexe}." },
  { id: "h-a-12", category: "action", level: 3, prompt: "{you}, masturbe-toi devant {partner} — iel doit garder les mains dans le dos et juste te regarder jouir." },
  { id: "h-a-13", category: "action", level: 3, prompt: "{you}, mets tes doigts dans la bouche de {partner} après qu'ils aient touché {partner:son} {partner:sexe}." },
  { id: "h-a-14", category: "action", level: 3, prompt: "{you}, prends {partner} par derrière, lentement, en murmurant tout ce que tu es en train de faire." },
  { id: "h-a-15", category: "action", level: 3, prompt: "{you}, négociez à voix haute : où {you} veut finir — bouche, visage, ventre, poitrine ? Dites-le clairement." },
  { id: "h-a-16", category: "action", level: 3, prompt: "Faites un 69 pendant 2 minutes : {you} donne du plaisir à {partner}, {partner} à {you}, en même temps." },
  { id: "h-a-17", category: "action", level: 3, prompt: "{you}, caresse {partner:le} {partner:sexe} de {partner} en petits cercles fermes, alterne avec la langue, jusqu'à l'orgasme si possible." },
  { id: "h-a-18", category: "action", level: 3, prompt: "{you}, stimule l'anus de {partner} du bout du doigt (avec lubrifiant) pendant que ta bouche s'occupe de {partner:son} {partner:sexe}." },
  { id: "h-a-19", category: "action", level: 3, prompt: "{you}, fais {partner:oralv} le plus profond que tu peux pendant 10 secondes, puis remonte très lentement." },
  { id: "h-a-20", category: "action", level: 3, prompt: "{you}, fais sentir ton souffle chaud sur {partner:le} {partner:sexe} de {partner} avant de {partner:le} toucher." },
  { id: "h-a-21", category: "action", level: 3, prompt: "{you}, explore tout {partner:son} sexe du bout de la langue : contours, plis, zones les plus sensibles — prends ton temps." },
  { id: "h-a-22", category: "action", level: 3, prompt: "{you}, écarte doucement les lèvres ou la peau et regarde {partner} dans les yeux juste avant d'y plonger la langue." },
  { id: "h-a-23", category: "action", level: 3, prompt: "{you}, demande à {partner} de se {partner:touche} devant toi pendant que tu lui décris ce que tu vas lui faire après." },
  { id: "h-a-24", category: "action", level: 3, prompt: "{you}, retiens {partner} au bord de l'orgasme 3 fois d'affilée avant de le/la laisser jouir pour de bon." },
  { id: "h-a-25", category: "action", level: 3, prompt: "{you}, lèche {partner} pendant qu'iel se {partner:touche} avec ta main autour de la sienne — guide le rythme." },

  // ===== VÉRITÉ — crude direct (templated) =====
  { id: "h-v-01", category: "verite", level: 3, prompt: "{you}, dis avec tes mots comment tu aimes qu'on te fasse {you:oralv}." },
  { id: "h-v-02", category: "verite", level: 3, prompt: "{you}, la dernière fois que tu t'es {you:touche} (à toi-même) en pensant à {partner}, tu imaginais quoi exactement ?" },
  { id: "h-v-03", category: "verite", level: 3, prompt: "{you}, tu préfères que {partner} jouisse dans ta bouche, sur toi, ou en toi ? Sans détour." },
  { id: "h-v-04", category: "verite", level: 3, prompt: "{you}, quel mot cru te fait {you:cum} en 3 secondes ?" },
  { id: "h-v-05", category: "verite", level: 3, prompt: "{you}, décris à {partner} ce que tu aimerais qu'iel te fasse là tout de suite, sans filtre." },
  { id: "h-v-06", category: "verite", level: 3, prompt: "{you}, quelle partie du corps de {partner} tu voudrais lécher toute la nuit ?" },
  { id: "h-v-07", category: "verite", level: 3, prompt: "{you}, tu préfères avaler, cracher, ou recevoir sur le corps ? Pourquoi ?" },
  { id: "h-v-08", category: "verite", level: 3, prompt: "{you}, tu aimes être {you:touche} lentement ou vite ? Montre le rythme sur la main de {partner}." },
  { id: "h-v-09", category: "verite", level: 3, prompt: "{you}, tu préfères que {partner} soit doux·ce ou cru·e au lit ? Quels mots tu veux entendre ?" },
  { id: "h-v-10", category: "verite", level: 3, prompt: "{you}, ton fantasme le plus tabou avec {partner} — les mots exacts, cette fois." },
  { id: "h-v-11", category: "verite", level: 3, prompt: "{you}, tu as déjà joui juste en regardant {partner}, sans qu'iel ne te touche ? Raconte." },
  { id: "h-v-12", category: "verite", level: 3, prompt: "{you}, quelle pratique tu n'as jamais osé demander à {partner} mais dont tu rêves ?" },
  { id: "h-v-13", category: "verite", level: 3, prompt: "{you}, tu aimes qu'on te regarde quand tu te {you:touche} ? Tu aimerais que {partner} te regarde ?" },
  { id: "h-v-14", category: "verite", level: 3, prompt: "{you}, quel son tu fais quand tu jouis fort ? Fais-le maintenant pour {partner}." },
  { id: "h-v-15", category: "verite", level: 3, prompt: "{you}, tu as déjà pensé à de l'anal avec {partner} ? Comment tu l'imagines ?" },
  { id: "h-v-16", category: "verite", level: 3, prompt: "{you}, là maintenant : {partner:oralv} d'abord, ou pénétration tout de suite ? Choisis." },

  // ===== POSITIONS — explicit (players-neutral) =====
  { id: "h-p-01", category: "positions", level: 3, prompt: "Doggy, tête au matelas, hanches en l'air — pénétration profonde, une main dans les cheveux de {partner}, l'autre sur {partner:son} {partner:sexe}." },
  { id: "h-p-02", category: "positions", level: 3, prompt: "69 inversé : celui/celle en dessous contrôle le rythme, l'autre se laisse faire." },
  { id: "h-p-03", category: "positions", level: 3, prompt: "Cuillère en Y : un genou remonté sur le côté — accès total au {partner:sexe} en même temps que la pénétration." },
  { id: "h-p-04", category: "positions", level: 3, prompt: "Andromaque : {you} à cheval sur {partner} — {you} mène, l'autre stimule {partner:son} {partner:sexe} ou tétons." },
  { id: "h-p-05", category: "positions", level: 3, prompt: "Bord du lit : {partner} allongé·e les cuisses largement ouvertes, {you} debout — alterne langue et pénétration." },
  { id: "h-p-06", category: "positions", level: 3, prompt: "Face à face assis·e·s, enlacé·e·s : mouvements lents, {partner:son} {partner:sexe} stimulé en continu par le frottement." },
  { id: "h-p-07", category: "positions", level: 3, prompt: "Levrette debout contre un mur : {partner} plaqué·e dos à toi, {you} qui tient les hanches." },

  // ===== QUI EST LE PLUS — direct =====
  { id: "h-q-01", category: "quiestleplus", level: 3, prompt: "Qui jouit le plus vite rien qu'avec des mots crus à l'oreille ?" },
  { id: "h-q-02", category: "quiestleplus", level: 3, prompt: "Qui gémit le plus fort quand il/elle jouit ?" },
  { id: "h-q-03", category: "quiestleplus", level: 3, prompt: "Entre {P1} et {P2}, qui est le/la plus doué·e pour les préliminaires oraux ?" },
  { id: "h-q-04", category: "quiestleplus", level: 3, prompt: "Qui serait le/la plus chaud·e à essayer un plan à 3 — et avec qui ?" },
  { id: "h-q-05", category: "quiestleplus", level: 3, prompt: "Qui jouit le plus souvent en seulement quelques minutes ?" },
  { id: "h-q-06", category: "quiestleplus", level: 3, prompt: "Qui prend le plus d'initiative pour {P1:touche}/{P2:touche} l'autre en public, sous une couette ?" },

  // ===== SI JE POUVAIS — direct =====
  { id: "h-s-01", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais t'attacher doucement et te lécher pendant 10 minutes sans te laisser bouger — tu accepterais ?" },
  { id: "h-s-02", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te faire jouir avec juste ma bouche et mes doigts, sans pénétration — tu tiendrais combien de temps ?" },
  { id: "h-s-03", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te filmer en train de te {you:touche} juste pour moi, tu me l'enverrais ?" },
  { id: "h-s-04", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais réaliser un de tes fantasmes ce soir, sans aucune limite sauf le consentement — tu choisis quoi ?" },
  { id: "h-s-05", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te mettre dans la position que je veux et te prendre comme je veux pendant 15 minutes — oui ou non ?" },
  { id: "h-s-06", category: "sijepouvais", level: 3, prompt: "{you}, et si je pouvais te masser et finir fatalement par {partner:oralv} — tu acceptes ?" },
];
