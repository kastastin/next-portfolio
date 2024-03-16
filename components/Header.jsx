"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  const currentPath = usePathname();

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
      className={`${headerStyles} sticky top-0 z-30 sm:py-5 py-2 transition-all ${currentPath === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-x-6">
            <Nav />
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
