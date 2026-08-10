import React, { useState, useEffect } from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { ThemeMode, ProductId } from '../types';
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  TrendingUp, 
  Megaphone, 
  ChevronDown, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenDemo: (productId?: ProductId) => void;
  onNavigateTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenDemo,
  onNavigateTo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-purple-400" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-pink-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const isDark = theme === 'dark';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Plexaar Brand Logo */}
          <div 
            onClick={() => onNavigateTo('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 text-xl tracking-wider">
                  P
                </span>
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                PLEXAAR
              </span>
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase -mt-1">
                CONNECTED ECOSYSTEM
              </span>
            </div>
          </div>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Products Mega Menu Button */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                onClick={() => onNavigateTo('product-buzzcom')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeMenu === 'products'
                    ? isDark ? 'text-cyan-400 bg-slate-800/60' : 'text-indigo-600 bg-slate-100'
                    : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {activeMenu === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] p-6 rounded-2xl shadow-2xl transition-all duration-200 border animate-in fade-in slide-in-from-top-2 z-50 glass-panel-dark border-slate-800 bg-slate-950/95">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Plexaar Product Ecosystem (5 Connected Apps)
                      </span>
                    </div>
                    <button 
                      onClick={() => { setActiveMenu(null); onNavigateTo('product-buzzcom'); }}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
                    >
                      Explore All Products
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {PLEXAAR_PRODUCTS.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setActiveMenu(null);
                          onNavigateTo(`product-${prod.id}`);
                        }}
                        className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/80 hover:border-slate-700 cursor-pointer transition-all duration-200 flex items-start gap-3.5 group"
                      >
                        <div 
                          className="p-2.5 rounded-lg flex items-center justify-center shrink-0 border border-white/10"
                          style={{ backgroundColor: `${prod.color}15` }}
                        >
                          {getProductIcon(prod.iconName)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                              {prod.name}
                            </span>
                            <span 
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10"
                              style={{ color: prod.color, backgroundColor: `${prod.color}15` }}
                            >
                              {prod.category.split(' ')[0]}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {prod.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Integrated Core Hub Card */}
                    <div 
                      onClick={() => { setActiveMenu(null); onNavigateTo('product-buzzcom'); }}
                      className="p-3.5 rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 to-purple-950/40 hover:border-indigo-500/60 cursor-pointer transition-all duration-200 flex items-center gap-3 group"
                    >
                      <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-indigo-200 group-hover:text-white flex items-center gap-1.5">
                          PLEXAAR OPERATING CORE
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-xs text-indigo-300/70 mt-0.5">
                          Centralized data layer connecting all 5 products into 1 ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => onNavigateTo('problem')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              Why Plexaar
            </button>

            <button 
              onClick={() => onNavigateTo('journey')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              Customer Journey
            </button>

            <button 
              onClick={() => onNavigateTo('roles')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              Solutions
            </button>

            <button 
              onClick={() => onNavigateTo('security')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              Integrations & Security
            </button>

            <button 
              onClick={() => onNavigateTo('faq')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* RIGHT: Actions & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800' 
                  : 'border-slate-300 bg-slate-100 text-indigo-600 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => onOpenDemo()}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isDark 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contact Sales
            </button>

            <button
              onClick={() => onOpenDemo()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold rounded-xl group bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 group-hover:from-indigo-600 group-hover:to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-lg border ${isDark ? 'border-slate-800 bg-slate-900 text-amber-400' : 'border-slate-200 bg-slate-100 text-indigo-600'}`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${isDark ? 'border-slate-800 text-slate-200' : 'border-slate-200 text-slate-800'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b transition-all duration-300 ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="px-4 pt-3 pb-6 space-y-3">
            <div className="font-bold text-xs uppercase tracking-wider text-slate-400 px-3 pt-2">
              Plexaar Products (5 Apps)
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {PLEXAAR_PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateTo(`product-${p.id}`);
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-left"
                >
                  <div className="p-2 rounded-lg bg-slate-800" style={{ color: p.color }}>
                    {getProductIcon(p.iconName)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.category}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigateTo('problem'); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold"
              >
                Why Plexaar
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigateTo('journey'); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold"
              >
                Customer Journey
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigateTo('roles'); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold"
              >
                Solutions & Roles
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigateTo('faq'); }}
                className="w-full text-left px-3 py-2 text-sm font-semibold"
              >
                FAQ
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full mt-2 py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white text-center shadow-lg shadow-indigo-500/30"
              >
                Book an Enterprise Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
