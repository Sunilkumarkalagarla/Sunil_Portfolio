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
            <div className="bg-white border-2 border-gold rounded-lg p-8 shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1">
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I'm <span className="font-semibold text-black">Sunil Kumar Kalagarla</span>, a software developer with 3 years of experience building scalable, AI-driven, and cloud-native solutions for leading organizations including <span className="font-semibold text-red-700">BNY Mellon</span>, <span className="font-semibold text-blue-700">Dell Technologies</span>, and <span className="font-semibold text-green-700">Purdue University</span>. My work spans backend systems, real-time data pipelines, API development, and intuitive front-end dashboards—powered by <span className="font-semibold text-blue-800">Python</span>, <span className="font-semibold text-blue-600">React</span>, and <span className="font-semibold text-orange-600">AWS</span>. From optimizing <span className="font-semibold text-green-600">MongoDB</span> queries to architecting serverless workflows on <span className="font-semibold text-orange-700">AWS Lambda</span>, I thrive at transforming complex technical challenges into efficient, impactful solutions. An <span className="font-semibold text-orange-500">AWS Certified Developer</span> and <span className="font-semibold text-purple-600">Cloud Practitioner</span>, I bring a practical, problem-solving mindset, blending strong coding expertise with a deep understanding of cloud architecture to deliver results that matter.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <p className="text-gray-600">M.S. Computer Science<br />Purdue University Northwest</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Hammond, IN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative bg-white border-2 border-gold rounded-full p-6 shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1">
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
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl border-2 border-gold">
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