"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";

export function StorySection() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section id="story" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Our Journey"
        title={t.story}
        description="A warm, personal timeline of moments that brought two hearts together."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {siteData.story.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <article className="glass-card flex h-full flex-col rounded-3xl p-7 shadow-card transition-shadow duration-300 hover:shadow-glow">
              {/* Step number */}
              <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 font-serif text-sm text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[10px] uppercase tracking-[0.38em] text-gold">
                {item.year}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-light text-maroon">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-ink/65">
                {item.text}
              </p>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}