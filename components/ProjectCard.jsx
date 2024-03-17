import Link from "next/link";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";

import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ProjectCard({ project }) {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="xl:bg-work_project_bg_light dark:xl:bg-work_project_bg_dark relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-tertiary group-hover:cursor-grab dark:bg-secondary/40 xl:bg-[110%] xl:bg-no-repeat">
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
            <Link href={project.link} className="project-link">
              <Link2Icon className=" text-white" />
            </Link>

            <Link href={project.github} className="project-link">
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>

        <h4 className="h4 mb-1">{project.name}</h4>

        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
}
