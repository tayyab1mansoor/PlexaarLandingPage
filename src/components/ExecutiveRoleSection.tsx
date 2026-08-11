import React, { useState } from 'react';
import { ROLE_VIEWS } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode, ProductId } from '../types';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Sparkles,
  BarChart3
} from 'lucide-react';

interface ExecutiveRoleSectionProps {
  theme: ThemeMode;
  onNavigateToProduct: (id: ProductId) => void;
  onOpenDemo: () => void;
}

export const ExecutiveRoleSection: React.FC<ExecutiveRoleSectionProps> = ({
  theme,
  onNavigateToProduct,
  onOpenDemo
}) => {
  const [activeRoleId, setActiveRoleId] = useState<'ceo' | 'operations' | 'hr' | 'finance' | 'marketing'>('ceo');
  const isDark = theme === 'dark';

  const selectedRole = ROLE_VIEWS.find((r) => r.id === activeRoleId) || ROLE_VIEWS[0];

  return (
    <section id="roles" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Section background (soft, section-matched) */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-20 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.executiveRole})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-[#fbfcff]/80 via-[#fbfcff]/60 to-[#fbfcff]/92'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
            <Briefcase className="w-3.5 h-3.5 text-[#548DFF]" />
            ROLE-BASED ENTERPRISE VALUE
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Plexaar for Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
              Business Leader.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Select your leadership role to see how Plexaar tailors real-time operational visibility and decision-making intelligence to your specific responsibilities.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {ROLE_VIEWS.map((role) => {
            const isSelected = activeRoleId === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRoleId(role.id)}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white border-transparent shadow-lg shadow-[#548DFF]/25 scale-105'
                    : isDark 
                      ? 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                {role.id.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* DYNAMIC ROLE DASHBOARD CARD */}
        <div className={`mt-10 p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-8 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} gap-4`}>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#548DFF]">
                {selectedRole.roleName}
              </div>
              <h3 className={`text-2xl sm:text-3xl font-black mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {selectedRole.title} Dashboard
              </h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {selectedRole.subtitle}
              </p>
            </div>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#548DFF] hover:bg-[#5B7CFD] text-white transition-all flex items-center gap-2"
            >
              <span>Schedule {selectedRole.id.toUpperCase()} Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {selectedRole.metrics.map((m, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className={`text-xs font-medium mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{m.title}</div>
                <div className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{m.value}</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{m.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Key Strategic Focuses */}
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
            <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Strategic Decision Pillars:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {selectedRole.keyFocus.map((focus, idx) => (
                <div key={idx} className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-200' 
                    : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-[#548DFF] shrink-0" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
