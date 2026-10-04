import { PlatformBattlecard, MarketingBookSummary } from '@/types/knowledge';

// ============================================================================
// COMPREHENSIVE AD PLATFORM BATTLECARDS
// Meta Ads, Google Ads, LinkedIn Ads, Snapchat Ads, GPT Ads, TikTok, Amazon, ASA, Q-Commerce
// ============================================================================

export const ALL_PLATFORM_BATTLECARDS: PlatformBattlecard[] = [
  // 1. META ADS
  {
    id: 'meta-ads-battlecard',
    platformId: 'meta-ads',
    platformName: 'Meta Ads (Facebook & Instagram)',
    badge: 'Performance & Paid Social',
    tagline: 'Algorithmic auction power leveraging Andromeda AI, Advantage+ Shopping, and vertical Reels.',
    ecosystemReach: '3.1+ Billion Daily Active Users across Instagram, Facebook, Reels, and Messenger.',
    algorithmicCore: 'Andromeda AI retrieval engine + Advantage+ creative optimization. Relies on creative diversity to segment audiences rather than manual interest targeting.',
    keyFormats: [
      'Advantage+ Shopping Campaigns (ASC)',
      'Instagram 9:16 Reels & Stories',
      'Feed In-Stream Carousel & Static 1:1',
      'Dynamic Creative Testing (DCT 3:2:2)',
      'Click-to-WhatsApp / Direct Messenger Ads'
    ],
    benchmarks: [
      {
        metric: 'Hook Rate (Thumbstop)',
        acronym: '3s Video Views ÷ Impressions',
        healthyBenchmark: '28% - 42%',
        troubleshootThreshold: '< 20% (First 3 seconds failing to capture attention)',
        notes: 'Determines whether CPM will be penalized by auction quality scores.'
      },
      {
        metric: 'Hold Rate (Retention)',
        acronym: '15s Video Views ÷ 3s Views',
        healthyBenchmark: '22% - 35%',
        troubleshootThreshold: '< 15% (Video script loses interest after opening hook)',
        notes: 'High hold rate directly correlates with high landing page click-through.'
      },
      {
        metric: 'Click-Through Rate (CTR)',
        acronym: 'Outbound CTR',
        healthyBenchmark: '1.2% - 2.8%',
        troubleshootThreshold: '< 0.8% (Creative headline or visual angle mismatched to offer)',
        notes: 'Measure Outbound CTR (clicks to website) rather than all clicks (which includes like/expand).'
      },
      {
        metric: 'Cost Per Mille (CPM)',
        acronym: 'CPM',
        healthyBenchmark: '$14.00 - $28.00',
        troubleshootThreshold: '> $45.00 (Signals heavy audience saturation or low ad feedback score)',
        notes: 'Spikes in Q4 (holiday peak) and on hyper-narrow audience restrictions.'
      },
      {
        metric: 'Event Quality Match Score',
        acronym: 'CAPI EMQ',
        healthyBenchmark: '8.2 - 9.5 / 10.0',
        troubleshootThreshold: '< 7.0 (Missing hashed email, phone, external_id, or IP payload)',
        notes: 'Critical for bypassing iOS 14.5+ attribution loss through Conversions API.'
      }
    ],
    scalingRules: [
      'Scale horizontally by testing 3-5 fresh creative visual angles weekly rather than pumping budget into one ad set.',
      'Scale vertically in increments of 15% to 20% every 48 to 72 hours to prevent resetting the 50-conversion learning phase.',
      'Use Cost Cap or Bid Cap for spend protection when scaling past $20k/month to avoid algorithmic auction runaway.'
    ],
    pitfallsToAvoid: [
      'Editing ad copy or swapping creatives inside an active ad set (always duplicate into a new test ad set).',
      'Over-segmenting audiences into 20 tiny interest groups (competes with yourself in internal auction overlap).',
      'Relying solely on Meta in-app pixel without server-side Conversions API (CAPI) with browser event deduplication.'
    ],
    crisisPlaybooks: [
      {
        situation: 'Sudden CPL / CAC Spike (+40% overnight)',
        triggerCondition: 'Frequency exceeds 3.8 on top ad set and CPM jumps 30%+',
        immediateAction: 'Deploy 3 fresh video hooks into Advantage+ campaign, cap ad set budget by 20%, and verify CAPI server payload.',
        boardroomBlufScript: '"Alex, our CPL rose by 41% because creative frequency reached 4.2, driving auction CPMs from $18 to $26. We immediately injected 3 fresh video hook variations, capped spend on saturated sets, and pacing is locked to return to our $40 target within 48 hours."'
      }
    ],
    proOptimizationTips: [
      'Dynamic Creative Testing (DCT 3:2:2): Always test 3 creatives, 2 primary texts, and 2 headlines per sandbox ad set.',
      'Broad targeting + Creative as targeting: Allow Andromeda AI to find buyers based on visual semantics rather than rigid interest bubbles.'
    ]
  },

  // 2. GOOGLE ADS
  {
    id: 'google-ads-battlecard',
    platformId: 'google-ads',
    platformName: 'Google Ads (Search, PMax, YouTube & Demand Gen)',
    badge: 'Intent-Driven Search & Ecosystem',
    tagline: 'Capturing active commercial intent across Search, YouTube, Maps, Gmail, and Performance Max.',
    ecosystemReach: '8.5+ Billion searches daily, 2.7+ Billion active monthly YouTube users.',
    algorithmicCore: 'Smart Bidding (Target CPA, Target ROAS, Maximize Conversion Value) + Value-Based Bidding (VBB). Evaluates real-time query signals at auction millisecond.',
    keyFormats: [
      'Responsive Search Ads (RSA) with Phrase & Exact Match',
      'Performance Max (PMax) Asset Groups with Audience Signals',
      'Demand Gen (YouTube Shorts + In-Stream + Discover)',
      'Google Merchant Center (GMC) Shopping Feeds',
      'Local Services Ads (LSA) & Google Maps Placements'
    ],
    benchmarks: [
      {
        metric: 'Search Click-Through Rate',
        acronym: 'Search CTR',
        healthyBenchmark: '4.5% - 8.5%',
        troubleshootThreshold: '< 3.0% (Poor Quality Score or uncompelling RSA pinned headlines)',
        notes: 'High intent branded search should exceed 15% CTR.'
      },
      {
        metric: 'Search Impression Share (IS)',
        acronym: 'Impression Share',
        healthyBenchmark: '70% - 90% (Brand: >95%)',
        troubleshootThreshold: '< 50% (Losing auction due to insufficient budget or low Ad Rank)',
        notes: 'Audit Lost IS (budget) vs Lost IS (rank) to diagnose if problem is money or Quality Score.'
      },
      {
        metric: 'Conversion Rate (CVR)',
        acronym: 'CVR',
        healthyBenchmark: '3.8% - 7.5%',
        troubleshootThreshold: '< 2.0% (Search query mismatch, slow mobile landing page, or complex checkout)',
        notes: 'Examine Search Terms Report to strip out low-intent query bleeding.'
      },
      {
        metric: 'Cost Per Acquisition (CPA)',
        acronym: 'CPA',
        healthyBenchmark: 'Within ±10% of Target CPA',
        troubleshootThreshold: '> 30% above Target CPA for 4 consecutive days',
        notes: 'Smart Bidding requires at least 30 conversions per month to train bidding vectors reliably.'
      }
    ],
    scalingRules: [
      'Audit PMax cannibalization: Ensure Brand Search has its own standalone campaign and PMax has a Brand Exclusion List applied.',
      'Broad Match + Smart Bidding synergy: Only enable Broad Match when paired with Target CPA / Target ROAS and a robust account-level negative keyword library.',
      'Scale budget by max 15% every 5 days to avoid triggering algorithmic re-learning.'
    ],
    pitfallsToAvoid: [
      'Letting PMax take credit for Brand Search conversions (inflates reported ROAS while non-brand prospecting starves).',
      'Neglecting negative keyword lists (queries like "free", "login", "jobs", "careers", "complaints" bleed thousands).',
      'Running Google Search without Enhanced Conversions enabled in GA4 / Google Ads tag.'
    ],
    crisisPlaybooks: [
      {
        situation: 'PMax ROAS Looks Great but Net Revenue Collapsed',
        triggerCondition: 'PMax asset group spending 80% of budget bidding on client own brand name searches',
        immediateAction: 'Apply Brand Exclusion List to PMax immediately, re-enable dedicated Exact Match Brand Search campaign with target impression share 95%.',
        boardroomBlufScript: '"David, our PMax campaign was cannibalizing existing organic brand searchers rather than acquiring new customers. We applied a brand exclusion filter this morning and segregated brand defense into an exact-match campaign, refocusing $15,000 monthly into genuine new customer acquisition."'
      }
    ],
    proOptimizationTips: [
      'Run the PMax Search Terms Script or Google Ads API query script weekly to uncover hidden asset group search queries.',
      'GMC Feed Optimization: Title formula = [Brand] + [Product Type] + [Key Attribute / Color / Size] + [Model Number].'
    ]
  },

  // 3. LINKEDIN ADS
  {
    id: 'linkedin-ads-battlecard',
    platformId: 'linkedin-ads',
    platformName: 'LinkedIn Ads (B2B Enterprise & ABM)',
    badge: 'Enterprise B2B & Account-Based Marketing',
    tagline: 'High-ticket B2B targeting with first-party professional graph data, firmographics, and ABM lists.',
    ecosystemReach: '1.0+ Billion verified professionals, 67+ Million companies, 130+ Million decision makers.',
    algorithmicCore: 'B2B objective-based auction (Lead Generation, Website Conversions, Video Views). High floor CPM offset by zero bot traffic and verified executive seniority.',
    keyFormats: [
      'Thought Leader Ads (Promoting CEO / Executive personal posts)',
      'Document Ads (PDF Slide Decks / Ungated & Gated Whitepapers)',
      'Native Lead Gen Forms (Auto-filled with LinkedIn profile data)',
      'Single Image Sponsored Content & Video Ads',
      'Message Ads & Conversation InMail'
    ],
    benchmarks: [
      {
        metric: 'Cost Per Mille (CPM)',
        acronym: 'CPM',
        healthyBenchmark: '$45.00 - $95.00',
        troubleshootThreshold: '> $130.00 (Excessively narrow targeting < 20,000 audience size)',
        notes: 'Targeting C-suite in Tier 1 US metros will naturally trend toward $80-$120 CPM.'
      },
      {
        metric: 'Click-Through Rate (CTR)',
        acronym: 'CTR',
        healthyBenchmark: '0.45% - 0.85% (Thought Leader: 1.5% - 3.2%)',
        troubleshootThreshold: '< 0.35% (Creative looks like a corporate billboard rather than native content)',
        notes: 'Thought Leader Ads generate 2x to 3x higher CTR than standard company page ads.'
      },
      {
        metric: 'Lead Form Completion Rate',
        acronym: 'Form Submit Rate',
        healthyBenchmark: '12% - 22%',
        troubleshootThreshold: '< 8% (Too many custom questions or asking for personal mobile phone numbers)',
        notes: 'Keep form fields to Work Email, First Name, Last Name, and 1 custom qualifying question.'
      },
      {
        metric: 'Document View-Through Rate',
        acronym: 'DTR',
        healthyBenchmark: '35% - 55%',
        troubleshootThreshold: '< 25% (First 2 slides of PDF fail to deliver standalone educational value)',
        notes: 'Document Ads allow users to swipe 5-10 slides inside the LinkedIn feed before downloading.'
      }
    ],
    scalingRules: [
      'Account-Based Marketing (ABM): Layer company domain / CRM list match (Salesforce/HubSpot) with Job Function + Seniority (Director+).',
      'Avoid hyper-targeting Job Titles (people use 10,000 different job titles for the same role); use Job Function + Seniority instead to 3x your audience pool at lower CPM.',
      'Bid Strategy: Use Maximum Delivery for pacing tests, then switch to Manual CPC bidding below suggested floor when CTR is strong.'
    ],
    pitfallsToAvoid: [
      'Running generic corporate stock photos with large logos (feels like spam in a professional feed).',
      'Expecting 7-day conversions for a $50k enterprise contract (measure 90-180 day pipeline influence and CRM lead status).',
      'Leaving Audience Expansion checked on ABM account lists (dilutes your exact target account list).'
    ],
    crisisPlaybooks: [
      {
        situation: 'Client Complains LinkedIn CPL is $180 vs Meta $45',
        triggerCondition: 'Client compares top-of-funnel raw lead costs across platforms without pipeline revenue context',
        immediateAction: 'Pull CRM Closed-Won and Sales-Qualified-Lead (SQL) conversion rates to demonstrate Lead-to-Pipeline velocity.',
        boardroomBlufScript: '"Sarah, while our LinkedIn CPL is $160 compared to $42 on Meta, our CRM conversion data proves 38% of LinkedIn leads become Sales-Qualified Pipeline worth $1.2M, whereas Meta leads convert at under 4%. LinkedIn CAC on closed-won enterprise revenue is actually 32% lower."'
      }
    ],
    proOptimizationTips: [
      'Deploy Thought Leader Ads from your founder or VP of Engineering to share technical war stories; engagement cost is 60% cheaper than brand page ads.',
      'Use LinkedIn Website Demographics pixel to see which companies are visiting your site even if they don\'t fill out a form.'
    ]
  },

  // 4. SNAPCHAT ADS
  {
    id: 'snapchat-ads-battlecard',
    platformId: 'snapchat-ads',
    platformName: 'Snapchat Ads',
    badge: 'Gen Z & Mobile Commerce Engine',
    tagline: 'Hyper-engaged vertical camera ecosystem dominating Gen Z & millennial mobile shoppers.',
    ecosystemReach: '430+ Million Daily Active Users, reaching 75%+ of 13-34 year olds in 20+ countries.',
    algorithmicCore: 'Goal-based bidding (Swipe Up, App Install, Purchase, Pixel Conversion) with high-speed vertical video consumption and camera-first AR engagement.',
    keyFormats: [
      'Single Video Ads (3-10s full-screen vertical 9:16)',
      'Non-Skippable Commercials (6s forced view for brand lift)',
      'Dynamic Product Ads (DPA for e-commerce catalog retargeting & prospecting)',
      'AR Camera Lenses & Face/World Filters',
      'Story Ads & Spotlight Placements'
    ],
    benchmarks: [
      {
        metric: 'Cost Per Mille (CPM)',
        acronym: 'CPM',
        healthyBenchmark: '$2.50 - $6.50',
        troubleshootThreshold: '> $10.00 (Exceptional top-of-funnel efficiency compared to Meta/TikTok)',
        notes: 'One of the lowest CPM environments in modern digital marketing.'
      },
      {
        metric: 'Swipe-Up Rate (CTR)',
        acronym: 'Swipe-Up %',
        healthyBenchmark: '0.80% - 1.60%',
        troubleshootThreshold: '< 0.50% (Clear call to action missing in bottom third or ad takes >2s to hook)',
        notes: 'Vertical swipe motion requires clear visual arrow and urgency incentive.'
      },
      {
        metric: 'Conversion Rate (eCommerce Purchase)',
        acronym: 'Purchase CVR',
        healthyBenchmark: '1.5% - 3.2%',
        troubleshootThreshold: '< 0.9% (Slow mobile store loading or checkout friction for mobile shoppers)',
        notes: 'Keep checkout to 1-tap Apple Pay / Google Pay for maximum conversion velocity.'
      }
    ],
    scalingRules: [
      'Creative lifecycle is 10 to 14 days: Snap users consume vertical video rapidly; refresh video hooks every 2 weeks.',
      'Leverage Dynamic Product Ads (DPA) synced with Shopify or BigCommerce for automated personalized product carousels.',
      'Bid Strategy: Start with Auto-Bid to establish baseline conversion velocity, then move to Target Cost bidding for margin protection.'
    ],
    pitfallsToAvoid: [
      'Repurposing horizontal 16:9 TV commercials or formal corporate videos (causes instant swipe-away).',
      'Targeting too narrow age brackets (let the Snap algorithm optimize toward the purchase pixel within a broad 18-35 range).',
      'Forgetting to implement Snap Conversions API (CAPI) alongside the web pixel.'
    ],
    crisisPlaybooks: [
      {
        situation: 'High Swipe-Up Rate but Low Completed Checkouts',
        triggerCondition: 'Swipe-Up CTR is 1.8% but website bounce rate exceeds 65%',
        immediateAction: 'Audit mobile site speed in Snap in-app browser, enable 1-Click Apple Pay / Shop Pay, and optimize landing page hero fold.',
        boardroomBlufScript: '"Rachel, our Snap creative is performing exceptionally with a 1.8% swipe-up rate at a $3.20 CPM, but mobile shoppers are dropping off during checkout. We enabled 1-click Shop Pay and cut mobile page load by 1.4 seconds, which will restore our target 3.0x ROAS."'
      }
    ],
    proOptimizationTips: [
      'Keep videos between 5 and 7 seconds total length. The first 1.5 seconds must feature a bold product demonstration or relatable human moment.',
      'Use user-generated content (UGC) shot natively on an iPhone with front-facing camera.'
    ]
  },

  // 5. GPT ADS & AI SEARCH PLATFORMS (NEW FRONTIER)
  {
    id: 'gpt-ads-battlecard',
    platformId: 'gpt-ads',
    platformName: 'GPT Ads & AI Search Platforms (OpenAI, Perplexity & LLM Search)',
    badge: 'Generative AI & Conversational Intent',
    tagline: 'Next-generation contextual search, sponsored citations, and conversational product recommendations.',
    ecosystemReach: '400+ Million weekly active conversational AI users (OpenAI ChatGPT, Perplexity, Claude, Gemini Search).',
    algorithmicCore: 'Semantic vector intent matching, Generative Engine Optimization (GEO), real-time conversational retrieval reranking.',
    keyFormats: [
      'Sponsored Citations & Linked Product Cards in LLM Answers',
      'Conversational Follow-Up Query Sponsorship (Perplexity Promoted Queries)',
      'Conversational Product Search Integration (ChatGPT Shopping / Search)',
      'AI Overviews Brand Knowledge Graph Placements',
      'Contextual Knowledge Base Ingestion & Structured Feeds'
    ],
    benchmarks: [
      {
        metric: 'Citation Share of Voice',
        acronym: 'AEO / GEO SOV',
        healthyBenchmark: '25% - 45% of category prompts',
        troubleshootThreshold: '< 10% (Brand absent from LLM web retrieval crawl index)',
        notes: 'Measures how often your brand is cited as the primary recommendation in generative answers.'
      },
      {
        metric: 'Conversational Click-Through Rate',
        acronym: 'Conversation CTR',
        healthyBenchmark: '4.5% - 10.2%',
        troubleshootThreshold: '< 2.5% (Recommendation lacks clear comparative differentiation or discount token)',
        notes: 'Users in active LLM problem-solving mode demonstrate 2-3x higher purchase intent than passive social browsing.'
      },
      {
        metric: 'Contextual Alignment Score',
        acronym: 'Semantic Fit',
        healthyBenchmark: '85% - 98%',
        troubleshootThreshold: '< 70% (Ad appears irrelevant to the user’s nuanced multi-turn conversational prompt)',
        notes: 'AI auctions evaluate deep conversational context rather than single keywords.'
      }
    ],
    scalingRules: [
      'Optimize structured brand data: Implement robust Schema.org (Product, Review, Organization, FAQ) so LLM crawlers index authoritative specifications.',
      'Maintain presence on high-authority comparative review directories (Reddit, G2, Trustpilot, Capterra) which LLM search models weight heavily in real-time synthesis.',
      'Target high-consideration conversational queries ("What is the best enterprise CRM for a 50-person sales team with HubSpot migration?").'
    ],
    pitfallsToAvoid: [
      'Attempting keyword-stuffing (LLM semantic embeddings ignore artificial keyword density).',
      'Failing to monitor brand sentiment in LLM citations (hallucinated negative claims must be addressed through authoritative digital PR).',
      'Treating conversational AI ads like static display banners (the user expects an immediate, consultative answer to their prompt).'
    ],
    crisisPlaybooks: [
      {
        situation: 'AI Search Cites Outdated Pricing or Competitor Preference',
        triggerCondition: 'ChatGPT Search or Perplexity generative answer recommends rival product or quotes 2022 pricing',
        immediateAction: 'Deploy updated JSON-LD structured product feeds, publish authoritative comparison matrix on high-domain-authority channels, and submit updated sitemaps to Bing & Google search indexes.',
        boardroomBlufScript: '"Jason, our category presence in AI search models was citing an outdated 2023 pricing page. We published updated structured data, refreshed our comparative review documentation across primary authority aggregators, and secured preferred citation status in 42% of relevant category queries."'
      }
    ],
    proOptimizationTips: [
      'Publish detailed "Versus" and "Alternative" transparent comparison guides on your domain to feed LLM knowledge ingestion.',
      'Monitor conversational query logs to uncover long-tail buyer questions that traditional Google keyword tools miss.'
    ]
  },

  // 6. TIKTOK ADS
  {
    id: 'tiktok-ads-battlecard',
    platformId: 'tiktok-ads',
    platformName: 'TikTok Ads (TikTok Shop & Creator Spark)',
    badge: 'Viral Entertainment & Social Commerce',
    tagline: 'Sound-on, creator-driven entertainment driving immediate viral discovery and frictionless TikTok Shop GMV.',
    ecosystemReach: '1.0+ Billion monthly active users worldwide.',
    algorithmicCore: 'Content Graph recommendation engine. Prioritizes watch time, completion rate, shares, and sound usage over social follower graphs.',
    keyFormats: [
      'Spark Ads (Boosting organic creator posts with authentic comments)',
      'In-Feed Video Ads (Sound-On, 9:16 vertical full screen)',
      'TikTok Shop Product GMV Ads & Affiliate Live Streams',
      'TopView (Premium 24-hour brand takeover on app open)',
      'Branded Mission & Hashtag Challenges'
    ],
    benchmarks: [
      {
        metric: 'Watch Completion Rate',
        acronym: 'Video Completion %',
        healthyBenchmark: '12% - 24% (for 15s - 30s clips)',
        troubleshootThreshold: '< 8% (Pacing is too slow; TikTok viewers swipe within 1.2 seconds)',
        notes: 'Pacing must feel native, punchy, and include dynamic text overlays.'
      },
      {
        metric: 'Hook Rate (2-second view)',
        acronym: '2s View ÷ Impressions',
        healthyBenchmark: '45% - 65%',
        troubleshootThreshold: '< 35% (Visual hook or audio hook is failing to stop the thumb)',
        notes: 'Must hook both visually and audibly in the first 1.5 seconds.'
      },
      {
        metric: 'Cost Per Mille (CPM)',
        acronym: 'CPM',
        healthyBenchmark: '$6.00 - $14.00',
        troubleshootThreshold: '> $22.00 (Creative fatigue or low engagement score)',
        notes: 'Creative fatigue on TikTok occurs within 14 to 21 days.'
      }
    ],
    scalingRules: [
      'Always prioritize Spark Ads over dark ads: Creator handle authenticity drives 30% higher conversion rates.',
      'Partner with 10-20 micro-creators monthly to maintain a relentless pipeline of fresh UGC video variations.',
      'Scale budget on winning creative IDs by 20% daily when ROAS exceeds target threshold.'
    ],
    pitfallsToAvoid: [
      'Running silent video ads (93% of TikTok users watch with sound turned ON; sound design is mandatory).',
      'Using polished studio commercial footage (users immediately recognize it as an ad and swipe).',
      'Ignoring TikTok Shop native checkout if selling physical consumer goods under $60.'
    ],
    crisisPlaybooks: [
      {
        situation: 'Winning Ad Creative Crashes After 2 Weeks',
        triggerCondition: 'ROAS drops from 3.4x to 1.2x and CPA triples within 72 hours',
        immediateAction: 'Swap out the first 3 seconds of the video with 4 new hook variations while keeping the core demonstration intact, and launch new Spark Ads.',
        boardroomBlufScript: '"Maya, our lead TikTok creative hit natural platform fatigue after generating $65k in sales. We isolated the fatigue to the hook, cut 4 new opening variations with our top creators, and campaign ROAS has already rebounded to 3.1x."'
      }
    ],
    proOptimizationTips: [
      'Leverage TikTok Creative Center to spot trending commercial audio tracks before competitors adopt them.',
      'Use native TikTok typography and text-to-speech voiceovers for authentic user feel.'
    ]
  },

  // 7. AMAZON ADS & RETAIL MEDIA
  {
    id: 'amazon-ads-battlecard',
    platformId: 'amazon-ads',
    platformName: 'Amazon Ads & Retail Media (Sponsored Ads & DSP)',
    badge: 'Bottom-Funnel Retail & Marketplace',
    tagline: 'Direct point-of-purchase advertising dominating e-commerce search, product detail pages, and connected TV.',
    ecosystemReach: '300+ Million active customer accounts, 200+ Million Prime subscribers globally.',
    algorithmicCore: 'A9 / COSMO algorithm focusing on sales velocity, conversion rate, Buy Box win rate, and keyword relevance.',
    keyFormats: [
      'Sponsored Products (Keyword & ASIN product targeting in search results)',
      'Sponsored Brands (Headline banner ads with custom logo and 3 products)',
      'Sponsored Display (Retargeting off and on Amazon detail pages)',
      'Amazon DSP (Programmatic audience buying across Prime Video, Twitch, and web)'
    ],
    benchmarks: [
      {
        metric: 'Advertising Cost of Sales (ACOS)',
        acronym: 'ACOS = (Spend ÷ Ad Sales) × 100',
        healthyBenchmark: '18% - 32% (Target depends on product gross margin)',
        troubleshootThreshold: '> 45% (Bleeding margin; negative keywords required)',
        notes: 'ACOS is the reciprocal of ROAS (e.g. 25% ACOS = 4.0x ROAS).'
      },
      {
        metric: 'Total Advertising Cost of Sales (TACOS)',
        acronym: 'TACOS = (Ad Spend ÷ Total Sales) × 100',
        healthyBenchmark: '8% - 15%',
        troubleshootThreshold: '> 20% (Brand is over-reliant on paid ads to generate organic rank)',
        notes: 'TACOS measures overall account health including organic lift generated by ad velocity.'
      },
      {
        metric: 'Conversion Rate (CVR)',
        acronym: 'Amazon CVR',
        healthyBenchmark: '9.5% - 18.0%',
        troubleshootThreshold: '< 7.0% (Listing page issues: poor images, low reviews, or uncompetitive pricing)',
        notes: 'Amazon conversion rates are 3x to 5x higher than typical DTC websites.'
      }
    ],
    scalingRules: [
      'Retail Readiness first: Never run ads to an ASIN with under 20 reviews, a star rating below 4.0, or low inventory depth.',
      'Harvest search terms: Move high-converting queries from Auto campaigns into Exact Match Manual campaigns with dedicated aggressive bids.',
      'Protect brand keywords with Sponsored Brands headline ads to prevent competitor conquesting.'
    ],
    pitfallsToAvoid: [
      'Running ads when the listing does not own the Buy Box (Amazon will pause Sponsored Products but display ads may bleed).',
      'Ignoring negative keyword harvesting (broad match will burn budget on irrelevant variations).',
      'Running out of stock while scaling ads (destroys organic BSR ranking that took months to build).'
    ],
    crisisPlaybooks: [
      {
        situation: 'ACOS Spiked to 55% Overnight',
        triggerCondition: 'High spend on competitor ASIN targeting with low conversion rate',
        immediateAction: 'Add negative keyword exclusions on non-converting competitor ASINs, reduce bids on broad match, and verify listing Buy Box status.',
        boardroomBlufScript: '"Carlos, ACOS jumped to 52% because our auto-campaign targeted 3 high-priced competitor ASINs that didn\'t convert. We added negative ASIN exclusions, lowered bids on generic terms, and normalized ACOS back to our 24% target within 24 hours."'
      }
    ],
    proOptimizationTips: [
      'Optimize backend search terms (249 bytes) with high-volume synonyms not already present in the title or bullet points.',
      'Use Brand Analytics Search Query Performance report to see true impression-to-purchase funnel share.'
    ]
  },

  // 8. APPLE SEARCH ADS (ASA)
  {
    id: 'apple-search-battlecard',
    platformId: 'apple-search-ads',
    platformName: 'Apple Search Ads (ASA)',
    badge: 'iOS App Store Acquisition',
    tagline: 'Direct mobile app user acquisition capturing intent at the exact point of App Store search and download.',
    ecosystemReach: '650+ Million weekly App Store visitors across 175 regions.',
    algorithmicCore: 'Cost-Per-Tap (CPT) second-price auction evaluating keyword relevance and organic app metadata (title, subtitle, keywords).',
    keyFormats: [
      'Search Results Ads (Top position on search query)',
      'Search Tab Ads (Top suggested apps before typing query)',
      'Today Tab Ads (High-impact front page App Store editorial feature)',
      'Product Page Ads (While browsing related apps)'
    ],
    benchmarks: [
      {
        metric: 'Tap-Through Rate (TTR)',
        acronym: 'TTR',
        healthyBenchmark: '6.5% - 12.0%',
        troubleshootThreshold: '< 4.5% (App icon or first 3 screenshots unappealing in search view)',
        notes: 'Much higher than web display due to native search intent.'
      },
      {
        metric: 'Conversion Rate (CVR)',
        acronym: 'Installs ÷ Taps',
        healthyBenchmark: '45% - 65%',
        troubleshootThreshold: '< 35% (App size too large, poor app rating, or misleading screenshots)',
        notes: 'Over 50% of App Store searchers download the app they tap.'
      },
      {
        metric: 'Cost Per Acquisition (CPA)',
        acronym: 'Cost Per Install (CPI)',
        healthyBenchmark: '$1.80 - $4.50 (Gaming) | $4.00 - $12.00 (FinTech/Health)',
        troubleshootThreshold: '> 30% above LTV payback benchmark',
        notes: 'Track downstream Post-Install In-App Purchases (IAP) via SKAdNetwork / AdAttributionKit.'
      }
    ],
    scalingRules: [
      'Use Custom Product Pages (CPP) to match ad screenshots precisely to specific keyword search intents (e.g. running vs cycling for a fitness app).',
      'Segment campaigns into 4 distinct buckets: Brand, Generic Category, Competitor, and Discovery (Search Match).',
      'Harvest converting Discovery keywords into Exact Match campaigns with +20% bid increases.'
    ],
    pitfallsToAvoid: [
      'Lumping Brand and Generic keywords into the same campaign (distorts true blended CPI).',
      'Neglecting negative keywords in Discovery campaigns (burns budget on irrelevant searches).',
      'Relying on default App Store screenshots for all keyword themes instead of custom CPPs.'
    ],
    crisisPlaybooks: [
      {
        situation: 'Competitor Bidding on Your Brand Name & Stealing Downloads',
        triggerCondition: 'Brand impression share drops below 85% as rival app appears at #1 position on your app name',
        immediateAction: 'Launch dedicated Brand Defense campaign with Exact Match bidding at aggressive CPT to secure 95%+ Impression Share.',
        boardroomBlufScript: '"Lisa, a competitor bid aggressively on our brand name, capturing 22% of our search volume. We initiated a dedicated Brand Defense campaign with prioritized CPT bids, retaking 96% Impression Share and locking down our core organic download base."'
      }
    ],
    proOptimizationTips: [
      'Align ASO (App Store Optimization) organic metadata with ASA paid keyword strategy for maximum bid relevance advantage.',
      'Deploy SKAdNetwork 4.0 / AdAttributionKit with well-configured conversion values for accurate post-install attribution.'
    ]
  },

  // 9. QUICK COMMERCE ADS (BLINKIT, ZEPTU, INSTACART, GOPUFF)
  {
    id: 'quick-commerce-battlecard',
    platformId: 'quick-commerce',
    platformName: 'Quick Commerce & On-Demand Ads (Blinkit, Zepto, Instacart, Gopuff)',
    badge: '10-Minute Retail & Dark Store Ads',
    tagline: 'Hyper-local instant delivery advertising targeting consumers in the final 10 minutes of urgent purchase intent.',
    ecosystemReach: '100+ Million high-frequency urban consumers with 10-30 minute delivery expectations.',
    algorithmicCore: 'Real-time dark store inventory availability + geo-radius bidding + search query keyword relevance.',
    keyFormats: [
      'Sponsored Search Results (Top 1-2 product placements on search queries)',
      'Category Banner Takeovers & Shelf Header Banners',
      'Cart Checkout Upsells ("Customers also bought / Pair with")',
      'Brand Days & Sponsored Sampling Initiatives'
    ],
    benchmarks: [
      {
        metric: 'Return On Ad Spend (ROAS)',
        acronym: 'Q-ROAS',
        healthyBenchmark: '4.5x - 8.5x',
        troubleshootThreshold: '< 3.0x (Overbidding on generic keywords or stockouts in key pin-codes)',
        notes: 'High conversion intent drives exceptionally strong direct ROAS compared to standard e-commerce.'
      },
      {
        metric: 'Out of Stock (OOS) Rate during Ad Run',
        acronym: 'OOS %',
        healthyBenchmark: '< 3.0%',
        troubleshootThreshold: '> 8.0% (Advertising products unavailable in dark stores wastes ad spend)',
        notes: 'Ads should automatically pause for specific micro-fulfillment centers when stock drops below threshold.'
      },
      {
        metric: 'Cart-to-Order Conversion Rate',
        acronym: 'Cart CVR',
        healthyBenchmark: '22% - 38%',
        troubleshootThreshold: '< 15% (Impulse price point too high or pack size too large for quick delivery)',
        notes: 'Keep single SKU price points under the average impulsive grocery basket threshold.'
      }
    ],
    scalingRules: [
      'Align ad spend with local dark store supply: Prioritize bidding in high-density urban fulfillment centers with deep inventory reserves.',
      'Time-of-day dayparting: Boost bids during evening snack hours (8 PM - 11 PM) or morning breakfast rush (7 AM - 10 AM).',
      'Target complementary keyword clusters (e.g. coffee brands bidding on "milk", "mugs", and "breakfast snacks").'
    ],
    pitfallsToAvoid: [
      'Bidding on keywords when product is out of stock in 40% of micro-warehouses.',
      'Promoting large bulk packs that don’t fit quick-commerce impulse basket economics.',
      'Failing to monitor competitor brand conquesting in primary category shelves.'
    ],
    crisisPlaybooks: [
      {
        situation: 'Spend Burned in Dark Stores With Zero Inventory',
        triggerCondition: 'Ad campaign ran 24 hours while 35% of dark stores reported out-of-stock on hero SKU',
        immediateAction: 'Implement automated API inventory check script to pause ads in out-of-stock pin codes, redirect budget to well-stocked fulfillment nodes.',
        boardroomBlufScript: '"Arjun, we detected a 32% out-of-stock discrepancy across our North Delhi dark stores while ads were live. We immediately quarantined ad spend to verified in-stock fulfillment hubs and automated daily stock-level checks, protecting a 6.2x blended ROAS."'
      }
    ],
    proOptimizationTips: [
      'Pair hero SKU with a checkout impulse add-on to lift average order value (AOV) by 18-25%.',
      'Run weekend bundle promos on Friday evening through Sunday midnight for maximum grocery basket lift.'
    ]
  }
];

// ============================================================================
// CURATED MARKETING BOOKS & FOUNDATIONAL PLAYBOOKS
// StoryBrand, Breakthrough Advertising, Scientific Advertising, Hacking Growth, etc.
// ============================================================================

export const ALL_MARKETING_BOOKS: MarketingBookSummary[] = [
  // 1. BUILDING A STORYBRAND
  {
    id: 'book-storybrand',
    title: 'Building a StoryBrand',
    author: 'Donald Miller',
    publicationYear: 2017,
    category: 'Strategic Messaging',
    coverEmoji: '📖',
    coreThesis: 'The customer is the hero of the story—never your company. Your brand is the Guide (like Yoda or Haymitch) who offers empathy, authority, and a simple 3-step plan to help the hero win.',
    agencyApplication: 'Transforms convoluted agency jargon into clear client value propositions. When clients are panicked, position them as the hero conquering the market, with your agency providing the calm, authoritative roadmap.',
    executiveKeyTakeaways: [
      'If you confuse, you lose: Noise in marketing messages forces the human brain to burn calories to decipher what you offer, triggering immediate bounce.',
      'The 7-Part Framework: Character → Has a Problem (External, Internal, Philosophical) → Meets a Guide → Who Gives Them a Plan → Calls Them to Action → Helps Them Avoid Failure → Ends in Success.',
      'Never open an executive presentation talking about your agency’s capabilities; open with the client\'s primary stakes and metrics.'
    ],
    boardroomScripts: [
      {
        scenario: 'Reframing a crisis meeting using Guide positioning',
        script: '"Alex, your team is on track to hit an ambitious $10M ARR goal this quarter, and this temporary CPA turbulence is the primary obstacle in the way. As your growth partners, we\'ve mapped out a 3-step stabilization plan so your board sees uninterrupted revenue expansion."'
      }
    ]
  },

  // 2. BREAKTHROUGH ADVERTISING
  {
    id: 'book-breakthrough-advertising',
    title: 'Breakthrough Advertising',
    author: 'Eugene Schwartz',
    publicationYear: 1966,
    category: 'Direct Response Copywriting',
    coverEmoji: '⚡',
    coreThesis: 'Copy cannot create desire for a product; it can only channel an existing hope, dream, fear, or desire that already resides in the hearts of millions of people into your product.',
    agencyApplication: 'Determines the exact creative angle and headline structure based on the audience\'s 5 Stages of Awareness and Market Sophistication.',
    executiveKeyTakeaways: [
      'The 5 Stages of Awareness: Most Aware (Needs price/deal) → Product-Aware (Needs differentiation vs rivals) → Solution-Aware (Knows the cure exists) → Problem-Aware (Feels the pain, doesn’t know solution) → Completely Unaware (Needs an entertaining story hook).',
      'Market Sophistication Levels: In Stage 1, state the claim directly ("Lose 10 lbs"); by Stage 5, the market is cynical and requires an identification hook and transparent mechanism breakdown.',
      'Creative hooks must match the specific awareness tier of the ad set cohort rather than treating all traffic identically.'
    ],
    boardroomScripts: [
      {
        scenario: 'Explaining why simple ad copy stopped working on Meta/TikTok',
        script: '"Elena, our market has matured into Stage 4 Sophistication. Direct claims like \'fastest CRM\' are ignored because prospective buyers have heard that 50 times. We shifted our creative hooks to explain our proprietary database sync mechanism, which drove a 34% lift in cold ad CTR."'
      }
    ]
  },

  // 3. SCIENTIFIC ADVERTISING
  {
    id: 'book-scientific-advertising',
    title: 'Scientific Advertising',
    author: 'Claude Hopkins',
    publicationYear: 1923,
    category: 'Direct Response Copywriting',
    coverEmoji: '🔬',
    coreThesis: 'Advertising is salesmanship in print. It must be held to exact, measurable standards where every dollar invested produces demonstrable, audited return on investment.',
    agencyApplication: 'The foundation of all modern performance marketing and A/B split-testing. Eliminates speculative design opinions in favor of empirical conversion testing.',
    executiveKeyTakeaways: [
      'Never guess: Test everything through controlled split tests before scaling budget.',
      'Do not boast or preach: Customers act solely in their own self-interest; focus 100% on the customer\'s benefit and outcome.',
      'A change in headline can multiply ad response by 5x to 10x with zero change in the underlying product.'
    ],
    boardroomScripts: [
      {
        scenario: 'Justifying high-tempo creative testing to a conservative CFO',
        script: '"Marcus, we don\'t gamble client capital on subjective opinions. We run scientific micro-budget split tests across 6 headline hypotheses. The algorithm identifies the statistical winner within 48 hours, and only then do we deploy 80% of your scaling budget into verified winners."'
      }
    ]
  },

  // 4. HACKING GROWTH
  {
    id: 'book-hacking-growth',
    title: 'Hacking Growth',
    author: 'Sean Ellis & Morgan Brown',
    publicationYear: 2017,
    category: 'Growth Hacking & Testing',
    coverEmoji: '🚀',
    coreThesis: 'Sustainable rapid growth is the result of a cross-functional team running a high-tempo, data-driven experimentation cadence across the entire customer funnel (Acquisition, Activation, Retention, Revenue, Referral).',
    agencyApplication: 'Provides the operational rhythm for agency performance teams: weekly sprint cadences, ICE scoring, and North Star Metric alignment.',
    executiveKeyTakeaways: [
      'The ICE Prioritization Framework: Score every test idea from 1 to 10 on Impact, Confidence, and Ease to eliminate bikeshedding.',
      'The Aha! Moment: The single pivotal interaction where a new user first experiences the core utility of the product (e.g. Slack reaching 2,000 sent messages).',
      'Growth is compound interest: Running 4 validated tests per week compounds into massive competitive advantage over agencies testing once a month.'
    ],
    boardroomScripts: [
      {
        scenario: 'Presenting a structured growth testing roadmap',
        script: '"David, our weekly growth sprint scored 12 optimization ideas using the ICE model. We prioritized 3 high-impact tests on mobile checkout velocity, which unlocked an incremental $18,000 in weekly revenue without increasing top-of-funnel ad spend."'
      }
    ]
  },

  // 5. NEVER SPLIT THE DIFFERENCE
  {
    id: 'book-never-split-difference',
    title: 'Never Split the Difference',
    author: 'Chris Voss',
    publicationYear: 2016,
    category: 'Negotiation & Crisis',
    coverEmoji: '🎯',
    coreThesis: 'Negotiation and crisis resolution are based on tactical empathy, calibrated questions, and emotional labeling—not mathematical compromise or rational argument.',
    agencyApplication: 'Essential for de-escalating angry executive clients during emergency meetings. Prevents defensive agency arguing and restores collaborative trust in under 60 seconds.',
    executiveKeyTakeaways: [
      'Tactical Empathy & Labeling: Acknowledge and label the client’s unstated fears before they attack ("It sounds like you feel our team was caught off guard by this CPM increase...").',
      'Calibrated "How" and "What" Questions: Disarm unilateral demands by asking collaborative questions ("How am I supposed to protect margin if we pause the learning phase?").',
      'The Late-Night FM DJ Voice: Speak with calm, deliberate, downward-inflecting tonality to soothe nervous adrenaline and establish executive presence.'
    ],
    boardroomScripts: [
      {
        scenario: 'De-escalating an irate client threatening to fire the agency',
        script: '"Alex, it seems like you feel your budget was put at risk without adequate warning, and you\'re worried this will impact your quarterly board review. Let\'s put our contract aside for 15 minutes; what is the single most urgent metric you need stabilized before tomorrow morning?"'
      }
    ]
  },

  // 6. THE 1-PAGE MARKETING PLAN
  {
    id: 'book-1-page-marketing-plan',
    title: 'The 1-Page Marketing Plan',
    author: 'Allan Dib',
    publicationYear: 2016,
    category: 'Strategic Messaging',
    coverEmoji: '📄',
    coreThesis: 'A sophisticated marketing strategy can be distilled onto a single 9-square canvas mapping the three core phases: Before (Prospects), During (Leads), and After (Customers).',
    agencyApplication: 'Helps clients see the big picture beyond day-to-day ad fluctuations. Connects paid media traffic directly to CRM lead nurturing and customer lifetime value.',
    executiveKeyTakeaways: [
      'The "Before" Phase: Select target market, craft compelling message, choose reaching media.',
      'The "During" Phase: Capture leads into database, nurture with educational value, convert to sales.',
      'The "After" Phase: Deliver world-class onboarding, increase customer lifetime value, orchestrate viral referrals.'
    ],
    boardroomScripts: [
      {
        scenario: 'Explaining why top-of-funnel ad spend needs email lead nurturing',
        script: '"Lisa, paid ads only represent square 3 of our 9-square marketing plan. When we pair our Meta prospecting with a 5-part automated email nurture series, our lead-to-customer conversion doubles from 2.1% to 4.4% with zero extra ad spend."'
      }
    ]
  },

  // 7. SUBSCRIBED
  {
    id: 'book-subscribed',
    title: 'Subscribed: Why the Subscription Model Will Be Your Company\'s Future',
    author: 'Tien Tzuo',
    publicationYear: 2018,
    category: 'Retention & Unit Economics',
    coverEmoji: '🔄',
    coreThesis: 'The world is shifting from products to recurring subscriptions. Success depends on customer relationships, reducing churn, and maximizing Net Revenue Retention (NRR).',
    agencyApplication: 'Crucial for SaaS and DTC subscription brands. Teaches performance marketers to justify higher upfront CAC based on 12-month LTV payback curves.',
    executiveKeyTakeaways: [
      'LTV:CAC Golden Ratio: A healthy recurring business targets an LTV:CAC ratio of 3:1 or higher, with CAC payback period under 12 months.',
      'Net Revenue Retention (NRR): Expansion revenue from existing subscribers should outpace churn (top SaaS companies maintain >115% NRR).',
      'Acquisition without retention is pouring water into a leaky bucket; marketing must partner with product onboarding.'
    ],
    boardroomScripts: [
      {
        scenario: 'Defending higher CAC on high-retention customer segments',
        script: '"Sarah, while our enterprise cohort has an upfront CAC of $240 compared to $85 for self-serve users, their 12-month retention is 91% with an average LTV of $3,800. Their LTV:CAC ratio is 15:1, making this our most profitable ad spend allocation."'
      }
    ]
  }
];
