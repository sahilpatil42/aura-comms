// ============================================================================
// GOOGLE ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for Search, PMax, Shopping, YouTube, GDN, and Smart Bidding
// ============================================================================

export interface PlatformKnowledgeEntry {
  topic: string;
  category: string;
  summary: string;
  benchmarks: string;
  goldenRule: string;
  troubleshootingSteps: string[];
  executiveTalkingPoints: string[];
}

export const GOOGLE_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: 'Quality Score Architecture & Optimization',
    category: 'Search Mechanics',
    summary: 'Google calculates Quality Score (1-10) using Expected CTR, Ad Relevance, and Landing Page Experience. QS is a diagnostic tool, not an auction bid multiplier.',
    benchmarks: 'High-intent search targets: 7/10 or higher. Brand keywords should be 9/10 or 10/10.',
    goldenRule: 'Never improve QS by rewriting copy to match keywords verbatim if it ruins human conversion intent. Align landing page H1 with primary search theme.',
    troubleshootingSteps: [
      'Check Auction Insights for impression share lost due to rank vs lost due to budget.',
      'Audit negative keyword list to ensure search query sculpting isolates high-converting exact match.',
      'Check mobile page load speed using PageSpeed Insights; sub-2.5s LCP is required for Good LP experience.',
      'Test 3 responsive search ad variations with pinning on Headline 1 for brand/location congruence.'
    ],
    executiveTalkingPoints: [
      'Quality score directly determines our discount rate in the ad auction.',
      'Raising our average QS from 5 to 8 reduces our effective CPC by approximately 30% for identical volume.',
      'We do not chase arbitrary scores; we prioritize high-margin query conversions over vanity metrics.'
    ]
  },
  {
    topic: 'Performance Max (PMax) Cannibalization & Asset Groups',
    category: 'Algorithmic Campaigns',
    summary: 'PMax serves across Search, Shopping, YouTube, Display, Discover, and Maps. Left unmanaged, PMax will take credit for easy branded search and remarketing.',
    benchmarks: 'PMax target ROAS: 3.5x - 5.5x for DTC; ROAS > 8x usually indicates brand cannibalization.',
    goldenRule: 'Always add a Brand Exclusion list to your PMax campaigns to force PMax to generate incremental, net-new customer acquisition.',
    troubleshootingSteps: [
      'Apply brand exclusion list via campaign settings to prevent PMax bidding on company trademarks.',
      'Review Search Term Insights weekly to verify PMax is not bidding on junk or brand name variations.',
      'Ensure Merchant Center feed has clean title tags: Brand + Product Type + Key Attribute (Size/Color/Model).',
      'Upload high-quality vertical video (9:16) and horizontal (16:9) to prevent auto-generated slideshows.'
    ],
    executiveTalkingPoints: [
      'PMax is an intent-harvesting engine across 6 Google surfaces.',
      'Without brand exclusions, reported ROAS is artificially inflated while net revenue stays flat.',
      'Our feed-first asset group strategy ensures our budget wins high-margin search shelves without cannibalization.'
    ]
  },
  {
    topic: 'Target CPA & Target ROAS Smart Bidding Transitions',
    category: 'Bid Strategies',
    summary: 'Smart Bidding uses contextual signals (device, location, time, OS, query) to adjust bids per auction. It requires conversion volume to learn effectively.',
    benchmarks: 'Minimum 30-50 conversions per month per campaign before switching from Maximize Clicks to tCPA/tROAS.',
    goldenRule: 'Never change target CPA or ROAS by more than 15-20% within a 7-day period; larger shifts reset the algorithmic learning phase.',
    troubleshootingSteps: [
      'Evaluate conversion lag: check the Conversion Lag report before diagnosing sudden drops.',
      'If volume drops below threshold, group similar campaigns or shift up-funnel to micro-conversions temporarily.',
      'Set bid caps if CPCs spike excessively during auction volatility.',
      'Verify Enhanced Conversions are transmitting first-party hashed user data for accurate attribution.'
    ],
    executiveTalkingPoints: [
      'Smart bidding algorithms need stability to predict auction conversion probabilities.',
      'Sudden budget or target swings force the machine into learning mode, increasing volatility.',
      'We step bids gradually by 10-15% increments to protect revenue while scaling volume.'
    ]
  }
];
