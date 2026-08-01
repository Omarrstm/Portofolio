"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { personalInfo } from "@/lib/data";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">
          {personalInfo.name}
        </span>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
