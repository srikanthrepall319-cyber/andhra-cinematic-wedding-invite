"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarPlus, MapPinned, Clock3, CalendarDays } from "lucide-react";

import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui";
import { generateIcs, toGoogleMapsUrl } from "@/lib/utils";

function parseTime(time: string): { hours: number; minutes: number } {
  const [rawHM, modifier] = time.split(" ");
  let [hours, minutes] = rawHM.split(":").map(Number);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

function downloadIcs(content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), {
    href: url,
    download: "wedding-event.ics",
  });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function EventsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="events" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Events"
        title="Wedding Celebrations"
        description="Join us for each sacred moment as we begin our journey together."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {siteData.events.map((event, index) => {
          const handleCalendar = () => {
            const { hours, minutes } = parseTime(event.time);
            const start = new Date(event.date);
            start.setHours(hours, minutes, 0, 0);
            const end = new Date(start.getTime() + 3 * 60 * 60 * 1_000);
            downloadIcs(
              generateIcs({
                title:       event.title,
                location:    event.venue,
                description: event.description,
                start,
                end,
              })
            );
          };

          return (
            <motion.article
              key={event.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="dark-card flex h-full flex-col rounded-3xl p-7 shadow-[0_4px_32px_rgba(0,0,0,0.28)]"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/15 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                    <CalendarDays className="h-3 w-3" />
                    {index === 0 ? "Wedding Ceremony" : "Reception"}
                  </span>
                  <h3 className="mt-4 font-serif text-[1.75rem] font-light text-gold-light">
                    {event.title}
                  </h3>
                </div>
                <div className="shrink-0 rounded-2xl border border-gold/15 bg-gold/10 p-3 text-gold">
                  <CalendarPlus className="h-5 w-5" />
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 flex flex-col gap-3 text-[14px] text-white/60">
                <p className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 shrink-0 text-gold/70" />
                  <span>{event.date} · {event.time}</span>
                </p>
                <p className="flex items-center gap-3">
                  <MapPinned className="h-4 w-4 shrink-0 text-gold/70" />
                  <span>{event.venue}</span>
                </p>
                <p className="mt-1 leading-7 text-white/50">{event.description}</p>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

              {/* Actions */}
              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={toGoogleMapsUrl(event.mapsQuery)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <MapPinned className="mr-2 h-3.5 w-3.5" />
                    Google Maps
                  </Button>
                </a>
                <Button
                  size="sm"
                  onClick={handleCalendar}
                  className="bg-gold/90 text-maroon-deep hover:bg-gold"
                >
                  <CalendarPlus className="mr-2 h-3.5 w-3.5" />
                  Add to Calendar
                </Button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}