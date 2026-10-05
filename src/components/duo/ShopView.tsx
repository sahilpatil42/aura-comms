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
      <div className="w-full bg-gradient-to-tr from-[#ce82ff] to-[#9b42e6] border-b-4 border-[#7b23c7] rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-4xl shadow-md">
            ⚡
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider bg-black/20 px-2 py-0.5 rounded-full">
              UNLIMITED POWER
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1">
              Super AURA Coach
            </h2>
            <p className="text-xs font-bold text-white/90 mt-0.5">
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
          className="mt-4 w-full py-3 bg-white text-[#7b23c7] hover:bg-slate-100 border-b-4 border-slate-300 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
        >
          START 14-DAY FREE TRIAL
        </button>
      </div>

      {/* Power-ups Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 px-1">
          Power-Ups & Practice Boosts
        </h3>

        <div className="space-y-3">
          {/* Hearts Refill */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#ff4b4b]/20 text-[#ff4b4b] flex items-center justify-center text-2xl flex-shrink-0">
                ❤️
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Refill Full Hearts</h4>
                <p className="text-xs font-bold text-slate-400">
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
                  ? 'bg-[#202f36] text-slate-500 cursor-not-allowed'
                  : 'btn-3d-blue'
              }`}
            >
              {hearts >= maxHearts ? 'FULL' : '250 💎'}
            </button>
          </div>

          {/* Streak Freeze */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#1cb0f6]/20 text-[#1cb0f6] flex items-center justify-center text-2xl flex-shrink-0">
                ❄️
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Streak Freeze</h4>
                <p className="text-xs font-bold text-slate-400">
                  Protects your 14-day streak if you miss a day
                </p>
              </div>
            </div>

            <span className="text-xs font-black text-[#58cc02] bg-[#58cc02]/10 px-3 py-1.5 rounded-xl">
              EQUIPPED (1/1)
            </span>
          </div>

          {/* Soothing AI Voice Expansion */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#ffc800]/20 text-[#ffc800] flex items-center justify-center text-2xl flex-shrink-0">
                🎙️
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Edge Neural Voices</h4>
                <p className="text-xs font-bold text-slate-400">
                  Jenny, Andrew, Aria, Guy soothing voice pack
                </p>
              </div>
            </div>

            <span className="text-xs font-black text-[#58cc02] bg-[#58cc02]/10 px-3 py-1.5 rounded-xl">
              UNLOCKED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
