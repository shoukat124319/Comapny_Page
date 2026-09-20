import { 
  ShoppingBag, 
  ExternalLink, 
  ShieldCheck, 
  Star,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { MARKETPLACE_STORES } from '../data/businessData';

export default function MarketplacesSection() {
  return (
    <section id="marketplaces" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Verified Omnichannel Presence
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Our Official Marketplace Stores
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Experience our garment quality firsthand. Purchase ready retail pieces or explore our wholesale catalogs across India's leading commerce platforms.
          </p>
        </div>

        {/* 4 Marketplace Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETPLACE_STORES.map((store) => (
            <div
              key={store.name}
              id={`marketplace-card-${store.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Store Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${store.badgeColor}`}>
                    {store.tag}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                </div>

                {/* Store Name */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  {store.name}
                </h3>

                {/* Store Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {store.description}
                </p>

                {/* Featured product badge if present */}
                {store.featuredProduct && (
                  <div className="mt-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium truncate">
                      {store.featuredProduct}
                    </span>
                  </div>
                )}
              </div>

              {/* Direct Store Link Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={store.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Visit {store.name} Store</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* E-Commerce Seller Assurance Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Are you an online seller on Amazon, Flipkart, or Meesho looking for reliable manufacturing supply? We provide FBA compliant packaging, barcoding, and rapid restocking.
            </p>
          </div>
          <a
            href={`https://wa.me/917303179577?text=${encodeURIComponent("Hi! I am an online marketplace seller and need manufacturing support for Amazon/Flipkart/Meesho.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
          >
            Connect Seller Desk
          </a>
        </div>

      </div>
    </section>
  );
}
