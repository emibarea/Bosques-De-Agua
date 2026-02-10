import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-section";
import { StatsSection } from "./_components/stats-section";
import { MissionSection } from "./_components/mission-section";
import { WorkSection } from "./_components/work-section";
import { CTASection } from "./_components/cta-section";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <WorkSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
