import { RiTodoFill, RiTeamFill, RiBriefcase4Fill } from "react-icons/ri";
import Link from "next/link";
import { Send, Download } from "lucide-react";

import Badge from "@/components/Badge";
import { heroStatistics as data } from "@/constants";
import DevImg from "@/components/DevImg";
import { Button } from "@/components/ui/button";
import ArrowToAbout from "@/components/ArrowToAbout";
import SocialIconsList from "@/components/lists/SocialIconsList";

const HeroSection = () => (
  <section className="min-h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-12">
    <div className="container mx-auto">
      <div className="flex justify-between gap-x-8">
        {/* Left side (text) */}
        <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
            Web Developer
          </div>

          <h1 className="h1 mb-4">Hi, I&apos;m Kastastin</h1>

          <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
            Web-developer from Kyiv. My main area of expertise is website
            layout. I specialize in creating aesthetic and functional interfaces
            for web projects.
          </p>

          {/* Buttons */}
          <div className="mx-auto mb-8 flex flex-col gap-3 md:flex-row xl:mx-0 xl:mb-12">
            <Link href="/contact">
              <Button className="gap-x-2">
                Contact me <Send size={18} />
              </Button>
            </Link>

            <Button variant="secondary">
              <a href="/cv.pdf" download className="flex gap-x-2">
                Download CV
                {/* TODO: add cv */}
                <Download size={18} />
              </a>
            </Button>
          </div>

          <SocialIconsList
            containerStyles="mx-auto flex gap-x-6 xl:mx-0"
            iconStyles="text-[22px] text-foreground transition-all hover:text-primary"
          />
        </div>

        {/* Left side (image) */}
        <div className="relative hidden xl:flex">
          <Badge
            icon={<RiBriefcase4Fill />}
            endCountNum={data.experience}
            badgeText="Months Of Experience"
            containerStyles="absolute -left-[5rem] top-[22.5%]"
          />

          <Badge
            icon={<RiTodoFill />}
            endCountNum={data.projects}
            badgeText="Finished Projects"
            containerStyles="absolute -left-[1rem] top-[80%]"
          />

          <Badge
            icon={<RiTeamFill />}
            endCountNum={data.clients}
            badgeText="Happy Clients"
            containerStyles="absolute -right-2 top-[2%]"
          />

          <div className="absolute -right-5 -top-1 size-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark" />

          <DevImg
            imgSrc="/hero/developer.svg"
            imgStyles="translate-x-[-25px]"
            containerStyles="relative h-[462px] w-[510px] bg-hero_shape bg-no-repeat"
          />
        </div>
      </div>
    </div>

    <ArrowToAbout />
  </section>
);

export default HeroSection;
