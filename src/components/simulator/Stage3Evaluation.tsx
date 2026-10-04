'use client';

import React from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { EvaluationPillarKey } from '@/types/scenario';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  BrainCircuit, 
  Target, 
  FileText, 
  UserCheck, 
  RotateCcw,
  Zap
} from 'lucide-react';

export const Stage3Evaluation: React.FC = () => {
  const { evaluation, setStage, activeScenario, resetSession } = useSessionStore();

  if (!evaluation) {
    return (
      <div className="card-glass rounded-2xl p-8 text-center text-slate-400 space-y-4 max-w-md mx-auto my-12">
        <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
        <p className="text-sm">No evaluation found for this session yet.</p>
        <button
          onClick={() => setStage(2)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          Return to Roleplay
        </button>
      </div>
    );
  }

  const { overallScore, overallGrade, summaryFeedback, pillars, flaggedPhrases, turnBreakdown } = evaluation;

  const pillarCards: {
    key: EvaluationPillarKey;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    data: typeof pillars.marketingLogic;
  }[] = [
    {
      key: 'marketingLogic',
      title: 'Marketing Logic & Root Cause Analysis',
      subtitle: 'Technical attribution & real driver isolation vs. algorithm deflection',
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      data: pillars.marketingLogic,
    },
    {
      key: 'terminologyAccuracy',
      title: 'Industry Terminology & Metric Accuracy',
      subtitle: 'Rigorous application of CPM, CPL, ROAS, OCT, P95, and CAPI standards',
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      data: pillars.terminologyAccuracy,
    },
    {
      key: 'grammarRegister',
      title: 'Grammar, Syntax & Professional Register',
      subtitle: 'Elimination of filler tokens (um/like), tentative hedging, and cadence',
      icon: <FileText className="w-5 h-5 text-violet-400" />,
      data: pillars.grammarRegister,
    },
    {
      key: 'executivePresence',
      title: 'Executive Presence & Framing',
      subtitle: 'BLUF framework, proactive stop-loss leadership, and client composure',
      icon: <UserCheck className="w-5 h-5 text-amber-400" />,
      data: pillars.executivePresence,
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
    if (score >= 70) return 'text-indigo-400 border-indigo-500/40 bg-indigo-500/10';
    if (score >= 55) return 'text-amber-400 border-amber-500/40 bg-amber-500/10';
    return 'text-rose-400 border-rose-500/40 bg-rose-500/10';
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Executive Scorecard Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-white/10 p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Diagnostic Audit Complete
              </span>
              <span className="text-xs text-slate-400">
                Scenario: <strong className="text-white">{activeScenario.title.split(':')[0]}</strong>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Director-Level Evaluation Report
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {summaryFeedback}
            </p>
          </div>

          {/* Radial Score Gauge */}
          <div className="flex items-center gap-4 bg-slate-950/70 border border-white/10 rounded-2xl p-4 flex-shrink-0">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-4 border-indigo-500/30">
              <div className="text-center">
                <span className="text-2xl font-black text-white">{overallScore}</span>
                <span className="block text-[10px] text-slate-400 font-bold uppercase">/ 100</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Executive Rank
              </span>
              <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-emerald-400">
                {overallGrade}
              </span>
              <span className="block text-[11px] text-slate-400 mt-0.5">
                4-Pillar Weighted Score
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Diagnostic Pillars */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          The 4 Pillars of Agency Executive Communication
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillarCards.map((pillar) => (
            <div
              key={pillar.key}
              className="card-glass rounded-2xl p-5 border border-white/10 space-y-4 hover:border-indigo-500/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <div className={`px-2.5 py-1 rounded-xl border text-xs font-black flex items-center gap-1.5 ${getScoreColor(pillar.data.score)}`}>
                  <span>{pillar.data.score}</span>
                  <span className="text-[10px] opacity-80">/100</span>
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="space-y-2 text-xs pt-2 border-t border-white/5">
                {pillar.data.strengths.map((str, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </div>
                ))}
                {pillar.data.weaknesses.map((w, i) => (
                  <div key={i} className="flex items-start gap-2 text-rose-300">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </div>
                ))}
              </div>

              {/* Recommendation */}
              <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-indigo-200">
                <span className="font-bold uppercase tracking-wider text-[10px] text-indigo-400 block mb-0.5">
                  Advisor Recommendation:
                </span>
                {pillar.data.keyRecommendations[0]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flagged Phrases & Director Reframes */}
      {flaggedPhrases && flaggedPhrases.length > 0 && (
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Flagged Phrases & Agency Director Reframes
            </h3>
            <span className="text-xs text-slate-500">
              Transform weak verbal tendencies into executive presence
            </span>
          </div>

          <div className="space-y-3">
            {flaggedPhrases.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-white/5"
              >
                {/* User Said */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">What You Said:</span>
                  </div>
                  <p className="text-xs text-rose-300 italic">
                    "{item.originalText}"
                  </p>
                  <p className="text-[11px] text-slate-400">
                    <strong className="text-slate-300">Why it fails:</strong> {item.flagReason}
                  </p>
                </div>

                {/* Director Reframe */}
                <div className="space-y-1 md:border-l md:border-white/10 md:pl-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Director Reframe
                  </span>
                  <p className="text-xs text-emerald-200 font-medium">
                    "{item.improvedReframe}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Turn Breakdown */}
      {turnBreakdown && turnBreakdown.length > 0 && (
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Turn-by-Turn Executive Critique
          </h3>
          <div className="space-y-2.5">
            {turnBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1 max-w-xl">
                  <span className="font-bold text-indigo-400 uppercase text-[10px]">
                    Turn {item.turnNumber} Utterance:
                  </span>
                  <p className="text-slate-300 italic">"{item.userUtterance}"</p>
                </div>
                <div className="sm:text-right text-slate-400 text-[11px] max-w-xs sm:border-l sm:border-white/10 sm:pl-3">
                  <span className="font-semibold text-slate-300 block">Feedback:</span>
                  {item.critique}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Footer Bar */}
      <div className="card-glass rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={resetSession}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Retake Roleplay</span>
        </button>

        <button
          onClick={() => setStage(4)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Proceed to Stage 4: Gold-Standard Benchmark</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
