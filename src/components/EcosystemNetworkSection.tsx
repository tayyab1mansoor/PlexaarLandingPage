import React, { useState } from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode, ProductId } from '../types';
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  TrendingUp, 
  Megaphone, 
  Cpu, 
  ArrowRight, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface EcosystemNetworkSectionProps {
  theme: ThemeMode;
  onNavigateToProduct: (id: ProductId) => void;
  onOpenDemo: (id?: ProductId) => void;
}

export const EcosystemNetworkSection: React.FC<EcosystemNetworkSectionProps> = ({
  theme,
  onNavigateToProduct,
  onOpenDemo
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<ProductId | null>('buzzcom');
  const isDark = theme === 'dark';

  const selectedProdInfo = PLEXAAR_PRODUCTS.find((p) => p.id === hoveredProduct) || PLEXAAR_PRODUCTS[0];

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'buzzcom': return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 'calendex': return <Calendar className="w-5 h-5 text-purple-400" />;
      case 'ireach': return <Users className="w-5 h-5 text-blue-400" />;
      case 'ondal': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'salexplex': return <Megaphone className="w-5 h-5 text-pink-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="ecosystem" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Section Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.ecosystem})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600 via-cyan-500 to-purple-600 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            UNIFIED PLATFORM ARCHITECTURE
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Five Powerful Products.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400">
              One Connected Business.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Hover over any product to observe how specialized enterprise modules stream data natively through the Plexaar operating core.
          </p>
        </div>

        {/* ECOSYSTEM VISUAL MATRIX */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: 5 Product Interactive Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {PLEXAAR_PRODUCTS.map((prod) => {
              const isSelected = hoveredProduct === prod.id;
              return (
                <div
                  key={prod.id}
                  onMouseEnter={() => setHoveredProduct(prod.id)}
                  onClick={() => onNavigateToProduct(prod.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? isDark 
                        ? 'bg-slate-900 border-cyan-500/80 shadow-xl shadow-cyan-500/10 scale-[1.02]' 
                        : 'bg-white border-cyan-500 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                      : isDark
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div 
                      className="p-3 rounded-xl border border-white/10 shrink-0"
                      style={{ backgroundColor: `${prod.color}20` }}
                    >
                      {getProductIcon(prod.id)}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs font-extrabold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {prod.category}
                      </div>
                      <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-500`}>
                        {prod.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span 
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 hidden sm:inline-block"
                      style={{ color: prod.color, backgroundColor: `${prod.color}15` }}
                    >
                      {prod.metrics[0].label}: {prod.metrics[0].value}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-500 translate-x-1' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Active Product Showcase Display */}
          <div className="lg:col-span-7">
            
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-between ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              {/* Product Header */}
              <div>
                <div className={`flex items-center justify-between pb-6 mb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-3 rounded-2xl border border-white/10"
                      style={{ backgroundColor: `${selectedProdInfo.color}20` }}
                    >
                      {getProductIcon(selectedProdInfo.id)}
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {selectedProdInfo.category}
                      </div>
                      <h3 className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {selectedProdInfo.name}
                      </h3>
                    </div>
                  </div>

                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold border"
                    style={{ color: selectedProdInfo.color, borderColor: `${selectedProdInfo.color}40`, backgroundColor: `${selectedProdInfo.color}10` }}
                  >
                    Connected to Plexaar Core
                  </span>
                </div>

                <p className={`text-base font-medium leading-relaxed mb-6 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {selectedProdInfo.tagline}
                </p>

                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {selectedProdInfo.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2.5 mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'} mb-3`}>
                    Core Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProdInfo.keyFeatures.map((feat, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-xs font-semibold p-2.5 rounded-xl border ${
                        isDark ? 'text-slate-300 bg-slate-950/60 border-slate-800' : 'text-slate-800 bg-slate-50 border-slate-200'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className={`pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} flex flex-col sm:flex-row items-center justify-between gap-4`}>
                <div className="flex items-center gap-6">
                  {selectedProdInfo.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xl font-black" style={{ color: selectedProdInfo.color }}>
                        {m.value}
                      </div>
                      <div className={`text-[10px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => onNavigateToProduct(selectedProdInfo.id)}
                    className={`flex-1 sm:flex-none px-5 py-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                      isDark ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                    }`}
                  >
                    <span>Full Product Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenDemo(selectedProdInfo.id)}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                  >
                    Request Demo
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
