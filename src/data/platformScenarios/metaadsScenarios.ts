// ============================================================================
// META ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const META_ADS_SCENARIOS: Scenario[] = [
  {
    id: "meta-ads-m1-cpl-spike-crisis",
    title: "Module 1: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m2-asc-budget-allocation",
    title: "Module 2: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m3-capi-emq-score",
    title: "Module 3: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m4-hook-rate-decay",
    title: "Module 4: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m5-ios-skan-delayed-attribution",
    title: "Module 5: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m6-cpl-spike-crisis",
    title: "Module 6: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m7-asc-budget-allocation",
    title: "Module 7: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m8-capi-emq-score",
    title: "Module 8: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m9-hook-rate-decay",
    title: "Module 9: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m10-ios-skan-delayed-attribution",
    title: "Module 10: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m11-cpl-spike-crisis",
    title: "Module 11: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m12-asc-budget-allocation",
    title: "Module 12: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m13-capi-emq-score",
    title: "Module 13: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m14-hook-rate-decay",
    title: "Module 14: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m15-ios-skan-delayed-attribution",
    title: "Module 15: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m16-cpl-spike-crisis",
    title: "Module 16: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m17-asc-budget-allocation",
    title: "Module 17: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m18-capi-emq-score",
    title: "Module 18: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m19-hook-rate-decay",
    title: "Module 19: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m20-ios-skan-delayed-attribution",
    title: "Module 20: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m21-cpl-spike-crisis",
    title: "Module 21: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m22-asc-budget-allocation",
    title: "Module 22: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m23-capi-emq-score",
    title: "Module 23: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m24-hook-rate-decay",
    title: "Module 24: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m25-ios-skan-delayed-attribution",
    title: "Module 25: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m26-cpl-spike-crisis",
    title: "Module 26: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m27-asc-budget-allocation",
    title: "Module 27: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m28-capi-emq-score",
    title: "Module 28: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m29-hook-rate-decay",
    title: "Module 29: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m30-ios-skan-delayed-attribution",
    title: "Module 30: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m31-cpl-spike-crisis",
    title: "Module 31: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m32-asc-budget-allocation",
    title: "Module 32: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m33-capi-emq-score",
    title: "Module 33: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m34-hook-rate-decay",
    title: "Module 34: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m35-ios-skan-delayed-attribution",
    title: "Module 35: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m36-cpl-spike-crisis",
    title: "Module 36: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m37-asc-budget-allocation",
    title: "Module 37: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m38-capi-emq-score",
    title: "Module 38: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m39-hook-rate-decay",
    title: "Module 39: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m40-ios-skan-delayed-attribution",
    title: "Module 40: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m41-cpl-spike-crisis",
    title: "Module 41: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m42-asc-budget-allocation",
    title: "Module 42: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m43-capi-emq-score",
    title: "Module 43: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m44-hook-rate-decay",
    title: "Module 44: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m45-ios-skan-delayed-attribution",
    title: "Module 45: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m46-cpl-spike-crisis",
    title: "Module 46: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m47-asc-budget-allocation",
    title: "Module 47: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m48-capi-emq-score",
    title: "Module 48: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m49-hook-rate-decay",
    title: "Module 49: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m50-ios-skan-delayed-attribution",
    title: "Module 50: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m51-cpl-spike-crisis",
    title: "Module 51: The Overnight Meta CPL Spike",
    subtitle: "De-escalate client panic when Cost Per Lead rises 42% overnight.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Luxe DTC Apparel (META ADS)",
    briefingSummary: "VP of Marketing Alex Rivera is asking: \"Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Ads CPL spiked by 42% overnight! Why is our budget burning, and why shouldn't I pause all campaigns right this second?!",
    brokenKPIs: [
      {
        metric: "Cost Per Lead (CPL)",
        previousValue: "$18.20",
        currentValue: "$25.80",
        deltaPercent: "+41.8%",
        isNegative: true,
        benchmark: "$19.00",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Alex Rivera",
      title: "VP of Marketing",
      organization: "Luxe DTC Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Cost Per Lead (CPL) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Creative fatigue on primary winner ad causing frequency and CPM inflation.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Creative fatigue on primary winner ad causing frequency and CPM inflation..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Alex, pausing all campaigns will reset Meta algorithmic learning phase. Instead, we have isolated the fatigued ad sets and reallocated 60% of budget into fresh UGC variants to bring CPL back to $19."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m52-asc-budget-allocation",
    title: "Module 52: Advantage+ Shopping (ASC) Existing Customer Caps",
    subtitle: "Ensure Advantage+ Shopping isn't spending 80% of budget retargeting existing buyers.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CleanGlow Skincare (META ADS)",
    briefingSummary: "Founder & CEO Rachel Green is asking: \"Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta Advantage+ campaign reports a 5x ROAS, but our Shopify new customer revenue is completely flat! Is Meta lying to us?",
    brokenKPIs: [
      {
        metric: "Existing Customer Budget %",
        previousValue: "15%",
        currentValue: "68%",
        deltaPercent: "+53.0%",
        isNegative: true,
        benchmark: "< 20%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "Founder & CEO",
      organization: "CleanGlow Skincare",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Existing Customer Budget % fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta ASC is not lying, but it is taking the easiest path to conversions by serving ads to your existing loyal customers. We have implemented a strict 15% Existing Customer Budget Cap in the ASC settings to force 85% of media dollars into genuine new customer acquisition.",
      rootCauseAnalysis: "Primary root cause: Uncapped Advantage+ campaign settings defaulting to low-hanging fruit remarketing..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rachel, bottom line up front: ASC defaulted to remarketing to existing buyers. We have locked the existing customer cap to 15% in account settings to drive net-new customer acquisition."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m53-capi-emq-score",
    title: "Module 53: Conversions API (CAPI) Match Quality Recovery",
    subtitle: "Fix Event Match Quality drops and recover lost purchase signal attribution.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FitPulse Tech (META ADS)",
    briefingSummary: "Chief Executive Officer Julian Hayes is asking: \"Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Events Manager says our Purchase Event Match Quality is at 4.2 out of 10 and data is degraded. Are our Meta ads tracking properly?",
    brokenKPIs: [
      {
        metric: "Event Match Quality (EMQ)",
        previousValue: "8.4/10",
        currentValue: "4.2/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "8.0/10",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Julian Hayes",
      title: "Chief Executive Officer",
      organization: "FitPulse Tech",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Event Match Quality (EMQ) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Server-side CAPI webhook missing hashed customer identifier parameters.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Julian, a recent checkout update broke the transmission of hashed customer email and IP parameters in the server payload. The browser pixel is still firing, but Meta cannot match users server-side. We pushed a hotfix to pass full SHA-256 hashed customer parameters to restore EMQ above 8.5 today.",
      rootCauseAnalysis: "Primary root cause: Server-side CAPI webhook missing hashed customer identifier parameters..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Julian, bottom line up front: The checkout update omitted server-side user data parameters. We patched the webhook payload to send hashed email and phone, which will restore our 8.5+ match rate within 24 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m54-hook-rate-decay",
    title: "Module 54: 3-Second Hook Rate & Video Retention Diagnostics",
    subtitle: "Diagnose why video engagement dropped and rebuild the opening 3 seconds.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Nomad Luggage (META ADS)",
    briefingSummary: "Head of Growth Chloe Bennett is asking: \"People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are scrolling past our new $5,000 video ad in under 2 seconds! Did our production agency waste all our money?",
    brokenKPIs: [
      {
        metric: "3-Second Hook Rate",
        previousValue: "34.2%",
        currentValue: "14.8%",
        deltaPercent: "-56.7%",
        isNegative: true,
        benchmark: "30.0%",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Head of Growth",
      organization: "Nomad Luggage",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding 3-Second Hook Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Slow studio logo animation at start of video inducing scroll-past behavior.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, the core video body and offer are strong, but the opening 3 seconds featured a slow logo animation that users swiped past. We re-edited the opening 2.5 seconds with high-contrast text and a UGC product demonstration hook to lift 3-second hold rate back over 32%.",
      rootCauseAnalysis: "Primary root cause: Slow studio logo animation at start of video inducing scroll-past behavior..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Chloe, bottom line up front: The video content converts, but the initial 3 seconds lacked visual momentum. We tested 3 rapid-action hook variants today that bypass user ad blindness."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "meta-ads-m55-ios-skan-delayed-attribution",
    title: "Module 55: Reconciling 72-Hour Delayed Attribution",
    subtitle: "Calm the founder down during weekend ROAS reporting delays.",
    category: "meta-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Aura Home Goods (META ADS)",
    briefingSummary: "E-Commerce Director Victor Stone is asking: \"Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Yesterday was Sunday and our Meta ROAS was 1.2x! We lost money on every single dollar spent! Why did you let ads run?!",
    brokenKPIs: [
      {
        metric: "Weekend Reported ROAS",
        previousValue: "2.8x",
        currentValue: "1.2x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "2.6x",
        rootCauseClues: [
          "Meta Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Victor Stone",
      title: "E-Commerce Director",
      organization: "Aura Home Goods",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Meta Ads",
        "Understanding Weekend Reported ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Platform attribution latency post-iOS 14.5 SKAN reporting windows.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Meta Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Victor, Sunday was not unprofitable; due to Apple SKAdNetwork privacy delays and Meta modeled attribution windows, up to 40% of Sunday purchases will populate over the next 24 to 48 hours. Looking at Shopify live backend gross revenue, our real blended MER was 2.9x yesterday.",
      rootCauseAnalysis: "Primary root cause: Platform attribution latency post-iOS 14.5 SKAN reporting windows..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Victor, bottom line up front: Sunday Meta attribution lag hides conversions that appear within 48 hours. Shopify live backend confirmed 142 orders and a healthy 2.9x MER."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Meta Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
];
