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
    <section className="bg-hero h-[84vh] bg-cover bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Kostya</h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Bried description with insights inro myself, my vocational journey
              and what I engage in professionally.
            </p>

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
          </div>

          <div className="relative hidden xl:flex">image</div>
        </div>

        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}
