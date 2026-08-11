import React from 'react';
import { ThemeMode, ProductId } from '../../types';
import {
  PRODUCT_BG_IMAGES,
  PRODUCT_GIF_ANIMATIONS,
  PRODUCT_BG_OPACITY,
} from '../../data/productImages';
import {
  Users,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

interface IReachSectionProps {
  theme: ThemeMode;
  onOpenDemo: (id?: ProductId) => void;
}

export const IReachSection: React.FC<IReachSectionProps> = ({ theme, onOpenDemo }) => {
  const isDark = theme === 'dark';
  const ireachBgImage = PRODUCT_BG_IMAGES.ireach;
  const ireachGif = PRODUCT_GIF_ANIMATIONS.ireach;

  return (
    <section
      id="product-ireach"
      className={`py-24 relative overflow-hidden ${
        isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${ireachBgImage})`, opacity: PRODUCT_BG_OPACITY }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b pointer-events-none ${
          isDark
            ? 'from-slate-950/60 via-slate-950/40 to-slate-950'
            : 'from-[#fbfcff]/75 via-[#fbfcff]/55 to-[#fbfcff]/90'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-10 border-b ${
            isDark ? 'border-slate-800/80' : 'border-slate-200'
          }`}
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
              <Users className="w-3.5 h-3.5 text-[#548DFF]" />
              iREACH — WORKFORCE & HR MANAGEMENT
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Human Capital & Shift Rosters{' '}
              <span className="brand-gradient-text">In Perfect Harmony.</span>
            </h2>
            <p
              className={`text-base sm:text-lg font-medium leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Automate attendance, leave approvals, and payroll dispatch with precision across every
              location.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo('ireach')}
            className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#548DFF]/25 shrink-0"
          >
            <span>Book iReach Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 flex justify-end">
          <div className="text-xs text-[#548DFF] font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#548DFF]" />
            <span>Biometric Sync • Automatic Payroll</span>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-[#548DFF]/30 bg-slate-900 shadow-2xl p-5 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-bold pb-4 mb-4 border-b border-slate-800 gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-slate-200">
              <UserCheck className="w-4 h-4 text-[#548DFF]" />
              iReach HR Attendance Radar Showcase
            </span>
            <span className="text-slate-400">Live Preview</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 relative aspect-[16/9] w-full">
            <img
              src={ireachGif.gifUrl}
              alt={ireachGif.caption}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
              <span className="font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#548DFF]" />
                {ireachGif.caption}
              </span>
              <span className="text-[#548DFF] font-extrabold text-[11px] uppercase tracking-wider">
                Synced Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
