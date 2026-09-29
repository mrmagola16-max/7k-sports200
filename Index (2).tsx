import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import logo from "@/assets/7k-logo-clean.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Logo watermark background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: '400px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.03,
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <CategoriesSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
