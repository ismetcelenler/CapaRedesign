import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import capaLogoSrc from "@assets/image_1756071577695.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img 
                  src={capaLogoSrc} 
                  alt="CAPA Logo" 
                  className="h-12 w-auto"
                  data-testid="img-logo"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-capa-gray hover:text-capa-navy transition-colors font-medium"
                data-testid="nav-home"
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('research')}
                className="text-capa-gray hover:text-capa-navy transition-colors font-medium"
                data-testid="nav-research"
              >
                {t.nav.research}
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-capa-gray hover:text-capa-navy transition-colors font-medium"
                data-testid="nav-team"
              >
                {t.nav.team}
              </button>
              <button 
                onClick={() => scrollToSection('news')}
                className="text-capa-gray hover:text-capa-navy transition-colors font-medium"
                data-testid="nav-news"
              >
                {t.nav.news}
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-capa-gray hover:text-capa-navy transition-colors font-medium"
                data-testid="nav-events"
              >
                {t.nav.events}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-capa-gray hover:text-capa-navy transition-colors font-medium"
                data-testid="nav-contact"
              >
                {t.nav.contact}
              </button>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`${language === 'en' ? 'text-capa-navy font-semibold' : 'text-gray-400 hover:text-capa-navy'} transition-colors`}
                  data-testid="button-lang-en"
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button 
                  onClick={() => setLanguage('es')}
                  className={`${language === 'es' ? 'text-capa-navy font-semibold' : 'text-gray-400 hover:text-capa-navy'} transition-colors`}
                  data-testid="button-lang-es"
                >
                  ES
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block py-2 text-capa-gray hover:text-capa-navy transition-colors w-full text-left"
              data-testid="mobile-nav-home"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('research')}
              className="block py-2 text-capa-gray hover:text-capa-navy transition-colors w-full text-left"
              data-testid="mobile-nav-research"
            >
              {t.nav.research}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block py-2 text-capa-gray hover:text-capa-navy transition-colors w-full text-left"
              data-testid="mobile-nav-team"
            >
              {t.nav.team}
            </button>
            <button 
              onClick={() => scrollToSection('news')}
              className="block py-2 text-capa-gray hover:text-capa-navy transition-colors w-full text-left"
              data-testid="mobile-nav-news"
            >
              {t.nav.news}
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block py-2 text-capa-gray hover:text-capa-navy transition-colors w-full text-left"
              data-testid="mobile-nav-events"
            >
              {t.nav.events}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block py-2 text-capa-gray hover:text-capa-navy transition-colors w-full text-left"
              data-testid="mobile-nav-contact"
            >
              {t.nav.contact}
            </button>
            <div className="pt-3 border-t border-gray-100">
              <div className="flex space-x-4">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`${language === 'en' ? 'text-capa-navy font-semibold' : 'text-gray-400'}`}
                  data-testid="mobile-lang-en"
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('es')}
                  className={`${language === 'es' ? 'text-capa-navy font-semibold' : 'text-gray-400'}`}
                  data-testid="mobile-lang-es"
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
