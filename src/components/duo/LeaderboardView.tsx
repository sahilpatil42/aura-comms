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
    <div className="flex flex-col w-full max-w-xl mx-auto pb-28 space-y-6 animate-in fade-in duration-200">
      {/* League Header Card */}
      <div className="w-full bg-gradient-to-tr from-[#0a1838]/90 via-[#0d2250]/80 to-[#1d4ed8]/75 border border-blue-300/30 rounded-3xl p-6 text-center space-y-3 shadow-2xl relative overflow-hidden backdrop-blur-2xl ring-1 ring-white/10">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-400 border-b-4 border-amber-600 flex items-center justify-center text-4xl shadow-md">
          🏆
        </div>
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-amber-300">
            CURRENT TIER
          </span>
          <h2 className="text-2xl font-black text-white mt-0.5 drop-shadow-sm">
            {league}
          </h2>
          <p className="text-xs font-semibold text-blue-200/80 mt-1">
            Top 10 marketers promote to <span className="text-sky-300 font-black">Diamond League</span>
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#08122a]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-400/20 text-xs font-bold text-blue-200 shadow-inner">
          <span>⏳</span>
          <span>Weekly Tournament ends in 2d 14h</span>
        </div>
      </div>

      {/* Leaderboard Roster */}
      <div className="bg-[#09132c]/85 backdrop-blur-xl border border-blue-400/25 rounded-3xl p-3 sm:p-4 space-y-2 shadow-xl ring-1 ring-white/10">
        {competitors.map((user) => {
          return (
            <div
              key={user.rank}
              className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                user.isCurrentUser
                  ? 'bg-gradient-to-r from-blue-600/30 via-sky-500/20 to-blue-600/20 border-2 border-sky-400/80 shadow-md ring-1 ring-sky-400/40 backdrop-blur-md'
                  : 'bg-[#0c1836]/65 hover:bg-[#122450] border border-blue-400/15 backdrop-blur-sm'
              }`}
            >
              {/* Rank + Avatar + Name */}
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-7 text-center text-sm font-black ${
                    user.rank === 1
                      ? 'text-amber-300'
                      : user.rank === 2
                      ? 'text-slate-200'
                      : user.rank === 3
                      ? 'text-amber-500'
                      : 'text-blue-300/40'
                  }`}
                >
                  {user.rank}
                </span>

                <div className="w-10 h-10 rounded-2xl bg-[#081126] border border-blue-400/20 flex items-center justify-center text-xl flex-shrink-0">
                  {user.avatar}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-sm font-black truncate ${
                        user.isCurrentUser ? 'text-sky-300' : 'text-white'
                      }`}
                    >
                      {user.name}
                    </span>
                    {user.isCurrentUser && (
                      <span className="text-[10px] font-black uppercase bg-sky-400 text-[#070e24] px-1.5 py-0.2 rounded shadow-xs">
                        YOU
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-semibold text-blue-200/70 block truncate">
                    {user.role}
                  </span>
                </div>
              </div>

              {/* XP */}
              <div className="flex items-center gap-1 text-sm font-black text-sky-300 flex-shrink-0">
                <span>{user.xp.toLocaleString()}</span>
                <span className="text-xs text-sky-400/70">XP</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
