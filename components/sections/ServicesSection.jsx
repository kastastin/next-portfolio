"use client";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { services } from "@/constants";

import { useLanguage } from "@/lang/LanguageContext";

const ServicesSection = () => {
  const { language, translations } = useLanguage();

  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title-center">
          {translations[language].servicesTitle}
        </h2>

        {/* Grid cards */}
        <div className="mt-16 grid justify-center gap-y-16 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24 2xl:mt-24">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex-center relative min-h-[300px] w-full max-w-[424px] flex-col pb-10 pt-16"
            >
              <CardHeader className="absolute top-[-60px] text-primary">
                <div className="flex-center h-[80px] w-[140px] bg-white dark:bg-background">
                  {service.icon}
                </div>
              </CardHeader>

              <CardContent className="text-center">
                <CardTitle className="mb-4">{service.title}</CardTitle>

                <CardDescription className="text-lg">
                  {service.description[language]}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
