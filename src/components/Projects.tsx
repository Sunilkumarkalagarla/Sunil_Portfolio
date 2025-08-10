import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management application using machine learning to predict task completion times and optimize scheduling.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing large datasets with real-time updates and customizable charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "D3.js", "Express", "MySQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking with social features and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Weather Prediction API",
      description: "RESTful API for weather prediction using machine learning models trained on historical data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["Python", "FastAPI", "Scikit-learn", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology ensuring election integrity.",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=250&fit=crop",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    className="flex-1"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                     onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-32 object-cover"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-gray-900">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                    className="flex-1 text-xs"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
