// ============================================================================
// AURA-COMMS MULTI-PLATFORM SCENARIO REPOSITORY
// Exports 470+ real-world roleplay scenarios across all 9 advertising platforms
// ============================================================================

import { Scenario } from '@/types/scenario';
import { GOOGLE_ADS_SCENARIOS } from './googleadsScenarios';
export { GOOGLE_ADS_SCENARIOS } from './googleadsScenarios';
import { META_ADS_SCENARIOS } from './metaadsScenarios';
export { META_ADS_SCENARIOS } from './metaadsScenarios';
import { TIKTOK_ADS_SCENARIOS } from './tiktokadsScenarios';
export { TIKTOK_ADS_SCENARIOS } from './tiktokadsScenarios';
import { LINKEDIN_ADS_SCENARIOS } from './linkedinadsScenarios';
export { LINKEDIN_ADS_SCENARIOS } from './linkedinadsScenarios';
import { SNAPCHAT_ADS_SCENARIOS } from './snapchatadsScenarios';
export { SNAPCHAT_ADS_SCENARIOS } from './snapchatadsScenarios';
import { REDDIT_ADS_SCENARIOS } from './redditadsScenarios';
export { REDDIT_ADS_SCENARIOS } from './redditadsScenarios';
import { AMAZON_ADS_SCENARIOS } from './amazonadsScenarios';
export { AMAZON_ADS_SCENARIOS } from './amazonadsScenarios';
import { FLIPKART_ADS_SCENARIOS } from './flipkartadsScenarios';
export { FLIPKART_ADS_SCENARIOS } from './flipkartadsScenarios';
import { QUICK_COMMERCE_SCENARIOS } from './quickcommerceScenarios';
export { QUICK_COMMERCE_SCENARIOS } from './quickcommerceScenarios';

export const ALL_PLATFORM_SCENARIOS_MAP: Record<string, Scenario[]> = {
  'google-ads': GOOGLE_ADS_SCENARIOS,
  'meta-ads': META_ADS_SCENARIOS,
  'tiktok-ads': TIKTOK_ADS_SCENARIOS,
  'linkedin-ads': LINKEDIN_ADS_SCENARIOS,
  'snapchat-ads': SNAPCHAT_ADS_SCENARIOS,
  'reddit-ads': REDDIT_ADS_SCENARIOS,
  'amazon-ads': AMAZON_ADS_SCENARIOS,
  'flipkart-ads': FLIPKART_ADS_SCENARIOS,
  'quick-commerce': QUICK_COMMERCE_SCENARIOS,
};

export function getScenariosForPlatform(platformId: string): Scenario[] {
  return ALL_PLATFORM_SCENARIOS_MAP[platformId] || ALL_PLATFORM_SCENARIOS_MAP['google-ads'] || [];
}

export const ALL_AGGREGATED_PLATFORM_SCENARIOS: Scenario[] = [
  ...GOOGLE_ADS_SCENARIOS,
  ...META_ADS_SCENARIOS,
  ...TIKTOK_ADS_SCENARIOS,
  ...LINKEDIN_ADS_SCENARIOS,
  ...SNAPCHAT_ADS_SCENARIOS,
  ...REDDIT_ADS_SCENARIOS,
  ...AMAZON_ADS_SCENARIOS,
  ...FLIPKART_ADS_SCENARIOS,
  ...QUICK_COMMERCE_SCENARIOS,
];
