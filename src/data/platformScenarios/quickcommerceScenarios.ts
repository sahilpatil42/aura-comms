// ============================================================================
// BLINKIT & Q-COMMERCE SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const QUICK_COMMERCE_SCENARIOS: Scenario[] = [
  {
    id: "quick-commerce-m1-10min-sov-impulse-bidding",
    title: "Module 1: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m2-10min-sov-impulse-bidding",
    title: "Module 2: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m3-10min-sov-impulse-bidding",
    title: "Module 3: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m4-10min-sov-impulse-bidding",
    title: "Module 4: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m5-10min-sov-impulse-bidding",
    title: "Module 5: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m6-10min-sov-impulse-bidding",
    title: "Module 6: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m7-10min-sov-impulse-bidding",
    title: "Module 7: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m8-10min-sov-impulse-bidding",
    title: "Module 8: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m9-10min-sov-impulse-bidding",
    title: "Module 9: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m10-10min-sov-impulse-bidding",
    title: "Module 10: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m11-10min-sov-impulse-bidding",
    title: "Module 11: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m12-10min-sov-impulse-bidding",
    title: "Module 12: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m13-10min-sov-impulse-bidding",
    title: "Module 13: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m14-10min-sov-impulse-bidding",
    title: "Module 14: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m15-10min-sov-impulse-bidding",
    title: "Module 15: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m16-10min-sov-impulse-bidding",
    title: "Module 16: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m17-10min-sov-impulse-bidding",
    title: "Module 17: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m18-10min-sov-impulse-bidding",
    title: "Module 18: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m19-10min-sov-impulse-bidding",
    title: "Module 19: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m20-10min-sov-impulse-bidding",
    title: "Module 20: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m21-10min-sov-impulse-bidding",
    title: "Module 21: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m22-10min-sov-impulse-bidding",
    title: "Module 22: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m23-10min-sov-impulse-bidding",
    title: "Module 23: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m24-10min-sov-impulse-bidding",
    title: "Module 24: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m25-10min-sov-impulse-bidding",
    title: "Module 25: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m26-10min-sov-impulse-bidding",
    title: "Module 26: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m27-10min-sov-impulse-bidding",
    title: "Module 27: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m28-10min-sov-impulse-bidding",
    title: "Module 28: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m29-10min-sov-impulse-bidding",
    title: "Module 29: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m30-10min-sov-impulse-bidding",
    title: "Module 30: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m31-10min-sov-impulse-bidding",
    title: "Module 31: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m32-10min-sov-impulse-bidding",
    title: "Module 32: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m33-10min-sov-impulse-bidding",
    title: "Module 33: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m34-10min-sov-impulse-bidding",
    title: "Module 34: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m35-10min-sov-impulse-bidding",
    title: "Module 35: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m36-10min-sov-impulse-bidding",
    title: "Module 36: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m37-10min-sov-impulse-bidding",
    title: "Module 37: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m38-10min-sov-impulse-bidding",
    title: "Module 38: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m39-10min-sov-impulse-bidding",
    title: "Module 39: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m40-10min-sov-impulse-bidding",
    title: "Module 40: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m41-10min-sov-impulse-bidding",
    title: "Module 41: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m42-10min-sov-impulse-bidding",
    title: "Module 42: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m43-10min-sov-impulse-bidding",
    title: "Module 43: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m44-10min-sov-impulse-bidding",
    title: "Module 44: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m45-10min-sov-impulse-bidding",
    title: "Module 45: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m46-10min-sov-impulse-bidding",
    title: "Module 46: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m47-10min-sov-impulse-bidding",
    title: "Module 47: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m48-10min-sov-impulse-bidding",
    title: "Module 48: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m49-10min-sov-impulse-bidding",
    title: "Module 49: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m50-10min-sov-impulse-bidding",
    title: "Module 50: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m51-10min-sov-impulse-bidding",
    title: "Module 51: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "BrewCraft Cold Brew (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Chief Commercial Officer Vikram Malhotra is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Vikram Malhotra",
      title: "Chief Commercial Officer",
      organization: "BrewCraft Cold Brew",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
    id: "quick-commerce-m52-10min-sov-impulse-bidding",
    title: "Module 52: Blinkit Top-Slot Share of Voice (SOV) & Dark Store Pacing",
    subtitle: "Capture slot #1 and #2 on high-intent search shelves and prevent dark store stockout waste.",
    category: "quick-commerce",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SnackBinge Gourmet (BLINKIT & Q-COMMERCE)",
    briefingSummary: "Head of Growth Ananya Deshmukh is asking: \"I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched for \"cold brew coffee\" on Blinkit in Gurgaon and our brand was nowhere on the first screen! Why are we losing to rivals on 10-minute delivery?!",
    brokenKPIs: [
      {
        metric: "Slot 1 & 2 Share of Voice",
        previousValue: "65%",
        currentValue: "22%",
        deltaPercent: "-66.2%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Blinkit & Q-Commerce auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Ananya Deshmukh",
      title: "Head of Growth",
      organization: "SnackBinge Gourmet",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on Blinkit & Q-Commerce",
        "Understanding Slot 1 & 2 Share of Voice fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Micro-fulfillment dark store stockout triggering automated geo-ad suppression.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Blinkit & Q-Commerce platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Vikram, our local dark store in DLF Phase 3 ran out of inventory at 11 AM, so Blinkit automatically suppressed our ads in that pincode to prevent failed deliveries. Our brand was active in 82 other dark stores. We coordinated with supply chain to double warehouse replenishment stock today to maintain 98% in-stock ad visibility.",
      rootCauseAnalysis: "Primary root cause: Micro-fulfillment dark store stockout triggering automated geo-ad suppression..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Vikram, bottom line up front: Blinkit automatically suppresses ads in pincodes where local dark store stock hits zero. We fixed the replenishment schedule to maintain 100% all-day SOV."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Blinkit & Q-Commerce technical jargon?\"",
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
