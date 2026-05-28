import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Noto_Sans_Telugu } from "next/font/google";
// @ts-expect-error CSS imports may not have type declarations in this setup
import "./globals.css";
import { LanguageProvider } from "@/components/language-context";
import { siteData } from "@/lib/site-data";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const telugu = Noto_Sans_Telugu({
  weight: ["400", "500", "600"],
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: siteData.seoTitle,
    template: `%s · ${siteData.coupleShort}`,
  },
  description: siteData.seoDescription,
  keywords: ["wedding invitation", "Andhra wedding", "Telugu wedding", "cinematic wedding site"],
  openGraph: {
    title:       siteData.seoTitle,
    description: siteData.seoDescription,
    url:         siteData.siteUrl,
    siteName:    siteData.coupleShort,
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       siteData.seoTitle,
    description: siteData.seoDescription,
  },
  alternates: {
    canonical: siteData.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${cormorant.variable} ${telugu.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}