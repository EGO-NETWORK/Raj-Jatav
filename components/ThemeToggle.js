"use client";

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
    >
      <Sun className="icon-sun" size={18} strokeWidth={1.6} />
      <Moon className="icon-moon" size={18} strokeWidth={1.6} />
    </button>
  );
}
