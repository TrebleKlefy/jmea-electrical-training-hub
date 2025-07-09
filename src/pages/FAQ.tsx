import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import MainLayout from '@/components/MainLayout'; // Import MainLayout

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is JMEA?',
          answer: 'JMEA (Jamaica Electrical Association) is the leading provider of electrical training and education in Jamaica. We offer comprehensive courses designed specifically for the Jamaican electrical industry, covering everything from basic electrical theory to advanced JPS standards.'
        },
        {
          question: 'Are JMEA courses recognized in Jamaica?',
          answer: 'Yes, all JMEA courses are approved by Jamaica Public Service (JPS) and meet local electrical standards. Our certificates are recognized by major electrical companies and contractors across Jamaica.'
        },
        {
          question: 'Can I access courses on mobile devices?',
          answer: 'Absolutely! Our platform is fully mobile-responsive and we also offer a dedicated mobile app for iOS and Android. You can learn on-the-go, even with limited internet connectivity.'
        }
      ]
    },
    {
      category: 'Courses & Training',
      questions: [
        {
          question: 'What types of courses do you offer?',
          answer: 'We offer a wide range of courses including Electrical Fundamentals, Residential Wiring, Commercial Systems, Solar Installation, Safety Training, and Motor Controls. All courses are tailored for Jamaican electrical standards and conditions.'
        },
        {
          question: 'How long does it take to complete a course?',
          answer: 'Course duration varies from 30 hours (safety courses) to 80 hours (advanced commercial systems). You can learn at your own pace, and most students complete courses within 4-12 weeks depending on their schedule.'
        },
        {
          question: 'Do I get a certificate after completing a course?',
          answer: 'Yes, you receive a digital certificate of completion for each course. These certificates are recognized by JPS and major electrical employers in Jamaica.'
        },
        {
          question: 'Are there practice exams available?',
          answer: 'Yes, practice exams are included with all course purchases at no additional cost. These help you prepare for licensing exams and identify areas for improvement.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'What are your pricing options?',
          answer: 'We offer both individual course purchases ($199-$699) and subscription plans. Monthly plans start at $49/month and yearly plans at $399/year with significant savings.'
        },
        {
          question: 'Do you offer discounts for businesses?',
          answer: 'Yes, we offer special pricing for businesses training multiple employees. Contact our team for custom quotes based on your team size and training needs.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, and online banking. Payment is processed securely through our encrypted payment system.'
        },
        {
          question: 'Is there a money-back guarantee?',
          answer: 'Yes, we offer a 30-day money-back guarantee on all purchases. If you\'re not satisfied with your training experience, we\'ll provide a full refund.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'What if I have technical issues with the platform?',
          answer: 'Our technical support team is available Monday-Friday 8AM-6PM and Saturday 9AM-2PM. You can reach us via email at support@jmea.com or through the help chat on our platform.'
        },
        {
          question: 'What internet speed do I need for the courses?',
          answer: 'Our platform is optimized for Caribbean internet speeds. You need a minimum of 1 Mbps for video streaming, though 3 Mbps or higher is recommended for the best experience.'
        },
        {
          question: 'Can I download courses for offline viewing?',
          answer: 'Offline downloads are available with our yearly subscription plan. This allows you to download course videos and materials for viewing without an internet connection.'
        }
      ]
    },
    {
      category: 'Business Solutions',
      questions: [
        {
          question: 'How does team management work?',
          answer: 'Our business platform allows you to invite team members, assign courses, track progress, and generate completion reports. You can manage multiple locations from a single dashboard.'
        },
        {
          question: 'Can I track my employees\' progress?',
          answer: 'Yes, our business dashboard provides detailed progress tracking, completion rates, exam scores, and time spent on each course. You can also generate compliance reports.'
        },
        {
          question: 'Do you provide training for specific JPS requirements?',
          answer: 'Absolutely. We work closely with JPS to ensure our training meets all current requirements. We also offer custom training modules for specific JPS compliance needs.'
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about JMEA training programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-3">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={questionIndex} className="card-elevated">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to help you succeed in your electrical training journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="btn-hero inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="mailto:info@jmea.com"
                className="btn-outline inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </MainLayout>
  );
};

export default FAQ;