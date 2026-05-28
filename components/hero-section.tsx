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
    <section className="relative grain min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Deep cinematic background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,31,45,0.55),transparent_50%),linear-gradient(180deg,#180a0e_0%,#260e16_40%,#0f0508_100%)]" />

      {/* Subtle gold radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,168,76,0.07),transparent_60%)]" />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "url('/hero-texture.svg')", backgroundSize: "cover" }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-12 md:px-6">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* ── LEFT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center text-white lg:text-left"
          >
            {/* Badge */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-maroon-deep/70 px-5 py-2 text-[11px] uppercase tracking-[0.38em] text-gold-light backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light/80" />
              {t.invite}
            </p>

            {/* Names */}
            <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1.04] tracking-wide">
              <span className="shimmer-text block">{siteData.coupleFull.groom}</span>
              <span className="my-2 block font-serif text-xl font-light italic text-gold/60 md:text-2xl">
                &amp;
              </span>
              <span className="shimmer-text block">{siteData.coupleFull.bride}</span>
            </h1>

            {/* Tagline */}
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-8 text-white/65 lg:mx-0">
              With the blessings of our families, we joyfully invite you to celebrate
              our wedding and share in the warmth of this beautiful beginning.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-gold/25 bg-white/5 px-8 text-[#f8e7c2] backdrop-blur-sm hover:bg-gold/10 hover:text-white"
                >
                  View Events
                </Button>
              </Link>
              <Link href="/traditions">
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 text-white/60 hover:text-white"
                >
                  Our Traditions
                </Button>
              </Link>
            </div>

            {/* Info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* Wedding Date */}
              <div className="rounded-3xl border border-white/8 bg-white/5 p-5 text-left backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  Wedding Muhurtham
                </p>
                <p className="mt-3 font-serif text-2xl text-white/90">
                  {formatDate(new Date(siteData.weddingDate), language)}
                </p>
                <p className="mt-1.5 text-sm text-white/45">08:43 PM IST</p>
              </div>

              {/* Countdown */}
              <div className="rounded-3xl border border-white/8 bg-white/5 p-5 text-left backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">
                  Live Countdown
                </p>
                <div className="mt-3">
                  <CountdownTimer targetDate={new Date(siteData.weddingDate)} compact />
                </div>
              </div>
            </div>

            {/* Footnote badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-5 py-2.5 text-sm text-white/55 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(201,168,76,0.8)]" />
              A celebration filled with tradition, elegance &amp; timeless memories.
            </div>
          </motion.div>

          {/* ── RIGHT INVITATION CARD ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.18),transparent_70%)] blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[2rem] border border-white/8 bg-gradient-to-br from-[#6e1f2d]/88 via-[#3e0d18]/92 to-[#c9a84c]/15 p-8">

                <p className="text-[10px] uppercase tracking-[0.42em] text-gold/80">
                  Wedding Invitation
                </p>
                <p className="mt-3 font-serif text-4xl italic text-gold-light">
                  {siteData.initials}
                </p>

                {/* Ornamental divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Message */}
                <p className="text-[15px] leading-8 text-white/70">
                  Two hearts, two families, and one beautiful journey.
                  We warmly invite you to celebrate this joyful occasion
                  and bless us with your presence.
                </p>

                {/* Tags */}
                <div className="mt-7 grid grid-cols-3 gap-2.5 text-center text-[11px] tracking-widest uppercase">
                  {["Love", "Tradition", "Celebration"].map((tag) => (
                    <div
                      key={tag}
                      className="rounded-2xl border border-white/8 bg-black/20 py-3 text-gold/80"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Date stamp */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-5 py-3 text-sm">
                  <span className="text-white/45 tracking-wide">Save the date</span>
                  <span className="font-serif text-gold text-base">27 · 06 · 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 transition hover:text-white/70 lg:flex"
        >
          <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}