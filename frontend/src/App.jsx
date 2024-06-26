import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import PricingPlans from './components/PricingPlans';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Features />
      <PricingPlans />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
