
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Sunil Kumar Kalagarla</h3>
            <p className="text-white mb-6 max-w-md font-medium">
              Software Engineer passionate about creating innovative solutions and meaningful digital experiences. 
              Always excited to take on new challenges and collaborate on impactful projects.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://github.com/Sunilkumarkalagarla/', '_blank', 'noopener,noreferrer')}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/sunil1249/', '_blank', 'noopener,noreferrer')}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={() => window.open('mailto:ksunilkumar1249@gmail.com')}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                title="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={() => window.open('tel:+12199160571')}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                title="Phone"
              >
                <Phone className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Certifications', 'Featured Work', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase().replace(' ', '-')}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm font-medium">
            © {currentYear} Sunil Kumar Kalagarla. All rights reserved.
          </p>
          <p className="text-white text-sm mt-4 md:mt-0 font-medium">
            Greater Chicago, USA | Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
