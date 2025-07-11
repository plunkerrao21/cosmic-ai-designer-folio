import CosmicBackground from "@/components/CosmicBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Cosmic particle background */}
      <CosmicBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-border/20 bg-background/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-muted-foreground">
              © 2024 Anuj D. Dighe. Crafted with ❤️ and AI-enhanced precision.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
