import { Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-capa-navy via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="particles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white"/>
              <circle cx="80" cy="40" r="0.5" fill="white"/>
              <circle cx="50" cy="70" r="1.5" fill="white"/>
              <line x1="20" y1="20" x2="50" y2="70" stroke="white" strokeWidth="0.3"/>
              <line x1="50" y1="70" x2="80" y2="40" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#particles)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
                {t.hero.title} 
                <span className="text-capa-red"> {t.hero.titleHighlight}</span> 
                {t.hero.titleEnd}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-light" data-testid="text-hero-subtitle">
                {t.hero.subtitle}
              </p>
            </div>
            
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl" data-testid="text-hero-description">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('research')}
                className="bg-capa-red hover:bg-red-700 text-white px-8 py-4 text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-testid="button-explore-research"
              >
                <Atom className="mr-2 h-5 w-5" />
                {t.hero.exploreResearch}
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('team')}
                className="border-2 border-white text-white hover:bg-white hover:text-capa-navy px-8 py-4 text-base font-semibold transition-all duration-300"
                data-testid="button-join-team"
              >
                {t.hero.joinTeam}
              </Button>
            </div>
          </div>

          <div className="lg:flex justify-center hidden">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 rounded-full border-2 border-white opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border border-capa-red opacity-40 animate-ping"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white to-capa-red opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Atom className="w-16 h-16 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
