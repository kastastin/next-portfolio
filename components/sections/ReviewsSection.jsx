"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { reviews } from "@/constants";

import "swiper/css";
import "swiper/css/pagination";

const ReviewsSection = () => (
  <section className="mb-12 xl:mb-32 hidden">
    <div className="container mx-auto">
      <h2 className="section-title-center">Reviews</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1400: { slidesPerView: 3 },
        }}
        className="!pb-[30px]"
      >
        {reviews.map((person, index) => (
          <SwiperSlide key={index} className="cursor-grab">
            <Card className="min-h-[350px] bg-tertiary p-8 dark:bg-secondary/40 sm:min-h-[250px]">
              <CardHeader className="mb-10 p-0">
                <div className="flex items-center gap-x-4">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    width={70}
                    height={70}
                    priority
                  />

                  <div className="flex flex-col">
                    <CardTitle>{person.name}</CardTitle>
                    <p>{person.job}</p>
                  </div>
                </div>
              </CardHeader>

              <CardDescription className="text-xl text-muted-foreground">
                {person.review}
              </CardDescription>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ReviewsSection;