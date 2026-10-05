// ============================================================================
// TIKTOK ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for Spark Ads, TikTok Shop, 2s Hook Rates, and Creator Sourcing
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const TIKTOK_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: 'Spark Ads Native Code Deployment',
    category: 'Ad Formats',
    summary: 'Spark Ads boost native organic creator videos using authorization codes. They inherit all organic likes, comments, and profile visits while converting traffic.',
    benchmarks: 'Spark Ads generate 43% higher conversion rates and 30% higher completion rates compared to non-spark in-feed ads.',
    goldenRule: 'Never run commercial, polished brand studio ads on TikTok. Don\'t make ads, make TikToks with authentic creator cadence and sound-on.',
    troubleshootingSteps: [
      'Obtain Spark video authorization code (7, 30, or 60 days) from creator via TikTok Creator Center.',
      'Check that video aspect ratio is strict 9:16 and text elements are inside safe margins to avoid UI overlap.',
      'Enable Sound-On with commercial music library tracks or original voiceover to prevent copyright muting.',
      'Pin top positive customer comment to social proof the ad within the first 2 seconds.'
    ],
    executiveTalkingPoints: [
      'Spark Ads borrow authentic social credibility from creators to bypass user ad blindness.',
      'All engagement generated feeds into long-term organic profile following at zero additional media cost.',
      'Our creative pipeline prioritizes real-world unboxing and product problem-solution narratives over studio glamour.'
    ]
  },
  {
    topic: 'TikTok Creative Decay & Fast Iteration Cycles',
    category: 'Creative Lifecycles',
    summary: 'TikTok ad creative fatigues in 7-14 days on average due to aggressive algorithm delivery. Waiting for monthly updates causes CPA spikes.',
    benchmarks: 'Rotate top 3 creative concepts every 7-10 days. Maintain at least 5 active video variants per ad group.',
    goldenRule: 'Build modular video assets: shoot 5 hooks, 3 bodies, and 3 CTAs to produce 45 unique permutations from a single creator shoot.',
    troubleshootingSteps: [
      'Monitor 2-second video view rate daily; when it drops below 25%, the hook has fatigued.',
      'Deploy hook swaps immediately: swap the opening 2.5 seconds while keeping the proven body and CTA.',
      'Scale horizontally across multiple ad groups rather than pumping all budget into one fatigued winner.',
      'Test interactive display cards and product stickers to increase low-friction tap-throughs.'
    ],
    executiveTalkingPoints: [
      'The TikTok algorithm rewards volume and freshness of visual ideas.',
      'By decomposing video shoots into modular hooks and body components, we generate 40+ variants per production sprint.',
      'This creative velocity shields our acquisition cost from sudden viral burnout.'
    ]
  }
];
