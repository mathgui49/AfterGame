import type { Sex } from "./couple";

export interface Player {
  name: string;
  sex: Sex;
}

/**
 * Render a card template substituting gender-aware tokens.
 *
 * Tokens:
 *   {you} / {partner}            → bolded name
 *   {P1} / {P2}                  → explicit legacy names (bolded)
 *   {you:xxx} / {partner:xxx}    → token resolved from that player's sex
 *   {P1:xxx} / {P2:xxx}          → same
 *
 * Available token kinds:
 *   sexe     → "pénis" / "clitoris"
 *   vulve    → "pénis" / "vulve"
 *   oral     → "fellation" / "cunnilingus"
 *   oralv    → "une fellation" / "un cunnilingus" (with article)
 *   le       → "le" / "la"
 *   il       → "il" / "elle"
 *   adj / e  → "" / "e"              (accord masculin/féminin)
 *   cum      → "éjaculer" / "mouiller"
 *   cume     → "éjaculé" / "mouillée" (past participle)
 *   touche   → "branler" / "doigter"
 *   suc      → "sucer" / "lécher"
 *   mon      → "mon" / "ma"
 *   son      → "son" / "sa"
 *   un       → "un" / "une"
 */
export function renderCard(
  template: string,
  you: Player,
  partner: Player,
  p1?: Player,
  p2?: Player
): string {
  let out = template
    .replaceAll("{you}", `<b>${you.name}</b>`)
    .replaceAll("{partner}", `<b>${partner.name}</b>`);

  if (p1) out = out.replaceAll("{P1}", `<b>${p1.name}</b>`);
  if (p2) out = out.replaceAll("{P2}", `<b>${p2.name}</b>`);

  out = out.replace(/\{(you|partner|P1|P2):(\w+)\}/g, (_m, who, kind) => {
    const p =
      who === "you"
        ? you
        : who === "partner"
        ? partner
        : who === "P1"
        ? p1 ?? you
        : p2 ?? partner;
    return token(p, kind);
  });

  return out;
}

function token(p: Player, kind: string): string {
  const isM = p.sex === "M";
  switch (kind) {
    case "sexe":
      return isM ? "pénis" : "clitoris";
    case "vulve":
      return isM ? "pénis" : "vulve";
    case "oral":
      return isM ? "fellation" : "cunnilingus";
    case "oralv":
      return isM ? "une fellation" : "un cunnilingus";
    case "le":
      return isM ? "le" : "la";
    case "lui":
      return "lui";
    case "il":
      return isM ? "il" : "elle";
    case "adj":
    case "e":
      return isM ? "" : "e";
    case "cum":
      return isM ? "éjaculer" : "mouiller";
    case "cume":
      return isM ? "éjaculé" : "mouillée";
    case "touche":
      return isM ? "branler" : "doigter";
    case "suc":
      return isM ? "sucer" : "lécher";
    case "mon":
      return isM ? "mon" : "ma";
    case "son":
      return isM ? "son" : "sa";
    case "un":
      return isM ? "un" : "une";
    default:
      return "";
  }
}
