export type Stage = 1 | 2 | 3 | 4 | 5;

export type ScenarioDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'senior' | 'director';

export type ChannelCategory = 
  | 'google-ads'
  | 'meta-ads'
  | 'quick-commerce'
  | 'programmatic-dv360'
  | 'seo-organic'
  | 'analytics-tracking'
  | 'ecommerce-d2c'
  | 'fundamentals';

export interface BrokenKPI {
  metric: string;
  previousValue: string;
  currentValue: string;
  deltaPercent: string;
  isNegative: boolean;
  benchmark: string;
  rootCauseClues: string[];
}

export interface StakeholderPersona {
  name: string;
  title: string;
  organization: string;
  temperament: 
    | 'curious-client'
    | 'concerned-owner'
    | 'inquisitive-founder'
    | 'supportive-manager'
    | 'impatient-skeptic' 
    | 'frustrated-cfo' 
    | 'analytical-vp' 
    | 'aggressive-founder';
  avatarUrl?: string;
  keyConcerns: string[];
  triggerPhrases: string[]; // Phrases that provoke pushback
  audioVoicePitch?: number;
  audioVoiceRate?: number;
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  category: ChannelCategory;
  difficulty: ScenarioDifficulty;
  urgencyTimeline: string; // e.g., "Weekly sync call in 15 minutes"
  clientEnvironment: string; // e.g., "Local Dental Practice ($3k/mo ad spend)"
  briefingSummary: string;
  initialClientDialogue: string;
  brokenKPIs: BrokenKPI[];
  stakeholder: StakeholderPersona;
  targetRootCauses: string[];
  prohibitedExcuses: string[]; // e.g., "Blaming the algorithm without evidence"
  modelAnswerBLUF: {
    bluf: string;
    rootCauseAnalysis: string;
    immediateMitigation: string;
    recoveryPlan72h: string;
    fullVerbatimScript: string;
  };
  sampleDrillDowns: {
    weakestPillar: EvaluationPillarKey;
    prompt: string;
    timeLimitSeconds: number;
    idealPoints: string[];
  }[];
}

export interface DialogueTurn {
  id: string;
  speaker: 'client' | 'user';
  text: string;
  timestamp: number;
  audioUrl?: string;
  sentiment?: 'confrontational' | 'skeptical' | 'reassured' | 'neutral';
  flaggedPhrases?: string[];
}

export type EvaluationPillarKey = 
  | 'marketingLogic'
  | 'terminologyAccuracy'
  | 'grammarRegister'
  | 'executivePresence';

export interface PillarEvaluation {
  score: number; // 0 - 100
  rating: 'Exceptional' | 'Proficient' | 'Needs Improvement' | 'Critical Failure';
  strengths: string[];
  weaknesses: string[];
  keyRecommendations: string[];
}

export interface FlaggedPhraseItem {
  originalText: string;
  flagReason: string;
  improvedReframe: string;
  category: 'filler' | 'hedging' | 'terminology-error' | 'defensive-excuse';
}

export interface SessionEvaluation {
  overallScore: number;
  overallGrade: string; // e.g. "Managing Director Ready" | "Senior Media Lead" | "Associate Media Buyer"
  summaryFeedback: string;
  pillars: {
    marketingLogic: PillarEvaluation;
    terminologyAccuracy: PillarEvaluation;
    grammarRegister: PillarEvaluation;
    executivePresence: PillarEvaluation;
  };
  flaggedPhrases: FlaggedPhraseItem[];
  turnBreakdown: {
    turnNumber: number;
    userUtterance: string;
    critique: string;
  }[];
}

export interface DrillDownSession {
  pillar: EvaluationPillarKey;
  prompt: string;
  userResponse: string;
  aiFeedback: string;
  score: number;
  completed: boolean;
}
