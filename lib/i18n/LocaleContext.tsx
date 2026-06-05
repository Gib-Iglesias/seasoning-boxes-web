"use client";

import { createContext, useContext } from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LocaleContextType {
  locale: Locale;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  t: translations.en,
});

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = (translations as Record<string, Translations>)[locale] ?? translations.en;
  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  return useContext(LocaleContext);
}
