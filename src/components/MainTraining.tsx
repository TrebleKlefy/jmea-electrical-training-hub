import { CheckCircle, BookOpen, Zap, Shield, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MainTraining = () => {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Help with electrical problems on service calls",
      description: "Real-world troubleshooting techniques for Jamaican electrical systems"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning more about electrical wiring to Jamaican standards",
      description: "Complete coverage of local building codes and installation practices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "JPS code and theory knowledge",
      description: "Deep dive into Jamaica Public Service standards and requirements"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety protocols for tropical conditions",
      description: "Hurricane-season safety, humidity considerations, and climate-specific practices"
    }
  ];

  const courseHighlights = [
    "500+ Interactive Video Lessons",
    "Real Jamaican Electrical Scenarios", 
    "Mobile-Friendly Platform",
    "Progress Tracking & Badges",
    "Expert JPS Instructor Support",
    "Hurricane Season Safety Modules"
  ];

  return (
    <section id="training" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-primary mb-4">
              Add Knowledge to Your Skill
            </h2>
            <h3 className="text-section-subtitle text-foreground mb-6">
              Online Electrician Training
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Bringing electrician training online in Jamaica! We've built a platform with hundreds of videos on everything from electrical theory and JPS standards, to installation and troubleshooting, to safety, tools, materials and more. Rack up points and earn badges while you learn!
            </p>
          </div>
          
          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card-elevated group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Course Highlights */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What Makes Our Training Different?
              </h3>
              <div className="space-y-4">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="btn-hero">
                  Explore Training Modules
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-hero">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    Start Your Journey Today
                  </h4>
                  <p className="text-muted-foreground">
                    Join hundreds of Jamaican electricians advancing their careers with our comprehensive training platform.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">7-Day Free Trial</div>
                    <div className="text-sm text-muted-foreground">No credit card required</div>
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