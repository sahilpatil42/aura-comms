'use client';

import React from 'react';
import { PathNode } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';
import { NeuralTTS } from '@/lib/audio';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#040817]/75 backdrop-blur-md select-none"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#09132c]/90 backdrop-blur-2xl border border-blue-400/25 rounded-3xl p-5 sm:p-7 shadow-[0_20px_60px_rgba(3,7,24,0.7)] space-y-4 sm:space-y-5 animate-in fade-in zoom-in-95 duration-200 max-h-[90dvh] overflow-y-auto ring-1 ring-white/10"
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Section & Module Badge */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-blue-900/40 text-sky-300 px-2.5 sm:px-3 py-1 rounded-full border border-sky-400/30 shadow-xs">
            SECTION {node.unit} · UNIT {node.moduleIndex}
          </span>
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-300 px-2.5 sm:px-3 py-1 rounded-full border border-amber-400/30">
            +{node.xp} XP
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white leading-tight break-words drop-shadow-sm">
            {node.title}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-blue-200/80 mt-1 leading-relaxed break-words">
            {node.subtitle}
          </p>
        </div>

        {/* Client Stakeholder Illustration Card */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#0e1c3c]/70 backdrop-blur-md border border-blue-400/20 flex items-center gap-3 shadow-inner">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#1d4ed8] via-[#2563eb] to-[#38bdf8] flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-md flex-shrink-0 border border-white/20">
            {node.clientName.includes('Alex') ? '👨‍💼' : node.clientName.includes('Tom') ? '👷‍♂️' : '👩‍💼'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs sm:text-sm font-black text-white truncate">
                {node.clientName}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 flex-shrink-0">
                Impatient
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-blue-200/70 font-semibold truncate">
              {node.clientRole} · {node.clientCompany}
            </p>
            <div className="mt-1 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-amber-300 font-bold">
              <span>⚠️</span>
              <span className="truncate">{node.keyMetric}</span>
            </div>
          </div>
        </div>

        {/* Key Learning Objectives */}
        <div className="space-y-1.5 sm:space-y-2">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-blue-300/70">
            Exercise Objectives
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-extrabold text-slate-200">
            <div className="flex items-center gap-2 bg-[#0c1836]/60 backdrop-blur-sm p-2.5 rounded-xl border border-blue-400/15 min-w-0">
              <span className="text-sky-400 flex-shrink-0">✓</span>
              <span className="break-words text-blue-100">BLUF First Framing</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0c1836]/60 backdrop-blur-sm p-2.5 rounded-xl border border-blue-400/15 min-w-0">
              <span className="text-sky-400 flex-shrink-0">✓</span>
              <span className="break-words text-blue-100">Root Cause Diagnosis</span>
            </div>
          </div>
        </div>

        {/* Reward Pills */}
        <div className="grid grid-cols-3 gap-1.5 p-2 sm:p-3 rounded-2xl bg-[#0c1836]/70 backdrop-blur-sm border border-blue-400/15 text-[10px] sm:text-xs font-black text-slate-300 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 text-blue-200">
            <span>⚡</span>
            <span>+{node.xp} XP</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 text-sky-300">
            <span>💎</span>
            <span>+10 Gems</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 text-rose-400">
            <span>❤️</span>
            <span>Costs 1 Heart</span>
          </div>
        </div>

        {/* Tactile 3D Start Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            NeuralTTS.stop();
            onStartLesson(node);
          }}
          className="btn-3d-blue w-full py-4 text-base font-black tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>START (+{node.xp} XP)</span>
          <span className="text-xl">🚀</span>
        </button>
      </div>
    </div>
  );
};
