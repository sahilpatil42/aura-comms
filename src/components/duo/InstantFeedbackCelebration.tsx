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
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs select-none animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-2xl rounded-t-3xl sm:rounded-3xl sm:mb-8 border-t-4 sm:border-4 shadow-2xl p-6 sm:p-8 space-y-6 animate-in slide-in-from-bottom-8 duration-300 ${
          isGreatJob
            ? 'bg-[#18252b] border-[#58cc02]'
            : 'bg-[#18252b] border-[#ffc800]'
        }`}
      >
        {/* 1. CELEBRATORY HEADER BANNER */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-b-4 ${
                isGreatJob
                  ? 'bg-[#58cc02] border-[#46a302] text-white'
                  : 'bg-[#ffc800] border-[#e5a400] text-[#764800]'
              }`}
            >
              {isGreatJob ? '🎉' : '💡'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isGreatJob
                      ? 'bg-[#58cc02]/20 text-[#58cc02]'
                      : 'bg-[#ffc800]/20 text-[#ffc800]'
                  }`}
                >
                  {isGreatJob ? 'Executive Mastery' : 'Refinement Opportunity'}
                </span>
                <span className="text-xs font-black text-[#ffc800] flex items-center gap-1">
                  ⚡ +15 XP
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mt-0.5">
                {isGreatJob ? 'Great Job!' : 'Watch Your Terminology!'}
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-bold text-slate-400">Client Response</span>
            <span className="text-xs font-black text-[#58cc02] bg-[#58cc02]/10 px-2 py-1 rounded-xl mt-1">
              ✓ Client Reassured
            </span>
          </div>
        </div>

        {/* 2. MULTI-VECTOR SCORE BREAKDOWN PILLS */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            Performance Breakdown
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* Logic */}
            <div className="p-3 rounded-2xl bg-[#131f24] border-2 border-[#202f36] flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-400">
                Marketing Logic
              </span>
              <span className="text-lg font-black text-[#58cc02] mt-0.5">
                {data.scores.marketingLogic}%
              </span>
            </div>

            {/* Terminology */}
            <div className="p-3 rounded-2xl bg-[#131f24] border-2 border-[#202f36] flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-400">
                Terminology
              </span>
              <span className="text-lg font-black text-[#1cb0f6] mt-0.5">
                {data.scores.terminology}%
              </span>
            </div>

            {/* Grammar */}
            <div className="p-3 rounded-2xl bg-[#131f24] border-2 border-[#202f36] flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-400">
                Grammar & Clarity
              </span>
              <span className="text-lg font-black text-[#ce82ff] mt-0.5">
                {data.scores.grammar}%
              </span>
            </div>

            {/* Executive Presence */}
            <div className="p-3 rounded-2xl bg-[#131f24] border-2 border-[#202f36] flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-400">
                Exec Presence
              </span>
              <span className="text-lg font-black text-[#ffc800] mt-0.5">
                {data.scores.executivePresence}%
              </span>
            </div>
          </div>
        </div>

        {/* 3. SIDE-BY-SIDE COMPARISON BOX */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            Phrasing Comparison
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Left: Your Phrasing */}
            <div className="p-4 rounded-2xl bg-[#131f24] border-2 border-[#202f36] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#1cb0f6]" />
                <span>Your Phrasing</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-200 leading-relaxed italic">
                "{data.userPhrasing}"
              </p>
            </div>

            {/* Right: The Gold-Standard BLUF Benchmark */}
            <div className="p-4 rounded-2xl bg-[#131f24] border-2 border-[#58cc02]/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-[#58cc02]">
                <Award className="w-3.5 h-3.5" />
                <span>Gold-Standard BLUF Benchmark</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                "{data.goldStandardBenchmark}"
              </p>
            </div>
          </div>
        </div>

        {/* 4. GIANT CHUNKY 3D GREEN CONTINUE BUTTON */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onContinue();
          }}
          className="btn-3d-green w-full py-4 text-base font-black tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>CONTINUE</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
