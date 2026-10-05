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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="card-glass w-full max-w-lg rounded-3xl border border-white/10 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-2xl max-h-[88dvh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Intelligence & Audio Settings
              </h2>
              <p className="text-xs text-slate-400">
                Zero-cost developer configuration for Google Gemini and browser speech
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gemini API Key */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Google AI Studio API Key (Free Tier)
            </label>
            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
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
              className="w-full bg-slate-950/90 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-500 transition-colors box-border"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            AURA-Comms has a built-in deterministic high-fidelity agency reasoning engine that works with $0 token overhead out of the box even without an API key!
          </p>
        </div>

        {/* Speech & Audio Controls */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              AI Agent Voice Selection
            </span>
            <span className="text-[10px] text-slate-400">
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
                      ? 'bg-indigo-950/60 border-indigo-500 shadow-xs'
                      : 'bg-slate-950/60 hover:bg-slate-900 border-white/5'
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
                          <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded bg-indigo-500 text-white">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 truncate max-w-[240px]">
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
                        : 'bg-slate-800 hover:bg-slate-700 border-white/10 text-indigo-400'
                    }`}
                    title={isPreviewing ? 'Stop Preview' : `Listen to ${v.name} preview`}
                  >
                    {isPreviewing ? <VolumeX className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs mt-3">
            <span className="text-slate-300">Auto-Speak Client Spoken Audio</span>
            <input
              type="checkbox"
              checked={autoSpeakClient}
              onChange={(e) => setAutoSpeakClient(e.target.checked)}
              className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Security & Database Status */}
        {/* Active Device & Mobile Calibrator */}
        <DeviceDiagnosticBanner />

        {/* Supabase Integration */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-400" />
            <div>
              <span className="text-slate-200 font-semibold block">Supabase Storage</span>
              <span className="text-[10px] text-slate-400">
                {isSupabaseConfigured ? 'Connected with Row-Level Security' : 'Local In-Memory / Safe Sandbox Mode'}
              </span>
            </div>
          </div>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
            isSupabaseConfigured ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
          }`}>
            {isSupabaseConfigured ? 'Active' : 'Offline Mode'}
          </span>
        </div>


        {/* Actions */}
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 cursor-pointer"
          >
            {isSaved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <ShieldCheck className="w-3.5 h-3.5" />}
            <span>{isSaved ? 'Settings Saved' : 'Save Preferences'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
