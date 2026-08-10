import React from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { ThemeMode, ProductId } from '../types';
import { Shield, Sun, Moon, ArrowRight, Globe } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onNavigateTo: (id: string) => void;
  onOpenDemo: (id?: ProductId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  onToggleTheme,
  onNavigateTo,
  onOpenDemo
}) => {
  const isDark = theme === 'dark';

  return (
    <footer className={`pt-20 pb-12 border-t ${
      isDark 
        ? 'bg-slate-950 border-slate-800 text-white' 
        : 'bg-slate-100 border-slate-200 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[2px]">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  isDark ? 'bg-slate-950' : 'bg-white'
                }`}>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 text-xl">
                    P
                  </span>
                </div>
              </div>
              <span className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>PLEXAAR</span>
            </div>

            <p className={`text-xs max-w-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The connected operating system for modern business. Unifying communication, appointments, people, finance, and marketing into one enterprise ecosystem.
            </p>

            <div className={`flex items-center gap-3 text-xs pt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <Shield className="w-4 h-4 text-cyan-500" />
              <span>Enterprise Grade Security • 99.99% Uptime Architecture</span>
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Products
            </div>
            <ul className={`space-y-2.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {PLEXAAR_PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigateTo(`product-${p.id}`)}
                    className="hover:text-cyan-500 transition-colors text-left"
                  >
                    {p.name} ({p.category.split(' ')[0]})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Solutions
            </div>
            <ul className={`space-y-2.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-cyan-500">CEO & Executive View</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-cyan-500">Operations Control</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-cyan-500">HR Workforce</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-cyan-500">Finance Command</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-cyan-500">Marketing Portal</button></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Company & Legal
            </div>
            <ul className={`space-y-2.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li><a href="https://plexaar.com" target="_blank" rel="noreferrer" className="hover:text-cyan-500">Official Website</a></li>
              <li><a href="https://calendex.plexaar.com" target="_blank" rel="noreferrer" className="hover:text-cyan-500">Calendex Portal</a></li>
              <li><button onClick={() => onNavigateTo('security')} className="hover:text-cyan-500">Security & Compliance</button></li>
              <li><button onClick={() => onNavigateTo('faq')} className="hover:text-cyan-500">FAQ & Documentation</button></li>
              <li><button onClick={() => onOpenDemo()} className="hover:text-cyan-500">Book Enterprise Demo</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <div>
            © {new Date().getFullYear()} Plexaar Operating Ecosystem. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleTheme}
              className={`flex items-center gap-1.5 transition-colors font-medium ${
                isDark ? 'hover:text-white text-slate-400' : 'hover:text-slate-900 text-slate-600'
              }`}
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span>Toggle Mode ({isDark ? 'Dark' : 'Light'})</span>
            </button>
            <span>•</span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Privacy Policy</span>
            <span>•</span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
