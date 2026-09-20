import { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS_LIST } from '../data/businessData';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onSelectProductForQuote: (productName: string) => void;
}

export default function ProductsSection({ onSelectProductForQuote }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Women' | 'Men' | 'Kids' | 'General'>('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS_LIST 
    : PRODUCTS_LIST.filter(p => p.category === activeCategory || (activeCategory === 'Women' && p.id.includes('women')));

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
              Product Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Garments We Manufacture
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Specialized production lines for Western wear, dresses, ribbed tops, activewear lowers, tees, and custom buyer orders.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {(['All', 'Women', 'Men', 'Kids', 'General'] as const).map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-violet-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'General' ? 'Unisex / General' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Products Grid (Vector Blueprint Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod: ProductItem, idx: number) => {
            return (
              <div
                key={prod.id}
                id={`product-card-${prod.id}`}
                className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & MOQ Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {prod.category}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-md">
                      MOQ: {prod.moq} pcs
                    </span>
                  </div>

                  {/* Garment Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-500 transition-colors font-display">
                    {prod.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Technical Specifications Blueprint Box */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-500" />
                        Popular Fabrics:
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                        {prod.popularFabric}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-violet-500" />
                        Sample Time:
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {prod.sampleTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-blue-500" />
                        Bulk Lead Time:
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {prod.leadTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Custom tags & packaging
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProductForQuote(prod.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Batch Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Silhouette Callout */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
            Need a design not listed here?
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Our company motto is <strong className="text-emerald-500 font-medium">“We Make anything you Went”</strong>. Send us your reference image, sketches, or physical garment sample.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => onSelectProductForQuote("Bespoke Custom Apparel Design")}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-md transition-all"
            >
              Start Custom Garment Order
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
