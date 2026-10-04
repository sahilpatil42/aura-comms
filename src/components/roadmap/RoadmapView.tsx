'use client';

import React, { useState, useMemo } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { 
  ALL_MARKETING_SCENARIOS, 
  CORE_MARKETING_METRICS,
  BEGINNER_SCENARIOS,
  INTERMEDIATE_SCENARIOS,
  ADVANCED_SCENARIOS
} from '@/lib/constants/scenarios';
import { KnowledgeBaseModal } from '@/components/knowledge/KnowledgeBaseModal';
import { Scenario, ScenarioDifficulty } from '@/types/scenario';
import { 
  Sparkles, 
  BookOpen, 
  Flame, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Building2, 
  HelpCircle,
  Play,
  CheckCircle2,
  Lock,
  ChevronRight,
  Filter,
  Layers,
  Award
} from 'lucide-react';

interface RoadmapViewProps {
  onStartSimulation: (scenarioId?: string) => void;
  onOpenMysteryChest: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  onStartSimulation,
  onOpenMysteryChest,
}) => {
  const { selectScenario, activeScenario } = useSessionStore();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState(false);
  const [knowledgeTab, setKnowledgeTab] = useState<'formulas' | 'github-articles' | 'glossary'>('formulas');

  // Filter scenarios based on user-selected difficulty and channel
  const filteredScenarios = useMemo(() => {
    return ALL_MARKETING_SCENARIOS.filter((scenario) => {
      // Difficulty match
      let diffMatch = true;
      if (selectedDifficulty === 'beginner') {
        diffMatch = scenario.difficulty === 'beginner';
      } else if (selectedDifficulty === 'intermediate') {
        diffMatch = scenario.difficulty === 'intermediate';
      } else if (selectedDifficulty === 'advanced') {
        diffMatch = scenario.difficulty === 'advanced' || scenario.difficulty === 'senior' || scenario.difficulty === 'director';
      }

      // Channel match
      let channelMatch = true;
      if (selectedChannel !== 'all') {
        channelMatch = scenario.category === selectedChannel;
      }

      return diffMatch && channelMatch;
    });
  }, [selectedDifficulty, selectedChannel]);

  // Featured Hero Scenario: defaults to first scenario matching selected difficulty
  const heroScenario = useMemo(() => {
    if (selectedDifficulty === 'beginner') return BEGINNER_SCENARIOS[0];
    if (selectedDifficulty === 'intermediate') return INTERMEDIATE_SCENARIOS[0];
    if (selectedDifficulty === 'advanced') return ADVANCED_SCENARIOS[0];
    return filteredScenarios[0] || BEGINNER_SCENARIOS[0];
  }, [selectedDifficulty, filteredScenarios]);

  const handleLaunchScenario = (scenario: Scenario) => {
    selectScenario(scenario);
    onStartSimulation(scenario.id);
  };

  const openKnowledgeBase = (tab: 'formulas' | 'github-articles' | 'glossary' = 'formulas') => {
    setKnowledgeTab(tab);
    setIsKnowledgeModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full gap-y-6 max-w-2xl mx-auto pb-8">
      {/* Gamified Habit & XP Banner */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between bg-surface-container-high/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-secondary-container/30 text-secondary">
              <span className="material-symbols-outlined text-[24px]">psychology</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                  {selectedDifficulty === 'beginner' 
                    ? 'Junior Media Buyer Track' 
                    : selectedDifficulty === 'intermediate'
                    ? 'Account Manager Track'
                    : 'Director & C-Suite Track'}
                </span>
                <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  selectedDifficulty === 'beginner'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : selectedDifficulty === 'intermediate'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-rose-500/20 text-rose-400'
                }`}>
                  {selectedDifficulty.toUpperCase()}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {selectedDifficulty === 'beginner' 
                  ? 'Foundational communication & client doubt handling'
                  : selectedDifficulty === 'intermediate'
                  ? 'Attribution troubleshooting & budget scaling'
                  : 'Crisis management & executive leadership'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-surface-container-highest/60 text-xs text-on-surface border border-white/5">
              <span>🔥</span>
              <span className="font-bold">14d</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-tertiary-container/30 text-xs text-tertiary font-bold border border-tertiary/20">
              <span>⚡</span>
              <span>2.4k XP</span>
            </div>
          </div>
        </div>

        {/* GitHub Digital Marketing Knowledge Base Quick-Launcher Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-primary-container/20 via-surface-container to-secondary-container/20 border border-primary/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-on-surface">GitHub Marketing Knowledge Base</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-primary/20 text-primary font-semibold">Active</span>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                Formulas (CTR, CPC, CPM, ROAS), benchmarks & interview playbooks
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => openKnowledgeBase('formulas')}
              className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-surface-container-highest hover:bg-surface-variant text-on-surface text-xs font-semibold border border-white/10 transition-all cursor-pointer"
            >
              Formulas
            </button>
            <button
              onClick={() => openKnowledgeBase('github-articles')}
              className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-primary text-on-primary text-xs font-bold shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              Open Manual
            </button>
          </div>
        </div>
      </section>

      {/* DIFFICULTY SELECTION TABS */}
      <section className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" />
            Select Difficulty Level
          </span>
          <span className="text-xs text-on-surface-variant">
            {filteredScenarios.length} {filteredScenarios.length === 1 ? 'scenario' : 'scenarios'} available
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-surface-container-lowest/90 border border-white/10">
          <button
            onClick={() => setSelectedDifficulty('beginner')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedDifficulty === 'beginner'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Beginner</span>
            </span>
            <span className="text-[10px] font-normal opacity-80">5 Scenarios</span>
          </button>

          <button
            onClick={() => setSelectedDifficulty('intermediate')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedDifficulty === 'intermediate'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Intermediate</span>
            </span>
            <span className="text-[10px] font-normal opacity-80">4 Scenarios</span>
          </button>

          <button
            onClick={() => setSelectedDifficulty('advanced')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedDifficulty === 'advanced'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>Advanced</span>
            </span>
            <span className="text-[10px] font-normal opacity-80">5 Scenarios</span>
          </button>

          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedDifficulty === 'all'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="flex items-center gap-1">
              <span>All Levels</span>
            </span>
            <span className="text-[10px] font-normal opacity-80">14 Scenarios</span>
          </button>
        </div>

        {/* Channel / Category Secondary Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          {[
            { id: 'all', label: 'All Channels' },
            { id: 'google-ads', label: 'Google Ads' },
            { id: 'meta-ads', label: 'Meta Ads' },
            { id: 'ecommerce-d2c', label: 'E-Commerce / D2C' },
            { id: 'fundamentals', label: 'Fundamentals' },
            { id: 'seo-organic', label: 'SEO & Tech' },
            { id: 'programmatic-dv360', label: 'Programmatic' },
            { id: 'quick-commerce', label: 'Quick Commerce' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedChannel(cat.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedChannel === cat.id
                  ? 'bg-surface-variant text-on-surface font-bold border border-white/20'
                  : 'bg-surface-container/60 text-on-surface-variant hover:text-on-surface border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED CHALLENGE CARD (Dynamically adapts to selected difficulty!) */}
      {heroScenario && (
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low shadow-xl p-5 border border-white/10">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border ${
                heroScenario.difficulty === 'beginner'
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                  : heroScenario.difficulty === 'intermediate'
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                  : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
              }`}>
                <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                <span className="font-label-sm text-[11px] font-bold tracking-wider uppercase">
                  {heroScenario.difficulty.toUpperCase()} • Recommended Next Call
                </span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>{heroScenario.urgencyTimeline}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="font-headline-sm text-lg font-extrabold text-on-surface tracking-tight">
                {heroScenario.title}
              </h2>
              <p className="font-body-md text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                {heroScenario.subtitle}
              </p>
            </div>

            {/* Client Dialogue Preview Box */}
            <div className="p-3 rounded-2xl bg-surface-container-lowest/80 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">
                    {heroScenario.stakeholder.name[0]}
                  </span>
                  <span className="font-semibold text-on-surface">
                    {heroScenario.stakeholder.name} ({heroScenario.stakeholder.title})
                  </span>
                </div>
                <span className="text-[10px] text-tertiary capitalize">
                  {heroScenario.stakeholder.temperament.replace('-', ' ')}
                </span>
              </div>
              <p className="italic text-xs text-on-surface leading-snug">
                &ldquo;{heroScenario.initialClientDialogue}&rdquo;
              </p>
            </div>

            {/* Call to action */}
            <button
              onClick={() => handleLaunchScenario(heroScenario)}
              className="relative group mt-1 flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-bold text-xs shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer hover:opacity-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">mic</span>
              <span>Start {heroScenario.difficulty === 'beginner' ? 'Beginner Call' : 'Roleplay Defense'}</span>
              <span className="absolute right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white">
                +50 XP
              </span>
            </button>
          </div>
        </section>
      )}

      {/* SCENARIO MATRIX LIST */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-tertiary" />
            {selectedDifficulty === 'all' 
              ? 'All 14 Interactive Scenarios' 
              : `${selectedDifficulty.toUpperCase()} Scenario Library (${filteredScenarios.length})`}
          </span>
          <span className="text-[11px] text-tertiary font-semibold cursor-pointer hover:underline" onClick={onOpenMysteryChest}>
            🎁 Mystery Chest Bonus
          </span>
        </div>

        <div className="space-y-3">
          {filteredScenarios.map((sc) => {
            const isCurrentActive = activeScenario.id === sc.id;
            return (
              <div
                key={sc.id}
                className={`rounded-2xl p-4 transition-all border ${
                  isCurrentActive
                    ? 'bg-surface-container-high border-primary/50 shadow-md ring-1 ring-primary/30'
                    : 'bg-surface-container/70 hover:bg-surface-container-high/90 border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    {/* Stakeholder Avatar */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-surface-variant to-surface-container-highest flex items-center justify-center text-on-surface font-extrabold text-sm shrink-0 border border-white/10">
                      {sc.stakeholder.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <div className="flex flex-col min-w-0">
                      {/* Meta badges */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`px-2 py-0.2 rounded-full text-[10px] font-bold uppercase ${
                          sc.difficulty === 'beginner'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : sc.difficulty === 'intermediate'
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-rose-500/20 text-rose-400'
                        }`}>
                          {sc.difficulty}
                        </span>

                        <span className="text-[10px] px-2 py-0.2 rounded-full bg-surface-container-highest text-secondary font-semibold">
                          {sc.category.replace('-', ' ').toUpperCase()}
                        </span>

                        {isCurrentActive && (
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-primary/20 text-primary font-bold">
                            Active Call
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs font-bold text-on-surface mt-1 truncate">
                        {sc.title}
                      </h3>

                      <p className="text-[11px] text-on-surface-variant line-clamp-1 mt-0.5">
                        {sc.stakeholder.name} ({sc.stakeholder.title}) &bull; {sc.clientEnvironment}
                      </p>
                    </div>
                  </div>

                  {/* Start / Switch Button */}
                  <button
                    onClick={() => handleLaunchScenario(sc)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
                      isCurrentActive
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface border border-white/10'
                    }`}
                  >
                    <span>{isCurrentActive ? 'Continue' : 'Practice'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Broken KPIs Chips Preview */}
                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
                  {sc.brokenKPIs.map((kpi, kIdx) => (
                    <div
                      key={kIdx}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-container-lowest/80 text-[10px] text-on-surface whitespace-nowrap border border-white/5"
                    >
                      <span className="text-on-surface-variant font-medium">{kpi.metric}:</span>
                      <span className="font-bold text-primary">{kpi.currentValue}</span>
                      <span className={kpi.isNegative ? 'text-rose-400 font-semibold' : 'text-emerald-400 font-semibold'}>
                        ({kpi.deltaPercent})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* KNOWLEDGE BASE MODAL */}
      <KnowledgeBaseModal
        isOpen={isKnowledgeModalOpen}
        onClose={() => setIsKnowledgeModalOpen(false)}
        initialTab={knowledgeTab}
      />
    </div>
  );
};
