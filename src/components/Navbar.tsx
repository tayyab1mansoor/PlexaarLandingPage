import React, { useState, useEffect } from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { ThemeMode, ProductId } from '../types';
import plexaarLogo from '../assets/images/plexaarLogo.png';
import { PRODUCT_LOGOS, PLEXAAR_HEADER_LOGO } from '../data/productLogos';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onOpenDemo: (productId?: ProductId) => void;
  onNavigateTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
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

  const getProductIcon = (productId: ProductId) => (
    <span className="inline-flex w-8 h-8 rounded-full overflow-hidden border border-[#548DFF]/20 shadow-sm shrink-0 bg-white items-center justify-center">
      <img
        src={PRODUCT_LOGOS[productId]}
        alt=""
        className="w-5 h-5 object-contain"
      />
    </span>
  );

  const isDark = theme === 'dark';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#D1D1D1]/80 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Plexaar Brand Logo */}
          <div 
            onClick={() => onNavigateTo('hero')}
            className="flex items-center cursor-pointer group"
          >
            <img
              src={plexaarLogo}
              alt="Plexaar"
              className="h-8 md:h-10 w-auto transition-opacity duration-200 group-hover:opacity-90"
            />
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
                    ? isDark ? 'text-[#548DFF] bg-slate-800/60' : 'text-[#548DFF] bg-slate-100'
                    : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/40' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-[#548DFF]' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {activeMenu === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] p-6 rounded-2xl shadow-2xl transition-all duration-200 border animate-in fade-in slide-in-from-top-2 z-50 glass-panel-light border-slate-200 bg-white">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#548DFF]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Plexaar Product Ecosystem (5 Connected Apps)
                      </span>
                    </div>
                    <button 
                      onClick={() => { setActiveMenu(null); onNavigateTo('product-buzzcom'); }}
                      className="text-xs font-semibold text-[#548DFF] hover:text-[#0575E6] flex items-center gap-1 group"
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
                        className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#548DFF]/40 hover:shadow-md cursor-pointer transition-all duration-200 flex items-start gap-3.5 group"
                      >
                        <div 
                          className="p-2.5 rounded-lg flex items-center justify-center shrink-0 border border-slate-200 bg-white"
                          style={{ backgroundColor: `${prod.color}15` }}
                        >
                          {getProductIcon(prod.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-900 group-hover:text-[#548DFF] transition-colors">
                              {prod.name}
                            </span>
                            <span 
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200"
                              style={{ color: prod.color, backgroundColor: `${prod.color}15` }}
                            >
                              {prod.category.split(' ')[0]}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {prod.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Integrated Core Hub Card */}
                    <div 
                      onClick={() => { setActiveMenu(null); onNavigateTo('product-buzzcom'); }}
                      className="p-3.5 rounded-xl border border-[#548DFF]/30 bg-gradient-to-r from-[#548DFF]/10 to-[#548DFF]/5 hover:border-[#548DFF]/60 cursor-pointer transition-all duration-200 flex items-center gap-3 group"
                    >
                      <div className="p-2.5 rounded-lg bg-white border border-[#548DFF]/30">
                        <img src={PLEXAAR_HEADER_LOGO} alt="Plexaar" className="h-5 w-auto object-contain" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#548DFF] group-hover:text-[#0575E6] flex items-center gap-1.5">
                          PLEXAAR OPERATING CORE
                          <ArrowRight className="w-3.5 h-3.5 text-[#548DFF] group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
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

          {/* RIGHT: Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => onOpenDemo()}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            >
              Contact Sales
            </button>

            <button
              onClick={() => onOpenDemo()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold rounded-xl group bg-gradient-to-br from-[#548DFF] to-[#6BA0FF] group-hover:from-[#548DFF] group-hover:to-[#6BA0FF] text-white shadow-lg shadow-[#548DFF]/25 hover:shadow-[#548DFF]/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2 text-slate-900 group-hover:text-white">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-[#548DFF] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 text-slate-800"
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
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-left"
                >
                  <div className="p-2 rounded-lg bg-white border border-slate-200" style={{ color: p.color }}>
                    {getProductIcon(p.id)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-500">{p.category}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
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
                className="w-full mt-2 py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-[#548DFF] to-[#6BA0FF] text-white text-center shadow-lg shadow-[#548DFF]/30"
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
