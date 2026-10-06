'use client';

import React, { useState } from 'react';
import { useSessionStore } from '@/stores/useSessionStore';
import { useGamificationStore, PathNode } from '@/stores/useGamificationStore';
import { ALL_MARKETING_SCENARIOS } from '@/lib/constants/scenarios';
import { DuoHeader } from '@/components/duo/DuoHeader';
import { DuoBottomNav, DuoTabType } from '@/components/duo/DuoBottomNav';
import { SkillTreePath } from '@/components/duo/SkillTreePath';
import { LessonIntroModal } from '@/components/duo/LessonIntroModal';
import { VoiceRoleplayExercise } from '@/components/duo/VoiceRoleplayExercise';
import { InstantFeedbackCelebration, FeedbackData } from '@/components/duo/InstantFeedbackCelebration';
import { LeaderboardView } from '@/components/duo/LeaderboardView';
import { QuestsView } from '@/components/duo/QuestsView';
import { ShopView } from '@/components/duo/ShopView';
import { DuoProfileView } from '@/components/duo/DuoProfileView';
import { ApiKeyModal } from '@/components/settings/ApiKeyModal';
import { GlossaryModal } from '@/components/glossary/GlossaryModal';
import { soundEffects } from '@/lib/soundEffects';

import { KnowledgeStore } from '@/lib/knowledgeStore';
import { NeuralTTS } from '@/lib/audio';
import { KnowledgeBaseModal } from '@/components/knowledge/KnowledgeBaseModal';

export default function Home() {
  const { 
    selectScenario, 
    activeScenario, 
    apiKeyModalOpen, 
    setApiKeyModalOpen,
    glossaryModalOpen,
    setGlossaryModalOpen,
    knowledgeBaseModalOpen,
    setKnowledgeBaseModalOpen
  } = useSessionStore();

  const { addGems, addXp, completeNode } = useGamificationStore();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState<DuoTabType>('path');

  // Sync and index complete Marketing Knowledge Base into localStorage on first load
  React.useEffect(() => {
    KnowledgeStore.init();
  }, []);

  // Exercise Loop states
  const [selectedNode, setSelectedNode] = useState<PathNode | null>(null);
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(false);
  const [isExerciseActive, setIsExerciseActive] = useState(false);
  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);

  // Bonus Chest Modal
  const [chestModalGems, setChestModalGems] = useState<number | null>(null);

  // Handle clicking a node on the path (Opens Screen 2: Lesson Intro Modal)
  const handleSelectNode = (node: PathNode) => {
    setSelectedNode(node);
    
    // Find matching scenario from catalog
    const matchedScenario = ALL_MARKETING_SCENARIOS.find(
      (s) => s.id === node.scenarioId
    ) || ALL_MARKETING_SCENARIOS[0];

    selectScenario(matchedScenario);
    setIsIntroModalOpen(true);
  };

  // Handle clicking "START (+15 XP)" in the Lesson Intro Modal (Enters Screen 3: Voice Roleplay)
  const handleStartLesson = (node: PathNode) => {
    setIsIntroModalOpen(false);
    setIsExerciseActive(true);
  };

  // Handle submitting voice answer in Screen 3 (Opens Screen 4: Celebration & Feedback)
  const handleCompleteExercise = (data: FeedbackData) => {
    setFeedbackData(data);
  };

  // Handle clicking "CONTINUE" on Screen 4 (Returns to Path Screen with rewards)
  const handleContinueFromCelebration = () => {
    NeuralTTS.stop();
    if (selectedNode) {
      completeNode(selectedNode.id, 3);
    }
    setFeedbackData(null);
    setIsExerciseActive(false);
    setActiveTab('path');
  };

  // Handle opening mystery chest
  const handleOpenChest = (gemsAmount: number) => {
    addGems(gemsAmount);
    setChestModalGems(gemsAmount);
  };

  return (
    <div className="min-h-screen w-full bg-[#070d1e] text-slate-100 font-sans flex flex-col selection:bg-[#38bdf8] selection:text-[#070d1e] relative overflow-x-hidden">
      {/* Ambient Soothing Blue Glows for Glassmorphism */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[550px] h-[550px] rounded-full bg-indigo-600/12 blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* 1. TOP STATUS BAR */}
        {!isExerciseActive && (
          <DuoHeader
            currentTab={activeTab}
            onTabChange={(tab) => {
              NeuralTTS.stop();
              setIsExerciseActive(false);
              setActiveTab(tab);
            }}
            onOpenSettings={() => setApiKeyModalOpen(true)}
          />
        )}

        {/* 2. MAIN VIEW AREA */}
        <main className={`flex-1 flex flex-col w-full px-2 sm:px-4 ${isExerciseActive ? 'pt-1 sm:pt-4 pb-2' : 'pt-16 sm:pt-20 pb-20 sm:pb-24'}`}>

        {/* If user is inside the Immersive Voice Roleplay Exercise */}
        {isExerciseActive ? (
          <VoiceRoleplayExercise
            onCompleteExercise={handleCompleteExercise}
            onExit={() => {
              NeuralTTS.stop();
              setIsExerciseActive(false);
            }}
          />
        ) : (
          <>
            {/* Tab 1: The Skill Tree / Path Screen */}
            {activeTab === 'path' && (
              <SkillTreePath
                onSelectNode={handleSelectNode}
                onOpenMysteryChest={handleOpenChest}
              />
            )}

            {/* Tab 2: Leagues / Leaderboard Screen */}
            {activeTab === 'leaderboard' && <LeaderboardView />}

            {/* Tab 3: Daily Quests Screen */}
            {activeTab === 'quests' && <QuestsView />}

            {/* Tab 4: Shop & Power-ups Screen */}
            {activeTab === 'shop' && <ShopView />}

            {/* Tab 5: Profile & Badges Screen */}
            {activeTab === 'profile' && (
              <DuoProfileView
                onOpenSettings={() => setApiKeyModalOpen(true)}
              />
            )}
          </>
        )}
      </main>

      {/* 3. DUOLINGO 5-TAB BOTTOM NAVIGATION BAR */}
      {!isExerciseActive && (
        <DuoBottomNav
          activeTab={activeTab}
          onTabChange={(tab) => {
            setIsExerciseActive(false);
            setActiveTab(tab);
          }}
          hasUnclaimedQuest={true}
        />
      )}

      {/* SCREEN 2: BITE-SIZED LESSON / SCENARIO INTRODUCTION MODAL */}
      <LessonIntroModal
        node={selectedNode}
        isOpen={isIntroModalOpen}
        onClose={() => setIsIntroModalOpen(false)}
        onStartLesson={handleStartLesson}
      />

      {/* SCREEN 4: INSTANT FEEDBACK & CELEBRATION MODAL */}
      {feedbackData && (
        <InstantFeedbackCelebration
          data={feedbackData}
          onContinue={handleContinueFromCelebration}
        />
      )}

      {/* Bonus Chest Modal */}
      {chestModalGems !== null && (
        <div 
          onClick={() => setChestModalGems(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#09122a]/92 backdrop-blur-2xl border-2 border-amber-400/25 rounded-3xl p-5 sm:p-6 text-center space-y-4 shadow-2xl shadow-blue-950/80 animate-in fade-in zoom-in-95 duration-150 max-h-[90dvh] overflow-y-auto"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-amber-400 border-b-4 border-amber-600 flex items-center justify-center text-3xl sm:text-4xl shadow-md">
              🎁
            </div>
            <div>
              <span className="text-xs font-black uppercase text-amber-300">Bonus Chest</span>
              <h3 className="text-2xl font-black text-white mt-1">+{chestModalGems} Gems!</h3>
              <p className="text-xs font-bold text-blue-200/80 mt-1">
                Great pace on the skill path! Keep training to climb the Obsidian League.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                soundEffects.playClick();
                setChestModalGems(null);
              }}
              className="btn-3d-blue w-full py-3.5 rounded-2xl text-xs font-black"
            >
              CLAIM & CONTINUE
            </button>
          </div>
        </div>
      )}

      {/* API Key / Voice Configuration Modal */}
      <ApiKeyModal
        isOpen={apiKeyModalOpen}
        onClose={() => setApiKeyModalOpen(false)}
      />

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={glossaryModalOpen}
        onClose={() => setGlossaryModalOpen(false)}
      />

      {/* Modular Platform Knowledge Base & Playbooks Modal */}
      <KnowledgeBaseModal
        isOpen={knowledgeBaseModalOpen}
        onClose={() => setKnowledgeBaseModalOpen(false)}
      />
      </div>
    </div>
  );
}
