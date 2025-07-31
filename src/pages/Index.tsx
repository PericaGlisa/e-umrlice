import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SearchSection } from '@/components/SearchSection';
import { ObituarySlider } from '@/components/ObituarySlider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 flex-1">
        <SearchSection />
        <ObituarySlider />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
