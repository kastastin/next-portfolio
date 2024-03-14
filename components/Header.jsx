"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import Nav from "./Nav";
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
    ? "py-4 shadow-lg dark:bg-accent"
    : "py-6 dark:bg-transparent";

  return (
    <header className={`${headerStyles} sticky top-0 z-30 transition-all`}>
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
