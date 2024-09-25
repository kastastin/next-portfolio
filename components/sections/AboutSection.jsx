"use client";

import DevImg from "@/components/DevImg";
import { aboutData as data } from "@/constants";
import Skills from "@/components/tabsContent/Skills";
import { useLanguage } from "@/lang/LanguageContext";
import PersonalInfo from "@/components/tabsContent/PersonalInfo";
import Qualifications from "@/components/tabsContent/Qualifications";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AboutSection = () => {
  const { language, translations } = useLanguage();

  return (
    <section
      id="about"
      className="pb-8 pt-16 max-xl:mb-20 xl:h-[860px] xl:py-24"
    >
      <div className="container mx-auto">
        <h2 className="section-title-center">
          {translations[language].aboutTitle}
        </h2>

        {/* Content */}
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImg
              imgSrc="/about/developer.svg"
              imgStyles="translate-x-[5px]"
              containerStyles="relative size-[505px] bg-about_shape_light bg-no-repeat dark:bg-about_shape_dark"
            />
          </div>

          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="Personal Info">
              <TabsList variant="about">
                {data.tabs.map((tab) => (
                  <TabsTrigger key={tab.en.name} value={tab.en.name}>
                    {tab[language].name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {data.tabs.map((tab) => (
                <TabsContent key={tab.en.name} value={tab.en.name}>
                  <h3 className="h3 mb-8 max-xl:text-center">
                    {tab[language].title}
                  </h3>

                  {tab.en.name === "Personal Info" && <PersonalInfo />}
                  {tab.en.name === "Skills" && <Skills />}
                  {tab.en.name === "Qualifications" && <Qualifications />}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
