"use client";

import { throttle } from "lodash";
import { useEffect, useState } from "react";

import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import ThemeToggler from "@/components/ThemeToggler";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsHeaderVisible(window.scrollY > 50);
    }, 300);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const headerStyles = isHeaderVisible
    ? "shadow-lg dark:bg-accent"
    : "dark:bg-transparent";

  return (
    <header
      className={`sticky top-0 z-30 bg-[#fef9f5] py-2 transition-all sm:py-5 ${headerStyles}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-x-6">
            <Nav
              linkStyles="relative transition-all hover:text-primary"
              containerStyles="hidden items-center gap-x-8 xl:flex"
              underlineStyles="absolute bottom-0 h-1 w-full bg-primary"
            />
            <ThemeToggler />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
