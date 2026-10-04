'use client';

import React, { useState } from 'react';
import { useGamificationStore, PathNode } from '@/stores/useGamificationStore';
import { ALL_MARKETING_SCENARIOS, BEGINNER_SCENARIOS } from '@/lib/constants/scenarios';
import { soundEffects } from '@/lib/soundEffects';

interface SkillTreePathProps {
  onSelectNode: (node: PathNode) => void;
  onOpenGuidebook: () => void;
  onOpenMysteryChest: (chestGems: number) => void;
}

export const SkillTreePath: React.FC<SkillTreePathProps> = ({
  onSelectNode,
  onOpenGuidebook,
  onOpenMysteryChest,
}) => {
  const { completedNodeIds, activeNodeId, totalXp, streak } = useGamificationStore();

  // Defined game path nodes modeled on real marketing scenarios
  const pathNodes: PathNode[] = [
    {
      id: 'node-1',
      scenarioId: 'google-ads-ad-not-showing',
      unit: 1,
      moduleIndex: 1,
      title: 'Module 1: Ad Not Showing Panic',
      subtitle: 'De-escalate a client who cannot find their ad on Google Search.',
      category: 'google-ads',
      difficulty: 'beginner',
      xp: 15,
      stars: 3,
      status: 'completed',
      icon: 'search',
      clientName: 'Tom Bradley',
      clientRole: 'Founder & Owner',
      clientCompany: 'Apex HVAC Services',
      keyMetric: 'Impression Share 78% · Ad Rank Healthy',
    },
    {
      id: 'node-2',
      scenarioId: 'daily-budget-exhausted-morning',
      unit: 1,
      moduleIndex: 2,
      title: 'Module 2: Morning Budget Depletion',
      subtitle: 'Explain early-morning search surges and set up pacing guards.',
      category: 'google-ads',
      difficulty: 'beginner',
      xp: 15,
      stars: 3,
      status: 'completed',
      icon: 'schedule',
      clientName: 'Tom Bradley',
      clientRole: 'Founder & Owner',
      clientCompany: 'Apex HVAC Services',
      keyMetric: 'Budget 100% Spent by 9:45 AM',
    },
    {
      id: 'node-3',
      scenarioId: 'cpl-spike-crisis',
      unit: 1,
      moduleIndex: 3,
      title: 'Module 3: The CPL Spike Crisis',
      subtitle: 'Learn how to justify rising lead costs to an impatient enterprise client.',
      category: 'meta-ads',
      difficulty: 'beginner',
      xp: 15,
      stars: 0,
      status: 'active',
      icon: 'trending_up',
      clientName: 'CMO Alex Vance',
      clientRole: 'Chief Marketing Officer',
      clientCompany: 'SaaSFlow Enterprise',
      keyMetric: 'Meta Ads CPL +42% ($54 vs $38 target)',
    },
    {
      id: 'node-4',
      scenarioId: 'meta-learning-phase-reset',
      unit: 2,
      moduleIndex: 4,
      title: 'Module 4: Learning Phase Reset',
      subtitle: 'Explain how 50 conversions/week stabilizes Meta auction algorithms.',
      category: 'meta-ads',
      difficulty: 'beginner',
      xp: 15,
      stars: 0,
      status: 'locked',
      icon: 'psychology',
      clientName: 'Rachel Green',
      clientRole: 'VP of Growth',
      clientCompany: 'LuxeLiving D2C',
      keyMetric: 'Learning Limited Status · 18/50 conversions',
    },
    {
      id: 'node-5',
      scenarioId: 'high-ctr-zero-purchases',
      unit: 2,
      moduleIndex: 5,
      title: 'Module 5: High CTR Zero Purchases',
      subtitle: 'Diagnose click-to-session drop-off and conversion funnel misalignment.',
      category: 'meta-ads',
      difficulty: 'beginner',
      xp: 20,
      stars: 0,
      status: 'locked',
      icon: 'touch_app',
      clientName: 'Rachel Green',
      clientRole: 'VP of Growth',
      clientCompany: 'LuxeLiving D2C',
      keyMetric: 'CTR 3.8% · 0 Purchases on 1,200 clicks',
    },
    {
      id: 'node-6',
      scenarioId: 'cpa-spike-attribution-breakdown',
      unit: 3,
      moduleIndex: 6,
      title: 'Module 6: Enterprise Attribution Collapse',
      subtitle: 'Reconcile GA4 and Meta Ads discrepancies for executive leadership.',
      category: 'general',
      difficulty: 'intermediate',
      xp: 25,
      stars: 0,
      status: 'locked',
      icon: 'pie_chart',
      clientName: 'Director Sarah Lin',
      clientRole: 'VP of Performance Marketing',
      clientCompany: 'HealthCore Global',
      keyMetric: 'GA4 Reports 420 Conversions vs Meta 1,120',
    },
  ];

  // Alternating offsets to produce Duolingo winding serpentine path
  // offsets in px: 0 (center), -52 (left), +52 (right), -30 (slight left), +30 (slight right)...
  const windingOffsets = [0, -55, 55, 0, -55, 55, 0, -45, 45];

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto pb-24 select-none">
      {/* Unit Header Card (Duolingo Style Header) */}
      <div className="w-full bg-[#58cc02] border-b-4 border-[#46a302] rounded-3xl p-5 mb-8 text-white shadow-lg relative overflow-hidden">
        <div className="flex items-start justify-between relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black tracking-widest uppercase bg-black/20 px-2.5 py-0.5 rounded-full text-white/90">
                SECTION 1 · UNIT 1
              </span>
              <span className="text-xs font-extrabold bg-[#ffc800] text-[#764800] px-2 py-0.5 rounded-full">
                ⚡ +15 XP / Drill
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mt-2 leading-tight">
              Junior Media Buyer Fundamentals
            </h2>
            <p className="text-xs sm:text-sm font-bold text-white/90 mt-1 max-w-xs">
              Master crisis de-escalation, CPL defense, and algorithm explanations with enterprise CMOs.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onOpenGuidebook();
            }}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-[#58cc02] border-b-4 border-slate-300 font-black text-xs rounded-2xl transition-all cursor-pointer hover:brightness-105 active:translate-y-1 active:border-b-0"
            title="Read Unit Marketing Guidebook & BLUF Playbook"
          >
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            <span>GUIDE</span>
          </button>
        </div>

        {/* Decorative background circles */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute right-12 top-2 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
      </div>

      {/* Vertical Winding Path Container */}
      <div className="relative flex flex-col items-center gap-y-10 w-full py-4">
        {pathNodes.map((node, index) => {
          const isCompleted = completedNodeIds.includes(node.id) || node.status === 'completed';
          const isActive = activeNodeId === node.id || (!isCompleted && node.id === 'node-3');
          const isLocked = !isCompleted && !isActive;
          const xOffset = windingOffsets[index % windingOffsets.length];

          return (
            <div
              key={node.id}
              className="relative flex flex-col items-center transition-all duration-200"
              style={{
                transform: `translateX(${xOffset}px)`,
              }}
            >
              {/* Dotted path connector line between nodes */}
              {index > 0 && (
                <div
                  className="absolute -top-10 w-1 h-10 border-l-4 border-dotted border-[#37464f] z-0 pointer-events-none"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              )}

              {/* Active Node Crown & "START HERE!" Mascot Bubble */}
              {isActive && (
                <div className="absolute -top-12 z-20 flex flex-col items-center animate-duo-bob">
                  <div className="bg-[#ffc800] text-[#764800] border-2 border-[#e5a400] font-black text-[11px] px-3 py-1 rounded-2xl shadow-md uppercase tracking-wider flex items-center gap-1">
                    <span>👑</span>
                    <span>START HERE!</span>
                  </div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#e5a400]" />
                </div>
              )}

              {/* Circular Path Node Button */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onSelectNode(node);
                }}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                  isCompleted
                    ? 'bg-[#58cc02] border-b-[6px] border-[#46a302] hover:brightness-110 active:translate-y-1 active:border-b-2 text-white shadow-lg'
                    : isActive
                    ? 'bg-[#ffc800] border-b-[6px] border-[#e5a400] ring-4 ring-[#ffc800]/40 hover:brightness-110 active:translate-y-1 active:border-b-2 text-[#764800] shadow-xl'
                    : 'bg-[#202f36] border-b-[6px] border-[#293840] hover:bg-[#283942] text-slate-500 shadow-md'
                }`}
                title={node.title}
              >
                {/* Node Center Icon */}
                <span className="material-symbols-outlined text-[32px] font-bold">
                  {isCompleted ? 'check' : isLocked ? 'lock' : node.icon}
                </span>

                {/* Stars underneath completed node */}
                {isCompleted && (
                  <div className="absolute -bottom-4.5 flex items-center gap-0.5 bg-[#18252b] px-2 py-0.5 rounded-full border border-white/10 shadow-xs">
                    <span className="text-[10px] text-[#ffc800]">★</span>
                    <span className="text-[10px] text-[#ffc800]">★</span>
                    <span className="text-[10px] text-[#ffc800]">★</span>
                  </div>
                )}
              </button>

              {/* Node Title / Label underneath */}
              <div className="mt-3 text-center max-w-[150px]">
                <span className="text-xs font-black text-slate-200 block truncate">
                  {node.title.replace('Module ', 'M')}
                </span>
                <span className="text-[10px] font-bold text-slate-400 block truncate">
                  {node.clientName}
                </span>
              </div>

              {/* Bonus Mystery Treasure Chest after Node 3 */}
              {index === 2 && (
                <div 
                  onClick={() => {
                    soundEffects.playXpFanfare();
                    onOpenMysteryChest(25);
                  }}
                  className="my-5 cursor-pointer group flex flex-col items-center"
                >
                  <div className="w-16 h-14 rounded-2xl bg-[#ff9600] border-b-4 border-[#cc7800] flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-105 group-hover:brightness-110 transition-all">
                    🎁
                  </div>
                  <span className="text-[10px] font-black text-[#ff9600] uppercase mt-1 tracking-wider">
                    Bonus Chest
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
