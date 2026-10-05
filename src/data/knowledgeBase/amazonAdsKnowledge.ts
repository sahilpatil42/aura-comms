// ============================================================================
// AMAZON ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for Sponsored Products, Sponsored Brands, ACOS/TACOS, and Buy Box
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const AMAZON_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: 'ACOS vs TACOS & Total Growth Economics',
    category: 'Retail Media Economics',
    summary: 'ACOS (Ad Spend / Ad Revenue) only measures direct ad efficiency. TACOS (Ad Spend / Total Revenue) measures true business health and organic flywheel lift.',
    benchmarks: 'Target ACOS: 20% - 30% for mature ASINs; 40% - 60% for new product launches. Target TACOS: 8% - 15%.',
    goldenRule: 'Never evaluate Amazon Ads in isolation from organic ranking. Ad sales generate BSR (Best Seller Rank) momentum that unlocks free organic sales.',
    troubleshootingSteps: [
      'Calculate TACOS weekly: if TACOS is decreasing while total sales grow, you are winning the organic flywheel.',
      'Check Buy Box percentage in Seller Central / Vendor Central; if Buy Box drops below 95%, advertising halts automatically.',
      'Audit competitor ASIN conquesting campaigns: ensure your bid does not exceed unit profit margin.',
      'Utilize negative exact match for low-converting search terms with >10 clicks and 0 orders.'
    ],
    executiveTalkingPoints: [
      'Amazon Ads is a retail shelf placement fee that accelerates our organic ranking momentum.',
      'Evaluating ACOS alone leads to premature ad cuts that choke overall sales revenue.',
      'Maintaining a healthy 10-12% TACOS guarantees profitable scale while defending our category share.'
    ]
  },
  {
    topic: 'Sponsored Products (SP) Match Type Harvesting',
    category: 'Campaign Architecture',
    summary: 'A tiered campaign structure uses Auto campaigns for search query discovery, Broad/Phrase for refinement, and Manual Exact for aggressive bid dominance.',
    benchmarks: 'Top-of-search impression share: >50% for core non-branded hero terms.',
    goldenRule: 'When an auto campaign term generates 3+ sales at target ACOS, promote it to Manual Exact and add it as Negative Exact to the Auto campaign.',
    troubleshootingSteps: [
      'Download Amazon Search Term Report weekly to isolate converting customer search queries.',
      'Apply Top of Search (First Page) bid adjustments (e.g. +30% to +80%) on exact match winners.',
      'Check retail inventory levels: pause campaigns 5 days before projected stockout to avoid BSR penalty.',
      'Run Sponsored Brands video ads to dominate 40% of the mobile search results page fold.'
    ],
    executiveTalkingPoints: [
      'Our keyword harvesting funnel continuously discovers new consumer search behavior at low cost.',
      'Isolating proven exact terms allows us to bid aggressively on top-of-search placement without budget leakage.',
      'Negative keyword sculpting ensures zero ad dollars are wasted on irrelevant browsing clicks.'
    ]
  }
];
