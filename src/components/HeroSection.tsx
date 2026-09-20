import { motion } from 'motion/react';
import { 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ArrowRight,
  TrendingUp,
  Layers,
  ShoppingBag
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import ThreeGarmentScene from './ThreeGarmentScene';

interface HeroSectionProps {
  theme: 'dark' | 'light';
  onOpenQuote: () => void;
}

export default function HeroSection({ theme, onOpenQuote }: HeroSectionProps) {
  const whatsappQuoteMsg = encodeURIComponent(
    `Hello Father & Sons Enterprises! I would like to request custom manufacturing and bulk order details (MOQ: ${BUSINESS_INFO.moq}).`
  );
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${whatsappQuoteMsg}`;

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-zinc-700/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Brand & Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Pill: Category Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-400/10 border border-amber-400/30 text-amber-500 dark:text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                Est. 2025 • Noida Facility
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 border border-zinc-700 text-zinc-200">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Garment Manufacturer + Stitching Provider
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-600 dark:text-amber-300 border border-amber-400/20">
                MOQ: {BUSINESS_INFO.moq} Pcs
              </span>
            </div>

            {/* Business Title & Tagline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12] font-display">
              {BUSINESS_INFO.name}
            </h1>

            {/* Iconic Tagline */}
            <div className="mt-3 sm:mt-4 inline-flex items-center gap-2">
              <span className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent font-display italic">
                “{BUSINESS_INFO.tagline}”
              </span>
            </div>

            {/* Short About Business (exact 3 lines from form) */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
              {BUSINESS_INFO.shortAbout}
            </p>

            {/* Key Value Commitments */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white">Quality Stitching</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Zero-defect inspection</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="p-2 rounded-xl bg-zinc-800 text-amber-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white">Timely Production</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Strict delivery timeline</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white">Reliable Service</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Direct factory support</p>
                </div>
              </div>
            </div>

            {/* Comprehensive CTAs requested */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
              {/* 1. Get a Quote */}
              <button
                id="hero-get-quote-btn"
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-black rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-105 shadow-lg shadow-amber-400/25 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Get a Quote (Google Form)</span>
              </button>

              {/* 2. WhatsApp Us */}
              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-zinc-900 dark:text-white rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 border border-zinc-300 dark:border-zinc-700 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-amber-500" />
                <span>WhatsApp Us</span>
              </a>

              {/* 3. Custom Manufacturing Inquiry */}
              <button
                id="hero-custom-inquiry-btn"
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Custom Manufacturing Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Marketplace Trust Strip */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 w-full flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                Active Marketplace Seller on:
              </span>
              <div className="flex items-center gap-3">
                <span className="font-medium text-amber-400">Amazon</span>
                <span>•</span>
                <span className="font-medium text-zinc-200">Flipkart</span>
                <span>•</span>
                <span className="font-medium text-amber-300">Meesho</span>
                <span>•</span>
                <span className="font-medium text-amber-500">IndiaMART</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Garment Scene Stage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-amber-600 to-zinc-700 rounded-[28px] opacity-30 blur-lg" />
              
              {/* 3D Hoodie Scene Component */}
              <ThreeGarmentScene theme={theme} onRequestSample={onOpenQuote} />

              {/* Floating Stat Card Over 3D Scene */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 p-3.5 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-500 flex items-center justify-center font-bold font-display text-lg">
                  50
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Minimum Order (MOQ)</div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">Sample prototype before run</div>
                </div>
              </div>

              {/* Floating Quality Assurance Badge */}
              <div className="absolute -top-4 -right-3 p-3 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-bold text-zinc-900 dark:text-white">Custom Hoodies & Apparel</div>
                  <div className="text-[10px] text-amber-400 font-semibold">100% Fit Guaranteed</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
