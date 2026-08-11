import React from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode, ProductId } from '../types';
import { 
  Building, 
  Globe2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface ScalabilityAndModularSectionProps {
  theme: ThemeMode;
  onNavigateToProduct: (id: ProductId) => void;
  onOpenDemo: (id?: ProductId) => void;
}

export const ScalabilityAndModularSection: React.FC<ScalabilityAndModularSectionProps> = ({
  theme,
  onNavigateToProduct,
  onOpenDemo
}) => {
  const isDark = theme === 'dark';

  const scalabilityPhases = [
    { title: 'Phase 01: Single Team', desc: 'Communication & Appointments unified for quick operational alignment.', icon: Layers },
    { title: 'Phase 02: Multi-Department', desc: 'Add HR, Financial ledgers, and Marketing portals as teams expand.', icon: Building },
    { title: 'Phase 03: Multi-Location', desc: 'Centralize cross-branch schedules, payrolls, and revenue streams.', icon: Globe2 },
    { title: 'Phase 04: Global Enterprise', desc: 'Full ecosystem orchestration with executive-level C-suite governance.', icon: ShieldCheck }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Section Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.scalability})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* SCALABILITY TIMELINE */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
              ENTERPRISE SCALABILITY
            </div>

            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Built for Organizations That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] to-[#548DFF]">
                Keep Growing.
              </span>
            </h2>

            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Plexaar remains your central operating system as you expand from single department workflows to multi-national enterprise operations.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scalabilityPhases.map((phase, idx) => {
              const IconComp = phase.icon;
              return (
                <div key={idx} className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-[#548DFF]/40' 
                    : 'bg-white border-slate-200 hover:border-[#548DFF]/40 shadow-sm'
                }`}>
                  <div>
                    <div className={`p-3 rounded-2xl border w-fit mb-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <IconComp className="w-5 h-5 text-[#548DFF]" />
                    </div>
                    <div className={`text-sm font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{phase.title}</div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{phase.desc}</p>
                  </div>

                  <div className={`pt-4 mt-4 border-t flex items-center justify-between text-[10px] font-bold text-[#548DFF] ${
                    isDark ? 'border-slate-800' : 'border-slate-200'
                  }`}>
                    <span>Scalable Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MODULAR ECOSYSTEM APPROACH */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-[#548DFF] bg-purple-500/10 border border-purple-500/20">
              MODULAR ECOSYSTEM
            </div>

            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Explore Specialized Products Within{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] to-[#548DFF]">
                The Plexaar Ecosystem.
              </span>
            </h2>

            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Every specialized product operates natively inside Plexaar while preserving its distinct operational focus.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PLEXAAR_PRODUCTS.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigateToProduct(p.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all hover:scale-105 flex flex-col justify-between group ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div 
                    className="p-3 rounded-xl border border-white/10 w-fit mb-3"
                    style={{ backgroundColor: `${p.color}20` }}
                  >
                    <span className="font-extrabold text-sm" style={{ color: p.color }}>
                      {p.name[0]}
                    </span>
                  </div>

                  <div className={`text-sm font-extrabold group-hover:text-[#548DFF] mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {p.name}
                  </div>

                  <div className={`text-[11px] line-clamp-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {p.description}
                  </div>
                </div>

                <div className={`pt-4 mt-4 border-t flex items-center justify-between text-xs font-bold ${
                  isDark ? 'border-slate-800' : 'border-slate-200'
                }`} style={{ color: p.color }}>
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
