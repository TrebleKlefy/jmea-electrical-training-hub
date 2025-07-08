import { GraduationCap, Award, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContinuingEducation = () => {
  const ceFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "JPS Approved CE Credits",
      description: "All courses approved for Jamaica continuing education requirements"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Complete courses at your own pace, perfect for busy electricians"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Annual Compliance",
      description: "Stay current with changing Jamaican electrical codes and standards"
    }
  ];

  const ceModules = [
    "2024 Jamaican Electrical Code Updates",
    "Hurricane Season Electrical Safety",
    "Solar Integration Best Practices", 
    "JPS Interconnection Standards",
    "Workplace Safety & OSHA Compliance",
    "Energy Efficiency for Caribbean Climate"
  ];

  return (
    <section id="continuing-education" className="py-20 bg-jmea-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-primary mb-4">Keep Your License</h2>
            <h3 className="text-section-subtitle text-foreground mb-6">Continuing Education</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're approved for continuing education requirements in Jamaica. Rather than boring presentations, 
              we've created engaging videos that teach practical information relevant to Jamaican electrical work.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ceFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    2024 CE Course Catalog
                  </h3>
                </div>
                
                <div className="space-y-3 mb-8">
                  {ceModules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{module}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-hero"
                    onClick={() => window.open('https://jmea-training.com/continuing-education', '_blank')}
                  >
                    View CE Courses
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-outline"
                    onClick={() => window.open('https://jmea-training.com/catalog.pdf', '_blank')}
                  >
                    Download Catalog
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-section rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="w-12 h-12 text-secondary" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Stay Compliant
                  </h4>
                  
                  <p className="text-muted-foreground mb-6">
                    Complete your required CE hours with courses designed specifically for Jamaican electricians.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-card/80 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">16 Hours</div>
                      <div className="text-sm text-muted-foreground">Required annually</div>
                    </div>
                    <div className="bg-card/80 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary">$199</div>
                      <div className="text-sm text-muted-foreground">Complete package</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};