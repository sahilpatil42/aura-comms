'use client';

import React from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { 
  Radio, 
  Volume2, 
  VolumeX, 
  Key, 
  BookOpen, 
  Rss, 
  Sparkles, 
  AlertTriangle,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenFeeds: () => void;
  onOpenGlossary: () => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFeeds,
  onOpenGlossary,
  onOpenSettings,
}) => {
  const {
    currentStage,
    activeScenario,
    selectScenario,
    audioMuted,
    setAudioMuted,
    setStage,
  } = useSessionStore();

  const stages = [
    { num: 1, label: 'Visual Anchor' },
    { num: 2, label: 'Voice Roleplay' },
    { num: 3, label: '4-Pillar Audit' },
    { num: 4, label: 'Model Benchmark' },
    { num: 5, label: 'Remediation Drill' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080c14]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo and Tagline */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-emerald-400 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center">
              <Radio className="w-5 h-5 text-indigo-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white">
                AURA<span className="text-indigo-400">-Comms</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Agency Advisor
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden md:block">
              Executive Crisis Simulator & Voice Diagnostic Engine
            </p>
          </div>
        </div>

        {/* 5-Stage Stepper Pill */}
        <div className="hidden lg:flex items-center bg-slate-900/90 border border-white/10 rounded-full px-2 py-1 shadow-inner">
          {stages.map((st) => {
            const isActive = currentStage === st.num;
            const isPassed = currentStage > st.num;
            return (
              <button
                key={st.num}
                onClick={() => {
                  // Only allow jumping back to previous or active stages
                  if (st.num <= currentStage) {
                    setStage(st.num as any);
                  }
                }}
                disabled={st.num > currentStage}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/25'
                    : isPassed
                    ? 'text-emerald-400 hover:text-emerald-300'
                    : 'text-slate-500 cursor-not-allowed'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    isActive
                      ? 'bg-white text-indigo-900 font-bold'
                      : isPassed
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {isPassed ? '✓' : st.num}
                </span>
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Tools & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Scenario Selector Dropdown */}
          <div className="relative group">
            <select
              value={activeScenario.id}
              onChange={(e) => {
                const found = CRISIS_SCENARIOS.find((s) => s.id === e.target.value);
                if (found) selectScenario(found);
              }}
              className="appearance-none bg-slate-900/90 text-slate-200 text-xs font-medium pl-3 pr-8 py-2 rounded-lg border border-white/10 hover:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer max-w-[160px] sm:max-w-[210px] truncate"
            >
              {CRISIS_SCENARIOS.map((sc) => (
                <option key={sc.id} value={sc.id}>
                  {sc.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>

          {/* Marketing Feeds */}
          <button
            onClick={onOpenFeeds}
            title="Live Marketing Feeds & Dynamic Scenarios"
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all relative"
          >
            <Rss className="w-4 h-4 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
          </button>

          {/* Metric Glossary */}
          <button
            onClick={onOpenGlossary}
            title="Marketing Metrics Glossary & Playbooks"
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all"
          >
            <BookOpen className="w-4 h-4 text-indigo-400" />
          </button>

          {/* Audio Mute Toggle */}
          <button
            onClick={() => setAudioMuted(!audioMuted)}
            title={audioMuted ? 'Unmute Client Speech' : 'Mute Client Speech'}
            className={`p-2 rounded-lg border transition-all ${
              audioMuted
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                : 'bg-slate-900/80 hover:bg-slate-800 border-white/10 text-slate-300'
            }`}
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* API Key Modal */}
          <button
            onClick={onOpenSettings}
            title="Configure Gemini API Key & Audio Settings"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 text-xs font-semibold transition-all"
          >
            <Key className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">API Key</span>
          </button>
        </div>
      </div>
    </header>
  );
};
