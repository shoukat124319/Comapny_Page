import { useState } from 'react';
import { 
  FileText, 
  Layers, 
  PenTool, 
  CheckCircle, 
  Scissors, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  Package, 
  Truck,
  Star
} from 'lucide-react';
import { MANUFACTURING_PROCESS } from '../data/businessData';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(4); // Sampling highlighted by default

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'PenTool': return <PenTool className="w-4 h-4" />;
      case 'CheckCircle': return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'Scissors': return <Scissors className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Package': return <Package className="w-4 h-4" />;
      case 'Truck': return <Truck className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            From Blueprint To Wardrobe
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Our Manufacturing Process
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A transparent 10-stage factory workflow featuring a dedicated <strong className="text-emerald-500 font-semibold">Sampling Approval</strong> phase before commencing mass fabric runs.
          </p>
        </div>

        {/* Special Sampling Highlight Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-violet-500/15 to-blue-500/15 border-2 border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500 text-white uppercase tracking-wider">
                  Special Process Feature
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Step 4: Sampling Stage</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                Zero Risk With Pre-Production Sample Approval
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                We craft an exact prototype garment for you to test fitting, drape, seam tension, and touch-feel before we cut bulk fabric rolls.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setActiveStep(4)}
            className="whitespace-nowrap px-4 py-2 text-xs font-bold rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all shadow-sm"
          >
            Inspect Sampling Protocol
          </button>
        </div>

        {/* Process Steps Horizontal / Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MANUFACTURING_PROCESS.map((proc) => {
            const isSelected = activeStep === proc.step;
            const isSpecial = proc.isSpecial;

            return (
              <div
                key={proc.step}
                onClick={() => setActiveStep(proc.step)}
                className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-emerald-500 shadow-xl scale-[1.02]'
                    : isSpecial
                    ? 'bg-emerald-500/10 dark:bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-500'
                    : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected 
                        ? 'bg-emerald-500 text-white' 
                        : isSpecial
                        ? 'bg-emerald-600 text-white font-extrabold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}>
                      Stage {proc.step}
                    </span>

                    <div className={`p-1.5 rounded-lg ${
                      isSelected 
                        ? 'bg-white/10 text-emerald-400' 
                        : isSpecial
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {getStepIcon(proc.icon)}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className={`text-sm font-bold ${
                    isSelected ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {proc.title}
                  </h4>

                  {/* Description */}
                  <p className={`mt-1.5 text-xs leading-relaxed ${
                    isSelected ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {proc.desc}
                  </p>
                </div>

                {isSpecial && (
                  <div className="mt-3 pt-2 border-t border-emerald-500/30 flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Special Focus Stage</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
