import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { plans } from '@/data/plans';

const Plans = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-section-title text-primary mb-4">
              Choose Your Training Plan
            </h1>
            <p className="text-xl text-muted-foreground">
              Start your electrical training journey with JMEA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`card-elevated relative ${
                  plan.popular ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        /{plan.period === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <p className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">${plan.originalPrice}</span>
                        <span className="text-secondary font-medium ml-2">
                          Save ${plan.originalPrice - plan.price}
                        </span>
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'btn-hero' : 'btn-outline'}`}
                    onClick={() => window.open(`https://jmea-training.com/subscribe/${plan.id}`, '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include 30-day money-back guarantee
            </p>
            <p className="text-sm text-muted-foreground">
              Questions? <a href="#contact" className="nav-link">Contact our team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;