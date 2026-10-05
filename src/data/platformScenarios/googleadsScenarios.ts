// ============================================================================
// GOOGLE ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const GOOGLE_ADS_SCENARIOS: Scenario[] = [
  {
    id: "google-ads-m1-ctr-basics",
    title: "Module 1: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m2-cpc-mechanics",
    title: "Module 2: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m3-pmax-cannibalization",
    title: "Module 3: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m4-quality-score-drop",
    title: "Module 4: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m5-tcpa-learning-reset",
    title: "Module 5: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m6-search-lost-is-budget",
    title: "Module 6: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m7-negative-keyword-sculpting",
    title: "Module 7: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m8-ctr-basics",
    title: "Module 8: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m9-cpc-mechanics",
    title: "Module 9: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m10-pmax-cannibalization",
    title: "Module 10: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m11-quality-score-drop",
    title: "Module 11: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m12-tcpa-learning-reset",
    title: "Module 12: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m13-search-lost-is-budget",
    title: "Module 13: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m14-negative-keyword-sculpting",
    title: "Module 14: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m15-ctr-basics",
    title: "Module 15: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m16-cpc-mechanics",
    title: "Module 16: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m17-pmax-cannibalization",
    title: "Module 17: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m18-quality-score-drop",
    title: "Module 18: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m19-tcpa-learning-reset",
    title: "Module 19: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m20-search-lost-is-budget",
    title: "Module 20: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m21-negative-keyword-sculpting",
    title: "Module 21: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m22-ctr-basics",
    title: "Module 22: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m23-cpc-mechanics",
    title: "Module 23: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m24-pmax-cannibalization",
    title: "Module 24: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m25-quality-score-drop",
    title: "Module 25: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m26-tcpa-learning-reset",
    title: "Module 26: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m27-search-lost-is-budget",
    title: "Module 27: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m28-negative-keyword-sculpting",
    title: "Module 28: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m29-ctr-basics",
    title: "Module 29: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m30-cpc-mechanics",
    title: "Module 30: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m31-pmax-cannibalization",
    title: "Module 31: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m32-quality-score-drop",
    title: "Module 32: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m33-tcpa-learning-reset",
    title: "Module 33: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m34-search-lost-is-budget",
    title: "Module 34: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m35-negative-keyword-sculpting",
    title: "Module 35: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m36-ctr-basics",
    title: "Module 36: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m37-cpc-mechanics",
    title: "Module 37: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m38-pmax-cannibalization",
    title: "Module 38: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m39-quality-score-drop",
    title: "Module 39: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m40-tcpa-learning-reset",
    title: "Module 40: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m41-search-lost-is-budget",
    title: "Module 41: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m42-negative-keyword-sculpting",
    title: "Module 42: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m43-ctr-basics",
    title: "Module 43: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m44-cpc-mechanics",
    title: "Module 44: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m45-pmax-cannibalization",
    title: "Module 45: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m46-quality-score-drop",
    title: "Module 46: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m47-tcpa-learning-reset",
    title: "Module 47: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m48-search-lost-is-budget",
    title: "Module 48: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m49-negative-keyword-sculpting",
    title: "Module 49: Negative Keyword Sculpting & Junk Query Waste",
    subtitle: "Show the client how negative keywords prevented $1,200 of irrelevant search spend.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I checked our search terms and saw someone clicked our legal ad searching \"free legal forms download\"! Why are we paying for free seekers?",
    brokenKPIs: [
      {
        metric: "Wasted Ad Spend",
        previousValue: "$1,400",
        currentValue: "$180",
        deltaPercent: "-87.1%",
        isNegative: true,
        benchmark: "< $200",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Wasted Ad Spend fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Broad match query expansion capturing non-transactional informational searches.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, broad match captured that intent before we had search history on this new campaign. We reviewed the search query report and added 45 negative exact keywords including \"free\", \"template\", and \"forms\". This eliminated 87% of junk clicks and direct all spend to paying clients.",
      rootCauseAnalysis: "Primary root cause: Broad match query expansion capturing non-transactional informational searches..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, we have audited the search query report and deployed a negative keyword list containing 45 non-paying query terms to guarantee zero wasted budget."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m50-ctr-basics",
    title: "Module 50: What Does Search CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our Search CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Search CTR fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Headline copy misalignment with user search query intent.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "Primary root cause: Headline copy misalignment with user search query intent..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: CTR stands for Click-Through Rate. At 1.4%, we are missing qualified searchers because our ad headlines need tighter keyword alignment. We have deployed 3 high-intent responsive search headlines today to lift CTR back above 4.5%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m51-cpc-mechanics",
    title: "Module 51: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our Google ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "Average CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.80",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Average CPC fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Competitor auction entry coupled with broad match query expansion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, Google CPCs operate on a second-price auction influenced by Quality Score and competitor bids. Two local competitors launched aggressive campaigns this week bidding on our core terms. We have added negative keywords and tightened geo-fencing to drop average CPC back toward $4.00 within 48 hours.",
      rootCauseAnalysis: "Primary root cause: Competitor auction entry coupled with broad match query expansion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Sarah, bottom line up front: CPC rose because two new competitors entered our local auction and bid aggressively. We have added negative keywords to eliminate wasted clicks and adjusted bid caps to bring our cost per click back to target."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m52-pmax-cannibalization",
    title: "Module 52: Performance Max Brand Cannibalization",
    subtitle: "Prevent PMax from taking credit for easy organic brand search volume.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Performance Max ROAS dropped from 6.8x to 3.1x after we excluded our brand keywords! Why did removing our own name crush our results?",
    brokenKPIs: [
      {
        metric: "PMax ROAS",
        previousValue: "6.8x",
        currentValue: "3.1x",
        deltaPercent: "-54.4%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding PMax ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "PMax relying on brand searches rather than prospecting inventory.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, previously PMax was taking credit for people who already searched your brand name to artificially boost its numbers. By adding a Brand Exclusion list, PMax is now forced to acquire genuinely new customers. A 3.1x ROAS on pure cold acquisition is generating far more net-new profit than inflated brand vanity numbers.",
      rootCauseAnalysis: "Primary root cause: PMax relying on brand searches rather than prospecting inventory..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Marcus, bottom line up front: Excluding brand keywords revealed our true net-new customer acquisition efficiency. While reported ROAS adjusted from 6.8x to 3.1x, our actual new customer revenue grew by 18% this week."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m53-quality-score-drop",
    title: "Module 53: Quality Score Diagnosis & Landing Page Experience",
    subtitle: "Diagnose why Quality Score dropped from 8/10 to 4/10 and lift ad rank.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Vance Logistics (GOOGLE ADS)",
    briefingSummary: "Chief Financial Officer Marcus Vance is asking: \"Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad Quality Score dropped to 4 out of 10. Does this mean Google thinks our business is untrustworthy?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "8/10",
        currentValue: "4/10",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Chief Financial Officer",
      organization: "Vance Logistics",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Quality Score fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile page load speed degradation impacting Landing Page Experience component.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, Quality Score is a technical diagnostic tool based on Expected CTR, Ad Relevance, and Landing Page speed—not a rating of your business trustworthiness. The recent website redesign slowed mobile page load times from 1.8s to 4.2s. We are compressing images today to restore Quality Score back to 8.",
      rootCauseAnalysis: "Primary root cause: Mobile page load speed degradation impacting Landing Page Experience component..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Elena, Quality Score is simply Google evaluating mobile page speed and keyword relevance. We isolated a 4.2-second mobile load time from the redesign and are optimizing image assets to restore our discount in the auction."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m54-tcpa-learning-reset",
    title: "Module 54: Target CPA Learning Phase & Budget Volatility",
    subtitle: "Explain why editing budget by 50% threw the smart bidding algorithm into chaos.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CloudScale SaaS (GOOGLE ADS)",
    briefingSummary: "VP of Growth Elena Rostova is asking: \"I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I doubled our Google Ads budget on Friday and our Cost Per Lead skyrocketed to $88! Should we pause the campaign immediately?",
    brokenKPIs: [
      {
        metric: "Cost Per Acquisition (CPA)",
        previousValue: "$42",
        currentValue: "$88",
        deltaPercent: "+109.5%",
        isNegative: true,
        benchmark: "$45",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "VP of Growth",
      organization: "CloudScale SaaS",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Cost Per Acquisition (CPA) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Premature aggressive budget scaling triggering algorithmic learning reset.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, when budget is adjusted by more than 20%, Google Smart Bidding resets its learning phase to test aggressive high-cost auctions. Pausing will permanently erase the algorithmic data. We have stabilized the budget at +15% increments to allow tCPA bidding to re-anchor back to $42 within 72 hours.",
      rootCauseAnalysis: "Primary root cause: Premature aggressive budget scaling triggering algorithmic learning reset..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "David, bottom line up front: Doubling the budget reset Google machine learning phase. We have scaled budget back to controlled 15% tiers and locked Target CPA caps to restore lead efficiency within 3 days."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
    id: "google-ads-m55-search-lost-is-budget",
    title: "Module 55: Impression Share Lost to Budget vs Rank",
    subtitle: "Demonstrate to the client why their ads run out of money by 2 PM daily.",
    category: "google-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Sterling Real Estate (GOOGLE ADS)",
    briefingSummary: "Managing Director David Sterling is asking: \"Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our clients are telling us they can't find our Google ad in the afternoon! Are you turning our ads off during lunch hours?",
    brokenKPIs: [
      {
        metric: "Lost IS (Budget)",
        previousValue: "8%",
        currentValue: "44%",
        deltaPercent: "+36.0%",
        isNegative: true,
        benchmark: "< 10%",
        rootCauseClues: [
          "Google Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Sterling",
      title: "Managing Director",
      organization: "Sterling Real Estate",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Google Ads",
        "Understanding Lost IS (Budget) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Capped daily budget causing early daypart exhaustion.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Google Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, your ads are not manually paused; our Search Impression Share Lost to Budget is at 44%, meaning our daily $100 budget runs out by 2:30 PM due to high morning volume. We can either daypart to reserve spend for peak afternoon conversion hours or increase daily budget by $40 to maintain all-day coverage.",
      rootCauseAnalysis: "Primary root cause: Capped daily budget causing early daypart exhaustion..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Tom, bottom line up front: Our budget is exhausting by early afternoon because morning search demand surged. We have implemented dayparting scheduling to preserve budget for peak conversion hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Google Ads technical jargon?\"",
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
