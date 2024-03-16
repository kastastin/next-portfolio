"use client";

import { useState } from "react";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <AlignJustify onClick={openMenu} className="cursor-pointer" />

      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo onClick={closeMenu} />

            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              onLink={closeMenu}
            />
          </div>

          <Socials
            containerStyles="flex gap-x-4"
            iconStyles="text-2xl transition-all hover:text-primary"
            onSocialClick={closeMenu}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
