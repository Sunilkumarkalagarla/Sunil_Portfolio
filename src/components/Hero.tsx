
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sunil Kumar
            <span className="block text-blue-600">Kalagarla</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer | AI Enthusiast | Full‑Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Crafting innovative solutions with 3+ years of experience in software development, 
            AI/ML, and full-stack technologies. Passionate about creating impactful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:border-gray-400 px-6 py-3 transition-all duration-200 hover:scale-105"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:border-gray-400 px-6 py-3 transition-all duration-200 hover:scale-105"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
