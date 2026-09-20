import { MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function FloatingWhatsAppCTA() {
  const defaultMsg = encodeURIComponent(
    `Hello Father & Sons Enterprises! I am interested in your garment manufacturing and stitching services (MOQ 50). Please share quotation details.`
  );
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900/90 dark:bg-black/90 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
        <span>Chat on WhatsApp: +91 {BUSINESS_INFO.whatsapp}</span>
      </div>

      {/* Floating 3D Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Father and Sons Enterprises on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping" />
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
