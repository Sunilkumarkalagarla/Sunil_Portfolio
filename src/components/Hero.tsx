
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Sunil Kumar
                <span className="block text-orange-100">Kalagarla</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-3xl leading-relaxed">
                Software Engineer | AI Enthusiast | Full‑Stack Developer
              </p>
              
              <p className="text-lg text-orange-200 mb-12 max-w-2xl">
                Crafting innovative solutions with 3+ years of experience in software development, 
                AI/ML, and full-stack technologies. Passionate about creating impactful digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 transition-all duration-200 hover:scale-105"
                    onClick={() => window.open('https://github.com/Sunilkumarkalagarla/', '_blank')}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 transition-all duration-200 hover:scale-105"
                    onClick={() => window.open('https://www.linkedin.com/in/sunil1249/', '_blank')}
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
                  className="text-white hover:bg-white/20 px-4 py-2"
                  onClick={() => window.open('mailto:ksunilkumar1249@gmail.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  ksunilkumar1249@gmail.com
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-white/20 px-4 py-2"
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
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-white/20 to-white/10 p-3 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-2xl">
                  <img 
                    src="/lovable-uploads/dced660c-c7a8-4ce0-adbd-867aa4fa9405.png"
                    alt="Sunil Kumar Kalagarla" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
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
