'use client';

import React from 'react';
import { PathNode } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

interface LessonIntroModalProps {
  node: PathNode | null;
  isOpen: boolean;
  onClose: () => void;
  onStartLesson: (node: PathNode) => void;
}

export const LessonIntroModal: React.FC<LessonIntroModalProps> = ({
  node,
  isOpen,
  onClose,
  onStartLesson,
}) => {
  if (!isOpen || !node) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs select-none"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-5 sm:p-7 shadow-2xl space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-200 max-h-[90dvh] overflow-y-auto"
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>


        {/* Section & Module Badge */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-[#202f36] text-[#1cb0f6] px-2.5 sm:px-3 py-1 rounded-full border border-[#1cb0f6]/30">
            SECTION {node.unit} · UNIT {node.moduleIndex}
          </span>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-[#ffc800]/20 text-[#ffc800] px-2.5 sm:px-3 py-1 rounded-full border border-[#ffc800]/30">
            +{node.xp} XP
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white leading-tight break-words">
            {node.title}
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 leading-relaxed break-words">
            {node.subtitle}
          </p>
        </div>

        {/* Client Stakeholder Illustration Card */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#131f24] border-2 border-[#202f36] flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#ff4b4b] to-[#ff9600] flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-md flex-shrink-0">
            {node.clientName.includes('Alex') ? '👨‍💼' : node.clientName.includes('Tom') ? '👷‍♂️' : '👩‍💼'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs sm:text-sm font-black text-white truncate">
                {node.clientName}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-[#ff4b4b]/20 text-[#ff4b4b] flex-shrink-0">
                Impatient
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 font-semibold truncate">
              {node.clientRole} · {node.clientCompany}
            </p>
            <div className="mt-1 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#ffc800] font-bold">
              <span>⚠️</span>
              <span className="truncate">{node.keyMetric}</span>
            </div>
          </div>
        </div>

        {/* Key Learning Objectives */}
        <div className="space-y-1.5 sm:space-y-2">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400">
            Exercise Objectives
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-extrabold text-slate-200">
            <div className="flex items-center gap-2 bg-[#202f36] p-2.5 rounded-xl border border-white/5 min-w-0">
              <span className="text-[#58cc02] flex-shrink-0">✓</span>
              <span className="break-words">BLUF First Framing</span>
            </div>
            <div className="flex items-center gap-2 bg-[#202f36] p-2.5 rounded-xl border border-white/5 min-w-0">
              <span className="text-[#58cc02] flex-shrink-0">✓</span>
              <span className="break-words">Root Cause Diagnosis</span>
            </div>
          </div>
        </div>

        {/* Reward Pills */}
        <div className="grid grid-cols-3 gap-1.5 p-2 sm:p-3 rounded-2xl bg-[#202f36] text-[10px] sm:text-xs font-black text-slate-300 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5">
            <span>⚡</span>
            <span>+{node.xp} XP</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 text-[#1cb0f6]">
            <span>💎</span>
            <span>+10 Gems</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 text-[#ff4b4b]">
            <span>❤️</span>
            <span>Costs 1 Heart</span>
          </div>
        </div>

        {/* Massive 3D Green Start Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onStartLesson(node);
          }}
          className="btn-3d-green w-full py-4 text-base font-black tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>START (+{node.xp} XP)</span>
          <span className="text-xl">🚀</span>
        </button>
      </div>
    </div>
  );
};
