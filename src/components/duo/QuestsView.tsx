'use client';

import React from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

export const QuestsView: React.FC = () => {
  const { quests, claimQuest } = useGamificationStore();

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto pb-28 space-y-6 animate-in fade-in duration-200">
      {/* Monthly Quest Challenge Hero */}
      <div className="w-full bg-gradient-to-tr from-[#1cb0f6] to-[#0091d9] border-b-4 border-[#0074b0] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-4xl shadow-md">
            🎯
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded-full">
              OCTOBER CHALLENGE
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1">
              Executive CMO Badge
            </h2>
            <p className="text-xs font-bold text-white/90 mt-0.5">
              Complete 20 crisis drills this month to unlock the exclusive badge.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 pt-3 border-t border-white/15">
          <div className="flex items-center justify-between text-xs font-black mb-1.5">
            <span>Progress: 14 / 20 Quests</span>
            <span>70%</span>
          </div>
          <div className="w-full h-3 bg-black/25 rounded-full overflow-hidden p-0.5">
            <div className="h-full bg-[#ffc800] rounded-full w-[70%]" />
          </div>
        </div>
      </div>

      {/* Daily Quests List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-300">
            Daily Marketing Quests
          </h3>
          <span className="text-xs font-bold text-slate-400">
            Resets in 18 hours
          </span>
        </div>

        <div className="space-y-3">
          {quests.map((quest) => {
            const isFinished = quest.progress >= quest.total;
            const percent = Math.min(100, Math.round((quest.progress / quest.total) * 100));

            return (
              <div
                key={quest.id}
                className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-md flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                      quest.claimed
                        ? 'bg-[#202f36] text-slate-500'
                        : isFinished
                        ? 'bg-[#58cc02] text-white shadow-sm'
                        : 'bg-[#202f36] text-[#1cb0f6]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {quest.icon}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-black text-white truncate">
                      {quest.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 truncate mt-0.5">
                      {quest.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-32 sm:w-48 h-2 bg-[#131f24] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#58cc02] transition-all"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-400">
                        {quest.progress}/{quest.total}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Claim Button / Reward Badge */}
                <div className="flex-shrink-0">
                  {quest.claimed ? (
                    <span className="text-xs font-black text-[#58cc02] bg-[#58cc02]/10 px-3 py-1.5 rounded-xl">
                      ✓ Claimed
                    </span>
                  ) : isFinished ? (
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playXpFanfare();
                        claimQuest(quest.id);
                      }}
                      className="btn-3d-green px-4 py-2 text-xs font-black rounded-xl cursor-pointer"
                    >
                      CLAIM
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#ffc800] bg-[#202f36] px-2.5 py-1 rounded-xl">
                      <span>⚡ +{quest.xpReward}</span>
                      <span>💎 +{quest.gemReward}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
