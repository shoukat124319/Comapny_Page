import { useState } from 'react';
import { 
  Building, 
  Store, 
  ShoppingBag, 
  Sparkles, 
  Rocket, 
  Globe, 
  CheckCircle2, 
  Calculator, 
  ArrowRight,
  ShieldCheck,
  Package
} from 'lucide-react';
import { BUSINESS_INFO, TARGET_CUSTOMERS } from '../data/businessData';

interface BulkOrderB2BSectionProps {
  onOpenQuoteWithQty: (quantity: number) => void;
}

export default function BulkOrderB2BSection({ onOpenQuoteWithQty }: BulkOrderB2BSectionProps) {
  const [sliderQty, setSliderQty] = useState(150);

  // Helper for customer icons
  const getCustomerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-5 h-5 text-emerald-500" />;
      case 'Store': return <Store className="w-5 h-5 text-violet-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-pink-500" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-500" />;
      default: return <Building className="w-5 h-5 text-emerald-500" />;
    }
  };

  // Calculations for tier
  const isStartupTier = sliderQty <= 100;
  const isBrandTier = sliderQty > 100 && sliderQty <= 500;
  const isEnterpriseTier = sliderQty > 500;

  const estimatedProdDays = sliderQty <= 100 ? '5–7 Days' : sliderQty <= 500 ? '8–12 Days' : '14–20 Days';
  const sampleTime = '2–3 Days';

  return (
    <section id="b2b" className="py-20 bg-slate-50/80 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            B2B & Contract Apparel Solutions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Bulk Manufacturing & Private Labeling
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Tailored apparel supply chain designed for brands, D2C startups, e-commerce stores, and high-volume exporters with an industry-friendly MOQ of just 50 pieces.
          </p>
        </div>

        {/* 4 Pillars Grid (B2B Highlights from Form) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Low Threshold</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-white">MOQ: 50 Pieces</div>
              <div className="text-xs text-slate-500 mt-1">Mix sizes according to your size ratio breakdown.</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Risk Free</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-white">Sampling Provided</div>
              <div className="text-xs text-slate-500 mt-1">Pre-production sample sent for your physical approval.</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Customization</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-white">Custom Manufacturing</div>
              <div className="text-xs text-slate-500 mt-1">Your exact fit, pattern, trims, tags, and packaging.</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">Turnkey Branding</div>
              <div className="text-base font-extrabold text-slate-900 dark:text-white">Private Labeling</div>
              <div className="text-xs text-slate-500 mt-1">Woven labels, wash-care tags, barcodes, & custom polybags.</div>
            </div>
          </div>
        </div>

        {/* Interactive B2B Production Batch Estimator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-500/20 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Slider Controls */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Interactive Batch Calculator
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                Select Your Required Production Volume
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Minimum order is 50 units. Drag the slider to review production turnaround and sampling parameters.
              </p>

              {/* Slider Component */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500">Min: 50 pcs</span>
                  <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                    {sliderQty} Pieces
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Max: 2,500+ pcs</span>
                </div>
                <input
                  id="batch-quantity-slider"
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={sliderQty}
                  onChange={(e) => setSliderQty(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                
                {/* Preset quick buttons */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[50, 100, 250, 500, 1000].map(val => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setSliderQty(val)}
                      className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all ${
                        sliderQty === val
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {val} pcs {val === 50 && '(MOQ)'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Output Card */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                <span className="text-xs text-slate-500">Tier Classification:</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  {isStartupTier ? 'Starter / Sampling Tier' : isBrandTier ? 'Standard Brand Run' : 'Volume Enterprise Batch'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 font-medium">Sample Prototype:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{sampleTime}</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 font-medium">Bulk Production:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{estimatedProdDays}</div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Custom Neck Labels & Polybag Packing included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Quality checked at Noida Facility before dispatch</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenQuoteWithQty(sliderQty)}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-violet-600 to-blue-600 text-white font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Quotation for {sliderQty} Pieces</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Target Customers Grid (All 6 from Form) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              Who We Manufacture For
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Serving every echelon of the modern apparel ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TARGET_CUSTOMERS.map((target, idx) => (
              <div
                key={target.title}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-violet-500/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80">
                  {getCustomerIcon(target.icon)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {target.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {target.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
