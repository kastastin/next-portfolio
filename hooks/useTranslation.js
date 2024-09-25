"use client";

import { useLanguage } from "@/lang/LanguageContext";

export const useTranslation = () => {
  const { language, translations } = useLanguage();

  const t = (key) => translations[language][key] || key;

  return { t, language };
};
