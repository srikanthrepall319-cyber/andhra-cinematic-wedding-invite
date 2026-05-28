"use client";

import { motion } from "framer-motion";
import { CalendarPlus, MapPinned, Clock3, CalendarDays } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Card, Button } from "@/components/ui";
import { generateIcs, toGoogleMapsUrl } from "@/lib/utils";
import { useLanguage } from "@/components/language-context";
import { copy } from "@/lib/i18n";
import { useEffect, useState } from "react";

export function EventsSection() {
  const { language } = useLanguage();
  const t = copy[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const downloadIcs = (icsContent: string) => {
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "wedding-event.ics";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="events" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {siteData.events.map((event, index) => {
          const handleCalendar = () => {
            const parseTime = (time: string) => {
              const [rawHourMinute, modifier] = time.split(" ");
              let [hours, minutes] = rawHourMinute.split(":").map(Number);

              if (modifier === "PM" && hours !== 12) {
                hours += 12;
              }

              if (modifier === "AM" && hours === 12) {
                hours = 0;
              }

              return { hours, minutes };
            };

            const { hours, minutes } = parseTime(event.time);

            const start = new Date(event.date);

            start.setHours(hours, minutes, 0);

            const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);

            const ics = generateIcs({
              title: event.title,
              location: event.venue,
              description: event.description,
              start,
              end,
            });

            downloadIcs(ics);
          };

          return (
            <motion.div
              key={event.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card h-full border border-white/10 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 text-white shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-maroon/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-gold">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {event.title}
                    </div>
                    <h3 className="mt-4 font-serif text-3xl text-gold">
                      {event.title}
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-gold/15 p-3 text-gold">
                    <CalendarPlus className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 text-sm text-ink/80">
                  <p className="flex items-center gap-3">
                    <Clock3 className="h-4 w-4 text-gold" />
                    {event.date} • {event.time}
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPinned className="h-4 w-4 text-gold" />
                    {event.venue}
                  </p>
                  <p className="leading-7">{event.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={toGoogleMapsUrl(event.mapsQuery)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline">
                      <MapPinned className="mr-2 h-4 w-4" />
                      Google Maps
                    </Button>
                  </a>
                  <Button onClick={handleCalendar}>
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    Add to Calendar
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
