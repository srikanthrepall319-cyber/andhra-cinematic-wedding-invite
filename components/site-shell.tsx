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
<div className="relative min-h-screen overflow-hidden bg-[#89484c] text-[#f1e9da]">
      <FloatingPetals />

      {/* ── HEADER ── */}
      <header className="relative z-50 px-4 pt-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-gold/15 bg-gradient-to-r from-maroon-deep/96 via-[#4a1522]/92 to-maroon-deep/96 px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="diya-glow flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6e1f2d] to-maroon-deep font-serif text-sm font-semibold text-gold shadow-lg">
              DP
            </div>
            <div>
              <p className="shimmer-text font-serif text-sm font-semibold tracking-wide md:text-base">
                {siteData.coupleShort}
              </p>
              <p className="text-[9px] uppercase tracking-[0.32em] text-gold/60">
                Wedding Invitation
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(({ href, key, icon: Icon }) => {
              const active = href === currentPath;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-gold text-maroon-deep shadow-md"
                      : "text-white/65 hover:bg-white/8 hover:text-white",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {t[key]}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <MusicToggle />
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-maroon-deep/90 px-3 py-2 shadow-2xl backdrop-blur-xl md:hidden">
        {nav.map(({ href, icon: Icon }) => {
          const active = href === currentPath;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200",
                active
                  ? "bg-gold text-maroon-deep shadow-md"
                  : "text-white/55 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>

      {/* ── MAIN ── */}
      <main className="pt-6 pb-28 md:pb-6">{children}</main>
      <Footer />
    </div>
  );
}
