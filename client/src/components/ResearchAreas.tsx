import { Microscope, Satellite, Atom, Star, Network, FlaskConical } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const getResearchAreas = (t: any) => [
  {
    icon: Microscope,
    title: t.research.areas.darkMatter.title,
    description: t.research.areas.darkMatter.description
  },
  {
    icon: Satellite,
    title: t.research.areas.cosmicRay.title, 
    description: t.research.areas.cosmicRay.description
  },
  {
    icon: Atom,
    title: t.research.areas.quantum.title,
    description: t.research.areas.quantum.description
  },
  {
    icon: Star,
    title: t.research.areas.astroparticle.title,
    description: t.research.areas.astroparticle.description
  },
  {
    icon: Network,
    title: t.research.areas.theoretical.title,
    description: t.research.areas.theoretical.description
  },
  {
    icon: FlaskConical,
    title: t.research.areas.experimental.title,
    description: t.research.areas.experimental.description
  }
];

export default function ResearchAreas() {
  const { t } = useLanguage();
  const researchAreas = getResearchAreas(t);
  
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-capa-navy mb-4" data-testid="text-research-title">
            {t.research.title}
          </h2>
          <p className="text-xl text-capa-gray max-w-3xl mx-auto" data-testid="text-research-description">
            {t.research.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-capa-light-blue"
                data-testid={`card-research-${index}`}
              >
                <div className="text-capa-red mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-capa-navy mb-3" data-testid={`text-research-title-${index}`}>
                  {area.title}
                </h3>
                <p className="text-capa-gray leading-relaxed" data-testid={`text-research-desc-${index}`}>
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
