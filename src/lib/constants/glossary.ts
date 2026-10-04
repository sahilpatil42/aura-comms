export interface MetricGlossaryItem {
  term: string;
  category: 'Performance Metrics' | 'Attribution & Tracking' | 'Ad Tech & Programmatic' | 'Executive Communication';
  shortDefinition: string;
  agencyContext: string;
  commonPitfall: string;
  formulaOrStandard?: string;
  executiveExample: string;
}

export const MARKETING_GLOSSARY: MetricGlossaryItem[] = [
  {
    term: 'BLUF (Bottom Line Up Front)',
    category: 'Executive Communication',
    shortDefinition: 'An executive communication standard where the conclusion, financial impact, and decisive containment action are stated in the very first sentence.',
    agencyContext: 'Prevents panicking clients or board members from interrupting or escalating before hearing solutions.',
    commonPitfall: 'Starting with chronological backstory ("So on Tuesday we looked at the campaigns and then...") which triggers client rage.',
    executiveExample: 'Bottom line up front: The CPL spike was caused by an asset group expansion which is now paused, keeping your daily burn locked to target.'
  },
  {
    term: 'Blended vs. Last-Click Attribution',
    category: 'Attribution & Tracking',
    shortDefinition: 'Last-Click attributes 100% of revenue to the final touchpoint, while Blended (MER) measures total revenue against total cross-channel ad spend.',
    agencyContext: 'Critical when assessing top-of-funnel channels (Meta, YouTube, Demand Gen) that feed bottom-of-funnel Google Search.',
    commonPitfall: 'Killing high-performing prospecting campaigns because their in-platform Last-Click ROAS appears low.',
    formulaOrStandard: 'MER = Total Revenue / Total Marketing Spend',
    executiveExample: 'While Meta in-platform last-click ROAS dropped to 1.4x, our blended Marketing Efficiency Ratio across all touchpoints held stable at 3.6x.'
  },
  {
    term: 'Offline Conversion Tracking (OCT) / CAPI',
    category: 'Attribution & Tracking',
    shortDefinition: 'Direct server-to-server API transmission of down-funnel business milestones (vetted deals, CRM stages, offline purchases) back into ad network algorithms.',
    agencyContext: 'Prevents smart bidding algorithms from optimizing for unqualified spam form fills.',
    commonPitfall: 'Relying solely on frontend thank-you page browser pixel fires which bots can easily trigger.',
    formulaOrStandard: 'Server-Side CAPI / GCLID CRM feedback loop',
    executiveExample: 'By feeding verified SQL milestones back to Google via OCT, we steer smart bidding toward six-figure pipeline rather than unvetted demo signups.'
  },
  {
    term: 'PMax Brand Cannibalization',
    category: 'Performance Metrics',
    shortDefinition: 'When a Performance Max campaign without a Brand Exclusion List bids on your own high-intent exact brand search queries.',
    agencyContext: 'Artificially inflates PMax ROAS while driving up Brand Search CPCs by competing against your own account.',
    commonPitfall: 'Assuming high PMax conversions are incremental when it is simply harvesting buyers who already searched your brand name.',
    formulaOrStandard: 'PMax Impression Share vs. Brand Exact Match Campaign CPC',
    executiveExample: 'Applying an account-level Brand Exclusion List isolates PMax to true incremental search terms and drops Brand CPC back to $1.50.'
  },
  {
    term: 'MRC Viewability Standard',
    category: 'Ad Tech & Programmatic',
    shortDefinition: 'Media Rating Council standard requiring at least 50% of display ad pixels to be visible in the active viewport for at least 1 continuous second (2 seconds for video).',
    agencyContext: 'Fundamental KPI in enterprise programmatic campaigns to verify ads were physically viewable by humans.',
    commonPitfall: 'Trading on open exchanges without pre-bid viewability filters, paying for ads rendered below the fold.',
    formulaOrStandard: 'MRC Display: ≥50% pixels for ≥1 sec; Video: ≥50% pixels for ≥2 sec',
    executiveExample: 'Our programmatic line items enforce a strict pre-bid DoubleVerify threshold requiring minimum 75% historical MRC viewability.'
  },
  {
    term: 'SIVT vs. GIVT (Invalid Traffic)',
    category: 'Ad Tech & Programmatic',
    shortDefinition: 'GIVT encompasses routine known web crawlers, while SIVT refers to sophisticated fraudulent activity such as domain spoofing, hidden ad stacking, and botnets.',
    agencyContext: 'Crucial for brand safety audits and demanding financial clawbacks from programmatic supply-side platforms (SSPs).',
    commonPitfall: 'Dismissing fraud alerts as general platform noise rather than extracting transactional logs for credit recovery.',
    formulaOrStandard: 'SIVT Rate = (Sophisticated Invalid Impressions / Total Served Impressions) * 100',
    executiveExample: 'We pulled raw log files isolating SIVT domain spoofing on low-tier exchanges to initiate an immediate credit clawback.'
  },
  {
    term: 'Quick Commerce Fill Rate & Dark Store OOS',
    category: 'Performance Metrics',
    shortDefinition: 'The percentage of customer orders or demand that can be fulfilled immediately by local micro-fulfillment dark stores without out-of-stock events.',
    agencyContext: 'In Zepto, Blinkit, and Instacart, running paid Sponsored Search in pin codes with zero inventory wastes 100% of media spend.',
    commonPitfall: 'Treating retail media like national search without hyper-local dark store inventory gating.',
    formulaOrStandard: 'Fill Rate = (In-Stock SKU Dark Stores / Total Targeted Dark Stores) * 100',
    executiveExample: 'We instituted pin-code level ad gating that automatically silences Sponsored Product bids if local dark store inventory drops below 10 units.'
  },
  {
    term: 'P95 Latency & Core Web Vitals (INP/LCP)',
    category: 'Performance Metrics',
    shortDefinition: 'The 95th percentile page render latency and user responsiveness metrics monitored by search engines and conversion tracking.',
    agencyContext: 'Slow landing page load times spike bounce rates and penalize Google Ads Quality Score and organic SEO ranking.',
    commonPitfall: 'Looking only at average load times (which mask catastrophic outlier delays for 5% of your highest-value users).',
    formulaOrStandard: 'INP ≤ 200ms; LCP ≤ 2.5s; CLS ≤ 0.1',
    executiveExample: 'Optimizing P95 latency from 4.2 seconds down to 1.4 seconds reduced mobile bounce rates by 22% and lifted Google Quality Scores.'
  }
];
