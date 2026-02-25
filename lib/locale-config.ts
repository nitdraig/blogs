export const LOCALE_COOKIE = "locale";
export type Locale = "en" | "es";

export function getLocaleCookieName(): string {
  return LOCALE_COOKIE;
}
