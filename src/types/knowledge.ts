// ============================================================================
// AURA-COMMS KNOWLEDGE BASE & MARKETING ENCYCLOPEDIA TYPES
// Platform Battlecards, Industry Books, Metrics Benchmarks & Local Storage
// ============================================================================

export type AdPlatformType = 
  | 'meta-ads' 
  | 'google-ads' 
  | 'linkedin-ads' 
  | 'snapchat-ads' 
  | 'gpt-ads' 
  | 'tiktok-ads' 
  | 'amazon-ads' 
  | 'apple-search-ads' 
  | 'quick-commerce';

export interface PlatformMetricBenchmark {
  metric: string;
  acronym: string;
  healthyBenchmark: string;
  troubleshootThreshold: string;
  notes: string;
}

export interface PlatformCrisisPlaybook {
  situation: string;
  triggerCondition: string;
  immediateAction: string;
  boardroomBlufScript: string;
}

export interface PlatformBattlecard {
  id: string;
  platformId: AdPlatformType;
  platformName: string;
  badge: string;
  tagline: string;
  ecosystemReach: string;
  algorithmicCore: string; // e.g. Andromeda, Smart Bidding, Matched Audience
  keyFormats: string[];
  benchmarks: PlatformMetricBenchmark[];
  scalingRules: string[];
  pitfallsToAvoid: string[];
  crisisPlaybooks: PlatformCrisisPlaybook[];
  proOptimizationTips: string[];
}

export interface MarketingBookSummary {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  category: 'Strategic Messaging' | 'Direct Response Copywriting' | 'Growth Hacking & Testing' | 'Negotiation & Crisis' | 'Retention & Unit Economics';
  coverEmoji: string;
  coreThesis: string;
  agencyApplication: string;
  executiveKeyTakeaways: string[];
  boardroomScripts: Array<{
    scenario: string;
    script: string;
  }>;
}

export interface StoredKnowledgePayload {
  version: string;
  lastUpdated: string;
  platformCount: number;
  bookCount: number;
  metricCount: number;
  platforms: PlatformBattlecard[];
  books: MarketingBookSummary[];
}
