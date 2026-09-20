import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Layers, 
  Cpu, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '../data/businessData';

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Our Factory Commitments
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Why Choose Father & Sons Enterprises
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Precision engineering, ethical production standards, and modern machinery founded in 2025 in Noida, Uttar Pradesh.
          </p>
        </div>

        {/* 4 Feature Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display">
                    {item.stat}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Noida Factory Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Philosophy Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-violet-950/80 border border-emerald-500/20 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400">
              The Atelier Ethos
            </span>
            <h3 className="text-2xl font-bold font-display">
              “{BUSINESS_INFO.tagline}”
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              From heavy rib-knit dresses to lightweight summer cotton tees and activewear joggers, our skilled pattern masters bring any garment concept into physical reality.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-slate-400">Manufacturing Facility</div>
              <div className="text-sm font-bold text-white">Sector 9, Noida (UP)</div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap"
            >
              Call Factory Directly
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
