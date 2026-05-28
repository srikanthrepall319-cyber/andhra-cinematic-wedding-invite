import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details, WhatsApp sharing, and QR code for the wedding invitation.",
};

export default function ContactPage() {
  return (
    <SiteShell currentPath="/contact">
      <ContactSection />
    </SiteShell>
  );
}