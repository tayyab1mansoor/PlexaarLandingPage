import React, { useState } from 'react';
import { ThemeMode, ProductId } from '../../types';
import { PRODUCT_BG_IMAGES, PRODUCT_GIF_ANIMATIONS, CALENDEX_MOCKUP_DATA, CALENDEX_SCHEDULE_MOCKUP_IMAGE, CALENDEX_EXACT_LAPTOP_MOBILE_IMAGE } from '../../data/productImages';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Bell,
  Monitor,
  Smartphone,
  Sparkles,
  SlidersHorizontal,
  Users,
  Megaphone,
  ShoppingCart,
  ShieldCheck,
  Play,
  Pause,
  Layers,
  Activity,
  Image as ImageIcon,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface CalendexSectionProps {
  theme: ThemeMode;
  onOpenDemo: (id?: ProductId) => void;
}

export const CalendexSection: React.FC<CalendexSectionProps> = ({ theme, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'realMockup' | 'highResPhoto' | 'interactiveSimulator'>('realMockup');
  const [isPlayingGif, setIsPlayingGif] = useState(true);
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');
  const [selectedSlot, setSelectedSlot] = useState<string | null>('02:00 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bgOpacity, setBgOpacity] = useState<number>(40);

  const isDark = theme === 'dark';
  const calendexBgImage = PRODUCT_BG_IMAGES.calendex;

  return (
    <section id="product-calendex" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-[#fbfcff] text-[#131313]'}`}>
      
      {/* Product Background Image */}
      <img 
        src={calendexBgImage} 
        alt="Calendex Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500"
        style={{ opacity: bgOpacity / 100 }}
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1920&q=80';
        }}
      />
      
      {/* Soft overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-[#548DFF] bg-purple-500/10 border border-purple-500/20">
              <Calendar className="w-3.5 h-3.5 text-purple-500" />
              CALENDEX — APPOINTMENT & BOOKING SYSTEM
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Enterprise Appointment Platform{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0575E6] via-[#548DFF] to-[#5B7CFD]">
                Live Multi-Staff Matrix.
              </span>
            </h2>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Real-time synchronization between Joanna, Maria, Sameer and your client mobile apps. Zero scheduling double-bookings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenDemo('calendex')}
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] hover:from-[#0575E6] hover:to-[#548DFF] text-white transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#548DFF]/25 shrink-0"
            >
              <span>Launch Calendex Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className={`flex items-center gap-2 p-1.5 rounded-2xl ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} border`}>
            <button
              onClick={() => setActiveTab('realMockup')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'realMockup'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4 text-[#548DFF]" />
              <span>Exact White Laptop + Mobile Replica</span>
            </button>

            <button
              onClick={() => setActiveTab('highResPhoto')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'highResPhoto'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-[#548DFF]" />
              <span>High-Res Photo Render</span>
            </button>

            <button
              onClick={() => setActiveTab('interactiveSimulator')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'interactiveSimulator'
                  ? 'bg-[#548DFF] text-white shadow-lg shadow-[#548DFF]/30'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Booking Simulator</span>
            </button>
          </div>

          <div className={`text-xs font-bold flex items-center gap-2 px-3.5 py-2 rounded-xl border ${
            isDark ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-white text-slate-700 border-slate-200 shadow-sm'
          }`}>
            <UserCheck className="w-4 h-4 text-emerald-500" />
            <span>Account: #689002 (Live Enterprise Roster)</span>
          </div>
        </div>

        {/* TAB 1: EXACT WHITE LAPTOP + MOBILE DEVICE REPLICA */}
        {activeTab === 'realMockup' && (
          <div className="mt-8 space-y-6">
            
            {/* White Laptop Frame Container */}
            <div className="rounded-[32px] bg-slate-200/90 p-4 sm:p-8 shadow-2xl border border-slate-300/80 relative backdrop-blur-md">
              
              {/* Laptop Top Bezel & Web Camera */}
              <div className="flex items-center justify-center mb-3">
                <div className="w-3 h-3 rounded-full bg-slate-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* Main Laptop Screen (Bright White Enterprise SaaS Interface) */}
              <div className="rounded-2xl bg-white text-[#131313] overflow-hidden shadow-2xl border border-slate-300 grid grid-cols-12 min-h-[520px]">
                
                {/* Left Blue Sidebar */}
                <div className="col-span-12 lg:col-span-2 bg-[#2563eb] text-white p-4 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-2 pb-4 border-b border-blue-400/40">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-black text-blue-600 text-lg shadow-md">
                        <span className="text-blue-600">P</span>
                        <span className="text-amber-500 text-xs">l</span>
                      </div>
                      <div className="font-extrabold text-lg tracking-tight text-white">
                        plexaar
                      </div>
                    </div>

                    {/* Navigation Items */}
                    <nav className="space-y-1.5 text-xs font-bold">
                      <div className="px-3 py-2.5 rounded-xl bg-blue-700/90 text-white flex items-center gap-3 shadow-inner cursor-pointer">
                        <Calendar className="w-4 h-4 text-white" />
                        <span>Booking</span>
                      </div>
                      <div className="px-3 py-2.5 rounded-xl hover:bg-blue-500/60 text-blue-100 flex items-center gap-3 cursor-pointer transition-colors">
                        <Users className="w-4 h-4" />
                        <span>Staff</span>
                      </div>
                      <div className="px-3 py-2.5 rounded-xl hover:bg-blue-500/60 text-blue-100 flex items-center gap-3 cursor-pointer transition-colors">
                        <Megaphone className="w-4 h-4" />
                        <span>Marketing</span>
                      </div>
                      <div className="px-3 py-2.5 rounded-xl hover:bg-blue-500/60 text-blue-100 flex items-center gap-3 cursor-pointer transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                        <span>Purchase</span>
                      </div>
                      <div className="px-3 py-2.5 rounded-xl hover:bg-blue-500/60 text-blue-100 flex items-center gap-3 cursor-pointer transition-colors">
                        <Layers className="w-4 h-4" />
                        <span>Admin</span>
                      </div>
                    </nav>
                  </div>

                  <div className="text-[10px] text-blue-200 text-center font-medium">
                    Plexaar Calendex v4.2
                  </div>
                </div>

                {/* Main White Calendar Schedule Board */}
                <div className="col-span-12 lg:col-span-7 bg-[#f8fafc] p-4 sm:p-6 border-r border-slate-200 flex flex-col justify-between">
                  <div>
                    {/* Top Header Bar */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300">
                          <Filter className="w-3 h-3 inline mr-1" /> Filters
                        </button>
                        <div className="text-xs text-slate-500 font-bold ml-2">
                          Account: <span className="text-slate-800">689002</span>
                        </div>
                      </div>

                      {/* Date Controls */}
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700">
                        <button className="p-1 rounded hover:bg-slate-200 text-slate-500">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-slate-900 px-2 py-1 rounded bg-white border border-slate-200 shadow-sm">
                          Wednesday 10, August 2022
                        </span>
                        <button className="p-1 rounded hover:bg-slate-200 text-slate-500">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* View Switchers */}
                      <div className="flex items-center gap-1 text-[11px] font-bold bg-slate-100 p-1 rounded-lg border border-slate-200">
                        <span className="px-2 py-0.5 rounded text-slate-600 cursor-pointer">Date</span>
                        <span className="px-2 py-0.5 rounded text-slate-600 cursor-pointer">Day</span>
                        <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white font-extrabold shadow-sm">Week</span>
                        <span className="px-2 py-0.5 rounded text-slate-600 cursor-pointer">Month</span>
                      </div>
                    </div>

                    {/* Staff Columns Header */}
                    <div className="grid grid-cols-3 gap-3 text-center text-xs font-black text-slate-800 pb-3 border-b border-slate-200">
                      <div className="py-1 px-2 rounded bg-slate-100 border border-slate-200">Joanna Expert</div>
                      <div className="py-1 px-2 rounded bg-slate-100 border border-slate-200">Maria Expert</div>
                      <div className="py-1 px-2 rounded bg-slate-100 border border-slate-200">Sameer Expert</div>
                    </div>

                    {/* Multi-Column Schedule Matrix */}
                    <div className="grid grid-cols-3 gap-3 pt-4 text-xs font-bold min-h-[360px]">
                      
                      {/* Column 1: Joanna Expert */}
                      <div className="space-y-3">
                        {/* 10:00 - 11:00 ANNE HATHAWAY */}
                        <div className="p-3 rounded-xl bg-[#fef08a] border border-[#fde047] text-amber-950 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>ANNE HATHAWAY</span>
                            <span className="text-[10px] text-amber-900">10:00 - 11:00</span>
                          </div>
                          <div className="text-[11px] text-amber-900 font-medium mt-1">
                            AC Service
                          </div>
                        </div>

                        {/* 12:00 - 01:30 KRISTEN COHAN */}
                        <div className="p-3 rounded-xl bg-[#f472b6] border border-[#ec4899] text-pink-950 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>KRISTEN COHAN</span>
                            <span className="text-[10px] text-pink-900">12:00 - 01:30</span>
                          </div>
                          <div className="text-[11px] text-pink-900 font-medium mt-1">
                            Boiler Fitting
                          </div>
                        </div>

                        {/* 03:00 - 04:30 LINDA RUSSEL */}
                        <div className="p-3 rounded-xl bg-[#bfdbfe] border border-[#93c5fd] text-blue-950 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>LINDA RUSSEL</span>
                            <span className="text-[10px] text-blue-900">03:00 - 04:30</span>
                          </div>
                          <div className="text-[11px] text-blue-900 font-medium mt-1">
                            Ac Fitting
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Maria Expert */}
                      <div className="space-y-3">
                        {/* 12:00 - 01:30 TOM BENTLEY */}
                        <div className="p-3 rounded-xl bg-[#5eead4] border border-[#2dd4bf] text-teal-950 shadow-sm hover:shadow-md transition-shadow mt-12">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>TOM BENTLEY</span>
                            <span className="text-[10px] text-teal-900">12:00 - 01:30</span>
                          </div>
                          <div className="text-[11px] text-teal-900 font-medium mt-1">
                            Laser Skin Removal
                          </div>
                        </div>

                        {/* 03:45 - 05:30 TAISSA WILG */}
                        <div className="p-3 rounded-xl bg-[#fef08a] border border-[#fde047] text-amber-950 shadow-sm hover:shadow-md transition-shadow mt-16">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>TAISSA WILG</span>
                            <span className="text-[10px] text-amber-900">03:45 - 05:30</span>
                          </div>
                          <div className="text-[11px] text-amber-900 font-medium mt-1">
                            Laser Skin Tightening
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Sameer Expert */}
                      <div className="space-y-3">
                        {/* 10:00 - 11:30 KEVIN BACON */}
                        <div className="p-3 rounded-xl bg-[#bfdbfe] border border-[#93c5fd] text-blue-950 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>KEVIN BACON</span>
                            <span className="text-[10px] text-blue-900">10:00 - 11:30</span>
                          </div>
                          <div className="text-[11px] text-blue-900 font-medium mt-1">
                            AC Service
                          </div>
                        </div>

                        {/* 01:30 - 03:00 JUSTIN TIMBER */}
                        <div className="p-3 rounded-xl bg-[#5eead4] border border-[#2dd4bf] text-teal-950 shadow-sm hover:shadow-md transition-shadow mt-8">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>JUSTIN TIMBER</span>
                            <span className="text-[10px] text-teal-900">01:30 - 03:00</span>
                          </div>
                          <div className="text-[11px] text-teal-900 font-medium mt-1">
                            Plumbing
                          </div>
                        </div>

                        {/* 04:30 - 05:30 NATASHA YAS */}
                        <div className="p-3 rounded-xl bg-[#f472b6] border border-[#ec4899] text-pink-950 shadow-sm hover:shadow-md transition-shadow mt-8">
                          <div className="flex items-center justify-between font-extrabold">
                            <span>NATASHA YAS</span>
                            <span className="text-[10px] text-pink-900">04:30 - 05:30</span>
                          </div>
                          <div className="text-[11px] text-pink-900 font-medium mt-1">
                            General Electrician
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Footer status bar */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Live Syncing Active
                    </span>
                    <span>3 Active Staff Roster Columns</span>
                  </div>
                </div>

                {/* Right Side: Smartphone Device Mockup (Resting alongside) */}
                <div className="col-span-12 lg:col-span-3 bg-slate-900 text-white p-4 flex flex-col justify-between border-l border-slate-800">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-[#548DFF]" />
                        <span className="text-xs font-extrabold">Synced Mobile App</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#FFD705]/20 text-emerald-400 text-[9px] font-bold">iOS / Android</span>
                    </div>

                    {/* Smartphone Screen View */}
                    <div className="rounded-2xl bg-slate-950 p-3 border border-slate-800 space-y-2 text-[10px] shadow-inner">
                      <div className="flex items-center justify-between text-slate-400 font-bold pb-1 border-b border-slate-800">
                        <span>Joanna • Maria • Sameer</span>
                        <span className="text-[#548DFF]">10 Aug 2022</span>
                      </div>

                      <div className="p-2 rounded-lg bg-[#fef08a] text-amber-950 font-bold space-y-0.5">
                        <div className="text-[11px]">ANNE HATHAWAY</div>
                        <div className="text-[9px] text-amber-900">10:00 - 11:00 • AC Service</div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#f472b6] text-pink-950 font-bold space-y-0.5">
                        <div className="text-[11px]">KRISTEN COHAN</div>
                        <div className="text-[9px] text-pink-900">12:00 - 01:30 • Boiler Fitting</div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#5eead4] text-teal-950 font-bold space-y-0.5">
                        <div className="text-[11px]">TOM BENTLEY</div>
                        <div className="text-[9px] text-teal-900">12:00 - 01:30 • Laser Skin Removal</div>
                      </div>

                      <div className="p-2 rounded-lg bg-[#bfdbfe] text-blue-950 font-bold space-y-0.5">
                        <div className="text-[11px]">KEVIN BACON</div>
                        <div className="text-[9px] text-blue-900">10:00 - 11:30 • AC Service</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 text-center italic mt-4">
                    Exact dual-device layout matched from user uploaded reference image.
                  </div>
                </div>

              </div>

              {/* Laptop Stand Base Shadow */}
              <div className="w-3/4 mx-auto h-3 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent rounded-full blur-sm mt-2" />
            </div>

          </div>
        )}

        {/* TAB 2: HIGH RESOLUTION RENDERED PHOTO */}
        {activeTab === 'highResPhoto' && (
          <div className="mt-8 rounded-3xl border border-purple-500/40 bg-slate-900/90 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md animate-in fade-in space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-[#5B7CFD] pb-2 border-b border-slate-800">
              <span className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#548DFF]" />
                Plexaar Calendex Exact Laptop & Smartphone Photographic Mockup
              </span>
              <span className="text-slate-400">Account #689002</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 relative aspect-[16/9] w-full">
              <img 
                src={CALENDEX_EXACT_LAPTOP_MOBILE_IMAGE} 
                alt="Exact Calendex Laptop and Mobile Mockup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-800">
                <span className="font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Photographic dual-device rendering of Joanna, Maria, Sameer staff schedules
                </span>
                <span className="text-[#548DFF] font-extrabold text-[11px] uppercase tracking-wider">Synced Live</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BOOKING SIMULATOR */}
        {activeTab === 'interactiveSimulator' && (
          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 sm:p-8 backdrop-blur-md animate-in fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#5B7CFD]/20 text-[#548DFF] border border-[#5B7CFD]/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Enterprise Booking Command Simulator</div>
                  <div className="text-xs text-slate-400">Synced with iReach Staff Rosters & Ondal Ledger</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {(['day', 'week', 'month'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setViewMode(m)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      viewMode === m
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Select Appointment Slot</span>
                  <span className="text-[#548DFF] font-bold">Wednesday 10, August 2022</span>
                </div>

                <div className="space-y-2.5">
                  <div
                    onClick={() => { setSelectedSlot('10:00 AM'); setBookingConfirmed(false); }}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      selectedSlot === '10:00 AM'
                        ? 'bg-[#5B7CFD]/20 border-purple-500/80 shadow-lg shadow-purple-500/10'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className={`w-4 h-4 ${selectedSlot === '10:00 AM' ? 'text-[#548DFF]' : 'text-slate-500'}`} />
                      <div>
                        <div className="text-xs font-bold text-white">10:00 AM - 11:00 AM</div>
                        <div className="text-[10px] text-slate-400">Joanna Expert • AC Service</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300">
                      ANNE HATHAWAY
                    </span>
                  </div>

                  <div
                    onClick={() => { setSelectedSlot('12:00 PM'); setBookingConfirmed(false); }}
                    className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      selectedSlot === '12:00 PM'
                        ? 'bg-[#5B7CFD]/20 border-purple-500/80 shadow-lg shadow-purple-500/10'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className={`w-4 h-4 ${selectedSlot === '12:00 PM' ? 'text-[#548DFF]' : 'text-slate-500'}`} />
                      <div>
                        <div className="text-xs font-bold text-white">12:00 PM - 01:30 PM</div>
                        <div className="text-[10px] text-slate-400">Maria Expert • Laser Skin Removal</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FFD705]/20 text-emerald-300">
                      TOM BENTLEY
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setBookingConfirmed(true)}
                  disabled={!selectedSlot}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-gradient-to-r from-[#548DFF] to-[#5B7CFD] text-white shadow-lg shadow-[#548DFF]/25 hover:shadow-[#548DFF]/40 transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Simulate Calendex Booking Confirmation</span>
                </button>
              </div>

              <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Ecosystem Synchronization Output
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                      <Bell className="w-3.5 h-3.5" />
                      Auto SMS Alerts Active
                    </span>
                  </div>

                  {bookingConfirmed ? (
                    <div className="p-4 rounded-2xl bg-[#42D742]/10 border border-[#FFD705]/40 text-emerald-200 space-y-2 animate-in fade-in">
                      <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span>Appointment Confirmed for {selectedSlot}!</span>
                      </div>
                      <p className="text-xs leading-relaxed text-emerald-200/80">
                        ⚡ Automatically sent SMS reminder to client. Created Buzzcom channel and logged preliminary Ondal invoice draft.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-300">No-Show Reduction Rate</span>
                        <span className="text-xs font-bold text-[#548DFF]">78% Average</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-300">Buffer Time Auto-Allocation</span>
                        <span className="text-xs font-bold text-[#548DFF]">15 mins between slots</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-300">iReach HR Staff Sync</span>
                        <span className="text-xs font-bold text-emerald-400">Roster Checked Live</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Calendex API Status: Fully Operational</span>
                  <span className="text-[#548DFF] font-bold">Account #689002</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
