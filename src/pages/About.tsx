import { Award, Users, Target, Heart, Zap, Shield } from 'lucide-react';
import MainLayout from '@/components/MainLayout'; // Import MainLayout

const About = () => {
  const stats = [
    { number: '5,000+', label: 'Students Trained' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '100%', label: 'Jamaica Focused' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in electrical education and training.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a stronger electrical workforce across Jamaica through collaboration.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging technology to make quality training accessible to all Jamaicans.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Prioritizing safety in every aspect of electrical work and training.'
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About JMEA</h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering Jamaica's electrical workforce through world-class training and education
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-section-title text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  The Jamaica Electrical Association (JMEA) is dedicated to advancing the electrical trade 
                  in Jamaica through comprehensive training, professional development, and industry advocacy. 
                  We bridge the gap between theoretical knowledge and practical application.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our hands-on approach ensures that every electrician trained through JMEA is equipped 
                  with the skills, knowledge, and confidence to excel in Jamaica's unique electrical environment.
                </p>
              </div>
              <div className="bg-gradient-section rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose JMEA?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-secondary" />
                    <span className="text-foreground">JPS Approved Training Programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-secondary" />
                    <span className="text-foreground">Expert Jamaican Instructors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-secondary" />
                    <span className="text-foreground">Industry-Relevant Curriculum</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-secondary" />
                    <span className="text-foreground">Cutting-Edge Technology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Impact by the Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-section-title text-center text-primary mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-section-title text-primary mb-6">
              Led by Industry Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our team combines decades of electrical experience with modern educational techniques 
              to deliver training that makes a real difference in your career.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Marcus Thompson',
                  role: 'Chief Electrical Instructor',
                  experience: '20+ years in Jamaican electrical industry'
                },
                {
                  name: 'Keisha Williams',
                  role: 'Safety Training Director', 
                  experience: 'Former JPS Senior Engineer'
                },
                {
                  name: 'Devon Clarke',
                  role: 'Curriculum Development Lead',
                  experience: 'Master Electrician & Educator'
                }
              ].map((member, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-card">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </MainLayout>
  );
};

export default About;