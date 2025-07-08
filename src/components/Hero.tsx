import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-section overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--blue-light))_0%,transparent_50%)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--red-light))_0%,transparent_50%)] opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-jmea-blue/10 text-jmea-blue px-4 py-2 rounded-full mb-8 border border-jmea-blue/20">
            <Zap size={16} />
            <span className="text-sm font-medium">Jamaica's Premier Electrical Training Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero mb-8">
            <span className="block text-foreground">Our Hands Look Like Yours</span>
            <span className="block text-primary mt-2">We Teach | Train | Know | Are</span>
            <span className="block text-secondary mt-2">Jamaican Electricians</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Online electrician training for Jamaica, anytime, at your own pace. Master JPS standards, 
            safety protocols, and the latest electrical techniques with courses designed by Jamaican experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="btn-hero group text-lg px-10 py-6"
              onClick={() => window.open('https://jmea-training.com/courses', '_blank')}
            >
              Start Training Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline text-lg px-10 py-6 group"
              onClick={() => window.open('https://jmea-training.com/demo', '_blank')}
            >
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Video Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Pass Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};