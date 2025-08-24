import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ResearchAreas from "@/components/ResearchAreas";
import NewsSection from "@/components/NewsSection";
import TeamSection from "@/components/TeamSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
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
              <h2 className="text-4xl font-bold mb-4">Join Our Research</h2>
              <p className="text-xl text-blue-100">Explore opportunities to advance your career in cutting-edge physics research</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
                <div className="text-capa-red mb-4">
                  <i className="fas fa-graduation-cap text-3xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">PhD Positions</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Join our DarkQuantum project with fully-funded PhD positions in astroparticle physics and quantum technologies. Work with world-class researchers on groundbreaking experiments.
                </p>
                <button 
                  className="bg-capa-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  data-testid="button-apply-phd"
                >
                  Apply Now
                </button>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
                <div className="text-capa-red mb-4">
                  <i className="fas fa-microscope text-3xl"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Postdoc Opportunities</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  2-3 year postdoctoral contracts available for experienced researchers. Expand your career in our collaborative international research environment.
                </p>
                <button 
                  className="bg-capa-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  data-testid="button-apply-postdoc"
                >
                  Learn More
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
