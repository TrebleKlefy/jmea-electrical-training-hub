import { useState } from 'react';
import { Clock, Users, BookOpen, Star, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses, courseCategories, Course } from '@/data/courses';

export const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = selectedCategory === 'All Courses' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-primary mb-4">
              Master Your Craft
            </h2>
            <h3 className="text-section-subtitle text-foreground mb-6">
              Comprehensive Course Catalog
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From electrical fundamentals to advanced industrial systems, our courses are designed by Jamaican experts 
              for Jamaican electricians. Each course includes hands-on projects, real-world scenarios, and JPS compliance training.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {courseCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card-elevated group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.modules} modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.8</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      ${course.price}
                    </div>
                    <Button 
                      variant="outline" 
                      className="btn-outline"
                      onClick={() => setSelectedCourse(course)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Course Features */}
          <div className="bg-gradient-section rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">5,000+ Students</h4>
                <p className="text-muted-foreground">Jamaican electricians trained</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">JPS Approved</h4>
                <p className="text-muted-foreground">All courses meet local standards</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">500+ Videos</h4>
                <p className="text-muted-foreground">Hours of premium content</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">4.9/5 Rating</h4>
                <p className="text-muted-foreground">Student satisfaction score</p>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Recommended Learning Path
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold text-foreground mb-2">Foundation</h4>
                <p className="text-sm text-muted-foreground">Start with Electrical Fundamentals and Safety</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                <p className="text-sm text-muted-foreground">Choose Residential, Commercial, or Solar</p>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-2">Advanced</h4>
                <p className="text-sm text-muted-foreground">Master Industrial Systems and Automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl font-bold text-foreground">{selectedCourse.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(selectedCourse.level)}`}>
                  {selectedCourse.level}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">{selectedCourse.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Course Features</h4>
                  <ul className="space-y-2">
                    {selectedCourse.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Learning Outcomes</h4>
                  <ul className="space-y-2">
                    {selectedCourse.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{selectedCourse.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{selectedCourse.modules}</div>
                    <div className="text-sm text-muted-foreground">Modules</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">${selectedCourse.price}</div>
                    <div className="text-sm text-muted-foreground">Price</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  className="btn-hero flex-1"
                  onClick={() => window.open(`https://jmea-training.com/enroll/${selectedCourse.id}`, '_blank')}
                >
                  Enroll Now - ${selectedCourse.price}
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-outline"
                  onClick={() => window.open(`https://jmea-training.com/preview/${selectedCourse.id}`, '_blank')}
                >
                  Free Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};