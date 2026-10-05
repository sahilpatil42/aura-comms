// ============================================================================
// FLIPKART ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const FLIPKART_ADS_SCENARIOS: Scenario[] = [
  {
    id: "flipkart-ads-m1-pla-catalog-quality-score",
    title: "Module 1: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m2-pla-catalog-quality-score",
    title: "Module 2: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m3-pla-catalog-quality-score",
    title: "Module 3: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m4-pla-catalog-quality-score",
    title: "Module 4: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m5-pla-catalog-quality-score",
    title: "Module 5: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m6-pla-catalog-quality-score",
    title: "Module 6: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m7-pla-catalog-quality-score",
    title: "Module 7: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m8-pla-catalog-quality-score",
    title: "Module 8: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m9-pla-catalog-quality-score",
    title: "Module 9: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m10-pla-catalog-quality-score",
    title: "Module 10: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m11-pla-catalog-quality-score",
    title: "Module 11: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m12-pla-catalog-quality-score",
    title: "Module 12: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m13-pla-catalog-quality-score",
    title: "Module 13: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m14-pla-catalog-quality-score",
    title: "Module 14: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m15-pla-catalog-quality-score",
    title: "Module 15: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m16-pla-catalog-quality-score",
    title: "Module 16: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m17-pla-catalog-quality-score",
    title: "Module 17: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m18-pla-catalog-quality-score",
    title: "Module 18: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m19-pla-catalog-quality-score",
    title: "Module 19: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m20-pla-catalog-quality-score",
    title: "Module 20: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m21-pla-catalog-quality-score",
    title: "Module 21: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m22-pla-catalog-quality-score",
    title: "Module 22: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m23-pla-catalog-quality-score",
    title: "Module 23: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m24-pla-catalog-quality-score",
    title: "Module 24: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m25-pla-catalog-quality-score",
    title: "Module 25: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m26-pla-catalog-quality-score",
    title: "Module 26: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m27-pla-catalog-quality-score",
    title: "Module 27: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m28-pla-catalog-quality-score",
    title: "Module 28: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m29-pla-catalog-quality-score",
    title: "Module 29: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m30-pla-catalog-quality-score",
    title: "Module 30: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m31-pla-catalog-quality-score",
    title: "Module 31: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m32-pla-catalog-quality-score",
    title: "Module 32: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m33-pla-catalog-quality-score",
    title: "Module 33: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m34-pla-catalog-quality-score",
    title: "Module 34: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m35-pla-catalog-quality-score",
    title: "Module 35: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m36-pla-catalog-quality-score",
    title: "Module 36: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m37-pla-catalog-quality-score",
    title: "Module 37: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m38-pla-catalog-quality-score",
    title: "Module 38: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m39-pla-catalog-quality-score",
    title: "Module 39: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m40-pla-catalog-quality-score",
    title: "Module 40: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m41-pla-catalog-quality-score",
    title: "Module 41: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m42-pla-catalog-quality-score",
    title: "Module 42: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m43-pla-catalog-quality-score",
    title: "Module 43: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m44-pla-catalog-quality-score",
    title: "Module 44: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m45-pla-catalog-quality-score",
    title: "Module 45: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m46-pla-catalog-quality-score",
    title: "Module 46: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m47-pla-catalog-quality-score",
    title: "Module 47: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m48-pla-catalog-quality-score",
    title: "Module 48: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m49-pla-catalog-quality-score",
    title: "Module 49: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m50-pla-catalog-quality-score",
    title: "Module 50: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m51-pla-catalog-quality-score",
    title: "Module 51: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "IndoStyle Ethnic Wear (FLIPKART ADS)",
    briefingSummary: "VP of E-Commerce Rahul Sharma is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rahul Sharma",
      title: "VP of E-Commerce",
      organization: "IndoStyle Ethnic Wear",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
    id: "flipkart-ads-m52-pla-catalog-quality-score",
    title: "Module 52: Flipkart PLA Bidding & Listing Quality Score",
    subtitle: "Fix Catalog Score bottlenecks to win prime category shelf positions at lower CPC.",
    category: "flipkart-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "VedicPure Essentials (FLIPKART ADS)",
    briefingSummary: "Brand Marketing Manager Priya Nair is asking: \"We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We increased our bids on Flipkart Product Listing Ads, but competitors with lower bids are still appearing above us! Why is Flipkart favoring them?",
    brokenKPIs: [
      {
        metric: "Flipkart ROAS",
        previousValue: "5.2x",
        currentValue: "2.4x",
        deltaPercent: "-53.8%",
        isNegative: true,
        benchmark: "4.5x",
        rootCauseClues: [
          "Flipkart Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Priya Nair",
      title: "Brand Marketing Manager",
      organization: "VedicPure Essentials",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on Flipkart Ads",
        "Understanding Flipkart ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Low Catalog Quality Score handicapping auction ad rank despite aggressive bids.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Flipkart Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rahul, Flipkart auction rank combines your bid with your Catalog Quality Score. Our listing had only 3 images and lacked detailed regional size specs, lowering our quality score to 62%. We uploaded 6 HD infographic images and customer FAQ, which boosted our rank score and reduced our required CPC by 25%.",
      rootCauseAnalysis: "Primary root cause: Low Catalog Quality Score handicapping auction ad rank despite aggressive bids..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Rahul, bottom line up front: Flipkart prioritizes high catalog quality over raw bids. We optimized listing attributes and images to win top category slots at 25% lower cost."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Flipkart Ads technical jargon?\"",
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
