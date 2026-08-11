import React, { useState } from 'react';
import { ThemeMode, ProductId } from '../../types';
import { PRODUCT_BG_IMAGES, PRODUCT_GIF_ANIMATIONS, PRODUCT_BG_OPACITY } from '../../data/productImages';
import { 
  Users, 
  Search, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Filter, 
  Building2,
  CalendarDays,
  Activity,
  Play,
  Pause,
  UserCheck,
  Award,
  Sparkles
} from 'lucide-react';

interface IReachSectionProps {
  theme: ThemeMode;
  onOpenDemo: (id?: ProductId) => void;
}

export const IReachSection: React.FC<IReachSectionProps> = ({ theme, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'animatedGif' | 'interactiveHr'>('animatedGif');
  const [isPlayingGif, setIsPlayingGif] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [approvedLeaveId, setApprovedLeaveId] = useState<number | null>(null);

  const employees = [
    { id: 1, name: 'Elena Rostova', role: 'Operations Director', dept: 'Operations', status: 'On Duty', attendance: '98.5%' },
    { id: 2, name: 'Marcus Brody', role: 'HVAC Specialist Lead', dept: 'Technical', status: 'On Field', attendance: '96.2%' },
    { id: 3, name: 'Sofia Chen', role: 'Finance Controller', dept: 'Finance', status: 'Remote', attendance: '99.1%' },
    { id: 4, name: 'David Vance', role: 'Customer Success', dept: 'Support', status: 'On Duty', attendance: '97.8%' }
  ];

  const filtered = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || emp.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === 'All' || emp.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  const isDark = theme === 'dark';
  const ireachBgImage = PRODUCT_BG_IMAGES.ireach;
  const ireachGif = PRODUCT_GIF_ANIMATIONS.ireach;

  return (
    <section id="product-ireach" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Product Relevant Background Image with Opacity Slider */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${ireachBgImage})`, 
          opacity: PRODUCT_BG_OPACITY 
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-[#fbfcff]/75 via-[#fbfcff]/55 to-[#fbfcff]/90'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
              <Users className="w-3.5 h-3.5 text-blue-500" />
              iREACH — WORKFORCE & HR MANAGEMENT
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Human Capital & Shift Rosters{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
                In Perfect Harmony.
              </span>
            </h2>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Automate employee attendance, biometric verification, leaves approval, and salary dispatch with precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenDemo('ireach')}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0575E6]/20 shrink-0"
            >
              <span>Request iReach Demo</span>
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
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-[#548DFF] animate-pulse" />
              <span>Live Animated GIF HR Radar</span>
            </button>

            <button
              onClick={() => setActiveTab('interactiveHr')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'interactiveHr'
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive HR Dashboard Simulator</span>
            </button>
          </div>

          <div className="text-xs text-blue-600 dark:text-blue-300 font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Biometric Sync • Automatic Payroll</span>
          </div>
        </div>

        {/* TAB 1: LIVE ANIMATED GIF SHOWCASE */}
        {activeTab === 'animatedGif' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-blue-500/40 bg-slate-900/90 shadow-2xl' : 'border-blue-200 bg-white shadow-xl'} p-6 sm:p-8 relative overflow-hidden backdrop-blur-md animate-in fade-in`}>
            <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
                <span className="text-xs font-extrabold uppercase text-blue-600 dark:text-blue-300 tracking-wider">
                  iReach HR Attendance Radar GIF Preview
                </span>
              </div>
              <button
                onClick={() => setIsPlayingGif(!isPlayingGif)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isPlayingGif ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-blue-500" />}
                <span>{isPlayingGif ? 'Pause Animation' : 'Play Animation'}</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 group aspect-video sm:aspect-[21/9] bg-slate-950 flex items-center justify-center">
              <img 
                src={ireachGif.gifUrl} 
                alt={ireachGif.caption}
                className={`w-full h-full object-cover transition-all duration-700 ${isPlayingGif ? 'scale-105 filter contrast-105' : 'filter grayscale'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-slate-950/80 border border-blue-500/40 backdrop-blur-md max-w-sm space-y-1">
                <div className="text-xs font-black text-blue-300 uppercase tracking-widest flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                  Workforce Attendance Monitor
                </div>
                <div className="text-sm font-bold text-white">{ireachGif.caption}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{ireachGif.description}</p>
              </div>

              <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-blue-600 text-white font-extrabold text-xs shadow-2xl border border-blue-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300" />
                <span>99.4% Attendance Accuracy Benchmark</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE HR SIMULATOR */}
        {activeTab === 'interactiveHr' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'} p-6 sm:p-8 backdrop-blur-md animate-in fade-in`}>
            
            {/* Top Stat Cards */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 mb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-1`}>
                <div className={`text-[11px] font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Total Personnel</div>
                <div className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>1,240</div>
                <div className="text-[10px] text-emerald-500 font-bold">+18 This Month</div>
              </div>

              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-1`}>
                <div className={`text-[11px] font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>On-Duty Ratio</div>
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400">97.4%</div>
                <div className="text-[10px] text-blue-500 font-bold">Biometric Checked</div>
              </div>

              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-1`}>
                <div className={`text-[11px] font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Active Shifts</div>
                <div className="text-2xl font-black text-purple-600 dark:text-[#548DFF]">42 Rosters</div>
                <div className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Calendex Synced</div>
              </div>

              <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-1`}>
                <div className={`text-[11px] font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Pending Leaves</div>
                <div className="text-2xl font-black text-amber-600 dark:text-amber-400">3 Requests</div>
                <div className="text-[10px] text-amber-500 font-bold">Needs Approval</div>
              </div>
            </div>

            {/* Employee Search & Table */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-72">
                  <Search className={`w-4 h-4 absolute left-3 top-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search personnel or role..."
                    className={`w-full pl-9 pr-4 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                  <select
                    value={deptFilter}
                    onChange={(e) => setDeptFilter(e.target.value)}
                    className={`px-3 py-2 rounded-xl border text-xs focus:outline-none focus:border-blue-500 ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-slate-300' 
                        : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  >
                    <option value="All">All Departments</option>
                    <option value="Operations">Operations</option>
                    <option value="Technical">Technical</option>
                    <option value="Finance">Finance</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
              </div>

              <div className={`overflow-x-auto rounded-2xl border ${isDark ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white'}`}>
                <table className="w-full text-left text-xs">
                  <thead className={`${isDark ? 'bg-slate-900/80 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'} uppercase text-[10px] font-bold border-b`}>
                    <tr>
                      <th className="p-3.5">Employee Name</th>
                      <th className="p-3.5">Role</th>
                      <th className="p-3.5">Department</th>
                      <th className="p-3.5">Live Status</th>
                      <th className="p-3.5">Attendance</th>
                      <th className="p-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-slate-800/60' : 'divide-slate-200'} font-medium`}>
                    {filtered.map((emp) => (
                      <tr key={emp.id} className={`${isDark ? 'hover:bg-slate-900/50' : 'hover:bg-slate-50'} transition-colors`}>
                        <td className={`p-3.5 font-bold ${isDark ? 'text-white' : 'text-slate-900'} flex items-center gap-2`}>
                          <div className="w-7 h-7 rounded-full bg-[#0575E6]/20 border border-[#0575E6]/30 text-blue-600 dark:text-blue-300 flex items-center justify-center text-[10px] font-extrabold">
                            {emp.name.charAt(0)}
                          </div>
                          {emp.name}
                        </td>
                        <td className={`p-3.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{emp.role}</td>
                        <td className={`p-3.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{emp.dept}</td>
                        <td className="p-3.5">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#42D742]/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {emp.status}
                          </span>
                        </td>
                        <td className="p-3.5 font-bold text-blue-600 dark:text-blue-400">{emp.attendance}</td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => setApprovedLeaveId(emp.id)}
                            className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                              isDark 
                                ? 'bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white' 
                                : 'bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white border border-slate-300'
                            }`}
                          >
                            {approvedLeaveId === emp.id ? 'Approved!' : 'Approve Leave'}
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
