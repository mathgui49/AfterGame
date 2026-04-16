import type { Relationship, Sex } from "./couple";

export interface Player {
  name: string;
  sex: Sex;
}

/**
 * Render a card template substituting gender-aware tokens.
 *
 * Tokens kept minimal and context-safe. The possessives "son/sa", "mon/ma",
 * etc. are intentionally NOT provided because they agree with the FOLLOWING
 * noun's grammatical gender, not with the person's sex. Anatomical nouns
 * (pénis, clitoris, sexe) are all masculine in French, so card authors
 * should just write "son {partner:sexe}" literally.
 *
 * Name tokens:
 *   {you} / {partner} / {P1} / {P2}   → bolded name
 *
 * Gender-aware tokens (apply to {you|partner|P1|P2}:kind):
 *   sexe     → "pénis" / "clitoris"
 *   oral     → "fellation" / "cunnilingus"
 *   oralv    → "une fellation" / "un cunnilingus"   (with article)
 *   le       → "le" / "la"
 *   il       → "il" / "elle"
 *   lui      → "lui" (same for all)
 *   e / adj  → "" / "e"                               (accord)
 *   cum      → "éjaculer" / "mouiller"               (infinitif)
 *   cume     → "éjaculé" / "mouillée"                (past participle)
 *   touche   → "branler" / "doigter"                 (infinitif)
 *   suc      → "sucer" / "lécher"                    (infinitif)
 */
export function renderCard(
  template: string,
  you: Player,
  partner: Player,
  p1?: Player,
  p2?: Player,
  relationship?: Relationship
): string {
  let out = template
    .replaceAll("{you}", `<b>${you.name}</b>`)
    .replaceAll("{partner}", `<b>${partner.name}</b>`);

  if (p1) out = out.replaceAll("{P1}", `<b>${p1.name}</b>`);
  if (p2) out = out.replaceAll("{P2}", `<b>${p2.name}</b>`);

  if (relationship) {
    out = out.replace(/\{rel:(\w+)\}/g, (_m, kind) =>
      relToken(relationship, kind)
    );
  }

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

function relToken(rel: Relationship, kind: string): string {
  switch (kind) {
    case "nous":
      // "dans {rel:nous}" → "dans notre couple" / "dans notre relation" / "entre nous" / "ce soir entre nous"
      return (
        {
          couple: "dans notre couple",
          debut: "dans notre relation",
          "plan-cul": "dans ce qu'on vit",
          "premier-soir": "ce soir entre nous",
        } as const
      )[rel];
    case "entite":
      // Le nom : "notre couple" / "notre relation" / "nos moments" / "cette rencontre"
      return (
        {
          couple: "notre couple",
          debut: "notre relation",
          "plan-cul": "nos moments",
          "premier-soir": "cette rencontre",
        } as const
      )[rel];
    case "soir":
      // "ce soir" (premier soir) OU "la prochaine fois"
      return rel === "premier-soir" ? "ce soir" : "la prochaine fois";
    case "semaine":
      // "dans la semaine" (si couple/debut) sinon "d'ici à notre prochain rdv"
      return rel === "couple" || rel === "debut"
        ? "dans la semaine"
        : "d'ici à notre prochain rdv";
    default:
      return "";
  }
}

function token(p: Player, kind: string): string {
  const isM = p.sex === "M";
  switch (kind) {
    case "sexe":
      return isM ? "pénis" : "clitoris";
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
    // Possessive for the word "partenaire" specifically (the noun takes the
    // partner's gender). Use ONLY with the word "partenaire" — NOT before
    // "pénis"/"clitoris" (always masculine, always "son").
    case "tonp":
      return isM ? "ton" : "ta";
    case "monp":
      return isM ? "mon" : "ma";
    default:
      return "";
  }
}
