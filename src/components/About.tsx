
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                I'm a passionate Software Engineer with an M.S. in Computer Science from 
                Purdue University Northwest and over 3 years of hands-on experience in 
                developing scalable software solutions.
              </p>
              
              <p className="mb-6">
                My expertise spans across full-stack development, artificial intelligence, 
                and cloud technologies. I've had the privilege of working with industry 
                leaders like BNY Mellon and Dell, where I've contributed to mission-critical 
                applications serving millions of users.
              </p>
              
              <p className="mb-6">
                When I'm not coding, you'll find me in the kitchen experimenting with new 
                recipes and cooking techniques. I believe that creativity in cooking 
                translates beautifully to problem-solving in software development.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600">M.S. Computer Science<br />Purdue University Northwest</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Hammond, Indiana, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/259c05e1-878d-472d-89e8-65275ee6c50b.png"
                    alt="Sunil Kumar Kalagarla Graduation" 
                    className="w-full h-full object-cover object-center scale-110 rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                🎓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
