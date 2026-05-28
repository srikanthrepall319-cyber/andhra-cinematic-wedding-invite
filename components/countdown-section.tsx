"use client";

import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/countdown-timer";
import { SectionHeading } from "@/components/section-heading";
import { siteData } from "@/lib/site-data";

export function CountdownSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Save The Date"
        title="The Celebration Begins Soon"
        description="Counting every joyful moment until Devi & Pavan begin their beautiful journey together."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mt-12 overflow-hidden rounded-[2.5rem] border border-white/8 bg-gradient-to-br from-maroon-deep via-[#4a1522] to-[#6e1f2d] p-8 text-white shadow-glow md:p-12"
      >
        {/* Ambient glow layer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.08),transparent_65%)]" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="ornament text-[10px] uppercase tracking-[0.42em] text-gold">
            Wedding Countdown
          </p>
          <h3 className="mt-4 font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-light italic leading-snug">
            A few precious moments until our celebration
          </h3>
          <p className="mt-4 text-[15px] leading-7 text-white/55">
            With blessings, love, and happiness in our hearts, we eagerly await
            the day we celebrate together with family and friends.
          </p>
        </div>

        <div className="relative mt-10">
          <CountdownTimer targetDate={new Date(siteData.weddingDate)} />
        </div>
      </motion.div>
    </section>
  );
}