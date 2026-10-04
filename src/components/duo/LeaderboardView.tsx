'use client';

import React from 'react';
import { useGamificationStore, LeaderboardUser } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

export const LeaderboardView: React.FC = () => {
  const { totalXp, streak, league, leagueRank } = useGamificationStore();

  const competitors: LeaderboardUser[] = [
    { rank: 1, name: 'Elena Rostova', avatar: '👩‍💻', role: 'Senior Media Buyer · Tinuiti', xp: 2890, streak: 21 },
    { rank: 2, name: 'Marcus Chen', avatar: '👨‍💼', role: 'Paid Social Lead · VaynerMedia', xp: 2640, streak: 18 },
    { rank: 3, name: 'You (Sahil)', avatar: '🦉', role: 'Performance Marketing Lead', xp: totalXp, streak: streak, isCurrentUser: true },
    { rank: 4, name: 'Devon Vance', avatar: '🧑‍💻', role: 'Search Specialist · WPP', xp: 2210, streak: 12 },
    { rank: 5, name: 'Priya Sharma', avatar: '👩‍💼', role: 'Growth Strategist · D2C Agency', xp: 1980, streak: 9 },
    { rank: 6, name: 'Liam O\'Connor', avatar: '👨‍💻', role: 'Junior Media Buyer', xp: 1750, streak: 14 },
    { rank: 7, name: 'Chloe Dubois', avatar: '👩‍🔬', role: 'Ad Ops Analyst', xp: 1540, streak: 7 },
    { rank: 8, name: 'Arjun Mehta', avatar: '🧑‍💼', role: 'Account Director', xp: 1390, streak: 5 },
    { rank: 9, name: 'Sophia Rossi', avatar: '👩‍🎨', role: 'Creative Strategist', xp: 1280, streak: 8 },
    { rank: 10, name: 'Kai Tanaka', avatar: '👨‍🎨', role: 'Performance Associate', xp: 1150, streak: 4 },
  ];

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto pb-24 space-y-6 select-none animate-in fade-in duration-200">
      {/* League Header Card */}
      <div className="w-full bg-gradient-to-tr from-[#202f36] to-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 text-center space-y-3 shadow-lg relative overflow-hidden">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-[#ffc800] border-b-4 border-[#e5a400] flex items-center justify-center text-4xl shadow-md">
          🏆
        </div>
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#ffc800]">
            CURRENT TIER
          </span>
          <h2 className="text-2xl font-black text-white mt-0.5">
            {league}
          </h2>
          <p className="text-xs font-bold text-slate-300 mt-1">
            Top 10 marketers promote to <span className="text-[#1cb0f6] font-black">Diamond League</span>
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#131f24] px-4 py-1.5 rounded-full border border-white/5 text-xs font-black text-slate-300">
          <span>⏳</span>
          <span>Weekly Tournament ends in 2d 14h</span>
        </div>
      </div>

      {/* Leaderboard Roster */}
      <div className="bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-3 sm:p-4 space-y-2 shadow-lg">
        {competitors.map((user) => {
          const isPromotionZone = user.rank <= 3;
          return (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                user.isCurrentUser
                  ? 'bg-[#58cc02]/20 border-2 border-[#58cc02] shadow-md ring-1 ring-[#58cc02]/40'
                  : 'bg-[#131f24] hover:bg-[#202f36] border border-white/5'
              }`}
            >
              {/* Rank + Avatar + Name */}
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-7 text-center text-sm font-black ${
                    user.rank === 1
                      ? 'text-[#ffc800]'
                      : user.rank === 2
                      ? 'text-slate-300'
                      : user.rank === 3
                      ? 'text-[#ff9600]'
                      : 'text-slate-500'
                  }`}
                >
                  {user.rank}
                </span>

                <div className="w-10 h-10 rounded-2xl bg-[#202f36] border border-white/10 flex items-center justify-center text-xl flex-shrink-0">
                  {user.avatar}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-sm font-black truncate ${
                        user.isCurrentUser ? 'text-[#58cc02]' : 'text-white'
                      }`}
                    >
                      {user.name}
                    </span>
                    {user.isCurrentUser && (
                      <span className="text-[10px] font-black uppercase bg-[#58cc02] text-white px-1.5 py-0.2 rounded">
                        YOU
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 block truncate">
                    {user.role}
                  </span>
                </div>
              </div>

              {/* XP */}
              <div className="flex items-center gap-1 text-sm font-black text-[#1cb0f6] flex-shrink-0">
                <span>{user.xp.toLocaleString()}</span>
                <span className="text-xs">XP</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
