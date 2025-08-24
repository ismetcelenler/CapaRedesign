import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import { type NewsItem } from "@shared/schema";

export default function NewsSection() {
  const { t } = useLanguage();
  const { data: news, isLoading, error } = useQuery<NewsItem[]>({
    queryKey: ['/api/news'],
    queryFn: async () => {
      const response = await fetch('/api/news?limit=3');
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      return response.json();
    }
  });

  if (error) {
    return (
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-capa-navy mb-4">{t.news.title}</h2>
            <p className="text-red-600" data-testid="text-news-error">
              {t.news.errorLoading}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-capa-navy mb-4">{t.news.title}</h2>
              <p className="text-xl text-capa-gray">{t.news.subtitle}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gray-50 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-capa-navy mb-4" data-testid="text-news-title">
              {t.news.title}
            </h2>
            <p className="text-xl text-capa-gray" data-testid="text-news-subtitle">
              {t.news.subtitle}
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="hidden md:flex items-center text-capa-red hover:text-red-700 font-semibold"
            data-testid="button-view-all-news"
          >
            {t.news.viewAll}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {!news || news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-capa-gray" data-testid="text-no-news">
              {t.news.noNews}
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article 
                key={item.id} 
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-testid={`card-news-${index}`}
              >
                {item.imageUrl && (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-news-${index}`}
                  />
                )}
                <div className="p-6">
                  <div className="text-sm text-capa-red mb-2" data-testid={`text-news-date-${index}`}>
                    {new Date(item.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-capa-navy mb-3 line-clamp-2" data-testid={`text-news-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-capa-gray leading-relaxed mb-4" data-testid={`text-news-excerpt-${index}`}>
                    {item.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-capa-red hover:text-red-700 font-semibold p-0 h-auto"
                    data-testid={`button-read-more-${index}`}
                  >
                    {t.news.readMore} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:hidden">
          <Button 
            className="bg-capa-red text-white hover:bg-red-700"
            data-testid="button-view-all-mobile"
          >
            {t.news.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
