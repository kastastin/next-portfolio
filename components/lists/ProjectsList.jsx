import { projects } from "@/constants";
import ProjectWrapper from "@/components/ProjectWrapper";

const ProjectsList = ({ type }) => {
  const data =
    type === "all"
      ? projects
      : projects.filter((project) => project.category === type);

  return (
    <div className="grid w-full grid-cols-1 gap-4 text-lg md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:mt-8">
      {data.map((project) => (
        <ProjectWrapper key={project.link} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
