import { Building2, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CourseCategories = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-section-title text-primary mb-4">
              Choose Your Path
            </h1>
            <p className="text-xl text-muted-foreground">
              Select the training category that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Category */}
            <div className="card-elevated group hover:scale-105 transition-all duration-300">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  For Business
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Comprehensive training solutions for electrical companies across Jamaica. 
                  Manage teams, track progress, and ensure compliance.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Multi-location team management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Progress tracking & reporting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">JPS compliance training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground">Bulk pricing options</span>
                  </li>
                </ul>
                
                <Link to="/courses">
                  <Button className="btn-hero w-full group">
                    View Business Courses
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Individual Category */}
            <div className="card-elevated group hover:scale-105 transition-all duration-300">
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-section rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-primary" />
                </div>
                
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  For Individuals
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Personal development courses for electricians looking to advance 
                  their skills and career in Jamaica's electrical industry.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Self-paced learning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Mobile-friendly platform</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Lifetime access</span>
                  </li>
                </ul>
                
                <Link to="/courses">
                  <Button className="btn-outline w-full group">
                    View Individual Courses
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Not sure which path is right for you? 
              <Link to="/contact" className="nav-link ml-1">Contact our team</Link> for guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;