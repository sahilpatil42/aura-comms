'use client';

import React from 'react';
import { soundEffects } from '@/lib/soundEffects';

export type DuoTabType = 'path' | 'leaderboard' | 'quests' | 'shop' | 'profile';

interface DuoBottomNavProps {
  activeTab: DuoTabType;
  onTabChange: (tab: DuoTabType) => void;
  hasUnclaimedQuest?: boolean;
}

export const DuoBottomNav: React.FC<DuoBottomNavProps> = ({
  activeTab,
  onTabChange,
  hasUnclaimedQuest = true,
}) => {
  const tabs = [
    {
      id: 'path' as DuoTabType,
      label: 'LEARN',
      icon: 'map',
      activeColor: 'text-[#38bdf8]',
      bgActive: 'bg-sky-500/15 border border-sky-400/30 shadow-md shadow-sky-500/20',
    },
    {
      id: 'leaderboard' as DuoTabType,
      label: 'LEAGUES',
      icon: 'shield',
      activeColor: 'text-[#fbbf24]',
      bgActive: 'bg-amber-500/15 border border-amber-400/30 shadow-md shadow-amber-500/20',
    },
    {
      id: 'quests' as DuoTabType,
      label: 'QUESTS',
      icon: 'military_tech',
      activeColor: 'text-[#60a5fa]',
      bgActive: 'bg-blue-500/15 border border-blue-400/30 shadow-md shadow-blue-500/20',
      badge: hasUnclaimedQuest,
    },
    {
      id: 'shop' as DuoTabType,
      label: 'SHOP',
      icon: 'storefront',
      activeColor: 'text-[#a78bfa]',
      bgActive: 'bg-purple-500/15 border border-purple-400/30 shadow-md shadow-purple-500/20',
    },
    {
      id: 'profile' as DuoTabType,
      label: 'PROFILE',
      icon: 'account_circle',
      activeColor: 'text-sky-300',
      bgActive: 'bg-sky-500/15 border border-sky-400/30 shadow-md shadow-sky-500/20',
    },
  ];

  return (
    <nav className="fixed bottom-2 sm:bottom-4 inset-x-2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40 bg-[#081024]/85 backdrop-blur-2xl border border-blue-400/20 pb-[max(0.2rem,env(safe-area-inset-bottom,0px))] rounded-3xl shadow-[0_12px_40px_rgba(2,8,23,0.8),0_0_25px_rgba(56,189,248,0.12)] max-w-lg w-full">
      <div className="flex justify-around items-center h-14 sm:h-16 px-1 sm:px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playClick();
                onTabChange(tab.id);
              }}
              className={`relative flex flex-col items-center justify-center gap-0.5 py-1 px-1.5 sm:px-3 rounded-2xl transition-all duration-150 cursor-pointer min-w-0 flex-1 max-w-[76px] ${
                isActive ? `${tab.bgActive} scale-105` : 'text-blue-300/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[22px] sm:text-[26px] transition-colors leading-none ${
                    isActive ? tab.activeColor : 'text-blue-300/60'
                  }`}
                >
                  {tab.icon}
                </span>

                {/* Badge dot */}
                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#38bdf8]"></span>
                  </span>
                )}
              </div>

              <span
                className={`text-[9px] sm:text-[10px] font-black tracking-wider transition-colors truncate max-w-full leading-tight ${
                  isActive ? tab.activeColor : 'text-blue-300/60'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
