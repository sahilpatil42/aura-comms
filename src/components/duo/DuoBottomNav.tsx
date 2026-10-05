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
      activeColor: 'text-[#58cc02]',
      bgActive: 'bg-[#58cc02]/10',
    },
    {
      id: 'leaderboard' as DuoTabType,
      label: 'LEAGUES',
      icon: 'shield',
      activeColor: 'text-[#ffc800]',
      bgActive: 'bg-[#ffc800]/10',
    },
    {
      id: 'quests' as DuoTabType,
      label: 'QUESTS',
      icon: 'military_tech',
      activeColor: 'text-[#1cb0f6]',
      bgActive: 'bg-[#1cb0f6]/10',
      badge: hasUnclaimedQuest,
    },
    {
      id: 'shop' as DuoTabType,
      label: 'SHOP',
      icon: 'storefront',
      activeColor: 'text-[#ce82ff]',
      bgActive: 'bg-[#ce82ff]/10',
    },
    {
      id: 'profile' as DuoTabType,
      label: 'PROFILE',
      icon: 'account_circle',
      activeColor: 'text-emerald-400',
      bgActive: 'bg-emerald-400/10',
    },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-[#131f24]/95 backdrop-blur-md border-t-2 border-[#202f36] pb-[max(0.35rem,env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex justify-around items-center h-14 sm:h-16 max-w-lg mx-auto px-1 sm:px-2">
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
                isActive ? `${tab.bgActive} scale-105` : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[22px] sm:text-[26px] transition-colors leading-none ${
                    isActive ? tab.activeColor : 'text-slate-400'
                  }`}
                >
                  {tab.icon}
                </span>

                {/* Badge dot (e.g. for unclaimed quests) */}
                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1cb0f6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#1cb0f6]"></span>
                  </span>
                )}
              </div>

              <span
                className={`text-[9px] sm:text-[10px] font-black tracking-wider transition-colors truncate max-w-full leading-tight ${
                  isActive ? tab.activeColor : 'text-slate-400'
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
