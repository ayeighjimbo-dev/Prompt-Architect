import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "./translations";

// Define the supported language codes
export type Language = "en" | "ja" | "ar";

// Define context interface
interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => translations.en[key] ?? key,
});

/**
 * LanguageProvider wraps the app and provides the current language state
 * along with a translation function `t` to look up strings based on keys.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Whenever the language changes, update the lang and dir attributes on the
  // root <html> element. Arabic uses RTL direction.
  React.useEffect(() => {
    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }
  }, [language]);

  // Translation helper: fall back to English if translation is missing
  const t = (key: string): string => {
    const langTable = translations[language] as Record<string, string> | undefined;
    if (langTable && langTable[key]) {
      return langTable[key];
    }
    // Fallback to English
    return translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access the current language context.
 */
export function useLanguage() {
  return useContext(LanguageContext);
}
