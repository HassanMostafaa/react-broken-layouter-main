"use client";

import { useTheme } from "../store/useTheme";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button onClick={toggleTheme} className="group cursor-pointer">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[16px] lg:text-xl link hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          {theme === "dark" ? "ִֶָ࣪◐" : "☀︎"}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
