import HeroSection from "./components/HeroSection";
import FeaturedFrameworks from "./components/FeaturedFrameworks";
import InteractiveTool from "./components/InteractiveTool";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex flex-col gap-16">
        <FeaturedFrameworks />
        <InteractiveTool />
        <Timeline />
      </main>

      {/* Footer */}
    </div>
  );
}