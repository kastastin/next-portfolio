"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

import "swiper/css";
import "swiper/css/pagination";

export default function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title-center xl:mx-0 xl:text-left">
            Latest Projects
          </h2>

          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="right-0 top-0 xl:absolute xl:max-w-[850px] 2xl:max-w-[1000px]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* First 4 projects */}
            {projects.slice(0, 4).map((project) => (
              <SwiperSlide key={project.name}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}

            {/* Second 4 projects */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
