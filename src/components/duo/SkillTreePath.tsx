'use client';

import React, { useState, useMemo } from 'react';
import { useGamificationStore, PathNode } from '@/stores/useGamificationStore';
import { ALL_170_SCENARIOS } from '@/data/marketingScenariosCatalog';
import { soundEffects } from '@/lib/soundEffects';
import { useDeviceOptimization } from '@/hooks/useDeviceOptimization';

export interface CurriculumUnitInfo {
  unit: number;
  title: string;
  section: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'legend';
  description: string;
  count: number;
}


export const CURRICULUM_UNITS: CurriculumUnitInfo[] = [
  { unit: 1, title: 'Metric Literacy & Single-Word Foundations', section: 'Section 1 · Foundations', difficulty: 'beginner', description: 'Master foundational terms: CTR, CPC, CPM, CVR, ROAS, CPA, LTV, and CAC.', count: 15 },
  { unit: 2, title: 'Creative & Video Diagnostics', section: 'Section 1 · Foundations', difficulty: 'beginner', description: 'Diagnose 3s hook rates, hold rates, 9:16 vertical video, and UGC pacing.', count: 15 },
  { unit: 3, title: 'Search Engine Mechanics', section: 'Section 1 · Foundations', difficulty: 'beginner', description: 'Control search terms, negative keywords, Quality Score, and ad rank.', count: 15 },
  { unit: 4, title: 'Social & Meta Feed Foundations', section: 'Section 1 · Foundations', difficulty: 'beginner', description: 'Navigate the 50-conversion learning phase, CBO, CAPI, and attribution windows.', count: 15 },
  { unit: 5, title: 'Retail, B2B & Emerging Platforms', section: 'Section 1 · Foundations', difficulty: 'beginner', description: 'Demystify LinkedIn CPMs, Snapchat Gen Z reach, Amazon ACOS, and GPT search ads.', count: 15 },
  { unit: 6, title: 'Paid Social & Attribution Warfare', section: 'Section 2 · Intermediate Tactical', difficulty: 'intermediate', description: 'Reconcile CAPI deduplication, iOS 14.5 SKAN delays, and creative fatigue cycles.', count: 15 },
  { unit: 7, title: 'Google & Performance Max Deep-Dive', section: 'Section 2 · Intermediate Tactical', difficulty: 'intermediate', description: 'Stop PMax brand cannibalization, extract search queries, and optimize GMC feeds.', count: 15 },
  { unit: 8, title: 'Multi-Channel Cross-Pollination', section: 'Section 2 · Intermediate Tactical', difficulty: 'intermediate', description: 'Harness TikTok-to-Amazon lift, LinkedIn ABM search halos, and Q-Commerce dayparting.', count: 15 },
  { unit: 9, title: 'C-Suite Panics & Financial Attribution', section: 'Section 3 · Advanced Executive', difficulty: 'advanced', description: 'Defend CPL spikes, answer CFO CAC challenges, and de-escalate founder anger.', count: 15 },
  { unit: 10, title: 'Scaling Bottlenecks & Macro Disruption', section: 'Section 3 · Advanced Executive', difficulty: 'advanced', description: 'Overcome vertical scaling limits, holiday CPM surges, and inventory stockouts.', count: 15 },
  { unit: 11, title: 'Boardroom Strategy & Retainer Defense', section: 'Section 4 · Legend Masterclass', difficulty: 'legend', description: 'Survive procurement fee cuts, defend MMM allocations, and protect agency retainers.', count: 10 },
  { unit: 12, title: 'Masterclass Crisis Negotiations', section: 'Section 4 · Legend Masterclass', difficulty: 'legend', description: 'Execute calibrated Chris Voss de-escalations with furious C-suite executives.', count: 10 }
];

interface SkillTreePathProps {
  onSelectNode: (node: PathNode) => void;
  onOpenMysteryChest: (chestGems: number) => void;
}

export const SkillTreePath: React.FC<SkillTreePathProps> = ({
  onSelectNode,
  onOpenMysteryChest,
}) => {
  const { completedNodeIds, activeNodeId } = useGamificationStore();
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<number>(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Generate full 170 path nodes mapped from ALL_170_SCENARIOS
  const allPathNodes = useMemo<PathNode[]>(() => {
    let accumulatedIndex = 0;
    const nodes: PathNode[] = [];

    CURRICULUM_UNITS.forEach((u) => {
      for (let i = 0; i < u.count; i++) {
        accumulatedIndex++;
        const s = ALL_170_SCENARIOS[accumulatedIndex - 1] || ALL_170_SCENARIOS[0];
        const nodeId = `node-${accumulatedIndex}`;

        let icon = 'search';
        if (s.category.includes('meta')) icon = 'trending_up';
        else if (s.category.includes('tiktok')) icon = 'play_circle';
        else if (s.category.includes('linkedin')) icon = 'business_center';
        else if (s.category.includes('gpt')) icon = 'smart_toy';
        else if (s.category.includes('amazon') || s.category.includes('ecommerce')) icon = 'shopping_cart';
        else if (s.difficulty === 'legend') icon = 'workspace_premium';
        else if (s.difficulty === 'advanced') icon = 'crisis_alert';

        nodes.push({
          id: nodeId,
          scenarioId: s.id,
          unit: u.unit,
          moduleIndex: accumulatedIndex,
          title: s.title,
          subtitle: s.subtitle,
          category: s.category as any,
          difficulty: s.difficulty as any,
          xp: s.difficulty === 'legend' ? 30 : s.difficulty === 'advanced' ? 25 : s.difficulty === 'intermediate' ? 20 : 15,
          stars: completedNodeIds.includes(nodeId) ? 3 : 0,
          status: completedNodeIds.includes(nodeId) ? 'completed' : activeNodeId === nodeId ? 'active' : 'locked',
          icon,
          clientName: s.stakeholder?.name || 'Client Lead',
          clientRole: s.stakeholder?.title || 'Executive',
          clientCompany: s.stakeholder?.organization || 'Partner Brand',
          keyMetric: s.brokenKPIs?.[0]?.metric || 'Metric Target',
        });
      }
    });

    return nodes;
  }, [completedNodeIds, activeNodeId]);

  // Filter nodes for currently selected unit or difficulty
  const visibleNodes = useMemo(() => {
    return allPathNodes.filter((n) => {
      const matchesUnit = selectedUnitNumber === 0 || n.unit === selectedUnitNumber;
      const matchesDiff = selectedDifficulty === 'all' || n.difficulty === selectedDifficulty;
      return matchesUnit && matchesDiff;
    });
  }, [allPathNodes, selectedUnitNumber, selectedDifficulty]);

  // Current Unit Metadata
  const currentUnitMeta = useMemo(() => {
    return CURRICULUM_UNITS.find((u) => u.unit === selectedUnitNumber) || CURRICULUM_UNITS[0];
  }, [selectedUnitNumber]);

  // Device detection for adaptive serpentine winding
  const device = useDeviceOptimization();
  const offsetScale = device.screenCategory === 'compact' ? 0.5 : device.isMobile ? 0.68 : 1;

  // Winding serpentine offsets in pixels (Duolingo style)
  const windingOffsets = [0, -55, 55, 0, -55, 55, 0, -45, 45, 0, -50, 50, 0, -40, 40];

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto pb-28 px-1 sm:px-0">

      
      {/* 1. TOP CURRICULUM LEVEL / DIFFICULTY FILTER */}
      <div className="w-full flex items-center gap-1.5 p-1.5 mb-3 rounded-2xl bg-[#18252b] border border-white/5 overflow-x-auto scrollbar-none text-xs font-bold">
        {[
          { id: 'all', label: 'All Levels (170)' },
          { id: 'beginner', label: 'Beginner (75)' },
          { id: 'intermediate', label: 'Intermediate (45)' },
          { id: 'advanced', label: 'Advanced (30)' },
          { id: 'legend', label: 'Legend (20)' },
        ].map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setSelectedDifficulty(filter.id);
              if (filter.id === 'intermediate') setSelectedUnitNumber(6);
              else if (filter.id === 'advanced') setSelectedUnitNumber(9);
              else if (filter.id === 'legend') setSelectedUnitNumber(11);
              else if (filter.id === 'beginner') setSelectedUnitNumber(1);
            }}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
              selectedDifficulty === filter.id
                ? 'bg-[#58cc02] text-white font-black shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* 2. HORIZONTAL UNIT SELECTOR PILLS (12 UNITS) */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-3 scrollbar-none">
        {CURRICULUM_UNITS.map((u) => {
          const isSelected = selectedUnitNumber === u.unit;
          return (
            <button
              key={u.unit}
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setSelectedUnitNumber(u.unit);
                setSelectedDifficulty('all');
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-black text-xs whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                isSelected
                  ? u.difficulty === 'legend'
                    ? 'btn-3d-gold text-[#764800]'
                    : u.difficulty === 'advanced'
                    ? 'btn-3d-red text-white'
                    : u.difficulty === 'intermediate'
                    ? 'btn-3d-blue text-white'
                    : 'btn-3d-green text-white'
                  : 'bg-[#18252b] text-slate-400 hover:text-white border-2 border-[#202f36]'
              }`}
            >
              <span>U{u.unit}</span>
              <span className="hidden sm:inline font-bold">· {u.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* 3. UNIT HEADER BANNER CARD (Duolingo Style) */}
      <div className={`w-full rounded-3xl p-4 sm:p-6 mb-6 text-white shadow-xl relative overflow-hidden transition-all ${
        currentUnitMeta.difficulty === 'legend'
          ? 'bg-gradient-to-tr from-[#e5a400] to-[#ffc800] border-b-4 border-[#b27e00] text-[#5c3a00]'
          : currentUnitMeta.difficulty === 'advanced'
          ? 'bg-gradient-to-tr from-[#ea2b2b] to-[#ff4b4b] border-b-4 border-[#c91818]'
          : currentUnitMeta.difficulty === 'intermediate'
          ? 'bg-gradient-to-tr from-[#1899d6] to-[#1cb0f6] border-b-4 border-[#1479ab]'
          : 'bg-[#58cc02] border-b-4 border-[#46a302]'
      }`}>
        <div className="relative z-10 space-y-2.5">
          {/* Top Row: Unit Badge + Difficulty Pill */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 rounded-xl bg-black/25 text-[11px] font-black uppercase tracking-wider text-white whitespace-nowrap shadow-xs">
              UNIT {currentUnitMeta.unit}
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-white/20 text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap">
              {currentUnitMeta.difficulty}
            </span>
          </div>

          {/* Unit Info: Section name + Large Title + Description */}
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-white/80 block leading-tight">
              {currentUnitMeta.section}
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1 leading-snug break-words">
              {currentUnitMeta.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-white/90 mt-1.5 leading-relaxed break-words max-w-md">
              {currentUnitMeta.description}
            </p>
          </div>
        </div>

        {/* Decorative background circles */}
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute right-16 top-1 w-12 h-12 rounded-full bg-white/10 pointer-events-none" />
      </div>

      {/* 4. VERTICAL WINDING SERPENTINE PATH */}
      <div className="relative flex flex-col items-center gap-y-10 w-full py-4">
        {visibleNodes.map((node, index) => {
          const isCompleted = completedNodeIds.includes(node.id) || node.status === 'completed';
          const isActive = activeNodeId === node.id || (!isCompleted && node.id === 'node-1');
          const isLocked = !isCompleted && !isActive;
          const xOffset = Math.round(windingOffsets[index % windingOffsets.length] * offsetScale);

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

              {/* Active Node Crown & Mascot "START HERE!" Bubble */}
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
                {/* Center Icon */}
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

              {/* Node Title & Client Role */}
              <div className="mt-3 text-center max-w-[160px]">
                <span className="text-xs font-black text-slate-200 block truncate">
                  {node.title.replace('Module ', 'M')}
                </span>
                <span className="text-[10px] font-bold text-slate-400 block truncate">
                  {node.clientName}
                </span>
              </div>

              {/* Mystery Treasure Chest at end of unit */}
              {(index === visibleNodes.length - 1 || index === 7) && (
                <div 
                  onClick={() => {
                    soundEffects.playXpFanfare();
                    onOpenMysteryChest(30);
                  }}
                  className="my-5 cursor-pointer group flex flex-col items-center"
                >
                  <div className="w-16 h-14 rounded-2xl bg-[#ff9600] border-b-4 border-[#cc7800] flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-105 group-hover:brightness-110 transition-all">
                    🎁
                  </div>
                  <span className="text-[10px] font-black text-[#ff9600] uppercase mt-1 tracking-wider">
                    Unit {currentUnitMeta.unit} Chest (+30 💎)
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 5. BOTTOM NEXT UNIT JUMP BUTTON */}
      <div className="w-full pt-8 flex items-center justify-center gap-3">
        {selectedUnitNumber < 12 && (
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setSelectedUnitNumber((prev) => Math.min(12, prev + 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-3d-blue px-6 py-3 rounded-2xl text-xs font-black text-white flex items-center gap-2 cursor-pointer"
          >
            <span>ADVANCE TO UNIT {selectedUnitNumber + 1}</span>
            <span>➔</span>
          </button>
        )}
      </div>

    </div>
  );
};
