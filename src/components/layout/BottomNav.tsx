'use client';

import React from 'react';

export type TabType = 'roadmap' | 'practice' | 'daily-drills' | 'profile';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'roadmap' as TabType, label: 'Roadmap', icon: 'explore' },
    { id: 'practice' as TabType, label: 'Practice', icon: 'mic' },
    { id: 'daily-drills' as TabType, label: 'Daily Drills', icon: 'bolt' },
    { id: 'profile' as TabType, label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/85 backdrop-blur-xl border-t border-white/5 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
      <div className="flex justify-around items-center h-16 px-space-xs max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[44px] transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-primary font-bold shadow-[0_0_16px_rgba(192,193,255,0.25)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[24px]">
                {tab.icon}
              </span>
              <span className="font-label-sm text-label-sm">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
