"use client";

import { motion } from "framer-motion";
import { Copy, MessageCircle, QrCode, Phone, Check } from "lucide-react";
import { useState } from "react";

import { siteData } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui";
import { QRCodeCanvas } from "qrcode.react";

export function ContactSection() {
  const inviteUrl = siteData.siteUrl;
  const [copied, setCopied] = useState(false);

  const shareWhatsApp = () => {
    const msg = encodeURIComponent(
      `✨ You are invited to our wedding ✨\n\n` +
      `💍 View Invitation: ${inviteUrl}\n\n` +
      `📍 Wedding Venue: ${siteData.events[0].mapsQuery}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2_000);
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement("input");
      el.value = inviteUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2_000);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Share"
        title="Contact & Sharing"
        description="For easy sharing, warm wishes, and instant invitation access."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* ── Thank-you card ── */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="dark-card flex flex-col rounded-3xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.28)]"
        >
          <h3 className="font-serif text-[1.9rem] font-light text-gold-light">
            Thank You
          </h3>

          <p className="mt-4 text-[14px] leading-7 text-white/60">
            We are deeply grateful for your blessings and presence on our
            special day. Your love and wishes mean the world to us.
          </p>

          <div className="mt-6 flex items-center gap-3 text-[14px] text-white/50">
            <Phone className="h-4 w-4 shrink-0 text-gold/70" />
            <span>{siteData.contact.phone}</span>
          </div>

          <div className="my-7 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

          <div className="mt-auto flex flex-wrap gap-3">
            <Button
              onClick={shareWhatsApp}
              className="bg-[#25D366] text-white hover:bg-[#20b858]"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Share
            </Button>
            <Button
              variant="outline"
              onClick={copyLink}
              className="border-gold/20 bg-white/5 text-white hover:bg-white/10"
            >
              {copied ? (
                <Check className="mr-2 h-4 w-4 text-green-400" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>
        </motion.article>

        {/* ── QR card ── */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="dark-card flex flex-col items-center justify-center rounded-3xl p-8 text-center shadow-[0_4px_32px_rgba(0,0,0,0.28)]"
        >
          <div className="rounded-[1.5rem] bg-white p-4 shadow-2xl">
            <QRCodeCanvas
              value={inviteUrl}
              size={200}
              includeMargin={false}
              bgColor="#ffffff"
              fgColor="#3e0d18"
              level="H"
            />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-[10px] uppercase tracking-[0.38em] text-gold">
            <QrCode className="h-3.5 w-3.5" />
            Scan to Share
          </span>

          <p className="mt-4 max-w-xs text-[13px] leading-6 text-white/45">
            {siteData.contact.venueNote}
          </p>
        </motion.article>
      </div>

      <p className="mt-10 text-center text-sm text-white/35">
        Made with love · {siteData.initials}
      </p>
    </section>
  );
}