/**
 * Labels (worldwide) and zone names (CLDR) use different locale tags for the same language,
 * e.g. labels have "zh-CN", "pt-BR", "nb" while zone names have "zh", "pt", "no".
 * The data package does no fallback, so this picks the closest available tag.
 */

// Tags that name the same language but share no language subtag
const ALIASES: Record<string, string> = { nb: "no", no: "nb" };

/** Exact match, then the same language, then English */
export function pickLocale(requested: string, available: readonly string[]): string | undefined {
  if (available.includes(requested)) return requested;
  const language = new Intl.Locale(requested).language;
  const candidates = [language, ALIASES[language]];
  return (
    available.find((tag) => candidates.includes(tag)) ??
    available.find((tag) => candidates.includes(new Intl.Locale(tag).language)) ??
    (available.includes("en") ? "en" : undefined)
  );
}
