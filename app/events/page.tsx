import type { Metadata } from "next";
import { EventsSection } from "@/components/events-section";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Events",
  description: "Wedding ceremony and reception details — dates, times, and venue information.",
};

export default function EventsPage() {
  return (
    <SiteShell currentPath="/events">
      <EventsSection />
    </SiteShell>
  );
}