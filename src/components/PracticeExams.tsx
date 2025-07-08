import { Target, Brain, TrendingUp, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PracticeExams = () => {
  const examFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Realistic Exam Simulation",
      description: "Questions mirror actual Jamaican licensing exams"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Adaptive Learning",
      description: "System identifies your weak areas for focused study"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics"
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Instant Feedback",
      description: "Immediate explanations for correct and incorrect answers"
    }
  ];

  const examTypes = [
    { name: "Journeyman Electrician", questions: "100 Questions", time: "4 Hours", level: "Intermediate" },
    { name: "Master Electrician", questions: "150 Questions", time: "5 Hours", level: "Advanced" },
    { name: "Electrical Contractor", questions: "120 Questions", time: "4.5 Hours", level: "Professional" },
    { name: "Solar Installation", questions: "80 Questions", time: "3 Hours", level: "Specialized" }
  ];

  return (
    <section id="practice-exams" className="py-20 bg-background border-l-4 border-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-section-title text-foreground mb-4">Practice for Your Exam</h2>
            <h3 className="text-section-subtitle text-secondary mb-6">Practice Exams</h3>
            <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
              These online exams will help you prepare for Jamaican electrical licensing exams and show you areas for improvement.
              Our practice tests are based on the latest JPS standards and Jamaica electrical code.
            </p>
            <p className="text-sm text-muted-foreground font-medium bg-muted/50 inline-block px-4 py-2 rounded-lg">
              ** Included in the Learning System at no additional cost **
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {examFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-secondary">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Exam Types */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Available Practice Exams</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {examTypes.map((exam, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-foreground">{exam.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exam.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                      exam.level === 'Professional' ? 'bg-purple-100 text-purple-700' :
                      exam.level === 'Specialized' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {exam.level}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Questions:</span>
                      <span className="text-foreground font-medium">{exam.questions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Time Limit:</span>
                      <span className="text-foreground font-medium">{exam.time}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full btn-outline"
                    onClick={() => window.open(`https://jmea-training.com/exams/${exam.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                  >
                    Start Practice Exam
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-section rounded-lg p-6 inline-block">
                <h4 className="text-lg font-bold text-foreground mb-2">Ready to Test Your Knowledge?</h4>
                <p className="text-muted-foreground mb-4">Take a free diagnostic exam to see where you stand</p>
                <Button 
                  className="btn-hero"
                  onClick={() => window.open('https://jmea-training.com/diagnostic', '_blank')}
                >
                  Start Free Diagnostic
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};