import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/plexaarData';
import { SECTION_BG_IMAGES } from '../data/productImages';
import { ThemeMode } from '../types';
import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  theme: ThemeMode;
  onOpenDemo: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ theme, onOpenDemo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'General' | 'Products' | 'Enterprise' | 'Security'>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const isDark = theme === 'dark';

  return (
    <section id="faq" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Section Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-all duration-500"
        style={{ backgroundImage: `url(${SECTION_BG_IMAGES.faq})` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-500" />
            ENTERPRISE KNOWLEDGE BASE
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-300">
              Questions.
            </span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Everything you need to know about the Plexaar ecosystem, product integrations, and deployment models.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-10 space-y-4">
          
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQs (e.g., What is Buzzcom?, Security, Implementation...)"
              className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs transition-colors focus:outline-none focus:border-cyan-500 ${
                isDark 
                  ? 'bg-slate-900 border border-slate-800 text-white placeholder-slate-500' 
                  : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['All', 'General', 'Products', 'Enterprise', 'Security'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-black'
                    : isDark 
                      ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800' 
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className={`text-center py-8 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              No matching questions found. Try adjusting your search query.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? isDark ? 'bg-slate-900 border-cyan-500/50 shadow-lg' : 'bg-white border-cyan-500 shadow-md'
                      : isDark ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className={`w-full p-5 text-left font-bold text-sm flex items-center justify-between gap-4 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border ${
                        isDark 
                          ? 'bg-slate-800 text-cyan-400 border-slate-700' 
                          : 'bg-slate-100 text-cyan-600 border-slate-200'
                      }`}>
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-cyan-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className={`px-5 pb-5 pt-1 text-xs leading-relaxed border-t animate-in fade-in ${
                      isDark ? 'text-slate-300 border-slate-800/60' : 'text-slate-600 border-slate-100'
                    }`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className={`mt-12 text-center p-8 rounded-3xl border ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Still have questions about Plexaar?
          </div>
          <p className={`text-xs mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Our solution architects are ready to assist your technical team.
          </p>
          <button
            onClick={onOpenDemo}
            className="px-6 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md"
          >
            Speak With Enterprise Specialist
          </button>
        </div>

      </div>
    </section>
  );
};
