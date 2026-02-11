import { HeaderNav } from './components/marketing/HeaderNav';
import { 
  HeroSection, 
  ServicesSection, 
  ProcessSection, 
  PricingSection,
  ExampleWebsiteSection,
  AboutSection, 
  ContactSection 
} from './components/marketing/Sections';

function App() {
  return (
    <div className="min-h-screen">
      <HeaderNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <ExampleWebsiteSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
