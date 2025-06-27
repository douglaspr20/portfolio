import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { $currentTheme } from "@/store";

export default function ThemeToggle() {
  const currentTheme = useStore($currentTheme);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    $currentTheme.set(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark");
    $currentTheme.set(newTheme);
  };

  return (
    <button
      // variant="ghost"
      // size="icon"
      onClick={toggleTheme}
      className="cursor-pointer rounded-full p-2 transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-400/20"
    >
      {currentTheme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
