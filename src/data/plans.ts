export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: 'monthly' | 'yearly';
  features: string[];
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'monthly-plan',
    name: 'Monthly Access',
    price: 49,
    period: 'monthly',
    features: [
      'Access to all courses',
      'Practice exams',
      'Mobile app access',
      'Certificate of completion',
      'Email support'
    ]
  },
  {
    id: 'yearly-plan',
    name: 'Yearly Access',
    price: 399,
    originalPrice: 588,
    period: 'yearly',
    popular: true,
    features: [
      'Everything in Monthly',
      'Save $189 per year',
      'Priority support',
      'Offline course downloads',
      'Advanced progress tracking',
      '1-on-1 consultation session'
    ]
  }
];