
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Mail, MessageCircle, ExternalLink, Play } from 'lucide-react';

const FeaturedWork = () => {
  const placeholderCards = [
    {
      id: 1,
      title: "Pre-Call Prep AI Agent",
      subtitle: "Live demo – 60-second prospect briefing tool",
      description: "Built on Relevance AI. Paste a company website URL and a decision-maker's LinkedIn URL, get an instant brief with company snapshot, recent news, role context, and tailored talking points.",
      icon: MessageCircle,
      primaryLink: {
        label: "Try the Live Agent",
        url: "https://app.relevanceai.com/agents/bcbe5a/5d092a51556d-4cce-b7ce-ecf0bb340836/737f1a3f-7e46-4ebe-8313-78a9323b9d5b/embed-chat"
      },
      secondaryLink: {
        label: "Watch Demo Video",
        action: "video" // We'll handle this as a placeholder for now
      },
      isLive: true
    },
    {
      id: 2,
      title: "Automated Email Sending Tool",
      subtitle: "Coming Soon - To automate and make your job search easier",
      icon: Mail
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

  const handleVideoDemo = () => {
    // Placeholder for video demo functionality
    alert("Demo video functionality would open here");
  };

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
              <Card key={card.id} className="hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200 group">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 w-16 h-16 ${card.isLive ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'} rounded-full flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
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
                    <p className="text-sm text-gray-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.description}
                    </p>
                  )}
                  
                  {card.primaryLink && (
                    <div className="space-y-2">
                      <Button 
                        asChild
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
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
                      
                      {card.secondaryLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={handleVideoDemo}
                          aria-label={card.secondaryLink.label}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          {card.secondaryLink.label}
                        </Button>
                      )}
                    </div>
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
