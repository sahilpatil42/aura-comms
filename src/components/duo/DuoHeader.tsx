'use client';

import React, { useState } from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { useSessionStore } from '@/stores/useSessionStore';
import { soundEffects } from '@/lib/soundEffects';
import { AD_PLATFORMS, getPlatformById, AdPlatformInfo } from '@/data/adPlatforms';

interface DuoHeaderProps {
  currentTab: 'path' | 'leaderboard' | 'quests' | 'shop' | 'profile';
  onTabChange: (tab: 'path' | 'leaderboard' | 'quests' | 'shop' | 'profile') => void;
  onOpenSettings: () => void;
}

export const DuoHeader: React.FC<DuoHeaderProps> = ({
  currentTab,
  onTabChange,
  onOpenSettings,
}) => {
  const { 
    streak, 
    gems, 
    hearts, 
    maxHearts, 
    userAvatar,
    userAvatarColor,
    selectedPlatform,
    setSelectedPlatform,
    activeTrackTitle,
    setActiveTrack,
    refillHearts
  } = useGamificationStore();
  const { setKnowledgeBaseModalOpen } = useSessionStore();

  const [showStreakModal, setShowStreakModal] = useState(false);
  const [showHeartsModal, setShowHeartsModal] = useState(false);
  const [showGemsModal, setShowGemsModal] = useState(false);
  const [showPlatformModal, setShowPlatformModal] = useState(false);

  const currentPlatform = getPlatformById(selectedPlatform || 'google-ads');

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-[#081024]/75 backdrop-blur-2xl border-b border-blue-400/15 shadow-lg shadow-blue-950/40 select-none pt-[env(safe-area-inset-top,0px)]">
        <div className="max-w-4xl mx-auto h-14 sm:h-16 px-2.5 sm:px-4 flex items-center justify-between gap-2">
          {/* Left: Avatar (Goes to Profile) + Ad Platform Channel Switcher */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Mascot / User Avatar Button -> Navigates to Profile Screen */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                onTabChange('profile');
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-white shadow-sm hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer overflow-hidden border-2 border-white/20 hover:border-sky-400/60"
              style={{
                backgroundColor: userAvatarColor || '#2563eb',
              }}
              title="Profile & Change Picture"
            >
              {userAvatar && (userAvatar.startsWith('data:image') || userAvatar.startsWith('http')) ? (
                <img src={userAvatar} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-lg sm:text-xl select-none">{userAvatar || '🦉'}</span>
              )}
            </button>

            {/* Ad Platform Channel Switcher Button */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setShowPlatformModal(true);
              }}
              className="flex items-center gap-2 cursor-pointer group/platform hover:opacity-95 transition-all p-1.5 rounded-2xl hover:bg-blue-500/10 border border-blue-400/15"
              title="Click to Switch Ad Platform & Curriculum"
            >
              <div 
                className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0 shadow-xs backdrop-blur-md"
                style={{ backgroundColor: currentPlatform.accentBg, border: `1.5px solid ${currentPlatform.brandColor}` }}
              >
                <span>{currentPlatform.icon}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-black tracking-wider uppercase leading-none whitespace-nowrap" style={{ color: currentPlatform.brandColor }}>
                  {currentPlatform.badge}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1 whitespace-nowrap leading-tight mt-0.5 group-hover/platform:text-[#38bdf8] transition-colors">
                  <span>{currentPlatform.name}</span>
                  <span className="text-[10px] text-blue-300/70 group-hover/platform:text-[#38bdf8] group-hover/platform:translate-y-0.5 transition-transform">▼</span>
                </span>
              </div>
            </button>
          </div>

          {/* Right: Gamified Counters with Frosted Glassmorphism */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Fire Streak */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setShowStreakModal(!showStreakModal);
                setShowHeartsModal(false);
                setShowGemsModal(false);
              }}
              className="flex items-center gap-0.5 sm:gap-1.5 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-[#0d1b3a]/60 hover:bg-[#132754]/80 backdrop-blur-md border border-amber-400/25 hover:border-amber-400/50 transition-all cursor-pointer shadow-xs"
              title="Daily Practice Streak"
            >
              <span className="text-sm sm:text-lg leading-none animate-bounce">🔥</span>
              <span className="font-black text-[11px] sm:text-sm text-[#fbbf24] tracking-wide">{streak}</span>
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
              className="flex items-center gap-0.5 sm:gap-1.5 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-[#0d1b3a]/60 hover:bg-[#132754]/80 backdrop-blur-md border border-sky-400/25 hover:border-sky-400/50 transition-all cursor-pointer shadow-xs"
              title="Marketing Gems Currency"
            >
              <span className="text-sm sm:text-lg leading-none">💎</span>
              <span className="font-black text-[11px] sm:text-sm text-[#38bdf8] tracking-wide">{gems}</span>
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
              className="flex items-center gap-0.5 sm:gap-1.5 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-[#0d1b3a]/60 hover:bg-[#132754]/80 backdrop-blur-md border border-rose-400/25 hover:border-rose-400/50 transition-all cursor-pointer shadow-xs"
              title="Practice Health / Energy"
            >
              <span className="text-sm sm:text-lg leading-none">❤️</span>
              <span className="font-black text-[11px] sm:text-sm text-[#f87171] tracking-wide">
                {hearts}/{maxHearts}
              </span>
            </button>

            {/* Knowledge Playbooks */}
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setKnowledgeBaseModalOpen(true);
              }}
              className="p-1.5 sm:p-2 rounded-2xl bg-[#0d1b3a]/60 hover:bg-[#132754]/80 backdrop-blur-md text-sky-400 hover:text-sky-300 transition-all cursor-pointer flex items-center justify-center border border-blue-400/20 shadow-xs"
              title="Platform Knowledge Base & Playbooks"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">menu_book</span>
            </button>

            {/* Settings */}
            <button
              type="button"
              onClick={onOpenSettings}
              className="p-1.5 sm:p-2 rounded-2xl bg-[#0d1b3a]/60 hover:bg-[#132754]/80 backdrop-blur-md text-blue-200 hover:text-white transition-all cursor-pointer flex items-center justify-center border border-blue-400/20 shadow-xs"
              title="Audio & AI Voice Configuration"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* AD PLATFORM CHANNEL SWITCHER MODAL (Frosted Glassmorphism) */}
      {showPlatformModal && (
        <div 
          onClick={() => setShowPlatformModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#09122a]/92 backdrop-blur-2xl border-2 border-blue-400/25 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-blue-950/90 space-y-4 animate-in fade-in zoom-in-95 duration-150 max-h-[90dvh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                  Ad Platform Specializations
                </span>
                <h3 className="text-xl font-black text-white">Choose Your Advertising Channel</h3>
                <p className="text-xs text-blue-200/70 mt-0.5">
                  Select a platform to load 50+ specialized roleplays, live metrics, and real campaign scenarios.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPlatformModal(false)}
                className="p-1.5 text-blue-300 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {AD_PLATFORMS.map((platform) => {
                const isActive = (selectedPlatform || 'google-ads') === platform.id;
                return (
                  <div
                    key={platform.id}
                    onClick={() => {
                      setSelectedPlatform(platform.id);
                      setActiveTrack(platform.id, platform.name);
                      soundEffects.playSuccess();
                      setShowPlatformModal(false);
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 text-left ${
                      isActive 
                        ? 'bg-blue-600/20 border-sky-400 shadow-lg shadow-blue-500/20 ring-1 ring-sky-400/30' 
                        : 'bg-[#0d1b3a]/60 hover:bg-[#132754]/80 backdrop-blur-md border-blue-400/15 hover:border-blue-400/35'
                    }`}
                  >
                    <div 
                      className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm"
                      style={{ 
                        backgroundColor: platform.accentBg, 
                        border: `1.5px solid ${platform.brandColor}` 
                      }}
                    >
                      {platform.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-sm font-black text-white truncate">{platform.name}</h4>
                        {isActive ? (
                          <span className="text-[9px] font-black uppercase text-[#38bdf8] bg-sky-500/20 px-2 py-0.5 rounded-full flex items-center gap-0.5 flex-shrink-0 border border-sky-400/30">
                            <span>✓</span>
                            <span>ACTIVE</span>
                          </span>
                        ) : (
                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-blue-200/80 flex-shrink-0">
                            {platform.totalLessons}+ Lessons
                          </span>
                        )}
                      </div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wide block mt-0.5" style={{ color: platform.brandColor }}>
                        {platform.badge}
                      </span>
                      <p className="text-[11px] text-blue-200/80 line-clamp-2 mt-1 leading-snug">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowPlatformModal(false)}
              className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* Streak Popover (Frosted Glass) */}
      {showStreakModal && (
        <div 
          onClick={() => setShowStreakModal(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-md select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#09122a]/92 backdrop-blur-2xl border-2 border-blue-400/25 rounded-3xl p-6 shadow-2xl shadow-blue-950/80 space-y-4 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl animate-bounce">🔥</span>
              <div>
                <h3 className="text-xl font-black text-white">{streak} Day Streak!</h3>
                <p className="text-xs text-blue-200/70 font-semibold">You're building an unstoppable habit</p>
              </div>
            </div>
            <div className="p-3 bg-[#0e1c3c]/70 rounded-2xl border border-blue-400/15 flex items-center justify-between text-xs font-bold text-blue-200">
              <div className="flex items-center gap-2">
                <span>❄️</span>
                <span>Streak Freeze: Equipped</span>
              </div>
              <span className="text-[#38bdf8]">Active</span>
            </div>
            <button
              type="button"
              onClick={() => setShowStreakModal(false)}
              className="btn-3d-blue w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
            >
              KEEP PRACTICING
            </button>
          </div>
        </div>
      )}

      {/* Hearts Popover (Frosted Glass) */}
      {showHeartsModal && (
        <div 
          onClick={() => setShowHeartsModal(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-md select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#09122a]/92 backdrop-blur-2xl border-2 border-blue-400/25 rounded-3xl p-6 shadow-2xl shadow-blue-950/80 space-y-4 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">❤️</span>
              <div>
                <h3 className="text-xl font-black text-white">{hearts} / {maxHearts} Hearts</h3>
                <p className="text-xs text-blue-200/70 font-semibold">Hearts allow you to complete voice drills</p>
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
                className="btn-3d-blue w-full py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REFILL HEARTS FOR FREE</span>
                <span>❤️</span>
              </button>
            ) : (
              <div className="p-3 bg-[#0e1c3c]/70 rounded-2xl border border-blue-400/15 text-center text-xs font-bold text-[#38bdf8]">
                Your hearts are completely full!
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowHeartsModal(false)}
              className="btn-3d-neutral w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        </div>
      )}

      {/* Gems Popover (Frosted Glass) */}
      {showGemsModal && (
        <div 
          onClick={() => setShowGemsModal(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-md select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#09122a]/92 backdrop-blur-2xl border-2 border-blue-400/25 rounded-3xl p-6 shadow-2xl shadow-blue-950/80 space-y-4 animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">💎</span>
              <div>
                <h3 className="text-xl font-black text-white">{gems} Gems</h3>
                <p className="text-xs text-blue-200/70 font-semibold">Spend gems in the Shop for powerups</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                onTabChange('shop');
                setShowGemsModal(false);
              }}
              className="btn-3d-gold w-full py-3 rounded-2xl text-xs font-black cursor-pointer"
            >
              VISIT SHOP
            </button>
          </div>
        </div>
      )}
    </>
  );
};
