import React, { useState, useEffect } from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { HERO_SECTION_BG } from '../data/productImages';
import { PRODUCT_LOGOS, PLEXAAR_HEADER_LOGO } from '../data/productLogos';
import { ThemeMode, ProductId } from '../types';
import { ArrowRight, Shield, Activity, Zap } from 'lucide-react';

interface HeroSectionProps {
  theme: ThemeMode;
  onOpenDemo: (productId?: ProductId) => void;
  onNavigateTo: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onOpenDemo,
  onNavigateTo
}) => {
  const [activeNode, setActiveNode] = useState<ProductId | 'plexaar'>('plexaar');
  const [isSimulating, setIsSimulating] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(interval);
  }, [isSimulating]);

  const activeSimulatedProduct = PLEXAAR_PRODUCTS[activeStep];
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className={`relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden ${
        isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'
      }`}
    >
      {/* Base */}
      <div className={`absolute inset-0 ${isDark ? 'bg-slate-950' : 'bg-[#eef2f8]'}`} />

      {/* Static hero image — no zoom / ken burns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={HERO_SECTION_BG}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.48 }}
        />
      </div>

      {/* Soft readability wash — keeps lounge visible, text sharp */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isDark
              ? 'from-slate-950/50 via-slate-950/30 to-slate-950/90'
              : 'from-[#fbfcff]/70 via-[#fbfcff]/35 to-[#fbfcff]/92'
          }`}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fbfcff]/80 to-transparent" />
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[#548DFF]/12 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand-first hero copy */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="animate-fade-up inline-flex flex-col items-center gap-3">
            <img
              src={PLEXAAR_HEADER_LOGO}
              alt="Plexaar"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
            />
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#548DFF]">
              Enterprise Business Ecosystem
            </p>
          </div>

          <h1
            className={`animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            One platform.{' '}
            <span className="brand-gradient-text">Every part of your business.</span>
          </h1>

          <p
            className={`animate-fade-up-delay-2 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            Communication, appointments, people, finance, and marketing — connected in one
            operating ecosystem.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold brand-cta hover:brightness-105 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#FFD705] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateTo('ecosystem')}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold border transition-all duration-200 ${
                isDark
                  ? 'border-slate-700 bg-slate-900/90 text-white hover:bg-slate-800'
                  : 'border-white/70 bg-white/75 backdrop-blur-md text-[#131313] hover:border-[#548DFF]/45 hover:bg-white shadow-sm'
              }`}
            >
              Explore the Ecosystem
            </button>
          </div>

          <p
            className={`animate-fade-up-delay-3 text-xs font-medium flex items-center justify-center gap-2 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-[#548DFF]" />
            Built for organizations that need connected operations and room to scale.
          </p>
        </div>

        {/* Topology */}
        <div className="mt-12 lg:mt-14 max-w-5xl mx-auto relative animate-fade-up-delay-3">
          <div
            className={`rounded-3xl p-5 sm:p-7 border relative overflow-hidden shadow-2xl shadow-[#548DFF]/10 backdrop-blur-xl ${
              isDark
                ? 'border-slate-800/80 bg-slate-950/70'
                : 'border-white/55 bg-white/55'
            }`}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-[#548DFF]/12 blur-[80px]" />
            </div>

            <div
              className={`relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-3 border-b gap-4 ${
                isDark ? 'border-slate-800/50' : 'border-slate-200/70'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#42D742] animate-pulse" />
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Live Enterprise Operating Topology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 border transition-all ${
                    isSimulating
                      ? 'bg-[#548DFF]/20 text-[#548DFF] border-[#548DFF]/30'
                      : 'bg-white/85 text-[#8d8d8d] border-[#D1D1D1]'
                  }`}
                >
                  <Activity
                    className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`}
                    style={{ animationDuration: '6s' }}
                  />
                  {isSimulating ? 'Simulation Active' : 'Simulation Paused'}
                </button>

                <div
                  className={`hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border ${
                    isDark
                      ? 'text-slate-300 bg-slate-900/80 border-slate-800'
                      : 'text-slate-700 bg-white/85 border-slate-200'
                  }`}
                >
                  <span>Active Node:</span>
                  <span className="font-bold text-[#548DFF] capitalize">{activeNode}</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 min-h-[340px] sm:min-h-[380px] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0575E6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#548DFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#5B7CFD" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                <line x1="50%" y1="50%" x2="82%" y2="24%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                <line x1="50%" y1="50%" x2="80%" y2="82%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                <line x1="50%" y1="50%" x2="20%" y2="82%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                <line x1="50%" y1="50%" x2="18%" y2="24%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
              </svg>

              <div
                onClick={() => setActiveNode('plexaar')}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all duration-300 ${
                  activeNode === 'plexaar' ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white border-2 border-[#548DFF] shadow-xl shadow-[#548DFF]/25 p-2">
                  <div className="w-full h-full rounded-full bg-[#fbfcff] flex flex-col items-center justify-center p-2.5 text-center border border-[#548DFF]/20">
                    <img src={PLEXAAR_HEADER_LOGO} alt="Plexaar" className="h-7 sm:h-9 w-auto object-contain mb-1" />
                    <span className="text-[9px] font-bold text-[#548DFF] tracking-widest uppercase">CORE</span>
                  </div>
                </div>
              </div>

              {(
                [
                  {
                    id: 'buzzcom' as const,
                    pos: 'top-[1%] left-1/2 -translate-x-1/2',
                    border: 'border-[#548DFF]/35 hover:border-[#548DFF]',
                    label: 'BUZZCOM',
                    sub: 'Communication',
                    hover: 'group-hover:text-[#548DFF]',
                  },
                  {
                    id: 'calendex' as const,
                    pos: 'top-[18%] right-[2%] sm:right-[8%]',
                    border: 'border-[#5B7CFD]/35 hover:border-[#5B7CFD]',
                    label: 'CALENDEX',
                    sub: 'Appointments',
                    hover: 'group-hover:text-[#5B7CFD]',
                  },
                  {
                    id: 'ireach' as const,
                    pos: 'bottom-[6%] right-[4%] sm:right-[10%]',
                    border: 'border-[#0575E6]/35 hover:border-[#0575E6]',
                    label: 'iREACH',
                    sub: 'HR / People',
                    hover: 'group-hover:text-[#0575E6]',
                  },
                  {
                    id: 'ondel' as const,
                    pos: 'bottom-[6%] left-[4%] sm:left-[10%]',
                    border: 'border-[#FFD705]/50 hover:border-[#FFD705]',
                    label: 'ONDEL',
                    sub: 'Finance',
                    hover: 'group-hover:text-[#0575E6]',
                  },
                  {
                    id: 'salexplex' as const,
                    pos: 'top-[18%] left-[2%] sm:left-[8%]',
                    border: 'border-[#4294FF]/35 hover:border-[#4294FF]',
                    label: 'SALEXPLEX',
                    sub: 'Marketing',
                    hover: 'group-hover:text-[#4294FF]',
                  },
                ] as const
              ).map((node) => {
                const active =
                  activeNode === node.id ||
                  (isSimulating && activeSimulatedProduct.id === node.id);
                return (
                  <div
                    key={node.id}
                    onClick={() => {
                      setActiveNode(node.id);
                      onNavigateTo(`product-${node.id}`);
                    }}
                    className={`absolute ${node.pos} z-20 cursor-pointer group transition-all duration-300 ${
                      active ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border shadow-md transition-all ${node.border}`}
                    >
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-white flex items-center justify-center">
                        <img
                          src={PRODUCT_LOGOS[node.id]}
                          alt={node.label}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <div className="text-left hidden sm:block">
                        <div className={`text-xs font-black text-[#131313] ${node.hover}`}>
                          {node.label}
                        </div>
                        <div className="text-[10px] text-[#8d8d8d] font-medium">{node.sub}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 mt-4 p-4 rounded-2xl bg-white/90 border border-[#D1D1D1] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#131313] flex items-center gap-2">
                    <span>Ecosystem Data Stream:</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#548DFF]/10 text-[#548DFF] border border-[#548DFF]/25">
                      {activeSimulatedProduct.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#8d8d8d] mt-0.5">{activeSimulatedProduct.tagline}</p>
                </div>
              </div>

              <button
                onClick={() => onNavigateTo(`product-${activeSimulatedProduct.id}`)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#548DFF]/10 hover:bg-[#548DFF] text-[#548DFF] hover:text-white border border-[#548DFF]/30 transition-all flex items-center gap-1.5"
              >
                <span>Explore {activeSimulatedProduct.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
