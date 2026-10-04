'use client';

import React, { useState } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { SpeechEngine } from '@/lib/audio';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Target, 
  Zap, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';

export const Stage4ModelAnswer: React.FC = () => {
  const { activeScenario, setStage, audioMuted } = useSessionStore();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const model = activeScenario.modelAnswerBLUF;

  const handleToggleAudio = () => {
    if (audioMuted) return;
    if (isPlayingAudio) {
      SpeechEngine.stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    SpeechEngine.speak(model.fullVerbatimScript, {
      pitch: 0.95,
      rate: 1.05,
      onEnd: () => setIsPlayingAudio(false),
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(model.fullVerbatimScript);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="card-glass rounded-2xl p-6 border border-white/10 relative overflow-hidden bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Gold-Standard Benchmark
              </span>
              <span className="text-xs text-slate-400">
                25+ Year Managing Director Script
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              The BLUF Executive Blueprint
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Study the exact vocabulary, syntax, and structured containment strategy used to neutralize client panic and retain six-figure retainer accounts.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isPlayingAudio
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-white/10'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              <span>{isPlayingAudio ? 'Stop Narration' : 'Listen (Soothing AI Voice)'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-white/10 transition-all cursor-pointer"
            >
              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{isCopied ? 'Copied' : 'Copy Script'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Architectural Framework Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Block 1: BLUF */}
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>1. BLUF (Bottom Line Up Front)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed italic bg-slate-950/60 p-3 rounded-xl border border-indigo-500/20">
            "{model.bluf}"
          </p>
          <p className="text-[11px] text-slate-400">
            <strong>Director Rule:</strong> Never bury the solution behind chronological narrative. The client's heart rate drops the moment you state the containment status in sentence #1.
          </p>
        </div>

        {/* Block 2: Root Cause Analysis */}
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>2. Technical Root Cause & Telemetry</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-amber-500/20">
            {model.rootCauseAnalysis}
          </p>
          <p className="text-[11px] text-slate-400">
            <strong>Director Rule:</strong> Point to precise mechanics (CPC bid leakage, webhook disconnection, dark store fill rates) rather than hand-waving vague algorithm changes.
          </p>
        </div>

        {/* Block 3: Immediate Mitigation */}
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>3. Immediate Stop-Loss Guardrails</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-emerald-500/20">
            {model.immediateMitigation}
          </p>
          <p className="text-[11px] text-slate-400">
            <strong>Director Rule:</strong> State actions already executed with timestamps ("At 8:15 AM we executed..."). Do not speak in future conditional tense.
          </p>
        </div>

        {/* Block 4: 72-Hour Roadmap */}
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>4. 72-Hour Recovery & Board Talking Points</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-violet-500/20">
            {model.recoveryPlan72h}
          </p>
          <p className="text-[11px] text-slate-400">
            <strong>Director Rule:</strong> Arm your client contact with exact phrases to defend their department in front of their CEO or Board of Directors.
          </p>
        </div>
      </div>

      {/* Full Verbatim Monologue */}
      <div className="card-glass rounded-2xl p-6 border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Complete Verbatim Executive Delivery
          </h3>
          <span className="text-xs text-slate-500">
            Pacing: ~90 seconds spoken delivery
          </span>
        </div>
        <div className="p-4 rounded-xl bg-slate-950 border border-white/5 text-slate-200 text-sm leading-relaxed font-serif">
          "{model.fullVerbatimScript}"
        </div>
      </div>

      {/* Action Footer Bar */}
      <div className="card-glass rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setStage(3)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Evaluation Audit</span>
        </button>

        <button
          onClick={() => setStage(5)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Proceed to Stage 5: Adaptive Remediation Drill</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
