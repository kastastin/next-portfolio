"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const buttonHandler = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button variant="outline" size="icon" onClick={buttonHandler}>
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:-scale-0" />

      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:-scale-100" />
    </Button>
  );
}

export default ThemeToggler;