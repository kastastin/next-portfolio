import { Gem, Blocks, GanttChartSquare } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    title: "Web Design",
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    description:
      "From responsive design to color usage and typography, every aspect of the workflow is discussed in detail and optimized for the best results.",
  },
  {
    title: "Landing Page",
    icon: <Blocks size={72} strokeWidth={0.8} />,
    description:
      "Every webpage is meticulously crafted with compelling headlines and imagery, finely tuned to resonate with the target audience and maximize conversion rates.",
  },
  {
    title: "Web Application",
    icon: <Gem size={72} strokeWidth={0.8} />,
    description:
      "Main focus is on implementing industry-standard logic, essential functionalities, secure authentication systems, and performance optimization techniques.",
  },
];

export default function Services() {
  return (
    <section className="mb-12 xl:mb-16">
      <div className="container mx-auto">
        <h2 className="section-title-center">My Services</h2>

        {/* Grid items */}
        <div className="mt-16 grid justify-center gap-y-16 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-24 2xl:mt-24">
          {servicesData.map((service) => (
            <Card
              key={service.title}
              className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16"
            >
              <CardHeader className="absolute -top-[60px] text-primary">
                <div className="flex h-[80px] w-[140px] items-center justify-center bg-white dark:bg-background">
                  {service.icon}
                </div>
              </CardHeader>

              <CardContent className="text-center">
                <CardTitle className="mb-4">{service.title}</CardTitle>
                <CardDescription className="text-lg">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
