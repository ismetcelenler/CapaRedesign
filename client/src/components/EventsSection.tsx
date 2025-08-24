import { useQuery } from "@tanstack/react-query";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { type Event } from "@shared/schema";

export default function EventsSection() {
  const { t } = useLanguage();
  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
    queryFn: async () => {
      const response = await fetch('/api/events?upcoming=true');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      return response.json();
    }
  });

  if (error) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-capa-navy mb-4">{t.events.title}</h2>
            <p className="text-red-600" data-testid="text-events-error">
              {t.events.errorLoading}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-capa-navy mb-4">{t.events.title}</h2>
            <p className="text-xl text-capa-gray">{t.events.subtitle}</p>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 animate-pulse">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="bg-gray-200 p-3 rounded-lg w-20 h-16"></div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-48"></div>
                      </div>
                    </div>
                    <div className="h-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <div className="h-10 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-capa-navy mb-4" data-testid="text-events-title">
            {t.events.title}
          </h2>
          <p className="text-xl text-capa-gray" data-testid="text-events-subtitle">
            {t.events.subtitle}
          </p>
        </div>

        {!events || events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-capa-gray" data-testid="text-no-events">
              {t.events.noEvents}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event, index) => {
              const eventDate = new Date(event.eventDate);
              return (
                <div 
                  key={event.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  data-testid={`card-event-${index}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="bg-capa-red text-white p-3 rounded-lg text-center min-w-[80px]">
                          <div className="text-sm font-medium" data-testid={`text-event-month-${index}`}>
                            {eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                          </div>
                          <div className="text-xl font-bold" data-testid={`text-event-day-${index}`}>
                            {eventDate.getDate()}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-capa-navy" data-testid={`text-event-title-${index}`}>
                            {event.title}
                          </h3>
                          {event.speaker && (
                            <p className="text-capa-gray" data-testid={`text-event-speaker-${index}`}>
                              {t.events.speaker}: {event.speaker}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-capa-gray leading-relaxed" data-testid={`text-event-description-${index}`}>
                        {event.description}
                      </p>
                      {event.location && (
                        <p className="text-sm text-capa-gray mt-2" data-testid={`text-event-location-${index}`}>
                          {t.events.location}: {event.location}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button 
                        className="bg-capa-navy text-white hover:bg-blue-900"
                        onClick={() => {
                          if (event.registrationUrl) {
                            window.open(event.registrationUrl, '_blank');
                          }
                        }}
                        data-testid={`button-register-${index}`}
                      >
                        {t.events.register}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-8">
          <Button 
            variant="ghost"
            className="text-capa-red hover:text-red-700 font-semibold"
            data-testid="button-view-calendar"
          >
            {t.events.viewCalendar} <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
