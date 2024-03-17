"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const uniqueCategories = [
  "all projects",
  ...new Set(projects.map((project) => project.category)),
];

export default function ProjectsPage() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projects.filter((project) =>
    category === "all projects" ? project : project.category === category,
  );

  return (
    <main className="min-h-[100svh] pt-12">
      <div className="container mx-auto">
        <h2 className="section-title-center">My Projects</h2>

        <Tabs defaultValue={category} className="mb-24 2xl:mb-48">
          <TabsList className="mx-auto mb-12 grid size-full place-content-center dark:border-none md:grid-cols-4 md:border lg:max-w-[640px]">
            {categories.map((item, index) => (
              <TabsTrigger
                key={index}
                value={item}
                onClick={() => setCategory(item)}
                className="w-[162px] uppercase md:w-auto"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs content */}
          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </main>
  );
}
