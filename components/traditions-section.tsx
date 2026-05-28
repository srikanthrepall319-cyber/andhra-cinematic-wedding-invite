"use client";

import { motion } from "framer-motion";
import { Flower2, Sparkles, Heart, Pyramid } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui";
import { useLanguage } from "@/components/language-context";

const icons = [Flower2, Sparkles, Heart, Pyramid];

export function TraditionsSection() {
  const { language } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Culture"
        title="Our Wedding Traditions"
        description="Simple explanations of the sacred moments that make the ceremony special."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {siteData.traditions.map((item, index) => {
          const Icon = icons[index % icons.length];
          const text = language === "te" ? item.telugu : item.english;
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card h-full border border-white/10 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 text-white shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-maroon/10 p-3 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-gold">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-ink/80">{text}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
