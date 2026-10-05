// ============================================================================
// REDDIT ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for Subreddit Targeting, Conversation Placements, and Community Sentiment
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const REDDIT_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: 'Subreddit Targeting & Authentic Tone Defense',
    category: 'Community Mechanics',
    summary: 'Reddit users are deeply skeptical of traditional corporate marketing. High-performing ads look and sound like thoughtful Reddit posts.',
    benchmarks: 'Upvote ratio: >70%. CTR: 0.35% - 0.70%. Cost per Click: $0.80 - $2.20.',
    goldenRule: 'Never write clickbait or corporate jargon. State the technical details, admit trade-offs, and treat redditors as peers.',
    troubleshootingSteps: [
      'Select 10-15 high-intent niche subreddits (e.g. r/SaaS, r/webdev, r/buildapc) rather than broad interest categories.',
      'Decide whether to enable comments: enable comments only if an active community manager can reply within 1 hour.',
      'If comments are left open, seed the first comment with helpful technical FAQ and founder context.',
      'Check landing page congruence: ensure the destination page has technical specs, zero popups, and clear pricing.'
    ],
    executiveTalkingPoints: [
      'Reddit is the internet\'s advice engine where consumers research buying decisions before pulling the trigger.',
      'Addressing Reddit skepticism with radical transparency converts the highest-LTV technical customers.',
      'Conversation Placement places our brand directly inside top debate threads where product comparisons happen.'
    ]
  },
  {
    topic: 'Conversation Placement vs Feed Placement',
    category: 'Ad Placement Architecture',
    summary: 'Conversation placement positions ads directly between the original post and the comment thread, capturing users during peak reading focus.',
    benchmarks: 'Conversation placement generates 35% higher time-on-site and 20% lower cost-per-click than main feed ads.',
    goldenRule: 'Tailor ad copy specifically to discussion: "Saw this debate in r/marketing — here is how our team solved it without $20k tools."',
    troubleshootingSteps: [
      'Separate Feed and Conversation ad groups to analyze CPA and dwell time independently.',
      'Set device targeting to mobile + desktop if targeting B2B developers who browse at workstations.',
      'Use pixel conversion tracking to measure 28-day click-through attribution on high-consideration purchases.',
      'Monitor negative downvote brigades; pause and refresh creative if downvotes spike above 60%.'
    ],
    executiveTalkingPoints: [
      'Users read comments on Reddit with high cognitive focus, making Conversation placement prime real estate.',
      'By joining the conversation constructively, we capture buyers at the exact moment of product research.',
      'This channel provides high-intent incremental volume outside saturated Meta and Google auctions.'
    ]
  }
];
