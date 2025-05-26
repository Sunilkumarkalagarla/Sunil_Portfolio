
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "BNY Mellon",
      period: "Mar 2025 - Present",
      location: "Indiana, USA",
      description: "Built Python/FastAPI services for trade execution, reconciliation, and cash management.",
      achievements: [
        "Built Python/FastAPI services for trade execution, reconciliation, and cash management, cutting a key SQL query's latency by 40%",
        "Designed new schemas and stored procedures that handle 15,000+ trades/min while meeting real-time compliance needs",
        "Automated live market-data ingestion with Kafka and Python, giving analysts sub-second updates on pricing and P&L",
        "Strengthened React dashboards and a Jenkins-based CI/CD pipeline, delivering two releases with zero critical defects"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Python Developer (Research Assistant)",
      company: "Purdue University",
      period: "Sep 2024 - Dec 2024",
      location: "Indiana, USA",
      description: "Created serverless AWS Lambda workflows in Python to process high-volume campus transactions.",
      achievements: [
        "Created serverless AWS Lambda workflows in Python to process high-volume campus transactions with no manual intervention",
        "Automated ETL and Power BI reporting, supplying insights to 50+ users and saving hours of monthly effort",
        "Built RESTful APIs backed by S3 that served 20+ requests/sec, halving data-retrieval time",
        "Tuned MongoDB and managed Git-based collaboration, cutting query latency 50% and streamlining team delivery"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Software Developer",
      company: "Dell Technologies",
      period: "Feb 2021 - Nov 2022",
      location: "India",
      description: "Engineered Python/Django REST APIs for payment and BI systems.",
      achievements: [
        "Engineered Python/Django REST APIs for payment and BI systems, trimming response time by 0.5s per request",
        "Cleaned 300+ datasets with Pandas and boosted TensorFlow failure-detection models, improving accuracy and runtime",
        "Automated Tableau reporting and CI/CD pipelines, saving 15 hrs/week and shipping 5+ features per quarter",
        "Designed DynamoDB-backed microservices that served 50+ concurrent users, maintaining high performance under peak loads"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Software Developer Intern",
      company: "Trigent Software",
      period: "Jul 2020 - Jan 2021",
      location: "India",
      description: "Optimized SQL queries and indexing, reducing execution time across web applications.",
      achievements: [
        "Optimized SQL queries and indexing, reducing execution time by 30s across three web apps",
        "Deployed an AWS Redshift warehouse, enabling near-real-time analytics and faster executive reports",
        "Crafted PostgreSQL schemas and triggers to ensure data integrity for daily transactions",
        "Built Excel KPI dashboards with pivot tables and charts, giving stakeholders clear, up-to-date project metrics"
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
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{exp.company}</span>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 italic">{exp.location}</span>
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
