import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { CountdownSection } from "@/components/countdown-section";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell currentPath="/">
      <HeroSection />
      <StorySection />
      <CountdownSection />
    </SiteShell>
  );
}