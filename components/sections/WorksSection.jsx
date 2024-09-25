"use client";

import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { projects } from "@/constants";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import ProjectWrapper from "@/components/ProjectWrapper";

import "swiper/css";
import "swiper/css/pagination";

const WorksSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative mb-12 xl:mb-36">
      <div className="container mx-auto xl:flex xl:justify-between xl:gap-x-5">
        {/* Text */}
        <div className="flex-center mx-auto mb-12 max-w-[400px] flex-col text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title-center xl:mx-0 xl:text-left">
            {t("projectsTitle")}
          </h2>

          <p className="subtitle mb-8">{t("projectsText")}</p>

          <Link href="/projects">
            <Button>{t("projectsBtnAll")}</Button>
          </Link>
        </div>

        {/* Slides */}
        <div className="right-0 top-0 xl:relative xl:max-w-[850px] 2xl:max-w-[1000px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            className="!pb-[30px]"
          >
            {projects.slice(0, 6).map((project) => (
              <SwiperSlide key={project.name}>
                <ProjectWrapper project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
