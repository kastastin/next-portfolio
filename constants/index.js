import {
  RiGithubFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";
import { Gem, Blocks, GanttChartSquare } from "lucide-react";

export const socialIcons = [
  {
    href: "https://github.com/kastastin",
    name: <RiGithubFill />,
  },
  {
    href: "https://www.linkedin.com/in/kastastin/",
    name: <RiLinkedinFill />,
  },
  {
    href: "https://www.instagram.com/kastast.in/",
    name: <RiInstagramFill />,
  },
  {
    href: "https://www.facebook.com/kostya.klymovych.9/",
    name: <RiFacebookFill />,
  },
  {
    href: "https://t.me/kastastin",
    name: <RiTelegramFill />,
  },
];

export const services = [
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

export const projectsCategories = ["all", "react", "landing page", "other"];

export const projects = [
  {
    name: "Nike",
    category: "react",
    image: "/work/Nike.png",
    link: "https://nike-concept-tailwind.vercel.app/",
    github: "https://github.com/kastastin/nike-concept",
    description: "Copy of Nike landing page using Vite and Tailwind.",
  },
  {
    name: "The Wild Oasis",
    category: "react",
    image: "/work/TheWildOasis.png",
    link: "https://wild-oasis-concept.netlify.app/login",
    github: "https://github.com/kastastin/the-wild-oasis",
    description: "Web application with admin panel and authorization.",
  },
  {
    name: "Fast React Pizza",
    category: "react",
    image: "/work/FastReactPizza.png",
    link: "https://fast-react-pizza-concept.vercel.app/",
    github: "https://github.com/kastastin/fast-react-pizza",
    description: "Web application for ordering pizza using redux, tailwind.",
  },
  {
    name: "Figministin",
    category: "react",
    image: "/work/Figministin.png",
    link: "https://figministin.vercel.app/",
    github: "https://github.com/kastastin/figministin",
    description: "Web application clone of Figma with real-time interaction.",
  },
  {
    name: "Omnifood",
    category: "landing page",
    image: "/work/Omnifood.png",
    link: "https://omnifood-concept-project.netlify.app/",
    github: "https://github.com/kastastin/jonas-html/tree/main/omnifood",
    description:
      "Modern website for a startup food delivery company based on AI.",
  },
  {
    name: "Forkify",
    category: "other",
    image: "/work/Forkify.png",
    link: "https://forkify-kastastin.netlify.app/",
    github: "https://github.com/kastastin/Forkify",
    description:
      "Web application for searching, recording and creating recipes. (MVC)",
  },
  {
    name: "Travel React",
    category: "react",
    image: "/work/TravelReact.png",
    link: "https://travel-react-kastastin.netlify.app/",
    github: "https://github.com/kastastin/travel-react",
    description: "Web application for finding places on the map. (Tripadvisor)",
  },
  {
    name: "Webflow Portfolio",
    category: "other",
    image: "/work/Webflow.png",
    link: "https://kastastin.webflow.io/",
    github: "https://github.com/kastastin",
    description: "A complete portfolio with several responsive websites.",
  },
  {
    name: "Natours",
    category: "landing page",
    image: "/work/Natours.png",
    link: "https://natours-concept-project.netlify.app/",
    github: "https://github.com/kastastin/advanced-css-jonas/tree/main/Natours",
    description:
      "Website for outdoor recreation using advanced CSS techniques.",
  },
  {
    name: "BookStore",
    category: "landing page",
    image: "/work/BookStore.png",
    link: "https://book-store-concept-project.netlify.app/",
    github: "https://github.com/kastastin/BookStore",
    description: "Static website for selling books without interaction logic.",
  },
];

export const reviews = [
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
