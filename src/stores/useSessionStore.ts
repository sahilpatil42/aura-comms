import { create } from 'zustand';
import { Stage, Scenario, DialogueTurn, SessionEvaluation, DrillDownSession } from '@/types/scenario';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';

interface SessionState {
  currentStage: Stage;
  activeScenario: Scenario;
  dialogueHistory: DialogueTurn[];
  currentTurn: number; // 1 to 5
  maxTurns: number;
  isRecording: boolean;
  isClientSpeaking: boolean;
  transcriptBuffer: string;
  isProcessingTurn: boolean;
  isEvaluating: boolean;
  evaluation: SessionEvaluation | null;
  drillSession: DrillDownSession | null;
  autoSpeakClient: boolean;
  audioMuted: boolean;
  apiKeyModalOpen: boolean;
  glossaryModalOpen: boolean;
  knowledgeBaseModalOpen: boolean;
  error: string | null;

  // Actions
  setStage: (stage: Stage) => void;
  selectScenario: (scenario: Scenario) => void;
  setRecording: (isRecording: boolean) => void;
  setClientSpeaking: (isSpeaking: boolean) => void;
  setTranscriptBuffer: (text: string) => void;
  setProcessingTurn: (isProcessing: boolean) => void;
  setEvaluating: (isEvaluating: boolean) => void;
  setEvaluation: (evaluation: SessionEvaluation | null) => void;
  setDrillSession: (drill: DrillDownSession | null) => void;
  setAutoSpeakClient: (enabled: boolean) => void;
  setAudioMuted: (muted: boolean) => void;
  setApiKeyModalOpen: (open: boolean) => void;
  setGlossaryModalOpen: (open: boolean) => void;
  setKnowledgeBaseModalOpen: (open: boolean) => void;
  setError: (error: string | null) => void;
  addDialogueTurn: (turn: DialogueTurn) => void;
  nextTurn: () => void;
  resetSession: () => void;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  currentStage: 1,
  activeScenario: CRISIS_SCENARIOS[0],
  dialogueHistory: [],
  currentTurn: 1,
  maxTurns: 3, // 3 focused, high-stakes turns per scenario session
  isRecording: false,
  isClientSpeaking: false,
  transcriptBuffer: '',
  isProcessingTurn: false,
  isEvaluating: false,
  evaluation: null,
  drillSession: null,
  autoSpeakClient: true,
  audioMuted: false,
  apiKeyModalOpen: false,
  glossaryModalOpen: false,
  knowledgeBaseModalOpen: false,
  error: null,

  setStage: (stage: Stage) => set({ currentStage: stage }),
  
  selectScenario: (scenario: Scenario) => set({
    activeScenario: scenario,
    currentStage: 1,
    dialogueHistory: [],
    currentTurn: 1,
    evaluation: null,
    drillSession: null,
    transcriptBuffer: '',
    error: null
  }),

  setRecording: (isRecording: boolean) => set({ isRecording }),
  setClientSpeaking: (isClientSpeaking: boolean) => set({ isClientSpeaking }),
  setTranscriptBuffer: (transcriptBuffer: string) => set({ transcriptBuffer }),
  setProcessingTurn: (isProcessingTurn: boolean) => set({ isProcessingTurn }),
  setEvaluating: (isEvaluating: boolean) => set({ isEvaluating }),
  setEvaluation: (evaluation: SessionEvaluation | null) => set({ evaluation }),
  setDrillSession: (drillSession: DrillDownSession | null) => set({ drillSession }),
  setAutoSpeakClient: (autoSpeakClient: boolean) => set({ autoSpeakClient }),
  setAudioMuted: (audioMuted: boolean) => set({ audioMuted }),
  setApiKeyModalOpen: (apiKeyModalOpen: boolean) => set({ apiKeyModalOpen }),
  setGlossaryModalOpen: (glossaryModalOpen: boolean) => set({ glossaryModalOpen }),
  setKnowledgeBaseModalOpen: (knowledgeBaseModalOpen: boolean) => set({ knowledgeBaseModalOpen }),
  setError: (error: string | null) => set({ error }),

  addDialogueTurn: (turn: DialogueTurn) => set((state) => ({
    dialogueHistory: [...state.dialogueHistory, turn]
  })),

  nextTurn: () => set((state) => ({
    currentTurn: state.currentTurn + 1
  })),

  resetSession: () => {
    const scenario = get().activeScenario;
    set({
      currentStage: 1,
      dialogueHistory: [],
      currentTurn: 1,
      evaluation: null,
      drillSession: null,
      transcriptBuffer: '',
      isRecording: false,
      isClientSpeaking: false,
      isProcessingTurn: false,
      isEvaluating: false,
      error: null
    });
  }
}));
