export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  modules: number;
  image: string;
  features: string[];
  learningOutcomes: string[];
  category: string;
}

export const courses: Course[] = [
  {
    id: 'electrical-fundamentals',
    title: 'Electrical Fundamentals for Jamaica',
    description: 'Master the basics of electrical theory with Jamaica-specific applications and JPS standards.',
    duration: '40 hours',
    level: 'Beginner',
    price: 299,
    modules: 12,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=250&fit=crop',
    features: [
      'JPS Voltage Standards (110V/220V)',
      'Ohm\'s Law Applications',
      'Circuit Analysis',
      'Safety Protocols for Caribbean Climate',
      'Hands-on Virtual Labs',
      'Mobile-friendly Platform'
    ],
    learningOutcomes: [
      'Understand Jamaica\'s electrical grid system',
      'Perform basic electrical calculations',
      'Identify safety hazards in tropical conditions',
      'Read electrical diagrams and schematics'
    ],
    category: 'Foundation'
  },
  {
    id: 'residential-wiring',
    title: 'Residential Wiring Standards Jamaica',
    description: 'Complete guide to residential electrical installations following Jamaican building codes.',
    duration: '60 hours',
    level: 'Intermediate',
    price: 449,
    modules: 16,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop',
    features: [
      'Jamaican Building Code Compliance',
      'Hurricane-resistant Installation Methods',
      'Service Panel Setup',
      'GFCI Requirements for Tropical Homes',
      'Ceiling Fan Installation',
      'Pool and Spa Electrical Systems'
    ],
    learningOutcomes: [
      'Install residential electrical systems safely',
      'Meet all Jamaican electrical code requirements',
      'Handle hurricane season preparations',
      'Troubleshoot common residential issues'
    ],
    category: 'Residential'
  },
  {
    id: 'commercial-electrical',
    title: 'Commercial Electrical Systems Jamaica',
    description: 'Advanced training for commercial electrical installations and maintenance in Jamaica.',
    duration: '80 hours',
    level: 'Advanced',
    price: 699,
    modules: 20,
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&h=250&fit=crop',
    features: [
      'Three-Phase Systems',
      'Motor Control Centers',
      'Emergency Power Systems',
      'JPS Interconnection Requirements',
      'Load Calculations',
      'Power Factor Correction'
    ],
    learningOutcomes: [
      'Design commercial electrical systems',
      'Manage large-scale electrical projects',
      'Ensure JPS compliance for businesses',
      'Implement energy-efficient solutions'
    ],
    category: 'Commercial'
  },
  {
    id: 'solar-installation',
    title: 'Solar Energy Systems Jamaica',
    description: 'Comprehensive training on solar panel installation and grid-tied systems in Jamaica.',
    duration: '50 hours',
    level: 'Intermediate',
    price: 549,
    modules: 14,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop',
    features: [
      'Grid-tied Solar Systems',
      'Battery Storage Solutions',
      'JPS Net Billing Program',
      'Solar Panel Mounting (Hurricane Considerations)',
      'Inverter Selection and Setup',
      'System Monitoring and Maintenance'
    ],
    learningOutcomes: [
      'Install residential and commercial solar systems',
      'Navigate JPS interconnection process',
      'Design systems for Caribbean weather',
      'Maximize solar energy efficiency'
    ],
    category: 'Renewable Energy'
  },
  {
    id: 'electrical-safety',
    title: 'Electrical Safety in Tropical Conditions',
    description: 'Specialized safety training for electrical work in Jamaica\'s unique climate and conditions.',
    duration: '30 hours',
    level: 'Beginner',
    price: 199,
    modules: 10,
    image: 'https://images.unsplash.com/photo-1609592207777-b9fdd9a8de91?w=400&h=250&fit=crop',
    features: [
      'Hurricane Season Safety Protocols',
      'High Humidity Considerations',
      'Lightning Protection Systems',
      'Arc Flash Analysis',
      'Personal Protective Equipment',
      'Emergency Response Procedures'
    ],
    learningOutcomes: [
      'Implement comprehensive safety protocols',
      'Handle electrical emergencies effectively',
      'Protect against weather-related hazards',
      'Meet OSHA and local safety standards'
    ],
    category: 'Safety'
  },
  {
    id: 'motor-controls',
    title: 'Motor Controls and Automation',
    description: 'Advanced training on motor control systems and industrial automation for Jamaican applications.',
    duration: '70 hours',
    level: 'Advanced',
    price: 649,
    modules: 18,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop',
    features: [
      'PLC Programming Basics',
      'Variable Frequency Drives',
      'Contactor and Relay Systems',
      'Sensor Integration',
      'SCADA Systems',
      'Troubleshooting Techniques'
    ],
    learningOutcomes: [
      'Program and maintain PLCs',
      'Install and configure VFDs',
      'Design automated control systems',
      'Troubleshoot complex motor systems'
    ],
    category: 'Industrial'
  }
];

export const courseCategories = [
  'All Courses',
  'Foundation',
  'Residential', 
  'Commercial',
  'Renewable Energy',
  'Safety',
  'Industrial'
];