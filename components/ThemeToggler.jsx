"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  function buttonHandler() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button onClick={buttonHandler}>
      <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:-scale-0" />

      <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:-scale-100" />
    </Button>
  );
}
