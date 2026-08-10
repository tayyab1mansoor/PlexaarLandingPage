import React, { useState, useEffect } from 'react';
import { ThemeMode, ProductId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickNavPills } from './components/QuickNavPills';
import { ProblemSection } from './components/ProblemSection';
import { BuzzcomSection } from './components/products/BuzzcomSection';
import { CalendexSection } from './components/products/CalendexSection';
import { IReachSection } from './components/products/IReachSection';
import { OndalSection } from './components/products/OndalSection';
import { SalexPlexSection } from './components/products/SalexPlexSection';
import { CustomerJourneySection } from './components/CustomerJourneySection';
import { ExecutiveRoleSection } from './components/ExecutiveRoleSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ScalabilityAndModularSection } from './components/ScalabilityAndModularSection';
import { SecurityAndIntegrationsSection } from './components/SecurityAndIntegrationsSection';
import { ImplementationRoadmapSection } from './components/ImplementationRoadmapSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { Sparkles, Calendar } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<ProductId | undefined>(undefined);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenDemo = (productId?: ProductId) => {
    setSelectedDemoProduct(productId);
    setDemoModalOpen(true);
  };

  const handleNavigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Sticky Header Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenDemo={handleOpenDemo}
        onNavigateTo={handleNavigateTo}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          theme={theme}
          onOpenDemo={handleOpenDemo}
          onNavigateTo={handleNavigateTo}
        />

        <QuickNavPills
          theme={theme}
          onNavigateTo={handleNavigateTo}
        />

        <ProblemSection
          theme={theme}
          onNavigateTo={handleNavigateTo}
        />

        {/* 5 Specialized Interactive Product Showcases */}
        <div className="space-y-4">
          <BuzzcomSection theme={theme} onOpenDemo={handleOpenDemo} />
          <CalendexSection theme={theme} onOpenDemo={handleOpenDemo} />
          <IReachSection theme={theme} onOpenDemo={handleOpenDemo} />
          <OndalSection theme={theme} onOpenDemo={handleOpenDemo} />
          <SalexPlexSection theme={theme} onOpenDemo={handleOpenDemo} />
        </div>

        <CustomerJourneySection
          theme={theme}
          onNavigateToProduct={(id) => handleNavigateTo(`product-${id}`)}
          onOpenDemo={() => handleOpenDemo()}
        />

        <ExecutiveRoleSection
          theme={theme}
          onNavigateToProduct={(id) => handleNavigateTo(`product-${id}`)}
          onOpenDemo={() => handleOpenDemo()}
        />

        <BenefitsSection
          theme={theme}
          onOpenDemo={() => handleOpenDemo()}
        />

        <ScalabilityAndModularSection
          theme={theme}
          onNavigateToProduct={(id) => handleNavigateTo(`product-${id}`)}
          onOpenDemo={handleOpenDemo}
        />

        <SecurityAndIntegrationsSection theme={theme} />

        <ImplementationRoadmapSection
          theme={theme}
          onOpenDemo={() => handleOpenDemo()}
        />

        <FAQSection
          theme={theme}
          onOpenDemo={() => handleOpenDemo()}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigateTo={handleNavigateTo}
        onOpenDemo={handleOpenDemo}
      />

      {/* Enterprise Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        preselectedProduct={selectedDemoProduct}
      />

      {/* Floating Action Trigger Button (Bottom-Right) */}
      <button
        onClick={() => handleOpenDemo()}
        aria-label="Book a Demo"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-bold shadow-2xl shadow-indigo-500/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group"
      >
        <Calendar className="w-5 h-5 text-cyan-300 animate-pulse" />
        <span className="hidden sm:inline text-xs tracking-wider uppercase">Book Demo</span>
      </button>

    </div>
  );
}
