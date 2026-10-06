'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { UniversalMicEngine, NeuralTTS, SOOTHING_VOICE_LIST } from '@/lib/audio';
import { soundEffects } from '@/lib/soundEffects';
import { FeedbackData } from '@/components/duo/InstantFeedbackCelebration';
import { TurnEvaluation } from '@/types/scenario';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  Zap, 
  Keyboard, 
  Loader2, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  HelpCircle, 
  BarChart3, 
  Flame, 
  ShieldAlert, 
  MessageSquare,
  Radio,
  ArrowRight
} from 'lucide-react';

interface LocalTurn {
  id: string;
  speaker: 'client' | 'user';
  text: string;
  timestamp: number;
  sentiment?: 'confrontational' | 'skeptical' | 'reassured' | 'neutral';
  flaggedPhrases?: string[];
  evaluation?: TurnEvaluation;
}

interface VoiceRoleplayExerciseProps {
  onCompleteExercise: (feedbackData: FeedbackData) => void;
  onExit: () => void;
}

export const VoiceRoleplayExercise: React.FC<VoiceRoleplayExerciseProps> = ({
  onCompleteExercise,
  onExit,
}) => {
  const { activeScenario } = useSessionStore();
  const { hearts } = useGamificationStore();

  const clientName = activeScenario.stakeholder?.name || 'Alex Rivera';
  const clientFirstName = clientName.split(' ')[0];
  const clientRole = activeScenario.stakeholder?.title || 'Head of Growth';
  const clientOrg = activeScenario.stakeholder?.organization || 'Lumina D2C';
  const primaryKPI = activeScenario.brokenKPIs?.[0]?.metric || 'Cost Per Lead (CPL)';
  const currentObjection = activeScenario.initialClientDialogue || 
    "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!";

  // Multi-Turn Dialogue State
  const [turns, setTurns] = useState<LocalTurn[]>([
    {
      id: `turn-init-${Date.now()}`,
      speaker: 'client',
      text: currentObjection,
      timestamp: Date.now(),
      sentiment: activeScenario.stakeholder?.temperament === 'impatient-skeptic' ? 'confrontational' : 'skeptical',
    }
  ]);

  // Input states
  const [textInput, setTextInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [micVolume, setMicVolume] = useState(0);
  const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClientSpeaking, setIsClientSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(() => NeuralTTS.getPreferredVoice());
  const [showVoicePicker, setShowVoicePicker] = useState(false);
  const [previewVoiceId, setPreviewVoiceId] = useState<string | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [micNotice, setMicNotice] = useState<string | null>(null);
  const [showKpiDrawer, setShowKpiDrawer] = useState(false);
  const [showHintModal, setShowHintModal] = useState(false);
  const [latestEvaluation, setLatestEvaluation] = useState<TurnEvaluation | null>(null);
  const [hasReassuredClient, setHasReassuredClient] = useState(false);
  const [activeTab, setActiveTab] = useState<'orb' | 'chat'>('orb');

  // References
  const micSessionRef = useRef<{ stop: () => Promise<any> } | null>(null);
  const universalMicRef = useRef<UniversalMicEngine | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll chat when turns update
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [turns, isSubmitting]);

  // Initial client speech when entering scenario with NeuralTTS
  useEffect(() => {
    let isMounted = true;
    setIsClientSpeaking(true);

    NeuralTTS.speak(currentObjection, {
      voice: selectedVoice,
      onStart: () => {
        if (isMounted) setIsClientSpeaking(true);
      },
      onEnd: () => {
        if (isMounted) setIsClientSpeaking(false);
      },
      onError: () => {
        if (isMounted) setIsClientSpeaking(false);
      },
    }).catch(() => {
      if (isMounted) setIsClientSpeaking(false);
    });

    return () => {
      isMounted = false;
      NeuralTTS.stop();
      if (micSessionRef.current) {
        micSessionRef.current.stop().catch(() => {});
      }
    };
  }, [currentObjection]);

  // Get current stakeholder mood from latest client turn
  const lastClientTurn = [...turns].reverse().find(t => t.speaker === 'client') || turns[0];
  const currentMood = lastClientTurn.sentiment || 'confrontational';

  // Toggle Voice Recording
  const toggleRecording = async () => {
    if (isRecording) {
      // Manual stop
      setIsRecording(false);
      setMicVolume(0);
      if (micSessionRef.current) {
        try {
          const res = await micSessionRef.current.stop();
          if (res?.transcript && res.transcript.trim()) {
            setTextInput(res.transcript.trim());
            setMicNotice(null);
          }
        } catch (_) {}
        micSessionRef.current = null;
      }
      soundEffects.playClick();
    } else {
      // Start recording
      soundEffects.playClick();
      NeuralTTS.stop();
      setIsClientSpeaking(false);
      setIsRecording(true);
      setMicVolume(15);
      setMicNotice('🎙️ Listening... Speak your thoughts to Alex!');

      const engine = new UniversalMicEngine();
      universalMicRef.current = engine;

      try {
        const session = await engine.start({
          initialText: textInput,
          autoStopDelayMs: 3000,
          onVolumeChange: (vol) => {
            setMicVolume(vol);
          },
          onTranscriptUpdate: (streamedText) => {
            setTextInput(streamedText);
            setMicNotice('✨ Listening... Transcribing live');
          },
          onAutoStop: (finalText) => {
            setIsRecording(false);
            setMicVolume(0);
            micSessionRef.current = null;
            if (finalText && finalText.trim()) {
              setTextInput(finalText.trim());
              setMicNotice(null);
              // Auto-submit after voice finish for a fluid talk-back experience
              handleSendTurn(finalText.trim());
            } else {
              setMicNotice('No speech detected. Tap mic again or switch to Keyboard.');
            }
          },
          onError: (err) => {
            console.warn('Voice error:', err);
            setIsRecording(false);
            setMicVolume(0);
            setMicNotice(err);
          },
        });

        micSessionRef.current = session;
      } catch (e: any) {
        setIsRecording(false);
        setMicVolume(0);
        setMicNotice(e?.message || 'Could not access microphone.');
      }
    }
  };

  // Deliver user turn & receive talk-back from AI client
  const handleSendTurn = async (messageOverride?: string) => {
    const finalAnswer = (messageOverride || textInput).trim();
    if (!finalAnswer || isSubmitting) return;

    soundEffects.playClick();
    if (isRecording && micSessionRef.current) {
      await micSessionRef.current.stop().catch(() => {});
      setIsRecording(false);
      setMicVolume(0);
    }

    // Add user turn immediately to conversation stream
    const userTurn: LocalTurn = {
      id: `turn-user-${Date.now()}`,
      speaker: 'user',
      text: finalAnswer,
      timestamp: Date.now(),
    };

    const updatedTurns = [...turns, userTurn];
    setTurns(updatedTurns);
    setTextInput('');
    setMicNotice(null);
    setIsSubmitting(true);
    NeuralTTS.stop();
    setIsClientSpeaking(false);

    try {
      const userApiKey = typeof window !== 'undefined' ? localStorage.getItem('AURA_GEMINI_KEY') || undefined : undefined;
      const userTurnCount = updatedTurns.filter(t => t.speaker === 'user').length;

      const res = await fetch('/api/roleplay/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: activeScenario.id,
          userMessage: finalAnswer,
          history: updatedTurns.map((d) => ({
            id: d.id,
            speaker: d.speaker,
            text: d.text,
            timestamp: d.timestamp,
            sentiment: d.sentiment,
          })),
          currentTurn: userTurnCount,
          apiKey: userApiKey,
        }),
      });

      const data = await res.json();
      const evaluation: TurnEvaluation | undefined = data?.evaluation;
      const clientText = data?.turn?.text || evaluation?.clientReaction || 
        `${clientFirstName}: "I need a real technical explanation of what happened to our campaigns."`;
      const sentiment = data?.turn?.sentiment || evaluation?.sentiment || 'skeptical';

      const clientTurn: LocalTurn = {
        id: data?.turn?.id || `turn-client-${Date.now()}`,
        speaker: 'client',
        text: clientText,
        timestamp: Date.now(),
        sentiment: sentiment,
        flaggedPhrases: data?.turn?.flaggedPhrases || evaluation?.flaggedPhrases,
        evaluation: evaluation,
      };

      setTurns((prev) => [...prev, clientTurn]);
      if (evaluation) {
        setLatestEvaluation(evaluation);
        if (evaluation.isPass) {
          setHasReassuredClient(true);
          soundEffects.playSuccess();
        } else if (sentiment === 'confrontational') {
          soundEffects.playCorrection();
        }
      }

      // Automatically speak the client's talk-back response out loud!
      setIsClientSpeaking(true);
      NeuralTTS.speak(clientText, {
        voice: selectedVoice,
        onStart: () => setIsClientSpeaking(true),
        onEnd: () => setIsClientSpeaking(false),
        onError: () => setIsClientSpeaking(false),
      });

      // Save turn to Supabase
      try {
        const { saveRoleplaySession } = await import('@/lib/supabase');
        saveRoleplaySession({
          scenarioId: activeScenario.id,
          userPhrasing: finalAnswer,
          goldStandardBenchmark: activeScenario.modelAnswerBLUF?.bluf,
          scores: evaluation?.scores || { marketingLogic: 50, terminology: 50, grammar: 60, executivePresence: 50 },
          clientReaction: clientText,
          sentiment: sentiment,
        });
      } catch (_) {}

    } catch (err) {
      console.error('Talk-back chat error:', err);
      // Offline fallback reply
      const fallbackReply: LocalTurn = {
        id: `turn-client-${Date.now()}`,
        speaker: 'client',
        text: `${clientFirstName}: "Look, our metrics are hurting. I need you to lead with BLUF and give me our 48-hour containment plan so I know you have this handled."`,
        timestamp: Date.now(),
        sentiment: 'skeptical',
      };
      setTurns((prev) => [...prev, fallbackReply]);
      setIsClientSpeaking(true);
      NeuralTTS.speak(fallbackReply.text, {
        voice: selectedVoice,
        onEnd: () => setIsClientSpeaking(false),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // User triggers "I don't know / Explain Concept"
  const handleAskForHelp = () => {
    handleSendTurn(`I don't know what happened, can you explain what ${primaryKPI} is and what caused this crisis?`);
  };

  // User concludes call and receives full grading & mastery XP
  const handleConcludeCall = () => {
    NeuralTTS.stop();
    soundEffects.playClick();

    const lastUserTurn = [...turns].reverse().find(t => t.speaker === 'user');
    const goldBenchmark = activeScenario.modelAnswerBLUF?.bluf || 
      "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.";

    // Determine overall pass/fail status
    const isPass = hasReassuredClient || (latestEvaluation?.isPass ?? false);
    const scores = latestEvaluation?.scores || {
      marketingLogic: isPass ? 88 : 25,
      terminology: isPass ? 85 : 20,
      grammar: isPass ? 92 : 55,
      executivePresence: isPass ? 90 : 25,
    };

    onCompleteExercise({
      userPhrasing: lastUserTurn?.text || "Conversation completed across multiple turns.",
      goldStandardBenchmark: goldBenchmark,
      scores: scores,
      overallScore: latestEvaluation?.overallScore ?? (isPass ? 88 : 32),
      isPass: isPass,
      clientReaction: lastClientTurn.text,
      sentiment: latestEvaluation?.sentiment || (isPass ? 'reassured' : 'confrontational'),
      feedbackNotes: latestEvaluation?.feedbackNotes || (isPass 
        ? "Excellent multi-turn performance! You took ownership and defended campaigns effectively."
        : "The client remained skeptical or confrontational. Lead with BLUF and state immediate containment actions."),
      strengths: latestEvaluation?.strengths,
      weaknesses: latestEvaluation?.weaknesses,
    });
  };

  const userTurnCount = turns.filter(t => t.speaker === 'user').length;

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto min-h-0 flex-1 px-2 sm:px-4 pb-safe pb-8 select-none">
      
      {/* 1. TALK-BACK CALL HEADER */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-3 pt-1 sm:pt-2 pb-2 sm:pb-3 flex-shrink-0 border-b border-white/10">
        {/* Exit Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            setShowExitConfirm(true);
          }}
          className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex-shrink-0"
          title="Exit Talk-Back Call"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* Live Call Status Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-400/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-sky-300 truncate">
            Talk-Back Agent Live
          </span>
          <span className="text-[10px] text-blue-300/70 font-bold hidden sm:inline">
            · Turn {userTurnCount + 1}
          </span>
        </div>

        {/* Audio Voice Selector & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Voice Selector */}
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setShowVoicePicker(true);
            }}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-xl bg-[#0c1938]/70 hover:bg-[#12234e] border border-blue-400/20 text-xs font-bold text-blue-200 hover:text-white cursor-pointer transition-all"
            title="Change AI Voice"
          >
            <Radio className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-[10px] sm:text-xs hidden sm:inline">{SOOTHING_VOICE_LIST.find(v => v.id === selectedVoice)?.name || 'Jenny'}</span>
          </button>

          {/* Hearts counter */}
          <div className="flex items-center gap-1 text-xs sm:text-sm font-black text-rose-400 flex-shrink-0 bg-rose-500/10 px-2 py-0.5 rounded-xl border border-rose-500/20">
            <span>❤️</span>
            <span>{hearts}</span>
          </div>
        </div>
      </div>

      {/* 2. STAKEHOLDER PERSONA CARD */}
      <div className="pt-2 sm:pt-3 pb-1 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-[#1d4ed8] via-[#2563eb] to-[#38bdf8] border-2 border-white/20 flex items-center justify-center text-xl sm:text-2xl shadow-lg relative flex-shrink-0">
            <span>👨‍💼</span>
            {isClientSpeaking && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400 border border-[#070e24]"></span>
              </span>
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm sm:text-base font-black text-white truncate">
                {clientName}
              </h2>
              <span className="text-[10px] text-blue-200/60 font-semibold truncate hidden sm:inline">
                ({clientRole})
              </span>
            </div>
            <p className="text-[11px] text-blue-200/80 font-medium truncate">
              {clientOrg}
            </p>
          </div>
        </div>

        {/* Dynamic Client Mood Pill */}
        <div className="flex-shrink-0">
          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-xl border flex items-center gap-1 shadow-xs ${
            currentMood === 'reassured'
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
              : currentMood === 'skeptical'
              ? 'bg-amber-500/20 text-amber-300 border-amber-400/30'
              : 'bg-rose-500/20 text-rose-300 border-rose-400/30'
          }`}>
            {currentMood === 'reassured' && '✓ Reassured'}
            {currentMood === 'skeptical' && '⚠️ Skeptical'}
            {currentMood === 'confrontational' && '🔥 Confrontational'}
            {currentMood === 'neutral' && '💡 Explaining'}
          </span>
        </div>
      </div>

      {/* Mode Switcher Tabs (Voice Orb vs Chat Transcript) */}
      <div className="flex items-center justify-center gap-2 py-1.5">
        <button
          type="button"
          onClick={() => setActiveTab('orb')}
          className={`px-3 py-1 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'orb'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Radio className="w-3.5 h-3.5" />
          <span>Live Voice Orb</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('chat')}
          className={`px-3 py-1 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'chat'
              ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30 shadow-xs'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Call Transcript ({turns.length})</span>
        </button>
      </div>

      {/* 3. CENTRAL TALK-BACK STAGE */}
      <div className="flex-1 min-h-0 flex flex-col justify-between py-1 sm:py-2">

        {/* TAB 1: THE GLOWING VOICE ORB STAGE (ChatGPT / Gemini Live style) */}
        {activeTab === 'orb' && (
          <div className="flex-1 flex flex-col items-center justify-center relative py-2 sm:py-4 animate-in fade-in">
            {/* Ambient Sound Ripple Rings */}
            <div className="relative flex items-center justify-center">
              {/* Outer Glow Circles */}
              <div 
                className={`w-36 h-36 sm:w-48 sm:h-48 rounded-full absolute transition-all duration-300 pointer-events-none ${
                  isClientSpeaking
                    ? 'bg-sky-500/20 animate-ping'
                    : isRecording
                    ? 'bg-emerald-500/25 animate-pulse'
                    : isSubmitting
                    ? 'bg-indigo-500/20 animate-spin'
                    : 'bg-blue-600/10'
                }`}
                style={{
                  transform: isRecording ? `scale(${1 + Math.min(micVolume, 100) / 140})` : undefined,
                }}
              />
              <div 
                className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full absolute transition-all duration-200 pointer-events-none ${
                  isClientSpeaking
                    ? 'bg-sky-400/30 animate-pulse'
                    : isRecording
                    ? 'bg-emerald-400/30'
                    : 'bg-blue-500/15'
                }`}
                style={{
                  transform: isRecording ? `scale(${1 + Math.min(micVolume, 100) / 180})` : undefined,
                }}
              />

              {/* Central Glowing Orb Core */}
              <button
                type="button"
                onClick={toggleRecording}
                className={`relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer shadow-[0_15px_50px_rgba(37,99,235,0.45)] border-2 active:scale-95 ${
                  isRecording
                    ? 'bg-gradient-to-tr from-emerald-600 to-teal-400 border-emerald-300 text-white animate-pulse shadow-emerald-500/30'
                    : isClientSpeaking
                    ? 'bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 border-sky-300 text-white shadow-sky-500/40 animate-voice-pulse'
                    : isSubmitting
                    ? 'bg-gradient-to-tr from-indigo-600 to-purple-500 border-indigo-400 text-white animate-pulse'
                    : 'bg-gradient-to-tr from-[#1d4ed8] via-[#2563eb] to-[#38bdf8] border-white/30 text-white hover:brightness-110'
                }`}
                title={isRecording ? 'Click to finish speaking' : 'Click to talk back to Alex'}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" />
                    <span className="text-[9px] font-black uppercase tracking-wider mt-1">Listening</span>
                  </>
                ) : isClientSpeaking ? (
                  <>
                    <Volume2 className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-wider mt-1">Speaking</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 animate-spin" />
                    <span className="text-[9px] font-black uppercase tracking-wider mt-1">Thinking</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-8 h-8 sm:w-10 sm:h-10" />
                    <span className="text-[9px] font-black uppercase tracking-wider mt-1">Tap Mic</span>
                  </>
                )}
              </button>
            </div>

            {/* Orb Status Subtitle */}
            <div className="mt-4 sm:mt-5 text-center max-w-md px-3 space-y-1">
              <span className="text-xs sm:text-sm font-black text-white tracking-wide block">
                {isRecording
                  ? 'Listening to you... (Speak or pause to send)'
                  : isClientSpeaking
                  ? `${clientFirstName} is talking back to you...`
                  : isSubmitting
                  ? `${clientFirstName} is analyzing your response...`
                  : 'Tap the mic to talk back to Alex'}
              </span>

              {/* Latest Spoken Snippet in Orb View */}
              <p className="text-xs text-blue-200/80 font-medium italic line-clamp-2 max-w-sm mx-auto">
                "{isRecording ? (textInput || 'Listening...') : lastClientTurn.text}"
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: LIVE CALL TRANSCRIPT (Chronological Back-and-Forth Stream) */}
        {activeTab === 'chat' && (
          <div 
            ref={chatScrollRef}
            className="flex-1 overflow-y-auto max-h-[36dvh] sm:max-h-[44dvh] p-2 sm:p-3 rounded-2xl bg-[#08122c]/80 backdrop-blur-xl border border-blue-400/20 space-y-3 shadow-inner animate-in fade-in"
          >
            {turns.map((turn, idx) => {
              const isClient = turn.speaker === 'client';
              return (
                <div 
                  key={turn.id || idx}
                  className={`flex flex-col gap-1 ${isClient ? 'items-start' : 'items-end'}`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-300/70 px-1">
                    <span>{isClient ? `👨‍💼 ${clientFirstName}` : '👤 You'}</span>
                    {isClient && turn.sentiment && (
                      <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded border ${
                        turn.sentiment === 'reassured'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                          : turn.sentiment === 'confrontational'
                          ? 'bg-rose-500/20 text-rose-300 border-rose-400/30'
                          : 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                      }`}>
                        {turn.sentiment}
                      </span>
                    )}
                  </div>

                  <div 
                    className={`p-3 rounded-2xl max-w-[88%] text-xs sm:text-sm font-semibold leading-relaxed shadow-md ${
                      isClient
                        ? 'bg-[#0f1f44]/90 border border-blue-400/25 text-slate-100 rounded-tl-sm'
                        : 'bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-tr-sm shadow-blue-500/10'
                    }`}
                  >
                    <p className="break-words">{turn.text}</p>

                    {/* Audio Replay Button on Client Turns */}
                    {isClient && (
                      <div className="mt-1.5 pt-1.5 border-t border-white/10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            NeuralTTS.stop();
                            setIsClientSpeaking(true);
                            NeuralTTS.speak(turn.text, {
                              voice: selectedVoice,
                              onEnd: () => setIsClientSpeaking(false),
                            });
                          }}
                          className="text-[10px] font-bold text-sky-300 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Re-play voice</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isSubmitting && (
              <div className="flex items-center gap-2 p-2 text-xs font-bold text-sky-300 animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{clientFirstName} is formulating a response...</span>
              </div>
            )}
          </div>
        )}

        {/* 4. QUICK CONVERSATION ASSISTS (HINTS, EXPLAIN CONCEPT, MODEL BLUF) */}
        <div className="py-2 space-y-2">
          {/* Assist Action Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {/* "I don't know / Explain Concept" button */}
            <button
              type="button"
              onClick={handleAskForHelp}
              disabled={isSubmitting}
              className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-300 text-[11px] font-black flex items-center gap-1 whitespace-nowrap cursor-pointer transition-all flex-shrink-0"
              title="Alex will break down the metric definitions and explain the problem"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>I don't know (Explain)</span>
            </button>

            {/* "Director Coaching Hint" */}
            <button
              type="button"
              onClick={() => setShowHintModal(true)}
              className="px-2.5 py-1.5 rounded-xl bg-blue-900/30 hover:bg-blue-900/50 border border-blue-400/25 text-blue-200 text-[11px] font-black flex items-center gap-1 whitespace-nowrap cursor-pointer transition-all flex-shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Director Hint</span>
            </button>

            {/* "Use Recommended BLUF" */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                const model = activeScenario.modelAnswerBLUF?.bluf || 
                  "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.";
                setTextInput(model);
                setInputMode('text');
              }}
              className="px-2.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 text-[11px] font-black flex items-center gap-1 whitespace-nowrap cursor-pointer transition-all flex-shrink-0"
            >
              <Zap className="w-3.5 h-3.5 fill-emerald-300" />
              <span>Insert BLUF</span>
            </button>

            {/* "Inspect Broken KPIs" */}
            <button
              type="button"
              onClick={() => setShowKpiDrawer(!showKpiDrawer)}
              className="px-2.5 py-1.5 rounded-xl bg-[#0c1836]/70 hover:bg-[#12234e] border border-blue-400/20 text-slate-200 text-[11px] font-bold flex items-center gap-1 whitespace-nowrap cursor-pointer transition-all flex-shrink-0"
            >
              <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
              <span>View KPIs</span>
            </button>
          </div>

          {/* Broken KPIs Mini Drawer */}
          {showKpiDrawer && (
            <div className="p-3 rounded-2xl bg-[#0c1a3a]/90 border border-blue-400/30 space-y-1.5 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-black text-blue-200">
                <span>Account Metric Anomaly</span>
                <button 
                  type="button"
                  onClick={() => setShowKpiDrawer(false)}
                  className="text-slate-400 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {activeScenario.brokenKPIs?.map((kpi, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-[#08122c] border border-white/10">
                    <span className="text-[10px] text-blue-300/80 block truncate font-bold">{kpi.metric}</span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-sm font-black text-rose-400">{kpi.currentValue}</span>
                      <span className="text-[10px] text-slate-400 line-through">{kpi.previousValue}</span>
                      <span className="text-[10px] font-black text-rose-300">({kpi.deltaPercent})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Mic Notice / Transcribing Status */}
          {micNotice && (
            <div className="px-3 py-1.5 rounded-xl bg-blue-950/70 border border-sky-400/30 text-sky-200 text-xs font-bold flex items-center justify-between animate-in fade-in">
              <span className="truncate">{micNotice}</span>
              <button 
                type="button" 
                onClick={() => setMicNotice(null)} 
                className="text-slate-400 hover:text-white text-xs ml-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          {/* User Input Controls (Voice vs Text Mode) */}
          <div className="space-y-2">
            {inputMode === 'text' ? (
              /* Text Input Area */
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendTurn();
                    }
                  }}
                  rows={2}
                  placeholder={`Type your reply to ${clientFirstName} (or switch to Voice)...`}
                  className="w-full p-3 pr-12 rounded-2xl bg-[#0c1836]/90 border border-blue-400/30 text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 resize-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => handleSendTurn()}
                  disabled={!textInput.trim() || isSubmitting}
                  className="absolute right-2.5 bottom-2.5 p-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#070e24] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all shadow-md"
                  title="Send to Alex"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            ) : null}

            {/* Bottom Interaction Buttons Bar */}
            <div className="flex items-center gap-2">
              {/* Voice vs Text toggle */}
              <button
                type="button"
                onClick={() => setInputMode(inputMode === 'voice' ? 'text' : 'voice')}
                className="p-3 rounded-2xl bg-[#0c1836]/70 hover:bg-[#12234e] border border-blue-400/20 text-blue-200 hover:text-white cursor-pointer transition-all flex-shrink-0"
                title={inputMode === 'voice' ? 'Switch to Typing' : 'Switch to Voice Mode'}
              >
                {inputMode === 'voice' ? <Keyboard className="w-5 h-5" /> : <Mic className="w-5 h-5 text-sky-400" />}
              </button>

              {/* Big Talk-Back / Send Action Button */}
              {inputMode === 'voice' ? (
                <button
                  type="button"
                  onClick={toggleRecording}
                  disabled={isSubmitting}
                  className={`flex-1 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99] ${
                    isRecording
                      ? 'btn-3d-red animate-pulse'
                      : 'btn-3d-blue'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="w-4 h-4" />
                      <span>TAP TO SEND TO {clientFirstName.toUpperCase()}</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-4 h-4" />
                      <span>TALK BACK TO {clientFirstName.toUpperCase()}</span>
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSendTurn()}
                  disabled={!textInput.trim() || isSubmitting}
                  className="btn-3d-blue flex-1 py-3.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{clientFirstName.toUpperCase()} IS REPLYING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND TO {clientFirstName.toUpperCase()}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}

              {/* Conclude Call / Grade Session Button */}
              {userTurnCount >= 1 && (
                <button
                  type="button"
                  onClick={handleConcludeCall}
                  className={`px-4 py-3.5 rounded-2xl text-xs font-black tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-lg flex-shrink-0 ${
                    hasReassuredClient
                      ? 'bg-gradient-to-tr from-emerald-600 to-teal-500 border-b-4 border-emerald-800 text-white shadow-emerald-500/30 animate-pulse'
                      : 'btn-3d-neutral text-slate-200 border border-white/20'
                  }`}
                  title="Conclude call and evaluate whole session"
                >
                  <span>{hasReassuredClient ? 'FINISH (+15 XP) 🎉' : 'GRADE CALL'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 5. DIRECTOR HINT OVERLAY MODAL */}
      {showHintModal && (
        <div 
          onClick={() => setShowHintModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md select-none animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#09132c]/95 backdrop-blur-2xl border border-sky-400/30 rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xl ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="text-base font-black text-white">Director Coaching Hint</h3>
                  <p className="text-[11px] text-blue-200/70 font-semibold">How to satisfy {clientName}</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setShowHintModal(false)}
                className="text-slate-400 hover:text-white cursor-pointer p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-[#0c1836] border border-blue-400/20 space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-300">Target Technical Root Cause</span>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {activeScenario.targetRootCauses?.[0] || 'Audience fatigue raised CPMs and degraded efficiency.'}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#0c1836] border border-blue-400/20 space-y-1">
                <span className="text-[10px] font-black uppercase text-emerald-300">Executive BLUF Structure</span>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  <li><strong>Sentence 1:</strong> State bottom line & acknowledge the {primaryKPI} spike.</li>
                  <li><strong>Sentence 2:</strong> Technical root cause (avoid blaming the algorithm).</li>
                  <li><strong>Sentence 3:</strong> Actionable 48h containment plan (fresh creative hooks + budget cap).</li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setShowHintModal(false);
              }}
              className="btn-3d-blue w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
            >
              GOT IT, LET'S TALK
            </button>
          </div>
        </div>
      )}

      {/* 6. AI VOICE SELECTOR MODAL */}
      {showVoicePicker && (
        <div 
          onClick={() => {
            NeuralTTS.stop();
            setPreviewVoiceId(null);
            setShowVoicePicker(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#040817]/80 backdrop-blur-md animate-in fade-in select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#09132c]/95 backdrop-blur-2xl border border-blue-400/25 rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xl max-h-[88dvh] overflow-y-auto ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎙️</span>
                <div>
                  <h3 className="text-base font-black text-white">AI Agent Neural Voice</h3>
                  <p className="text-[11px] text-blue-200/70 font-semibold">Choose which voice {clientFirstName} speaks with</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  NeuralTTS.stop();
                  setShowVoicePicker(false);
                }}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              {SOOTHING_VOICE_LIST.map((v) => {
                const isSelected = selectedVoice === v.id;
                const isPreviewing = previewVoiceId === v.id;

                return (
                  <div
                    key={v.id}
                    onClick={() => {
                      soundEffects.playClick();
                      NeuralTTS.stop();
                      NeuralTTS.setPreferredVoice(v.id);
                      setSelectedVoice(v.id);
                      setShowVoicePicker(false);
                      // Auto-read client's current line
                      setIsClientSpeaking(true);
                      NeuralTTS.speak(lastClientTurn.text, {
                        voice: v.id,
                        onEnd: () => setIsClientSpeaking(false),
                      });
                    }}
                    className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-blue-600/20 border-sky-400/80 shadow-md ring-1 ring-sky-400/30'
                        : 'bg-[#0c1836]/70 hover:bg-[#12234e] border-blue-400/15 backdrop-blur-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${
                        isSelected ? 'bg-gradient-to-tr from-blue-600 to-sky-400 text-white shadow-sm' : 'bg-[#09132c] text-blue-200'
                      }`}>
                        {v.gender === 'female' ? '👩' : '👨'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-white">{v.name}</span>
                          {isSelected && (
                            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-sky-400 text-[#070e24]">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-blue-200/70 font-semibold truncate">
                          {v.tone}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={async (e) => {
                        e.stopPropagation();
                        soundEffects.playClick();
                        if (isPreviewing) {
                          NeuralTTS.stop();
                          setPreviewVoiceId(null);
                          return;
                        }
                        setPreviewVoiceId(v.id);
                        await NeuralTTS.previewVoice(v.id, () => {
                          setPreviewVoiceId(null);
                        });
                      }}
                      className="p-2 rounded-xl bg-[#09132c] hover:bg-[#112046] border border-blue-400/20 text-sky-400 cursor-pointer"
                    >
                      {isPreviewing ? <VolumeX className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowVoicePicker(false)}
              className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
            >
              DONE
            </button>
          </div>
        </div>
      )}

      {/* 7. EXIT CONFIRMATION MODAL */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040817]/75 backdrop-blur-md">
          <div className="w-full max-w-sm bg-[#09132c]/95 backdrop-blur-2xl border border-blue-400/25 rounded-3xl p-6 text-center space-y-4 shadow-2xl ring-1 ring-white/10">
            <span className="text-4xl">🦉</span>
            <h3 className="text-xl font-black text-white">End Call with {clientFirstName}?</h3>
            <p className="text-xs font-semibold text-blue-200/80">
              You will exit the roleplay call. Progress on this session will not be saved.
            </p>
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="btn-3d-blue w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
              >
                KEEP TALKING
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitConfirm(false);
                  NeuralTTS.stop();
                  onExit();
                }}
                className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
              >
                EXIT CALL
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
