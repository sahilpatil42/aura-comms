// ============================================================================
// AURA-COMMS 9 MAJOR AD PLATFORMS & CHANNELS
// Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Snapchat Ads, Reddit Ads,
// Amazon Ads, Flipkart Ads, Blinkit & Quick Commerce Ads
// ============================================================================

export interface PlatformCurriculumUnit {
  unit: number;
  title: string;
  section: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'legend';
  description: string;
  count: number;
}

export interface AdPlatformInfo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  icon: string;
  brandColor: string;
  accentBg: string;
  borderColor: string;
  totalLessons: number;
  description: string;
  keyMetrics: string[];
  units: PlatformCurriculumUnit[];
}

export const AD_PLATFORMS: AdPlatformInfo[] = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    shortName: 'Google',
    tagline: 'Search, Performance Max, YouTube & Shopping',
    badge: 'Search & PMax',
    icon: '🔍',
    brandColor: '#4285f4',
    accentBg: 'rgba(66, 133, 244, 0.15)',
    borderColor: '#4285f4',
    totalLessons: 55,
    description: 'Master intent-based search mechanics, PMax asset groups, Quality Score optimization, negative keyword architecture, target CPA/ROAS bid strategies, and auction insights.',
    keyMetrics: ['Search CTR', 'Target CPA', 'Quality Score', 'Impression Share', 'ROAS', 'CPC'],
    units: [
      { unit: 1, title: 'Search Intent & Single-Word Foundations', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Master Search CTR, Quality Score components (Exp CTR, Ad Relevance, LP Exp), and match types.', count: 10 },
      { unit: 2, title: 'Negative Keywords & Search Query Mining', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Prevent budget waste by isolating intent and negative sculpting.', count: 10 },
      { unit: 3, title: 'Performance Max & Feed Architecture', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Control PMax cannibalization, asset group strength, and Merchant Center health.', count: 10 },
      { unit: 4, title: 'Smart Bidding & Target ROAS Algorithms', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Navigate tCPA/tROAS learning phases, value-based bidding, and offline conversions.', count: 10 },
      { unit: 5, title: 'C-Suite Budget Defense & CPC Inflation', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Explain auction dynamics, competitor bidding wars, and impression share drops to founders.', count: 8 },
      { unit: 6, title: 'Boardroom Retainer & Enterprise Governance', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Defend Google Ads MMM allocation, brand vs non-brand incrementality, and agency retainers.', count: 7 },
    ]
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    shortName: 'Meta',
    tagline: 'Facebook Feeds, Instagram Reels & Advantage+',
    badge: 'Social & DTC',
    icon: '♾️',
    brandColor: '#0668e1',
    accentBg: 'rgba(6, 104, 225, 0.15)',
    borderColor: '#0668e1',
    totalLessons: 55,
    description: 'Conquer the 50-conversion algorithmic learning phase, Advantage+ Shopping Campaigns (ASC), CAPI deduplication, creative hook rates, hold rates, and post-iOS 14.5 SKAN attribution.',
    keyMetrics: ['Outbound CTR', 'Cost Per Purchase', '3s Hook Rate', 'Hold Rate', 'CAPI Match Rate', 'Frequency'],
    units: [
      { unit: 1, title: 'Meta Feed Mechanics & Metric Literacy', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Understand CPM, Outbound CTR, Link Clicks vs Landing Page Views, and Pixel basics.', count: 10 },
      { unit: 2, title: 'Advantage+ Campaigns & Ad Set Structures', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Consolidate ad sets, set up ASC budgets, and configure audience caps.', count: 10 },
      { unit: 3, title: 'Creative Fatigue & Video Retention Diagnostics', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Diagnose 3-second hook rate drops, hold rate decay, and UGC video pacing.', count: 10 },
      { unit: 4, title: 'Conversions API (CAPI) & Attribution Modeling', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Reconcile 7-day click vs 1-day view attribution, event deduplication, and EMQ scores.', count: 10 },
      { unit: 5, title: 'CPL Spikes & Founder Crisis De-escalation', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Handle overnight 40%+ CPL spikes, audience saturation, and impatient CMO panics.', count: 8 },
      { unit: 6, title: 'Enterprise Scaling & Omnichannel ROAS Retainers', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Scale spend past $10k/day profitably, defend blended MER, and negotiate board expansions.', count: 7 },
    ]
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    shortName: 'TikTok',
    tagline: 'Spark Ads, In-Feed Video & TikTok Shop GMV',
    badge: 'Viral & Spark',
    icon: '🎵',
    brandColor: '#fe2c55',
    accentBg: 'rgba(254, 44, 85, 0.15)',
    borderColor: '#fe2c55',
    totalLessons: 52,
    description: 'Master fast-cycle TikTok creative iteration, Spark Ads native authorization, TikTok Shop live GMV scaling, 2-second hook rate, interactive add-ons, and creator affiliate networks.',
    keyMetrics: ['2s Video View Rate', 'Cost Per Mille (CPM)', 'Spark Ad Engagements', 'TikTok Shop ROAS', 'Creative Burn Rate'],
    units: [
      { unit: 1, title: 'TikTok Algorithm & Creative DNA Foundations', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Master Sound-On principles, 9:16 vertical safe zones, native text styles, and 2s hooks.', count: 9 },
      { unit: 2, title: 'Spark Ads & Creator Partnership Codes', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Deploy Spark Ads from creator accounts without hurting organic trust or account safety.', count: 9 },
      { unit: 3, title: 'Rapid Creative Fatigue & Weekly Pacing', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Combat 7-day creative burn rates, rotate hooks every 72 hours, and manage frequency.', count: 9 },
      { unit: 4, title: 'TikTok Shop & Live Stream GMV Scaling', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Integrate affiliate creator creator samples, product cards, and flash sale surges.', count: 9 },
      { unit: 5, title: 'Viral Slump Crises & Impatient Brand Execs', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'De-escalate client panics when CPA doubles following a viral spike burnout.', count: 8 },
      { unit: 6, title: 'Global TikTok Scale & Brand Safety Masterclass', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Execute multi-country expansion, comment sentiment defense, and enterprise contracts.', count: 8 },
    ]
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    shortName: 'LinkedIn',
    tagline: 'Sponsored Content, Lead Gen Forms & ABM',
    badge: 'B2B Enterprise',
    icon: '💼',
    brandColor: '#0a66c2',
    accentBg: 'rgba(10, 102, 194, 0.15)',
    borderColor: '#0a66c2',
    totalLessons: 52,
    description: 'Dominate high-ticket B2B demand generation: Account-Based Marketing (ABM) company lists, native Lead Gen Forms, job title & seniority targeting, defending $80+ CPMs, and pipeline velocity.',
    keyMetrics: ['Lead Gen Form Completion Rate', 'Cost Per Qualified Lead (CPQL)', 'Cost Per Mille (CPM)', 'Pipeline Velocity', 'Account Reach'],
    units: [
      { unit: 1, title: 'B2B Targeting & High-Ticket Foundations', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Understand Job Function vs Job Title, Company Size matching, and why LinkedIn CPMs are $60+.', count: 9 },
      { unit: 2, title: 'Native Lead Gen Forms & CVR Optimization', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Configure pre-filled forms, work email validation, and direct CRM webhooks.', count: 9 },
      { unit: 3, title: 'Account-Based Marketing (ABM) & Retargeting', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Upload matched company target lists, tier-1 accounts, and video thought-leadership.', count: 9 },
      { unit: 4, title: 'Document Ads & Thought Leader Ads (TLA)', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Amplify founder/executive personal posts and downloadable PDF reports for low-friction leads.', count: 9 },
      { unit: 5, title: 'Defending High CPL & Skeptical CFO Panics', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Educate stakeholders on $120 CPL vs $50k deal ACV, lead quality, and sales cycle lag.', count: 8 },
      { unit: 6, title: 'Enterprise Pipeline Alignment & Retainer Growth', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Align sales SLA with marketing qualified pipeline to preserve 6-figure agency retainers.', count: 8 },
    ]
  },
  {
    id: 'snapchat-ads',
    name: 'Snapchat Ads',
    shortName: 'Snapchat',
    tagline: 'Story Ads, Spotlight, Commercials & AR Lenses',
    badge: 'Gen Z & AR',
    icon: '👻',
    brandColor: '#fffc00',
    accentBg: 'rgba(255, 252, 0, 0.15)',
    borderColor: '#e5e200',
    totalLessons: 52,
    description: 'Unlock Gen Z & millennial buying power: 6-second Commercials, interactive AR Lens conversions, Snap Pixel Conversions API, dynamic product ads, and low-CPM mobile app install scaling.',
    keyMetrics: ['Swipe-Up Rate', 'Cost Per Swipe (CPS)', 'Screen Time Duration', 'AR Play Time', 'Cost Per Install (CPI)'],
    units: [
      { unit: 1, title: 'Vertical Video & Youth Demographic Mechanics', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Master full-screen 9:16 storytelling, swipe-up psychology, and audio-first pacing.', count: 9 },
      { unit: 2, title: 'Ad Formats: Single Video, Story & Collection Ads', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Structure tiles in Discover feed and seamless product catalog carousels.', count: 9 },
      { unit: 3, title: 'Non-Skippable Commercials & App Installs', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Leverage 6-second non-skippable premium video for brand recall and app store volume.', count: 9 },
      { unit: 4, title: 'Augmented Reality (AR) Lens Conversion Campaigns', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Measure average lens play time, virtual try-on sales, and viral friend shares.', count: 9 },
      { unit: 5, title: 'Client Skepticism on Gen Z ROI & Bot Traps', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Reassure traditional clients that Snap users convert into high-LTV repeat buyers.', count: 8 },
      { unit: 6, title: 'Global Omnichannel Reach & Brand Defense', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Integrate Snapchat into multi-touch attribution boards and secure annual budgets.', count: 8 },
    ]
  },
  {
    id: 'reddit-ads',
    name: 'Reddit Ads',
    shortName: 'Reddit',
    tagline: 'Subreddit Targeting, Conversation Placement & AMA',
    badge: 'Communities & Tech',
    icon: '🤖',
    brandColor: '#ff4500',
    accentBg: 'rgba(255, 69, 0, 0.15)',
    borderColor: '#ff4500',
    totalLessons: 52,
    description: 'Win high-intent, passionate communities: sub-reddit keyword targeting, Conversation Placement ads, Ask-Me-Anything (AMA) promotions, developer/gamer acquisition, and community feedback defense.',
    keyMetrics: ['Click-Through Rate (CTR)', 'Upvote Ratio', 'Cost Per Click (CPC)', 'Post-Click Time on Site', 'Downvote Sentiment'],
    units: [
      { unit: 1, title: 'Reddit Culture & Anti-Marketing Radar', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Learn how to write like a genuine community member without sounding like corporate slop.', count: 9 },
      { unit: 2, title: 'Subreddit Targeting & Interest Categorization', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Target specific niche subreddits (e.g. r/marketing, r/pcmasterrace, r/skincareaddiction).', count: 9 },
      { unit: 3, title: 'Conversation Placement Ads & Comment Strategy', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Place ads directly beneath the original post where the most engaged readers debate.', count: 9 },
      { unit: 4, title: 'Developer & B2B SaaS Customer Acquisition', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Capture engineers, founders, and tech enthusiasts with technical transparency.', count: 9 },
      { unit: 5, title: 'Community Backlash & Troll Comment Panics', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Guide clients through locked comments, angry redditor replies, and brand sentiment recovery.', count: 8 },
      { unit: 6, title: 'Enterprise Megathread AMA & Legend Scaling', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Execute live executive AMAs and scalable organic-to-paid feedback loops.', count: 8 },
    ]
  },
  {
    id: 'amazon-ads',
    name: 'Amazon Ads',
    shortName: 'Amazon',
    tagline: 'Sponsored Products, Brands, Display & Amazon DSP',
    badge: 'Retail Media',
    icon: '📦',
    brandColor: '#ff9900',
    accentBg: 'rgba(255, 153, 0, 0.15)',
    borderColor: '#ff9900',
    totalLessons: 52,
    description: 'Master the world’s largest retail media network: Sponsored Products (SP) keyword harvesting, Sponsored Brands video, ACOS vs TACOS, Buy Box defense, negative targets, and Amazon DSP programmatic.',
    keyMetrics: ['Advertising Cost of Sales (ACOS)', 'Total ACOS (TACOS)', 'Buy Box Win Rate', 'Search Term Conversion Rate', 'ROAS'],
    units: [
      { unit: 1, title: 'Retail Media Foundations & Buy Box Mechanics', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Why advertising without the Buy Box is impossible, and how retail readiness dictates ACOS.', count: 9 },
      { unit: 2, title: 'Sponsored Products (SP) & Match Types', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Exact, Phrase, Broad, and Product ASIN targeting to steal competitor sales.', count: 9 },
      { unit: 3, title: 'Search Term Harvesting & Negative Sculpting', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Graduate converting search terms from auto to manual exact, adding negatives to cut waste.', count: 9 },
      { unit: 4, title: 'Sponsored Brands, Video & Brand Store Lift', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Dominate top-of-search banners and autoplay video cards for category share.', count: 9 },
      { unit: 5, title: 'ACOS Surge & Inventory Stockout Crises', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Handle 60% ACOS spikes and manage ad throttling before Amazon inventory hits zero.', count: 8 },
      { unit: 6, title: 'Amazon DSP & Full-Funnel Retainer Expansion', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Leverage off-Amazon audience data (DSP) to protect prime shelf-space and retail margins.', count: 8 },
    ]
  },
  {
    id: 'flipkart-ads',
    name: 'Flipkart Ads',
    shortName: 'Flipkart',
    tagline: 'Product Listing Ads (PLA), Brand Story & BBD',
    badge: 'Commerce Media',
    icon: '🛍️',
    brandColor: '#2874f0',
    accentBg: 'rgba(40, 116, 240, 0.15)',
    borderColor: '#2874f0',
    totalLessons: 52,
    description: 'Drive high-volume Indian e-commerce growth: Product Listing Ads (PLA), Product Contextual Ads (PCA), Big Billion Days (BBD) hyper-scaling, Brand Story modules, and category search bidding.',
    keyMetrics: ['Return on Ad Spend (ROAS)', 'Cost Per Click (CPC)', 'Share of Voice (SOV)', 'Organic Rank Lift', 'Conversion Rate'],
    units: [
      { unit: 1, title: 'Flipkart Commerce Cloud & PLA Foundations', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Understand PLA mechanics, catalog quality score, and competitive bidding on Flipkart.', count: 9 },
      { unit: 2, title: 'Product Contextual Ads & Category Placement', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Win high-intent search shelves and similar product suggestion carousels.', count: 9 },
      { unit: 3, title: 'Search Keyword Bidding & Negative Target Rules', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Protect your brand name while conquesting rival Indian FMCG and electronics brands.', count: 9 },
      { unit: 4, title: 'Brand Story & Video In-App Discovery', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Deploy interactive media across category landing pages and search result banners.', count: 9 },
      { unit: 5, title: 'Big Billion Days (BBD) Surge & RoAS Dips', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Calm panicking founders when CPCs quadruple during peak festival sales windows.', count: 8 },
      { unit: 6, title: 'Pan-India Commerce Media Retainer Scaling', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Build integrated Flipkart-plus-DTC growth roadmaps for enterprise consumer brands.', count: 8 },
    ]
  },
  {
    id: 'quick-commerce',
    name: 'Blinkit & Q-Commerce',
    shortName: 'Blinkit',
    tagline: 'Search Bidding, Hero Banners & 10-Min Delivery SOV',
    badge: '10-Min Delivery',
    icon: '⚡',
    brandColor: '#f8cb46',
    accentBg: 'rgba(248, 203, 70, 0.15)',
    borderColor: '#f8cb46',
    totalLessons: 52,
    description: 'Conquer ultra-fast grocery & FMCG retail: Blinkit, Zepto, and Instamart keyword auctions, Share of Voice (SOV) dominance, dark store geo-inventory pacing, and impulse purchase triggers.',
    keyMetrics: ['Share of Voice (SOV)', 'Direct Add to Cart Rate', 'Cost Per Acquisition (CPA)', 'Dark Store Out-of-Stock Rate', 'Blended ROAS'],
    units: [
      { unit: 1, title: '10-Minute Delivery & Impulse Economics', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Why consumer attention is under 8 seconds, and how in-cart suggestions drive 40% of sales.', count: 9 },
      { unit: 2, title: 'Blinkit Keyword Search & Top-of-Search Bidding', section: 'Layer 1 · Beginner', difficulty: 'beginner', description: 'Win slot #1 and #2 for critical category terms (e.g. coffee, chips, diapers).', count: 9 },
      { unit: 3, title: 'Dark Store Geo-Inventory & Ad Throttling', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Pause ads in micro-pincodes where local dark store stock drops below 10 units.', count: 9 },
      { unit: 4, title: 'Category Hero Banners & Dayparting Surges', section: 'Layer 2 · Intermediate', difficulty: 'intermediate', description: 'Target breakfast, afternoon tea, and late-night munchies with time-sensitive copy.', count: 9 },
      { unit: 5, title: 'Stockout Ad Waste & Angry CMO Escalations', section: 'Layer 3 · Advanced', difficulty: 'advanced', description: 'Explain why ads kept spending when 40% of dark stores went out of stock.', count: 8 },
      { unit: 6, title: 'Multi-App Dominance (Blinkit + Zepto + Instamart)', section: 'Layer 4 · Legend', difficulty: 'legend', description: 'Architect multi-platform Q-Commerce retainers and defend FMCG trade marketing budgets.', count: 8 },
    ]
  },
];

export function getPlatformById(id: string): AdPlatformInfo {
  return AD_PLATFORMS.find((p) => p.id === id) || AD_PLATFORMS[0];
}
