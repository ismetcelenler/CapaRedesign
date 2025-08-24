import { Microscope, Satellite, Atom, Star, Network, FlaskConical } from "lucide-react";

const researchAreas = [
  {
    icon: Microscope,
    title: "Dark Matter Research",
    description: "Investigating the mysterious dark matter that comprises 85% of all matter in the universe through innovative detection methods and theoretical frameworks."
  },
  {
    icon: Satellite,
    title: "Cosmic Ray Physics", 
    description: "Studying ultra-high-energy cosmic rays and their origins, using advanced detection arrays and computational modeling to understand these cosmic messengers."
  },
  {
    icon: Atom,
    title: "Quantum Technologies",
    description: "Developing cutting-edge quantum technologies for fundamental physics research, including quantum sensors and detection systems."
  },
  {
    icon: Star,
    title: "Astroparticle Physics",
    description: "Exploring the intersection of particle physics and astrophysics to understand fundamental processes in extreme cosmic environments."
  },
  {
    icon: Network,
    title: "Theoretical Physics",
    description: "Advancing theoretical frameworks in particle physics, cosmology, and quantum field theory to interpret experimental observations."
  },
  {
    icon: FlaskConical,
    title: "Experimental Techniques",
    description: "Developing innovative experimental methods and detector technologies for next-generation physics experiments."
  }
];

export default function ResearchAreas() {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-capa-navy mb-4" data-testid="text-research-title">
            Research Areas
          </h2>
          <p className="text-xl text-capa-gray max-w-3xl mx-auto" data-testid="text-research-description">
            Our interdisciplinary research spans multiple frontiers of modern physics, from the smallest particles to the largest structures in the universe.
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
