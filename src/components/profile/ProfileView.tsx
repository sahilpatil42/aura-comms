'use client';

import React, { useState, useEffect } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { isSupabaseConfigured } from '@/lib/supabase';

interface ProfileViewProps {
  onOpenFeeds: () => void;
  onOpenGlossary: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onOpenFeeds,
  onOpenGlossary,
}) => {
  const { autoSpeakClient, setAutoSpeakClient } = useSessionStore();
  const [apiKey, setApiKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [voiceRate, setVoiceRate] = useState(1.05);
  const [voicePitch, setVoicePitch] = useState(0.95);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('AURA_GEMINI_KEY') || '';
      setApiKey(stored);
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('AURA_GEMINI_KEY', apiKey.trim());
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }
  };

  return (
    <div className="flex flex-col w-full gap-y-6 max-w-lg mx-auto pb-12">
      {/* Profile Header Card */}
      <div className="flex items-center gap-4 bg-surface-container-high/70 backdrop-blur-md p-5 rounded-3xl border border-white/5 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-secondary-container to-primary flex items-center justify-center text-on-primary text-xl font-black shadow-lg">
          SM
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="font-headline-sm text-on-surface font-extrabold">Sahil (Media Lead)</h2>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary">
              LVL 7
            </span>
          </div>
          <p className="text-xs text-on-surface-variant font-medium">Senior Growth Marketer · Performance Agency</p>
          <span className="text-[11px] text-tertiary font-semibold mt-1">820 / 1,000 XP to Lead Strategist</span>
        </div>
      </div>

      {/* Quick Performance Metrics */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-surface-container/60 border border-white/5">
          <span className="text-xl font-extrabold text-on-surface">94%</span>
          <span className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">Clarity Score</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-surface-container/60 border border-white/5">
          <span className="text-xl font-extrabold text-tertiary">0.8</span>
          <span className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">Fillers / Min</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-surface-container/60 border border-white/5">
          <span className="text-xl font-extrabold text-secondary">Top 5%</span>
          <span className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">Cohort Rank</span>
        </div>
      </div>

      {/* Agency Intelligence Tools */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={onOpenFeeds}
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container/80 hover:bg-surface-container-high border border-white/5 text-center transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px] text-tertiary">rss_feed</span>
          <span className="font-label-sm text-on-surface font-bold mt-1">Feeds</span>
          <span className="text-[10px] text-on-surface-variant">Live Signals</span>
        </button>

        <button
          onClick={onOpenGlossary}
          className="flex flex-col items-center justify-center p-3 rounded-2xl bg-surface-container/80 hover:bg-surface-container-high border border-white/5 text-center transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px] text-secondary">menu_book</span>
          <span className="font-label-sm text-on-surface font-bold mt-1">Playbooks</span>
          <span className="text-[10px] text-on-surface-variant">BLUF Diction</span>
        </button>
      </div>

      {/* Google AI Studio Configuration */}
      <div className="p-5 rounded-3xl bg-surface-container/70 border border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-primary">key</span>
            <span className="font-label-md text-on-surface font-bold uppercase tracking-wider">
              Google AI Studio Key
            </span>
          </div>
          <a
            href="https://aistudio.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-tertiary hover:underline font-semibold"
          >
            Get Free Key ↗
          </a>
        </div>

        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Paste Gemini API key (optional for online AI speech)..."
          className="w-full bg-surface-container-lowest text-on-surface text-xs p-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-primary transition-colors box-border"
        />

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <span className="text-[11px] text-on-surface-variant break-words">
            {apiKey ? 'Custom Gemini Key Configured' : 'Running on High-Fidelity Local Engine'}
          </span>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-bold text-xs shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            {isSaved ? 'Saved ✓' : 'Save'}
          </button>
        </div>
      </div>

      {/* Voice Synthesis Settings */}
      <div className="p-5 rounded-3xl bg-surface-container/70 border border-white/5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-secondary">tune</span>
          <span className="font-label-md text-on-surface font-bold uppercase tracking-wider">
            Audio Voice Engine
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-on-surface font-medium">Auto-Speak Client Responses</span>
          <input
            type="checkbox"
            checked={autoSpeakClient}
            onChange={(e) => setAutoSpeakClient(e.target.checked)}
            className="w-4 h-4 accent-primary rounded cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs pt-1">
          <div className="space-y-1">
            <span className="text-on-surface-variant text-[11px]">Speed: {voiceRate}x</span>
            <input
              type="range"
              min="0.8"
              max="1.3"
              step="0.05"
              value={voiceRate}
              onChange={(e) => setVoiceRate(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
          </div>
          <div className="space-y-1">
            <span className="text-on-surface-variant text-[11px]">Pitch: {voicePitch}</span>
            <input
              type="range"
              min="0.7"
              max="1.2"
              step="0.05"
              value={voicePitch}
              onChange={(e) => setVoicePitch(parseFloat(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>
      </div>

      {/* Security & Cloud Database */}
      <div className="p-4 rounded-2xl bg-surface-container-lowest border border-white/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[20px] text-primary">security</span>
          <div>
            <span className="text-on-surface font-semibold block">Supabase Storage</span>
            <span className="text-[10px] text-on-surface-variant">
              {isSupabaseConfigured ? 'Connected with Row-Level Security' : 'Local In-Memory Sandbox'}
            </span>
          </div>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
          isSupabaseConfigured ? 'bg-emerald-500/20 text-emerald-300' : 'bg-surface-variant text-on-surface-variant'
        }`}>
          {isSupabaseConfigured ? 'Active' : 'Offline Mode'}
        </span>
      </div>
    </div>
  );
};
