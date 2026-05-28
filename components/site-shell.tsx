"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";
import { siteData } from "@/lib/site-data";

import { LanguageToggle } from "@/components/language-toggle";
import { MusicToggle } from "@/components/music-toggle";

import { cn } from "@/lib/utils";

import { Home, CalendarDays, Flower2, Mail } from "lucide-react";

import { FloatingPetals } from "@/components/floating-petals";
import { Footer } from "@/components/footer";

const nav = [
  { href: "/", key: "navHome", icon: Home },
  { href: "/events", key: "navEvents", icon: CalendarDays },
  { href: "/traditions", key: "navTraditions", icon: Flower2 },
  { href: "/contact", key: "navContact", icon: Mail },
] as const;

export function SiteShell({
  children,
  currentPath,
}: {
  children: React.ReactNode;
  currentPath: "/" | "/events" | "/traditions" | "/contact";
}) {
  const { language } = useLanguage();

  const t = copy[language];

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">
      {/* Floating Particles */}
      <FloatingPetals />

      {/* HEADER */}
      <header className="relative z-50 px-4 pt-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-[#d4af3740] bg-gradient-to-r from-[#2b0b12]/95 via-[#4a1522]/90 to-[#2b0b12]/95 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* LEFT LOGO */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="diya-glow flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5b1220] to-[#2b0b12] text-sm font-bold text-gold shadow-lg">
              DP
            </div>

            <div>
              <p className="bg-gradient-to-r from-[#fff5d6] via-[#D4AF37] to-[#fff5d6] bg-clip-text font-serif text-sm font-semibold tracking-wide text-transparent md:text-base">
                {siteData.coupleShort}
              </p>

              <p className="text-[9px] uppercase tracking-[0.3em] text-gold/70 md:text-[10px]">
                Wedding Invitation
              </p>
            </div>
          </Link>

          {/* CENTER NAVIGATION */}
          <nav className="hidden items-center gap-2 md:flex">
            {nav.map((item) => {
              const Icon = item.icon;

              const active = item.href === currentPath;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-all duration-300",
                    active
                      ? "bg-gold text-maroon shadow-lg"
                      : "text-white/75 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />

                  {t[item.key]}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2">
            <MusicToggle />

            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl shadow-2xl md:hidden">
        {nav.map((item) => {
          const Icon = item.icon;

          const active = item.href === currentPath;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300",
                active
                  ? "bg-gold text-maroon"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <main className="pt-6">{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
