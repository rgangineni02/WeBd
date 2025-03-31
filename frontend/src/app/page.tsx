// app/page.tsx
import HeroSection from "./components/HeroSection";
import FeaturedFrameworks from "./components/FeaturedFrameworks";
import InteractiveTool from "./components/InteractiveTool";
import Timeline from "./components/Timeline";
import AudienceNavigation from "./components/AudienceNavigation";

export default function Home() {
  return (
    <div className="min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <HeroSection />

      {/* Navigation for Different Audiences */}
      <AudienceNavigation />

      {/* Featured Frameworks */}
      <FeaturedFrameworks />

      {/* Interactive Tool */}
      <InteractiveTool />

      {/* Timeline of AI Frameworks */}
      <Timeline />
    </div>
  );
}