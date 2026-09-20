import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  Building,
  Navigation
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export default function LocationContactSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Father & Sons Enterprises! I would like to visit your factory or discuss a manufacturing order.`
  );
  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Visit & Connect
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Factory Location & Contact
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Our cutting, stitching, and finishing facility is situated in Noida Sector 9. Drop by during operating hours or connect directly with our operations desk.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Call</div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-base font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors block mt-0.5"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <div className="text-xs text-slate-500 mt-1">Available 9:00 AM – 8:00 PM (Mon–Sun)</div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Business</div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline block mt-0.5"
                >
                  +91 {BUSINESS_INFO.whatsapp}
                </a>
                <div className="text-xs text-slate-500 mt-1">Instant sample reviews & tech pack inquiries</div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Email</div>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-violet-500 transition-colors block mt-0.5 break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
                <div className="text-xs text-slate-500 mt-1">Send purchase orders, sketches, & bulk RFQs</div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Operating Factory Hours</div>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  Monday – Sunday
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                  9:00 AM – 8:00 PM (Open 7 Days)
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
              
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                        Factory Address & Plant
                      </h3>
                      <span className="text-xs text-slate-500">Noida Industrial Hub, Uttar Pradesh</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all"
                    title="Copy full address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Structured Address Display */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      <div>{BUSINESS_INFO.address.line1}</div>
                      <div>
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} — PIN {BUSINESS_INFO.address.pincode}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        India • Gautam Buddha Nagar district
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Visual Preview Container */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 flex flex-col items-center justify-center p-6 text-center group">
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Sector 9, Noida Pinpoint</div>
                      <div className="text-xs text-slate-400 mt-0.5">Google Maps Coordinate Location</div>
                    </div>
                    <a
                      id="google-maps-direct-button"
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition-all"
                    >
                      <span>Open in Google Maps App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Route Directions note */}
              <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span>Near Noida Sector 15 / 16 Metro Corridors</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Visitors Welcome by Appointment</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
