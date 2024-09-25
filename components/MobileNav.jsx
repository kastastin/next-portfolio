"use client";

import { useState } from "react";
import { AlignJustify } from "lucide-react";

import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import SocialIconsList from "@/components/lists/SocialIconsList";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Sheet className="xl:hidden" open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <AlignJustify className="cursor-pointer" onClick={openMenu} />

      <SheetContent>
        <LanguageSwitcher className="absolute right-16 top-4 sm:right-[70px] sm:top-7" />

        <div className="flex h-full flex-col items-center justify-between py-12">
          <div className="flex flex-col items-center gap-y-32">
            <Logo onClick={closeMenu} />

            <Nav
              linkStyles="text-2xl"
              containerStyles="flex flex-col items-center gap-y-6"
              onClick={closeMenu}
            />
          </div>

          <SocialIconsList
            containerStyles="flex gap-x-4"
            iconStyles="text-2xl transition-all hover:text-primary"
            onClick={closeMenu}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
