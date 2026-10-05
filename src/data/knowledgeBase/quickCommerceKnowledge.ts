// ============================================================================
// BLINKIT & QUICK COMMERCE LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for 10-Minute Delivery, Dark Store Inventory Pacing, and SOV
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const QUICK_COMMERCE_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: '10-Minute Impulse Economics & Share of Voice (SOV)',
    category: 'Quick Commerce Bidding',
    summary: 'Blinkit, Zepto, and Instamart shoppers make purchase decisions in under 10 seconds. Winning Slot #1 and #2 (top 2 banner/search tiles) captures 65% of orders.',
    benchmarks: 'Top 2 Search Tile Share of Voice (SOV): >50% for core category keywords. Direct Add to Cart: >18%.',
    goldenRule: 'If you are not in the top 3 slots on Quick Commerce, you do not exist. Users rarely scroll past the first screen fold.',
    troubleshootingSteps: [
      'Bid aggressively on generic category terms (e.g. "coffee", "chips", "oats") to capture impulse replenishment.',
      'Audit search keyword share of voice across major metro clusters (Delhi NCR, Mumbai, Bengaluru).',
      'Deploy Category Page header banners during high-traffic daypart windows (8-10 AM breakfast, 4-7 PM tea time).',
      'Optimize product pack sizing for quick commerce: smaller trial packs and bundles drive faster cart additions.'
    ],
    executiveTalkingPoints: [
      'Quick commerce is replacing the neighborhood kirana store for instant household replenishment.',
      'Dominating search slots 1 and 2 secures high-frequency repeat purchase cycles from affluent urban consumers.',
      'Our ad placements function as digital endcap grocery displays with zero physical distributor friction.'
    ]
  },
  {
    topic: 'Dark Store Geo-Inventory Alignment & Ad Throttling',
    category: 'Supply Chain & Pacing',
    summary: 'Quick commerce delivery relies on micro-fulfillment dark stores serving 2-3km radius pincodes. Advertising when local dark store stock is zero creates 100% ad waste.',
    benchmarks: 'Dark store in-stock rate: >95%. Wasted spend from out-of-stock pincodes: <3%.',
    goldenRule: 'Always integrate brand inventory feeds with ad campaigns; pause bidding automatically in pincodes where dark store stock drops below 10 units.',
    troubleshootingSteps: [
      'Review Blinkit/Zepto Brand Hub inventory reports daily at the micro-warehouse level.',
      'Shift media spend to high-inventory dark store clusters to clear excess regional stock.',
      'Coordinate with supply chain operations to trigger ad bursts 2 hours after fresh warehouse truck unloads.',
      'Analyze competitor stockouts: increase bids when rival brands go out of stock to permanently steal consumer loyalty.'
    ],
    executiveTalkingPoints: [
      'We link ad spend directly to live warehouse stock levels to eliminate wasted clicks on unavailable items.',
      'Capitalizing on rival brand stockouts allows us to capture new customers at peak urgency.',
      'This synchronized retail-media approach maximizes gross merchandise value while protecting trade margins.'
    ]
  }
];
