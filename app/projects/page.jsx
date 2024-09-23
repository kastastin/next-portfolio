import { projectsCategories } from "@/constants";
import ProjectsList from "@/components/lists/ProjectsList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProjectsPage = () => (
  <main className="min-h-svh pt-12">
    <div className="container mx-auto">
      <h2 className="section-title-center">My Projects</h2>

      <Tabs defaultValue="all" className="mb-24 2xl:mb-48">
        <TabsList variant="projectsPage">
          {projectsCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs content */}
        {projectsCategories.map((category) => (
          <TabsContent key={category} value={category}>
            <ProjectsList type={category} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </main>
);

export default ProjectsPage;
