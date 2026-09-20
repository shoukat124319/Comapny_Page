import { useState, useEffect } from 'react';
import { Sparkles, Shirt } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import BulkOrderB2BSection from './components/BulkOrderB2BSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import MarketplacesSection from './components/MarketplacesSection';
import LocationContactSection from './components/LocationContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppCTA from './components/FloatingWhatsAppCTA';
import QuoteModal from './components/QuoteModal';
import { BUSINESS_INFO } from './data/businessData';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedProduct, setQuotePreselectedProduct] = useState('');
  const [quotePreselectedQty, setQuotePreselectedQty] = useState(50);

  // Initialize theme from system or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('fse_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      document.documentElement.classList.add('dark');
    }

    // Brief initial luxury fashion weave loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('fse_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setQuotePreselectedProduct(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithProduct = (productName: string) => {
    setQuotePreselectedProduct(productName);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithQty = (qty: number) => {
    setQuotePreselectedQty(qty);
    setQuoteModalOpen(true);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 animate-spin p-1" style={{ animationDuration: '3.5s' }}>
            <div className="w-full h-full bg-zinc-950 rounded-[22px] flex items-center justify-center">
              <Shirt className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
          </div>
          <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-black uppercase tracking-widest shadow-md">
            3D Hoodie Studio
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight font-display text-white">
          {BUSINESS_INFO.name}
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-amber-400 font-display italic font-medium">
          “{BUSINESS_INFO.tagline}”
        </p>

        <div className="mt-6 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-mono">
            Calibrating 3D Garment Weave & Patterns...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Top Fixed Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenQuote={() => {
          setQuotePreselectedProduct('');
          setQuoteModalOpen(true);
        }}
      />

      {/* Main One-Page Content Flow */}
      <main>
        {/* 1. Hero Section with 3D Hoodie Studio */}
        <HeroSection
          theme={theme}
          onOpenQuote={() => {
            setQuotePreselectedProduct('');
            setQuoteModalOpen(true);
          }}
        />

        {/* 2. Manufacturing Services (11 services) */}
        <ServicesSection
          onSelectServiceForQuote={handleOpenQuoteWithService}
        />

        {/* 3. Products We Manufacture (11 products) */}
        <ProductsSection
          onSelectProductForQuote={handleOpenQuoteWithProduct}
        />

        {/* 4. Bulk Orders & B2B Calculator (MOQ 50, Target Customers) */}
        <BulkOrderB2BSection
          onOpenQuoteWithQty={handleOpenQuoteWithQty}
        />

        {/* 5. Manufacturing Process (10 steps + Sampling highlight) */}
        <ProcessSection />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7. Marketplace Stores (Amazon, Flipkart, Meesho, IndiaMART) */}
        <MarketplacesSection />

        {/* 8. Factory Location & Contact (Google Maps & details) */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating 3D WhatsApp Button */}
      <FloatingWhatsAppCTA />

      {/* Quote / Google Form Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={quotePreselectedProduct}
        preselectedQuantity={quotePreselectedQty}
      />
    </div>
  );
}
