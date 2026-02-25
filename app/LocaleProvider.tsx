"use client";

import React, { createContext, useContext, useCallback } from "react";
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
  const setLocale = useCallback(
    (newLocale: Locale, pathname: string) => {
      document.cookie = `${getLocaleCookieName()}=${newLocale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
      window.location.href = pathname || "/";
    },
    []
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
