import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustPartners } from '@/components/TrustPartners';
import { MainTraining } from '@/components/MainTraining';
import { Courses } from '@/components/Courses';
import { ContinuingEducation } from '@/components/ContinuingEducation';
import { PracticeExams } from '@/components/PracticeExams';
import { BusinessSolutions } from '@/components/BusinessSolutions';
import { Testimonials } from '@/components/Testimonials';
import { Articles } from '@/components/Articles';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustPartners />
      <MainTraining />
      <Courses />
      <ContinuingEducation />
      <PracticeExams />
      <BusinessSolutions />
      <Testimonials />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
