import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MovementSection from "@/components/MovementSection";
import AchievementsSection from "@/components/AchievementsSection";
import TeamSection from "@/components/TeamSection";
import WhyTeamSection from "@/components/WhyTeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <MovementSection />
      <AchievementsSection />
      <TeamSection />
      <WhyTeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
