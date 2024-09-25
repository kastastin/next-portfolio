"use client";

import { createContext, useContext, useState } from "react";

import { translations } from "@/lang/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (language) => setLanguage(language);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
