
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Sunil Kumar
                <span className="block text-blue-600">Kalagarla</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Software Engineer | AI Enthusiast | Full‑Stack Developer
              </p>
              
              <p className="text-lg text-gray-500 mb-12 max-w-2xl">
                Crafting innovative solutions with 3+ years of experience in software development, 
                AI/ML, and full-stack technologies. Passionate about creating impactful digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 transition-all duration-200 hover:scale-105"
                    onClick={() => window.open('https://github.com/Sunilkumarkalagarla/', '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 transition-all duration-200 hover:scale-105"
                    onClick={() => window.open('https://www.linkedin.com/in/sunil1249/', '_blank', 'noopener,noreferrer')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 px-4 py-2"
                  onClick={() => window.open('mailto:ksunilkumar1249@gmail.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  ksunilkumar1249@gmail.com
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-600 hover:bg-gray-100 px-4 py-2"
                  onClick={() => window.open('tel:+12199160571')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +1 (219) 916-0571
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-3 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src="/lovable-uploads/db6a59da-1b5a-4e8b-a5da-431b2bf7f2d6.png"
                    alt="Sunil Kumar Kalagarla" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
