
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "BNY Mellon",
      period: "2022 - Present",
      description: "Developed and maintained enterprise-level financial applications serving millions of users.",
      achievements: [
        "Built scalable microservices using Java Spring Boot and React",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Led cross-functional team of 5 developers on critical projects",
        "Optimized database queries improving system performance by 40%"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Full Stack Developer",
      company: "Dell Technologies",
      period: "2021 - 2022",
      description: "Worked on cloud infrastructure and automation tools for enterprise clients.",
      achievements: [
        "Developed cloud-native applications using AWS and Kubernetes",
        "Created automated testing frameworks increasing code coverage to 95%",
        "Collaborated with DevOps team to streamline deployment processes",
        "Mentored junior developers and conducted code reviews"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Research Assistant",
      company: "Purdue University Northwest",
      period: "2020 - 2021",
      description: "Conducted research in machine learning and artificial intelligence applications.",
      achievements: [
        "Published research on neural network optimization techniques",
        "Developed ML models for predictive analytics with 92% accuracy",
        "Assisted in teaching computer science courses to 100+ students",
        "Collaborated on NSF-funded research projects"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Software Developer Intern",
      company: "Trigent Software",
      period: "2019 - 2020",
      description: "Gained hands-on experience in web development and software engineering practices.",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Participated in agile development methodologies",
        "Contributed to client projects with strict deadlines",
        "Learned industry best practices for software development"
      ],
      color: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles has equipped me with diverse skills and perspectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`${exp.color} transition-all duration-300 hover:shadow-lg hover:scale-105`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {exp.title}
                </CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">{exp.company}</span>
                  <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
