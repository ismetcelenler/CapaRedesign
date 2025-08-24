import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ResearchAreas from "@/components/ResearchAreas";
import NewsSection from "@/components/NewsSection";
import TeamSection from "@/components/TeamSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ResearchAreas />
        <NewsSection />
        <TeamSection />
        <EventsSection />
        <section className="py-20 bg-capa-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t.join.title}</h2>
              <p className="text-xl text-blue-100">{t.join.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
                <div className="text-capa-red mb-4">
                  <i className="fas fa-graduation-cap text-3xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t.join.phd.title}</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  {t.join.phd.description}
                </p>
                <button 
                  className="bg-capa-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  data-testid="button-apply-phd"
                >
                  {t.join.phd.button}
                </button>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
                <div className="text-capa-red mb-4">
                  <i className="fas fa-microscope text-3xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t.join.postdoc.title}</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  {t.join.postdoc.description}
                </p>
                <button 
                  className="bg-capa-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  data-testid="button-apply-postdoc"
                >
                  {t.join.postdoc.button}
                </button>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
