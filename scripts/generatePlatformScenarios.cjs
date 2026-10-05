const fs = require('fs');
const path = require('path');

// Helper to generate realistic scenarios for a given platform
function generatePlatformFile(platform) {
  const { id, name, category, shortName, count, topics, personas } = platform;

  let out = `// ============================================================================
// ${name.toUpperCase()} SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const ${id.replace(/-/g, '_').toUpperCase()}_SCENARIOS: Scenario[] = [
`;

  for (let i = 0; i < count; i++) {
    const modNum = i + 1;
    const topic = topics[i % topics.length];
    const persona = personas[i % personas.length];
    
    // Assign difficulty by layer
    let diff = 'beginner';
    let unitNum = 1;
    if (i >= 38) {
      diff = 'legend';
      unitNum = 6;
    } else if (i >= 28) {
      diff = 'advanced';
      unitNum = 5;
    } else if (i >= 18) {
      diff = 'intermediate';
      unitNum = i >= 23 ? 4 : 3;
    } else {
      diff = 'beginner';
      unitNum = i >= 9 ? 2 : 1;
    }

    const scenarioId = `${id}-m${modNum}-${topic.slug}`;
    const title = `Module ${modNum}: ${topic.title}`;
    const subtitle = topic.subtitle;
    const urgency = diff === 'legend' ? 'Board of Directors meeting in 20 minutes' : diff === 'advanced' ? 'Urgent CFO call in 15 minutes' : diff === 'intermediate' ? 'Weekly performance sync in 30 minutes' : 'Morning Slack check-in';

    const dialogue = topic.dialogue.replace('{name}', persona.name);
    const bluf = topic.bluf.replace('{name}', persona.name);
    const script = topic.script.replace('{name}', persona.name);

    out += `  {
    id: ${JSON.stringify(scenarioId)},
    title: ${JSON.stringify(title)},
    subtitle: ${JSON.stringify(subtitle)},
    category: ${JSON.stringify(category)},
    difficulty: ${JSON.stringify(diff)},
    urgencyTimeline: ${JSON.stringify(urgency)},
    clientEnvironment: ${JSON.stringify(`${persona.org} (${name.toUpperCase()})`)},
    briefingSummary: ${JSON.stringify(`${persona.title} ${persona.name} is asking: "${dialogue}". Provide an authoritative, empathetic BLUF explanation.`)},
    initialClientDialogue: ${JSON.stringify(dialogue)},
    brokenKPIs: [
      {
        metric: ${JSON.stringify(topic.metric)},
        previousValue: ${JSON.stringify(topic.prevVal)},
        currentValue: ${JSON.stringify(topic.currVal)},
        deltaPercent: ${JSON.stringify(topic.delta)},
        isNegative: true,
        benchmark: ${JSON.stringify(topic.benchmark)},
        rootCauseClues: [
          ${JSON.stringify(`${name} auction dynamics and algorithm pacing`)},
          ${JSON.stringify(`Client requires plain-English explanation without buzzwords`)},
          ${JSON.stringify(`Stabilization plan must be communicated within first 30 seconds`)}
        ]
      }
    ],
    stakeholder: {
      name: ${JSON.stringify(persona.name)},
      title: ${JSON.stringify(persona.title)},
      organization: ${JSON.stringify(persona.org)},
      temperament: ${JSON.stringify(persona.temperament)},
      keyConcerns: [
        ${JSON.stringify(`Marketing budget efficiency on ${name}`)},
        ${JSON.stringify(`Understanding ${topic.metric} fluctuation without confusion`)},
        ${JSON.stringify(`Immediate reassurance on 48-hour recovery actions`)}
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      ${JSON.stringify(topic.rootCause)},
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      ${JSON.stringify(`Blaming ${name} platform without data`)},
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: ${JSON.stringify(bluf)},
      rootCauseAnalysis: ${JSON.stringify(`Primary root cause: ${topic.rootCause}.`)},
      immediateMitigation: ${JSON.stringify(`Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.`)},
      recoveryPlan72h: ${JSON.stringify(`Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.`)},
      fullVerbatimScript: ${JSON.stringify(script)}
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: ${JSON.stringify(`The client interrupts: "Can you give me that in plain English without ${name} technical jargon?"`)},
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },\n`;
  }

  out += `];\n`;
  return out;
}

// Configuration for all 9 platforms
const PLATFORMS_CONFIG = [
  {
    id: 'google-ads',
    name: 'Google Ads',
    shortName: 'Google',
    category: 'google-ads',
    count: 55,
    personas: [
      { name: 'Tom Bradley', title: 'Owner & Founder', org: 'Apex Local Services', temperament: 'concerned-owner' },
      { name: 'Dr. Sarah Jenkins', title: 'Lead Orthodontist', org: 'SmileBright Dental', temperament: 'curious-client' },
      { name: 'Marcus Vance', title: 'Chief Financial Officer', org: 'Vance Logistics', temperament: 'frustrated-cfo' },
      { name: 'Elena Rostova', title: 'VP of Growth', org: 'CloudScale SaaS', temperament: 'analytical-vp' },
      { name: 'David Sterling', title: 'Managing Director', org: 'Sterling Real Estate', temperament: 'impatient-skeptic' }
    ],
    topics: [
      {
        slug: 'ctr-basics',
        title: 'What Does Search CTR Mean?',
        subtitle: 'Teach the client why Click-Through Rate is the vital sign of ad resonance.',
        metric: 'Search CTR', prevVal: '4.2%', currVal: '1.4%', delta: '-66.7%', benchmark: '4.5%',
        dialogue: 'You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?',
        bluf: 'Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn\'t directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.',
        script: 'Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%.',
        rootCause: 'Headline copy misalignment with user search query intent.'
      },
      {
        slug: 'cpc-mechanics',
        title: 'Demystifying Cost Per Click (CPC)',
        subtitle: 'Explain how auction competition and ad Quality Score determine price.',
        metric: 'Average CPC', prevVal: '$3.50', currVal: '$6.50', delta: '+85.7%', benchmark: '$3.80',
        dialogue: 'Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!',
        bluf: 'Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.',
        script: 'Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target.',
        rootCause: 'Competitor auction entry coupled with broad match query expansion.'
      },
      {
        slug: 'pmax-cannibalization',
        title: 'Performance Max Brand Cannibalization',
        subtitle: 'Prevent PMax from taking credit for easy organic brand search volume.',
        metric: 'PMax ROAS', prevVal: '6.8x', currVal: '3.1x', delta: '-54.4%', benchmark: '4.5x',
        dialogue: 'Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?',
        bluf: 'Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.',
        script: 'Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week.',
        rootCause: 'PMax relying on brand searches rather than prospecting inventory.'
      },
      {
        slug: 'quality-score-drop',
        title: 'Quality Score Diagnosis & Landing Page Experience',
        subtitle: 'Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.',
        metric: 'Quality Score', prevVal: '8/10', currVal: '4/10', delta: '-50.0%', benchmark: '7/10',
        dialogue: 'Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?',
        bluf: 'Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.',
        script: 'Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction.',
        rootCause: 'Mobile page load speed degradation impacting Landing Page Experience component.'
      },
      {
        slug: 'tcpa-learning-reset',
        title: 'Target CPA Learning Phase & Budget Volatility',
        subtitle: 'Explain why editing budget by 50% threw the smart bidding algorithm into chaos.',
        metric: 'Cost Per Acquisition (CPA)', prevVal: '$42', currVal: '$88', delta: '+109.5%', benchmark: '$45',
        dialogue: 'I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?',
        bluf: 'David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.',
        script: 'David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days.',
        rootCause: 'Premature aggressive budget scaling triggering algorithmic learning reset.'
      },
      {
        slug: 'search-lost-is-budget',
        title: 'Impression Share Lost to Budget vs Rank',
        subtitle: 'Demonstrate to the client why their ads run out of money by 2 PM daily.',
        metric: 'Lost IS (Budget)', prevVal: '8%', currVal: '44%', delta: '+36.0%', benchmark: '< 10%',
        dialogue: 'Our clients are telling us they can\'t find our Google ad in the afternoon! Are you turning our ads off during lunch hours?',
        bluf: 'Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.',
        script: 'Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours.',
        rootCause: 'Capped daily budget causing early daypart exhaustion.'
      },
      {
        slug: 'negative-keyword-sculpting',
        title: 'Negative Keyword Sculpting & Junk Query Waste',
        subtitle: 'Show the client how negative keywords prevented $1,200 of irrelevant search spend.',
        metric: 'Wasted Ad Spend', prevVal: '$1,400', currVal: '$180', delta: '-87.1%', benchmark: '< $200',
        dialogue: 'I checked our search terms and saw someone clicked our legal ad searching "free legal forms download"! Why are we paying for free seekers?',
        bluf: 'Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including "free", "template", and "forms". This eliminated 87% of junk clicks and direct all spend to paying clients.',
        script: 'Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget.',
        rootCause: 'Broad match query expansion capturing non-transactional informational searches.'
      }
    ]
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    shortName: 'Meta',
    category: 'meta-ads',
    count: 55,
    personas: [
      { name: 'Alex Rivera', title: 'VP of Marketing', org: 'Luxe DTC Apparel', temperament: 'impatient-skeptic' },
      { name: 'Rachel Green', title: 'Founder & CEO', org: 'CleanGlow Skincare', temperament: 'concerned-owner' },
      { name: 'Julian Hayes', title: 'Chief Executive Officer', org: 'FitPulse Tech', temperament: 'aggressive-founder' },
      { name: 'Chloe Bennett', title: 'Head of Growth', org: 'Nomad Luggage', temperament: 'analytical-vp' },
      { name: 'Victor Stone', title: 'E-Commerce Director', org: 'Aura Home Goods', temperament: 'frustrated-cfo' }
    ],
    topics: [
      {
        slug: 'cpl-spike-crisis',
        title: 'The Overnight Meta CPL Spike',
        subtitle: 'De-escalate client panic when Cost Per Lead rises 42% overnight.',
        metric: 'Cost Per Lead (CPL)', prevVal: '$18.20', currVal: '$25.80', delta: '+41.8%', benchmark: '$19.00',
        dialogue: 'Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn\'t I pause all campaigns right this second?!',
        bluf: 'Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.',
        script: 'Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19.',
        rootCause: 'Creative fatigue on primary winner ad causing frequency and CPM inflation.'
      },
      {
        slug: 'asc-budget-allocation',
        title: 'Advantage+ Shopping (ASC) Existing Customer Caps',
        subtitle: 'Ensure Advantage+ Shopping isn\'t spending 80% of budget retargeting existing buyers.',
        metric: 'Existing Customer Budget %', prevVal: '15%', currVal: '68%', delta: '+53.0%', benchmark: '< 20%',
        dialogue: 'Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?',
        bluf: 'Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.',
        script: 'Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition.',
        rootCause: 'Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.'
      },
      {
        slug: 'capi-emq-score',
        title: 'Conversions API (CAPI) Match Quality Recovery',
        subtitle: 'Fix Event Match Quality drops and recover lost purchase signal attribution.',
        metric: 'Event Match Quality (EMQ)', prevVal: '8.4/10', currVal: '4.2/10', delta: '-50.0%', benchmark: '8.0/10',
        dialogue: 'Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?',
        bluf: 'Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.',
        script: 'Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours.',
        rootCause: 'Server-side CAPI webhook missing hashed customer identifier parameters.'
      },
      {
        slug: 'hook-rate-decay',
        title: '3-Second Hook Rate & Video Retention Diagnostics',
        subtitle: 'Diagnose why video engagement dropped and rebuild the opening 3 seconds.',
        metric: '3-Second Hook Rate', prevVal: '34.2%', currVal: '14.8%', delta: '-56.7%', benchmark: '30.0%',
        dialogue: 'People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?',
        bluf: 'Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.',
        script: 'Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness.',
        rootCause: 'Slow studio logo animation at start of video inducing scroll-past behavior.'
      },
      {
        slug: 'ios-skan-delayed-attribution',
        title: 'Reconciling 72-Hour Delayed Attribution',
        subtitle: 'Calm the founder down during weekend ROAS reporting delays.',
        metric: 'Weekend Reported ROAS', prevVal: '2.8x', currVal: '1.2x', delta: '-57.1%', benchmark: '2.6x',
        dialogue: 'Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!',
        bluf: 'Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.',
        script: 'Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER.',
        rootCause: 'Platform attribution latency post-iOS 14.5 SKAN reporting windows.'
      }
    ]
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    shortName: 'TikTok',
    category: 'tiktok-ads',
    count: 52,
    personas: [
      { name: 'Kylie Thorne', title: 'Brand Director', org: 'GlowBite Supplements', temperament: 'curious-client' },
      { name: 'Zack Miller', title: 'Head of Acquisition', org: 'HyperVolt Energy', temperament: 'impatient-skeptic' },
      { name: 'Liam Chen', title: 'Founder', org: 'UrbanThread Streetwear', temperament: 'aggressive-founder' }
    ],
    topics: [
      {
        slug: 'spark-ads-authorization',
        title: 'Spark Ads Creator Code Deployment',
        subtitle: 'Explain why running Spark Ads beats standard in-feed non-spark uploads.',
        metric: 'Spark Ad Conversion Rate', prevVal: '3.8%', currVal: '1.2%', delta: '-68.4%', benchmark: '3.5%',
        dialogue: 'Why do we have to ask influencers for authorization codes? Can\'t we just download their video and post it from our own ad account?',
        bluf: 'Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.',
        script: 'Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today.',
        rootCause: 'Re-uploading creator assets as non-spark dark posts inducing ad blindness.'
      },
      {
        slug: 'creative-fatigue-7day',
        title: 'The 7-Day TikTok Creative Fatigue Cycle',
        subtitle: 'Manage client expectations on why TikTok ads burn out 3x faster than Facebook.',
        metric: '7-Day CPA Drift', prevVal: '$14.00', currVal: '$31.00', delta: '+121.4%', benchmark: '$16.00',
        dialogue: 'Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!',
        bluf: 'Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.',
        script: 'Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause.',
        rootCause: 'Rapid creative fatigue in high-velocity TikTok user feeds.'
      },
      {
        slug: 'tiktok-shop-affiliate-gmv',
        title: 'TikTok Shop Affiliate Sampling & GMV Lift',
        subtitle: 'Coordinate creator sample seeding with paid TikTok Shop GMV ads.',
        metric: 'TikTok Shop ROAS', prevVal: '4.2x', currVal: '1.8x', delta: '-57.1%', benchmark: '3.8x',
        dialogue: 'We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?',
        bluf: 'Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.',
        script: 'Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS.',
        rootCause: 'Organic seeding without paid media boost amplification.'
      }
    ]
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    shortName: 'LinkedIn',
    category: 'linkedin-ads',
    count: 52,
    personas: [
      { name: 'Arthur Pendelton', title: 'VP of Demand Generation', org: 'CyberShield Enterprise', temperament: 'analytical-vp' },
      { name: 'Diana Prince', title: 'Chief Marketing Officer', org: 'FinTech Core', temperament: 'frustrated-cfo' },
      { name: 'Siddharth Rao', title: 'Managing Director', org: 'SaaSFlow Solutions', temperament: 'concerned-owner' }
    ],
    topics: [
      {
        slug: 'high-cpm-abm-defense',
        title: 'Defending $85 LinkedIn CPMs to the CFO',
        subtitle: 'Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.',
        metric: 'Cost Per Mille (CPM)', prevVal: '$45.00', currVal: '$88.00', delta: '+95.6%', benchmark: '$70.00',
        dialogue: 'Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!',
        bluf: 'Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.',
        script: 'Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here.',
        rootCause: 'Misunderstanding CPM efficiency vs downstream qualified pipeline value.'
      },
      {
        slug: 'lead-gen-form-conversion',
        title: 'Native Lead Gen Forms vs Landing Page Drop-off',
        subtitle: 'Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.',
        metric: 'Form Submission Rate', prevVal: '2.1%', currVal: '13.4%', delta: '+538.1%', benchmark: '10.0%',
        dialogue: 'We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?',
        bluf: 'Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: "What is your current annual cloud spend?". All leads passing this threshold are verified buying authorities.',
        script: 'Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline.',
        rootCause: 'Mobile landing page friction solved via pre-filled native forms with qualification gates.'
      }
    ]
  },
  {
    id: 'snapchat-ads',
    name: 'Snapchat Ads',
    shortName: 'Snapchat',
    category: 'snapchat-ads',
    count: 52,
    personas: [
      { name: 'Chloe Vance', title: 'Head of DTC Marketing', org: 'PixelPlay Gaming', temperament: 'curious-client' },
      { name: 'Jason Reed', title: 'Growth Director', org: 'Breeze Beverage Co.', temperament: 'impatient-skeptic' }
    ],
    topics: [
      {
        slug: 'gen-z-swipe-up',
        title: 'Snapchat 6-Second Commercials & Gen Z Attention',
        subtitle: 'Capture younger audiences using non-skippable 6s video storytelling.',
        metric: 'Swipe-Up Rate', prevVal: '0.45%', currVal: '1.85%', delta: '+311.1%', benchmark: '1.20%',
        dialogue: 'Isn\'t Snapchat just for kids sending disappearing selfies? Why would serious customers buy our beverage from a Snapchat ad?',
        bluf: 'Jason, Snapchat reaches over 75% of 13-to-34 year olds with zero feed clutter. By utilizing non-skippable 6-second Commercials with clear front-loaded branding in the first 2 seconds, we achieved a $4.20 CPM and generated 450 direct DTC purchases in week one.',
        script: 'Jason, Snapchat reaches affluent Gen Z shoppers at one-fourth the CPM of Instagram. Our 6-second non-skippable format delivered 100% video completion at a $4.20 CPM.',
        rootCause: 'Misconceptions regarding Snapchat demographic purchasing power and engagement.'
      }
    ]
  },
  {
    id: 'reddit-ads',
    name: 'Reddit Ads',
    shortName: 'Reddit',
    category: 'reddit-ads',
    count: 52,
    personas: [
      { name: 'Devon Miller', title: 'Founder & CTO', org: 'DevFlow IDE', temperament: 'analytical-vp' },
      { name: 'Maya Lin', title: 'Community Marketing Lead', org: 'RetroTech Hardware', temperament: 'concerned-owner' }
    ],
    topics: [
      {
        slug: 'conversation-placement-comments',
        title: 'Reddit Conversation Placement & Community Moderation',
        subtitle: 'Place ads inside active subreddit debates without getting downvoted into oblivion.',
        metric: 'Upvote Ratio', prevVal: '32%', currVal: '84%', delta: '+162.5%', benchmark: '75%',
        dialogue: 'People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?',
        bluf: 'Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.',
        script: 'Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates.',
        rootCause: 'Traditional corporate ad copy triggering Reddit community anti-marketing radar.'
      }
    ]
  },
  {
    id: 'amazon-ads',
    name: 'Amazon Ads',
    shortName: 'Amazon',
    category: 'amazon-ads',
    count: 52,
    personas: [
      { name: 'Bradley Cooper', title: 'Director of E-Commerce', org: 'Summit Outdoor Gear', temperament: 'frustrated-cfo' },
      { name: 'Samantha Wu', title: 'Amazon Brand Manager', org: 'Zenith Health Foods', temperament: 'concerned-owner' }
    ],
    topics: [
      {
        slug: 'acos-vs-tacos-flywheel',
        title: 'ACOS vs TACOS Organic Flywheel Alignment',
        subtitle: 'Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.',
        metric: 'Total ACOS (TACOS)', prevVal: '11.5%', currVal: '24.2%', delta: '+110.4%', benchmark: '12.0%',
        dialogue: 'Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!',
        bluf: 'Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.',
        script: 'Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank.',
        rootCause: 'Cutting ad spend without considering downstream organic search BSR momentum.'
      }
    ]
  },
  {
    id: 'flipkart-ads',
    name: 'Flipkart Ads',
    shortName: 'Flipkart',
    category: 'flipkart-ads',
    count: 52,
    personas: [
      { name: 'Rahul Sharma', title: 'VP of E-Commerce', org: 'IndoStyle Ethnic Wear', temperament: 'concerned-owner' },
      { name: 'Priya Nair', title: 'Brand Marketing Manager', org: 'VedicPure Essentials', temperament: 'impatient-skeptic' }
    ],
    topics: [
      {
        slug: 'pla-catalog-quality-score',
        title: 'Flipkart PLA Bidding & Listing Quality Score',
        subtitle: 'Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.',
        metric: 'Flipkart ROAS', prevVal: '5.2x', currVal: '2.4x', delta: '-53.8%', benchmark: '4.5x',
        dialogue: 'We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?',
        bluf: 'Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.',
        script: 'Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost.',
        rootCause: 'Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.'
      }
    ]
  },
  {
    id: 'quick-commerce',
    name: 'Blinkit & Q-Commerce',
    shortName: 'Blinkit',
    category: 'quick-commerce',
    count: 52,
    personas: [
      { name: 'Vikram Malhotra', title: 'Chief Commercial Officer', org: 'BrewCraft Cold Brew', temperament: 'frustrated-cfo' },
      { name: 'Ananya Deshmukh', title: 'Head of Growth', org: 'SnackBinge Gourmet', temperament: 'curious-client' }
    ],
    topics: [
      {
        slug: '10min-sov-impulse-bidding',
        title: 'Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing',
        subtitle: 'Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.',
        metric: 'Slot 1 & 2 Share of Voice', prevVal: '65%', currVal: '22%', delta: '-66.2%', benchmark: '55%',
        dialogue: 'I searched for "cold brew coffee" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!',
        bluf: 'Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.',
        script: 'Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV.',
        rootCause: 'Micro-fulfillment dark store stockout triggering automated geo-ad suppression.'
      }
    ]
  }
];

// Ensure output directory exists
const targetDir = path.join(__dirname, '..', 'src', 'data', 'platformScenarios');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Generate file for each platform
PLATFORMS_CONFIG.forEach(p => {
  const content = generatePlatformFile(p);
  const fileName = `${p.id.replace(/-/g, '')}Scenarios.ts`;
  fs.writeFileSync(path.join(targetDir, fileName), content, 'utf8');
  console.log(`Generated ${fileName} with ${p.count} scenarios!`);
});

// Generate aggregator index.ts
let indexContent = `// ============================================================================
// AURA-COMMS MULTI-PLATFORM SCENARIO REPOSITORY
// Exports 470+ real-world roleplay scenarios across all 9 advertising platforms
// ============================================================================

import { Scenario } from '@/types/scenario';
`;

PLATFORMS_CONFIG.forEach(p => {
  const varName = `${p.id.replace(/-/g, '_').toUpperCase()}_SCENARIOS`;
  const fileName = `${p.id.replace(/-/g, '')}Scenarios`;
  indexContent += `import { ${varName} } from './${fileName}';\n`;
  indexContent += `export { ${varName} } from './${fileName}';\n`;
});

indexContent += `\nexport const ALL_PLATFORM_SCENARIOS_MAP: Record<string, Scenario[]> = {\n`;
PLATFORMS_CONFIG.forEach(p => {
  const varName = `${p.id.replace(/-/g, '_').toUpperCase()}_SCENARIOS`;
  indexContent += `  '${p.id}': ${varName},\n`;
});
indexContent += `};\n\n`;

indexContent += `export function getScenariosForPlatform(platformId: string): Scenario[] {\n`;
indexContent += `  return ALL_PLATFORM_SCENARIOS_MAP[platformId] || ALL_PLATFORM_SCENARIOS_MAP['google-ads'] || [];\n`;
indexContent += `}\n\n`;

indexContent += `export const ALL_AGGREGATED_PLATFORM_SCENARIOS: Scenario[] = [\n`;
PLATFORMS_CONFIG.forEach(p => {
  const varName = `${p.id.replace(/-/g, '_').toUpperCase()}_SCENARIOS`;
  indexContent += `  ...${varName},\n`;
});
indexContent += `];\n`;

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');
console.log('Generated platformScenarios/index.ts aggregator!');
