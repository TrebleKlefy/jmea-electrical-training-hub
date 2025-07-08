import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustPartners } from '@/components/TrustPartners';
import { MainTraining } from '@/components/MainTraining';
import { ContinuingEducation } from '@/components/ContinuingEducation';
import { PracticeExams } from '@/components/PracticeExams';
import { BusinessSolutions } from '@/components/BusinessSolutions';
import { Testimonials } from '@/components/Testimonials';
import { Articles } from '@/components/Articles';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustPartners />
      <MainTraining />
      <ContinuingEducation />
      <PracticeExams />
      <BusinessSolutions />
      <Testimonials />
      <Articles />
      <Footer />
    </div>
  );
};

export default Index;
