"use client";

import { useEffect, useState } from "react";

import Nav from "./Nav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", () => {
      setIsHeaderVisible(window.scrollY > 50);
    });

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const headerStyles = isHeaderVisible
    ? "shadow-lg dark:bg-accent"
    : "dark:bg-transparent";

  return (
    <header
      className={`${headerStyles} sticky top-0 z-30 bg-[#fef9f5] py-2 transition-all sm:py-5`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden items-center gap-x-8 xl:flex"
              linkStyles="relative transition-all hover:text-primary"
              underlineStyles="absolute bottom-0 h-1 w-full bg-primary"
            />
            <ThemeToggler />

            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
