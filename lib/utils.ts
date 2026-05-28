import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, locale: "en" | "te" = "en") {
  return new Intl.DateTimeFormat(locale === "te" ? "te-IN" : "en-GB", {
    weekday: "long",
    year:    "numeric",
    month:   "long",
    day:     "numeric",
  }).format(date);
}

export function formatTime(date: Date, locale: "en" | "te" = "en") {
  return new Intl.DateTimeFormat(locale === "te" ? "te-IN" : "en-GB", {
    hour:   "numeric",
    minute: "2-digit",
  }).format(date);
}

/** Returns the Google Maps URL as-is (already a full URL in site-data). */
export function toGoogleMapsUrl(url: string) {
  return url;
}

export function generateIcs({
  title,
  location,
  description,
  start,
  end,
}: {
  title:       string;
  location:    string;
  description: string;
  start:       Date;
  end:         Date;
}) {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Andhra Wedding Invite//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${crypto.randomUUID()}`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}