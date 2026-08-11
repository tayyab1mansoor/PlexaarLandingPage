import React from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { ThemeMode, ProductId } from '../types';
import plexaarLogo from '../assets/images/plexaarLogo.png';
import { Shield } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onNavigateTo: (id: string) => void;
  onOpenDemo: (id?: ProductId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  onNavigateTo,
  onOpenDemo
}) => {
  const isDark = theme === 'dark';

  return (
    <footer className="pt-20 pb-12 border-t bg-[#f6f6f6] border-[#D1D1D1] text-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src={plexaarLogo}
                alt="Plexaar"
                className="h-9 w-auto"
              />
            </div>

            <p className={`text-xs max-w-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The connected operating system for modern business. Unifying communication, appointments, people, finance, and marketing into one enterprise ecosystem.
            </p>

            <div className={`flex items-center gap-3 text-xs pt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <Shield className="w-4 h-4 text-[#548DFF]" />
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
                    className="hover:text-[#548DFF] transition-colors text-left"
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
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-[#548DFF]">CEO & Executive View</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-[#548DFF]">Operations Control</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-[#548DFF]">HR Workforce</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-[#548DFF]">Finance Command</button></li>
              <li><button onClick={() => onNavigateTo('roles')} className="hover:text-[#548DFF]">Marketing Portal</button></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Company & Legal
            </div>
            <ul className={`space-y-2.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li><a href="https://plexaar.com" target="_blank" rel="noreferrer" className="hover:text-[#548DFF]">Official Website</a></li>
              <li><a href="https://calendex.plexaar.com" target="_blank" rel="noreferrer" className="hover:text-[#548DFF]">Calendex Portal</a></li>
              <li><button onClick={() => onNavigateTo('security')} className="hover:text-[#548DFF]">Security & Compliance</button></li>
              <li><button onClick={() => onNavigateTo('faq')} className="hover:text-[#548DFF]">FAQ & Documentation</button></li>
              <li><button onClick={() => onOpenDemo()} className="hover:text-[#548DFF]">Book Enterprise Demo</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Plexaar Operating Ecosystem. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600">Privacy Policy</span>
            <span>•</span>
            <span className="text-slate-600">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
