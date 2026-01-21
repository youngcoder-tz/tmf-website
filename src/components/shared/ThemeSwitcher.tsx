"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [userOverridden, setUserOverridden] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      setUserOverridden(true);
    }
  }, [theme]);

  useEffect(() => {
    if (!userOverridden && resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme, userOverridden, setTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setUserOverridden(true);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="
        relative flex items-center
        h-9 w-18 rounded-full
        shadow-2xl
        bg-neutral-200 dark:bg-neutral-800/60
        border border-neutral-300 dark:border-neutral-700
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
      "
    >
      {/* Sun Icon */}
      <Sun
        className={`
          absolute left-2 z-20 h-4 w-4
          text-yellow-500
          transition-all duration-300
          ${isDark ? "opacity-60 scale-75" : "opacity-100 scale-100"}
        `}
      />

      {/* Moon Icon */}
      <Moon
        className={`
          absolute right-2  h-4 w-4 z-20
          text-blue-400/40
          fill-slate-400
          transition-all duration-300
          ${isDark ? "opacity-100 scale-100" : "opacity-60 scale-75"}
        `}
      />

      {/* Thumb */}
      <span
        className={`
          absolute left-1 z-10
          h-7 w-7 rounded-full
          bg-white dark:bg-black
          shadow-md
          transition-transform duration-300 ease-out
          ${isDark ? "translate-x-9" : "translate-x-0"}
        `}
      />
    </button>
  );
}
