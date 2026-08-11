import React, { useState, useEffect } from 'react';
import { PLEXAAR_PRODUCTS } from '../data/plexaarData';
import { DemoFormData, ProductId } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, User, Mail, Phone, Globe } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: ProductId;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, preselectedProduct }) => {
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    phone: '',
    country: 'United States',
    companySize: '100-500 Employees',
    selectedProducts: preselectedProduct ? [preselectedProduct] : ['buzzcom', 'calendex', 'ireach', 'ondal', 'salexplex'],
    managementGoals: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct && !formData.selectedProducts.includes(preselectedProduct)) {
      setFormData((prev) => ({ ...prev, selectedProducts: [preselectedProduct] }));
    }
  }, [preselectedProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleProduct = (id: ProductId) => {
    setFormData((prev) => {
      const exists = prev.selectedProducts.includes(id);
      return {
        ...prev,
        selectedProducts: exists
          ? prev.selectedProducts.filter((p) => p !== id)
          : [...prev.selectedProducts, id]
      };
    });
  };

  const selectAllProducts = () => {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: ['buzzcom', 'calendex', 'ireach', 'ondal', 'salexplex']
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in overflow-y-auto cursor-pointer"
    >
      
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl my-8 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white cursor-default"
      >
        
        {/* Close / Back Button (Top Right) */}
        <button
          onClick={onClose}
          aria-label="Close modal and go back"
          className="absolute top-5 right-5 px-3 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold border border-slate-700/60 shadow-md group"
        >
          <span>Go Back</span>
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Demo Request Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#548DFF]">{formData.firstName}</span>. Our enterprise solutions architecture team has received your request and will contact you at <span className="font-bold text-[#548DFF]">{formData.email}</span> within 2 business hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white font-bold text-xs shadow-lg"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#548DFF] bg-[#548DFF]/10 border border-[#548DFF]/20">
                <Sparkles className="w-3 h-3" />
                ENTERPRISE SOLUTION ARCHITECTURE DEMO
              </div>
              <h2 className="text-2xl font-black text-white">
                See Your Business Connected Through Plexaar.
              </h2>
              <p className="text-xs text-slate-400">
                Customized live platform walkthrough tailored to your operational goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Jane"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#548DFF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#548DFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#548DFF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Global Inc."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#548DFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    placeholder="Chief Operating Officer"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#548DFF]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Company Size
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-[#548DFF]"
                  >
                    <option>50-100 Employees</option>
                    <option>100-500 Employees</option>
                    <option>500-2,000 Employees</option>
                    <option>2,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              {/* Product Multi-Select */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Which products interest you?
                  </label>
                  <button
                    type="button"
                    onClick={selectAllProducts}
                    className="text-[10px] font-bold text-[#548DFF] hover:underline"
                  >
                    Select All Products
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {PLEXAAR_PRODUCTS.map((prod) => {
                    const isChecked = formData.selectedProducts.includes(prod.id);
                    return (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => toggleProduct(prod.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all text-xs font-bold flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#548DFF]/20 border-[#548DFF] text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>{prod.name}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#548DFF]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  What would you like Plexaar to help manage?
                </label>
                <textarea
                  rows={2}
                  value={formData.managementGoals}
                  onChange={(e) => setFormData({ ...formData, managementGoals: e.target.value })}
                  placeholder="e.g. Unify appointments with our financial ledger and HR attendance."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#548DFF]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-1/3 py-3.5 px-4 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/80 text-center"
                >
                  Cancel & Go Back
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-2/3 py-3.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white shadow-xl shadow-[#548DFF]/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>REQUEST MY PLEXAAR DEMO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#548DFF]" />
                <span>Your information is protected under enterprise NDA privacy standards.</span>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
