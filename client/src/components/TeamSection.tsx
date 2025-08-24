import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

const teamMembers = [
  {
    name: "Dr. María González",
    position: "Research Director",
    expertise: "Dark Matter Physics",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Dr. Jacobo Asorey",
    position: "Professor",
    expertise: "Cosmology & Astrophysics",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Dr. Ana Martínez",
    position: "Senior Researcher", 
    expertise: "Quantum Technologies",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Dr. Carlos Ruiz",
    position: "Postdoc Researcher",
    expertise: "Experimental Physics",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export default function TeamSection() {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-capa-navy mb-4" data-testid="text-team-title">
            {t.team.title}
          </h2>
          <p className="text-xl text-capa-gray max-w-3xl mx-auto" data-testid="text-team-subtitle">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              data-testid={`card-team-member-${index}`}
            >
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                data-testid={`img-member-${index}`}
              />
              <h3 className="text-lg font-semibold text-capa-navy mb-1" data-testid={`text-member-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-capa-red text-sm font-medium mb-2" data-testid={`text-member-position-${index}`}>
                {member.position}
              </p>
              <p className="text-xs text-capa-gray" data-testid={`text-member-expertise-${index}`}>
                {member.expertise}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-capa-navy text-white hover:bg-blue-900 px-8 py-3"
            data-testid="button-view-full-team"
          >
            <Users className="mr-2 h-5 w-5" />
            {t.team.viewFullTeam}
          </Button>
        </div>
      </div>
    </section>
  );
}
