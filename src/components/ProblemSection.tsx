import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  AlertTriangle, 
  RefreshCw, 
  Layers, 
  Zap,
  MessageSquare,
  Calendar,
  Users,
  TrendingUp,
  Megaphone
} from 'lucide-react';

interface ProblemSectionProps {
  theme: ThemeMode;
  onNavigateTo: (id: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ theme, onNavigateTo }) => {
  const [activeTab, setActiveTab] = useState<'fragmented' | 'plexaar'>('plexaar');
  const isDark = theme === 'dark';

  const fragmentedSilos = [
    { title: 'Isolated Messaging', desc: 'Team chat disconnected from customer booking records', icon: MessageSquare, color: 'text-amber-400' },
    { title: 'Siloed Scheduling', desc: 'Calendar bookings invisible to HR shift managers', icon: Calendar, color: 'text-amber-400' },
    { title: 'Manual HR Sync', desc: 'Employee attendance tracked on offline spreadsheets', icon: Users, color: 'text-amber-400' },
    { title: 'Delayed Financials', desc: 'Invoices created days after appointments complete', icon: TrendingUp, color: 'text-amber-400' },
    { title: 'Untracked Campaigns', desc: 'Marketing leads lost during manual sales handoffs', icon: Megaphone, color: 'text-amber-400' }
  ];

  const unifiedSolutions = [
    { title: 'Buzzcom Communication', desc: 'Calls & messages automatically attached to client files', icon: MessageSquare, color: 'text-[#548DFF]' },
    { title: 'Calendex Appointments', desc: 'Real-time staff allocation auto-checked with iReach', icon: Calendar, color: 'text-[#548DFF]' },
    { title: 'iReach HR Hub', desc: 'Live attendance & payroll sync directly with ONDEL', icon: Users, color: 'text-blue-400' },
    { title: 'ONDEL Financial Ledger', desc: 'Automated billing upon completion of Calendex slots', icon: TrendingUp, color: 'text-emerald-400' },
    { title: 'SalexPlex Marketing', desc: 'Lead attribution tracked end-to-end to revenue generated', icon: Megaphone, color: 'text-[#4294FF]' }
  ];

  return (
    <section id="problem" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <AlertTriangle className="w-3.5 h-3.5" />
            THE ENTERPRISE FRAGMENTATION GAP
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Your Business Has Many Systems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
              Your Business Shouldn't Feel Disconnected.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Disconnected tools create fragmented data, duplicated work, and limited operational visibility. Plexaar brings essential business functions into one connected ecosystem.
          </p>
        </div>

        {/* Interactive Comparison Switcher */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('fragmented')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'fragmented'
                  ? 'bg-rose-500/20 text-rose-500 border-rose-500/40 shadow-lg shadow-rose-500/10'
                  : isDark
                  ? 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 shadow-sm'
              }`}
            >
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Fragmented SaaS Tools (Legacy)</span>
            </button>

            <button
              onClick={() => setActiveTab('plexaar')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 border ${
                activeTab === 'plexaar'
                  ? 'bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white border-transparent shadow-xl shadow-[#548DFF]/30'
                  : isDark
                  ? 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 shadow-sm'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#548DFF]" />
              <span>Plexaar Connected Ecosystem</span>
            </button>
          </div>

          {/* Comparison Cards Display */}
          <div className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 ${
            activeTab === 'fragmented'
              ? isDark ? 'bg-slate-900/90 border-rose-500/30 shadow-2xl' : 'bg-white border-rose-200 shadow-xl'
              : isDark ? 'bg-slate-900/90 border-[#548DFF]/30 shadow-2xl' : 'bg-white border-[#548DFF]/30 shadow-xl'
          }`}>
            
            <div className={`flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} gap-4`}>
              <div>
                <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {activeTab === 'fragmented' ? 'Legacy Software Chaos' : 'Unified Plexaar Environment'}
                </div>
                <h3 className={`text-xl sm:text-2xl font-black mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {activeTab === 'fragmented' 
                    ? '5 Unconnected Vendors, 5 Isolated Silos, High Overhead' 
                    : '1 Unified Platform, 5 Specialized Apps, Zero Friction'}
                </h3>
              </div>

              <div className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                activeTab === 'fragmented' 
                  ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' 
                  : 'bg-[#548DFF]/10 text-[#548DFF] border-[#548DFF]/20'
              }`}>
                {activeTab === 'fragmented' ? 'High Risk & Lost Hours' : 'Enterprise Operating Excellence'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {(activeTab === 'fragmented' ? fragmentedSilos : unifiedSolutions).map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      activeTab === 'fragmented'
                        ? isDark ? 'bg-slate-950/60 border-rose-500/20 hover:border-rose-500/40' : 'bg-rose-50/60 border-rose-200 hover:border-rose-300'
                        : isDark ? 'bg-slate-950/80 border-slate-800 hover:border-[#548DFF]/40' : 'bg-slate-50 border-slate-200 hover:border-[#548DFF]/40'
                    }`}
                  >
                    <div>
                      <div className={`p-2.5 rounded-xl border w-fit mb-3 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                        <IconComponent className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className={`text-sm font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </div>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </div>

                    <div className={`pt-4 mt-4 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'} flex items-center justify-between text-[10px] font-bold`}>
                      <span className={activeTab === 'fragmented' ? 'text-rose-500' : 'text-[#548DFF]'}>
                        {activeTab === 'fragmented' ? 'Siloed Data' : 'Connected'}
                      </span>
                      {activeTab === 'fragmented' ? <XCircle className="w-3.5 h-3.5 text-rose-500" /> : <CheckCircle2 className="w-3.5 h-3.5 text-[#548DFF]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Summary Bar */}
            <div className={`mt-8 pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} flex flex-col sm:flex-row items-center justify-between gap-4`}>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#548DFF]" />
                <span className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {activeTab === 'fragmented'
                    ? 'Average enterprise loses 12+ hours per employee weekly re-entering data between tools.'
                    : 'Plexaar unifies data natively so every action triggers real-time updates across all 5 departments.'}
                </span>
              </div>

              <button
                onClick={() => onNavigateTo('ecosystem')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#548DFF] hover:bg-[#5B7CFD] text-white transition-all flex items-center gap-2 shrink-0 shadow-sm"
              >
                <span>See Ecosystem Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
