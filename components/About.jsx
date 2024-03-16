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
  return <div>about section</div>;
}
