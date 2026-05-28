"use client";

import { motion } from "framer-motion";
import { Copy, MessageCircle, QrCode, Phone } from "lucide-react";

import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Card, Button } from "@/components/ui";
import { QRCodeCanvas } from "qrcode.react";
import { downloadTextFile } from "@/lib/utils";

export function ContactSection() {
  const inviteUrl = siteData.siteUrl;

  const venueMapUrl = siteData.events[0].mapsQuery;

  const shareWhatsApp = () => {
    const msg = encodeURIComponent(
      `✨ You are invited to our wedding ✨

        💍 Invitation:
        ${inviteUrl}

        📍 Wedding Venue:
        ${venueMapUrl}`,
            );

    window.open(`https://wa.me/?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Share"
        title="Contact & Sharing"
        description="For easy sharing, quick questions, and instant invitation access."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* LEFT CARD */}
        <Card className="glass-card border border-white/10 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 text-white shadow-2xl">
          <h3 className="font-serif text-3xl text-gold">Thank You</h3>

          <p className="mt-4 text-sm leading-7 text-white/80">
            We are grateful for your blessings and presence on our special day.
            Your love and wishes mean the world to us.
          </p>

          <div className="mt-6 space-y-4 text-sm text-white/80">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              {siteData.contact.phone}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={shareWhatsApp}
              className="bg-gold text-maroon hover:bg-gold/90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Share
            </Button>

            <Button
              variant="outline"
              onClick={() => downloadTextFile("invite-link.txt", inviteUrl)}
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Link
            </Button>
          </div>
        </Card>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="glass-card flex h-full flex-col items-center justify-center border border-white/10 bg-gradient-to-br from-black/60 via-[#3b0f19]/55 to-[#5c2b2b]/45 p-8 text-white shadow-2xl">
            <div className="rounded-[2rem] bg-white p-5 shadow-2xl">
              <QRCodeCanvas
                value={inviteUrl}
                size={220}
                includeMargin
                bgColor="#ffffff"
                fgColor="#4a1522"
                level="H"
              />
            </div>

            <div className="mt-6 inline-flex items-center rounded-full bg-gold/15 px-5 py-2 text-xs uppercase tracking-[0.35em] text-gold">
              <QrCode className="mr-2 h-3.5 w-3.5" />
              Venue Location
            </div>

            <p className="mt-5 text-center text-sm leading-7 text-white/70">
              {siteData.contact.venueNote}
            </p>
          </Card>
        </motion.div>
      </div>

      <div className="mt-10 text-center text-sm text-black/50">
        Made with love · {siteData.initials}
      </div>
    </section>
  );
}
