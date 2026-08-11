import React, { useState } from 'react';
import { ThemeMode, ProductId } from '../../types';
import { PRODUCT_BG_IMAGES, PRODUCT_GIF_ANIMATIONS, PRODUCT_BG_OPACITY } from '../../data/productImages';
import { 
  Megaphone, 
  Target, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Globe, 
  Zap,
  Sparkles,
  Layers,
  Activity,
  Play,
  Pause,
  Filter,
  ShieldCheck
} from 'lucide-react';

interface SalexPlexSectionProps {
  theme: ThemeMode;
  onOpenDemo: (id?: ProductId) => void;
}

export const SalexPlexSection: React.FC<SalexPlexSectionProps> = ({ theme, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'animatedGif' | 'interactiveFunnel'>('animatedGif');
  const [isPlayingGif, setIsPlayingGif] = useState(true);
  const [activeCampaign, setActiveCampaign] = useState(0);

  const campaigns = [
    { name: 'Global Enterprise Digital Portal', leads: '1,420', cta: '4.8x ROI', reach: '480K Views', status: 'Active' },
    { name: 'Local HVAC & Plumbing Campaign', leads: '890', cta: '3.9x ROI', reach: '210K Views', status: 'Active' },
    { name: 'Laser Clinic Social Lead Gen', leads: '2,150', cta: '6.2x ROI', reach: '820K Views', status: 'Scaling' }
  ];

  const isDark = theme === 'dark';
  const salexplexBgImage = PRODUCT_BG_IMAGES.salexplex;
  const salexplexGif = PRODUCT_GIF_ANIMATIONS.salexplex;

  return (
    <section id="product-salexplex" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Product Relevant Background Image with Opacity Slider */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${salexplexBgImage})`, 
          opacity: PRODUCT_BG_OPACITY 
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-[#fbfcff]/75 via-[#fbfcff]/55 to-[#fbfcff]/90'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
              <Megaphone className="w-3.5 h-3.5 text-[#548DFF]" />
              SALEXPLEX — OMNICHANNEL MARKETING & LEADS PORTAL
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Customer Acquisition & Funnels{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
                Engineered for High ROI.
              </span>
            </h2>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Capture, score, and convert high-value leads across search, social, and direct channels into direct Calendex bookings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenDemo('salexplex')}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-[#548DFF] hover:bg-[#5B7CFD] text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4294FF]/20 shrink-0"
            >
              <span>Request SalexPlex Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className={`flex items-center gap-2 p-1.5 rounded-2xl ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} border`}>
            <button
              onClick={() => setActiveTab('animatedGif')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'animatedGif'
                  ? 'bg-[#548DFF] text-white shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Live Animated Lead Funnel GIF</span>
            </button>

            <button
              onClick={() => setActiveTab('interactiveFunnel')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'interactiveFunnel'
                  ? 'bg-[#548DFF] text-white shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Campaign Simulator</span>
            </button>
          </div>

          <div className="text-xs text-[#548DFF] font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>AI Lead Scoring • Direct Calendex Sync</span>
          </div>
        </div>

        {/* TAB 1: LIVE ANIMATED GIF SHOWCASE */}
        {activeTab === 'animatedGif' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-[#4294FF]/40 bg-slate-900/90 shadow-2xl' : 'border-[#4294FF]/30 bg-white shadow-xl'} p-6 sm:p-8 relative overflow-hidden backdrop-blur-md animate-in fade-in`}>
            <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#548DFF] animate-ping" />
                <span className="text-xs font-extrabold uppercase text-[#548DFF] tracking-wider">
                  SalexPlex Marketing Analytics GIF Preview
                </span>
              </div>
              <button
                onClick={() => setIsPlayingGif(!isPlayingGif)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isPlayingGif ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-[#548DFF]" />}
                <span>{isPlayingGif ? 'Pause Animation' : 'Play Animation'}</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 group aspect-video sm:aspect-[21/9] bg-slate-950 flex items-center justify-center">
              <img 
                src={salexplexGif.gifUrl} 
                alt={salexplexGif.caption}
                className={`w-full h-full object-cover transition-all duration-700 ${isPlayingGif ? 'scale-105 filter contrast-105' : 'filter grayscale'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-slate-950/80 border border-[#4294FF]/40 backdrop-blur-md max-w-sm space-y-1">
                <div className="text-xs font-black text-[#4294FF] uppercase tracking-widest flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#548DFF] animate-pulse" />
                  Omnichannel Customer Acquisition
                </div>
                <div className="text-sm font-bold text-white">{salexplexGif.caption}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{salexplexGif.description}</p>
              </div>

              <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-[#548DFF] text-white font-extrabold text-xs shadow-2xl border border-[#4294FF] flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-300" />
                <span>5.1x Average Marketing ROI Tracked</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE CAMPAIGN SIMULATOR */}
        {activeTab === 'interactiveFunnel' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'} p-6 sm:p-8 backdrop-blur-md animate-in fade-in`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Campaign Picker */}
              <div className="lg:col-span-5 space-y-4">
                <div className={`text-xs font-extrabold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Active Omnichannel Campaigns
                </div>

                <div className="space-y-3">
                  {campaigns.map((c, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveCampaign(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        activeCampaign === idx
                          ? isDark 
                            ? 'bg-[#4294FF]/20 border-[#4294FF]/80 shadow-lg shadow-[#548DFF]/10'
                            : 'bg-[#548DFF]/10 border-pink-500 shadow-md'
                          : isDark
                            ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{c.name}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#42D742]/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {c.status}
                        </span>
                      </div>

                      <div className={`grid grid-cols-3 gap-2 text-center text-[10px] pt-2 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                        <div>
                          <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>Total Leads</div>
                          <div className="font-black text-[#548DFF] text-xs">{c.leads}</div>
                        </div>
                        <div>
                          <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>Ad Reach</div>
                          <div className={`font-black text-xs ${isDark ? 'text-white' : 'text-slate-900'}`}>{c.reach}</div>
                        </div>
                        <div>
                          <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>Tracked ROI</div>
                          <div className="font-black text-emerald-600 dark:text-emerald-400 text-xs">{c.cta}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Analytics Output */}
              <div className={`lg:col-span-7 p-6 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} flex flex-col justify-between space-y-4`}>
                <div>
                  <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Funnel Conversion Pipeline ({campaigns[activeCampaign].name})
                    </div>
                    <span className="text-xs text-[#548DFF] font-bold">Auto-Sync to ONDEL ERP</span>
                  </div>

                  <div className="space-y-3">
                    <div className={`p-3.5 rounded-xl border flex items-center justify-between ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Audience Impressions</span>
                      <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{campaigns[activeCampaign].reach}</span>
                    </div>

                    <div className={`p-3.5 rounded-xl border flex items-center justify-between ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Qualified Leads Captured</span>
                      <span className="text-xs font-black text-[#548DFF]">{campaigns[activeCampaign].leads} Leads</span>
                    </div>

                    <div className={`p-3.5 rounded-xl border flex items-center justify-between ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Direct Calendex Bookings Created</span>
                      <span className="text-xs font-bold text-purple-600 dark:text-[#548DFF]">74% Conversion</span>
                    </div>
                  </div>
                </div>

                <div className={`pt-4 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'} flex items-center justify-between text-xs`}>
                  <span>SalexPlex Campaign AI: Active</span>
                  <span className="text-[#548DFF] font-bold">ROI: {campaigns[activeCampaign].cta}</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
