import type { Sex } from "./couple";

export interface Player {
  name: string;
  sex: Sex;
}

/**
 * Render a card template substituting gender-aware tokens.
 *
 * Supported placeholders (wrap the token in curly braces):
 *   {you}                 → current player's name (bolded)
 *   {partner}             → other player's name (bolded)
 *   {P1} / {P2}           → explicit p1 / p2 name (bolded) — legacy
 *   {you:xxx} / {partner:xxx}  → gender-aware token based on that player's sex
 *
 * Available token kinds (apply to "you" or "partner"):
 *   sexe   → "pénis" / "clitoris" / "sexe"
 *   vulve  → "pénis" / "vulve" / "sexe"
 *   oral   → "fellation" / "cunnilingus" / "oral"
 *   le     → "le" / "la" / "le·a"
 *   lui    → "lui" (same for all)
 *   il     → "il" / "elle" / "iel"
 *   adj    → "" / "e" / "·e"          (adjective / past participle ending)
 *   cum    → "éjaculer" / "mouiller" / "jouir"
 *   touche → "branler" / "doigter" / "caresser"
 *   suc    → "sucer" / "lécher" / "goûter"
 *   mon    → "mon" / "ma" / "mon·a"
 *   son    → "son" / "sa" / "son·a"
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
  switch (kind) {
    case "sexe":
      return p.sex === "M" ? "pénis" : p.sex === "F" ? "clitoris" : "sexe";
    case "vulve":
      return p.sex === "M" ? "pénis" : p.sex === "F" ? "vulve" : "sexe";
    case "oral":
      return p.sex === "M"
        ? "fellation"
        : p.sex === "F"
        ? "cunnilingus"
        : "oral";
    case "oralv":
      return p.sex === "M"
        ? "une fellation"
        : p.sex === "F"
        ? "un cunnilingus"
        : "un oral";
    case "le":
      return p.sex === "M" ? "le" : p.sex === "F" ? "la" : "le·a";
    case "lui":
      return "lui";
    case "il":
      return p.sex === "M" ? "il" : p.sex === "F" ? "elle" : "iel";
    case "adj":
      return p.sex === "M" ? "" : p.sex === "F" ? "e" : "·e";
    case "cum":
      return p.sex === "M"
        ? "éjaculer"
        : p.sex === "F"
        ? "mouiller"
        : "jouir";
    case "cume":
      // past participle of cum-like verb
      return p.sex === "M"
        ? "éjaculé"
        : p.sex === "F"
        ? "mouillée"
        : "jouie";
    case "touche":
      return p.sex === "M"
        ? "branler"
        : p.sex === "F"
        ? "doigter"
        : "caresser";
    case "suc":
      return p.sex === "M" ? "sucer" : p.sex === "F" ? "lécher" : "goûter";
    case "mon":
      return p.sex === "M" ? "mon" : p.sex === "F" ? "ma" : "mon·a";
    case "son":
      return p.sex === "M" ? "son" : p.sex === "F" ? "sa" : "son·a";
    case "un":
      return p.sex === "M" ? "un" : p.sex === "F" ? "une" : "un·e";
    default:
      return "";
  }
}
