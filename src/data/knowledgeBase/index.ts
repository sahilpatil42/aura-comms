// ============================================================================
// AURA-COMMS MULTI-PLATFORM KNOWLEDGE BASE REPOSITORY
// Comprehensive local playbooks for Google, Meta, TikTok, LinkedIn, Snapchat,
// Reddit, Amazon, Flipkart, and Quick Commerce (Blinkit)
// ============================================================================

export * from './googleAdsKnowledge';
export * from './metaAdsKnowledge';
export * from './tiktokAdsKnowledge';
export * from './linkedinAdsKnowledge';
export * from './snapchatAdsKnowledge';
export * from './redditAdsKnowledge';
export * from './amazonAdsKnowledge';
export * from './flipkartAdsKnowledge';
export * from './quickCommerceKnowledge';

import { GOOGLE_ADS_KNOWLEDGE, PlatformKnowledgeEntry } from './googleAdsKnowledge';
import { META_ADS_KNOWLEDGE } from './metaAdsKnowledge';
import { TIKTOK_ADS_KNOWLEDGE } from './tiktokAdsKnowledge';
import { LINKEDIN_ADS_KNOWLEDGE } from './linkedinAdsKnowledge';
import { SNAPCHAT_ADS_KNOWLEDGE } from './snapchatAdsKnowledge';
import { REDDIT_ADS_KNOWLEDGE } from './redditAdsKnowledge';
import { AMAZON_ADS_KNOWLEDGE } from './amazonAdsKnowledge';
import { FLIPKART_ADS_KNOWLEDGE } from './flipkartAdsKnowledge';
import { QUICK_COMMERCE_KNOWLEDGE } from './quickCommerceKnowledge';

export const PLATFORM_KNOWLEDGE_MAP: Record<string, PlatformKnowledgeEntry[]> = {
  'google-ads': GOOGLE_ADS_KNOWLEDGE,
  'meta-ads': META_ADS_KNOWLEDGE,
  'tiktok-ads': TIKTOK_ADS_KNOWLEDGE,
  'linkedin-ads': LINKEDIN_ADS_KNOWLEDGE,
  'snapchat-ads': SNAPCHAT_ADS_KNOWLEDGE,
  'reddit-ads': REDDIT_ADS_KNOWLEDGE,
  'amazon-ads': AMAZON_ADS_KNOWLEDGE,
  'flipkart-ads': FLIPKART_ADS_KNOWLEDGE,
  'quick-commerce': QUICK_COMMERCE_KNOWLEDGE,
};

export function getKnowledgeForPlatform(platformId: string): PlatformKnowledgeEntry[] {
  return PLATFORM_KNOWLEDGE_MAP[platformId] || GOOGLE_ADS_KNOWLEDGE;
}
