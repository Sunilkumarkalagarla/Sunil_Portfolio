
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Experience = () => {
  // Ordered latest (top) to past (bottom): 7 -> 1
  const timeline = [
    {
      title: 'Looking for Full Time opportunities',
      meta: 'Open to Roles | Present | Remote / Relocation',
      location: 'Remote',
      achievements: [] as string[],
      token: 'timeline-green',
      externalLink: 'https://www.linkedin.com/in/sunil1249/'
    },
    {
      title: 'Software Developer',
      company: 'BNY Mellon',
      meta: 'Contract (Internship) | March 2025 - June 2025 | Remote (Hammond, IN)',
      location: 'Remote (Hammond, IN)',
      achievements: [
        "Built Python/FastAPI services for trade execution, reconciliation, and cash management, cutting a key SQL query's latency by 40%",
        'Designed new schemas and stored procedures that handle 15,000+ trades/min while meeting real-time compliance needs',
        'Automated live market-data ingestion with Kafka and Python, giving analysts sub-second updates on pricing and P&L',
        'Strengthened React dashboards and a Jenkins-based CI/CD pipeline, delivering two releases with zero critical defects',
      ],
      token: 'timeline-blue',
    },
    {
      title: 'Research Assistant',
      company: 'Purdue University',
      meta: 'Part Time | Fall 2024 | Hammond, IN',
      location: 'Hammond, IN',
      achievements: [
        'Created serverless AWS Lambda workflows in Python to process high-volume campus transactions with no manual intervention',
        'Automated ETL and Power BI reporting, supplying insights to 50+ users and saving hours of monthly effort',
        'Built RESTful APIs backed by S3 that served 20+ requests/sec, halving data-retrieval time',
        'Tuned MongoDB and managed Git-based collaboration, cutting query latency 50% and streamlining team delivery',
      ],
      token: 'timeline-purple',
    },
    {
      title: 'Resident Assistant',
      company: 'Purdue University',
      meta: 'Full Time | Summer 2023 | Hammond, IN',
      location: 'Hammond, IN',
      achievements: [
        'Served as a Resident Assistant for the University Dorms of Purdue University in Hammond, Indiana during Summer 2023.',
      ],
      token: 'timeline-orange',
    },
    {
      title: 'Community Assistant',
      company: 'Purdue University',
      meta: 'Part Time | Spring 2023 | Hammond, IN',
      location: 'Hammond, IN',
      achievements: [
        'Worked as a Community Assistant at Purdue University Dorms in Hammond, Indiana helping residents of Purdue University during Spring 2023.',
      ],
      token: 'timeline-pink',
    },
    {
      title: 'Software Developer',
      company: 'Dell Technologies',
      meta: 'Full Time | Feb 2021 - Nov 2022 | India',
      location: 'India',
      achievements: [
        'Engineered Python/Django REST APIs for payment and BI systems, trimming response time by 0.5s per request',
        'Cleaned 300+ datasets with Pandas and boosted TensorFlow failure-detection models, improving accuracy and runtime',
        'Automated Tableau reporting and CI/CD pipelines, saving 15 hrs/week and shipping 5+ features per quarter',
        'Designed DynamoDB-backed microservices that served 50+ concurrent users, maintaining high performance under peak loads',
      ],
      token: 'timeline-cyan',
    },
    {
      title: 'Software Developer',
      company: 'Trigent Software',
      meta: 'Internship | Jul 2020 - Jan 2021 | India',
      location: 'India',
      achievements: [
        'Optimized SQL queries and indexing, reducing execution time by 30s across three web apps',
        'Deployed an AWS Redshift warehouse, enabling near-real-time analytics and faster executive reports',
        'Crafted PostgreSQL schemas and triggers to ensure data integrity for daily transactions',
        'Built Excel KPI dashboards with pivot tables and charts, giving stakeholders clear, up-to-date project metrics',
      ],
      token: 'timeline-yellow',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey across roles and industries — latest to past
          </p>
        </header>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-border" aria-hidden="true"></div>

          <div className="space-y-10">
            {timeline.map((item, idx) => {
              const isRight = idx % 2 === 0; // alternate sides

              const Content = (
                <Card
                  className="bg-card text-card-foreground border shadow-sm animate-enter hover-scale text-foreground"
                  style={{ backgroundColor: `hsl(var(--${item.token}))` }}
                >
                  <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {item.title}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.company ? `${item.company} | ${item.meta}` : item.meta}
                      </p>
                    </div>

                    {/* Info action */}
                    <div className="flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {item.externalLink ? (
                              <button
                                aria-label="View LinkedIn"
                                className="p-2 rounded-md border bg-white text-foreground hover:bg-white/80"
                                onClick={() => window.open(item.externalLink!, '_blank', 'noopener,noreferrer')}
                                style={{ borderColor: `hsl(var(--${item.token}))` }}
                              >
                                <Info className="w-5 h-5" />
                              </button>
                            ) : (
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button
                                    aria-label="View details"
                                className="p-2 rounded-md border bg-white text-foreground hover:bg-white/80"
                                style={{ borderColor: `hsl(var(--${item.token}))` }}
                                  >
                                    <Info className="w-5 h-5" />
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                  {item.achievements && item.achievements.length > 0 ? (
                                    <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                                      {item.achievements.map((a, i) => (
                                        <li key={i}>{a}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-sm text-muted-foreground">Details coming soon.</p>
                                  )}
                                </PopoverContent>
                              </Popover>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            {item.externalLink ? 'View LinkedIn' : 'Click for details'}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.location && (
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    )}
                  </CardContent>
                </Card>
              );

              return (
                <div key={idx} className="relative">
                  {/* timeline dot */}
                  <div
                    className="absolute left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-background"
                    style={{ backgroundColor: `hsl(var(--${item.token}))` }}
                    aria-hidden="true"
                  />

                  <div className={`md:w-1/2 ${isRight ? 'md:pl-8 md:ml-auto' : 'md:pr-8 md:mr-auto'}`}>
                    {Content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
