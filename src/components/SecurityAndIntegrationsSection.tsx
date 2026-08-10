import React from 'react';
import { INTEGRATIONS_LIST } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileSearch, 
  Server, 
  Globe, 
  Layers, 
  Database, 
  CreditCard, 
  Cpu, 
  Cloud, 
  Phone, 
  MessageCircle 
} from 'lucide-react';

interface SecurityAndIntegrationsSectionProps {
  theme: ThemeMode;
}

export const SecurityAndIntegrationsSection: React.FC<SecurityAndIntegrationsSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  const securityFeatures = [
    { title: 'Role-Based Access Control (RBAC)', desc: 'Granular permissions restricting data views to authorized departmental roles.', icon: Key },
    { title: 'Data Encryption', desc: 'End-to-end TLS 1.3 encryption in transit and AES-256 encryption at rest.', icon: Lock },
    { title: 'Audit Activity Logging', desc: 'Immutable activity trails capturing every configuration and administrative change.', icon: FileSearch },
    { title: 'Isolated Cloud Infrastructure', desc: 'Dedicated enterprise tenant isolation preventing cross-tenant data leakage.', icon: Server }
  ];

  const getIntegrationIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Phone': return <Phone className="w-5 h-5 text-teal-400" />;
      default: return <MessageCircle className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <section id="security" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Section Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.security})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* ENTERPRISE SECURITY */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              ENTERPRISE SECURITY & GOVERNANCE
            </div>

            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Enterprise Confidence at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300">
                Every Level.
              </span>
            </h2>

            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Architected with zero-trust principles, strict permission enforcement, and complete audit governance for high-trust corporate environments.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} className={`p-6 rounded-3xl border transition-all ${
                  isDark 
                    ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/40' 
                    : 'bg-white border-slate-200 hover:border-emerald-500/40 shadow-sm'
                }`}>
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className={`text-sm font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{sec.title}</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{sec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* VERIFIED INTEGRATIONS NETWORK */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              ECOSYSTEM INTEGRATIONS
            </div>

            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Designed to Work With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-300">
                Your Existing Ecosystem.
              </span>
            </h2>

            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Native supported API endpoints connect Plexaar with your enterprise productivity, payment, and cloud infrastructure platforms.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INTEGRATIONS_LIST.map((integ, idx) => (
              <div key={idx} className={`p-4 rounded-2xl border flex items-center gap-3 ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800' 
                  : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className={`p-2.5 rounded-xl border shrink-0 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  {getIntegrationIcon(integ.icon)}
                </div>
                <div>
                  <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{integ.name}</div>
                  <div className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{integ.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
