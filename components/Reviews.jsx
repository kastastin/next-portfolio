"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "swiper/css";
import "swiper/css/pagination";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "William Parker",
    job: "Interior Designer",
    review:
      "Your attention to detail, responsiveness, and unwavering dedication made the entire process a breeze",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Jane Cooper",
    job: "Therapist",
    review:
      'Kastastin was an absolute rock star and a pleasure to work with. He adopts a "can do" attitude and is extremely efficient and organized',
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Benjamin Taylor",
    job: "Chef",
    review:
      "You have an amazing ability to bring ideas to life. Big thanks for the fantastic work.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Game Developer",
    review:
      "Working alongside Kostya was an adventure filled with creativity and innovation. Thanks a lot!!",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "John Doe",
    job: "Engineer",
    review:
      "A true web developer, he has handled everything we have thrown at him including new features, bugs, design changes etc...",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Alexander Scott",
    job: "Teacher",
    review:
      "Kastastin has helped me build a logo for my business. He's fast and reliable. Highly recommend his work!",
  },
];

export default function Reviews() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title-center">Reviews</h2>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => (
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
}
