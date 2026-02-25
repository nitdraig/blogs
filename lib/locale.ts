import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "./locale-config";

const DEFAULT_LOCALE: Locale = "en";
export type { Locale } from "./locale-config";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value === "es" || value === "en") return value;
  return DEFAULT_LOCALE;
}
