import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode, ProductId } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Megaphone, 
  Calendar, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Layers 
} from 'lucide-react';

interface CustomerJourneySectionProps {
  theme: ThemeMode;
  onNavigateToProduct: (id: ProductId) => void;
  onOpenDemo: () => void;
}

export const CustomerJourneySection: React.FC<CustomerJourneySectionProps> = ({
  theme,
  onNavigateToProduct,
  onOpenDemo
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isDark = theme === 'dark';

  const currentStep = JOURNEY_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-[#4294FF]" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-[#548DFF]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#548DFF]" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-[#548DFF]" />;
    }
  };

  return (
    <section id="journey" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Section Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.customerJourney})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#548DFF]" />
            END-TO-END ECOSYSTEM WORKFLOW
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            See How Plexaar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
              Works Together.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Instead of managing products separately, experience one continuous operational journey where every event flows naturally to the next department.
          </p>
        </div>

        {/* STEP SELECTOR TAPE */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {JOURNEY_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? isDark 
                      ? 'bg-gradient-to-tr from-[#0575E6]/20 to-slate-900 border-[#548DFF] shadow-xl shadow-[#548DFF]/10 scale-[1.02]'
                      : 'bg-white border-[#548DFF] shadow-lg scale-[1.02]'
                    : isDark 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                      : 'bg-slate-100 border-slate-200 hover:border-slate-300 text-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black ${isSelected ? 'text-[#548DFF]' : isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    STEP {step.stepNumber}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#548DFF]" />}
                </div>

                <div className={`text-xs font-bold line-clamp-1 mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {step.productName}
                </div>

                <div className={`text-[10px] line-clamp-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {step.action}
                </div>
              </button>
            );
          })}
        </div>

        {/* DYNAMIC ACTIVE JOURNEY DISPLAY CARD */}
        <div className={`mt-8 p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#548DFF]/20 text-[#548DFF] border border-[#548DFF]/30">
                  WORKFLOW STEP {currentStep.stepNumber} OF 06
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {currentStep.action}
                </span>
              </div>

              <h3 className={`text-2xl sm:text-4xl font-black leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {currentStep.title}
              </h3>

              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {currentStep.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigateToProduct(currentStep.productId)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  <span>Explore {currentStep.productName} Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenDemo}
                  className="px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white shadow-lg shadow-[#548DFF]/20 hover:scale-105 transition-all"
                >
                  Request Full Ecosystem Demo
                </button>
              </div>
            </div>

            {/* Visual Icon Illustration */}
            <div className={`lg:col-span-5 flex items-center justify-center p-8 rounded-2xl border relative ${
              isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#548DFF]/10 via-[#5B7CFD]/10 to-[#FFD705]/10 rounded-2xl" />
              <div className="text-center relative z-10 space-y-3">
                <div className={`w-20 h-20 rounded-3xl border border-[#548DFF]/40 mx-auto flex items-center justify-center shadow-2xl ${
                  isDark ? 'bg-slate-900' : 'bg-white'
                }`}>
                  {getStepIcon(currentStep.iconName)}
                </div>
                <div className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{currentStep.productName}</div>
                <div className="text-xs text-[#548DFF] font-bold tracking-widest uppercase">
                  ACTIVE IN WORKFLOW
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
