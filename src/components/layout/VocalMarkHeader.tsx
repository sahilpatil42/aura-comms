'use client';

import React from 'react';
import { useSessionStore } from '@/stores/useSessionStore';

interface VocalMarkHeaderProps {
  currentTab: 'roadmap' | 'practice' | 'daily-drills' | 'profile';
  onTabChange: (tab: 'roadmap' | 'practice' | 'daily-drills' | 'profile') => void;
  onOpenProfile: () => void;
}

export const VocalMarkHeader: React.FC<VocalMarkHeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenProfile,
}) => {
  const { currentStage, setApiKeyModalOpen } = useSessionStore();

  const getTitle = () => {
    if (currentTab === 'roadmap') return 'Roadmap';
    if (currentTab === 'practice') return `Stage ${currentStage}: Roleplay`;
    if (currentTab === 'daily-drills') return 'Daily Drills';
    return 'Executive Profile';
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_8px_rgba(0,0,0,0.12)] pt-safe">
      <div className="h-16 px-margin max-w-5xl mx-auto flex items-center justify-between gap-space-sm">
        {/* Left: Brand Logo & Title */}
        <div 
          onClick={() => onTabChange('roadmap')}
          className="flex items-center gap-space-sm cursor-pointer min-w-0"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-secondary-container to-primary flex items-center justify-center text-on-primary font-black shadow-md flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight truncate">
            {getTitle()}
          </span>
        </div>

        {/* Right: Streak, Energy, Profile */}
        <div className="flex items-center gap-space-xs flex-shrink-0">
          {/* Streak */}
          <div className="flex items-center gap-1 bg-surface-container-high/90 px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(208,188,255,0.1)] border border-white/5">
            <span className="text-sm leading-none select-none">🔥</span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">14d</span>
          </div>

          {/* XP */}
          <div className="flex items-center gap-1 bg-surface-container-high/90 px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(76,215,246,0.12)] border border-white/5">
            <span className="text-sm leading-none select-none text-tertiary">⚡</span>
            <span className="font-label-sm text-label-sm text-tertiary font-semibold">2.45k</span>
          </div>

          {/* Settings / API Key Button */}
          <button
            onClick={() => setApiKeyModalOpen(true)}
            title="Speech & AI Configuration"
            className="flex items-center justify-center p-1.5 rounded-full bg-surface-container-high/90 hover:bg-surface-container-highest border border-white/5 text-tertiary transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">key</span>
          </button>

          {/* Profile / Settings Button */}
          <button
            onClick={onOpenProfile}
            title="Executive Profile & Settings"
            className="relative flex items-center justify-center p-0.5 rounded-full hover:ring-2 hover:ring-primary/40 transition-all ml-0.5 min-w-[32px] min-h-[32px] cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-on-primary text-xs font-bold shadow-md">
              SM
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
