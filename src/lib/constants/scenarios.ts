import { Scenario } from '@/types/scenario';
import { 
  ALL_MARKETING_SCENARIOS,
  BEGINNER_SCENARIOS,
  INTERMEDIATE_SCENARIOS,
  ADVANCED_SCENARIOS,
  CORE_MARKETING_METRICS,
  GITHUB_KNOWLEDGE_ARTICLES
} from '@/data/githubMarketingKnowledgeBase';

export {
  ALL_MARKETING_SCENARIOS,
  BEGINNER_SCENARIOS,
  INTERMEDIATE_SCENARIOS,
  ADVANCED_SCENARIOS,
  CORE_MARKETING_METRICS,
  GITHUB_KNOWLEDGE_ARTICLES
};

// CRISIS_SCENARIOS now includes all 14 scenarios across Beginner, Intermediate, and Advanced tiers,
// defaulting to Beginner scenarios first so new users are not bombarded with C-suite crises!
export const CRISIS_SCENARIOS: Scenario[] = ALL_MARKETING_SCENARIOS;
