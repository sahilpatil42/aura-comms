// ============================================================================
// LINKEDIN ADS LOCAL KNOWLEDGE BASE & PLAYBOOK
// Master reference for B2B ABM, Lead Gen Forms, High-Ticket CPMs, and Thought Leader Ads
// ============================================================================

import { PlatformKnowledgeEntry } from './googleAdsKnowledge';

export const LINKEDIN_ADS_KNOWLEDGE: PlatformKnowledgeEntry[] = [
  {
    topic: 'Account-Based Marketing (ABM) Company Matching',
    category: 'B2B Targeting',
    summary: 'LinkedIn matched audiences allow uploading company CSV lists (domain, name, country) to isolate decision makers at target enterprise accounts.',
    benchmarks: 'Target company list match rate: >70%. Target audience size: 20,000 to 80,000 professional members per campaign.',
    goldenRule: 'Never target Job Titles alone due to title inflation; combine Job Function + Seniority (e.g. Marketing + VP/Director) for 4x larger addressable reach.',
    troubleshootingSteps: [
      'Ensure company list CSV includes company domain, website URL, and country code for maximum algorithmic match.',
      'Exclude current customers and closed-lost accounts to prevent wasting $70+ CPMs on non-prospects.',
      'Use Demographics reporting tab weekly to audit which specific companies are clicking your ads.',
      'Deploy Thought Leader Ads (TLA) promoting founder or sales VP posts to build human trust before cold pitch.'
    ],
    executiveTalkingPoints: [
      'LinkedIn is the only ad network with verified, zero-fraud corporate job and company demographic data.',
      'While CPMs are higher ($65-$95), waste is virtually zero because we only serve impressions to verified buying committees.',
      'A $150 cost per qualified lead is exceptionally profitable when average deal ACV exceeds $25,000.'
    ]
  },
  {
    topic: 'Native Lead Gen Forms vs Landing Page Drop-off',
    category: 'Conversion Optimization',
    summary: 'Native Lead Gen Forms auto-populate with user profile information (Name, Work Email, Company, Job Title), eliminating mobile typing friction.',
    benchmarks: 'Lead Gen Form submission rate: 10% - 15% (compared to 1.5% - 3% on external mobile landing pages).',
    goldenRule: 'Always add at least one custom qualification question (e.g. "Annual ad spend?" or "Team size?") to screen out low-intent signups.',
    troubleshootingSteps: [
      'Configure auto-fill settings to require Work Email rather than personal Gmail/Yahoo addresses.',
      'Connect Zapier or native HubSpot/Salesforce webhook for sub-5 minute sales team follow-up SLA.',
      'Offer tangible high-value gated assets (benchmarks report, spreadsheet template, ROI calculator).',
      'A/B test Document Ads allowing prospects to read the first 3 pages directly in the feed before gating.'
    ],
    executiveTalkingPoints: [
      'Native forms eliminate mobile drop-off by pre-populating verified professional identity.',
      'Our custom qualification gating ensures the sales development team only receives high-intent, sales-ready prospects.',
      'Speed to lead within 15 minutes of submission increases deal closing probability by over 300%.'
    ]
  }
];
