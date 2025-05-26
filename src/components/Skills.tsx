
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-blue-500",
      skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      color: "bg-green-500",
      skills: ["Node.js", "Python", "Java", "Spring Boot", "Express.js", "FastAPI"]
    },
    {
      title: "Database",
      color: "bg-purple-500",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
    },
    {
      title: "Cloud & DevOps",
      color: "bg-orange-500",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"]
    },
    {
      title: "AI & Data",
      color: "bg-pink-500",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenAI API"]
    },
    {
      title: "Tools & Others",
      color: "bg-indigo-500",
      skills: ["Git", "Linux", "Agile", "REST APIs", "GraphQL", "Microservices"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">90%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert</h4>
              <p className="text-gray-600 text-sm">React, JavaScript, Python, Node.js</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">80%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced</h4>
              <p className="text-gray-600 text-sm">Java, AWS, Docker, PostgreSQL</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Intermediate</h4>
              <p className="text-gray-600 text-sm">Kubernetes, TensorFlow, Vue.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
