"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      title={language === "en" ? "Switch to Telugu" : "Switch to English"}
      className="flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-white backdrop-blur-md transition hover:bg-white/12"
    >
      <Languages className="h-4 w-4" />
      <span className="hidden text-[11px] uppercase tracking-widest md:block">
        {language === "en" ? "తె" : "EN"}
      </span>
    </button>
  );
}