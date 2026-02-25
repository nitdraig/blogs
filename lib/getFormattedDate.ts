import type { Locale } from "./locale";

const localeMap: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
};

export default function getFormattedDate(
  dateString: string,
  locale: Locale = "en"
): string {
  return new Intl.DateTimeFormat(localeMap[locale], {
    dateStyle: "long",
  }).format(new Date(dateString));
}
