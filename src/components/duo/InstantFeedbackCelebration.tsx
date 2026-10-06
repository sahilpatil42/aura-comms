'use client';

import React, { useEffect } from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';
import { CheckCircle2, AlertTriangle, Sparkles, Award, ArrowRight, RotateCcw, HeartCrack } from 'lucide-react';

export interface FeedbackData {
  userPhrasing: string;
  goldStandardBenchmark: string;
  scores: {
    marketingLogic: number; // e.g. 94
    terminology: number;    // e.g. 92
    grammar: number;        // e.g. 96
    executivePresence: number; // e.g. 95
  };
  overallScore?: number;
  isPass: boolean;
  clientReaction?: string;
  sentiment?: 'reassured' | 'skeptical' | 'confrontational';
  feedbackNotes?: string;
  strengths?: string[];
  weaknesses?: string[];
}

interface InstantFeedbackCelebrationProps {
  data: FeedbackData;
  onContinue: () => void;
  onTryAgain?: () => void;
}

export const InstantFeedbackCelebration: React.FC<InstantFeedbackCelebrationProps> = ({
  data,
  onContinue,
  onTryAgain,
}) => {
  const { completeNode, activeNodeId, spendHeart, hearts } = useGamificationStore();

  const isPass = data.isPass;

  // Sound effects & state changes on mount
  useEffect(() => {
    if (isPass) {
      soundEffects.playSuccess();
      setTimeout(() => soundEffects.playXpFanfare(), 300);
      completeNode(activeNodeId, 3);
    } else {
      soundEffects.playCorrection();
      spendHeart();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#040817]/80 backdrop-blur-md select-none animate-in fade-in duration-200">
      <div 
        className={`w-full max-w-2xl rounded-t-3xl sm:rounded-3xl sm:mb-8 border-t-2 sm:border-2 shadow-[0_20px_70px_rgba(2,6,23,0.9)] p-4 sm:p-7 space-y-4 sm:space-y-5 max-h-[92dvh] overflow-y-auto pb-safe animate-in slide-in-from-bottom-8 duration-300 ring-1 ring-white/10 ${
          isPass
            ? 'bg-[#09132c]/95 backdrop-blur-2xl border-sky-400/40'
            : 'bg-[#150a1e]/95 backdrop-blur-2xl border-rose-500/50'
        }`}
      >

        {/* 1. HEADER BANNER */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-b-4 flex-shrink-0 ${
                isPass
                  ? 'bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 border-blue-800 text-white shadow-blue-500/20'
                  : 'bg-gradient-to-tr from-rose-600 to-red-600 border-rose-800 text-white shadow-rose-500/20'
              }`}
            >
              {isPass ? '🎉' : '❌'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span
                  className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isPass
                      ? 'bg-sky-500/20 text-sky-300 border-sky-400/30'
                      : 'bg-rose-500/20 text-rose-300 border-rose-400/30'
                  }`}
                >
                  {isPass ? 'Executive Mastery' : 'Needs Remediation'}
                </span>
                {isPass ? (
                  <span className="text-[10px] sm:text-xs font-black text-amber-300 flex items-center gap-1">
                    ⚡ +15 XP
                  </span>
                ) : (
                  <span className="text-[10px] sm:text-xs font-black text-rose-400 flex items-center gap-1 animate-pulse">
                    💔 -1 Heart (Remaining: {Math.max(0, hearts - 1)})
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white leading-tight mt-0.5 break-words drop-shadow-sm">
                {isPass 
                  ? 'Great Job!' 
                  : (data.sentiment === 'confrontational' ? 'Client Confronted You!' : 'Client Unconvinced!')}
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end flex-shrink-0">
            <span className="text-xs font-bold text-blue-200/70">Client Status</span>
            <span 
              className={`text-xs font-black px-2.5 py-1 rounded-xl mt-1 border ${
                isPass
                  ? 'text-sky-300 bg-sky-500/15 border-sky-400/25'
                  : 'text-rose-300 bg-rose-500/15 border-rose-400/25'
              }`}
            >
              {isPass 
                ? '✓ Client Reassured' 
                : (data.sentiment === 'confrontational' ? '❌ Client Panicked' : '⚠️ Client Skeptical')}
            </span>
          </div>
        </div>

        {/* 2. CLIENT REACTION QUOTE BOX */}
        {data.clientReaction && (
          <div 
            className={`p-3.5 sm:p-4 rounded-2xl backdrop-blur-md border space-y-1.5 ${
              isPass 
                ? 'bg-[#0c1a38]/70 border-sky-400/25 text-sky-100' 
                : 'bg-[#240c1c]/80 border-rose-500/35 text-rose-100'
            }`}
          >
            <div className={`flex items-center gap-1.5 text-xs font-black uppercase tracking-wider ${
              isPass ? 'text-sky-300' : 'text-rose-300'
            }`}>
              {isPass ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />}
              <span>Client Response in Call</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold italic leading-relaxed">
              "{data.clientReaction}"
            </p>
          </div>
        )}

        {/* 3. MULTI-VECTOR SCORE BREAKDOWN PILLS */}
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
              <span className={`text-base sm:text-lg font-black mt-0.5 ${
                data.scores.marketingLogic >= 70 ? 'text-sky-400' : 'text-rose-400'
              }`}>
                {data.scores.marketingLogic}%
              </span>
            </div>

            {/* Terminology */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Terminology
              </span>
              <span className={`text-base sm:text-lg font-black mt-0.5 ${
                data.scores.terminology >= 70 ? 'text-cyan-300' : 'text-rose-400'
              }`}>
                {data.scores.terminology}%
              </span>
            </div>

            {/* Grammar */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Grammar & Clarity
              </span>
              <span className={`text-base sm:text-lg font-black mt-0.5 ${
                data.scores.grammar >= 70 ? 'text-indigo-300' : 'text-amber-400'
              }`}>
                {data.scores.grammar}%
              </span>
            </div>

            {/* Executive Presence */}
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex flex-col min-w-0">
              <span className="text-[10px] font-black uppercase text-blue-200/70 truncate">
                Exec Presence
              </span>
              <span className={`text-base sm:text-lg font-black mt-0.5 ${
                data.scores.executivePresence >= 70 ? 'text-amber-300' : 'text-rose-400'
              }`}>
                {data.scores.executivePresence}%
              </span>
            </div>
          </div>
        </div>

        {/* 4. DIRECTOR COACHING NOTES */}
        {data.feedbackNotes && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0b1633]/75 backdrop-blur-md border border-blue-400/20 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Agency Director Coaching</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
              {data.feedbackNotes}
            </p>
            {data.weaknesses && data.weaknesses.length > 0 && (
              <div className="pt-2 border-t border-white/10 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-300">
                  Critical Missing Levers:
                </span>
                <ul className="text-xs text-rose-200/90 space-y-0.5 list-disc list-inside">
                  {data.weaknesses.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 5. SIDE-BY-SIDE PHRASING COMPARISON BOX */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-300/70">
            Phrasing Comparison
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Left: Your Phrasing */}
            <div 
              className={`p-3.5 sm:p-4 rounded-2xl backdrop-blur-md border space-y-1.5 min-w-0 ${
                isPass 
                  ? 'bg-[#0c1836]/70 border-blue-400/20' 
                  : 'bg-[#220d1a]/70 border-rose-400/30'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-black text-blue-200/80">
                <span 
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    isPass ? 'bg-sky-400' : 'bg-rose-400'
                  }`} 
                />
                <span>Your Spoken Answer</span>
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

        {/* 6. TACTILE ACTION BUTTONS */}
        {isPass ? (
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
        ) : (
          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            {onTryAgain && (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onTryAgain();
                }}
                className="btn-3d-red flex-1 py-4 text-sm sm:text-base font-black tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-5 h-5 stroke-[2.5]" />
                <span>TRY AGAIN</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                onContinue();
              }}
              className="btn-3d-neutral py-3.5 px-6 text-xs sm:text-sm font-bold tracking-wider rounded-2xl border border-white/15 text-slate-300 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>CONTINUE TO PATH</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
