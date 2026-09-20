import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Sparkles, 
  Send, 
  MessageCircle, 
  Mail, 
  FileSpreadsheet, 
  CheckCircle2, 
  Layers, 
  Phone
} from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS_LIST } from '../data/businessData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
  preselectedQuantity?: number;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedProduct = '',
  preselectedQuantity = 50,
}: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phoneOrWhatsApp: '',
    email: '',
    garmentType: preselectedProduct || "Women's Dresses",
    estimatedQuantity: preselectedQuantity,
    needsSampling: true,
    specifications: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'google-form'>('form');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, garmentType: preselectedProduct }));
    }
  }, [preselectedProduct]);

  useEffect(() => {
    if (preselectedQuantity) {
      setFormData(prev => ({ ...prev, estimatedQuantity: preselectedQuantity }));
    }
  }, [preselectedQuantity]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const text = 
`*NEW MANUFACTURING QUOTE REQUEST*
*Company / Brand:* ${formData.companyName || 'Not specified'}
*Buyer Name:* ${formData.fullName}
*Phone/WhatsApp:* ${formData.phoneOrWhatsApp}
*Email:* ${formData.email || 'N/A'}
*Garment Type:* ${formData.garmentType}
*Estimated Quantity:* ${formData.estimatedQuantity} pieces (MOQ 50)
*Pre-production Sample Needed:* ${formData.needsSampling ? 'Yes' : 'No'}
*Custom Notes / Specs:* ${formData.specifications || 'None provided'}

_Sent via Father and Sons Enterprises 3D Portal_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Bulk Manufacturing Quote Request - ${formData.garmentType} (${formData.estimatedQuantity} pcs)`);
    const body = encodeURIComponent(
`Dear Father and Sons Enterprises Team,

I would like to request an official manufacturing quote with the following details:

Buyer Name: ${formData.fullName}
Company / Brand: ${formData.companyName}
Contact Phone: ${formData.phoneOrWhatsApp}
Garment Category: ${formData.garmentType}
Estimated Quantity: ${formData.estimatedQuantity} pieces
Requires Physical Sample First: ${formData.needsSampling ? 'Yes' : 'No'}

Specifications & Instructions:
${formData.specifications || 'Please reach out with pricing tiers and fabric catalogues.'}

Thank you,
${formData.fullName}`
    );

    window.open(`mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-emerald-500/30 shadow-2xl">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-500 to-violet-600 text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Request a Manufacturing Quote
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Father and Sons Enterprises • Noida Factory (MOQ: 50 Pieces)
            </p>
          </div>
        </div>

        {/* Tabs: Interactive Form or Google Form */}
        <div className="flex items-center gap-2 my-4 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-1.5 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'form'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Direct WhatsApp / Email Form</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('google-form')}
            className={`flex-1 py-1.5 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'google-form'
                ? 'bg-white dark:bg-slate-900 text-violet-600 dark:text-violet-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Google Form Portal</span>
          </button>
        </div>

        {activeTab === 'form' ? (
          submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Inquiry Generated Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                Your quote specifications have been transmitted to WhatsApp. Our Noida production manager will review your tech pack and quote within 2–4 hours.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                >
                  Also Send via Email
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Brand / Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Urban Drapes Studio"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="buyer@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Garment Category
                  </label>
                  <select
                    value={formData.garmentType}
                    onChange={(e) => setFormData({ ...formData, garmentType: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  >
                    {PRODUCTS_LIST.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="Other Custom Apparel">Other Custom Garment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Estimated Quantity (MOQ: 50)
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="10"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Require Sampling First?</div>
                  <div className="text-[11px] text-slate-500">Physical sample produced in 2–3 days before bulk run.</div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.needsSampling}
                  onChange={(e) => setFormData({ ...formData, needsSampling: e.target.checked })}
                  className="w-4 h-4 rounded text-emerald-600 accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Custom Requirements, Fabric Choice or Sizing Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Ribbed cotton fabric, maroon colorway, woven custom tags required..."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-violet-600 to-blue-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Quote via WhatsApp (+91 7303179577)</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSend}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-violet-500" />
                  <span>Email Direct</span>
                </button>
              </div>
            </form>
          )
        ) : (
          <div className="py-6 space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mx-auto">
              <FileSpreadsheet className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Official Google Form Quote Submission
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Prefer filling via Google Forms? You can submit your bulk RFQ, attach your design sketches, and upload tech packs directly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Upload PDF / Tech pack sketches up to 25MB</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Specify exact GSM, colorways, & size curves (XS–3XL)</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Instant automated receipt & factory callback within 4 hours</span>
              </div>
            </div>

            <a
              href={`https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-rfq/viewform?usp=pp_url&entry.1=${encodeURIComponent(BUSINESS_INFO.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // If standard Google Form placeholder, fallback smoothly to WhatsApp or Email
                window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello! I am requesting the Google Form Quote Link for bulk manufacturing.")}`, '_blank');
              }}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Launch Google Form (or WhatsApp Request)</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
