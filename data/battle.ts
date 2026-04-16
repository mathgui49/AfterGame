// Bataille Coquine — inspired by Kama Sutra-style naughty battle card games.
// Each round, both sides draw a card with a numeric value. Highest imposes the dare.
// Suits are thematic. Higher rank = hotter dare.

export type Suit = "cœur" | "flamme" | "soie" | "nuit";
export interface BattleCard {
  rank: number; // 2..14 where 11=Valet, 12=Dame, 13=Roi, 14=As
  suit: Suit;
  label: string; // e.g. "7", "V", "D", "R", "A"
  dare: string; // dare the loser must perform if this card wins
  level: 1 | 2 | 3;
}

export const SUIT_META: Record<Suit, { emoji: string; color: string }> = {
  cœur: { emoji: "♥︎", color: "from-ember-500 to-velvet-500" },
  flamme: { emoji: "🔥", color: "from-ember-600 to-ember-800" },
  soie: { emoji: "✦", color: "from-velvet-500 to-midnight-600" },
  nuit: { emoji: "☾", color: "from-midnight-600 to-velvet-700" },
};

const DARES_BY_RANK: Record<number, { text: string; level: 1 | 2 | 3 }> = {
  2: { text: "Un câlin de 15 secondes au / à la gagnant·e.", level: 1 },
  3: { text: "Un bisou esquimau (frotter les nez) pendant 10 secondes.", level: 1 },
  4: { text: "Un compliment coquin à voix haute au / à la gagnant·e.", level: 1 },
  5: { text: "Un bisou sur la joue, puis sur l'autre, puis sur le front.", level: 1 },
  6: { text: "Massage des épaules du / de la gagnant·e pendant 60 secondes.", level: 1 },
  7: { text: "Embrasse la nuque du / de la gagnant·e pendant 15 secondes.", level: 2 },
  8: { text: "Mordille doucement le lobe d'oreille du / de la gagnant·e.", level: 2 },
  9: { text: "Danse un slow collé·e avec le / la gagnant·e pendant 30 secondes.", level: 2 },
  10: { text: "Enlève un vêtement (au choix du / de la gagnant·e).", level: 2 },
  11: { text: "Embrasse le / la gagnant·e langoureusement pendant 20 secondes.", level: 2 }, // Valet
  12: { text: "Le / la gagnant·e guide tes mains sur son corps pendant 1 minute.", level: 3 }, // Dame
  13: { text: "Strip-tease de 30 secondes devant le / la gagnant·e.", level: 3 }, // Roi
  14: { text: "Le / la gagnant·e choisit une carte de 'bon' à te faire exécuter ce soir.", level: 3 }, // As
};

export function labelFromRank(rank: number): string {
  if (rank === 11) return "V";
  if (rank === 12) return "D";
  if (rank === 13) return "R";
  if (rank === 14) return "A";
  return String(rank);
}

export function buildBattleDeck(): BattleCard[] {
  const suits: Suit[] = ["cœur", "flamme", "soie", "nuit"];
  const deck: BattleCard[] = [];
  for (const suit of suits) {
    for (let rank = 2; rank <= 14; rank++) {
      const dare = DARES_BY_RANK[rank];
      deck.push({
        rank,
        suit,
        label: labelFromRank(rank),
        dare: dare.text,
        level: dare.level,
      });
    }
  }
  return deck;
}
