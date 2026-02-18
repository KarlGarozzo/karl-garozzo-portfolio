import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  LANGUAGE_STORAGE_KEY,
  availableLanguages,
  languageMeta,
  resolveLanguage,
  translate,
  type Language,
  type TranslationKey,
} from "@/i18n/translations";

interface LanguageProviderProps {
  children: React.ReactNode;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
  ts: (key: TranslationKey, variables?: Record<string, string | number>) => string;
  availableLanguages: Language[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored) return resolveLanguage(stored);
  return resolveLanguage(navigator.language);
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key, variables) => translate(language, key, variables),
      ts: (key, variables) => translate(language, key, variables),
      availableLanguages: [...availableLanguages],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export type { Language, TranslationKey };
export { languageMeta };
