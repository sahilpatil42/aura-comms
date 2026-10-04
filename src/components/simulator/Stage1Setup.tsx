'use client';

import React, { useState } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { SpeechEngine } from '@/lib/audio';
import { 
  AlertOctagon, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  Building2, 
  AlertCircle, 
  Volume2, 
  Play, 
  ChevronRight,
  ShieldAlert,
  Flame,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const Stage1Setup: React.FC = () => {
  const { activeScenario, setStage, addDialogueTurn, audioMuted } = useSessionStore();
  const [isPlayingBriefing, setIsPlayingBriefing] = useState(false);
  const [revealedClues, setRevealedClues] = useState<Record<number, boolean>>({});

  const toggleClue = (idx: number) => {
    setRevealedClues(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handlePlayBriefing = () => {
    if (audioMuted) return;
    if (isPlayingBriefing) {
      SpeechEngine.stopSpeaking();
      setIsPlayingBriefing(false);
      return;
    }

    setIsPlayingBriefing(true);
    SpeechEngine.speak(activeScenario.initialClientDialogue, {
      pitch: activeScenario.stakeholder.audioVoicePitch ?? 0.95,
      rate: activeScenario.stakeholder.audioVoiceRate ?? 1.05,
      onEnd: () => setIsPlayingBriefing(false),
    });
  };

  const handleStartRoleplay = () => {
    SpeechEngine.stopSpeaking();
    setIsPlayingBriefing(false);

    // Seed the initial client dialogue turn
    addDialogueTurn({
      id: `turn-client-initial-${Date.now()}`,
      speaker: 'client',
      text: activeScenario.initialClientDialogue,
      timestamp: Date.now(),
      sentiment: 'confrontational',
    });

    // Advance to Stage 2
    setStage(2);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Difficulty-Aware Urgency Banner */}
      <div className={`relative overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-md ${
        activeScenario.difficulty === 'beginner'
          ? 'bg-gradient-to-r from-emerald-950/70 via-slate-900/90 to-teal-950/50 border-emerald-500/30'
          : activeScenario.difficulty === 'intermediate'
          ? 'bg-gradient-to-r from-amber-950/70 via-slate-900/90 to-orange-950/50 border-amber-500/30'
          : 'bg-gradient-to-r from-rose-950/70 via-slate-900/90 to-amber-950/50 border-rose-500/30'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl border ${
              activeScenario.difficulty === 'beginner'
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                : activeScenario.difficulty === 'intermediate'
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                : 'bg-rose-500/20 text-rose-400 border-rose-500/30 animate-pulse'
            }`}>
              {activeScenario.difficulty === 'beginner' ? (
                <HelpCircle className="w-6 h-6" />
              ) : (
                <AlertOctagon className="w-6 h-6" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded border ${
                  activeScenario.difficulty === 'beginner'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : activeScenario.difficulty === 'intermediate'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}>
                  {activeScenario.difficulty === 'beginner'
                    ? 'Foundational Client Q&A • Beginner Level'
                    : activeScenario.difficulty === 'intermediate'
                    ? 'Account Diagnostic • Intermediate Level'
                    : 'Critical Escalation • Executive Level'}
                </span>
                <span className="flex items-center gap-1 text-xs text-amber-300 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  {activeScenario.urgencyTimeline}
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-black text-white mt-1">
                {activeScenario.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayBriefing}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isPlayingBriefing
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800/80 hover:bg-slate-800 border-white/10 text-slate-300'
              }`}
            >
              <Volume2 className="w-4 h-4 text-emerald-400" />
              <span>{isPlayingBriefing ? 'Stop Audio' : 'Listen to Client Call (Soothing AI Voice)'}</span>
            </button>
            <button
              onClick={handleStartRoleplay}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{activeScenario.difficulty === 'beginner' ? 'Start Practice Call' : 'Begin Live Call'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Broken KPIs vs Stakeholder Persona */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Visual Anchor & Broken KPIs (2 cols on large) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Environment & Situation Card */}
          <div className="card-glass rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 font-semibold text-indigo-400">
                <Building2 className="w-4 h-4" />
                {activeScenario.clientEnvironment}
              </span>
              <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                Level: {activeScenario.difficulty}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeScenario.briefingSummary}
            </p>
          </div>

          {/* Broken KPIs Metrics Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-500" />
                Live Broken KPI Telemetry
              </h2>
              <span className="text-xs text-slate-500">
                Click cards to reveal diagnostic clues
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeScenario.brokenKPIs.map((kpi, idx) => {
                const isClueOpen = revealedClues[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleClue(idx)}
                    className="card-glass card-glass-hover rounded-2xl p-4 cursor-pointer relative overflow-hidden transition-all border border-white/10 hover:border-indigo-500/40"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          {kpi.metric}
                        </span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-2xl font-black text-white">
                            {kpi.currentValue}
                          </span>
                          <span className="text-xs text-slate-500 line-through">
                            {kpi.previousValue}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${
                          kpi.isNegative
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {kpi.isNegative ? (
                          <TrendingUp className="w-3.5 h-3.5" />
                        ) : (
                          <TrendingDown className="w-3.5 h-3.5" />
                        )}
                        <span>{kpi.deltaPercent}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Agency Target: <strong className="text-slate-200">{kpi.benchmark}</strong></span>
                      <span className="text-indigo-400 font-medium flex items-center gap-1">
                        {isClueOpen ? 'Hide Clues' : 'Inspect Driver'}
                        <HelpCircle className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Expandable Clues */}
                    {isClueOpen && (
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-950/80 border border-indigo-500/20 text-xs text-slate-300 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                        <span className="font-semibold text-indigo-300 text-[10px] uppercase tracking-wider block">
                          Technical Indicators:
                        </span>
                        {kpi.rootCauseClues.map((clue, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-1.5 text-[11px]">
                            <span className="text-indigo-400 font-bold">•</span>
                            <span>{clue}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Stakeholder Persona Dossier */}
        <div className="space-y-6">
          <div className="card-glass rounded-2xl p-5 space-y-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                {activeScenario.stakeholder.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  {activeScenario.stakeholder.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {activeScenario.stakeholder.title}
                </p>
                <p className="text-[11px] text-indigo-400 font-medium">
                  {activeScenario.stakeholder.organization}
                </p>
              </div>
            </div>

            {/* Temperament Tag */}
            <div className="pt-2 border-t border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                Stakeholder Temperament
              </span>
              <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-300 capitalize">
                {activeScenario.stakeholder.temperament.replace('-', ' ')}
              </span>
            </div>

            {/* Core Concerns */}
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                Executive Hot Buttons
              </span>
              <ul className="space-y-1.5">
                {activeScenario.stakeholder.keyConcerns.map((concern, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-rose-400 font-bold mt-0.5">✕</span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibited Traps */}
            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/20">
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Deadly Traps (Automatic Penalty)
              </span>
              <ul className="space-y-1 text-[11px] text-slate-300">
                {activeScenario.prohibitedExcuses.map((excuse, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-500">•</span>
                    <span>"{excuse}"</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Initial Client Opening Quote */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Incoming Client Rant:
              </span>
              <p className="text-xs text-slate-200 italic leading-relaxed">
                "{activeScenario.initialClientDialogue}"
              </p>
            </div>

            <button
              onClick={handleStartRoleplay}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Step Into Crisis Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
