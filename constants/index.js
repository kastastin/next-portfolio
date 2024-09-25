import {
  RiGithubFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiInstagramFill,
} from "react-icons/ri";

import {
  Gem,
  User2,
  Blocks,
  MailIcon,
  Calendar,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  GanttChartSquare,
} from "lucide-react";

export const navLinks = [
  {
    label: {
      en: "Home",
      uk: "Головна",
    },
    href: "/",
  },
  {
    label: {
      en: "My Projects",
      uk: "Мої проекти",
    },
    href: "/projects",
  },
  {
    label: {
      en: "Contact",
      uk: "Контакти",
    },
    href: "/contact",
  },
];

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
    href: "https://t.me/kastastin",
    name: <RiTelegramFill />,
  },
];

export const heroStatistics = {
  clients: 6,
  projects: 8,
  experience: 14,
};

export const aboutData = {
  tabs: [
    {
      en: { name: "Personal Info", title: "Unmatched Service Quality" },
      uk: { name: "Особисті дані", title: "Якість послуг" },
    },
    {
      en: { name: "Skills", title: "What I Use Frequently" },
      uk: { name: "Навички", title: "Що я зазвичай використовую" },
    },
    {
      en: { name: "Qualifications", title: "My Awesome Journey" },
      uk: { name: "Кваліфікації", title: "Моя крута подорож" },
    },
  ],
  personalInfo: {
    en: [
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
    ],
    uk: [
      {
        text: "Костянтин Климович",
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
        text: "12 квітня, 2002",
        icon: <Calendar size={20} />,
      },
      {
        text: "Бакалавр комп'ютерних наук",
        icon: <GraduationCap size={20} />,
      },
      {
        text: "Київ, Україна",
        icon: <HomeIcon size={20} />,
      },
    ],
  },
  skills: [
    "Front-end Development",
    "HTML/CSS, JavaScript/TypeScript",
    "React, Next.js, Tailwind/shadcn",
  ],
  tools: [
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
  experience: [
    {
      company: "Contrabas Promo",
      role: "Telegram Bot Developer",
      years: "2021 - 2023",
    },
    {
      company: "Aipro",
      role: "Front-end Developer",
      years: "2023 - 2024",
    },
  ],
  education: {
    en: [
      {
        university: "Kyiv Polytechnic Institute",
        qualification: "Bachelor of Science",
        years: "2019 - 2023",
      },
    ],
    uk: [
      {
        university: "Київський політехнічний інститут",
        qualification: "Бакалавр комп'ютерних наук",
        years: "2019 - 2023",
      },
    ],
  },
};

export const services = [
  {
    title: "Landing Page",
    icon: <Blocks size={72} strokeWidth={0.8} />,
    description: {
      en: "Every webpage is meticulously crafted with compelling headlines and imagery, finely tuned to resonate with the target audience and maximize conversion rates.",
      uk: "Кожна сторінка точно налаштовується під цільову аудиторію з переконливими заголовками та зображеннями для максимальної конверсії.",
    },
  },
  {
    title: "Web Application",
    icon: <Gem size={72} strokeWidth={0.8} />,
    description: {
      en: "Main focus is on implementing industry-standard logic, essential functionalities, secure authentication systems, and performance optimization techniques.",
      uk: "Основна увага приділяється впровадженню логіки, функціональних вимог, системі автентифікації та методів оптимізації продуктивності.",
    },
  },
  {
    title: "Web Design",
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    description: {
      en: "From responsive design to color usage and typography, every aspect of the workflow is discussed in detail and optimized for the best results.",
      uk: "Кожен аспект від адаптивності до підбору кольорів і типографіки детально обговорюється для досягнення найкращих результатів.",
    },
  },
];

export const projectsCategories = [
  { en: "all", uk: "Усі" },
  { en: "react", uk: "React" },
  { en: "landing page", uk: "Лендінг" },
  { en: "other", uk: "Інше" },
];

export const projects = [
  {
    name: "DevOverflow",
    category: "react",
    image: "/work/DevOverflow.png",
    link: "https://dev-overflow-kastastins-projects.vercel.app/",
    github: "https://github.com/kastastin/dev-overflow",
    description: {
      en: "StackOverflow clone for asking and answering programming questions.",
      uk: "Клон StackOverflow для запитань та відповідей з програмування.",
    },
  },
  {
    name: "Brainwave",
    category: "landing page",
    image: "/work/Brainwave.png",
    link: "https://brainwave-beta-eight.vercel.app/",
    github: "https://github.com/kastastin/brainwave",
    description: {
      en: "Modern UI/UX website, exemplifies modern UI/UX principles.",
      uk: "Сучасний вебсайт UI/UX, який демонструє сучасні принципи UI/UX.",
    },
  },
  {
    name: "Malingo",
    category: "react",
    image: "/work/Malingo.png",
    link: "https://malingo.vercel.app/",
    github: "https://github.com/kastastin/malingo",
    description: {
      en: "Web application for learning foreign languages, inspired by Dualingo.",
      uk: "Вебдодаток для вивчення іноземних мов, прототип Dualingo.",
    },
  },
  {
    name: "Omnifood",
    category: "landing page",
    image: "/work/Omnifood.png",
    link: "https://omnifood-concept-project.netlify.app/",
    github: "https://github.com/kastastin/jonas-html/tree/main/omnifood",
    description: {
      en: "Modern website for a startup food delivery company based on AI.",
      uk: "Вебсайт для стартапу з доставки їжі на основі штучного інтелекту.",
    },
  },
  {
    name: "Nike",
    category: "landing page",
    image: "/work/Nike.png",
    link: "https://nike-concept-tailwind.vercel.app/",
    github: "https://github.com/kastastin/nike-concept",
    description: {
      en: "Copy of Nike landing page using Vite and Tailwind.",
      uk: "Копія лендінгу Nike з використанням Vite та Tailwind.",
    },
  },
  {
    name: "Forkify",
    category: "other",
    image: "/work/Forkify.png",
    link: "https://forkify-kastastin.netlify.app/",
    github: "https://github.com/kastastin/Forkify",
    description: {
      en: "Web application for searching/recording/creating recipes. (MVC)",
      uk: "Вебдодаток для пошуку, запису та створення рецептів. (MVC)",
    },
  },
  {
    name: "Figministin",
    category: "react",
    image: "/work/Figministin.png",
    link: "https://figministin.vercel.app/",
    github: "https://github.com/kastastin/figministin",
    description: {
      en: "Web application clone of Figma with real-time interaction.",
      uk: "Клон вебдодатку Figma з взаємодією в реальному часі.",
    },
  },
  {
    name: "Fast React Pizza",
    category: "react",
    image: "/work/FastReactPizza.png",
    link: "https://fast-react-pizza-concept.vercel.app/",
    github: "https://github.com/kastastin/fast-react-pizza",
    description: {
      en: "Web application for ordering pizza using redux, tailwind.",
      uk: "Вебдодаток для замовлення піци. (Redux, Tailwind)",
    },
  },
  {
    name: "Travel React",
    category: "react",
    image: "/work/TravelReact.png",
    link: "https://travel-react-kastastin.netlify.app/",
    github: "https://github.com/kastastin/travel-react",
    description: {
      en: "Web application for finding places on the map. (Tripadvisor)",
      uk: "Вебдодаток для пошуку місць на мапі. (Tripadvisor)",
    },
  },
  {
    name: "The Wild Oasis",
    category: "react",
    image: "/work/TheWildOasis.png",
    link: "https://wild-oasis-concept.netlify.app/login",
    github: "https://github.com/kastastin/the-wild-oasis",
    description: {
      en: "Web application with admin panel and authorization.",
      uk: "Вебдодаток з панеллю адміністратора та авторизацією.",
    },
  },
  {
    name: "Webflow Portfolio",
    category: "other",
    image: "/work/Webflow.png",
    link: "https://kastastin.webflow.io/",
    github: "https://github.com/kastastin",
    description: {
      en: "A complete portfolio with several responsive websites.",
      uk: "Портфоліо з декількома адаптивними вебсайтами.",
    },
  },
  {
    name: "Natours",
    category: "landing page",
    image: "/work/Natours.png",
    link: "https://natours-concept-project.netlify.app/",
    github: "https://github.com/kastastin/advanced-css-jonas/tree/main/Natours",
    description: {
      en: "Website for outdoor recreation using advanced CSS techniques.",
      uk: "Сайт для активного відпочинку з використанням CSS.",
    },
  },
  {
    name: "BookStore",
    category: "landing page",
    image: "/work/BookStore.png",
    link: "https://book-store-concept-project.netlify.app/",
    github: "https://github.com/kastastin/BookStore",
    description: {
      en: "Static website for selling books without interaction logic.",
      uk: "Статичний вебсайт для продажу книг без логіки взаємодії.",
    },
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

export const contactData = [
  {
    text: "kostya242421@gmail.com",
    icon: <MailIcon size={18} className="text-primary" />,
  },
  {
    text: { en: "Kyiv, Ukraine", uk: "Київ, Україна" },
    icon: <HomeIcon size={18} className="text-primary" />,
  },
  {
    text: "+380937171150",
    icon: <PhoneCall size={18} className="text-primary" />,
  },
];
