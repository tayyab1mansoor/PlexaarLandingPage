import React from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { PRODUCT_LOGOS } from '../data/productLogos';
import { ThemeMode, ProductId } from '../types';
import { ArrowDown } from 'lucide-react';

interface QuickNavPillsProps {
  theme: ThemeMode;
  onNavigateTo: (id: string) => void;
}

export const QuickNavPills: React.FC<QuickNavPillsProps> = ({ theme, onNavigateTo }) => {
  const isDark = theme === 'dark';

  const getPillIcon = (id: ProductId) => (
    <span className="inline-flex w-6 h-6 rounded-full overflow-hidden border border-[#548DFF]/20 shrink-0 bg-white items-center justify-center">
      <img src={PRODUCT_LOGOS[id]} alt="" className="w-4 h-4 object-contain" />
    </span>
  );

  const getPillAction = (id: string) => {
    switch (id) {
      case 'buzzcom': return 'Communicate';
      case 'calendex': return 'Schedule';
      case 'ireach': return 'Manage People';
      case 'ondel': return 'Manage Finance';
      case 'salexplex': return 'Grow Marketing';
      default: return 'Explore';
    }
  };

  return (
    <div className={`py-6 border-y ${isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <ArrowDown className="w-3.5 h-3.5 text-[#548DFF] animate-bounce" />
            Jump to Product
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {PLEXAAR_PRODUCTS.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigateTo(`product-${p.id}`)}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all duration-200 ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-[#548DFF]/50 hover:bg-slate-900'
                    : 'bg-white border-slate-200 hover:border-[#548DFF]/50 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {getPillIcon(p.id)}
                <span className="font-extrabold text-xs group-hover:text-[#548DFF] transition-colors">
                  {p.name}
                </span>
                <span className={`text-[10px] font-medium hidden md:inline ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {getPillAction(p.id)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
