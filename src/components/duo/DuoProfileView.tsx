'use client';

import React from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

interface DuoProfileViewProps {
  onOpenSettings: () => void;
  onOpenKnowledge: () => void;
}

export const DuoProfileView: React.FC<DuoProfileViewProps> = ({
  onOpenSettings,
  onOpenKnowledge,
}) => {
  const { streak, totalXp, league, gems } = useGamificationStore();

  const achievements = [
    { title: 'Crisis Tamer', desc: 'De-escalate 5 high-stakes client objections', icon: '🛡️', unlocked: true, level: 3 },
    { title: 'BLUF Virtuoso', desc: 'Deliver 10 Bottom-Line-Up-Front openings', icon: '⚡', unlocked: true, level: 2 },
    { title: 'Zero Jargon Slip', desc: 'Achieve 100% terminology score in 3 sessions', icon: '🎯', unlocked: true, level: 1 },
    { title: 'Algorithmic Master', desc: 'Explain Meta & Google AI auctions flawlessly', icon: '🧠', unlocked: false, level: 0 },
    { title: 'Obsidian Champion', desc: 'Finish in the Top 3 of the Obsidian League', icon: '👑', unlocked: false, level: 0 },
  ];

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto pb-24 space-y-6 select-none animate-in fade-in duration-200">
      {/* Profile Header Card */}
      <div className="p-6 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-lg flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-3xl bg-[#58cc02] border-b-4 border-[#46a302] flex items-center justify-center text-4xl shadow-md">
            🦉
          </div>
          <div>
            <h2 className="text-xl font-black text-white">Sahil M.</h2>
            <p className="text-xs font-bold text-slate-400">@sahil_media · Joined October 2026</p>
            <div className="flex items-center gap-3 mt-2 text-xs font-black text-slate-300">
              <span><strong className="text-white">124</strong> Followers</span>
              <span><strong className="text-white">88</strong> Following</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenSettings}
          className="p-2.5 rounded-2xl bg-[#202f36] hover:bg-[#283942] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
          title="Account Settings"
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
      </div>

      {/* Gamified Statistics Grid */}
      <div className="space-y-2">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 px-1">
          Career Statistics
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Day Streak */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">🔥</span>
            <div>
              <span className="text-xl font-black text-white block">{streak}</span>
              <span className="text-xs font-bold text-slate-400">Day Streak</span>
            </div>
          </div>

          {/* Total XP */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">⚡</span>
            <div>
              <span className="text-xl font-black text-white block">{totalXp.toLocaleString()}</span>
              <span className="text-xs font-bold text-slate-400">Total XP</span>
            </div>
          </div>

          {/* Current League */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">🏆</span>
            <div>
              <span className="text-base font-black text-white block truncate">{league}</span>
              <span className="text-xs font-bold text-slate-400">Current League</span>
            </div>
          </div>

          {/* Top 3 Finishes */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">🥇</span>
            <div>
              <span className="text-xl font-black text-white block">4</span>
              <span className="text-xs font-bold text-slate-400">Top 3 Finishes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="space-y-3">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 px-1">
          Achievement Badges
        </h3>
        <div className="space-y-2.5">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-3xl border-2 flex items-center justify-between gap-4 ${
                ach.unlocked
                  ? 'bg-[#18252b] border-[#37464f]'
                  : 'bg-[#131f24] border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-[#202f36] flex items-center justify-center text-2xl flex-shrink-0">
                  {ach.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-white truncate">
                      {ach.title}
                    </h4>
                    {ach.unlocked && (
                      <span className="text-[10px] font-black uppercase bg-[#ffc800]/20 text-[#ffc800] px-1.5 py-0.2 rounded">
                        Lvl {ach.level}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-400 truncate mt-0.5">
                    {ach.desc}
                  </p>
                </div>
              </div>

              <span className={`text-xs font-black ${ach.unlocked ? 'text-[#58cc02]' : 'text-slate-500'}`}>
                {ach.unlocked ? 'UNLOCKED' : 'LOCKED'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
