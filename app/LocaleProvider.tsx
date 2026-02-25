"use client";

import React, { createContext, useContext, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/locale";
import { getLocaleCookieName } from "@/lib/locale-config";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale, pathname: string) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const router = useRouter();

  const setLocale = useCallback(
    (newLocale: Locale, pathname: string) => {
      document.cookie = `${getLocaleCookieName()}=${newLocale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
      router.push(pathname);
    },
    [router]
  );

  return (
    <LocaleContext.Provider value={{ locale: initialLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
