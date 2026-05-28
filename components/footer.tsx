import Link from "next/link";
import { siteData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-black/8 bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <p className="font-serif text-xl font-light text-maroon">
            {siteData.initials}
          </p>
          <p className="mt-1 text-[13px] text-ink/45">
            Thank you for being part of our story.
          </p>
        </div>
        <nav className="flex items-center gap-5 text-[13px] text-ink/50">
          <Link href="/events"     className="hover:text-maroon transition-colors">Events</Link>
          <Link href="/traditions" className="hover:text-maroon transition-colors">Traditions</Link>
          <Link href="/contact"    className="hover:text-maroon transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}