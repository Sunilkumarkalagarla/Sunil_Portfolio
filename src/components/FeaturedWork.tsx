
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const FeaturedWork = () => {
  const placeholderCards = [
    {
      id: 1,
      title: "AI-Powered Analytics Platform",
      subtitle: "Coming Soon - Revolutionary data insights tool"
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce Solution",
      subtitle: "Coming Soon - Modern shopping experience"
    },
    {
      id: 3,
      title: "Cloud-Native Microservices",
      subtitle: "Coming Soon - Scalable backend architecture"
    },
    {
      id: 4,
      title: "Mobile-First Web Application",
      subtitle: "Coming Soon - Responsive user interface"
    }
  ];

  return (
    <section id="featured-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Great projects on the way—stay tuned for innovative solutions and cutting-edge technologies!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholderCards.map((card) => (
            <Card key={card.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-base">
                  {card.subtitle}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-500">
            🚀 Exciting projects in development - Check back soon for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
