import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

const ProjectWrapper = ({ project }) => (
  <Card className="group relative overflow-hidden">
    <CardHeader className="p-0">
      {/* Image */}
      <div className="flex-center relative h-[300px] w-full overflow-hidden bg-tertiary group-hover:cursor-grab dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat dark:xl:bg-work_project_bg_dark">
        <Image
          src={project.image}
          alt={project.name}
          width={247}
          height={250}
          priority
          className="absolute bottom-0 shadow-2xl"
        />

        {/* Links */}
        <div className="flex gap-x-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Link2Icon className="text-white" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github className="text-white" />
          </a>
        </div>
      </div>
    </CardHeader>

    <div className="px-8 py-6">
      <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
        {project.category}
      </Badge>

      <h4 className="h4 mb-1">{project.name}</h4>

      <p className="text-lg text-muted-foreground">{project.description}</p>
    </div>
  </Card>
);

export default ProjectWrapper;
