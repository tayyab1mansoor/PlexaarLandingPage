import React, { useState } from 'react';
import { ProductId } from './types';
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
import { Calendar } from 'lucide-react';

const THEME = 'light' as const;

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedDemoProduct, setSelectedDemoProduct] = useState<ProductId | undefined>(undefined);

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

  return (
    <div className="min-h-screen bg-[#fbfcff] text-[#131313] transition-colors duration-300">
      
      {/* Sticky Header Navbar */}
      <Navbar
        theme={THEME}
        onOpenDemo={handleOpenDemo}
        onNavigateTo={handleNavigateTo}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          theme={THEME}
          onOpenDemo={handleOpenDemo}
          onNavigateTo={handleNavigateTo}
        />

        <QuickNavPills
          theme={THEME}
          onNavigateTo={handleNavigateTo}
        />

        <ProblemSection
          theme={THEME}
          onNavigateTo={handleNavigateTo}
        />

        {/* 5 Specialized Interactive Product Showcases */}
        <div className="space-y-4">
          <BuzzcomSection theme={THEME} onOpenDemo={handleOpenDemo} />
          <CalendexSection theme={THEME} onOpenDemo={handleOpenDemo} />
          <IReachSection theme={THEME} onOpenDemo={handleOpenDemo} />
          <OndalSection theme={THEME} onOpenDemo={handleOpenDemo} />
          <SalexPlexSection theme={THEME} onOpenDemo={handleOpenDemo} />
        </div>

        <CustomerJourneySection
          theme={THEME}
          onNavigateToProduct={(id) => handleNavigateTo(`product-${id}`)}
          onOpenDemo={() => handleOpenDemo()}
        />

        <ExecutiveRoleSection
          theme={THEME}
          onNavigateToProduct={(id) => handleNavigateTo(`product-${id}`)}
          onOpenDemo={() => handleOpenDemo()}
        />

        <BenefitsSection
          theme={THEME}
          onOpenDemo={() => handleOpenDemo()}
        />

        <ScalabilityAndModularSection
          theme={THEME}
          onNavigateToProduct={(id) => handleNavigateTo(`product-${id}`)}
          onOpenDemo={handleOpenDemo}
        />

        <SecurityAndIntegrationsSection theme={THEME} />

        <ImplementationRoadmapSection
          theme={THEME}
          onOpenDemo={() => handleOpenDemo()}
        />

        <FAQSection
          theme={THEME}
          onOpenDemo={() => handleOpenDemo()}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={THEME}
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
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-[#548DFF] to-[#6BA0FF] text-white font-bold shadow-2xl shadow-[#548DFF]/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group"
      >
        <Calendar className="w-5 h-5 text-[#FFD705] animate-pulse" />
        <span className="hidden sm:inline text-xs tracking-wider uppercase">Book Demo</span>
      </button>

    </div>
  );
}
