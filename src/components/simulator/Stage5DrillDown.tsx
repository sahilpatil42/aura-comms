'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { SpeechEngine } from '@/lib/audio';
import { EvaluationPillarKey } from '@/types/scenario';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { 
  Zap, 
  Clock, 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Loader2, 
  ShieldAlert,
  Award
} from 'lucide-react';

export const Stage5DrillDown: React.FC = () => {
  const { 
    evaluation, 
    activeScenario, 
    selectScenario, 
    setStage, 
    resetSession,
    drillSession,
    setDrillSession
  } = useSessionStore();

  // Find weakest pillar from evaluation
  const weakestPillarKey: EvaluationPillarKey = React.useMemo(() => {
    if (!evaluation) return 'marketingLogic';
    const entries = Object.entries(evaluation.pillars) as [EvaluationPillarKey, { score: number }][];
    entries.sort((a, b) => a[1].score - b[1].score);
    return entries[0][0];
  }, [evaluation]);

  // Find matching drill from scenario or default
  const activeDrill = React.useMemo(() => {
    const found = activeScenario.sampleDrillDowns.find(d => d.weakestPillar === weakestPillarKey);
    return found || activeScenario.sampleDrillDowns[0] || {
      weakestPillar: weakestPillarKey,
      prompt: `The client demands: 'Prove to me with data why your team deserves to manage our paid channels after this week's drop.' Deliver a 45-second high-impact response.`,
      timeLimitSeconds: 60,
      idealPoints: [
        'Acknowledge financial gravity without defensiveness',
        'Highlight proactive stop-loss execution and attribution containment',
        'Reiterate 72-hour milestone benchmarks'
      ]
    };
  }, [activeScenario, weakestPillarKey]);

  const [timeLeft, setTimeLeft] = useState(activeDrill.timeLimitSeconds);
  const [timerRunning, setTimerRunning] = useState(true);
  const [drillInput, setDrillInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!timerRunning || timeLeft <= 0 || drillSession?.completed) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning, timeLeft, drillSession]);

  const [showEmptyWarning, setShowEmptyWarning] = useState(false);
  const micHandleRef = useRef<{ stop: () => void } | null>(null);

  const toggleMic = () => {
    if (isListening) {
      SpeechEngine.stopSpeaking();
      if (micHandleRef.current) {
        micHandleRef.current.stop();
        micHandleRef.current = null;
      }
      setIsListening(false);
    } else {
      setIsListening(true);
      setShowEmptyWarning(false);
      const handle = SpeechEngine.startListening(
        (transcript) => {
          setDrillInput(transcript);
          setShowEmptyWarning(false);
        },
        (err) => {
          console.warn('Drill STT notice:', err);
          if (err.includes('denied') || err.includes('No microphone')) {
            setIsListening(false);
          }
        },
        () => setIsListening(false)
      );
      micHandleRef.current = handle;
    }
  };

  const handleDrillSubmit = async () => {
    if (!drillInput.trim()) {
      setShowEmptyWarning(true);
      return;
    }
    if (isSubmitting) return;

    setShowEmptyWarning(false);
    if (isListening) {
      SpeechEngine.stopSpeaking();
      if (micHandleRef.current) {
        micHandleRef.current.stop();
        micHandleRef.current = null;
      }
      setIsListening(false);
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/roleplay/drill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: activeScenario.id,
          pillar: weakestPillarKey,
          prompt: activeDrill.prompt,
          userResponse: drillInput.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setDrillSession({
          pillar: weakestPillarKey,
          prompt: activeDrill.prompt,
          userResponse: drillInput.trim(),
          aiFeedback: data.aiFeedback,
          score: data.score,
          completed: true,
        });
      }
    } catch (e) {
      console.error('Failed to submit drill:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const pillarNames: Record<EvaluationPillarKey, string> = {
    marketingLogic: 'Marketing Logic & Root Cause Analysis',
    terminologyAccuracy: 'Industry Terminology Precision',
    grammarRegister: 'Grammar & Professional Register',
    executivePresence: 'Executive Presence & Framing',
  };

  const nextScenario = CRISIS_SCENARIOS.find(s => s.id !== activeScenario.id) || CRISIS_SCENARIOS[0];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="card-glass rounded-2xl p-6 border border-white/10 relative overflow-hidden bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Stage 5: Adaptive Remediation Drill
              </span>
              <span className="text-xs text-rose-400 font-semibold flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                Targeting Weakest Pillar
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              {pillarNames[weakestPillarKey]}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Rapid-fire micro-drills sharpen your reflex memory so you never stumble on high-stakes client confrontations.
            </p>
          </div>

          {/* Countdown Clock */}
          {!drillSession?.completed && (
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-white/10 flex-shrink-0">
              <Clock className={`w-5 h-5 ${timeLeft <= 15 ? 'text-rose-500 animate-ping' : 'text-amber-400'}`} />
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Time Remaining</span>
                <span className={`text-xl font-black ${timeLeft <= 15 ? 'text-rose-400' : 'text-white'}`}>
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Drill Prompt Card */}
      <div className="card-glass rounded-2xl p-6 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>The Scenario Pressure Drill</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 text-slate-100 text-sm sm:text-base font-semibold leading-relaxed">
          "{activeDrill.prompt}"
        </div>

        <div className="space-y-1.5 pt-2 border-t border-white/5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Director Benchmark Criteria:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {activeDrill.idealPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300 bg-slate-900/60 p-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drill Input & Feedback */}
      {!drillSession?.completed ? (
        <div className="card-glass rounded-2xl p-5 border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Your Verbal or Written Response:
            </span>
            <button
              onClick={toggleMic}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                isListening
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse'
                  : 'bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/30 text-indigo-300'
              }`}
            >
              {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
              <span>{isListening ? 'Stop Speech' : 'Speak Response (Voice)'}</span>
            </button>
          </div>

          <textarea
            value={drillInput}
            onChange={(e) => setDrillInput(e.target.value)}
            rows={4}
            placeholder="Deliver your crisp executive response here..."
            className="w-full bg-slate-950/90 text-white placeholder-slate-500 text-xs sm:text-sm p-4 rounded-xl border border-white/10 focus:outline-none focus:border-amber-500 transition-colors"
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">
                {drillInput.trim().split(/\s+/).filter(Boolean).length} words
              </span>
              <button
                type="button"
                onClick={() => {
                  setDrillInput(activeDrill.idealPoints.join(' ') + ' We have locked telemetry metrics to benchmark.');
                  setShowEmptyWarning(false);
                }}
                className="text-[11px] text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
              >
                Use Benchmark Template
              </button>
            </div>

            <button
              onClick={handleDrillSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:scale-105"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
              ) : (
                <>
                  <span>Submit for Critique</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {showEmptyWarning && (
            <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center justify-between">
              <span>Please speak into the mic, type a response, or click "Use Benchmark Template" above before submitting.</span>
              <button onClick={() => setShowEmptyWarning(false)} className="underline ml-2">Dismiss</button>
            </div>
          )}
        </div>
      ) : (
        /* Completed Drill Scorecard */
        <div className="card-glass rounded-2xl p-6 border border-emerald-500/30 space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Micro-Drill Diagnostic Evaluation
              </h3>
            </div>
            <div className="flex items-baseline gap-1 text-emerald-400 font-black text-xl">
              <span>{drillSession.score}</span>
              <span className="text-xs text-slate-400 font-normal">/ 100</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <span className="font-bold text-slate-400 uppercase text-[10px]">Director Critique:</span>
            <p className="text-slate-200 text-sm leading-relaxed p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/20">
              {drillSession.aiFeedback}
            </p>
          </div>

          {/* Post Drill Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                setDrillSession(null);
                setDrillInput('');
                setTimeLeft(activeDrill.timeLimitSeconds);
                setTimerRunning(true);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry This Drill</span>
            </button>

            <button
              onClick={() => selectScenario(nextScenario)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 transition-all cursor-pointer"
            >
              <span>Next Crisis: {nextScenario.title.split(':')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
