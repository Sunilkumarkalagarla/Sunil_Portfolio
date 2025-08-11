import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Experience = () => {
  const timeline = [
    {
      title: "Software Development Engineer",
      company: "BNY Mellon",
      meta: "August 2023 – Present | Full-time",
      location: "Pittsburgh, PA, USA",
      achievements: [
        "Enhanced ETL workflows and data pipelines for high-frequency trading systems, improving processing efficiency by 30%",
        "Developed automated testing frameworks reducing deployment time by 40% and improving code quality",
        "Collaborated with cross-functional teams to optimize system performance and implement scalable solutions"
      ],
      token: "green",
      externalLink: "https://www.linkedin.com/in/sunil1249/"
    },
    {
      title: "Software Development Engineer",
      company: "Dell Technologies",
      meta: "June 2022 – August 2023 | Full-time",
      location: "Round Rock, TX, USA",
      achievements: [
        "Built scalable microservices architecture handling 10,000+ daily transactions with 99.9% uptime",
        "Implemented comprehensive monitoring and alerting systems reducing incident response time by 50%",
        "Led migration of legacy systems to cloud-native solutions, improving system reliability and reducing costs"
      ],
      token: "blue"
    },
    {
      title: "Graduate Research Assistant",
      company: "Purdue University Northwest",
      meta: "August 2021 – May 2022 | Part-time",
      location: "Hammond, IN, USA",
      achievements: [
        "Conducted research on machine learning algorithms for data analysis and pattern recognition",
        "Published findings in academic conferences and contributed to research publications",
        "Mentored undergraduate students in computer science projects and coursework"
      ],
      token: "purple"
    },
    {
      title: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      meta: "May 2021 – August 2021 | Internship",
      location: "Chicago, IL, USA",
      achievements: [
        "Developed web applications using modern frameworks and technologies",
        "Participated in Agile development processes and code review sessions",
        "Contributed to improving development workflows and documentation"
      ],
      token: "orange"
    },
    {
      title: "Teaching Assistant",
      company: "Purdue University Northwest",
      meta: "January 2021 – May 2022 | Part-time",
      location: "Hammond, IN, USA",
      achievements: [
        "Assisted in teaching computer science courses and lab sessions",
        "Provided tutoring and academic support to undergraduate students",
        "Developed educational materials and assessment tools"
      ],
      token: "pink"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in software development, from internships to full-time engineering roles
          </p>
        </div>

        {/* Timeline Content - Compact Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, index) => {
            const backgroundColor = `hsl(var(--timeline-${item.token}))`;
            const borderColor = `hsl(var(--timeline-${item.token}))`;
            
            return (
              <div key={index} className="relative flex items-start space-x-4">
                {/* Timeline dot */}
                <div 
                  className="flex-shrink-0 w-4 h-4 rounded-full border-2 mt-2"
                  style={{ backgroundColor: borderColor, borderColor: borderColor }}
                ></div>
                
                {/* Vertical line (except for last item) */}
                {index < timeline.length - 1 && (
                  <div 
                    className="absolute left-2 top-6 w-0.5 h-16 opacity-30"
                    style={{ backgroundColor: borderColor }}
                  ></div>
                )}
                
                {/* Content */}
                <Card className="flex-1 max-w-2xl bg-white border-2 border-gold shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1 text-black">
                  <CardHeader className="flex flex-row items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg font-bold">
                        {item.title}
                      </CardTitle>
                      <p className="mt-1 text-sm opacity-80">
                        {item.company ? `${item.company} | ${item.meta}` : item.meta}
                      </p>
                      <p className="text-sm opacity-70">{item.location}</p>
                    </div>

                    {/* Info action */}
                    <div className="flex items-center ml-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {item.externalLink ? (
                              <button
                                aria-label="View LinkedIn"
                                className="p-2 rounded-md border-2 border-gold bg-white text-foreground hover:bg-gold/10"
                                onClick={() => window.open(item.externalLink!, '_blank', 'noopener,noreferrer')}
                              >
                                <Info className="w-5 h-5" />
                              </button>
                            ) : (
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button
                                    aria-label="View details"
                                    className="p-2 rounded-md border-2 border-gold bg-white text-foreground hover:bg-gold/10"
                                  >
                                    <Info className="w-5 h-5" />
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                  <div className="grid gap-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium leading-none">{item.title}</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {item.company ? `${item.company} | ${item.meta}` : item.meta}
                                      </p>
                                    </div>
                                    <div className="space-y-2">
                                      <h4 className="font-medium leading-none">Key Achievements</h4>
                                      <ul className="text-sm text-muted-foreground space-y-1">
                                        {item.achievements.map((achievement, achievementIndex) => (
                                          <li key={achievementIndex} className="flex items-start gap-2">
                                            <span className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"></span>
                                            {achievement}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </PopoverContent>
                              </Popover>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.externalLink ? 'View on LinkedIn' : 'View achievements'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;