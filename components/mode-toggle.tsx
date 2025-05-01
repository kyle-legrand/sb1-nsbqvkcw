"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

export const ModeToggle = React.memo(function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <Button
      data-testid="mode-toggle"
      onClick={toggleTheme}
      className={buttonVariants({
        size: "icon",
        variant: "ghost",
      })}
    >
      <Sun
        data-testid="sun-icon"
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        data-testid="moon-icon"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
});