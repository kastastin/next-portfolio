"use client";

import { projectsCategories } from "@/constants";
import { useLanguage } from "@/lang/LanguageContext";
import ProjectsList from "@/components/lists/ProjectsList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProjectsPage = () => {
  const { language, translations } = useLanguage();

  return (
    <main className="min-h-svh pt-12">
      <div className="container mx-auto">
        <h2 className="section-title-center">
          {translations[language].myProjects}
        </h2>

        <Tabs defaultValue="all" className="mb-24 2xl:mb-48">
          <TabsList variant="projectsPage">
            {projectsCategories.map((category) => (
              <TabsTrigger key={category.en} value={category.en}>
                {category[language]}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs content */}
          {projectsCategories.map((category) => (
            <TabsContent key={category.en} value={category.en}>
              <ProjectsList type={category.en} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
};

export default ProjectsPage;
