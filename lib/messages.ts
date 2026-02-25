import type { Locale } from "./locale";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const messages: Record<Locale, typeof en> = { en, es };

export function getMessages(locale: Locale): typeof en {
  return messages[locale] ?? en;
}

export type Messages = typeof en;
