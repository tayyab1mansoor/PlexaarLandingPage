import React, { useState } from 'react';
import { ThemeMode, ProductId } from '../../types';
import { PRODUCT_BG_IMAGES, PRODUCT_GIF_ANIMATIONS, PRODUCT_BG_OPACITY } from '../../data/productImages';
import { 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  BarChart2, 
  ArrowUpRight,
  Receipt,
  Activity,
  Play,
  Pause,
  PieChart,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface OndalSectionProps {
  theme: ThemeMode;
  onOpenDemo: (id?: ProductId) => void;
}

export const OndalSection: React.FC<OndalSectionProps> = ({ theme, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'animatedGif' | 'interactiveLedger'>('animatedGif');
  const [isPlayingGif, setIsPlayingGif] = useState(true);
  const [invoices, setInvoices] = useState([
    { id: 'INV-8402', client: 'Nexus Logistics', amount: '$14,250', status: 'Paid', date: 'Aug 06, 2026', source: 'Calendex Auto-Bill' },
    { id: 'INV-8403', client: 'Apex Technologies', amount: '$28,900', status: 'Pending', date: 'Aug 07, 2026', source: 'SalexPlex Campaign' },
    { id: 'INV-8404', client: 'Vanguard Retail', amount: '$8,400', status: 'Paid', date: 'Aug 05, 2026', source: 'Direct Contract' }
  ]);

  const toggleInvoiceStatus = (id: string) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, status: inv.status === 'Paid' ? 'Pending' : 'Paid' } : inv))
    );
  };

  const isDark = theme === 'dark';
  const ondalBgImage = PRODUCT_BG_IMAGES.ondal;
  const ondalGif = PRODUCT_GIF_ANIMATIONS.ondal;

  return (
    <section id="product-ondal" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Product Relevant Background Image with Opacity Slider */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${ondalBgImage})`, 
          opacity: PRODUCT_BG_OPACITY 
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-[#fbfcff]/75 via-[#fbfcff]/55 to-[#fbfcff]/90'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-[#42D742]/10 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              ONDAL — FINANCIAL COMMAND & ERP LEDGER
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Enterprise Cashflow & Invoicing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
                Automated at Scale.
              </span>
            </h2>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Real-time accounts receivable, double-entry ledger reconciliation, and automated tax reporting connected to your operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenDemo('ondal')}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-[#42D742] hover:bg-emerald-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FFD705]/20 shrink-0"
            >
              <span>Request Ondal Demo</span>
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
                  ? 'bg-[#42D742] text-slate-950 shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Live Animated Financial GIF</span>
            </button>

            <button
              onClick={() => setActiveTab('interactiveLedger')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'interactiveLedger'
                  ? 'bg-[#42D742] text-slate-950 shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Financial Simulator</span>
            </button>
          </div>

          <div className="text-xs text-emerald-600 dark:text-emerald-300 font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>GAAP & IFRS Compliant • Instant Cash Reconciliation</span>
          </div>
        </div>

        {/* TAB 1: LIVE ANIMATED GIF SHOWCASE */}
        {activeTab === 'animatedGif' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-emerald-500/40 bg-slate-900/90 shadow-2xl' : 'border-emerald-200 bg-white shadow-xl'} p-6 sm:p-8 relative overflow-hidden backdrop-blur-md animate-in fade-in`}>
            <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#42D742] animate-ping" />
                <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-300 tracking-wider">
                  Ondal Financial Command GIF Preview
                </span>
              </div>
              <button
                onClick={() => setIsPlayingGif(!isPlayingGif)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isPlayingGif ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
                <span>{isPlayingGif ? 'Pause Animation' : 'Play Animation'}</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 group aspect-video sm:aspect-[21/9] bg-slate-950 flex items-center justify-center">
              <img 
                src={ondalGif.gifUrl} 
                alt={ondalGif.caption}
                className={`w-full h-full object-cover transition-all duration-700 ${isPlayingGif ? 'scale-105 filter contrast-105' : 'filter grayscale'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/40 backdrop-blur-md max-w-sm space-y-1">
                <div className="text-xs font-black text-emerald-300 uppercase tracking-widest flex items-center gap-2">
                  <PieChart className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                  Real-Time Cashflow & ERP Ledger
                </div>
                <div className="text-sm font-bold text-white">{ondalGif.caption}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{ondalGif.description}</p>
              </div>

              <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-[#42D742] text-slate-950 font-extrabold text-xs shadow-2xl border border-emerald-300 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-emerald-950" />
                <span>$4.2M Monthly Transaction Ledger Audited</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE FINANCIAL LEDGER SIMULATOR */}
        {activeTab === 'interactiveLedger' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'} p-6 sm:p-8 backdrop-blur-md animate-in fade-in`}>
            
            {/* Financial Metrics Row */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 mb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                <div className={`flex items-center justify-between text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Gross Monthly Revenue</span>
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                </div>
                <div className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>$482,900</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>+24.8% vs last month</span>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                <div className={`flex items-center justify-between text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Accounts Receivable</span>
                  <Receipt className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-3xl font-black text-amber-600 dark:text-amber-300">$28,900</div>
                <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>1 Invoice Pending (Click below to simulate payment)</div>
              </div>

              <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                <div className={`flex items-center justify-between text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span>Ondal Auto Reconciliation</span>
                  <CreditCard className="w-4 h-4 text-[#548DFF]" />
                </div>
                <div className="text-3xl font-black text-[#548DFF]">100%</div>
                <div className="text-xs text-[#548DFF] font-bold">Synced with Calendex & iReach</div>
              </div>
            </div>

            {/* Invoices Ledger Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`text-xs font-extrabold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Live Ledger Invoices & Contracts
                </div>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">Double-Entry Ledger Verified</span>
              </div>

              <div className={`overflow-x-auto rounded-2xl border ${isDark ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white'}`}>
                <table className="w-full text-left text-xs">
                  <thead className={`${isDark ? 'bg-slate-900/80 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'} uppercase text-[10px] font-bold border-b`}>
                    <tr>
                      <th className="p-3.5">Invoice ID</th>
                      <th className="p-3.5">Client</th>
                      <th className="p-3.5">Lead / Booking Source</th>
                      <th className="p-3.5">Amount</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Interactive Action</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-slate-800/60' : 'divide-slate-200'} font-medium`}>
                    {invoices.map((inv) => (
                      <tr key={inv.id} className={`${isDark ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'} transition-colors`}>
                        <td className="p-3.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">{inv.id}</td>
                        <td className={`p-3.5 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{inv.client}</td>
                        <td className={`p-3.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{inv.source}</td>
                        <td className={`p-3.5 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{inv.amount}</td>
                        <td className="p-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                            inv.status === 'Paid'
                              ? 'bg-[#42D742]/10 text-emerald-600 dark:text-emerald-400 border-[#FFD705]/40'
                              : 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30'
                          }`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => toggleInvoiceStatus(inv.id)}
                            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                              isDark 
                                ? 'bg-slate-800 text-slate-200 hover:bg-[#42D742] hover:text-slate-950' 
                                : 'bg-slate-100 text-slate-800 hover:bg-[#42D742] hover:text-white border border-slate-300'
                            }`}
                          >
                            Toggle Paid Status
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
