import Image from "next/image";
import {
  User2,
  MailIcon,
  Calendar,
  Briefcase,
  HomeIcon,
  PhoneCall,
  GraduationCap,
} from "lucide-react";

import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const infoData = [
  {
    text: "Konstantin Klymovych",
    icon: <User2 size={20} />,
  },
  {
    text: "+38 (093) 717-11-50",
    icon: <PhoneCall size={20} />,
  },
  {
    text: "kostya242421@gmail.com",
    icon: <MailIcon size={20} />,
  },
  {
    text: "Born on 24th of April 2002",
    icon: <Calendar size={20} />,
  },
  {
    text: "Bachelor's degree | Computer Science",
    icon: <GraduationCap size={20} />,
  },
  {
    text: "Kyiv, Ukraine",
    icon: <HomeIcon size={20} />,
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "Kyiv Polytechnic Institute",
        qualification: "Bachelor of Science",
        years: "2019 - 2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Contrabas Promo",
        qualification: "Telegram Bot Developer",
        years: "2021 - 2023",
      },
      {
        company: "Aipro",
        qualification: "Frontend Developer",
        years: "2023 - 2024",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, JS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "React, Next.js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgSrc: "/about/vscode.svg",
      },
      {
        imgSrc: "/about/figma.svg",
      },
      {
        imgSrc: "/about/notion.svg",
      },
      {
        imgSrc: "/about/webflow.svg",
      },
    ],
  },
];

export default function About() {
  function getData(arr, title) {
    return arr.find((item) => item.title === title).data;
  }

  return (
    <section className="pb-12 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          About me
        </h2>

        {/* Content */}
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImg
              imgSrc="/about/developer.svg"
              imgStyles="translate-x-[5px]"
              containerStyles="relative size-[505px] bg-about_shape_light bg-no-repeat dark:bg-about_shape_dark"
            />
          </div>

          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none sm:mx-auto sm:max-w-[520px] sm:grid-cols-3 sm:border">
                {/* Personal info content */}
                <TabsTrigger
                  className="mx-auto w-[162px] xl:w-auto"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>

                {/* Qualifications info content */}
                <TabsTrigger
                  className="mx-auto w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>

                {/* Skills info content */}
                <TabsTrigger
                  className="mx-auto w-[162px] xl:w-auto"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              {/* Tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                <TabsContent value="personal">Personal info</TabsContent>

                <TabsContent value="qualifications">
                  Qualifications info
                </TabsContent>

                <TabsContent value="skills">Skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
