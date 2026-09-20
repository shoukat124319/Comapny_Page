import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ShoppingBag, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin,
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { BUSINESS_INFO, MARKETPLACE_STORES, SOCIAL_PLACEHOLDERS } from '../data/businessData';

export default function Footer() {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (platform: string) => {
    console.log(`[Social Link]: Placeholder clicked for ${platform}. Replace with user profile URL.`);
    setSocialNotice(`${platform} profile link will connect when updated.`);
    setTimeout(() => setSocialNotice(null), 3500);
  };

  const amazon = MARKETPLACE_STORES.find(s => s.name.includes('Amazon'));
  const flipkart = MARKETPLACE_STORES.find(s => s.name.includes('Flipkart'));
  const meesho = MARKETPLACE_STORES.find(s => s.name.includes('Meesho'));
  const indiamart = MARKETPLACE_STORES.find(s => s.name.includes('IndiaMART'));

  return (
    <footer id="footer" className="relative bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-violet-600 to-blue-600 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-display font-extrabold text-lg text-emerald-400">
                  FS
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                  Garment Manufacturer & Stitching Service
                </span>
              </div>
            </div>

            <p className="text-emerald-400 font-display italic text-base font-semibold">
              “{BUSINESS_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Specialized garment manufacturing, fabric cutting, custom stitching, sampling, and private-label apparel production based in Noida, Uttar Pradesh.
            </p>

            {/* Social Media (Configurable Placeholders with user log behavior) */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 mb-2">Connect On Social Channels:</div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSocialClick('Instagram')}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 transition-colors"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialClick('Facebook')}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
                  title="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialClick('YouTube')}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-800 transition-colors"
                  title="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-500 border border-slate-800 transition-colors"
                  title="LinkedIn Page"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>

              {socialNotice && (
                <div className="mt-2 text-[11px] text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20 inline-block animate-pulse">
                  {socialNotice}
                </div>
              )}
            </div>
          </div>

          {/* Direct Marketplace Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Marketplace Stores
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {amazon && (
                <li>
                  <a
                    href={amazon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group py-1"
                  >
                    <span>Amazon Storefront</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              )}
              {flipkart && (
                <li>
                  <a
                    href={flipkart.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors flex items-center justify-between group py-1"
                  >
                    <span>Flipkart Fashion Store</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              )}
              {meesho && (
                <li>
                  <a
                    href={meesho.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors flex items-center justify-between group py-1"
                  >
                    <span>Meesho (TwinStar Clothing 1)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              )}
              {indiamart && (
                <li>
                  <a
                    href={indiamart.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between group py-1"
                  >
                    <span>IndiaMART B2B Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Factory Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Factory & Operations
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  H66, Sector 9, GautamBuddha Nagar Noida UP 201301
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-slate-500 text-[11px]">
                Business Hours: Monday – Sunday • 9:00 AM – 8:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Exact Copyright Requirement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 FATHER AND SONS ENTERPRISES All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Garments, Stitching & Private Label Manufacturing
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
