'use client';

import React, { useEffect } from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';
import { CheckCircle2, AlertTriangle, Sparkles, Award, ArrowRight } from 'lucide-react';

export interface FeedbackData {
  userPhrasing: string;
  goldStandardBenchmark: string;
  scores: {
    marketingLogic: number; // e.g. 94
    terminology: number;    // e.g. 92
    grammar: number;        // e.g. 96
    executivePresence: number; // e.g. 95
  };
  clientReaction?: string;
  sentiment?: 'reassured' | 'skeptical' | 'confrontational';
}

interface InstantFeedbackCelebrationProps {
  data: FeedbackData;
  onContinue: () => void;
}

export const InstantFeedbackCelebration: React.FC<InstantFeedbackCelebrationProps> = ({
  data,
  onContinue,
}) => {
  const { addXp, addGems, completeNode, activeNodeId } = useGamificationStore();

  const isGreatJob = (data.scores.marketingLogic + data.scores.executivePresence) / 2 >= 85;

  // Play audio fanfare on mount
  useEffect(() => {
    if (isGreatJob) {
      soundEffects.playSuccess();
      setTimeout(() => soundEffects.playXpFanfare(), 300);
      completeNode(activeNodeId, 3);
    } else {
      soundEffects.playCorrection();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#040817]/75 backdrop-blur-md select-none animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-2xl rounded-t-3xl sm:rounded-3xl sm:mb-8 border-t-2 sm:border-2 shadow-[0_20px_70px_rgba(2,6,23,0.85)] p-4 sm:p-8 space-y-4 sm:space-y-6 max-h-[92dvh] overflow-y-auto pb-safe animate-in slide-in-from-bottom-8 duration-300 ring-1 ring-white/10 ${
          isGreatJob
            ? 'bg-[#09132c]/95 backdrop-blur-2xl border-sky-400/40'
            : 'bg-[#09132c]/95 backdrop-blur-2xl border-amber-400/40'
        }`}
      >

        {/* 1. CELEBRATORY HEADER BANNER */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-b-4 flex-shrink-0 ${
                isGreatJob
                  ? 'bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 border-blue-800 text-white shadow-blue-500/20'
                  : 'bg-amber-500 border-amber-700 text-amber-950'
              }`}
            >
              {isGreatJob ? '🎉' : '💡'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span
                  className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isGreatJob
                      ? 'bg-sky-500/20 text-sky-300 border-sky-400/30'
                      : 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                  }`}
                >
                  {isGreatJob ? 'Executive Mastery' : 'Refinement Opportunity'}
                </span>
                <span className="text-[10px] sm:text-xs font-black text-amber-300 flex items-center gap-1">
                  ⚡ +15 XP
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white leading-tight mt-0.5 break-words drop-shadow-sm">
                {isGreatJob ? 'Great Job!' : 'Watch Your Terminology!'}
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end flex-shrink-0">
            <span className="text-xs font-bold text-blue-200/70">Client Response</span>
            <span className="text-xs font-black text-sky-300 bg-sky-500/15 border border-sky-400/25 px-2.5 py-1 rounded-xl mt-1">
              ✓ Client Reassured
            </span>
          </div>
        </div>

        {/* 2. MULTI-VECTOR SCORE BREAKDOWN PILLS */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-300/70">
            Performance Breakdown
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* Logic */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Marketing Logic
              </span>
              <span className="text-base sm:text-lg font-black text-sky-400 mt-0.5">
                {data.scores.marketingLogic}%
              </span>
            </div>

            {/* Terminology */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Terminology
              </span>
              <span className="text-base sm:text-lg font-black text-cyan-300 mt-0.5">
                {data.scores.terminology}%
              </span>
            </div>

            {/* Grammar */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Grammar & Clarity
              </span>
              <span className="text-base sm:text-lg font-black text-indigo-300 mt-0.5">
                {data.scores.grammar}%
              </span>
            </div>

            {/* Executive Presence */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Exec Presence
              </span>
              <span className="text-base sm:text-lg font-black text-amber-300 mt-0.5">
                {data.scores.executivePresence}%
              </span>
            </div>
          </div>
        </div>

        {/* 3. SIDE-BY-SIDE COMPARISON BOX */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-300/70">
            Phrasing Comparison
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Left: Your Phrasing */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0c1836]/70 backdrop-blur-md border border-blue-400/20 space-y-1.5 min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-black text-blue-200/80">
                <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
                <span>Your Phrasing</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed italic break-words">
                "{data.userPhrasing}"
              </p>
            </div>

            {/* Right: The Gold-Standard BLUF Benchmark */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0e214a]/85 backdrop-blur-md border border-sky-400/40 shadow-inner space-y-1.5 min-w-0">
              <div className="flex items-center gap-1.5 text-xs font-black text-sky-300">
                <Award className="w-3.5 h-3.5 flex-shrink-0 text-sky-400" />
                <span>Gold-Standard BLUF Benchmark</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white leading-relaxed break-words">
                "{data.goldStandardBenchmark}"
              </p>
            </div>
          </div>
        </div>

        {/* 4. TACTILE 3D CONTINUE BUTTON */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onContinue();
          }}
          className="btn-3d-blue w-full py-4 text-base font-black tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>CONTINUE</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
