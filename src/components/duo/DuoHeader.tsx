'use client';

import React, { useState } from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useSessionStore } from '@/stores/useSessionStore';
import { soundEffects } from '@/lib/soundEffects';

interface DuoHeaderProps {
  currentTab: 'path' | 'leaderboard' | 'quests' | 'shop' | 'profile';
  onTabChange: (tab: 'path' | 'leaderboard' | 'quests' | 'shop' | 'profile') => void;
  onOpenKnowledge: () => void;
  onOpenSettings: () => void;
}

export const DuoHeader: React.FC<DuoHeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenKnowledge,
  onOpenSettings,
}) => {
  const { streak, gems, hearts, maxHearts, totalXp, league, leagueRank, refillHearts } = useGamificationStore();
  const [showStreakModal, setShowStreakModal] = useState(false);
  const [showHeartsModal, setShowHeartsModal] = useState(false);
  const [showGemsModal, setShowGemsModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-[#131f24]/95 backdrop-blur-md border-b-2 border-[#202f36] shadow-sm select-none">
        <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between gap-2">
          {/* Left: Track / Curriculum Selector */}
          <div 
            onClick={() => onTabChange('path')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] flex items-center justify-center text-white shadow-sm group-hover:brightness-105 transition-all">
              <span className="text-xl">🦉</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-wider uppercase text-[#58cc02]">
                AURA COACH
              </span>
              <span className="text-sm font-extrabold text-white flex items-center gap-1">
                Media Buyer Track
                <span className="text-xs text-slate-400">▼</span>
              </span>
            </div>
          </div>

          {/* Center / Right: Gamified Counters */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Fire Streak */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setShowStreakModal(!showStreakModal);
                setShowHeartsModal(false);
                setShowGemsModal(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#202f36] hover:bg-[#283942] border-2 border-transparent hover:border-[#ff9600]/40 transition-all cursor-pointer"
              title="Daily Practice Streak"
            >
              <span className="text-lg leading-none animate-bounce">🔥</span>
              <span className="font-black text-sm text-[#ff9600] tracking-wide">{streak}</span>
            </button>

            {/* Gems / Lingots */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setShowGemsModal(!showGemsModal);
                setShowStreakModal(false);
                setShowHeartsModal(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#202f36] hover:bg-[#283942] border-2 border-transparent hover:border-[#1cb0f6]/40 transition-all cursor-pointer"
              title="Marketing Gems Currency"
            >
              <span className="text-lg leading-none">💎</span>
              <span className="font-black text-sm text-[#1cb0f6] tracking-wide">{gems}</span>
            </button>

            {/* Hearts / Energy */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setShowHeartsModal(!showHeartsModal);
                setShowStreakModal(false);
                setShowGemsModal(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#202f36] hover:bg-[#283942] border-2 border-transparent hover:border-[#ff4b4b]/40 transition-all cursor-pointer"
              title="Practice Health / Energy"
            >
              <span className="text-lg leading-none">❤️</span>
              <span className="font-black text-sm text-[#ff4b4b] tracking-wide">
                {hearts}/{maxHearts}
              </span>
            </button>

            {/* Knowledge Base */}
            <button
              type="button"
              onClick={onOpenKnowledge}
              className="p-2 rounded-2xl bg-[#202f36] hover:bg-[#283942] text-slate-300 hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center"
              title="Marketing Knowledge Base & Formulas"
            >
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
            </button>

            {/* Settings */}
            <button
              type="button"
              onClick={onOpenSettings}
              className="p-2 rounded-2xl bg-[#202f36] hover:bg-[#283942] text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center"
              title="Audio & AI Voice Configuration"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Streak Popover */}
      {showStreakModal && (
        <div 
          onClick={() => setShowStreakModal(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl animate-bounce">🔥</span>
              <div>
                <h3 className="text-xl font-black text-white">{streak} Day Streak!</h3>
                <p className="text-xs text-slate-300 font-semibold">You're building an unstoppable habit</p>
              </div>
            </div>
            <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 flex items-center justify-between text-xs font-bold text-slate-300">
              <div className="flex items-center gap-2">
                <span>❄️</span>
                <span>Streak Freeze: Equipped</span>
              </div>
              <span className="text-[#58cc02]">Active</span>
            </div>
            <button
              type="button"
              onClick={() => setShowStreakModal(false)}
              className="btn-3d-green w-full py-3 rounded-2xl text-xs font-black"
            >
              KEEP PRACTICING
            </button>
          </div>
        </div>
      )}

      {/* Hearts Popover */}
      {showHeartsModal && (
        <div 
          onClick={() => setShowHeartsModal(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">❤️</span>
              <div>
                <h3 className="text-xl font-black text-white">{hearts} / {maxHearts} Hearts</h3>
                <p className="text-xs text-slate-300 font-semibold">Hearts allow you to complete voice drills</p>
              </div>
            </div>
            {hearts < maxHearts ? (
              <button
                type="button"
                onClick={() => {
                  refillHearts();
                  soundEffects.playSuccess();
                  setShowHeartsModal(false);
                }}
                className="btn-3d-blue w-full py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2"
              >
                <span>REFILL HEARTS FOR FREE</span>
                <span>❤️</span>
              </button>
            ) : (
              <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 text-center text-xs font-bold text-[#58cc02]">
                Your hearts are completely full!
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowHeartsModal(false)}
              className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}

      {/* Gems Popover */}
      {showGemsModal && (
        <div 
          onClick={() => setShowGemsModal(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-xs"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">💎</span>
              <div>
                <h3 className="text-xl font-black text-white">{gems} Gems</h3>
                <p className="text-xs text-slate-300 font-semibold">Spend gems in the Shop for powerups</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                onTabChange('shop');
                setShowGemsModal(false);
              }}
              className="btn-3d-gold w-full py-3 rounded-2xl text-xs font-black"
            >
              VISIT SHOP
            </button>
          </div>
        </div>
      )}
    </>
  );
};
