"use client";

import { Briefcase, GraduationCap } from "lucide-react";

import { aboutData as data } from "@/constants";

import { useLanguage } from "@/lang/LanguageContext";

const Qualifications = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="grid gap-y-8 md:grid-cols-2">
      {/* Experience */}
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4 text-[22px] text-primary">
          <Briefcase />
          <h4 className="font-medium capitalize">
            {translations[language].aboutExperience}
          </h4>
        </div>

        {/* Experience List */}
        <ul className="flex flex-col gap-y-8">
          {data.experience.map((item, index) => (
            <li key={index} className="group flex gap-x-8 ">
              <div className="relative ml-2 h-[84px] w-px bg-border">
                <div className="absolute left-[-5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
              </div>

              <div>
                <div className="mb-2 text-xl font-semibold leading-none">
                  {item.company}
                </div>

                <div className="mb-4 text-lg leading-none text-muted-foreground">
                  {item.role}
                </div>

                <div className="text-base font-medium">{item.years}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4 text-[22px] text-primary">
          <GraduationCap size={28} />
          <h4 className="font-medium capitalize">
            {translations[language].aboutEducation}
          </h4>
        </div>

        {/* Education List */}
        <ul className="flex flex-col gap-y-8">
          {data.education[language].map((item, index) => (
            <li key={index} className="group flex gap-x-8">
              <div className="relative ml-2 h-[84px] w-px bg-border">
                <div className="absolute left-[-5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]" />
              </div>

              <div>
                <div className="mb-2 text-xl font-semibold leading-none">
                  {item.university}
                </div>

                <div className="mb-4 text-lg leading-none text-muted-foreground">
                  {item.qualification}
                </div>

                <div className="text-base font-medium">{item.years}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Qualifications;
