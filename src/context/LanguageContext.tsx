// src/context/LanguageContext.tsx
"use client";

import { createContext, useState, useContext, useEffect } from "react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

// You can define your translations here or import them from a separate file.
const translations = {
  en: {
    "read-more": "Read More",
    "load-more": "Load More",
    "search-matches": "Search Matches",
  },
  fa: {
    "read-more": "بیشتر بخوانید",
    "load-more": "بارگذاری بیشتر",
    "search-matches": "جستجوی موارد",
  },
};

// Create a type for the valid translation keys
type TranslationKeys = keyof (typeof translations)["en"];

interface LanguageContextType {
  language: "en" | "fa";
  toggleLanguage: () => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: "en" | "fa";
}) {
  const [language, setLanguage] = useState(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en";
    setLanguage(newLang);
    const newPath = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPath);
  };

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  const value = { language, toggleLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
