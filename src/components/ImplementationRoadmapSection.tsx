import React from 'react';
import { IMPLEMENTATION_STEPS } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode } from '../types';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ImplementationRoadmapSectionProps {
  theme: ThemeMode;
  onOpenDemo: () => void;
}

export const ImplementationRoadmapSection: React.FC<ImplementationRoadmapSectionProps> = ({ theme, onOpenDemo }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Section background (soft, section-matched) */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.roadmap})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-[#fbfcff]/80 via-[#fbfcff]/60 to-[#fbfcff]/92'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
            ENTERPRISE DEPLOYMENT MODEL
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            From Business Requirements to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
              Connected Operations.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Our structured 7-phase enterprise onboarding framework guarantees a smooth transition without operational disruption.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {IMPLEMENTATION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-[#548DFF]/40' 
                  : 'bg-white border-slate-200 hover:border-[#548DFF]/40 shadow-sm'
              }`}
            >
              <div>
                <div className="text-xl font-black text-[#548DFF] mb-2">
                  {step.number}
                </div>
                <div className={`text-xs font-black uppercase tracking-wider mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </div>
                <div className="text-[10px] text-[#548DFF] font-bold mb-3">
                  {step.subtitle}
                </div>
                <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.description}
                </p>
              </div>

              <div className={`pt-3 mt-4 border-t flex items-center justify-between text-[10px] font-bold ${
                isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'
              }`}>
                <span>Phase {idx + 1}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#548DFF]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
