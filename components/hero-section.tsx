"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { siteData } from "@/lib/site-data";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";

import { Button } from "@/components/ui";
import { CountdownTimer } from "@/components/countdown-timer";
import { formatDate } from "@/lib/utils";

export function HeroSection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/hero-texture.svg')] bg-cover bg-center opacity-10" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-16 md:px-6">

        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white lg:text-left"
          >

            {/* Invitation Badge */}
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold backdrop-blur-sm">
              {t.invite}
            </p>

            {/* Couple Names */}
            <h1 className="font-serif text-5xl font-medium leading-tight tracking-wide md:text-8xl">

              <span className="bg-gradient-to-b from-[#fff6d6] via-[#f4d27a] to-[#c9971e] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
                {siteData.coupleFull.groom}
              </span>

              <span className="block py-2 text-2xl font-light text-[#e7c46a] md:text-4xl">
                &
              </span>

              <span className="bg-gradient-to-b from-[#fff6d6] via-[#f4d27a] to-[#c9971e] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
                {siteData.coupleFull.bride}
              </span>

            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg lg:mx-0">
              Celebrating love, tradition, and the beginning of forever.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">

              <Link href="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-gradient-to-br hover:from-black/60 hover:via-[#3b0f19]/55 hover:to-[#5c2b2b]/45"
                >
                  View Events
                </Button>
              </Link>

            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {/* Wedding Date */}
              <div className="glass-card rounded-3xl border border-white/20 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-4 text-left text-white backdrop-blur-md">

                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Wedding Muhurtham
                </p>

                <p className="mt-2 font-serif text-2xl">
                  {formatDate(new Date(siteData.weddingDate), language)}
                </p>

                <p className="mt-1 text-sm text-white/75">
                  Muhurtham • 08:43 PM IST
                </p>

              </div>

              {/* Countdown */}
              <div className="glass-card rounded-3xl border border-white/20 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-4 text-left text-white backdrop-blur-md">

                <p className="text-xs uppercase tracking-[0.25em] text-gold">
                  Live Countdown
                </p>

                <CountdownTimer
                  targetDate={new Date(siteData.weddingDate)}
                  compact
                />

              </div>

            </div>

            {/* Bottom Tagline */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 px-4 py-2 text-sm text-white/85 backdrop-blur-md">

              <span className="diya-glow inline-flex h-2.5 w-2.5 rounded-full bg-gold" />

              A celebration filled with music, flowers, tradition, and timeless beauty.

            </div>

          </motion.div>

          {/* RIGHT INVITATION CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_transparent_70%)] blur-2xl" />

            {/* Main Card */}
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-6 text-white backdrop-blur-xl">

              <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(110,31,45,0.9),rgba(62,15,27,0.9),rgba(212,175,55,0.32))] p-8">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-gold/90">
                      Wedding Invitation
                    </p>

                    <p className="mt-2 font-serif text-3xl text-[#f4d27a]">
                      {siteData.initials}
                    </p>
                  </div>

                </div>

                {/* Message */}
                <div className="mt-10 rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-5 backdrop-blur-md">

                  <p className="text-sm leading-7 text-white/85">
                    Celebrating Love, Tradition & Family.
                    Every love story is beautiful, but ours is our favorite.
                    Join us as we begin our forever.
                  </p>

                </div>

                {/* Tags */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">

                  <div className="rounded-2xl bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-3">
                    Love
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-3">
                    Tradition
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-3">
                    Celebration
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
        >

          <span className="flex items-center gap-2 text-sm">

            <ChevronDown className="h-4 w-4" />

            Scroll

          </span>

        </motion.a>

      </div>
    </section>
  );
}