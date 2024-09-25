"use client";

import { aboutData as data } from "@/constants";

import { useLanguage } from "@/lang/LanguageContext";

const PersonalInfo = () => {
  const { language, translations } = useLanguage();

  return (
    <>
      <p className="subtitle mx-auto max-w-xl xl:mx-0">
        {translations[language].aboutPersonalInfo}
      </p>

      {/* Icons */}
      <ul className="mb-12 grid gap-4 xl:grid-cols-2">
        {data.personalInfo[language].map((item, index) => (
          <li key={index} className="mx-auto flex items-center gap-x-4 xl:mx-0">
            <div className="text-primary">{item.icon}</div>
            <div>{item.text}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PersonalInfo;
