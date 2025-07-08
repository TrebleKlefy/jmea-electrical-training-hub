import { Building2, Users, BarChart3, Shield, MapPin, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BusinessSolutions = () => {
  const businessFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-location training management",
      description: "Manage training across all your sites from Kingston to Montego Bay"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Progress tracking for teams", 
      description: "Real-time dashboards showing team progress and completion rates"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Jamaican-specific electrical standards",
      description: "Training content tailored to local codes and JPS requirements"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "JPS compliance training",
      description: "Ensure your team meets all Jamaica Public Service standards"
    }
  ];

  const businessStats = [
    { number: "50+", label: "Companies Trust JMEA", icon: <Building2 className="w-5 h-5" /> },
    { number: "1000+", label: "Employees Trained", icon: <Users className="w-5 h-5" /> },
    { number: "95%", label: "Completion Rate", icon: <BarChart3 className="w-5 h-5" /> },
    { number: "20+", label: "Parishes Covered", icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <section id="business" className="py-20 bg-jmea-red/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-section-title text-foreground mb-6">
              Own an Electrical Business in Jamaica?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Our Learning System for Jamaican Businesses is designed to integrate training for all your technicians across the island. 
              Scale your workforce education while ensuring compliance with local standards.
            </p>
          </div>

          {/* Business Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {businessStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-card border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Why Choose JMEA for Your Business?
              </h3>
              <div className="space-y-6">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-secondary">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-hero border border-border">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Transform Your Team's Skills
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get a custom training solution designed for your business needs across Jamaica.
                </p>
              </div>

              {/* Pricing Tiers */}
              <div className="space-y-4 mb-8">
                <div className="bg-card/80 rounded-lg p-4 border border-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-foreground">Starter</div>
                      <div className="text-sm text-muted-foreground">5-25 employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">$15</div>
                      <div className="text-xs text-muted-foreground">per user/month</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/10 rounded-lg p-4 border-2 border-secondary relative">
                  <div className="absolute -top-2 left-4 bg-secondary text-white text-xs px-2 py-1 rounded">Popular</div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-foreground">Professional</div>
                      <div className="text-sm text-muted-foreground">26-100 employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-secondary">$12</div>
                      <div className="text-xs text-muted-foreground">per user/month</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card/80 rounded-lg p-4 border border-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-foreground">Enterprise</div>
                      <div className="text-sm text-muted-foreground">100+ employees</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">Custom</div>
                      <div className="text-xs text-muted-foreground">Contact us</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="btn-hero w-full">
                  Schedule Demo
                </Button>
                <Button variant="outline" className="btn-outline w-full">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};