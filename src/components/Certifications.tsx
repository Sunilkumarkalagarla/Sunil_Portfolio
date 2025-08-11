import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: "aws-developer-associate",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services Training and Certification",
    dates: "August 2025 – August 2028",
    badgeSrc: "/certifications/aws-developer-associate.png",
    badgeAlt: "AWS Certified Developer – Associate badge",
    credlyUrl:
      "https://www.credly.com/badges/1bf787c9-afc4-4202-ac27-7c2ddb3e82ae/public_url",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    dates: "April 2025 – April 2028",
    badgeSrc: "/certifications/aws-cloud-practitioner.png",
    badgeAlt: "AWS Certified Cloud Practitioner badge",
    credlyUrl:
      "https://www.credly.com/badges/efacaa30-1855-4eb8-b1be-33e2627d09ff/public_url",
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            AWS credentials earned and valid through the indicated dates.
          </p>
        </header>

        <div className="relative mx-auto max-w-2xl md:max-w-3xl">
          {/* Timeline rail */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <ol className="space-y-8">
            {certifications.map((cert) => (
              <li key={cert.id} className="relative pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-2 top-2 h-6 w-6 rounded-full bg-background border shadow-sm grid place-items-center"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>

                <Card className="overflow-hidden bg-white border-2 border-gold shadow-popup hover:shadow-popup-hover transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <img
                        src={cert.badgeSrc}
                        alt={cert.badgeAlt}
                        loading="lazy"
                        width={64}
                        height={64}
                        className="h-16 w-16 object-contain select-none"
                      />

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cert.issuer}
                        </p>
                        <p className="text-sm mt-2">{cert.dates}</p>

                        <div className="mt-4">
                          <Button asChild aria-label={`View certificate: ${cert.title}`}>
                            <a
                              href={cert.credlyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View certificate
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
