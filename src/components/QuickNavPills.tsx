import React from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { ThemeMode } from '../types';
import { MessageSquare, Calendar, Users, TrendingUp, Megaphone, ArrowDown } from 'lucide-react';

interface QuickNavPillsProps {
  theme: ThemeMode;
  onNavigateTo: (id: string) => void;
}

export const QuickNavPills: React.FC<QuickNavPillsProps> = ({ theme, onNavigateTo }) => {
  const isDark = theme === 'dark';

  const getPillIcon = (id: string) => {
    switch (id) {
      case 'buzzcom': return <MessageSquare className="w-4 h-4 text-cyan-400" />;
      case 'calendex': return <Calendar className="w-4 h-4 text-purple-400" />;
      case 'ireach': return <Users className="w-4 h-4 text-blue-400" />;
      case 'ondal': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'salexplex': return <Megaphone className="w-4 h-4 text-pink-400" />;
      default: return null;
    }
  };

  const getPillAction = (id: string) => {
    switch (id) {
      case 'buzzcom': return 'Communicate';
      case 'calendex': return 'Schedule';
      case 'ireach': return 'Manage People';
      case 'ondal': return 'Manage Finance';
      case 'salexplex': return 'Grow Marketing';
      default: return 'Explore';
    }
  };

  return (
    <div className={`py-6 border-y ${isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span>Quick Product Selector</span>
              <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto">
            {PLEXAAR_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => onNavigateTo(`product-${prod.id}`)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center gap-2.5 group hover:scale-105 active:scale-95 shadow-sm ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white'
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:text-slate-950'
                }`}
              >
                <div className="p-1 rounded-lg bg-slate-800/80">
                  {getPillIcon(prod.id)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-xs group-hover:text-cyan-400 transition-colors">
                    {prod.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {getPillAction(prod.id)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
