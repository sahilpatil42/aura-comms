'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { NeuralTTS, GoogleTTS, SOOTHING_VOICE_LIST, UniversalMicEngine, VoiceCaptureSession } from '@/lib/audio';
import { AudioWaveform } from './AudioWaveform';
import { DialogueTurn } from '@/types/scenario';
import { 
  Mic, 
  MicOff, 
  Send, 
  User, 
  Bot, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  Volume2, 
  VolumeX,
  RotateCcw, 
  Zap, 
  ShieldCheck, 
  Activity,
  X,
  Check,
  Radio,
  Play
} from 'lucide-react';

export const Stage2Roleplay: React.FC = () => {
  const {
    activeScenario,
    dialogueHistory,
    currentTurn,
    maxTurns,
    isRecording,
    isClientSpeaking,
    transcriptBuffer,
    isProcessingTurn,
    isEvaluating,
    autoSpeakClient,
    audioMuted,
    setRecording,
    setClientSpeaking,
    setTranscriptBuffer,
    setProcessingTurn,
    setEvaluating,
    setEvaluation,
    setStage,
    addDialogueTurn,
    nextTurn,
    resetSession,
  } = useSessionStore();

  const [textInput, setTextInput] = useState('');
  const [sttNotice, setSttNotice] = useState<string | null>(null);
  const [showEmptyWarning, setShowEmptyWarning] = useState(false);
  const [micVolume, setMicVolume] = useState<number>(0);
  const [isTranscribingAudio, setIsTranscribingAudio] = useState(false);
  const [micTestStatus, setMicTestStatus] = useState<'idle' | 'testing' | 'ok' | 'error'>('idle');
  const [micTestMessage, setMicTestMessage] = useState<string>('');
  const [selectedVoice, setSelectedVoice] = useState<string>('jenny');
  const [isPreviewingVoice, setIsPreviewingVoice] = useState(false);

  const universalMicRef = useRef<UniversalMicEngine | null>(null);
  const micSessionRef = useRef<VoiceCaptureSession | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const initialSpeechTextRef = useRef<string>('');

  // Load preferred soothing AI voice on mount
  useEffect(() => {
    setSelectedVoice(NeuralTTS.getPreferredVoice());
  }, []);

  const handleVoiceChange = (voiceId: string) => {
    setSelectedVoice(voiceId);
    NeuralTTS.setPreferredVoice(voiceId);
  };

  const handlePreviewVoice = async () => {
    if (isPreviewingVoice) {
      NeuralTTS.stop();
      setIsPreviewingVoice(false);
      return;
    }
    setIsPreviewingVoice(true);
    await NeuralTTS.previewVoice(selectedVoice, () => {
      setIsPreviewingVoice(false);
    });
  };

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [dialogueHistory, transcriptBuffer, isProcessingTurn]);

  // Initial client speech when entering Stage 2 using Ultra-Soothing Neural Voice
  useEffect(() => {
    if (!audioMuted && autoSpeakClient && dialogueHistory.length === 1 && dialogueHistory[0].speaker === 'client') {
      const initialText = dialogueHistory[0].text;
      setClientSpeaking(true);
      NeuralTTS.speak(initialText, {
        voice: NeuralTTS.getPreferredVoice(),
        pitch: activeScenario.stakeholder.audioVoicePitch ?? 0.95,
        rate: activeScenario.stakeholder.audioVoiceRate ?? 1.05,
        onEnd: () => setClientSpeaking(false),
      });
    }

    return () => {
      NeuralTTS.stop();
      if (micSessionRef.current) {
        micSessionRef.current.stop().catch(() => {});
        micSessionRef.current = null;
      }
    };
  }, []);

  // Dynamic pro-framing suggestions tailored to active crisis scenario
  // Dynamic pro-framing suggestions tailored to active crisis scenario
  const proFramingOptions = React.useMemo(() => {
    // Beginner Scenario 1: Google Ads Ad Not Showing
    if (activeScenario.id === 'google-ads-ad-not-showing') {
      return [
        { label: 'Reassurance', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', text: 'Dr. Sarah, rest assured your ads are active and running right now. In fact, our Impression Share is over 74%.' },
        { label: 'Ad Preview Tool', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', text: 'Searching from your clinic phone generates impressions without clicks, which hurts your Quality Score. We use Google\'s Ad Preview Tool instead.' },
        { label: 'Budget Protection', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', text: 'Google intentionally caps ad frequency to your personal device to preserve your budget for genuine prospective patients.' }
      ];
    }
    // Beginner Scenario 2: Meta vs GA4 Click Discrepancy
    if (activeScenario.id === 'meta-vs-ga4-click-discrepancy') {
      return [
        { label: 'Simple Analogy', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', text: 'David, Meta counts a click the moment a user taps the ad, whereas Google Analytics only counts a visitor once the page fully finishes loading.' },
        { label: 'Mobile Drop-off', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', text: 'Our mobile load time is 4.6 seconds. Impatient mobile shoppers on Instagram tap back before GA4 scripts can fire.' },
        { label: 'Speed Optimization', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', text: 'We are compressing hero images and deferring scripts to get mobile load time under 1.8 seconds to recover 70% of those visitors.' }
      ];
    }
    // Beginner Scenario 3: CPC vs CPM
    if (activeScenario.id === 'cpc-vs-cpm-bidding-explained') {
      return [
        { label: 'Store vs Billboard', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', text: 'Lisa, CPC is paying per customer who walks through the clinic door; CPM is paying to display a billboard on a busy highway.' },
        { label: 'Auction Strategy', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', text: 'CPC is ideal when intent is high on Google Search, while CPM is much cheaper for visual Meta feed ads with high click rates.' },
        { label: 'Recommendation', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', text: 'We recommend keeping CPC on Google Search and testing CPM on Meta with our top-performing video hooks.' }
      ];
    }
    // Beginner Scenario 4: Daily Budget Exhausted
    if (activeScenario.id === 'daily-budget-exhausted-morning') {
      return [
        { label: 'BLUF', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', text: 'Tom, your budget ran out early because high-volume early-morning search traffic surged between 7 AM and 10 AM.' },
        { label: 'Dayparting Fix', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', text: 'We have configured ad scheduling to evenly pace spend between 9 AM and 6 PM when your estimators are actively answering calls.' },
        { label: 'Search Query Audit', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', text: 'We added negative keywords to block unqualified DIY and job searches that burned 30% of this morning\'s budget.' }
      ];
    }
    // Beginner Scenario 5: High CTR Zero Purchases
    if (activeScenario.id === 'high-ctr-zero-purchases') {
      return [
        { label: 'Validation', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', text: 'Rachel, a 3.8% CTR is phenomenal—it proves your ad creative and aesthetic are resonating strongly with shoppers.' },
        { label: 'Funnel Mismatch', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', text: 'The issue is the campaign was set to Traffic clicks instead of Purchases, and visitors arrive at a general catalog rather than the specific item in the video.' },
        { label: 'Landing Page Fix', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', text: 'We switched campaign optimization to Purchase conversions and routed ads directly to the featured product page.' }
      ];
    }

    // Default or Advanced scenarios with modelAnswerBLUF
    if (activeScenario.modelAnswerBLUF) {
      return [
        { 
          label: 'BLUF', 
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', 
          text: activeScenario.modelAnswerBLUF.bluf.length > 150 
            ? activeScenario.modelAnswerBLUF.bluf.slice(0, 140) + '...' 
            : activeScenario.modelAnswerBLUF.bluf 
        },
        { 
          label: 'Root Cause', 
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', 
          text: activeScenario.modelAnswerBLUF.rootCauseAnalysis.length > 150 
            ? activeScenario.modelAnswerBLUF.rootCauseAnalysis.slice(0, 140) + '...' 
            : activeScenario.modelAnswerBLUF.rootCauseAnalysis 
        },
        { 
          label: 'Containment', 
          badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', 
          text: activeScenario.modelAnswerBLUF.immediateMitigation.length > 150 
            ? activeScenario.modelAnswerBLUF.immediateMitigation.slice(0, 140) + '...' 
            : activeScenario.modelAnswerBLUF.immediateMitigation 
        },
        { 
          label: 'Next 48 Hours', 
          badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30', 
          text: activeScenario.modelAnswerBLUF.recoveryPlan72h.length > 150 
            ? activeScenario.modelAnswerBLUF.recoveryPlan72h.slice(0, 140) + '...' 
            : activeScenario.modelAnswerBLUF.recoveryPlan72h 
        }
      ];
    }

    return [
      { label: 'BLUF', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', text: 'Bottom line up front: The issue is quarantined and our spend velocity is locked back to target.' },
      { label: 'Root Cause', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30', text: 'Our audit isolated the exact technical cause behind the metric anomaly.' },
      { label: 'Containment', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', text: 'We deployed immediate stop-loss safeguards to prevent further budget loss.' }
    ];
  }, [activeScenario]);

  // Transcribe recorded audio blob via /api/transcribe
  const transcribeAudioBlob = async (blob: Blob): Promise<string> => {
    setIsTranscribingAudio(true);
    try {
      const formData = new FormData();
      formData.append('audio', blob, 'user_audio.webm');
      
      const storedKey = typeof window !== 'undefined' ? localStorage.getItem('AURA_GEMINI_KEY') : null;
      if (storedKey) {
        formData.append('apiKey', storedKey);
      }

      const res = await fetch('/api/transcribe', {
        method: 'POST',
        headers: storedKey ? { 'x-gemini-key': storedKey } : {},
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.transcript) {
        return data.transcript;
      }
    } catch (e) {
      console.warn('Audio transcription error:', e);
    } finally {
      setIsTranscribingAudio(false);
    }
    return '';
  };

  // Hardware microphone diagnostic verification
  const handleTestMic = async () => {
    setMicTestStatus('testing');
    setMicTestMessage('Checking hardware microphone & permissions...');
    try {
      const res = await UniversalMicEngine.testMicrophone();
      if (res.hasHardwareMic) {
        setMicTestStatus('ok');
        setMicTestMessage('Microphone hardware detected & verified! Ready to record.');
        setTimeout(() => setMicTestStatus('idle'), 5000);
      } else {
        setMicTestStatus('error');
        setMicTestMessage(res.error || 'Microphone not accessible. Please check your browser address bar permissions.');
      }
    } catch (err: any) {
      setMicTestStatus('error');
      setMicTestMessage(`Mic test failed: ${err?.message || 'Access blocked'}`);
    }
  };

  // Toggle microphone recording with UniversalMicEngine (hardware stream + STT + VU meter)
  const toggleRecording = async () => {
    if (isRecording) {
      // User is stopping the recording
      setRecording(false);
      setMicVolume(0);

      if (micSessionRef.current) {
        const session = micSessionRef.current;
        micSessionRef.current = null;
        try {
          const { transcript, audioBlob } = await session.stop();
          
          if (transcript && transcript.trim()) {
            setTextInput(transcript.trim());
            setShowEmptyWarning(false);
          } else if (audioBlob && audioBlob.size > 1000) {
            // Web Speech didn't transcribe text; transcribe hardware audio blob via AI
            const transcribedText = await transcribeAudioBlob(audioBlob);
            if (transcribedText && transcribedText.trim()) {
              setTextInput(transcribedText.trim());
              setShowEmptyWarning(false);
            } else {
              setSttNotice('No audible speech detected. Speak clearly into your mic or type below.');
            }
          }
        } catch (err) {
          console.warn('Error stopping microphone session:', err);
        }
      }

      // Automatically focus textarea so user can review and edit their answer
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);

    } else {
      // User is starting the recording
      setSttNotice(null);
      setShowEmptyWarning(false);
      GoogleTTS.stop();
      setClientSpeaking(false);

      const baseText = textInput.trim();
      initialSpeechTextRef.current = baseText;
      setRecording(true);
      setMicVolume(15); // initial pulse

      const micEngine = new UniversalMicEngine();
      universalMicRef.current = micEngine;

      try {
        const session = await micEngine.start({
          initialText: baseText,
          onVolumeChange: (volume) => {
            setMicVolume(volume);
          },
          onTranscriptUpdate: (fullTranscript) => {
            setTranscriptBuffer(fullTranscript);
            setTextInput(fullTranscript);
            setShowEmptyWarning(false);
          },
          onAutoStop: async (finalTranscript) => {
            // AUTOMATIC STOP ON PAUSE: User finished speaking!
            // Automatically finalize text in the box without requiring a second click!
            setRecording(false);
            setMicVolume(0);
            micSessionRef.current = null;

            if (finalTranscript && finalTranscript.trim()) {
              setTextInput(finalTranscript.trim());
              setTranscriptBuffer('');
              setShowEmptyWarning(false);
            } else if (universalMicRef.current) {
              const blob = universalMicRef.current.getLastAudioBlob();
              if (blob && blob.size > 1000) {
                setIsTranscribingAudio(true);
                const transcribed = await transcribeAudioBlob(blob);
                setIsTranscribingAudio(false);
                if (transcribed && transcribed.trim()) {
                  setTextInput(transcribed.trim());
                  setTranscriptBuffer('');
                  setShowEmptyWarning(false);
                }
              }
            }

            setTimeout(() => {
              textareaRef.current?.focus();
            }, 100);
          },
          onError: (errNotice) => {
            console.warn('Mic engine error notice:', errNotice);
            setSttNotice(errNotice);
            setRecording(false);
            setMicVolume(0);
          },
        });

        if (session) {
          micSessionRef.current = session;
        } else {
          setRecording(false);
          setMicVolume(0);
        }
      } catch (err: any) {
        console.error('Failed to start microphone:', err);
        setSttNotice(`Microphone error: ${err?.message || 'Access denied'}. Please check browser permissions.`);
        setRecording(false);
        setMicVolume(0);
      }
    }
  };

  // Submit User Message
  const handleSubmitMessage = async (messageToSend?: string) => {
    let finalMsg = (messageToSend || textInput || transcriptBuffer).trim();

    // If still recording, cleanly stop session and capture transcript/blob
    if (isRecording && micSessionRef.current) {
      setRecording(false);
      setMicVolume(0);
      const session = micSessionRef.current;
      micSessionRef.current = null;
      try {
        const { transcript, audioBlob } = await session.stop();
        if (transcript && transcript.trim()) {
          finalMsg = transcript.trim();
        } else if (!finalMsg && audioBlob && audioBlob.size > 1000) {
          finalMsg = await transcribeAudioBlob(audioBlob);
          if (finalMsg) setTextInput(finalMsg);
        }
      } catch (err) {
        console.warn('Error stopping mic session on submit:', err);
      }
    }

    if (!finalMsg) {
      setShowEmptyWarning(true);
      textareaRef.current?.focus();
      return;
    }

    if (isProcessingTurn) return;

    setShowEmptyWarning(false);

    // Add user message to history
    const userTurn: DialogueTurn = {
      id: `turn-user-${Date.now()}`,
      speaker: 'user',
      text: finalMsg,
      timestamp: Date.now(),
    };

    addDialogueTurn(userTurn);
    setTextInput('');
    setTranscriptBuffer('');
    setProcessingTurn(true);

    try {
      if (currentTurn < maxTurns) {
        const res = await fetch('/api/roleplay/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            scenarioId: activeScenario.id,
            userMessage: finalMsg,
            history: [...dialogueHistory, userTurn],
            currentTurn,
          }),
        });

        const data = await res.json();
        if (data.success && data.turn) {
          addDialogueTurn(data.turn);
          nextTurn();

          if (!audioMuted && autoSpeakClient) {
            setClientSpeaking(true);
            NeuralTTS.speak(data.turn.text, {
              voice: selectedVoice,
              pitch: activeScenario.stakeholder.audioVoicePitch ?? 0.95,
              rate: activeScenario.stakeholder.audioVoiceRate ?? 1.05,
              onEnd: () => setClientSpeaking(false),
            });
          }
        }
      } else {
        await triggerEvaluation([...dialogueHistory, userTurn]);
      }
    } catch (err) {
      console.error('Error submitting turn:', err);
    } finally {
      setProcessingTurn(false);
    }
  };

  // Trigger Stage 3 Evaluation
  const triggerEvaluation = async (historyToEvaluate?: DialogueTurn[]) => {
    const history = historyToEvaluate || dialogueHistory;
    if (history.length < 2) return;

    setEvaluating(true);
    try {
      const res = await fetch('/api/roleplay/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scenarioId: activeScenario.id,
          dialogueHistory: history,
          userTotalTurns: history.filter((t) => t.speaker === 'user').length || 1,
        }),
      });

      const data = await res.json();
      if (data.success && data.evaluation) {
        setEvaluation(data.evaluation);
        setStage(3);
      }
    } catch (err) {
      console.error('Failed to evaluate session:', err);
    } finally {
      setEvaluating(false);
    }
  };

  const hasContent = Boolean(textInput.trim() || transcriptBuffer.trim());

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4 pb-12 animate-in fade-in duration-300">
      {/* Session Header Card */}
      <div className="card-glass rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-md ${
              isClientSpeaking ? 'bg-rose-600 animate-pulse ring-2 ring-rose-400' : 'bg-slate-800 border border-white/10'
            }`}>
              {activeScenario.stakeholder.name.split(' ').map((n) => n[0]).join('')}
            </div>
            {isClientSpeaking && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 animate-ping" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-sm">
                {activeScenario.stakeholder.name}
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-semibold uppercase">
                {activeScenario.stakeholder.temperament.replace('-', ' ')}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {activeScenario.stakeholder.title} · {activeScenario.stakeholder.organization}
            </p>
          </div>
        </div>

        {/* Turn Counter & Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs">
            <span className="text-slate-400 font-medium">Turn</span>
            <span className="font-bold text-indigo-400">{currentTurn}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">{maxTurns}</span>
          </div>

          <button
            onClick={() => triggerEvaluation()}
            disabled={dialogueHistory.filter((t) => t.speaker === 'user').length === 0 || isEvaluating}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold disabled:opacity-50 transition-all cursor-pointer"
          >
            {isEvaluating ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <ShieldCheck className="w-3.5 h-3.5" />
            )}
            <span>Conclude & Evaluate</span>
          </button>

          <button
            onClick={resetSession}
            title="Restart Scenario"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/5 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Audio Waveform Bar */}
      <div className="card-glass rounded-2xl px-4 py-2 border border-white/10 flex flex-col items-center justify-center">
        <AudioWaveform
          isActive={isRecording || isClientSpeaking}
          speaker={isRecording ? 'user' : isClientSpeaking ? 'client' : 'idle'}
          volume={micVolume}
          height={40}
        />
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 mt-1 px-1">
          <div className="flex items-center gap-2">
            {isRecording ? (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Microphone Active · Speak your answer...</span>
                {micVolume > 0 && (
                  <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded-full border border-emerald-500/30 text-[10px]">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>Level: {micVolume}%</span>
                  </div>
                )}
              </div>
            ) : isTranscribingAudio ? (
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Transcribing your spoken audio with AI...
              </span>
            ) : isClientSpeaking ? (
              <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                <Volume2 className="w-3 h-3 animate-pulse" />
                Client Stakeholder Speaking (Google Neural Voice)...
              </span>
            ) : (
              <span className="text-slate-400 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-indigo-400" />
                Audio Ready (Universal Mic + Soothing Neural TTS)
              </span>
            )}
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Soothing AI Voice Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 rounded-xl px-2.5 py-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">Voice:</span>
              <select
                value={selectedVoice}
                onChange={(e) => handleVoiceChange(e.target.value)}
                className="bg-transparent text-[11px] text-indigo-300 font-semibold focus:outline-none cursor-pointer pr-1"
                title="Choose a soothing, human-quality AI voice"
              >
                {SOOTHING_VOICE_LIST.map((v) => (
                  <option key={v.id} value={v.id} className="bg-slate-900 text-white">
                    {v.name} ({v.gender === 'female' ? '♀' : '♂'} · {v.tone.split(' ')[0]})
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handlePreviewVoice}
                className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title={isPreviewingVoice ? 'Stop voice sample' : 'Preview this soothing voice'}
              >
                {isPreviewingVoice ? (
                  <VolumeX className="w-3 h-3 text-rose-400 animate-pulse" />
                ) : (
                  <Play className="w-3 h-3 text-emerald-400" />
                )}
              </button>
            </div>

            {/* Test Mic Diagnostic Button */}
            {micTestStatus === 'testing' ? (
              <span className="flex items-center gap-1 text-[10px] text-indigo-300 bg-slate-900 px-2 py-1 rounded-xl border border-white/10">
                <Loader2 className="w-3 h-3 animate-spin" />
                Checking mic...
              </span>
            ) : micTestStatus === 'ok' ? (
              <span className="flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-950/40 px-2 py-1 rounded-xl border border-emerald-500/30">
                <Check className="w-3 h-3 text-emerald-400" />
                Mic verified!
              </span>
            ) : micTestStatus === 'error' ? (
              <span className="text-[10px] text-rose-300 bg-rose-950/40 px-2 py-1 rounded-xl border border-rose-500/30">
                {micTestMessage}
              </span>
            ) : (
              <button
                type="button"
                onClick={handleTestMic}
                className="text-[10px] px-2.5 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                title="Test your hardware microphone before speaking"
              >
                <Mic className="w-2.5 h-2.5 text-emerald-400" />
                <span>Test Mic</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Live Dialogue Transcript Feed */}
      <div
        ref={chatScrollRef}
        className="card-glass rounded-2xl p-4 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 border border-white/10"
      >
        {dialogueHistory.map((turn) => {
          const isUser = turn.speaker === 'user';
          return (
            <div
              key={turn.id}
              className={`flex gap-3 max-w-[85%] ${
                isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
              } animate-in fade-in slide-in-from-bottom-2 duration-200`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm ${
                  isUser
                    ? 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white'
                    : 'bg-gradient-to-tr from-rose-600 to-amber-600 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed border shadow-sm ${
                  isUser
                    ? 'bg-indigo-950/50 border-indigo-500/30 text-indigo-100 rounded-tr-none'
                    : 'bg-slate-900/90 border-white/10 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-1 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">
                    {isUser ? 'You (Agency Lead)' : activeScenario.stakeholder.name}
                  </span>
                  {turn.sentiment && (
                    <span
                      className={`text-[10px] uppercase font-bold px-1.5 py-0.2 rounded ${
                        turn.sentiment === 'confrontational'
                          ? 'text-rose-400 bg-rose-500/10'
                          : turn.sentiment === 'reassured'
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-amber-400 bg-amber-500/10'
                      }`}
                    >
                      {turn.sentiment}
                    </span>
                  )}
                </div>

                <p>{turn.text}</p>

                {!isUser && (
                  <div className="mt-2.5 pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        NeuralTTS.stop();
                        setClientSpeaking(true);
                        NeuralTTS.speak(turn.text, {
                          voice: selectedVoice,
                          pitch: activeScenario.stakeholder.audioVoicePitch ?? 0.95,
                          rate: activeScenario.stakeholder.audioVoiceRate ?? 1.05,
                          onEnd: () => setClientSpeaking(false),
                        });
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-[11px] text-rose-300 hover:text-white border border-rose-500/20 transition-all cursor-pointer"
                      title="Replay dialogue with Soothing Neural Voice"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                      <span>Replay Voice</span>
                    </button>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Soothing Voice
                    </span>
                  </div>
                )}

                {turn.flaggedPhrases && turn.flaggedPhrases.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-rose-500/20 text-[11px] text-rose-300 flex items-start gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span>Flagged by Advisor: {turn.flaggedPhrases.join('; ')}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Live interim buffer speech bubble while user is speaking */}
        {isRecording && transcriptBuffer && (
          <div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse animate-in fade-in duration-150">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-xs font-bold flex-shrink-0">
              <Mic className="w-4 h-4 animate-pulse" />
            </div>
            <div className="rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 italic rounded-tr-none">
              <span className="text-[10px] text-emerald-400 block font-semibold not-italic mb-1">
                Listening (Live Transcript)...
              </span>
              "{transcriptBuffer}"
            </div>
          </div>
        )}

        {/* Client typing indicator */}
        {isProcessingTurn && (
          <div className="flex gap-3 max-w-[85%] mr-auto animate-in fade-in">
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
            </div>
            <div className="rounded-2xl p-3 bg-slate-900 border border-white/5 text-slate-400 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]" />
              <span>{activeScenario.stakeholder.name} is evaluating your response...</span>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Director Pro-Framing Bar */}
      <div className="space-y-2 select-none">
        <div className="flex items-center justify-between text-xs">
          <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            Director Pro-Framing Suggestions
          </span>
          <span className="text-[11px] text-slate-500">
            Click chip to insert into response, or click ⚡ to deliver instantly
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {proFramingOptions.map((opt, idx) => {
            const isSelected = textInput === opt.text;
            return (
              <div
                key={idx}
                className={`group flex items-center justify-between gap-2 p-2.5 rounded-xl border text-xs transition-all ${
                  isSelected
                    ? 'bg-indigo-950/70 border-indigo-400 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-400'
                    : 'bg-slate-900/80 hover:bg-slate-800/90 border-white/10 hover:border-indigo-500/40 text-slate-300'
                }`}
              >
                <div
                  onClick={() => {
                    setTextInput(opt.text);
                    setShowEmptyWarning(false);
                    textareaRef.current?.focus();
                  }}
                  className="flex items-start gap-2 flex-1 cursor-pointer"
                >
                  <span className={`flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${opt.badgeColor}`}>
                    {opt.label}
                  </span>
                  <span className="text-[11px] leading-snug line-clamp-2">
                    {opt.text}
                  </span>
                </div>

                <button
                  type="button"
                  title="Deliver this suggestion immediately"
                  onClick={() => handleSubmitMessage(opt.text)}
                  disabled={isProcessingTurn}
                  className="flex-shrink-0 px-2 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase flex items-center gap-1 cursor-pointer transition-all hover:scale-105"
                >
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Send</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Input Controls: Speech Button + Text Input */}
      <div className="card-glass rounded-2xl p-3 border border-white/10 flex flex-col gap-2">
        <div className="flex items-start gap-2 sm:gap-3">
          {/* Big Microphone Push-to-Talk / Toggle */}
          <button
            onClick={toggleRecording}
            type="button"
            title={isRecording ? 'Click to Stop Speaking & Keep Recorded Response' : 'Click to Speak (Microphone)'}
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all cursor-pointer mt-0.5 ${
              isRecording
                ? 'bg-rose-600 hover:bg-rose-500 text-white animate-voice-pulse shadow-lg shadow-rose-500/40 ring-2 ring-rose-400'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
            }`}
          >
            {isRecording ? <MicOff className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Multi-line Response Textarea */}
          <div className="relative flex-1 min-w-0">
            <textarea
              ref={textareaRef}
              rows={2}
              value={textInput}
              onChange={(e) => {
                setTextInput(e.target.value);
                setShowEmptyWarning(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmitMessage();
                }
              }}
              disabled={isProcessingTurn}
              placeholder={
                isRecording
                  ? micVolume > 0 
                    ? `Live Transcribing... (${micVolume}%) Words stream live here`
                    : 'Listening... Speak now, words appear live here'
                  : isTranscribingAudio
                  ? 'Transcribing audio...'
                  : 'Speak into microphone or type executive response...'
              }
              className={`w-full bg-slate-950/80 text-white placeholder-slate-500 text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 pr-10 rounded-xl border transition-colors focus:outline-none resize-none min-h-[75px] sm:min-h-[90px] max-h-36 leading-relaxed box-border ${
                showEmptyWarning
                  ? 'border-amber-500 ring-1 ring-amber-500'
                  : 'border-white/10 focus:border-indigo-500'
              }`}
            />
            {textInput && !isProcessingTurn && (
              <button
                type="button"
                onClick={() => {
                  setTextInput('');
                  setTranscriptBuffer('');
                  initialSpeechTextRef.current = '';
                  setShowEmptyWarning(false);
                }}
                title="Clear input"
                className="absolute top-2.5 right-2.5 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Deliver / Submit Button */}
          <button
            onClick={() => handleSubmitMessage()}
            type="button"
            disabled={isProcessingTurn}
            className={`flex-shrink-0 px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
              hasContent && !isProcessingTurn
                ? 'bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white shadow-indigo-500/30 hover:scale-105'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-white/10'
            }`}
          >
            {isProcessingTurn || isTranscribingAudio ? (
              <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
            ) : (
              <>
                <span>Deliver</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Real-time Mic Level Bar while recording */}
        {isRecording && (
          <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/20 flex items-center justify-between text-xs animate-in fade-in">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Voice Streaming:
              </span>
              <div className="w-28 sm:w-44 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-75"
                  style={{ width: `${Math.max(8, micVolume)}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{micVolume}%</span>
            </div>
            <div className="flex items-center gap-2">
              {textInput.trim() && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-medium">
                  {textInput.split(/\s+/).filter(Boolean).length} words recognized
                </span>
              )}
              <span className="text-[11px] text-emerald-400/90 font-medium hidden sm:inline">
                ✨ Auto-inputs text · Stops automatically when you pause
              </span>
            </div>
          </div>
        )}

        {/* Empty warning banner */}
        {showEmptyWarning && (
          <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-center justify-between animate-in fade-in duration-200">
            <span>Please speak into the mic, type a response, or click one of the Pro-Framing suggestions above to deliver.</span>
            <button onClick={() => setShowEmptyWarning(false)} className="text-amber-400 underline font-semibold ml-2">Dismiss</button>
          </div>
        )}

        {/* Microphone Notice / Help */}
        {sttNotice && (
          <div className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs flex items-center justify-between animate-in fade-in duration-200">
            <span>{sttNotice}</span>
            <button onClick={() => setSttNotice(null)} className="underline ml-2">Dismiss</button>
          </div>
        )}
      </div>
    </div>
  );
};
