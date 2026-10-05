// ============================================================================
// AMAZON ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const AMAZON_ADS_SCENARIOS: Scenario[] = [
  {
    id: "amazon-ads-m1-acos-vs-tacos-flywheel",
    title: "Module 1: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m2-acos-vs-tacos-flywheel",
    title: "Module 2: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m3-acos-vs-tacos-flywheel",
    title: "Module 3: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m4-acos-vs-tacos-flywheel",
    title: "Module 4: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m5-acos-vs-tacos-flywheel",
    title: "Module 5: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m6-acos-vs-tacos-flywheel",
    title: "Module 6: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m7-acos-vs-tacos-flywheel",
    title: "Module 7: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m8-acos-vs-tacos-flywheel",
    title: "Module 8: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m9-acos-vs-tacos-flywheel",
    title: "Module 9: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m10-acos-vs-tacos-flywheel",
    title: "Module 10: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m11-acos-vs-tacos-flywheel",
    title: "Module 11: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m12-acos-vs-tacos-flywheel",
    title: "Module 12: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m13-acos-vs-tacos-flywheel",
    title: "Module 13: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m14-acos-vs-tacos-flywheel",
    title: "Module 14: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m15-acos-vs-tacos-flywheel",
    title: "Module 15: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m16-acos-vs-tacos-flywheel",
    title: "Module 16: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m17-acos-vs-tacos-flywheel",
    title: "Module 17: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m18-acos-vs-tacos-flywheel",
    title: "Module 18: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m19-acos-vs-tacos-flywheel",
    title: "Module 19: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m20-acos-vs-tacos-flywheel",
    title: "Module 20: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m21-acos-vs-tacos-flywheel",
    title: "Module 21: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m22-acos-vs-tacos-flywheel",
    title: "Module 22: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m23-acos-vs-tacos-flywheel",
    title: "Module 23: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m24-acos-vs-tacos-flywheel",
    title: "Module 24: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m25-acos-vs-tacos-flywheel",
    title: "Module 25: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m26-acos-vs-tacos-flywheel",
    title: "Module 26: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m27-acos-vs-tacos-flywheel",
    title: "Module 27: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m28-acos-vs-tacos-flywheel",
    title: "Module 28: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m29-acos-vs-tacos-flywheel",
    title: "Module 29: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m30-acos-vs-tacos-flywheel",
    title: "Module 30: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m31-acos-vs-tacos-flywheel",
    title: "Module 31: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m32-acos-vs-tacos-flywheel",
    title: "Module 32: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m33-acos-vs-tacos-flywheel",
    title: "Module 33: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m34-acos-vs-tacos-flywheel",
    title: "Module 34: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m35-acos-vs-tacos-flywheel",
    title: "Module 35: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m36-acos-vs-tacos-flywheel",
    title: "Module 36: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m37-acos-vs-tacos-flywheel",
    title: "Module 37: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m38-acos-vs-tacos-flywheel",
    title: "Module 38: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m39-acos-vs-tacos-flywheel",
    title: "Module 39: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m40-acos-vs-tacos-flywheel",
    title: "Module 40: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m41-acos-vs-tacos-flywheel",
    title: "Module 41: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m42-acos-vs-tacos-flywheel",
    title: "Module 42: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m43-acos-vs-tacos-flywheel",
    title: "Module 43: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m44-acos-vs-tacos-flywheel",
    title: "Module 44: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m45-acos-vs-tacos-flywheel",
    title: "Module 45: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m46-acos-vs-tacos-flywheel",
    title: "Module 46: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m47-acos-vs-tacos-flywheel",
    title: "Module 47: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m48-acos-vs-tacos-flywheel",
    title: "Module 48: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m49-acos-vs-tacos-flywheel",
    title: "Module 49: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m50-acos-vs-tacos-flywheel",
    title: "Module 50: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m51-acos-vs-tacos-flywheel",
    title: "Module 51: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Summit Outdoor Gear (AMAZON ADS)",
    briefingSummary: "Director of E-Commerce Bradley Cooper is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Bradley Cooper",
      title: "Director of E-Commerce",
      organization: "Summit Outdoor Gear",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
    id: "amazon-ads-m52-acos-vs-tacos-flywheel",
    title: "Module 52: ACOS vs TACOS Organic Flywheel Alignment",
    subtitle: "Explain why pausing Amazon ads to save ACOS destroyed total organic sales rank.",
    category: "amazon-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "Zenith Health Foods (AMAZON ADS)",
    briefingSummary: "Amazon Brand Manager Samantha Wu is asking: \"Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon ACOS was at 32%, so I cut our ad budget by half to save margins. But now our total sales dropped by 60%! What happened?!",
    brokenKPIs: [
      {
        metric: "Total ACOS (TACOS)",
        previousValue: "11.5%",
        currentValue: "24.2%",
        deltaPercent: "+110.4%",
        isNegative: true,
        benchmark: "12.0%",
        rootCauseClues: [
          "Amazon Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Samantha Wu",
      title: "Amazon Brand Manager",
      organization: "Zenith Health Foods",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Amazon Ads",
        "Understanding Total ACOS (TACOS) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Cutting ad spend without considering downstream organic search BSR momentum.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Amazon Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Bradley, on Amazon ad velocity directly drives organic Best Seller Rank (BSR). When you cut advertising, you stopped sales velocity, causing Amazon algorithm to downgrade your organic search placement. We re-allocated budget to top-converting Sponsored Products exact keywords to restore organic rank within 5 days.",
      rootCauseAnalysis: "Primary root cause: Cutting ad spend without considering downstream organic search BSR momentum..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Bradley, bottom line up front: Amazon Ads fuel organic ranking momentum. Cutting ads caused our organic listing to drop from page 1 to page 3. We restored bids on exact winners to regain rank."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Amazon Ads technical jargon?\"",
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
