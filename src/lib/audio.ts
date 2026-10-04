// ============================================================================
// AURA-COMMS AUDIO ENGINE: GOOGLE TTS & UNIVERSAL HARDWARE MIC CAPTURE
// Powered by Google Text-to-Speech proxy + Dual-Engine Hardware Speech Recognition
// ============================================================================

export interface VoiceCaptureSession {
  stop: () => Promise<{ transcript: string; audioBlob: Blob | null }>;
}

export interface SoothingVoiceInfo {
  id: string;
  name: string;
  gender: 'female' | 'male';
  tone: string;
  previewSample: string;
}

export const SOOTHING_VOICE_LIST: SoothingVoiceInfo[] = [
  { 
    id: 'jenny', 
    name: 'Jenny', 
    gender: 'female', 
    tone: 'Soothing, warm & conversational (Recommended)', 
    previewSample: 'Hello! I am Jenny, your client partner today. Let us review the campaign performance together.' 
  },
  { 
    id: 'andrew', 
    name: 'Andrew', 
    gender: 'male', 
    tone: 'Calm, steady & deep executive tone', 
    previewSample: 'Good morning. This is Andrew. I appreciate you taking the time to walk through our search numbers.' 
  },
  { 
    id: 'aria', 
    name: 'Aria', 
    gender: 'female', 
    tone: 'Empathetic, clear broadcast studio voice', 
    previewSample: 'Hi there, this is Aria. Let us dig into our conversion attribution and return on ad spend.' 
  },
  { 
    id: 'guy', 
    name: 'Guy', 
    gender: 'male', 
    tone: 'Relaxed, friendly & natural male voice', 
    previewSample: 'Hey team, Guy here. Can you help me understand why our cost per click shifted this week?' 
  },
  { 
    id: 'emma', 
    name: 'Emma', 
    gender: 'female', 
    tone: 'Crisp, articulate business professional', 
    previewSample: 'Hello, Emma here. Let us examine the discrepancy between our ad clicks and landing page views.' 
  },
  { 
    id: 'sonia', 
    name: 'Sonia', 
    gender: 'female', 
    tone: 'Refined, soothing British delivery', 
    previewSample: 'Good afternoon. This is Sonia. Shall we examine our media pacing across our top markets?' 
  },
];

// ---------------------------------------------------------------------------
// 1. Ultra-Soothing Neural Text-to-Speech (TTS) Engine
// ---------------------------------------------------------------------------
export class NeuralTTS {
  private static currentAudio: HTMLAudioElement | null = null;
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static isSpeakingNow: boolean = false;
  private static preferredVoice: string = 'jenny';

  public static getPreferredVoice(): string {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('AURA_SOOTHING_VOICE');
      if (stored) return stored;
    }
    return this.preferredVoice;
  }

  public static setPreferredVoice(voiceId: string): void {
    this.preferredVoice = voiceId;
    if (typeof window !== 'undefined') {
      localStorage.setItem('AURA_SOOTHING_VOICE', voiceId);
    }
  }

  public static isPlaying(): boolean {
    return this.isSpeakingNow;
  }

  public static stop(): void {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio = null;
      } catch (_) {}
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (_) {}
    }
    this.isSpeakingNow = false;
  }

  /**
   * Play speech using the ultra-soothing neural voice endpoint via /api/tts.
   * Automatically falls back to browser SpeechSynthesis if network fails.
   */
  public static async speak(
    text: string,
    options?: {
      voice?: string;
      rate?: number;
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    }
  ): Promise<void> {
    if (typeof window === 'undefined') return;

    // Stop any currently playing audio
    this.stop();

    if (!text || !text.trim()) {
      if (options?.onEnd) options.onEnd();
      return;
    }

    this.isSpeakingNow = true;
    if (options?.onStart) options.onStart();

    const selectedVoice = options?.voice || this.getPreferredVoice();

    try {
      const cleanText = text.replace(/[*_#`~\[\]]/g, '').trim();
      const ttsUrl = `/api/tts?text=${encodeURIComponent(cleanText)}&voice=${encodeURIComponent(selectedVoice)}&lang=en`;

      const audio = new Audio(ttsUrl);
      this.currentAudio = audio;

      if (options?.rate) {
        audio.playbackRate = Math.max(0.75, Math.min(1.5, options.rate));
      }

      audio.onended = () => {
        this.isSpeakingNow = false;
        this.currentAudio = null;
        if (options?.onEnd) options.onEnd();
      };

      audio.onerror = (e) => {
        console.warn('Neural TTS audio playback failed, falling back to browser synthesis:', e);
        this.currentAudio = null;
        this.fallbackBrowserSpeech(cleanText, options);
      };

      await audio.play();
    } catch (err) {
      console.warn('Neural TTS play error, using browser fallback:', err);
      this.fallbackBrowserSpeech(text, options);
    }
  }

  /**
   * Preview a voice with a soothing sample
   */
  public static async previewVoice(voiceId: string, onEnd?: () => void): Promise<void> {
    const voiceInfo = SOOTHING_VOICE_LIST.find((v) => v.id === voiceId) || SOOTHING_VOICE_LIST[0];
    await this.speak(voiceInfo.previewSample, {
      voice: voiceId,
      onEnd,
    });
  }

  private static fallbackBrowserSpeech(
    text: string,
    options?: { rate?: number; pitch?: number; onEnd?: () => void }
  ): void {
    if (!this.synth) {
      this.isSpeakingNow = false;
      if (options?.onEnd) options.onEnd();
      return;
    }

    try {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = options?.pitch ?? 0.95;
      utterance.rate = options?.rate ?? 1.05;

      const voices = this.synth.getVoices();
      const naturalVoice = voices.find(v => 
        (v.name.includes('Natural') || v.name.includes('Jenny') || v.name.includes('Aria') || v.name.includes('Google') || v.name.includes('Samantha')) &&
        v.lang.startsWith('en')
      ) || voices.find(v => v.lang.startsWith('en'));

      if (naturalVoice) utterance.voice = naturalVoice;

      utterance.onend = () => {
        this.isSpeakingNow = false;
        if (options?.onEnd) options.onEnd();
      };

      utterance.onerror = () => {
        this.isSpeakingNow = false;
        if (options?.onEnd) options.onEnd();
      };

      this.synth.speak(utterance);
    } catch (e) {
      this.isSpeakingNow = false;
      if (options?.onEnd) options.onEnd();
    }
  }
}

// Backward-compatible export alias
export const GoogleTTS = NeuralTTS;

// ---------------------------------------------------------------------------
// 2. Backward-Compatible SpeechEngine Alias
// ---------------------------------------------------------------------------
export class SpeechEngine {
  public static speak(text: string, options?: { pitch?: number; rate?: number; onEnd?: () => void; onStart?: () => void }): void {
    GoogleTTS.speak(text, options);
  }

  public static stopSpeaking(): void {
    GoogleTTS.stop();
  }

  public static isSTTSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return Boolean(
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition || 
      navigator.mediaDevices?.getUserMedia
    );
  }

  public static startListening(
    onResult: (transcript: string) => void,
    onError?: (err: string) => void,
    onEnd?: () => void
  ): { stop: () => void } {
    const engine = new UniversalMicEngine();
    let activeSession: VoiceCaptureSession | null = null;

    engine.start({
      onTranscriptUpdate: (text) => {
        onResult(text);
      },
      onAutoStop: (finalText) => {
        if (finalText) onResult(finalText);
        if (onEnd) onEnd();
      },
      onError: (err) => {
        if (onError) onError(err);
      },
    }).then((session) => {
      activeSession = session;
    }).catch((err) => {
      if (onError) onError(err?.message || 'Mic access error');
    });

    return {
      stop: () => {
        if (activeSession) {
          activeSession.stop().catch(() => {});
          activeSession = null;
        }
        if (onEnd) onEnd();
      },
    };
  }
}

// ---------------------------------------------------------------------------
// 3. Universal Hardware Mic Capture & Dual-Engine Speech Recognition
// ---------------------------------------------------------------------------
export class UniversalMicEngine {
  private stream: MediaStream | null = null;
  private audioCtx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private recognition: any = null;
  private animFrameId: number | null = null;
  private isListening = false;
  private fullTranscript = '';
  private lastAudioBlob: Blob | null = null;
  private silenceTimer: any = null;
  private hasSpoken = false;
  private lastSpokenTime = 0;
  private isAutoStopping = false;

  public getLastAudioBlob(): Blob | null {
    return this.lastAudioBlob;
  }

  public hasVoiceActivity(): boolean {
    return this.hasSpoken;
  }

  /**
   * Diagnostic test to verify microphone availability and browser capabilities
   */
  public static async testMicrophone(): Promise<{
    hasGetUserMedia: boolean;
    hasHardwareMic: boolean;
    hasWebSpeech: boolean;
    error?: string;
  }> {
    if (typeof window === 'undefined') {
      return { hasGetUserMedia: false, hasHardwareMic: false, hasWebSpeech: false };
    }

    const hasGetUserMedia = Boolean(navigator.mediaDevices?.getUserMedia);
    const hasWebSpeech = Boolean((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

    if (!hasGetUserMedia) {
      return { 
        hasGetUserMedia: false, 
        hasHardwareMic: false, 
        hasWebSpeech, 
        error: 'Browser does not support navigator.mediaDevices.getUserMedia' 
      };
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const tracks = stream.getAudioTracks();
      const hasHardwareMic = tracks.length > 0 && tracks[0].enabled;
      tracks.forEach(t => t.stop());
      return { hasGetUserMedia: true, hasHardwareMic, hasWebSpeech };
    } catch (err: any) {
      return { 
        hasGetUserMedia: true, 
        hasHardwareMic: false, 
        hasWebSpeech, 
        error: err?.message || 'Microphone access denied' 
      };
    }
  }

  /**
   * Start hardware recording + real-time speech recognition simultaneously
   * Automatically streams words live to text box and automatically stops when speech pauses
   */
  public async start(options: {
    initialText?: string;
    onVolumeChange?: (volume: number) => void;
    onTranscriptUpdate?: (transcript: string, isFinal: boolean) => void;
    onAutoStop?: (finalTranscript: string) => void;
    onError?: (err: string) => void;
    autoStopDelayMs?: number;
  }): Promise<VoiceCaptureSession | null> {
    if (typeof window === 'undefined') return null;

    this.isListening = true;
    this.audioChunks = [];
    this.hasSpoken = false;
    this.lastSpokenTime = 0;
    this.isAutoStopping = false;
    this.lastAudioBlob = null;
    if (this.silenceTimer) {
      clearTimeout(this.silenceTimer);
      this.silenceTimer = null;
    }

    const autoDelay = options.autoStopDelayMs ?? 1600; // 1.6s natural pause
    this.fullTranscript = options.initialText ? options.initialText.trim() : '';

    // Step 1: Force physical microphone stream acquisition via getUserMedia
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
        video: false,
      });
    } catch (err: any) {
      console.error('Failed to get user media stream:', err);
      const isDenied = err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError';
      const msg = isDenied
        ? 'Microphone permission blocked. Please click the lock icon in your browser address bar and set Microphone to "Allow".'
        : `Could not access microphone hardware: ${err?.message || 'Device in use'}`;
      if (options.onError) options.onError(msg);
      return null;
    }

    // Step 2: Initialize Web Audio Analyser for real-time visual VU volume metering & Voice Activity Detection
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 64;

        const source = this.audioCtx.createMediaStreamSource(this.stream);
        source.connect(this.analyser);

        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        const updateVolume = () => {
          if (!this.isListening || !this.analyser) return;
          this.analyser.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          // Scale and smooth volume (0 to 100)
          const normalized = Math.min(100, Math.round((avg / 120) * 100));
          if (options.onVolumeChange) {
            options.onVolumeChange(normalized);
          }

          // Voice Activity Detection (VAD) using audio energy
          if (normalized > 18) {
            this.hasSpoken = true;
            this.lastSpokenTime = Date.now();
            if (this.silenceTimer) {
              clearTimeout(this.silenceTimer);
              this.silenceTimer = null;
            }
          } else if (this.hasSpoken && this.lastSpokenTime > 0) {
            const silenceElapsed = Date.now() - this.lastSpokenTime;
            // If user spoke and has been silent for autoDelay, trigger auto-stop!
            if (silenceElapsed >= autoDelay && !this.isAutoStopping && this.isListening) {
              this.isAutoStopping = true;
              setTimeout(async () => {
                if (this.isListening) {
                  const result = await this.stopInternal();
                  if (options.onAutoStop) {
                    options.onAutoStop(result.transcript);
                  }
                }
              }, 50);
            }
          }

          this.animFrameId = requestAnimationFrame(updateVolume);
        };
        updateVolume();
      }
    } catch (audioErr) {
      console.warn('AudioContext volume metering notice:', audioErr);
    }

    // Step 3: Initialize MediaRecorder to guarantee raw audio capture for AI backup
    try {
      const mimeTypes = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/ogg;codecs=opus',
        'audio/mp4',
        'audio/aac',
      ];
      let selectedMime = '';
      for (const m of mimeTypes) {
        if (MediaRecorder.isTypeSupported(m)) {
          selectedMime = m;
          break;
        }
      }

      this.mediaRecorder = selectedMime
        ? new MediaRecorder(this.stream, { mimeType: selectedMime })
        : new MediaRecorder(this.stream);

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      this.mediaRecorder.start(250); // Record in 250ms chunks
    } catch (recErr) {
      console.warn('MediaRecorder init notice:', recErr);
    }

    // Step 4: Start browser Web Speech Recognition (for instant, live 2-3 word typing)
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        this.recognition = rec;

        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        rec.lang = 'en-US';

        rec.onresult = (event: any) => {
          let instanceFinal = '';
          let instanceInterim = '';

          // Loop over all recognized items to guarantee every word appears live
          for (let i = 0; i < event.results.length; ++i) {
            const res = event.results[i];
            if (res.isFinal) {
              instanceFinal += res[0].transcript + ' ';
            } else {
              instanceInterim += res[0].transcript;
            }
          }

          const currentTotal = (instanceFinal + instanceInterim).trim();
          if (currentTotal) {
            this.hasSpoken = true;
            this.lastSpokenTime = Date.now();

            const base = options.initialText ? options.initialText.trim() : '';
            const fullDisplayed = base ? `${base} ${currentTotal}` : currentTotal;
            this.fullTranscript = fullDisplayed;

            // Stream live words directly into the text box!
            if (options.onTranscriptUpdate) {
              options.onTranscriptUpdate(fullDisplayed, instanceInterim.length === 0);
            }

            // Reset speech silence timer: auto-stop after pause
            if (this.silenceTimer) clearTimeout(this.silenceTimer);
            this.silenceTimer = setTimeout(async () => {
              if (this.isListening && !this.isAutoStopping) {
                this.isAutoStopping = true;
                const result = await this.stopInternal();
                if (options.onAutoStop) {
                  options.onAutoStop(result.transcript);
                }
              }
            }, autoDelay);
          }
        };

        rec.onerror = (e: any) => {
          const errType = e?.error;
          if (errType === 'no-speech' || errType === 'aborted') return;
          console.warn('SpeechRecognition notice:', errType);
          if (errType === 'not-allowed') {
            if (options.onError) {
              options.onError('Microphone access was denied. Please allow microphone permissions.');
            }
          }
        };

        rec.onend = () => {
          // If user is still recording and not auto-stopping, restart recognition
          if (this.isListening && this.recognition && !this.isAutoStopping) {
            try {
              this.recognition.start();
            } catch (_) {}
          }
        };

        rec.start();
      } catch (sttErr) {
        console.warn('SpeechRecognition start notice:', sttErr);
      }
    }

    // Return session handle to cleanly stop recording
    return {
      stop: () => this.stopInternal(),
    };
  }

  private async stopInternal(): Promise<{ transcript: string; audioBlob: Blob | null }> {
    this.isListening = false;

    // Stop volume analyser animation frame
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

    // Stop speech recognition
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (_) {}
      this.recognition = null;
    }

    // Stop audio context
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      try {
        this.audioCtx.close();
      } catch (_) {}
      this.audioCtx = null;
    }

    // Stop MediaRecorder and produce Blob
    const audioBlob = await new Promise<Blob | null>((resolve) => {
      if (!this.mediaRecorder) {
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        const mimeType = this.mediaRecorder?.mimeType || 'audio/webm';
        const blob = new Blob(this.audioChunks, { type: mimeType });
        this.audioChunks = [];
        this.mediaRecorder = null;
        resolve(blob);
      };

      try {
        if (this.mediaRecorder.state !== 'inactive') {
          this.mediaRecorder.stop();
        } else {
          resolve(new Blob(this.audioChunks, { type: 'audio/webm' }));
        }
      } catch (_) {
        resolve(null);
      }
    });

    // Stop all media tracks to turn off the red mic indicator in browser tab
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }

    this.lastAudioBlob = audioBlob;
    return {
      transcript: this.fullTranscript.trim(),
      audioBlob,
    };
  }
}

// ---------------------------------------------------------------------------
// 4. Backward-Compatible AudioRecorder Alias
// ---------------------------------------------------------------------------
export class AudioRecorder {
  private micEngine = new UniversalMicEngine();
  private session: VoiceCaptureSession | null = null;

  public async start(onVolumeChange?: (volume: number) => void): Promise<boolean> {
    this.session = await this.micEngine.start({
      onVolumeChange,
    });
    return Boolean(this.session);
  }

  public async stop(): Promise<Blob | null> {
    if (!this.session) return null;
    const res = await this.session.stop();
    this.session = null;
    return res.audioBlob;
  }
}
