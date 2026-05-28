import type { Metadata } from "next";
import { TraditionsSection } from "@/components/traditions-section";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Traditions",
  description: "Sacred Telugu wedding traditions — Jeelakarra Bellam, Talambralu, Mangalasutra, and Saptapadi.",
};

export default function TraditionsPage() {
  return (
    <SiteShell currentPath="/traditions">
      <TraditionsSection />
    </SiteShell>
  );
}