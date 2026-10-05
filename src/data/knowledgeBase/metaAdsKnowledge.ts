// ============================================================================
// META ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for Facebook, Instagram, Advantage+, CAPI, and Creative Fatigue
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const META_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: '50-Conversion Learning Phase & Consolidation',
    category: 'Delivery Algorithm',
    summary: 'An ad set requires approximately 50 optimization events per week to exit the learning phase and achieve stable delivery and lowest CPA.',
    benchmarks: 'Aim to keep >70% of total spend in campaigns that have completed the learning phase.',
    goldenRule: 'Account consolidation beats granular segmentation. Combine small ad sets into broad or ASC+ structures to pool conversion data.',
    troubleshootingSteps: [
      'Check if budget is spread too thin across dozens of small lookalikes and interest groups.',
      'Combine fatigued ad sets into a single broad audience targeting 18-65+ with automated placements.',
      'Avoid editing budget by more than 20% in a single day.',
      'Ensure the conversion event selected (e.g. Purchase vs Add to Cart) has sufficient natural volume.'
    ],
    executiveTalkingPoints: [
      'Meta machine learning optimizes when fed continuous data rather than fragmented silos.',
      'Exiting the learning phase reduces our CPA variance by up to 25%.',
      'We consolidate our account architecture to allow the Advantage+ algorithm to find the cheapest converters.'
    ]
  },
  {
    topic: 'Creative Fatigue & 3-Second Hook Rate Diagnostics',
    category: 'Creative Strategy',
    summary: 'Creative is the new targeting. Creative fatigue manifests as rising frequency, dropping outbound CTR, and collapsing video hook rates.',
    benchmarks: '3-second hook rate: 30%+ is healthy. Hold rate (3s to 15s): 25%+ is good. Video completion: 10%+.',
    goldenRule: 'When performance dips, change the first 3 seconds of the video, not the ad account settings or targeting.',
    troubleshootingSteps: [
      'Slice existing winner videos into 5 new hook variants with contrasting visual openers.',
      'Check frequency: if 7-day frequency exceeds 2.8 on broad audiences, deploy refreshed creative immediately.',
      'Separate dynamic creative testing (DCT) campaigns from the main scaling Advantage+ campaigns.',
      'Implement weekly creative drop cycles so refreshed assets are ready before CPA degrades.'
    ],
    executiveTalkingPoints: [
      'Audiences do not get tired of our brand; they get tired of seeing the exact same visual hook.',
      'Iterating the first 3 seconds of winning videos allows us to stabilize CPAs at 80% lower production cost.',
      'We treat creative production as a weekly performance pipeline rather than a monthly photoshoot.'
    ]
  },
  {
    topic: 'Conversions API (CAPI) & Event Deduplication',
    category: 'Tracking & Attribution',
    summary: 'Server-side CAPI sends web events directly from server to Meta, bypassing ad blockers and browser cookie restrictions. Requires event_id deduplication.',
    benchmarks: 'Event Match Quality (EMQ): 7.5/10 or higher. Deduplication rate: >98%.',
    goldenRule: 'Never fire browser pixel and CAPI without matching event_id and event_name; missing deduplication counts double conversions.',
    troubleshootingSteps: [
      'Inspect Meta Events Manager test events tab to confirm browser and server events pair successfully.',
      'Verify customer information parameters (hashed email, phone, IP, user agent) are passed with server payload.',
      'Check for 7-day click vs 1-day view attribution discrepancy to measure view-through inflation.',
      'Audit Shopify/backend webhook timestamps to ensure sub-minute transmission latency.'
    ],
    executiveTalkingPoints: [
      'CAPI provides resilience against browser privacy restrictions and signal loss.',
      'Maintaining a high Event Match Quality score allows Meta to attribute conversions that browser cookies miss.',
      'Accurate data ingestion directly lowers our effective acquisition cost by feeding clean signals to the bid model.'
    ]
  }
];
