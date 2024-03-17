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
    text: "+380937171150",
    icon: <PhoneCall size={20} />,
  },
  {
    text: "kostya242421@gmail.com",
    icon: <MailIcon size={20} />,
  },
  {
    text: "Born 12 Apr, 2002",
    icon: <Calendar size={20} />,
  },
  {
    text: "Computer Science Bachelor",
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
        role: "Telegram Bot Developer",
        years: "2021 - 2023",
      },
      {
        company: "Aipro",
        role: "Frontend Developer",
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
        alt: "VS Code logo",
      },
      {
        imgSrc: "/about/figma.svg",
        alt: "Figma logo",
      },
      {
        imgSrc: "/about/notion.svg",
        alt: "Notion logo",
      },
      {
        imgSrc: "/about/webflow.svg",
        alt: "Webflow logo",
      },
    ],
  },
];

export default function About() {
  function getData(arr, title) {
    return arr.find((item) => item.title === title);
  }

  return (
    <section className="pb-12 pt-16 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title-center">About me</h2>

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
              <TabsList className="mx-auto grid w-full place-content-center dark:border-none sm:mx-auto sm:max-w-[520px] sm:grid-cols-3 sm:border">
                <TabsTrigger
                  className="sm-auto w-[162px] xl:w-auto"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>

                <TabsTrigger
                  className="sm-auto w-[162px] xl:w-auto"
                  value="skills"
                >
                  Skills
                </TabsTrigger>

                <TabsTrigger
                  className="sm-auto w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
              </TabsList>

              {/* Tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* Personal info content */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service Quality</h3>

                    <p className="subtitle mx-auto max-w-xl xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences. Watching how the Internet is constantly
                      changing and evolving, I always set myself the task of
                      learning and improving my work in practice.
                    </p>

                    {/* Icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="mx-auto flex items-center gap-x-4 xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Ukrainian, Russian, English</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualifications info content */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>

                    {/* Experience/Education wrapper */}
                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="group flex gap-x-8 "
                                >
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>

                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>

                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="group flex gap-x-8 "
                                >
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] size-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>

                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills info content */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Frequently</h3>

                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>

                      {/* Skills list */}
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="mx-auto w-2/4 text-center xl:mx-0 xl:text-left"
                            >
                              <div className="font-medium">{item.name}</div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Tools
                      </h4>
                      <div className="mb-4 border-b border-border"></div>

                      {/* Skills list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillsData, "tools").data.map((item) => (
                          <div key={item.alt}>
                            <Image
                              src={item.imgSrc}
                              alt={item.alt}
                              width={48}
                              height={48}
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
