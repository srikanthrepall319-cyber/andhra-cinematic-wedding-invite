import Link from "next/link";
import { siteData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/30 bg-white/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <p className="font-serif text-2xl text-gold">{siteData.initials}</p>
          <p className="mt-1 text-sm text-ink/70">Thank you for being part of our story.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-ink/70">
          <Link href="/events">Events</Link>
          <Link href="/traditions">Traditions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
