import { useState } from 'react';
import { 
  Shirt, 
  Layers, 
  Scissors, 
  Sparkles, 
  Tag, 
  FileCheck, 
  Cpu, 
  Compass, 
  Flame, 
  ShieldCheck, 
  Package, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { MANUFACTURING_SERVICES, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt': return <Shirt className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Tag': return <Tag className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Package': return <Package className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            End-To-End Factory Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Manufacturing & Stitching Services
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Every step from master pattern development to final retail-ready carton packing is handled under one roof at our Noida facility.
          </p>
        </div>

        {/* 11 Services Grid with 3D Hover Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {MANUFACTURING_SERVICES.map((service, idx) => {
            const isHighlight = service.highlight;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group relative p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl ${
                  isHighlight
                    ? 'bg-white dark:bg-slate-900 border-2 border-emerald-500/40 dark:border-emerald-500/40 shadow-emerald-500/5'
                    : 'bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Highlight Tag */}
                {isHighlight && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      Core Service
                    </span>
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${
                  idx % 3 === 0 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                    : idx % 3 === 1
                    ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                }`}>
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[36px]">
                  {service.shortDesc}
                </p>

                {/* Service Detailed Specs Button */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white transition-all"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Factory Capacity Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-violet-950 text-white border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">Have custom tech packs or non-standard pattern requests?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                “{BUSINESS_INFO.tagline}” — Send us reference photos or physical samples for immediate quotation.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectServiceForQuote("Custom Garment Manufacturing")}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
          >
            Request Custom Manufacturing
          </button>
        </div>

      </div>

      {/* Detail Modal for Services */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-3xl border border-emerald-500/30 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  {getIcon(selectedService.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-sm p-1"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
              <p className="font-medium text-slate-900 dark:text-white">
                {selectedService.shortDesc}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                {selectedService.details}
              </p>
              <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Minimum Order: 50 pieces per design/colorway</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-colors"
              >
                Get Quote for this Service
              </button>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
