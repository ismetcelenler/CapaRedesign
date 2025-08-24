import { Twitter, Linkedin, Youtube, Rss } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-capa-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-white font-bold text-2xl tracking-tight">
                C<span className="text-capa-red">A</span>PA
              </div>
              <div className="text-sm text-blue-100 leading-tight">
                <div>Centro de Astropartículas y</div>
                <div>Física de Altas Energías</div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Advancing the frontiers of physics through innovative research in astroparticles, dark matter, and quantum technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-blue-100 hover:text-white transition-colors"
                data-testid="link-rss"
              >
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('research')}
                  className="text-blue-100 hover:text-white transition-colors"
                  data-testid="footer-nav-research"
                >
                  Research Areas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-blue-100 hover:text-white transition-colors"
                  data-testid="footer-nav-team"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('news')}
                  className="text-blue-100 hover:text-white transition-colors"
                  data-testid="footer-nav-news"
                >
                  Latest News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-blue-100 hover:text-white transition-colors"
                  data-testid="footer-nav-events"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-white transition-colors"
                  data-testid="footer-nav-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors" data-testid="link-publications">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors" data-testid="link-collaborations">
                  Collaborations
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors" data-testid="link-careers">
                  Career Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors" data-testid="link-press">
                  Press Room
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100" data-testid="text-copyright">
            © 2024 CAPA - Centro de Astropartículas y Física de Altas Energías. Universidad de Zaragoza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
