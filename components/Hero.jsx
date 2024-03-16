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
    <section className="h-[45rem] bg-hero bg-cover bg-no-repeat py-8 dark:bg-none sm:h-[37rem] md:h-[35rem] xl:py-12 xl:pt-16">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Konstantin</h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              I&apos;m a web-developer from Kyiv. My main area of expertise is
              website layout. I specialize in creating aesthetic and functional
              interfaces for web projects.
            </p>

            {/* Buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <Button variant="secondary" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </div>

            <Socials />
          </div>

          {/* Image */}
          <div className="relative hidden xl:flex">
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years Of Experience"
              containerStyles="absolute -left-[5rem] top-[22.5%]"
            />

            <Badge
              icon={<RiTodoFill />}
              endCountNum={12}
              badgeText="Finished Projects"
              containerStyles="absolute -left-[0.5rem] top-[80%]"
            />

            <Badge
              icon={<RiTeamFill />}
              endCountNum={8}
              badgeText="Happy Clients"
              containerStyles="absolute -right-2 top-[2%]"
            />

            <div className="absolute -right-5 -top-1 size-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark" />

            <DevImg imgSrc="/hero/developer.svg" />
          </div>
        </div>

        {/* Icon: Arrow Down  */}
        <div className="absolute bottom-4 left-2/4 hidden animate-bounce cursor-pointer xl:flex">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}