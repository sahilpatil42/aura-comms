'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useGamificationStore, PathNode } from '@/stores/useGamificationStore';
import { getPlatformById } from '@/data/adPlatforms';
import { getScenariosForPlatform } from '@/data/platformScenarios';
import { soundEffects } from '@/lib/soundEffects';
import { useDeviceOptimization } from '@/hooks/useDeviceOptimization';

interface SkillTreePathProps {
  onSelectNode: (node: PathNode) => void;
  onOpenMysteryChest: (chestGems: number) => void;
}

export const SkillTreePath: React.FC<SkillTreePathProps> = ({
  onSelectNode,
  onOpenMysteryChest,
}) => {
  const { completedNodeIds, activeNodeId, selectedPlatform } = useGamificationStore();
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<number>(1);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Active Platform metadata and dedicated 50+ scenarios
  const currentPlatform = useMemo(() => {
    return getPlatformById(selectedPlatform || 'google-ads');
  }, [selectedPlatform]);

  const platformScenarios = useMemo(() => {
    return getScenariosForPlatform(selectedPlatform || 'google-ads');
  }, [selectedPlatform]);

  // Reset unit selector when switching ad platform
  useEffect(() => {
    setSelectedUnitNumber(1);
    setSelectedDifficulty('all');
  }, [selectedPlatform]);

  // Generate path nodes mapped from current platform's units and 50+ scenarios
  const allPathNodes = useMemo<PathNode[]>(() => {
    let accumulatedIndex = 0;
    const nodes: PathNode[] = [];

    currentPlatform.units.forEach((u) => {
      for (let i = 0; i < u.count; i++) {
        if (accumulatedIndex >= platformScenarios.length) break;
        const s = platformScenarios[accumulatedIndex];
        accumulatedIndex++;
        const nodeId = `${currentPlatform.id}-node-${accumulatedIndex}`;

        let icon = 'search';
        if (s.category.includes('meta')) icon = 'trending_up';
        else if (s.category.includes('tiktok')) icon = 'play_circle';
        else if (s.category.includes('linkedin')) icon = 'business_center';
        else if (s.category.includes('snapchat')) icon = 'photo_camera';
        else if (s.category.includes('reddit')) icon = 'forum';
        else if (s.category.includes('amazon') || s.category.includes('flipkart') || s.category.includes('quick-commerce')) icon = 'shopping_cart';
        else if (s.difficulty === 'legend') icon = 'workspace_premium';
        else if (s.difficulty === 'advanced') icon = 'crisis_alert';
        else if (s.difficulty === 'intermediate') icon = 'insights';

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
          status: completedNodeIds.includes(nodeId) ? 'completed' : (activeNodeId === nodeId || (!activeNodeId && accumulatedIndex === 1)) ? 'active' : 'locked',
          icon,
          clientName: s.stakeholder?.name || 'Client Lead',
          clientRole: s.stakeholder?.title || 'Executive',
          clientCompany: s.stakeholder?.organization || 'Partner Brand',
          keyMetric: s.brokenKPIs?.[0]?.metric || 'Metric Target',
        });
      }
    });

    return nodes;
  }, [currentPlatform, platformScenarios, completedNodeIds, activeNodeId]);

  // Dynamic lesson counts per difficulty level for this platform
  const difficultyCounts = useMemo(() => {
    const counts = {
      all: allPathNodes.length,
      beginner: 0,
      intermediate: 0,
      advanced: 0,
      legend: 0,
    };
    allPathNodes.forEach((n) => {
      if (n.difficulty in counts) {
        counts[n.difficulty as keyof typeof counts]++;
      }
    });
    return counts;
  }, [allPathNodes]);

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
    return currentPlatform.units.find((u) => u.unit === selectedUnitNumber) || currentPlatform.units[0];
  }, [currentPlatform, selectedUnitNumber]);

  // Device detection for adaptive serpentine winding
  const device = useDeviceOptimization();
  const offsetScale = device.screenCategory === 'compact' ? 0.5 : device.isMobile ? 0.68 : 1;

  // Winding serpentine offsets in pixels (Duolingo style)
  const windingOffsets = [0, -55, 55, 0, -55, 55, 0, -45, 45, 0, -50, 50, 0, -40, 40];

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto pb-28 px-1 sm:px-0">

      {/* 1. TOP CURRICULUM LEVEL / DIFFICULTY FILTER (Frosted Glassmorphism) */}
      <div className="w-full flex items-center gap-1.5 p-1.5 mb-3 rounded-2xl bg-[#0d1b3a]/60 backdrop-blur-xl border border-blue-400/20 shadow-lg shadow-blue-950/40 overflow-x-auto scrollbar-none text-xs font-bold">
        {[
          { id: 'all', label: `All (${difficultyCounts.all})` },
          { id: 'beginner', label: `Beginner (${difficultyCounts.beginner})` },
          { id: 'intermediate', label: `Intermediate (${difficultyCounts.intermediate})` },
          { id: 'advanced', label: `Advanced (${difficultyCounts.advanced})` },
          { id: 'legend', label: `Legend (${difficultyCounts.legend})` },
        ].map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setSelectedDifficulty(filter.id);
              if (filter.id === 'intermediate') setSelectedUnitNumber(3);
              else if (filter.id === 'advanced') setSelectedUnitNumber(5);
              else if (filter.id === 'legend') setSelectedUnitNumber(6);
              else if (filter.id === 'beginner') setSelectedUnitNumber(1);
            }}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
              selectedDifficulty === filter.id
                ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-black shadow-md shadow-blue-500/30 border border-sky-300/30'
                : 'text-blue-300/70 hover:text-white hover:bg-white/5'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* 2. HORIZONTAL UNIT SELECTOR PILLS */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-3 scrollbar-none">
        {currentPlatform.units.map((u) => {
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
                    ? 'btn-3d-gold text-[#451a03]'
                    : u.difficulty === 'advanced'
                    ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white border-b-4 border-blue-900 shadow-md'
                    : u.difficulty === 'intermediate'
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-b-4 border-indigo-800 shadow-md shadow-indigo-500/25'
                    : 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-b-4 border-blue-700 shadow-md shadow-blue-500/25'
                  : 'bg-[#0d1b3a]/60 backdrop-blur-md text-blue-200/70 hover:text-white border border-blue-400/15 hover:border-blue-400/35'
              }`}
            >
              <span>U{u.unit}</span>
              <span className="hidden sm:inline font-bold">· {u.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* 3. UNIT HEADER BANNER CARD (Soothing Blue Twilight Glassmorphism) */}
      <div className={`w-full rounded-3xl p-4 sm:p-6 mb-6 text-white shadow-2xl relative overflow-hidden backdrop-blur-2xl border transition-all ${
        currentUnitMeta.difficulty === 'legend'
          ? 'bg-gradient-to-br from-[#451a03]/90 via-[#78350f]/85 to-[#b45309]/80 border-amber-400/30 shadow-amber-950/60'
          : currentUnitMeta.difficulty === 'advanced'
          ? 'bg-gradient-to-br from-[#1e1b4b]/95 via-[#312e81]/85 to-[#1e40af]/80 border-indigo-400/30 shadow-indigo-950/60'
          : currentUnitMeta.difficulty === 'intermediate'
          ? 'bg-gradient-to-br from-[#172554]/95 via-[#1e40af]/85 to-[#0369a1]/80 border-sky-400/30 shadow-blue-950/60'
          : 'bg-gradient-to-br from-[#1e3a8a]/90 via-[#1d4ed8]/80 to-[#0284c7]/75 border-blue-300/30 shadow-blue-950/50'
      }`}>
        <div className="relative z-10 space-y-2.5">
          {/* Top Row: Platform Icon + Badge + Difficulty Pill */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 rounded-xl bg-black/30 backdrop-blur-md text-[11px] font-black uppercase tracking-wider text-white whitespace-nowrap shadow-xs flex items-center gap-1.5 border border-white/10">
              <span>{currentPlatform.icon}</span>
              <span>{currentPlatform.name} · UNIT {currentUnitMeta.unit}</span>
            </span>
            <span className="px-2.5 py-1 rounded-xl bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap border border-white/10">
              {currentUnitMeta.difficulty}
            </span>
            <span className="px-2 py-0.5 rounded-lg bg-black/35 backdrop-blur-md text-[9px] font-extrabold uppercase tracking-wide text-white/90 border border-white/10">
              {currentPlatform.badge}
            </span>
          </div>

          {/* Unit Info: Section name + Large Title + Description */}
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-sky-200/90 block leading-tight">
              {currentUnitMeta.section}
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1 leading-snug break-words">
              {currentUnitMeta.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-blue-100/90 mt-1.5 leading-relaxed break-words max-w-md">
              {currentUnitMeta.description}
            </p>
          </div>
        </div>

        {/* Decorative background glass circles with soft blue glow */}
        <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute right-16 top-1 w-16 h-16 rounded-full bg-sky-400/15 blur-lg pointer-events-none" />
      </div>

      {/* 4. VERTICAL WINDING SERPENTINE PATH */}
      <div className="relative flex flex-col items-center gap-y-10 w-full py-4">
        {visibleNodes.map((node, index) => {
          const isCompleted = completedNodeIds.includes(node.id) || node.status === 'completed';
          const isActive = activeNodeId === node.id || (!isCompleted && node.id === `${currentPlatform.id}-node-1`);
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
                  className="absolute -top-10 w-1 h-10 border-l-4 border-dotted border-blue-400/25 z-0 pointer-events-none"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              )}

              {/* Active Node Crown & Mascot "START HERE!" Bubble */}
              {isActive && (
                <div className="absolute -top-12 z-20 flex flex-col items-center animate-duo-bob">
                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white border-2 border-sky-300 font-black text-[11px] px-3 py-1 rounded-2xl shadow-lg shadow-sky-500/30 uppercase tracking-wider flex items-center gap-1">
                    <span>👑</span>
                    <span>START HERE!</span>
                  </div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-sky-400" />
                </div>
              )}

              {/* Circular Path Node Button with Soothing Blue Glass Effect */}
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onSelectNode(node);
                }}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all cursor-pointer z-10 ${
                  isCompleted
                    ? 'bg-gradient-to-b from-[#38bdf8] via-[#2563eb] to-[#1d4ed8] border-b-[6px] border-[#1e40af] text-white shadow-lg shadow-blue-500/35 hover:brightness-110 active:translate-y-1 active:border-b-2 ring-2 ring-sky-400/30'
                    : isActive
                    ? 'bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#1d4ed8] border-b-[6px] border-[#1e3a8a] ring-4 ring-sky-400/40 text-white shadow-xl shadow-sky-500/40 hover:brightness-110 active:translate-y-1 active:border-b-2'
                    : 'bg-[#0d1836]/70 backdrop-blur-md border-b-[6px] border-[#081026] border-t border-x border-blue-400/10 text-blue-400/30 shadow-md hover:bg-[#13244e]/70'
                }`}
                title={node.title}
              >
                {/* Center Icon */}
                <span className="material-symbols-outlined text-[32px] font-bold">
                  {isCompleted ? 'check' : isLocked ? 'lock' : node.icon}
                </span>

                {/* Stars underneath completed node */}
                {isCompleted && (
                  <div className="absolute -bottom-4.5 flex items-center gap-0.5 bg-[#09122a]/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-blue-400/25 shadow-xs">
                    <span className="text-[10px] text-[#fbbf24]">★</span>
                    <span className="text-[10px] text-[#fbbf24]">★</span>
                    <span className="text-[10px] text-[#fbbf24]">★</span>
                  </div>
                )}
              </button>

              {/* Node Title & Client Role */}
              <div className="mt-3 text-center max-w-[160px]">
                <span className="text-xs font-black text-blue-100 block truncate">
                  {node.title.replace('Module ', 'M')}
                </span>
                <span className="text-[10px] font-bold text-blue-300/70 block truncate">
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
                  <div className="w-16 h-14 rounded-2xl bg-[#0d1b3a]/70 backdrop-blur-xl border-2 border-amber-400/35 flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:brightness-110 transition-all">
                    🎁
                  </div>
                  <span className="text-[10px] font-black text-amber-300 uppercase mt-1 tracking-wider">
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
        {selectedUnitNumber < currentPlatform.units.length && (
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              setSelectedUnitNumber((prev) => Math.min(currentPlatform.units.length, prev + 1));
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
