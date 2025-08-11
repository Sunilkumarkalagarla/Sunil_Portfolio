import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Mail, MessageCircle, ExternalLink } from 'lucide-react';

const FeaturedWork = () => {
  const placeholderCards = [
    {
      id: 1,
      title: "SUN-AI Sales Copilot",
      subtitle: "Live demo – 60-second prospect briefing tool",
      description: "Built on Relevance AI. Paste a company website URL and a decision-maker's LinkedIn URL, get an instant brief with company snapshot, recent news, role context, and tailored talking points.",
      icon: MessageCircle,
      primaryLink: {
        label: "Try the Live Agent",
        url: "https://app.relevanceai.com/agents/bcbe5a/5d092a51556d-4cce-b7ce-ecf0bb340836/737f1a3f-7e46-4ebe-8313-78a9323b9d5b/embed-chat"
      },
      isLive: true,
      gradientClass: "bg-gradient-to-br from-purple-500 to-purple-600",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white"
    },
    {
      id: 2,
      title: "LedgerLens",
      subtitle: "Live demo – Instant variance & customer-impact tool",
      description: "Compare two finance CSVs, instantly see what changed, why it matters, and how it affects customers. View clean tables, top-10 charts, and copy ready-to-send executive & customer summaries in under a minute.",
      logo: "/lovable-uploads/c08bc30c-5323-4cbe-b5c7-844f609989cc.png",
      primaryLink: {
        label: "Open Live Demo",
        url: "https://ledgerlens.thesunilkumar.com"
      },
      isLive: true,
      gradientClass: "bg-gradient-to-br from-teal-500 to-teal-600",
      buttonClass: "bg-teal-600 hover:bg-teal-700 text-white"
    },
    {
      id: 3,
      title: "Cloud-Native Microservices",
      subtitle: "Coming Soon - Scalable backend architecture",
      icon: Star
    },
    {
      id: 4,
      title: "Mobile-First Web Application",
      subtitle: "Coming Soon - Responsive user interface",
      icon: Star
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
          {placeholderCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card key={card.id} className={`hover:shadow-lg transition-shadow duration-300 border border-gray-200 group ${
                card.id === 1 ? 'bg-work-rose' : 
                card.id === 2 ? 'bg-work-sky' : 
                card.id === 3 ? 'bg-work-cream' : 'bg-work-lilac'
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-16 h-16 ${card.gradientClass || (card.isLive ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-blue-600')} rounded-full flex items-center justify-center`}>
                    {card.logo ? (
                      <img src={card.logo} alt={`${card.title} logo`} className="h-8 w-8 object-contain" loading="lazy" />
                    ) : (
                      <IconComponent className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base mb-4">
                    {card.subtitle}
                  </CardDescription>
                  
                  {card.description && (
                    <p className="text-sm text-gray-500 mb-4">
                      {card.description}
                    </p>
                  )}
                  
                  {card.primaryLink && (
                    <Button 
                      asChild
                      className={`w-full ${card.buttonClass || (card.isLive ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white')}`}
                      size="sm"
                    >
                      <a 
                        href={card.primaryLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={card.primaryLink.label}
                      >
                        {card.primaryLink.label}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
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
