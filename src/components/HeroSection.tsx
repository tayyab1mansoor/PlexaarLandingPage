import React, { useState, useEffect } from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { PRODUCT_BG_IMAGES } from '../data/productImages';
import { PRODUCT_LOGOS, PLEXAAR_HEADER_LOGO } from '../data/productLogos';
import { ThemeMode, ProductId } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Activity, 
  Zap,
  CheckCircle2,
  Play,
  Check
} from 'lucide-react';

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
  const [selectedHeroBg, setSelectedHeroBg] = useState<string>('calendex');
  const heroBgOpacity = 30;

  // Background map options
  const heroBgOptions: Record<string, { label: string; url: string }> = {
    calendex: { label: 'Calendex Appointments', url: PRODUCT_BG_IMAGES.calendex },
    buzzcom: { label: 'Buzzcom Messages', url: PRODUCT_BG_IMAGES.buzzcom },
    ireach: { label: 'iReach HR Radar', url: PRODUCT_BG_IMAGES.ireach },
    ondal: { label: 'Ondal Financials', url: PRODUCT_BG_IMAGES.ondal },
    salexplex: { label: 'SalexPlex Marketing', url: PRODUCT_BG_IMAGES.salexplex }
  };

  const bgKeys = Object.keys(heroBgOptions);
  const currentBgUrl = heroBgOptions[selectedHeroBg]?.url || PRODUCT_BG_IMAGES.calendex;

  // Auto slideshow sequence for background image
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedHeroBg((prev) => {
        const nextIdx = (bgKeys.indexOf(prev) + 1) % bgKeys.length;
        return bgKeys[nextIdx];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [bgKeys]);

  // Simulation pulse sequence
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
    <section id="hero" className={`relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Base Solid Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`} />

      {/* High-Resolution Dynamic Animated Hero Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          key={currentBgUrl}
          src={currentBgUrl} 
          alt="Hero Enterprise Background"
          className="w-full h-full object-cover transition-all duration-1000 transform animate-kenburns"
          style={{ opacity: heroBgOpacity / 100 }}
          onError={(e) => {
            // Reliable high-res tech fallback image if local asset fails to load
            e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Floating Animated Light Beams & Particles for Cinematic Effect */}
        <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-b from-[#548DFF]/20 via-transparent to-[#548DFF]/20 pointer-events-none animate-beam blur-xl" />
        <div className="absolute top-0 right-1/4 w-80 h-full bg-gradient-to-b from-[#548DFF]/20 via-transparent to-[#548DFF]/20 pointer-events-none animate-beam blur-xl" style={{ animationDelay: '4s' }} />
      </div>

      {/* Radial Gradient & Vignette Overlay for High Text Readability */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/40 via-slate-950/20 to-slate-950/85' : 'from-slate-50/50 via-slate-50/20 to-slate-50/85'}`} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-[#548DFF]/25 via-[#548DFF]/15 to-[#548DFF]/25 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#548DFF]/30 bg-[#548DFF]/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#548DFF] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#548DFF] dark:text-[#548DFF]">
              ENTERPRISE BUSINESS ECOSYSTEM
            </span>
          </div>

          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ONE PLATFORM.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#548DFF] to-[#6BA0FF] dark:from-[#548DFF] dark:to-[#FFD705]">
              EVERY PART OF YOUR BUSINESS.
            </span>
          </h1>

          <p className={`text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            Bring communication, appointments, people, finance, and marketing together through one connected enterprise ecosystem.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-[#548DFF] to-[#6BA0FF] text-white shadow-xl shadow-[#548DFF]/25 hover:shadow-[#548DFF]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <span>BOOK A DEMO</span>
              <ArrowRight className="w-5 h-5 text-[#FFD705] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateTo('ecosystem')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold border transition-all duration-200 flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-slate-700 bg-slate-900/90 text-white hover:bg-slate-800 hover:border-slate-600'
                  : 'border-slate-300 bg-white text-[#131313] hover:bg-slate-100 shadow-sm'
              }`}
            >
              <span>EXPLORE THE ECOSYSTEM</span>
            </button>
          </div>

          <p className={`text-xs font-medium pt-2 flex items-center justify-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <Shield className="w-3.5 h-3.5 text-[#548DFF]" />
            Built for organizations that need connected operations, better visibility, and room to scale.
          </p>
        </div>

        {/* CINEMATIC PLEXAAR ECOSYSTEM NETWORK VISUALIZATION */}
        <div className="mt-16 lg:mt-20 max-w-5xl mx-auto relative">
          
          <div className={`rounded-3xl p-6 sm:p-10 border ${isDark ? 'border-slate-800/80 bg-slate-950/85' : 'border-slate-200 bg-white shadow-xl'} backdrop-blur-xl relative overflow-hidden transition-all duration-300 shadow-2xl`}>
            
            {/* Control Bar */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b ${isDark ? 'border-slate-800/50' : 'border-slate-200'} gap-4`}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#42D742] animate-pulse" />
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Live Enterprise Operating Topology
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 border transition-all ${
                    isSimulating 
                      ? 'bg-[#548DFF]/20 text-[#548DFF] border-[#548DFF]/30' 
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <Activity className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  {isSimulating ? 'Simulation Active' : 'Simulation Paused'}
                </button>

                <div className={`hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border ${isDark ? 'text-slate-300 bg-slate-900/80 border-slate-800' : 'text-slate-700 bg-slate-100 border-slate-200'}`}>
                  <span>Active Node:</span>
                  <span className="font-bold text-[#548DFF] capitalize">{activeNode}</span>
                </div>
              </div>
            </div>

            {/* Interactive Ecosystem Map Visual */}
            <div className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-center">
              
              {/* SVG Connecting Lines between Central Plexaar Core and 5 Product Nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#548DFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#5B7CFD" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Animated Data Stream Lines */}
                {/* Center to Top (Buzzcom) */}
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                {/* Center to Top-Right (Calendex) */}
                <line x1="50%" y1="50%" x2="84%" y2="28%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                {/* Center to Bottom-Right (iReach) */}
                <line x1="50%" y1="50%" x2="80%" y2="78%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                {/* Center to Bottom-Left (Ondal) */}
                <line x1="50%" y1="50%" x2="20%" y2="78%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
                {/* Center to Top-Left (SalexPlex) */}
                <line x1="50%" y1="50%" x2="16%" y2="28%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-dash-flow" />
              </svg>

              {/* CENTER NODE: PLEXAAR OPERATING CORE */}
              <div 
                onClick={() => setActiveNode('plexaar')}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group transition-all duration-300 ${
                  activeNode === 'plexaar' ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-slate-950 border-2 border-[#548DFF]/80 shadow-2xl shadow-[#548DFF]/50 p-2">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#548DFF]/30 via-[#548DFF]/15 to-[#548DFF]/30 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-2 relative z-10 text-center border border-slate-700">
                    <img
                      src={PLEXAAR_HEADER_LOGO}
                      alt="Plexaar"
                      className="h-8 sm:h-10 w-auto mb-1 object-contain"
                    />
                    <span className="text-[9px] font-bold text-[#548DFF] tracking-widest uppercase">CORE</span>
                  </div>
                </div>
              </div>

              {/* TOP NODE: BUZZCOM */}
              <div 
                onClick={() => setActiveNode('buzzcom')}
                className={`absolute top-[4%] left-1/2 -translate-x-1/2 z-20 cursor-pointer group transition-all duration-300 ${
                  activeNode === 'buzzcom' || (isSimulating && activeSimulatedProduct.id === 'buzzcom') ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-[#548DFF]/50 shadow-xl shadow-[#548DFF]/20 hover:border-[#548DFF] transition-all">
                  <div className="p-1.5 rounded-xl bg-[#548DFF]/20 border border-[#548DFF]/30">
                    <img src={PRODUCT_LOGOS.buzzcom} alt="Buzzcom" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-black text-white group-hover:text-[#548DFF]">BUZZCOM</div>
                    <div className="text-[10px] text-slate-300 font-medium">Communication</div>
                  </div>
                </div>
              </div>

              {/* TOP RIGHT NODE: CALENDEX */}
              <div 
                onClick={() => setActiveNode('calendex')}
                className={`absolute top-[22%] right-[2%] sm:right-[10%] z-20 cursor-pointer group transition-all duration-300 ${
                  activeNode === 'calendex' || (isSimulating && activeSimulatedProduct.id === 'calendex') ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-[#5B7CFD]/50 shadow-xl shadow-[#5B7CFD]/20 hover:border-[#5B7CFD] transition-all">
                  <div className="p-1.5 rounded-xl bg-[#5B7CFD]/20 border border-[#5B7CFD]/30">
                    <img src={PRODUCT_LOGOS.calendex} alt="Calendex" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-black text-white group-hover:text-[#5B7CFD]">CALENDEX</div>
                    <div className="text-[10px] text-slate-300 font-medium">Appointments</div>
                  </div>
                </div>
              </div>

              {/* BOTTOM RIGHT NODE: iREACH */}
              <div 
                onClick={() => setActiveNode('ireach')}
                className={`absolute bottom-[10%] right-[5%] sm:right-[12%] z-20 cursor-pointer group transition-all duration-300 ${
                  activeNode === 'ireach' || (isSimulating && activeSimulatedProduct.id === 'ireach') ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-[#0575E6]/50 shadow-xl shadow-[#0575E6]/20 hover:border-[#0575E6] transition-all">
                  <div className="p-1.5 rounded-xl bg-[#0575E6]/20 border border-[#0575E6]/30">
                    <img src={PRODUCT_LOGOS.ireach} alt="iReach" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-black text-white group-hover:text-[#0575E6]">iREACH</div>
                    <div className="text-[10px] text-slate-300 font-medium">HR / People</div>
                  </div>
                </div>
              </div>

              {/* BOTTOM LEFT NODE: ONDAL */}
              <div 
                onClick={() => setActiveNode('ondal')}
                className={`absolute bottom-[10%] left-[5%] sm:left-[12%] z-20 cursor-pointer group transition-all duration-300 ${
                  activeNode === 'ondal' || (isSimulating && activeSimulatedProduct.id === 'ondal') ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-[#FFD705]/50 shadow-xl shadow-[#FFD705]/20 hover:border-[#FFD705] transition-all">
                  <div className="p-1.5 rounded-xl bg-[#FFD705]/20 border border-[#FFD705]/40">
                    <img src={PRODUCT_LOGOS.ondal} alt="Ondal" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-black text-white group-hover:text-[#FFD705]">ONDAL</div>
                    <div className="text-[10px] text-slate-300 font-medium">Finance</div>
                  </div>
                </div>
              </div>

              {/* TOP LEFT NODE: SALEXPLEX */}
              <div 
                onClick={() => setActiveNode('salexplex')}
                className={`absolute top-[22%] left-[2%] sm:left-[10%] z-20 cursor-pointer group transition-all duration-300 ${
                  activeNode === 'salexplex' || (isSimulating && activeSimulatedProduct.id === 'salexplex') ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-[#4294FF]/50 shadow-xl shadow-[#4294FF]/20 hover:border-[#4294FF] transition-all">
                  <div className="p-1.5 rounded-xl bg-[#4294FF]/20 border border-[#4294FF]/30">
                    <img src={PRODUCT_LOGOS.salexplex} alt="SalexPlex" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-black text-white group-hover:text-[#4294FF]">SALEXPLEX</div>
                    <div className="text-[10px] text-slate-300 font-medium">Marketing</div>
                  </div>
                </div>
              </div>

            </div>

            {/* LIVE CROSS-PRODUCT DATA STREAM SIMULATOR TAPE */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-[#548DFF] to-[#6BA0FF] text-white">
                  <Zap className="w-4 h-4 animate-bounce" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Ecosystem Data Stream:</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#548DFF]/20 text-[#548DFF] border border-[#548DFF]/30">
                      {activeSimulatedProduct.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {activeSimulatedProduct.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigateTo(`product-${activeSimulatedProduct.id}`)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-[#548DFF] border border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <span>Explore {activeSimulatedProduct.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* PRODUCT BACKGROUND IMAGE CARDS GRID IN HERO */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#548DFF]">PRODUCT BACKGROUND SHOWCASE</span>
            <h3 className="text-2xl font-black text-white mt-1">Explore High-Resolution Product Backgrounds</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLEXAAR_PRODUCTS.map((prod) => {
              const bgImg = PRODUCT_BG_IMAGES[prod.id];
              return (
                <div 
                  key={prod.id}
                  onClick={() => onNavigateTo(`product-${prod.id}`)}
                  className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 hover:border-[#548DFF]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#548DFF]/20 flex flex-col justify-between h-56"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    style={{ backgroundImage: `url(${bgImg})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />

                  <div className="relative z-10 p-5 flex items-start justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/80 border border-slate-700 text-[#548DFF]">
                      {prod.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="relative z-10 p-5 space-y-1">
                    <h4 className="text-lg font-black text-white group-hover:text-[#548DFF] transition-colors">
                      {prod.name}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {prod.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

