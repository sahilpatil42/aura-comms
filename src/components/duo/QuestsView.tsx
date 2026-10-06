'use client';

import React from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

export const QuestsView: React.FC = () => {
  const { quests, claimQuest } = useGamificationStore();

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto pb-28 space-y-6 animate-in fade-in duration-200">
      {/* Monthly Quest Challenge Hero */}
      <div className="w-full bg-gradient-to-tr from-[#1e3a8a]/90 via-[#2563eb]/80 to-[#38bdf8]/75 border border-blue-300/30 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden backdrop-blur-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-4xl shadow-md backdrop-blur-sm">
            🎯
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider bg-black/25 px-2.5 py-0.5 rounded-full border border-white/15">
              OCTOBER CHALLENGE
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1 drop-shadow-sm">
              Executive CMO Badge
            </h2>
            <p className="text-xs font-semibold text-blue-100 mt-0.5">
              Complete 20 crisis drills this month to unlock the exclusive badge.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 pt-3 border-t border-white/20">
          <div className="flex items-center justify-between text-xs font-black mb-1.5">
            <span>Progress: 14 / 20 Quests</span>
            <span>70%</span>
          </div>
          <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
            <div className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full w-[70%] shadow-sm" />
          </div>
        </div>
      </div>

      {/* Daily Quests List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-blue-200">
            Daily Marketing Quests
          </h3>
          <span className="text-xs font-semibold text-blue-300/60">
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
                className="p-4 rounded-3xl bg-[#09132c]/85 backdrop-blur-xl border border-blue-400/20 shadow-lg flex items-center justify-between gap-4 ring-1 ring-white/10"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                      quest.claimed
                        ? 'bg-[#08122a] text-blue-300/40'
                        : isFinished
                        ? 'bg-gradient-to-tr from-blue-600 to-sky-400 text-white shadow-md'
                        : 'bg-[#0c1836] text-sky-400 border border-blue-400/20'
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
                    <p className="text-xs font-semibold text-blue-200/70 truncate mt-0.5">
                      {quest.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-32 sm:w-48 h-2 bg-[#060c1e] rounded-full overflow-hidden border border-white/10 shadow-inner">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 transition-all shadow-sm"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-black text-blue-300/70">
                        {quest.progress}/{quest.total}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Claim Button / Reward Badge */}
                <div className="flex-shrink-0">
                  {quest.claimed ? (
                    <span className="text-xs font-black text-sky-300 bg-sky-500/15 border border-sky-400/25 px-3 py-1.5 rounded-xl">
                      ✓ Claimed
                    </span>
                  ) : isFinished ? (
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playXpFanfare();
                        claimQuest(quest.id);
                      }}
                      className="btn-3d-blue px-4 py-2 text-xs font-black rounded-xl cursor-pointer"
                    >
                      CLAIM
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 bg-[#0c1836]/70 border border-blue-400/15 px-2.5 py-1 rounded-xl">
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
