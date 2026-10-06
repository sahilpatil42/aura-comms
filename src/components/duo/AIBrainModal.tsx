'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, CheckCircle2, AlertCircle, ExternalLink, X, Shield, Terminal, Zap } from 'lucide-react';
import { soundEffects } from '@/lib/soundEffects';

interface AIBrainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyUpdated?: (hasKey: boolean) => void;
}

export const AIBrainModal: React.FC<AIBrainModalProps> = ({
  isOpen,
  onClose,
  onKeyUpdated,
}) => {
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'connected' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeModel, setActiveModel] = useState<string>('gemini-1.5-flash');
  const [isServerKeyPresent, setIsServerKeyPresent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Check if key exists in localStorage or server
    const localKey = typeof window !== 'undefined' ? localStorage.getItem('AURA_GEMINI_KEY') || '' : '';
    if (localKey) {
      setApiKey(localKey);
      setStatus('connected');
    }

    // Check server key status
    fetch('/api/config/key')
      .then((res) => res.json())
      .then((data) => {
        if (data.hasKey) {
          setIsServerKeyPresent(true);
          setActiveModel(data.model || 'gemini-1.5-flash');
          if (!localKey) {
            setStatus('connected');
          }
        }
      })
      .catch(() => {});
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveAndTest = async () => {
    const trimmed = apiKey.trim();
    if (!trimmed) {
      setErrorMessage('Please enter an API key.');
      setStatus('error');
      return;
    }

    setStatus('checking');
    setErrorMessage('');
    soundEffects.playClick();

    try {
      const res = await fetch('/api/config/key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: trimmed }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setErrorMessage(data?.error || 'Invalid API key or network error.');
        soundEffects.playCorrection();
        return;
      }

      // Store in localStorage for client-side persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('AURA_GEMINI_KEY', trimmed);
      }

      setStatus('connected');
      setIsServerKeyPresent(true);
      setActiveModel(data.model || 'gemini-1.5-flash');
      soundEffects.playSuccess();
      if (onKeyUpdated) onKeyUpdated(true);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message || 'Error connecting to Gemini API.');
      soundEffects.playCorrection();
    }
  };

  const handleDisconnect = () => {
    soundEffects.playClick();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('AURA_GEMINI_KEY');
    }
    setApiKey('');
    setStatus('idle');
    setIsServerKeyPresent(false);
    if (onKeyUpdated) onKeyUpdated(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#08122c] border border-blue-400/30 p-5 sm:p-6 shadow-2xl shadow-blue-900/50 text-slate-100 overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-blue-400/20">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-md">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>AI Brain Configuration</span>
                {status === 'connected' ? (
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LLM Online
                  </span>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-sky-400" />
                    Local Engine
                  </span>
                )}
              </h2>
              <p className="text-xs text-blue-200/70">Connect Google Gemini for live, unscripted conversational intelligence</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Engine Status Cards */}
        <div className="my-4 space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            <div className={`p-3 rounded-2xl border transition-all ${
              status === 'connected' 
                ? 'bg-gradient-to-b from-indigo-950/60 to-blue-950/40 border-indigo-400/40 shadow-sm' 
                : 'bg-[#060e22]/60 border-white/10 opacity-70'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Brain className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-black text-white">Google Gemini LLM</span>
              </div>
              <p className="text-[11px] text-blue-200/70 leading-snug">
                Real-time reasoning, dynamic rebuttals, bespoke client personality responses.
              </p>
              <div className="mt-2 text-[10px] font-bold text-indigo-300 flex items-center gap-1">
                {status === 'connected' ? '✓ Currently Active' : 'Requires API Key'}
              </div>
            </div>

            <div className={`p-3 rounded-2xl border transition-all ${
              status !== 'connected'
                ? 'bg-gradient-to-b from-sky-950/60 to-blue-950/40 border-sky-400/40 shadow-sm'
                : 'bg-[#060e22]/60 border-white/10 opacity-70'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-black text-white">Contextual Semantic Brain</span>
              </div>
              <p className="text-[11px] text-blue-200/70 leading-snug">
                Parses your exact spoken words, extracts marketing concepts, instant 0ms latency.
              </p>
              <div className="mt-2 text-[10px] font-bold text-sky-300 flex items-center gap-1">
                {status !== 'connected' ? '✓ Currently Active' : 'Automatic Fallback'}
              </div>
            </div>
          </div>

          {/* API Key Input Section */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-[#060e22] border border-blue-400/20">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-slate-200 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-sky-400" />
                <span>Google Gemini API Key</span>
              </label>
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
              >
                <span>Get Free Key</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="AIzaSy..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-400/30 text-white placeholder-slate-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-sky-400 transition-colors"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-1.5 text-xs text-rose-400 font-bold mt-1">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'connected' && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold mt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Gemini LLM Connected! Full conversational brain enabled.</span>
              </div>
            )}

            {/* Terminal Instructions */}
            <div className="pt-2 border-t border-white/10 text-[11px] text-blue-200/60 space-y-1">
              <div className="flex items-center gap-1 font-bold text-slate-300">
                <Terminal className="w-3 h-3 text-sky-400" />
                <span>Or add via your terminal in one command:</span>
              </div>
              <code className="block p-1.5 rounded-lg bg-black/60 text-slate-300 font-mono text-[10px] break-all border border-white/5 select-all">
                echo "GEMINI_API_KEY=your_key_here" &gt;&gt; .env.local
              </code>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-2">
          {status === 'connected' ? (
            <button
              type="button"
              onClick={handleDisconnect}
              className="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/30 text-rose-300 text-xs font-bold transition-all cursor-pointer"
            >
              Disconnect Key
            </button>
          ) : (
            <span className="text-[11px] text-slate-400">100% Free on Google AI Studio</span>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-bold transition-all cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={handleSaveAndTest}
              disabled={status === 'checking'}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:brightness-110 active:scale-95 text-white text-xs font-black shadow-lg shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>{status === 'checking' ? 'Validating Key...' : 'Activate Gemini Brain'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
