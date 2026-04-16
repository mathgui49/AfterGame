// "Do you know me ?" — couple quiz
// Self-answering prompts: player A reads, player B answers, then reveals & compares

export interface QuizItem {
  id: string;
  prompt: string;
  category: "romance" | "intime" | "quotidien" | "fantasme";
}

export const QUIZ_ITEMS: QuizItem[] = [
  { id: "qz-01", category: "romance", prompt: "Quelle est la chanson qui me fait fondre ?" },
  { id: "qz-02", category: "romance", prompt: "Mon plus beau souvenir avec toi ?" },
  { id: "qz-03", category: "romance", prompt: "Ma date de rendez-vous idéale ?" },
  { id: "qz-04", category: "romance", prompt: "Le plus beau compliment que je puisse recevoir ?" },
  { id: "qz-05", category: "romance", prompt: "Mon film romantique préféré ?" },
  { id: "qz-06", category: "quotidien", prompt: "Mon plat préféré en ce moment ?" },
  { id: "qz-07", category: "quotidien", prompt: "Mon moment préféré de la journée ?" },
  { id: "qz-08", category: "quotidien", prompt: "Ma boisson chaude de prédilection ?" },
  { id: "qz-09", category: "quotidien", prompt: "Le défaut qui m'agace le plus chez moi-même ?" },
  { id: "qz-10", category: "quotidien", prompt: "L'endroit où je préfère me détendre ?" },
  { id: "qz-11", category: "quotidien", prompt: "La série que je pourrais regarder en boucle ?" },
  { id: "qz-12", category: "quotidien", prompt: "Ce qui me stresse le plus dans ma semaine ?" },
  { id: "qz-13", category: "intime", prompt: "Ma zone érogène numéro 1 ?" },
  { id: "qz-14", category: "intime", prompt: "Ma position préférée au lit ?" },
  { id: "qz-15", category: "intime", prompt: "Le moment de la journée où je suis le plus câlin·e ?" },
  { id: "qz-16", category: "intime", prompt: "La tenue dans laquelle je me trouve le / la plus sexy ?" },
  { id: "qz-17", category: "intime", prompt: "Ce qui me fait perdre la tête en 2 secondes ?" },
  { id: "qz-18", category: "intime", prompt: "Mon endroit rêvé pour faire l'amour ?" },
  { id: "qz-19", category: "intime", prompt: "Le geste qui m'apaise instantanément ?" },
  { id: "qz-20", category: "intime", prompt: "Ma partie préférée de ton corps ?" },
  { id: "qz-21", category: "fantasme", prompt: "Le jeu de rôle qui me fait rêver ?" },
  { id: "qz-22", category: "fantasme", prompt: "Mon fantasme de vacances coquines ?" },
  { id: "qz-23", category: "fantasme", prompt: "Ce que je voudrais essayer prochainement ?" },
  { id: "qz-24", category: "fantasme", prompt: "Le mot coquin qui me fait le plus d'effet ?" },
  { id: "qz-25", category: "fantasme", prompt: "Le lieu public le plus fou où je voudrais t'embrasser ?" },
];
