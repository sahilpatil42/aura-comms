'use client';

import React from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

export const ShopView: React.FC = () => {
  const { gems, hearts, maxHearts, refillHearts, spendGems } = useGamificationStore();

  const handleBuyHearts = () => {
    if (hearts >= maxHearts) return;
    if (spendGems(250)) {
      refillHearts();
      soundEffects.playSuccess();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto pb-28 space-y-6 animate-in fade-in duration-200">
      {/* Super Pass Hero Banner */}
      <div className="w-full bg-gradient-to-tr from-[#1d4ed8]/90 via-[#2563eb]/80 to-[#38bdf8]/75 border border-blue-300/30 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden backdrop-blur-2xl ring-1 ring-white/10">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-4xl shadow-md backdrop-blur-sm">
            ⚡
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider bg-black/25 px-2.5 py-0.5 rounded-full border border-white/15">
              UNLIMITED POWER
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1 drop-shadow-sm">
              Super AURA Coach
            </h2>
            <p className="text-xs font-semibold text-blue-100 mt-0.5">
              Unlimited Hearts, Personalized Executive Feedback, and Zero Practice Interruptions.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            refillHearts();
          }}
          className="mt-4 w-full py-3 bg-white text-blue-950 hover:bg-blue-50 border-b-4 border-blue-200 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg active:translate-y-0.5 active:border-b-2"
        >
          START 14-DAY FREE TRIAL
        </button>
      </div>

      {/* Power-ups Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-black uppercase tracking-wider text-blue-200 px-1">
          Power-Ups & Practice Boosts
        </h3>

        <div className="space-y-3">
          {/* Hearts Refill */}
          <div className="p-4 rounded-3xl bg-[#09132c]/85 backdrop-blur-xl border border-blue-400/20 shadow-lg flex items-center justify-between gap-4 ring-1 ring-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl flex-shrink-0 border border-rose-500/30">
                ❤️
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Refill Full Hearts</h4>
                <p className="text-xs font-semibold text-blue-200/70">
                  Instantly top up to 5/5 practice hearts
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleBuyHearts}
              disabled={hearts >= maxHearts}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                hearts >= maxHearts
                  ? 'bg-[#0c1836] text-blue-300/40 border border-blue-400/10 cursor-not-allowed'
                  : 'btn-3d-blue'
              }`}
            >
              {hearts >= maxHearts ? 'FULL' : '250 💎'}
            </button>
          </div>

          {/* Streak Freeze */}
          <div className="p-4 rounded-3xl bg-[#09132c]/85 backdrop-blur-xl border border-blue-400/20 shadow-lg flex items-center justify-between gap-4 ring-1 ring-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center text-2xl flex-shrink-0 border border-sky-400/30">
                ❄️
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Streak Freeze</h4>
                <p className="text-xs font-semibold text-blue-200/70">
                  Protects your 14-day streak if you miss a day
                </p>
              </div>
            </div>

            <span className="text-xs font-black text-sky-300 bg-sky-500/15 border border-sky-400/25 px-3 py-1.5 rounded-xl">
              EQUIPPED (1/1)
            </span>
          </div>

          {/* Soothing AI Voice Expansion */}
          <div className="p-4 rounded-3xl bg-[#09132c]/85 backdrop-blur-xl border border-blue-400/20 shadow-lg flex items-center justify-between gap-4 ring-1 ring-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center text-2xl flex-shrink-0 border border-amber-400/30">
                🎙️
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Edge Neural Voices</h4>
                <p className="text-xs font-semibold text-blue-200/70">
                  Jenny, Andrew, Aria, Guy soothing voice pack
                </p>
              </div>
            </div>

            <span className="text-xs font-black text-sky-300 bg-sky-500/15 border border-sky-400/25 px-3 py-1.5 rounded-xl">
              UNLOCKED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
