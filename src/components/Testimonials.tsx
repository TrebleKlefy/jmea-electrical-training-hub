import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-foreground mb-6">
              What Jamaican Electricians Say About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of successful electricians who've advanced their careers with JMEA training
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="card-elevated group hover:scale-105 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-section rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Join Them?
              </h3>
              <p className="text-muted-foreground mb-6">
                Start your journey to becoming a certified Jamaican electrician today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Start Free Trial
                </button>
                <button className="btn-outline">
                  Read More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};