import React from 'react';
import { ThemeMode } from '../types';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { 
  Zap, 
  Eye, 
  Layers, 
  Settings, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface BenefitsSectionProps {
  theme: ThemeMode;
  onOpenDemo: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ theme, onOpenDemo }) => {
  const isDark = theme === 'dark';

  const benefits = [
    {
      title: 'CONNECTED OPERATIONS',
      desc: 'Bring critical business functions—chat, scheduling, HR, finance, and marketing—into one unified ecosystem.',
      icon: Zap,
      color: 'text-cyan-400'
    },
    {
      title: 'BETTER VISIBILITY',
      desc: 'Understand what is happening across your entire organization with real-time cross-department analytics.',
      icon: Eye,
      color: 'text-purple-400'
    },
    {
      title: 'LESS FRAGMENTATION',
      desc: 'Reduce dependency on 5+ disconnected software tools and eliminate manual data copy-pasting.',
      icon: Layers,
      color: 'text-rose-400'
    },
    {
      title: 'SIMPLIFIED MANAGEMENT',
      desc: 'Access essential business functions through a single, cohesive user experience and identity.',
      icon: Settings,
      color: 'text-blue-400'
    },
    {
      title: 'SCALABLE STRUCTURE',
      desc: 'Support increasingly complex multi-department and multi-location enterprise requirements effortlessly.',
      icon: TrendingUp,
      color: 'text-emerald-400'
    },
    {
      title: 'BETTER DECISIONS',
      desc: 'Provide executive leadership with higher-trust, accurate operational data to act with confidence.',
      icon: ShieldCheck,
      color: 'text-amber-400'
    }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Section Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.benefits})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            WHY ONE ECOSYSTEM?
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Stop Managing Software.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400">
              Start Managing Your Business.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Plexaar replaces software friction with operational alignment across all 5 key corporate functions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-xl flex flex-col justify-between ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:scale-[1.02]' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:scale-[1.02]'
                }`}
              >
                <div>
                  <div className={`p-3 rounded-2xl border w-fit mb-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <IconComp className={`w-6 h-6 ${b.color}`} />
                  </div>

                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {b.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {b.desc}
                  </p>
                </div>

                <div className={`pt-4 mt-6 border-t flex items-center justify-between text-xs font-bold ${
                  isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}>
                  <span>Plexaar Standard</span>
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenDemo}
            className="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>Transform Your Operations Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
