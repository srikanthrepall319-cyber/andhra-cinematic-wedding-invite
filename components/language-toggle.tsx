"use client";

import { Languages } from "lucide-react";

import { useLanguage } from "@/components/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10"
      aria-label="Toggle Language"
      title={language === "en" ? "Switch to Telugu" : "Switch to English"}
    >
      <Languages className="h-4 w-4" />
    </button>
  );
}