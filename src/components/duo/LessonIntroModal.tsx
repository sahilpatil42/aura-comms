'use client';

import React from 'react';
import { PathNode } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';

interface LessonIntroModalProps {
  node: PathNode | null;
  isOpen: boolean;
  onClose: () => void;
  onStartLesson: (node: PathNode) => void;
  onOpenGuidebook?: () => void;
}

export const LessonIntroModal: React.FC<LessonIntroModalProps> = ({
  node,
  isOpen,
  onClose,
  onStartLesson,
  onOpenGuidebook,
}) => {
  if (!isOpen || !node) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200"
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
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-wider bg-[#202f36] text-[#1cb0f6] px-3 py-1 rounded-full border border-[#1cb0f6]/30">
            SECTION {node.unit} · UNIT {node.moduleIndex}
          </span>
          <span className="text-[11px] font-black uppercase tracking-wider bg-[#ffc800]/20 text-[#ffc800] px-3 py-1 rounded-full border border-[#ffc800]/30">
            +{node.xp} XP
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h2 className="text-2xl font-black text-white leading-tight">
            {node.title}
          </h2>
          <p className="text-sm font-bold text-slate-300 mt-1 leading-relaxed">
            {node.subtitle}
          </p>
        </div>

        {/* Client Stakeholder Illustration Card */}
        <div className="p-4 rounded-2xl bg-[#131f24] border-2 border-[#202f36] flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff4b4b] to-[#ff9600] flex items-center justify-center text-white text-2xl font-black shadow-md flex-shrink-0">
            {node.clientName.includes('Alex') ? '👨‍💼' : node.clientName.includes('Tom') ? '👷‍♂️' : '👩‍💼'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span className="text-sm font-black text-white truncate">
                {node.clientName}
              </span>
              <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-md bg-[#ff4b4b]/20 text-[#ff4b4b]">
                Impatient
              </span>
            </div>
            <p className="text-xs text-slate-400 font-semibold truncate">
              {node.clientRole} · {node.clientCompany}
            </p>
            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#ffc800] font-bold">
              <span>⚠️</span>
              <span className="truncate">{node.keyMetric}</span>
            </div>
          </div>
        </div>

        {/* Key Learning Objectives */}
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            Exercise Objectives
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-extrabold text-slate-200">
            <div className="flex items-center gap-2 bg-[#202f36] p-2.5 rounded-xl border border-white/5">
              <span className="text-[#58cc02]">✓</span>
              <span>BLUF First Framing</span>
            </div>
            <div className="flex items-center gap-2 bg-[#202f36] p-2.5 rounded-xl border border-white/5">
              <span className="text-[#58cc02]">✓</span>
              <span>Root Cause Diagnosis</span>
            </div>
          </div>
        </div>

        {/* Reward Pills */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-[#202f36] text-xs font-black text-slate-300">
          <div className="flex items-center gap-1.5">
            <span>⚡</span>
            <span>+{node.xp} XP</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#1cb0f6]">
            <span>💎</span>
            <span>+10 Gems</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#ff4b4b]">
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
