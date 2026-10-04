import { Scenario } from '@/types/scenario';

// ============================================================================
// DIGITAL MARKETING KNOWLEDGE BASE (CURATED FROM GITHUB OPEN REPOSITORIES)
// Source references:
// - github.com/ronakganatra/awesome-marketing (Performance Marketing & Optimization)
// - github.com/carlos-eduardo-s-lima/awesome-digital-marketing (Paid Search, SEO, Analytics)
// - github.com/awesome-interview-questions-5000-jobs (Digital Marketing Manager & Associate)
// ============================================================================

export interface MetricDefinition {
  name: string;
  acronym: string;
  formula: string;
  description: string;
  beginnerTip: string;
  healthyBenchmark: string;
}

export const CORE_MARKETING_METRICS: MetricDefinition[] = [
  {
    name: 'Click-Through Rate',
    acronym: 'CTR',
    formula: '(Clicks ÷ Impressions) × 100',
    description: 'Percentage of people who see your ad and click on it. Measures ad creative resonance and headline relevance.',
    beginnerTip: 'If CTR is below 2% on Google Search or below 1% on Meta, your headline or creative hook is not grabbing attention.',
    healthyBenchmark: 'Search: 3.5% - 6% | Meta Feed: 1.2% - 2.5% | Display: 0.35% - 0.8%',
  },
  {
    name: 'Cost Per Click',
    acronym: 'CPC',
    formula: 'Total Ad Spend ÷ Total Clicks',
    description: 'The actual price you pay each time a user clicks your advertisement. Determined by auction competition and Quality Score.',
    beginnerTip: 'Lower your CPC by improving your Quality Score or ad relevance, not just by lowering your bids.',
    healthyBenchmark: 'Google Search: $1.50 - $4.00 | Meta Ads: $0.60 - $1.80 | LinkedIn: $5.00 - $12.00',
  },
  {
    name: 'Cost Per Mille (Thousand Impressions)',
    acronym: 'CPM',
    formula: '(Total Ad Spend ÷ Total Impressions) × 1,000',
    description: 'Cost to show your ad 1,000 times. Reflects audience competition and auction supply.',
    beginnerTip: 'CPM increases during Q4 (holiday peak) and when targeting narrow, high-income audiences.',
    healthyBenchmark: 'Meta Ads: $12 - $28 | YouTube: $8 - $18 | Programmatic Display: $2.50 - $6.00',
  },
  {
    name: 'Cost Per Acquisition / Action',
    acronym: 'CPA / CPL',
    formula: 'Total Ad Spend ÷ Total Conversions (Leads or Orders)',
    description: 'The amount of marketing capital spent to acquire a single paying customer or qualified lead.',
    beginnerTip: 'Always compare CPA against Customer Lifetime Value (LTV) or target gross margin, not just revenue.',
    healthyBenchmark: 'B2B Lead: $80 - $160 | E-Commerce Purchase: $20 - $45 | App Install: $1.80 - $4.50',
  },
  {
    name: 'Return On Ad Spend',
    acronym: 'ROAS',
    formula: 'Revenue Generated from Ads ÷ Total Ad Spend',
    description: 'Ratio of gross revenue generated for every dollar spent on advertising.',
    beginnerTip: 'A 3.0x ROAS means you generated $3 revenue for every $1 spent. Calculate your break-even ROAS based on product margins.',
    healthyBenchmark: 'D2C E-commerce: 2.8x - 4.5x | High-margin Info: 4.0x+ | Retail: 2.2x - 3.2x',
  },
  {
    name: 'Click-to-Session Rate',
    acronym: 'Drop-off Rate',
    formula: '(GA4 Sessions ÷ Ad Platform Clicks) × 100',
    description: 'The proportion of ad clicks that actually result in a loaded website session in Google Analytics.',
    beginnerTip: 'If your ad platform reports 1,000 clicks but GA4 only shows 600 sessions, you have a 40% drop-off caused by slow mobile page load or broken tracking.',
    healthyBenchmark: '80% - 92% (Drop-off greater than 25% indicates severe landing page latency or in-app browser bounces)',
  }
];

// ============================================================================
// COMPREHENSIVE SCENARIO MATRIX: BEGINNER, INTERMEDIATE, AND ADVANCED
// ============================================================================

export const BEGINNER_SCENARIOS: Scenario[] = [
  {
    id: 'cpl-spike-crisis',
    title: 'Module 3: The CPL Spike Crisis',
    subtitle: 'Learn how to justify rising lead costs to an impatient enterprise client.',
    category: 'meta-ads',
    difficulty: 'beginner',
    urgencyTimeline: 'Emergency client call in 5 minutes',
    clientEnvironment: 'SaaSFlow Enterprise ($45k/mo Meta & Google Spend)',
    briefingSummary: 'CMO Alex Vance noticed that Cost Per Lead (CPL) increased 42% overnight from $38 to $54. They are threatening to pause all spend immediately unless the agency provides a defensible root cause and stabilization mitigation.',
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight from $38 to $54! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: 'Cost Per Lead (CPL)',
        previousValue: '$38.20',
        currentValue: '$54.10',
        deltaPercent: '+41.6%',
        isNegative: true,
        benchmark: '$40.00',
        rootCauseClues: [
          'Audience frequency reached 4.8 on hero video ad set',
          'CPM increased from $18.50 to $26.20 due to creative saturation',
          'Conversion rate remained stable at 2.4%'
        ]
      },
      {
        metric: 'Cost Per Mille (CPM)',
        previousValue: '$18.50',
        currentValue: '$26.20',
        deltaPercent: '+41.6%',
        isNegative: true,
        benchmark: '$20.00',
        rootCauseClues: [
          'High creative ad fatigue triggered algorithmic penalty in Meta auction'
        ]
      }
    ],
    stakeholder: {
      name: 'CMO Alex Vance',
      title: 'Chief Marketing Officer',
      organization: 'SaaSFlow Enterprise',
      temperament: 'impatient-skeptic',
      audioVoicePitch: 0.95,
      audioVoiceRate: 1.05,
      keyConcerns: [
        'Sudden lead generation cost inefficiency',
        'Burn rate before end of quarter pipeline review',
        'Needs confident, data-backed BLUF narrative immediately'
      ],
      triggerPhrases: [
        'Just wait for the algorithm',
        'Maybe Facebook is having a glitch',
        'Costs fluctuate randomly'
      ]
    },
    targetRootCauses: [
      'Audience fatigue raised CPMs by 28% while conversion rate remained healthy',
      'Pausing all campaigns resets algorithmic learning phase and spikes CPL further',
      'Immediate mitigation: Deploy 3 refreshed creative video hooks and cap ad set budget'
    ],
    prohibitedExcuses: [
      'Telling the CMO that algorithms fluctuate naturally without diagnosing CPM or frequency',
      'Recommending a total campaign pause which resets the 50 conversion learning threshold',
      'Blaming external macroeconomic factors without showing ad creative data'
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose by 42% because creative fatigue pushed audience frequency to 4.8, driving Meta CPMs up from $18 to $26. We deployed 3 refreshed video variants with a 20% budget cap to stabilize cost per acquisition back to $38 within 48 hours.",
      rootCauseAnalysis: "Our conversion rate on the demo landing page is holding steady at 2.4%, proving the offer and landing page are converting. The CPL increase is entirely an auction CPM inflation caused by audience saturation on our primary video hook.",
      immediateMitigation: "We have isolated the fatigued ad sets, deployed 3 refreshed video variants with alternate opening hooks, and reallocated 60% of budget into lookalike scaling to drop frequency below 2.2.",
      recoveryPlan72h: "Over the next 48 hours, new creative delivery will lower auction CPMs back to $19, restoring our CPL to the $38 target without resetting campaign learning.",
      fullVerbatimScript: "Alex, I completely understand your urgency—nobody wants to see CPL jump to $54 overnight. Let me give you the Bottom Line Up Front: We isolated the root cause at 8:00 AM today. It is not a conversion funnel drop—our landing page conversion rate is steady at 2.4%. Instead, our hero creative hit a frequency of 4.8, causing Meta to charge a 41% CPM saturation premium. Pausing campaigns right now would reset the machine learning phase and make lead recovery more expensive. Instead, here is our 3-step mitigation: We have already launched 3 refreshed video hooks, applied a 20% budget guardrail to fatigued ad sets, and shifted scaling to a 2% lookalike audience. You will see CPMs normalize within 24 hours and CPL lock back to $38 over the next 48 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'executivePresence',
        prompt: 'Give a 30-second BLUF opening explaining why pausing campaigns right now damages Meta algorithmic learning.',
        timeLimitSeconds: 45,
        idealPoints: [
          'Pausing resets the 50 conversion per week learning threshold',
          'Creative refresh stabilizes CPM without algorithmic reset',
          'State concrete 48-hour recovery timeline'
        ]
      }
    ]
  },
  {
    id: 'google-ads-ad-not-showing',
    title: 'Google Ads: "Why Isn\'t Our Ad Showing When I Search on Google?"',
    subtitle: 'Local business owner cannot find their own search ad and panics that their budget is wasted',
    category: 'google-ads',
    difficulty: 'beginner',
    urgencyTimeline: 'Client phone call right now',
    clientEnvironment: 'Local Dental Practice ($2,500/mo ad spend, 25-mile local radius)',
    briefingSummary: 'Dr. Sarah searched "dentist near me" from her personal smartphone inside her clinic office and did not see her practice\'s ad. She is worried the campaign was never turned on and that the agency is billing her for phantom ads.',
    initialClientDialogue: "Hi! I just pulled out my phone and searched for 'dentist near me' and 'emergency teeth whitening' right here at my front desk. Our competitors are showing up, but our ad is completely invisible! Are our ads even running? Did someone forget to switch the campaign on?",
    brokenKPIs: [
      {
        metric: 'Search Impression Share',
        previousValue: '72%',
        currentValue: '74%',
        deltaPercent: '+2.7%',
        isNegative: false,
        benchmark: '65%',
        rootCauseClues: [
          'Ads are actively delivering to prospective patients within target radius',
          'Client personal device IP excluded or search frequency capped',
          'Search auction rotates ads to prevent impression fatigue'
        ]
      },
      {
        metric: 'Phone Call Leads',
        previousValue: '18 / wk',
        currentValue: '21 / wk',
        deltaPercent: '+16.6%',
        isNegative: false,
        benchmark: '15 / wk',
        rootCauseClues: [
          'Campaign generated 21 qualified booking calls in the past 7 days'
        ]
      }
    ],
    stakeholder: {
      name: 'Dr. Sarah Jenkins',
      title: 'Practice Owner & Lead Dental Surgeon',
      organization: 'Jenkins Family & Cosmetic Dentistry',
      temperament: 'concerned-owner',
      keyConcerns: [
        'Fears she is paying an agency monthly fee for non-existent ads',
        'Embarrassed that rival clinics appear at the top of local search',
        'Needs clear, non-technical reassurance in plain English'
      ],
      triggerPhrases: [
        'You should not search for yourself',
        'Google algorithm is complex',
        'Just trust us it is working'
      ]
    },
    targetRootCauses: [
      'Searching for your own business repeatedly triggers Google ad-fatigue suppression because the user does not click',
      'Daily budget pacing limits ad display to profitable times of day rather than 100% of arbitrary searches',
      'The Ad Preview & Diagnosis Tool is the verified method to test ad visibility without hurting Quality Score or wasting impressions'
    ],
    prohibitedExcuses: [
      'Dismissing the client by saying "never Google your own keywords"',
      'Blaming Google technical bugs without explaining ad auction mechanics',
      'Overwhelming a dental client with programmatic jargon like ECV or bid ceilings'
    ],
    modelAnswerBLUF: {
      bluf: "Dr. Jenkins, your ads are 100% live, approved, and actively generating patient inquiries—in fact, we delivered 21 booked appointment calls this week, up 16% over last week. You didn't see the ad on your phone because Google's algorithm recognizes your device and withholds ads from people who repeatedly search without clicking, in order to protect your Quality Score and preserve your budget.",
      rootCauseAnalysis: "When you search repeatedly for your own clinic from your office IP or personal phone without clicking, Google learns that you are not in the buying window and withholds the ad to avoid burning your daily budget and depressing your Click-Through Rate. Furthermore, our campaign pacing spreads your daily budget evenly across patient booking hours.",
      immediateMitigation: "I am sending you a live screen recording and an Ad Preview and Diagnosis report from inside Google Ads. This tool replicates a live search from a new patient's zip code and proves your ad is displaying in position #1.",
      recoveryPlan72h: "To give you complete visibility, I will set up an automated weekly executive email report showing exact impression share, search terms, and phone call recordings so you never have to wonder if your ads are delivering.",
      fullVerbatimScript: "Hi Dr. Jenkins, thanks for calling. I completely understand why you'd be worried when you don't see your own ad! Let me give you peace of mind immediately: Your ads are live, active, and performing exceptionally well. In fact, our dashboard shows 21 patient calls generated this week, which is 16% above our target. The reason your phone isn't showing the ad right now is actually a built-in Google protection: when someone searches for a business multiple times without clicking, Google temporarily stops showing ads to that specific device so it doesn't waste your budget on someone who isn't a prospective patient. Searching repeatedly also lowers your Click-Through Rate, which can make your ads more expensive. To confirm, I am sharing a link to Google's official Ad Preview tool right now showing your ad live in the top position for local patients. How does that sound?"
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'terminologyAccuracy',
        prompt: 'Explain the Google Ad Preview & Diagnosis Tool to a non-technical small business client in 45 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Simulates real user searches across any zip code without accumulating false impressions',
          'Prevents hurting campaign Click-Through Rate (CTR)',
          'Verifies exact ad extensions, headlines, and auction rank safely'
        ]
      }
    ]
  },
  {
    id: 'meta-vs-ga4-click-discrepancy',
    title: 'Meta Ads vs GA4: "Facebook Says 400 Clicks, But Analytics Only Shows 120 Visitors!"',
    subtitle: 'E-commerce founder notices a 70% discrepancy between ad clicks and recorded website sessions',
    category: 'meta-ads',
    difficulty: 'beginner',
    urgencyTimeline: 'Weekly marketing sync in 10 minutes',
    clientEnvironment: 'D2C Apparel Brand ($8,000/mo Meta spend, Shopify store)',
    briefingSummary: 'Dave noticed that Meta Ads Manager reports 400 Outbound Clicks for yesterday\'s campaign, but Google Analytics 4 only recorded 120 sessions from facebook/cpc. He suspects click fraud or broken tracking.',
    initialClientDialogue: "Hey, I was looking at our dashboard this morning and the numbers make zero sense. Meta charged us for 400 clicks yesterday, but Google Analytics only recorded 120 visitors to our store! Where did the other 280 people go? Are we paying for bot clicks, or is Meta just lying about its metrics?",
    brokenKPIs: [
      {
        metric: 'Meta Outbound Clicks',
        previousValue: '380',
        currentValue: '400',
        deltaPercent: '+5.2%',
        isNegative: false,
        benchmark: '350',
        rootCauseClues: [
          'Meta tracks the click event on the ad unit inside Instagram/Facebook app'
        ]
      },
      {
        metric: 'GA4 Recorded Sessions',
        previousValue: '280',
        currentValue: '120',
        deltaPercent: '-57.1%',
        isNegative: true,
        benchmark: '320',
        rootCauseClues: [
          'Mobile website load time spiked to 5.4 seconds after new uncompressed hero video was added to Shopify homepage',
          'In-app browser users bouncing before the heavy GA4 tag executes'
        ]
      }
    ],
    stakeholder: {
      name: 'Dave Miller',
      title: 'Founder & Head of Product',
      organization: 'AeroAthletics D2C',
      temperament: 'curious-client',
      keyConcerns: [
        'Believes advertising platforms are charging for fake clicks',
        'Wants to ensure Shopify store is accurately tracking revenue sources',
        'Needs to know whether budget should be paused'
      ],
      triggerPhrases: [
        'Analytics always has discrepancies',
        'Meta clicks do not matter',
        'Clicks and visits are different things'
      ]
    },
    targetRootCauses: [
      'Click-to-session drop-off: A click is recorded inside Meta the millisecond a finger taps the ad, but a session requires the full webpage and GA4 script to load on the user\'s mobile phone',
      'Mobile page load latency: If a landing page takes 4+ seconds to load on cellular data, 50%+ of users bounce before analytics triggers',
      'In-app browser consent banners or redirects stripping UTM parameters'
    ],
    prohibitedExcuses: [
      'Saying "Facebook and Google never agree, deal with it"',
      'Blaming user bots without running a page speed and tag audit',
      'Ignoring the mobile speed bottlenecks on Shopify'
    ],
    modelAnswerBLUF: {
      bluf: "Dave, the difference between Meta's 400 clicks and GA4's 120 sessions is not fake clicks or ad fraud—it is mobile load speed drop-off. Meta counts a click the moment a user taps the ad in their Instagram feed, while Google Analytics only counts a visitor after your Shopify page and tracking scripts completely finish loading. Because yesterday's new video asset slowed your mobile load time to 5.4 seconds, over half the users closed the tab before the page finished opening.",
      rootCauseAnalysis: "Specifically, our audit shows your mobile landing page weight doubled yesterday from 1.8MB to 6.2MB due to the uncompressed autoplay hero banner. On a standard 4G mobile connection, 55% of users tap an ad, wait 3 seconds, and immediately swipe away when the screen is white. Meta legitimately sent the click, but Google Analytics was never allowed to execute.",
      immediateMitigation: "We have already compressed the hero video to under 450KB and enabled WebP image formats, which immediately cuts load time from 5.4s down to 1.6s. We also verified UTM tags are intact.",
      recoveryPlan72h: "Over the next 48 hours, your Click-to-Session conversion rate will rebound from 30% back to our 85% benchmark, bringing GA4 tracked sessions right in line with Meta ad clicks.",
      fullVerbatimScript: "Hey Dave, that is an excellent question and one of the most important things to master in performance marketing. Here is the bottom line: Meta isn't charging you for ghost clicks, and Google Analytics isn't broken. A click on Meta is recorded the split-second a user taps your ad. But Google Analytics only counts a 'session' once your website completely finishes downloading on their phone. Yesterday, when the new video banner was added to the homepage, mobile load speed jumped to 5.4 seconds. Over 200 people tapped the ad, waited 3 seconds, and tapped the back button before GA4 could even wake up. We've already compressed that video asset down to 400KB, bringing load time down to 1.6 seconds. You will see GA4 sessions climb right back up to match Meta clicks by this afternoon."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'marketingLogic',
        prompt: 'Explain "Click-to-Session Drop-off" in simple terms to an e-commerce brand owner in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Contrast ad click (finger tap on app) vs loaded session (browser executes analytics)',
          'Highlight impact of mobile page load latency and connection speed',
          'Offer immediate remediation (image compression, CDN, lightweight tags)'
        ]
      }
    ]
  },
  {
    id: 'cpc-vs-cpm-bidding-explained',
    title: 'Marketing Fundamentals: "What Is the Difference Between CPC and CPM?"',
    subtitle: 'New retail client confused about billing models and wants to know which bidding strategy to use',
    category: 'fundamentals',
    difficulty: 'beginner',
    urgencyTimeline: 'Strategy alignment call',
    clientEnvironment: 'Artisan Home Decor Brand ($4,000 initial launch budget)',
    briefingSummary: 'Alex is launching a new line of organic home goods and received a proposal mentioning CPC vs CPM bidding. They are confused about why an advertiser would ever pay for impressions (CPM) if they can just pay for actual clicks (CPC).',
    initialClientDialogue: "I was reviewing the media plan you sent over, and I noticed some campaigns are billed on 'CPM' and others on 'CPC'. If CPC means I only pay when someone actually clicks my ad, why would I ever pay for CPM where I pay just for people looking at it? Paying for views seems like a waste of money compared to paying for clicks!",
    brokenKPIs: [
      {
        metric: 'Planned Blended CPC',
        previousValue: 'N/A',
        currentValue: '$0.85',
        deltaPercent: '0%',
        isNegative: false,
        benchmark: '$1.10',
        rootCauseClues: [
          'High creative CTR enables low effective CPC under CPM auction models'
        ]
      }
    ],
    stakeholder: {
      name: 'Alex Rivera',
      title: 'Founder & Creative Director',
      organization: 'Loom & Clay Living',
      temperament: 'inquisitive-founder',
      keyConcerns: [
        'Wants to ensure zero budget waste during launch month',
        'Confused by advertising terminology and acronyms',
        'Seeks an agency partner who educates rather than gatekeeps'
      ],
      triggerPhrases: [
        'CPM is just for big brand awareness',
        'Just let the platform decide',
        'It is too technical to explain'
      ]
    },
    targetRootCauses: [
      'CPC (Cost Per Click) is direct-response insurance: ideal for high-intent search where you only pay when an active searcher clicks your offer',
      'CPM (Cost Per Mille / 1,000 Impressions) is the universal underlying currency of social media feeds (Meta, TikTok, YouTube)',
      'Under CPM, having a high Click-Through Rate (CTR) actually produces a much cheaper effective CPC than paying for clicks directly'
    ],
    prohibitedExcuses: [
      'Treating CPM as purely "wasteful impressions"',
      'Failing to explain that all platforms bid in eCPM under the hood',
      'Dismissing the client\'s intuition'
    ],
    modelAnswerBLUF: {
      bluf: "Alex, your intuition is completely natural: paying only when someone clicks sounds safer than paying for views. Here is the key: CPC is best for high-intent Google Search, where someone is actively typing 'buy ceramic vases' and you only pay when they visit your site. However, on social platforms like Meta and Instagram, ads are sold on CPM (cost per 1,000 views). The secret is that when your creative is compelling and achieves a high Click-Through Rate, CPM actually generates clicks at a fraction of the cost of CPC bidding.",
      rootCauseAnalysis: "All social ad auctions operate on eCPM (effective cost per thousand impressions). If you pay $15 CPM and your ad creative achieves a strong 3% Click-Through Rate, 1,000 views generates 30 clicks for $15—meaning your effective cost per click is only 50 cents! If you forced the platform to charge you on a flat CPC, it would charge $1.20 per click to cover its risk.",
      immediateMitigation: "Our strategy pairs the two models perfectly: we use CPC on Google Search to capture people ready to buy today, and CPM on Instagram with thumb-stopping video creative to generate high-volume traffic at the lowest possible cost per visit.",
      recoveryPlan72h: "In our weekly performance dashboard, we will report both your actual CPM and your Effective CPC side-by-side so you can see the exact math working in your favor.",
      fullVerbatimScript: "Alex, that is one of the smartest questions a founder can ask! When you first hear it, paying for clicks (CPC) sounds way better than paying for views (CPM). Here is how they actually work together: Think of CPC as a taxi meter—you only pay for the exact distance traveled. That's ideal for Google Search when someone types 'buy handcrafted rugs'—you only pay when they walk through your digital door. But platforms like Instagram and Facebook don't sell clicks; they sell real estate in the feed by the thousand views (CPM). If we create an ad that catches attention with a strong 3% click rate, that $15 CPM gives you 30 clicks, which averages to just 50 cents per click! If you bid CPC on social, the platform charges a premium—often $1.50 per click. So we use CPC for Google Search to capture high intent, and CPM on social to get you the lowest cost per customer."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'terminologyAccuracy',
        prompt: 'Explain how a high Click-Through Rate (CTR) lowers your effective Cost Per Click (eCPC) on a CPM campaign.',
        timeLimitSeconds: 60,
        idealPoints: [
          'State formula: eCPC = CPM ÷ (1,000 × CTR)',
          'Demonstrate with clear numbers (e.g. $20 CPM at 1% CTR = $2 CPC vs 2% CTR = $1 CPC)',
          'Highlight creative quality as the ultimate lever for lowering acquisition costs'
        ]
      }
    ]
  },
  {
    id: 'daily-budget-exhausted-morning',
    title: 'Pacing Crisis: "Why Did Our $100 Daily Budget Run Out by 10:30 AM?"',
    subtitle: 'Local retail boutique surprised that their Google Search campaign pauses before lunch',
    category: 'google-ads',
    difficulty: 'beginner',
    urgencyTimeline: 'Client email inquiry',
    clientEnvironment: 'Specialty Coffee & Pastry Shop ($3,000/mo spend, local foot traffic focus)',
    briefingSummary: 'Priya checked her Google Ads dashboard at 11:00 AM and saw the dreaded red banner: "Campaign budget exhausted". She is upset because her peak afternoon customer rush (1:00 PM - 5:00 PM) will have zero ad coverage.',
    initialClientDialogue: "I just logged into our ad account at 11 AM and it says our $100 daily budget is already 100% spent! The day has barely started! Our afternoon coffee and pastry rush doesn't even begin until 1 PM, and now our ads are completely paused for the rest of the day. Why did Google burn through all our money in three hours?",
    brokenKPIs: [
      {
        metric: 'Morning Spend Share (7am - 11am)',
        previousValue: '35%',
        currentValue: '100%',
        deltaPercent: '+185%',
        isNegative: true,
        benchmark: '40%',
        rootCauseClues: [
          'Broad match keywords "coffee beans", "breakfast near me" triggering heavy high-volume commuter searches',
          'Ad scheduling (Dayparting) was set to 24/7 without custom bid modifiers',
          'Aggressive Maximize Clicks bidding without bid ceiling'
        ]
      }
    ],
    stakeholder: {
      name: 'Priya Sharma',
      title: 'Owner & Operator',
      organization: 'Artisan Roast House',
      temperament: 'concerned-owner',
      keyConcerns: [
        'Ads are dark during peak afternoon revenue hours',
        'Worried Google is wasting budget on irrelevant morning queries',
        'Cannot increase overall monthly budget above $3,000'
      ],
      triggerPhrases: [
        'You should just increase your budget',
        'Google knows when to spend',
        'High demand is always good'
      ]
    },
    targetRootCauses: [
      'Lack of Ad Scheduling (Dayparting): The campaign was serving 24 hours a day and exhausted its cap during the morning commute rush',
      'Broad Match query inflation: Generic morning search queries ate up daily budget before local high-intent afternoon foot-traffic searches arrived',
      'Missing Max CPC bid cap on smart bidding'
    ],
    prohibitedExcuses: [
      'Telling the client to double their budget to solve the issue',
      'Saying that Google determines optimal pacing and cannot be controlled',
      'Blaming the client for choosing a small budget'
    ],
    modelAnswerBLUF: {
      bluf: "Priya, your budget ran out early because our search keywords were set to run 24/7 without dayparting rules, allowing early morning commuter searches to consume the $100 cap before your peak afternoon rush. The solution is immediate: we have applied custom Ad Scheduling and negative phrase filters so your ads will only serve between 11:30 AM and 6:30 PM, guaranteeing 100% ad visibility when your afternoon coffee customers are ready to order.",
      rootCauseAnalysis: "Specifically, generic broad search terms like 'coffee near me' surged between 7:30 AM and 9:30 AM. Because the campaign had no hourly pacing rules or bid ceilings, Google served every available impression immediately. While those searches were relevant, they left zero budget for your crucial 1:00 PM to 5:00 PM afternoon peak.",
      immediateMitigation: "Within the last 15 minutes, we implemented three fixes: 1) Applied Dayparting to turn off ads before 11:00 AM, 2) Set a $1.25 Max CPC bid ceiling, and 3) Added negative keywords for generic drive-thru queries to eliminate wasted morning clicks.",
      recoveryPlan72h: "Starting tomorrow morning, your $100 daily spend will pace evenly across your exact peak operating hours, ensuring steady afternoon foot-traffic without running out of budget prematurely.",
      fullVerbatimScript: "Hi Priya, you are 100% right to flag this. Your ads shouldn't be going dark right before your biggest afternoon rush. Here is what happened: Because the campaign was set to run all day, Google served ads to every morning commuter searching for coffee on their train ride between 7 AM and 10 AM, which wiped out the $100 daily limit before your afternoon crowd arrived. The fix is already done: We applied an Ad Schedule that concentrates your budget starting at 11:30 AM through 6:30 PM. We also added a maximum bid cap so no single click eats more than $1.25. Starting tomorrow, your budget will be fully protected for your afternoon rush and will never run out in the morning again."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'executivePresence',
        prompt: 'Client is frustrated about their budget pacing out early. Reassure them and explain Dayparting without defensive excuses in 45 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Acknowledge validity of client frustration immediately',
          'Explain Dayparting / Ad Scheduling mechanics simply',
          'Confirm specific hours when ads will now be protected'
        ]
      }
    ]
  },
  {
    id: 'high-ctr-zero-purchases',
    title: 'Conversion Breakdown: "High Ad CTR (3.8%) but ZERO Purchases on Shopify!"',
    subtitle: 'Brand owner excited by ad clicks but terrified by a 0% conversion rate on their store',
    category: 'ecommerce-d2c',
    difficulty: 'beginner',
    urgencyTimeline: 'Slack message review',
    clientEnvironment: 'D2C Skincare Brand ($5,000/mo spend on Meta Ads)',
    briefingSummary: 'Emma launched a new Vitamin C Serum campaign on Instagram. The ad has a sensational 3.8% CTR with 600 link clicks in 48 hours, but the Shopify store has generated zero sales.',
    initialClientDialogue: "Everyone told me a 3% CTR is amazing, and our ads have a 3.8% click rate! People are clearly clicking like crazy—over 600 people visited our product page in the last two days. But we have made ZERO sales. Not a single order! Are these real people? Why is nobody buying after clicking?",
    brokenKPIs: [
      {
        metric: 'Meta Ad Click-Through Rate (CTR)',
        previousValue: '1.2%',
        currentValue: '3.8%',
        deltaPercent: '+216%',
        isNegative: false,
        benchmark: '1.5%',
        rootCauseClues: [
          'Viral video creative promised "Free Anti-Aging Miracle Sample"'
        ]
      },
      {
        metric: 'Website Conversion Rate',
        previousValue: '2.1%',
        currentValue: '0.0%',
        deltaPercent: '-100%',
        isNegative: true,
        benchmark: '2.0%',
        rootCauseClues: [
          'Ad copy promised "Free Sample", but landing page requires $68 full-bottle purchase with $9.95 mandatory shipping',
          'Massive expectation mismatch between click-bait hook and checkout requirement'
        ]
      }
    ],
    stakeholder: {
      name: 'Emma Watson',
      title: 'Founder & Formulator',
      organization: 'GlowBotanica Organics',
      temperament: 'inquisitive-founder',
      keyConcerns: [
        'Confused why high interest does not translate into revenue',
        'Worried her product price ($68) is too high for the market',
        'Running out of cash flow if zero sales continue'
      ],
      triggerPhrases: [
        'Your product is too expensive',
        'CTR is all that matters for ads',
        'You need to offer discounts'
      ]
    },
    targetRootCauses: [
      'Ad-to-Landing Page Expectation Mismatch: The creative ad hook promised a free sample, but the landing page demanded a $68 commitment plus shipping',
      'Optimizing for Link Clicks instead of Purchase Conversions in Meta Ads Campaign Objective',
      'Mobile checkout friction: Mandatory account creation before checkout'
    ],
    prohibitedExcuses: [
      'Blaming the price point without auditing ad messaging alignment',
      'Claiming 600 clicks is not enough data to evaluate conversions',
      'Celebrating high CTR when conversion is zero'
    ],
    modelAnswerBLUF: {
      bluf: "Emma, your high 3.8% CTR combined with zero purchases indicates an ad-to-page expectation mismatch, compounded by optimizing for 'Traffic' rather than 'Purchases'. Your ad creative highlights a 'free sample' hook, but when visitors arrive at your store, they find a $68 full-bottle purchase requirement. You attracted bargain-hunters instead of qualified buyers.",
      rootCauseAnalysis: "Specifically, Meta's algorithm optimized for people who love clicking links rather than people who have a history of online buying. When those 600 clickers landed and realized the free sample was actually a full $68 cart, 98% bounced in under 4 seconds. High CTR without buying intent is vanity traffic.",
      immediateMitigation: "We made two immediate adjustments: 1) Changed the Meta campaign objective from 'Traffic' to 'Conversions - Purchase', ensuring ads serve to high-intent shoppers, and 2) Updated the ad creative hook to highlight the premium clinical formulation and $68 value proposition up front.",
      recoveryPlan72h: "While CTR will normalize to a realistic 1.8%, conversion rate will jump to 2.2%, generating profitable sales rather than empty clicks over the next 48 hours.",
      fullVerbatimScript: "Emma, congratulations on making a creative with such an engaging 3.8% hook! But here is the raw truth: A high CTR with zero sales is a classic symptom of an 'ad-to-landing-page disconnect'. The ad was so exciting with the 'free trial' phrasing that it got 600 curiosity clicks. But when visitors landed on your site, they were asked to pay $68. That sudden shift in expectation caused 98% of people to leave immediately. On top of that, the campaign was set to 'Traffic' objective, which tells Meta to find clickers rather than buyers. We have aligned the ad copy to honestly showcase the $68 luxury formulation and switched the campaign to 'Purchase' optimization. Your clicks will now be real buyers, and you will see orders start rolling in today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'marketingLogic',
        prompt: 'Explain the difference between Meta "Traffic / Link Clicks" objective and "Sales / Conversions" objective in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Traffic objective targets high-click users regardless of purchase intent',
          'Conversion objective leverages Meta machine learning to target users with recent purchase history',
          'Explaining why vanity clicks hurt ROAS'
        ]
      }
    ]
  }
];

export const INTERMEDIATE_SCENARIOS: Scenario[] = [
  {
    id: 'meta-ads-scaling-cac-jump',
    title: 'Meta Ads: "CAC Jumped 45% When We Scaled Budget from $500 to $1,500/day"',
    subtitle: 'Account manager facing client anger over non-linear scaling economics and audience saturation',
    category: 'meta-ads',
    difficulty: 'intermediate',
    urgencyTimeline: 'Weekly client growth meeting in 30 minutes',
    clientEnvironment: 'E-commerce D2C Footwear ($45k/mo spend, Shopify + Klaviyo)',
    briefingSummary: 'Michael instructed the agency to triple daily spend from $500 to $1,500 following a successful Black Friday teaser. Customer Acquisition Cost (CAC) instantly climbed from $28 to $41, wiping out profit margins.',
    initialClientDialogue: "Two weeks ago you told me our unit economics were solid at a $28 CAC. I told you to triple the budget to $1,500 a day so we could capture market share. Now my CAC is sitting at $41 and our blended ROAS collapsed from 3.2x to 1.9x! Why can't your team scale a campaign without driving our costs through the roof?",
    brokenKPIs: [
      {
        metric: 'Customer Acquisition Cost (CAC)',
        previousValue: '$28.40',
        currentValue: '$41.20',
        deltaPercent: '+45.1%',
        isNegative: true,
        benchmark: '$26.00',
        rootCauseClues: [
          'Vertical budget scaling by 200% in a single day reset Meta ad set learning phase',
          'Auction bid elasticity pushed bids into higher CPM competitor brackets',
          'Ad frequency jumped from 1.3 to 2.9 in 6 days across narrow interest lookalikes'
        ]
      },
      {
        metric: 'Blended ROAS',
        previousValue: '3.25x',
        currentValue: '1.92x',
        deltaPercent: '-40.9%',
        isNegative: true,
        benchmark: '2.80x',
        rootCauseClues: [
          'Single ad creative consumed 74% of increased spend'
        ]
      }
    ],
    stakeholder: {
      name: 'Michael Chen',
      title: 'Head of Growth',
      organization: 'StrataFootwear D2C',
      temperament: 'frustrated-cfo',
      keyConcerns: [
        'Believes paid media scaling should be linear',
        'Anxious about burning inventory margins at $41 CAC',
        'Needs an actionable roadmap to scale profitably'
      ],
      triggerPhrases: [
        'Facebook is greedy',
        'Scaling is impossible right now',
        'We should go back to $500 and stay there'
      ]
    },
    targetRootCauses: [
      'Vertical budget scaling shock: Increasing budget by >20% in 24 hours restarts the Meta learning phase and triggers auction bid elasticity',
      'Audience saturation: Narrow 1% lookalike audience suffered severe creative fatigue as frequency spiked to 2.9',
      'Lack of horizontal scaling: Scaling requires testing new hooks, angles, and broader Advantage+ audience pools rather than pouring 3x cash into a single ad set'
    ],
    prohibitedExcuses: [
      'Claiming ad platforms always double CAC when scaling',
      'Blaming the client for requesting the budget increase',
      'Recommending an immediate panic-cut back to $500 without a restructuring plan'
    ],
    modelAnswerBLUF: {
      bluf: "Michael, the CAC increase from $28 to $41 was caused by vertical budget shock and audience saturation, not a breakdown in your product demand. When we tripled spend from $500 to $1,500 overnight, Meta's algorithm was forced to bid aggressively in higher CPM auctions and repeatedly serve the same creative to your 1% lookalike pool, pushing ad frequency to 2.9. We have restructured into a horizontal scaling framework to lock CAC back below $30.",
      rootCauseAnalysis: "In paid social, ad spend does not scale linearly through a single funnel. Tripling budget in 24 hours resets Meta's learning phase and spikes auction CPMs by 38%. Simultaneously, one single video ad absorbed $1,100 of the daily budget, causing instant ad fatigue among your core audience.",
      immediateMitigation: "We executed an immediate scaling rebalance: 1) Transitioned your core spend into Advantage+ Shopping Campaigns (ASC) with broad targeting to expand audience liquidity, 2) Deployed 4 new creative hook angles to distribute impression weight, and 3) Capped vertical budget increases to 15-20% increments every 72 hours.",
      recoveryPlan72h: "Over the next 72 hours, audience frequency will cool to 1.4 and your CAC will stabilize between $27 and $30 at the current $1,500/day volume, generating $4,500+ in daily profitable revenue.",
      fullVerbatimScript: "Michael, I understand your frustration. When you invest $1,500 a day, you expect more profit, not a CAC spike to $41. Let me explain the mechanics: Paid social auctions don't scale like a spigot. When we increased spend by 200% in a single day, Meta's algorithm was forced to compete in much more expensive auction tiers, and it repeatedly hammered your narrow lookalike audience until frequency hit 2.9. That's why CAC jumped. To scale to $1,500 profitably, we must scale horizontally, not vertically. We've already migrated budget into an Advantage+ broad pool, introduced 4 fresh creative variations, and instituted a disciplined 20% incremental pacing rule. Your CAC will stabilize back under $30 within 72 hours while maintaining your $1,500 daily scale."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'marketingLogic',
        prompt: 'Explain the difference between Vertical Scaling and Horizontal Scaling on Meta Ads in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Vertical: Increasing budget on existing ad set (max 15-20% every 48-72h to prevent learning phase reset)',
          'Horizontal: Launching new creative concepts, broad audiences, and Advantage+ pipelines',
          'How horizontal scaling avoids creative fatigue and CPM inflation'
        ]
      }
    ]
  },
  {
    id: 'google-search-broad-match-bleed',
    title: 'Google Search: "Broad Match Bleed & Unqualified Search Query Waste ($8,000 Burned)"',
    subtitle: 'SaaS marketing VP discovers ad spend leaking into irrelevant career and free download queries',
    category: 'google-ads',
    difficulty: 'intermediate',
    urgencyTimeline: 'Weekly executive review in 20 minutes',
    clientEnvironment: 'B2B Enterprise Project Management Software ($60k/mo ad spend)',
    briefingSummary: 'Rachel pulled the Google Ads Search Terms report and found that $8,200 of last month\'s spend went to queries like "free project management templates in excel", "software engineer jobs", and "trello login".',
    initialClientDialogue: "I just downloaded our search query report for last month and I am appalled. We spent over eight thousand dollars on people searching for 'free excel templates', 'internship openings', and even our competitor's customer login portal! We sell enterprise software for $50k a year! Why is Google Ads showing our ads to job seekers and college students looking for free spreadsheets?",
    brokenKPIs: [
      {
        metric: 'Search Term Waste Ratio',
        previousValue: '6.2%',
        currentValue: '28.4%',
        deltaPercent: '+358%',
        isNegative: true,
        benchmark: '8.0%',
        rootCauseClues: [
          'Keywords migrated from Phrase Match to pure Broad Match under Google automated recommendation',
          'Negative keyword list lacked shared negative library across accounts',
          'Smart Bidding optimizing for top-of-funnel whitepaper downloads'
        ]
      }
    ],
    stakeholder: {
      name: 'Rachel Adams',
      title: 'VP of Marketing',
      organization: 'PulsePlan Enterprise Software',
      temperament: 'analytical-vp',
      keyConcerns: [
        'Executive accountability for $8,200 in wasted ad spend',
        'Sales team complaining about unqualified whitepaper leads',
        'Loss of confidence in agency negative keyword governance'
      ],
      triggerPhrases: [
        'Broad Match works with AI',
        'Google recommendations told us to do it',
        'It increases brand awareness'
      ]
    },
    targetRootCauses: [
      'Unsupervised Broad Match migration: Applying Google auto-recommendations without a rigorous shared negative keyword list allowed semantic expansion into low-intent informational queries',
      'Conversion tracking misalignment: Bidding algorithm was optimizing for cheap whitepaper form downloads rather than sales qualified enterprise demos',
      'Absence of competitor login and career negative keyword lists'
    ],
    prohibitedExcuses: [
      'Claiming "Google\'s AI Smart Bidding needs broad match to find signals"',
      'Blaming Google auto-apply recommendations without accepting agency oversight responsibility',
      'Calling irrelevant clicks "cheap brand impressions"'
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, you are completely justified in your reaction—$8,200 spent on job-seeker and free template queries is unacceptable waste caused by broad match keyword expansion without adequate negative keyword guardrails. We took immediate action this morning: we isolated and removed the expanded broad match terms, deployed a 1,200-phrase negative master exclusion list, and re-anchored Smart Bidding exclusively to verified demo requests.",
      rootCauseAnalysis: "When Google's broad match algorithm expanded search themes, it paired high-intent phrases like 'enterprise project software' with loose informational intent like 'free excel templates' and 'jobs'. Because whitepaper downloads had conversion value equal to demo requests in the account, Smart Bidding actively chased these cheap, irrelevant queries.",
      immediateMitigation: "Within the last hour, we executed three hard safeguards: 1) Attached account-level negative keyword lists blocking all career, login, student, and 'free' variants, 2) Reverted core high-intent campaigns back to Phrase and Exact match, and 3) Stripped whitepaper downloads of conversion value so bidding prioritizes demo bookings only.",
      recoveryPlan72h: "Over the next 72 hours, Search Term Waste Ratio will plunge below 4%, and 100% of your daily budget will flow directly to enterprise evaluation searches.",
      fullVerbatimScript: "Rachel, I completely share your frustration. Seeing $8,200 go toward job seekers and free spreadsheet searches is infuriating for a $50k enterprise solution. Here is exactly what happened: When the search terms were migrated to Broad Match to capture incremental volume, the negative keyword filters weren't tight enough, allowing Google's AI to match against terms like 'free' and 'login'. Even worse, because our conversion goals included whitepaper downloads, the bidding engine thought these cheap clicks were successful. We've already halted the broad match keywords, applied a verified negative exclusion list blocking 1,200 non-buyer terms, and restructured Smart Bidding to optimize solely for qualified demo requests. Wasted spend is stopped as of this morning, and your pipeline efficiency is restored."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'terminologyAccuracy',
        prompt: 'Explain the difference between Exact Match, Phrase Match, and Broad Match keywords to an enterprise VP in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Exact: Serves only on identical meaning or close variants',
          'Phrase: Serves on queries including the core meaning with modifier flexibility',
          'Broad: AI semantic matching requiring strict negative keyword lists'
        ]
      }
    ]
  },
  {
    id: 'shopify-high-atc-low-checkout',
    title: 'E-Commerce Funnel: "14% Add-to-Cart But Only 0.9% Checkout Conversion Rate!"',
    subtitle: 'High ad intent collapsing at the final checkout step—founder suspects payment or shipping bugs',
    category: 'ecommerce-d2c',
    difficulty: 'intermediate',
    urgencyTimeline: 'Emergency founder call',
    clientEnvironment: 'D2C Consumer Electronics ($25k/mo spend, Shopify Plus)',
    briefingSummary: 'Jordan\'s ad campaigns are driving heavy traffic with phenomenal product page engagement: 14% of visitors click "Add to Cart". However, only 0.9% complete checkout, resulting in an 88% cart abandonment rate.',
    initialClientDialogue: "Look at these metrics: our ad click rate is strong, our product page engagement is through the roof, and 14% of people are clicking 'Add to Cart'! But our final store conversion rate is less than one percent! Almost 90% of people who put our headphones in their cart walk away at checkout. Are our ads targeting broke people, or is our checkout broken?",
    brokenKPIs: [
      {
        metric: 'Cart-to-Purchase Drop-off',
        previousValue: '62%',
        currentValue: '89.4%',
        deltaPercent: '+44.1%',
        isNegative: true,
        benchmark: '65%',
        rootCauseClues: [
          'Unexpected $18.50 shipping fee revealed only at the final payment step',
          'Shopify checkout requires manual account creation before guest checkout',
          'Shop Pay and Apple Pay express buttons disabled during recent theme update'
        ]
      }
    ],
    stakeholder: {
      name: 'Jordan Lee',
      title: 'Founder & CEO',
      organization: 'VibeAcoustics',
      temperament: 'frustrated-cfo',
      keyConcerns: [
        'Losing thousands in potential revenue every 24 hours',
        'Wants to know whether ads or checkout UX is to blame',
        'Needs immediate conversion rate optimization (CRO) roadmap'
      ],
      triggerPhrases: [
        'People just like to window shop',
        'Our ads are doing their job, the site is your problem',
        'Cart abandonment is normal'
      ]
    },
    targetRootCauses: [
      'Hidden shipping cost shock: Presenting unexpected shipping fees at the final payment screen causes 60%+ immediate cart abandonment',
      'Forced account creation: Disabling guest checkout adds massive mobile friction',
      'Missing 1-click express checkout (Apple Pay / Shop Pay)'
    ],
    prohibitedExcuses: [
      'Claiming "the agency only manages the ads, the website is not our problem"',
      'Accepting 90% cart abandonment as normal industry standard',
      'Blaming low consumer purchasing power'
    ],
    modelAnswerBLUF: {
      bluf: "Jordan, your ad traffic is high quality—a 14% Add-to-Cart rate proves intent is exceptional. The leak is occurring exclusively at the final checkout screen due to three friction points: unexpected $18.50 shipping revealed at payment, forced customer account registration, and missing Apple Pay/Shop Pay 1-click buttons. Fixing these checkout bottlenecks will double your sales volume overnight without spending an extra dollar on ads.",
      rootCauseAnalysis: "Our funnel telemetry revealed that users progress smoothly through product selection and cart. However, the moment they enter their address, an unexpected shipping fee appears, and the form demands password creation. Over 75% of users abandon at that exact screen.",
      immediateMitigation: "We collaborated with your Shopify developer to implement three instant CRO fixes: 1) Replaced forced registration with 1-click Guest Checkout, 2) Re-enabled Apple Pay and Shop Pay express checkout buttons, and 3) Incorporated free threshold shipping banners on product pages.",
      recoveryPlan72h: "Over the next 72 hours, Cart-to-Purchase conversion will rebound from 10% to 34%, immediately doubling your store revenue and driving blended ROAS above 3.5x.",
      fullVerbatimScript: "Jordan, the great news is your ads are working phenomenally well—getting 14% of people to click 'Add to Cart' is elite performance. The reason they aren't finishing the order isn't because they're broke; it's because your checkout is putting up roadblocks. When we audited the checkout path on mobile, we found that buyers were forced to create a password, Apple Pay was turned off, and an unexpected $18.50 shipping charge appeared at the very last step. That surprise kills 80% of sales. We've enabled 1-click guest checkout, restored Apple Pay, and highlighted transparent shipping on the product page. You will see completed purchases surge starting today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'marketingLogic',
        prompt: 'Explain the 3 primary causes of e-commerce cart abandonment and how to fix them in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Unexpected shipping / fees revealed late in checkout',
          'Forced account registration instead of seamless guest checkout',
          'Lack of mobile express payment methods (Apple Pay, Shop Pay, PayPal)'
        ]
      }
    ]
  },
  {
    id: 'google-ads-quality-score-drop',
    title: 'Auction Mechanics: "Quality Score Dropped to 3/10—CPCs Tripled from $3.20 to $9.80!"',
    subtitle: 'B2B finance client experiencing massive bid inflation due to landing page relevance penalties',
    category: 'google-ads',
    difficulty: 'intermediate',
    urgencyTimeline: 'Weekly performance audit',
    clientEnvironment: 'B2B Commercial Lending ($40k/mo spend, Salesforce CRM)',
    briefingSummary: 'Thomas noticed that Search CPCs tripled over the last three weeks from $3.20 to $9.80 for core commercial loan keywords. Google Ads dashboard shows Quality Score collapsed from 8/10 to 3/10.',
    initialClientDialogue: "Our cost per click just hit almost $10! Last month we were paying $3.20 for the exact same keywords. I checked the column in Google Ads and our 'Quality Score' is showing 3 out of 10 with a warning for 'Below Average Landing Page Experience'. Why did Google suddenly downgrade our score, and why does that give them permission to charge us triple?",
    brokenKPIs: [
      {
        metric: 'Average Cost Per Click (CPC)',
        previousValue: '$3.20',
        currentValue: '$9.80',
        deltaPercent: '+206%',
        isNegative: true,
        benchmark: '$3.50',
        rootCauseClues: [
          'Recent website redesign replaced dedicated landing pages with generic home page redirect',
          'Mobile PageSpeed Insights score collapsed from 88 to 24 after uncompressed tracking scripts were injected',
          'Expected CTR dropped due to generic ad copy lacking dynamic keyword insertion'
        ]
      },
      {
        metric: 'Quality Score',
        previousValue: '8/10',
        currentValue: '3/10',
        deltaPercent: '-62.5%',
        isNegative: true,
        benchmark: '7/10',
        rootCauseClues: [
          'Landing Page Experience: Below Average',
          'Ad Relevance: Below Average'
        ]
      }
    ],
    stakeholder: {
      name: 'Thomas Wright',
      title: 'Director of Commercial Lending',
      organization: 'Apex Capital Partners',
      temperament: 'analytical-vp',
      keyConcerns: [
        'CPC inflation is draining monthly loan acquisition budget',
        'Needs to understand the exact mathematical relationship between Quality Score and CPC',
        'Demands immediate restoration of 8/10 Quality Score'
      ],
      triggerPhrases: [
        'Quality Score is just a vanity metric',
        'Google does this to make more money',
        'We just need to raise our bids'
      ]
    },
    targetRootCauses: [
      'Ad Rank formula: Ad Rank = Max Bid × Quality Score. When Quality Score drops from 8 to 3, the advertiser must bid ~3x higher to maintain the same ad rank position',
      'Landing page relevance penalty: Redirecting specific keyword traffic to the generic homepage destroyed topical relevance',
      'Mobile page speed collapse: Landing page load latency spiked to 6.2 seconds'
    ],
    prohibitedExcuses: [
      'Claiming Quality Score does not affect actual auction pricing',
      'Recommending just bidding more without fixing the landing page experience',
      'Blaming competitor bidding spikes alone'
    ],
    modelAnswerBLUF: {
      bluf: "Thomas, your CPC tripled from $3.20 to $9.80 because Google's Ad Rank formula directly penalizes low Quality Scores: Ad Rank equals your Bid multiplied by your Quality Score. When the recent site redesign routed specific commercial loan keywords to your generic homepage and slowed mobile load speed to 6.2 seconds, your Quality Score dropped from 8 to 3, forcing Google to charge 300% more to maintain your position.",
      rootCauseAnalysis: "Google's auction rewards relevance. The three components of Quality Score are Expected CTR, Ad Relevance, and Landing Page Experience. Routing commercial loan traffic to a generic homepage created a mismatch with ad copy, while heavy unoptimized tracking scripts triggered 'Below Average Landing Page Experience'.",
      immediateMitigation: "We took three immediate corrective actions: 1) Re-routed all keyword ad groups back to dedicated, high-speed single-theme landing pages, 2) Restructured ad copy using Dynamic Keyword Insertion (DKI) to achieve 'Above Average' Ad Relevance, and 3) Stripped redundant tracking scripts to return mobile load time under 2 seconds.",
      recoveryPlan72h: "Over the next 5 to 7 days, Google's auction crawler will recrawl the dedicated pages, restoring your Quality Score to 7-8/10 and driving CPCs back down below $3.50.",
      fullVerbatimScript: "Thomas, your frustration is totally justified—paying $9.80 for clicks that used to cost $3.20 hurts. Here is the mathematical reality: Google uses a formula called Ad Rank, which is your Bid multiplied by your Quality Score. If your Quality Score is 8, you pay a discount. But when it dropped to 3, Google penalizes you by forcing you to bid nearly triple just to hold your position. Why did it drop? When the website was updated last month, traffic was redirected to the homepage instead of specific commercial loan pages, and mobile load speed slowed down. We've already re-routed traffic back to dedicated high-speed pages and updated headlines to match exact search terms. As Google recrawls these pages this week, your Quality Score will climb back to 8, bringing your CPCs right back down to normal."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'terminologyAccuracy',
        prompt: 'Explain the 3 pillars of Google Ads Quality Score and how they impact Cost Per Click (CPC) in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          '3 Pillars: Expected CTR, Ad Relevance, Landing Page Experience',
          'Formula: Ad Rank = Bid × Quality Score (Higher QS yields lower actual CPC for same position)',
          'Actionable levers: Single-theme ad copy, page speed, mobile content matching'
        ]
      }
    ]
  }
];

// ADVANCED SCENARIOS (Inherited & Enhanced from Crisis Crucibles)
export const ADVANCED_SCENARIOS: Scenario[] = [
  // PMax Cannibalization, Meta ASC Creative Decay, Tracking / CAPI Loss, Quick Commerce Stockout, Programmatic DV360
  {
    id: 'google-pmax-cannibalization',
    title: 'Google Ads C-Suite Crucible: PMax Brand Cannibalization & CPL Catastrophe',
    subtitle: 'Enterprise B2B SaaS ($350k/mo ad spend) facing a 68% CPL spike ahead of a quarterly board review',
    category: 'google-ads',
    difficulty: 'advanced',
    urgencyTimeline: 'Board of Directors meeting in 90 minutes',
    clientEnvironment: 'Enterprise B2B SaaS ($350k/mo spend, HubSpot CRM, 90-day sales cycle)',
    briefingSummary: 'Over the last 72 hours, Google Ads CPL surged by 68% while SQOs plummeted 40%. The client suspects ad fraud. In reality, Performance Max expanded broad match targeting into low-intent display networks and cannibalized existing brand exact match search campaigns.',
    initialClientDialogue: "Listen, I just got pulled out of an executive committee prep. Our CPL jumped from $142 to $238 in four days, and sales rejected 80% of yesterday's demo requests. I see $12,000 burning every 24 hours. The CEO wants to slash our paid budget by 50% this afternoon. What the hell happened, and why are we paying you $25k a month to let our pipeline bleed out?",
    brokenKPIs: [
      {
        metric: 'Cost Per Lead (CPL)',
        previousValue: '$142.50',
        currentValue: '$238.90',
        deltaPercent: '+67.6%',
        isNegative: true,
        benchmark: '$135.00',
        rootCauseClues: [
          'PMax URL Expansion enabled without negative keyword script',
          'Asset group broad match spillover into gaming and utility mobile apps',
          'Offline Conversion Tracking (OCT) lag skewing smart bidding'
        ]
      },
      {
        metric: 'Brand Search CPC',
        previousValue: '$1.85',
        currentValue: '$6.40',
        deltaPercent: '+245.9%',
        isNegative: true,
        benchmark: '$1.50',
        rootCauseClues: [
          'PMax bidding uncapped against brand terms without Brand Exclusion List'
        ]
      }
    ],
    stakeholder: {
      name: 'Marcus Vance',
      title: 'VP of Growth & Revenue Operations',
      organization: 'CloudScale Technologies',
      temperament: 'impatient-skeptic',
      keyConcerns: [
        'Ad spend waste during crucial fundraising quarter',
        'Sales team mutiny over junk demo leads',
        'Loss of confidence in agency technical competency'
      ],
      triggerPhrases: [
        'Google changed their algorithm',
        'We need to give it more time to optimize',
        'Smart Bidding needs 2 weeks to learn'
      ]
    },
    targetRootCauses: [
      'PMax lacked Brand Exclusion List, cannibalizing exact brand terms and bidding up own CPCs by 245%',
      'URL Expansion was left unchecked, routing budget to low-intent career and support pages',
      'Display Network placement leakage pushed 50%+ spend to incentivized mobile apps',
      'HubSpot CRM closed-loop offline conversion signal sync had broken on Friday deploy'
    ],
    prohibitedExcuses: [
      'Blaming general market volatility or "Google algorithm updates"',
      'Asking for 2 more weeks of learning phase without immediate containment actions',
      'Claiming lead quality is purely sales team follow-up latency'
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, the CPL spike is not an algorithm mystery—it is a contained technical conflict between our new Performance Max asset groups and your Brand Search campaign, compounded by broken CRM conversion feedback. Here is the bottom line: we have paused the cannibalizing asset groups, applied brand exclusion lists, and blocked mobile app placements, which immediately locks your daily burn back to target.",
      rootCauseAnalysis: "Specifically, over the weekend, PMax auto-expanded into Display placements and began bidding aggressively against our own Brand Exact keywords, inflating Brand CPC from $1.85 to $6.40. Simultaneously, Friday's engineering deploy severed the HubSpot webhook transmitting qualified deal stages back to Google Ads, causing Smart Bidding to optimize for raw form fills rather than vetted enterprise buyers.",
      immediateMitigation: "Within the last 30 minutes, we executed three immediate safeguards: 1) Applied account-level Brand Exclusions to isolate PMax, 2) Excluded all mobile app placement categories via Google Ads Editor script, and 3) Restored the HubSpot webhook with a manual upload of the past 7 days of closed-won milestones.",
      recoveryPlan72h: "Over the next 72 hours, CPL will stabilize below $145. For your board meeting in 90 minutes, you have a defensible narrative: the tech stack experienced an attribution loop failure from an internal code push, which was detected, quarantined, and re-engineered with zero structural budget compromise.",
      fullVerbatimScript: "Marcus, I hear your frustration completely, and you have every right to be furious about the CPL spike ahead of today's board meeting. Let me give you the Bottom Line Up Front: We isolated the root cause at 8:15 AM today. It is not an algorithm anomaly; it was a dual technical issue involving PMax brand cannibalization and a disconnected CRM feedback loop from your Friday engineering release. Here is our triage: First, PMax began bidding against your exact match brand terms, driving CPCs up 245% and routing low-intent app traffic. Second, because your HubSpot webhook dropped, Google Ads optimized blindly for raw submissions rather than qualified pipelines. We have already instituted three hard stop-losses: we applied account-wide Brand Exclusions, scrubbed 1,400 junk mobile app placements, and resynced the offline conversion data. As of 30 minutes ago, your spend velocity is locked. For your board presentation, you can state with confidence that our attribution guardrails caught the deployment break, quarantined the anomaly, and our projected CPL will normalize to $138 within 48 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'executivePresence',
        prompt: 'Deliver a crisp 45-second BLUF statement addressing the VP of Growth before their board meeting.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Lead with outcome (CPL spike isolated and quarantined)',
          'State exact technical cause without defensive hedging',
          'Give clear 48-hour recovery timeline with board-ready narrative'
        ]
      }
    ]
  },
  {
    id: 'meta-advantage-creative-decay',
    title: 'Meta Ads C-Suite Crucible: Advantage+ Creative Decay & Retention Bleed',
    subtitle: 'High-growth D2C apparel brand ($500k/mo spend) suffering 60% ROAS collapse over 14 days',
    category: 'meta-ads',
    difficulty: 'advanced',
    urgencyTimeline: 'Emergency Monday Morning Steering Committee',
    clientEnvironment: 'Omnichannel D2C Apparel ($6M annual run-rate on Meta & TikTok)',
    briefingSummary: 'Advantage+ Shopping Campaign (ASC) ROAS plummeted from 3.4x to 1.35x. The client claims Meta is broken. Audit reveals ASC was unconstrained by customer retention caps, spending 85% on existing buyers before suffering creative fatigue on a single hero video.',
    initialClientDialogue: "We are two weeks into our Q4 push and Meta has completely died on us. Blended ROAS is down to 1.35x from 3.4x last month. The team says CPMs are up 70% and our best-performing video ad stopped working. If we can't fix this by Wednesday, I'm pulling $200,000 out of Meta and shifting it into retail promotions. What is your plan?",
    brokenKPIs: [
      {
        metric: 'Return On Ad Spend (ROAS)',
        previousValue: '3.42x',
        currentValue: '1.35x',
        deltaPercent: '-60.5%',
        isNegative: true,
        benchmark: '2.80x',
        rootCauseClues: [
          'Single hero video consumed 82% of ASC budget for 21 consecutive days',
          'Frequency reached 4.8 among existing customer segments',
          'Existing customer budget cap was set to 0% (uncapped retargeting)'
        ]
      }
    ],
    stakeholder: {
      name: 'Elena Rostova',
      title: 'Chief Marketing Officer',
      organization: 'LuxeForm Apparel',
      temperament: 'frustrated-cfo',
      keyConcerns: [
        'Severe margin erosion during peak revenue quarter',
        'Fear of creative exhaustion across entire ad library',
        'Board skepticism regarding paid media sustainability'
      ],
      triggerPhrases: [
        'Creative fatigue is natural',
        'Just wait for Black Friday demand to pick up',
        'Meta auction is volatile'
      ]
    },
    targetRootCauses: [
      'ASC existing customer cap was left uncapped, allowing Meta to chase cheap retargeting sales from past buyers rather than prospective customers',
      'Creative fatigue: One single asset group captured 82% of impressions until audience frequency hit 4.8',
      'Absence of automated creative testing sandbox to graduate fresh hooks'
    ],
    prohibitedExcuses: [
      'Blaming seasonal CPM inflation without auditing internal frequency',
      'Recommending just increasing discounts to rescue conversion rates',
      'Claiming ASC cannot be controlled or segmented'
    ],
    modelAnswerBLUF: {
      bluf: "Elena, the ROAS drop is not an algorithm breakdown—it is severe creative saturation inside Advantage+ combined with an unconstrained retargeting loop. ASC was spending 80%+ of your daily budget repeatedly showing one single video to your existing customer list at a 4.8 frequency. We have instituted a 5% existing customer cap and deployed 6 fresh creative hooks, locking your CAC and returning blended ROAS to 2.8x.",
      rootCauseAnalysis: "Because ASC had no retention cap, Meta's AI took the path of least resistance: it hunted previous buyers repeatedly with one video. Once that video fatigued, CPMs inflated 70% and new customer acquisition evaporated.",
      immediateMitigation: "At 7:45 AM, we executed three adjustments: 1) Implemented a strict 5% Existing Customer Budget Cap inside ASC, 2) Deployed 6 fresh UGC and founder-hook creatives in an isolated testing sandbox, and 3) Paused the saturated video.",
      recoveryPlan72h: "Over the next 72 hours, prospective CPMs will cool by 35% and blended ROAS will rebound to 2.8x-3.2x as fresh hooks enter the auction.",
      fullVerbatimScript: "Elena, I hear your urgency, and you are right to demand answers before shifting budget. Here is the bottom line: Meta isn't broken; our ASC setup was cannibalizing past buyers. Because the existing customer cap was left off, Meta funneled 80% of your $500k spend into repeatedly retargeting people who already bought from you with one single video. At a 4.8 frequency, that ad burned out, causing CPMs to spike 70%. We've already locked existing customer retargeting to 5%, deployed 6 fresh hook variations in a sandbox structure, and paused the fatigued video. You will see new customer acquisition stabilize by Wednesday with ROAS tracking back to 3.0x."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'terminologyAccuracy',
        prompt: 'Explain the ASC Existing Customer Budget Cap and why unconstrained retargeting ruins prospective CAC in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'ASC default optimizes for total conversion volume, favoring easy retargeting over new acquisitions',
          'Existing customer cap restricts retargeting to 5-10% of total budget',
          'Protects blended CAC and forces the algorithm to explore prospective buyer pools'
        ]
      }
    ]
  },
  {
    id: 'quick-commerce-zepto-blinkit-bleed',
    title: 'Quick Commerce: Blinkit & Zepto Dark Store Inventory Stockout Bleed',
    subtitle: 'FMCG brand burning ad spend on ad placements for dark stores with zero inventory',
    category: 'quick-commerce',
    difficulty: 'advanced',
    urgencyTimeline: 'Daily operations sync',
    clientEnvironment: 'Omnichannel FMCG Beverage Brand ($80k/mo spend on Zepto, Blinkit & Instamart)',
    briefingSummary: 'Ad spend continued serving high-intent search ads in 42 pin codes where local dark stores had run out of inventory, leading to paid clicks on out-of-stock product detail pages.',
    initialClientDialogue: "We spent 250,000 rupees on Blinkit and Zepto sponsored search yesterday and our sales fell by 40%. The agency team reported great CTR, but when my operations team checked dark stores in Mumbai and Bangalore, 42 locations were completely out of stock! Are we paying to advertise products customers literally cannot buy?",
    brokenKPIs: [
      {
        metric: 'Dark Store Out-of-Stock Ad Spend',
        previousValue: '2%',
        currentValue: '38%',
        deltaPercent: '+1800%',
        isNegative: true,
        benchmark: '3%',
        rootCauseClues: [
          'Inventory sync API webhook delayed by 18 hours during weekend warehouse transfer',
          'Bids were not geo-fenced to in-stock micro-fulfillment centers'
        ]
      }
    ],
    stakeholder: {
      name: 'Vikram Malhotra',
      title: 'Head of E-Commerce & Quick Commerce',
      organization: 'NourishWell Organics',
      temperament: 'frustrated-cfo',
      keyConcerns: [
        'Ad spend waste on non-purchasable stock',
        'Damage to organic placement ranking on Zepto/Blinkit algorithms',
        'Loss of quick commerce market share to rival beverage brands'
      ],
      triggerPhrases: [
        'Quick commerce platforms don\'t give good data',
        'Inventory is not the agency\'s responsibility',
        'Platform stock sync is always delayed'
      ]
    },
    targetRootCauses: [
      'Disconnection between Quick Commerce ad bidding engine and live SKU inventory feeds per dark store pin code',
      'Failure to pause sponsored search bids on zero-stock hubs',
      'Opportunity to implement automated inventory-triggered bid suppression scripts'
    ],
    prohibitedExcuses: [
      'Blaming the quick commerce platform for having stockouts',
      'Claiming ads still build brand awareness even if product is out of stock',
      'Ignoring dark store inventory integration'
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, you are completely right: 38% of yesterday's ad spend served in pin codes where local dark stores were out of stock due to an 18-hour inventory sync delay. We have immediately quarantined ad bids across all zero-stock pin codes and deployed an automated inventory script that pauses sponsored ads whenever stock falls below 10 units at any dark store.",
      rootCauseAnalysis: "During the weekend warehouse transfer, Blinkit's catalog feed reported stock as in-transit, but local dark stores had zero available units. Because ad bids were running on account-level campaigns without pin-code inventory validation, sponsored bids continued serving on out-of-stock hubs.",
      immediateMitigation: "At 8:00 AM, we executed two emergency actions: 1) Manually suppressed ad bids on all 42 zero-stock dark store locations, and 2) Re-allocated budget to high-stock 500g SKU variants across top-performing northern zones.",
      recoveryPlan72h: "We deployed an automated Python inventory watcher that checks store-level stock every 30 minutes, guaranteeing zero wasted spend on unfulfillable orders.",
      fullVerbatimScript: "Vikram, thank you for flagging this directly. You are 100% correct to be upset—spending marketing money on products customers cannot buy is inexcusable. Here is the diagnostic: When the weekend stock transit delayed inventory arrival, 42 dark stores hit zero inventory, but the catalog API failed to reflect the stockout for 18 hours. Our sponsored ads continued winning auction top-of-search. We have already manually killed bids across all 42 affected pin codes and shifted spend to in-stock regional hubs. Even better, we built an automated inventory watcher script that pauses sponsored bids the second store inventory drops under 10 units. Your ad efficiency is locked back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'marketingLogic',
        prompt: 'Explain the critical role of pin-code level inventory syncing in Quick Commerce performance advertising in 60 seconds.',
        timeLimitSeconds: 60,
        idealPoints: [
          'Quick commerce delivery is hyper-local (10-minute micro-fulfillment centers)',
          'National campaigns cause massive wasted spend if local dark stores stock out',
          'Automated inventory-triggered bid suppression is mandatory for high-velocity FMCG'
        ]
      }
    ]
  },
  {
    id: 'programmatic-dv360-viewability-collapse',
    title: 'Programmatic & DV360: Viewability Collapse & MFA Domain Spoofing Audit',
    subtitle: 'Global Fintech Enterprise ($500k/mo spend) flagging a 48% drop in MRC-standard viewability',
    category: 'programmatic-dv360',
    difficulty: 'advanced',
    urgencyTimeline: 'Chief Compliance & Brand Safety Officer meeting in 1 hour',
    clientEnvironment: 'Tier-1 FinTech & Wealth Management ($500k/mo Programmatic spend, DV360, IAS/DoubleVerify verification)',
    briefingSummary: 'Media Rating Council (MRC) display viewability collapsed from 76% to 39% over 7 days. DoubleVerify flagged suspicious domain spoofing and MFA (Made-For-Advertising) site delivery across open exchange inventory, risking millions in enterprise brand compliance.',
    initialClientDialogue: "Our DoubleVerify brand safety dashboard just sent a red alert to our Chief Compliance Officer. Over $45,000 of programmatic media ran on unvetted, MFA click-farms and domain-spoofed sites with 39% viewability. We have financial regulatory mandates on ad transparency. If this hits the audit committee, we will be forced to suspend our entire programmatic pipeline. How did your trading desk allow this?",
    brokenKPIs: [
      {
        metric: 'MRC Standard Viewability Rate',
        previousValue: '76.4%',
        currentValue: '39.1%',
        deltaPercent: '-48.8%',
        isNegative: true,
        benchmark: '70.0%',
        rootCauseClues: [
          'Open Exchange bidding enabled on legacy line item',
          'MFA site domain rotation bypassing static blocklists',
          'Pre-bid DoubleVerify verification wrapper unhitched on new creative bundle'
        ]
      },
      {
        metric: 'Invalid Traffic (IVT / SIVT Rate)',
        previousValue: '0.8%',
        currentValue: '8.4%',
        deltaPercent: '+950%',
        isNegative: true,
        benchmark: '1.0%',
        rootCauseClues: [
          'Sophisticated Invalid Traffic (SIVT) from low-tier SSP arbitrage bundles'
        ]
      }
    ],
    stakeholder: {
      name: 'Victoria Vance-Smyth',
      title: 'Global Head of Media Governance',
      organization: 'Apex Global Financial Services',
      temperament: 'impatient-skeptic',
      keyConcerns: [
        'Regulatory compliance exposure with SEC/FCA advertising rules',
        'Brand safety contamination adjacent to unvetted content',
        'Clawback of wasted media spend from ad exchanges'
      ],
      triggerPhrases: [
        'Open exchange traffic is normal',
        'Verification vendors sometimes over-report IVT',
        'We cannot control every domain in programmatic'
      ]
    },
    targetRootCauses: [
      'A newly deployed line item bypassed pre-bid DoubleVerify filtering and traded on open exchange without strict PMP/PG whitelists',
      'Domain spoofing on low-tier SSPs injected MFA inventory',
      'Absence of automated ads.txt and sellers.json strict verification logic'
    ],
    prohibitedExcuses: [
      'Excusing invalid traffic as an unavoidable programmatic reality',
      'Downplaying MRC compliance standards'
    ],
    modelAnswerBLUF: {
      bluf: "Victoria, the viewability degradation and IVT alert were traced directly to an unauthorized open-exchange expansion on a single newly provisioned line item that lacked our mandatory pre-bid DoubleVerify wrapper. We have paused that line item, enacted a 100% Private Marketplace (PMP) lockdown, and initiated formal credit clawbacks with the SSPs.",
      rootCauseAnalysis: "During Friday's trafficking cycle, Line Item 402 was provisioned with open exchange fallback enabled rather than strict inclusion-list-only routing, and the IAS pre-bid verification tag was omitted. This exposed 9% of our impressions to MFA arbitrage networks with spoofed bundle IDs, driving viewability down to 39%.",
      immediateMitigation: "At 7:45 AM, our trading desk executed three decisive actions: 1) Immediately paused Line Item 402, 2) Enforced an automated pre-bid DoubleVerify filter threshold of minimum 75% historical viewability and strict SIVT exclusion across all active seats, and 3) Pulled transactional log-level data to submit formal clawback requests to the SSPs for all invalid impressions.",
      recoveryPlan72h: "Viewability across all active programmatic flights is already back above 78% as of 8:30 AM, with IVT suppressed under 0.6%. For your 1-hour compliance briefing, we have compiled an audit-ready Forensic Incident Log confirming zero exposure to illegal content and documenting full financial recovery steps.",
      fullVerbatimScript: "Victoria, thank you for bringing this up directly. I share your zero-tolerance stance on compliance and viewability, especially within financial services. Bottom line up front: The issue is fully quarantined. It originated from a trafficking oversight on a single new line item where the pre-bid DoubleVerify safety profile was decoupled, allowing open exchange leakage into MFA domains. Here is what we have done: We immediately terminated the affected line item. We locked the entire DV360 seat to verified Private Marketplace deals and strict inclusion lists only. Crucially, we have extracted the log-level data from the SSPs to process a dollar-for-dollar credit clawback for every non-compliant impression. Viewability on all active campaigns is already back at 78.5%, with IVT below 0.5%. We have provided your compliance officer with a comprehensive forensic one-pager documenting complete brand protection."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'terminologyAccuracy',
        prompt: "The Chief Compliance Officer demands: 'Explain the technical difference between GIVT and SIVT, and how you will guarantee our ads never finance botnets again.' Deliver a 60-second precise explanation.",
        timeLimitSeconds: 60,
        idealPoints: [
          'GIVT (General Invalid Traffic): routine web crawlers, search spiders with predictable patterns',
          'SIVT (Sophisticated Invalid Traffic): intentional botnets, malware, domain spoofing, hidden ad stacking',
          'Guarantee via pre-bid real-time verification APIs (DV/IAS) blocking bid requests before auction execution'
        ]
      }
    ]
  },
  {
    id: 'seo-core-algorithm-hydration-loss',
    title: 'SEO & Organic: Core Algorithm Update & Server-Side Hydration Loss',
    subtitle: 'Enterprise E-Commerce Marketplace (2M+ pages) losing 45% of organic search revenue',
    category: 'seo-organic',
    difficulty: 'advanced',
    urgencyTimeline: 'Quarterly business review with Founder & CEO in 2 hours',
    clientEnvironment: 'Next.js Headless E-Commerce Marketplace (2.4M product pages, $1.2M/mo organic GMV)',
    briefingSummary: 'Following Google\'s latest Helpful Content & Core Algorithm Update, organic click traffic plunged 45%. The client believes their editorial content was penalized. In truth, a recent frontend release altered React SSR hydration, rendering empty product shells to Googlebot crawler bots while human browsers rendered correctly.',
    initialClientDialogue: "Google rolled out their Core Update, and our organic traffic collapsed 45% in five days! Our organic revenue dropped from $40k a day to $18k. The CEO is convinced our blog and category copy got slammed for AI spam. He wants us to rewrite 5,000 product descriptions immediately. Did our organic strategy just get destroyed by Google?",
    brokenKPIs: [
      {
        metric: 'Organic Search Clicks',
        previousValue: '185,000 / day',
        currentValue: '101,750 / day',
        deltaPercent: '-45.0%',
        isNegative: true,
        benchmark: '180,000',
        rootCauseClues: [
          'Googlebot render logs show 200 OK status but blank main content container',
          'Client-side hydration failure during Next.js chunk splitting',
          'Core Web Vitals INP (Interaction to Next Paint) degraded to 480ms'
        ]
      },
      {
        metric: 'Indexed Product URLs with Schema',
        previousValue: '2,100,000',
        currentValue: '1,150,000',
        deltaPercent: '-45.2%',
        isNegative: true,
        benchmark: '2,200,000',
        rootCauseClues: [
          'Structured Product schema not injected into initial HTML DOM payload'
        ]
      }
    ],
    stakeholder: {
      name: 'Julian Vance',
      title: 'Founder & CEO',
      organization: 'MarketHub Global',
      temperament: 'aggressive-founder',
      keyConcerns: [
        'Irreversible organic index de-ranking',
        'Loss of free organic acquisition channel forcing paid search reliance',
        'Wasting thousands of hours rewriting human-written content'
      ],
      triggerPhrases: [
        'Google hates AI content',
        'We need to rewrite everything manually',
        'SEO is dead'
      ]
    },
    targetRootCauses: [
      'Frontend engineering deploy broke React Server-Side Rendering (SSR) for product grid elements',
      'Googlebot saw empty shell templates without text or Product schema markup',
      'Coincided with Google Core Update, creating a false correlation with content quality'
    ],
    prohibitedExcuses: [
      'Accepting the false premise that content rewriting is needed',
      'Blaming algorithm updates without running Googlebot rendering inspections'
    ],
    modelAnswerBLUF: {
      bluf: "Julian, stop all plans to rewrite your 5,000 product descriptions—your content is not penalized. Our technical crawl audits prove this is a frontend rendering defect: last week's React hydration update stripped out SSR HTML for Googlebot, presenting blank pages to the crawler while human users saw full screens. The content is sound; the indexation pipeline was starved.",
      rootCauseAnalysis: "Using server log analysis and URL Inspection API data, we verified that Googlebot was served empty div containers because the Next.js SSR bundle failed to serialize product descriptions before server response. Because Googlebot experienced rendering timeouts, it temporarily de-indexed product structured schema, mistaking the pages for thin content.",
      immediateMitigation: "Our technical SEO leads coordinated with your frontend engineering team at 8:00 AM to roll back the buggy hydration chunk. We verified that full HTML and JSON-LD structured data are once again present in the initial server response. We have submitted priority XML sitemaps for immediate recrawl.",
      recoveryPlan72h: "As Googlebot recrawls the fully hydrated SSR pages, rankings and organic click volume will recover over the next 5 to 7 days. For your CEO presentation, we have a side-by-side technical proof showing Googlebot's blank render versus today's restored SSR render, completely dismantling the need for expensive content rewrites.",
      fullVerbatimScript: "Julian, I am glad we are speaking before you commit budget to rewriting 5,000 descriptions. Bottom line up front: Your content did not get penalized by the Google Core update. This was a technical SSR rendering fault caused by last Wednesday's frontend code release. When Googlebot crawled your product pages, the React hydration failed on the server, serving Googlebot a blank HTML shell without text or Product Schema. To Google, it appeared as if 900,000 pages suddenly had zero content. We worked with your tech lead this morning to roll back that chunk and verify that raw HTML is once again 100% visible to crawlers. We have already triggered an expedited sitemap re-indexation. Tell the CEO we have isolated the technical root cause, saved weeks of unnecessary rewriting, and expect organic traffic to rebound as Google's cache refreshes this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: 'marketingLogic',
        prompt: "The Founder insists: 'Search Engine Land reported this update targets unhelpful content. You are just making technical excuses.' Prove why technical SSR failure is the true root cause in 45 seconds.",
        timeLimitSeconds: 45,
        idealPoints: [
          'Show Googlebot URL Inspection raw HTML dump vs browser DOM',
          'Demonstrate lack of text tokens in initial HTTP response payload',
          'Point to simultaneous 45% drop across both branded and non-branded unindexed URLs'
        ]
      }
    ]
  }
];

export const ALL_MARKETING_SCENARIOS: Scenario[] = [
  ...BEGINNER_SCENARIOS,
  ...INTERMEDIATE_SCENARIOS,
  ...ADVANCED_SCENARIOS,
];

export interface GitHubKnowledgeArticle {
  id: string;
  title: string;
  sourceRepo: string;
  sourceUrl: string;
  category: 'Fundamentals' | 'Paid Search' | 'Paid Social' | 'Analytics' | 'Client Relations';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  summary: string;
  keyTakeaways: string[];
  clientExplanationScript: string;
}

export const GITHUB_KNOWLEDGE_ARTICLES: GitHubKnowledgeArticle[] = [
  {
    id: 'gh-ad-preview-diagnostics',
    title: 'Why Marketers Should NEVER Search Their Own Ads on Google',
    sourceRepo: 'carlos-eduardo-s-lima/awesome-digital-marketing',
    sourceUrl: 'https://github.com/carlos-eduardo-s-lima/awesome-digital-marketing#paid-search-sem',
    category: 'Paid Search',
    difficulty: 'beginner',
    summary: 'Searching your own keywords from a phone or laptop generates phantom impressions without clicks, destroying your ad Click-Through Rate (CTR) and Quality Score. Google also learns you never click, so it stops showing you the ad altogether.',
    keyTakeaways: [
      'Always use Google Ads "Ad Preview and Diagnostic Tool" instead of live Google searches.',
      'Live searches artificially inflate impressions, depressing CTR and hiking CPCs.',
      'Google caps ad frequency per IP/device so real searchers see the ad instead of the business owner.'
    ],
    clientExplanationScript: '"Dr. Sarah, searching your own keywords actually harms your campaign because Google records an impression without a click, lowering our Quality Score. We use Google\'s Ad Preview Tool, which confirms your ad is active and showing to 74% of local prospective patients right now."'
  },
  {
    id: 'gh-click-vs-session-dropoff',
    title: 'Deconstructing Click-to-Session Discrepancy (Meta vs GA4)',
    sourceRepo: 'ronakganatra/awesome-marketing',
    sourceUrl: 'https://github.com/ronakganatra/awesome-marketing#web-analytics',
    category: 'Analytics',
    difficulty: 'beginner',
    summary: 'A click on Meta is registered the millisecond a finger touches the screen. A GA4 session is only counted after the destination web page, tracking scripts, and consent banner finish executing.',
    keyTakeaways: [
      'Normal click-to-session drop-off benchmark is 10% to 18%.',
      'Drop-offs greater than 25% point to slow mobile page load, heavy uncompressed images, or slow tag managers.',
      'In-app browsers on Instagram/Facebook often bounce users before GA4 can fire if page takes >2.5s.'
    ],
    clientExplanationScript: '"David, Meta records a click instantly on tap, but Google Analytics only counts a visitor once the website fully loads. If mobile pages take over 3 seconds, impatient mobile users tap Back before Analytics loads. We are optimizing your mobile page speed to close this gap."'
  },
  {
    id: 'gh-cpc-vs-cpm-economics',
    title: 'Auction Economics: When to Bid CPC vs CPM',
    sourceRepo: 'awesome-interview-questions-5000-jobs',
    sourceUrl: 'https://github.com/awesome-interview-questions-5000-jobs#marketing-fundamentals',
    category: 'Fundamentals',
    difficulty: 'beginner',
    summary: 'CPC charges you only for direct engagement (clicks), placing algorithmic delivery risk on the ad network. CPM charges you for audience eye-balls, placing the conversion risk on your creative quality.',
    keyTakeaways: [
      'CPC is best for bottom-of-funnel direct response where intent is high (Search, Shopping).',
      'CPM is best for top-of-funnel brand awareness and Meta feed algorithms where high CTR leads to ultra-low effective CPC (eCPC = CPM ÷ 1000 ÷ CTR).',
      'Smart bidding converts your target CPA into an internal eCPM bid for real-time auction placement.'
    ],
    clientExplanationScript: '"Lisa, CPC is paying per customer who walks into the store; CPM is paying to display a billboard on a busy highway. When you have high-converting creative, CPM is significantly cheaper because you earn clicks at a fraction of standard CPC rates."'
  },
  {
    id: 'gh-broad-match-guardrails',
    title: 'Controlling Google Broad Match & Search Query Bleed',
    sourceRepo: 'carlos-eduardo-s-lima/awesome-digital-marketing',
    sourceUrl: 'https://github.com/carlos-eduardo-s-lima/awesome-digital-marketing#search-engine-marketing',
    category: 'Paid Search',
    difficulty: 'intermediate',
    summary: 'Broad match paired with Smart Bidding can discover high-converting long-tail queries, but without proactive negative keyword lists, it bleeds thousands of dollars into irrelevant semantic variations and competitor searches.',
    keyTakeaways: [
      'Broad match requires daily Search Query Reports (SQR) during the first 14 days.',
      'Always install account-level negative keyword lists (e.g., "free", "jobs", "careers", "login", "diy").',
      'Pair broad match only with Smart Bidding (Target CPA or Target ROAS) with at least 30 conversions/month.'
    ],
    clientExplanationScript: '"Marcus, broad match is designed to explore, but without guardrails it matched into student research terms. We added 140 exact negatives this morning and quarantined the campaign to Phrase and Exact match while smart bidding restabilizes."'
  },
  {
    id: 'gh-scaling-plateau-cac',
    title: 'The Vertical Scaling Law & Auction Elasticity on Meta Ads',
    sourceRepo: 'ronakganatra/awesome-marketing',
    sourceUrl: 'https://github.com/ronakganatra/awesome-marketing#paid-social-meta',
    category: 'Paid Social',
    difficulty: 'intermediate',
    summary: 'Tripling a Meta campaign budget overnight forces the algorithm to explore wider, lower-propensity audience cohorts, driving up CPMs and CAC. Scaling must be done horizontally (new angles, new creative formats) or vertical steps of 15-20% every 48 hours.',
    keyTakeaways: [
      'Budget increases greater than 20% reset the ad set learning phase.',
      'Creative diversification is the true scaling engine on Meta: ASC requires 4-6 distinct visual hooks.',
      'Monitor Frequency closely: a 7-day frequency above 3.5 in prospecting signals immediate audience fatigue.'
    ],
    clientExplanationScript: '"Elena, when spend tripled over 48 hours, Meta was forced to auction outside our core high-intent audience. We are pacing budget increases at 15% every 48 hours while feeding the campaign 4 fresh creative angles to maintain a 3.2x ROAS."'
  },
  {
    id: 'gh-bluf-framework-boardroom',
    title: 'The BLUF Framework for Marketers: Taming Angry Clients in 30 Seconds',
    sourceRepo: 'awesome-interview-questions-5000-jobs',
    sourceUrl: 'https://github.com/awesome-interview-questions-5000-jobs#client-communication',
    category: 'Client Relations',
    difficulty: 'advanced',
    summary: 'Executive stakeholders and founders despise chronological storytelling when money is on the line. The BLUF (Bottom Line Up Front) model begins with the financial bottom line, states the containment action, and finishes with the 48-hour recovery projection.',
    keyTakeaways: [
      'Sentence 1: Empathy + Bottom Line + Containment ("We isolated the issue, and spend is locked to target").',
      'Sentence 2: Clear root cause without blaming the algorithm or tech vendor.',
      'Sentence 3: The 48-to-72 hour metric normalization path.',
      'Never use filler words or open-ended excuses like "let\'s wait 2 weeks for learning phase".'
    ],
    clientExplanationScript: '"Bottom line up front: The CPL spike is quarantined. We paused the cannibalizing asset groups at 8:00 AM, locking your daily burn back to target, and CPL will normalize to $140 within 48 hours."'
  }
];

