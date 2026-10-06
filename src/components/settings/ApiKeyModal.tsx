'use client';

import React, { useState, useEffect } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { isSupabaseConfigured } from '@/lib/supabase';
import { DeviceDiagnosticBanner } from '@/components/layout/DeviceDiagnosticBanner';
import { SOOTHING_VOICE_LIST, NeuralTTS } from '@/lib/audio';
import { 
  Key, 
  X, 
  Check, 
  ExternalLink, 
  Volume2, 
  VolumeX,
  Play,
  Database, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const { autoSpeakClient, setAutoSpeakClient } = useSessionStore();
  const [apiKey, setApiKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [voiceRate, setVoiceRate] = useState(1.05);
  const [voicePitch, setVoicePitch] = useState(0.95);
  const [selectedVoice, setSelectedVoice] = useState(() => NeuralTTS.getPreferredVoice());
  const [previewVoiceId, setPreviewVoiceId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedKey = localStorage.getItem('AURA_GEMINI_KEY') || '';
      setApiKey(storedKey);
      setSelectedVoice(NeuralTTS.getPreferredVoice());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('AURA_GEMINI_KEY', apiKey.trim());
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#040817]/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#09132c]/95 backdrop-blur-2xl border border-blue-400/25 rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-[0_20px_60px_rgba(3,7,24,0.7)] ring-1 ring-white/10 max-h-[88dvh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-blue-400/15 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-400/30 text-sky-400 shadow-sm">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Intelligence & Audio Settings
              </h2>
              <p className="text-xs text-blue-200/70">
                Zero-cost developer configuration for Google Gemini and browser speech
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-blue-900/40 text-blue-300/60 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gemini API Key */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-blue-200/80">
              Google AI Studio API Key (Free Tier)
            </label>
            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium"
            >
              Get Free Key <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Paste AI Studio Key (or leave blank for high-fidelity fallback)..."
              className="w-full bg-[#081226]/80 text-white placeholder-blue-300/40 text-xs px-4 py-3 rounded-xl border border-blue-400/20 focus:outline-none focus:border-sky-400 transition-colors box-border"
            />
          </div>
          <p className="text-[11px] text-blue-200/60">
            AURA-Comms has a built-in deterministic high-fidelity agency reasoning engine that works with $0 token overhead out of the box even without an API key!
          </p>
        </div>

        {/* Speech & Audio Controls */}
        <div className="space-y-3 pt-3 border-t border-blue-400/15">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200/80 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-sky-400" />
              AI Agent Voice Selection
            </span>
            <span className="text-[10px] text-blue-300/60">
              Only selected agent speaks
            </span>
          </div>

          {/* Voice List */}
          <div className="space-y-2">
            {SOOTHING_VOICE_LIST.map((v) => {
              const isSelected = selectedVoice === v.id;
              const isPreviewing = previewVoiceId === v.id;

              return (
                <div
                  key={v.id}
                  onClick={() => {
                    NeuralTTS.stop();
                    setPreviewVoiceId(null);
                    NeuralTTS.setPreferredVoice(v.id);
                    setSelectedVoice(v.id);
                  }}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                    isSelected
                      ? 'bg-blue-600/20 border-sky-400/60 shadow-xs'
                      : 'bg-[#081226]/80 hover:bg-[#0c1836] border-blue-400/15'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base flex-shrink-0">
                      {v.gender === 'female' ? '👩' : '👨'}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">{v.name}</span>
                        {isSelected && (
                          <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded bg-sky-500 text-white">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-blue-200/60 truncate max-w-[240px]">
                        {v.tone}
                      </p>
                    </div>
                  </div>

                  {/* Preview Voice Button */}
                  <button
                    type="button"
                    onClick={async (e) => {
                      e.stopPropagation();
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
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer flex-shrink-0 ${
                      isPreviewing
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse'
                        : 'bg-blue-950/60 hover:bg-blue-900 border-blue-400/20 text-sky-400'
                    }`}
                    title={isPreviewing ? 'Stop Preview' : `Listen to ${v.name} preview`}
                  >
                    {isPreviewing ? <VolumeX className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#081226]/80 border border-blue-400/15 text-xs mt-3">
            <span className="text-blue-100/80">Auto-Speak Client Spoken Audio</span>
            <input
              type="checkbox"
              checked={autoSpeakClient}
              onChange={(e) => setAutoSpeakClient(e.target.checked)}
              className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Security & Database Status */}
        {/* Active Device & Mobile Calibrator */}
        <DeviceDiagnosticBanner />

        {/* Supabase Integration */}
        <div className="p-3.5 rounded-xl bg-[#081226]/80 border border-blue-400/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-sky-400" />
            <div>
              <span className="text-white font-semibold block">Supabase Storage</span>
              <span className="text-[10px] text-blue-200/60">
                {isSupabaseConfigured ? 'Connected with Row-Level Security' : 'Local In-Memory / Safe Sandbox Mode'}
              </span>
            </div>
          </div>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
            isSupabaseConfigured ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30' : 'bg-blue-950/60 text-blue-300/60 border border-blue-400/15'
          }`}>
            {isSupabaseConfigured ? 'Active' : 'Offline Mode'}
          </span>
        </div>

        {/* Actions */}
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0c1836] hover:bg-[#13234d] border border-blue-400/20 text-blue-200 text-xs font-semibold cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="btn-3d-blue flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-white text-xs font-bold cursor-pointer"
          >
            {isSaved ? <Check className="w-3.5 h-3.5 text-sky-200" /> : <ShieldCheck className="w-3.5 h-3.5" />}
            <span>{isSaved ? 'Settings Saved' : 'Save Preferences'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
