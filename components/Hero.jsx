import Link from "next/link";
import { Download, Send } from "lucide-react";
import {
  RiTodoFill,
  RiTeamFill,
  RiBriefcase4Fill,
  RiArrowDownSLine,
} from "react-icons/ri";

import { Button } from "./ui/button";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="min-h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-12">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>

            <h1 className="h1 mb-4">Hi, I&apos;m Kastastin</h1>

            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Web-developer from Kyiv. My main area of expertise is website
              layout. I specialize in creating aesthetic and functional
              interfaces for web projects.
            </p>

            {/* Buttons */}
            <div className="mx-auto mb-8 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0 xl:mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <Button
                variant="secondary"
                className="cursor-not-allowed gap-x-2"
              >
                Download CV
                <Download size={18} />
              </Button>
            </div>

            <Socials
              containerStyles="mx-auto flex gap-x-6 xl:mx-0"
              iconStyles="text-[22px] text-foreground transition-all hover:text-primary"
            />
          </div>

          {/* Image */}
          <div className="relative hidden xl:flex">
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={12}
              badgeText="Months Of Experience"
              containerStyles="absolute -left-[5rem] top-[22.5%]"
            />

            <Badge
              icon={<RiTodoFill />}
              endCountNum={9}
              badgeText="Finished Projects"
              containerStyles="absolute -left-[1rem] top-[80%]"
            />

            <Badge
              icon={<RiTeamFill />}
              endCountNum={6}
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

        {/* Icon: Arrow Down  */}
        <div className="absolute bottom-4 left-2/4 hidden animate-bounce cursor-pointer xl:flex">
          <RiArrowDownSLine className="translate-x-[-50%] text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
