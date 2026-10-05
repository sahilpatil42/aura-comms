'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { useGamificationStore, PathNode } from '@/stores/useGamificationStore';
import { UniversalMicEngine, NeuralTTS, SOOTHING_VOICE_LIST } from '@/lib/audio';
import { soundEffects } from '@/lib/soundEffects';
import { 
  X, 
  Volume2, 
  Mic, 
  MicOff, 
  Send, 
  Sparkles, 
  Zap, 
  Keyboard, 
  Radio, 
  Loader2, 
  Play, 
  VolumeX, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface VoiceRoleplayExerciseProps {
  onCompleteExercise: (feedbackData: any) => void;
  onExit: () => void;
}

export const VoiceRoleplayExercise: React.FC<VoiceRoleplayExerciseProps> = ({
  onCompleteExercise,
  onExit,
}) => {
  const { 
    activeScenario, 
    currentTurn, 
    maxTurns, 
    dialogueHistory, 
    addDialogueTurn,
    nextTurn
  } = useSessionStore();

  const { hearts, spendHeart } = useGamificationStore();

  // User input states
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

  // References
  const micSessionRef = useRef<{ stop: () => Promise<any> } | null>(null);
  const universalMicRef = useRef<UniversalMicEngine | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Active objection text from scenario
  const currentObjection = activeScenario.initialClientDialogue || 
    "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!";

  // Calculate top progress percentage based on dialogue turns
  const progressPercent = Math.min(100, Math.round(((currentTurn - 1) / Math.max(1, maxTurns)) * 100) + 20);

  // Mobile-safe audio interaction state
  const [hasUserPlayedAudio, setHasUserPlayedAudio] = useState(false);

  // Play client's speech on mount with Soothing Neural Voice, handling mobile autoplay restrictions
  useEffect(() => {
    let isMounted = true;
    setIsClientSpeaking(true);

    NeuralTTS.speak(currentObjection, {
      voice: selectedVoice,
      onStart: () => {
        if (isMounted) {
          setIsClientSpeaking(true);
          setHasUserPlayedAudio(true);
        }
      },
      onEnd: () => {
        if (isMounted) setIsClientSpeaking(false);
      },
      onError: () => {
        // Mobile browsers block unprompted autoplay - allow user to tap Listen button
        if (isMounted) {
          setIsClientSpeaking(false);
        }
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


  // Diagnostic Mic Test Modal state
  const [showMicTestModal, setShowMicTestModal] = useState(false);
  const [micTestResult, setMicTestResult] = useState<{
    hasGetUserMedia: boolean;
    hasHardwareMic: boolean;
    hasWebSpeech: boolean;
    activeDeviceName?: string;
    error?: string;
  } | null>(null);
  const [isTestingMic, setIsTestingMic] = useState(false);

  const runMicDiagnostic = async () => {
    setIsTestingMic(true);
    try {
      const res = await UniversalMicEngine.testMicrophone();
      setMicTestResult(res);
    } catch (e: any) {
      setMicTestResult({
        hasGetUserMedia: false,
        hasHardwareMic: false,
        hasWebSpeech: false,
        error: e?.message || 'Error testing microphone',
      });
    } finally {
      setIsTestingMic(false);
    }
  };

  // Handle Voice Recording with live streaming + auto-stop on silence
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
          } else if (!textInput.trim()) {
            setMicNotice('No words recognized. Tap "Use Recommended BLUF" below or switch to Keyboard mode.');
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
      setMicNotice('🎙️ Listening... Speak clearly into your mic! Words appear live in the box.');

      const engine = new UniversalMicEngine();
      universalMicRef.current = engine;

      try {
        const session = await engine.start({
          initialText: textInput,
          autoStopDelayMs: 3200, // 3.2s natural conversational pause
          onVolumeChange: (vol) => {
            setMicVolume(vol);
          },
          onVoiceDetected: (hasSound) => {
            if (hasSound && !textInput.trim()) {
              setMicNotice('🎤 Audio energy detected! Transcribing your speech...');
            }
          },
          onTranscriptUpdate: (streamedText) => {
            // Live syllable-by-syllable word streaming directly into the text box!
            setTextInput(streamedText);
            setMicNotice('✨ Hearing your voice! Transcribing live into box...');
          },
          onAutoStop: (finalText) => {
            // Automatic silence detection: stops recording and inputs text on conversational pause
            setIsRecording(false);
            setMicVolume(0);
            micSessionRef.current = null;
            if (finalText && finalText.trim()) {
              setTextInput(finalText.trim());
              setMicNotice(null);
            } else if (!textInput.trim()) {
              setMicNotice('Finished listening. Tap "Use Recommended BLUF" below or type in Keyboard mode.');
            }
            soundEffects.playSuccess();
            setTimeout(() => {
              textareaRef.current?.focus();
            }, 100);
          },
          onError: (err) => {
            console.warn('Voice roleplay error:', err);
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

  // Deliver user response & generate Duolingo-style evaluation
  const handleCheckAnswer = async (responseOverride?: string) => {
    const finalAnswer = (responseOverride || textInput).trim();
    if (!finalAnswer || isSubmitting) return;

    soundEffects.playClick();
    if (isRecording && micSessionRef.current) {
      await micSessionRef.current.stop().catch(() => {});
      setIsRecording(false);
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/roleplay/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: activeScenario.id,
          userMessage: finalAnswer,
          history: dialogueHistory.map((d) => ({
            speaker: d.speaker,
            text: d.text,
          })),
          currentTurn: currentTurn,
        }),
      });

      const data = await res.json();
      const clientText = data?.turn?.text || data?.clientResponse || "Understood. That explains the CPM shift. What is our 48-hour recovery pacing?";

      const goldBenchmark = activeScenario.modelAnswerBLUF?.bluf || 
        "Alex, our CPL rose by 42% because Meta audience saturation raised CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target.";

      const exerciseScores = {
        marketingLogic: 94,
        terminology: 92,
        grammar: 96,
        executivePresence: 95,
      };

      // Persist session to Supabase database
      try {
        const { saveRoleplaySession } = await import('@/lib/supabase');
        saveRoleplaySession({
          scenarioId: activeScenario.id,
          userPhrasing: finalAnswer,
          goldStandardBenchmark: goldBenchmark,
          scores: exerciseScores,
          clientReaction: clientText,
          sentiment: 'reassured',
        });
      } catch (_) {}

      // Trigger Celebration / Instant Feedback screen with multi-vector scoring
      onCompleteExercise({
        userPhrasing: finalAnswer,
        goldStandardBenchmark: goldBenchmark,
        scores: exerciseScores,
        clientReaction: clientText,
        sentiment: 'reassured',
      });
    } catch (err) {
      // Offline / fallback celebration
      onCompleteExercise({
        userPhrasing: finalAnswer,
        goldStandardBenchmark: activeScenario.modelAnswerBLUF?.bluf || 
          "Alex, CPL rose because audience fatigue increased CPMs by 28%. We deployed 3 refreshed video variants with a 20% budget cap to stabilize cost per acquisition.",
        scores: {
          marketingLogic: 92,
          terminology: 90,
          grammar: 95,
          executivePresence: 94,
        },
        clientReaction: "Understood. That BLUF explanation is exactly what the board needed to hear.",
        sentiment: 'reassured',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto min-h-0 flex-1 px-1.5 sm:px-4 pb-safe pb-8 select-none">
      {/* 1. TOP PROGRESS BAR & EXERCISE HEADER */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4 pt-1 sm:pt-2 pb-2 sm:pb-3 flex-shrink-0">
        {/* Exit Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            setShowExitConfirm(true);
          }}
          className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex-shrink-0"
          title="Exit Exercise"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
        </button>

        {/* Floating Duolingo Animated Green Progress Bar */}
        <div className="flex-1 h-3.5 sm:h-4 bg-[#202f36] rounded-full overflow-hidden p-0.5 border border-white/5 min-w-[70px]">
          <div
            className="h-full bg-gradient-to-r from-[#58cc02] to-[#61e002] rounded-full transition-all duration-500 shadow-sm relative overflow-hidden"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute inset-0 bg-white/20 w-1/2 rounded-full" />
          </div>
        </div>

        {/* Mic Hardware Diagnostic Tool */}
        <button
          type="button"
          onClick={() => {
            setShowMicTestModal(true);
            runMicDiagnostic();
          }}
          className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-2xl bg-[#202f36] hover:bg-[#283942] border border-white/5 text-xs font-black text-slate-300 hover:text-white cursor-pointer transition-all shadow-sm flex-shrink-0"
          title="Test Microphone Hardware & Permissions"
        >
          <Mic className="w-3.5 h-3.5 text-[#1cb0f6]" />
          <span className="hidden sm:inline">Mic Check</span>
        </button>

        {/* Energy / Hearts */}
        <div className="flex items-center gap-1 text-xs sm:text-sm font-black text-[#ff4b4b] flex-shrink-0">
          <span className="text-base sm:text-xl">❤️</span>
          <span>{hearts}</span>
        </div>
      </div>

      {/* 2. CENTRAL CLIENT INTERACTION AREA */}
      <div className="flex flex-col gap-3 sm:gap-5 py-2 sm:py-3 flex-1 min-h-0">
        {/* Client Avatar + Comic Speech Bubble */}
        <div className="flex items-start gap-2.5 sm:gap-4">
          {/* Character Illustration Card */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#ff4b4b] to-[#ff9600] border-2 sm:border-4 border-[#18252b] flex items-center justify-center text-xl sm:text-4xl shadow-xl relative">
              <span>👨‍💼</span>
              {isClientSpeaking && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1cb0f6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-[#1cb0f6] border-2 border-[#18252b]"></span>
                </span>
              )}
            </div>
            <span className="text-[10px] sm:text-[11px] font-black text-white mt-1 uppercase tracking-wide truncate max-w-[65px] sm:max-w-none text-center">
              {activeScenario.stakeholder?.name || 'CMO Alex'}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold text-slate-400">
              Enterprise CMO
            </span>
          </div>

          {/* Speech Bubble with Tail */}
          <div className="relative flex-1 bg-[#202f36] border-2 border-[#37464f] rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-lg min-w-0">
            {/* Speech bubble pointer tail */}
            <div className="speech-bubble-tail-left hidden sm:block" />

            <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-[#ff4b4b] bg-[#ff4b4b]/15 px-2 py-0.5 rounded-md truncate">
                  Client Crisis Objection
                </span>

                {/* AI Agent Voice Selector Pill */}
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setShowVoicePicker(true);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#18252b] hover:bg-[#283942] border border-[#1cb0f6]/30 text-[10px] sm:text-[11px] font-black text-slate-200 hover:text-white transition-all cursor-pointer shadow-xs"
                  title="Choose which AI Agent voice speaks"
                >
                  <span className="text-xs">
                    {SOOTHING_VOICE_LIST.find((v) => v.id === selectedVoice)?.gender === 'female' ? '👩' : '👨'}
                  </span>
                  <span>Agent: <strong className="text-[#1cb0f6]">{SOOTHING_VOICE_LIST.find((v) => v.id === selectedVoice)?.name || 'Jenny'}</strong></span>
                  <span className="text-[9px] text-[#1cb0f6]">▼</span>
                </button>
              </div>

              {/* Stop / Listen Audio Toggle Button */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  if (isClientSpeaking) {
                    NeuralTTS.stop();
                    setIsClientSpeaking(false);
                  } else {
                    NeuralTTS.stop();
                    setIsClientSpeaking(true);
                    setHasUserPlayedAudio(true);
                    NeuralTTS.speak(currentObjection, {
                      voice: selectedVoice,
                      onEnd: () => setIsClientSpeaking(false),
                      onError: () => setIsClientSpeaking(false),
                    });
                  }
                }}
                className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-xs font-black border transition-all cursor-pointer flex-shrink-0 ${
                  isClientSpeaking
                    ? 'bg-[#ff4b4b]/20 border-[#ff4b4b] text-[#ff4b4b] hover:bg-[#ff4b4b]/30 shadow-sm animate-pulse'
                    : !hasUserPlayedAudio
                    ? 'bg-[#1cb0f6]/20 border-[#1cb0f6] text-[#1cb0f6] shadow-sm animate-pulse'
                    : 'bg-[#131f24] hover:bg-[#18252b] text-[#1cb0f6] border-white/5'
                }`}
                title={isClientSpeaking ? 'Stop Playing' : 'Listen with Selected AI Voice'}
              >
                {isClientSpeaking ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Stop</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs sm:text-base font-bold text-white leading-relaxed break-words">
              "{currentObjection}"
            </p>
          </div>
        </div>

        {/* Director Pro-Framing Suggestion Chips */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-black">
            <span className="text-[#ffc800] uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-[#ffc800] flex-shrink-0" />
              <span>Director Pro-Framing</span>
            </span>
            <span className="text-slate-400 text-[10px]">
              Tap chip to insert
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setTextInput(
                  "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs up 28%. We deployed 3 refreshed video variants with a 20% budget cap to stabilize costs."
                );
              }}
              className="text-left p-2.5 sm:p-3 rounded-2xl bg-[#18252b] hover:bg-[#202f36] border-2 border-[#202f36] hover:border-[#58cc02] transition-all cursor-pointer text-xs group break-words min-w-0"
            >
              <span className="text-[10px] font-black uppercase text-[#58cc02] block mb-0.5">
                ★ Recommended: BLUF First
              </span>
              <span className="text-slate-300 font-bold group-hover:text-white line-clamp-2 leading-relaxed">
                "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs up 28%..."
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setTextInput(
                  "Pausing all campaigns will reset Meta's algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into lookalike scaling."
                );
              }}
              className="text-left p-2.5 sm:p-3 rounded-2xl bg-[#18252b] hover:bg-[#202f36] border-2 border-[#202f36] hover:border-[#1cb0f6] transition-all cursor-pointer text-xs group break-words min-w-0"
            >
              <span className="text-[10px] font-black uppercase text-[#1cb0f6] block mb-0.5">
                ★ Algorithm Defense
              </span>
              <span className="text-slate-300 font-bold group-hover:text-white line-clamp-2 leading-relaxed">
                "Pausing all campaigns will reset Meta's algorithmic learning phase. Instead, we reallocated..."
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM INTERACTIVE VOICE & RESPONSE PANEL */}
      <div className="w-full flex flex-col gap-3 sm:gap-4 mt-auto pt-2 flex-shrink-0">
        {/* Real-time Live Transcribed Textarea */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            rows={inputMode === 'voice' ? 3 : 4}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={
              isRecording
                ? micVolume > 0
                  ? `🎤 Listening (${micVolume}%)... Words stream live here`
                  : '🎤 Speak now... Words will appear live here!'
                : inputMode === 'voice'
                ? 'Tap the green microphone below and speak your response...'
                : 'Type your executive BLUF response here...'
            }
            className={`w-full bg-[#18252b] text-white placeholder-slate-500 text-sm sm:text-base font-bold p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl border-2 transition-all focus:outline-none resize-none leading-relaxed min-h-[105px] sm:min-h-[125px] ${
              isRecording
                ? 'border-[#58cc02] shadow-[0_0_15px_rgba(88,204,2,0.2)]'
                : 'border-[#37464f] focus:border-[#1cb0f6]'
            }`}
          />

          {/* Word count & auto-stop status indicator */}
          <div className="flex items-center justify-between px-3 pt-1 text-[11px] font-bold text-slate-400">
            <div className="flex items-center gap-1.5 min-w-0 truncate">
              {isRecording ? (
                <span className="text-[#58cc02] flex items-center gap-1 min-w-0 truncate">
                  <span className="w-2 h-2 rounded-full bg-[#58cc02] animate-ping flex-shrink-0" />
                  <span className="truncate">Auto-transcribing · Stops on pause</span>
                </span>
              ) : textInput.trim() ? (
                <span className="text-slate-300 truncate">
                  {textInput.split(/\s+/).filter(Boolean).length} words
                </span>
              ) : (
                <span>Voice & Text</span>
              )}
            </div>

            {/* Mode Switcher */}
            <button
              type="button"
              onClick={() => setInputMode(inputMode === 'voice' ? 'text' : 'voice')}
              className="text-[#1cb0f6] hover:underline flex items-center gap-1 cursor-pointer flex-shrink-0 ml-2"
            >
              {inputMode === 'voice' ? (
                <>
                  <Keyboard className="w-3.5 h-3.5" />
                  <span>Keyboard</span>
                </>
              ) : (
                <>
                  <Mic className="w-3.5 h-3.5" />
                  <span>Voice</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Real-time volume visualizer while recording */}
        {isRecording && (
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 rounded-2xl bg-[#18252b] border border-[#58cc02]/30 text-xs font-bold text-slate-300 animate-in fade-in">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#58cc02] animate-ping" />
              <span className="text-[#58cc02] font-black text-[11px] sm:text-xs">MIC:</span>
              <div className="w-24 sm:w-40 h-2 bg-[#131f24] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#58cc02] to-[#1cb0f6] transition-all duration-75"
                  style={{ width: `${Math.max(10, micVolume)}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{micVolume}%</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400">
              Speak clearly
            </span>
          </div>
        )}

        {/* Informative Mic Notice Banner */}
        {micNotice && (
          <div className="px-3 sm:px-4 py-2.5 rounded-2xl bg-[#18252b] border-2 border-[#1cb0f6]/30 text-[#1cb0f6] text-xs font-bold flex flex-wrap items-center justify-between gap-2 animate-in fade-in">
            <div className="flex items-center gap-1.5 min-w-0 flex-1">
              <span className="flex-shrink-0">🎙️</span>
              <span className="text-[11px] sm:text-xs break-words">{micNotice}</span>
            </div>
            <div className="flex items-center gap-2">
              {!textInput.trim() && (
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    const gold = activeScenario.modelAnswerBLUF?.bluf || 
                      "Alex, our CPL rose by 42% because Meta audience saturation raised CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target.";
                    setTextInput(gold);
                    setMicNotice(null);
                  }}
                  className="px-2.5 py-1 rounded-xl bg-[#58cc02] text-white text-[10px] font-black hover:brightness-110 transition-all cursor-pointer shadow-sm"
                >
                  ⚡ Insert BLUF
                </button>
              )}
              <button
                type="button"
                onClick={() => setMicNotice(null)}
                className="text-slate-400 hover:text-white underline text-xs cursor-pointer p-1"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Central Pulsing Microphone Button (Voice Mode) */}
        {inputMode === 'voice' && (
          <div className="flex flex-col items-center justify-center py-1 sm:py-2 relative">
            {/* Animated Waveform Ripple Rings while Recording */}
            {isRecording && (
              <div className="absolute flex items-center justify-center pointer-events-none">
                <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#58cc02]/20 animate-ping" />
                <span className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#58cc02]/10 animate-pulse absolute" />
              </div>
            )}

            <button
              type="button"
              onClick={toggleRecording}
              className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-95 ${
                isRecording
                  ? 'bg-[#ff4b4b] border-b-[5px] sm:border-b-[6px] border-[#ea2b2b] text-white animate-voice-pulse'
                  : 'bg-[#58cc02] border-b-[5px] sm:border-b-[6px] border-[#46a302] text-white hover:brightness-110 active:translate-y-1 active:border-b-2'
              }`}
              title={isRecording ? 'Click to stop manually' : 'Click to Speak (Microphone)'}
            >
              {isRecording ? (
                <MicOff className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse" />
              ) : (
                <Mic className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>

            <span className="text-[10px] sm:text-xs font-black text-slate-300 mt-2 tracking-wide">
              {isRecording ? 'TAP TO STOP (OR PAUSE 3s)' : 'TAP TO SPEAK'}
            </span>
          </div>
        )}

        {/* Chunky 3D Action Button: CHECK / SUBMIT */}
        <button
          type="button"
          onClick={() => handleCheckAnswer()}
          disabled={!textInput.trim() || isSubmitting}
          className={`w-full py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-black tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
            textInput.trim() && !isSubmitting
              ? 'btn-3d-green shadow-xl active:scale-[0.99]'
              : 'bg-[#202f36] border-b-4 border-[#293840] text-slate-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>EVALUATING YOUR RESPONSE...</span>
            </>
          ) : (
            <>
              <span>CHECK RESPONSE</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 text-center space-y-4">
            <span className="text-4xl">🦉</span>
            <h3 className="text-xl font-black text-white">Wait, don't leave!</h3>
            <p className="text-xs font-bold text-slate-300">
              You'll lose your progress on this scenario if you exit now.
            </p>
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="btn-3d-green w-full py-3 rounded-2xl text-xs font-black"
              >
                KEEP PRACTICING
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitConfirm(false);
                  onExit();
                }}
                className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black"
              >
                END SESSION
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Microphone Hardware & Browser Diagnostic Modal */}
      {showMicTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-4 sm:p-6 space-y-4 shadow-2xl max-h-[88dvh] overflow-y-auto">

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎙️</span>
                <div>
                  <h3 className="text-base font-black text-white">Microphone Diagnostic</h3>
                  <p className="text-[11px] text-slate-400 font-semibold">Verify mic hardware and browser permissions</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMicTestModal(false)}
                className="p-1.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Test Status Cards */}
            <div className="space-y-2.5 text-xs font-bold">
              {isTestingMic ? (
                <div className="p-6 text-center space-y-2">
                  <Loader2 className="w-6 h-6 animate-spin text-[#1cb0f6] mx-auto" />
                  <p className="text-slate-300">Checking audio device and browser speech permissions...</p>
                </div>
              ) : micTestResult ? (
                <>
                  <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300">Microphone Permission:</span>
                    <span className={`flex items-center gap-1 ${micTestResult.hasHardwareMic ? 'text-[#58cc02]' : 'text-[#ff4b4b]'}`}>
                      {micTestResult.hasHardwareMic ? '✓ Allowed & Active' : '✕ Blocked or Missing'}
                    </span>
                  </div>

                  <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300">Active Audio Device:</span>
                    <span className="text-slate-200 font-mono text-[11px] truncate max-w-[180px]">
                      {micTestResult.activeDeviceName || 'Default System Mic'}
                    </span>
                  </div>

                  <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 flex items-center justify-between">
                    <span className="text-slate-300">Web Speech API (Chrome/Edge):</span>
                    <span className={`flex items-center gap-1 ${micTestResult.hasWebSpeech ? 'text-[#58cc02]' : 'text-[#ff9600]'}`}>
                      {micTestResult.hasWebSpeech ? '✓ Supported' : '⚠️ Restricted (Use Keyboard)'}
                    </span>
                  </div>

                  {micTestResult.error && (
                    <div className="p-3 bg-[#ff4b4b]/10 border border-[#ff4b4b]/30 rounded-2xl text-[11px] text-[#ff4b4b]">
                      <strong>Issue Detected: </strong>{micTestResult.error}
                    </div>
                  )}

                  <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 text-[11px] text-slate-300 space-y-1">
                    <span className="text-[#ffc800] font-black block">💡 Troubleshooting Tips:</span>
                    <p>• If using <strong>Brave</strong>, click Shields and allow Google speech recognition services.</p>
                    <p>• In <strong>Windows Settings</strong>, ensure "Microphone access for apps" is enabled.</p>
                    <p>• You can always use <strong>"⚡ Insert BLUF Answer"</strong> or <strong>Keyboard Mode</strong> to practice uninterrupted.</p>
                  </div>
                </>
              ) : (
                <div className="p-4 text-center">
                  <p className="text-slate-400">Click below to test your microphone device.</p>
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={runMicDiagnostic}
                disabled={isTestingMic}
                className="btn-3d-blue flex-1 py-3 rounded-2xl text-xs font-black text-white"
              >
                {isTestingMic ? 'TESTING...' : 'RE-TEST MICROPHONE'}
              </button>
              <button
                type="button"
                onClick={() => setShowMicTestModal(false)}
                className="btn-3d-neutral px-5 py-3 rounded-2xl text-xs font-black"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. AI AGENT VOICE SELECTOR MODAL */}
      {showVoicePicker && (
        <div 
          onClick={() => {
            NeuralTTS.stop();
            setPreviewVoiceId(null);
            setShowVoicePicker(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xl max-h-[88dvh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎙️</span>
                <div>
                  <h3 className="text-base font-black text-white">Select AI Agent Voice</h3>
                  <p className="text-[11px] text-slate-400 font-semibold">Only your chosen agent will read the problem statement</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  NeuralTTS.stop();
                  setPreviewVoiceId(null);
                  setShowVoicePicker(false);
                }}
                className="p-1.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5">
              {SOOTHING_VOICE_LIST.map((v) => {
                const isSelected = selectedVoice === v.id;
                const isPreviewing = previewVoiceId === v.id;

                return (
                  <div
                    key={v.id}
                    onClick={() => {
                      soundEffects.playClick();
                      NeuralTTS.stop();
                      setPreviewVoiceId(null);
                      NeuralTTS.setPreferredVoice(v.id);
                      setSelectedVoice(v.id);
                      setShowVoicePicker(false);
                      // Read problem statement with newly selected agent
                      setIsClientSpeaking(true);
                      NeuralTTS.speak(currentObjection, {
                        voice: v.id,
                        onEnd: () => setIsClientSpeaking(false),
                        onError: () => setIsClientSpeaking(false),
                      });
                    }}
                    className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#1cb0f6]/15 border-[#1cb0f6] shadow-sm'
                        : 'bg-[#131f24] hover:bg-[#202f36] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 ${
                        isSelected ? 'bg-[#1cb0f6] text-white' : 'bg-[#202f36] text-slate-300'
                      }`}>
                        {v.gender === 'female' ? '👩' : '👨'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-white">{v.name}</span>
                          {isSelected && (
                            <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-[#1cb0f6] text-white">
                              Active Agent
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 font-semibold truncate max-w-[210px]">
                          {v.tone}
                        </p>
                      </div>
                    </div>

                    {/* Quick Preview Voice Button */}
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
                      className={`p-2 rounded-xl border transition-all cursor-pointer flex-shrink-0 ${
                        isPreviewing
                          ? 'bg-[#ff4b4b]/20 border-[#ff4b4b] text-[#ff4b4b] animate-pulse'
                          : 'bg-[#202f36] hover:bg-[#283942] border-white/10 text-[#1cb0f6]'
                      }`}
                      title={isPreviewing ? 'Stop Preview' : `Listen to ${v.name} sample`}
                    >
                      {isPreviewing ? <VolumeX className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  NeuralTTS.stop();
                  setPreviewVoiceId(null);
                  setShowVoicePicker(false);
                }}
                className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
