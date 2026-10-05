// ============================================================================
// FLIPKART ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for Product Listing Ads (PLA), PCA, Brand Story, and Big Billion Days
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const FLIPKART_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: 'Product Listing Ads (PLA) & Catalog Score',
    category: 'E-Commerce Bidding',
    summary: 'Flipkart PLA places your products at the top of category pages and search results. Bidding efficiency is heavily gated by Catalog Quality Score.',
    benchmarks: 'Target ROAS: 3.5x - 7.0x depending on category margins. Catalog Score: 85%+ recommended.',
    goldenRule: 'High bids cannot compensate for a low Flipkart catalog score. Ensure 5+ high-res images, detailed specs, and customer ratings > 4.1.',
    troubleshootingSteps: [
      'Check Flipkart Seller Hub for listing quality benchmark score before raising bids.',
      'Separate high-velocity hero SKUs from long-tail catalog items into dedicated campaigns.',
      'Audit Search Term report for irrelevant regional keyword leakage and apply negatives.',
      'Ensure pricing is competitive with Buy Zone algorithms during major promotional windows.'
    ],
    executiveTalkingPoints: [
      'Flipkart is the commerce backbone for Tier 2 and Tier 3 Indian consumer demand.',
      'Optimizing listing catalog scores lowers our required CPC bid by up to 28% in contested auctions.',
      'PLA dominance drives organic category shelf position, sustaining sales long after campaign flighting.'
    ]
  },
  {
    topic: 'Big Billion Days (BBD) Festive Scaling Strategy',
    category: 'Peak Event Management',
    summary: 'During festive mega-sales like Big Billion Days, traffic surges 5x-10x, CPCs spike by 200-400%, and customer conversion rates peak dramatically.',
    benchmarks: 'BBD Conversion Rate: 4.5% - 8.0%. Budget pacing: allocate 60% of monthly spend during the 6-day sale window.',
    goldenRule: 'Never run out of budget before 2 PM during festive sales. Daypart budgets to capture evening and late-night flash sales.',
    troubleshootingSteps: [
      'Pre-load ad account wallet 72 hours prior to sale start to prevent banking gateway downtime.',
      'Set automated rules to increase bids by 30% when ROAS exceeds target during peak sale hours.',
      'Monitor warehouse fulfillment and inventory sync every 3 hours to pause ads on depleted stock.',
      'Deploy Brand Story banners on top category landing pages to capture broad festive shoppers.'
    ],
    executiveTalkingPoints: [
      'BBD represents over 35% of annual consumer electronics and fashion purchase volume.',
      'We deploy a dynamic pacing model that protects margin during midday traffic and surges during peak checkout hours.',
      'Strategic early bidding secures top-of-page real estate before auction clearing prices peak.'
    ]
  }
];
