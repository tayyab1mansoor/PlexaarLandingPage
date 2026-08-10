import React, { useState } from 'react';
import { ThemeMode, ProductId } from '../../types';
import { PRODUCT_BG_IMAGES, PRODUCT_GIF_ANIMATIONS } from '../../data/productImages';
import { 
  MessageSquare, 
  Phone, 
  Send, 
  Mic, 
  MicOff, 
  PhoneOff, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Activity,
  Play,
  Pause,
  Volume2
} from 'lucide-react';

interface BuzzcomSectionProps {
  theme: ThemeMode;
  onOpenDemo: (id?: ProductId) => void;
}

export const BuzzcomSection: React.FC<BuzzcomSectionProps> = ({ theme, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'animatedGif' | 'interactiveChat'>('animatedGif');
  const [isPlayingGif, setIsPlayingGif] = useState(true);
  const [messages, setMessages] = useState([
    { sender: 'Sarah (Operations)', text: 'Calendex booking #8402 just landed. Needs HVAC specialist assigned.', time: '10:14 AM' },
    { sender: 'Alex (Field Lead)', text: 'I am nearby Branch #3. Taking the dispatch now.', time: '10:15 AM' }
  ]);

  const [inputMsg, setInputMsg] = useState('');
  const [activeCall, setActiveCall] = useState(false);
  const [bgOpacity, setBgOpacity] = useState<number>(40);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: 'You (Central Admin)', text: inputMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setInputMsg('');
  };

  const isDark = theme === 'dark';
  const buzzcomBgImage = PRODUCT_BG_IMAGES.buzzcom;
  const buzzcomGif = PRODUCT_GIF_ANIMATIONS.buzzcom;

  return (
    <section id="product-buzzcom" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Product Background Image with 40% Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${buzzcomBgImage})`, 
          opacity: bgOpacity / 100 
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-slate-950/60 via-slate-950/40 to-slate-950' : 'from-slate-50/60 via-slate-50/40 to-slate-50'} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-500" />
              BUZZCOM — UNIFIED ENTERPRISE COMMUNICATIONS
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Instant Messaging & VoIP for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-purple-400">
                Connected Operations.
              </span>
            </h2>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Connect desk staff and field personnel with end-to-end encrypted messaging, voice call channels, and operational audit logs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Opacity Control Pill */}
            <div className={`px-3.5 py-2 rounded-xl ${isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'} border text-xs font-bold flex items-center gap-2.5`}>
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-500" />
              <span className={`text-[11px] whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>BG Opacity: {bgOpacity}%</span>
              <input 
                type="range" 
                min="10" 
                max="80" 
                value={bgOpacity} 
                onChange={(e) => setBgOpacity(Number(e.target.value))}
                className="w-16 accent-cyan-500 cursor-pointer"
              />
            </div>

            <button
              onClick={() => onOpenDemo('buzzcom')}
              className="px-6 py-3 rounded-xl text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0"
            >
              <span>Request Buzzcom Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className={`flex items-center gap-2 p-1.5 rounded-2xl ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} border`}>
            <button
              onClick={() => setActiveTab('animatedGif')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'animatedGif'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Live Animated GIF Preview</span>
            </button>

            <button
              onClick={() => setActiveTab('interactiveChat')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'interactiveChat'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Communication Simulator</span>
            </button>
          </div>

          <div className="text-xs text-cyan-600 dark:text-cyan-300 font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>TLS 1.3 Encrypted • High Bitrate VoIP</span>
          </div>
        </div>

        {/* TAB 1: LIVE ANIMATED GIF SHOWCASE */}
        {activeTab === 'animatedGif' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-cyan-500/40 bg-slate-900/90 shadow-2xl' : 'border-cyan-200 bg-white shadow-xl'} p-6 sm:p-8 relative overflow-hidden backdrop-blur-md animate-in fade-in`}>
            <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-500 animate-ping" />
                <span className="text-xs font-extrabold uppercase text-cyan-600 dark:text-cyan-300 tracking-wider">
                  Buzzcom Unified Communication GIF Preview
                </span>
              </div>
              <button
                onClick={() => setIsPlayingGif(!isPlayingGif)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {isPlayingGif ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-cyan-500" />}
                <span>{isPlayingGif ? 'Pause Animation' : 'Play Animation'}</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 group aspect-video sm:aspect-[21/9] bg-slate-950 flex items-center justify-center">
              <img 
                src={buzzcomGif.gifUrl} 
                alt={buzzcomGif.caption}
                className={`w-full h-full object-cover transition-all duration-700 ${isPlayingGif ? 'scale-105 filter contrast-105' : 'filter grayscale'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/40 backdrop-blur-md max-w-sm space-y-1">
                <div className="text-xs font-black text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  VoIP & Instant Team Chat
                </div>
                <div className="text-sm font-bold text-white">{buzzcomGif.caption}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{buzzcomGif.description}</p>
              </div>

              <div className="absolute bottom-6 right-6 p-3 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs shadow-2xl border border-cyan-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-900" />
                <span>Zero Latency VoIP Audio Stream</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE CHAT SIMULATOR */}
        {activeTab === 'interactiveChat' && (
          <div className={`mt-8 rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-900/90 shadow-2xl' : 'border-slate-200 bg-white shadow-xl'} p-6 sm:p-8 backdrop-blur-md animate-in fade-in`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Channel Sidebar */}
              <div className={`lg:col-span-4 p-4 rounded-2xl ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} border space-y-4`}>
                <div className={`flex items-center justify-between text-xs font-bold uppercase ${isDark ? 'text-slate-400 border-slate-800' : 'text-slate-500 border-slate-200'} border-b pb-3`}>
                  <span>Active Channels</span>
                  <span className="text-cyan-500 font-extrabold">5 Online</span>
                </div>

                <div className="space-y-2 text-xs font-bold">
                  <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-500" />
                      #operations-dispatch
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  </div>

                  <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-900 text-slate-400 border-slate-800/80' : 'bg-white text-slate-600 border-slate-200'} border flex items-center justify-between cursor-pointer`}>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      #field-technicians
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>12</span>
                  </div>

                  <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-900 text-slate-400 border-slate-800/80' : 'bg-white text-slate-600 border-slate-200'} border flex items-center justify-between cursor-pointer`}>
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-500" />
                      VoIP Bridge Room #01
                    </span>
                    <span className="text-[10px] text-emerald-500 font-bold">Live HD</span>
                  </div>
                </div>

                {/* Simulated VoIP Call Controls */}
                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} space-y-3`}>
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    HD Voice Calling Widget
                  </div>

                  {activeCall ? (
                    <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-200 space-y-2 animate-in fade-in">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
                          Call Connected (00:42)
                        </span>
                        <span className="text-[10px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-full font-black">240 kbps</span>
                      </div>
                      <button
                        onClick={() => setActiveCall(false)}
                        className="w-full py-2 rounded-lg bg-rose-600 text-white font-bold text-xs hover:bg-rose-500 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <PhoneOff className="w-3.5 h-3.5" />
                        <span>Disconnect Call</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveCall(true)}
                      className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-extrabold text-xs hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Start HD VoIP Call</span>
                    </button>
                  )}
                </div>

              </div>

              {/* Chat Stream Window */}
              <div className={`lg:col-span-8 p-4 rounded-2xl ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'} border flex flex-col justify-between min-h-[360px]`}>
                
                {/* Chat Messages */}
                <div className="space-y-3 overflow-y-auto max-h-[260px] pr-2">
                  <div className={`text-center text-[10px] font-bold uppercase tracking-widest my-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Encrypted Operations Stream
                  </div>

                  {messages.map((m, idx) => (
                    <div key={idx} className={`p-3 rounded-2xl border space-y-1 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-cyan-600 dark:text-cyan-400">{m.sender}</span>
                        <span className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{m.time}</span>
                      </div>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{m.text}</p>
                    </div>
                  ))}
                </div>

                {/* Input Bar */}
                <form onSubmit={handleSend} className={`mt-4 pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'} flex items-center gap-2`}>
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Type dispatch message or operational update..."
                    className={`flex-1 px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-cyan-500 ${
                      isDark 
                        ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
