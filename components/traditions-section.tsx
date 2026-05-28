"use client";

import { motion } from "framer-motion";
import { Flower2, Sparkles, Heart, Sun } from "lucide-react";

import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/components/language-context";

const ICONS = [Flower2, Sparkles, Heart, Sun];

export function TraditionsSection() {
  const { language } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Culture"
        title="Our Wedding Traditions"
        description="Sacred rituals that give meaning, beauty, and joy to every moment of the ceremony."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {siteData.traditions.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          const text = language === "te" ? item.telugu : item.english;

          return (
            <motion.article
              key={item.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="dark-card flex h-full flex-col rounded-3xl p-7 shadow-[0_4px_32px_rgba(0,0,0,0.28)]"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold/15 bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl font-light text-gold-light">
                  {item.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

              {/* Description */}
              <p
                className={`text-[14px] leading-7 text-white/62 ${
                  language === "te" ? "font-[var(--font-telugu)]" : ""
                }`}
              >
                {text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}