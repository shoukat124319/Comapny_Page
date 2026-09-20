import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShoppingBag, 
  ExternalLink, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';
import { BUSINESS_INFO, MARKETPLACE_STORES } from '../data/businessData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenQuote: () => void;
}

export default function Navbar({ theme, toggleTheme, onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const amazonLink = MARKETPLACE_STORES.find(s => s.name.includes('Amazon'))?.link || '#';
  const flipkartLink = MARKETPLACE_STORES.find(s => s.name.includes('Flipkart'))?.link || '#';
  const meeshoLink = MARKETPLACE_STORES.find(s => s.name.includes('Meesho'))?.link || '#';

  const whatsappMessage = encodeURIComponent("Hello Father & Sons Enterprises! I would like to inquire about garment manufacturing and bulk stitching services.");
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800'
          : 'py-4 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 p-[2px] shadow-md group-hover:shadow-amber-400/30 transition-all">
              <div className="w-full h-full bg-white dark:bg-black rounded-[10px] flex items-center justify-center font-brand font-extrabold text-lg text-amber-500">
                FS
              </div>
            </div>
            <div>
              <span className="font-brand font-bold text-sm sm:text-base tracking-wide text-zinc-900 dark:text-white group-hover:text-amber-400 transition-colors">
                FATHER & SONS
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                Enterprises • Est. 2025
              </span>
            </div>
          </a>

          {/* Quick Header Marketplace & Direct Access (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {/* Amazon Store */}
            <a
              id="header-amazon-link"
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-500 dark:text-amber-400 border border-amber-400/30 transition-all hover:scale-105"
              title="Official Amazon Storefront"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Amazon</span>
            </a>

            {/* Flipkart Store */}
            <a
              id="header-flipkart-link"
              href={flipkartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all hover:scale-105"
              title="Official Flipkart Store"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Flipkart</span>
            </a>

            {/* Meesho Store */}
            <a
              id="header-meesho-link"
              href={meeshoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all hover:scale-105"
              title="Official Meesho Store"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Meesho</span>
            </a>

            {/* Location Link */}
            <a
              id="header-location-link"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              title="Noida Sector 9 Location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Noida, UP</span>
            </a>

            {/* Email Icon */}
            <a
              id="header-email-link"
              href={`mailto:${BUSINESS_INFO.email}`}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              title={`Email: ${BUSINESS_INFO.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Call Icon */}
            <a
              id="header-call-link"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              title={`Call: ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* WhatsApp Icon */}
            <a
              id="header-whatsapp-icon-link"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-amber-400 hover:bg-amber-400/10 transition-all"
              title="Chat on WhatsApp (+91 7303179577)"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-2">
            {/* Dark / Light Mode Switcher */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-800" />
              )}
            </button>

            {/* Contact Us Anchor */}
            <a
              id="header-contact-btn"
              href="#contact"
              className="hidden md:inline-flex items-center px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:text-amber-400 transition-colors"
            >
              Contact Us
            </a>

            {/* Primary 'Get a Quote' / Google Form button */}
            <button
              id="header-quote-btn"
              type="button"
              onClick={onOpenQuote}
              className="relative group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-extrabold text-black rounded-xl bg-amber-400 hover:bg-amber-300 shadow-md hover:shadow-amber-400/30 active:scale-95 transition-all overflow-hidden"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Get a Quote</span>
              <span className="hidden xl:inline text-[10px] opacity-80 font-semibold">
                (Google Form)
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-xl text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden mt-2 px-4 pt-3 pb-6 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3">
            {/* Quick Contact Line */}
            <div className="grid grid-cols-3 gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 text-xs gap-1"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-400/10 text-amber-500 dark:text-amber-400 text-xs gap-1 font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-amber-500" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 text-xs gap-1"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Email</span>
              </a>
            </div>

            {/* Navigation Anchor Links */}
            <div className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Manufacturing Services
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Products We Manufacture
              </a>
              <a
                href="#b2b"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Bulk & B2B Orders (MOQ: 50)
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Manufacturing Process
              </a>
              <a
                href="#marketplaces"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Marketplace Stores (Amazon, Flipkart, Meesho)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Factory Location & Contact
              </a>
            </div>

            {/* Direct Marketplace Links in Mobile Menu */}
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-400/10 text-amber-500 border border-amber-400/30"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Amazon Store
              </a>
              <a
                href={flipkartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Flipkart Store
              </a>
              <a
                href={meeshoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Meesho Store
              </a>
            </div>

            {/* Mobile Quote CTA */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="mt-2 w-full py-2.5 px-4 text-center font-extrabold text-black rounded-xl bg-amber-400 hover:bg-amber-300 shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Get a Quote (Google Form & WhatsApp)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
